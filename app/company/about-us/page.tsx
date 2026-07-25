import { ArrowRight, Compass, Users, Wrench, ShieldCheck } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, CtaBand, PillLink, FeatureGrid,
  ProofBand, type Feature,
} from '@/components/site';

// How we work — commitments we control, not outcomes we cannot evidence.
const principles: Feature[] = [
  {
    icon: Users,
    title: 'Architects, not account managers',
    desc: 'The people on your scoping call are the people who build the thing. If that would change, we tell you who and why before you sign anything.',
  },
  {
    icon: Compass,
    title: 'Start with the question',
    desc: 'We would rather spend the first week understanding the problem than the first month building the wrong answer to it. Sometimes the honest recommendation is a smaller project.',
  },
  {
    icon: Wrench,
    title: 'Working software, weekly',
    desc: 'You see running configuration or a usable build every week — not a status deck. Progress you cannot click on is not progress.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to be handed over',
    desc: 'Repositories, accounts, keys, and documentation are yours from day one. A vendor who is hard to leave has no pressure to stay good.',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About ifBash"
        headline="A consultancy that would rather"
        accent="show you than tell you."
        sub="We implement and run ServiceNow, then build the AI layer on top of it — engineered on Claude, by the same team that does the platform work."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'See our work', href: '/work' }}
      />

      {/* WHERE WE CAME FROM */}
      <Section tone="surface" divide innerClassName="max-w-3xl">
        <Eyebrow rule className="mb-4">The short version</Eyebrow>
        <DisplayHeading as="h2" size="sm" className="mb-6">
          ServiceNow paid for the first years. AI is what we&apos;re building next.
        </DisplayHeading>
        <div className="space-y-4 text-base text-stone leading-relaxed">
          <p>
            We started as ServiceNow engineers, and that practice still carries most of our
            delivery volume. It taught us the thing that matters more than any platform: work
            moves when the process is designed properly and stalls when it isn&apos;t.
          </p>
          <p>
            When frontier models became reliable enough to act rather than just answer, that
            experience turned out to transfer directly. An agent that files a ticket, updates a
            record, and knows when to stop and ask a human is a workflow problem wearing a new
            hat. So we built an AI practice on Claude, and a product team to build the things
            those agents live inside.
          </p>
          <p>
            Today those are three practices sharing one bench, which is why an agent we build for
            you can talk to the platform we run for you, inside an app we shipped for you.
          </p>
        </div>
      </Section>

      {/* HOW WE WORK */}
      <Section tone="paper">
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">How we work</Eyebrow>
          <DisplayHeading as="h2" size="md">
            Four things we <Accented>actually commit to.</Accented>
          </DisplayHeading>
        </div>
        <FeatureGrid features={principles} columns={2} />
      </Section>

      {/* THE HONEST BIT */}
      <Section tone="surface" divide innerClassName="max-w-3xl">
        <Eyebrow rule className="mb-4">Why this site has no logos</Eyebrow>
        <DisplayHeading as="h2" size="sm" className="mb-6">
          We removed the proof we couldn&apos;t prove.
        </DisplayHeading>
        <div className="space-y-4 text-base text-stone leading-relaxed">
          <p>
            This site used to carry client logos, executive testimonials, and a wall of
            percentages. Most of it could not be traced to anything verifiable, so we took it
            down — including the numbers that made us look good.
          </p>
          <p>
            We are not an official ServiceNow partner and not an official Anthropic partner. We
            build on both, and we will say so plainly rather than implying a badge we have not
            been given.
          </p>
          <p>
            What is left is checkable: the agent in the corner of this page, the voice agent on
            the homepage, and this site itself. Where a client has agreed to act as a reference,
            we will introduce you directly under NDA — just ask.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <PillLink href="/work" variant="primary" size="lg">
            See what we can show you <ArrowRight className="h-4 w-4" />
          </PillLink>
          <PillLink href="/engage" variant="outline" size="lg">
            How we engage
          </PillLink>
        </div>
      </Section>

      <ProofBand />

      <CtaBand
        headline="Want to work"
        accent="with us?"
        sub="Tell us what you're trying to build. You'll get a written plan back in two working days — and an honest answer if we're not the right team."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'Join us instead', href: '/company/careers-servicenow-jobs' }}
      />
    </>
  );
}
