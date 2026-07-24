'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown, Globe, BookOpen, Heart, Clock, MapPin, Briefcase } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, CtaBand, PillLink,
} from '@/components/site';

const openRoles = [
  {
    title: 'Senior ServiceNow Developer',
    team: 'Engineering',
    location: 'Remote (India) — we have people in Hyderabad, Bangalore, Pune, and Delhi',
    type: 'Full-time',
    experience: '5+ years of ServiceNow development',
    about: 'You\'ll be building custom applications, configuring modules, and writing integrations for enterprise clients. Most of our work is ITSM, ITOM, and CSM — but we also build on App Engine and Integration Hub regularly. You\'ll work directly with clients (not through layers of project managers) and you\'ll own your code from dev to production.',
    lookingFor: ['ServiceNow CSA and CAD certified (or equivalent experience)', 'Strong JavaScript — you should be comfortable with Glide APIs and script includes', 'Experience with at least two major modules (ITSM, ITOM, CSM, HRSD, etc.)', 'You\'ve built integrations between ServiceNow and other systems — REST, SOAP, or both'],
    niceToHave: ['Experience with Service Portal or UI Builder', 'You\'ve worked on at least one project that used ATF for testing', 'You can read and write basic SQL for reporting'],
    salary: '₹18-28 LPA depending on experience',
  },
  {
    title: 'ServiceNow Solution Architect',
    team: 'Consulting',
    location: 'Remote (India) with occasional client travel — maybe once a quarter',
    type: 'Full-time',
    experience: '7+ years in ServiceNow, with at least 2 years as an architect',
    about: 'You\'ll design the architecture for client implementations — module selection, data model, integration patterns, security model. You\'ll be the technical decision-maker on projects and mentor senior developers. This is not a "draw boxes and hand off" role — you will build POCs, review code, and occasionally write the tricky parts yourself.',
    lookingFor: ['Deep expertise in at least three ServiceNow modules — you know them well enough to explain trade-offs to a CTO', 'You\'ve designed solutions that integrated ServiceNow with ERP, CRM, or legacy systems', 'You can write technical architecture documents that developers can actually follow', 'Client-facing experience — you can explain technical decisions to non-technical stakeholders without jargon'],
    niceToHave: ['Experience with ServiceNow\'s AI/ML capabilities', 'You\'ve led technical teams of 3+ people', 'TOGAF or similar architecture certification'],
    salary: '₹25-38 LPA depending on experience',
  },
  {
    title: 'Business Process Consultant',
    team: 'Consulting',
    location: 'Remote (India)',
    type: 'Full-time',
    experience: '4+ years in business analysis or process consulting, ideally with ServiceNow exposure',
    about: 'You\'ll be the bridge between what the client says they want and what they actually need. This means running workshops, mapping processes, writing user stories, and sometimes telling clients "you don\'t need a custom app for that — here\'s a simpler way." You\'ll work alongside architects and developers throughout the implementation.',
    lookingFor: ['ITIL certification (Foundation at minimum)', 'You\'ve facilitated workshops with 10+ stakeholders and survived', 'Experience with process mapping — you can draw a swimlane diagram that actually makes sense', 'ServiceNow exposure — you don\'t need to code, but you should understand what the platform can and can\'t do'],
    niceToHave: ['Experience in a specific industry — healthcare, manufacturing, financial services', 'You\'ve been involved in an enterprise software implementation from start to finish'],
    salary: '₹14-22 LPA depending on experience',
  },
  {
    title: 'UX Designer — Enterprise Applications',
    team: 'Design',
    location: 'Remote (anywhere in India)',
    type: 'Full-time',
    experience: '3+ years in UX design, preferably with enterprise or B2B products',
    about: 'Most ServiceNow instances look... functional. We think they should look great. You\'ll design employee portals, service catalogs, and mobile experiences for enterprise users. You\'ll work directly with clients to understand their users, prototype solutions, and hand off pixel-perfect specs to developers. This is not a "make the logo bigger" role — you\'ll have real ownership over the experience layer.',
    lookingFor: ['Strong portfolio showing B2B or enterprise work — consumer-only portfolios won\'t be a fit', 'Figma expertise — our entire design system lives there', 'You\'ve done user research, not just UI design', 'You can explain why a design decision improves usability, not just aesthetics'],
    niceToHave: ['Experience with Service Portal or UI Builder', 'ServiceNow CSA certification', 'You\'ve designed for accessibility (WCAG compliance)'],
    salary: '₹12-20 LPA depending on experience',
  },
  {
    title: 'Technical Project Manager',
    team: 'Operations',
    location: 'Remote (India) — must overlap at least 4 hours with IST business hours',
    type: 'Full-time',
    experience: '5+ years managing technical projects, at least 2 in ServiceNow or similar platforms',
    about: 'You\'ll run 2-3 implementation projects at a time — managing timelines, client communication, team allocation, and the thousand small things that make the difference between "delivered on time" and "three months late." You\'ll work with a technical lead on each project. We don\'t micromanage PMs — we expect you to own your projects and escalate only when you need help.',
    lookingFor: ['You\'ve managed enterprise software projects end to end — from kickoff to go-live, not just the planning phase', 'ServiceNow knowledge — you don\'t need to code but you need to understand the platform well enough to push back on unrealistic estimates', 'Comfortable with agile — we run two-week sprints', 'You can have a difficult conversation with a client without making them angry'],
    niceToHave: ['PMP or Scrum Master certification', 'Experience managing distributed teams across time zones'],
    salary: '₹16-26 LPA depending on experience',
  },
  {
    title: 'ServiceNow Sales Engineer',
    team: 'Sales',
    location: 'Remote (India) — Bangalore or Hyderabad preferred',
    type: 'Full-time',
    experience: '4+ years in technical pre-sales, with ServiceNow experience',
    about: 'You\'ll run technical discovery calls, build tailored demos, and answer the "can ServiceNow actually do X?" questions that prospects bring. You\'ll work with our sales team and architects to scope projects accurately — we don\'t oversell and we don\'t underdeliver, so your estimates need to be honest. You\'ll also contribute to proposals, RFP responses, and occasionally write technical content for the website.',
    lookingFor: ['ServiceNow platform knowledge across multiple modules', 'You can build a compelling demo that shows value, not just features', 'Experience scoping enterprise software projects — timeline, team size, cost', 'Strong communication — you can talk to a CIO and a developer in the same meeting and make sense to both'],
    niceToHave: ['Previous consulting or professional services experience', 'ServiceNow CSA/CIS certifications'],
    salary: '₹14-24 LPA depending on experience',
  },
];

