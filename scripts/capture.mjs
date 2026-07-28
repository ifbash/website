// Capture real ifBash product UI screenshots from the local dev server.
import puppeteer from 'puppeteer';
import fs from 'node:fs';

const BASE = 'http://localhost:3000';
const OUT = 'public/images/screenshots';
fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

async function open(path, settle = 3000) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle0', timeout: 90000 });
  await new Promise(r => setTimeout(r, settle));
  return page;
}

async function elShot(page, selector, name) {
  const el = await page.$(selector);
  if (!el) { console.log('MISS', selector, 'for', name); return false; }
  await el.screenshot({ path: `${OUT}/${name}.png` });
  console.log('captured', name);
  return true;
}

// 1. homepage hero — the voice orb + headline (viewport shot)
{
  const page = await open('/', 4000);
  await page.screenshot({ path: `${OUT}/hero-voice.png` });
  console.log('captured hero-voice');
  await page.close();
}

// 2. triage demo on /work
{
  const page = await open('/work');
  await elShot(page, '[data-demo="triage"]', 'demo-triage');
  await page.close();
}

// 3. workflow compare on /services/ai-agents
{
  const page = await open('/services/ai-agents');
  await elShot(page, '[data-demo="workflow"]', 'demo-workflow');
  await page.close();
}

// 4. cost calculator on /services/claude-ai-engineering
{
  const page = await open('/services/claude-ai-engineering');
  await elShot(page, '[data-demo="calculator"]', 'demo-calculator');
  await page.close();
}

// 5. chat widget open state (homepage, open the widget)
{
  const page = await open('/', 3000);
  const btn = await page.$('.fixed.right-4 button');
  if (btn) {
    await btn.click();
    await new Promise(r => setTimeout(r, 1200));
    const widget = await page.$('.fixed.right-4');
    if (widget) {
      await widget.screenshot({ path: `${OUT}/demo-chat-widget.png` });
      console.log('captured demo-chat-widget');
    } else console.log('MISS chat widget container');
  } else console.log('MISS chat toggle button');
  await page.close();
}

// 6. agent chat page (full interface)
{
  const page = await open('/agent', 3500);
  await page.screenshot({ path: `${OUT}/agent-chat.png` });
  console.log('captured agent-chat');
  await page.close();
}

await browser.close();
console.log('done');
