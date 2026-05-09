'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, CloudLightning, Users, Shield, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const A = '#4f46e5';
const AG = 'linear-gradient(135deg, #4f46e5, #6366f1)';

const devOps = [
  {
    icon: Code,
    title: 'Deployments That Flow',
    before: 'Three-day approval cycles. Manual tickets. Email threads. Engineers context-switching so often that shipping became the side quest.',
    after: 'Risk-scoring auto-approves low-risk changes in under 30 minutes. Engineers merge, build, deploy — not wait for a meeting. Runbooks auto-generated at deployment time.',
    result: 'Deployment lead time dropped by more than two-thirds. Failed deployments became rare.',
  },
  {
    icon: CloudLightning,
    title: 'One Correlated View',
    before: 'Multi-cloud incidents averaged nearly five hours. Three monitoring tools. Uncorrelated alerts. Engineers spent two hours just identifying which system was on fire.',
    after: 'AIOps consolidates AWS, Azure, and GCP alerts into one queue. Root-cause hypothesis generated before an engineer opens the ticket. Customer comms templated and ready.',
    result: 'MTTR: 4.7h → 31min. CSAT recovered within two quarters.',
  },
  {
    icon: Users,
    title: 'Churn That Stops',
    before: 'Customer onboarding took weeks with fourteen manual handoffs. No SLA enforcement. Health scores were a spreadsheet someone updated quarterly. Churn was a surprise every month.',
    after: 'SLA-enforced onboarding with automated provisioning. Daily health scores from product usage. Proactive CSM outreach triggered 30 days before renewal risk.',
    result: 'Onboarding: weeks → days. First-year churn fell sharply.',
  },
];

const caseStudies = [
  {
    label: 'DevOps Transformation',
    context: 'SaaS company · 12 weeks',
    problem: 'Change approvals averaged 3.2 days. Nearly half of production deployments were delayed. Engineers context-switched so often that shipping felt like a side quest.',
    whatWeDid: 'Risk-scoring model that auto-approves low-risk changes in under 30 minutes. High-risk changes route to mobile approval with 30-minute SLA. One-click rollback runbooks.',
    shift: 'Deployment lead time dropped by more than two-thirds. Change approval: 3.2 days to 4 hours. Revenue accelerated because features reached customers faster.',
    quote: 'Once ifBash automated risk scoring and mobile approvals, change approval went from 3.2 days to 4 hours. Our engineers stopped context-switching and started shipping.',
    author: 'VP Engineering',
  },
  {
    label: 'Cloud Operations',
    context: 'Cloud-native platform · 16 weeks',
    problem: 'Multi-cloud incidents averaged 4.7 hours to resolve. Three separate monitoring tools. Uncorrelated alerts. Engineers spent the first two hours finding the source.',
    whatWeDid: 'AIOps consolidating alert streams from all three cloud environments into a single correlated queue with automated root-cause hypothesis generation.',
    shift: 'MTTR dropped from nearly 5 hours to 31 minutes. CSAT recovered within six months. Cloud costs came down from right-sizing alerts and eliminating noise.',
    quote: 'ifBash consolidated everything into one correlated view. Mean time to resolve dropped from nearly 5 hours to 31 minutes.',
    author: 'VP Infrastructure',
  },
];

const faqs = [
  { q: 'How does ServiceNow accelerate software delivery?', a: 'Risk-scoring auto-approves low-risk changes in under 30 minutes. High-risk changes route to mobile approval. Teams see change cycles drop from days to hours.' },
  { q: 'What cloud platforms does it work with?', a: 'AIOps ingests alerts from AWS CloudWatch, Azure Monitor, and GCP Operations, grouping related alerts into a single incident with root-cause analysis.' },
  { q: 'Can ServiceNow reduce customer churn?', a: 'Yes. SLA-enforced onboarding with automated provisioning. Daily health scores trigger proactive outreach 30 days before renewal risk.' },
  { q: 'How long does a tech implementation take?', a: '12–16 weeks. DevOps goes live first, with AIOps and customer success following in later phases.' },
  { q: 'What compliance frameworks are covered?', a: 'SOC 2, ISO 27001, FedRAMP. Evidence collected continuously — not assembled the week before an audit.' },
];

