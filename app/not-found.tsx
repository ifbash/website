import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, DisplayHeading, Accented, Eyebrow, PillLink } from '@/components/site';

export default function NotFound() {
  return (
    <Section tone="paper" pad="loose">
      <div className="max-w-2xl mx-auto text-center">
        <Eyebrow centered className="mb-5">404</Eyebrow>
        <DisplayHeading as="h1" size="lg" className="mb-6">
          That page <Accented>isn&apos;t here.</Accented>
        </DisplayHeading>
        <p className="text-lg text-slate mb-10">
          It may have moved during our recent rebuild. These are the places people usually want.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: 'ServiceNow services', href: '/services' },
            { label: 'AI agents', href: '/services/ai-agents' },
            { label: 'Web & mobile', href: '/services/web-mobile-development' },
            { label: 'Product portfolio', href: '/portfolio' },
            { label: 'Industries', href: '/industries' },
            { label: 'Our work', href: '/work' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-hairline bg-surface px-5 py-2.5 text-sm font-medium text-ink-body transition-all hover:border-sea-soft hover:text-sea hover:-translate-y-0.5"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5">
          <PillLink href="/" variant="primary" size="lg">
            Back home <ArrowRight className="h-4 w-4" />
          </PillLink>
          <PillLink href="/agent" variant="quiet" size="lg">
            Ask our agent to find it
          </PillLink>
        </div>
      </div>
    </Section>
  );
}
