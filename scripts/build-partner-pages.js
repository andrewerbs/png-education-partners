#!/usr/bin/env node
/**
 * build-partner-pages.js
 *
 * Reads ../partners.js and emits one HTML profile page per partner to ../partners/<id>.html.
 *
 * Each profile page mirrors the layout of a PDF profile page (cover band → about →
 * coordination → programs → provinces → focus areas → strategic value → footer)
 * and shares the editorial style of the landing page.
 *
 * Usage:
 *   node scripts/build-partner-pages.js               # build all 24
 *   node scripts/build-partner-pages.js --category=Bilateral   # filter
 *   node scripts/build-partner-pages.js australia-dfat         # one by id
 */

const fs   = require("fs");
const path = require("path");

// ---- Load the partner data (CommonJS-shim the const-only file) ----
const dataSrc = fs.readFileSync(path.join(__dirname, "..", "partners.js"), "utf8");
const sandbox = { exports: {} };
new Function("module", "exports", dataSrc + "\nmodule.exports={PARTNERS,PROVINCES,FOCUS_AREAS};")
  .call(sandbox, sandbox, sandbox.exports);
const { PARTNERS, PROVINCES } = sandbox.exports;

// ---- CLI args ----
const args = process.argv.slice(2);
const idFilter = args.find(a => !a.startsWith("--"));
const catFilter = (args.find(a => a.startsWith("--category=")) || "").split("=")[1];

let queue = PARTNERS.slice();
if (idFilter)  queue = queue.filter(p => p.id === idFilter);
if (catFilter) queue = queue.filter(p => p.category === catFilter);

if (queue.length === 0) {
  console.error("No partners matched.");
  process.exit(1);
}

// ---- helpers ----
const esc = s => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const provincesDisplay = p => p.provinces.includes("all")
  ? "All 22 provinces + National Capital District"
  : p.provinces.join(" · ");

function categoryColor(cat) {
  return ({
    "Bilateral":     "var(--png-blue)",
    "Multilateral":  "var(--png-blue-soft)",
    "Implementing":  "var(--png-yellow-dk)",
  })[cat] || "var(--png-blue)";
}

// Adjacent partners in the same category for prev/next nav
function neighbors(p) {
  const peers = PARTNERS.filter(x => x.category === p.category);
  const idx = peers.findIndex(x => x.id === p.id);
  return {
    prev: idx > 0 ? peers[idx - 1] : peers[peers.length - 1],
    next: idx < peers.length - 1 ? peers[idx + 1] : peers[0],
  };
}

// ---- template ----
function render(p) {
  const { prev, next } = neighbors(p);

  const programs = p.programs.map(prog => `
    <article class="program">
      <h3 class="program-name">${esc(prog.name)}</h3>
      ${prog.funding ? `<div class="program-funding">${esc(prog.funding)}</div>` : ""}
      <p class="program-desc">${esc(prog.desc)}</p>
    </article>
  `).join("");

  // Coordination supports two shapes: legacy string[] or {name, description}[]
  const coordList = p.coordination.map(c => {
    if (typeof c === "string") return `<li><strong>${esc(c)}</strong></li>`;
    return c.description
      ? `<li><strong>${esc(c.name)}</strong> <span>— ${esc(c.description)}</span></li>`
      : `<li><strong>${esc(c.name)}</strong></li>`;
  }).join("");
  // Strategic supports two shapes: legacy string[] or {title, detail}[]
  const strategicList = (p.strategic || []).map(s => {
    if (typeof s === "string") return `<li><strong>${esc(s)}</strong></li>`;
    return s.detail
      ? `<li><strong>${esc(s.title)}</strong><br><span>${esc(s.detail)}</span></li>`
      : `<li><strong>${esc(s.title)}</strong></li>`;
  }).join("");

  const provinceChips = (p.provinces.includes("all") ? ["All 22 provinces + NCD"] : p.provinces)
    .map(pv => `<span class="chip chip-province">${esc(pv)}</span>`).join("");

  const focusChips = p.focusAreas
    .map(fa => `<span class="chip chip-focus">${esc(fa)}</span>`).join("");

  const partnerSince = p.partnerSince ? `Partner since ${p.partnerSince}` : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(p.name)} — PNG Education Partnership Mapping 2025</title>
