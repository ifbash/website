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
  LineChart,
  Sparkles,
  Wand2,
  Infinity,
  CircuitBoard,
  BrainCircuit
} from 'lucide-react';
import Image from 'next/image';

// Case Studies Data
const caseStudies = [
  {
    client: "AutoTech Industries",
    industry: "Manufacturing",
    challenge: "Manual quality control processes causing 34% production delays and $8.7M annual losses",
    solution: "Agentic AI-powered quality control system with computer vision and predictive maintenance",
    results: ["89% reduction in defect rates", "156% increase in production efficiency", "$12.4M annual cost savings", "Zero unplanned downtime"],
    timeline: "14 weeks implementation",
    image: "/images/case-studies/autotech-manufacturing.jpg",
    testimonial: "ifBash's agentic AI solution transformed our manufacturing floor. Our AI agents now predict issues before they happen and automatically optimize production."
  },
  {
    client: "HealthCare+ Network",
    industry: "Healthcare",
    challenge: "Patient data analysis taking 47 hours per case, causing treatment delays and compliance risks",
    solution: "Generative AI-powered patient data analysis with automated report generation and compliance checking",
    results: ["94% faster patient data processing", "73% improvement in diagnosis accuracy", "100% compliance adherence", "267% ROI in first year"],
    timeline: "18 weeks rollout",
    image: "/images/case-studies/healthcare-network.jpg",
    testimonial: "The generative AI agents analyze patient data in minutes instead of days. Our clinicians now focus on patient care instead of paperwork."
  },
  {
    client: "FinanceFlow Corp",
    industry: "Financial Services",
    challenge: "Fraud detection systems missing 23% of sophisticated attacks, costing $15.6M annually",
    solution: "Multi-agent AI system with real-time fraud detection and automated response protocols",
    results: ["97% fraud detection accuracy", "83% reduction in false positives", "$18.9M in prevented losses", "2.3 second average response time"],
    timeline: "16 weeks deployment",
    image: "/images/case-studies/financeflow-financial.jpg",
    testimonial: "Our AI agents work 24/7 to protect our customers. The sophistication of these autonomous systems is remarkable - they learn and adapt constantly."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Dr. Elena Vasquez",
    title: "Chief Innovation Officer",
    company: "AutoTech Industries",
    story: "ifBash's agentic AI didn't just automate our processes - it revolutionized how we think about manufacturing intelligence. Our AI agents are like having expert technicians working 24/7.",
    metric: "156% increase in production efficiency with zero unplanned downtime",
    rating: 5,
    avatar: "/images/testimonials/elena-vasquez.jpg"
  },
  {
    name: "Dr. James Wilson",
    title: "Medical Director",
    company: "HealthCare+ Network", 
    story: "The generative AI agents analyze complex patient data in minutes that used to take our team days. This isn't just automation - it's augmented intelligence that makes our clinicians superhuman.",
    metric: "94% faster patient data processing with 73% better accuracy",
    rating: 5,
    avatar: "/images/testimonials/james-wilson.jpg"
  },
  {
    name: "Maria Santos",
    title: "Head of Risk Management",
    company: "FinanceFlow Corp",
    story: "The multi-agent fraud detection system is incredible. These AI agents collaborate, learn from each other, and catch sophisticated attacks our old systems missed completely.",
    metric: "$18.9M in prevented fraud losses in the first year",
    rating: 5,
    avatar: "/images/testimonials/maria-santos.jpg"
  },
  {
    name: "David Park",
    title: "VP of Operations",
    company: "RetailMax Enterprise",
    story: "Our agentic AI handles customer service, inventory management, and demand forecasting simultaneously. It's like having an army of intelligent assistants that never sleep.",
    metric: "238% improvement in customer satisfaction scores",
    rating: 5,
    avatar: "/images/testimonials/david-park.jpg"
  }
];

