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
  Scale
} from "lucide-react";

export default function FinancialServicesOperationsPage() {
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
    "name": "Financial Services Operations - ServiceNow FSO Implementation",
    "description": "Connect your entire financial institution with one platform. Transform operations with disputes management, risk compliance, and AI-enabled automation.",
    "applicationCategory": "Financial Services Operations"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Financial Services Operations and how does it help financial institutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow FSO connects entire financial institutions with one platform, delivering easy experiences, building resilient operations, and accelerating transformation with AI-enabled automation and real-time analytics."
        }
      },
      {
        "@type": "Question", 
        "name": "What is ServiceNow Disputes Management Built with Visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Disputes Management, Built with Visa, unites the entire dispute management process in a single, connected workflow, delivering frictionless customer experiences while ensuring full compliance with Visa guidelines."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow FSO content)
  const benefits = [
    {
      icon: Smile,
      title: "Deliver easy experiences",
      description: "Harness the power of the entire company to create friction-free customer experiences. Engage, onboard, and deliver services using real-time actionable data.",
      color: "from-emerald-500 to-teal-500",
      stats: "Friction-free experiences"
    },
    {
      icon: Shield,
      title: "Build resilient operations",
      description: "Manage disruption and monitor risk and compliance with real-time tools. Automate processes to improve visibility and remove bottlenecks across the institution.",
      color: "from-teal-500 to-cyan-500",
      stats: "Real-time risk management"
    },
    {
      icon: Zap,
      title: "Accelerate transformation",
      description: "Improve business performance with out-of-the-box metrics and real-time analytics. Analyze and identify operational bottlenecks with one AI-enabled platform.",
      color: "from-cyan-500 to-blue-500",
      stats: "AI-enabled analytics"
    },
    {
      icon: Scale,
      title: "Single connected workflow",
      description: "Unite dispute management and financial operations in single, connected workflows with ServiceNow Disputes Management, Built with Visa for full compliance.",
      color: "from-blue-500 to-indigo-500",
      stats: "Visa-compliant workflows"
    }
  ];

  // FSO Core Capabilities (From ServiceNow content)
  const fsoCapabilities = [
    {
      icon: CreditCard,
      title: "Disputes Management, Built with Visa",
      description: "Unite the entire dispute management process in a single, connected workflow with frictionless customer experiences and full Visa compliance.",
      capabilities: [
        "Single connected workflow",
        "Visa guidelines integration",
        "Frictionless customer experiences",
        "Full compliance automation"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Receipt,
      title: "Payment Operations",
      description: "Manage requests for payment inquiries, claims, and debit approvals with streamlined processes for BCNR and PiE resolution.",
      capabilities: [
        "Payment inquiry management",
        "Claims processing automation",
        "Debit approval workflows",
        "BCNR and PiE resolution"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: CreditCard,
      title: "Card Operations",
      description: "Unified platform for credit card inquiries including new cards, limit changes, blocking/unblocking, and account closure management.",
      capabilities: [
        "New card request processing",
        "Credit limit management",
        "Card blocking and unblocking",
        "Account closure workflows"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Complaint Management",
      description: "Swiftly address complaints with cross-departmental collaboration and automated routing to business units for streamlined resolution.",
      capabilities: [
        "Cross-departmental collaboration",
        "Automated complaint routing",
        "Response template automation",
        "Performance analytics dashboards"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Risk and Compliance Management",
      description: "Monitor risk and compliance with real-time tools, automated processes, and comprehensive audit trails for regulatory adherence.",
      capabilities: [
        "Real-time risk monitoring",
        "Automated compliance checks",
        "Comprehensive audit trails",
        "Regulatory reporting automation"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Link,
      title: "Legacy System Integration",
      description: "Seamlessly integrate with core banking systems, CRM platforms, and legacy applications for unified operational environment.",
      capabilities: [
        "Core banking system integration",
        "CRM platform connectivity",
        "Legacy system modernization",
        "Data flow orchestration"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Software Integrations
  const softwareIntegrations = [
    {
      title: "Visa Guidelines Integration",
      description: "Preconfigured integrations with Visa guidelines to transform the dispute management process with compliance automation.",
      icon: CreditCard,
      benefits: ["Automated compliance", "Streamlined disputes", "Faster resolution"]
    },
    {
      title: "Guidewire Cloud Capabilities",
      description: "Simplify customer experience with Guidewire cloud capabilities for claims, policy servicing, and underwriting processes.",
      icon: Cloud,
      benefits: ["Claims processing", "Policy management", "Underwriting automation"]
    },
    {
      title: "Core Banking Integration",
      description: "Native integration with core banking systems for seamless data flow and unified operational visibility.",
      icon: BankIcon,
      benefits: ["Real-time data sync", "Unified operations", "Legacy connectivity"]
    }
  ];

  // Intelligent Elements
  const intelligentElements = [
    {
      title: "ML-Powered Fraud Detection",
      description: "Advanced ML algorithms monitor live transaction data to detect patterns and anomalies indicating fraudulent activity.",
      icon: AlertTriangle,
      impact: "Proactive fraud prevention"
    },
    {
      title: "AI Risk Assessment",
      description: "ML models assess risks for financial products, loans, and insurance claims using predictive analytics.",
      icon: Target,
      impact: "Intelligent risk scoring"
    },
    {
      title: "Document Processing with NLP",
      description: "Natural language processing capabilities for intelligent document processing and data extraction.",
      icon: FileText,
      impact: "Automated document analysis"
    },
    {
      title: "Personalized Customer Interactions",
      description: "AI and ML enable customized customer interactions based on behavioral analysis and preferences.",
      icon: Users,
      impact: "Enhanced customer experience"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Financial Services Operations and how does it help financial institutions?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Financial Services Operations (FSO) connects entire financial institutions with one unified platform:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Delivers easy experiences through friction-free customer engagement and onboarding</li>
            <li>Builds resilient operations with real-time risk and compliance monitoring</li>
            <li>Accelerates transformation using AI-enabled analytics and automation</li>
            <li>Provides capabilities that scale with business needs and growth</li>
            <li>Integrates with legacy systems while enabling digital modernization</li>
          </ul>
          <p className="mt-3 text-sm text-emerald-600">
            <strong>One Platform Approach</strong> unifies all financial operations for consistent service delivery.
          </p>
        </div>
      )
    },
    
    {
      question: "What is ServiceNow Disputes Management, Built with Visa?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow Disputes Management, Built with Visa, is a revolutionary solution for payment disputes:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Single Connected Workflow:</strong> Unites the entire dispute management process from initial inquiry to final resolution</li>
            <li><strong>Visa Guidelines Integration:</strong> Preconfigured integrations ensure full compliance with Visa dispute resolution standards</li>
            <li><strong>Frictionless Customer Experience:</strong> Streamlined processes improve cardholder satisfaction and engagement quality</li>
            <li><strong>AI and Generative AI:</strong> Advanced technology facilitates swift updates and enhances customer intake and agent investigation</li>
            <li><strong>Fraud Prevention:</strong> Leverages Visa's technology that helps prevent $30 billion in fraud annually</li>
          </ul>
          <p className="mt-3">
            This solution addresses traditional challenges of siloed systems and disconnected approaches that cause delays and impact customer experience.
          </p>
        </div>
      )
    },

    {
      question: "What are the core capabilities of ServiceNow FSO?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow FSO offers comprehensive capabilities for financial institutions:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">Operational Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Payment Operations:</strong> Manage payment inquiries, claims, and debit approvals</li>
                <li><strong>Card Operations:</strong> Unified platform for credit card lifecycle management</li>
                <li><strong>Complaint Management:</strong> Cross-departmental collaboration with automated routing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-600 mb-2">Strategic Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Risk and Compliance:</strong> Real-time monitoring with automated compliance checks</li>
                <li><strong>Legacy Integration:</strong> Seamless connectivity with existing core banking systems</li>
                <li><strong>Customer Experience:</strong> 360-degree customer view with personalized service delivery</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "What intelligent elements does ServiceNow FSO provide?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow FSO incorporates seven core intelligent elements for advanced financial operations:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ML-Powered Fraud Detection:</strong> Advanced algorithms analyze transaction patterns and detect anomalies in real-time</li>
            <li><strong>AI Risk Assessment:</strong> ML models evaluate risks for financial products, loans, and insurance claims</li>
            <li><strong>Intelligent Document Processing:</strong> NLP capabilities extract and process information from various document types</li>
            <li><strong>Personalized Interactions:</strong> AI-driven customer engagement based on behavioral analysis and preferences</li>
            <li><strong>Predictive Analytics:</strong> Market trend analysis and opportunity identification for product development</li>
            <li><strong>Automated Decision Making:</strong> Rule-based automation for consistent operational decisions</li>
          </ul>
          <p className="mt-3">
            These intelligent features enable financial institutions to make data-driven decisions and enhance operational effectiveness.
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow FSO handle software integrations?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow FSO provides comprehensive integration capabilities for financial services:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Key Integration Partners:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Visa Integration:</strong> Preconfigured compliance with Visa dispute management guidelines</li>
                <li><strong>Guidewire Cloud:</strong> Insurance capabilities for claims, policy servicing, and underwriting</li>
                <li><strong>Core Banking Systems:</strong> Native connectivity with existing banking platforms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Integration Benefits:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Seamless data flow across systems and departments</li>
                <li>Unified operational environment with consistent user experience</li>
                <li>Gradual modernization approach preserving existing investments</li>
                <li>Real-time data synchronization and workflow orchestration</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Financial Services Operations implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on institution size, complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>FSO Standard Implementation:</strong> Starting from $400K - includes core operations, basic compliance, and standard integrations for regional institutions</li>
            <li><strong>FSO Professional Implementation:</strong> $600K-$900K - includes disputes management, advanced analytics, and comprehensive integrations for large institutions</li>
            <li><strong>Enterprise FSO Suite:</strong> $1M+ - complete solution with AI capabilities, Visa integration, custom workflows, and enterprise-scale deployment</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through operational efficiency (40%), compliance automation (60%), and customer satisfaction improvements (35%).
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "FSO ROI Calculator", url: "/fso-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow FSO?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on institutional complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>FSO Standard:</strong> 18-22 weeks for core operations including payment operations, card management, and basic compliance</li>
            <li><strong>FSO Professional:</strong> 22-28 weeks including disputes management, risk compliance, and advanced analytics capabilities</li>
            <li><strong>Enterprise FSO Suite:</strong> 28-36 weeks for complete solution with AI integration, Visa compliance, and extensive system integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Regulatory & Compliance Analysis (4-6 weeks) → Core Platform Configuration (12-16 weeks) → Integration & Testing (6-8 weeks) → Go-Live & Compliance Validation (4-6 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow FSO ensure regulatory compliance and risk management?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow FSO provides comprehensive compliance and risk management capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Regulatory Compliance:</strong> Automated compliance checks with built-in regulatory frameworks and audit trails</li>
            <li><strong>Risk Monitoring:</strong> Real-time risk assessment with predictive analytics and early warning systems</li>
            <li><strong>Audit Management:</strong> Comprehensive audit trails with automated documentation and reporting capabilities</li>
            <li><strong>Policy Enforcement:</strong> Automated policy adherence with workflow-based compliance validation</li>
            <li><strong>Reporting Automation:</strong> Pre-configured regulatory reports with real-time data visualization</li>
            <li><strong>Incident Management:</strong> Proactive identification and resolution of compliance and risk issues</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Financial institutions maintain regulatory adherence while reducing compliance overhead and improving operational efficiency.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on FSO success stories)
  const caseStudies = [
    {
      title: "Global Bank Transforms Dispute Management with Visa Integration",
      client: "International Banking Corporation",
      industry: "Banking & Financial Services",
      challenge: "Complex dispute management processes across multiple systems causing delays, compliance issues, and poor customer experience with $2M annual losses",
      solution: "ServiceNow Disputes Management, Built with Visa, with unified workflows, automated compliance, and real-time customer updates for streamlined dispute resolution",
      results: [
        { metric: "Single", description: "Connected workflow" },
        { metric: "100%", description: "Visa compliance" },
        { metric: "60%", description: "Faster dispute resolution" },
        { metric: "$2M", description: "Annual loss prevention" }
      ],
      testimonial: "ServiceNow Disputes Management, Built with Visa, transformed our dispute resolution with unified workflows, ensuring 100% compliance while reducing resolution time by 60%.",
      executive: "Chief Operations Officer",
      logo: "/images/clients/banking-corp-logo.png"
    },
    {
      title: "Credit Union Streamlines Operations with Integrated FSO Platform",
      client: "Regional Credit Union Network",
      industry: "Credit Unions",
      challenge: "Siloed payment operations and card management systems creating operational inefficiencies and inconsistent member experiences across 25 branches",
      solution: "Complete ServiceNow FSO implementation with payment operations, card management, complaint handling, and member self-service capabilities",
      results: [
        { metric: "25", description: "Branches unified" },
        { metric: "Streamlined", description: "Operations platform" },
        { metric: "40%", description: "Operational efficiency" },
        { metric: "Enhanced", description: "Member experience" }
      ],
      testimonial: "ServiceNow FSO unified our operations across 25 branches, improving operational efficiency by 40% while delivering consistent member experiences.",
      executive: "VP of Operations",
      logo: "/images/clients/credit-union-logo.png"
    },
    {
      title: "Insurance Company Enhances Claims Processing with AI-Powered FSO",
      client: "National Insurance Provider",
      industry: "Insurance Services",
      challenge: "Manual claims processing and risk assessment procedures causing delays, errors, and regulatory compliance challenges affecting customer satisfaction",
      solution: "ServiceNow FSO with AI-powered risk assessment, automated claims processing, and integrated compliance management for insurance operations",
      results: [
        { metric: "AI-Powered", description: "Risk assessment" },
        { metric: "Automated", description: "Claims processing" },
        { metric: "Integrated", description: "Compliance management" },
        { metric: "Enhanced", description: "Customer satisfaction" }
      ],
      testimonial: "ServiceNow FSO with AI-powered capabilities revolutionized our claims processing and risk assessment while ensuring comprehensive regulatory compliance.",
      executive: "Chief Technology Officer",
      logo: "/images/clients/insurance-provider-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Financial Services Operations - Complete ServiceNow FSO Portfolio | ifBash</title>
        <meta
          name="description"
          content="Connect your entire financial institution with one platform. Transform operations with disputes management, risk compliance, and AI-enabled automation."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss FSO Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss FSO Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-emerald-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8 px-2 sm:px-0">
                {/* ServiceNow Official Badge */}
                <div className="flex flex-wrap gap-1.5 sm:gap-4 mb-6 sm:mb-8">
                  <Badge className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Built with Visa
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    AI-Enabled
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                    Financial Services
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 font-semibold">
                      Operations
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-emerald-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-teal-300">Connect your entire financial institution</span> with one platform featuring disputes management, risk compliance, and{' '}
                  <span className="font-semibold text-cyan-300">AI-enabled operational automation</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get FSO Implementation
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
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-cyan-400 group-hover:text-cyan-300" />
                      Transform Institution
                    </span>
                  </button>
                </div>

                {/* Visa Partnership Badge */}
                <div className="bg-gradient-to-r from-emerald-500/15 to-teal-500/15 backdrop-blur-sm rounded-xl p-4 border border-emerald-300/20">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-emerald-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Disputes Management, Built with Visa</div>
                      <div className="text-sm text-emerald-200">Strategic partnership for dispute resolution excellence</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Financial Services Operations Platform"
                      className="w-full h-full object-cover"
                      gradient="from-emerald-600 to-teal-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Unified</div>
                      <div className="text-xs text-emerald-200">Platform</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-Enabled</div>
                      <div className="text-xs text-teal-200">Operations</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BankIcon className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Transform Your Financial
                </span>
                <br />
                <span className="text-gray-800">
                  Institution
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Deliver easy experiences, build resilient operations, and accelerate transformation with AI-enabled financial services platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
                      <div className="text-sm font-semibold text-emerald-700 mb-1">Key Value</div>
                      <div className="text-emerald-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FSO Capabilities Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  FSO Core Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Financial Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive financial services operations with disputes management, compliance automation, and intelligent workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {fsoCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Software Integrations Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Software Integrations
                </span>
                <br />
                <span className="text-gray-800">
                  Seamless Connectivity
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Preconfigured integrations with industry leaders for streamlined operations and enhanced customer experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {softwareIntegrations.map((integration, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <integration.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {integration.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {integration.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {integration.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-full text-sm font-medium border border-cyan-200">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intelligent Elements Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Intelligent Elements
                </span>
                <br />
                <span className="text-gray-800">
                  AI-Powered Capabilities
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced AI and ML capabilities that revolutionize financial operations with intelligent automation and decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {intelligentElements.map((element, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <element.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {element.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {element.description}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-700 mb-1">Business Impact</div>
                      <div className="text-blue-600 text-lg font-bold">{element.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Financial Services Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about FSO implementation, disputes management, and financial operations transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-indigo-500 to-purple-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
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
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-indigo-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real FSO Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                See how financial institutions transformed their operations with AI-powered Financial Services Operations.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-4 sm:p-8 border border-white/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-200 border border-purple-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-200 border border-indigo-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-blue-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-4 border-l-4 border-purple-400">
                              <Quote className="h-6 w-6 text-purple-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-purple-300">— {study.executive}</p>
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
                                <span className="text-purple-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-purple-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-4 sm:p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Financial Operations?
                </h2>
                <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive financial services operations with disputes management and AI-enabled automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-3 sm:px-8 py-2 sm:py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact FSO Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-3 sm:px-8 py-2 sm:py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get FSO Guide
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">fso-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-blue-200 mx-auto mb-2" />
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

        /* Prevent horizontal scroll */
        :root {
          overflow-x: hidden;
          max-width: 100vw;
        }

        body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          .text-content {
            font-size: 0.875rem;
            line-height: 1.4;
          }
          
          .card {
            padding: 0.75rem;
          }
          
          .grid-gap {
            gap: 0.5rem;
          }

          /* Prevent text overflow */
          h1, h2, h3, p {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          /* Adjust images */
          img {
            max-width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
