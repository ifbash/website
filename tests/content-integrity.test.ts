import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { ORG_ID, SITE_URL } from '@/components/seo-schemas';
import { industryEntries, industrySlugs, industryMeta } from '@/lib/industry-data';
import {
  portfolioEntries, portfolioSlugs, featuredPortfolioEntries, portfolioMeta,
  implementationNote,
} from '@/lib/portfolio-data';
import { serviceEntries } from '@/lib/service-data';
import { industryItems, portfolioCategories } from '@/components/nav-data';
import { ROUTE_PAIRS, AR_REVIEWED, counterpart, localeOf } from '@/lib/i18n/config';

/**
 * Structural invariants of the data-driven routes.
 *
 * These are the failures that don't announce themselves: an industry added to
 * the data file but not the nav renders with a missing title, a duplicate slug
 * silently shadows a page, a route pair pointing at a page that no longer
 * exists produces a hreflang to a 404. All were checked by hand while building
 * these routes; this is that check, made permanent.
 */

const dupes = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i);

describe('industry routes', () => {
  it('has no duplicate slugs', () => {
    expect(dupes(industrySlugs)).toEqual([]);
  });

  it('resolves a nav title and icon for every slug', () => {
    // industryMeta() reads from the nav so the two cannot drift. A slug with no
    // nav entry falls back to parsing metaTitle, which reads badly.
    const orphans = industrySlugs.filter((s) => industryMeta(s) === null);
    expect(orphans).toEqual([]);
  });

  it('has an entry for every industry the nav links to', () => {
    const navSlugs = industryItems.map((i) => i.href.replace('/industries/', ''));
    const missing = navSlugs.filter((s) => !industrySlugs.includes(s));
    expect(missing).toEqual([]);
  });

  it('gives every entry the fields the template renders unconditionally', () => {
    for (const e of industryEntries) {
      expect(e.metaTitle, e.slug).toBeTruthy();
      expect(e.metaDescription, e.slug).toBeTruthy();
      expect(e.aiAngle, e.slug).toBeTruthy();
      expect(e.capabilities.length, e.slug).toBeGreaterThan(0);
      expect(e.faqs.length, e.slug).toBeGreaterThan(0);
    }
  });

  it('splits every metaTitle on an em dash, which the hero depends on', () => {
    // app/industries/[slug]/page.tsx does metaTitle.split('—') and renders
    // [0] as the headline and [1] as the accent. A title with no dash renders
    // `undefined` as the accent.
    for (const e of industryEntries) {
      const parts = e.metaTitle.split('—');
      expect(parts.length, `${e.slug}: metaTitle needs an em dash`).toBeGreaterThanOrEqual(2);
      expect(parts[1]?.trim(), e.slug).toBeTruthy();
    }
  });

  it('keeps regional blocks well-formed where present', () => {
    for (const e of industryEntries) {
      if (!e.regional) continue;
      expect(e.regional.visionAlignment, e.slug).toBeTruthy();
      expect(e.regional.frameworks.length, e.slug).toBeGreaterThan(0);
      for (const f of e.regional.frameworks) {
        expect(f.name, e.slug).toBeTruthy();
        expect(f.jurisdiction, e.slug).toBeTruthy();
        expect(f.note, e.slug).toBeTruthy();
      }
      // The template keys the framework list on name, so duplicates inside one
      // entry would collide as React keys.
      expect(dupes(e.regional.frameworks.map((f) => f.name)), e.slug).toEqual([]);
    }
  });

  it('makes no accreditation claim in a regional note', () => {
    // The truth-policy line for this block: we describe control families we
    // design to, never a certification we hold. scripts/audit.sh catches the
    // phrasing in rendered copy; this catches it at the data layer.
    const forbidden = /\b(we are|ifBash is)\s+(certified|accredited|authorised|authorized)\b/i;
    for (const e of industryEntries) {
      for (const f of e.regional?.frameworks ?? []) {
        expect(forbidden.test(f.note), `${e.slug} / ${f.name}`).toBe(false);
      }
      if (e.regional) expect(forbidden.test(e.regional.visionAlignment), e.slug).toBe(false);
    }
  });
});

