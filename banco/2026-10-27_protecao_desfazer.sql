-- Desfaz a proteção (volta a tabela ao comportamento anterior: qualquer um grava). Use só em emergência.
-- O app novo continua funcionando com a tabela aberta. O app antigo precisaria do mt_pin original,
-- que não é recriado aqui (restaure do backup tirado antes da fase 3, se for o caso).

drop policy if exists "missa_kv_leitura" on public.missa_kv;
drop policy if exists "missa_kv_transicao_ins" on public.missa_kv;
drop policy if exists "missa_kv_transicao_upd" on public.missa_kv;
drop policy if exists "missa_kv_anon_all" on public.missa_kv;
create policy "missa_kv_anon_all" on public.missa_kv for all to anon, authenticated using (true) with check (true);
grant select, insert, update, delete on public.missa_kv to anon, authenticated;

-- As tabelas/funções da fase 1 podem ficar (não atrapalham). Para removê-las:
-- drop function if exists public.missa_gravar(text, text, jsonb), public.missa_trocar_senha(text, text, text),
--   public.missa_sair(text), public.missa_entrar(text), public.missa_sessao_valida(text), public.missa_tem_senha(),
--   public._missa_bloqueado(text), public._missa_origem(), public._missa_nova_sessao(), public._missa_sessao_ok(text);
-- drop table if exists public.missa_kv_hist, public.missa_tentativa, public.missa_sessao, public.missa_segredo;
