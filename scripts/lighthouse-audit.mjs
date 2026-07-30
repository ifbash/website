// Lighthouse run over the routes that matter commercially.
//
// Reports Core Web Vitals and the four category scores, mobile and desktop.
// Kept separate from scripts/viewport-audit.mjs because Lighthouse is slow
// (~20s per run) and throttled — it answers "is this fast enough" rather than
// "is this laid out correctly", and it should not gate every push.
//
// Usage:  node scripts/lighthouse-audit.mjs            (mobile, key routes)
//         node scripts/lighthouse-audit.mjs --desktop
//         node scripts/lighthouse-audit.mjs --all      (more routes)
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

const BASE = process.env.AUDIT_BASE || 'http://localhost:3000';
const DESKTOP = process.argv.includes('--desktop');
const ALL = process.argv.includes('--all');

// The homepage carries the heaviest client payload (voice agent, hero showcase,
// framer-motion), so it is the worst case rather than a representative one.
const ROUTES = ALL
  ? ['/', '/services', '/services/servicenow-implementation', '/portfolio/it-service-management',
     '/industries/banking-financial-services', '/insights', '/trust', '/work', '/agent', '/ar']
  : ['/', '/services/servicenow-implementation', '/insights', '/trust'];

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

const rows = [];
for (const route of ROUTES) {
  const result = await lighthouse(`${BASE}${route}`, {
    port: new URL(browser.wsEndpoint()).port,
    output: 'json',
    logLevel: 'error',
    formFactor: DESKTOP ? 'desktop' : 'mobile',
    screenEmulation: DESKTOP
      ? { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }
      : { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75, disabled: false },
    throttling: DESKTOP
      ? { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 }
      : { rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4 },
  });

  const lhr = result.lhr;
  const cat = (k) => Math.round((lhr.categories[k]?.score ?? 0) * 100);
  const metric = (k) => lhr.audits[k]?.numericValue ?? null;

  rows.push({
    route,
    perf: cat('performance'),
    a11y: cat('accessibility'),
    bp: cat('best-practices'),
    seo: cat('seo'),
    lcp: metric('largest-contentful-paint'),
    cls: metric('cumulative-layout-shift'),
    tbt: metric('total-blocking-time'),
    // Opportunities worth a human look, biggest first.
    top: Object.values(lhr.audits)
      .filter((a) => a.details?.type === 'opportunity' && (a.numericValue ?? 0) > 100)
      .sort((a, b) => (b.numericValue ?? 0) - (a.numericValue ?? 0))
      .slice(0, 3)
      .map((a) => `${a.title} (~${Math.round(a.numericValue)}ms)`),
    fails: Object.values(lhr.audits)
      .filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode === 'binary')
      .map((a) => a.id)
      .slice(0, 6),
  });
}

await browser.close();

const f = (v, unit) => (v === null ? '—' : unit === 'ms' ? `${Math.round(v)}ms` : v.toFixed(3));
console.log(`\n${DESKTOP ? 'DESKTOP' : 'MOBILE'} — Lighthouse\n`);
console.log('route                                     perf  a11y  bp   seo   LCP      CLS     TBT');
for (const r of rows) {
  console.log(
    r.route.padEnd(42) +
      String(r.perf).padEnd(6) + String(r.a11y).padEnd(6) +
      String(r.bp).padEnd(5) + String(r.seo).padEnd(6) +
      f(r.lcp, 'ms').padEnd(9) + f(r.cls).padEnd(8) + f(r.tbt, 'ms'),
  );
}

// Core Web Vitals thresholds: LCP <= 2500ms good, CLS <= 0.1, TBT <= 200ms
console.log('\nCore Web Vitals verdict (good / needs work / poor):');
for (const r of rows) {
  const v = [];
  if (r.lcp !== null) v.push(`LCP ${r.lcp <= 2500 ? 'good' : r.lcp <= 4000 ? 'needs work' : 'POOR'}`);
  if (r.cls !== null) v.push(`CLS ${r.cls <= 0.1 ? 'good' : r.cls <= 0.25 ? 'needs work' : 'POOR'}`);
  if (r.tbt !== null) v.push(`TBT ${r.tbt <= 200 ? 'good' : r.tbt <= 600 ? 'needs work' : 'POOR'}`);
  console.log(`  ${r.route.padEnd(42)} ${v.join('   ')}`);
}

const withIssues = rows.filter((r) => r.top.length || r.fails.length);
if (withIssues.length) {
  console.log('\nOpportunities and failed audits:');
  for (const r of withIssues) {
    console.log(`  ${r.route}`);
    for (const t of r.top) console.log(`      opportunity: ${t}`);
    if (r.fails.length) console.log(`      failed: ${r.fails.join(', ')}`);
  }
}
console.log('');
