// Generate ALL remaining premium portfolio pages
const fs = require('fs');
const path = require('path');

// Simple template for each page
function makePage(data) {
  const A = data.color;
  const AG = data.gradient;
  const lightBg = data.lightBg;
  const darkAccent = data.darkAccent;

  // Build icon imports
  const usedIcons = new Set(['ArrowRight','CheckCircle','ChevronDown','ChevronLeft','ChevronRight','MessageCircle','Search','Cog','Rocket','Clock','Shield','ClipboardCheck']);
  data.caps.forEach(c => usedIcons.add(c.icon));
  data.method.forEach(m => usedIcons.add(m.icon));
  const iconList = Array.from(usedIcons).sort().join(', ');

  // Build capabilities
  const caps = data.caps.map((c,i) =>
    `  { icon: ${c.icon}, title: '${c.title}', desc: '${c.desc}', outcomes: [${c.out.map(o=>`'${o}'`).join(', ')}] }`
  ).join(',\n');

  // Build methodology
  const meth = data.method.map(m =>
    `  { phase: '${m.phase}', duration: '${m.dur}', icon: ${m.icon}, items: [${m.items.map(i=>`'${i}'`).join(', ')}] }`
  ).join(',\n');

  // Build case studies
  const cases = data.cases.map(cs =>
    `  { client: '${cs.client}', industry: '${cs.ind}', timeline: '${cs.time}', challenge: '${cs.chal}', solution: '${cs.sol}', results: [${cs.res.map(r=>`'${r}'`).join(', ')}], quote: '${cs.quote}', author: '${cs.auth}' }`
  ).join(',\n');

  // Build FAQs
  const faqs = data.faqs.map(f =>
    `  { q: '${f.q}', a: '${f.a}' }`
  ).join(',\n');

  // Build Why ifBash items
  const whys = data.whys.map(w =>
    `                { icon: ${w.icon}, stat: '${w.stat}', desc: '${w.desc}' }`
  ).join(',\n  ');

  // Case study navigation
  const csNav = data.cases.length > 1 ? `
            <div className="flex items-center justify-between mt-5"><button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center transition-colors"><ChevronLeft className="h-5 w-5 text-gray-500" /></button><div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={\`rounded-full transition-all \${i === currentCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300'}\`} style={i === currentCase ? { backgroundColor: A } : {}} />)}</div><button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center transition-colors"><ChevronRight className="h-5 w-5 text-gray-500" /></button></div>` : '';

  const name = data.title.replace(/[^a-zA-Z0-9]/g, '') + 'Page';

  const content = `'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ${iconList} } from 'lucide-react';

const A = '${A}';
const AG = '${AG}';

const capabilities = [
${caps}
];

const methodology = [
${meth}
];

const caseStudies = [
${cases}
];

const faqs = [
${faqs}
];

export default function ${name}() {
  const [currentCase, setCurrentCase] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [revealed, setRevealed] = useState({});

  useEffect(() => { const i = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 6000); return () => clearInterval(i); }, []);
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: \`0 8px 24px \${A}66\` }} aria-label="Free Strategy Call">
          <MessageCircle className="h-6 w-6" />
        </Link>
      </div>

      {/* HERO */}
      <section className="relative bg-white overflow-hidden flex items-center min-h-[calc(100vh-70px)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: \`radial-gradient(circle, ${data.dotColor} 1px, transparent 1px)\`, backgroundSize: '28px 28px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>${data.cat}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.06] tracking-tight mb-6">
              ${data.headline}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              ${data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: \`0 8px 24px \${A}40\` }}>Get a Custom Strategy <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-gray-400 text-gray-600 font-semibold rounded-xl transition-colors text-sm" style={{ ':hover': { color: A } }}>See Client Results</Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '${lightBg}' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: \`radial-gradient(circle, ${data.dotColor} 1px, transparent 1px)\`, backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Key Capabilities</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need. Nothing you don&apos;t.</h2>
          </div>
          <div data-reveal="capabilities" className={\`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 \${revealed.capabilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}\`}>
            {capabilities.map(({ icon: Icon, title, desc, outcomes }, i) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-md" style={{ transitionDelay: \`\${i * 80}ms\` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: \`\${A}12\` }}><Icon className="h-5 w-5" style={{ color: A }} /></div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {outcomes.map((o, j) => (
                    <span key={j} className="inline-flex items-center gap-1 text-[11px] font-medium rounded-full px-2.5 py-1" style={{ color: A, background: \`\${A}08\`, border: \`1px solid \${A}18\` }}>
                      <CheckCircle className="h-3 w-3" /> {o}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How We Deliver</h2><p className="text-gray-500 max-w-xl mx-auto">Proven methodology. Predictable outcomes.</p></div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0" />
            {methodology.map(({ phase, duration, icon: Icon, items }) => (
              <div key={phase} className="relative z-10 group text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white border-2 border-gray-100 group-hover:border-gray-300 flex items-center justify-center transition-all shadow-sm group-hover:shadow-md"><Icon className="h-6 w-6" style={{ color: A }} /></div>
                <div className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-3" style={{ color: A, background: \`\${A}12\` }}>{duration}</div>
                <h3 className="font-bold text-gray-900 mb-3">{phase}</h3>
                <ul className="space-y-2 text-left">{items.map(item => <li key={item} className="flex items-start gap-2 text-xs text-gray-600"><div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: A }} />{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 lg:py-20" style={{ background: '${lightBg}' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-8"><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in Practice</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes. Real clients.</h2></div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500" style={{ transform: \`translateX(-\${currentCase * 100}%)\` }}>{caseStudies.map((cs, i) => (
              <div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold rounded-full px-3 py-1" style={{ color: A, background: \`\${A}12\` }}>{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3>
                    <div className="space-y-4"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div><div><div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: A }}>Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div></div>
                    <blockquote className="mt-5 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: \`\${A}40\` }}>&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote>
                  </div>
                  <div className="rounded-2xl border border-gray-100 overflow-hidden" style={{ background: \`\${A}04\` }}><div className="px-5 py-3 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">Outcomes</span><span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div><div className="p-5 grid gap-3">{cs.results.map((r, j) => <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" /><span className="text-sm font-semibold text-gray-800">{r}</span></div>)}</div></div>
                </div>
              </div></div>
            ))}</div></div>${csNav}
          </div>
        </div>
      </section>

      {/* WHY IFBASH */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: \`radial-gradient(circle, ${darkAccent} 1px, transparent 1px)\`, backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: \`\${A}08\`, borderColor: \`\${A}33\`, color: A }}>Why ifBash</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">${data.whyHead}</h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">${data.whySub}</p>
            </div>
            <div data-reveal="whyifbash" className={\`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 \${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}\`}>
              {[
${whys}
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center transition-all" style={{ borderColor: \`\${A}26\`, background: \`\${A}0A\` }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: \`\${A}18\` }}><Icon className="h-5 w-5" style={{ color: A }} /></div><div className="text-sm font-bold text-white mb-2">{stat}</div><p className="text-xs text-slate-400 leading-relaxed">{desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div><div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: \`0 6px 20px \${A}4d\` }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="lg:col-span-2 space-y-2">{faqs.map((faq, i) => (<div key={i} className="border border-gray-200 hover:border-gray-300 rounded-xl overflow-hidden transition-colors"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span><ChevronDown className={\`h-4 w-4 shrink-0 transition-transform duration-200 \${openFaq === i ? 'rotate-180' : ''}\`} style={{ color: A }} /></button>{openFaq === i && <div className="px-5 pb-4 border-t border-gray-100 pt-3"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>}</div>))}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: \`radial-gradient(circle, ${darkAccent} 1px, transparent 1px)\`, backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: \`\${A}4d\`, background: \`linear-gradient(135deg, \${A}14, \${A}07)\` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: \`\${A}18\`, borderColor: \`\${A}4d\`, color: A }}><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Accepting new engagements</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">${data.ctaTitle}</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">${data.ctaSub}</p>
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: \`0 8px 28px \${A}4d\` }}>Free Strategy Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
`;

  const filePath = path.join('D:', 'website', 'app', 'portfolio', data.slug, 'page.tsx');
  if (!fs.existsSync(path.dirname(filePath))) fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('OK: ' + data.slug);
}

