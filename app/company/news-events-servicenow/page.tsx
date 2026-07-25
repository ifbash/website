import { ArrowRight, Mic, Hammer, Mail } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, CtaBand, PillLink,
} from '@/components/site';

// The previous version listed three future webinars with specific dates,
// venues, and registration counts, plus six articles — none of which existed.
// This page now states only what is true.
const whereWeActuallyAre = [
  {
    icon: Hammer,
    title: 'Shipping, mostly',
    desc: 'Our attention is on client delivery across the three practices rather than on a conference circuit. When that changes, this page changes with it.',
  },
  {
    icon: Mic,
    title: 'Happy to talk',
    desc: 'If you are running an event and want someone to speak about agent engineering or ServiceNow delivery, get in touch — we will say yes or no quickly.',
  },
  {
    icon: Mail,
    title: 'Occasional writing',
    desc: 'When we have something worth saying about agents, evals, or platform work, it goes out by email rather than being buried in a blog nobody subscribes to.',
  },
];

export default function NewsEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & events"
        headline="Nothing scheduled."
        accent="We'd rather not invent one."
        sub="This page previously listed webinars and articles that did not exist. It now says what is actually true, which is less impressive and considerably more useful."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'See our work', href: '/work' }}
      />

      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">Where we are</Eyebrow>
          <DisplayHeading as="h2" size="md">
            The honest <Accented>status update.</Accented>
          </DisplayHeading>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {whereWeActuallyAre.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-hairline bg-paper p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-navy-tint flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-navy" />
              </div>
              <h2 className="font-display text-xl text-ink mb-2.5">{title}</h2>
              <p className="text-[15px] leading-relaxed text-stone">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink" pad="tight" innerClassName="max-w-3xl">
        <Eyebrow rule onInk className="mb-4">A note on this</Eyebrow>
        <DisplayHeading as="h2" size="sm" onInk className="mb-5">
          An empty page beats a fabricated one.
        </DisplayHeading>
        <p className="text-base text-onink-muted leading-relaxed mb-4">
          Inventing a webinar is a small lie that costs nothing until someone tries to register
          for it. We took the same view here as everywhere else on this site: if we cannot point
          at it, it does not go on the page.
        </p>
        <p className="text-base text-onink-muted leading-relaxed">
          The newsletter in the footer is real, and so is the agent. Both are better uses of your
          time than a press release would be.
        </p>
        <div className="mt-8">
          <PillLink href="/work" variant="outline" size="lg" onInk>
            See what does exist <ArrowRight className="h-4 w-4" />
          </PillLink>
        </div>
      </Section>

      <CtaBand
        headline="Want us at"
        accent="your event?"
        sub="Or just want to talk about a project? Either way, tell us what you have in mind — every message gets answered by a person."
        primary={{ label: 'Get in touch', href: '/contactus' }}
        secondary={{ label: 'Ask our agent', href: '/agent' }}
      />
    </>
  );
}