// AI Implementation Methodology
const aiMethodology = [
  {
    phase: "AI Assessment & Planning",
    duration: "Week 1-3",
    activities: ["AI readiness evaluation", "Use case identification", "Data quality assessment", "Agent architecture design", "ROI modeling"],
    deliverables: ["AI strategy blueprint", "Agent specifications", "Data preparation plan", "Implementation roadmap"],
    icon: BrainCircuit,
    color: "from-violet-500 to-purple-500"
  },
  {
    phase: "Agent Development & Training",
    duration: "Week 4-8",
    activities: ["AI model development", "Agent training", "Workflow integration", "Testing protocols", "Performance optimization"],
    deliverables: ["Trained AI agents", "Integration framework", "Testing results", "Performance benchmarks"],
    icon: Bot,
    color: "from-purple-500 to-pink-500"
  },
  {
    phase: "Orchestration & Integration",
    duration: "Week 9-12",
    activities: ["Multi-agent orchestration", "System integration", "Security implementation", "User interface development", "Change management"],
    deliverables: ["Orchestrated AI system", "Integrated platform", "Security framework", "User training materials"],
    icon: Network,
    color: "from-pink-500 to-rose-500"
  },
  {
    phase: "Deployment & Optimization",
    duration: "Week 13-16",
    activities: ["Production deployment", "Performance monitoring", "Continuous learning", "User adoption", "Optimization cycles"],
    deliverables: ["Live AI system", "Monitoring dashboard", "Learning protocols", "Optimization reports"],
    icon: Sparkles,
    color: "from-rose-500 to-orange-500"
  }
];

