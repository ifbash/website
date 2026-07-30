import { ArrowRight, Smartphone, WifiOff, Bell, ShieldCheck, UploadCloud, Sparkles } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, FeatureGrid, PhaseGrid,
  FaqSection, CtaBand, PillLink, type Feature, type Phase, type Faq,
} from '@/components/site';
import { BreadcrumbSchema, ServiceSchema, SITE_URL } from '@/components/seo-schemas';

const offerings: Feature[] = [
  {
    icon: Smartphone,
    title: 'iOS & Android from one codebase',
    desc: 'Both platforms from a single build, with native behaviour where it matters and a shared core everywhere else.',
    points: ['Platform-correct navigation', 'Native modules where needed', 'One team, not two'],
  },
  {
    icon: Sparkles,
    title: 'AI inside the app',
    desc: 'In-app assistants, smart search, and agents that act — designed into the product rather than added as a tab.',
    points: ['On-device or API-backed', 'Streaming responses', 'Graceful offline degradation'],
  },
  {
    icon: WifiOff,
    title: 'Offline-first data',
    desc: 'Apps that keep working on a train. Local state, background sync, and honest conflict handling.',
    points: ['Local-first storage', 'Background sync', 'Predictable conflict rules'],
  },
  {
    icon: Bell,
    title: 'Push & engagement',
    desc: 'Notifications wired to real events in your systems, with the permission flow designed so people say yes.',
    points: ['Event-driven, not blasted', 'Deep links to the right screen', 'Opt-in designed, not assumed'],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise readiness',
    desc: 'SSO, device policy, and audit expectations handled up front rather than discovered during security review.',
    points: ['SSO and MDM-aware', 'Secure credential storage', 'Security review support'],
  },
  {
    icon: UploadCloud,
    title: 'Store submission & releases',
    desc: 'We take it through review, set up the release pipeline, and hand you the keys — literally.',
    points: ['App Store & Play submission', 'CI build pipeline', 'You own the developer accounts'],
  },
];

const phases: Phase[] = [
  { phase: 'Define', items: ['The one job the app must do well', 'Platform, audience, and store constraints'] },
  { phase: 'Design', items: ['Flows and screens on real device sizes', 'A clickable prototype you can hold'] },
  { phase: 'Build', items: ['A testable build on your phone each week', 'Backend and app built together'] },
  { phase: 'Ship & iterate', items: ['Store submission and release pipeline', 'Crash and usage monitoring from day one'] },
];

const faqs: Faq[] = [
  {
    q: 'Native or cross-platform?',
    a: 'Cross-platform for most business apps — one codebase, both stores, faster to change. We go fully native when the product depends on heavy graphics, deep hardware access, or platform features that arrive first on native.',
  },
  {
    q: 'Do we need a separate backend team?',
    a: 'No. The same team builds the API, the data model, and the app, which removes the usual argument about whose side the bug is on.',
  },
  {
    q: 'How long to a first release?',
    a: 'Typically one to three months to a first store release, depending on scope. You get an installable build on your own phone well before that — usually within the first few weeks.',
  },
  {
    q: 'Who owns the app store accounts?',
    a: 'You do, always. We publish under your organisation, and the certificates, keys, and accounts stay yours so you are never locked to us.',
  },
  {
    q: 'What if Apple or Google rejects it?',
    a: 'We handle the review process and the resubmission. Most rejections are predictable — permissions copy, account deletion, payment rules — so we design against them before submitting.',
  },
  {
    q: 'Can you take over an existing app?',
    a: 'Often yes. We start with a short audit of the codebase, dependencies, and release setup, then give you an honest read on whether continuing or rebuilding costs less over the next year.',
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <ServiceSchema
        name="Mobile App Development"
        description="iOS and Android from one codebase — offline-capable, push-enabled, submitted to both stores under your own accounts."
        url={`${SITE_URL}/services/mobile-app-development`}
        serviceType="Mobile App Development"
        category="Web & Mobile"
      />
      <BreadcrumbSchema
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Mobile App Development', href: '/services/mobile-app-development' },
        ]}
      />

      <PageHero
        tags={['iOS', 'Android', 'AI inside']}
        eyebrow="Web & Mobile"
        headline="Apps your team ships,"
        accent="not just launches."
        sub="iOS and Android from one codebase — designed, built, submitted, and handed over with the accounts, keys, and documentation in your name."
        primary={{ label: 'Scope your app', href: '/get-started' }}
        secondary={{ label: 'See our work', href: '/work' }}
      />

      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">What we build</Eyebrow>
          <DisplayHeading as="h2" size="md">
            One codebase. <Accented>Both stores.</Accented>
          </DisplayHeading>
        </div>
        <FeatureGrid features={offerings} />
      </Section>

      <Section tone="ink">
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule onInk className="mb-4">How we work</Eyebrow>
          <DisplayHeading as="h2" size="sm" onInk>
            A build on your phone, every week.
          </DisplayHeading>
        </div>
        <PhaseGrid phases={phases} />
      </Section>

      <Section tone="paper" divide>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow rule className="mb-4">Being straight with you</Eyebrow>
            <DisplayHeading as="h2" size="sm" className="mb-5">
              Most products don&apos;t need an app.
            </DisplayHeading>
            <p className="text-base text-slate leading-relaxed mb-4">
              An app costs more than a web build and keeps costing — two store reviews, OS
              upgrades every year, and users who must choose to install it. That is worth paying
              when you need push, offline, or hardware access.
            </p>
            <p className="text-base text-slate leading-relaxed mb-7">
              If your use case is really a responsive web app, we will say so in the scoping call
              rather than after the invoice.
            </p>
            <PillLink href="/services/website-development" variant="outline" size="lg">
              Consider a web app instead <ArrowRight className="h-4 w-4" />
            </PillLink>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface p-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-sea mb-5">
              When an app is genuinely worth it
            </div>
            <div className="space-y-4">
              {[
                ['You need the device', 'Camera, location in the background, Bluetooth, biometrics.'],
                ['You need it offline', 'Field work, warehouses, aircraft, anywhere signal is not a given.'],
                ['You need to reach out', 'Push notifications that arrive whether or not the app is open.'],
                ['It is used daily', 'An icon on the home screen beats a bookmark for habitual use.'],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-sea-strong pl-4">
                  <div className="text-sm font-semibold text-ink-body mb-1">{t}</div>
                  <div className="text-sm text-slate leading-relaxed">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* HUB LINK — mirrors the block on /services/website-development. See the
          comment there: the practice page links down to both specific offers, so
          both need to link back up or the three read as competing siblings.
          Anchor text stays on the practice, never "mobile app development". */}
      <Section tone="surface" divide pad="tight" innerClassName="max-w-3xl">
        <Eyebrow rule className="mb-3">Part of a wider practice</Eyebrow>
        <p className="text-base text-slate leading-relaxed mb-5">
          Apps are one half of what this team does. Most projects need a site or a web console
          alongside the app, sharing a design system and an API. The practice overview covers how
          both are built by one team.
        </p>
        <PillLink href="/services/web-mobile-development" variant="outline" size="lg">
          Web &amp; mobile practice overview <ArrowRight className="h-4 w-4" />
        </PillLink>
      </Section>

      <FaqSection faqs={faqs} heading="Before you brief us." />

      <CtaBand
        headline="Got an app"
        accent="in mind?"
        sub="Tell us the one job it has to do. Two working days later you'll have an approach, a timeline, and an honest view on whether it should be an app at all."
        primary={{ label: 'Scope my app', href: '/get-started' }}
        secondary={{ label: 'How we engage', href: '/engage' }}
      />
    </>
  );
}
