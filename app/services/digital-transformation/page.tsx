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
RefreshCw,
 CloudDownload,
  Server,
Search,
ChevronDown,
Compass,
Map,
Route,
Navigation,
TrendingDown,
LineChart
} from 'lucide-react';
import Image from 'next/image';

// Case Studies Data
const caseStudies = [
{
  client: "InnovateCorp",
  industry: "Technology",
  challenge: "Disconnected digital initiatives costing $4.2M annually with no clear ROI measurement",
  solution: "Comprehensive digital strategy roadmap with ServiceNow-centered transformation approach",
  results: ["67% reduction in operational costs", "238% increase in process efficiency", "$8.4M in realized savings", "92% stakeholder satisfaction"],
  timeline: "8 weeks strategy + 16 weeks execution",
  image: "/images/case-studies/innovatecorp-technology.jpg",
  testimonial: "ifBash didn't just give us a strategy - they gave us a transformation blueprint that actually works in the real world."
},
{
  client: "MedTech Solutions",
  industry: "Healthcare Technology",
  challenge: "Legacy systems hindering innovation with 47% slower time-to-market for new services",
  solution: "Digital-first strategy with ServiceNow platform modernization and innovation framework",
  results: ["47% faster product development", "83% improvement in compliance tracking", "$3.8M annual cost avoidance", "Zero compliance violations"],
  timeline: "10 weeks strategy + 20 weeks implementation",
  image: "/images/case-studies/medtech-healthcare.jpg",
  testimonial: "Their strategic vision transformed how we think about digital innovation. We're now leading our market instead of following."
},
{
  client: "GlobalManufacturing Ltd",
  industry: "Manufacturing",
  challenge: "Siloed operations across 34 facilities with no unified digital strategy or governance",
  solution: "Enterprise-wide digital strategy with ServiceNow-powered operations transformation",
  results: ["89% improvement in cross-facility coordination", "156% increase in operational visibility", "$12.7M in supply chain savings", "98% on-time delivery"],
  timeline: "12 weeks strategy + 24 weeks rollout",
  image: "/images/case-studies/globalmanufacturing.jpg",
  testimonial: "ifBash's strategic approach unified our global operations in ways we never thought possible. True transformation experts."
}
];

// Client Stories
const clientStories = [
{
  name: "Alexandra Rodriguez",
  title: "Chief Digital Officer",
  company: "InnovateCorp",
  story: "ifBash transformed our scattered digital initiatives into a cohesive, value-driven strategy. Their advisory expertise delivered measurable results from month one.",
  metric: "238% increase in process efficiency within 6 months",
  rating: 5,
  avatar: "/images/testimonials/alexandra-rodriguez.jpg"
},
{
  name: "Dr. Marcus Chen",
  title: "VP of Innovation",
  company: "MedTech Solutions", 
  story: "The strategic roadmap ifBash created revolutionized our product development. We're now innovating 47% faster with complete compliance confidence.",
  metric: "47% faster time-to-market for new healthcare solutions",
  rating: 5,
  avatar: "/images/testimonials/marcus-chen.jpg"
},
{
  name: "Robert Kim",
  title: "COO",
  company: "GlobalManufacturing Ltd",
  story: "Their digital strategy unified our 34 facilities into one seamless operation. The transformation has been nothing short of remarkable.",
  metric: "$12.7M in supply chain optimization savings",
  rating: 5,
  avatar: "/images/testimonials/robert-kim.jpg"
},
{
  name: "Sarah Mitchell",
  title: "Head of Digital Transformation",
  company: "FinanceForward Inc",
  story: "ifBash's advisory approach gave us the confidence to make bold digital moves. Every recommendation was backed by solid business value.",
  metric: "ROI achieved 34% ahead of projected timeline",
  rating: 5,
  avatar: "/images/testimonials/sarah-mitchell.jpg"
}
];

