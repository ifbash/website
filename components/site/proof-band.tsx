import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from './section';

export type Proof = { big: string; small: string };

/**
 * The dark commitments band. Everything here must be a commitment ifBash
 * controls — never a client outcome or a metric that can't be shown.
 */
export const DEFAULT_PROOFS: Proof[] = [
  { big: '48 hours', small: 'From first contact to a scoped plan — approach, timeline, team.' },
  { big: 'Senior-led', small: 'The people who scope your project are the people who build it.' },
  { big: 'This site is the demo', small: 'The agent, the voice, the page you’re on — built by us, on Claude and Next.js.' },
];

export function ProofBand({
  proofs = DEFAULT_PROOFS,
  note = 'Serving clients globally · Hyderabad → the world',
  link = { label: 'Get a call from our agent', href: '/agent' },
}: {
  proofs?: Proof[];
  note?: string;
  link?: { label: string; href: string } | null;
}) {
  return (
    <Section tone="ink" pad="tight">
      <div className="grid sm:grid-cols-3 gap-10 items-start">
        {proofs.map(({ big, small }) => (
          <div key={big}>
            <div className="font-display text-2xl sm:text-[1.7rem] mb-2.5 text-onink">{big}</div>
            <p className="text-sm leading-relaxed text-onink-muted">{small}</p>
          </div>
        ))}
      </div>

      {(note || link) && (
        <div className="mt-10 pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-onink-line">
          {note && <p className="text-sm text-onink-muted">{note}</p>}
          {link && (
            <Link
              href={link.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-soft hover:underline underline-offset-4 transition-colors"
            >
              {link.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}
    </Section>
  );
}
