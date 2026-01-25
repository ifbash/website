'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GitBranch,
  Monitor,
  Code,
  ChevronRight, 
  TestTube2,
  Stethoscope,
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
  RefreshCw,        // ✅ Fixed: Replace Sync with RefreshCw
  CloudDownload,    // ✅ Fixed: Replace CloudArrowDown with CloudDownload
  Server,           // ✅ Fixed: Replace ServerStack with Server
  Search, 
  ChevronDown, 
  Wind, 
  Sun, 
  Battery, 
  Fuel, 
  Power, 
  Plug
} from 'lucide-react';

// Case Studies Data
const caseStudies = [
  {
    client: "TechFlow Systems",
    industry: "Software Development",
    challenge: "Development lifecycle inefficiencies across 150 projects with 45% deployment delays costing $34M annually in missed opportunities",
    solution: "ServiceNow DevOps platform with automated CI/CD, project management, and intelligent release coordination",
    results: ["78% faster development cycles", "91% reduction in deployment failures", "$41M revenue acceleration", "99% code quality score"],
    timeline: "12 weeks implementation",
    image: "/images/case-studies/techflow-software.jpg",
    testimonial: "ifBash transformed our software development from chaotic to streamlined. We now deliver features 78% faster with zero critical deployment failures."
  },
  {
    client: "CloudTech Innovations",
    industry: "Cloud Services",
    challenge: "Service management complexity across multi-cloud environments with 67% customer satisfaction due to incident response delays",
    solution: "Unified IT service management platform with AI-powered incident prediction and automated cloud orchestration",
    results: ["89% faster incident resolution", "156% improvement in customer satisfaction", "$28M cost optimization", "Zero service outages"],
    timeline: "16 weeks rollout",
    image: "/images/case-studies/cloudtech-cloud.jpg",
    testimonial: "The cloud service management platform ifBash built gives us unprecedented visibility and control across our entire multi-cloud infrastructure."
  },
  {
    client: "DataAnalytics Pro",
    industry: "Data & Analytics",
    challenge: "Customer onboarding taking 45 days with manual processes causing 34% churn rate and $23M lost revenue",
    solution: "Automated customer success platform with predictive analytics, automated workflows, and intelligent engagement",
    results: ["87% faster onboarding", "73% reduction in churn rate", "$31M revenue recovery", "94% customer retention"],
    timeline: "14 weeks deployment",
    image: "/images/case-studies/dataanalytics-data.jpg",
    testimonial: "Our customer success transformation with ifBash reduced churn by 73% and accelerated onboarding beyond our wildest expectations."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Alex Johnson",
    title: "CTO",
    company: "",
    story: "ifBash's DevOps expertise revolutionized our development process. We went from constant deployment issues to seamless, automated releases that our team trusts completely.",
    metric: "78% faster development cycles with 91% fewer deployment failures",
    rating: 5,
    avatar: "/images/testimonials/alex-johnson-tech.jpg"
  },
  {
    name: "Maria Santos",
    title: "VP of Engineering",
    company: "", 
    story: "The multi-cloud management platform ifBash delivered gives us capabilities that seemed impossible before. We now manage complex cloud environments with unprecedented efficiency.",
    metric: "89% faster incident resolution with 156% customer satisfaction improvement",
    rating: 5,
    avatar: "/images/testimonials/maria-santos-cloud.jpg"
  },
  {
    name: "Dr. Robert Kim",
    title: "Chief Data Officer",
    company: "",
    story: "Customer success was our biggest challenge until ifBash built our automated engagement platform. Churn rates plummeted while satisfaction soared to new heights.",
    metric: "87% faster onboarding with 73% churn reduction",
    rating: 5,
    avatar: "/images/testimonials/robert-kim-data.jpg"
  },
  {
    name: "Jennifer Lee",
    title: "Head of Product",
    company: "",
    story: "The product lifecycle management system ifBash created transformed how we innovate. We now ship features faster while maintaining the highest quality standards.",
    metric: "156% improvement in product delivery speed",
    rating: 5,
    avatar: "/images/testimonials/jennifer-lee-product.jpg"
  }
];