// Advisory Methodology
const advisoryMethodology = [
{
  phase: "Discovery & Analysis",
  duration: "Week 1-2",
  activities: ["Digital maturity assessment", "Stakeholder interviews", "Current state mapping", "Gap analysis", "Competitive benchmarking"],
  deliverables: ["Digital readiness report", "Stakeholder alignment document", "Current state architecture", "Competitive analysis"],
  icon: Search,
  color: "from-emerald-500 to-teal-500"
},
{
  phase: "Strategy Development",
  duration: "Week 3-5",
  activities: ["Digital vision crafting", "Strategic roadmap creation", "ROI modeling", "Risk assessment", "Governance framework design"],
  deliverables: ["Digital strategy document", "Implementation roadmap", "Business case", "Governance model"],
  icon: Lightbulb,
  color: "from-teal-500 to-cyan-500"
},
{
  phase: "Roadmap Planning",
  duration: "Week 6-7",
  activities: ["Priority setting", "Resource planning", "Timeline optimization", "Success metrics definition", "Change management planning"],
  deliverables: ["Detailed project plans", "Resource allocation matrix", "Success measurement framework", "Change strategy"],
  icon: Map,
  color: "from-cyan-500 to-blue-500"
},
{
  phase: "Implementation Support",
  duration: "Week 8+",
  activities: ["Executive coaching", "Progress monitoring", "Strategic adjustments", "Value realization tracking", "Continuous optimization"],
  deliverables: ["Implementation guidance", "Progress reports", "Optimization recommendations", "Value measurement"],
  icon: Target,
  color: "from-blue-500 to-indigo-500"
}
];

// Service Features
const advisoryServices = [
{
  icon: Compass,
  title: "Digital Vision & Strategy",
  description: "Craft compelling digital visions that align with business objectives and drive transformation",
  benefits: ["Strategic alignment", "Vision articulation", "Stakeholder buy-in"],
  gradient: "from-emerald-500 to-teal-500"
},
{
  icon: Route,
  title: "Transformation Roadmaps",
  description: "Build practical, executable roadmaps that deliver value incrementally and sustainably",
  benefits: ["Phased approach", "Risk mitigation", "Value realization"],
  gradient: "from-teal-500 to-cyan-500"
},
{
  icon: TrendingUp,
  title: "ROI & Value Modeling",
  description: "Quantify transformation impact with comprehensive business case development and tracking",
  benefits: ["Business justification", "Investment tracking", "Value measurement"],
  gradient: "from-cyan-500 to-blue-500"
},
{
  icon: Shield,
  title: "Risk & Governance",
  description: "Establish robust governance frameworks that ensure successful transformation execution",
  benefits: ["Risk management", "Compliance assurance", "Quality control"],
  gradient: "from-blue-500 to-indigo-500"
},
{
  icon: Users,
  title: "Change Leadership",
  description: "Guide organizational change with proven methodologies and executive coaching",
  benefits: ["Leadership alignment", "Culture transformation", "Adoption acceleration"],
  gradient: "from-indigo-500 to-purple-500"
},
{
  icon: LineChart,
  title: "Performance Optimization",
  description: "Continuously optimize digital initiatives for maximum business impact and efficiency",
  benefits: ["Performance tracking", "Continuous improvement", "Value maximization"],
  gradient: "from-purple-500 to-pink-500"
}
];

// Strategic Capabilities
const strategicCapabilities = [
{
  title: "Digital Maturity Assessment",
  description: "Comprehensive evaluation of your organization's digital readiness and transformation potential",
  stat: "200+ Assessments Completed",
  icon: Gauge
},
{
  title: "Business Case Development",
  description: "Quantified business cases that secure executive buy-in and funding for digital initiatives",
  stat: "96% Approval Rate",
  icon: BarChart3
},
{
  title: "Transformation Planning", 
  description: "End-to-end transformation planning with risk mitigation and value realization focus",
  stat: "18 Month Average ROI",
  icon: Navigation
},
{
  title: "Executive Advisory",
  description: "C-level advisory services that drive strategic decision-making and transformation leadership",
  stat: "150+ Executives Coached",
  icon: Award
}
];

