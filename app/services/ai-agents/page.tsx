import Link from 'next/link';
import { ArrowRight, Bot, Workflow, Wrench, ShieldCheck, GitBranch, Gauge } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, FeatureGrid, PhaseGrid,
  FaqSection, CtaBand, PillLink, type Feature, type Phase, type Faq,
} from '@/components/site';
import { WorkflowCompare } from '@/components/workflow-compare';

const offerings: Feature[] = [
  {
    icon: Bot,
    title: 'Customer-facing chat agents',
    desc: 'Agents that answer real questions, qualify intent, and hand off to a human with the full conversation attached.',
    points: ['Grounded in your content', 'Lead capture built in', 'Escalation with context'],
  },
  {
    icon: Workflow,
    title: 'Internal workflow agents',
    desc: 'Multi-step agents that triage requests, draft responses, update records, and close the loop across systems.',
    points: ['Runs multi-step plans', 'Reads and writes to your systems', 'Reports what it did'],
  },
  {
    icon: Wrench,
    title: 'Tool use & integrations',
    desc: 'Agents that actually do things — call your APIs, query your database, file the ticket, book the meeting.',
    points: ['Typed tool definitions', 'Retry and failure handling', 'Least-privilege credentials'],
  },
  {
    icon: ShieldCheck,
    title: 'Guardrails & approvals',
    desc: 'Consequential actions pause for a human. Everything the agent does is logged and reviewable.',
    points: ['Human-in-the-loop gates', 'Action allow-lists', 'Full audit trail'],
  },
  {
    icon: GitBranch,
    title: 'Evaluation harnesses',
    desc: 'A test suite for your agent. We measure behaviour on your real scenarios before and after every change.',
    points: ['Scenario-based evals', 'Regression checks on prompts', 'Measured, not vibes'],
  },
  {
    icon: Gauge,
    title: 'Cost & latency engineering',
    desc: 'Model selection, prompt caching, and routing tuned so you know the per-interaction cost before go-live.',
    points: ['Prompt caching', 'Model routing by task', 'Predictable unit economics'],
  },
];

const phases: Phase[] = [
  { phase: 'Pick the use case', items: ['Find the highest-volume, lowest-risk task', 'Agree what "good" looks like, in writing'] },
  { phase: 'Prototype', items: ['A working agent on your real scenarios', 'You test it before anything is committed'] },
  { phase: 'Harden', items: ['Guardrails, approvals, and audit logging', 'Evals wired into the deploy path'] },
  { phase: 'Run & expand', items: ['Monitor behaviour and cost in production', 'Take the next use case once this one holds'] },
];

const faqs: Faq[] = [
  {
    q: 'What is the difference between a chatbot and an agent?',
    a: 'A chatbot answers. An agent acts — it can call your systems, take multi-step actions, and finish a task. Most useful projects need both: conversation on the surface, tool use underneath.',
  },
  {
    q: 'Can we see one working before committing?',
    a: 'Yes, twice over. There is an agent running on this site you can talk to right now, and we prototype on your real use case before any build commitment.',
  },
  {
    q: 'What stops it from doing something wrong?',
    a: 'Three things: the agent can only call tools we explicitly give it, consequential actions pause for human approval, and every action is logged. We design the blast radius before we design the prompt.',
  },
  {
    q: 'Does this have to be on Claude?',
    a: 'We build deepest on Claude, and we design solutions to be model-portable. If you have a provider commitment already, we work within it and tell you honestly where the trade-offs land.',
  },
  {
    q: 'What does it cost to run?',
    a: 'That depends on volume and how much context each interaction needs. We engineer for cost from day one — caching, model routing, and context trimming — and you see the per-interaction number before go-live.',
  },
  {
    q: 'Do we own what you build?',
    a: 'Completely. Repositories, prompts, eval suites, and documentation are yours, with a handover so your team or another vendor can take it forward.',
  },
];

