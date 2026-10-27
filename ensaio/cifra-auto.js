// Cifra automática: detecta acordes no instrumental (cromagrama + modelos de acorde + suavização de Viterbi)
// e coloca cada acorde acima da palavra cantada naquele instante. Sem modelo de IA: leve e determinístico.
// Resultado é um RASCUNHO para revisão humana.

const NOTAS_S = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const NOTAS_B = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

// FFT radix-2 in-place (re, im: Float64Array de tamanho potência de 2)
function fft(re, im) {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) { let bit = n >> 1; for (; j & bit; bit >>= 1) j ^= bit; j ^= bit; if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; } }
  for (let len = 2; len <= n; len <<= 1) {
    const ang = -2 * Math.PI / len, wr = Math.cos(ang), wi = Math.sin(ang);
    for (let i = 0; i < n; i += len) {
      let cr = 1, ci = 0;
      for (let k = 0; k < len / 2; k++) {
        const a = i + k, b = a + len / 2, tr = re[b] * cr - im[b] * ci, ti = re[b] * ci + im[b] * cr;
        re[b] = re[a] - tr; im[b] = im[a] - ti; re[a] += tr; im[a] += ti;
        const ncr = cr * wr - ci * wi; ci = cr * wi + ci * wr; cr = ncr;
      }
    }
  }
}

// Cromagrama: 12 classes de nota por quadro (≈0,19 s)
export function cromagrama(L, R, sr) {
  const fator = Math.max(1, Math.round(sr / 11025)), srd = sr / fator;     // reduz para ~11 kHz
  const n = Math.floor(L.length / fator), x = new Float32Array(n);
  for (let i = 0; i < n; i++) { let s = 0; for (let k = 0; k < fator; k++) s += L[i * fator + k] + R[i * fator + k]; x[i] = s / (2 * fator); }
  const N = 4096, HOP = 2048, han = new Float64Array(N); for (let i = 0; i < N; i++) han[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / (N - 1));
  const bins = []; for (let k = 1; k < N / 2; k++) { const f = k * srd / N; if (f < 55 || f > 1760) continue; const midi = 69 + 12 * Math.log2(f / 440); bins.push([k, ((Math.round(midi) % 12) + 12) % 12]); }
  const quadros = [], energia = [], re = new Float64Array(N), im = new Float64Array(N);
  for (let ini = 0; ini + N <= n; ini += HOP) {
    for (let i = 0; i < N; i++) { re[i] = x[ini + i] * han[i]; im[i] = 0; }
    fft(re, im);
    const c = new Float64Array(12); let en = 0;
    for (const [k, pc] of bins) { const m = Math.sqrt(re[k] * re[k] + im[k] * im[k]); c[pc] += m; en += m; }
    // realça as notas dominantes do quadro (relativo ao máximo), depois normaliza
    const mx = Math.max(...c) || 1; for (let p = 0; p < 12; p++) c[p] = (c[p] / mx) ** 2;
    const nrm = Math.hypot(...c) || 1; for (let p = 0; p < 12; p++) c[p] /= nrm;
    quadros.push(c); energia.push(en);
  }
  return { quadros, energia, dt: HOP / srd };
}

// Tom provável (perfis de Krumhansl)
const MAIOR = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
const MENOR = [6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];
function corr(a, b) { const ma = a.reduce((s, v) => s + v, 0) / 12, mb = b.reduce((s, v) => s + v, 0) / 12; let n = 0, da = 0, db = 0; for (let i = 0; i < 12; i++) { n += (a[i] - ma) * (b[i] - mb); da += (a[i] - ma) ** 2; db += (b[i] - mb) ** 2; } return n / Math.sqrt(da * db || 1); }
export function tom(quadros) {
  const tot = new Array(12).fill(0); for (const c of quadros) for (let p = 0; p < 12; p++) tot[p] += c[p];
  let best = { r: 0, menor: false, v: -2 };
  for (let r = 0; r < 12; r++) { const rot = (perf) => tot.map((_, i) => perf[((i - r) % 12 + 12) % 12]); const a = corr(tot, rot(MAIOR)), b = corr(tot, rot(MENOR)); if (a > best.v) best = { r, menor: false, v: a }; if (b > best.v) best = { r, menor: true, v: b }; }
  const bemois = best.menor ? [5, 10, 3, 8, 0, 7, 2].includes(best.r) : [5, 10, 3, 8, 1, 6].includes(best.r);
  return { raiz: best.r, menor: best.menor, nomes: bemois ? NOTAS_B : NOTAS_S, nome: (bemois ? NOTAS_B : NOTAS_S)[best.r] + (best.menor ? "m" : "") };
}

