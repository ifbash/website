import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Section } from './section';
import { Eyebrow } from './eyebrow';
import { DisplayHeading, Accented } from './display-heading';
import { PageHero } from './page-hero';
import { FeatureGrid } from './feature-card';
import { PhaseGrid } from './phase-grid';
import { FaqSection } from './faq-section';
import { CtaBand } from './cta-band';
import { PillLink } from './pill-button';
import { ServiceVisual } from './service-visuals';
import { BreadcrumbSchema, ServiceSchema, SITE_URL } from '@/components/seo-schemas';
import type { ServiceEntry } from '@/lib/service-data';

/**
 * Shared body for the six ServiceNow service pages. They keep their own
 * routes and metadata; only the rendering is shared.
 */
export function ServicePage({
  entry,
  headline,
  accent,
  tags,
  deliveryNote,
}: {
  entry: ServiceEntry;
  headline: string;
  accent: string;
  tags?: string[];
  deliveryNote?: string;
}) {
  // The metaTitle carries "ServiceNow X — editorial promise"; the part before
  // the dash is the service name a buyer would actually search for.
  const serviceName = entry.metaTitle.split('—')[0].trim();
  const url = `${SITE_URL}/services/${entry.slug}`;

  return (
    <>
      {/* Structured data for the six ServiceNow service pages. These are the
          highest commercial-intent pages on the site and carried only FAQPage
          before this. Declared here rather than per page so all six stay
          consistent and none can be forgotten. */}
      <ServiceSchema
        name={serviceName}
        description={entry.metaDescription}
        url={url}
        serviceType={serviceName}
        category="ServiceNow"
      />
      <BreadcrumbSchema
        items={[
          { label: 'Services', href: '/services' },
          { label: serviceName, href: `/services/${entry.slug}` },
        ]}
      />

      <PageHero
        tags={tags}
        eyebrow="ServiceNow"
        headline={headline}
        accent={accent}
        sub={entry.metaDescription}
        primary={{ label: 'Scope this project', href: '/get-started' }}
        secondary={{ label: 'Ask our agent', href: '/agent' }}
      />

      {/* Signature visual — one distinct diagram per service, so the six
          ServiceNow pages don't share an identical silhouette. */}
      <Section tone="paper" pad="tight" still>
        <ServiceVisual slug={entry.slug} />
      </Section>

      {entry.offerings.length > 0 && (
        <Section tone="surface" divide>
          <div className="mb-12 max-w-2xl">
            <Eyebrow rule className="mb-4">What we do</Eyebrow>
            <DisplayHeading as="h2" size="md">
              The work, <Accented>specifically.</Accented>
            </DisplayHeading>
          </div>
          <FeatureGrid features={entry.offerings} />
        </Section>
      )}

      {entry.phases.length > 0 && (
        <Section tone="ink">
          <div className="mb-12 max-w-2xl">
            <Eyebrow rule onInk className="mb-4">How we work</Eyebrow>
            <DisplayHeading as="h2" size="sm" onInk>
              Four phases. Working configuration in every one.
            </DisplayHeading>
            <p className="text-sm text-onink-muted mt-4 max-w-xl leading-relaxed">
              {deliveryNote ??
                'We don’t publish a week count — the honest answer depends on your instance, your data, and how many systems are in scope. You get a specific timeline in the written plan after scoping.'}
            </p>
          </div>
          <PhaseGrid phases={entry.phases} />
        </Section>
      )}

      <Section tone="paper" divide>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow rule className="mb-4">Who does it</Eyebrow>
            <DisplayHeading as="h2" size="sm" className="mb-5">
              The people who scope it are the people who build it.
            </DisplayHeading>
            <p className="text-base text-slate leading-relaxed mb-4">
              We don&apos;t scope with seniors and staff with juniors. If the team would change
              between the proposal and the work, we tell you who and why during scoping.
            </p>
            <p className="text-base text-slate leading-relaxed mb-4">
              Everything is documented as it is built, so your team can run it afterwards — and so
              can any other partner you choose later.
            </p>
            <p className="text-base text-slate leading-relaxed mb-7">
              The team holds ServiceNow certifications from CSA and CAD through CIS product
              specialisations to CTA and architect level. We will tell you who is certified in what,
              by name, during scoping —{' '}
              <Link href="/trust" className="inline-block py-1 text-sea font-medium underline underline-offset-2 hover:text-sea-deep">
                the full list is on our trust page
              </Link>
              .
            </p>
            <PillLink href="/engage" variant="outline" size="lg">
              How we engage <ArrowRight className="h-4 w-4" />
            </PillLink>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface p-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-sea mb-5">
              Pairs well with
            </div>
            <div className="space-y-3">
              {[
                ['AI Agents', 'Chat and workflow agents on top of the platform.', '/services/ai-agents'],
                ['Managed Services', 'We keep running it, or hand it over cleanly.', '/services/managed-services-support'],
                // "Which ServiceNow products" — distinct from /work, which is
                // the testable proof. The two pages are easy to conflate, so
                // each link says which of the two it is.
                ['ServiceNow product catalogue', 'Which platform products we implement, and where each one breaks.', '/portfolio'],
              ]
                .filter(([, , href]) => !href.endsWith(entry.slug))
                .map(([t, d, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-start gap-3 rounded-xl border border-hairline p-3.5 transition-all hover:border-sea-soft hover:bg-wash"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink-body group-hover:text-sea transition-colors">
                        {t}
                      </span>
                      <span className="block text-[13px] text-slate mt-0.5 leading-relaxed">{d}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-faint group-hover:text-sea ml-auto shrink-0 mt-0.5 transition-colors" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Section>

      {entry.faqs.length > 0 && <FaqSection faqs={entry.faqs} heading="Questions we hear a lot." />}

      <CtaBand
        headline="Ready to"
        accent="scope it?"
        sub="Tell us where you are today. You get back a written approach, a sequence, the names doing the work, and an estimate — inside two working days."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'All services', href: '/services' }}
      />
    </>
  );
}
