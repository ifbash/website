'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
value: "95%",
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

type AnimatedStats = {
clients: number;
implementations: number;
satisfaction: number;
years: number;
};

export default function Page() {
const [currentTestimonial, setCurrentTestimonial] = useState(0);
const [isVisible, setIsVisible] = useState({});
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

<div className="min-h-screen bg-gray-50">
{/* SEO Meta Tags */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ifBash - ServiceNow Implementation Specialists",
      "url": "https://ifbash.com",
      "description": "ServiceNow implementation specialists with multiple successful projects. Proven expertise in AI-powered solutions, CRM excellence, and digital transformation for enterprises worldwide.",
      "serviceArea": "Global",
      "expertise": ["ServiceNow Implementation", "CRM Solutions", "Digital Transformation", "Process Automation"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    })
  }}
/>

{/* Hero Section */}
<section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-700/20 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-700/20 via-transparent to-transparent" />
  </div>

  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="text-gray-50 space-y-8">
        {/* Trust Badges - Single Line, improved mobile spacing */}
        <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-gray-50 border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3">
            ✓ ServiceNow Consulting
          </Badge>
          <Badge className="bg-gradient-to-r from-indigo-500 to-blue-600 text-gray-50 border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3">
            ✓ AI & CRM
          </Badge>
          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-50 border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3">
            ✓ Enterprise Grade
          </Badge>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
          Transform with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 font-semibold">
            ServiceNow
          </span>
          <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4">
            Smarter with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 font-semibold">
              AI
            </span>
            <br></br>Stronger with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
              CRM
            </span>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
          Unlock ServiceNow&apos;s new era—where <span className="font-semibold text-cyan-300">AI-driven automation</span> and <span className="font-semibold text-blue-300">CRM excellence</span> are at the core.
        </p>

        {/* Quick Stats - Integrated in Hero with improved mobile layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 px-2 sm:px-0">
          <div className="group bg-gradient-to-br from-violet-600/20 via-indigo-600/20 to-blue-600/20 hover:from-violet-600/30 hover:via-indigo-600/30 hover:to-blue-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-violet-400/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400">75%</div>
            <div className="text-xs sm:text-sm text-violet-100">Faster Resolution</div>
          </div>
          <div className="group bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-teal-600/20 hover:from-blue-600/30 hover:via-cyan-600/30 hover:to-teal-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-blue-400/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">24/7</div>
            <div className="text-xs sm:text-sm text-blue-100">Expert Support</div>
          </div>
          <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20 hover:from-emerald-600/30 hover:via-teal-600/30 hover:to-cyan-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-emerald-400/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">180%</div>
            <div className="text-xs sm:text-sm text-emerald-100">Average ROI</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
          <Link href="/get-started"
           className="inline-flex group items-center justify-center px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                    }}
          >
            <span className="relative flex items-center justify-center">
              Engage Our AI - CRM Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          
          <Link href="company/about-us"
            className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-50 rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-50/0 via-gray-50/5 to-gray-50/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <span className="relative flex items-center justify-center">
              Know More About Us
            </span>
          </Link>
        </div>
      </div>

      {/* Right Side Visual Content */}
      <div className="relative lg:h-[600px]">
        {/* Main Platform Visual */}
        <div className="relative z-20 bg-gradient-to-br max-h-[380px] from-indigo-500/15 to-blue-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20">
          <div className="aspect-video w-full rounded-xl overflow-hidden max-h-[316px]">
            <PlaceholderImage
              title="ServiceNow AI+CRM Platform Dashboard"
              className="w-full h-full object-cover"
              gradient="from-indigo-600 to-blue-600"
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 animate-float">
            <PlaceholderImage
              title="AI Analytics"
              className="w-full h-full object-cover rounded-xl"
              gradient="from-indigo-600 to-pink-600"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 animate-float delay-150">
            <PlaceholderImage
              title="CRM Insights"
              className="w-full h-full object-cover rounded-xl"
              gradient="from-blue-600 to-cyan-600"
            />
          </div>
        </div>

        {/* Quick Feature Cards */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto -mt-40">
            {/* Stats-like cards - 2 rows of 3 */}
            <div className="h-20 sm:h-24 bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-indigo-500/30 backdrop-blur-sm rounded-xl p-3 border border-violet-400/30 flex flex-col items-center justify-center hover:from-violet-500/40 hover:to-indigo-500/40 transition-all duration-300">
              <Shield className="h-6 w-6 text-violet-200 mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Certified</div>
              <div className="text-xs sm:text-sm text-violet-100">Pros</div>
            </div>
            
            <div className="h-20 sm:h-24 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-teal-500/30 backdrop-blur-sm rounded-xl p-3 border border-blue-400/30 flex flex-col items-center justify-center hover:from-blue-500/40 hover:to-teal-500/40 transition-all duration-300">
              <Award className="h-6 w-6 text-blue-200 mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Proven</div>
              <div className="text-xs sm:text-sm text-blue-100">Track</div>
            </div>
            
            <div className="h-20 sm:h-24 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-green-500/30 backdrop-blur-sm rounded-xl p-3 border border-emerald-400/30 flex flex-col items-center justify-center hover:from-emerald-500/40 hover:to-green-500/40 transition-all duration-300">
              <Users className="h-6 w-6 text-emerald-200 mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">Global</div>
              <div className="text-xs sm:text-sm text-emerald-100">Team</div>
            </div>

            <div className="h-20 sm:h-24 bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-pink-500/30 backdrop-blur-sm rounded-xl p-3 border border-fuchsia-400/30 flex flex-col items-center justify-center hover:from-fuchsia-500/40 hover:to-pink-500/40 transition-all duration-300">
              <Bot className="h-6 w-6 text-fuchsia-200 mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">AI</div>
              <div className="text-xs sm:text-sm text-fuchsia-100">Powered</div>
            </div>
            
            <div className="h-20 sm:h-24 bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-yellow-500/30 backdrop-blur-sm rounded-xl p-3 border border-orange-400/30 flex flex-col items-center justify-center hover:from-orange-500/40 hover:to-yellow-500/40 transition-all duration-300">
              <Zap className="h-6 w-6 text-orange-200 mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Fast</div>
              <div className="text-xs sm:text-sm text-orange-100">Setup</div>
            </div>
            
            <div className="h-20 sm:h-24 bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-indigo-500/30 backdrop-blur-sm rounded-xl p-3 border border-sky-400/30 flex flex-col items-center justify-center hover:from-sky-500/40 hover:to-indigo-500/40 transition-all duration-300">
              <Users className="h-6 w-6 text-sky-200 mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">CRM</div>
              <div className="text-xs sm:text-sm text-sky-100">Ready</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Key Benefits Section - Gradient Themed */}
