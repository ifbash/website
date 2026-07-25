import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from './container';
import { Eyebrow } from './eyebrow';
import { DisplayHeading, Accented } from './display-heading';
import { PillLink } from './pill-button';

export type HeroCta = { label: string; href: string };

/**
 * Standard inner-page hero — paper background, warm glow, serif headline.
 * Replaces the dark #07071a hero with the dot-grid overlay that used to
 * open every services / portfolio / industry page.
 */
export function PageHero({
  eyebrow,
  headline,
  accent,
  sub,
  primary,
  secondary,
  tags,
  children,
}: {
  eyebrow?: string;
  headline: string;
  /** Second clause, rendered in the accent color on its own line. */
  accent?: string;
  sub?: string;
  primary?: HeroCta;
  secondary?: HeroCta;
  tags?: string[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        className="absolute top-[-200px] right-[-120px] w-[620px] h-[620px] rounded-full pointer-events-none opacity-[0.22]"
        style={{ background: 'radial-gradient(circle, #A6DCE5, transparent 65%)' }}
      />

      <Container className="relative z-10 py-16 lg:py-24">
        <div className="max-w-3xl">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-sea-strong bg-sea-tint px-3 py-1 text-xs font-semibold text-sea"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                  {t}
                </span>
              ))}
            </div>
          )}

          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}

          <DisplayHeading as="h1" size="xl" className="mb-6">
            {headline}
            {accent && (
              <>
                <br />
                <Accented>{accent}</Accented>
              </>
            )}
          </DisplayHeading>

          {sub && <p className="text-lg leading-relaxed text-slate max-w-xl mb-9">{sub}</p>}

          {(primary || secondary) && (
            <div className="flex flex-wrap items-center gap-4">
              {primary && (
                <PillLink href={primary.href} variant="primary" size="lg">
                  {primary.label} <ArrowRight className="h-4 w-4" />
                </PillLink>
              )}
              {secondary && (
                <PillLink href={secondary.href} variant="outline" size="lg">
                  {secondary.label}
                </PillLink>
              )}
            </div>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
