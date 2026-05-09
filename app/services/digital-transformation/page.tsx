'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Star, Users, Zap, Shield, TrendingUp, Target, Globe, Workflow, Layers, BarChart3, MessageCircle, ChevronDown } from 'lucide-react';

const caseStudies = [
  { client: "GlobalManufacturing Co", industry: "Manufacturing", challenge: "12 plants running separate ERP instances with no shared data layer. Incident resolution averaged 4.2 days; field engineers had no real-time access to back-office inventory or work orders.", solution: "Unified ServiceNow operating layer across all 12 sites. Single data model, automated incident-to-resolution workflows, and real-time field ops portal replacing 4 legacy tools.", results: ["4.2 days → 6 hrs avg incident resolution", "Manual processes cut from 847 to 94", "$24M annual operational savings", "First ROI milestone: week 8"], timeline: "20 weeks", testimonial: "ifBash didn't just modernise our tech — they transformed how our entire business operates." },
  { client: "FinancePlus Group", industry: "Financial Services", challenge: "Finance, risk, and compliance ran entirely separate workflows. Approval cycles averaged 45 days; audit prep required 3 weeks of manual data extraction every quarter.", solution: "Unified cross-department workflow orchestration on ServiceNow, with automated compliance routing, a live audit data layer, and self-service portals replacing email-based approvals.", results: ["45-day approval cycles → 2 days", "Quarterly audit prep: 3 weeks → 4 hours", "$31M in process cost eliminated", "Zero regulatory findings post-launch"], timeline: "24 weeks", testimonial: "Our digital transformation delivered ROI within 8 weeks. The methodology was flawless." },
  { client: "PublicHealth Authority", industry: "Public Sector", challenge: "67 offices running paper-based citizen case management. Average resolution: 22 days. Staff processing 340 forms daily by hand. No single view of citizen history across departments.", solution: "Digital citizen experience platform on ServiceNow with self-service intake, intelligent case routing, and a unified citizen record accessible across all 67 offices.", results: ["22-day resolution → 2.1 minutes", "340 manual forms/day → fully automated", "94% citizen satisfaction (from 31%)", "67 offices on one platform, 28 weeks"], timeline: "28 weeks", testimonial: "Citizens now access services 24/7. The transformation exceeded every expectation." }
];

const clientStories = [
  { name: "Sarah Thompson", title: "Chief Digital Officer", story: "We'd tried two previous transformation programmes that stalled at implementation. ifBash was different — they spent 4 weeks understanding us before writing a line of architecture. Week 8 we had our first live system. Week 20 all 12 plants were on the same platform.", metric: "4.2-day incident resolution → 6 hours. First ROI in week 8.", rating: 5 },
  { name: "James Okonkwo", title: "Head of Digital, FinancePlus Group", story: "Every vendor promises fast delivery. ifBash was the first to show me a phase gate — if phase one doesn't hit its targets, phase two doesn't start. That accountability is what made us trust them with a $31M programme.", metric: "45-day approval cycles cut to 2 days. Audit prep: 3 weeks to 4 hours.", rating: 5 },
  { name: "Dr. Maria Reyes", title: "Director of Digital Services", story: "Our staff were drowning in 340 manual forms a day across 67 offices. I expected the usual 18-month project. Instead we had the first four offices live in 10 weeks and the rest by week 28. The change management support kept resistance low across every location.", metric: "22-day citizen resolution → 2.1 minutes. Satisfaction: 31% → 94%.", rating: 5 },
];

const methodology = [
  { phase: "Discovery & Roadmap", duration: "Week 1–4", features: ["As-is assessment", "Maturity scoring", "Business case creation"] },
  { phase: "Architecture & Design", duration: "Week 5–10", features: ["Target architecture", "Data strategy", "Governance framework"] },
  { phase: "Build & Integrate", duration: "Week 11–20", features: ["Platform build", "AI/automation layer", "Iterative testing"] },
  { phase: "Scale & Optimise", duration: "Week 21+", features: ["Full rollout", "Training & adoption", "KPI tracking"] },
];

