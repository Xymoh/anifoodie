// Cuts icons out of a generated sheet (or single images), removes the white background,
// and writes 236×236 transparent PNGs matching assets/products.
//   node scripts/food-data/cut-icons.cjs <image.png> <outDir> name@x0,y0,x1,y1 ...
const fs = require('fs');
const path = require('path');
const { PNG } = require(path.resolve(__dirname, '../../node_modules/pngjs'));

const SIZE = 236;
const FIT = 184; // longest side of the object inside the canvas, like the existing icons
const [src, outDir, ...jobs] = process.argv.slice(2);
const img = PNG.sync.read(fs.readFileSync(src));

const isBg = (d, i) => d[i] > 244 && d[i + 1] > 244 && d[i + 2] > 244;

function cut(x0, y0, x1, y1, allWhite) {
  const w = x1 - x0, h = y1 - y0;
  const d = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) img.data.copy(d, y * w * 4, ((y0 + y) * img.width + x0) * 4, ((y0 + y) * img.width + x1) * 4);
  // Flood-fill near-white from the edges → transparent.
  const bg = new Uint8Array(w * h);
  const stack = [];
  for (let x = 0; x < w; x++) stack.push(x, (h - 1) * w + x);
  for (let y = 0; y < h; y++) stack.push(y * w, y * w + w - 1);
  while (stack.length) {
    const p = stack.pop();
    if (bg[p] || !isBg(d, p * 4)) continue;
    bg[p] = 1;
    const x = p % w, y = (p / w) | 0;
    if (x > 0) stack.push(p - 1); if (x < w - 1) stack.push(p + 1);
    if (y > 0) stack.push(p - w); if (y < h - 1) stack.push(p + w);
  }
  // Icons with no white parts of their own (name ends in "!"): enclosed white is background too.
  if (allWhite) for (let p = 0; p < w * h; p++) if (isBg(d, p * 4)) bg[p] = 1;
  // Eat the light anti-aliasing halo: two passes of pale pixels touching the background.
  for (let pass = 0; pass < 2; pass++) {
    const grow = [];
    for (let p = 0; p < w * h; p++) {
      if (bg[p]) continue;
      const x = p % w, y = (p / w) | 0;
      const nearBg = (x > 0 && bg[p - 1]) || (x < w - 1 && bg[p + 1]) || (y > 0 && bg[p - w]) || (y < h - 1 && bg[p + w]);
      if (nearBg && Math.min(d[p * 4], d[p * 4 + 1], d[p * 4 + 2]) > 205) grow.push(p);
    }
    for (const p of grow) bg[p] = 1;
  }
  // Keep only the components touching the largest object area: drop specks (e.g., watermark) smaller than 0.5% of the object.
  const lab = new Int32Array(w * h).fill(-1); const sizes = [];
  for (let p = 0; p < w * h; p++) {
    if (bg[p] || lab[p] >= 0) continue;
    const id = sizes.length; let n = 0; const st = [p]; lab[p] = id;
    while (st.length) { const q = st.pop(); n++; const x = q % w, y = (q / w) | 0;
      for (const r of [x > 0 && q - 1, x < w - 1 && q + 1, y > 0 && q - w, y < h - 1 && q + w]) if (r !== false && !bg[r] && lab[r] < 0) { lab[r] = id; st.push(r); } }
    sizes.push(n);
  }
  const total = sizes.reduce((a, b) => a + b, 0);
  let bx0 = w, by0 = h, bx1 = 0, by1 = 0;
  for (let p = 0; p < w * h; p++) {
    if (bg[p] || sizes[lab[p]] < total * 0.005) { d[p * 4 + 3] = 0; continue; }
    // Soften the edge: pixels next to background get alpha from how far from white they are.
    const x = p % w, y = (p / w) | 0;
    const edge = (x > 0 && bg[p - 1]) || (x < w - 1 && bg[p + 1]) || (y > 0 && bg[p - w]) || (y < h - 1 && bg[p + w]);
    if (edge) { const m = Math.min(d[p * 4], d[p * 4 + 1], d[p * 4 + 2]); d[p * 4 + 3] = Math.max(60, Math.min(255, (255 - m) * 4)); }
    bx0 = Math.min(bx0, x); by0 = Math.min(by0, y); bx1 = Math.max(bx1, x); by1 = Math.max(by1, y);
  }
  return { d, w, bx0, by0, bx1, by1 };
}

function render({ d, w, bx0, by0, bx1, by1 }) {
  const ow = bx1 - bx0 + 1, oh = by1 - by0 + 1;
  const s = FIT / Math.max(ow, oh);
  const out = new PNG({ width: SIZE, height: SIZE });
  const ox = (SIZE - ow * s) / 2, oy = (SIZE - oh * s) / 2;
  // Bilinear sampling with premultiplied alpha.
  const at = (x, y, c) => { x = Math.max(0, Math.min(ow - 1, x)); y = Math.max(0, Math.min(oh - 1, y)); return d[((by0 + y) * w + bx0 + x) * 4 + c]; };
  for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) {
    const sx = (x + 0.5 - ox) / s - 0.5, sy = (y + 0.5 - oy) / s - 0.5;
    const o = (y * SIZE + x) * 4;
    if (sx < -1 || sy < -1 || sx > ow || sy > oh) continue;
    const xi = Math.floor(sx), yi = Math.floor(sy), fx = sx - xi, fy = sy - yi;
    let acc = [0, 0, 0, 0];
    for (const [dx, dy, wt] of [[0, 0, (1 - fx) * (1 - fy)], [1, 0, fx * (1 - fy)], [0, 1, (1 - fx) * fy], [1, 1, fx * fy]]) {
      const inside = xi + dx >= 0 && yi + dy >= 0 && xi + dx < ow && yi + dy < oh;
      const a = inside ? at(xi + dx, yi + dy, 3) / 255 : 0;
      for (let c = 0; c < 3; c++) acc[c] += at(xi + dx, yi + dy, c) * a * wt;
      acc[3] += a * wt;
    }
    if (acc[3] > 0) { for (let c = 0; c < 3; c++) out.data[o + c] = Math.round(acc[c] / acc[3]); out.data[o + 3] = Math.round(acc[3] * 255); }
  }
  return out;
}

fs.mkdirSync(outDir, { recursive: true });
for (const job of jobs) {
  const [rawName, box] = job.split('@');
  const allWhite = rawName.endsWith('!');
  const name = rawName.replace(/!$/, '');
  const [x0, y0, x1, y1] = box ? box.split(',').map(Number) : [0, 0, img.width, img.height];
  const out = render(cut(x0, y0, x1, y1, allWhite));
  fs.writeFileSync(path.join(outDir, `${name}.png`), PNG.sync.write(out));
  console.log(name);
}
