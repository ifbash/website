'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, Search, Lightbulb, Cog, Rocket, Network, Shield, Users, TrendingUp, Wrench, Clock } from 'lucide-react';

const A = '#4f46e5';
const AG = 'linear-gradient(135deg, #4f46e5, #7c3aed)';

const caseStudies = [
  { client: 'TechFlow Industries', industry: 'Manufacturing', timeline: '12 weeks', challenge: '47 separate IT tools across 8 business units. Engineers spent 40% of time context-switching. Incident resolution averaged 6.4 days.', solution: 'Unified ServiceNow ITSM with single incident queue, automated routing, and integration hub connecting 12 legacy tools.', results: ['6.4 days → 1.7 days resolution', '$2.3M annual savings', '99.7% uptime post go-live'], quote: 'We had 47 places to look for a ticket. Now there\'s one. That sounds simple but it changed everything.', author: 'David Miller, CTO' },
  { client: 'GlobalHealth Network', industry: 'Healthcare', timeline: '16 weeks', challenge: '23 facilities running independent IT systems. A fix at one facility took months to reach others. HIPAA audit prep: 3 weeks per facility.', solution: 'Shared ServiceNow ITSM with central knowledge base, automated compliance workflows, and unified monitoring across all 23 sites.', results: ['HIPAA prep: 3 weeks → 2 days', 'Repeat incidents resolved 67% faster', 'Zero downtime during migration'], quote: 'ifBash ran six sites at a time in parallel. Nobody noticed the migration was happening — exactly what you want.', author: 'Sarah Chen, VP Operations' },
  { client: 'FinanceCore Ltd', industry: 'Financial Services', timeline: '14 weeks', challenge: 'SOX audits required 4-person team working 6 weeks to produce evidence. Two security incidents in 18 months from access control gaps.', solution: 'ServiceNow ITSM with automated SOX control documentation, role-based access built from compliance requirements up.', results: ['Audit prep: 6 weeks → 3 days', 'Zero security incidents in 24 months', '91% user satisfaction at 90 days'], quote: 'Our auditors called it the cleanest audit package they\'d seen. Every control documented and timestamped, automatically.', author: 'Michael Torres, IT Director' },
];

const methodology = [
  { phase: 'Discovery', duration: 'Weeks 1–2', icon: Search, features: ['Current state analysis & process mapping', 'Risk assessment & stakeholder alignment', 'Security & compliance requirements defined'] },
  { phase: 'Design', duration: 'Weeks 3–6', icon: Lightbulb, features: ['Instance setup & workflow architecture', 'Integration design with existing systems', 'UX design & role-based access model'] },
  { phase: 'Build', duration: 'Weeks 7–10', icon: Cog, features: ['Custom development & integration build', 'Automated testing runs parallel to build', 'Client validation at each sprint review'] },
  { phase: 'Go-Live', duration: 'Weeks 11–12', icon: Rocket, features: ['Data migration with zero-downtime cutover', 'Role-specific training for all user groups', 'Hypercare: daily check-ins, 90-day KPI review'] },
];

const features = [
  { icon: Rocket, title: 'Rapid Implementation', desc: '73-day average go-live. Pre-built accelerators, parallel workstreams, working demo in week two.' },
  { icon: Network, title: 'Seamless Integration', desc: '300+ connector patterns for SAP, Oracle, Workday, Salesforce. Custom connectors for proprietary systems.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Security model designed before workflows. RBAC, audit trails, and compliance mapped in weeks 1–2.' },
  { icon: Users, title: 'Change Management', desc: 'Department champions, role-specific training, live adoption dashboards. Clients average 91% adoption.' },
  { icon: TrendingUp, title: 'Performance Tracking', desc: 'KPI framework agreed upfront. Monthly reviews. 90-day optimisation cycle post go-live.' },
  { icon: Wrench, title: 'Ongoing Support', desc: 'Original build team stays on. 24/7 monitoring, 15-min P1 response, continuous improvement.' },
];

