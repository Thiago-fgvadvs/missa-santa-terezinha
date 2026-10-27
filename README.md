# Repertório da Missa — Paróquia Santa Terezinha

Site estático (HTML + React compilado) com banco no Supabase (sincronização em tempo real para a equipe de música).
Hospedagem: Vercel. Cifras: 774 do "Louvemos o Senhor" servidas em /cifras + 119 do Google Drive (visualizador embutido).

Independente do app do Bolão da Copa (projeto Supabase/repos separados).

## Código-fonte e compilação

O código editável fica em `fonte/app.jsx`. O `app.js` da raiz é gerado a partir dele — não edite o `app.js` à mão.

```bash
cd fonte
npm install
npm run compilar   # gera ../app.js (esbuild, ES2017, minificado)
```

Depois de compilar, aumente o número de versão em `index.html` (`app.js?v=N`) para o celular não usar a cópia antiga.
`fonte/` não é enviada para a Vercel (`.vercelignore`).
