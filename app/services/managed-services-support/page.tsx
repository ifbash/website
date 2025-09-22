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
Music,
MessageCircle,
Wrench,
Clock,
Gauge,
Network,
Sync,
CloudArrowDown,
ServerStack,
Search,
ChevronDown,
Compass,
Map,
Route,
Navigation,
TrendingDown,
LineChart,
Sparkles,
Wand2,
Infinity,
CircuitBoard,
BrainCircuit,
Smile,
ThumbsUp,
UserPlus,
Headphones,
MessageSquare,
LifeBuoy,
MonitorSpeaker,
AlertTriangle,
CheckCircle2
} from 'lucide-react';
import Image from 'next/image';

// Case Studies Data
const caseStudies = [
{
  client: "GlobalTech Corporation",
  industry: "Technology",
  challenge: "ServiceNow platform issues causing 67% downtime and $18M annual losses with limited internal expertise",
  solution: "24/7 managed services with proactive monitoring, L1-L4 support, and continuous optimization programs",
  results: ["99.7% platform uptime", "89% reduction in critical incidents", "$24M cost avoidance", "2.3 min average response time"],
  timeline: "Ongoing 3+ years",
  image: "/images/case-studies/globaltech-managed.jpg",
  testimonial: "ifBash's managed services transformed our ServiceNow platform from a liability into our most reliable business asset. Their proactive approach is incredible."
},
{
  client: "HealthSystem Plus",
  industry: "Healthcare",
  challenge: "Complex ServiceNow environment across 78 hospitals with compliance requirements and 24/7 operations",
  solution: "Healthcare-specialized managed services with compliance monitoring and specialized L4 ServiceNow expertise",
  results: ["100% HIPAA compliance", "91% user satisfaction", "156% efficiency improvement", "Zero compliance violations"],
  timeline: "Ongoing 2+ years", 
  image: "/images/case-studies/healthsystem-managed.jpg",
  testimonial: "The specialized healthcare expertise and 24/7 support gives us confidence to focus on patient care while they handle our ServiceNow platform perfectly."
},
{
  client: "Manufacturing Alliance",
  industry: "Manufacturing",
  challenge: "Multi-location ServiceNow support across 45 facilities with varying technical expertise and time zones",
  solution: "Follow-the-sun support model with local expertise, automated monitoring, and predictive maintenance",
  results: ["24/7 global coverage", "78% faster issue resolution", "234% productivity improvement", "98% customer satisfaction"],
  timeline: "Ongoing 4+ years",
  image: "/images/case-studies/manufacturing-managed.jpg", 
  testimonial: "Four years of flawless ServiceNow support across 45 locations. Their follow-the-sun model ensures we always have expert help when needed."
}
];

// Client Stories
const clientStories = [
{
  name: "Michael Chen",
  title: "IT Director",
  company: "GlobalTech Corporation",
  story: "ifBash's managed services team became an extension of our IT department. Their proactive monitoring and instant response transformed our ServiceNow platform reliability completely.",
  metric: "99.7% platform uptime with 89% reduction in critical incidents",
  rating: 5,
  avatar: "/images/testimonials/michael-chen-it.jpg"
},
{
  name: "Dr. Sarah Williams",
  title: "CIO",
  company: "HealthSystem Plus", 
  story: "The healthcare expertise and compliance focus of ifBash's managed services is exceptional. We've maintained 100% HIPAA compliance while dramatically improving efficiency.",
  metric: "100% compliance adherence with 156% efficiency improvement",
  rating: 5,
  avatar: "/images/testimonials/sarah-williams-health.jpg"
},
{
  name: "James Rodriguez",
  title: "VP Operations",
  company: "Manufacturing Alliance",
  story: "Four years of 24/7 support across 45 manufacturing facilities - ifBash has never let us down. Their follow-the-sun model is perfectly executed.",
  metric: "24/7 global coverage with 98% customer satisfaction over 4 years",
  rating: 5,
  avatar: "/images/testimonials/james-rodriguez-mfg.jpg"
},
{
  name: "Lisa Thompson",
  title: "Head of IT Services",
  company: "RetailChain Inc",
  story: "The proactive approach and predictive insights from ifBash's managed services team prevented countless issues. They know our ServiceNow platform better than we do.",
  metric: "85% issue prevention rate with predictive monitoring",
  rating: 5,
  avatar: "/images/testimonials/lisa-thompson-retail.jpg"
}
];