// Technology Solutions
const technologySolutions = [
  {
    icon: Code,
    title: "DevOps & Development Lifecycle",
    description: "Streamline software development with automated CI/CD, release management, and intelligent deployment coordination",
    benefits: ["Automated deployment", "Release coordination", "Quality gates"],
    gradient: "from-violet-500 to-purple-500",
    useCases: ["CI/CD automation", "Release management", "Code quality"]
  },
  {
    icon: CloudLightning,
    title: "Cloud Operations Management", 
    description: "Manage multi-cloud environments with unified monitoring, automated scaling, and intelligent resource optimization",
    benefits: ["Multi-cloud visibility", "Auto-scaling", "Cost optimization"],
    gradient: "from-purple-500 to-pink-500",
    useCases: ["Cloud monitoring", "Resource management", "Cost control"]
  },
  {
    icon: Users,
    title: "Customer Success Automation",
    description: "Automate customer onboarding, engagement, and success workflows to reduce churn and accelerate growth",
    benefits: ["Automated onboarding", "Churn prediction", "Success metrics"],
    gradient: "from-pink-500 to-rose-500",
    useCases: ["Customer onboarding", "Engagement tracking", "Success planning"]
  },
  {
    icon: Monitor,
    title: "IT Service Management",
    description: "Optimize IT operations with intelligent incident management, automated workflows, and predictive analytics",
    benefits: ["Incident automation", "Predictive alerts", "Service optimization"],
    gradient: "from-rose-500 to-red-500",
    useCases: ["Incident management", "Service delivery", "Performance monitoring"]
  },
  {
    icon: GitBranch,
    title: "Product Lifecycle Management",
    description: "Manage product development from ideation to launch with automated workflows and intelligent prioritization",
    benefits: ["Feature prioritization", "Release planning", "Quality tracking"],
    gradient: "from-red-500 to-orange-500",
    useCases: ["Product planning", "Feature management", "Launch coordination"]
  },
  {
    icon: Shield,
    title: "Security & Compliance Operations",
    description: "Automate security processes, compliance tracking, and risk management across technology environments",
    benefits: ["Security automation", "Compliance tracking", "Risk assessment"],
    gradient: "from-orange-500 to-amber-500",
    useCases: ["Security monitoring", "Compliance reporting", "Risk management"]
  }
];

