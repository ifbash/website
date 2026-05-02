'use client';
import React, { useState, useEffect } from 'react';
import { 
ChevronRight, 
Play, 
Users, 
Zap, 
Shield, 
Award, 
ArrowRight, 
CheckCircle, 
Star,
Bot,
Brain,
Workflow,
Database,
Phone,
Mail,
MapPin,
Calendar,
TrendingUp,
Globe,
Settings,
Target,
Lightbulb,
Rocket,
Heart,
Building,
Factory,
HeartPulse,
Car,
Briefcase,
MonitorSmartphone,
Quote,
Video,
FileText,
Download,
ExternalLink,
Timer,
DollarSign,
BarChart3,
PieChart,
Activity,
Cpu,
CloudLightning,
GraduationCap,
BookOpen,
UserCheck,
Layers,
Cog,
ShoppingBag,
Store,
Microscope,
LinkedinIcon,
Twitter,
Youtube,
Instagram,
Music,
MessageCircle,
Wrench,
Clock // Add Clock icon
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Enhanced testimonials with specific metrics
const testimonials = [
{
name: "Sarah Johnson",
title: "CTO",
company: "Fortune 500 Manufacturing",
content: "ifBash delivered our ServiceNow implementation in just 67 days - 23 days ahead of schedule. Within 6 months, we reduced incident resolution time by 78% and saved $2.3M in operational costs. Their expertise made all the difference.",
rating: 5,
metrics: "78% faster resolution • $2.3M saved • 67-day implementation",
image: "/images/testimonials/sarah.jpg"
},
{
name: "Michael Chen",
title: "VP of Operations",
company: "Technology Provider",
content: "The CRM integration they delivered exceeded our expectations. We saw a 200% increase in lead conversion rates within the first quarter, plus their approach meant no surprise costs. ROI achieved in just 4 months.",
rating: 5,
metrics: "200% lead conversion increase • 4-month ROI • Fixed pricing",
image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
},
{
name: "Emily Rodriguez",
title: "Head of Digital Transformation",
company: "Healthcare Network",
content: "Their expertise in ServiceNow AI capabilities helped us achieve complete digital transformation. Patient experience scores improved by 85% and we're now processing 300% more cases with the same staff.",
rating: 5,
metrics: "85% patient satisfaction • 300% case processing • Same staff",
image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
}
];

// Enhanced services with measurable outcomes
const services = [
{
icon: Rocket,
title: "Rapid ServiceNow Implementation",
description: "Launch production-ready ServiceNow in 90 days or less with our proven methodology. Pre-built industry templates and automated testing accelerate your time-to-value.",
features: [
"Industry-specific workflows",
"Automated testing & deployment",
"Risk mitigation strategies",
"Average delivery: 73 days"
],
gradient: "from-indigo-600 to-blue-600",
metric: "Avg: 73 days"
},
{
icon: Brain,
title: "AI-First ServiceNow Platform",
description: "Deploy with cutting-edge AI capabilities built-in. Predictive analytics, intelligent automation, and machine learning models trained on multiple implementations.",
features: [
"Pre-configured ML models",
"Predictive incident management", 
"Intelligent case routing",
"Auto-optimization algorithms"
],
gradient: "from-blue-600 to-cyan-600",
metric: "65% faster setup"
},
{
icon: Target,
title: "Measurable ROI Tracking",
description: "Real-time ROI tracking dashboard with measurable results. Our clients typically see 180% ROI within the first year through intelligent automation and process optimization.",
features: [
"ROI tracking dashboard",
"Monthly performance reviews",
"KPI monitoring & reporting",
"Continuous optimization"
],
gradient: "from-cyan-600 to-teal-600",
metric: "Avg ROI: 180%"
}
];

const capabilities = [
{
icon: Bot,
title: "ServiceNow AI Solutions",
description: "Next-gen automation with predictive intelligence",
gradient: "from-indigo-600 to-blue-600",
features: ["Process Mining", "Predictive Analytics", "Virtual Agents"]
},
{
icon: Workflow,
title: "Process Automation",
description: "Intelligent workflow orchestration",
gradient: "from-cyan-600 to-teal-600",
features: ["Flow Designer", "Integration Hub", "Business Rules"]
},
{
icon: Shield,
title: "Enterprise Security",
description: "Comprehensive security operations",
gradient: "from-indigo-600 to-blue-600",
features: ["GRC", "SecOps", "Risk Management"]
}
];

const stats = [
{
value: "75%",
label: "Faster Resolution",
description: "AI-powered automation reduces incident resolution time",
icon: Zap
},
{
value: "60%",
label: "Cost Reduction", 
description: "Streamlined processes cut operational costs",
icon: DollarSign
},
{
value: "24/7",
label: "Expert Support",
description: "Round-the-clock intelligent assistance",
icon: Bot
},
{
value: "180%",
label: "Average ROI",
description: "Typical return on ServiceNow investment",
icon: TrendingUp
}
];

const industries = [
{ 
icon: Car, 
name: "Automotive",
metric: "85% faster production",
description: "Accelerate digital transformation in automotive with intelligent workflows, predictive maintenance, and supply chain optimization",
gradient: "from-indigo-600 to-blue-600",
link: "/industries/automotive-manufacturing",
image: "/images/industries/automotive.jpg",
tags: ["Predictive Maintenance", "Supply Chain", "Quality Control", "IoT Integration"]
},
{ 
icon: Factory, 
name: "Manufacturing",
metric: "60% cost reduction",
description: "Revolutionize production efficiency with AI-driven process automation, real-time monitoring, and predictive maintenance",
gradient: "from-blue-600 to-cyan-600",
link: "/industries/manufacturing-solutions",
image: "/images/industries/manufacturing.jpg",
tags: ["Smart Factory", "Process Automation", "Quality Control", "Predictive Analytics"]
},
{ 
icon: ShoppingBag, 
name: "Consumer Goods",
metric: "2x customer satisfaction",
description: "Elevate consumer experiences with personalized service delivery, automated fulfillment, and intelligent demand forecasting",
gradient: "from-cyan-600 to-teal-600",
link: "/industries/consumer-goods-retail",
image: "/images/industries/consumer-goods.jpg",
tags: ["Demand Planning", "Order Automation", "CRM Integration", "Supply Chain"]
},
{ 
icon: MonitorSmartphone, 
name: "Technology Providers",
metric: "95% automation rate",
description: "Accelerate innovation with AI-powered development workflows, automated testing, and seamless service integration",
gradient: "from-indigo-600 to-blue-600",
link: "/industries/technology-software-companies",
image: "/images/industries/technology.jpg",
tags: ["DevOps", "AI Integration", "Service Automation", "Cloud Native"]
},
{ 
icon: Globe, 
name: "Public Sector",
metric: "40% better service",
description: "Transform citizen services with secure digital platforms, automated compliance, and intelligent case management",
gradient: "from-blue-600 to-indigo-600",
link: "/industries/public-sector-government",
image: "/images/industries/public-sector.jpg",
tags: ["Citizen Services", "Compliance", "Security", "Digital Forms"]
},
{ 
icon: HeartPulse, 
name: "Healthcare",
metric: "75% faster care",
description: "Optimize patient care with AI-driven diagnostics, automated workflows, and integrated health records management",
gradient: "from-indigo-600 to-blue-600",
link: "/industries/healthcare-providers",
image: "/images/industries/healthcare.jpg",
tags: ["Patient Care", "Clinical Workflows", "EHR Integration", "Compliance"]
},
{ 
icon: Microscope, 
name: "Life Sciences",
metric: "3x R&D speed",
description: "Accelerate research with automated lab management, clinical trial automation, and regulatory compliance",
gradient: "from-rose-600 to-pink-600",
link: "/industries/healthcare-providers",
image: "/images/industries/life-sciences.jpg",
tags: ["Lab Management", "Clinical Trials", "Research Data", "Compliance"]
},
{ 
icon: Store, 
name: "Retail",
metric: "45% more sales",
description: "Transform retail operations with omnichannel integration, intelligent inventory, and personalized customer experiences",
gradient: "from-amber-600 to-yellow-600",
link: "/industries/retail-ecommerce",
image: "/images/industries/retail.jpg",
tags: ["Omnichannel", "Inventory", "POS Integration", "CRM"]
},
{ 
icon: Phone, 
name: "Telecom",
metric: "99% uptime",
description: "Optimize network operations with AI-powered monitoring, automated service provisioning, and customer experience management",
gradient: "from-emerald-600 to-green-600",
link: "/industries/telecommunications",
image: "/images/industries/telecom.jpg",
tags: ["Network Ops", "Service Delivery", "5G Ready", "Customer Experience"]
},
{ 
icon: Zap, 
name: "Energy & Utilities",
metric: "50% more efficient",
description: "Enhance grid operations with smart monitoring, predictive maintenance, and automated compliance management",
gradient: "from-fuchsia-600 to-pink-600",
link: "/industries/energy-utilities",
image: "/images/industries/energy-utilities.jpg",
tags: ["Smart Grid", "Asset Management", "Compliance", "Sustainability"]
}
];

const agentLogs = [
  { time: "09:41:02", agent: "NOW Assist", action: "INC-0042387 auto-resolved in 3.1s", type: "resolve" },
  { time: "09:41:18", agent: "HR Workflows", action: "Onboarding HRSD-8821 completed", type: "complete" },
  { time: "09:41:35", agent: "Predictive AI", action: "P1 risk detected — 3 alerts suppressed", type: "predict" },
  { time: "09:41:52", agent: "SecOps", action: "Threat SIR-0041 contained + closed", type: "resolve" },
  { time: "09:42:09", agent: "Field Service", action: "WO-5512 dispatched to nearest tech", type: "route" },
  { time: "09:42:24", agent: "CRM Agent", action: "Lead CRM-44901 scored + assigned", type: "route" },
];

const aiCapabilities = [
  {
    icon: Brain,
    title: "Generative AI",
    desc: "Knowledge generation, ticket summarization, and smart recommendations via Now Assist.",
    metric: "85% faster content",
    color: "violet"
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "Autonomous agents that resolve incidents, approve changes, and close cases — no human in the loop.",
    metric: "92% less manual work",
    color: "indigo"
  },
  {
    icon: Zap,
    title: "Predictive Intelligence",
    desc: "ML models trained on your data to prevent incidents before they occur.",
    metric: "94% prediction accuracy",
    color: "blue"
  },
];

type AnimatedStats = {
clients: number;
implementations: number;
satisfaction: number;
years: number;
};

export default function Page() {
const [currentTestimonial, setCurrentTestimonial] = useState(0);
const [isVisible, setIsVisible] = useState({});
const [shownLogs, setShownLogs] = useState(1);
const [activeTab, setActiveTab] = useState(0);
const [animatedStats, setAnimatedStats] = useState({
clients: 0,
implementations: 0,
satisfaction: 0,
years: 0
});

useEffect(() => {
const targets: AnimatedStats = {
clients: 500,
implementations: 1500,
satisfaction: 99,
years: 8
};
const duration = 2000;
const steps = 60;
const stepTime = duration / steps;
const intervals: { [key in keyof AnimatedStats]?: NodeJS.Timeout } = {};

(Object.keys(targets) as Array<keyof AnimatedStats>).forEach((key) => {
const target = targets[key];
const increment = target / steps;
let current = 0;

intervals[key] = setInterval(() => {
current += increment;
if (current >= target) {
  current = target;
  if (intervals[key]) {
    clearInterval(intervals[key]!);
  }
}
setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
}, stepTime);
});

return () => {
Object.values(intervals).forEach(interval => {
if (interval) clearInterval(interval);
});
};
}, []);

useEffect(() => {
const interval = setInterval(() => {
setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
}, 5000);
return () => clearInterval(interval);
}, []);

useEffect(() => {
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
  }
});
},
{ threshold: 0.1 }
);