// Managed Services Methodology
const managedServicesMethodology = [
{
  phase: "Platform Assessment & Onboarding",
  duration: "Week 1-2",
  activities: ["Health check analysis", "Documentation review", "Team integration", "Monitoring setup", "SLA definition"],
  deliverables: ["Platform assessment report", "Service roadmap", "Monitoring dashboard", "Support procedures"],
  icon: Search,
  color: "from-blue-500 to-indigo-500"
},
{
  phase: "Proactive Monitoring & Optimization",
  duration: "Ongoing",
  activities: ["24/7 platform monitoring", "Performance optimization", "Preventive maintenance", "Security updates", "Capacity planning"],
  deliverables: ["Monitoring reports", "Performance dashboards", "Optimization recommendations", "Security patches"],
  icon: MonitorSpeaker,
  color: "from-indigo-500 to-purple-500"
},
{
  phase: "Support & Issue Resolution",
  duration: "Ongoing", 
  activities: ["L1-L4 incident support", "Problem management", "Change management", "Knowledge base updates", "User assistance"],
  deliverables: ["Incident reports", "Resolution documentation", "Knowledge articles", "User training"],
  icon: LifeBuoy,
  color: "from-purple-500 to-pink-500"
},
{
  phase: "Continuous Improvement & Evolution",
  duration: "Ongoing",
  activities: ["Platform evolution", "Feature enhancements", "Process improvement", "Technology updates", "Best practice implementation"],
  deliverables: ["Evolution roadmap", "Enhancement reports", "Process documentation", "Performance metrics"],
  icon: TrendingUp,
  color: "from-pink-500 to-rose-500"
}
];

// Managed Services Features
const managedServices = [
{
  icon: MonitorSpeaker,
  title: "24/7 Proactive Monitoring",
  description: "Continuous platform monitoring with predictive analytics to prevent issues before they impact users",
  benefits: ["Real-time monitoring", "Predictive alerts", "Automated resolution"],
  gradient: "from-blue-500 to-indigo-500"
},
{
  icon: LifeBuoy,
  title: "Multi-Level Support (L1-L4)",
  description: "Comprehensive support from basic user assistance to advanced ServiceNow platform engineering",
  benefits: ["L1-L3 helpdesk", "L4 platform expertise", "Escalation management"],
  gradient: "from-indigo-500 to-purple-500"
},
{
  icon: Shield,
  title: "Security & Compliance Management",
  description: "Continuous security monitoring, compliance tracking, and automated remediation for enterprise requirements",
  benefits: ["Security monitoring", "Compliance automation", "Risk management"],
  gradient: "from-purple-500 to-pink-500"
},
{
  icon: Wrench,
  title: "Platform Optimization & Maintenance",
  description: "Ongoing platform optimization, performance tuning, and preventive maintenance to maximize value",
  benefits: ["Performance tuning", "Preventive maintenance", "Capacity planning"],
  gradient: "from-pink-500 to-rose-500"
},
{
  icon: Users,
  title: "User Training & Adoption",
  description: "Continuous user education, training programs, and adoption support to maximize platform utilization",
  benefits: ["User training", "Adoption programs", "Best practices"],
  gradient: "from-rose-500 to-orange-500"
},
{
  icon: Rocket,
  title: "Platform Evolution & Enhancement",
  description: "Strategic platform evolution, feature development, and technology updates to stay current",
  benefits: ["Platform evolution", "Feature development", "Technology updates"],
  gradient: "from-orange-500 to-amber-500"
}
];