const services = [
  { icon: Globe, title: "Digital Strategy", description: "Mapping systems and data flows to secure ROI targets by week four.", benefits: ["Maturity scoring", "ROI modelling"] },
  { icon: Layers, title: "Modernisation", description: "Seamless legacy migration with zero unplanned downtime for users.", benefits: ["Legacy decommission", "Cutover playbooks"] },
  { icon: Workflow, title: "Process Engineering", description: "Eliminating handoffs through activity mining and automated workflows.", benefits: ["Cycle time analysis", "Handoff reduction"] },
  { icon: Zap, title: "AI Automation", description: "Deploying AI for triage, forecasting, and autonomous routing.", benefits: ["Auto-classification", "Demand forecasting"] },
  { icon: BarChart3, title: "Data Platform", description: "Consolidating fragmented data into a single, live ServiceNow data layer.", benefits: ["Single source of truth", "Live dashboards"] },
  { icon: Shield, title: "Change Management", description: "Driving adoption through champion networks and role-specific training.", benefits: ["Champion networks", "Post-launch support"] },
];

const faqs = [
  { question: "How long does a digital transformation typically take?", answer: "For most enterprise programmes: 20–28 weeks from discovery to full go-live. That's not a marketing number — it's based on 40+ completed transformation engagements. The phased structure means you see your first live system and real ROI by week 8, not at the end." },
  { question: "Where do you start when the organisation has multiple legacy systems?", answer: "Week one of discovery, we run a full system inventory and activity mining exercise. By week four we have a prioritised roadmap ranked by ROI impact and implementation risk. We always start with the highest-pain area." },
  { question: "How do you handle change resistance across the organisation?", answer: "We don't treat change management as a training event at the end. Champions are identified by department in week one. We run role-specific training and track adoption rates in a live dashboard from day one." },
  { question: "What ROI can we realistically expect?", answer: "Our clients average 67% operational efficiency improvement and $20M+ annual savings per programme. In discovery, we build a detailed business case with specific KPI targets." },
  { question: "Can you transform one department at a time?", answer: "Yes — and for most organisations it's the right approach. We call it proof-by-phase: start with the highest-impact area, deliver measurable results, then use that proof to get buy-in for the next phase." },
  { question: "How does ServiceNow fit into a broader digital transformation?", answer: "ServiceNow becomes the system of action — the layer that orchestrates work across every other system you own (SAP, Oracle, Workday). It routes work, automates decisions, and surfaces exceptions." },
];