// AI Service Features
const aiServices = [
  {
    icon: BrainCircuit,
    title: "Agentic AI Development",
    description: "Build autonomous AI agents that reason, learn, and act independently to solve complex business problems",
    benefits: ["Autonomous decision-making", "Continuous learning", "Multi-agent coordination"],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description: "Deploy generative AI to create content, code, insights, and solutions that accelerate business processes",
    benefits: ["Content generation", "Code automation", "Insight synthesis"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Orchestrate complex workflows with AI agents that adapt, optimize, and scale automatically",
    benefits: ["Adaptive workflows", "Smart optimization", "Auto-scaling"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Brain,
    title: "AI Agent Orchestration",
    description: "Coordinate multiple AI agents to work together seamlessly across departments and systems",
    benefits: ["Multi-agent coordination", "Cross-system integration", "Seamless collaboration"],
    gradient: "from-rose-500 to-orange-500"
  },
  {
    icon: Zap,
    title: "Real-time Intelligence",
    description: "Deploy AI that processes and responds to data in real-time for immediate business impact",
    benefits: ["Real-time processing", "Instant responses", "Immediate insights"],
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: CircuitBoard,
    title: "AI Platform Integration",
    description: "Seamlessly integrate AI capabilities with existing ServiceNow platform and enterprise systems",
    benefits: ["Platform integration", "Enterprise connectivity", "Unified experience"],
    gradient: "from-amber-500 to-yellow-500"
  }
];

// AI Capabilities
const aiCapabilities = [
  {
    title: "Agentic AI Agents Deployed",
    description: "Autonomous AI agents working across industries solving complex business challenges",
    stat: "500+ AI Agents",
    icon: Bot
  },
  {
    title: "Process Automation Rate",
    description: "Average improvement in process efficiency through intelligent automation",
    stat: "234% Improvement",
    icon: Zap
  },
  {
    title: "AI Model Accuracy", 
    description: "Average accuracy across deployed generative AI and agentic AI solutions",
    stat: "97.3% Accuracy",
    icon: Target
  },
  {
    title: "ROI Achievement Time",
    description: "Average time to achieve positive ROI from AI automation implementations",
    stat: "12 Weeks ROI",
    icon: TrendingUp
  }
];

// FAQ Data
const faqs = [
  {
    question: "What is the difference between agentic AI and generative AI in ServiceNow?",
    answer: "Agentic AI refers to autonomous agents that can reason, make decisions, and take actions independently, while generative AI creates content, code, or insights. We combine both - agentic AI agents use generative AI capabilities to create solutions while operating autonomously within your ServiceNow platform."
  },
  {
    question: "How quickly can AI agents be deployed in our ServiceNow environment?",
    answer: "Simple AI agents can be deployed in 2-4 weeks, while complex multi-agent systems typically take 12-16 weeks. Our methodology includes rapid prototyping, so you'll see working agents within the first few weeks of engagement."
  },
  {
    question: "What types of business processes can agentic AI automate?",
    answer: "Agentic AI excels at complex, decision-heavy processes like incident resolution, fraud detection, quality control, customer service, compliance monitoring, and predictive maintenance. These agents can handle multi-step workflows that traditionally required human judgment."
  },
  {
    question: "How do you ensure AI agents make safe and compliant decisions?",
    answer: "We implement comprehensive governance frameworks including decision boundaries, approval workflows, audit trails, and continuous monitoring. All agents operate within defined parameters and can escalate to humans when needed."
  },
  {
    question: "Can AI agents integrate with our existing enterprise systems beyond ServiceNow?",
    answer: "Yes, our AI agents can integrate with ERP, CRM, HR systems, databases, and APIs. We use ServiceNow's Integration Hub and custom connectors to ensure seamless data flow across your entire technology stack."
  },
  {
    question: "How do you measure the ROI of agentic AI implementations?",
    answer: "We track multiple metrics including process efficiency gains, cost reduction, error reduction, response time improvements, and employee productivity increases. Most clients see positive ROI within 12 weeks of deployment."
  },
  {
    question: "What kind of training and support do you provide for AI agent management?",
    answer: "We provide comprehensive training on agent management, monitoring, and optimization. This includes admin training, end-user workshops, monitoring dashboards, and ongoing support for agent performance tuning."
  },
  {
    question: "How do generative AI capabilities enhance traditional ServiceNow workflows?",
    answer: "Generative AI adds content creation, code generation, insight synthesis, and natural language processing to workflows. This enables automated report generation, intelligent responses, code assistance, and dynamic content creation within ServiceNow processes."
  }
];

export default function SmartAutomationAgenticAI() {
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
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with AI Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with AI Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-violet-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating AI Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* AI Circuit Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <CircuitBoard className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-violet-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-violet-600 hover:to-purple-700 transition-all duration-300">
                    ✓ 500+ AI Agents
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    ✓ 234% Efficiency
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500/90 to-rose-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-pink-600 hover:to-rose-600 transition-all duration-300">
                    ✓ 97.3% Accuracy
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-1 sm:px-0">
                  Smart Automation with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 font-semibold">
                    Agentic AI & Generative AI
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    That Works{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 font-semibold">
                      Autonomously
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-violet-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Deploy intelligent AI agents in <span className="font-semibold text-pink-300">12-16 weeks</span> that think, learn, and act independently. <span className="font-semibold text-purple-300">500+ AI agents</span> already transforming enterprises with <span className="font-semibold text-rose-300">234% efficiency gains</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-pink-600/20 hover:from-violet-600/30 hover:via-purple-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">500+</div>
                    <div className="text-xs sm:text-sm text-violet-100">AI Agents</div>
                  </div>
                  <div className="group bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-600/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-rose-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">234%</div>
                    <div className="text-xs sm:text-sm text-purple-100">Efficiency</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-pink-600/20 via-rose-600/20 to-orange-600/20 hover:from-pink-600/30 hover:via-rose-600/30 hover:to-orange-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400">97.3%</div>
                    <div className="text-xs sm:text-sm text-pink-100">Accuracy</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Deploy Your AI Agents
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-pink-400 group-hover:text-pink-300" />
                      Watch AI Agents Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-violet-500/15 to-purple-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="AI Agent Orchestra Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-violet-600 to-purple-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">500+</div>
                      <div className="text-xs text-violet-200">AI Agents</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">97.3%</div>
                      <div className="text-xs text-purple-200">Accuracy</div>
                    </div>
                  </div>
                  
                  {/* Floating AI Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BrainCircuit className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-violet-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-violet-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="service-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600">
                  Why Choose ifBash
                </span>
                <br />
                <span className="text-gray-800">
                  for AI-Powered Automation
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                We don't just deploy AI - we create intelligent autonomous systems that think, learn, and evolve to deliver exponential business value.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {aiServices.map((service, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-violet-100 hover:border-violet-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 sm:mb-4 text-gray-800">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 sm:space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-violet-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Capabilities Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-violet-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-violet-600 mb-2">{capability.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{capability.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Methodology Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-gray-900 via-violet-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="methodology">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                  Our AI Implementation
                </span>
                <br />
                <span className="text-white">
                  Methodology
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-violet-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                A comprehensive 4-phase approach that transforms your business processes with intelligent, autonomous AI agents that deliver measurable results.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {aiMethodology.map((phase, index) => (
                <div key={index} className="group relative" data-animate id={`phase-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mr-4 sm:mr-6 transform group-hover:scale-110 transition-transform duration-300`}>
                          <phase.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1 sm:mb-2">{phase.phase}</h3>
                          <div className="text-violet-200 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {phase.duration}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-violet-200">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-violet-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-violet-200">Key Deliverables</h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center">
                                <FileText className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative">
                        <div className={`aspect-square bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl p-2 sm:p-8 backdrop-blur-sm border border-violet-400/20 hover:border-violet-400/40 transition-all duration-500 transform group-hover:scale-105`}>
                          <div className={`w-full h-full bg-gradient-to-br from-violet-600/30 to-purple-600/30 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                            <div className="text-center relative z-10">
                              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-2 sm:mb-4">
                                0{index + 1}
                              </div>
                              <div className="text-lg font-semibold text-violet-200">
                                {phase.phase.split(' & ')[0]}
                              </div>
                              <div className="text-sm text-violet-300 mt-1 sm:mt-2">
                                {phase.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < aiMethodology.length - 1 && (
                    <div className="flex justify-center mt-4 sm:mt-8 mb-4 sm:mb-8">
                      <div className="w-px h-12 bg-gradient-to-b from-violet-500 to-purple-500 opacity-50"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 sm:mt-16">
              <a href="/get-started"
                className="group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Deploy Your AI Agents Today
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-violet-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600">
                  AI Transformation
                </span>
                <br />
                <span className="text-gray-800">
                  Success Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how our agentic AI and generative AI solutions have revolutionized business operations with autonomous intelligence.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
                        {study.client}
                      </h3>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-red-600">Business Challenge</h4>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-blue-600">AI Solution</h4>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-green-600">AI Impact</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 text-sm font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-4 border-l-4 border-purple-500">
                          <Quote className="h-6 w-6 text-purple-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl p-2 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} AI Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-purple-600 to-violet-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-purple-200">
                          <div className="text-lg font-bold text-purple-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-purple-900 via-violet-900 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-purple-400">
                  What Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our AI Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-violet-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from the innovators who trusted us with their AI transformation and achieved remarkable autonomous intelligence.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <BrainCircuit className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-violet-200">{story.title}, {story.company}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-8">
                          <Quote className="h-8 w-8 text-pink-400 mb-4" />
                          <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-4 sm:mb-6">
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
                            <span className="text-violet-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-pink-300 font-semibold">{story.metric}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-8">
                {clientStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-pink-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-violet-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-violet-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About AI Automation
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our agentic AI and generative AI automation solutions.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 py-3 sm:px-8 sm:py-4 text-left flex items-center justify-between hover:bg-violet-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-violet-600 transition-transform duration-200 flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {openFaq === index && (
                      <div className="px-4 py-3 sm:px-8 sm:py-4">
                        <div className="border-t border-gray-100 pt-3 sm:pt-4">
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
            <div className="text-center mt-8 sm:mt-16">
              <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-3xl p-4 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                  Ready to Deploy Autonomous AI Agents?
                </h3>
                <p className="text-lg md:text-xl text-violet-100 mb-4 max-w-xs sm:max-w-2xl mx-auto">
                  Join 500+ AI agents already transforming enterprises. Get intelligent automation that works autonomously in 12-16 weeks.
                </p>
                <a href="/get-started"
                  className="group px-8 py-4 text-lg font-semibold bg-white text-violet-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your AI Consultation
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
