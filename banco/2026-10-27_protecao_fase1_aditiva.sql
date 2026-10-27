-- Proteção da edição — FASE 1 (aditiva: não quebra o site atual)
-- Cria o cofre da senha, as sessões de edição, o freio de tentativas, o histórico e as funções de gravação.
-- A tabela missa_kv continua aberta até a FASE 3; o app antigo segue funcionando.

-- 1) Cofre da senha: só o hash bcrypt; sem policy => invisível para anon/authenticated
create table if not exists public.missa_segredo (
  id int primary key default 1 check (id = 1),
  pin_hash text not null,
  atualizado_em timestamptz not null default now()
);

-- 2) Sessões de edição (o aparelho guarda o token; o banco guarda só o SHA-256 dele)
create table if not exists public.missa_sessao (
  token_hash text primary key,
  criado_em timestamptz not null default now(),
  expira_em timestamptz not null
);

-- 3) Tentativas de senha (freio contra adivinhação). origem = SHA-256 do IP (não guarda o IP).
create table if not exists public.missa_tentativa (
  id bigserial primary key,
  em timestamptz not null default now(),
  ok boolean not null,
  origem text not null default ''
);
create index if not exists missa_tentativa_em_idx on public.missa_tentativa (em);

-- 4) Histórico de gravações (permite desfazer vandalismo ou edição perdida)
create table if not exists public.missa_kv_hist (
  id bigserial primary key,
  key text not null,
  value jsonb,
  gravado_em timestamptz not null default now(),
  com_senha boolean not null
);
create index if not exists missa_kv_hist_key_idx on public.missa_kv_hist (key, id desc);

alter table public.missa_segredo   enable row level security;
alter table public.missa_sessao    enable row level security;
alter table public.missa_tentativa enable row level security;
alter table public.missa_kv_hist   enable row level security;
revoke all on public.missa_segredo, public.missa_sessao, public.missa_tentativa, public.missa_kv_hist from anon, authenticated;
revoke all on sequence public.missa_tentativa_id_seq, public.missa_kv_hist_id_seq from anon, authenticated;

