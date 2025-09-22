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
  FileBarChart,
  CloudCog,
  CreditCard,
  ShieldCheck,
  Banknote as CostIcon,
  CloudDrizzle,
  Wrench,
  Search as DiscoverIcon,
  AlertTriangle as AlertIcon,
  HardHat,
  Laptop,
  HardDrive,
  Smartphone,
  ChevronUp,
  Bot,
  Radar,
  Route,
  FileX,
  MonitorSpeaker,
  CircuitBoard,
  Gauge as GaugeIcon,
  ChevronRightIcon,
  HelpCircle,
  RepeatIcon,
  GitMerge,
  Shuffle,
  BarChart4,
  Layers2,
  Link,
  Navigation,
  Gamepad2,
  TestTube2,
  Smile,
  Leaf,
  Headphones
} from "lucide-react";

export default function DigitalEndUserExperiencePage() {
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
    "name": "Digital End-User Experience - ServiceNow DEX Implementation",
    "description": "Measure and continuously improve the technology experience for your employees. Enable self-service and engage with IT with Digital End-User Experience.",
    "applicationCategory": "Digital Employee Experience"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Digital End-User Experience and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Digital End-User Experience helps measure and continuously improve the technology experience for employees. It enables self-service capabilities and simplifies engagement with informed IT teams when extra support is needed."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the main features of Digital End-User Experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DEX includes Desktop Assistant, Application and Device Health monitoring, Digital Experience Score, Proactive Engagement, Application Network Experience, Bulk Remedial Action, Microsoft Teams Monitoring, and ESG Integration."
        }
      }
    ]
  };

  // Benefits (Exact from ServiceNow)
  const benefits = [
    {
      icon: Smile,
      title: "Boost employee satisfaction",
      description: "Connect your employees seamlessly to self-service tools so they can quickly identify, diagnose, and resolve many IT issues. Simplify their communications with IT.",
      color: "from-violet-500 to-purple-500",
      stats: "90% employee satisfaction"
    },
    {
      icon: Zap,
      title: "Be proactive, not reactive",
      description: "Deflect app and device incidents proactively, predict issues before they impact users, and seamlessly connect to an informed agent for faster resolutions.",
      color: "from-purple-500 to-indigo-500",
      stats: "80% proactive issue resolution"
    },
    {
      icon: BarChart3,
      title: "Measure what your employees experience",
      description: "Monitor app and device usage continuously to gain insights from end users on Windows or MacOS devices.",
      color: "from-indigo-500 to-blue-500",
      stats: "Real-time experience monitoring"
    },
    {
      icon: Activity,
      title: "Enhance productivity with insights",
      description: "Deliver insights and proactive experiences from service operations to your employees. Enhance efficiency with workflows from end-user apps and devices.",
      color: "from-blue-500 to-cyan-500",
      stats: "40% productivity improvement"
    }
  ];

  // Featured Apps and Capabilities (Exact from ServiceNow)
  const featuredApps = [
    {
      icon: Laptop,
      title: "Desktop Assistant",
      description: "Provide employees a hub for self-service diagnostic tools and simplified communication with IT.",
      capabilities: [
        "Self-service diagnostic tools",
        "Simplified IT communication",
        "Employee hub interface",
        "Integrated support access"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Activity,
      title: "Application and Device Health",
      description: "Collect and process data from employees' devices and apps, and connect it with other ServiceNow IT data.",
      capabilities: [
        "Device data collection",
        "Application health monitoring",
        "ServiceNow IT data integration",
        "Comprehensive health insights"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Gauge,
      title: "Digital Experience (DEX) Score",
      description: "Combine app and device health, user sentiment, and service metrics into a digital experience score to identify improvements.",
      capabilities: [
        "App and device health scoring",
        "User sentiment analysis",
        "Service metrics integration",
        "Improvement identification"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Bell,
      title: "Proactive Engagement",
      description: "Detect issues proactively, notify users, and offer recommendations with automated workflows they can initiate.",
      capabilities: [
        "Proactive issue detection",
        "User notification system",
        "Recommendation engine",
        "Automated workflow initiation"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "Application Network Experience",
      description: "Identify and resolve network and application issues through network performance metrics.",
      capabilities: [
        "Network performance monitoring",
        "Application issue identification",
        "Issue resolution guidance",
        "Performance metrics analysis"
      ],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: RefreshCw,
      title: "Bulk Remedial Action",
      description: "Resolve multiple issues simultaneously with bulk remediation actions across all impacted devices.",
      capabilities: [
        "Multi-issue resolution",
        "Simultaneous remediation",
        "Bulk action capabilities",
        "Cross-device management"
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Headphones,
      title: "Microsoft Teams Monitoring",
      description: "View Microsoft Teams performance data on employees' devices and help proactively fix issues before they become disruptive.",
      capabilities: [
        "Teams performance monitoring",
        "Device-specific insights",
        "Proactive issue fixing",
        "Disruption prevention"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Leaf,
      title: "ESG Integration",
      description: "Track energy consumption across devices to reduce your carbon footprint and adhere to sustainability goals.",
      capabilities: [
        "Energy consumption tracking",
        "Carbon footprint reduction",
        "Sustainability goal adherence",
        "Environmental impact monitoring"
      ],
      color: "from-emerald-500 to-lime-500"
    }
  ];

  // Platform Capabilities (From ServiceNow)
  const platformCapabilities = [
    {
      icon: Database,
      title: "Single Data Model",
      description: "Eliminate information silos with one data source for your enterprise. Collect and analyze data wherever your end users and devices are located.",
      details: [
        "Information silo elimination",
        "Single enterprise data source",
        "Global data collection",
        "Unified analysis platform"
      ],
      color: "from-lime-500 to-yellow-500"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Build, monitor, and optimize highly efficient no-code automated workflows. Create customized workflows for end-user devices.",
      details: [
        "No-code workflow builder",
        "Highly efficient automation",
        "Custom device workflows",
        "Optimization capabilities"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "Actionable Insights",
      description: "Get work done faster with AI-powered experiences. Give everyone in your organization the info they need to make smarter decisions.",
      details: [
        "AI-powered experiences",
        "Faster work completion",
        "Smart decision support",
        "Organization-wide intelligence"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Security Integration",
      description: "Data security is critical. ServiceNow AI Platform provides tools to improve security posture and regulatory compliance.",
      details: [
        "Critical data security",
        "Security posture improvement",
        "Regulatory compliance",
        "Risk mitigation tools"
      ],
      color: "from-red-500 to-pink-500"
    }
  ];

  // Digital Experience Metrics
  const experienceMetrics = [
    {
      icon: Smile,
      title: "Employee Satisfaction",
      description: "Measure and improve employee satisfaction with technology through continuous monitoring and self-service capabilities.",
      metric: "90% satisfaction rate"
    },
    {
      icon: Timer,
      title: "Issue Resolution Time",
      description: "Reduce mean time to resolution with proactive issue detection and automated remediation workflows.",
      metric: "60% faster resolution"
    },
    {
      icon: Zap,
      title: "Proactive Issue Prevention",
      description: "Prevent issues before they impact users through predictive analytics and automated interventions.",
      metric: "80% issue prevention"
    },
    {
      icon: TrendingUp,
      title: "Productivity Enhancement",
      description: "Boost employee productivity by minimizing technology disruptions and enabling efficient self-service.",
      metric: "40% productivity boost"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Digital End-User Experience and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Digital End-User Experience helps organizations measure and continuously improve the technology experience for employees by:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Making it simple for employees to self-solve issues with diagnostic tools</li>
            <li>Enabling seamless engagement with informed IT teams when extra support is needed</li>
            <li>Delivering insights and proactive experiences from service operations</li>
            <li>Enhancing efficiency with workflows and data from end-user apps and devices</li>
            <li>Providing continuous monitoring of app and device usage for insights</li>
          </ul>
          <p className="mt-3 text-sm text-violet-600">
            <strong>Built on ServiceNow AI Platform</strong> for unified enterprise automation and AI-powered experiences.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the main features of Digital End-User Experience?",
      answer: (
        <div>
          <p className="mb-3">Digital End-User Experience includes eight core features:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Desktop Assistant:</strong> Hub for self-service diagnostic tools and simplified IT communication</li>
            <li><strong>Application and Device Health:</strong> Collect and process data from devices and apps, connect with ServiceNow IT data</li>
            <li><strong>Digital Experience (DEX) Score:</strong> Combine health, sentiment, and metrics into experience score for improvements</li>
            <li><strong>Proactive Engagement:</strong> Detect issues proactively, notify users, offer recommendations with automated workflows</li>
            <li><strong>Application Network Experience:</strong> Identify and resolve network and application issues through performance metrics</li>
            <li><strong>Bulk Remedial Action:</strong> Resolve multiple issues simultaneously across all impacted devices</li>
            <li><strong>Microsoft Teams Monitoring:</strong> View Teams performance data and proactively fix issues before disruption</li>
            <li><strong>ESG Integration:</strong> Track energy consumption to reduce carbon footprint and meet sustainability goals</li>
          </ul>
        </div>
      )
    },

    {
      question: "How does the Digital Experience (DEX) Score work?",
      answer: (
        <div>
          <p className="mb-3">The DEX Score provides a comprehensive view of employee technology experience by combining:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-violet-600 mb-2">App and Device Health:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Real-time monitoring of application performance</li>
                <li>Device health metrics and system status</li>
                <li>Hardware and software performance indicators</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">User Sentiment:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Employee feedback and satisfaction ratings</li>
                <li>User experience surveys and responses</li>
                <li>Sentiment analysis from support interactions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">Service Metrics:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>IT service performance indicators</li>
                <li>Incident resolution times and success rates</li>
                <li>Service availability and reliability metrics</li>
              </ul>
            </div>
          </div>
          <p className="mt-3">
            The combined DEX Score helps identify improvement opportunities and track progress over time.
          </p>
        </div>
      )
    },

    {
      question: "What proactive capabilities does DEX provide?",
      answer: (
        <div>
          <p className="mb-3">
            Digital End-User Experience offers comprehensive proactive capabilities:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Proactive Issue Detection:</strong> Identify potential problems before they impact users</li>
            <li><strong>Automated Notifications:</strong> Alert users and IT teams about emerging issues</li>
            <li><strong>Recommendation Engine:</strong> Provide actionable recommendations for issue resolution</li>
            <li><strong>Automated Workflow Initiation:</strong> Trigger remediation workflows automatically</li>
            <li><strong>Predictive Analytics:</strong> Use AI to predict and prevent future issues</li>
            <li><strong>Bulk Remediation:</strong> Resolve multiple related issues across affected devices simultaneously</li>
          </ul>
          <p className="mt-3">
            This proactive approach helps organizations move from <em>reactive</em> to <em>predictive</em> IT support.
          </p>
        </div>
      )
    },

    {
      question: "How does DEX support Microsoft Teams and remote work?",
      answer: (
        <div>
          <p className="mb-3">DEX provides specialized support for Microsoft Teams and remote work scenarios:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Microsoft Teams Monitoring:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Real-time Teams performance data on employee devices</li>
                <li>Proactive issue identification before disruption</li>
                <li>Meeting quality and connectivity monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Remote Work Support:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Network performance monitoring for remote connections</li>
                <li>Application performance tracking across locations</li>
                <li>Device health monitoring regardless of location</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Self-Service Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Desktop Assistant for remote troubleshooting</li>
                <li>Automated diagnostic tools for common issues</li>
                <li>Simplified communication channels with IT support</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does Digital End-User Experience implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, device count, and feature requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>DEX Standard Implementation:</strong> Starting from $200K - includes core features for up to 5,000 devices</li>
            <li><strong>Enterprise DEX Implementation:</strong> $350K-$500K - includes advanced analytics, proactive engagement, and bulk remediation</li>
            <li><strong>Complete DEX Suite:</strong> $600K+ - full feature set with ESG integration, advanced monitoring, and custom workflows</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 8-12 months through productivity gains (40%), reduced IT tickets (60%), and improved employee satisfaction (90%).
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "DEX ROI Calculator", url: "/dex-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for DEX?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on device count and feature complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>DEX Standard:</strong> 12-16 weeks for core features including Desktop Assistant and basic monitoring</li>
            <li><strong>Enterprise DEX:</strong> 16-22 weeks including proactive engagement, bulk remediation, and advanced analytics</li>
            <li><strong>Complete DEX Suite:</strong> 20-26 weeks for full feature set with ESG integration and custom workflows</li>
          </ul>
          <p className="mt-3">
            Our methodology: Discovery & Planning (3-4 weeks) → Agent Deployment & Configuration (6-8 weeks) → Analytics Setup & Testing (4-6 weeks) → Go-Live & Optimization (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does DEX integrate with existing IT service management tools?",
      answer: (
        <div>
          <p className="mb-3">DEX provides comprehensive integration capabilities with existing ITSM tools:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ServiceNow ITSM Integration:</strong> Native integration with incident, problem, and change management</li>
            <li><strong>CMDB Integration:</strong> Automatic device and application data synchronization</li>
            <li><strong>Third-Party ITSM Tools:</strong> API-based integration with existing ticketing systems</li>
            <li><strong>Monitoring Tool Integration:</strong> Connect with existing network and application monitoring solutions</li>
            <li><strong>Microsoft 365 Integration:</strong> Deep integration with Teams, Office apps, and Windows devices</li>
            <li><strong>Security Tool Integration:</strong> Connect with endpoint security and compliance tools</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations maintain existing investments while gaining unified visibility into employee technology experience.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on DEX implementation success stories)
  const caseStudies = [
    {
      title: "Global Technology Company Transforms Employee Experience with DEX",
      client: "Fortune 500 Technology Leader",
      industry: "Technology Services",
      challenge: "Managing technology experience for 50,000+ remote employees across multiple locations with inconsistent device performance and high IT support volume",
      solution: "ServiceNow Digital End-User Experience with Desktop Assistant, proactive engagement, and comprehensive device health monitoring",
      results: [
        { metric: "90%", description: "Employee satisfaction improvement" },
        { metric: "60%", description: "Reduction in IT tickets" },
        { metric: "80%", description: "Proactive issue resolution" },
        { metric: "40%", description: "Productivity enhancement" }
      ],
      testimonial: "ServiceNow DEX transformed our ability to support remote employees, achieving 90% satisfaction improvement and 60% reduction in IT tickets through proactive engagement.",
      executive: "Chief Information Officer",
      logo: "/images/clients/tech-leader-logo.png"
    },
    {
      title: "Financial Services Firm Achieves Proactive IT Support with DEX Score",
      client: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Maintaining high-performance technology experience for traders and analysts while ensuring regulatory compliance and zero-tolerance for disruptions",
      solution: "Complete DEX suite with Digital Experience Score, Microsoft Teams monitoring, and bulk remedial action for financial trading operations",
      results: [
        { metric: "Proactive", description: "Issue prevention achieved" },
        { metric: "100%", description: "Regulatory compliance maintained" },
        { metric: "50%", description: "Faster issue resolution" },
        { metric: "Zero", description: "Trading disruptions" }
      ],
      testimonial: "ServiceNow DEX enabled us to maintain zero trading disruptions while achieving proactive issue prevention and 50% faster resolution times for critical systems.",
      executive: "Head of Technology Operations",
      logo: "/images/clients/investment-bank-logo.png"
    },
    {
      title: "Healthcare Network Enhances Patient Care with Sustainable IT Operations",
      client: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Supporting 15,000+ healthcare workers with reliable technology while meeting sustainability goals and reducing carbon footprint across medical facilities",
      solution: "ServiceNow DEX with ESG integration, device health monitoring, and sustainable IT operations for healthcare environments",
      results: [
        { metric: "15,000+", description: "Healthcare workers supported" },
        { metric: "30%", description: "Carbon footprint reduction" },
        { metric: "Enhanced", description: "Patient care technology" },
        { metric: "Sustainable", description: "IT operations achieved" }
      ],
      testimonial: "ServiceNow DEX helped us achieve sustainable IT operations with 30% carbon footprint reduction while enhancing technology reliability for patient care.",
      executive: "Director of Healthcare IT",
      logo: "/images/clients/healthcare-system-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Digital End-User Experience - Complete ServiceNow DEX Portfolio | ifBash</title>
        <meta
          name="description"
          content="Measure and continuously improve the technology experience for your employees. Enable self-service and engage with IT with ServiceNow Digital End-User Experience."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss DEX Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss DEX Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-violet-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-violet-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-violet-600 hover:to-purple-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Employee Experience
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-blue-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Proactive Support
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 font-semibold">
                    Digital End-User
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 font-semibold">
                      Experience
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-violet-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-purple-300">Measure and continuously improve the technology experience</span> for your employees. Make it simple for them to{' '}
                  <span className="font-semibold text-indigo-300">self-solve issues and engage with informed IT</span> support.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-indigo-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get DEX Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => {
  if (typeof document !== 'undefined') {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-indigo-400 group-hover:text-indigo-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-violet-500/15 to-purple-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Digital End-User Experience Platform"
                      className="w-full h-full object-cover"
                      gradient="from-violet-600 to-purple-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Self-Service</div>
                      <div className="text-xs text-violet-200">Experience</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Proactive</div>
                      <div className="text-xs text-purple-200">Support</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Smile className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Gauge className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-violet-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  Benefits of Digital
                </span>
                <br />
                <span className="text-gray-800">
                  End-User Experience
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Measure and continuously improve your employees' technology experience with comprehensive digital experience management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-violet-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 capitalize">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200">
                      <div className="text-sm font-semibold text-violet-700 mb-1">Key Achievement</div>
                      <div className="text-violet-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Apps Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Featured Apps and Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  for Digital End-User Experience
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Digital End-User Experience provides applications that scale with you as your employee experience needs change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredApps.map((app, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <app.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {app.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
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

        {/* Experience Metrics Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
                  Digital Experience
                </span>
                <br />
                <span className="text-gray-800">
                  Impact Metrics
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Measure the real impact of digital experience improvements on employee satisfaction and productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experienceMetrics.map((metric, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <metric.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {metric.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {metric.description}
                    </p>

                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200">
                      <div className="text-sm font-semibold text-indigo-700 mb-1">Target Metric</div>
                      <div className="text-indigo-600 text-lg font-bold">{metric.metric}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Capabilities Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Built on ServiceNow
                </span>
                <br />
                <span className="text-gray-800">
                  AI Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                DEX includes AI-powered platform capabilities to boost employee satisfaction, reduce IT workload, and enhance productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{capability.title}</h3>
                      <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-xs px-2 py-1 mt-1">
                        Platform Feature
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {capability.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - FIXED VERSION */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-green-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Digital End-User Experience
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about DEX implementation, capabilities, and employee experience metrics.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 focus:outline-none focus:bg-gray-50/50"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4 leading-relaxed">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                        activeFAQ === index ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                    </button>
                    
                    {/* Fixed collapsible content */}
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        activeFAQ === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-cyan-500 to-teal-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-cyan-600 hover:text-cyan-800 text-sm font-medium transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-teal-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-green-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real DEX Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their employee technology experience with Digital End-User Experience.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-teal-500/20 to-green-500/20 text-teal-200 border border-teal-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-200 border border-green-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-emerald-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-teal-900/30 to-green-900/30 rounded-xl p-4 border-l-4 border-teal-400">
                              <Quote className="h-6 w-6 text-teal-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-teal-300">— {study.executive}</p>
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
                                <span className="text-teal-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-teal-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Employee Technology Experience?
                </h2>
                <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to start understanding and measuring your employees' technology experience with comprehensive DEX solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact DEX Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Read Product Brief
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-teal-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">dex-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-green-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-emerald-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Book Demo</p>
                  </div>
                </div>
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
      `}</style>
    </>
  );
}
