import { ArrowRight, Globe, Gauge, Search, Paintbrush, Server, RefreshCw } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, FeatureGrid, PhaseGrid,
  FaqSection, CtaBand, PillLink, type Feature, type Phase, type Faq,
} from '@/components/site';

const offerings: Feature[] = [
  {
    icon: Globe,
    title: 'Marketing sites',
    desc: 'Fast, well-structured sites that rank and convert — built to be edited by your team, not held hostage by ours.',
    points: ['Static-first rendering', 'CMS or in-repo content', 'Analytics wired from day one'],
  },
  {
    icon: Server,
    title: 'Web applications',
    desc: 'Dashboards, portals, and internal tools with real authentication, real data, and real permissions.',
    points: ['Auth and role-based access', 'API and database design', 'Built for the second year, not just launch'],
  },
  {
    icon: Paintbrush,
    title: 'Product design',
    desc: 'Interface and experience designed around your users and your content — not dropped into a template.',
    points: ['Wireframes before pixels', 'A design system, not one-off screens', 'You approve before we build'],
  },
  {
    icon: Gauge,
    title: 'Performance',
    desc: 'Core Web Vitals treated as a requirement, measured in CI, not as a post-launch clean-up task.',
    points: ['Budget set before build', 'Image and font strategy', 'Measured on real devices'],
  },
  {
    icon: Search,
    title: 'SEO & AI-search readiness',
    desc: 'Semantic markup, structured data, and clean information architecture so both search engines and AI assistants can read you.',
    points: ['Structured data (JSON-LD)', 'Canonical and sitemap hygiene', 'Content that answers real queries'],
  },
  {
    icon: RefreshCw,
    title: 'Modernization',
    desc: 'Legacy sites rebuilt on a current stack — keeping the URLs, the rankings, and whatever already works.',
    points: ['URL and redirect mapping', 'Incremental migration', 'No traffic cliff at launch'],
  },
];

const phases: Phase[] = [
  { phase: 'Define', items: ['Users, goals, and what success looks like', 'Scope that fits the budget and the date'] },
  { phase: 'Design', items: ['Wireframes through to polished UI', 'You sign off before a line is built'] },
  { phase: 'Build', items: ['Working software demoed every week', 'AI features included where they earn their place'] },
  { phase: 'Launch & grow', items: ['Deploy, monitor, measure', 'Iterate on real usage, not assumptions'] },
];

const faqs: Faq[] = [
  {
    q: 'What do you build on?',
    a: 'Next.js and React, deployed to Vercel or your own infrastructure. We choose boring, proven technology on purpose — and we explain the reasoning rather than asking you to trust it.',
  },
  {
    q: 'Can I see something you have built?',
    a: 'You are reading one. This site — the design system, the voice agent, the chat widget, the structured data — is our own build, and our work page walks through how each piece is put together.',
  },
  {
    q: 'Can you add AI features to the site?',
    a: 'Yes, and that is our edge. Assistants, smart search, and agents can be part of the product from day one because the same team builds both. We will also tell you when AI adds nothing.',
  },
  {
    q: 'Do we own the code?',
    a: 'Completely. Repositories, documentation, and a handover session so your team — or any other vendor — can carry it forward without us.',
  },
  {
    q: 'How long does a site take?',
    a: 'A focused marketing site is usually a few weeks. A full web application is typically one to three months to a first release, shipped in weekly increments you can see and use.',
  },
  {
    q: 'Will our rankings survive a rebuild?',
    a: 'That is a planning problem, not a hope. We map every existing URL, keep or redirect each one, preserve metadata, and compare crawl reports before and after launch.',
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <PageHero
        tags={['Next.js', 'Performance', 'AI-native']}
        eyebrow="Web & Mobile"
        headline="Websites and web apps,"
        accent="AI-native from day one."
        sub="Fast, accessible, SEO-ready builds on Next.js — with assistants and agents inside the product rather than bolted on afterwards."
        primary={{ label: 'Scope your build', href: '/get-started' }}
        secondary={{ label: 'See our work', href: '/work' }}
      />

      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">What we build</Eyebrow>
          <DisplayHeading as="h2" size="md">
            From landing page to <Accented>full product.</Accented>
          </DisplayHeading>
        </div>
        <FeatureGrid features={offerings} />
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

      <Section tone="paper" divide>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow rule className="mb-4">The reference</Eyebrow>
            <DisplayHeading as="h2" size="sm" className="mb-5">
              You are looking at the portfolio.
            </DisplayHeading>
            <p className="text-base text-stone leading-relaxed mb-4">
              This site is our own work: the design system, the fluid type scale, the structured
              data on every page, the agent in the corner, and the voice agent on the homepage.
            </p>
            <p className="text-base text-stone leading-relaxed mb-7">
              Open the developer tools. Run a Lighthouse audit. That is a more honest reference
              than a screenshot of someone else&apos;s project.
            </p>
            <PillLink href="/work" variant="outline" size="lg">
              How this site is built <ArrowRight className="h-4 w-4" />
            </PillLink>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface p-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-navy mb-5">
              What ships with every build
            </div>
            <ul className="space-y-4">
              {[
                ['Repository access from week one', 'You watch it being built, not a reveal at the end.'],
                ['A design system, not screens', 'The tenth page costs a fraction of the first.'],
                ['Structured data and sitemaps', 'Machine-readable from launch, not retrofitted.'],
                ['Documentation and handover', 'Written for whoever maintains it next, including you.'],
              ].map(([t, d]) => (
                <li key={t} className="border-l-2 border-navy-strong pl-4">
                  <div className="text-sm font-semibold text-ink-body mb-1">{t}</div>
                  <div className="text-sm text-stone leading-relaxed">{d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FaqSection faqs={faqs} heading="Before you brief us." />

      <CtaBand
        headline="Have something"
        accent="to build?"
        sub="Share the idea — we'll come back within 48 hours with an approach, a timeline, and a number."
        primary={{ label: 'Scope my build', href: '/get-started' }}
        secondary={{ label: 'Mobile apps too', href: '/services/mobile-app-development' }}
      />
    </>
  );
}
