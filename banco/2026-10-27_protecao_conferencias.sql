-- Conferências do roteiro (só leitura; não mostram a senha)

-- Depois da fase 1: o cofre tem exatamente 1 senha e ela bate com o mt_pin atual
select (select count(*) from public.missa_segredo) as senhas_no_cofre,
       (select extensions.crypt(k.value #>> '{}', s.pin_hash) = s.pin_hash
          from public.missa_kv k, public.missa_segredo s where k.key = 'mt_pin') as cofre_igual_ao_mt_pin;

-- Antes da fase 3: repetir a consulta acima (se alguém trocou a senha pelo app antigo, cofre_igual_ao_mt_pin = false)

-- Depois da fase 3/4: quem pode o quê na tabela
select policyname, cmd, roles, qual, with_check from pg_policies where schemaname = 'public' and tablename = 'missa_kv';
select grantee, string_agg(privilege_type, ',' order by privilege_type) from information_schema.role_table_grants
where table_schema = 'public' and table_name = 'missa_kv' and grantee in ('anon', 'authenticated') group by grantee;

-- Uso: gravações e tentativas recentes (sem conteúdo)
select key, com_senha, count(*), max(gravado_em) from public.missa_kv_hist group by 1, 2 order by 1, 2;
select ok, count(*), max(em) from public.missa_tentativa where em > now() - interval '7 days' group by ok;