describe('portfolio routes', () => {
  it('has no duplicate slugs across all entries, live or dormant', () => {
    expect(dupes(portfolioEntries.map((e) => e.slug))).toEqual([]);
  });

  it('routes only the featured subset', () => {
    // 38 bodies are kept on purpose; only the ones the nav lists get routes.
    expect(featuredPortfolioEntries.length).toBeLessThanOrEqual(portfolioEntries.length);
    expect(portfolioSlugs.length).toBe(featuredPortfolioEntries.length);
  });

  it('resolves nav metadata for every routed slug', () => {
    const orphans = portfolioSlugs.filter((s) => portfolioMeta(s) === null);
    expect(orphans).toEqual([]);
  });

  it('has an implementation note for EVERY entry, routed or dormant', () => {
    // Deliberately all 38, not just the 13 routed. Restoring a dormant
    // capability is meant to be a one-line nav change; if its note were missing,
    // that change would silently publish a bare ServiceNow product description —
    // exactly the state this section was rewritten out of. Asserting across all
    // entries makes the note a precondition of existing, not of being routed.
    const missing = portfolioEntries.map((e) => e.slug).filter((s) => implementationNote(s) === null);
    expect(missing).toEqual([]);
  });

  it('keeps implementation notes well-formed and decision-shaped', () => {
    for (const s of portfolioEntries.map((e) => e.slug)) {
      const n = implementationNote(s)!;
      expect(n.failureMode.heading, s).toBeTruthy();
      expect(n.failureMode.body.length, s).toBeGreaterThan(200);
      expect(n.decisions.length, s).toBeGreaterThanOrEqual(2);
      // The template keys the list on the question, so duplicates would collide.
      expect(dupes(n.decisions.map((d) => d.q)), s).toEqual([]);
      for (const d of n.decisions) {
        expect(d.q.endsWith('?'), `${s}: "${d.q}" should be a question`).toBe(true);
        expect(d.a.length, s).toBeGreaterThan(80);
      }
    }
  });

  it('states no duration or metric in an implementation note', () => {
    // Same truth policy as everywhere else. scripts/audit.sh greps the rendered
    // copy; this catches it at the data layer, where it is easier to attribute.
    const metric = /\b\d+\s*%|\b\d+\s*[–—-]\s*\d+\s*(weeks|months|days)\b/i;
    for (const s of portfolioEntries.map((e) => e.slug)) {
      const n = implementationNote(s)!;
      const all = [n.failureMode.heading, n.failureMode.body, ...n.decisions.flatMap((d) => [d.q, d.a])];
      for (const t of all) expect(metric.test(t), `${s}: "${t.slice(0, 60)}"`).toBe(false);
    }
  });

  it('has a body for every capability the nav lists', () => {
    // A nav entry with no body 404s via notFound() — a dead link in the mega-menu.
    const navSlugs = portfolioCategories.flatMap((c) =>
      c.items.map((i) => i.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')),
    );
    const bodies = new Set(portfolioEntries.map((e) => e.slug));
    expect(navSlugs.filter((s) => !bodies.has(s))).toEqual([]);
  });
});

describe('service routes', () => {
  it('has no duplicate slugs', () => {
    expect(dupes(serviceEntries.map((e) => e.slug))).toEqual([]);
  });

  it('gives every entry a metaDescription, which the hero renders as its sub', () => {
    // Not the <meta name="description"> tag — that comes from each route's
    // layout.tsx. This field feeds `sub` on PageHero, so an empty one makes the
    // hero jump from the h1 straight to the CTA with no explanatory line.
    // digital-transformation shipped that way until this test caught it.
    for (const e of serviceEntries) {
      expect(e.metaDescription, e.slug).toBeTruthy();
    }
  });
});

describe('structured data identity', () => {
  it('keeps the Organization @id on the homepage identical to ORG_ID', () => {
    // ORG_ID is what every Service points its `provider` at. The homepage
    // declares the Organization node itself, as a literal inside a JSON.stringify
    // call, so the two cannot be imported from one place. If they drift, Google
    // silently sees an unresolvable provider reference and the services stop
    // being attributed to the company — with no build error to warn anyone.
    const homepage = readFileSync('app/page.tsx', 'utf8');
    expect(homepage).toContain(`'@id': '${ORG_ID}'`);
  });

  it('derives ORG_ID from SITE_URL so the domain is declared once', () => {
    expect(ORG_ID.startsWith(SITE_URL)).toBe(true);
    expect(SITE_URL).toBe('https://ifbash.com');
  });
});

describe('i18n route pairs', () => {
  it('pairs each English path with an /ar counterpart', () => {
    for (const p of ROUTE_PAIRS) {
      expect(p.en.startsWith('/'), p.en).toBe(true);
      expect(p.ar === '/ar' || p.ar.startsWith('/ar/'), p.ar).toBe(true);
    }
  });

  it('has no duplicate paths on either side', () => {
    expect(dupes(ROUTE_PAIRS.map((p) => p.en))).toEqual([]);
    expect(dupes(ROUTE_PAIRS.map((p) => p.ar))).toEqual([]);
  });

  it('round-trips every pair through counterpart()', () => {
    for (const p of ROUTE_PAIRS) {
      expect(counterpart(p.en)).toEqual({ href: p.ar, exact: true });
      expect(counterpart(p.ar)).toEqual({ href: p.en, exact: true });
    }
  });

  it('falls back to the other home page for an untranslated path', () => {
    expect(counterpart('/trust')).toEqual({ href: '/ar', exact: false });
    expect(counterpart('/ar/trust')).toEqual({ href: '/', exact: false });
  });

  it('classifies locales by prefix without matching lookalikes', () => {
    expect(localeOf('/ar')).toBe('ar');
    expect(localeOf('/ar/services')).toBe('ar');
    expect(localeOf('/')).toBe('en');
    // '/archive' starts with the letters "ar" but is not the Arabic locale.
    expect(localeOf('/archive')).toBe('en');
  });

  it('withholds hreflang while the Arabic surface is unreviewed', () => {
    // AR_REVIEWED gates indexing, sitemap inclusion and hreflang together.
    // If this flips, that is a deliberate decision and this test should be
    // updated alongside it — not silently.
    expect(AR_REVIEWED).toBe(false);
  });
});
