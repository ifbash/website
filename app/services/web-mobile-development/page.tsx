import Link from 'next/link';
import { ArrowRight, Globe, Smartphone, Paintbrush, Server, Sparkles, LifeBuoy } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, PhaseGrid, FaqSection,
  CtaBand, FeatureGrid, type Feature, type Phase, type Faq,
} from '@/components/site';

const tracks = [
  {
    icon: Globe,
    name: 'Website Development',
    desc: 'Marketing sites, web applications, and internal tools on Next.js — fast, accessible, and structured so search engines and AI assistants can both read them.',
    points: ['Marketing sites & web apps', 'Performance and SEO as requirements', 'Modernization without a traffic cliff'],
    href: '/services/website-development',
  },
  {
    icon: Smartphone,
    name: 'Mobile App Development',
    desc: 'iOS and Android from one codebase — offline-capable, push-enabled, submitted to both stores under your own accounts.',
    points: ['One codebase, both stores', 'Offline-first data and sync', 'Store submission and release pipeline'],
    href: '/services/mobile-app-development',
  },
];

const shared: Feature[] = [
  {
    icon: Paintbrush,
    title: 'Product design',
    desc: 'Flows, interface, and a design system built around your users — approved before anything is engineered.',
  },
  {
    icon: Server,
    title: 'Backends & APIs',
    desc: 'The data model, APIs, and integrations underneath, built by the same team that builds the front end.',
  },
  {
    icon: Sparkles,
    title: 'AI where it earns its place',
    desc: 'Assistants, smart search, and agents included from day one — and left out where they would only add noise.',
  },
  {
    icon: LifeBuoy,
    title: 'Support after launch',
    desc: 'A retainer for ongoing development and maintenance, run the same way as our ServiceNow managed services.',
  },
];

const phases: Phase[] = [
  { phase: 'Define', items: ['Users, goals, and success measures', 'Scope that fits the budget and the date'] },
  { phase: 'Design', items: ['Wireframes through to polished UI', 'You sign off before we build'] },
  { phase: 'Build', items: ['Working software demoed weekly', 'Backend and client built together'] },
  { phase: 'Launch & grow', items: ['Deploy, monitor, measure', 'Iterate on real usage data'] },
];

const faqs: Faq[] = [
  {
    q: 'Should we build a website, a web app, or a mobile app?',
    a: 'Start with the cheapest thing that answers the question. Most products need a web build; an app earns its extra cost when you genuinely need push, offline, or device hardware. We will give you that read during scoping rather than after.',
  },
  {
    q: 'Why does a ServiceNow consultancy build products?',
    a: 'Because the skills overlap more than the labels suggest — integration, data modelling, workflow, and enterprise security are the same problems in a different frame. The AI work in particular sits across both.',
  },
  {
    q: 'Can you work alongside our existing team?',
    a: 'Yes. We often provide the senior layer — architecture, design system, review — while your team does the day-to-day build, or take a defined component and deliver it end to end.',
  },
  {
    q: 'Do we own the code?',
    a: 'Completely. Repositories, cloud accounts, store accounts, signing keys, and documentation are yours from day one, with a handover session at the end.',
  },
];

export default function WebMobilePracticePage() {
  return (
    <>
      <PageHero
        tags={['Web', 'Mobile', 'AI-native']}
        eyebrow="Web & Mobile"
        headline="Digital products,"
        accent="built end to end."
        sub="Design, frontend, backend, and the AI inside — from one team. Two tracks, one way of working, and the same handover promise at the end of both."
        primary={{ label: 'Scope your build', href: '/get-started' }}
        secondary={{ label: 'See our work', href: '/work' }}
      />

      {/* THE TWO TRACKS */}
      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">Two tracks</Eyebrow>
          <DisplayHeading as="h2" size="md">
            Pick the surface. <Accented>Same team behind both.</Accented>
          </DisplayHeading>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {tracks.map(({ icon: Icon, name, desc, points, href }) => (
            <Link
              key={name}
              href={href}
              className="group flex flex-col rounded-2xl border border-hairline bg-paper p-8 transition-all duration-300 hover:border-navy-soft hover:shadow-[0_8px_30px_rgba(20,18,16,0.06)] hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-tint group-hover:bg-navy-strong flex items-center justify-center mb-5 transition-colors">
                <Icon className="h-6 w-6 text-navy" />
              </div>
              <h2 className="font-display text-2xl text-ink mb-3">{name}</h2>
              <p className="text-[15px] leading-relaxed text-stone mb-6">{desc}</p>
              <ul className="space-y-2 mb-6">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-stone">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-navy shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                Explore {name}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* WHAT BOTH INCLUDE */}
      <Section tone="paper">
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">In both tracks</Eyebrow>
          <DisplayHeading as="h2" size="md">
            The whole product, <Accented>not just the screens.</Accented>
          </DisplayHeading>
        </div>
        <FeatureGrid features={shared} columns={2} />
      </Section>

      <Section tone="ink">
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule onInk className="mb-4">How we work</Eyebrow>
          <DisplayHeading as="h2" size="sm" onInk>
            Working software every week.
          </DisplayHeading>
        </div>
        <PhaseGrid phases={phases} />
      </Section>

      <FaqSection faqs={faqs} heading="Before you brief us." tone="surface" />

      <CtaBand
        headline="Have something"
        accent="to build?"
        sub="Share the idea — two working days later you'll have an approach, a timeline, and a number."
        primary={{ label: 'Scope my build', href: '/get-started' }}
        secondary={{ label: 'How we engage', href: '/engage' }}
      />
    </>
  );
}
