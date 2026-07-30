'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Section } from './section';
import { Eyebrow } from './eyebrow';
import { DisplayHeading } from './display-heading';

export type Faq = { q: string; a: string };

/**
 * FAQ accordion + the FAQPage JSON-LD, which used to be hand-written on
 * ~50 pages. Emitting both from one place keeps the structured data in
 * sync with what's actually rendered.
 */
export function FaqSection({
  faqs,
  heading = 'Questions we hear a lot.',
  eyebrow = 'FAQ',
  askHref = '/get-started',
  askLabel = 'Ask yours directly',
  tone = 'surface',
}: {
  faqs: Faq[];
  heading?: string;
  eyebrow?: string;
  askHref?: string;
  askLabel?: string;
  tone?: 'paper' | 'surface';
}) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <Section tone={tone} divide>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />

      <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
        <div>
          <Eyebrow rule className="mb-4">
            {eyebrow}
          </Eyebrow>
          <DisplayHeading size="sm" className="mb-4">
            {heading}
          </DisplayHeading>
          <Link
            href={askHref}
            className="inline-flex items-center gap-2 py-1 font-semibold text-sm text-sea hover:text-sea-deep hover:underline underline-offset-4 transition-colors"
          >
            {askLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="lg:col-span-2 space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={q} className="border border-hairline rounded-2xl overflow-hidden bg-surface">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-wash transition-colors"
              >
                <span className="font-semibold text-ink-body text-sm">{q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-faint shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <p className="px-5 pb-4 text-sm text-slate leading-relaxed">{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
