import { getAllInsights } from '@/lib/insights';

const SITE = 'https://ifbash.com';

/** XML-escape — titles and descriptions are author-controlled but may contain & or quotes. */
function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const dynamic = 'force-static';

export function GET() {
  const posts = getAllInsights();
  const updated = posts[0]?.date ?? new Date(0).toISOString().slice(0, 10);

  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/insights/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/insights/${p.slug}</guid>
      <description>${esc(p.description)}</description>
      <pubDate>${new Date(p.date + 'T00:00:00Z').toUTCString()}</pubDate>
${p.tags.map((t) => `      <category>${esc(t)}</category>`).join('\n')}
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ifBash — Insights</title>
    <link>${SITE}/insights</link>
    <description>Practical notes on ServiceNow delivery, AI agents built on Claude, and shipping web and mobile products.</description>
    <language>en</language>
    <lastBuildDate>${new Date(updated + 'T00:00:00Z').toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/insights/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
      'cache-control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
