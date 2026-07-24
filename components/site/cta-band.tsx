import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from './section';
import { DisplayHeading, Accented } from './display-heading';
import { PillLink } from './pill-button';
import type { HeroCta } from './page-hero';

/**
 * Closing CTA. Replaces the indigo→violet gradient panel that used to end
 * every page.
 */
export function CtaBand({
  headline = "Let's build",
  accent = "what's next.",
  sub = 'Tell us what you need — ServiceNow, an agent, an app, a site. A concrete plan in 48 hours. No pressure.',
  primary = { label: 'Start a project', href: '/get-started' },
  secondary,
  tone = 'paper',
}: {
  headline?: string;
  accent?: string;
  sub?: string;
  primary?: HeroCta;
  secondary?: HeroCta;
  tone?: 'paper' | 'surface';
}) {
  return (
    <Section tone={tone} pad="loose" divide className="text-center">
      <div className="max-w-2xl mx-auto">
        <DisplayHeading as="h2" size="lg" className="mb-6">
          {headline} {accent && <Accented>{accent}</Accented>}
        </DisplayHeading>
        <p className="text-lg text-stone mb-10 max-w-md mx-auto">{sub}</p>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <PillLink href={primary.href} variant="primary" size="lg">
            {primary.label} <ArrowRight className="h-4 w-4" />
          </PillLink>
          {secondary && (
            <PillLink href={secondary.href} variant="quiet" size="lg">
              {secondary.label}
            </PillLink>
          )}
        </div>
      </div>
    </Section>
  );
}