<section className="py-6 md:py-10 bg-gray-50 relative overflow-hidden">
<div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
          Why Global Leaders Choose Our ServiceNow Expertise
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Proven ServiceNow methodologies with measurable results and transparent pricing  
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      <div className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-blue-500 text-gray-50 shadow-xl transform hover:scale-105 transition-all duration-300">
        <Rocket className="h-8 w-8 sm:h-10 sm:w-10 mb-4 mx-auto text-gray-50" />
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">10x Faster Implementation</h3>
        <p className="text-blue-100 text-sm sm:text-base">Launch ServiceNow AI+CRM in record time with our automation-driven project accelerators.</p>
      </div>
      
      <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-600 to-green-500 text-gray-50 shadow-xl transform hover:scale-105 transition-all duration-300">
        <Brain className="h-8 w-8 sm:h-10 sm:w-10 mb-4 mx-auto text-gray-50" />
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">AI-First Approach</h3>
        <p className="text-cyan-100 text-sm sm:text-base">Leverage built-in ServiceNow AI features and workflows trained on real enterprise data.</p>
      </div>
      
      <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-600 via-teal-500 to-emerald-500 text-gray-50 shadow-xl transform hover:scale-105 transition-all duration-300 sm:col-span-2 md:col-span-1">
        <Target className="h-8 w-8 sm:h-10 sm:w-10 mb-4 mx-auto text-gray-50" />
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Guaranteed Measurable ROI</h3>
        <p className="text-teal-100 text-sm sm:text-base">Average 180% ROI within your first year through digital process optimization.</p>
      </div>
    </div>
  </div>
</section>

{/* Enhanced Why Choose Us Section - Gradient Stats */}
<section className="py-6 md:py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-gray-50 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-10" />
  
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
          Proven Results That Matter
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
        Join forward-thinking organizations that trust our ServiceNow expertise to drive measurable transformation
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      <div className="text-center p-3 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-pink-600 border border-indigo-400/20 shadow-xl">
        <Zap className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-4 text-gray-50" />
        <div className="text-2xl sm:text-3xl font-bold text-gray-50 mb-2">75%</div>
        <div className="text-sm sm:text-lg font-semibold text-indigo-100 mb-2">Faster Resolution</div>
        <p className="text-indigo-100 text-xs sm:text-sm">AI-powered automation reduces incident resolution time</p>
      </div>
      
      <div className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 border border-blue-400/20 shadow-xl">
        <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-4 text-gray-50" />
        <div className="text-2xl sm:text-3xl font-bold text-gray-50 mb-2">60%</div>
        <div className="text-sm sm:text-lg font-semibold text-blue-100 mb-2">Cost Reduction</div>
        <p className="text-blue-100 text-xs sm:text-sm">Streamlined processes cut operational costs</p>
      </div>
      
      <div className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-cyan-600 via-green-500 to-emerald-600 border border-cyan-400/20 shadow-xl">
        <Bot className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-4 text-gray-50" />
        <div className="text-2xl sm:text-3xl font-bold text-gray-50 mb-2">24/7</div>
        <div className="text-sm sm:text-lg font-semibold text-cyan-100 mb-2">Expert Support</div>
        <p className="text-cyan-100 text-xs sm:text-sm">Round-the-clock intelligent assistance</p>
      </div>
      
      <div className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-green-600 via-teal-500 to-blue-600 border border-green-400/20 shadow-xl">
        <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-4 text-gray-50" />
        <div className="text-2xl sm:text-3xl font-bold text-gray-50 mb-2">180%</div>
        <div className="text-sm sm:text-lg font-semibold text-green-100 mb-2">Average ROI</div>
        <p className="text-green-100 text-xs sm:text-sm">Typical return on ServiceNow investment</p>
      </div>
    </div>
  </div>
