'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Star, Users, Zap, Shield, TrendingUp, Target, Code, Layers, Cpu, GitBranch, Package, MessageCircle, ChevronDown } from 'lucide-react';

const caseStudies = [
  { client: "LogiTech Enterprises", industry: "Logistics", challenge: "Off-the-shelf ServiceNow modules couldn't handle complex multi-carrier routing logic causing $4.2M in shipping errors", solution: "Custom ServiceNow app with real-time carrier API integration, ML-based routing engine, and automated exception handling", results: ["94% reduction in shipping errors", "$5.1M annual savings", "Real-time carrier visibility", "47% faster order fulfilment"], timeline: "16 weeks", testimonial: "The custom app solved problems no off-the-shelf product could. It's now central to our entire logistics operation." },
  { client: "MediDevice Corp", industry: "Healthcare", challenge: "FDA-regulated device tracking requiring custom audit trails, e-signatures, and compliance workflows not available natively", solution: "Purpose-built regulatory compliance app on ServiceNow with 21 CFR Part 11 e-signatures and full audit chain", results: ["100% FDA compliance", "Zero audit findings in 2 years", "78% faster compliance cycles", "Full audit trail automation"], timeline: "20 weeks", testimonial: "Our custom app handles FDA requirements that no standard tool can match. Flawless in every inspection." },
  { client: "EnergyNet Grid", industry: "Energy", challenge: "Grid incident management requiring real-time SCADA integration and custom escalation trees across 400+ technicians", solution: "Custom field operations app integrating SCADA, IoT sensors, and ServiceNow with intelligent escalation and geofencing", results: ["67% faster incident response", "100% SCADA integration", "400+ technicians coordinated", "Zero missed escalations"], timeline: "24 weeks", testimonial: "The custom app connects our physical grid to our digital operations seamlessly. A genuinely unique solution." },
];

const clientStories = [
  { name: "Alex Rivera", title: "CTO, LogiTech Enterprises", story: "ifBash built something we couldn't buy anywhere. The custom app handles routing complexity at a level that standard platforms simply don't support.", metric: "94% reduction in shipping errors · $5.1M annual savings", rating: 5 },
  { name: "Dr. Priya Nair", title: "VP Quality, MediDevice Corp", story: "Building a 21 CFR Part 11 compliant app on ServiceNow seemed impossible. ifBash proved otherwise — and we've had zero findings in two years of FDA inspections.", metric: "100% FDA compliance · Zero audit findings in 2 years", rating: 5 },
  { name: "Tom Eriksen", title: "Head of Grid Operations", story: "Connecting our SCADA systems to ServiceNow in real time was groundbreaking. The custom app has transformed how we respond to grid incidents.", metric: "67% faster incident response across 400+ technicians", rating: 5 },
];

const methodology = [
  { phase: "Discovery & Spec", duration: "Week 1–3", features: ["Requirements workshops", "Technical architecture", "API mapping", "Prototype wireframes", "Feasibility validation"] },
  { phase: "Design & Build", duration: "Week 4–12", features: ["UI/UX design", "Custom development", "Integration build", "Unit testing", "Code review cycles"] },
  { phase: "Test & Harden", duration: "Week 13–16", features: ["UAT facilitation", "Performance testing", "Security review", "Bug resolution", "Documentation"] },
  { phase: "Deploy & Support", duration: "Week 17+", features: ["Production deployment", "User training", "Go-live support", "Hypercare period", "Ongoing enhancement"] },
];