const faqs = [
  { q: 'How long does a typical implementation take?', a: '12–16 weeks from kickoff to go-live. The 73-day average comes from pre-built accelerators and parallel workstreams — testing runs alongside build, not after it.' },
  { q: 'Can you integrate with our existing systems?', a: 'Integration design starts week one. We use 300+ pre-built connector patterns and build custom connectors for systems without native support.' },
  { q: 'What support do you provide after go-live?', a: 'Structured hypercare: daily check-ins for two weeks, weekly reviews through week 12, formal 90-day outcome review. The same engineers who built your platform can continue managing it.' },
  { q: 'How do you handle security and compliance?', a: 'Security architecture is designed before any workflow. RBAC, encryption, audit trails, and compliance mappings (SOC 2, HIPAA, SOX) are defined in weeks 1–2.' },
  { q: 'How do you handle platform upgrades?', a: '6-week planning cycle: full upgrade in sandbox with all custom configs tested. 400+ upgrades completed, zero unplanned downtime.' },
];

export default function ServiceNowImplementationPage() {
  const [currentCase, setCurrentCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => { const i = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 6000); return () => clearInterval(i); }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) { const id = e.target.getAttribute('data-reveal'); if (id) { setRevealed(prev => ({ ...prev, [id]: true })); obs.unobserve(e.target); } } }); },
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const orbitSystems = [{ label: 'SAP', angle: 0, color: '#0070f3' }, { label: 'Salesforce', angle: 51, color: '#00a1e0' }, { label: 'Workday', angle: 102, color: '#f8761f' }, { label: 'Azure', angle: 153, color: '#0078d4' }, { label: 'Jira', angle: 204, color: '#0052cc' }, { label: 'Slack', angle: 255, color: '#4a154b' }, { label: 'Teams', angle: 307, color: '#6264a7' }];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: `0 8px 24px ${A}66` }} aria-label="Free Strategy Call">
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      {/* HERO — dark */}
      <section className="relative bg-white overflow-hidden flex items-center min-h-[calc(100vh-70px)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-8 h-px bg-indigo-600" />
                <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">ServiceNow Implementation</span>
              </div>
              <div className="max-w-3xl mb-5">
                <h1 className="text-6xl sm:text-6xl lg:text-6xl font-bold text-gray-900 leading-[1.0] tracking-tight">
                  Go-live in
                  <br></br>
                  <span className="text-indigo-600">73 days.</span>
                  <br></br>
                  <span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">Not 9 months.</span>
                </h1>
              </div>
              <br></br>
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
                Pre-built accelerators. Parallel workstreams. Phase gates that catch scope creep before it delays you. <span className="text-indigo-600 font-semibold">1,500+ implementations</span> — we know what breaks and what doesn&apos;t.
              </p>
              <br></br>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: '0 8px 24px rgba(79,70,229,0.35)' }}>Start Your Implementation <ArrowRight className="h-4 w-4" /></a>
                <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-indigo-400 text-gray-600 hover:text-indigo-600 font-semibold rounded-xl transition-colors text-sm">See Client Results</a>
              </div>
            </div>

            {/* Right — Integration ecosystem visual */}
            <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
              <div className="relative z-10 w-40 h-40 rounded-2xl border-2 bg-white shadow-xl flex flex-col items-center justify-center" style={{ borderColor: '#4f46e5', boxShadow: '0 0 40px rgba(79,70,229,0.15)' }}>
                <div className="text-indigo-600 font-black text-xl">Now</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">ServiceNow</div>
              </div>
              <div className="absolute w-[26rem] h-[26rem] rounded-full border border-indigo-100" />
              {orbitSystems.map(({ label, angle, color }, i) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <div key={i} className="absolute w-14 h-14 rounded-xl border bg-white shadow-md flex items-center justify-center" style={{ transform: `translate(${Math.cos(rad) * 150}px, ${Math.sin(rad) * 150}px)`, borderColor: `${color}33`, boxShadow: `0 4px 16px ${color}22` }}>
                    <div className="text-[11px] font-bold" style={{ color }}>{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — light */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#eef2ff' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">The ifBash Advantage</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for enterprise. Delivered with precision.</h2>
          </div>
          <div data-reveal="features" className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${revealed.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="group p-6 rounded-2xl border border-indigo-200 bg-white transition-all hover:shadow-md" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${A}12` }}><Icon className="h-5 w-5 text-indigo-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">The 73-Day Roadmap</h2><p className="text-gray-500 max-w-xl mx-auto">Working software over exhaustive documentation.</p></div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent z-0" />
            {methodology.map(({ phase, duration, icon: Icon, features: items }) => (
              <div key={phase} className="relative z-10 group text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white border-2 border-indigo-100 group-hover:border-indigo-300 flex items-center justify-center transition-all shadow-sm group-hover:shadow-md"><Icon className="h-6 w-6 text-indigo-600" /></div>
                <div className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-3">{duration}</div>
                <h3 className="font-bold text-gray-900 mb-3">{phase}</h3>
                <ul className="space-y-2 text-left">{items.map(item => <li key={item} className="flex items-start gap-2 text-xs text-gray-600"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 lg:py-20" style={{ background: '#eef2ff' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-8"><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real numbers. Real clients.</h2></div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentCase * 100}%)` }}>{caseStudies.map((cs, i) => (
              <div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3>
                    <div className="space-y-4"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div><div><div className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-1">Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div></div>
                    <blockquote className="mt-5 pl-4 border-l-2 border-indigo-200 text-sm text-gray-600 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote>
                  </div>
                  <div className="rounded-2xl border border-gray-100 overflow-hidden" style={{ background: '#f8faff' }}><div className="px-5 py-3 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">Outcomes</span><span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div><div className="p-5 grid gap-3">{cs.results.map((r, j) => <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" /><span className="text-sm font-semibold text-gray-800">{r}</span></div>)}</div><div className="px-5 py-3 border-t border-gray-100 flex justify-between"><span className="text-xs text-gray-400">Delivered in</span><span className="text-sm font-bold text-indigo-600">{cs.timeline}</span></div></div>
                </div>
              </div></div>
            ))}</div></div>
            <div className="flex items-center justify-between mt-5"><button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center transition-colors"><ChevronLeft className="h-5 w-5 text-gray-500" /></button><div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={`rounded-full transition-all ${i === currentCase ? 'w-8 h-2 bg-indigo-600' : 'w-2 h-2 bg-gray-300'}`} />)}</div><button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center transition-colors"><ChevronRight className="h-5 w-5 text-gray-500" /></button></div>
          </div>
        </div>
      </section>

      {/* WHY IFBASH */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: `${A}08`, borderColor: `${A}33`, color: '#818cf8' }}>Why ifBash</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">We don&apos;t just implement.<br /><span style={{ color: '#818cf8' }}>We deliver outcomes.</span></h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">We start with your teams and your outcomes, not the platform.</p>
            </div>
            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[{ icon: Rocket, stat: '73-day average', desc: 'Pre-built accelerators and parallel workstreams. Working demo by week two.' }, { icon: Shield, stat: 'Security first', desc: 'Security architecture designed before any workflow. Compliance mapped in weeks 1–2.' }, { icon: Clock, stat: 'We stay', desc: '90-day hypercare minimum. Original build team stays on. Continuous improvement.' }].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-indigo-500/30 transition-all" style={{ borderColor: `${A}26`, background: `${A}0A` }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${A}18` }}><Icon className="h-5 w-5 text-indigo-400" /></div><div className="text-sm font-bold text-white mb-2">{stat}</div><p className="text-xs text-slate-400 leading-relaxed">{desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px bg-indigo-600" /><span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><a href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}4d` }}>Ask us directly <ArrowRight className="h-4 w-4" /></a></div>
            <div className="lg:col-span-2 space-y-2">{faqs.map((faq, i) => (<div key={i} className="border border-gray-200 hover:border-indigo-200 rounded-xl overflow-hidden transition-colors"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span><ChevronDown className={`h-4 w-4 text-indigo-500 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} /></button>{openFaq === i && <div className="px-5 pb-4 border-t border-gray-100 pt-3"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>}</div>))}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}4d`, background: `linear-gradient(135deg, ${A}14, ${A}07)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}18`, borderColor: `${A}4d`, color: '#818cf8' }}><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Accepting new engagements · 73-day go-live</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to go live in 73 days?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your environment. We&apos;ll scope your implementation in 48 hours.</p>
            <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}4d` }}>Free Strategy Call <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
