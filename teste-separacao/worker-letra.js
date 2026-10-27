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
    if (type === "load") {
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
      const out = await asr(a, { language: LANG[d.lang] || d.lang || "pt", task: "transcribe", return_timestamps: "word", chunk_length_s: 30, stride_length_s: 5, no_repeat_ngram_size: 3, repetition_penalty: 1.15 });
      const palavras = (out.chunks || []).map(c => ({ w: c.text, s: c.timestamp[0], e: c.timestamp[1] == null ? c.timestamp[0] + 0.3 : c.timestamp[1] }));
      self.postMessage({ id, type, texto: out.text, palavras, ms: performance.now() - t });
    }
  } catch (err) {
    self.postMessage({ id, type: "error", error: err && err.message ? err.message : String(err) });
  }
};
