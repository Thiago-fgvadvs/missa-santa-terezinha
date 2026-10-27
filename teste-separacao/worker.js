// Worker: separa a voz com o HT-Demucs (ONNX) no próprio aparelho, via ONNX Runtime Web.
// Nada é salvo: o áudio chega em memória, é separado e devolvido.
// processador: versão "wasm" (conjunto completo de operações); placa gráfica: versão "webgpu"
let ort = null;
async function carregarOrt() { ort = await import("./ort/ort.wasm.min.mjs"); configurar(); }   // só processador: a versão para placa gráfica não roda este modelo
function configurar() {
  ort.env.wasm.wasmPaths = new URL("./ort/", import.meta.url).href;
  ort.env.wasm.numThreads = self.crossOriginIsolated ? Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 2) - 1)) : 1;
}
const nThreads = () => (self.crossOriginIsolated ? Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 2) - 1)) : 1);

const SR = 44100;
const N = Math.round(7.8 * SR);      // o modelo recebe blocos fixos de 7,8 s (1, 2, 343980)
const OVERLAP = Math.floor(N / 4);
const STRIDE = N - OVERLAP;
const VOCALS_ROW = 3;                // saída (1, 4, 2, N): drums, bass, other, vocals

let session = null, sessionEp = null;

function janela(seg, ov) { const w = new Float32Array(seg).fill(1); for (let i = 0; i < ov; i++) { w[i] = i / ov; w[seg - 1 - i] = i / ov; } return w; }

self.onmessage = async (e) => {
  const { type, id, ...d } = e.data;
  try {
    if (type === "init") {
      self.postMessage({ id, type, threads: nThreads(), isolated: !!self.crossOriginIsolated });
    } else if (type === "load") {
      const t = performance.now();
      if (session) { try { await session.release(); } catch (e) {} session = null; }
      if (!ort || sessionEp !== d.ep) await carregarOrt(d.ep);
      // Opções que reduzem a memória na preparação (celulares têm menos memória disponível para a página)
      const opts = { executionProviders: [d.ep], graphOptimizationLevel: d.opt || "disabled", enableCpuMemArena: !!d.arena, enableMemPattern: !!d.arena };
      session = await ort.InferenceSession.create(d.modelBytes, opts);
      sessionEp = d.ep;
      self.postMessage({ id, type, ms: performance.now() - t, inputs: session.inputNames, outputs: session.outputNames });
    } else if (type === "separate") {
      if (!session) throw new Error("modelo não carregado");
      const L = d.left, R = d.right, total = L.length;
      const nChunks = Math.max(1, Math.ceil(total / STRIDE));
      const vL = new Float32Array(total), vR = new Float32Array(total), peso = new Float32Array(total);
      const w = janela(N, OVERLAP), buf = new Float32Array(2 * N);
      const inName = session.inputNames[0], outName = session.outputNames[0];
      for (let i = 0; i < nChunks; i++) {
        const t = performance.now();
        const ini = i * STRIDE, fim = Math.min(ini + N, total), len = fim - ini;
        buf.fill(0); buf.set(L.subarray(ini, fim), 0); buf.set(R.subarray(ini, fim), N);
        const res = await session.run({ [inName]: new ort.Tensor("float32", buf, [1, 2, N]) });
        const out = res[outName], st = out.data, off = VOCALS_ROW * 2 * N;
        for (let s = 0; s < len; s++) { const k = w[s]; vL[ini + s] += st[off + s] * k; vR[ini + s] += st[off + N + s] * k; peso[ini + s] += k; }
        out.dispose && out.dispose();
        self.postMessage({ type: "progress", ev: { bloco: i + 1, total: nChunks, ms: Math.round(performance.now() - t), ep: sessionEp } });
      }
      for (let s = 0; s < total; s++) { const p = Math.max(peso[s], 1e-8); vL[s] /= p; vR[s] /= p; }
      self.postMessage({ id, type, vL, vR }, { transfer: [vL.buffer, vR.buffer] });
    }
  } catch (err) {
    self.postMessage({ id, type: "error", error: err && err.message ? err.message : String(err) });
  }
};
