// Capture the triage demo AFTER running a real sample through it.
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000/work', { waitUntil: 'networkidle0', timeout: 90000 });
await new Promise(r => setTimeout(r, 3000));

// scroll the demo into view first (scroll animations settle)
await page.evaluate(() => {
  document.querySelector('[data-demo="triage"]')?.scrollIntoView({ block: 'center' });
});
await new Promise(r => setTimeout(r, 1500));

// pick the first sample chip, then run triage
const chip = await page.$('[data-demo="triage"] button');
if (chip) {
  await chip.click();
  await new Promise(r => setTimeout(r, 800));
}
const runBtn = await page.evaluateHandle(() => {
  return [...document.querySelectorAll('[data-demo="triage"] button')]
    .find(b => b.textContent.includes('Triage it'));
});
if (runBtn && runBtn.asElement()) {
  await runBtn.asElement().click();
  // poll until the run finishes (button label returns / spinner clears), max 45s
  const t0 = Date.now();
  while (Date.now() - t0 < 45000) {
    await new Promise(r => setTimeout(r, 1500));
    const busy = await page.evaluate(() =>
      [...document.querySelectorAll('[data-demo="triage"] button')]
        .some(b => b.textContent.includes('Triaging')));
    if (!busy) break;
  }
  await new Promise(r => setTimeout(r, 1200));
}
const el = await page.$('[data-demo="triage"]');
await el.screenshot({ path: 'public/images/screenshots/demo-triage.png' });
console.log('captured demo-triage (with result)');
await browser.close();