<meta name="description" content="${esc(p.name)} (${esc(p.category)} partner, ${esc(p.orgType)}). ${esc(p.about.slice(0, 160))}">
<link rel="canonical" href="https://andrewerbs.github.io/png-education-partners/partners/${p.id}.html">
<meta property="og:title" content="${esc(p.name)} — PNG Education Partnership Mapping 2025">
<meta property="og:description" content="${esc(p.about.slice(0, 200))}">
<meta property="og:type" content="article">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<!-- Privacy-friendly analytics by Plausible -->
<script async src="https://plausible.io/js/pa-7jAFbbsjrVWZqflBPBv7b.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>
<style>
:root {
  --png-blue:        #1a4d8c;
  --png-blue-dark:   #0e3563;
  --png-blue-deep:   #082348;
  --png-blue-soft:   #2b6cb0;
  --png-yellow:      #f5c518;
  --png-yellow-dk:   #d9a800;
  --paper:           #fbfaf6;
  --ink:             #16213a;
  --ink-soft:        #3a4863;
  --muted:           #5e6b85;
  --line:            #e3e6ee;
  --max:             1080px;
  --cat-accent:      ${categoryColor(p.category)};
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: var(--ink); background: var(--paper); line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }

/* === NAV (matches landing) === */
nav.top {
  position: sticky; top: 0; z-index: 50;
  background: rgba(8,35,72,.96); backdrop-filter: blur(8px);
  border-bottom: 2px solid var(--png-yellow);
}
.nav-inner {
  max-width: 1180px; margin: 0 auto;
  padding: 14px 32px;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}
.nav-brand { color: white; font-weight: 700; font-size: 13px;
  display: flex; align-items: center; gap: 12px; letter-spacing: 0.02em;}
.nav-brand .crest { width: 32px; height: 32px; border-radius: 4px;
  background: var(--png-yellow); color: var(--png-blue-deep);
  display: grid; place-items: center; font-size: 13px; font-weight: 900;}
.nav-brand .org { font-weight: 500; opacity: 0.72;
  border-left: 1px solid rgba(255,255,255,.2); padding-left: 12px;
  font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.07em;}
.nav-links { display: flex; gap: 24px; font-size: 12px; font-weight: 600;
  color: rgba(255,255,255,.78); text-transform: uppercase; letter-spacing: 0.05em;}
.nav-links a:hover { color: var(--png-yellow); }
.nav-cta { background: var(--png-yellow); color: var(--png-blue-deep);
  padding: 9px 16px; border-radius: 4px; font-size: 12px; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.15s; }
.nav-cta:hover { background: white; }

/* === PROFILE COVER BAND (mirrors PDF profile header) === */
.cover {
  background: linear-gradient(135deg, var(--png-blue-deep) 0%, var(--png-blue) 60%, var(--png-blue-dark) 100%);
  color: white; position: relative; overflow: hidden;
}
.cover::after {
  content: ""; position: absolute; inset: 0; opacity: .07;
  background-image:
    repeating-linear-gradient( 45deg, white 0 1px, transparent 1px 22px),
    repeating-linear-gradient(-45deg, white 0 1px, transparent 1px 22px);
  pointer-events: none;
}
.cover-inner {
  position: relative; max-width: var(--max); margin: 0 auto;
  padding: 56px 32px 44px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
}
.cover-text { min-width: 0; }
.cover-logo {
  flex-shrink: 0;
  max-width: 260px;
  max-height: 160px;
  width: auto; height: auto;
  display: block;
  border-radius: 4px;
  mix-blend-mode: normal;
}
@media (max-width: 720px) {
  .cover-inner { grid-template-columns: 1fr; gap: 20px; }
  .cover-logo { max-width: 180px; max-height: 120px; justify-self: start; }
}
.breadcrumb {
  font-size: 11px; font-weight: 700; color: rgba(255,255,255,.6);
  text-transform: uppercase; letter-spacing: 0.12em;
  margin-bottom: 24px;
}
.breadcrumb a { color: var(--png-yellow); }
.breadcrumb a:hover { text-decoration: underline; }
.breadcrumb .sep { margin: 0 8px; opacity: 0.4; }
.partner-cat-tag {
  display: inline-block; padding: 4px 12px; border-radius: 3px;
  background: var(--png-yellow); color: var(--png-blue-deep);
  font-size: 11px; font-weight: 800; letter-spacing: 0.06em;
  text-transform: uppercase; margin-bottom: 18px;
}
.cover h1 {
  font-size: clamp(36px, 5.5vw, 60px); font-weight: 900;
  color: var(--png-yellow); letter-spacing: -0.02em;
  line-height: 1.05; text-transform: uppercase;
}
.cover-meta {
  margin-top: 18px;
  display: flex; flex-wrap: wrap; gap: 8px 22px;
  font-size: 13px; color: rgba(255,255,255,.85);
}
.cover-meta dt { font-weight: 700; color: var(--png-yellow);
  text-transform: uppercase; letter-spacing: 0.06em; font-size: 11px;
  display: inline-block; margin-right: 6px;}
