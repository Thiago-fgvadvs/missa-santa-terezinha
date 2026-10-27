-- Proteção da edição — FASE 3 (fechamento com transição). Rodar SÓ depois que o app novo estiver no ar e conferido.
-- Ninguém mais grava direto na tabela, EXCETO a montagem de missa e a fonte padrão, por alguns dias,
-- para quem ainda estiver com o app antigo aberto no celular não perder a missa em silêncio.

drop policy if exists "missa_kv_anon_all" on public.missa_kv;
drop policy if exists "missa_kv_leitura" on public.missa_kv;
drop policy if exists "missa_kv_transicao_ins" on public.missa_kv;
drop policy if exists "missa_kv_transicao_upd" on public.missa_kv;
create policy "missa_kv_leitura" on public.missa_kv for select to anon, authenticated using (true);
-- Transição (removida na fase 4): o app antigo ainda consegue salvar missas e a fonte padrão
create policy "missa_kv_transicao_ins" on public.missa_kv for insert to anon, authenticated
  with check (key in ('mt_masses', 'mt_settings'));
create policy "missa_kv_transicao_upd" on public.missa_kv for update to anon, authenticated
  using (key in ('mt_masses', 'mt_settings')) with check (key in ('mt_masses', 'mt_settings'));
revoke delete, truncate on public.missa_kv from anon, authenticated;

-- O PIN em texto aberto vira um valor aleatório (o app antigo deixa de liberar a edição e não oferece "Criar senha").
-- O hash da senha válida já está em missa_segredo desde a fase 1.
update public.missa_kv set value = to_jsonb(encode(extensions.gen_random_bytes(24), 'hex')), updated_at = now()
where key = 'mt_pin';
