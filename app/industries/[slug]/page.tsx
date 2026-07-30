import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, FaqSection, CtaBand,
  FeatureGrid, PillLink,
} from '@/components/site';
import { industryEntries, getIndustryEntry, industryMeta } from '@/lib/industry-data';
import { industryItems } from '@/components/nav-data';

export function generateStaticParams() {
  return industryEntries.map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const entry = getIndustryEntry(slug);
  if (!entry) return {};

  const url = `https://ifbash.com/industries/${slug}`;
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
      images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: `ifBash — ${entry.metaTitle}` }],
    },
    alternates: { canonical: url },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getIndustryEntry(slug);
  const meta = industryMeta(slug);
  if (!entry) notFound();

  const name = meta?.title ?? entry.metaTitle.split('—')[0].replace('ServiceNow', '').trim();
  const others = industryItems.filter((i) => i.href !== `/industries/${slug}`).slice(0, 5);

  // The metaTitle carries the editorial promise; split it for the hero.
  const [headPart, accentPart] = entry.metaTitle.split('—').map((s) => s.trim());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ifbash.com' },
              { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://ifbash.com/industries' },
              { '@type': 'ListItem', position: 3, name, item: `https://ifbash.com/industries/${slug}` },
            ],
          }),
        }}
      />

      <nav aria-label="Breadcrumb" className="bg-paper border-b border-hairline-soft">
        <div className="w-[92%] md:w-[88%] lg:w-[84%] max-w-6xl mx-auto flex items-center gap-1.5 py-3 text-[13px] text-slate">
          <Link href="/" className="inline-block py-1 hover:text-sea transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-faint" />
          <Link href="/industries" className="inline-block py-1 hover:text-sea transition-colors">Industries</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-faint" />
          <span className="text-ink-body font-medium">{name}</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Industries"
        headline={headPart.replace(/^ServiceNow\s*/, '')}
        accent={accentPart}
        sub={entry.metaDescription}
        primary={{ label: 'Scope a project', href: '/get-started' }}
        secondary={{ label: 'Ask our agent', href: '/agent' }}
      />

      {/* WHERE WE WORK */}
      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">Where we work</Eyebrow>
          <DisplayHeading as="h2" size="md">
            The problems <Accented>we get called about.</Accented>
          </DisplayHeading>
        </div>
        <FeatureGrid features={entry.capabilities} />
      </Section>

      {/* AI ANGLE — ties the growing practice to the sector */}
      <Section tone="ink">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow rule onInk className="mb-4">Agents in {name.toLowerCase()}</Eyebrow>
            <DisplayHeading as="h2" size="sm" onInk className="mb-5">
              Where AI actually helps here.
            </DisplayHeading>
            <p className="text-base text-onink-muted leading-relaxed mb-4">{entry.aiAngle}</p>
            <p className="text-base text-onink-muted leading-relaxed">
              Where it does not help, we will say so. An agent added to a broken process just
              makes the same mistakes faster.
            </p>
          </div>
          <div className="rounded-2xl border border-onink-line bg-[rgba(255,255,255,0.03)] p-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-sea-soft mb-5">
              Three practices, one team
            </div>
            <div className="space-y-4">
              {[
                ['ServiceNow', 'The platform work above — implementation, integration, and managed services.', '/services'],
                ['AI & Agents', 'Chat and voice agents on top of that platform, or standalone.', '/services/ai-agents'],
                ['Web & Mobile', 'Customer and field-facing products around the workflows.', '/services/web-mobile-development'],
              ].map(([t, d, href]) => (
                <Link key={t} href={href} className="group block border-l-2 border-sea-soft pl-4">
                  <div className="text-sm font-semibold text-onink mb-1 group-hover:text-sea-soft transition-colors">
                    {t} <ArrowRight className="inline h-3.5 w-3.5 opacity-50 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-sm text-onink-muted leading-relaxed">{d}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* REGIONAL — Gulf regulators and national transformation programmes.
          Only rendered for sectors that carry the block, so the pages written
          for US and EU buyers are unchanged. */}
      {entry.regional && (
        <Section tone="surface" divide>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 items-start">
            <div>
              <Eyebrow rule className="mb-4">In the Gulf</Eyebrow>
              <DisplayHeading as="h2" size="sm" className="mb-5">
                The questions <Accented>procurement actually asks.</Accented>
              </DisplayHeading>
              <p className="text-base text-slate leading-relaxed mb-4">
                {entry.regional.visionAlignment}
              </p>
              <p className="text-sm text-slate-light leading-relaxed">
                We map platform configuration to the control families below and hand over the
                mapping with the build. That is a description of how we work, not a certification
                claim — where a framework requires an accredited audit, that audit is yours or your
                assessor&apos;s, and we say so in writing.
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-paper p-6 sm:p-7">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-sea mb-5">
                Frameworks we design to
              </div>
              <dl className="space-y-4">
                {entry.regional.frameworks.map((f) => (
                  <div key={f.name} className="border-l-2 border-sea-soft pl-4">
                    <dt className="text-sm font-semibold text-ink-body">
                      {f.name}
                      <span className="ml-2 font-normal text-[12px] text-slate-light">
                        {f.jurisdiction}
                      </span>
                    </dt>
                    <dd className="text-[13px] text-slate mt-1 leading-relaxed">{f.note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>
      )}

      {/* HONEST NOTE */}
      <Section tone="paper" divide innerClassName="max-w-3xl">
        <Eyebrow rule className="mb-4">On references</Eyebrow>
        <DisplayHeading as="h2" size="sm" className="mb-5">
          We won&apos;t name clients we can&apos;t name.
        </DisplayHeading>
        <p className="text-base text-slate leading-relaxed mb-4">
          Sector pages usually carry logos and percentages. Ours don&apos;t, because most of that
          work sits under agreements that do not permit it — and inventing a number to fill the
          space is worse than leaving it empty.
        </p>
        <p className="text-base text-slate leading-relaxed mb-7">
          If you want a reference in {name.toLowerCase()}, ask. Where a client has agreed, we will
          introduce you directly under NDA.
        </p>
        <PillLink href="/work" variant="outline" size="lg">
          See what we can show you <ArrowRight className="h-4 w-4" />
        </PillLink>
      </Section>

      <FaqSection faqs={entry.faqs} heading={`${name}, answered.`} tone="surface" />

      {/* OTHER INDUSTRIES */}
      <Section tone="paper" divide pad="tight">
        <Eyebrow rule className="mb-6">Other industries</Eyebrow>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {others.map(({ title, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-2.5 rounded-xl border border-hairline bg-surface p-3.5 transition-all hover:border-sea-soft hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4 text-sea shrink-0" />
              <span className="text-sm font-medium text-ink-body group-hover:text-sea leading-tight">{title}</span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        headline="Working in"
        accent={`${name.toLowerCase()}?`}
        sub="Tell us the problem in your own words. Back inside two working days: an approach, a sequence, and who would do the work."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'All industries', href: '/industries' }}
      />
    </>
  );
}
