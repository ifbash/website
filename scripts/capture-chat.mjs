// Capture the chat widget in its open state.
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000/work', { waitUntil: 'networkidle0', timeout: 90000 });
await new Promise(r => setTimeout(r, 3000));

const btn = await page.$('button[aria-label="Chat with ifBash"]');
if (btn) {
  await btn.click();
  await new Promise(r => setTimeout(r, 1500));
  const widget = await page.$('.fixed.right-4');
  if (widget) {
    await widget.screenshot({ path: 'public/images/screenshots/demo-chat-widget.png' });
    console.log('captured demo-chat-widget');
  } else console.log('MISS widget container');
} else console.log('MISS toggle');

await browser.close();
