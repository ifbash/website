import { ArrowRight, Database, FlaskConical, Gauge, Layers3, ShieldCheck, Route } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, FeatureGrid, PhaseGrid,
  FaqSection, CtaBand, PillLink, type Feature, type Phase, type Faq,
} from '@/components/site';
import { AgentCostCalculator } from '@/components/agent-cost-calculator';

const offerings: Feature[] = [
  {
    icon: Database,
    title: 'Knowledge systems (RAG)',
    desc: 'Assistants grounded in your documents, policies, and product data — answering with citations rather than confident invention.',
    points: ['Chunking and retrieval tuned to your corpus', 'Answers carry sources', 'Refuses when the corpus does not know'],
  },
  {
    icon: FlaskConical,
    title: 'Evaluation & regression testing',
    desc: 'A test suite for behaviour. Every prompt or model change is measured against your real scenarios before it ships.',
    points: ['Scenario sets from your own data', 'Scored automatically in CI', 'Catches quality regressions before users do'],
  },
  {
    icon: Route,
    title: 'Model selection & routing',
    desc: 'Not every request needs the largest model. We route by task so quality holds where it matters and cost falls where it does not.',
    points: ['Task-appropriate model tiers', 'Escalation on low confidence', 'Portable across providers by design'],
  },
  {
    icon: Gauge,
    title: 'Cost & latency engineering',
    desc: 'Prompt caching, context trimming, and streaming so the experience feels immediate and the invoice stays predictable.',
    points: ['Prompt caching for stable context', 'Context budgets per interaction', 'Cost per interaction measured, not estimated'],
  },
  {
    icon: Layers3,
    title: 'Systems integration',
    desc: 'Claude wired into the tools work actually happens in — CRM, ticketing, data warehouse, internal APIs.',
    points: ['Typed tool interfaces', 'Least-privilege service credentials', 'Failure paths designed, not discovered'],
  },
  {
    icon: ShieldCheck,
    title: 'Safety & governance',
    desc: 'Guardrails, approval gates, and audit trails so AI acts inside limits your risk function has actually signed off.',
    points: ['Human approval for consequential actions', 'Every decision logged', 'Data residency and retention respected'],
  },
];

const phases: Phase[] = [
  { phase: 'Discover', items: ['Find the use case with real volume behind it', 'Map the data, systems, and constraints'] },
  { phase: 'Prototype', items: ['A working system on your data, quickly', 'Evaluated on your scenarios, not a demo script'] },
  { phase: 'Productionize', items: ['Guardrails, monitoring, and cost controls', 'Evals wired into the deployment path'] },
  { phase: 'Operate', items: ['Watch quality and spend in production', 'Tune, then expand to the next use case'] },
];

const faqs: Faq[] = [
  {
    q: 'Why Claude specifically?',
    a: 'It is the model family we have gone deepest on for agentic work — strong reasoning, reliable tool use, and a safety posture that survives enterprise review. We design systems to be model-portable, so the depth is a choice rather than a lock-in.',
  },
  {
    q: 'Are you an official Anthropic partner?',
    a: 'No. We build on Claude and we are pursuing a closer relationship, but we are not going to claim a badge we have not been given. What we can show you is working software built on it.',
  },
  {
    q: 'What stops it from making things up?',
    a: 'Grounding and refusal. Answers are retrieved from your corpus with citations attached, and the system is built to say it does not know rather than fill the gap. The eval suite tests exactly that behaviour.',
  },
  {
    q: 'Where does our data go?',
    a: 'Your data stays in your accounts. We design for least-privilege access, keep retention configurable to your policy, and log every AI decision so an audit can reconstruct what happened and why.',
  },
  {
    q: 'Do you only do AI on ServiceNow?',
    a: 'No. This practice builds directly on the Claude API for any stack — web, mobile, back office, ServiceNow or not. Our ServiceNow AI work is a separate service page.',
  },
  {
    q: 'How do we know it is actually working?',
    a: 'Because we agree what "working" means before building, turn that into a scored eval suite, and report against it. If we cannot define success measurably, that is a signal the use case is not ready yet.',
  },
];

