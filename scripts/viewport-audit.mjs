// Multi-viewport layout audit.
//
// WHY THIS EXISTS: the interactive browser session used to review this site
// could not resize its window — `innerWidth` stayed at 1536 and the `lg:`
// breakpoint stayed active no matter what, so every "mobile check" was silently
// still testing desktop. Puppeteer sets the viewport for real, so media queries
// actually evaluate at the width being tested.
//
// It asserts rather than just screenshotting, because a human skimming 40
// screenshots misses a 3px overflow and a machine does not.
//
// Usage:  node scripts/viewport-audit.mjs            (expects a server on :3000)
//         node scripts/viewport-audit.mjs --shots    (also writes PNGs)
import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.AUDIT_BASE || 'http://localhost:3000';
const SHOTS = process.argv.includes('--shots');
const OUT = path.join('.audit', 'viewport');

const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844, dsf: 2 },   // iPhone 14 class
  { name: 'tablet', width: 768, height: 1024, dsf: 2 },
  { name: 'laptop', width: 1280, height: 800, dsf: 1 },
];

// The pages changed this session, plus the two never reviewed visually.
const PAGES = [
  '/',
  '/trust',
  '/engage',
  '/portfolio/it-service-management',
  '/portfolio/app-engine',
  '/industries/banking-financial-services',
  '/industries/giga-projects',
  '/industries/public-sector-government',
  // All twelve service pages: each of the six ServiceNow ones renders a
  // different signature visual from components/site/service-visuals.tsx, and a
  // contrast or overflow bug in one visual is invisible from any other page.
  '/services',
  '/services/servicenow-implementation',
  '/services/managed-services-support',
  '/services/ai-automation',
  '/services/custom-apps',
  '/services/crm-customer-experience',
  '/services/digital-transformation',
  '/services/ai-agents',
  '/services/voice-agents',
  '/services/claude-ai-engineering',
  '/services/website-development',
  '/services/mobile-app-development',
  '/services/web-mobile-development',
  '/insights',
  // RTL must be audited separately: overflow escapes leftward into negative
  // coordinates there, so bugs invisible in LTR show up only on these routes.
  // A skip-link at left:-9999px added ~10,000px of scroll to every one of them.
  '/ar',
  '/ar/services',
  '/ar/work',
  '/ar/contactus',
];

if (SHOTS) fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

/**
 * Refuse to audit an unstyled page.
 *
 * A stale `next start` serving HTML that points at a CSS chunk from an older
 * build makes the stylesheet 404. The page then renders with almost no CSS, and
 * every image falls back to its width attribute — which this script dutifully
 * reports as catastrophic overflow on exactly the pages that contain large
 * images. That is a false positive that looks completely convincing, and it
 * cost a full debugging detour before being caught. So: prove Tailwind is live
 * before trusting a single measurement.
 */
{
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  const failed = [];
  page.on('response', (r) => {
    if (r.url().endsWith('.css') && r.status() >= 400) failed.push(`${r.url().split('/').pop()} → ${r.status()}`);
  });
  try {
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle2', timeout: 60000 });
  } catch (e) {
    console.error(`Cannot reach ${BASE} — is the server running?\n  ${e.message}`);
    process.exit(2);
  }
  const live = await page.evaluate(() => {
    // A <span> is inline by default; `block w-full` must change that. If it
    // doesn't, the utility layer is missing.
    const host = document.createElement('div');
    host.style.cssText = 'width:200px;position:absolute;left:-9999px';
    const probe = document.createElement('span');
    probe.className = 'block w-full';
    host.appendChild(probe);
    document.body.appendChild(host);
    const cs = getComputedStyle(probe);
    const utilities = cs.display === 'block' && cs.width === '200px';
    // Preflight must give images max-width:100%, or every large image overflows.
    const img = document.createElement('img');
    img.setAttribute('width', '4000');
    img.setAttribute('height', '3000');
    host.appendChild(img);
    const ics = getComputedStyle(img);
    const preflight = ics.maxWidth === '100%' && ics.display === 'block';
    host.remove();
    return { utilities, preflight, maxWidth: ics.maxWidth, display: ics.display };
  });
  await page.close();

  if (failed.length || !live.utilities || !live.preflight) {
    console.error('\nAborting: the page is not fully styled, so any layout finding would be noise.');
    if (failed.length) console.error(`  CSS failed to load: ${failed.join(', ')}`);
    if (!live.utilities) console.error('  Tailwind utility layer is NOT applying (.block/.w-full had no effect).');
    if (!live.preflight) console.error(`  Tailwind preflight is NOT applying (img max-width=${live.maxWidth}, display=${live.display}).`);
    console.error('\n  Usually a stale server: stop every `next start`/`next-server` process,');
    console.error('  delete .next, rebuild, start fresh, then re-run.');
    await browser.close();
    process.exit(2);
  }
  console.log('Precondition OK — utilities and preflight both live.');
}

