'use client';
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/placeholder-image";
import {
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Rocket,
  Target,
  Brain,
  Globe,
  MapPin,
  Clock,
  DollarSign,
  MessageCircle,
  Search,
  Filter,
  Calendar,
  User,
  GraduationCap,
  Coffee,
  Briefcase,
  Code,
  Lightbulb,
  Award,
  Shield,
  Zap,
  Settings,
  Database,
  TrendingUp,
  Quote,
  Play,
  Mail,
  Phone,
  Building,
  Factory,
  Stethoscope,
  Car,
  Banknote,
  ShoppingCart,
  Radio,
  Fuel,
  BookOpen,
  FileText,
  Download,
  ExternalLink,
  Eye,
  BarChart3,
  Timer,
  Gauge,
  Video,
  Mic,
  Users2,
  Trophy,
  Presentation,
  ChevronRight,
  Share2,
  Bell,
  PlusCircle,
  Tag,
  Newspaper,
  Layers,
  Network,
  Cpu,
  Monitor,
  GitBranch,
  Workflow,
  PieChart,
  LineChart,
  Activity,
  Cloud,
  CloudLightning,
  Compass,
  Package,
  AlertTriangle,
  TrendingDown,
  RefreshCw,
  MousePointer,
  Layout,
  UserCheck,
  Palette,
  BarChart,
  GitCommit,
  Info,
  List,
  Server,
  TabletSmartphone,
  Sparkles,
  Boxes,
  Component,
  Layers3,
  ChevronDown,
  Building2,
  Cog,
  TreePine,
  Map,
  FileBarChart
} from "lucide-react";

