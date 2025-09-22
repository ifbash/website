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
  Headphones,
  ThumbsUp,
  MessageSquare,
  Headset,
  Truck,
  ShoppingBag,
  Store,
  Receipt,
  Calculator,
  HandCoins,
  Percent,
  FileCheck,
  Building as BankIcon,
  Scale,
  HeartPulse,
  UserCog,
  FileUser,
  Users as Patients,
  ShoppingCartIcon as CartIcon,
  Package2,
  Antenna,
  Waves,
  Flag,
  Landmark
} from "lucide-react";

export default function PublicSectorDigitalServicesPage() {
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
    "name": "Public Sector Digital Services - ServiceNow PSDS Implementation",
    "description": "See how governments remain agile, enhance efficiency, and engage constituents with a digital-first experience through ServiceNow Public Sector Digital Services.",
    "applicationCategory": "Public Sector Digital Services"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Public Sector Digital Services and how does it help government agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow PSDS enables government organizations to support constituents and business stakeholders with unified data model, packaged low-code workflows, and experiences tailored for government on a single AI platform."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the Government Transformation Suite and how does it support federal agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Government Transformation Suite unites high-impact ServiceNow solutions to increase visibility, accelerate ROI, and drive efficiencies for federal agencies with focus on transparency, accountability, and mission success."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow PSDS content)
  const benefits = [
    {
      icon: Users2,
      title: "Enhance citizen engagement",
      description: "Deliver personalized, frictionless, and anticipatory constituent services through digital-first experiences that meet citizens where they are.",
      color: "from-amber-500 to-orange-500",
      stats: "Consumer-grade experiences"
    },
    {
      icon: Zap,
      title: "Accelerate digital transformation",
      description: "Modernize and speed up delivery of government services with AI capabilities, unified data model, and packaged workflows tailored for government.",
      color: "from-orange-500 to-red-500",
      stats: "Faster service delivery"
    },
    {
      icon: Shield,
      title: "Increase transparency & accountability",
      description: "Drive transparency, accountability, and efficiency with unified visibility into government operations and citizen service delivery processes.",
      color: "from-red-500 to-pink-500",
      stats: "Enhanced transparency"
    },
    {
      icon: TrendingUp,
      title: "Drive operational efficiency",
      description: "Streamline operations, reduce costs, and improve productivity with automated workflows and intelligent process optimization across agencies.",
      color: "from-pink-500 to-purple-500",
      stats: "Operational optimization"
    }
  ];

  // Core Capabilities (From ServiceNow PSDS research)
  const coreCapabilities = [
    {
      icon: Database,
      title: "Government Data Model",
      description: "Unified data model including service delivery relationships between government, individuals, business employees, and agencies.",
      capabilities: [
        "Service delivery relationships",
        "Individual and business data",
        "Agency integration model",
        "Constituent information management"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Store,
      title: "Service Catalog",
      description: "Exposes the set of services available directly from a portal, allowing for quick introduction of new government services.",
      capabilities: [
        "Portal-based service access",
        "Quick service introduction",
        "Digital service provisioning",
        "Self-service capabilities"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Government Case Types",
      description: "References the government data model and can be extended to meet specific agency and departmental needs.",
      capabilities: [
        "Government-specific case types",
        "Data model integration",
        "Agency customization",
        "Process standardization"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Government Services Portal",
      description: "Allows requests from service catalog, leveraging digital channels and virtual agents for citizen engagement.",
      capabilities: [
        "Service catalog integration",
        "Digital channel support",
        "Virtual agent deployment",
        "Citizen self-service"
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Support",
      description: "Supports constituents across web, phone, chat, email, in-person, and social media for comprehensive engagement.",
      capabilities: [
        "Multi-channel support",
        "Unified communication",
        "Social media integration",
        "In-person service support"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Automates service processes, tasks, and assignments with Flow Designer, Integration Hub, and Automation Engine.",
      capabilities: [
        "Intelligent task automation",
        "Process optimization",
        "Workflow orchestration",
        "Predictive analytics"
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  // Government Transformation Suite Components
  const transformationSuiteComponents = [
    {
      title: "Optimized Asset Management",
      description: "Gain visibility into full inventory of hardware, software, and enterprise assets to unlock cost savings opportunities.",
      icon: Package,
      benefit: "Asset optimization & cost savings"
    },
    {
      title: "Time-Saving Worker Portal",
      description: "Centralized portal for intra- and interagency service delivery, reducing swivel chair effects and improving productivity.",
      icon: Clock,
      benefit: "Enhanced worker productivity"
    },
    {
      title: "Modern HR & Office Management",
      description: "Transform HR processes into AI-enabled workflows and streamline return-to-office management for government workers.",
      icon: UserCog,
      benefit: "Modernized HR operations"
    },
    {
      title: "Application Portfolio Streamlining",
      description: "Control application sprawl by identifying redundant, aged, or out-of-compliance software assets to reduce costs.",
      icon: Layers,
      benefit: "Application rationalization"
    },
    {
      title: "Citizen Engagement Platform",
      description: "Mobile-first citizen services with self-service capabilities, request tracking, and community engagement features.",
      icon: Smartphone,
      benefit: "Enhanced citizen experience"
    },
    {
      title: "Compliance & Security Management",
      description: "Ensure regulatory compliance and security posture with automated monitoring and audit trail capabilities.",
      icon: Shield,
      benefit: "Regulatory compliance"
    }
  ];

  // Digital Service Features
  const digitalServiceFeatures = [
    {
      title: "Walk-up Experience",
      description: "Efficient in-person service experience for different customer experience needs and accessibility requirements.",
      icon: MapPin,
      category: "Customer Experience"
    },
    {
      title: "Agent Workspace",
      description: "Amplifies agent productivity with guided resolution in a single pane of glass for government service delivery.",
      icon: Layout,
      category: "Agent Productivity"
    },
    {
      title: "Knowledge Management",
      description: "Instant access to relevant knowledge for customers and agents with AI-powered content recommendations.",
      icon: BookOpen,
      category: "Knowledge Sharing"
    },
    {
      title: "Performance Analytics",
      description: "Anticipate trends, prioritize resources, and drive service improvements by unlocking data insights.",
      icon: BarChart3,
      category: "Analytics & Insights"
    },
    {
      title: "Task Assignment & Routing",
      description: "Automatically route work based on criteria and assign tasks to departments using visual task boards.",
      icon: Route,
      category: "Workflow Management"
    },
    {
      title: "Communities & Collaboration",
      description: "Connect customers and employees with peers to find answers and solve problems through community platforms.",
      icon: Users,
      category: "Community Engagement"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Public Sector Digital Services and how does it help government agencies?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Public Sector Digital Services (PSDS) enables government organizations to deliver modern, citizen-centric services:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Unified data model with service delivery relationships between government, individuals, and agencies</li>
            <li>Packaged low-code workflows and experiences tailored specifically for government operations</li>
            <li>AI capabilities that enhance service delivery and automate common government processes</li>
            <li>Digital-first experiences that meet citizens where they are across multiple channels</li>
            <li>Single platform approach that unifies employees, processes, and systems for improved collaboration</li>
          </ul>
          <p className="mt-3 text-sm text-amber-600">
            <strong>Built on ServiceNow AI Platform</strong> specifically designed for public sector transformation.
          </p>
        </div>
      )
    },
    
    {
      question: "What is the Government Transformation Suite and how does it support federal agencies?",
      answer: (
        <div>
          <p className="mb-3">The Government Transformation Suite unites high-impact ServiceNow solutions for federal transformation:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Unified Architecture:</strong> Single platform with unified data model acting as unifier on top of legacy systems</li>
            <li><strong>Rapid ROI:</strong> Agencies can identify opportunities and capture quick wins within weeks of deployment</li>
            <li><strong>Four Priority Outcomes:</strong> Optimized asset use, time-savings for workers, modern HR management, and streamlined application portfolios</li>
            <li><strong>Mission Focus:</strong> Aligned to Administration priorities of transparency, accountability, and efficiency</li>
            <li><strong>AI-First Approach:</strong> Leverages trillions of workflow executions and millions of automations for cost efficiencies</li>
          </ul>
          <p className="mt-3">
            The suite helps federal agencies move beyond incremental improvements to achieve exponential gains in operational efficiency.
          </p>
        </div>
      )
    },

    {
      question: "What core capabilities does ServiceNow PSDS provide for government organizations?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow PSDS provides comprehensive capabilities designed specifically for government needs:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-orange-600 mb-2">Citizen Engagement:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Government Services Portal:</strong> Service catalog integration with digital channels and virtual agents</li>
                <li><strong>Omnichannel Support:</strong> Web, phone, chat, email, in-person, and social media engagement</li>
                <li><strong>Mobile-First Design:</strong> Native mobile apps for citizen request submission and tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Operational Excellence:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Government Data Model:</strong> Unified relationships between agencies, individuals, and businesses</li>
                <li><strong>Case Management:</strong> Government-specific case types with process standardization</li>
                <li><strong>Workflow Automation:</strong> AI-powered process optimization and task automation</li>
                <li><strong>Performance Analytics:</strong> Real-time insights for service improvement and resource optimization</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow PSDS enhance citizen engagement and service delivery?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow PSDS transforms citizen engagement through multiple digital touchpoints and service innovations:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Consumer-Grade Experiences:</strong> Modern, intuitive interfaces similar to private sector digital services</li>
            <li><strong>Self-Service Capabilities:</strong> Citizens can submit requests, track progress, and access services 24/7</li>
            <li><strong>Mobile Applications:</strong> Native mobile apps with location services, photo uploads, and real-time updates</li>
            <li><strong>Virtual Agents:</strong> AI-powered chatbots providing instant responses and guided service navigation</li>
            <li><strong>Anonymous Access:</strong> Public service access without mandatory authentication for increased accessibility</li>
            <li><strong>Community Features:</strong> Citizen forums, request voting, and collaborative problem-solving platforms</li>
            <li><strong>Real-Time Updates:</strong> Push notifications, status updates, and proactive service communications</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach reduces service delivery times, improves citizen satisfaction, and increases government transparency.
          </p>
        </div>
      )
    },

    {
      question: "What AI and automation capabilities does ServiceNow PSDS offer?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow PSDS leverages comprehensive AI and automation for government transformation:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Intelligent Automation:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Flow Designer for creating automated workflows without coding</li>
                <li>Integration Hub for connecting legacy systems and external services</li>
                <li>Predictive Intelligence for routing issues and recommending solutions</li>
                <li>Process mining to identify bottlenecks and optimization opportunities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">AI-Powered Services:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Virtual agents with natural language processing for citizen inquiries</li>
                <li>Intelligent case routing based on content analysis and historical patterns</li>
                <li>Automated knowledge gap identification and content recommendations</li>
                <li>Performance analytics with trend prediction and resource optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Decision Support:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Real-time dashboards with actionable insights for government leaders</li>
                <li>Automated compliance monitoring and audit trail generation</li>
                <li>Resource allocation optimization based on demand forecasting</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Public Sector Digital Services implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on agency size, service complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>PSDS Standard Implementation:</strong> Starting from $350K - includes basic digital services, citizen portal, and standard integrations for local governments</li>
            <li><strong>PSDS Professional Implementation:</strong> $500K-$800K - includes omnichannel capabilities, advanced AI features, and comprehensive integrations for state agencies</li>
            <li><strong>Government Transformation Suite:</strong> $1M+ - complete federal solution with asset optimization, compliance management, and enterprise-scale deployment</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through operational efficiency (40%), citizen satisfaction improvements (35%), and cost reduction (25%). Federal agencies may qualify for special pricing and implementation programs.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "PSDS ROI Calculator", url: "/psds-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow PSDS?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on government complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>PSDS Standard:</strong> 14-18 weeks for basic digital services, citizen portal, and core government workflows</li>
            <li><strong>PSDS Professional:</strong> 18-24 weeks including advanced AI features, omnichannel integration, and comprehensive service catalog</li>
            <li><strong>Government Transformation Suite:</strong> 24-32 weeks for complete federal solution with asset management, compliance, and extensive integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Government Assessment & Compliance Review (3-4 weeks) → Core Platform & Citizen Services Configuration (8-12 weeks) → Integration & Testing (4-6 weeks) → Go-Live & Staff Training (3-4 weeks) → Citizen Rollout & Optimization (2-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow PSDS ensure security and compliance for government agencies?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow PSDS provides comprehensive security and compliance for government requirements:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>FedRAMP Authorization:</strong> FedRAMP High authorization for federal agency compliance requirements</li>
            <li><strong>FISMA Compliance:</strong> Federal Information Security Management Act compliance with comprehensive security controls</li>
            <li><strong>Data Protection:</strong> Advanced encryption, access controls, and data loss prevention capabilities</li>
            <li><strong>Audit Trails:</strong> Comprehensive logging and audit capabilities for transparency and accountability</li>
            <li><strong>Privacy Controls:</strong> PII protection and privacy-by-design architecture for citizen data security</li>
            <li><strong>Incident Response:</strong> Automated security incident detection and response capabilities</li>
            <li><strong>Continuous Monitoring:</strong> Real-time security monitoring and vulnerability management</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Government agencies maintain highest security standards while delivering modern citizen services and operational excellence.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on PSDS success stories)
  const caseStudies = [
    {
      title: "City of Santa Monica Bridges Service-Citizen Gap with Mobile App",
      client: "City of Santa Monica",
      industry: "Municipal Government",
      challenge: "Previous process created bottlenecks for municipal departments and made it impossible to retain user insights, requiring self-service automation and better citizen connection",
      solution: "ServiceNow Customer Service Management with native mobile app, automated 62 services in 2 months, dynamic location experience, and anonymous citizen access",
      results: [
        { metric: "62", description: "Services automated" },
        { metric: "2 Months", description: "Implementation time" },
        { metric: "Mobile", description: "Native app deployed" },
        { metric: "Self-Service", description: "Citizen capabilities" }
      ],
      testimonial: "The ServiceNow platform makes it easier for residents to get what they need, when they need it. Intelligent interactions remove bottlenecks by allowing users to solve common requests.",
      executive: "City IT Director",
      logo: "/images/clients/santa-monica-logo.png"
    },
    {
      title: "Federal Agency Achieves Rapid ROI with Government Transformation Suite",
      client: "U.S. Federal Agency",
      industry: "Federal Government",
      challenge: "Need to increase visibility, accelerate ROI, and drive efficiencies while managing $125 billion annual IT spend with limited auditability and usage tracking",
      solution: "ServiceNow Government Transformation Suite with asset optimization, worker time-savings, modern HR processes, and application portfolio streamlining",
      results: [
        { metric: "Weeks", description: "To capture quick wins" },
        { metric: "Asset", description: "Visibility achieved" },
        { metric: "ROI", description: "Acceleration delivered" },
        { metric: "Efficiency", description: "Gains realized" }
      ],
      testimonial: "The ServiceNow Government Transformation Suite helps agencies work smarter and drive efficiency at speed to move beyond incremental improvements to exponential gains.",
      executive: "Senior Vice President, Public Sector",
      logo: "/images/clients/federal-agency-logo.png"
    },
    {
      title: "State Government Modernizes Citizen Services with Digital Transformation",
      client: "State Government Agency",
      industry: "State Government",
      challenge: "Outdated technology and inefficient processes not meeting citizen expectations, with inflexible systems and data accessibility issues affecting service delivery",
      solution: "ServiceNow Public Sector Digital Services with omnichannel support, AI-powered virtual agents, self-service capabilities, and unified government data model",
      results: [
        { metric: "Omnichannel", description: "Service delivery" },
        { metric: "AI-Powered", description: "Virtual agents" },
        { metric: "Unified", description: "Data model" },
        { metric: "Digital-First", description: "Citizen experience" }
      ],
      testimonial: "ServiceNow PSDS enabled us to deliver consumer-grade experiences while maintaining government security and compliance requirements for our constituents.",
      executive: "Chief Digital Officer",
      logo: "/images/clients/state-government-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Public Sector Digital Services - ServiceNow PSDS Portfolio | ifBash</title>
        <meta
          name="description"
          content="See how governments remain agile, enhance efficiency, and engage constituents with a digital-first experience through ServiceNow Public Sector Digital Services."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss PSDS Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss PSDS Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-amber-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-amber-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-red-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-amber-500/90 to-orange-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500/90 to-red-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered PSDS
                  </Badge>
                  <Badge className="bg-gradient-to-r from-red-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-red-600 hover:to-pink-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    FedRAMP High
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 font-semibold">
                    Public Sector
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 font-semibold">
                      Digital Services
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-orange-300">See how governments remain agile, enhance efficiency,</span> and engage constituents with{' '}
                  <span className="font-semibold text-red-300">digital-first experiences and AI automation</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get PSDS Implementation
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-red-400 group-hover:text-red-300" />
                      See Digital Transformation
                    </span>
                  </button>
                </div>

                {/* Government Badge */}
                <div className="bg-gradient-to-r from-amber-500/15 to-orange-500/15 backdrop-blur-sm rounded-xl p-4 border border-amber-300/20">
                  <div className="flex items-center gap-3">
                    <Flag className="h-8 w-8 text-amber-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Government Transformation Suite</div>
                      <div className="text-sm text-amber-200">Designed for transparency, accountability, and efficiency</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Public Sector Digital Services Platform"
                      className="w-full h-full object-cover"
                      gradient="from-amber-600 to-orange-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Citizen</div>
                      <div className="text-xs text-amber-200">Engagement</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Digital</div>
                      <div className="text-xs text-orange-200">First</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Landmark className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Users2 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
                  Transform Government
                </span>
                <br />
                <span className="text-gray-800">
                  Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Enhance citizen engagement, accelerate digital transformation, and drive operational efficiency with AI-powered government services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                      <div className="text-sm font-semibold text-amber-700 mb-1">Key Value</div>
                      <div className="text-amber-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
                  Core PSDS Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Government Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive capabilities designed specifically for government operations, from citizen engagement to process automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${capability.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {capability.capabilities.map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {cap}
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

        {/* Transformation Suite Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
                  Government Transformation Suite
                </span>
                <br />
                <span className="text-gray-800">
                  Federal Agency Excellence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                High-impact solutions tailored to Administration priorities of transparency, accountability, and efficiency for federal transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationSuiteComponents.map((component, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <component.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {component.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {component.description}
                    </p>

                    <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 border border-red-200">
                      <div className="text-sm font-semibold text-red-700 mb-1">Key Outcome</div>
                      <div className="text-red-600 text-lg font-bold">{component.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Service Features Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                  Digital Service Features
                </span>
                <br />
                <span className="text-gray-800">
                  Advanced Government Capabilities
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive features supporting modern government service delivery and citizen engagement across all touchpoints.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitalServiceFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border border-pink-200 mb-4 text-xs">
                      {feature.category}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Public Sector Digital Services
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about PSDS implementation, government transformation, and citizen engagement.
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
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        activeFAQ === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-purple-500 to-indigo-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real Government Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                See how government organizations transformed their operations with AI-powered Public Sector Digital Services.
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
                              <Badge className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border border-indigo-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-pink-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-pink-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-4 border-l-4 border-indigo-400">
                              <Quote className="h-6 w-6 text-indigo-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-indigo-300">— {study.executive}</p>
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
                                <span className="text-indigo-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-indigo-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Government Services?
                </h2>
                <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive public sector digital services with AI-powered citizen engagement and operational automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Government Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get PSDS Guide
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">government-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Schedule Demo</p>
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