const findings = [];
let checks = 0;

for (const vp of VIEWPORTS) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: vp.dsf });

  for (const route of PAGES) {
    let res;
    try {
      res = await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle2', timeout: 60000 });
    } catch (e) {
      findings.push({ vp: vp.name, route, kind: 'load-failed', detail: e.message.slice(0, 120) });
      continue;
    }
    if (res && res.status() >= 400) {
      findings.push({ vp: vp.name, route, kind: 'http-error', detail: `status ${res.status()}` });
      continue;
    }

    // Scroll the full page so IntersectionObserver-driven reveals fire; content
    // that only appears on scroll would otherwise measure as zero-height.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 250));
    });

    const report = await page.evaluate((vpWidth) => {
      const out = { overflow: null, wide: [], invisible: [], tinyTap: [], clipped: [], lowContrast: [] };

      // 1. Does the document scroll sideways? The headline responsive failure.
      const docW = document.documentElement.scrollWidth;
      if (docW > vpWidth + 1) out.overflow = { docScrollWidth: docW, viewport: vpWidth };

      const label = (el) => {
        const cls = (el.getAttribute('class') || '').slice(0, 60);
        const txt = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40);
        return `${el.tagName.toLowerCase()}${cls ? '.' + cls.split(/\s+/)[0] : ''} "${txt}"`;
      };

      // 2. Which elements are individually wider than the viewport? Skip things
      //    deliberately placed off-canvas (decorative blurs) and anything inside
      //    an intentional horizontal scroller.
      for (const el of document.querySelectorAll('body *')) {
        const cs = getComputedStyle(el);
        if (cs.position === 'absolute' || cs.position === 'fixed') continue;
        if (cs.display === 'none' || cs.visibility === 'hidden') continue;
        let scroller = false;
        for (let p = el.parentElement; p; p = p.parentElement) {
          const pcs = getComputedStyle(p);
          if (pcs.overflowX === 'auto' || pcs.overflowX === 'scroll') { scroller = true; break; }
        }
        if (scroller) continue;
        const r = el.getBoundingClientRect();
        if (r.width > vpWidth + 1) out.wide.push({ el: label(el), width: Math.round(r.width) });
      }
      out.wide = out.wide.slice(0, 5);

      // 3. Text that renders but is invisible — a reveal animation that never
      //    fired leaves opacity 0 forever, which looks like a blank section.
      for (const el of document.querySelectorAll('h1, h2, h3, p, dt, dd, li')) {
        const txt = (el.textContent || '').trim();
        if (txt.length < 12) continue;
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        if (r.height === 0) continue;
        if (parseFloat(cs.opacity) < 0.08) out.invisible.push({ el: label(el), opacity: cs.opacity });
      }
      out.invisible = out.invisible.slice(0, 5);

      // 4. Tap targets below the WCAG 2.2 AA minimum of 24x24 CSS px (SC 2.5.8).
      //    Skips visually-hidden controls (skip links etc.) — they are not tap
      //    targets until focused, at which point they size up.
      if (vpWidth <= 768) {
        for (const el of document.querySelectorAll('a, button')) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue;
          const cs = getComputedStyle(el);
          const hidden = (r.width <= 2 && r.height <= 2)
            || cs.clipPath === 'inset(50%)'
            || cs.clip === 'rect(0px, 0px, 0px, 0px)';
          if (hidden) continue;
          if (r.height < 24 || r.width < 24) {
            out.tinyTap.push({ el: label(el), h: Math.round(r.height), w: Math.round(r.width) });
          }
        }
        out.tinyTap = out.tinyTap.slice(0, 6);
      }

      // 5. Text below the WCAG AA contrast minimum (SC 1.4.3): 4.5:1 for normal
      //    text, 3:1 for large (>=24px, or >=18.66px bold). Measured from
      //    computed colours rather than trusted from a comment — tailwind.config
      //    documents `slate-faint` as "decorative only, below AA for copy" and it
      //    had still reached real prose in several places, including the
      //    truth-policy disclaimers.
      const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
      const lum = (rgb) => 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2]);
      const parse = (s) => {
        const m = /rgba?\(([^)]+)\)/.exec(s);
        if (!m) return null;
        const p = m[1].split(',').map((x) => parseFloat(x));
        if (p.length > 3 && p[3] < 0.95) return null; // translucent — can't judge reliably
        return [p[0], p[1], p[2]];
      };
      /**
       * Walk up for the first opaque background-color.
       *
       * Returns null — meaning "cannot judge, skip this element" — if a gradient
       * or image sits between the text and that colour. getComputedStyle reports
       * backgroundColor as transparent on a gradient-filled element, so a naive
       * walk sails past a brick-red button and finds the cream section behind it,
       * then reports white-on-cream at 1.09:1. That produced 33 confident false
       * positives on the first run and zero real ones.
       */
      const effectiveBg = (el) => {
        for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
          const cs = getComputedStyle(n);
          if (cs.backgroundImage && cs.backgroundImage !== 'none') return null;
          const c = parse(cs.backgroundColor);
          if (c) return c;
        }
        return [255, 255, 255];
      };
      // `div` included deliberately: real prose does end up in a bare div in
      // this codebase (service-visuals captions, for one). The own-text-node
      // filter below is what stops layout containers matching.
      for (const el of document.querySelectorAll('p, li, dd, dt, span, a, div, h1, h2, h3, h4')) {
        // Only leaf text nodes, and only real sentences — skip icon wrappers.
        const own = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').trim();
        if (own.length < 15) continue;
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) < 0.5) continue;
        const fg = parse(cs.color);
        if (!fg) continue;
        const bg = effectiveBg(el);
        if (!bg) continue; // gradient or image behind the text — not judgeable
        const l1 = lum(fg), l2 = lum(bg);
        const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
        const px = parseFloat(cs.fontSize);
        const bold = parseInt(cs.fontWeight, 10) >= 700;
        const min = px >= 24 || (bold && px >= 18.66) ? 3 : 4.5;
        if (ratio < min - 0.02) {
          out.lowContrast.push({
            el: label(el), ratio: Math.round(ratio * 100) / 100, need: min,
            px: Math.round(px), color: cs.color, bg: `rgb(${bg.join(',')})`,
          });
        }
      }
      out.lowContrast = out.lowContrast.slice(0, 6);

      // 6. Headings clipped by a fixed height / overflow hidden.
      for (const el of document.querySelectorAll('h1, h2, h3')) {
        const cs = getComputedStyle(el);
        if (cs.overflow === 'hidden' && el.scrollHeight > el.clientHeight + 2) {
          out.clipped.push({ el: label(el), scrollH: el.scrollHeight, clientH: el.clientHeight });
        }
      }
      out.clipped = out.clipped.slice(0, 5);

      return out;
    }, vp.width);

    checks++;
    for (const [kind, key] of [['overflow', 'overflow'], ['wide-element', 'wide'], ['invisible-text', 'invisible'], ['small-tap-target', 'tinyTap'], ['clipped-heading', 'clipped'], ['low-contrast', 'lowContrast']]) {
      const v = report[key];
      if (!v) continue;
      if (Array.isArray(v) ? v.length : true) {
        findings.push({ vp: vp.name, route, kind, detail: v });
      }
    }

    if (SHOTS) {
      const file = `${vp.name}${route.replace(/\//g, '_') || '_home'}.png`;
      await page.screenshot({ path: path.join(OUT, file), fullPage: true });
    }
  }
  await page.close();
}

await browser.close();

console.log(`\n${checks} page/viewport combinations checked across ${VIEWPORTS.length} viewports.\n`);
if (!findings.length) {
  console.log('No layout problems found.');
  process.exit(0);
}

const byKind = {};
for (const f of findings) (byKind[f.kind] ||= []).push(f);
for (const [kind, list] of Object.entries(byKind)) {
  console.log(`\n${kind.toUpperCase()} — ${list.length}`);
  for (const f of list.slice(0, 14)) {
    console.log(`  [${f.vp}] ${f.route}`);
    console.log(`      ${JSON.stringify(f.detail).slice(0, 260)}`);
  }
  if (list.length > 14) console.log(`  … ${list.length - 14} more`);
}
process.exit(1);