export default function ClaudeAiEngineeringPage() {
  return (
    <>
      <PageHero
        tags={['Claude', 'RAG', 'Evals']}
        eyebrow="AI & Agents"
        headline="AI engineering,"
        accent="measured not vibed."
        sub="Knowledge systems, evaluation harnesses, and cost engineering on Anthropic's Claude. Not slideware — the agent answering questions on this site is one of ours."
        primary={{ label: 'Scope an AI project', href: '/get-started' }}
        secondary={{ label: 'Try our live agent', href: '/agent' }}
      />

      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">What we build</Eyebrow>
          <DisplayHeading as="h2" size="md">
            The engineering <Accented>under the demo.</Accented>
          </DisplayHeading>
        </div>
        <FeatureGrid features={offerings} />
      </Section>

      <Section tone="ink">
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule onInk className="mb-4">How we work</Eyebrow>
          <DisplayHeading as="h2" size="sm" onInk>
            Small bets first. Then scale what measures well.
          </DisplayHeading>
        </div>
        <PhaseGrid phases={phases} />
      </Section>

      <Section tone="paper" divide>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow rule className="mb-4">The part most projects skip</Eyebrow>
            <DisplayHeading as="h2" size="sm" className="mb-5">
              A demo is easy. Keeping it good is the job.
            </DisplayHeading>
            <p className="text-base text-stone leading-relaxed mb-4">
              Almost anyone can produce an impressive first demo now. The difficulty arrives later:
              the prompt that quietly regresses, the retrieval that degrades as the corpus grows,
              the bill that triples when usage does.
            </p>
            <p className="text-base text-stone leading-relaxed mb-7">
              That is why we treat evals, cost budgets, and monitoring as part of the build rather
              than a later phase that never gets funded.
            </p>
            <PillLink href="/services/ai-agents" variant="outline" size="lg">
              See agent engineering <ArrowRight className="h-4 w-4" />
            </PillLink>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface p-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-mulberry mb-5">
              What we hand over
            </div>
            <ul className="space-y-4">
              {[
                ['The eval suite', 'Your scenarios, scored — so quality is a number, not an impression.'],
                ['Cost instrumentation', 'Per-interaction spend visible from the first day in production.'],
                ['Prompt and tool source', 'In your repository, versioned, with the reasoning documented.'],
                ['A runbook', 'What to do when quality drops, written for whoever is on call.'],
              ].map(([t, d]) => (
                <li key={t} className="border-l-2 border-mulberry-strong pl-4">
                  <div className="text-sm font-semibold text-ink-body mb-1">{t}</div>
                  <div className="text-sm text-stone leading-relaxed">{d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* COST — the claim above says we engineer for cost, so show the working
          rather than asserting it. */}
      <Section tone="surface" divide>
        <div className="mb-10 max-w-2xl">
          <Eyebrow rule className="mb-4">Run the numbers yourself</Eyebrow>
          <DisplayHeading as="h2" size="md" className="mb-4">
            What an agent <Accented accent="mulberry">actually costs to run.</Accented>
          </DisplayHeading>
          <p className="text-base text-stone leading-relaxed">
            Most AI proposals quote a build price and go quiet about the running cost. Move the
            sliders to your own volume. The assumptions are written underneath, because a number
            you cannot interrogate is not worth much.
          </p>
        </div>
        <AgentCostCalculator />
      </Section>

      <FaqSection faqs={faqs} heading="Questions we hear a lot." />

      <CtaBand
        headline="Have a use case"
        accent="in mind?"
        sub="Tell us what you want AI to do. We'll scope a prototype inside two working days — and show you what it costs to run before you commit to anything."
        primary={{ label: 'Scope my AI project', href: '/get-started' }}
        secondary={{ label: 'See our work', href: '/work' }}
      />
    </>
  );
}