const services = [
  { icon: Code, title: "Custom App Development", description: "Full-lifecycle custom ServiceNow application development — from requirements workshops through architecture, UI/UX design, development, integration, UAT, and deployment. We build on scoped applications using supported APIs only, so your app survives every platform upgrade without custom code breaking.", benefits: ["Scoped app architecture — upgrade-safe by design", "Working prototype by week 4 of every engagement", "Delivery to signed spec, on time — 100% track record"] },
  { icon: Layers, title: "Integration Development", description: "Custom integrations connecting ServiceNow to systems that have no pre-built connector: SCADA and IoT platforms, proprietary ERPs, legacy mainframes, industry-specific APIs, and custom databases. We handle authentication, rate limiting, error handling, retry logic, and data mapping — and we test integrations under production load before go-live.", benefits: ["REST, SOAP, GraphQL, and message queue integrations", "Error handling, retry logic, and dead-letter queuing", "Integration performance tested under production load pre-go-live"] },
  { icon: Cpu, title: "AI-Powered Custom Modules", description: "AI capabilities embedded directly into custom apps — not separate tools that require switching context. We integrate machine learning models for prediction and classification, NLP for document processing, and agentic AI for autonomous workflow execution. Every AI component has defined accuracy thresholds and a human override path.", benefits: ["ML models with defined accuracy thresholds before go-live", "NLP document processing with confidence scoring", "Agentic AI with defined scope, audit trail, and human override"] },
  { icon: GitBranch, title: "Platform Extensions", description: "Extend what ServiceNow does natively — custom tables and relationships, Flow Designer automations, Service Portal widgets, workspace views, and mobile app screens. We work within the platform's extensibility framework so extensions co-exist with native modules and survive upgrades without conflict.", benefits: ["Custom tables with proper relationship design", "Flow Designer automations replacing manual steps", "Service Portal widgets with accessible, mobile-first design"] },
  { icon: Package, title: "App Migration & Modernisation", description: "Legacy custom apps built on deprecated APIs or global scope — the ones nobody wants to touch because they might break something — analysed, re-architected, and migrated to current supported architecture. We run the old and new versions in parallel until parity is confirmed before decommissioning.", benefits: ["Legacy app inventory and risk assessment first", "Parallel running of old and new until parity confirmed", "Technical debt quantified and reduced in every migration"] },
  { icon: Shield, title: "Regulated & Compliance Apps", description: "Custom applications built to meet FDA 21 CFR Part 11, HIPAA, SOX, FedRAMP, and ISO 27001 requirements — not retrofitted after build, but designed from architecture stage with compliance requirements driving every data model and workflow decision. Includes e-signature, full audit chain, and data residency controls.", benefits: ["Compliance requirements drive architecture, not vice versa", "21 CFR Part 11 e-signature with compliant audit chain", "Data residency and retention controls per regulation"] },
];

const faqs = [
  { question: "When should we build a custom app vs using native ServiceNow?", answer: "Build custom when native modules can't meet your requirements without heavy workarounds, when you have industry-specific compliance needs, when you need deep integration with proprietary systems, or when the ROI of a tailored solution significantly outweighs the cost of adapting your processes to fit a standard product." },
  { question: "How do you ensure custom apps survive ServiceNow upgrades?", answer: "We build exclusively on supported ServiceNow APIs and avoid direct platform hacks. All our custom apps use scoped applications with proper upgrade-safe architecture. We also include upgrade testing in our managed services retainer so your apps are validated with every platform release." },
  { question: "What's included in your custom app development engagement?", answer: "Full lifecycle: requirements workshops, technical architecture, UI/UX design, development, integration build, unit testing, UAT support, security review, deployment, training, documentation, and a hypercare period. We also offer ongoing enhancement sprints post-launch." },
  { question: "How long does a custom app take to build?", answer: "Simple apps with limited integration: 8–12 weeks. Mid-complexity apps with multiple integrations: 14–20 weeks. Enterprise-grade apps with ML, compliance, or complex integrations: 20–28 weeks. We always deliver a working prototype by week 4 so you can validate direction early." },
  { question: "Can you build apps that work with non-ServiceNow systems?", answer: "Yes — integration is one of our specialties. We've built custom apps connecting ServiceNow to SCADA systems, IoT platforms, ERP (SAP, Oracle), legacy mainframes, industry-specific APIs, and custom databases. If it has an API or data source, we can connect it." },
  { question: "How do you handle security in custom applications?", answer: "Security is built in from architecture to deployment: role-based access controls, data encryption, input validation, SQL injection prevention, XSS protection, and regular security reviews. For regulated industries we also implement e-signature, audit trail, and data residency requirements." },
];