const elements = document.querySelectorAll('[data-animate]');
elements.forEach(el => observer.observe(el));

return () => observer.disconnect();
}, []);

useEffect(() => {
const timer = setInterval(() => {
  setShownLogs(prev => (prev >= agentLogs.length ? 1 : prev + 1));
}, 1000);
return () => clearInterval(timer);
}, []);

useEffect(() => {
const timer = setInterval(() => {
  setActiveTab(prev => (prev + 1) % 3);
}, 3000);
return () => clearInterval(timer);
}, []);

return (
<>

{/* Fixed Chat Button - Right Side - Enhanced mobile experience */}
<div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
<Link 
  href="/get-started"
  className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center text-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
  aria-label="Chat with ServiceNow Expert"
>
  <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
  <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-gray-50 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[120px] text-center">
    Chat with Expert
  </span>
  <div className="absolute inset-0 rounded-full animate-ping bg-indigo-600 opacity-20"></div>
</Link>
</div>

<div>
{/* SEO Meta Tags */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ifBash",
      "url": "https://ifbash.com",
      "logo": "https://ifbash.com/images/logo.png",
      "email": "connect@ifbash.com",
      "foundingDate": "2016",
      "description": "ifBash is a ServiceNow and agentic AI consulting partner delivering implementations, AI automation, CRM, and digital transformation for enterprises worldwide. 1,500+ successful projects.",
      "serviceArea": "Global",
      "knowsAbout": [
        "ServiceNow Implementation",
        "Agentic AI",
        "Generative AI",
        "ServiceNow Now Assist",
        "AI Automation",
        "ServiceNow AI Consulting",
        "CRM Solutions",
        "Digital Transformation",
        "ITSM",
        "ServiceNow Managed Services",
        "ServiceNow GRC",
        "ServiceNow SecOps"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ServiceNow & AI Consulting Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ServiceNow Implementation", "url": "https://ifbash.com/services/servicenow-implementation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agentic AI & AI Automation", "url": "https://ifbash.com/services/ai-automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ServiceNow CRM & Customer Experience", "url": "https://ifbash.com/services/crm-customer-experience" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Transformation", "url": "https://ifbash.com/services/digital-transformation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ServiceNow Managed Services", "url": "https://ifbash.com/services/managed-services-support" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ServiceNow Custom App Development", "url": "https://ifbash.com/services/custom-apps" } }
        ]
      },
      "sameAs": [
        "https://linkedin.com/company/ifbash",
        "https://twitter.com/ifbashx",
        "https://youtube.com/@c-ifbash"
      ]
    })
  }}
