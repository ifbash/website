import { ArrowRight, Mic, MessageCircle, FileText } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, CtaBand, PillLink,
} from '@/components/site';

// Deliberately lists only things that exist. The previous version advertised
// nine guides and six videos that were never written.
const available = [
  {
    icon: Mic,
    title: 'Ask the voice agent',
    desc: 'The fastest way to get a specific answer about ServiceNow, agents, or a build. It is a working agent, not a search box — ask it something awkward.',
    href: '/agent',
    cta: 'Talk to it',
  },
  {
    icon: MessageCircle,
    title: 'Ask the chat agent',
    desc: 'Bottom-right of every page. Grounded in how we actually work, and it will hand you to a person the moment it is out of its depth.',
    href: '/services/ai-agents',
    cta: 'How it is built',
  },
  {
    icon: FileText,
    title: 'Read how we engage',
    desc: 'The genuinely useful reference we do have: how projects are scoped, priced, sequenced, and handed over. Written to be handed to procurement.',
    href: '/engage',
    cta: 'Read it',
  },
];

export default function LearningCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning centre"
        headline="No content library yet."
        accent="A working agent instead."
        sub="We would rather point you at something that exists than publish a directory of guides we have not written. Here is what is genuinely available today."
        primary={{ label: 'Ask the agent', href: '/agent' }}
        secondary={{ label: 'How we engage', href: '/engage' }}
      />

      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">Available now</Eyebrow>
          <DisplayHeading as="h2" size="md">
            Three things that <Accented>actually work.</Accented>
          </DisplayHeading>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {available.map(({ icon: Icon, title, desc, href, cta }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border border-hairline bg-paper p-7 transition-all duration-300 hover:border-sea-soft hover:shadow-[0_8px_30px_rgba(11,20,23,0.06)]"
            >
              <div className="w-11 h-11 rounded-xl bg-sea-tint group-hover:bg-sea-strong flex items-center justify-center mb-5 transition-colors">
                <Icon className="h-5 w-5 text-sea" />
              </div>
              <h2 className="font-display text-xl text-ink mb-2.5">{title}</h2>
              <p className="text-[15px] leading-relaxed text-slate mb-6 flex-1">{desc}</p>
              <PillLink href={href} variant="outline" size="sm" className="self-start">
                {cta} <ArrowRight className="h-3.5 w-3.5" />
              </PillLink>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink" pad="tight" innerClassName="max-w-3xl">
        <Eyebrow rule onInk className="mb-4">Why this page is short</Eyebrow>
        <DisplayHeading as="h2" size="sm" onInk className="mb-5">
          A resource centre with no resources is just a form.
        </DisplayHeading>
        <p className="text-base text-onink-muted leading-relaxed mb-4">
          Most consultancy learning centres are gated PDFs designed to capture an email address.
          Ours previously listed guides and videos that did not exist at all, so we removed them
          rather than backfill something nobody asked for.
        </p>
        <p className="text-base text-onink-muted leading-relaxed">
          When we publish something worth reading, it will appear here. Until then, the agent
          answers faster than a whitepaper would.
        </p>
      </Section>

      <CtaBand
        headline="Have a question"
        accent="right now?"
        sub="Ask the agent anything on this page, or tell us what you're working on and a person will pick it up."
        primary={{ label: 'Ask the agent', href: '/agent' }}
        secondary={{ label: 'Talk to a person', href: '/contactus' }}
      />
    </>
  );
}
