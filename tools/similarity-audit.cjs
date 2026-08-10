const fs = require('fs');
const path = require('path');

const root = path.join('src', 'pages');
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(p);
    } else if (entry.isFile() && p.endsWith('.astro')) {
      files.push(p);
    }
  }
}

function clean(content) {
  let c = content.replace(/^---[\s\S]*?---/, ' ');
  c = c.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  c = c.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  c = c.replace(/<[^>]+>/g, ' ');
  c = c.replace(/\{[^}]*\}/g, ' ');
  c = c.toLowerCase();
  c = c.replace(/[^a-z0-9\s]/g, ' ');
  c = c.replace(/\s+/g, ' ').trim();
  return c;
}

function tokenSet(text) {
  const stop = new Set([
    'the', 'and', 'for', 'with', 'that', 'this', 'from', 'your', 'you', 'our',
    'are', 'was', 'were', 'have', 'has', 'had', 'can', 'will', 'not', 'but',
    'all', 'any', 'get', 'set', 'into', 'out', 'about', 'when', 'what', 'why',
    'how', 'who', 'where', 'while', 'near', 'than', 'then', 'also', 'call',
    'now', 'page'
  ]);

  const tokens = text.split(' ').filter((w) => w.length > 2 && !stop.has(w));
  return new Set(tokens);
}

walk(root);

const docs = files
  .map((f) => {
    const raw = fs.readFileSync(f, 'utf8');
    const txt = clean(raw);
    return { file: f.replace(/\\/g, '/'), tokens: tokenSet(txt) };
  })
  .filter((d) => d.tokens.size > 20);

const sims = [];
const topPairs = [];
let sum = 0;
let pairs = 0;

for (let i = 0; i < docs.length; i++) {
  for (let j = i + 1; j < docs.length; j++) {
    const a = docs[i].tokens;
    const b = docs[j].tokens;

    let inter = 0;
    for (const word of a) {
      if (b.has(word)) inter++;
    }

    const union = a.size + b.size - inter;
    const sim = union ? inter / union : 0;

    sims.push(sim);
    sum += sim;
    pairs++;

    if (topPairs.length < 25 || sim > topPairs[topPairs.length - 1].sim) {
      topPairs.push({ a: docs[i].file, b: docs[j].file, sim });
      topPairs.sort((x, y) => y.sim - x.sim);
      if (topPairs.length > 25) topPairs.pop();
    }
  }
}

sims.sort((x, y) => x - y);

function pct(x) {
  return `${(x * 100).toFixed(2)}%`;
}

function quantile(p) {
  if (!sims.length) return 0;
  const idx = Math.floor((sims.length - 1) * p);
  return sims[idx];
}

function countGte(t) {
  let c = 0;
  for (const s of sims) {
    if (s >= t) c++;
  }
  return c;
}

const report = {
  filesAnalyzed: docs.length,
  pairs,
  avg: sum / pairs,
  median: quantile(0.5),
  p75: quantile(0.75),
  p90: quantile(0.9),
  p95: quantile(0.95),
  thresholds: {
    gte20: countGte(0.2),
    gte30: countGte(0.3),
    gte40: countGte(0.4),
    gte50: countGte(0.5),
    gte60: countGte(0.6),
    gte70: countGte(0.7)
  },
  topPairs: topPairs.slice(0, 10)
};

const lines = [];
lines.push(`FILES_ANALYZED=${report.filesAnalyzed}`);
lines.push(`PAIRS=${report.pairs}`);
lines.push(`AVG_PAIRWISE_SIMILARITY=${pct(report.avg)}`);
lines.push(`MEDIAN_SIMILARITY=${pct(report.median)}`);
lines.push(`P75_SIMILARITY=${pct(report.p75)}`);
lines.push(`P90_SIMILARITY=${pct(report.p90)}`);
lines.push(`P95_SIMILARITY=${pct(report.p95)}`);

for (const [k, v] of Object.entries(report.thresholds)) {
  lines.push(`${k.toUpperCase()}=${v} (${pct(v / report.pairs)})`);
}

lines.push('TOP_SIMILAR_PAIRS:');
report.topPairs.forEach((r, idx) => {
  lines.push(`${String(idx + 1).padStart(2, '0')}. ${pct(r.sim)} ${r.a} | ${r.b}`);
});

const outPath = path.join('similarity-audit-results.txt');
fs.writeFileSync(outPath, lines.join('\n'));

console.log(lines.join('\n'));