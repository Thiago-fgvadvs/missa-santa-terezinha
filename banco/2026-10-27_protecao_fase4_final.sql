-- Proteção da edição — FASE 4 (final). Rodar uns 7 dias depois da fase 3, com a equipe já usando o app novo.
-- Fecha a transição: a tabela passa a ser só leitura; toda gravação vai pelas funções missa_*.

drop policy if exists "missa_kv_transicao_ins" on public.missa_kv;
drop policy if exists "missa_kv_transicao_upd" on public.missa_kv;
revoke insert, update, delete, truncate on public.missa_kv from anon, authenticated;
delete from public.missa_kv where key = 'mt_pin';