// Technology Metrics
const technologyMetrics = [
  {
    title: "Development Speed Improvement",
    description: "Average acceleration in software development and deployment cycles",
    stat: "78% Faster",
    icon: Rocket
  },
  {
    title: "System Reliability Rate",
    description: "Average improvement in system uptime and deployment success rates",
    stat: "99% Uptime",
    icon: Shield
  },
  {
    title: "Customer Satisfaction Score", 
    description: "Average improvement in customer satisfaction through better technology delivery",
    stat: "156% Better",
    icon: Heart
  },
  {
    title: "Cost Optimization Achievement",
    description: "Average cost savings through technology process automation and optimization",
    stat: "$41M Savings",
    icon: DollarSign
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Technology Assessment & Strategy",
    duration: "Week 1-2",
    activities: ["Development process analysis", "Technology stack evaluation", "Service delivery assessment", "Integration planning", "Security review"],
    deliverables: ["Technology roadmap", "Development optimization plan", "Integration architecture", "Security framework"],
    icon: Search,
    color: "from-violet-500 to-purple-500"
  },
  {
    phase: "Platform Configuration & Automation",
    duration: "Week 3-8",
    activities: ["ServiceNow tech setup", "DevOps pipeline automation", "Service management configuration", "Integration development", "Security implementation"],
    deliverables: ["Automated dev platform", "Service management system", "Integration framework", "Security controls"],
    icon: Settings,
    color: "from-purple-500 to-pink-500"
  },
  {
    phase: "Testing & Optimization",
    duration: "Week 9-11",
    activities: ["Automated testing", "Performance optimization", "Security validation", "User training", "Process refinement"],
    deliverables: ["Tested automation", "Performance benchmarks", "Security validation", "Training programs"],
    icon: CheckCircle,
    color: "from-pink-500 to-rose-500"
  },
  {
    phase: "Deployment & Continuous Improvement",
    duration: "Week 12-14",
    activities: ["Production deployment", "Team enablement", "Monitoring setup", "Feedback integration", "Optimization cycles"],
    deliverables: ["Live tech platform", "Trained teams", "Monitoring systems", "Improvement processes"],
    icon: Rocket,
    color: "from-rose-500 to-red-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow accelerate software development lifecycles?",
    answer: "ServiceNow streamlines software development through automated CI/CD pipelines, intelligent release coordination, integrated project management, and real-time collaboration tools. Our platform reduces manual overhead, eliminates deployment bottlenecks, and enables teams to focus on innovation rather than process management."
  },
  {
    question: "What cloud operations capabilities does ServiceNow provide?",
    answer: "ServiceNow offers comprehensive cloud operations management including multi-cloud visibility, automated resource scaling, cost optimization, security monitoring, and intelligent workload management. Our platform provides unified control across AWS, Azure, GCP, and hybrid environments."
  },
  {
    question: "How can ServiceNow improve customer success for technology companies?",
    answer: "ServiceNow automates customer success processes through intelligent onboarding workflows, predictive churn analysis, automated engagement campaigns, and comprehensive success metrics tracking. Technology companies can reduce time-to-value, prevent churn, and scale customer success operations efficiently."
  },
  {
    question: "What IT service management features are included for tech companies?",
    answer: "ServiceNow ITSM for technology companies includes intelligent incident management, automated problem resolution, service catalog automation, change management workflows, and predictive analytics. Our platform is designed to handle the complex, fast-paced IT environments typical in technology organizations."
  },
  {
    question: "How does ServiceNow support product lifecycle management?",
    answer: "ServiceNow provides end-to-end product lifecycle management with feature prioritization algorithms, release planning automation, quality gate enforcement, stakeholder collaboration tools, and comprehensive analytics. Product teams can deliver better products faster while maintaining quality standards."
  },
  {
    question: "What ROI can technology companies expect from ServiceNow?",
    answer: "Technology companies typically see 50-80% improvements in development velocity, 60-90% reductions in deployment failures, and 40-70% improvements in customer satisfaction. Most organizations achieve positive ROI within 6-12 months through increased efficiency and reduced operational overhead."
  },
  {
    question: "How does ServiceNow integrate with existing development tools?",
    answer: "ServiceNow seamlessly integrates with popular development tools including GitHub, GitLab, Jira, Jenkins, Docker, Kubernetes, and major cloud platforms. Our extensive API ecosystem and pre-built connectors ensure smooth integration with existing technology stacks."
  },
  {
    question: "What security and compliance features are available for tech companies?",
    answer: "ServiceNow provides comprehensive security and compliance capabilities including automated vulnerability management, compliance reporting, security incident response, access controls, and audit trails. Our platform helps technology companies maintain security while accelerating development processes."
  }
];