export default function DigitalTransformationPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const [phasesVisible, setPhasesVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => { const t = setTimeout(() => setPhasesVisible(true), 120); return () => clearTimeout(t); }, []);
  useEffect(() => { const i = setInterval(() => setCurrentTestimonial(p => (p + 1) % clientStories.length), 6000); return () => clearInterval(i); }, []);
  useEffect(() => { const i = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 5000); return () => clearInterval(i); }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) { const id = e.target.getAttribute('data-reveal'); if (id) { setRevealed(prev => ({ ...prev, [id]: true })); obs.unobserve(e.target); } } }); },
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
      
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)', boxShadow: '0 8px 24px rgba(37,99,235,0.4)' }} aria-label="Free Consultation">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">Free Consultation</span>
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20" />
        </a>
      </div>

      <div className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden" style={{ background: '#04060d' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 0%,rgba(37,99,235,0.12) 0%,transparent 60%)' }} />

          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-14 sm:pt-20 pb-20 sm:pb-28">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Content - 7 cols */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-8">
                  <span className="inline-block w-8 h-px bg-blue-500" />
                  <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Digital Transformation</span>
                </div>
                <div className="max-w-3xl mb-5">
                  <h1 className="text-6xl sm:text-6xl lg:text-6xl font-bold text-white leading-[1.0] tracking-tight">
                    Stop managing
                    <br></br>
                    <span style={{ background: 'linear-gradient(90deg,#60a5fa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> silos.</span>
                    <br></br>
                    Start running your
                    <br></br>
                    <span style={{ background: 'linear-gradient(90deg,#60a5fa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      business.
                    </span>
                  </h1>
                </div>
                <br></br>
                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
                  The average enterprise wastes <span className="text-blue-300 font-semibold"> 40% </span>of its capacity on manual handoffs. We unify operations onto a single ServiceNow platform in{' '}
                  <span className="text-blue-300 font-semibold">20–28 weeks</span>.
                </p>
                <br></br>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)', boxShadow: '0 8px 24px rgba(37,99,235,0.35)' }}>
                    Get a Transformation Roadmap <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 hover:border-blue-400/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm">
                    See Client Results
                  </a>
                </div>
              </div>

              {/* Right - Before / After Table - 5 cols */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-3">
                {/* BEFORE */}
                <div className="rounded-2xl border border-red-500/20 overflow-hidden" style={{ background: 'rgba(239,68,68,0.03)' }}>
                  <div className="px-4 py-2 border-b border-red-500/15 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">Before — current state</span>
                  </div>
                  <div className="p-3 space-y-1.5">
                    {[
                      { fn: 'IT helpdesk', state: 'ServiceNow + spreadsheets + email', pain: '4-day resolution' },
                      { fn: 'HR onboarding', state: '12 handoffs across disconnected tools', pain: '11 days / hire' },
                      { fn: 'Finance approvals', state: 'PDF forms, no audit trail', pain: '45-day cycle' },
                      { fn: 'Field operations', state: 'No link to back-office', pain: '0% visibility' },
                    ].map((row, i) => (
                      <div key={i} className="flex items-start gap-2 px-2.5 py-2 rounded-lg border border-white/[0.04]" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <span className="text-red-500 text-xs mt-px shrink-0 font-bold">✕</span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[11px] font-semibold text-white/80">{row.fn}</div>
                          <div className="text-[9px] text-slate-500 mt-0.5 leading-tight">{row.state}</div>
                        </div>
                        <div className="text-[9px] text-red-400 font-mono whitespace-nowrap shrink-0 mt-px">{row.pain}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AFTER */}
                <div className="rounded-2xl border border-blue-500/20 overflow-hidden" style={{ background: 'rgba(37,99,235,0.04)' }}>
                  <div className="px-4 py-2 border-b border-blue-500/15 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">After — unified on ServiceNow</span>
                  </div>
                  <div className="p-3 space-y-1.5">
                    {[
                      { fn: 'IT helpdesk', state: 'AI triage + automated resolution', gain: '< 4 hr resolution' },
                      { fn: 'HR onboarding', state: 'Single orchestrated workflow', gain: '1 day / hire' },
                      { fn: 'Finance approvals', state: 'Automated routing + audit trail', gain: '2-day cycle' },
                      { fn: 'Field operations', state: 'Real-time back-office sync', gain: '100% visibility' },
                    ].map((row, i) => (
                      <div key={i} className="flex items-start gap-2 px-2.5 py-2 rounded-lg border border-white/[0.04]" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <span className="text-green-400 text-xs mt-px shrink-0 font-bold">✓</span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[11px] font-semibold text-white/80">{row.fn}</div>
                          <div className="text-[9px] text-slate-500 mt-0.5 leading-tight">{row.state}</div>
                        </div>
                        <div className="text-[9px] text-green-400 font-mono whitespace-nowrap shrink-0 mt-px">{row.gain}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE TRACKS - Updated with Whitish Background */}
        <section className="py-10 lg:py-14 relative overflow-hidden" style={{ background: '#f8fafc' }}>
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle,#cbd5e1 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-blue-600" />
                <span className="text-blue-600 text-sm font-bold tracking-widest uppercase">Expertise Tracks</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 max-w-2xl leading-tight">Three strategic tracks. <span className="text-blue-600">One programme.</span></h2>
              <p className="text-slate-500 mt-4 max-w-xl">Transformation without strategy fails. We deliver both — across every phase of your journey with measurable outcomes.</p>
            </div>

            <div data-reveal="tracks" className={`grid lg:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${revealed.tracks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { track: 'Discover & Assess', num: '01', desc: 'Mapping systems and gaps before we build.', services: services.slice(0, 2), accent: 'text-blue-600', pill: 'bg-blue-100/50', border: 'border-slate-200' },
                { track: 'Design & Transform', num: '02', desc: 'Architecture and AI built to your model.', services: services.slice(2, 4), accent: 'text-indigo-600', pill: 'bg-indigo-100/50', border: 'border-slate-200' },
                { track: 'Adopt & Sustain', num: '03', desc: 'Data and change strategy to make it stick.', services: services.slice(4, 6), accent: 'text-sky-600', pill: 'bg-sky-100/50', border: 'border-slate-200' },
              ].map((track, ti) => (
                <div key={ti} className={`bg-white rounded-3xl border ${track.border} shadow-sm overflow-hidden hover:shadow-md transition-shadow`}>
                  <div className={`px-6 py-6 border-b ${track.border} bg-slate-50/50`}>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 text-center">{track.track}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-center">{track.desc}</p>
                  </div>
                  <div className="p-6 space-y-6">
                    {track.services.map((s, si) => (
                      <div key={si} className="flex items-start gap-4 group">
                        <div className={`w-10 h-10 rounded-xl ${track.pill} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                          <s.icon className={`h-5 w-5 ${track.accent}`} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm mb-1">{s.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed mb-3">{s.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {s.benefits.map((b, bi) => (
                              <span key={bi} className={`text-[9px] uppercase tracking-wider font-bold ${track.accent} bg-white border ${track.border} rounded px-2 py-0.5`}>{b}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODOLOGY - Dark Section (Site Style) */}
        <section className="py-10 lg:py-14 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(37,99,235,0.15), transparent 70%)' }} />
          
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Our Methodology</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Four phases. <span className="text-blue-500">Zero guesswork.</span></h2>
              <p className="text-slate-400">Strategy through scale — every phase delivers measurable outcomes before the next begins.</p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-white/10">
                <div className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-transparent transition-all duration-1000 ease-in-out" style={{ width: phasesVisible ? '100%' : '0%' }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {methodology.map((step, i) => (
                  <div key={i} className="relative group transition-all duration-700" style={{ opacity: phasesVisible ? 1 : 0, transform: phasesVisible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: `${i * 150}ms` }}>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-white font-bold text-xl mb-6 relative z-10 group-hover:border-blue-500 transition-colors shadow-2xl">
                        {i + 1}
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">{step.duration}</span>
                      <h3 className="text-white font-bold mb-4">{step.phase}</h3>
                      <ul className="space-y-2">
                        {step.features.map((f, j) => (
                          <li key={j} className="flex items-center justify-center gap-2 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-blue-500 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="mb-12"><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-blue-600" /><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">Impact</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Proven Results.</h2></div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${currentCase*100}%)`}}>{caseStudies.map((s,i)=>(<div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"><div className="grid lg:grid-cols-2 gap-10 items-start"><div><div className="flex items-center gap-3 mb-5"><span className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1">{s.industry}</span><span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">{s.timeline}</span></div><h3 className="text-2xl font-bold text-gray-900 mb-6">{s.client}</h3><div className="space-y-5"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div><p className="text-gray-600 text-sm leading-relaxed">{s.challenge}</p></div><div><div className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1.5">Solution</div><p className="text-gray-600 text-sm leading-relaxed">{s.solution}</p></div></div><blockquote className="mt-6 pl-4 border-l-2 border-blue-200 text-sm text-gray-600 italic">&ldquo;{s.testimonial}&rdquo;</blockquote></div><div className="rounded-2xl overflow-hidden border border-gray-100" style={{background:'#f0f6ff'}}><div className="px-5 py-3.5 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">Outcomes</span><span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div><div className="p-5 grid grid-cols-2 gap-3">{s.results.map((r,j)=>(<div key={j} className="bg-white rounded-xl p-4 border border-gray-100"><CheckCircle className="h-4 w-4 text-blue-500 mb-2" /><p className="text-sm font-semibold text-gray-800 leading-tight">{r}</p></div>))}</div><div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between"><span className="text-xs text-gray-400">Delivered in</span><span className="text-sm font-bold text-blue-600">{s.timeline}</span></div></div></div></div></div>))}</div></div>
              <div className="flex items-center justify-between mt-6">
                <button onClick={()=>setCurrentCase(p=>(p-1+caseStudies.length)%caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
                <div className="flex items-center gap-2">{caseStudies.map((_,i)=>(<button key={i} onClick={()=>setCurrentCase(i)} className={`rounded-full transition-all duration-300 ${i===currentCase?'w-8 h-2 bg-blue-600':'w-2 h-2 bg-gray-300 hover:bg-blue-300'}`} aria-label={`Case ${i+1}`} />))}</div>
                <button onClick={()=>setCurrentCase(p=>(p+1)%caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IFBASH */}
        <section className="py-10 lg:py-14" style={{ background: '#f0f4ff' }}>
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto"><div className="max-w-4xl mx-auto"><div className="text-center mb-10"><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#2563eb' }}><span className="w-6 h-px" style={{ backgroundColor: '#2563eb' }} /> Why ifBash</span><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">We don&apos;t just transform.<br /><span style={{ color: '#2563eb' }}>We deliver outcomes.</span></h2><p className="text-gray-500 text-base max-w-2xl mx-auto">We start with your teams and your business goals, not the platform.</p></div><div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{[{ stat: '40+ transformations', desc: 'Completed enterprise-wide digital transformation engagements.' },{ stat: 'Week 8 ROI', desc: 'First live system and measurable ROI by week 8 of every engagement.' },{ stat: 'We stay', desc: '90-day hypercare minimum. KPIs tracked live until every number holds.' }].map(({ stat, desc }) => (<div key={stat} className="rounded-2xl border bg-white p-6 text-center hover:shadow-sm transition-shadow" style={{ borderColor: '#bfdbfe' }}><div className="text-sm font-bold text-gray-900 mb-2">{stat}</div><p className="text-xs text-gray-500 leading-relaxed">{desc}</p></div>))}</div></div></div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 lg:py-20 relative overflow-hidden" style={{background:'#07071a'}}>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'radial-gradient(circle,#818cf8 1px,transparent 1px)',backgroundSize:'32px 32px'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12 text-center"><div className="flex items-center justify-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-blue-500" /><span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Client Voices</span><span className="inline-block w-8 h-px bg-blue-500" /></div><h2 className="text-3xl sm:text-4xl font-bold text-white">What transformation leaders say.</h2></div>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${currentTestimonial*100}%)`}}>{clientStories.map((s,i)=>(<div key={i} className="w-full shrink-0"><div className="rounded-2xl p-8 border border-white/8" style={{background:'rgba(255,255,255,0.04)'}}><div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0"><Users className="h-6 w-6 text-blue-400" /></div><div><div className="font-bold text-white">{s.name}</div><div className="text-sm text-slate-400">{s.title}</div></div><div className="ml-auto flex gap-0.5">{[...Array(s.rating)].map((_,j)=>(<Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />))}</div></div><p className="text-slate-300 leading-relaxed mb-5">&ldquo;{s.story}&rdquo;</p><div className="flex items-center gap-2 pt-4 border-t border-white/8"><CheckCircle className="h-4 w-4 text-green-400 shrink-0" /><span className="text-green-400 text-sm font-medium">{s.metric}</span></div></div></div>))}</div></div>
              <div className="flex justify-center gap-2 mt-6">{clientStories.map((_,i)=>(<button key={i} onClick={()=>setCurrentTestimonial(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i===currentTestimonial?'w-8 bg-blue-400':'w-1.5 bg-white/20 hover:bg-white/40'}`} />))}</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-blue-600" /><span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common questions.</h2><p className="text-gray-500 text-sm leading-relaxed mb-8">Everything you need to know before starting your digital transformation.</p><a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{background:'linear-gradient(135deg,#2563eb,#4f46e5)',boxShadow:'0 8px 24px rgba(37,99,235,0.3)'}}>Ask us directly <ArrowRight className="h-4 w-4" /></a></div>
              <div className="lg:col-span-2 space-y-3">{faqs.map((f,i)=>(<div key={i} className="border border-gray-200 hover:border-blue-200 rounded-xl overflow-hidden transition-colors"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{f.question}</span><ChevronDown className={`h-5 w-5 text-blue-500 shrink-0 transition-transform duration-200 ${openFaq===i?'rotate-180':''}`} /></button>{openFaq===i&&(<div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm leading-relaxed">{f.answer}</p></div>)}</div>))}</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 relative overflow-hidden" style={{background:'#07071a'}}>
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle,#818cf8 1px,transparent 1px)',backgroundSize:'32px 32px'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Ready to transform?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">Tell us your biggest bottleneck. We&apos;ll deliver a roadmap in 48 hours — scoped, costed, and ready to execute.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{background:'linear-gradient(135deg,#2563eb,#4f46e5)',boxShadow:'0 8px 32px rgba(37,99,235,0.4)'}}>Free Strategy Call <ArrowRight className="h-5 w-5" /></a>
              <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-blue-500 hover:text-white transition-all text-base">View all case studies</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}