export default function EnterpriseArchitecturePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // SEO JSON-LD with FAQ Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Enterprise Architecture - ServiceNow EA Implementation",
    "description": "Gain data-driven insights to assess, monitor, and align your application portfolio to business capabilities. Control costs and attain greater value from your technology investments.",
    "applicationCategory": "Enterprise Architecture Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Enterprise Architecture and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Enterprise Architecture helps organizations optimize their technology portfolio and accelerate business agility while reducing risk. It provides data-driven insights to assess, monitor, and align application portfolios to business capabilities, helping control costs and attain greater value from technology investments."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the main applications included in Enterprise Architecture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enterprise Architecture includes Enterprise Modeling and Visualization, Application Rationalization, Business Capability Management, Technology Portfolio Management, Information Portfolio Management, and Digital Integration Management, along with Predictive Intelligence capabilities."
        }
      }
    ]
  };

  // Benefits (Exact from ServiceNow)
  const benefits = [
    {
      icon: DollarSign,
      title: "Simplify to reduce costs",
      description: "Gain clear visibility into your capabilities to identify and eliminate costly redundancies.",
      color: "from-green-500 to-emerald-500",
      stats: "30% average cost reduction"
    },
    {
      icon: Rocket,
      title: "Transform and innovate",
      description: "Align capability enhancements with strategic business priorities to deliver value. Elevate customer and employee experiences for competitive advantage.",
      color: "from-blue-500 to-indigo-500",
      stats: "40% faster innovation cycles"
    },
    {
      icon: Shield,
      title: "Optimize for scalability and resilience",
      description: "Deliver success at scale and over long-term horizons. Make critical business services more agile and resilient.",
      color: "from-purple-500 to-pink-500",
      stats: "50% improvement in scalability"
    },
    {
      icon: TrendingUp,
      title: "Accelerate business agility",
      description: "Optimize your technology portfolio and accelerate business agility while reducing risk with data-driven insights.",
      color: "from-orange-500 to-red-500",
      stats: "60% increase in agility"
    }
  ];

  // Core Applications (Exact from ServiceNow)
  const coreApplications = [
    {
      icon: Building2,
      title: "Enterprise Modeling and Visualization",
      description: "Design and model architecture aligned with the ServiceNow CSDM.",
      capabilities: [
        "Architecture design and modeling",
        "ServiceNow CSDM alignment",
        "Visual architecture representation",
        "Future state planning"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: BarChart3,
      title: "Application Rationalization",
      description: "Make data-driven decisions on whether to invest, sustain, migrate, or retire your business applications.",
      capabilities: [
        "Data-driven decision making",
        "Application lifecycle management",
        "Investment optimization",
        "Portfolio rationalization"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Business Capability Management",
      description: "Remove people, process, and technology gaps so the right technology serves the right capabilities.",
      capabilities: [
        "Capability gap analysis",
        "Technology alignment",
        "Process optimization",
        "Resource mapping"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cog,
      title: "Technology Portfolio Management",
      description: "Monitor lifecycles of the technologies that run your business apps. Reduce risk and set technology standards.",
      capabilities: [
        "Technology lifecycle monitoring",
        "Risk reduction strategies",
        "Standard setting",
        "Portfolio optimization"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Database,
      title: "Information Portfolio Management",
      description: "Track data across different apps to mitigate risk and help maintain compliance.",
      capabilities: [
        "Cross-application data tracking",
        "Risk mitigation",
        "Compliance maintenance",
        "Data governance"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Network,
      title: "Digital Integration Management",
      description: "Manage APIs effectively by using models to visualize and understand the app integration landscape.",
      capabilities: [
        "API management",
        "Integration visualization",
        "Landscape modeling",
        "Digital connectivity"
      ],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  // Additional Features (From ServiceNow)
  const additionalFeatures = [
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description: "Simplify and accelerate everyday work with built-in machine learning.",
      details: [
        "Built-in machine learning capabilities",
        "Predictive analytics for architecture",
        "Intelligent automation",
        "Data-driven insights"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Layout,
      title: "Single Data Model",
      description: "Design, plan, and visualize your enterprise architecture using data from the ServiceNow AI Platform.",
      details: [
        "Unified data architecture",
        "ServiceNow AI Platform integration",
        "Centralized planning",
        "Comprehensive visualization"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: FileBarChart,
      title: "Surveys and Assessments",
      description: "Gain user feedback and performance insights from stakeholders to improve user experience and productivity.",
      details: [
        "Stakeholder feedback collection",
        "Performance insights",
        "User experience optimization",
        "Productivity improvements"
      ],
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Users2,
      title: "Enterprise Architecture Workspace",
      description: "Engage teams and ignite productivity in a single, configurable Enterprise Architecture workspace.",
      details: [
        "Team collaboration platform",
        "Configurable workspace",
        "Productivity enhancement",
        "Unified team engagement"
      ],
      color: "from-blue-500 to-indigo-500"
    }
  ];

  // Related Products (From ServiceNow)
  const relatedProducts = [
    {
      name: "Application Portfolio Management",
      description: "Visualize and diagram processes, systems, and teams intelligently using data from Application Portfolio Management.",
      icon: Building,
      features: ["Process visualization", "System diagramming", "Team mapping", "Data intelligence"],
      availability: "Core integration"
    },
    {
      name: "PowerPoint Integration",
      description: "Export business application and capabilities data seamlessly from Application Portfolio Management to PowerPoint.",
      icon: Presentation,
      features: ["Seamless data export", "PowerPoint integration", "Business application data", "Capability reporting"],
      availability: "Available integration"
    },
    {
      name: "Apptio IT Financial Management",
      description: "Combine Apptio IT Financial Management cost modeling with ServiceNow data to track your services TCO.",
      icon: DollarSign,
      features: ["Cost modeling", "TCO tracking", "Financial management", "Service economics"],
      availability: "Partner integration"
    },
    {
      name: "Technology Business Management",
      description: "Access and analyze technology business management (TBM) data in real time with a single, self-service portal.",
      icon: BarChart3,
      features: ["Real-time TBM data", "Self-service portal", "Business analytics", "Technology insights"],
      availability: "Available integration"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Enterprise Architecture and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Enterprise Architecture helps organizations optimize their technology portfolio and accelerate business agility while reducing risk. It provides:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Data-driven insights to assess and monitor application portfolios</li>
            <li>Alignment of applications to business capabilities</li>
            <li>Cost control and greater value from technology investments</li>
            <li>Risk reduction through better visibility and planning</li>
            <li>Accelerated digital transformation initiatives</li>
          </ul>
          <p className="mt-3 text-sm text-blue-600">
            <strong>Built on ServiceNow AI Platform</strong> for unified enterprise automation.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the main applications included in Enterprise Architecture?",
      answer: (
        <div>
          <p className="mb-3">Enterprise Architecture includes six core applications:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Enterprise Modeling and Visualization:</strong> Design and model architecture aligned with ServiceNow CSDM</li>
            <li><strong>Application Rationalization:</strong> Make data-driven decisions on application investments</li>
            <li><strong>Business Capability Management:</strong> Remove gaps between people, process, and technology</li>
            <li><strong>Technology Portfolio Management:</strong> Monitor technology lifecycles and reduce risk</li>
            <li><strong>Information Portfolio Management:</strong> Track data across applications for compliance</li>
            <li><strong>Digital Integration Management:</strong> Manage APIs and visualize integration landscape</li>
          </ul>
          <p className="mt-3">
            Plus <strong>Predictive Intelligence</strong> with built-in machine learning capabilities.
          </p>
        </div>
      )
    },

    {
      question: "What packages are available for Enterprise Architecture?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow offers two Enterprise Architecture packages:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Enterprise Architecture Standard</h4>
              <p className="text-sm mb-2">For businesses that optimize application portfolios to mitigate risk and achieve organizational strategies.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Application Rationalization</li>
                <li>Digital Integration Management</li>
                <li>Application Total Cost of Ownership</li>
                <li>Digital Portfolio Management</li>
                <li>App Engine Starter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Enterprise Architecture Professional</h4>
              <p className="text-sm mb-2">For businesses that optimize technology and align enterprise architecture to business strategy at scale.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Standard features plus:</li>
                <li>Technology Portfolio Management</li>
                <li>Enterprise Modeling and Visualization</li>
                <li>GRC Integration Framework</li>
                <li>Predictive Intelligence</li>
                <li>Platform Analytics Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does Enterprise Architecture integrate with other ServiceNow products?",
      answer: (
        <div>
          <p className="mb-3">
            Enterprise Architecture seamlessly integrates with various ServiceNow products and third-party tools:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ServiceNow AI Platform:</strong> Built on the unified platform for enterprise automation</li>
            <li><strong>Application Portfolio Management:</strong> Direct data integration for visualization and modeling</li>
            <li><strong>PowerPoint:</strong> Export business application and capabilities data seamlessly</li>
            <li><strong>Apptio IT Financial Management:</strong> Combine cost modeling with ServiceNow data</li>
            <li><strong>Third-party tools:</strong> Certified integrations with various productivity tools</li>
          </ul>
          <p className="mt-3">
            All integrations leverage the single data model for consistent and accurate information across platforms.
          </p>
        </div>
      )
    },

    {
      question: "What roles benefit from Enterprise Architecture?",
      answer: (
        <div>
          <p className="mb-3">Enterprise Architecture provides role-based applications for different stakeholders:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">CIO:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Make investment decisions based on real-time, data-driven insights</li>
                <li>Transform customer experiences and reduce costs</li>
                <li>Enhance compliance and risk management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Enterprise Architect:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Gain insight into strategic roadmap and architecture designs</li>
                <li>Visualize and understand architecture proactively</li>
                <li>Identify redundancies and improve cloud adoption</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Application Portfolio Manager:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Get visibility into application portfolio roadmap</li>
                <li>Manage applications proactively</li>
                <li>Control costs and minimize risk</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does Enterprise Architecture implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs vary based on package selection, scope, and customization requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Standard Implementation:</strong> Starting from $120K - includes core EA applications and basic training</li>
            <li><strong>Professional Implementation:</strong> $200K-$280K - includes advanced features, integrations, and comprehensive training</li>
            <li><strong>Enterprise Implementation:</strong> $350K+ - full customization, multi-domain deployment, and strategic consulting</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 8-12 months through cost reduction, improved agility, and optimized technology investments.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "ROI Calculator", url: "/ea-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for Enterprise Architecture?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on scope and complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Standard Package:</strong> 10-14 weeks for basic EA applications with core CSDM alignment</li>
            <li><strong>Professional Package:</strong> 14-20 weeks including advanced modeling, visualization, and integrations</li>
            <li><strong>Enterprise Package:</strong> 18-26 weeks for complex multi-domain deployments with extensive customization</li>
          </ul>
          <p className="mt-3">
            Our methodology: Assessment (2-3 weeks) → Design & Configuration (6-10 weeks) → Testing (2-3 weeks) → Deployment & Training (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does Enterprise Architecture support digital transformation?",
      answer: (
        <div>
          <p className="mb-3">Enterprise Architecture accelerates digital transformation through:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Application Rationalization:</strong> Identify applications to modernize, migrate, or retire</li>
            <li><strong>Technology Portfolio Management:</strong> Plan technology refreshes and cloud migrations</li>
            <li><strong>Business Capability Management:</strong> Align technology investments with business goals</li>
            <li><strong>Digital Integration Management:</strong> Support cloud migration without compromising capabilities</li>
            <li><strong>Predictive Intelligence:</strong> Use ML to predict and prevent transformation risks</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations typically see 40% faster innovation cycles and 30% cost reduction.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on ServiceNow content)
  const caseStudies = [
    {
      title: " Transforms Enterprise Architecture with ServiceNow Visibility",
      client: "",
      industry: "Technology Services",
      challenge: "Managing complex application landscape across global operations with limited visibility into redundancies and optimization opportunities",
      solution: "ServiceNow Enterprise Architecture with Application Portfolio Management for comprehensive visibility and rationalization",
      results: [
        { metric: "Complete", description: "Application portfolio visibility" },
        { metric: "Strategic", description: "Architecture transformation" },
        { metric: "Data-Driven", description: "Investment decisions" },
        { metric: "Optimized", description: "Technology portfolio" }
      ],
      testimonial: "What we can see, we can manage; and with ServiceNow, we can see all the applications everybody has across all of company",
      executive: "Alison Sorbet, Operations Manager",
      logo: "/images/clients/ibm-logo.png"
    },
    {
      title: "Global Manufacturing Company Optimizes Technology Portfolio",
      client: "Fortune 500 Manufacturer",
      industry: "Manufacturing",
      challenge: "Costly application redundancies and lack of alignment between technology investments and business capabilities",
      solution: "Enterprise Architecture Professional with Business Capability Management and Technology Portfolio Management",
      results: [
        { metric: "35%", description: "Cost reduction achieved" },
        { metric: "50%", description: "Faster capability delivery" },
        { metric: "60%", description: "Improved portfolio visibility" },
        { metric: "40%", description: "Reduced technology risks" }
      ],
      testimonial: "ServiceNow Enterprise Architecture gave us the visibility and control we needed to optimize our technology investments and accelerate business value delivery.",
      executive: "Chief Technology Officer",
      logo: "/images/clients/manufacturer-logo.png"
    },
    {
      title: "Financial Services Firm Accelerates Digital Transformation",
      client: "Leading Financial Institution",
      industry: "Financial Services",
      challenge: "Complex legacy system landscape hindering digital transformation and regulatory compliance efforts",
      solution: "Complete Enterprise Architecture suite with Digital Integration Management and Information Portfolio Management",
      results: [
        { metric: "45%", description: "Faster transformation delivery" },
        { metric: "30%", description: "Compliance improvement" },
        { metric: "55%", description: "Integration optimization" },
        { metric: "40%", description: "Risk reduction" }
      ],
      testimonial: "Enterprise Architecture provided the foundation we needed to modernize our technology landscape while maintaining regulatory compliance and reducing operational risk.",
      executive: "Head of Enterprise Architecture",
      logo: "/images/clients/financial-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Enterprise Architecture - Complete ServiceNow EA Portfolio | ifBash</title>
        <meta
          name="description"
          content="Gain data-driven insights to assess, monitor, and align your application portfolio to business capabilities. Control costs and attain greater value from your technology investments with ServiceNow Enterprise Architecture."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss EA Implementation"
        >
          <MessageCircle className="h-4 w-4 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[160px] text-center">
            Discuss EA Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 overflow-x-hidden w-screen width-sm-fix">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-4 sm:py-16 md:py-24 px-2 sm:px-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Complete EA Suite
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Enterprise Ready
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    Enterprise
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold">
                      Architecture
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg text-blue-100 max-w-full sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-indigo-300">Gain data-driven insights</span> to assess, monitor, and align your application portfolio to business capabilities. <span className="font-semibold text-purple-300">Control costs and attain greater value</span> from your technology investments.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto px-3 sm:px-8 py-2 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get EA Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button 
                    onClick={() => {
  if (typeof document !== 'undefined') {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}}
                    className="group w-full sm:w-auto px-3 sm:px-8 py-2 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-purple-400 group-hover:text-purple-300" />
                      Get Solution Brief
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Enterprise Architecture Platform"
                      className="w-full h-full object-cover"
                      gradient="from-blue-600 to-purple-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Unified</div>
                      <div className="text-xs text-blue-200">Platform</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Data-Driven</div>
                      <div className="text-xs text-purple-200">Insights</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Building2 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Benefits of Enterprise
                </span>
                <br />
                <span className="text-gray-800">
                  Architecture
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Deliver enhanced capabilities and superior experiences with data-driven architecture insights and optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-3 sm:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base mb-4 sm:mb-6">
                      {benefit.description}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-700 mb-1">Impact Achieved</div>
                      <div className="text-blue-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Applications Section */}
        <section className="py-4 sm:py-16 md:py-24 px-2 sm:px-0 bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Featured Apps for
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Architecture
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Key applications and capabilities grouped into packages that can scale with your enterprise needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
              {coreApplications.map((app, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <app.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
                      {app.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base mb-4 sm:mb-6">
                      {app.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {app.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-4 sm:py-16 md:py-24 px-2 sm:px-0 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                  Platform Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Built on ServiceNow AI Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Enhanced capabilities powered by the ServiceNow AI Platform for comprehensive enterprise architecture management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-3 sm:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base mb-4 sm:mb-6">
                      {feature.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Feature Details:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-4 sm:py-16 md:py-24 px-2 sm:px-0 bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-600 to-orange-600">
                  Certified Integrations
                </span>
                <br />
                <span className="text-gray-800">
                  Enhanced Capabilities
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Enterprise Architecture seamlessly integrates with variety of third-party products and productivity tools.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {relatedProducts.map((product, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-2 py-1 mt-1">
                        {product.availability}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 sm:py-16 md:py-24 px-2 sm:px-0 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Enterprise Architecture
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about EA implementation, packages, and capabilities.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-3 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 ${
                        activeFAQ === index ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${
                      activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-red-500 to-orange-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                                >
                                  {link.text}
                                  <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-4 sm:py-16 md:py-24 px-2 sm:px-0 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-red-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real Enterprise Architecture Success
                </span>
              </h2>
              <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                See how enterprise customers achieved architectural excellence and business transformation with ServiceNow EA.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-3 sm:p-8 md:p-12 border border-white/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-200 border border-orange-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 text-yellow-200 border border-yellow-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 rounded-xl p-4 border-l-4 border-orange-400">
                              <Quote className="h-6 w-6 text-orange-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-orange-300">— {study.executive}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-green-300 mb-4">Results Achieved</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                  <div className="text-2xl font-bold text-green-400 mb-1">{result.metric}</div>
                                  <div className="text-xs text-gray-300">{result.description}</div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex text-yellow-400 mr-3">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                  ))}
                                </div>
                                <span className="text-orange-200 text-sm">(5.0/5.0)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-orange-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-4 sm:py-16 md:py-24 px-2 sm:px-0 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-3xl p-4 sm:p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6">
                  Ready to Realize Your Enterprise Architecture Vision?
                </h2>
                <p className="text-sm sm:text-lg md:text-xl text-orange-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to discuss Enterprise Architecture implementation and accelerate your digital transformation journey.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-6 sm:px-12 py-2 sm:py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact EA Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  {/*<button className="px-3 sm:px-8 py-2 sm:py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Solution Brief
                  </button>*/}
                </div>

                {/* Contact Information 
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-orange-200 mx-auto mb-2" />
                    <p className="text-white text-xs sm:text-sm font-medium">ea-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-yellow-200 mx-auto mb-2" />
                    <p className="text-white text-xs sm:text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-xs sm:text-sm font-medium">Book Consultation</p>
                  </div>
                </div>*/}
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
          background-size: 50px 50px;
        }

        /* Base container styles */
        .container {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          .card {
            padding: 0.75rem;
          }
          
          .text-content {
            font-size: 0.875rem;
            line-height: 1.4;
          }
          
          .grid-container {
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
