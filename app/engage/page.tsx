import { ArrowRight, Compass, Hammer, Repeat, Check } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, PhaseGrid, FaqSection,
  CtaBand, type Phase, type Faq,
} from '@/components/site';

const models = [
  {
    icon: Compass,
    name: 'Discovery sprint',
    when: 'You know the problem, not yet the solution.',
    desc: 'A short, paid engagement that ends in a document you could hand to any vendor — not just us.',
    includes: [
      'Current-state review and constraints',
      'A recommended approach with the trade-offs written down',
      'Scope, sequence, and an estimate you can budget against',
      'A working prototype where the risk is technical',
    ],
    price: 'Fixed fee, agreed before we start. Credited against the build if you continue with us.',
  },
  {
    icon: Hammer,
    name: 'Fixed-scope build',
    when: 'The scope is clear enough to commit to.',
    desc: 'A defined piece of work with a defined price. Weekly demos of working software, no surprise invoices.',
    includes: [
      'Written scope, acceptance criteria, and a date',
      'Weekly demo of software you can actually use',
      'Change requests priced individually, never absorbed silently',
      'Repository access from week one',
    ],
    price: 'Fixed price against a written scope. Changes are quoted separately, in writing, before work starts.',
  },
  {
    icon: Repeat,
    name: 'Retainer',
    when: 'The thing exists and needs to keep improving.',
    desc: 'A recurring block of senior capacity for ongoing development, platform operations, or support.',
    includes: [
      'An agreed capacity each month',
      'A named team that stays consistent',
      'Prioritised together, reviewed monthly',
      'Cancellable with notice — no multi-year lock-in',
    ],
    price: 'Monthly, based on committed capacity. Notice period agreed up front; no auto-renewing multi-year terms.',
  },
];

const phases: Phase[] = [
  { phase: 'You get in touch', items: ['A form, an email, or our agent', 'No qualification gauntlet before a human replies'] },
  { phase: 'Scoping call', items: ['Senior people, not a sales layer', 'We say if it is not a fit for us'] },
  { phase: 'Written plan in two working days', items: ['Approach, sequence, team, and estimate', 'Yours to keep either way'] },
  { phase: 'Start', items: ['Discovery, build, or retainer', 'Repository and demo access from week one'] },
];

const faqs: Faq[] = [
  {
    q: 'Why is there no pricing table on this page?',
    a: 'Because a number without a scope is a guess, and a guess would be a bad basis for your budget. We publish how we price — fixed fee for discovery, fixed price against written scope for builds, monthly capacity for retainers — and give you the actual number within two working days of a scoping call.',
  },
  {
    q: 'What does the written plan actually cover?',
    a: 'From the scoping call to a written plan: our understanding of the problem, a recommended approach, the sequence, who would be on the team, and an estimate. It is a real document, not a brochure.',
  },
  {
    q: 'Do you charge for the scoping call?',
    a: 'No. The scoping call and the plan that follows are free. The discovery sprint — where we do real investigation and prototyping — is paid, because it is real work.',
  },
  {
    q: 'What happens if the estimate turns out to be wrong?',
    a: 'On a fixed-scope build, an estimating error on our side is our problem, not an invoice for you. Scope changes are different: those get quoted in writing before anyone starts, so nothing arrives as a surprise.',
  },
  {
    q: 'Who actually does the work?',
    a: 'The people on the scoping call. We do not scope with seniors and staff with juniors — if the team would change, we tell you who and why during scoping.',
  },
  {
    q: 'What do we own at the end?',
    a: 'Everything: repositories, documentation, credentials, cloud and store accounts, prompts, and eval suites. We include a handover so your team or another vendor can continue without us.',
  },
  {
    q: 'Can we start small?',
    a: 'We prefer it. A discovery sprint or a narrow first build tells you far more about whether we are the right team than a long procurement process will.',
  },
  {
    q: 'How do engagements end?',
    a: 'Builds end at acceptance with a handover session. Retainers end with the agreed notice period. In both cases you leave with everything needed to keep going without us — that is the point.',
  },
];

export default function EngagePage() {
  return (
    <>
      <PageHero
        eyebrow="How we engage"
        headline="Three ways in."
        accent="No procurement theatre."
        sub="A paid discovery sprint, a fixed-scope build, or an ongoing retainer. Whichever it is, you get a written plan within two working days of the first call — and you keep it either way."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'See our work', href: '/work' }}
      />

      {/* THE THREE MODELS */}
      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">Engagement models</Eyebrow>
          <DisplayHeading as="h2" size="md">
            Pick the smallest one <Accented>that answers your question.</Accented>
          </DisplayHeading>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {models.map(({ icon: Icon, name, when, desc, includes, price }) => (
            <div
              key={name}
              className="flex flex-col rounded-2xl border border-hairline bg-paper p-7 transition-all duration-300 hover:border-sea-soft hover:shadow-[0_8px_30px_rgba(11,20,23,0.06)]"
            >
              <div className="w-11 h-11 rounded-xl bg-sea-tint flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-sea" />
              </div>
              <h3 className="font-display text-2xl text-ink mb-2">{name}</h3>
              <p className="text-[13px] font-semibold text-sea mb-4">{when}</p>
              <p className="text-[15px] leading-relaxed text-slate mb-6">{desc}</p>

              <ul className="space-y-2.5 mb-6">
                {includes.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate">
                    <Check className="h-4 w-4 text-sea shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 border-t border-hairline">
                <div className="text-[11px] font-semibold tracking-widest uppercase text-sea mb-2">
                  How it&apos;s priced
                </div>
                <p className="text-[13px] leading-relaxed text-slate">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* THE PATH IN */}
      <Section tone="ink">
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule onInk className="mb-4">From first contact</Eyebrow>
          <DisplayHeading as="h2" size="sm" onInk>
            Four steps, and you can stop after any of them.
          </DisplayHeading>
        </div>
        <PhaseGrid phases={phases} />
      </Section>

      {/* WHAT YOU OWN */}
      <Section tone="paper" divide>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow rule className="mb-4">No lock-in</Eyebrow>
            <DisplayHeading as="h2" size="sm" className="mb-5">
              You should be able to fire us cleanly.
            </DisplayHeading>
            <p className="text-base text-slate leading-relaxed mb-4">
              A vendor who is hard to leave is a vendor with no pressure to stay good. So we build
              the exit into the engagement: your accounts, your repositories, your keys, and
              documentation written for whoever comes next.
            </p>
            <p className="text-base text-slate leading-relaxed">
              If you decide to move on, the handover is a scheduled session — not a negotiation.
            </p>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface p-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-sea mb-5">
              Yours from day one
            </div>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                'Source repositories',
                'Cloud accounts',
                'App store accounts',
                'Signing keys & certificates',
                'Prompts & eval suites',
                'Architecture documentation',
                'Runbooks & handover notes',
                'Analytics & monitoring',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-slate">
                  <Check className="h-4 w-4 text-sea shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FaqSection faqs={faqs} heading="The questions procurement asks." askLabel="Ask us something else" />

      <CtaBand
        headline="Start with"
        accent="a conversation."
        sub="No qualification gauntlet, no discovery call about your discovery call. Tell us the problem and we'll tell you honestly whether we're the right team."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'Or ask our agent', href: '/agent' }}
      />
    </>
  );
}
