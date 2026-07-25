import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Section, Container, CtaBand } from '@/components/site';
import { getInsight, insightSlugs, getAllInsights, formatDate } from '@/lib/insights';

const SITE = 'https://ifbash.com';

export function generateStaticParams() {
  return insightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/insights/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

/**
 * Prose styles. Tailwind Typography isn't installed and adding it just for
 * this would drag in a plugin we'd have to keep aligned with the token set —
 * so the article rhythm is expressed directly against the design tokens.
 */
const PROSE = [
  'max-w-2xl',
  '[&>p]:text-[16.5px] [&>p]:leading-[1.75] [&>p]:text-ink-body [&>p]:mb-6',
  '[&>h2]:font-display [&>h2]:text-[27px] [&>h2]:leading-snug [&>h2]:text-ink [&>h2]:mt-12 [&>h2]:mb-4',
  '[&>h3]:font-display [&>h3]:text-[21px] [&>h3]:leading-snug [&>h3]:text-ink [&>h3]:mt-9 [&>h3]:mb-3',
  '[&>ul]:mb-6 [&>ul]:space-y-2 [&>ul]:pl-5 [&>ul]:list-disc [&>ul]:marker:text-navy-soft',
  '[&>ol]:mb-6 [&>ol]:space-y-2 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol]:marker:text-stone-light',
  '[&_li]:text-[16.5px] [&_li]:leading-[1.7] [&_li]:text-ink-body',
  '[&>blockquote]:border-l-2 [&>blockquote]:border-navy-soft [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-stone [&>blockquote]:my-7',
  '[&_a]:text-navy [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-navy-deep',
  '[&_code]:font-mono [&_code]:text-[13.5px] [&_code]:bg-wash [&_code]:border [&_code]:border-hairline [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5',
  '[&>pre]:bg-ink [&>pre]:text-onink [&>pre]:rounded-xl [&>pre]:p-5 [&>pre]:overflow-x-auto [&>pre]:mb-6 [&>pre]:text-[13.5px]',
  '[&>pre_code]:bg-transparent [&>pre_code]:border-0 [&>pre_code]:p-0 [&>pre_code]:text-onink',
  '[&>hr]:border-hairline [&>hr]:my-10',
  '[&>table]:w-full [&>table]:text-[15px] [&>table]:mb-6',
  '[&_th]:text-left [&_th]:font-semibold [&_th]:text-ink [&_th]:border-b [&_th]:border-hairline [&_th]:pb-2',
  '[&_td]:border-b [&_td]:border-hairline-soft [&_td]:py-2.5 [&_td]:text-ink-body',
].join(' ');

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const others = getAllInsights().filter((p) => p.slug !== post.slug).slice(0, 2);

  // Article schema — what search engines and AI assistants read to understand
  // authorship, dates and topic. Kept in sync with the frontmatter above.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: { '@type': 'Organization', name: post.author, url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'ifBash',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/images/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/insights/${post.slug}` },
    keywords: post.tags.join(', '),
    inLanguage: 'en',
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE}/insights` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/insights/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Section tone="paper" className="pt-10 md:pt-14">
        <Container>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[13.5px] text-stone hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All insights
          </Link>

          <article>
            <header className="max-w-2xl mb-10">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium tracking-wide uppercase text-navy bg-navy-tint rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-display leading-[1.14] text-ink mb-5 text-[clamp(1.9rem,4vw,2.9rem)]">
                {post.title}
              </h1>

              <p className="text-[17px] leading-relaxed text-stone mb-6">{post.description}</p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13.5px] text-stone-light border-t border-hairline pt-5">
                <span className="text-ink-body font-medium">{post.author}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingMinutes} min read</span>
              </div>
            </header>

            {/* Compiled from Markdown at build time in lib/insights.ts.
                Content is authored in-repo, never user-submitted. */}
            <div className={PROSE} dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>

          {others.length > 0 && (
            <div className="max-w-2xl mt-16 pt-8 border-t border-hairline">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-stone-light mb-5">
                Keep reading
              </p>
              <ul className="space-y-4">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/insights/${p.slug}`} className="group block">
                      <span className="font-display text-lg text-ink group-hover:text-navy transition-colors">
                        {p.title}
                      </span>
                      <span className="block text-[14px] text-stone mt-1">{p.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>

      <CtaBand
        headline="Working on something"
        accent="like this?"
        sub="Tell us what you're trying to build — and we'll tell you honestly if we're not the right team for it."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'How we engage', href: '/engage' }}
      />
    </>
  );
}