export default function AiAgentsPage() {
  return (
    <>
      <PageHero
        tags={['Claude', 'Tool use', 'Guardrails']}
        eyebrow="AI & Agents"
        headline="Agents that don't just answer."
        accent="They do the work."
        sub="We build production AI agents — chat on the surface, tool use underneath, with approval gates and an audit trail so they act only within limits you set."
        primary={{ label: 'Scope an agent', href: '/get-started' }}
        secondary={{ label: 'Talk to ours first', href: '/agent' }}
      />

      {/* WHAT WE BUILD */}
      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">What we build</Eyebrow>
          <DisplayHeading as="h2" size="md">
            From prototype to <Accented>production.</Accented>
          </DisplayHeading>
        </div>
        <FeatureGrid features={offerings} />
      </Section>

      {/* WHAT CHANGES — shape, not a fabricated time saving. */}
      <Section tone="paper" divide>
        <div className="mb-10 max-w-2xl">
          <Eyebrow rule className="mb-4">What actually changes</Eyebrow>
          <DisplayHeading as="h2" size="md" className="mb-4">
            The win is the <Accented accent="mulberry">reassignment that never happens.</Accented>
          </DisplayHeading>
          <p className="text-base text-slate leading-relaxed">
            Most tickets are not slow because someone worked slowly. They are slow because they sat
            in the wrong queue for a day first. Classification on arrival is unglamorous and it is
            where the time goes.
          </p>
        </div>
        <WorkflowCompare />
      </Section>

      {/* HOW WE WORK */}
      <Section tone="ink">
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule onInk className="mb-4">How we work</Eyebrow>
          <DisplayHeading as="h2" size="sm" onInk>
            Small bets first. Then scale what holds.
          </DisplayHeading>
        </div>
        <PhaseGrid phases={phases} />
      </Section>

      {/* THE PROOF */}
      <Section tone="paper" divide>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow rule className="mb-4">The honest proof</Eyebrow>
            <DisplayHeading as="h2" size="sm" className="mb-5">
              This site is the demo.
            </DisplayHeading>
            <p className="text-base text-slate leading-relaxed mb-4">
              We can&apos;t show you another client&apos;s agent — those are behind their logins.
              So we put ours in public. The agent in the corner of this page, the voice agent on
              the homepage, and the one that will call you back from{' '}
              <Link href="/agent" className="text-sky font-medium underline underline-offset-4 hover:text-sky-deep">
                our agent page
              </Link>{' '}
              are all built by us on the same stack we&apos;d use for you.
            </p>
            <p className="text-base text-slate leading-relaxed mb-7">
              Ask it something hard. That is a more useful reference than a case study you
              can&apos;t verify.
            </p>
            <PillLink href="/work" variant="outline" size="lg">
              See what we&apos;ve built <ArrowRight className="h-4 w-4" />
            </PillLink>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface p-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-sky mb-5">
              What we&apos;ll want to know
            </div>
            <ul className="space-y-4">
              {[
                ['What task, exactly?', 'The narrower the first agent, the faster it earns trust.'],
                ['What systems must it touch?', 'Tool use is where most of the engineering lives.'],
                ['What must never happen?', 'That defines the guardrails before anything else.'],
                ['How will we know it works?', 'We turn that answer into the eval suite.'],
              ].map(([q, a]) => (
                <li key={q} className="border-l-2 border-sky-strong pl-4">
                  <div className="text-sm font-semibold text-ink-body mb-1">{q}</div>
                  <div className="text-sm text-slate leading-relaxed">{a}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FaqSection faqs={faqs} heading="Questions we hear a lot." />

      <CtaBand
        headline="Have a use case"
        accent="in mind?"
        sub="Tell us what you want an agent to do. Within two working days you'll have an approach, a prototype plan, and the per-conversation cost worked out."
        primary={{ label: 'Scope my agent', href: '/get-started' }}
        secondary={{ label: 'Or just ask our agent', href: '/agent' }}
      />
    </>
  );
}
