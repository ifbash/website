import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, CtaBand,
} from '@/components/site';
import { servicenowServices, aiAgentsItems, webMobileItems } from '@/components/nav-data';

export const metadata: Metadata = {
  title: 'Services — ServiceNow, AI Agents, Web & Mobile',
  description:
    'ServiceNow implementation and managed services, AI agents engineered on Claude, and web & mobile product development.',
  keywords: [
    'ServiceNow implementation', 'ServiceNow managed services', 'AI agents',
    'voice agents', 'AI engineering', 'web development', 'mobile app development',
  ],
  alternates: { canonical: 'https://ifbash.com/services' },
};

const practices = [
  {
    label: 'ServiceNow',
    note: 'The practice',
    blurb: 'Implement it, extend it, integrate it, and keep it running. Most of our delivery volume sits here.',
    items: servicenowServices,
    more: { label: 'All ServiceNow products', href: '/portfolio' },
  },
  {
    label: 'AI & Agents',
    note: 'The layer on top',
    blurb: 'Agents that answer, act, and hand off — engineered on Claude, wired into the platform we already run for you, with guardrails, evals, and cost control.',
    items: aiAgentsItems,
    more: { label: 'See the agents we run', href: '/work' },
  },
  {
    label: 'Web & Mobile',
    note: 'The surfaces they live in',
    blurb: 'Websites, web applications, and mobile apps — the surfaces your customers and staff actually touch, shipped and handed over in your name.',
    items: webMobileItems,
    more: { label: 'How we engage', href: '/engage' },
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        headline="ServiceNow,"
        accent="and the AI layer on top."
        sub="Implementation and managed services are the practice that pays the bills. The AI layer we build on top is what makes the platform worth more the year after go-live — and this site is built with both."
        primary={{ label: 'Scope a project', href: '/get-started' }}
        secondary={{ label: 'How we engage', href: '/engage' }}
      />

      {practices.map((p, i) => (
        <Section key={p.label} tone={i % 2 === 0 ? 'surface' : 'paper'} divide>
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <Eyebrow rule className="mb-4">{p.note}</Eyebrow>
              <DisplayHeading as="h2" size="sm" className="mb-4">
                {p.label}
              </DisplayHeading>
              <p className="text-base text-slate leading-relaxed mb-6">{p.blurb}</p>
              <Link
                href={p.more.href}
                className="inline-flex items-center gap-2 py-1 text-sm font-semibold text-sea hover:text-sea-deep transition-colors"
              >
                {p.more.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {p.items.map(({ title, href, icon: Icon, note }) => (
                <Link
                  key={href + title}
                  href={href}
                  className="group flex items-start gap-3.5 rounded-2xl border border-hairline bg-paper p-5 transition-all duration-300 hover:border-sea-soft hover:shadow-[0_8px_30px_rgba(24,19,18,0.06)] hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-sea-tint group-hover:bg-sea-strong flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="h-5 w-5 text-sea" />
                  </div>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ink-body group-hover:text-sea transition-colors leading-snug">
                      {title}
                    </span>
                    {note && <span className="block text-[13px] text-slate mt-1 leading-relaxed">{note}</span>}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section tone="ink" pad="tight">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['A written plan in two days', 'From the first call to a document you can act on: approach, sequence, team, and an estimate you can budget against.'],
            ['The same people throughout', 'The engineers who scope your project are the engineers who build it. If that would change, we say so up front.'],
            ['Built to hand over', 'Repositories, accounts, keys, and documentation are yours from day one. Leaving us should be easy.'],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="font-display text-xl mb-2 text-onink">{t}</div>
              <p className="text-sm leading-relaxed text-onink-muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        headline="Not sure which"
        accent="you need?"
        sub="Describe the problem rather than the service. We'll point you at the right one — or tell you plainly that it isn't us."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'Ask our agent', href: '/agent' }}
      />
    </>
  );
}