// Managed Services Capabilities
const managedServicesCapabilities = [
{
  title: "Platform Uptime Guarantee",
  description: "Average platform uptime achieved across all managed service clients",
  stat: "99.7% Uptime",
  icon: CheckCircle2
},
{
  title: "Response Time SLA",
  description: "Average response time for critical incidents with 24/7 support coverage",
  stat: "2.3 Min Response",
  icon: Timer
},
{
  title: "Issue Prevention Rate", 
  description: "Percentage of potential issues prevented through proactive monitoring and maintenance",
  stat: "85% Prevention",
  icon: AlertTriangle
},
{
  title: "Client Satisfaction Score",
  description: "Average client satisfaction rating across all managed service engagements",
  stat: "98% Satisfaction",
  icon: ThumbsUp
}
];

// FAQ Data
const faqs = [
{
  question: "What levels of support are included in ServiceNow managed services?",
  answer: "We provide comprehensive L1-L4 support including basic user assistance (L1), technical troubleshooting (L2), advanced system administration (L3), and platform-level engineering support (L4). Our team includes ServiceNow certified administrators, developers, and architects."
},
{
  question: "How quickly do you respond to critical ServiceNow incidents?",
  answer: "We guarantee response times of 15 minutes for critical (P1) incidents, 1 hour for high (P2) incidents, 4 hours for medium (P3) incidents, and 24 hours for low (P4) incidents. Our 24/7 follow-the-sun model ensures global coverage."
},
{
  question: "What proactive monitoring and maintenance is included?",
  answer: "Our proactive services include 24/7 platform monitoring, performance analytics, predictive issue detection, automated health checks, security monitoring, capacity planning, and preventive maintenance. We identify and resolve issues before they impact your users."
},
{
  question: "Can you provide managed services for complex, multi-instance ServiceNow environments?",
  answer: "Yes, we specialize in complex environments including multi-instance deployments, global implementations, and highly customized platforms. Our team has experience managing ServiceNow environments across multiple time zones and industries."
},
{
  question: "What reporting and visibility do you provide into our ServiceNow platform?",
  answer: "We provide comprehensive dashboards, monthly reports, performance analytics, and regular business reviews. You'll have real-time visibility into platform health, user adoption, performance metrics, and service delivery KPIs."
},
{
  question: "How do you ensure security and compliance in managed services?",
  answer: "We follow enterprise security standards including SOC 2 compliance, implement role-based access controls, maintain audit trails, provide security monitoring, and ensure compliance with industry regulations like HIPAA, SOX, and GDPR as required."
},
{
  question: "What happens during ServiceNow upgrades and major changes?",
  answer: "We manage the entire upgrade process including planning, testing, execution, and post-upgrade support. Our team coordinates with ServiceNow, tests in development environments, and ensures minimal disruption to your business operations."
},
{
  question: "How do managed services help with user adoption and training?",
  answer: "We provide ongoing user training, create documentation, conduct workshops, implement best practices, and offer user support to maximize platform adoption. Our goal is to ensure your team gets maximum value from ServiceNow investments."
}
];