export default function CustomAppsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const [phasesVisible, setPhasesVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { const t = setTimeout(() => setPhasesVisible(true), 120); return () => clearTimeout(t); }, []);
  useEffect(() => { const i = setInterval(() => setCurrentTestimonial(p => (p + 1) % clientStories.length), 6000); return () => clearInterval(i); }, []);
  useEffect(() => { const i = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 5000); return () => clearInterval(i); }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg,#ea580c,#d97706)', boxShadow: '0 8px 24px rgba(234,88,12,0.4)' }} aria-label="Discuss Your App">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">Discuss Your App</span>
          <div className="absolute inset-0 rounded-full animate-ping bg-orange-600 opacity-20" />
        </a>
      </div>

      <div className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%,rgba(234,88,12,0.18) 0%,transparent 65%)' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left: compact text column */}
              <div className="lg:col-span-2 lg:pt-4">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-8 h-px bg-orange-500" />
                  <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Custom App Development</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 rounded-full px-4 py-2 text-orange-300 text-sm mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Built on ServiceNow. Built for you.
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-5">
                  Built for<br />your business.<br />
                  <span style={{ background: 'linear-gradient(90deg,#fb923c,#fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Not the other<br />way around.</span>
                </h1>
                <p className="text-base text-slate-400 leading-relaxed mb-7 max-w-sm">When off-the-shelf doesn&apos;t fit, we build exactly what you need — <span className="text-orange-300 font-semibold">purpose-built on ServiceNow</span> with native performance and full upgrade safety.</p>
                <div className="flex flex-col gap-3 mb-8">
                  <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#ea580c,#d97706)', boxShadow: '0 8px 24px rgba(234,88,12,0.35)' }}>
                    Spec Your Custom App <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 hover:border-orange-400/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm">
                    See What We&apos;ve Built
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/8">
                  {[{v:'200+',l:'Apps delivered'},{v:'16 wks',l:'Avg delivery'},{v:'100%',l:'Success rate'}].map((s,i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-orange-400">{s.v}</div>
                      <div className="text-[10px] text-slate-500">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: VS Code-style editor */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: '#0d1117', boxShadow: '0 0 80px rgba(234,88,12,0.12)' }}>
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8" style={{ background: '#161b22' }}>
                    <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-green-500/70" /></div>
                    <div className="ml-2 flex gap-0.5">
                      {[{n:'logistic-router.js',a:true},{n:'workflow-config.json',a:false},{n:'integration.js',a:false}].map((tab,i) => (
                        <div key={i} className={`px-3 py-1 rounded-sm text-xs font-mono border-t-2 ${tab.a ? 'bg-[#1e2430] text-orange-300 border-orange-500/70' : 'text-gray-600 border-transparent'}`}>{tab.n}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex" style={{ minHeight: '340px' }}>
                    {/* File explorer sidebar */}
                    <div className="w-40 border-r border-white/8 py-2 shrink-0 hidden sm:block" style={{ background: '#0d1117' }}>
                      <div className="px-3 mb-1 text-[9px] font-bold text-gray-600 uppercase tracking-wider">Explorer</div>
                      {[
                        {n:'logistic-router',d:0,folder:true,open:true},
                        {n:'src',d:1,folder:true,open:true},
                        {n:'logistic-router.js',d:2,folder:false,active:true},
                        {n:'workflow-config.json',d:2,folder:false},
                        {n:'integration.js',d:2,folder:false},
                        {n:'tests',d:1,folder:true,open:false},
                        {n:'spec.test.js',d:2,folder:false},
                        {n:'README.md',d:1,folder:false},
                      ].map((f,i) => (
                        <div key={i} className={`flex items-center gap-1 py-0.5 text-[11px] font-mono cursor-pointer truncate ${(f as {active?:boolean}).active ? 'bg-orange-500/15 text-orange-300' : 'text-gray-600 hover:text-gray-400 hover:bg-white/[0.03]'}`}
                          style={{ paddingLeft: `${f.d * 10 + 8}px` }}>
                          <span className="shrink-0 opacity-60">{f.folder ? ((f as {open?:boolean}).open ? '▾' : '▸') : '·'}</span>
                          <span className="truncate">{f.n}</span>
                        </div>
                      ))}
                    </div>
                    {/* Code pane */}
                    <div className="flex-1 overflow-hidden">
                      <div className="px-4 py-3 font-mono text-xs leading-[1.7] select-none">
                        {[
                          [['text-gray-600','1  '],['text-blue-400','var'],['text-white',' LogisticRouter '],['text-gray-400','='],['text-white',' Class.create();']],
                          [['text-gray-600','2  ']],
                          [['text-gray-600','3  '],['text-white','LogisticRouter.prototype '],['text-gray-400','='],['text-white',' Object.extendsObject(']],
                          [['text-gray-600','4  '],['text-white','  AbstractAjaxProcessor, '],['text-orange-300','{']],
                          [['text-gray-600','5  ']],
                          [['text-gray-600','6  '],['text-amber-400','  routeShipment'],['text-white',': '],['text-blue-400','function'],['text-white','(order) {']],
                          [['text-gray-600','7  '],['text-blue-400','    var'],['text-white',' carrier '],['text-gray-400','='],['text-white',' '],['text-blue-400','new'],['text-white',' GlideRecord('],['text-green-400',"'x_ifb_carrier'"],['text-white',');']],
                          [['text-gray-600','8  '],['text-white','    carrier.addQuery('],['text-green-400',"'active'"],['text-white',', '],['text-orange-400','true'],['text-white',');']],
                          [['text-gray-600','9  '],['text-white','    carrier.addQuery('],['text-green-400',"'region'"],['text-white',', order.'],['text-amber-400','getValue'],['text-white','('],['text-green-400',"'destination'"],['text-white','));']],
                          [['text-gray-600','10 '],['text-white','    carrier.'],['text-amber-400','query'],['text-white','();']],
                          [['text-gray-600','11 ']],
                          [['text-gray-600','12 '],['text-blue-400','    if'],['text-white',' (carrier.'],['text-amber-400','next'],['text-white','()) {']],
                          [['text-gray-600','13 '],['text-white',"      order."],['text-amber-400','setValue'],['text-white','('],['text-green-400',"'carrier'"],['text-white',', carrier.sys_id);']],
                          [['text-gray-600','14 '],['text-white','      order.'],['text-amber-400','setValue'],['text-white','('],['text-green-400',"'state'"],['text-white',', '],['text-green-400',"'routed'"],['text-white',');']],
                          [['text-gray-600','15 '],['text-white','      order.'],['text-amber-400','update'],['text-white','();']],
                          [['text-gray-600','16 '],['text-blue-400','      return'],['text-white',' carrier.sys_id;']],
                          [['text-gray-600','17 '],['text-white','    }']],
                          [['text-gray-600','18 '],['text-blue-400','    return'],['text-white',' '],['text-blue-400','null'],['text-white',';']],
                          [['text-gray-600','19 '],['text-white','  },']],
                        ].map((line, li) => (
                          <div key={li} className="whitespace-pre">
                            {line.map(([cls, text], ci) => <span key={ci} className={cls}>{text}</span>)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Terminal strip */}
                  <div className="border-t border-white/8" style={{ background: '#0a0e14' }}>
                    <div className="px-4 py-1.5 border-b border-white/5 flex items-center gap-3">
                      <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-wider">Terminal</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    </div>
                    <div className="px-4 py-3 space-y-1 font-mono text-xs">
                      <p><span className="text-green-400">✓ </span><span className="text-gray-400">Deployed LogisticRouter v2.4 → production</span></p>
                      <p><span className="text-yellow-400">→ </span><span className="text-gray-400">Running upgrade safety checks...</span></p>
                      <p><span className="text-green-400">✓ </span><span className="text-gray-400">All APIs upgrade-safe · 0 warnings · 0 errors</span></p>
                      <p><span className="text-orange-400">$ </span><span className="text-gray-600 animate-pulse">█</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/8">
            <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
                {[{v:'200+',l:'Custom apps delivered'},{v:'16 wks',l:'Average delivery'},{v:'100%',l:'Upgrade-safe builds'},{v:'0',l:'Failed deliveries'}].map((s,i) => (
                  <div key={i} className="py-6 px-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400">{s.v}</div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 right-0 w-[600px] h-[500px] opacity-10" style={{ background: 'radial-gradient(ellipse at top right,#ea580c,transparent 65%)' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-orange-500" /><span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">What We Build</span></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl">Any capability.{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Any complexity.</span></h2>
            </div>

            {/* App category showcase */}
            <div className="rounded-2xl border border-white/8 overflow-hidden mb-10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">200+ apps built — here&apos;s what we build most</span>
                <span className="text-xs text-orange-400 font-semibold">across all industries</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/8">
                {[
                  { category: 'Compliance & Regulated', count: '47 apps', examples: ['FDA 21 CFR Part 11', 'HIPAA audit trails', 'SOX controls', 'FedRAMP workflows'], color: 'text-orange-400' },
                  { category: 'IoT & OT Integration', count: '38 apps', examples: ['SCADA connectors', 'Sensor dashboards', 'Field ops mobile', 'Predictive alerts'], color: 'text-amber-400' },
                  { category: 'AI & ML-Powered', count: '52 apps', examples: ['Fraud detection', 'Predictive routing', 'NLP case analysis', 'Smart scheduling'], color: 'text-yellow-400' },
                  { category: 'Legacy Modernisation', count: '63 apps', examples: ['Mainframe bridges', 'ERP connectors', 'Portal replacements', 'Data migration'], color: 'text-orange-300' },
                ].map((cat, i) => (
                  <div key={i} className="p-5">
                    <div className={`text-xs font-bold ${cat.color} mb-0.5`}>{cat.count}</div>
                    <div className="text-sm font-semibold text-white mb-3">{cat.category}</div>
                    <div className="space-y-1.5">
                      {cat.examples.map((ex, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-slate-400">
                          <span className={`w-1 h-1 rounded-full ${cat.color.replace('text-', 'bg-')}`} />
                          {ex}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 service cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {services.map((s,i)=>(
                <div key={i} className="group rounded-2xl p-6 border border-white/8 hover:border-orange-500/40 transition-all hover:-translate-y-0.5" style={{background:'rgba(255,255,255,0.04)'}}>
                  <div className="w-11 h-11 rounded-xl bg-orange-500/15 group-hover:bg-orange-500/25 flex items-center justify-center mb-4 transition-colors">
                    <s.icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{s.description}</p>
                  <div className="space-y-1.5">
                    {s.benefits.map((b,j)=>(
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle className="h-3.5 w-3.5 text-orange-400 shrink-0" />{b}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech credibility bar */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-12 border-t border-white/8">
              {[
                {icon:Code,stat:'200+',title:'Custom Apps Delivered',desc:'Purpose-built ServiceNow apps across every industry and use case'},
                {icon:Target,stat:'100%',title:'Delivery Success Rate',desc:'Every engagement delivered on time and to specification'},
                {icon:Zap,stat:'16 wks',title:'Average Delivery',desc:'From signed spec to production-deployed custom application'},
                {icon:Shield,stat:'100%',title:'Upgrade Safe',desc:'Every app built on supported APIs — survives every ServiceNow release'},
              ].map((c,i)=>(
                <div key={i} className="group rounded-2xl p-6 border border-white/8 hover:border-orange-500/30 transition-all" style={{background:'rgba(255,255,255,0.03)'}}>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 group-hover:bg-orange-500/25 flex items-center justify-center mb-4 transition-colors">
                    <c.icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <div className="text-2xl font-bold text-orange-400 mb-1">{c.stat}</div>
                  <h3 className="font-semibold text-white text-sm mb-1">{c.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle,#ea580c 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-orange-600" /><span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">How We Build</span></div>
            <div className="max-w-2xl mb-10"><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Prototype in 4 weeks. <span className="text-orange-600">Live in 16.</span></h2><p className="text-gray-500 text-lg">Validated direction early, iterative delivery throughout — no big-bang surprises at the end.</p></div>
            <div className="relative mb-0">
              <div className="hidden md:block absolute top-[28px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 z-0 bg-orange-100 overflow-hidden rounded-full"><div className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-200 rounded-full" style={{width:phasesVisible?'100%':'0%',transition:'width 1.2s cubic-bezier(0.4,0,0.2,1)',transitionDelay:'200ms'}} /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">{methodology.map((step,i)=>(<div key={i} className="relative flex flex-col items-start md:items-center px-4 pb-10 md:pb-0 group" style={{opacity:phasesVisible?1:0,transform:phasesVisible?'translateY(0)':'translateY(20px)',transition:'opacity 0.55s ease,transform 0.55s ease',transitionDelay:`${i*150}ms`}}><div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-orange-600 text-orange-600 font-bold text-xl mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-sm" style={{transform:phasesVisible?'scale(1)':'scale(0.65)',transition:'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)',transitionDelay:`${i*150+80}ms`}}>{i+1}</div><span className="inline-block text-xs font-medium text-orange-500 bg-orange-50 rounded-full px-3 py-1 mb-3">{step.duration}</span><h3 className="text-base font-bold text-gray-900 mb-3 md:text-center">{step.phase}</h3><ul className="space-y-1.5 w-full">{step.features.map((f,j)=>(<li key={j} className="flex items-start gap-2 text-sm text-gray-500" style={{opacity:phasesVisible?1:0,transition:'opacity 0.4s ease',transitionDelay:`${i*150+j*60+300}ms`}}><CheckCircle className="h-3.5 w-3.5 text-orange-400 mt-0.5 shrink-0" />{f}</li>))}</ul></div>))}</div>
            </div>
          </div>
          <div className="mt-10 bg-gray-50 border-t border-gray-100"><div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">{[{v:'4 wks',l:'Working prototype'},{v:'200+',l:'Apps delivered'},{v:'100%',l:'Success rate'},{v:'16 wks',l:'Avg delivery'}].map((s,i)=>(<div key={i} className="py-6 px-6 text-center"><div className="text-2xl sm:text-3xl font-bold text-orange-600">{s.v}</div><div className="text-xs sm:text-sm text-gray-500 mt-1">{s.l}</div></div>))}</div></div></div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="mb-12"><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-orange-600" /><span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built different.<br />Works perfectly.</h2></div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${currentCase*100}%)`}}>{caseStudies.map((s,i)=>(<div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"><div className="grid lg:grid-cols-2 gap-10 items-start"><div><div className="flex items-center gap-3 mb-5"><span className="text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-3 py-1">{s.industry}</span><span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">{s.timeline}</span></div><h3 className="text-2xl font-bold text-gray-900 mb-6">{s.client}</h3><div className="space-y-5"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div><p className="text-gray-600 text-sm leading-relaxed">{s.challenge}</p></div><div><div className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-1.5">Solution</div><p className="text-gray-600 text-sm leading-relaxed">{s.solution}</p></div></div><blockquote className="mt-6 pl-4 border-l-2 border-orange-200 text-sm text-gray-600 italic">&ldquo;{s.testimonial}&rdquo;</blockquote></div><div className="rounded-2xl overflow-hidden border border-gray-100" style={{background:'#fff8f0'}}><div className="px-5 py-3.5 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">Outcomes</span><span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div><div className="p-5 grid grid-cols-2 gap-3">{s.results.map((r,j)=>(<div key={j} className="bg-white rounded-xl p-4 border border-gray-100"><CheckCircle className="h-4 w-4 text-orange-500 mb-2" /><p className="text-sm font-semibold text-gray-800 leading-tight">{r}</p></div>))}</div><div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between"><span className="text-xs text-gray-400">Delivered in</span><span className="text-sm font-bold text-orange-600">{s.timeline}</span></div></div></div></div></div>))}</div></div>
              <div className="flex items-center justify-between mt-6">
                <button onClick={()=>setCurrentCase(p=>(p-1+caseStudies.length)%caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-orange-400 flex items-center justify-center text-gray-500 hover:text-orange-600 transition-colors" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
                <div className="flex items-center gap-2">{caseStudies.map((_,i)=>(<button key={i} onClick={()=>setCurrentCase(i)} className={`rounded-full transition-all duration-300 ${i===currentCase?'w-8 h-2 bg-orange-600':'w-2 h-2 bg-gray-300 hover:bg-orange-300'}`} aria-label={`Case ${i+1}`} />))}</div>
                <button onClick={()=>setCurrentCase(p=>(p+1)%caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-orange-400 flex items-center justify-center text-gray-500 hover:text-orange-600 transition-colors" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 relative overflow-hidden" style={{background:'#07071a'}}>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'radial-gradient(circle,#818cf8 1px,transparent 1px)',backgroundSize:'32px 32px'}} />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background:'radial-gradient(ellipse at top right,#ea580c,transparent 60%)'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12 text-center"><div className="flex items-center justify-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-orange-500" /><span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Client Voices</span><span className="inline-block w-8 h-px bg-orange-500" /></div><h2 className="text-3xl sm:text-4xl font-bold text-white">What builders say about our builds.</h2></div>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${currentTestimonial*100}%)`}}>{clientStories.map((s,i)=>(<div key={i} className="w-full shrink-0"><div className="rounded-2xl p-8 border border-white/8" style={{background:'rgba(255,255,255,0.04)'}}><div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0"><Users className="h-6 w-6 text-orange-400" /></div><div><div className="font-bold text-white">{s.name}</div><div className="text-sm text-slate-400">{s.title}</div></div><div className="ml-auto flex gap-0.5">{[...Array(s.rating)].map((_,j)=>(<Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />))}</div></div><p className="text-slate-300 leading-relaxed mb-5">&ldquo;{s.story}&rdquo;</p><div className="flex items-center gap-2 pt-4 border-t border-white/8"><CheckCircle className="h-4 w-4 text-green-400 shrink-0" /><span className="text-green-400 text-sm font-medium">{s.metric}</span></div></div></div>))}</div></div>
              <div className="flex justify-center gap-2 mt-6">{clientStories.map((_,i)=>(<button key={i} onClick={()=>setCurrentTestimonial(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i===currentTestimonial?'w-8 bg-orange-400':'w-1.5 bg-white/20 hover:bg-white/40'}`} />))}</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-orange-600" /><span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common questions.</h2><p className="text-gray-500 text-sm leading-relaxed mb-8">Everything you need to know about custom ServiceNow app development.</p><a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{background:'linear-gradient(135deg,#ea580c,#d97706)',boxShadow:'0 8px 24px rgba(234,88,12,0.3)'}}>Ask us directly <ArrowRight className="h-4 w-4" /></a></div>
              <div className="lg:col-span-2 space-y-3">{faqs.map((f,i)=>(<div key={i} className="border border-gray-200 hover:border-orange-200 rounded-xl overflow-hidden transition-colors"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{f.question}</span><ChevronDown className={`h-5 w-5 text-orange-500 shrink-0 transition-transform duration-200 ${openFaq===i?'rotate-180':''}`} /></button>{openFaq===i&&(<div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm leading-relaxed">{f.answer}</p></div>)}</div>))}</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden" style={{background:'#07071a'}}>
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle,#818cf8 1px,transparent 1px)',backgroundSize:'32px 32px'}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 pointer-events-none" style={{background:'radial-gradient(ellipse,#ea580c,transparent 70%)'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 rounded-full px-4 py-2 text-orange-300 text-sm mb-8"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />Prototype in 4 weeks · 100% delivery success</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Have something that can&apos;t be bought?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">Tell us what off-the-shelf can&apos;t do for you. We&apos;ll spec a custom ServiceNow app and show you a working prototype in 4 weeks — no commitment required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{background:'linear-gradient(135deg,#ea580c,#d97706)',boxShadow:'0 8px 32px rgba(234,88,12,0.4)'}}>Start Your Custom App <ArrowRight className="h-5 w-5" /></a>
              <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-orange-500 hover:text-white transition-all text-base">See what we've built</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
