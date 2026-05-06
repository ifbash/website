'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, MapPin, Clock, GraduationCap, Users, Heart, Globe, DollarSign, Rocket, Brain, Shield, Target, Star, Quote, CheckCircle, MessageCircle, BookOpen, Zap, Mail, Phone, Calendar, Coffee } from 'lucide-react';
import Link from 'next/link';

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
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
  },
];

const perks = [
  { icon: Globe, title: 'Work from anywhere', body: 'We\'ve been remote-first since 2016 — long before it was trendy. Most of us work from home. Some work from co-working spaces. A few work from coffee shops. As long as you deliver and show up to client calls, we don\'t care where your desk is.' },
  { icon: BookOpen, title: 'Learning is not optional — it\'s budgeted', body: 'Every team member gets ₹1.5 lakh per year for learning. Use it for certifications, conferences, courses, books — whatever helps you grow. We also run internal tech talks every Friday where someone on the team teaches something they learned that week.' },
  { icon: Heart, title: 'Health coverage that actually covers things', body: 'Medical insurance for you and your family. Mental health support through a dedicated platform. Gym or fitness reimbursement. We don\'t do "wellness webinars" — we put money toward things that actually keep you healthy.' },
  { icon: Clock, title: 'No meeting Wednesdays. Actually.', body: 'Wednesday is a meeting-free day across the company. No stand-ups, no client calls, no internal reviews. It\'s protected time for deep work — coding, designing, writing, thinking. We\'ve done this for three years and it\'s the most popular policy we have.' },
];

const fromTheTeam = [
  { quote: 'I joined as a mid-level developer and within 18 months I was leading client engagements. Not because of some fast-track programme — because my architect trusted me with real responsibility and backed me up when I needed help. That kind of mentorship is hard to find.', name: 'Priya', role: 'Lead Developer', tenure: '2.5 years' },
  { quote: 'What I like most: nobody micromanages. I know what I need to deliver, I have the support to deliver it, and then I\'m trusted to go do the work. Coming from a company where I had to log my hours in 15-minute increments, this is liberating.', name: 'Rahul', role: 'Solution Architect', tenure: '1.5 years' },
  { quote: 'I was worried about joining a consulting firm because I thought it would mean constant firefighting and client escalation. It\'s not like that here. We plan sprints properly, we push back when scope creeps, and leadership actually backs us up when we tell a client something will take longer than they want.', name: 'Anita', role: 'Senior Consultant', tenure: '3 years' },
];

const teams = ['All', 'Engineering', 'Consulting', 'Design', 'Operations', 'Sales'];

export default function CareersPage() {
  const [selectedTeam, setSelectedTeam] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentQuote(prev => (prev + 1) % fromTheTeam.length), 6000);
    return () => clearInterval(t);
  }, []);

  const filtered = openRoles.filter(r => {
    const mt = selectedTeam === 'All' || r.team === selectedTeam;
    const ms = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.about.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.lookingFor.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return mt && ms;
  });

  return (
    <>
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full flex items-center justify-center text-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 8px 32px rgba(5,150,105,0.35)' }} aria-label="Ask about roles">
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-gray-50 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">Ask about open roles</span>
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex flex-col justify-center" style={{ background: '#040d08', minHeight: '70vh' }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #34d399 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.1]" style={{ background: 'radial-gradient(ellipse at top, #059669, transparent 60%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 py-20 lg:py-24 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Remote-first since 2016', '50+ people, 6 countries', '₹1.5L annual learning budget'].map((label, i) => {
              const c = ['bg-emerald-500/15 border-emerald-500/30 text-emerald-300', 'bg-teal-500/15 border-teal-500/30 text-teal-300', 'bg-green-500/15 border-green-500/30 text-green-300'];
              return <span key={label} className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-semibold ${c[i]}`}><span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />{label}</span>;
            })}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight max-w-3xl mx-auto mb-6">
            Do good work.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Grow with good people.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            We build ServiceNow solutions for enterprises around the world. Most of us work from home. We don&apos;t track hours, we track outcomes. And we genuinely like working together — which, if you&apos;ve worked at other consulting firms, you know is not a given.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 8px 32px rgba(5,150,105,0.35)' }}>
              View open roles <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/company/about-us" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 border border-white/10 hover:border-emerald-500/50 hover:text-white transition-all text-sm">
              Learn about the company
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT IT'S LIKE ── */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-emerald-600" />
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">What it&apos;s like here</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">The stuff that actually matters when you&apos;re choosing where to work.</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {perks.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5 p-6 rounded-2xl border border-gray-200 hover:border-emerald-200 transition-all">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTES CAROUSEL ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#040d08' }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #34d399 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-emerald-400" />
              <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">From the team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What people actually say — not the polished version.</h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentQuote * 100}%)` }}>
                {fromTheTeam.map((q, i) => (
                  <div key={i} className="w-full flex-shrink-0">
                    <div className="rounded-2xl p-8 md:p-12 border border-white/10 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <Quote className="h-8 w-8 text-emerald-500 mx-auto mb-5" />
                      <p className="text-lg text-slate-300 leading-relaxed mb-6">&ldquo;{q.quote}&rdquo;</p>
                      <div className="text-white font-semibold">{q.name}</div>
                      <div className="text-sm text-slate-500">{q.role} &middot; {q.tenure}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {fromTheTeam.map((_, i) => (
                <button key={i} onClick={() => setCurrentQuote(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentQuote ? 'bg-emerald-500 w-7' : 'bg-white/20 hover:bg-white/30'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-emerald-600" />
              <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">Open Roles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Current openings.</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input type="text" placeholder="Search by role, skill, or keyword..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {teams.map(t => (
                <button key={t} onClick={() => setSelectedTeam(t)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedTeam === t ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}>{t}</button>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {filtered.map(role => (
              <div key={role.title} className="border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-md hover:border-emerald-200 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg font-bold text-gray-900">{role.title}</h3>
                      {role.featured && <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full px-2.5 py-0.5 flex items-center gap-1"><Zap className="h-3 w-3" /> Featured</span>}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" />{role.team}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {role.location}</span>
                      <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" /> {role.experience}</span>
                      <span className="font-semibold text-emerald-700">{role.salary}</span>
                    </div>
                  </div>
                  <Link href="/get-started" className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 4px 16px rgba(5,150,105,0.2)' }}>
                    Apply <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">{role.about}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">What we&apos;re looking for</div>
                    <ul className="space-y-1.5">
                      {role.lookingFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />{item}</li>
                      ))}
                    </ul>
                  </div>
                  {role.niceToHave && (
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Nice to have</div>
                      <ul className="space-y-1.5">
                        {role.niceToHave.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-500"><CheckCircle className="h-4 w-4 text-gray-300 mt-0.5 shrink-0" />{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && <div className="text-center py-16"><p className="text-gray-500">No roles match. Try a different filter — or just send us your resume anyway.</p></div>}

          {/* No match? */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Don&apos;t see a role that fits?</h3>
            <p className="text-sm text-gray-500 mb-4">We hire great people, not job descriptions. If you&apos;re good at what you do and ServiceNow is your thing, send us your resume.</p>
            <Link href="/get-started" className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:underline">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#040d08' }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #34d399 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-12 rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, #059669, transparent 70%)' }} />
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Ready to build something good?</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">Apply for a role or just say hello. We read every application — and we respond to every one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 8px 32px rgba(5,150,105,0.4)' }}>
              Apply or say hello <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
