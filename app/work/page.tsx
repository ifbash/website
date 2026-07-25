import Link from 'next/link';
import { ArrowRight, Mic, MessageCircle, PhoneCall, Layout, Settings, PlayCircle } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, CtaBand, PillLink,
} from '@/components/site';
import { TriageDemo } from '@/components/triage-demo';

type Kind = 'live' | 'demo' | 'practice';

const KIND_LABEL: Record<Kind, { text: string; cls: string }> = {
  live: { text: 'Live — try it', cls: 'bg-sea text-paper' },
  demo: { text: 'Simulated demo', cls: 'bg-wash text-slate border border-hairline' },
  practice: { text: 'Delivery practice', cls: 'bg-sea-tint text-sea border border-sea-strong' },
};

const items = [
  {
    kind: 'live' as Kind,
    icon: Mic,
    title: 'The voice agent on our homepage',
    what: 'Tap the orb, speak, and it answers out loud — speech recognition in the browser, Claude for the reasoning, speech synthesis for the reply.',
    built: ['Web Speech API for capture and playback', 'Streaming responses from the Claude API', 'Typed fallback when the mic is unavailable'],
    href: '/',
    cta: 'Go and talk to it',
  },
  {
    kind: 'live' as Kind,
    icon: MessageCircle,
    title: 'The chat agent in the corner',
    what: 'The widget on every page except the homepage. It answers questions about our work and can collect your details mid-conversation without a page change.',
    built: ['Streamed token-by-token replies', 'Guided lead capture inside the thread', 'Deterministic fallback answers if the API key is absent'],
    href: '/services/ai-agents',
    cta: 'How we build agents',
  },
  {
    kind: 'live' as Kind,
    icon: PhoneCall,
    title: 'The callback agent',
    what: 'Ask for a call and an agent rings you back. Where telephony is not configured it degrades honestly into a priority callback request rather than pretending to dial.',
    built: ['Telephony leg via a voice provider', 'Claude drives the conversation', 'Graceful degradation, never a fake success'],
    href: '/agent',
    cta: 'Request a call',
  },
  {
    kind: 'live' as Kind,
    icon: Layout,
    title: 'This website',
    what: 'Design system, fluid type scale, structured data on every page, and a component kit that makes the tenth page cost a fraction of the first.',
    built: ['Next.js App Router, statically rendered', 'One token file drives the entire palette', 'JSON-LD, sitemap, and canonical hygiene throughout'],
    href: '/services/website-development',
    cta: 'How we build sites',
  },
  {
    kind: 'demo' as Kind,
    icon: PlayCircle,
    title: 'The five-tab demo reel',
    what: 'The animated showcase on our homepage — a service desk resolving itself, an agent chatting, a voice call, a mobile frame, a site assembling.',
    built: ['Scripted animation timelines, not live systems', 'Illustrates the shape of the work', 'Labelled as a demo wherever it appears'],
    href: '/#work',
    cta: 'Watch the reel',
  },
  {
    kind: 'practice' as Kind,
    icon: Settings,
    title: 'ServiceNow delivery',
    what: 'Our largest practice by volume. Client instances sit behind their own logins, so we describe the shape of the work rather than showing screenshots we have no right to publish.',
    built: ['Implementation, managed services, and custom apps', 'Full product portfolio across ITSM, CSM, HR, SecOps and more', 'Named references available under NDA on request'],
    href: '/services',
    cta: 'See the practice',
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        headline="Software you can test,"
        accent="not slides you can't verify."
        sub="Client work sits behind client logins, so we put our own in public instead. Everything below is either running right now or clearly labelled as a simulation."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'How we engage', href: '/engage' }}
      />

      {/* THE STANDARD */}
      <Section tone="ink" pad="tight">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['Live means live', 'If we call something live, you can use it on this site in the next thirty seconds.'],
            ['Demo means simulated', 'Scripted animations are labelled. They show the shape of the work, not a running system.'],
            ['No borrowed proof', 'No invented clients, no invented percentages, no logos we have no right to show.'],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="font-display text-xl mb-2 text-onink">{t}</div>
              <p className="text-sm leading-relaxed text-onink-muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* THE LIVE DEMO — the strongest thing on the site: it runs on the
          visitor's own ticket text, so there is nothing to take on trust. */}
      <Section tone="surface" divide>
        <div className="mb-10 max-w-2xl">
          <Eyebrow rule className="mb-4">Try it on your own ticket</Eyebrow>
          <DisplayHeading as="h2" size="md" className="mb-4">
            Paste something messy. <Accented accent="mulberry">Watch it get triaged.</Accented>
          </DisplayHeading>
          <p className="text-base text-slate leading-relaxed">
            This is the ServiceNow work and the AI layer in one place: an agent reads an inbound
            ticket, judges impact and urgency, routes it to a queue, and drafts the first response.
            Priority is computed from the impact &times; urgency matrix in code, the way the platform
            does it &mdash; the model is not allowed to guess it.
          </p>
        </div>
        <TriageDemo />
      </Section>

      {/* THE WORK */}
      <Section tone="paper">
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">What we&apos;ve built</Eyebrow>
          <DisplayHeading as="h2" size="md">
            Go and <Accented>break it.</Accented>
          </DisplayHeading>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map(({ kind, icon: Icon, title, what, built, href, cta }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border border-hairline bg-surface p-7 transition-all duration-300 hover:border-sea-soft hover:shadow-[0_8px_30px_rgba(11,20,23,0.06)]"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-sea-tint group-hover:bg-sea-strong flex items-center justify-center shrink-0 transition-colors">
                  <Icon className="h-5 w-5 text-sea" />
                </div>
                <span className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${KIND_LABEL[kind].cls}`}>
                  {KIND_LABEL[kind].text}
                </span>
              </div>

              <h3 className="font-display text-xl text-ink mb-2.5">{title}</h3>
              <p className="text-[15px] leading-relaxed text-slate mb-5">{what}</p>

              <ul className="space-y-2 mb-6">
                {built.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-slate">
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-sea shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href={href}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-sea hover:text-sea-deep transition-colors"
              >
                {cta}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY NO CASE STUDIES */}
      <Section tone="surface" divide innerClassName="max-w-3xl">
        <Eyebrow rule className="mb-4">A straight answer</Eyebrow>
        <DisplayHeading as="h2" size="sm" className="mb-6">
          Why there are no case studies here.
        </DisplayHeading>
        <div className="space-y-4 text-base text-slate leading-relaxed">
          <p>
            Most consultancy websites carry a wall of client logos and percentages. A lot of those
            numbers cannot be traced to anything, and a lot of those logos belong to companies that
            never agreed to appear.
          </p>
          <p>
            We would rather be checkable. Where a client has agreed to be a reference, we will
            introduce you directly under NDA. Where they have not, we describe the work without
            naming them and without inventing a statistic to fill the gap.
          </p>
          <p>
            In the meantime, the fastest way to judge whether we can build your thing is to use
            the things we have already built — they are all one click away, and none of them are
            screenshots.
          </p>
        </div>
        <div className="mt-8">
          <PillLink href="/get-started" variant="primary" size="lg">
            Ask for a reference <ArrowRight className="h-4 w-4" />
          </PillLink>
        </div>
      </Section>

      <CtaBand
        headline="Want yours"
        accent="in this list?"
        sub="Tell us what you're building. You'll get an approach, a timeline, and the names who would do the work — in writing, inside two working days."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'How we engage', href: '/engage' }}
      />
    </>
  );
}
