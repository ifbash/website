import { describe, expect, it } from 'vitest';
import { getAllInsights, getInsight, insightSlugs, allTags, formatDate } from '@/lib/insights';

/**
 * The insights loader reads content/insights/*.md off disk, so these run against
 * the real posts rather than fixtures. That makes them a content check as well
 * as a code check: a post with a malformed date or a missing description fails
 * here rather than rendering wrong.
 */

describe('loader scope', () => {
  it('serves only published posts from the top-level directory', () => {
    const posts = getAllInsights();
    expect(posts.length).toBeGreaterThan(0);
    // _drafts is a directory, and readAll() filters on isFile(), so nothing in
    // there can ever be served regardless of its frontmatter. The unreviewed
    // Arabic draft depends on this holding.
    expect(posts.every((p) => !p.slug.startsWith('_'))).toBe(true);
  });

  it('keeps slugs unique', () => {
    const slugs = insightSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('sorts newest first', () => {
    const dates = getAllInsights().map((p) => p.date);
    expect([...dates].sort().reverse()).toEqual(dates);
  });
});

describe('every published post', () => {
  const posts = getAllInsights();

  it.each(posts.map((p) => [p.slug, p] as const))('%s has renderable metadata', (_slug, p) => {
    expect(p.title).toBeTruthy();
    expect(p.description).toBeTruthy();
    expect(p.author).toBeTruthy();
    expect(p.readingMinutes).toBeGreaterThanOrEqual(1);
    // ISO dates: the sitemap does Date.parse(`${updated}T00:00:00Z`) and a
    // malformed value there becomes an Invalid Date in sitemap.xml.
    expect(p.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(p.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Number.isNaN(Date.parse(`${p.updated}T00:00:00Z`))).toBe(false);
  });

  it.each(posts.map((p) => [p.slug, p] as const))('%s is never updated before publication', (_slug, p) => {
    expect(p.updated >= p.date).toBe(true);
  });

  it.each(posts.map((p) => [p.slug] as const))('%s compiles to HTML', (slug) => {
    const full = getInsight(slug);
    expect(full).not.toBeNull();
    expect(full!.html).toContain('<');
  });
});

describe('language and direction', () => {
  it('defaults to English left-to-right', () => {
    for (const p of getAllInsights()) {
      expect(p.lang, p.slug).toBe('en');
      expect(p.dir, p.slug).toBe('ltr');
    }
  });

  it('derives dir from lang so the two cannot disagree', () => {
    // dir is computed in the loader, never authored in frontmatter. That is the
    // whole point: a post cannot declare lang: 'ar' and still render ltr
    // because someone forgot a second key.
    for (const p of getAllInsights()) {
      expect(p.dir).toBe(p.lang.startsWith('ar') ? 'rtl' : 'ltr');
    }
  });
});

describe('tags', () => {
  it('returns a sorted, de-duplicated set drawn from the posts', () => {
    const tags = allTags();
    expect([...tags].sort()).toEqual(tags);
    expect(new Set(tags).size).toBe(tags.length);

    const used = new Set(getAllInsights().flatMap((p) => p.tags));
    for (const t of tags) expect(used.has(t)).toBe(true);
  });
});

describe('formatDate()', () => {
  it('formats an ISO date without shifting the day across time zones', () => {
    // A naive new Date('2026-07-25') parses as UTC midnight, which in a
    // negative-offset zone formats as the 24th.
    expect(formatDate('2026-07-25')).toContain('2026');
    expect(formatDate('2026-07-25')).toMatch(/25/);
  });

  it('does not throw on a malformed value', () => {
    expect(() => formatDate('not-a-date')).not.toThrow();
  });
});

describe('getInsight()', () => {
  it('returns null for an unknown slug rather than throwing', () => {
    expect(getInsight('no-such-post')).toBeNull();
  });

  it('does not resolve a draft by slug', () => {
    expect(getInsight('ai-agents-servicenow-data-residency-gulf.ar')).toBeNull();
    expect(getInsight('ai-agents-servicenow-data-residency-gulf')).toBeNull();
  });
});
