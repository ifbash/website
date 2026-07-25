import { ArrowRight, PhoneIncoming, PhoneOutgoing, Mic, Languages, ClipboardList, UserCheck } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, FeatureGrid, PhaseGrid,
  FaqSection, CtaBand, PillLink, type Feature, type Phase, type Faq,
} from '@/components/site';

const offerings: Feature[] = [
  {
    icon: PhoneIncoming,
    title: 'Inbound call handling',
    desc: 'Answers on the first ring, understands why someone called, resolves what it can and routes the rest.',
    points: ['No queue for simple questions', 'Routes with a summary attached', 'Available outside office hours'],
  },
  {
    icon: PhoneOutgoing,
    title: 'Outbound qualification & callbacks',
    desc: 'Calls a lead back within minutes of the form submission, while intent is still warm.',
    points: ['Triggered by form or CRM event', 'Qualifies against your criteria', 'Books the human call'],
  },
  {
    icon: Mic,
    title: 'In-browser voice',
    desc: 'Talk to an agent directly on a web page — no dial-in, no app. The homepage of this site does exactly that.',
    points: ['Web Speech API, no plugin', 'Streamed replies, spoken aloud', 'Falls back to typing'],
  },
  {
    icon: ClipboardList,
    title: 'Call summaries & CRM writeback',
    desc: 'Every call produces a structured summary in your systems, not a recording nobody listens to.',
    points: ['Structured outcome fields', 'Writes to your CRM or ticketing', 'Searchable transcripts'],
  },
  {
    icon: UserCheck,
    title: 'Human handoff',
    desc: 'The agent knows what it does not know. Handoffs carry the full context so nobody repeats themselves.',
    points: ['Confidence-based escalation', 'Warm transfer with summary', 'Never pretends to be human'],
  },
  {
    icon: Languages,
    title: 'Multilingual',
    desc: 'The same agent handles callers in multiple languages without a separate build per market.',
    points: ['Language detected on the call', 'Consistent behaviour per market', 'One agent to maintain'],
  },
];

const phases: Phase[] = [
  { phase: 'Define the call', items: ['What the agent must handle end to end', 'What it must always hand to a person'] },
  { phase: 'Script & prototype', items: ['Conversation design, not a phone tree', 'You call it and hear it before we build'] },
  { phase: 'Connect', items: ['Telephony number or in-browser voice', 'CRM, calendar, and ticketing writeback'] },
  { phase: 'Tune', items: ['Review real transcripts weekly', 'Fix the failure patterns, re-run evals'] },
];

const faqs: Faq[] = [
  {
    q: 'Can I hear one before we talk?',
    a: 'Yes. The homepage has a tap-to-talk agent, and the agent page can call you back. Both are ours, running on the same stack we would build for you.',
  },
  {
    q: 'Will callers know it is an AI?',
    a: 'Yes, and we insist on it. The agent identifies itself up front. Pretending otherwise damages trust and, in several jurisdictions, breaks the law.',
  },
  {
    q: 'What happens when it cannot help?',
    a: 'It stops guessing and hands off — either transferring the call or booking a human callback — and passes a summary so the caller does not repeat their story.',
  },
  {
    q: 'What telephony does this use?',
    a: 'For real phone numbers we integrate a voice provider such as Retell for the call leg, with Claude driving the conversation. For in-browser voice, no telephony is needed at all.',
  },
  {
    q: 'How fast can a voice agent go live?',
    a: 'An in-browser agent can be live in days. A telephony agent takes longer — the extra time goes into number provisioning, conversation design, and listening to real calls before opening the line.',
  },
  {
    q: 'What about recordings and consent?',
    a: 'Consent and retention rules vary by jurisdiction, so we configure disclosure, recording, and retention to your legal requirements rather than shipping a default.',
  },
];

export default function VoiceAgentsPage() {
  return (
    <>
      <PageHero
        tags={['Inbound', 'Outbound', 'In-browser']}
        eyebrow="AI & Agents"
        headline="A voice agent that picks up"
        accent="on the first ring."
        sub="Answers inbound calls, calls leads back while intent is warm, and hands off to a human with the full context attached — never pretending to be one."
        primary={{ label: 'Talk to our agent now', href: '/agent' }}
        secondary={{ label: 'Scope a voice project', href: '/get-started' }}
      />

      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">What we build</Eyebrow>
          <DisplayHeading as="h2" size="md">
            Conversation design, <Accented>not a phone tree.</Accented>
          </DisplayHeading>
        </div>
        <FeatureGrid features={offerings} />
      </Section>

      <Section tone="ink">
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule onInk className="mb-4">How we work</Eyebrow>
          <DisplayHeading as="h2" size="sm" onInk>
            You hear it before you buy it.
          </DisplayHeading>
        </div>
        <PhaseGrid phases={phases} />
      </Section>

      <Section tone="paper" divide>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow rule className="mb-4">Where voice earns its place</Eyebrow>
            <DisplayHeading as="h2" size="sm" className="mb-5">
              Speed of response beats depth of answer.
            </DisplayHeading>
            <p className="text-base text-slate leading-relaxed mb-4">
              Voice is worth building where a delay costs you the outcome — an inbound caller
              who will not wait in a queue, or a web lead whose interest decays by the hour.
            </p>
            <p className="text-base text-slate leading-relaxed mb-7">
              It is a poor fit for anything requiring careful reading, long forms, or a paper
              trail the caller needs to review. We will tell you when chat or email is the
              better answer.
            </p>
            <PillLink href="/services/ai-agents" variant="outline" size="lg">
              See chat &amp; workflow agents <ArrowRight className="h-4 w-4" />
            </PillLink>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface p-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-sky mb-5">
              Good fit / poor fit
            </div>
            <div className="space-y-4">
              {[
                ['Good fit', 'After-hours inbound, callback-on-form, appointment booking, order status, qualification triage.'],
                ['Poor fit', 'Complex document review, anything the caller must read and sign, highly regulated advice.'],
                ['Depends', 'Support triage — excellent if your top intents are narrow, frustrating if every call is bespoke.'],
              ].map(([label, body]) => (
                <div key={label} className="border-l-2 border-sky-strong pl-4">
                  <div className="text-sm font-semibold text-ink-body mb-1">{label}</div>
                  <div className="text-sm text-slate leading-relaxed">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FaqSection faqs={faqs} heading="Before you brief us." />

      <CtaBand
        headline="Want to hear it"
        accent="on your own line?"
        sub="Tell us the call you want handled. We'll scope it inside two working days — and you'll have heard a working agent before you decide anything."
        primary={{ label: 'Scope a voice agent', href: '/get-started' }}
        secondary={{ label: 'Get a call from ours', href: '/agent' }}
      />
    </>
  );
}
