// Record the triage demo running: frame captures → animated WebP (a real product clip).
import puppeteer from 'puppeteer';
import fs from 'node:fs';

const FRAMES = 'public/images/screenshots/frames-triage';
fs.rmSync(FRAMES, { recursive: true, force: true });
fs.mkdirSync(FRAMES, { recursive: true });

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1.5 });
await page.goto('http://localhost:3000/work', { waitUntil: 'networkidle0', timeout: 90000 });
// the demo persists its last run — clear it so the clip shows the full arc
await page.evaluate(() => { localStorage.clear(); sessionStorage.clear(); });
await page.reload({ waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 3000));
await page.evaluate(() => document.querySelector('[data-demo="triage"]')?.scrollIntoView({ block: 'center' }));
await new Promise(r => setTimeout(r, 1500));

const el = await page.$('[data-demo="triage"]');
let n = 0;
const snap = async () => { await el.screenshot({ path: `${FRAMES}/f${String(n++).padStart(3, '0')}.png` }); };

await snap(); // idle state

// run a COLD sample (the API caches by ticket text — first chip is warm by now)
const chips = await page.$$('[data-demo="triage"] button');
let chip = null;
for (const b of chips) {
  const t = await b.evaluate(x => x.textContent || '');
  if (t.includes('Ambiguous and angry')) { chip = b; break; }
}
if (!chip) chip = chips[0];
await chip.click();
await new Promise(r => setTimeout(r, 700));
await snap();

const buttons = await page.$$('[data-demo="triage"] button');
let runBtn = null;
for (const b of buttons) {
  const t = await b.evaluate(x => x.textContent || '');
  if (t.includes('Triage it')) { runBtn = b; break; }
}
if (!runBtn) throw new Error('Triage button not found');
await runBtn.click();

// capture while it works, until done (max 40s)
const t0 = Date.now();
while (Date.now() - t0 < 40000) {
  await new Promise(r => setTimeout(r, 500));
  await snap();
  const busy = await page.evaluate(() =>
    [...document.querySelectorAll('[data-demo="triage"] button')].some(b => b.textContent.includes('Triaging')));
  if (!busy && n > 4) break;
}
// hold on the result
for (let i = 0; i < 5; i++) { await new Promise(r => setTimeout(r, 400)); await snap(); }

await browser.close();
console.log('frames:', n);
