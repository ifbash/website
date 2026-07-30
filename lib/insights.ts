import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

/**
 * Insights (the blog) — file-backed, no CMS.
 *
 * Published posts are .md files in content/insights/. Anything under
 * content/insights/_drafts/ is ignored by every function here, so the draft
 * generator can write freely without ever putting unreviewed copy on the site.
 * A post also has to carry `published: true` to appear — moving a file is not
 * enough on its own.
 *
 * Markdown is compiled to HTML here, at build time, rather than rendered
 * through an MDX runtime. Posts are prose, not React, so the runtime bought
 * nothing and next-mdx-remote pre-bundles its own jsx-runtime, which collides
 * with the app's React copy during static export.
 */

const DIR = path.join(process.cwd(), 'content', 'insights');

export type Insight = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. 2026-07-24 */
  date: string;
  /** ISO date of the last meaningful edit; falls back to `date`. */
  updated: string;
  author: string;
  tags: string[];
  /**
   * BCP 47 language tag, default 'en'. Set to 'ar' for an Arabic post so the
   * article renders with lang/dir and screen readers and Google both get told
   * which language it is. Same review bar as lib/i18n/ar.ts: no Arabic ships
   * published until a native speaker has read it.
   */
  lang: string;
  /** Derived from lang — 'rtl' for Arabic, otherwise 'ltr'. Not authored. */
  dir: 'ltr' | 'rtl';
  readingMinutes: number;
  /** Compiled HTML, ready to render. Authored in-repo, so not sanitised. */
  html: string;
};

export type InsightMeta = Omit<Insight, 'html'>;

type Parsed = Insight & { published: boolean };

function readAll(): Insight[] {
  if (!fs.existsSync(DIR)) return [];

  const parsed: Parsed[] = fs
    .readdirSync(DIR, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.md'))
    .map((e) => {
      const raw = fs.readFileSync(path.join(DIR, e.name), 'utf8');
      const { data, content } = matter(raw);
      const slug = String(data.slug || e.name.replace(/\.md$/, ''));

      // ~200 wpm, rounded up, floor of 1.
      const words = content.trim().split(/\s+/).filter(Boolean).length;

      // Only Arabic is RTL on this site today. Kept as a derived value rather
      // than a frontmatter field so a post can't declare lang: 'ar' and then
      // render left-to-right because someone forgot the second key.
      const lang = String(data.lang ?? 'en');
      const dir: 'ltr' | 'rtl' = lang.startsWith('ar') ? 'rtl' : 'ltr';

      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ''),
        date: String(data.date ?? ''),
        updated: String(data.updated ?? data.date ?? ''),
        author: String(data.author ?? 'ifBash'),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        lang,
        dir,
        readingMinutes: Math.max(1, Math.ceil(words / 200)),
        html: marked.parse(content, { async: false }) as string,
        published: data.published === true,
      };
    });

  return parsed
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ published, ...post }) => post);
}

export function getAllInsights(): InsightMeta[] {
  return readAll().map(({ html, ...meta }) => meta);
}

export function getInsight(slug: string): Insight | null {
  return readAll().find((p) => p.slug === slug) ?? null;
}

export function insightSlugs(): string[] {
  return readAll().map((p) => p.slug);
}

export function allTags(): string[] {
  // Array.from rather than spreading a Set — tsconfig targets below ES2015.
  return Array.from(new Set(readAll().flatMap((p) => p.tags))).sort();
}

/** e.g. "24 July 2026" — stable across locales, no Intl surprises in RSC. */
export function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00Z');
  if (Number.isNaN(d.getTime())) return iso;
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
