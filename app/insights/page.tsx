import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, Container, PageHero, CtaBand } from '@/components/site';
import { getAllInsights, formatDate } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Practical notes on ServiceNow delivery, AI agents built on Claude, and shipping web and mobile products. Written by the people doing the work.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights | ifBash',
    description:
      'Practical notes on ServiceNow delivery, AI agents built on Claude, and shipping web and mobile products.',
    url: '/insights',
    type: 'website',
  },
};

export default function InsightsIndex() {
  const posts = getAllInsights();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        headline="Notes from the work,"
        accent="not the marketing team."
        sub="What we've actually run into building ServiceNow platforms, agents on Claude, and product software. Specific enough to be useful, honest enough to be worth reading."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'How we engage', href: '/engage' }}
      />

      <Section tone="paper">
        <Container>
          {posts.length === 0 ? (
            <div className="border border-hairline rounded-2xl bg-surface p-10 text-center">
              <p className="text-slate text-[15px]">
                First pieces are being written. Check back shortly — or{' '}
                <Link href="/engage" className="text-sea font-medium hover:text-sea-deep">
                  tell us what you would like us to cover
                </Link>
                .
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-hairline border-y border-hairline">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group block py-8 md:py-10 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-10">
                      <div className="md:w-40 shrink-0 mb-3 md:mb-0">
                        <time
                          dateTime={post.date}
                          className="text-[13px] text-slate-light tabular-nums"
                        >
                          {formatDate(post.date)}
                        </time>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="font-display text-2xl md:text-[28px] leading-snug text-ink group-hover:text-sea transition-colors mb-2">
                          {post.title}
                        </h2>
                        <p className="text-[15px] leading-relaxed text-slate max-w-2xl mb-4">
                          {post.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium tracking-wide uppercase text-sea bg-sea-tint rounded-full px-2.5 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                          <span className="text-[13px] text-slate-light">
                            {post.readingMinutes} min read
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-sea opacity-0 group-hover:opacity-100 transition-opacity">
                            Read <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>

      <CtaBand
        headline="Have a problem"
        accent="worth writing about?"
        sub="Tell us what you're trying to build — and we'll tell you honestly if we're not the right team for it."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'How we engage', href: '/engage' }}
      />
    </>
  );
}