</section>

{/* Core Services Section - Enhanced Gradients */}
<section id="services" className="py-5 md:py-8 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-100/30 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/30 via-transparent to-transparent" />
  </div>

  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
    <div className="text-center mb-8">
                  
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
        Transform Your Enterprise with{' '}
        <br></br>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
          ServiceNow Intelligence
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Harness the power of ServiceNow to drive innovation, enhance customer experiences, and accelerate digital transformation
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
      {services.map((service, index) => (
        <div 
          key={index}
          className="group text-center p-3 sm:p-4 rounded-2xl transition-all duration-500 relative overflow-hidden transform hover:scale-[1.02]"
          style={{
            background: index === 0 
              ? 'linear-gradient(135deg, rgba(238, 242, 255, 0.9), rgba(224, 231, 255, 0.9), rgba(199, 210, 254, 0.9))'
              : index === 1
              ? 'linear-gradient(135deg, rgba(236, 254, 255, 0.9), rgba(224, 242, 254, 0.9), rgba(219, 234, 254, 0.9))'
              : 'linear-gradient(135deg, rgba(236, 254, 252, 0.9), rgba(207, 250, 254, 0.9), rgba(219, 234, 254, 0.9))',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'
          }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"
                style={{
                  background: index === 0 
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
                    : index === 1
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))'
                    : 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
                  backdropFilter: 'blur(8px)'
                }}
          ></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 3s infinite linear',
                }}
          ></div>

          {/* Floating metric badge */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 py-1.5 rounded-full text-xs font-semibold transform group-hover:scale-110 transition-all duration-300"
                style={{
                  background: index === 0 
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.15))'
                    : index === 1
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))'
                    : 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(6, 182, 212, 0.15))',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.2)'
                }}
          >
            <span className={`${
              index === 0 
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600' :
              index === 1 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
              'bg-gradient-to-r from-cyan-600 to-teal-600'
            } bg-clip-text text-transparent font-bold`}>{service.metric}</span>
          </div>

          {/* Icon container with moondust theme gradient */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6">
            {/* Glowing background effect */}
            <div className={`absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                  style={{
                    background: index === 0 
                      ? 'linear-gradient(135deg, #6c28d9, #3b82f6, #26a3d9)'
                      : index === 1
                      ? 'linear-gradient(135deg, #4f46e5, #3b82f6, #6c28d9)'
                      : 'linear-gradient(135deg, #3b82f6, #6c28d9, #4f46e5)'
                  }}
            ></div>
            
            {/* Main icon container */}
            <div className={`relative w-full h-full rounded-2xl p-4 sm:p-5 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
                  style={{
                    background: index === 0 
                      ? 'linear-gradient(135deg, rgba(108, 40, 217, 0.95), rgba(59, 130, 246, 0.95), rgba(38, 163, 217, 0.95))'
                      : index === 1
                      ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.95), rgba(59, 130, 246, 0.95), rgba(108, 40, 217, 0.95))'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(108, 40, 217, 0.95), rgba(79, 70, 229, 0.95))',
                    boxShadow: '0 8px 20px rgba(108, 40, 217, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.15)'
                  }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.15) 50%, transparent 75%)',
                      backgroundSize: '200% 200%',
                      animation: 'shimmer 3s infinite linear'
                    }}
              ></div>
              
              {/* Icon */}
              <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white relative z-10 transform group-hover:rotate-3 transition-transform duration-300" />
            </div>
          </div>

          {/* Content with gradient text */}
          <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent transition-colors duration-300 ${
            index === 0 
              ? 'bg-gradient-to-r from-indigo-700 to-blue-700'
              : index === 1
              ? 'bg-gradient-to-r from-blue-700 to-cyan-700'
              : 'bg-gradient-to-r from-cyan-700 to-teal-700'
          }`}>{service.title}</h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>
          
          <div className="space-y-3">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-left group/item">
                <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-br from-indigo-100 to-blue-100 group-hover/item:from-indigo-200 group-hover/item:to-blue-200'
                    : index === 1
                    ? 'bg-gradient-to-br from-blue-100 to-cyan-100 group-hover/item:from-blue-200 group-hover/item:to-cyan-200'
                    : 'bg-gradient-to-br from-cyan-100 to-teal-100 group-hover/item:from-cyan-200 group-hover/item:to-teal-200'
                }`}>
                  <CheckCircle className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    index === 0 ? 'text-indigo-600' :
                    index === 1 ? 'text-blue-600' :
                    'text-cyan-600'
                  }`} />
                </div>
                <span className="text-gray-600 text-xs sm:text-sm md:text-base group-hover/item:text-gray-800 transition-colors duration-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ServiceNow AI Innovation Section */}
<section className="py-5 md:py-8 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-gray-50 overflow-hidden relative">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
  </div>
  
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
          ServiceNow AI Excellence
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
        Step into the future with ServiceNow&apos;s cutting-edge AI capabilities. From predictive analytics 
        to intelligent automation, we help you harness AI to transform every aspect of your business.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-center mb-8">
      <div className="space-y-2 sm:space-y-4 md:space-y-5">
        <div className="p-2 sm:p-3 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-indigo-600/20 backdrop-blur-sm border border-gray-300/20 hover:from-indigo-600/30 hover:to-indigo-600/30 transition-all duration-300">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-gray-50" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Predictive Intelligence</h4>
              <p className="text-blue-200 leading-relaxed text-sm sm:text-base">
                Anticipate issues before they occur with ML-powered predictive analytics that learn from your data patterns and implementations.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-gray-300/20 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-gray-50" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Virtual Agents</h4>
              <p className="text-blue-200 leading-relaxed text-sm sm:text-base">
                Deploy intelligent virtual agents with pre-trained industry knowledge that provide instant, personalized support across all channels.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2.5 sm:p-4 rounded-2xl bg-gradient-to-r from-cyan-600/20 to-teal-600/20 backdrop-blur-sm border border-gray-300/20 hover:from-cyan-600/30 hover:to-teal-600/30 transition-all duration-300">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-gray-50" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Intelligent Automation</h4>
              <p className="text-blue-200 leading-relaxed text-sm sm:text-base">
                Automate complex workflows with AI that adapts and learns, reducing manual tasks by up to 80% with built-in optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-square w-11/12 mx-auto rounded-3xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-sm border border-gray-300/20 flex items-center justify-center">
          <div className="w-2/3 h-2/3 rounded-2xl bg-gradient-to-br from-gray-50/10 to-gray-50/5 backdrop-blur-lg border border-gray-300/30 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 flex items-center justify-center">
                <Cpu className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-gray-50 animate-pulse" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">AI-Powered Platform</h3>
              <p className="text-blue-200 text-sm sm:text-base">Next-generation intelligence</p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center animate-bounce">
          <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-50" />
        </div>
        <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center animate-bounce delay-1000">
          <Rocket className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-50" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Advanced AI & Automation Hub Section */}
<section className="py-10 md:py-14 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/5 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
  </div>

  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
    <div className="text-center mb-12">
                  
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        The Future of Work with
        <span className="block mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">
          Intelligent Automation
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Harness the power of ServiceNow&apos;s advanced AI capabilities with Generative AI, Agentic AI, and intelligent automation
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* Generative AI Card */}
      <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center mb-6">
            <Brain className="h-6 w-6 text-white" />
          </div>
          
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Generative AI Solutions
          </h3>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-violet-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">AI-powered generation for knowledge bases</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-violet-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Automated ticket classification and routing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-violet-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Smart recommendations for service catalog</span>
            </li>
          </ul>

          <div className="bg-violet-50 rounded-xl p-4">
            <div className="font-semibold text-violet-600 mb-1">Success Metric</div>
            <div className="text-2xl font-bold text-violet-700">85% Faster</div>
            <div className="text-sm text-violet-600">Content Creation & Response Time</div>
          </div>
        </div>
      </div>

      {/* Agentic AI Card */}
      <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-6">
            <Bot className="h-6 w-6 text-white" />
          </div>
          
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Agentic AI Automation
          </h3>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-indigo-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Autonomous workflow orchestration</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-indigo-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Self-optimizing process automation</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-indigo-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Proactive issue resolution</span>
            </li>
          </ul>

          <div className="bg-indigo-50 rounded-xl p-4">
            <div className="font-semibold text-indigo-600 mb-1">Success Metric</div>
            <div className="text-2xl font-bold text-indigo-700">92% Reduced</div>
            <div className="text-sm text-indigo-600">Manual Interventions</div>
          </div>
        </div>
      </div>

      {/* Intelligent CRM Card */}
      <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
            <Users className="h-6 w-6 text-white" />
          </div>
          
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            AI-Powered CRM
          </h3>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Predictive customer insights</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Intelligent lead scoring & routing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Automated relationship management</span>
            </li>
          </ul>

          <div className="bg-blue-50 rounded-xl p-4">
            <div className="font-semibold text-blue-600 mb-1">Success Metric</div>
            <div className="text-2xl font-bold text-blue-700">173% Higher</div>
            <div className="text-sm text-blue-600">Customer Engagement</div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature Comparison Grid */}
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          ServiceNow + AI Integration Benefits
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-800">Smart Automation</div>
              <div className="text-sm text-gray-600">Reduce manual tasks by up to 85% with AI-driven workflows</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-800">Predictive Intelligence</div>
              <div className="text-sm text-gray-600">Anticipate issues before they occur with 94% accuracy</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-800">Real-time Optimization</div>
              <div className="text-sm text-gray-600">Continuous improvement with self-learning algorithms</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Implementation Success Metrics
        </h3>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">AI Adoption Rate</span>
            </div>
            <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[95%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </div>
            <span className="text-blue-600 font-semibold">95%</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Accuracy Rate</span>
            </div>
            <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[98%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </div>
            <span className="text-blue-600 font-semibold">98%</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Time Saved</span>
            </div>
            <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </div>
            <span className="text-blue-600 font-semibold">85%</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <Award className="h-5 w-5 text-blue-500" />
            <span className="font-semibold text-gray-800">ROI Achievement</span>
          </div>
          <p className="text-sm text-gray-600">
            Clients achieve an average of 180% ROI within 12 months of implementing our AI solutions
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CRM Excellence Section */}
<section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-gray-50 relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/10 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent" />
  </div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
          ServiceNow CRM
        </span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
          That Drives Results
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-50 mb-6 leading-relaxed font-light">
          Transform customer relationships with our advanced ServiceNow CRM solutions. 
          Create meaningful connections, streamline sales processes, and deliver exceptional customer experiences with proven methodologies.
        </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
      <div>
        <div className="space-y-6 sm:space-y-8 mb-8">
          <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-indigo-900/50 to-blue-900/50 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-50" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">360° Customer Intelligence</h4>
              <p className="text-gray-50 text-sm sm:text-base leading-relaxed">Complete customer journey mapping with AI-powered insights, predictive analytics, and automated lead scoring.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-50" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Omnichannel Excellence</h4>
              <p className="text-gray-50 text-sm sm:text-base leading-relaxed">Seamless customer interactions across all touchpoints with unified communication and real-time dashboard.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-indigo-900/50 to-violet-900/50 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-50" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">Sales Automation</h4>
              <p className="text-gray-50 text-sm sm:text-base leading-relaxed">Intelligent lead scoring, automated workflows, and personalized engagement strategies with measurable ROI tracking.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* CRM Dashboard Mockup */}
        <div className="bg-gray-50 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-3 sm:p-4 text-gray-50">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold">ServiceNow CRM Dashboard</h3>
            <p className="text-indigo-100 text-xs sm:text-sm">Real-time ROI tracking</p>
          </div>
          
          <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-50" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Lead Conversion</p>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-700">This quarter</p>
                </div>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">+47%</div>
            </div>

            <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-50" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Customer Satisfaction</p>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-700">Average score</p>
                </div>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">4.8/5</div>
            </div>

            <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 bg-gradient-to-r from-indigo-50 to-indigo-50 rounded-xl border border-indigo-100">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-50" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Revenue Growth</p>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-700">Year over year</p>
                </div>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent">+156%</div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-gray-50 font-bold text-xs sm:text-sm md:text-lg shadow-xl animate-pulse">
          24/7
        </div>
        <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-gray-50 font-bold text-xs sm:text-sm md:text-lg shadow-xl animate-pulse">
          CRM
        </div>
      </div>
    </div>
  </div>
</section>

{/* Industries We Serve - RESPONSIVE FIX: Better mobile scrolling */}
<section className="py-5 md:py-8 bg-gray-50 relative overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
    <div className="text-center mb-8">
                  
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Transforming
        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
          Every Industry
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Deep domain expertise combined with ServiceNow excellence to deliver industry-specific transformations
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
      {/* Left side - Interactive Industry Showcase */}
      <div className="relative h-[320px] sm:h-[400px] lg:h-[480px] bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        
        {/* Industry Stats Overlay
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div className="bg-gradient-to-r from-indigo-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-indigo-400/20">
                <div className="text-2xl sm:text-3xl font-bold text-gray-50">Many</div>
                <div className="text-indigo-200 text-sm sm:text-base">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-blue-400/20">
                <div className="text-2xl sm:text-3xl font-bold text-gray-50">Many</div>
                <div className="text-blue-200 text-sm sm:text-base">Industries Served</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Right side - Industry Cards - RESPONSIVE FIX: Better mobile scrolling */}
      <div className="space-y-2 sm:space-y-3 overflow-y-auto max-h-[320px] sm:max-h-[400px] lg:max-h-[480px] pr-2 sm:pr-3" 
            style={{ 
              scrollbarWidth: 'thin', 
              scrollbarColor: '#9333ea #f3f4f6',
              WebkitOverflowScrolling: 'touch'
            }}>
        {industries.map((industry, index) => (
          <a
            key={index}
            href={industry.link}
            className="group flex bg-gradient-to-r from-gray-50 to-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200 touch-manipulation"
          >
            <div className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 bg-gradient-to-br ${industry.gradient} p-3 sm:p-4 md:p-6 flex items-center justify-center`}>
              <industry.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-gray-50 transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <div className="flex-1 p-3 sm:p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                  {industry.name}
                </h3>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-semibold bg-gradient-to-r from-indigo-100 to-blue-100 px-2 py-1 rounded-full text-indigo-700">
                    {industry.metric}
                  </span>
                  <span className="text-[10px] text-gray-500">Last 12 months</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-2 mb-3">{industry.description}</p>
              <div className="flex flex-wrap gap-2">
                {industry.tags?.map((tag, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="w-8 sm:w-10 md:w-12 flex items-center justify-center">
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Enterprise Solutions Comparison Section */}
<section className="py-10 md:py-14 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-gray-50 relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/10 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent" />
  </div>

  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
    <div className="text-center mb-8">

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
          Why ServiceNow Leads Innovation
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
        Compare how ServiceNow transforms enterprise operations compared to traditional solutions
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 items-center">
      {/* Traditional Solutions Card */}
      <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-3 border border-gray-700 backdrop-blur-sm">
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
          <Settings className="h-3 w-3 text-gray-400" />
        </div>
        
        <h3 className="text-lg font-bold mb-4 text-gray-300">Traditional Solutions</h3>
        
        <ul className="space-y-3 min-h-[160px]">
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
              <span className="text-gray-400 text-xs">✕</span>
            </div>
            <span className="text-gray-400">Siloed systems requiring multiple integrations</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
              <span className="text-gray-400 text-sm">✕</span>
            </div>
            <span className="text-gray-400">Manual workflows and processes</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
              <span className="text-gray-400 text-sm">✕</span>
            </div>
            <span className="text-gray-400">Limited visibility and reporting</span>
          </li>
        </ul>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="text-gray-400 text-xs">Average Implementation Time</div>
          <div className="text-lg font-bold text-gray-300">12+ months</div>
        </div>
      </div>

      {/* ServiceNow Solutions Card */}
      <div className="relative bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-2xl p-4 border border-indigo-500/30 backdrop-blur-sm h-full">
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
          <Star className="h-3 w-3 text-white" />
        </div>
        
        <h3 className="text-lg font-bold mb-4 text-cyan-300">ServiceNow Platform</h3>
        
        <ul className="space-y-3 min-h-[160px]">
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
              <CheckCircle className="h-2.5 w-2.5 text-white" />
            </div>
            <span className="text-blue-100">Unified platform with seamless integration</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
              <CheckCircle className="h-3 w-3 text-white" />
            </div>
            <span className="text-blue-100">AI-powered automation and workflows</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
              <CheckCircle className="h-3 w-3 text-white" />
            </div>
            <span className="text-blue-100">Real-time insights and analytics</span>
          </li>
        </ul>

        <div className="mt-3 pt-3 border-t border-indigo-500/30">
          <div className="text-blue-200 text-xs">Average Implementation Time</div>
          <div className="text-lg font-bold text-cyan-300">90 days</div>
        </div>
      </div>

      {/* Future-Ready Solutions Card */}
      <div className="relative bg-gradient-to-br from-cyan-600/20 to-teal-600/20 rounded-2xl p-4 border border-cyan-500/30 backdrop-blur-sm h-full">
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
          <Rocket className="h-3 w-3 text-white" />
        </div>
        
        <h3 className="text-lg font-bold mb-4 text-cyan-300">Future-Ready Benefits</h3>
        
        <ul className="space-y-3 min-h-[160px]">
          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
              <Bot className="h-3 w-3 text-white" />
            </div>
            <span className="text-blue-100">Advanced AI and ML capabilities</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <span className="text-blue-100">Continuous innovation and updates</span>
          </li>
          <li className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
              <Shield className="h-3 w-3 text-white" />
            </div>
            <span className="text-blue-100">Enterprise-grade security</span>
          </li>
        </ul>

        <div className="mt-3 pt-3 border-t border-cyan-500/30">
          <div className="text-blue-200 text-xs">Innovation Cycle</div>
          <div className="text-lg font-bold text-cyan-300">Continuous</div>
        </div>
      </div>
    </div>

    {/* Key Metrics Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl p-6 border border-indigo-500/20 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-300">180%</div>
            <div className="text-blue-200">ROI</div>
          </div>
        </div>
        <p className="text-blue-100 text-sm">Average return on investment within first year</p>
      </div>

      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-300">85%</div>
            <div className="text-blue-200">Automation</div>
          </div>
        </div>
        <p className="text-blue-100 text-sm">Tasks automated through AI and ML</p>
      </div>

      <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-300">99%</div>
            <div className="text-blue-200">Satisfaction</div>
          </div>
        </div>
        <p className="text-blue-100 text-sm">Customer satisfaction rate</p>
      </div>

      <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-xl p-6 border border-teal-500/20 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-300">24/7</div>
            <div className="text-blue-200">Support</div>
          </div>
        </div>
        <p className="text-blue-100 text-sm">Enterprise-grade support and security</p>
      </div>
    </div>
  </div>
</section>

{/* Client Testimonials - RESPONSIVE FIX: Better image handling and touch targets */}
<section className="py-10 md:py-14 bg-gradient-to-br from-gray-50 to-blue-50/50 text-gray-900 relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/5 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
  </div>
  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
          Client Success Stories
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Discover how we&apos;ve helped organizations achieve remarkable transformations with ServiceNow
      </p>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <Quote className="absolute top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-indigo-500 opacity-50" />
        
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-6 sm:mb-8 italic px-2 sm:px-0">
            &ldquo;{testimonials[currentTestimonial].content}&rdquo;
          </p>
          
          <div className="flex items-center justify-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm sm:text-base overflow-hidden shadow-lg">
              {testimonials[currentTestimonial].image.startsWith('http') ? (
                <Image 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('');
                    }
                  }}
                />
              ) : (
                testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')
              )}
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800">{testimonials[currentTestimonial].name}</h4>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm md:text-base">{testimonials[currentTestimonial].title}</p>
              <p className="text-xs sm:text-sm text-gray-600">{testimonials[currentTestimonial].company}</p>
            </div>
          </div>

          <div className="flex justify-center space-x-1 mt-4 sm:mt-6">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 fill-current" />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Navigation - RESPONSIVE FIX: Larger touch targets */}
      <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full transition-all duration-300 touch-manipulation transform hover:scale-110 ${
              currentTestimonial === index 
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 w-6 sm:w-8 shadow-lg' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

{/* Enhanced Call-to-Action Section */}
<section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
  <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
      What&apos;s Holding Back{" "}
    </span>
    <span className="text-gray-50">Your Growth Today?</span>
  </h2>
  {/* Animated background elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(99,102,241,0.15)_0%,_transparent_50%)]" />
    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />
    <div className="absolute inset-0 bg-grid-pattern opacity-5" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
  </div>

  <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
      
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* Left content */}
      <div className="text-center lg:text-left">

        

        <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
Tell us your top priority, and we’ll show how ServiceNow can accelerate results in just weeks. Choose your focus area:          </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
          <button className="group flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 backdrop-blur-sm hover:from-indigo-500/20 hover:to-blue-500/20 transition-all duration-300 text-left">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Timer className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-50 mb-1">Faster Response Times</h3>
              <p className="text-sm text-blue-200">&ldquo;Delivering answers in record time&rdquo;</p>
            </div>
          </button>

          <button className="group flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 text-left">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-50 mb-1">Optimized Operational Costs</h3>
              <p className="text-sm text-blue-200">&ldquo;Streamlined operations for maximum efficiency&rdquo;</p>
            </div>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
          <button className="group flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm hover:from-cyan-500/20 hover:to-teal-500/20 transition-all duration-300 text-left">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-50 mb-1">Enhanced Team Collaboration</h3>
              <p className="text-sm text-blue-200">&ldquo;Teams working smarter, together&rdquo;</p>
            </div>
          </button>

          <button className="group flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 backdrop-blur-sm hover:from-violet-500/20 hover:to-purple-500/20 transition-all duration-300 text-left">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-50 mb-1">AI-Powered Workflows</h3>
              <p className="text-sm text-blue-200">&ldquo;Smarter workflows driving better results&rdquo;</p>
            </div>
          </button>

          <div className="sm:col-span-2">
            <Link  href="/get-started"
              className="inline-flex items-center w-full justify-center px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                    }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-shimmer" />
              <span className="relative flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Let&apos;s Solve Your Challenge Together
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right content - Stats & Guarantees */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Main image/chart container */}
          <div className="relative bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-sm border border-indigo-500/20">
            <div className="w-full rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Solution outcomes */}
                <div className="space-y-3">
                  {['Response Time', 'Cost Reduction', 'Team Productivity', 'Customer Satisfaction'].map((metric, index) => (
                    <div key={index} className={`group p-3 rounded-xl relative overflow-hidden border border-indigo-500/20 backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl ${index === 0 ? 'bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-blue-500/10 hover:from-violet-500/20 hover:via-indigo-500/20 hover:to-blue-500/20' : index === 1 ? 'bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 hover:from-blue-500/20 hover:via-cyan-500/20 hover:to-teal-500/20' : index === 2 ? 'bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 hover:from-emerald-500/20 hover:via-teal-500/20 hover:to-cyan-500/20' : 'bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 hover:from-indigo-500/20 hover:via-blue-500/20 hover:to-cyan-500/20'}`}>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
                      <div className="flex items-center justify-between mb-1">
                        <div className={`text-xl sm:text-2xl font-bold text-transparent bg-clip-text ${
                          index === 0 
                            ? 'bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400'
                            : index === 1
                            ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400'
                            : index === 2
                            ? 'bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400'
                            : 'bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400'
                        } group-hover:scale-105 transition-transform duration-300`}>
                          <span className="animate-gradient-xy">{['4hr → 10min', '-65%', '+89%', '97%'][index]}</span>
                        </div>
                      </div>
                      <div className={`text-sm font-medium ${
                        index === 0
                          ? 'text-fuchsia-200'
                          : index === 1
                          ? 'text-teal-200'
                          : index === 2
                          ? 'text-indigo-200'
                          : 'text-orange-200'
                      }`}>{metric}</div>
                      <div className={`text-xs mt-1 opacity-75 group-hover:opacity-100 transition-opacity duration-300 ${
                        index === 0
                          ? 'text-fuchsia-200/90'
                          : index === 1
                          ? 'text-teal-200/90'
                          : index === 2
                          ? 'text-indigo-200/90'
                          : 'text-orange-200/90'
                      }`}>
                        {['Average ticket resolution', 'Operational expenses', 'Daily tasks completed', 'Client feedback score'][index]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Implementation timeline */}
                <div className="relative h-full">
                  <div className="space-y-3">
{['AI-Powered Case Resolution', 'Agentic AI Workflow Automation', 'CRM Lead Conversion Boost'].map((metric, index) => (
<div
  key={index}
  className={`group p-3 rounded-xl relative overflow-hidden border border-indigo-500/20 backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl ${
    index === 0
      ? 'bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-blue-500/10 hover:from-violet-500/20 hover:via-indigo-500/20 hover:to-blue-500/20'
      : index === 1
      ? 'bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 hover:from-emerald-500/20 hover:via-teal-500/20 hover:to-cyan-500/20'
      : 'bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 hover:from-blue-500/20 hover:via-indigo-500/20 hover:to-violet-500/20'
  }`}
>
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
  <div className="flex items-center justify-between mb-1">
    <div
      className={`text-xl sm:text-2xl font-bold text-transparent bg-clip-text ${
        index === 0
          ? 'bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400'
          : index === 1
          ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400'
          : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400'
      } group-hover:scale-105 transition-transform duration-300`}
    >
      <span className="animate-gradient-xy">
        {['↑ 68%', '↑ 75%', '↑ 40%'][index]}
      </span>
    </div>
  </div>
  <div
    className={`text-sm font-medium ${
      index === 0
        ? 'text-fuchsia-200'
        : index === 1
        ? 'text-teal-200'
        : 'text-indigo-200'
    }`}
  >
    {metric}
  </div>
  <div
    className={`text-xs mt-1 opacity-75 group-hover:opacity-100 transition-opacity duration-300 ${
      index === 0
        ? 'text-fuchsia-200/90'
        : index === 1
        ? 'text-teal-200/90'
        : 'text-indigo-200/90'
    }`}
  >
    {[
      'Cases resolved instantly via AI-driven recommendations',
      'Processes automated by autonomous agentic AI',
      'Improved deal closures with AI-assisted insights'
    ][index]}
  </div>
</div>
))}
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .touch-manipulation {
    touch-action: manipulation;
  }
  
  @keyframes gradient-xy {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    .animate-gradient-xy {
      animation: gradient-xy 15s ease infinite;
      background-size: 200% auto;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }      /* Custom scrollbar styles for WebKit browsers */
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  
  .scrollbar-thumb-purple-600::-webkit-scrollbar-thumb {
    background-color: #9333ea;
    border-radius: 3px;
  }
  
  .scrollbar-track-gray-200::-webkit-scrollbar-track {
    background-color: #f3f4f6;
    border-radius: 3px;
  }
`}</style>
</div>
</>
);
};
