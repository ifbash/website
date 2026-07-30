import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, PhaseGrid,
  FaqSection, CtaBand, FeatureGrid, PillLink,
} from '@/components/site';
import {
  featuredPortfolioEntries, portfolioMeta, getPortfolioEntry, relatedPortfolio,
  implementationNote,
} from '@/lib/portfolio-data';
import { ServiceSchema, SITE_URL } from '@/components/seo-schemas';

// Only the featured capabilities get routes. Retired products keep their body
// in portfolio-data.ts but are 301'd in next.config.js — see the note there.
export function generateStaticParams() {
  return featuredPortfolioEntries.map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug: entrySlug } = await params;
  const entry = getPortfolioEntry(entrySlug);
  const meta = portfolioMeta(entrySlug);
  if (!entry || !meta) return {};

  const url = `https://ifbash.com/portfolio/${entry.slug}`;
  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    keywords: entry.keywords,
    openGraph: {
      type: 'website',
      siteName: 'ifBash',
      title: entry.metaTitle,
      description: entry.metaDescription,
      url,
      images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: `ifBash — ${meta.title}` }],
    },
    alternates: { canonical: url },
  };
}

export default async function PortfolioProductPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug: entrySlug } = await params;
  const entry = getPortfolioEntry(entrySlug);
  const meta = portfolioMeta(entrySlug);
  if (!entry || !meta) notFound();

  const related = relatedPortfolio(entrySlug);
  const impl = implementationNote(entrySlug);

  return (
    <>
      {/* Each of these is an implementation service for a ServiceNow product,
          not a product we sell — hence Service with the product as serviceType.
          BreadcrumbList is already emitted inline below. */}
      <ServiceSchema
        name={`${meta.title} implementation`}
        description={entry.metaDescription}
        url={`${SITE_URL}/portfolio/${entry.slug}`}
        serviceType={meta.title}
        category={meta.category}
      />

      {/* Breadcrumbs help both users and search engines place these deep pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ifbash.com' },
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://ifbash.com/portfolio' },
              { '@type': 'ListItem', position: 3, name: meta.title, item: `https://ifbash.com/portfolio/${entry.slug}` },
            ],
          }),
        }}
      />

      <nav aria-label="Breadcrumb" className="bg-paper border-b border-hairline-soft">
        <div className="w-[92%] md:w-[88%] lg:w-[84%] max-w-6xl mx-auto flex items-center gap-1.5 py-3 text-[13px] text-slate">
          <Link href="/" className="inline-block py-1 hover:text-sea transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-faint" />
          <Link href="/portfolio" className="inline-block py-1 hover:text-sea transition-colors">Products</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-faint" />
          <span className="text-ink-body font-medium">{meta.title}</span>
        </div>
      </nav>

      <PageHero
        eyebrow={meta.category}
        headline={meta.title}
        sub={entry.metaDescription}
        primary={{ label: 'Scope this on your instance', href: '/get-started' }}
        secondary={{ label: 'Ask our agent about it', href: '/agent' }}
      />

      {/* CAPABILITIES */}
      {entry.capabilities.length > 0 && (
        <Section tone="surface" divide>
          <div className="mb-12 max-w-2xl">
            <Eyebrow rule className="mb-4">Capabilities</Eyebrow>
            <DisplayHeading as="h2" size="md">
              What <Accented>{meta.title}</Accented> covers.
            </DisplayHeading>
          </div>
          <FeatureGrid features={entry.capabilities} />
        </Section>
      )}

      {/* DELIVERY */}
      {entry.phases.length > 0 && (
        <Section tone="ink">
          <div className="mb-12 max-w-2xl">
            <Eyebrow rule onInk className="mb-4">What delivery looks like</Eyebrow>
            <DisplayHeading as="h2" size="sm" onInk>
              Four phases. You see working configuration in every one.
            </DisplayHeading>
            <p className="text-sm text-onink-muted mt-4 max-w-xl leading-relaxed">
              We don&apos;t publish a week count here — the honest answer depends on your instance,
              your data, and how many systems are in scope. You get a specific timeline in the
              written plan after scoping.
            </p>
          </div>
          <PhaseGrid phases={entry.phases} />
        </Section>
      )}

      {/* WHERE IT GOES WRONG
          The section that makes this page worth reading instead of ServiceNow's
          own product page. Everything above describes the product; this is the
          implementation knowledge only a delivery team has. See the note on
          implementationNotes in lib/portfolio-data.ts for why. */}
      {impl && (
        <Section tone="paper" divide>
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-14 items-start">
            <div>
              <Eyebrow rule className="mb-4">Where these go wrong</Eyebrow>
              <DisplayHeading as="h2" size="sm" className="mb-5">
                {impl.failureMode.heading}
              </DisplayHeading>
              <p className="text-base text-slate leading-relaxed mb-7">
                {impl.failureMode.body}
              </p>
              <PillLink href="/get-started" variant="outline" size="lg">
                Tell us where you are <ArrowRight className="h-4 w-4" />
              </PillLink>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-widest uppercase text-sea mb-5">
                Decisions you will face
              </div>
              <dl className="space-y-6">
                {impl.decisions.map((d) => (
                  <div key={d.q} className="border-s-2 border-sea-strong ps-5">
                    <dt className="text-[15px] font-semibold text-ink-body mb-1.5 leading-snug">
                      {d.q}
                    </dt>
                    <dd className="text-[15px] text-slate leading-relaxed">{d.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>
      )}

      {/* OWNERSHIP — trimmed to a compact strip. This used to carry two
          paragraphs repeating what /engage and the service pages already say,
          which was a large part of why all thirteen pages read the same. */}
      <Section tone="surface" divide pad="tight">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="lg:max-w-sm">
            <Eyebrow rule className="mb-3">How we run it</Eyebrow>
            <DisplayHeading as="h2" size="sm" className="mb-3">
              Built to be handed over.
            </DisplayHeading>
            <PillLink href="/services/managed-services-support" variant="outline" size="sm">
              See managed services <ArrowRight className="h-3.5 w-3.5" />
            </PillLink>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 flex-1">
            {[
              ['Configuration documentation', 'What was built, why, and where the decisions are recorded.'],
              ['Admin and runbook training', 'For the people who will own it after go-live.'],
              ['Update-set and repo history', 'A traceable record rather than an undocumented instance.'],
              ['A named escalation path', 'The same engineers, not a ticket queue.'],
            ].map(([t, d]) => (
              <li key={t} className="border-s-2 border-sea-strong ps-4">
                <div className="text-sm font-semibold text-ink-body">{t}</div>
                <div className="text-[13px] text-slate leading-relaxed mt-0.5">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {entry.faqs.length > 0 && (
        <FaqSection faqs={entry.faqs} heading={`${meta.title}, answered.`} />
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <Section tone="paper" divide pad="tight">
          <Eyebrow rule className="mb-6">Also in {meta.category}</Eyebrow>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map(({ title, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 rounded-2xl border border-hairline bg-surface p-4 transition-all hover:border-sea-soft hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-lg bg-sea-tint group-hover:bg-sea-strong flex items-center justify-center shrink-0 transition-colors">
                  <Icon className="h-4 w-4 text-sea" />
                </div>
                <span className="text-sm font-medium text-ink-body group-hover:text-sea leading-tight">{title}</span>
                <ArrowRight className="h-4 w-4 text-slate-faint group-hover:text-sea ml-auto shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        headline="Want this"
        accent="on your instance?"
        sub="Tell us where you are today — greenfield, mid-implementation, or inheriting someone else's build. You'll have a written plan inside two working days."
        primary={{ label: 'Scope this project', href: '/get-started' }}
        secondary={{ label: 'All products', href: '/portfolio' }}
      />
    </>
  );
}