/>

{/* Hero Section */}
<section className="relative overflow-hidden" style={{background: '#07071a', minHeight: '100vh'}}>
  {/* Dot grid */}
  <div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
  {/* Glows */}
  <div className="absolute top-0 left-0 w-[700px] h-[600px] opacity-[0.12]" style={{background: 'radial-gradient(ellipse at top left, #4f46e5, transparent 65%)'}} />
  <div className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-[0.08]" style={{background: 'radial-gradient(ellipse at bottom right, #7c3aed, transparent 65%)'}} />

  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10" style={{paddingTop: '4rem', paddingBottom: '72px'}}>
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* LEFT */}
      <div className="space-y-7">
        {/* Three capability pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'ServiceNow', color: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300' },
            { label: 'Agentic AI', color: 'bg-violet-500/15 border-violet-500/30 text-violet-300' },
            { label: 'CRM', color: 'bg-blue-500/15 border-blue-500/30 text-blue-300' },
          ].map(({ label, color }) => (
            <span key={label} className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-semibold ${color}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
              {label}
            </span>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.08] tracking-tight">
          Implement. Automate.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
            Grow with ServiceNow.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed">
          We deliver the complete ServiceNow platform — <span className="text-white">IT, Employee & Customer workflows</span> — infused with <span className="text-white">agentic AI</span> and <span className="text-white">CRM intelligence</span>. 1,500+ enterprises. 73-day average go-live.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm sm:text-base transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            style={{background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 32px rgba(79,70,229,0.35)'}}
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/company/case-studies-client-success"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-300 border border-white/10 hover:border-indigo-500/50 hover:text-white transition-all text-sm sm:text-base"
          >
            See Client Results
          </Link>
        </div>

        <div className="pt-5 border-t border-white/5">
          <p className="text-xs text-slate-600 mb-3 uppercase tracking-widest font-medium">Trusted across industries</p>
          <div className="flex flex-wrap gap-2">
            {['Manufacturing', 'Healthcare', 'Financial Services', 'Technology', 'Energy & Utilities'].map(ind => (
              <span key={ind} className="text-xs text-slate-500 bg-white/[0.04] border border-white/8 rounded-full px-3 py-1">{ind}</span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — Platform dashboard mockup */}
      <div className="relative mt-8 lg:mt-0">
        {/* Main card */}
        <div className="rounded-2xl overflow-hidden border border-white/10" style={{background: '#0d0d20', boxShadow: '0 40px 80px rgba(0,0,0,0.7)'}}>

          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8" style={{background: '#111130'}}>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex items-center gap-3 text-xs font-medium">
              {['IT Workflows', 'Employee WF', 'Customer WF'].map((tab, i) => (
                <span key={tab} className={`px-2.5 py-1 rounded-md text-xs transition-all duration-500 ${i === activeTab ? 'bg-indigo-600/30 text-indigo-300' : 'text-slate-500'}`}>{tab}</span>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </div>
          </div>

          {/* AI layer banner */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-white/8" style={{background: 'linear-gradient(90deg, rgba(124,58,237,0.12), rgba(79,70,229,0.08))'}}>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shrink-0" />
            <span className="text-[11px] text-violet-300 font-semibold">AI Layer active</span>
            <span className="mx-1 text-white/10">|</span>
            {[
              { label: '92% auto-resolved', color: 'text-slate-400' },
              { label: '4.2s avg', color: 'text-slate-400' },
              { label: '500+ agents running', color: 'text-slate-400' },
            ].map(({ label, color }) => (
              <span key={label} className={`text-[10px] font-mono ${color} mr-2`}>{label}</span>
            ))}
          </div>

          {/* 3-pillar metrics row */}
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {[
              { label: 'IT Workflows', value: '89%', sub: 'ITSM · ITOM · SecOps · GRC', color: 'text-green-400', bg: 'bg-green-500/10', activeBg: 'bg-green-500/20', icon: Shield },
              { label: 'Employee WF', value: '4.2s', sub: 'HR · Legal · Finance · Facilities', color: 'text-violet-400', bg: 'bg-violet-500/10', activeBg: 'bg-violet-500/20', icon: Users },
              { label: 'Customer WF', value: '+47%', sub: 'CSM · FSM · Sales · CRM', color: 'text-blue-400', bg: 'bg-blue-500/10', activeBg: 'bg-blue-500/20', icon: TrendingUp },
            ].map(({ label, value, sub, color, bg, activeBg, icon: Icon }, i) => (
              <div key={label} className={`p-4 text-center transition-all duration-500 ${i === activeTab ? 'bg-white/[0.04]' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 transition-all duration-500 ${i === activeTab ? activeBg : bg}`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <div className={`text-xl font-bold transition-all duration-500 ${i === activeTab ? color : 'text-slate-500'}`}>{value}</div>
                <div className={`text-[10px] mt-0.5 transition-all duration-500 ${i === activeTab ? 'text-slate-400' : 'text-slate-600'}`}>{sub}</div>
                {i === activeTab && <div className={`h-0.5 rounded-full mt-2 mx-4 ${color.replace('text-', 'bg-')}`} />}
              </div>
            ))}
          </div>

          {/* Platform adoption bars */}
          <div className="px-4 pt-3 pb-2 border-t border-white/8">
            <div className="text-[10px] text-slate-600 uppercase tracking-widest mb-3 font-medium">Platform adoption</div>
            {[
              { label: 'IT Platform', pct: 95, color: 'bg-green-500' },
              { label: 'Employee Platform', pct: 87, color: 'bg-violet-500' },
              { label: 'Customer Platform', pct: 78, color: 'bg-blue-500' },
            ].map(({ label, pct, color }, i) => (
              <div key={label} className="mb-2.5">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className={`transition-colors duration-500 ${i === activeTab ? 'text-slate-200 font-medium' : 'text-slate-500'}`}>{label}</span>
                  <span className={`font-medium transition-colors duration-500 ${i === activeTab ? 'text-slate-200' : 'text-slate-500'}`}>{pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/8">
                  <div className={`h-full rounded-full ${color} transition-all duration-700 ${i === activeTab ? 'opacity-100' : 'opacity-30'}`} style={{width: `${pct}%`}} />
                </div>
              </div>
            ))}
          </div>

          {/* Live activity feed */}
          <div className="px-4 py-3 border-t border-white/8">
            <div className="text-[10px] text-slate-600 uppercase tracking-widest mb-2.5 font-medium">Live activity</div>
            <div className="space-y-1.5">
              {agentLogs.map((log, i) => (
                <div key={i} className="flex items-center gap-2 transition-all duration-500"
                  style={{opacity: i < shownLogs ? 1 : 0, transform: i < shownLogs ? 'none' : 'translateY(4px)'}}>
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    log.type === 'resolve' ? 'bg-green-400' :
                    log.type === 'predict' ? 'bg-yellow-400' :
                    log.type === 'complete' ? 'bg-cyan-400' : 'bg-blue-400'
                  }`} />
                  <span className="text-[11px] text-slate-400 font-mono flex-1 truncate">{log.action}</span>
                  <span className="text-[10px] text-slate-600 font-mono shrink-0">{log.time}</span>
                  {i < shownLogs && <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/8 bg-white/[0.015]">
            <span className="text-[11px] text-slate-500 font-mono"><span className="text-white font-bold">247</span> events processed today</span>
            <span className="text-[11px] text-green-400 font-mono animate-pulse">● All systems operational</span>
          </div>
        </div>

        {/* Floating accent chips */}
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg animate-float whitespace-nowrap">
          🤖 500+ AI Agents
        </div>
        <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg animate-float whitespace-nowrap" style={{animationDelay: '1.2s'}}>
          ⚡ Full platform · 3 workflow pillars
        </div>
      </div>

    </div>
  </div>
</section>

{/* Stats Strip */}
<section className="bg-white border-y border-gray-100">
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
      {[
        { value: '1,500+', label: 'Successful implementations', icon: Rocket },
        { value: '73 days', label: 'Average go-live time', icon: Timer },
        { value: '75%', label: 'Faster incident resolution', icon: Zap },
        { value: '180%', label: 'Average first-year ROI', icon: TrendingUp },
      ].map(({ value, label, icon: Icon }, i) => (
        <div key={i} className="flex items-center gap-4 py-6 px-6 sm:px-8">
          <Icon className="h-6 w-6 text-indigo-500 flex-shrink-0 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-indigo-600">{value}</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-0.5">{label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Services */}
<section id="services" className="py-20 bg-white">
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block w-8 h-px bg-indigo-600" />
        <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">What we do</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
        One partner.<br />The entire platform.
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        { icon: Rocket, title: 'ServiceNow Implementation', desc: 'Production-ready in 73 days. Proven methodology, pre-built accelerators, zero surprises.', href: '/services/servicenow-implementation', tag: '73-day avg' },
        { icon: Bot, title: 'Agentic AI Automation', desc: 'AI agents that think, act, and resolve incidents autonomously — without a human in the loop.', href: '/services/ai-automation', tag: '500+ agents live' },
        { icon: Users, title: 'CRM & Customer Experience', desc: 'ServiceNow CSM and Sales workflows that convert, retain, and delight customers at scale.', href: '/services/crm-customer-experience', tag: '173% engagement' },
        { icon: Shield, title: 'Managed Services', desc: '24/7 support, proactive optimization, and continuous improvement across your ServiceNow estate.', href: '/services/managed-services-support', tag: '24/7 support' },
        { icon: Layers, title: 'Custom App Development', desc: 'Bespoke ServiceNow applications built to your exact workflows — not the other way around.', href: '/services/custom-apps', tag: 'Fully custom' },
        { icon: TrendingUp, title: 'Digital Transformation', desc: 'End-to-end enterprise transformation programs anchored to measurable ROI and adoption.', href: '/services/digital-transformation', tag: '180% avg ROI' },
      ].map(({ icon: Icon, title, desc, href, tag }) => (
        <a key={title} href={href}
          className="group border border-gray-200 hover:border-indigo-400 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 bg-white"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
              <Icon className="h-5 w-5 text-indigo-600" />
            </div>
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">{tag}</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-2 text-base">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
          <div className="mt-4 flex items-center gap-1 text-indigo-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

{/* AI Capabilities */}
<section className="py-20 relative overflow-hidden" style={{background: '#07071a'}}>
  <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
  <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: 'radial-gradient(ellipse at top right, #7c3aed, transparent 60%)'}} />
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-px bg-violet-500" />
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">AI Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          AI that works<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">while you sleep.</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Our AI practice embeds Now Assist, agentic automation, and generative AI into every ServiceNow deployment — resolving incidents, routing cases, and predicting failures before users notice anything is wrong.
        </p>
        <a href="/services/ai-automation"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10 transition-all text-sm"
        >
          Explore AI Services <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="space-y-4">
        {aiCapabilities.map(({ icon: Icon, title, desc, metric, color }) => (
          <div key={title}
            className="group flex gap-4 p-5 rounded-2xl border border-white/8 hover:border-violet-500/30 transition-all duration-200"
            style={{background: 'rgba(255,255,255,0.03)'}}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              color === 'violet' ? 'bg-violet-500/20' : color === 'indigo' ? 'bg-indigo-500/20' : 'bg-blue-500/20'
            }`}>
              <Icon className={`h-5 w-5 ${
                color === 'violet' ? 'text-violet-400' : color === 'indigo' ? 'text-indigo-400' : 'text-blue-400'
              }`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-white text-sm">{title}</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  color === 'violet' ? 'text-violet-400 bg-violet-500/15' : color === 'indigo' ? 'text-indigo-400 bg-indigo-500/15' : 'text-blue-400 bg-blue-500/15'
                }`}>{metric}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
        <div className="p-5 rounded-2xl border border-white/8" style={{background: 'rgba(255,255,255,0.03)'}}>
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: '500+', label: 'AI Agents live' },
              { value: '4.2s', label: 'Avg resolution' },
              { value: '92%', label: 'Auto-resolved' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center px-4">
                <div className="text-xl font-bold text-white">{value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CRM Excellence */}
<section className="py-20 bg-white border-t border-gray-100">
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left — CRM metrics visual */}
      <div className="relative order-2 lg:order-1">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl" style={{background: '#f8faff'}}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="text-sm font-semibold text-gray-800">ServiceNow CRM</span>
            </div>
            <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Live Pipeline</span>
          </div>

          {/* Funnel metrics */}
          <div className="p-5">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-medium">Conversion funnel</div>
            {[
              { stage: 'Leads captured', count: '2,847', pct: 100, color: 'bg-blue-500' },
              { stage: 'Qualified', count: '1,920', pct: 67, color: 'bg-indigo-500' },
              { stage: 'Proposal sent', count: '984', pct: 35, color: 'bg-violet-500' },
              { stage: 'Closed won', count: '612', pct: 22, color: 'bg-purple-500' },
            ].map(({ stage, count, pct, color }) => (
              <div key={stage} className="mb-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-gray-600">{stage}</span>
                  <span className="text-gray-900 font-semibold">{count}</span>
                </div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div className={`h-full rounded-full ${color} transition-all duration-700`} style={{width: `${pct}%`}} />
                </div>
              </div>
            ))}
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100">
            {[
              { value: '+47%', label: 'Lead conversion', color: 'text-blue-600' },
              { value: '3.1×', label: 'Sales velocity', color: 'text-indigo-600' },
              { value: '91%', label: 'CSAT score', color: 'text-violet-600' },
            ].map(({ value, label, color }) => (
              <div key={label} className="text-center py-4 px-2">
                <div className={`text-lg font-bold ${color}`}>{value}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div className="px-5 py-4 border-t border-gray-100 bg-white">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">Recent activity</div>
            <div className="space-y-2">
              {[
                { event: 'CRM-44901 auto-scored + routed to Sales', time: '2m ago', dot: 'bg-blue-500' },
                { event: 'Case CAS-1042 resolved via self-service', time: '5m ago', dot: 'bg-green-500' },
                { event: 'Renewal alert: Contract CNT-0882 in 14 days', time: '12m ago', dot: 'bg-amber-500' },
              ].map(({ event, time, dot }) => (
                <div key={event} className="flex items-center gap-2.5 text-xs">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
                  <span className="text-gray-600 flex-1 truncate">{event}</span>
                  <span className="text-gray-400 shrink-0">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating accent */}
        <div className="absolute -top-3 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg animate-float whitespace-nowrap">
          📊 Real-time CRM visibility
        </div>
      </div>

      {/* Right — copy */}
      <div className="order-1 lg:order-2 space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-blue-600" />
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">CRM Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            CRM that converts.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Relationships that last.</span>
          </h2>
        </div>
        <p className="text-gray-500 text-lg leading-relaxed">
          We build ServiceNow CRM workflows that close deals faster, resolve cases autonomously, and keep customers for life — with real-time pipeline visibility across every touchpoint.
        </p>
        <div className="space-y-3">
          {[
            { icon: TrendingUp, title: 'Sales Force Automation', desc: 'Lead scoring, opportunity routing, and AI-assisted proposals — all in ServiceNow.' },
            { icon: Users, title: 'Customer Service Management', desc: 'Omnichannel case management with proactive SLA tracking and self-service deflection.' },
            { icon: Activity, title: 'Field Service + Renewals', desc: 'Dispatch automation, contract renewals, and predictive churn prevention built-in.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-0.5">{title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="/services/crm-customer-experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
          style={{background: 'linear-gradient(135deg, #2563eb, #4f46e5)', boxShadow: '0 8px 24px rgba(37,99,235,0.3)'}}
        >
          Explore CRM Services <ArrowRight className="h-4 w-4" />
        </a>
      </div>

    </div>
  </div>
</section>

{/* Industries */}
<section className="py-20 relative overflow-hidden" style={{background: '#07071a'}}>
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-8 h-px bg-indigo-400" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Industries</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for your industry.</h2>
      </div>
      <a href="/industries" className="text-sm text-indigo-400 font-semibold hover:text-indigo-300 shrink-0">View all industries →</a>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {industries.map(({ icon: Icon, name, link }) => (
        <a key={name} href={link}
          className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/8 hover:border-indigo-500/50 transition-all duration-200 hover:-translate-y-0.5"
          style={{background: 'rgba(255,255,255,0.04)'}}
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-500/15 group-hover:bg-indigo-500/25 flex items-center justify-center transition-colors">
            <Icon className="h-6 w-6 text-indigo-400" />
          </div>
          <span className="text-sm font-semibold text-slate-300 group-hover:text-white text-center transition-colors">{name}</span>
        </a>
      ))}
    </div>
  </div>
</section>

{/* Social proof */}
<section className="py-20 bg-white border-t border-gray-100">
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
    <div className="mb-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Client results. Not just promises.</h2>
      <p className="text-gray-500 max-w-xl mx-auto">Every number below is from a real engagement.</p>
    </div>
    <div className="grid lg:grid-cols-3 gap-6 mb-10">
      {[
        { industry: 'Manufacturing', metric: '73% faster incident resolution', context: 'Unified ITSM across 47 legacy systems in 12 weeks.', quote: 'ifBash transformed our chaotic IT landscape. Their methodology saved us months of time.', author: 'David M., CTO' },
        { industry: 'Healthcare', metric: '95% uptime across 23 facilities', context: '100% HIPAA compliance achieved from day one.', quote: 'Zero downtime during our critical 23-location migration. ifBash made it look effortless.', author: 'Sarah C., VP Operations' },
        { industry: 'Financial Services', metric: '100% SOX audit compliance', context: 'Enterprise security controls + automation deployed in 14 weeks.', quote: "Security was our biggest concern. ifBash&apos;s expertise gave us full confidence throughout.", author: 'Michael T., IT Director' },
      ].map(({ industry, metric, context, quote, author }) => (
        <div key={industry} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
          <div className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 mb-4">{industry}</div>
          <div className="text-xl font-bold text-gray-900 mb-2">{metric}</div>
          <p className="text-sm text-gray-500 mb-5">{context}</p>
          <blockquote className="text-sm text-gray-700 italic border-l-2 border-indigo-200 pl-4 mb-3">&ldquo;{quote}&rdquo;</blockquote>
          <div className="text-xs text-gray-400 font-medium">{author}</div>
        </div>
      ))}
    </div>
    <div className="text-center">
      <a href="/company/case-studies-client-success" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline text-sm">
        Read all client stories <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  </div>
</section>

{/* CTA */}
<section className="py-24 relative overflow-hidden" style={{background: '#07071a'}}>
  <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-15 rounded-full pointer-events-none" style={{background: 'radial-gradient(ellipse, #4f46e5, transparent 70%)'}} />
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
    <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-4 py-2 text-indigo-300 text-sm mb-8">
      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      Accepting new clients &middot; 48-hr scoping call
    </div>
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Ready to go live?</h2>
    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
      Tell us about your ServiceNow goals. We&apos;ll scope your implementation in 48 hours and show you exactly how we&apos;d approach it.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/get-started"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5"
        style={{background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 32px rgba(79,70,229,0.4)'}}
      >
        Start Your Project <ArrowRight className="h-5 w-5" />
      </a>
      <a href="/services/servicenow-implementation"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-indigo-500 hover:text-white transition-all text-base"
      >
        Learn about our process
      </a>
    </div>
  </div>
</section>

</div>
</>
);
};