// Acordes: 24 modelos (maior/menor) + "sem acorde"; Viterbi favorece permanecer no mesmo acorde
export function acordes(crom, opts = {}) {
  const { quadros, energia, dt } = crom, nQ = quadros.length; if (!nQ) return [];
  const K = 25, tpl = [];
  for (let r = 0; r < 12; r++) for (const [t3, nome] of [[4, ""], [3, "m"]]) { const v = new Float64Array(12); v[r] = 1; v[(r + t3) % 12] = 0.8; v[(r + 7) % 12] = 0.8; const nr = Math.hypot(...v); tpl.push({ r, nome, v: v.map(x => x / nr) }); }
  const eMed = energia.slice().sort((a, b) => a - b)[Math.floor(nQ * 0.5)] || 1;
  const emis = (q, k) => { if (k === 24) return energia[q] < eMed * 0.15 ? 2 : -2; let s = 0; for (let p = 0; p < 12; p++) s += quadros[q][p] * tpl[k].v[p]; return (energia[q] < eMed * 0.15 ? -2 : 0) + 12 * s; };
  const ficar = Math.log(opts.ficar || 0.9), trocar = Math.log((1 - (opts.ficar || 0.9)) / (K - 1));
  let ant = new Float64Array(K); for (let k = 0; k < K; k++) ant[k] = emis(0, k);
  const volta = Array.from({ length: nQ }, () => new Int16Array(K));
  for (let q = 1; q < nQ; q++) {
    let mx = -Infinity, mk = 0; for (let k = 0; k < K; k++) if (ant[k] > mx) { mx = ant[k]; mk = k; }
    const cur = new Float64Array(K);
    for (let k = 0; k < K; k++) { const a = ant[k] + ficar, b = mx + trocar; if (a >= b) { cur[k] = a; volta[q][k] = k; } else { cur[k] = b; volta[q][k] = mk; } cur[k] += emis(q, k); }
    ant = cur;
  }
  let k = 0; for (let j = 1; j < K; j++) if (ant[j] > ant[k]) k = j;
  const cam = new Int16Array(nQ); for (let q = nQ - 1; q >= 0; q--) { cam[q] = k; k = volta[q][k]; }
  const segs = []; for (let q = 0; q < nQ; q++) { const c = cam[q]; if (segs.length && segs[segs.length - 1].k === c) segs[segs.length - 1].fim = (q + 1) * dt; else segs.push({ k: c, ini: q * dt, fim: (q + 1) * dt }); }
  // junta pedaços curtos (< 0,7 s) ao vizinho
  for (let i = 0; i < segs.length; i++) if (segs[i].fim - segs[i].ini < 0.7 && segs.length > 1) { const v = i > 0 ? i - 1 : i + 1; segs[v].ini = Math.min(segs[v].ini, segs[i].ini); segs[v].fim = Math.max(segs[v].fim, segs[i].fim); segs.splice(i, 1); i = Math.max(-1, i - 2); }
  const t = tom(quadros);
  const out = []; for (const s of segs) { if (s.k === 24) continue; const nome = t.nomes[tpl[s.k].r] + tpl[s.k].nome; if (out.length && out[out.length - 1].nome === nome) { out[out.length - 1].fim = s.fim; continue; } out.push({ nome, ini: s.ini, fim: s.fim }); }
  return { acordes: out, tom: t.nome };
}

// Monta a cifra: linhas de letra (pela pausa entre palavras) com os acordes acima da palavra cantada no instante
export function montarCifra(palavras, lista, opts = {}) {
  const maxCh = opts.maxCh || 38, pausa = opts.pausa || 0.75;
  const linhas = []; let cur = null;
  for (const p of palavras) {
    const w = String(p.w || "").trim(); if (!w) continue;
    if (!cur || p.s - cur.fim > pausa || (cur.txt.length + w.length + 1 > maxCh)) { cur = { ini: p.s, fim: p.e, txt: "", pos: [] }; linhas.push(cur); }
    if (cur.txt) cur.txt += " ";
    cur.pos.push({ col: cur.txt.length, s: p.s, e: p.e }); cur.txt += w; cur.fim = p.e;
  }
  const saida = []; let k = 0;
  const instrumental = (ate) => { const nomes = []; while (k < lista.length && lista[k].ini < ate - 0.2) { nomes.push(lista[k].nome); k++; } if (nomes.length) saida.push(nomes.join("   ")); return nomes.length > 0; };
  for (const ln of linhas) {
    const tocou = instrumental(ln.ini - 0.3);   // acordes antes do canto (introdução / entre estrofes)
    let acima = ""; const pos = [];
    // o acorde que já soava quando a linha começa (se não acabou de ser escrito na linha anterior)
    if (k > 0 && lista[k - 1].fim > ln.ini + 0.3 && !tocou && !(ln.pos.length && k < lista.length && lista[k].ini <= ln.pos[0].s + 0.15)) pos.push({ col: 0, nome: lista[k - 1].nome });
    while (k < lista.length && lista[k].ini < ln.fim) {
      const a = lista[k]; let col = ln.pos[0].col;
      for (const q of ln.pos) { if (q.s <= a.ini + 0.15) col = q.col; else break; }
      pos.push({ col, nome: a.nome }); k++;
    }
    for (const p of pos) { let c = Math.max(p.col, acima.length ? acima.length + 1 : 0); acima = acima.padEnd(c, " ") + p.nome; }
    if (acima.trim()) saida.push(acima);
    saida.push(ln.txt);
  }
  instrumental(Infinity);
  return saida.join("\n");
}