// ===== ALL REMAINING PAGES =====

const pages = [

  // ===== CRM & CUSTOMER (cyan #0891b2) =====
  ...[
    { slug:'sales-and-order-management', title:'Sales & Order Management', cat:'CRM & Customer',
      headline:'Lead to cash.<br /><span>No friction.</span>',
      subtitle:'Streamline the entire sales process with AI-powered CPQ and intelligent order management. <span>40% faster sales cycles. 95% quote accuracy. 25% revenue growth.</span>',
      caps:[{icon:'TrendingUp',title:'Lead Management',desc:'Multi-channel capture, AI-powered scoring, automated nurturing. Every lead tracked from first touch to closed deal.',out:['Multi-channel','AI scoring','Auto-nurture']},{icon:'BarChart3',title:'CPQ',desc:'Complex configuration, dynamic pricing, automated quote generation. 95% accuracy in minutes, not days.',out:['95% accuracy','Dynamic pricing','Instant quotes']},{icon:'Layers',title:'Order Management',desc:'Full lifecycle tracking, fulfillment orchestration, exception handling. Every order visible from inception to delivery.',out:['Full lifecycle','Fulfillment','Exception handling']},{icon:'Target',title:'Salesforce Automation',desc:'Opportunity management, territory planning, forecasting. Complete pipeline visibility across every rep and region.',out:['Pipeline visibility','Territory planning','Forecasting']},{icon:'Cog',title:'Lead-to-Cash Analytics',desc:'End-to-end visibility, bottleneck detection, revenue forecasting. Know exactly where every deal stands.',out:['End-to-end view','Bottleneck detection','Revenue forecast']}],
      method:[{phase:'Map',dur:'Weeks 1–4',icon:'Search',items:['Lead-to-cash process mapping','Integration inventory & gap analysis','KPI baseline & success criteria']},{phase:'Build',dur:'Weeks 5–16',icon:'Cog',items:['Platform config & CPQ setup','Order workflow automation','CRM/ERP integration']},{phase:'Launch',dur:'Weeks 17–22',icon:'Rocket',items:['Sales team training & enablement','Pilot deployment & validation','KPI tracking & adjustment']},{phase:'Optimize',dur:'Weeks 23–28',icon:'TrendingUp',items:['Performance analytics & insights','Process refinement & automation','Scaling guidance & governance']}],
      cases:[{client:'Enterprise Software Corporation',ind:'Technology',time:'24 weeks',chal:'40% longer sales cycles than industry average. Quote errors creating trust issues. No pipeline visibility across regions.',sol:'ServiceNow SOM with AI-powered CPQ and end-to-end order management across all sales channels.',res:['40% faster sales cycles','95% quote accuracy','25% revenue growth','Full pipeline visibility'],quote:'Forty percent faster. Twenty-five percent more revenue. The math is simple.',auth:'VP of Sales Operations'}],
      faqs:[{q:'What is Sales & Order Management?',a:'End-to-end sales and order management — from lead capture through quote, order, and fulfillment — all on one unified platform with AI-powered automation.'},{q:'How does CPQ work?',a:'AI-powered logic engine handles complex product configurations, dynamic pricing, and automated quote generation in real time. 95% accuracy with no manual errors.'},{q:'How long does implementation take?',a:'16–28 weeks. CPQ and order management configured in parallel. Sales teams typically go live with quoting within the first 12 weeks.'},{q:'What CRM/ERP does it integrate with?',a:'Salesforce, Microsoft Dynamics, SAP, Oracle — plus e-commerce platforms and billing systems via Integration Hub.'},{q:'What results can we expect?',a:'Clients typically see 40% faster sales cycles, 95% quote accuracy, and 25%+ revenue growth within the first year.'}],
      ctaTitle:'Ready to accelerate lead-to-cash?',ctaSub:'Tell us about your sales process. We\'ll scope your SOM implementation in 48 hours.',
      whyHead:'We don\'t just manage orders.<br /><span>We accelerate revenue.</span>',whySub:'We start with your sales team and their frustrations, not the platform.',
      whys:[{icon:'ClipboardCheck',stat:'Process first',desc:'We mystery-buy from your sales team before configuring a single workflow.'},{icon:'Clock',stat:'Speed + quality',desc:'CPQ live in weeks. Sales teams quoting faster within the first month.'},{icon:'Shield',stat:'We stay',desc:'90-day hypercare minimum until every deal flows from lead to cash without friction.'}]
    },
  ].map(d => ({...d, color:'#0891b2',gradient:'linear-gradient(135deg, #0891b2, #06b6d4)',lightBg:'#ecfeff',dotColor:'#0891b2',darkAccent:'#22d3ee'})),

  // ===== RISK & SECURITY (red #dc2626) =====
  ...[
    { slug:'security-operations', title:'Security Operations', cat:'Risk & Security',
      headline:'Simplify threats.<br /><span>Automate response.</span>',
      subtitle:'AI-powered security operations that connect your tools, automate workflows, and prioritize what matters. <span>Faster response. Lower risk. Complete visibility.</span>',
      caps:[{icon:'Shield',title:'Security Incident Response',desc:'Prioritize and respond to threats with intelligent workflows. MITRE ATT&CK integration for accelerated investigation.',out:['Intelligent prioritization','MITRE ATT&CK','Automated workflows']},{icon:'Cog',title:'Vulnerability Response',desc:'Risk-based vulnerability management across your entire infrastructure. Prioritize by business impact, not just CVSS score.',out:['Risk-based prioritization','Business impact','Automated remediation']},{icon:'Eye',title:'Security Posture Control',desc:'360° visibility into your attack surface. Detect security control gaps and unmanaged assets before attackers do.',out:['360° visibility','Control gap detection','Unmanaged assets']},{icon:'Target',title:'Threat Intelligence',desc:'Advanced threat hunting, modeling, and analysis. Correlate intelligence across your security ecosystem.',out:['Threat hunting','Intelligence correlation','IOC management']},{icon:'TrendingUp',title:'Performance Analytics',desc:'Real-time security metrics, trend analysis, and resource prioritization. Know your security posture at every moment.',out:['Real-time metrics','Trend analysis','Resource optimization']}],
      method:[{phase:'Assess',dur:'Weeks 1–4',icon:'Search',items:['Security tool audit & integration plan','Threat landscape assessment','Response workflow mapping']},{phase:'Build',dur:'Weeks 5–16',icon:'Shield',items:['Platform configuration & IR setup','Vulnerability management deployment','SIEM & tool integration']},{phase:'Automate',dur:'Weeks 17–22',icon:'Cog',items:['Playbook automation & testing','AI/ML model configuration','Team training & simulation']},{phase:'Optimize',dur:'Weeks 23–28',icon:'TrendingUp',items:['Performance analytics & tuning','Continuous improvement cycles','Quarterly security reviews']}],
      cases:[{client:'Wellstar Health System',ind:'Healthcare',time:'22 weeks',chal:'Protecting patient data and critical healthcare systems while maintaining operational efficiency and regulatory compliance.',sol:'ServiceNow Security Operations with incident response, vulnerability management, and healthcare-specific security controls.',res:['Enhanced patient data protection','Improved security compliance','Streamlined incident response','Operational confidence'],quote:'ServiceNow SecOps enables us to deliver patient care with quality and confidence by protecting our healthcare systems.','auth:'Chief Information Security Officer'}],
      faqs:[{q:'What is ServiceNow Security Operations?',a:'SecOps connects your disparate security tools into orchestrated, automated workflows. It prioritizes vulnerabilities by business impact, accelerates incident response with MITRE ATT&CK, and gives you complete visibility into your security posture.'},{q:'How does MITRE ATT&CK integration work?',a:'Incidents are automatically mapped to ATT&CK tactics and techniques, giving analysts instant context on attacker behavior. Investigation accelerates from hours to minutes.'},{q:'How long does implementation take?',a:'14–28 weeks. Security tool audit in weeks 1–4. Incident response and vulnerability management configured in parallel.'},{q:'What security tools does it integrate with?',a:'Splunk, IBM QRadar, ArcSight, CrowdStrike, SentinelOne, Tenable, Qualys, Rapid7 — plus any SIEM or EDR via Integration Hub.'},{q:'How does it improve SOC efficiency?',a:'Automated playbooks handle routine tasks. AI triages alerts. Analysts focus on real threats instead of chasing false positives. Most SOCs see 60%+ efficiency gains.'}],
      ctaTitle:'Ready to transform your security operations?',ctaSub:'Tell us about your security stack. We\'ll scope your SecOps implementation in 48 hours.',
      whyHead:'We don\'t just secure systems.<br /><span>We eliminate the noise.</span>',whySub:'We start with your security team and their alert fatigue, not the platform.',
      whys:[{icon:'ClipboardCheck',stat:'Process first',desc:'We audit your security stack before writing a single playbook. Every automation targets a real analyst pain point.'},{icon:'Clock',stat:'Speed + quality',desc:'Incident response playbooks deploying in weeks. MITRE ATT&CK mapping from day one.'},{icon:'Shield',stat:'We stay',desc:'90-day hypercare minimum. We tune playbooks until your SOC runs like a well-oiled machine.'}]
    },
    { slug:'security-incident-response', title:'Security Incident Response', cat:'Risk & Security',
      headline:'Every threat.<br /><span>Contained and resolved.</span>',
      subtitle:'Respond rapidly to evolving threats with MITRE ATT&CK integration and AI-powered incident response. <span>6x faster incident processing. Complete SOC visibility.</span>',
      caps:[{icon:'Shield',title:'Workflow Management',desc:'Automated assignment, intelligent prioritization, and cross-team orchestration. Every incident follows the right path.',out:['Automated assignment','Intelligent prioritization','Cross-team orchestration']},{icon:'Eye',title:'Operations Dashboard',desc:'Real-time SOC performance visibility. Know where to evolve your team and workflows.',out:['Real-time visibility','Performance metrics','Evolution insights']},{icon:'Target',title:'MITRE ATT&CK Framework',desc:'Tactic and technique mapping, advanced threat context, and threat hunting enhancement built in.',out:['TTP mapping','Threat context','Hunting enhancement']},{icon:'Cog',title:'Major Incident Management',desc:'Dedicated workspace for ransomware, data breaches, and critical threats. Coordinated response across every team.',out:['Ransomware response','Data breach management','Crisis coordination']},{icon:'TrendingUp',title:'Performance Analytics',desc:'Trend analysis, resource prioritization, and continuous improvement insights. Get better with every incident.',out:['Trend analysis','Resource insights','Continuous improvement']}],
      method:[{phase:'Assess',dur:'Weeks 1–3',icon:'Search',items:['Incident response maturity audit','Playbook & workflow mapping','Tool integration baseline']},{phase:'Build',dur:'Weeks 4–14',icon:'Shield',items:['SIR platform configuration','MITRE ATT&CK mapping','Playbook automation & testing']},{phase:'Launch',dur:'Weeks 15–20',icon:'Rocket',items:['SOC team training & simulation','Phased go-live & monitoring','KPI baseline establishment']},{phase:'Optimize',dur:'Weeks 21–26',icon:'TrendingUp',items:['Performance analytics & tuning','Playbook refinement','Quarterly maturity assessment']}],
      cases:[{client:'Fortune 500 Technology Company',ind:'Technology',time:'20 weeks',chal:'Manual incident response processes. Analysts overwhelmed by alert volume. Response times measured in days, not hours.',sol:'ServiceNow SIR with MITRE ATT&CK integration and automated response playbooks across the global SOC.',res:['6x faster incident processing','Automated playbooks deployed','MITRE ATT&CK mapped','SOC efficiency transformed'],quote:'Six times faster incident processing. Our analysts finally focus on hunting threats instead of pushing paper.','auth:'Chief Information Security Officer'}],
      faqs:[{q:'What is Security Incident Response?',a:'SIR manages the complete lifecycle of security incidents — from detection and analysis to containment, eradication, and recovery — with AI-powered automation and MITRE ATT&CK integration.'},{q:'How does MITRE ATT&CK integration help?',a:'Incidents are automatically mapped to ATT&CK tactics and techniques. Analysts instantly understand attacker behavior, detection coverage gaps, and investigative next steps.'},{q:'How long does implementation take?',a:'12–22 weeks. SOC assessment in weeks 1–3. Platform and playbooks deploy in parallel. MITRE ATT&CK mapping from day one.'},{q:'How does it handle major incidents like ransomware?',a:'Dedicated major incident workspace with crisis coordination, evidence management, communication templates, and recovery planning — all in one place.'},{q:'What tools does it integrate with?',a:'Splunk, QRadar, ArcSight, CrowdStrike, SentinelOne, Microsoft Sentinel, Carbon Black — plus any SIEM, EDR, or threat intel platform.'}],
      ctaTitle:'Ready to accelerate your incident response?',ctaSub:'Tell us about your SOC. We\'ll scope your SIR implementation in 48 hours.',
      whyHead:'We don\'t just respond to incidents.<br /><span>We make response automatic.</span>',whySub:'We start with your analysts and their daily frustrations, not the platform.',
      whys:[{icon:'ClipboardCheck',stat:'Process first',desc:'We shadow your SOC analysts before writing a single playbook. Every automation solves a real problem.'},{icon:'Clock',stat:'Speed + quality',desc:'Playbooks deploying in weeks. MITRE ATT&CK mapped from day one.'},{icon:'Shield',stat:'We stay',desc:'90-day hypercare minimum. We tune playbooks until your analysts love their dashboards.'}]
    },
  ].map(d => ({...d, color:'#dc2626',gradient:'linear-gradient(135deg, #dc2626, #ef4444)',lightBg:'#fef2f2',dotColor:'#dc2626',darkAccent:'#f87171'})),

  // ===== HR & WORKFORCE (amber #d97706) =====
  ...[
    { slug:'hr-service-delivery', title:'HR Service Delivery', cat:'HR & Workforce',
      headline:'Every employee.<br /><span>One place for everything.</span>',
      subtitle:'Improve productivity with AI-driven self-service and streamlined HR case resolution. <span>50% reduction in HR workload. 76% self-service increase.</span>',
      caps:[{icon:'Users',title:'Employee Center',desc:'Single unified portal for all employee services. HR, IT, facilities — one place, one experience.',out:['Unified portal','Cross-department','Personalized']},{icon:'TrendingUp',title:'Employee Journey Management',desc:'Complete workflow automation for onboarding, transitions, relocations, and offboarding. No-code journey creation.',out:['No-code journeys','Lifecycle automation','Complete visibility']},{icon:'Cog',title:'Case & Knowledge Management',desc:'Standardized documentation, intelligent routing, and AI-powered knowledge suggestions. Answers before tickets.',out:['Standardized docs','Intelligent routing','AI knowledge']},{icon:'MessageCircle',title:'Virtual Agent',desc:'24/7 AI-powered support with natural language understanding. Resolve issues fast without HR intervention.',out:['24/7 availability','Natural language','Auto-resolution']},{icon:'BarChart3',title:'Performance Analytics',desc:'Real-time HR metrics, trend prediction, and resource optimization. Data-driven HR decisions.',out:['Real-time metrics','Trend prediction','Resource insights']}],
      method:[{phase:'Assess',dur:'Weeks 1–3',icon:'Search',items:['Employee journey mapping & pain points','HR process audit & integration plan','Success criteria & KPI baseline']},{phase:'Build',dur:'Weeks 4–12',icon:'Cog',items:['Employee Center configuration','Case & knowledge management setup','Virtual Agent training & deployment']},{phase:'Launch',dur:'Weeks 13–18',icon:'Rocket',items:['HR team training & enablement','Phased employee rollout','KPI monitoring & adjustment']},{phase:'Optimize',dur:'Weeks 19–24',icon:'TrendingUp',items:['Journey refinement & personalization','Self-service adoption campaigns','Continuous improvement cycles']}],
      cases:[{client:'Mondelez International',ind:'Consumer Goods',time:'20 weeks',chal:'Fragmented HR service delivery across global operations. Low self-service adoption. HR teams buried in repetitive requests.',sol:'ServiceNow HRSD with Employee Center, Virtual Agent, and Employee Journey Management across all regions.',res:['76% self-service increase','Employee experience enhanced','Global operations unified','HR workload reduced 50%'],quote:'A remarkable 76% increase in self-service. Our HR teams finally focus on strategic work instead of answering the same questions.','auth:'Chief Human Resources Officer'}],
      faqs:[{q:'What is ServiceNow HR Service Delivery?',a:'HRSD provides a unified employee portal, AI-powered case management, and automated employee journeys — from onboarding to offboarding — all on one platform.'},{q:'What is Employee Journey Management?',a:'Complete workflow automation for key employee moments: onboarding, promotions, transfers, leave, and offboarding. No-code journey creation with cross-department integration.'},{q:'How long does implementation take?',a:'8–24 weeks. Employee Center and core case management deploy first (weeks 1–12). Journey management and analytics follow.'},{q:'What HR systems does it integrate with?',a:'Oracle HCM, SAP SuccessFactors, Workday — plus LMS, payroll, ATS, and productivity tools like Microsoft 365 and Google Workspace.'},{q:'What ROI can we expect?',a:'Clients typically see 50% reduction in HR workload, 70%+ self-service adoption, and ROI within 6–12 months.'}],
      ctaTitle:'Ready to transform your employee experience?',ctaSub:'Tell us about your HR service delivery goals. We\'ll scope your HRSD implementation in 48 hours.',
      whyHead:'We don\'t just automate HR.<br /><span>We make employees feel valued.</span>',whySub:'We start with your employees and their daily frustrations, not the platform.',
      whys:[{icon:'ClipboardCheck',stat:'Process first',desc:'We survey your employees before configuring a single portal. Their frustrations drive our design.'},{icon:'Clock',stat:'Speed + quality',desc:'Employee Center live in weeks. Self-service adoption climbing within the first month.'},{icon:'Shield',stat:'We stay',desc:'90-day hypercare minimum. We refine journeys until every employee moment feels effortless.'}]
    },
  ].map(d => ({...d, color:'#d97706',gradient:'linear-gradient(135deg, #d97706, #f59e0b)',lightBg:'#fffbeb',dotColor:'#d97706',darkAccent:'#fbbf24'})),

  // ===== FINANCE & SUPPLY CHAIN (emerald #059669) =====
  ...[
    { slug:'accounts-payable-operations', title:'Accounts Payable Operations', cat:'Finance & Supply Chain',
      headline:'Pay suppliers confidently.<br /><span>Free your finance team.</span>',
      subtitle:'Streamline accounts payable with AI-powered document intelligence and automated invoice processing. <span>80% faster invoice processing. 60% cost reduction.</span>',
      caps:[{icon:'TrendingUp',title:'Document Intelligence',desc:'AI-powered invoice extraction with 38+ configurable fields. Manual data entry eliminated.',out:['38+ fields','AI extraction','No manual entry']},{icon:'Cog',title:'Invoice Processing Automation',desc:'Automated ingestion, validation, and processing. Two-way and three-way matching built in.',out:['Auto-ingestion','2/3-way matching','Validation workflows']},{icon:'Shield',title:'Exception Management',desc:'Automated exception detection with pre-configured rules. Supplier mismatches, receipt issues, duplicates — handled automatically.',out:['Auto-detection','Pre-configured rules','Contextual resolution']},{icon:'BarChart3',title:'Real-Time Analytics',desc:'Complete AP visibility with real-time dashboards, KPI monitoring, and predictive insights.',out:['Real-time dashboards','KPI monitoring','Predictive insights']},{icon:'Target',title:'ERP Integration',desc:'Seamless integration with SAP, Oracle, and Microsoft Dynamics. Real-time data sync, no duplication.',out:['SAP/Oracle/Dynamics','Real-time sync','No duplication']}],
      method:[{phase:'Assess',dur:'Weeks 1–3',icon:'Search',items:['AP process audit & pain point analysis','Invoice volume assessment & benchmarking','ERP integration requirements']},{phase:'Build',dur:'Weeks 4–12',icon:'Cog',items:['Document Intelligence configuration','Invoice processing workflows','ERP integration & data mapping']},{phase:'Validate',dur:'Weeks 13–18',icon:'Shield',items:['Exception rule testing & refinement','User acceptance testing','AP team training & enablement']},{phase:'Launch',dur:'Weeks 19–22',icon:'Rocket',items:['Phased go-live & hypercare','KPI monitoring & benchmarking','Continuous optimization setup']}],
      cases:[{client:'Fortune 500 Manufacturing Corp',ind:'Manufacturing',time:'20 weeks',chal:'10,000+ monthly invoices processed manually. Weeks-long approval cycles. AP team buried in data entry and error correction.',sol:'ServiceNow AP Operations with Document Intelligence and automated invoice processing across all global sites.',res:['10K+ invoices automated','80% faster processing','60% cost reduction','Manual entry eliminated'],quote:'10,000 invoices a month — now processed automatically. Our AP team finally does strategic work instead of data entry.','auth:'Chief Financial Officer'}],
      faqs:[{q:'What is ServiceNow Accounts Payable Operations?',a:'AP Operations modernizes siloed manual AP processes with AI-powered document intelligence, automated invoice processing, and seamless ERP integration — all on one platform.'},{q:'What is Document Intelligence?',a:'AI-based extraction that digitizes invoice data from PDFs and emails. 38+ configurable extraction fields. Trained AI models that improve with every invoice.'},{q:'How long does implementation take?',a:'8–22 weeks. Invoice processing and Document Intelligence configured first. ERP integration and optimization follow.'},{q:'What ERP systems does it integrate with?',a:'SAP, Oracle, Microsoft Dynamics — plus any financial system via Integration Hub. Real-time data sync eliminates duplication.'},{q:'What ROI can we expect?',a:'Clients typically see 80% faster invoice processing, 60% cost reduction, and ROI within 6–12 months.'}],
      ctaTitle:'Ready to transform your accounts payable?',ctaSub:'Tell us about your AP operations. We\'ll scope your AP implementation in 48 hours.',
      whyHead:'We don\'t just process invoices.<br /><span>We eliminate the busywork.</span>',whySub:'We start with your AP team and their daily frustrations, not the platform.',
      whys:[{icon:'ClipboardCheck',stat:'Process first',desc:'We audit your invoice workflow before configuring a single extraction rule.'},{icon:'Clock',stat:'Speed + quality',desc:'Document Intelligence training in weeks. 10,000+ invoices automated within the first quarter.'},{icon:'Shield',stat:'We stay',desc:'90-day hypercare minimum. We tune extraction models until every invoice is processed perfectly.'}]
    },
  ].map(d => ({...d, color:'#059669',gradient:'linear-gradient(135deg, #059669, #10b981)',lightBg:'#ecfdf5',dotColor:'#059669',darkAccent:'#34d399'})),

];

// Apply category defaults and generate
pages.forEach((d, i) => {
  if (!d.color) d.color = '#4f46e5';
  if (!d.gradient) d.gradient = 'linear-gradient(135deg, #4f46e5, #7c3aed)';
  if (!d.lightBg) d.lightBg = '#eef2ff';
  if (!d.dotColor) d.dotColor = d.color;
  if (!d.darkAccent) d.darkAccent = '#818cf8';
  makePage(d);
});

console.log(`Done! Generated ${pages.length} pages.`);