export default function TechnologySoftware() {
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
          aria-label="Chat with Tech Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Tech Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-violet-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Tech Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Code Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Code className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-violet-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-violet-600 hover:to-purple-700 transition-all duration-300">
                    ✓ 78% Faster Dev
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                    ✓ 99% Uptime
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500/90 to-rose-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-pink-600 hover:to-rose-600 transition-all duration-300">
                    ✓ $41M Savings
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 font-semibold">
                    Technology & Software
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    DevOps{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-violet-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Transform technology operations with <span className="font-semibold text-purple-300">DevOps automation</span>, cloud management, and intelligent service delivery. Achieve <span className="font-semibold text-pink-300">78% faster development</span> with <span className="font-semibold text-rose-300">$41M savings</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-pink-600/20 hover:from-violet-600/30 hover:via-purple-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">78%</div>
                    <div className="text-xs sm:text-sm text-violet-100">Faster Dev</div>
                  </div>
                  <div className="group bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-600/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-rose-600/30 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">99%</div>
                    <div className="text-xs sm:text-sm text-purple-100">Uptime</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-pink-600/20 via-rose-600/20 to-red-600/20 hover:from-pink-600/30 hover:via-rose-600/30 hover:to-red-600/30 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400">$41M</div>
                    <div className="text-xs sm:text-sm text-pink-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[44px] sm:min-h-[56px] px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Accelerate Development
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[44px] sm:min-h-[56px] px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-pink-400 group-hover:text-pink-300" />
                      Watch Tech Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-violet-500/15 to-purple-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="DevOps Automation Dashboard"
                      
                      className="w-full h-full object-cover"
                      gradient="from-violet-600 to-purple-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-lg sm:text-2xl font-bold text-white mb-1">78%</div>
                      <div className="text-xs text-violet-200">Faster</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-lg sm:text-2xl font-bold text-white mb-1">99%</div>
                      <div className="text-xs text-purple-200">Uptime</div>
                    </div>
                  </div>
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-4 -right-4 sm:-top-10 sm:-right-10 w-12 h-12 sm:w-20 sm:h-20 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Code className="h-6 w-6 sm:h-10 sm:w-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-10 w-12 h-12 sm:w-20 sm:h-20 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <CloudLightning className="h-6 w-6 sm:h-10 sm:w-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-violet-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-violet-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="solutions-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600">
                  Technology Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Accelerate Innovation
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of technology operations with intelligent solutions designed for the modern development era.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {technologySolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-violet-100 hover:border-violet-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-violet-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-violet-50 text-violet-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Metrics Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {technologyMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-violet-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-violet-600 mb-2">{metric.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-20 bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/50 to-violet-900" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">
                  Our Implementation
                </span>
                <span className="text-white"> Methodology</span>
              </h2>
              <p className="text-gray-300 text-lg">
                A proven four-phase approach that ensures successful technology implementations with maximum efficiency.
              </p>
            </div>

            <div className="relative">
              {/* Journey Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 transform -translate-y-1/2 opacity-50" />
              
              {/* Journey Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {implementationApproach.map((step, index) => (
                  <div key={index} className="relative group h-full">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r ${step.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 opacity-80`} />
                    <div className={`relative h-full bg-gradient-to-br ${step.color} p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-white/20 flex flex-col group-hover:border-white/30 shadow-lg hover:shadow-2xl`}
                      style={{
                        boxShadow: "0 0 40px rgba(139, 92, 246, 0.1)"
                      }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent rounded-xl opacity-50" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl backdrop-blur-sm border border-white/10 shadow-inner">
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-sm text-white/90 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                            {step.duration}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text">
                          {step.phase}
                        </h3>
                        <ul className="space-y-3">
                          {step.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-3 group/item">
                              <div className="p-1 rounded-full bg-white/10 backdrop-blur-sm">
                                <CheckCircle className="h-3 w-3 text-white group-hover/item:text-white/90 transition-colors duration-200" />
                              </div>
                              <span className="text-sm text-white/80 group-hover:item:text-white transition-colors duration-200">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                      <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <a href="/get-started"
                className="inline-block group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Technology Transformation
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
                  Technology Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how technology leaders have transformed their operations with ServiceNow solutions that deliver measurable results.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {study.client}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-red-600 mb-2">Challenge</h4>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution</h4>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-green-600 mb-3">Results</h4>
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
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Technology Solution`}
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400">
                  What Technology Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-purple-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from technology executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-6">
                            <Code className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-purple-200">{story.title}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <Quote className="h-8 w-8 text-pink-400 mb-4" />
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
                            <span className="text-purple-200 text-sm">({story.rating}.0/5.0)</span>
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
                  About Technology Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for the technology industry.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-violet-50 transition-colors duration-200"
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
            <div className="text-center mt-8 sm:mt-16">
              <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Ready to Accelerate Your Technology Operations?
                </h3>
                <p className="text-xs sm:text-lg md:text-xl text-violet-100 mb-8 max-w-xs sm:max-w-2xl mx-auto">
                  Join technology leaders achieving 78% faster development. Get DevOps solutions that deliver 99% uptime and $41M savings.
                </p>
                <a href="/get-started"
                  className="inline-block group px-8 py-4 text-sm sm:text-lg font-semibold bg-white text-violet-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Technology Consultation
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
