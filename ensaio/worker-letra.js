// Worker: transcreve a letra cantada (Whisper, MIT) no próprio aparelho via Transformers.js (Apache-2.0).
// Recebe a VOZ já separada, em 16 kHz mono; devolve as palavras com o tempo de cada uma. Nada é enviado.
// Transformers.js 4.3.0 vem da CDN oficial (fixado; mesmo arquivo do npm, conferido por SHA-256). O Safari não
// importa módulo de outro domínio dentro de worker em página isolada: a página baixa e entrega como blob (d.lib).
// Os arquivos do ONNX Runtime correspondentes ficam aqui em ./tjs/.
let pipeline = null, env = null;
async function carregarLib(lib) {
  if (pipeline) return;
  ({ pipeline, env } = await import(lib));
  env.allowLocalModels = false;
  env.backends.onnx.wasm.wasmPaths = new URL("./tjs/", import.meta.url).href;
  env.backends.onnx.wasm.numThreads = self.crossOriginIsolated ? Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 2) - 1)) : 1;
}

let asr = null, asrId = null;

self.onmessage = async (e) => {
  const { type, id, ...d } = e.data;
  try {
    if (type === "init") {
      self.postMessage({ id, type, isolated: !!self.crossOriginIsolated });
    } else if (type === "load") {
      if (asr && asrId === d.model) { self.postMessage({ id, type, ms: 0 }); return; }
      const t = performance.now();
      await carregarLib(d.lib);
      const arquivos = {};
      asr = await pipeline("automatic-speech-recognition", d.model, {
        dtype: d.dtype || "q8", device: "wasm",
        progress_callback: (p) => {
          if (p.status === "progress" && p.file) { arquivos[p.file] = { got: p.loaded || 0, total: p.total || 0 }; const v = Object.values(arquivos); self.postMessage({ type: "progress", ev: { fase: "baixando", got: v.reduce((a, b) => a + b.got, 0), total: v.reduce((a, b) => a + b.total, 0) } }); }
        },
      });
      asrId = d.model;
      self.postMessage({ id, type, ms: performance.now() - t });
    } else if (type === "transcrever") {
      const t = performance.now();
      // voz separada costuma vir baixa: normaliza o volume (pico em 0,9) para o Whisper não "alucinar"
      const a = d.audio; let pk = 0; for (let i = 0; i < a.length; i++) { const v = Math.abs(a[i]); if (v > pk) pk = v; }
      if (pk > 1e-4) { const g = 0.9 / pk; for (let i = 0; i < a.length; i++) a[i] *= g; }
      const LANG = { portuguese: "pt", english: "en", spanish: "es" };
      // transcreve em janelas de 30 s (passo de 28 s) para poder mostrar o andamento; as palavras repetidas na
      // sobreposição de 2 s são descartadas pelo tempo
      const SRW = 16000, JAN = 30 * SRW, PASSO = 28 * SRW, partes = Math.max(1, Math.ceil(Math.max(0, a.length - (JAN - PASSO)) / PASSO));
      const palavras = []; let texto = "", fimAnt = -1;
      for (let i = 0; i < partes; i++) {
        const ini = i * PASSO, pedaco = a.subarray(ini, Math.min(a.length, ini + JAN)), off = ini / SRW;
        if (pedaco.length > SRW * 0.5) {
          const out = await asr(pedaco, { language: LANG[d.lang] || d.lang || "pt", task: "transcribe", return_timestamps: "word", no_repeat_ngram_size: 3, repetition_penalty: 1.15 });
          for (const c of out.chunks || []) {
            const s = off + c.timestamp[0], e = off + (c.timestamp[1] == null ? c.timestamp[0] + 0.3 : c.timestamp[1]);
            if (s < fimAnt - 0.2) continue;
            palavras.push({ w: c.text, s, e }); texto += c.text; fimAnt = e;
          }
        }
        self.postMessage({ type: "progress", ev: { fase: "transcrevendo", parte: i + 1, total: partes } });
      }
      self.postMessage({ id, type, texto, palavras, ms: performance.now() - t });
    }
  } catch (err) {
    self.postMessage({ id, type: "error", error: err && err.message ? err.message : String(err) });
  }
};
