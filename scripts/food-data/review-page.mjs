// Builds out/review.html from out/review.json (run build.mjs first).
//   node scripts/food-data/review-page.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const review = JSON.parse(fs.readFileSync(path.join(here, 'out/review.json'), 'utf8'));

// Compact the data: dedupe statuses and reasons into tables.
const statuses = [];
const reasons = [];
const sIdx = new Map();
const rIdx = new Map();
const si = (s) => { if (!sIdx.has(s)) { sIdx.set(s, statuses.length); statuses.push(s); } return sIdx.get(s); };
const ri = (text, src) => {
  const k = `${text}|${src.join(',')}`;
  if (!rIdx.has(k)) { rIdx.set(k, reasons.length); reasons.push([text, src.join(',')]); }
  return rIdx.get(k);
};
const rows = review.rows.map((r) => [
  r.type, r.category, r.item, r.added ? 1 : 0,
  review.animals.map((a) => {
    const c = r.cells[a];
    return [si(c.status), ri(c.reason, c.sources), c.low ? 1 : 0, c.old == null ? -1 : si(c.old)];
  }),
]);
const data = {
  animals: review.animals, statuses, reasons, rows,
  sources: review.sources, stats: review.stats, removed: review.removed,
  generated: review.generated.slice(0, 10),
};

const html = fs.readFileSync(path.join(here, 'review-template.html'), 'utf8')
  .replace('__DATA__', JSON.stringify(data).replace(/</g, '\\u003c'));
fs.writeFileSync(path.join(here, 'out/review.html'), html);
console.log(`out/review.html ${(html.length / 1024).toFixed(0)} KB`);
