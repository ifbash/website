'use client';
import React, { useState } from 'react';
import { ArrowRight, Search, Clock, Quote, Star, MessageCircle, TrendingUp, Timer, DollarSign, Target, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const stories = [
  {
    client: 'A midwest manufacturer you\'ve never heard of — but your car probably has their parts',
    industry: 'Manufacturing',
    timeline: '9 weeks',
    team: '4 people',
    problem: 'When we first walked into their main plant, the IT director pulled up a spreadsheet. Not a dashboard — a spreadsheet. 14,000 assets across three factories, and maintenance was "whatever the shift supervisor remembers to check." They were losing about $380,000 a month in unplanned downtime. The worst part? They knew it — they just didn\'t think ServiceNow could handle the complexity of their manufacturing environment.',
    whatWeDid: 'We spent the first week just watching — sitting with maintenance crews, shadowing shift changes, understanding what actually happens vs what the process documents said. Then we built an Asset Management module that pulled real-time data from their PLCs through Integration Hub. The key decision: we didn\'t try to model every asset. We focused on the 20% of equipment that caused 80% of the downtime. Four weeks to configure, two weeks of testing with actual operators, two weeks of parallel run, then cutover.',
    results: [
      { metric: '72%', label: 'Less unplanned downtime — $2.1M saved in the first six months' },
      { metric: '4,200', label: 'Preventive work orders auto-generated in the first quarter' },
      { metric: '11 days', label: 'From kickoff to first working prototype shown to the plant manager' },
    ],
    quote: { text: 'I was sceptical. I\'ve seen three ERP implementations fail at this company. But when they showed us a working prototype in 11 days — not a slide deck, an actual working system — I knew this was different.', author: 'Plant Operations Director', tenure: '17 years at the company' },
    tags: ['Asset Management', 'IoT', 'Integration Hub', 'Manufacturing'],
  },
  {
    client: 'A regional bank with 340 branches and an IT team of 12',
    industry: 'Financial Services',
    timeline: '14 weeks',
    team: '5 people',
    problem: 'This one was interesting. The bank wasn\'t failing — their IT team was actually pretty good for their size. But they were drowning in L1 tickets. Password resets, access requests, "my printer isn\'t working." Their three service desk agents handled about 180 tickets a day, and the average response time was creeping toward 6 hours because the volume kept growing as they added branches. They needed to deflect the simple stuff without spending a fortune on a complex ITSM deployment.',
    whatWeDid: 'We built a ServiceNow ITSM instance but started with the employee portal and Virtual Agent — not the back end. Configured about 40 common requests as self-service catalog items with automated fulfillment (password resets, software installs, access provisioning). The Virtual Agent we trained on their actual ticket history — about 9,000 past tickets — so it could recognise the patterns their employees actually used, not just the ones IT wished they used.',
    results: [
      { metric: '64%', label: 'Of all tickets now resolved through self-service or Virtual Agent — service desk handles the interesting stuff now' },
      { metric: '3.5 hours', label: 'Average response time down from 5.8 hours — and it\'s stayed there for 14 months' },
      { metric: '0', label: 'New headcount needed despite 22% growth in branch count over the next year' },
    ],
    quote: { text: 'The thing that sold me: they showed our service desk agents the prototype and asked for their feedback. Not management — the actual agents. And they actually incorporated the feedback. That\'s when I knew these weren\'t typical consultants.', author: 'VP of IT', tenure: '8 years at the bank' },
    tags: ['ITSM', 'Virtual Agent', 'Self-Service', 'Employee Portal'],
  },
  {
    client: 'A hospital network serving about 400,000 patients a year',
    industry: 'Healthcare',
    timeline: '16 weeks',
    team: '6 people',
    problem: 'Hospitals are complicated in ways manufacturing plants aren\'t. You can\'t just "shut down a line" to test something. This network had eight facilities, each with its own way of managing patient intake, bed allocation, and discharge workflows. The result: patients spent an average of 4.7 extra hours waiting because departments couldn\'t see each other\'s status. The CMO described it as "we know where the patient is, we just don\'t know who\'s ready for them."',
    whatWeDid: 'Patient flow isn\'t a traditional ServiceNow use case, so we built it on App Engine with custom tables for bed status, department readiness, and patient transport. Connected it to their EHR through Integration Hub for read-only patient data (no PHI movement — compliance was non-negotiable). The dashboard showed every department a real-time view of patient status across the network. We built it iteratively — one facility at a time, four weeks each, starting with the one with the best data quality.',
    results: [
      { metric: '2.1 hours', label: 'Average patient wait time reduction — from 4.7 hours to 2.6 — across all eight facilities' },
      { metric: '$3.2M', label: 'Annual operational savings from better bed utilisation and reduced overtime' },
      { metric: 'Zero', label: 'Compliance findings during the post-implementation HIPAA audit' },
    ],
    quote: { text: 'We\'ve had consultants tell us "that\'s not how ServiceNow works" before. ifBash said "let\'s figure out how to make it work." And they did. The compliance team signed off on the architecture in the first meeting because they thought through every data flow.', author: 'Chief Medical Information Officer', tenure: '6 years at the network' },
    tags: ['App Engine', 'Integration Hub', 'Healthcare', 'Custom Workflows'],
  },
  {
    client: 'A telecom with infrastructure across 14 states',
    industry: 'Telecommunications',
    timeline: '11 weeks',
    team: '5 people',
    problem: 'Field service was the bottleneck. 340 technicians handling about 2,800 work orders a week, all dispatched by a team of 12 people using — I wish I was joking — a whiteboard and phone calls. Average time from fault report to technician arrival: 8.4 hours. When we asked the dispatch manager what the ideal workflow looked like, he laughed and said "anything where I don\'t have to call someone."',
    whatWeDid: 'FSM deployment with automated dispatching based on technician proximity, skills, and current workload. The integration with their existing workforce management system was the trickiest part — their API documentation was four years out of date. We ended up building a lightweight middleware connector that normalised the data before it hit ServiceNow. The dispatch team went from 12 people doing manual routing to 2 people handling exceptions the AI couldn\'t resolve.',
    results: [
      { metric: '2.9 hours', label: 'Average time-to-arrival — down from 8.4 hours. The dispatch team bought us lunch' },
      { metric: '91%', label: 'First-time fix rate — up from 64% — because the right technician with the right parts was dispatched' },
      { metric: '10', label: 'Dispatch team members redeployed to higher-value work within 3 months' },
    ],
    quote: { text: 'I went from managing chaos to managing exceptions. The system handles 85% of dispatches without any human intervention. My team now handles the complex cases — the ones where you actually need a human brain.', author: 'Field Operations Manager', tenure: '11 years at the company' },
    tags: ['FSM', 'Workforce Management', 'Automated Dispatch', 'Mobile'],
  },
];

const industries = ['All', 'Manufacturing', 'Financial Services', 'Healthcare', 'Telecommunications'];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = stories.filter(s => {
    const mi = selectedIndustry === 'All' || s.industry === selectedIndustry;
    const ms = s.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.whatWeDid.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return mi && ms;
  });

  return (
    <>
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full flex items-center justify-center text-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 32px rgba(79,70,229,0.35)' }} aria-label="Talk about your project">
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-gray-50 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">Tell us about your project</span>
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex flex-col justify-center" style={{ background: '#07071a', minHeight: '60vh' }}>
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.1]" style={{ background: 'radial-gradient(ellipse at top, #4f46e5, transparent 60%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 py-20 lg:py-24 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['No slide decks. Just results.', 'Real projects. Real people.', '1,500+ and counting.'].map((label, i) => {
              const c = ['bg-indigo-500/15 border-indigo-500/30 text-indigo-300', 'bg-violet-500/15 border-violet-500/30 text-violet-300', 'bg-blue-500/15 border-blue-500/30 text-blue-300'];
              return <span key={label} className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-semibold ${c[i]}`}><span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />{label}</span>;
            })}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight max-w-4xl mx-auto mb-4">
            Stories from the field.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">Not from marketing.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Every story below is an actual project. We changed the names because most clients prefer it that way — but the timelines, the numbers, and the quotes are real.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { v: '73', l: 'Days average delivery', s: 'From kickoff to go-live' },
              { v: '98%', l: 'Client retention', s: 'Not because we\'re cheap. Because we deliver.' },
              { v: '180%', l: 'Average ROI year one', s: 'Tracked in a live dashboard — not a quarterly deck' },
              { v: '40%', l: 'Tickets auto-resolved', s: 'Virtual agents handling L1 so humans handle the rest' },
            ].map(({ v, l, s }) => (
              <div key={l} className="rounded-2xl border border-white/8 p-5 text-center transition-all hover:border-indigo-500/30 hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{v}</div>
                <div className="text-sm font-semibold text-slate-300 mb-1">{l}</div>
                <div className="text-xs text-slate-500">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORIES ── */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-indigo-600" />
                <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Project Stories</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What actually happened.</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input type="text" placeholder="Search by tech, industry, or keyword..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {industries.map(ind => (
                  <button key={ind} onClick={() => setSelectedIndustry(ind)}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${selectedIndustry === ind ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}>{ind}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {filtered.map((cs, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-indigo-200 transition-all">
                <div className="p-6 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">{cs.industry}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="h-3 w-3" /> {cs.timeline}</span>
                    <span className="text-xs text-gray-400">{cs.team}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-5 leading-snug">{cs.client}</h3>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">The situation</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">What we did</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{cs.whatWeDid}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mt-6 p-5 rounded-xl border border-green-200" style={{ background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)' }}>
                    <div className="text-xs text-green-700 uppercase tracking-widest font-semibold mb-3">What changed</div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {cs.results.map(r => (
                        <div key={r.label}>
                          <div className="text-lg font-bold text-green-700">{r.metric}</div>
                          <div className="text-xs text-gray-600 leading-relaxed">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-5 border-l-2 border-indigo-300 pl-4">
                    <p className="text-sm text-gray-700 italic leading-relaxed mb-2">&ldquo;{cs.quote.text}&rdquo;</p>
                    <p className="text-xs text-gray-500">— {cs.quote.author}, {cs.quote.tenure}</p>
                  </blockquote>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {cs.tags.map(t => <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16"><p className="text-gray-500">Nothing matches those filters. Try a different search.</p></div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-15 rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, #4f46e5, transparent 70%)' }} />
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Your project could be the next story here.</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">Tell us what you need. We&apos;ll tell you honestly if we can help — and exactly how we&apos;d approach it. 48 hours, no commitment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 32px rgba(79,70,229,0.4)' }}>
              Start talking <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
