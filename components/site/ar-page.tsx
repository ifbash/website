import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section, Container } from '@/components/site';
import { ar } from '@/lib/i18n/ar';

/**
 * Shared shell for the Arabic pages.
 *
 * Everything visible comes from lib/i18n/ar.ts — no Arabic string is written
 * inline in a page file, so a native reviewer only ever edits the dictionary.
 * Arrows point left because the whole subtree is RTL.
 */
export function ArPage({
  eyebrow,
  headline,
  accent,
  sub,
  items,
  itemsEyebrow,
  note,
  children,
}: {
  eyebrow: string;
  headline: string;
  accent: string;
  sub: string;
  itemsEyebrow?: string;
  items?: ReadonlyArray<{ readonly title: string; readonly desc: string }>;
  note?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Section tone="paper" className="pt-14 md:pt-20 pb-14">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.15em] text-sea mb-5">{eyebrow}</p>
            <h1 className="font-arabic leading-[1.5] text-ink mb-6 text-[clamp(1.75rem,4.2vw,2.8rem)] font-semibold">
              {headline} <span className="text-sea">{accent}</span>
            </h1>
            <p className="text-[16.5px] leading-[1.9] text-slate mb-8 max-w-2xl">{sub}</p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/ar/get-started"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14.5px] font-semibold bg-ink text-paper hover:bg-sea transition-colors"
              >
                {ar.common.startProject}
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                href="/ar/engage"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14.5px] font-medium border border-hairline bg-surface text-ink-body hover:border-sea-strong hover:text-sea transition-colors"
              >
                {ar.common.howWeEngage}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {items && items.length > 0 && (
        <Section tone="surface" divide>
          <Container>
            {itemsEyebrow && (
              <p className="text-[11px] font-semibold tracking-[0.15em] text-sea mb-8">
                {itemsEyebrow}
              </p>
            )}
            <div className="grid md:grid-cols-2 gap-5">
              {items.map((it) => (
                <div key={it.title} className="rounded-2xl border border-hairline bg-paper p-6">
                  <h2 className="font-arabic text-lg font-semibold text-ink mb-2.5">{it.title}</h2>
                  <p className="text-[14.5px] leading-[1.85] text-slate">{it.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {children}

      {note && (
        <Section tone="wash">
          <Container>
            <p className="text-[14.5px] leading-[1.9] text-slate max-w-2xl border-r-2 border-sea-soft pr-5">
              {note}
            </p>
          </Container>
        </Section>
      )}

      <Section tone="ink">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-arabic text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-[1.5] text-onink mb-5">
              {ar.home.ctaHeadline} <span className="text-sea-soft">{ar.home.ctaAccent}</span>
            </h2>
            <p className="text-[15.5px] leading-[1.9] text-onink-muted mb-8">{ar.common.ctaSub}</p>
            <Link
              href="/ar/get-started"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold bg-paper text-ink hover:bg-onink transition-colors"
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