-- 5) Senha atual: migra o PIN que hoje está exposto em missa_kv('mt_pin') para hash.
--    Ele já é público: trocar pelo app logo depois da fase 3 é passo OBRIGATÓRIO do roteiro.
--    A senha nunca é criada pelo app; se não houver mt_pin, criar por SQL (ver roteiro).
insert into public.missa_segredo (id, pin_hash)
select 1, extensions.crypt(value #>> '{}', extensions.gen_salt('bf', 10))
from public.missa_kv
where key = 'mt_pin' and coalesce(value #>> '{}', '') <> ''
on conflict (id) do nothing;

-- ===================== Funções internas =====================
create or replace function public._missa_sessao_ok(p_token text)
returns boolean language sql stable security definer set search_path = '' as $$
  select coalesce(p_token, '') <> '' and exists (
    select 1 from public.missa_sessao
    where token_hash = encode(extensions.digest(p_token, 'sha256'), 'hex') and expira_em > now()
  );
$$;

create or replace function public._missa_nova_sessao()
returns text language plpgsql volatile security definer set search_path = '' as $$
declare v_token text := encode(extensions.gen_random_bytes(32), 'hex');
begin
  delete from public.missa_sessao where expira_em <= now();
  insert into public.missa_sessao (token_hash, expira_em)
  values (encode(extensions.digest(v_token, 'sha256'), 'hex'), now() + interval '180 days');
  return v_token;
end $$;

-- Origem do pedido (IP do visitante, como informado pelo gateway do Supabase), guardada só como hash
create or replace function public._missa_origem()
returns text language plpgsql stable security definer set search_path = '' as $$
declare v_h json; v_ip text;
begin
  begin v_h := nullif(current_setting('request.headers', true), '')::json; exception when others then v_h := null; end;
  v_ip := btrim(coalesce(v_h ->> 'cf-connecting-ip', split_part(coalesce(v_h ->> 'x-forwarded-for', ''), ',', 1), ''));
  return encode(extensions.digest(coalesce(nullif(v_ip, ''), 'sem-ip'), 'sha256'), 'hex');
end $$;

-- Freio: por origem, 10 senhas erradas a cada 15 min; no total, 200 erradas por hora.
-- O cadeado serializa as tentativas, para uma rajada paralela não furar a contagem.
create or replace function public._missa_bloqueado(p_origem text)
returns boolean language plpgsql volatile security definer set search_path = '' as $$
begin
  perform pg_advisory_xact_lock(hashtext('missa_tentativa'));
  return (select count(*) >= 10 from public.missa_tentativa where not ok and origem = p_origem and em > now() - interval '15 minutes')
      or (select count(*) >= 200 from public.missa_tentativa where not ok and em > now() - interval '1 hour');
end $$;

-- ===================== Funções chamadas pelo app =====================
create or replace function public.missa_tem_senha()
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.missa_segredo);
$$;

create or replace function public.missa_sessao_valida(p_token text)
returns boolean language sql stable security definer set search_path = '' as $$
  select public._missa_sessao_ok(p_token);
$$;

-- Entrar no modo edição (a senha nunca é criada por aqui)
create or replace function public.missa_entrar(p_pin text)
returns jsonb language plpgsql volatile security definer set search_path = '' as $$
declare v_hash text; v_pin text := btrim(coalesce(p_pin, '')); v_origem text := public._missa_origem();
begin
  if public._missa_bloqueado(v_origem) then
    return jsonb_build_object('ok', false, 'erro', 'Muitas tentativas erradas. Aguarde 15 minutos.');
  end if;
  select pin_hash into v_hash from public.missa_segredo where id = 1;
  if v_hash is null then
    return jsonb_build_object('ok', false, 'erro', 'A senha de edição ainda não foi configurada. Fale com o responsável.');
  end if;
  if v_pin <> '' and extensions.crypt(v_pin, v_hash) = v_hash then
    insert into public.missa_tentativa (ok, origem) values (true, v_origem);
    return jsonb_build_object('ok', true, 'token', public._missa_nova_sessao());
  end if;
  insert into public.missa_tentativa (ok, origem) values (false, v_origem);
  delete from public.missa_tentativa where em < now() - interval '30 days';
  return jsonb_build_object('ok', false, 'erro', 'Senha incorreta.');
end $$;

create or replace function public.missa_sair(p_token text)
returns void language sql volatile security definer set search_path = '' as $$
  delete from public.missa_sessao where token_hash = encode(extensions.digest(coalesce(p_token, ''), 'sha256'), 'hex');
$$;

-- Troca a senha: exige sessão válida + senha atual. Derruba todas as sessões e devolve uma nova.
create or replace function public.missa_trocar_senha(p_token text, p_atual text, p_nova text)
returns jsonb language plpgsql volatile security definer set search_path = '' as $$
declare v_hash text; v_nova text := btrim(coalesce(p_nova, '')); v_origem text := public._missa_origem();
begin
  if not public._missa_sessao_ok(p_token) then
    return jsonb_build_object('ok', false, 'erro', 'Sessão de edição expirada. Entre de novo.', 'sessao', false);
  end if;
  if public._missa_bloqueado(v_origem) then
    return jsonb_build_object('ok', false, 'erro', 'Muitas tentativas erradas. Aguarde 15 minutos.');
  end if;
  select pin_hash into v_hash from public.missa_segredo where id = 1 for update;
  if v_hash is null or extensions.crypt(btrim(coalesce(p_atual, '')), v_hash) <> v_hash then
    insert into public.missa_tentativa (ok, origem) values (false, v_origem);
    return jsonb_build_object('ok', false, 'erro', 'Senha atual incorreta.');
  end if;
  if length(v_nova) < 8 then
    return jsonb_build_object('ok', false, 'erro', 'A nova senha precisa de ao menos 8 caracteres.');
  end if;
  update public.missa_segredo set pin_hash = extensions.crypt(v_nova, extensions.gen_salt('bf', 10)), atualizado_em = now() where id = 1;
  delete from public.missa_sessao where true;  -- todos os aparelhos precisam entrar com a senha nova
  return jsonb_build_object('ok', true, 'token', public._missa_nova_sessao());
end $$;

-- Grava um bloco do app. Chaves "abertas" podem ser gravadas sem senha
-- (hoje qualquer pessoa da equipe monta a missa e ajusta a fonte padrão sem senha).
create or replace function public.missa_gravar(p_token text, p_key text, p_value jsonb)
returns jsonb language plpgsql volatile security definer set search_path = '' as $$
declare
  v_abertas constant text[] := array['mt_masses','mt_settings'];
  v_tipo text; v_max int;
  v_com_senha boolean := public._missa_sessao_ok(p_token);
begin
  -- formato e tamanho máximo esperados de cada bloco
  select t, m into v_tipo, v_max from (values
    ('mt_over','object',2000000), ('mt_added','array',2000000), ('mt_teams','array',100000),
    ('mt_masses','object',500000), ('mt_settings','object',4000), ('mt_seedV','number',100)
  ) as x(k, t, m) where k = p_key;
  if v_tipo is null then
    return jsonb_build_object('ok', false, 'erro', 'Bloco não permitido.');
  end if;
  if not v_com_senha and not (p_key = any (v_abertas)) then
    return jsonb_build_object('ok', false, 'erro', 'Entre no modo edição (senha) para salvar.', 'sessao', false);
  end if;
  if p_value is null or jsonb_typeof(p_value) <> v_tipo or octet_length(p_value::text) > v_max then
    return jsonb_build_object('ok', false, 'erro', 'Conteúdo inválido ou grande demais.');
  end if;
  insert into public.missa_kv (key, value, updated_at) values (p_key, p_value, now())
  on conflict (key) do update set value = excluded.value, updated_at = excluded.updated_at;
  insert into public.missa_kv_hist (key, value, com_senha) values (p_key, p_value, v_com_senha);
  -- Retenção: as 200 versões mais recentes de cada bloco + a primeira versão de cada dia dos últimos 60 dias
  -- (uma enxurrada de gravações não apaga os pontos de restauração diários).
  delete from public.missa_kv_hist h
  where h.key = p_key
    and h.id <= coalesce((select id from public.missa_kv_hist where key = p_key order by id desc offset 200 limit 1), 0)
    and not (h.gravado_em > now() - interval '60 days' and h.id = (
      select min(d.id) from public.missa_kv_hist d
      where d.key = p_key and d.gravado_em::date = h.gravado_em::date));
  return jsonb_build_object('ok', true);
end $$;

-- Permissões: só as funções públicas podem ser chamadas pelo app
revoke all on function public._missa_sessao_ok(text), public._missa_nova_sessao(), public._missa_origem(),
  public._missa_bloqueado(text), public.missa_tem_senha(), public.missa_sessao_valida(text), public.missa_entrar(text),
  public.missa_sair(text), public.missa_trocar_senha(text, text, text), public.missa_gravar(text, text, jsonb)
  from public, anon, authenticated;
grant execute on function public.missa_tem_senha(), public.missa_sessao_valida(text), public.missa_entrar(text),
  public.missa_sair(text), public.missa_trocar_senha(text, text, text), public.missa_gravar(text, text, jsonb)
  to anon, authenticated;