export default function ManagedServicesSupport() {
const [currentTestimonial, setCurrentTestimonial] = useState(0);
const [openFaq, setOpenFaq] = useState(null);
const [isVisible, setIsVisible] = useState({});

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonial(prev => (prev + 1) % clientStories.length);
  }, 6000);
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
    {/* Fixed Chat Button */}
    <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
      <button 
        onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
        className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
        aria-label="Chat with Support Expert"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[120px] text-center">
          Chat with Support Expert
        </span>
        <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20"></div>
      </button>
    </div>

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-700/20 via-transparent to-transparent animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
          
          {/* Floating Support Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-float delay-150 opacity-40" />
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-float delay-300 opacity-80" />
          
          {/* Support Shield Pattern */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
            <Shield className="w-full h-full text-white animate-pulse" />
          </div>
        </div>

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-8">
              {/* Trust Badges */}
              <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                  ✓ 99.7% Uptime
                </Badge>
                <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                  ✓ 24/7 Support
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  ✓ 2.3 Min Response
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                ServiceNow{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                  Managed Services
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                  & Expert{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold">
                    Support
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                Achieve <span className="font-semibold text-indigo-300">99.7% platform uptime</span> with 24/7 expert support. L1-L4 ServiceNow expertise with <span className="font-semibold text-purple-300">2.3 minute response times</span> and <span className="font-semibold text-pink-300">85% issue prevention</span>.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 px-2 sm:px-0">
                <div className="group bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 hover:from-blue-600/30 hover:via-indigo-600/30 hover:to-purple-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">99.7%</div>
                  <div className="text-xs sm:text-sm text-blue-100">Uptime</div>
                </div>
                <div className="group bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 hover:from-indigo-600/30 hover:via-purple-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 transform hover:scale-105">
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">24/7</div>
                  <div className="text-xs sm:text-sm text-indigo-100">Support</div>
                </div>
                <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-600/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-rose-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">2.3M</div>
                  <div className="text-xs sm:text-sm text-purple-100">Response</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                  style={{
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    Get Expert ServiceNow Support
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative flex items-center justify-center">
                    <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-purple-400 group-hover:text-purple-300" />
                    Watch Support Demo
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side Visual Content */}
            <div className="relative lg:h-[600px]">
              <div className="relative z-20 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                  <PlaceholderImage
                    title="24/7 Support Operations Center"
                    className="w-full h-full object-cover"
                    gradient="from-blue-600 to-indigo-600"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">99.7%</div>
                    <div className="text-xs text-blue-200">Uptime</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs text-indigo-200">Support</div>
                  </div>
                </div>
                
                {/* Floating Support Icons */}
                <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                  <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <LifeBuoy className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                  <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-100/30 via-transparent to-transparent" />
        </div>

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16" data-animate id="service-overview">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Why Choose ifBash
              </span>
              <br />
              <span className="text-gray-800">
                for ServiceNow Managed Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We don't just provide support - we become your extended ServiceNow team with proactive monitoring, expert guidance, and continuous optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {managedServices.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Managed Services Capabilities Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managedServicesCapabilities.map((capability, index) => (
              <div key={index} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{capability.stat}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services Methodology Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16" data-animate id="methodology">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Our Managed Services
              </span>
              <br />
              <span className="text-white">
                Support Methodology
              </span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A comprehensive approach that ensures your ServiceNow platform operates at peak performance with proactive support and continuous optimization.
            </p>
          </div>

          <div className="space-y-12">
            {managedServicesMethodology.map((phase, index) => (
              <div key={index} className="group relative" data-animate id={`phase-${index}`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mr-6 transform group-hover:scale-110 transition-transform duration-300`}>
                        <phase.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                        <div className="text-blue-200 flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {phase.duration}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-blue-200">Key Activities</h4>
                        <div className="space-y-2">
                          {phase.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-blue-200">Key Deliverables</h4>
                        <div className="space-y-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center">
                              <FileText className="h-4 w-4 text-indigo-400 mr-3 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      <div className={`aspect-square bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 transform group-hover:scale-105`}>
                        <div className={`w-full h-full bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                          <div className="text-center relative z-10">
                            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
                              0{index + 1}
                            </div>
                            <div className="text-lg font-semibold text-blue-200">
                              {phase.phase.split(' & ')[0]}
                            </div>
                            <div className="text-sm text-blue-300 mt-2">
                              {phase.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {index < managedServicesMethodology.length - 1 && (
                  <div className="flex justify-center mt-8 mb-8">
                    <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-50"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button 
              onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
              className="group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105"
              style={{
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center justify-center">
                Get 24/7 ServiceNow Support
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Continue with remaining sections... */}
    </div>

    <style jsx>{`
      /* Same styles as before */
    `}</style>
  </>
);
}

