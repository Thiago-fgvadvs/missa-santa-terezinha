-- App da Missa (Paróquia Santa Terezinha) — projeto Supabase próprio, isolado do bolão.
-- Armazenamento estilo chave/valor, compartilhado entre a equipe (leitura/escrita pública por design, como o bolão).
create table if not exists public.missa_kv (
  key text primary key,
  value jsonb,
  updated_at timestamptz default now()
);
alter table public.missa_kv enable row level security;
drop policy if exists "missa_kv_anon_all" on public.missa_kv;
create policy "missa_kv_anon_all" on public.missa_kv for all to anon, authenticated using (true) with check (true);
-- Tempo real (sincroniza a equipe ao vivo)
do $$ begin
  alter publication supabase_realtime add table public.missa_kv;
exception when duplicate_object then null; end $$;
