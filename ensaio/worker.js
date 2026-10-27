// Worker: separa a música com o HT-Demucs (ONNX) no próprio aparelho, via ONNX Runtime Web (processador).
// Nada é salvo: o áudio chega em memória, é separado e devolvido.
let ort = null;
async function carregarOrt() {   // só processador: a versão para placa gráfica não roda estes modelos
  ort = await import("./ort/ort.wasm.min.mjs");
  ort.env.wasm.wasmPaths = new URL("./ort/", import.meta.url).href;
  ort.env.wasm.numThreads = nThreads();
}
const nThreads = () => (self.crossOriginIsolated ? Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 2) - 1)) : 1);

const SR = 44100;
const N = Math.round(7.8 * SR);      // o modelo recebe blocos fixos de 7,8 s (1, 2, 343980)
const OVERLAP = Math.floor(N / 4);
const STRIDE = N - OVERLAP;

let session = null;

function janela(seg, ov) { const w = new Float32Array(seg).fill(1); for (let i = 0; i < ov; i++) { w[i] = i / ov; w[seg - 1 - i] = i / ov; } return w; }

self.onmessage = async (e) => {
  const { type, id, ...d } = e.data;
  try {
    if (type === "init") {
      self.postMessage({ id, type, threads: nThreads(), isolated: !!self.crossOriginIsolated });
    } else if (type === "load") {
      const t = performance.now();
      if (session) { try { await session.release(); } catch (e) {} session = null; }
      if (!ort) await carregarOrt();
      // otimização desligada: a "basic" dobra a memória ao preparar e estoura o limite do Safari
      session = await ort.InferenceSession.create(d.modelBytes, { executionProviders: ["wasm"], graphOptimizationLevel: d.opt || "disabled", enableCpuMemArena: !!d.arena, enableMemPattern: !!d.arena });
      self.postMessage({ id, type, ms: performance.now() - t });
    } else if (type === "separate") {
      if (!session) throw new Error("modelo não carregado");
      const L = d.left, R = d.right, total = L.length, rows = d.rows;   // rows: índices das faixas pedidas
      const nChunks = Math.max(1, Math.ceil(total / STRIDE));
      const out = rows.map(() => [new Float32Array(total), new Float32Array(total)]), peso = new Float32Array(total);
      const w = janela(N, OVERLAP), buf = new Float32Array(2 * N);
      const inName = session.inputNames[0], outName = session.outputNames[0];
      for (let i = 0; i < nChunks; i++) {
        const t = performance.now();
        const ini = i * STRIDE, fim = Math.min(ini + N, total), len = fim - ini;
        buf.fill(0); buf.set(L.subarray(ini, fim), 0); buf.set(R.subarray(ini, fim), N);
        const res = await session.run({ [inName]: new ort.Tensor("float32", buf, [1, 2, N]) });
        const tensor = res[outName], st = tensor.data;
        rows.forEach((row, j) => { const off = row * 2 * N, [oL, oR] = out[j]; for (let s = 0; s < len; s++) { const k = w[s]; oL[ini + s] += st[off + s] * k; oR[ini + s] += st[off + N + s] * k; } });
        for (let s = 0; s < len; s++) peso[ini + s] += w[s];
        tensor.dispose && tensor.dispose();
        self.postMessage({ type: "progress", ev: { bloco: i + 1, total: nChunks, ms: Math.round(performance.now() - t), faixas: tensor.dims ? tensor.dims[1] : null } });
      }
      for (const [oL, oR] of out) for (let s = 0; s < total; s++) { const p = Math.max(peso[s], 1e-8); oL[s] /= p; oR[s] /= p; }
      // d.inst: devolve também o instrumental (= original − primeira faixa), calculado aqui sobre a própria entrada,
      // para a página não precisar guardar uma cópia da música inteira (economiza memória no celular)
      if (d.inst) { const [vL, vR] = out[0]; for (let s = 0; s < total; s++) { L[s] -= vL[s]; R[s] -= vR[s]; } out.push([L, R]); }
      const flat = out.flat();
      self.postMessage({ id, type, stems: flat }, { transfer: flat.map(a => a.buffer) });
    }
  } catch (err) {
    self.postMessage({ id, type: "error", error: err && err.message ? err.message : String(err) });
  }
};