export default function TechnologySoftware() {
  const [activeCase, setActiveCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => { setVisible(true); }, []);
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) }) }} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex items-center" style={{ background: '#06040d', minHeight: 'calc(100vh - 56px)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(79,70,229,0.14) 0%, transparent 60%)' }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className={`max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6">
              Your engineers should be
              <br />
              <span style={{ color: A }}>shipping</span>, not waiting
              <br />
              on approvals.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              Three-day change approvals. Incidents that take hours to triage. Customers who churn before anyone notices. <span className="text-white font-semibold">ifBash delivers ServiceNow</span> that automates the entire pipeline — DevOps, AIOps, and customer success on one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
                Talk to our tech team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#pipeline" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 hover:border-indigo-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm">
                See the pipeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PIPELINE ── */}
      <section id="pipeline" className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
                <span className="w-6 h-px" style={{ backgroundColor: A }} /> The Pipeline
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
                Three bottlenecks that disappear.
              </h2>
            </div>

            <div data-reveal="pipeline" className={`grid sm:grid-cols-3 gap-5 transition-all duration-700 ${revealed.pipeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {devOps.map((x, i) => (
                <div key={i} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: AG }}>
                    <x.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">{x.title}</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-1.5">
                      <span className="text-red-400 shrink-0 font-bold">✕</span>
                      <p className="text-gray-500 leading-relaxed">{x.before}</p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: A }} />
                      <p className="text-gray-700 leading-relaxed font-medium">{x.after}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 italic">{x.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="impact" className="py-16 lg:py-20" style={{ background: '#eef2ff' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in Production</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes from the deploy pipeline.</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <button onClick={() => setActiveCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center text-slate-400 hover:text-indigo-500 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
              <button onClick={() => setActiveCase(p => (p + 1) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center text-slate-400 hover:text-indigo-500 transition-colors"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeCase * 100}%)` }}>
              {caseStudies.map((x, i) => (
                <div key={i} className="w-full shrink-0">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm">
                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                      <div className="lg:col-span-3">
                        <span className="inline-block text-xs font-semibold rounded-full px-3 py-1 mb-4" style={{ color: A, backgroundColor: `${A}08` }}>{x.context}</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-5">{x.label}</h3>
                        <div className="space-y-4">
                          <div className="rounded-xl border border-red-100 bg-red-50/30 p-4"><div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">The Problem</div><p className="text-gray-600 text-sm leading-relaxed">{x.problem}</p></div>
                          <div className="rounded-xl border p-4" style={{ borderColor: `${A}20`, background: `${A}03` }}><div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: A }}>What We Did</div><p className="text-gray-600 text-sm leading-relaxed">{x.whatWeDid}</p></div>
                        </div>
                        <blockquote className="mt-5 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: `${A}40` }}>&ldquo;{x.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {x.author}</span></blockquote>
                      </div>
                      <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#eef2ff' }}><div className="px-4 py-3 bg-white border-b border-gray-100"><span className="text-sm font-semibold text-gray-800">What Shifted</span></div><div className="p-4"><p className="text-sm text-gray-800 leading-relaxed font-medium">{x.shift}</p></div></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5">
            {caseStudies.map((_, i) => (<button key={i} onClick={() => setActiveCase(i)} className={`rounded-full transition-all duration-300 ${i === activeCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300 hover:bg-indigo-400'}`} style={i === activeCase ? { backgroundColor: A } : {}} />))}
          </div>
        </div>
      </section>

      {/* ── WHY IFBASH ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06] pointer-events-none" style={{ background: `radial-gradient(circle, ${A}, transparent 70%)` }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: `${A}08`, borderColor: `${A}25`, color: A }}>Why ifBash</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">We don&apos;t configure software.<br /><span style={{ color: A }}>We configure velocity.</span></h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">We start with your engineering teams, not the platform.</p>
            </div>
            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: Code, stat: 'Engineers first', desc: 'We sit in your standups before we configure a single workflow.' },
                { icon: CloudLightning, stat: 'Velocity from day 1', desc: 'First automated deployments go live in weeks, not months.' },
                { icon: Clock, stat: 'We stay', desc: '90-day hypercare. We track MTTR and deploy frequency until they stick.' },
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-indigo-500/30 transition-all" style={{ borderColor: `${A}15`, background: `${A}04` }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${A}15` }}><Icon className="h-5 w-5" style={{ color: A }} /></div><div className="text-sm font-bold text-white mb-2">{stat}</div><p className="text-xs text-slate-400 leading-relaxed">{desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}40` }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="lg:col-span-2 space-y-2">
              {faqs.map((x, i) => (
                <div key={i} className="border border-gray-200 hover:border-indigo-200 rounded-xl overflow-hidden transition-colors bg-white"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{x.q}</span><ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: A }} /></button>
                  {openFaq === i && (<div className="px-5 pb-4 border-t border-gray-100 pt-3"><p className="text-gray-600 text-sm leading-relaxed">{x.a}</p></div>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}30`, background: `linear-gradient(135deg, ${A}0C, ${A}04)` }}><div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}15`, borderColor: `${A}30`, color: A }}><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />48-hour scoping call</div><h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to accelerate your pipeline?</h2><p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your biggest velocity killer. We&apos;ll scope the approach in 48 hours.</p><Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>Schedule a consultation <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105" style={{ background: AG, boxShadow: `0 8px 24px ${A}40` }} aria-label="Free Consultation"><MessageCircle className="h-6 w-6" /><div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: A }} /></Link>
      </div>
    </>
  );
}