// FAQ Data
const faqs = [
{
  question: "What is included in ifBash's digital strategy advisory services?",
  answer: "Our digital strategy advisory includes comprehensive digital maturity assessment, vision and strategy development, transformation roadmap creation, ROI modeling, governance framework design, and ongoing implementation support. We work closely with your leadership team to ensure strategic alignment and successful execution."
},
{
  question: "How long does it take to develop a comprehensive digital strategy?",
  answer: "A complete digital strategy typically takes 8-12 weeks to develop, depending on organizational complexity and scope. This includes discovery, stakeholder alignment, strategy formulation, roadmap creation, and executive presentation. We then provide ongoing advisory support during implementation."
},
{
  question: "How do you ensure our digital strategy aligns with business objectives?",
  answer: "We start with extensive stakeholder interviews and business objective mapping. Our methodology ensures every digital initiative directly supports business goals with measurable outcomes. We create clear value propositions and ROI models that demonstrate business impact."
},
{
  question: "What makes ifBash's advisory approach different from traditional consulting?",
  answer: "We combine strategic thinking with deep ServiceNow platform expertise, enabling us to create strategies that are both visionary and executable. Our advisors have hands-on implementation experience, ensuring recommendations are practical and achievable."
},
{
  question: "Do you provide ongoing support after the strategy is developed?",
  answer: "Yes, we offer comprehensive implementation support including executive coaching, progress monitoring, strategic adjustments, and value realization tracking. Our advisory relationship continues until your transformation objectives are achieved."
},
{
  question: "How do you measure the success of digital transformation strategies?",
  answer: "We establish clear KPIs and success metrics during strategy development, including operational efficiency gains, cost savings, revenue impact, and user satisfaction. We provide regular progress reports and adjust strategies based on performance data."
},
{
  question: "Can you help with change management during digital transformation?",
  answer: "Absolutely. Change management is integral to our advisory services. We provide change leadership coaching, communication strategies, training programs, and adoption acceleration techniques to ensure successful transformation."
},
{
  question: "What industries do you serve for digital strategy advisory?",
  answer: "We serve multiple industries including Healthcare, Financial Services, Manufacturing, Technology, Government, Education, and Retail. Our advisors have deep industry expertise and understand sector-specific challenges and opportunities."
}
];