.cover-meta dd { display: inline; }
.cover-meta .item { display: inline-flex; align-items: baseline; gap: 6px;}

/* === BODY === */
.body { max-width: var(--max); margin: 0 auto; padding: 56px 32px 96px; }

.s-block { margin-bottom: 56px; }
.s-block:last-child { margin-bottom: 0; }
.s-title {
  font-size: 12px; font-weight: 800; color: var(--png-blue);
  text-transform: uppercase; letter-spacing: 0.12em;
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 18px;
}
.s-title::before {
  content: ""; width: 28px; height: 2px; background: var(--png-yellow);
}

.about {
  font-size: 17px; line-height: 1.7; color: var(--ink-soft);
  max-width: 760px;
}

/* Coordination as styled list */
.coord-list { list-style: none; display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 12px 24px; }
.coord-list li {
  position: relative; padding-left: 26px;
  font-size: 14px; color: var(--ink-soft); line-height: 1.55;
}
.coord-list li::before {
  content: ""; position: absolute; left: 0; top: 10px;
  width: 14px; height: 2px; background: var(--png-yellow);
}
.coord-list strong { color: var(--ink); font-weight: 700; }
.coord-list span { color: var(--muted); }

/* Program cards in two-column grid like the PDF */
.program-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 24px 32px;
}
.program {
  padding: 18px 22px;
  background: white;
  border: 1px solid var(--line);
  border-left: 4px solid var(--png-blue);
  border-radius: 0 6px 6px 0;
}
.program-name {
  font-size: 15px; font-weight: 800;
  color: var(--png-blue); letter-spacing: -0.005em;
}
.program-funding {
  font-size: 12px; font-weight: 700; color: var(--png-blue-dark);
  margin-top: 6px;
  padding: 4px 9px; background: rgba(245,197,24,.18);
  display: inline-block; border-radius: 3px;
}
.program-desc {
  font-size: 13.5px; color: var(--ink-soft); line-height: 1.6;
  margin-top: 10px;
}

/* Chips for provinces & focus areas */
.chip-row { display: flex; flex-wrap: wrap; gap: 6px; }
.chip {
  font-size: 12px; font-weight: 600;
  padding: 5px 12px; border-radius: 999px;
  border: 1px solid var(--line); background: white;
}
.chip-province { color: var(--png-blue-dark);
  background: rgba(26,77,140,.06); border-color: rgba(26,77,140,.18); }
.chip-focus { color: var(--png-yellow-dk);
  background: rgba(245,197,24,.14); border-color: rgba(245,197,24,.32); }

/* Strategic value list */
.strategic-list {
  list-style: none; counter-reset: sv;
  display: grid; gap: 14px;
}
.strategic-list li {
  counter-increment: sv;
  padding: 14px 18px 14px 56px;
  position: relative;
  background: white; border: 1px solid var(--line);
  border-radius: 6px;
}
.strategic-list li::before {
  content: counter(sv, decimal-leading-zero);
  position: absolute; left: 18px; top: 14px;
  font-size: 14px; font-weight: 900;
  color: var(--png-yellow-dk);
  letter-spacing: -0.02em;
}
.strategic-list strong {
  font-size: 14.5px; color: var(--ink); font-weight: 800;
  letter-spacing: -0.005em;
}
.strategic-list span {
  display: block; font-size: 13px; color: var(--muted);
  line-height: 1.55; margin-top: 4px;
}

/* Pager (prev/next within category) */
.pager {
  margin-top: 64px; padding-top: 24px;
  border-top: 1px solid var(--line);
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
}
.pager a {
  display: block; padding: 16px 20px;
  background: white; border: 1px solid var(--line);
  border-radius: 6px;
  transition: all 0.15s;
}
.pager a:hover { border-color: var(--png-blue); transform: translateY(-1px); }
.pager .pager-label {
  font-size: 11px; font-weight: 700; color: var(--muted);
  text-transform: uppercase; letter-spacing: 0.08em;
}
.pager .pager-name {
  font-size: 15px; font-weight: 700; color: var(--png-blue-dark);
  margin-top: 4px;
}
.pager .next { text-align: right; }

/* Footer band (mirrors PDF footer note) */
.footnote {
  margin: 48px 0 0; padding: 18px 0 0;
  border-top: 1px dashed var(--line);
  font-size: 11.5px; color: var(--muted); font-style: italic;
  text-align: center;
}

footer.site {
  background: var(--png-blue-deep); color: rgba(255,255,255,.78);
  padding: 36px 32px; font-size: 12px; text-align: center;
}
footer.site a { color: var(--png-yellow); }

