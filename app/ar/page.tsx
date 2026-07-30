import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section, Container, Eyebrow, PillLink } from '@/components/site';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.home.title,
  description: ar.home.description,
  alternates: alternatesForAr('/ar'),
};

const practiceHrefs = ['/ar/services/servicenow-implementation', '/ar/services/ai-agents', '/ar/services/website-development'];

export default function ArabicHome() {
  return (
    <>
      {/* Hero */}
      <Section tone="paper" className="pt-16 md:pt-24 pb-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.15em] text-sea mb-6">
              {ar.meta.tagline}
            </p>

            <h1 className="font-arabic leading-[1.5] text-ink mb-7 text-[clamp(1.9rem,4.6vw,3.1rem)] font-semibold">
              {ar.home.headline}
              <br />
              {ar.home.headline2}
              <br />
              <span className="text-sea">{ar.home.headline3}</span>
            </h1>

            <p className="text-[17px] leading-[1.9] text-slate mb-9 max-w-2xl">{ar.home.sub}</p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/ar/get-started"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold bg-ink text-paper hover:bg-sea transition-colors"
              >
                {ar.common.startProject}
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <PillLink href="/ar/engage" variant="outline">
                {ar.common.howWeEngage}
              </PillLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Three practices */}
      <Section tone="surface" divide>
        <Container>
          <Eyebrow className="mb-8">{ar.home.practicesEyebrow}</Eyebrow>

          <div className="grid md:grid-cols-3 gap-5">
            {ar.home.practices.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-hairline bg-paper p-7 flex flex-col"
              >
                <h2 className="font-arabic text-xl font-semibold text-ink mb-3">{p.title}</h2>
                <p className="text-[15px] leading-[1.85] text-slate flex-1 mb-6">{p.desc}</p>
                <Link
                  href={practiceHrefs[i]}
                  className="inline-flex items-center gap-2 py-1 text-[14px] font-medium text-sea hover:text-sea-deep transition-colors"
                >
                  {p.cta}
                  <ArrowLeft className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Proof band */}
      <Section tone="ink">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {ar.home.proofs.map((p) => (
              <div key={p.title}>
                <h3 className="font-arabic text-2xl font-semibold text-onink mb-3">{p.title}</h3>
                <p className="text-[14.5px] leading-[1.85] text-onink-muted">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-onink-line flex flex-wrap items-center justify-between gap-4">
            <p className="text-[14px] text-onink-muted">{ar.meta.ctaStrip}</p>
            <Link
              href="/ar/contactus"
              className="inline-flex items-center gap-2 py-1 text-[14px] font-medium text-sea-soft hover:text-onink transition-colors"
            >
              {ar.common.talkToAgent}
              <ArrowLeft className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-arabic text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold leading-[1.5] text-ink mb-5">
              {ar.home.ctaHeadline} <span className="text-sea">{ar.home.ctaAccent}</span>
            </h2>
            <p className="text-[16px] leading-[1.9] text-slate mb-8">{ar.common.ctaSub}</p>
            <Link
              href="/ar/get-started"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold bg-ink text-paper hover:bg-sea transition-colors"
            >
              {ar.common.startProject}
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
