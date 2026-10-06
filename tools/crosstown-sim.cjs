const fs = require('fs');
const path = require('path');

const root = path.join('dist', 'services');
const files = [];
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) {
      const ix = path.join(p, 'index.html');
      if (fs.existsSync(ix)) files.push(ix);
      walk(p);
    }
  }
}
walk(root);

function clean(c) {
  c = c.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  c = c.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  c = c.replace(/<[^>]+>/g, ' ');
  c = c.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  return c.replace(/\s+/g, ' ').trim();
}
const stop = new Set(['the','and','for','with','that','this','from','your','you','our','are','was','were','have','has','had','can','will','not','but','all','any','get','set','into','out','about','when','what','why','how','who','where','while','near','than','then','also','call','now','page']);

const docs = files.map((f) => ({
  f: f.replace(/\\/g, '/'),
  t: new Set(clean(fs.readFileSync(f, 'utf8')).split(' ').filter((w) => w.length > 2 && !stop.has(w))),
})).filter((d) => d.t.size > 20);

function key(f) { return f.replace('dist/services/', '').replace(/\/index\.html$/, ''); }
function parse(f) {
  const segs = key(f).split('/');
  const ci = segs.findIndex((s) => /-de$/.test(s));
  if (ci < 0) return null;
  return { city: segs[ci], service: segs.filter((_, i) => i !== ci).join('/') };
}
function sim(a, b) { let i = 0; for (const w of a) if (b.has(w)) i++; return i / (a.size + b.size - i); }

const parsed = docs.map((d) => ({ ...d, p: parse(d.f) })).filter((d) => d.p);
const pairs = [];
for (let i = 0; i < parsed.length; i++) {
  for (let j = i + 1; j < parsed.length; j++) {
    const A = parsed[i], B = parsed[j];
    if (A.p.service === B.p.service && A.p.city !== B.p.city) {
      pairs.push({ a: key(A.f), b: key(B.f), sim: sim(A.t, B.t) });
    }
  }
}
pairs.sort((x, y) => y.sim - x.sim);
const avg = pairs.reduce((s, p) => s + p.sim, 0) / pairs.length;
console.log('Same-service, different-town pairs:', pairs.length);
console.log('avg:', (100 * avg).toFixed(1) + '%', '| max:', (100 * pairs[0].sim).toFixed(0) + '%', '| min:', (100 * pairs[pairs.length - 1].sim).toFixed(0) + '%');
console.log('pairs >=60%:', pairs.filter((p) => p.sim >= 0.6).length, '| >=70%:', pairs.filter((p) => p.sim >= 0.7).length, '| >=80%:', pairs.filter((p) => p.sim >= 0.8).length);
console.log('Top 10 most similar same-service cross-town pairs:');
pairs.slice(0, 10).forEach((p) => console.log(' ', (100 * p.sim).toFixed(0) + '%', p.a, '<->', p.b));