/* Responsive */
@media (max-width: 800px) {
  .nav-links { display: none; }
  .program-grid { grid-template-columns: 1fr; }
  .body { padding: 40px 22px 64px; }
  .cover-inner { padding: 40px 22px 32px; }
  .pager { grid-template-columns: 1fr; }
}
</style>
</head>
<body>

<nav class="top">
  <div class="nav-inner">
    <a class="nav-brand" href="../index.html">
      <span class="crest">PG</span>
      <span>Education Partnership Mapping</span>
      <span class="org">National Department of Education</span>
    </a>
    <div class="nav-links">
      <a href="../index.html">Home</a>
      <a href="../dashboard.html">Dashboard</a>
      <a href="../dashboard.html#view-geo">Provinces</a>
    </div>
    <a href="../dashboard.html" class="nav-cta">Open Dashboard →</a>
  </div>
</nav>

<header class="cover">
  <div class="cover-inner">
    <div class="cover-text">
      <div class="breadcrumb">
        <a href="../index.html">Mapping</a>
        <span class="sep">›</span>
        <a href="../dashboard.html?category=${encodeURIComponent(p.category)}">${esc(p.category)} Partners</a>
        <span class="sep">›</span>
        <span>${esc(p.name)}</span>
      </div>
      <span class="partner-cat-tag">${esc(p.category)} Partner</span>
      <h1>${esc(p.name)}</h1>
      <div class="cover-meta">
        <span class="item"><dt>Organisation Type</dt><dd>${esc(p.orgType)}</dd></span>
        <span class="item"><dt>Role</dt><dd>${esc(p.role)}</dd></span>
        ${partnerSince ? `<span class="item"><dt>${esc(partnerSince)}</dt></span>` : ""}
        ${p.flagshipFunding ? `<span class="item"><dt>Flagship</dt><dd>${esc(p.flagshipFunding)}</dd></span>` : ""}
      </div>
    </div>
    ${p.logo ? `<img src="../${esc(p.logo)}" alt="${esc(p.name)} logo" class="cover-logo">` : ""}
  </div>
</header>

<main class="body">

  <section class="s-block">
    <h2 class="s-title">About</h2>
    <p class="about">${esc(p.about)}</p>
  </section>

  <section class="s-block">
    <h2 class="s-title">Coordination Mechanisms</h2>
    <ul class="coord-list">${coordList}</ul>
  </section>

  <section class="s-block">
    <h2 class="s-title">Major Programs &amp; Projects <span style="color:var(--muted); font-weight:600; letter-spacing:0; text-transform:none; margin-left:8px;">(${p.programs.length})</span></h2>
    <div class="program-grid">${programs}</div>
  </section>

  <section class="s-block">
    <h2 class="s-title">Provincial Coverage</h2>
    <div class="chip-row">${provinceChips}</div>
  </section>

  <section class="s-block">
    <h2 class="s-title">NEP-Aligned Focus Areas</h2>
    <div class="chip-row">${focusChips}</div>
  </section>

  ${p.strategic && p.strategic.length ? `
  <section class="s-block">
    <h2 class="s-title">Strategic Value</h2>
    <ul class="strategic-list">${strategicList}</ul>
  </section>` : ""}

  <p class="footnote">Profile compiled from NDoE 2025 Partnership Mapping Survey and program documentation.</p>

  <nav class="pager" aria-label="More ${esc(p.category)} partners">
    <a href="${prev.id}.html" class="prev">
      <div class="pager-label">← Previous ${esc(p.category)}</div>
      <div class="pager-name">${esc(prev.name)}</div>
    </a>
    <a href="${next.id}.html" class="next">
      <div class="pager-label">Next ${esc(p.category)} →</div>
      <div class="pager-name">${esc(next.name)}</div>
    </a>
  </nav>

</main>

<footer class="site">
  Education Partnership Mapping 2025 — Endorsed Final Report ·
  Compiled by the Project Management &amp; Aid Coordination Division ·
  <a href="https://www.education.gov.pg" target="_blank" rel="noopener">education.gov.pg</a>
</footer>

</body>
</html>
`;
}

// ---- write files ----
const outDir = path.join(__dirname, "..", "partners");
fs.mkdirSync(outDir, { recursive: true });

let written = 0;
queue.forEach(p => {
  const html = render(p);
  const outPath = path.join(outDir, `${p.id}.html`);
  fs.writeFileSync(outPath, html, "utf8");
  console.log(`✓ ${p.category.padEnd(13)} → partners/${p.id}.html  (${(html.length / 1024).toFixed(1)}KB, ${p.programs.length} programs)`);
  written++;
});

console.log(`\n${written} page${written === 1 ? "" : "s"} written.`);