export default function DigitalStrategyAdvisory() {
const [currentTestimonial, setCurrentTestimonial] = useState(0);
const [openFaq, setOpenFaq] = useState<number | null>(null);
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
    <div className="fixed right-2 sm:right-4 bottom-4 sm:bottom-6 z-50">
      <a href="/get-started"
        className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
        aria-label="Chat with Strategy Expert"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="absolute right-[calc(100%+4px)] px-1 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-[10px] sm:text-sm text-gray-800 min-w-[70px] sm:min-w-[120px] text-center">
          Chat with Expert
        </span>
        <div className="absolute inset-0 rounded-full animate-ping bg-emerald-600 opacity-20"></div>
      </a>
    </div>

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-700/20 via-transparent to-transparent animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
          
          {/* Floating Strategy Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-float delay-150 opacity-40" />
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-float delay-300 opacity-80" />
        </div>

        <div className="w-full px-2 xs:px-1 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-4 xs:gap-2 sm:gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-4 xs:space-y-2 sm:space-y-8">
              {/* Trust Badges */}
              <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 xs:mb-1 sm:mb-8 flex-wrap px-1 sm:px-0">
                <Badge className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                  ✓ Strategy Experts
                </Badge>
                <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                  ✓ 96% Approval Rate
                </Badge>
                <Badge className="bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  ✓ 18-Month ROI
                </Badge>
              </div>

              <h1 className="text-lg xs:text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-1 sm:px-0">
                Digital{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                  Strategy & Advisory
                </span>
                <span className="block text-sm xs:text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                  That Drives{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 font-semibold">
                    Real Transformation
                  </span>
                </span>
              </h1>

              <p className="text-xs xs:text-[11px] sm:text-base md:text-lg lg:text-xl text-emerald-100 max-w-xs xs:max-w-[90vw] sm:max-w-2xl leading-relaxed">
                Develop winning digital strategies in <span className="font-semibold text-cyan-300">8-12 weeks</span> with executive advisory that delivers measurable business outcomes. <span className="font-semibold text-teal-300">200+ successful transformations</span> across industries.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 xs:gap-0.5 sm:gap-4 mt-2 xs:mt-1 sm:mt-8 px-1 sm:px-0">
                <div className="group bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20 hover:from-emerald-600/30 hover:via-teal-600/30 hover:to-cyan-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 transform hover:scale-105">
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">8-12</div>
                  <div className="text-xs sm:text-sm text-emerald-100">Weeks Strategy</div>
                </div>
                <div className="group bg-gradient-to-br from-teal-600/20 via-cyan-600/20 to-blue-600/20 hover:from-teal-600/30 hover:via-cyan-600/30 hover:to-blue-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 transform hover:scale-105">
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">96%</div>
                  <div className="text-xs sm:text-sm text-teal-100">Approval Rate</div>
                </div>
                <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-indigo-600/20 hover:from-cyan-600/30 hover:via-blue-600/30 hover:to-indigo-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105">
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">18M</div>
                  <div className="text-xs sm:text-sm text-cyan-100">Avg ROI Timeline</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 xs:gap-1 sm:gap-4 px-2 sm:px-0">
                <a href="/get-started"
                  className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700"
                  style={{
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    Start Your Strategy Journey
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
                
                <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative flex items-center justify-center">
                    <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-cyan-400 group-hover:text-cyan-300" />
                    Watch Strategy Demo
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side Visual Content */}
            <div className="relative sm:h-[400px] lg:h-[600px]">
              <div className="relative z-20 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-3xl p-2 xs:p-1 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 xs:mb-1 sm:mb-6">
                  <PlaceholderImage
                    title="Digital Strategy Roadmap Dashboard"
                    className="w-full h-full object-cover"
                    gradient="from-emerald-600 to-teal-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-1 xs:gap-0.5 sm:gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">8-12</div>
                    <div className="text-xs text-emerald-200">Weeks</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">96%</div>
                    <div className="text-xs text-teal-200">Success</div>
                  </div>
                </div>
                
                {/* Floating Strategy Icons */}
                <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                  <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Compass className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                  <div className="w-full h-full bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-6 xs:py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald-100/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-100/30 via-transparent to-transparent" />
        </div>

        <div className="w-full px-2 xs:px-1 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-6 xs:mb-4 sm:mb-16" data-animate id="service-overview">
            <h2 className="text-xl xs:text-base sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-1 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                Why Choose ifBash
              </span>
              <br />
              <span className="text-gray-800">
                for Digital Strategy Advisory
              </span>
            </h2>
            <p className="text-xs xs:text-[11px] sm:text-lg md:text-xl text-gray-700 max-w-xs xs:max-w-[90vw] sm:max-w-3xl mx-auto leading-relaxed">
              We don&apos;t just create strategies - we craft transformation roadmaps that drive measurable business outcomes and sustainable competitive advantage.
            </p>
          </div>

          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-1 sm:gap-8 mb-6 xs:mb-4 sm:mb-16">
            {advisoryServices.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:border-emerald-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
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
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Capabilities Stats */}
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-1 sm:gap-8">
            {strategicCapabilities.map((capability, index) => (
              <div key={index} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">{capability.stat}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Methodology Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-700/20 via-transparent to-transparent animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
          
          {/* Strategy Pattern Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-float delay-300 opacity-80" />
          </div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                Our Strategic Journey Map
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              A streamlined approach to digital transformation excellence
            </p>
          </div>

          <div className="relative">
            {/* Journey Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transform -translate-y-1/2 opacity-50" />
            
            {/* Journey Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {[
                {
                  phase: "Discovery & Assessment",
                  icon: "🔍",
                  color: "from-emerald-600 via-emerald-500 to-teal-500",
                  glowColor: "from-emerald-600/20 to-teal-500/20",
                  duration: "Week 1-2",
                  features: [
                    "Current State Analysis",
                    "Technology Stack Review",
                    "Business Goals Alignment",
                    "Opportunity Mapping"
                  ]
                },
                {
                  phase: "Strategy & Design",
                  icon: "💡",
                  color: "from-teal-600 via-cyan-500 to-emerald-500",
                  glowColor: "from-teal-600/20 to-cyan-500/20",
                  duration: "Week 3-5",
                  features: [
                    "Solution Architecture",
                    "Technology Selection",
                    "Risk Assessment",
                    "Transformation Roadmap"
                  ]
                },
                {
                  phase: "Implementation",
                  icon: "⚙️",
                  color: "from-cyan-600 via-teal-500 to-emerald-500",
                  glowColor: "from-cyan-600/20 to-teal-500/20",
                  duration: "Week 6-9",
                  features: [
                    "Agile Development",
                    "Process Optimization",
                    "Change Management",
                    "Quality Assurance"
                  ]
                },
                {
                  phase: "Value Realization",
                  icon: "🚀",
                  color: "from-emerald-500 via-teal-500 to-cyan-500",
                  glowColor: "from-emerald-500/20 to-cyan-500/20",
                  duration: "Week 10-12",
                  features: [
                    "Performance Monitoring",
                    "KPI Measurement",
                    "ROI Assessment",
                    "Success Documentation"
                  ]
                }
              ].map((step, index) => (
                <div key={index} className="relative group h-full">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r ${step.glowColor} rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 opacity-80`} />
                  <div className={`relative h-full bg-gradient-to-br ${step.color} p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-white/20 flex flex-col group-hover:border-white/30 shadow-lg hover:shadow-2xl`}
                    style={{
                      boxShadow: "0 0 40px rgba(16, 185, 129, 0.1)"
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent rounded-xl opacity-50" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl backdrop-blur-sm border border-white/10 shadow-inner">
                          {step.icon}
                        </div>
                        <div className="text-sm text-white/90 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                          {step.duration}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text">
                        {step.phase}
                      </h3>
                      <ul className="space-y-3 mt-auto">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <div className="p-1 rounded-full bg-white/10 backdrop-blur-sm">
                              <CheckCircle className="h-3 w-3 text-white group-hover/item:text-white/90 transition-colors duration-200" />
                            </div>
                            <span className="text-sm text-white/80 group-hover:item:text-white transition-colors duration-200">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/get-started"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-6 xs:py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-teal-100/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-emerald-100/30 via-transparent to-transparent" />
        </div>

        <div className="w-full px-2 xs:px-1 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-6 xs:mb-4 sm:mb-16" data-animate id="case-studies">
            <h2 className="text-xl xs:text-base sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-1 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600">
                Strategic Transformation
              </span>
              <br />
              <span className="text-gray-800">
                Success Stories
              </span>
            </h2>
            <p className="text-xs xs:text-[11px] sm:text-lg md:text-xl text-gray-700 max-w-xs xs:max-w-[90vw] sm:max-w-3xl mx-auto leading-relaxed">
              See how our digital strategy advisory has transformed organizations across industries with measurable business impact.
            </p>
          </div>

          <div className="space-y-4 xs:space-y-2 sm:space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <Badge className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm px-4 py-2">
                        {study.industry}
                      </Badge>
                      <Badge className="ml-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm px-4 py-2">
                        {study.timeline}
                      </Badge>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                      {study.client}
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-red-600">Strategic Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-blue-600">Strategic Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-green-600">Business Impact</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 text-sm font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border-l-4 border-teal-500">
                        <Quote className="h-6 w-6 text-teal-500 mb-2" />
                        <p className="text-gray-700 italic leading-relaxed">&ldquo;{study.testimonial}&rdquo;</p>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl p-6 overflow-hidden">
                        <PlaceholderImage
                          title={`${study.client} Digital Strategy`}
                          className="w-full h-full object-cover rounded-xl"
                          gradient="from-teal-600 to-emerald-600"
                        />
                      </div>
                      
                      {/* Floating Stats */}
                      <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-teal-200">
                        <div className="text-lg font-bold text-teal-600">{study.timeline.split(' ')[0]}</div>
                        <div className="text-xs text-gray-600">Weeks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-6 xs:py-4 sm:py-16 md:py-24 bg-gradient-to-r from-teal-900 via-emerald-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-cyan-700/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent" />
        </div>

        <div className="w-full px-2 xs:px-1 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-6 xs:mb-4 sm:mb-16" data-animate id="testimonials">
            <h2 className="text-xl xs:text-base sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-1 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400">
                What Leaders Say
              </span>
              <br />
              <span className="text-white">
                About Our Strategic Advisory
              </span>
            </h2>
            <p className="text-xs xs:text-[11px] sm:text-lg md:text-xl text-emerald-100 max-w-xs xs:max-w-[90vw] sm:max-w-3xl mx-auto leading-relaxed">
              Hear from the executives who trusted us with their digital transformation strategy and achieved remarkable results.
            </p>
          </div>

          <div className="relative max-w-xs xs:max-w-[95vw] sm:max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {clientStories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                      <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mr-6">
                          <Users className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{story.name}</h3>
                          <p className="text-emerald-200">{story.title}, {story.company}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <Quote className="h-8 w-8 text-cyan-400 mb-4" />
                        <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-6">
                          {story.story}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-3">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                          <span className="text-emerald-200 text-sm">({story.rating}.0/5.0)</span>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-cyan-300 font-semibold">{story.metric}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-1 xs:space-x-0.5 sm:space-x-2 mt-4 xs:mt-2 sm:mt-8">
              {clientStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-cyan-400 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 xs:py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-100/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-100/20 via-transparent to-transparent" />
        </div>

        <div className="w-full px-2 xs:px-1 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-6 xs:mb-4 sm:mb-16" data-animate id="faq">
            <h2 className="text-xl xs:text-base sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-1 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                Frequently Asked Questions
              </span>
              <br />
              <span className="text-gray-800">
                About Digital Strategy Advisory
              </span>
            </h2>
            <p className="text-xs xs:text-[11px] sm:text-lg md:text-xl text-gray-700 max-w-xs xs:max-w-[90vw] sm:max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our digital strategy and advisory services.
            </p>
          </div>

          <div className="max-w-xs xs:max-w-[95vw] sm:max-w-4xl mx-auto">
            <div className="space-y-1 xs:space-y-0.5 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-emerald-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-8">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-6 w-6 text-emerald-600 transition-transform duration-200 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-6 xs:mt-4 sm:mt-16">
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Digital Strategy?
              </h3>
              <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Join 200+ successful digital transformations. Get expert advisory that delivers measurable results in 8-12 weeks.
              </p>
              <a href="/get-started"
                className="group inline-block px-8 py-4 text-lg font-semibold bg-white text-emerald-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  Schedule Your Strategy Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.1; }
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-pulse-slow {
        animation: pulse-slow 4s ease-in-out infinite;
      }

      .delay-75 {
        animation-delay: 0.75s;
      }

      .delay-150 {
        animation-delay: 1.5s;
      }

      .delay-300 {
        animation-delay: 3s;
      }

      .bg-grid-pattern {
        background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      }
    `}</style>
  </>
);
}