const perks = [
  { icon: Globe, title: 'Work from anywhere', body: 'We have been remote-first from the start. Most of us work from home, some from co-working spaces. As long as you deliver and show up to client calls, we do not care where your desk is.' },
  { icon: BookOpen, title: 'Learning is budgeted, not encouraged', body: 'Every team member gets ₹1.5 lakh per year for learning — certifications, conferences, courses, books. We also run internal tech talks every Friday where someone teaches what they learned that week.' },
  { icon: Heart, title: 'Health coverage that covers things', body: 'Medical insurance for you and your family, mental health support through a dedicated platform, and fitness reimbursement. We do not do wellness webinars.' },
  { icon: Clock, title: 'No-meeting Wednesdays', body: 'Wednesday is meeting-free across the company. No stand-ups, no client calls, no internal reviews — protected time for deep work. It is the most popular policy we have.' },
];

const teams = ['All', 'Engineering', 'Consulting', 'Design', 'Operations', 'Sales'];

export default function CareersPage() {
  const [team, setTeam] = useState('All');
  const [open, setOpen] = useState<number | null>(0);

  const visible = openRoles.filter((r) => team === 'All' || r.team === team);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        headline="Senior work,"
        accent="without the layers."
        sub="You talk to clients directly, own what you build, and are trusted to say when something will take longer than they want. Remote-first across India."
        primary={{ label: 'See open roles', href: '#roles' }}
        secondary={{ label: 'What we do', href: '/services' }}
      />

      {/* PERKS */}
      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">How we work here</Eyebrow>
          <DisplayHeading as="h2" size="md">
            Policies we <Accented>actually keep.</Accented>
          </DisplayHeading>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {perks.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col rounded-2xl border border-hairline bg-paper p-7">
              <div className="w-11 h-11 rounded-xl bg-navy-tint flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-navy" />
              </div>
              <h3 className="font-display text-xl text-ink mb-2.5">{title}</h3>
              <p className="text-[15px] leading-relaxed text-stone">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ROLES */}
      <Section tone="paper" id="roles">
        <div className="mb-10 max-w-2xl">
          <Eyebrow rule className="mb-4">Open roles</Eyebrow>
          <DisplayHeading as="h2" size="md" className="mb-4">
            {openRoles.length} positions open.
          </DisplayHeading>
          <p className="text-base text-stone">
            Salary ranges are published up front because making you ask is a waste of everyone&apos;s time.
          </p>
        </div>

        {/* Team filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {teams.map((t) => (
            <button
              key={t}
              onClick={() => { setTeam(t); setOpen(null); }}
              aria-pressed={team === t}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                team === t
                  ? 'bg-ink text-paper'
                  : 'border border-hairline bg-surface text-ink-body hover:border-navy-soft hover:text-navy'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {visible.map((role, i) => (
            <div key={role.title} className="rounded-2xl border border-hairline bg-surface overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-wash transition-colors"
              >
                <span className="min-w-0">
                  <span className="block font-display text-xl text-ink mb-2">{role.title}</span>
                  <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-stone">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-navy" /> {role.team}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-navy" /> {role.type}
                    </span>
                    <span className="font-medium text-navy">{role.salary}</span>
                  </span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-stone-faint shrink-0 mt-1 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-6 border-t border-hairline-soft pt-5">
                  <p className="text-sm text-stone leading-relaxed mb-2">
                    <span className="font-semibold text-ink-body">Location:</span> {role.location}
                  </p>
                  <p className="text-sm text-stone leading-relaxed mb-5">
                    <span className="font-semibold text-ink-body">Experience:</span> {role.experience}
                  </p>
                  <p className="text-[15px] text-stone leading-relaxed mb-6">{role.about}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="text-[11px] font-semibold tracking-widest uppercase text-navy mb-3">
                        What we&apos;re looking for
                      </div>
                      <ul className="space-y-2">
                        {role.lookingFor.map((l) => (
                          <li key={l} className="flex items-start gap-2 text-sm text-stone leading-relaxed">
                            <span className="mt-[7px] h-1 w-1 rounded-full bg-navy shrink-0" />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold tracking-widest uppercase text-navy mb-3">
                        Nice to have
                      </div>
                      <ul className="space-y-2">
                        {role.niceToHave.map((l) => (
                          <li key={l} className="flex items-start gap-2 text-sm text-stone leading-relaxed">
                            <span className="mt-[7px] h-1 w-1 rounded-full bg-stone-faint shrink-0" />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <PillLink href="/contactus" variant="primary" size="md">
                      Apply for this role <ArrowRight className="h-4 w-4" />
                    </PillLink>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink" pad="tight">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['No take-home marathons', 'One technical conversation and a short practical exercise. We do not ask for a weekend of unpaid work.'],
            ['You meet the team', 'Not just a recruiter. You talk to the people you would actually work alongside.'],
            ['We answer either way', 'A no within a week beats silence for a month. You will hear back.'],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="font-display text-xl mb-2 text-onink">{t}</div>
              <p className="text-sm leading-relaxed text-onink-muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        headline="Nothing here"
        accent="quite right?"
        sub="Tell us what you're good at anyway. We hire when we meet someone worth hiring, not only when a role is posted."
        primary={{ label: 'Get in touch', href: '/contactus' }}
        secondary={{ label: 'See what we build', href: '/work' }}
      />
    </>
  );
}
