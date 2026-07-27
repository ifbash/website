'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/scroll-animation';
import { ArrowRight, ArrowDown, Settings, Bot, Globe } from 'lucide-react';
import Link from 'next/link';
import { HeroShowcase } from '@/components/hero-showcase';
import { VoiceHero } from '@/components/voice-hero';
import { HeroBackground } from '@/components/hero-background';
import { ProcessSteps } from '@/components/process-steps';
import { Scribble, CircleMark, SquiggleArrow, MarginNote } from '@/components/hand-drawn';
import {
  Section, Container, DisplayHeading, Accented, PillLink, ProofBand, CtaBand,
} from '@/components/site';

const pillarIcons: Record<string, React.ElementType> = {
  ServiceNow: Settings,
  'AI & Agents': Bot,
  'Web & Mobile': Globe,
};

// The three practices, ServiceNow first as the proven one. Each pillar
// links only to pages that exist — no aspirational nav.
const pillars = [
  {
    label: 'ServiceNow',
    note: 'Our proven practice',
    desc: 'Implementations in weeks, managed services, CRM, and the full product portfolio — run by the people who built it.',
    links: [
      { label: 'ServiceNow Implementation', href: '/services/servicenow-implementation' },
      { label: 'Managed Services', href: '/services/managed-services-support' },
      { label: 'Product portfolio', href: '/portfolio' },
    ],
    href: '/services',
  },
  {
    label: 'AI & Agents',
    note: 'You just talked to one',
    desc: 'Chat and voice agents that qualify leads, resolve tickets, and book meetings — engineered on Claude with guardrails and evals.',
    links: [
      { label: 'AI Agents', href: '/services/ai-agents' },
      { label: 'Voice Agents', href: '/services/voice-agents' },
      { label: 'AI Engineering on Claude', href: '/services/claude-ai-engineering' },
    ],
    href: '/services/ai-agents',
  },
  {
    label: 'Web & Mobile',
    note: 'Like the page you are on',
    desc: 'Websites, web apps, and iOS/Android products designed and shipped end to end — with AI inside from day one.',
    links: [
      { label: 'Website Development', href: '/services/website-development' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'Our work & demos', href: '/work' },
    ],
    href: '/services/web-mobile-development',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ifBash',
            url: 'https://ifbash.com',
            logo: 'https://ifbash.com/images/logo.png',
            email: 'connect@ifbash.com',
            description:
              'ifBash is a technology consultancy across three practices: ServiceNow delivery, AI agents engineered on Claude, and web & mobile product development.',
            serviceArea: 'Global',
            knowsAbout: [
              'ServiceNow Implementation', 'ServiceNow Managed Services', 'ITSM', 'ServiceNow GRC', 'ServiceNow SecOps',
              'AI Agents', 'Voice AI Agents', 'Agentic AI', 'Anthropic Claude', 'Retrieval Augmented Generation',
              'AI Engineering', 'Workflow Automation', 'ServiceNow Now Assist',
              'Web Development', 'Next.js', 'Mobile App Development', 'iOS Development', 'Android Development',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'ServiceNow, AI & Digital Product Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ServiceNow Implementation', url: 'https://ifbash.com/services/servicenow-implementation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ServiceNow Managed Services', url: 'https://ifbash.com/services/managed-services-support' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agents', url: 'https://ifbash.com/services/ai-agents' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Voice AI Agents', url: 'https://ifbash.com/services/voice-agents' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Engineering on Claude', url: 'https://ifbash.com/services/claude-ai-engineering' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development', url: 'https://ifbash.com/services/website-development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development', url: 'https://ifbash.com/services/mobile-app-development' } },
              ],
            },
            sameAs: ['https://linkedin.com/company/ifbash', 'https://twitter.com/ifbashx', 'https://youtube.com/@c-ifbash'],
          }),
        }}
      />

      {/* ── 1 · HERO — the agent speaks ── */}
      <section className="relative overflow-hidden bg-paper">
        <HeroBackground />

        <Container className="relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center min-h-[64vh]">

            {/* Left — the message */}
            <div>
              <motion.h1
                {...fadeUp(0)}
                className="font-display leading-[1.06] mb-7 text-ink"
                style={{ fontSize: 'clamp(2.5rem, 5.6vw, 4.25rem)', letterSpacing: '-0.030em' }}
              >
                We build ServiceNow.
                <br />
                Then we build the
                <br />
                <span className="relative inline-block text-sea">
                  AI layer on top.
                  <CircleMark className="pointer-events-none absolute -inset-x-4 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+2rem)] text-marker/80" />
                </span>
              </motion.h1>
              <motion.p {...fadeUp(0.12)} className="text-lg leading-relaxed max-w-md mb-9 text-slate">
                Implementation and managed services are the practice that pays the bills. The
                agents we put on top are the reason clients stay. Don&apos;t read about it — ask
                the agent on this page; we built it.
              </motion.p>
              <motion.div {...fadeUp(0.24)} className="flex flex-wrap items-center gap-5">
                <PillLink href="/get-started" variant="primary" size="lg">
                  Start a project <ArrowRight className="h-4 w-4" />
                </PillLink>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-slate hover:text-sea transition-colors"
                >
                  Watch the work <ArrowDown className="h-4 w-4" />
                </a>
              </motion.div>
            </div>

            {/* Right — the speaking agent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <VoiceHero />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 2 · THE WORK — demo reel ── */}
      <Section id="work" tone="surface" divide innerClassName="max-w-5xl">
        <ScrollAnimation className="text-center mb-12">
          <DisplayHeading as="h2" size="md" className="mb-4">
            <span className="relative inline-block">
              See it.
              <Scribble className="pointer-events-none absolute -bottom-3 left-0 h-4 w-full text-marker/80" />
            </span>{' '}
            Don&apos;t read it.
          </DisplayHeading>
          <p className="text-base max-w-lg mx-auto text-slate">
            A service desk that resolves itself. Agents that talk. Apps and websites that ship.
            Five demos, thirty seconds.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <HeroShowcase />
        </ScrollAnimation>
      </Section>

      {/* ── 3 · THE THREE PRACTICES ── */}
      <Section tone="paper">
        <ScrollAnimation className="mb-12 max-w-2xl">
          <DisplayHeading as="h2" size="md" className="mb-4">
            One platform practice. <Accented>An AI layer on top of it.</Accented>
          </DisplayHeading>
          <p className="text-base text-slate">
            ServiceNow is where most of our delivery happens today. AI agents and product
            engineering are where we&apos;re growing — and this site is built with both.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <SquiggleArrow className="h-8 w-14 text-slate-faint" />
            <MarginNote className="text-sm text-slate">three practices, one team</MarginNote>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map(({ label, note, desc, links, href }) => {
            const Icon = pillarIcons[label];
            return (
              <ScrollAnimation key={label} className="h-full">
                <div className="group h-full flex flex-col rounded-2xl border border-hairline bg-surface p-7 transition-all duration-300 hover:border-sea-soft hover:shadow-[0_8px_30px_rgba(14,17,32,0.06)]">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sea-tint flex items-center justify-center shrink-0 group-hover:bg-sea-strong transition-colors">
                      {Icon && <Icon className="h-5 w-5 text-sea" />}
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase text-sea text-right">
                      {note}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-3">{label}</h3>
                  <p className="text-[15px] leading-relaxed text-slate mb-6">{desc}</p>

                  <ul className="space-y-2.5 mb-6">
                    {links.map(({ label: l, href: h }) => (
                      <li key={h}>
                        <Link
                          href={h}
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-ink-body hover:text-sea transition-colors"
                        >
                          <span className="h-1 w-1 rounded-full bg-sea shrink-0" />
                          <span className="underline-offset-4 group-hover/link:underline">{l}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-sea hover:text-sea-deep transition-colors"
                  >
                    Explore {label}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </Section>

      {/* ── 3b · HOW WE WORK ── */}
      <Section tone="wash" divide>
        <ScrollAnimation className="mb-12 max-w-2xl">
          <DisplayHeading as="h2" size="md" className="mb-4">
            From first message to{' '}
            <Accented>
              production in{' '}
              <span className="relative inline-block whitespace-nowrap">
                four steps.
                <CircleMark className="pointer-events-none absolute -inset-x-3 -inset-y-1 h-[calc(100%+0.5rem)] w-[calc(100%+1.5rem)] text-marker/80" />
              </span>
            </Accented>
          </DisplayHeading>
          <p className="text-base text-slate">
            No procurement maze. No bait-and-switch. Just a clear plan, transparent builds, and a team that ships.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <ProcessSteps />
        </ScrollAnimation>
      </Section>

      {/* ── 3c · THE STATEMENT — one editorial moment, no card grid ── */}
      <Section tone="paper" pad="loose">
        <ScrollAnimation className="max-w-4xl mx-auto text-center">
          <h2
            className="font-display text-ink leading-[1.12]"
            style={{ fontSize: 'clamp(2.3rem, 5.8vw, 4.4rem)', letterSpacing: '-0.028em' }}
          >
            Yes —{' '}
            <span className="relative inline-block whitespace-nowrap">
              AI helped
              <CircleMark className="pointer-events-none absolute -inset-x-4 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+2rem)] text-marker/80" />
            </span>{' '}
            build this site.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-slate max-w-2xl mx-auto">
            That&apos;s the point. We build with the same tools we put in your hands —
            the craft is in the judgment, the guardrails, and the engineers who stay
            past go-live.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3">
            <SquiggleArrow className="h-10 w-16 -scale-y-100 text-slate-faint" />
            <MarginNote className="text-sm text-slate">the page you&apos;re on included</MarginNote>
          </div>
        </ScrollAnimation>
      </Section>

      {/* ── 4 · PROOF — dark band ── */}
      <ProofBand />

      {/* ── 5 · CTA ── */}
      <CtaBand secondary={{ label: 'Meet ifBash', href: '/company/about-us' }} />
    </>
  );
}
