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
  Landmark,
  Rss,
  Plug,
  Lock,
  Bug,
  Container,
  Crosshair,
  GraduationCap as CapIcon,
  ExternalLinkIcon
} from "lucide-react";

export default function ThirdPartyRiskManagementPage() {
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
    "name": "Third-Party Risk Management - ServiceNow TPRM Implementation",
    "description": "ServiceNow Third-Party Risk Management helps organizations continuously monitor critical vendors so businesses can evaluate, mitigate, and remediate risks.",
    "applicationCategory": "Third-Party Risk Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Third-Party Risk Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow TPRM helps organizations continuously monitor critical vendors to evaluate, mitigate, and remediate risks throughout the entire third-party lifecycle from onboarding to retirement with automated processes and risk intelligence."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the Concentration Risk Map and how does it enhance vendor visibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Concentration Risk Map provides a comprehensive geographical view of all third parties, engagements, and their associated risk postures, enabling organizations to identify concentration risks and make informed decisions about vendor diversification."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow TPRM content)
  const benefits = [
    {
      icon: Shield,
      title: "Strengthen risk mitigation",
      description: "Raise the bar on third-party quality by embedding risk practices into onboarding. Connect critical stakeholders and drive compliance for business continuity.",
      color: "from-slate-500 to-gray-500",
      stats: "Enhanced risk mitigation"
    },
    {
      icon: Eye,
      title: "Increase visibility", 
      description: "Maintain consistent oversight of third parties between assessments and remain continuously informed of changes that may impact the portfolio.",
      color: "from-gray-500 to-zinc-500",
      stats: "Continuous oversight"
    },
    {
      icon: Target,
      title: "Improve decision-making",
      description: "Identify emerging risks with help from assessments and continuous monitoring. Improve information quality to inform your decisions and contextualize risk.",
      color: "from-zinc-500 to-stone-500",
      stats: "Informed decision-making"
    },
    {
      icon: Activity,
      title: "Build organizational resilience",
      description: "Reduce risk as you build organizational resilience and compliance across the enterprise with comprehensive third-party lifecycle management.",
      color: "from-stone-500 to-neutral-500",
      stats: "Enterprise resilience"
    }
  ];

  // Key Features (From ServiceNow TPRM content)
  const keyFeatures = [
    {
      icon: UserCheck,
      title: "Onboarding, Offboarding, and Renewals Due Diligence",
      description: "Perform due diligence and assessments at all relationship stages with automated built-in processes for comprehensive lifecycle management.",
      capabilities: [
        "Automated onboarding processes",
        "Due diligence assessments",
        "Renewal risk evaluations",
        "Structured offboarding workflows"
      ],
      color: "from-slate-500 to-gray-500"
    },
    {
      icon: ExternalLinkIcon,
      title: "Third-Party Portal",
      description: "Connect and collaborate with third parties in a single place for all risk management activities with dedicated vendor communication channels.",
      capabilities: [
        "Single collaboration platform",
        "Vendor communication hub",
        "Assessment management",
        "Issue resolution tracking"
      ],
      color: "from-gray-500 to-zinc-500"
    },
    {
      icon: Brain,
      title: "Risk Intelligence and Ongoing Monitoring",
      description: "Integrate targeted risk intelligence scores and ratings for insights and continuous monitoring with real-time risk data feeds.",
      capabilities: [
        "Risk intelligence integration",
        "Continuous monitoring feeds",
        "Real-time scoring updates",
        "Third-party data sources"
      ],
      color: "from-zinc-500 to-stone-500"
    },
    {
      icon: Map,
      title: "Concentration Risk Map",
      description: "Gain a comprehensive view of all third parties, engagements, and their associated risk postures with geographical risk visualization.",
      capabilities: [
        "Geographical risk visualization",
        "Concentration analytics",
        "Third-party mapping",
        "Risk posture overview"
      ],
      color: "from-stone-500 to-neutral-500"
    },
    {
      icon: Database,
      title: "Third-Party Portfolio Management",
      description: "Eliminate spreadsheets with a single database for third-party information, providing centralized vendor data management and reporting.",
      capabilities: [
        "Centralized vendor database",
        "Spreadsheet elimination",
        "Portfolio analytics",
        "Unified data management"
      ],
      color: "from-neutral-500 to-slate-600"
    },
    {
      icon: Layout,
      title: "Third-Party Risk Management Workspace",
      description: "Help your team manage third-party performance and risk, all in one place with comprehensive workspace for risk professionals.",
      capabilities: [
        "Unified workspace interface",
        "Performance tracking",
        "Risk management tools",
        "Team collaboration features"
      ],
      color: "from-slate-600 to-gray-600"
    },
    {
      icon: AlertTriangle,
      title: "Issue Management and Remediation",
      description: "Automate issue generation, design remediation plans, and chat in real time to resolve issues fast with collaborative problem-solving.",
      capabilities: [
        "Automated issue generation",
        "Remediation planning",
        "Real-time collaboration",
        "Issue tracking workflows"
      ],
      color: "from-gray-600 to-zinc-600"
    },
    {
      icon: BarChart3,
      title: "Aggregated Risk Scores",
      description: "Calculate scores throughout the hierarchy for an up-to-date, top-down, and bottom-up risk view with comprehensive risk analytics.",
      capabilities: [
        "Hierarchical risk scoring",
        "Top-down risk analysis",
        "Bottom-up aggregation",
        "Real-time score updates"
      ],
      color: "from-zinc-600 to-stone-600"
    }
  ];

  // Third-Party Integrations
  const thirdPartyIntegrations = [
    {
      name: "BitSight",
      description: "Add BitSight third-party security performance data automatically to your ServiceNow instance for comprehensive security rating visibility.",
      logo: "/images/integrations/bitsight-logo.png",
      capabilities: ["Security performance data", "Automated data feeds", "Risk scoring integration"]
    },
    {
      name: "SecurityScorecard",
      description: "Rate and understand the cyber security risk of any vendor in your portfolio with continuous security ratings and monitoring.",
      logo: "/images/integrations/securityscorecard-logo.png",
      capabilities: ["Cyber security ratings", "Portfolio monitoring", "Risk assessment"]
    },
    {
      name: "CyberGRX",
      description: "Understand and prioritize cyber threats based on proactive monitoring and risk scores of third-party cyber environments.",
      logo: "/images/integrations/cybergrx-logo.png",
      capabilities: ["Threat prioritization", "Proactive monitoring", "Cyber environment analysis"]
    },
    {
      name: "Shared Assessments",
      description: "Streamline the Standard Information Gathering (SIG) process for assessing third-party risk with industry-standard questionnaires.",
      logo: "/images/integrations/shared-assessments-logo.png",
      capabilities: ["SIG process automation", "Standard questionnaires", "Assessment streamlining"]
    },
    {
      name: "Ethicontrol",
      description: "Collect, manage, visualize, and report on third-party ESG data for comprehensive environmental, social, and governance risk assessment.",
      logo: "/images/integrations/ethicontrol-logo.png", 
      capabilities: ["ESG data management", "Sustainability reporting", "Governance assessment"]
    },
    {
      name: "IntSights",
      description: "Get full, real-time threat context to proactively monitor and mitigate third-party risks with advanced threat intelligence feeds.",
      logo: "/images/integrations/intsights-logo.png",
      capabilities: ["Real-time threat context", "Proactive monitoring", "Threat intelligence"]
    }
  ];

  // Advanced Capabilities
  const advancedCapabilities = [
    {
      title: "Fourth-Party Risk Management",
      description: "Extend risk management beyond direct vendors to include subcontractors and vendors of vendors for comprehensive supply chain visibility.",
      icon: Network,
      benefit: "Supply chain transparency"
    },
    {
      title: "AI-Powered Risk Assessment",
      description: "Leverage artificial intelligence for automated risk scoring, predictive analytics, and intelligent issue identification and remediation.",
      icon: Bot,
      benefit: "Intelligent automation"
    },
    {
      title: "Regulatory Compliance Integration", 
      description: "Ensure compliance with industry regulations and standards through integrated compliance monitoring and reporting capabilities.",
      icon: Scale,
      benefit: "Compliance assurance"
    },
    {
      title: "Contract Lifecycle Integration",
      description: "Seamlessly integrate with procurement and contract management systems for risk-informed contracting and vendor negotiations.",
      icon: FileText,
      benefit: "Contract optimization"
    },
    {
      title: "Business Impact Analysis",
      description: "Analyze and quantify business impact of third-party risks with comprehensive business continuity planning and assessment tools.",
      icon: Target,
      benefit: "Business continuity"
    },
    {
      title: "Vendor Performance Analytics",
      description: "Track and analyze vendor performance metrics with advanced analytics and reporting for data-driven vendor management decisions.",
      icon: BarChart3,
      benefit: "Performance optimization"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Third-Party Risk Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Third-Party Risk Management (TPRM) helps organizations continuously monitor critical vendors:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Helps organizations evaluate, mitigate, and remediate risks throughout the entire third-party lifecycle</li>
            <li>Provides centralized process for managing portfolio of third parties, assessing and scoring risk, and performing remediation</li>
            <li>Takes control of the third-party risk lifecycle from onboarding to retirement with automated processes</li>
            <li>Centralizes management of third parties in one location and transforms vendor assessment process</li>
            <li>Builds organizational resilience and compliance across the enterprise through integrated risk management</li>
          </ul>
          <p className="mt-3 text-sm text-slate-600">
            <strong>Built on ServiceNow AI Platform</strong> with workflow automation and risk intelligence for comprehensive vendor management.
          </p>
        </div>
      )
    },
    
    {
      question: "What is the Concentration Risk Map and how does it enhance vendor visibility?",
      answer: (
        <div>
          <p className="mb-3">The Concentration Risk Map provides comprehensive geographical and risk visualization:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Geographical Visualization:</strong> Pinpoints geographical locations of active third parties and engagements for location-based risk analysis</li>
            <li><strong>Risk Posture Mapping:</strong> Displays associated risk postures and concentrations across different regions and vendor categories</li>
            <li><strong>Configurable Filters:</strong> Configure filters to view particular risk levels, vendor types, and engagement categories</li>
            <li><strong>Concentration Analytics:</strong> Identify potential concentration risks and single points of failure in vendor portfolio</li>
            <li><strong>Strategic Planning:</strong> Support vendor diversification strategies and risk distribution decision-making</li>
            <li><strong>Real-Time Updates:</strong> Dynamic updates as vendor relationships and risk profiles change over time</li>
            <li><strong>Executive Reporting:</strong> Visual dashboards for executive reporting and strategic risk communication</li>
          </ul>
          <p className="mt-3">
            This comprehensive view enables organizations to make informed decisions about vendor diversification and concentration risk management.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow TPRM?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow TPRM provides comprehensive third-party risk management capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-600 mb-2">Core Lifecycle Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Onboarding and Due Diligence:</strong> Automated processes for vendor onboarding with comprehensive assessments</li>
                <li><strong>Third-Party Portal:</strong> Single collaboration platform for all vendor risk management activities</li>
                <li><strong>Portfolio Management:</strong> Centralized database eliminating spreadsheets with unified data management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-600 mb-2">Risk Intelligence and Monitoring:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Risk Intelligence Integration:</strong> Targeted risk intelligence scores and ratings with continuous monitoring</li>
                <li><strong>Concentration Risk Map:</strong> Comprehensive geographical view of third parties and risk postures</li>
                <li><strong>Aggregated Risk Scores:</strong> Hierarchical scoring with top-down and bottom-up risk analysis</li>
                <li><strong>Issue Management:</strong> Automated issue generation with real-time remediation collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does TPRM integrate with third-party risk intelligence providers?",
      answer: (
        <div>
          <p className="mb-3">
            TPRM provides extensive integration capabilities with leading risk intelligence providers:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>BitSight:</strong> Automated security performance data integration for comprehensive security rating visibility</li>
            <li><strong>CyberGRX:</strong> Access to world's largest third-party cyber risk exchange with over 200,000 companies and assessments</li>
            <li><strong>SecurityScorecard:</strong> Continuous security ratings and monitoring for cyber security risk assessment</li>
            <li><strong>Shared Assessments:</strong> SIG (Standard Information Gathering) process automation with industry questionnaires</li>
            <li><strong>Ethicontrol:</strong> ESG data management for environmental, social, and governance risk assessment</li>
            <li><strong>IntSights:</strong> Real-time threat context and proactive monitoring with advanced threat intelligence</li>
          </ul>
          <p className="mt-3">
            These integrations provide automated data feeds, reduce assessment chasing, and enable data-driven risk management decisions.
          </p>
        </div>
      )
    },

    {
      question: "What advanced capabilities does TPRM provide beyond basic vendor management?",
      answer: (
        <div>
          <p className="mb-3">TPRM offers advanced capabilities for comprehensive enterprise risk management:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Extended Risk Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Fourth-Party Risk:</strong> Management of subcontractors and vendors of vendors for supply chain transparency</li>
                <li><strong>Business Impact Analysis:</strong> Quantify business impact with comprehensive continuity planning tools</li>
                <li><strong>Regulatory Compliance:</strong> Integrated compliance monitoring and reporting for industry standards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Intelligence and Analytics:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>AI-Powered Assessment:</strong> Automated risk scoring with predictive analytics and intelligent issue identification</li>
                <li><strong>Vendor Performance Analytics:</strong> Advanced analytics and reporting for data-driven management decisions</li>
                <li><strong>Contract Lifecycle Integration:</strong> Risk-informed contracting with procurement system integration</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Third-Party Risk Management implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, vendor portfolio complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TPRM Standard Implementation:</strong> Starting from $280K - includes basic vendor risk management, assessments, and standard integrations for mid-size organizations</li>
            <li><strong>TPRM Professional Implementation:</strong> $420K-$620K - includes concentration risk mapping, advanced analytics, and comprehensive third-party integrations for large enterprises</li>
            <li><strong>TPRM Enterprise Suite:</strong> $700K+ - complete solution with fourth-party risk management, AI-powered analytics, and enterprise-scale vendor operations</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through vendor assessment efficiency gains (55%), risk mitigation improvements (40%), and compliance automation (35%). Automated processes can reduce vendor onboarding time by 60%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "TPRM ROI Calculator", url: "/tprm-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow TPRM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on vendor portfolio complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TPRM Standard:</strong> 10-14 weeks for basic vendor risk management, assessment workflows, and core third-party integrations</li>
            <li><strong>TPRM Professional:</strong> 14-20 weeks including concentration risk mapping, advanced analytics, and comprehensive platform integrations</li>
            <li><strong>TPRM Enterprise Suite:</strong> 20-26 weeks for complete solution with fourth-party risk, AI-powered analytics, and extensive ecosystem integration</li>
          </ul>
          <p className="mt-3">
            Our methodology: Vendor Portfolio Assessment & Risk Analysis (2-3 weeks) → Core TPRM Platform & Assessment Configuration (6-8 weeks) → Third-Party Integration & Risk Intelligence Setup (3-5 weeks) → Analytics & Dashboard Development (2-4 weeks) → Go-Live & Risk Team Training (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does TPRM replace the legacy Vendor Risk Management (VRM) solution?",
      answer: (
        <div>
          <p className="mb-3">TPRM is ServiceNow's next-generation replacement for Vendor Risk Management (VRM):</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Product Evolution:</strong> TPRM is a completely new product that replaces VRM moving forward with enhanced capabilities</li>
            <li><strong>Enhanced Features:</strong> Includes concentration risk mapping, advanced analytics, and improved third-party portal functionality</li>
            <li><strong>Licensing Model:</strong> Structured as base charge plus usage-based licensing for active vendor management activities</li>
            <li><strong>Migration Path:</strong> ServiceNow provides migration utilities and support for transitioning from VRM to TPRM</li>
            <li><strong>Terminology Updates:</strong> Rebranding from 'Vendor' to 'Third Party' reflecting broader ecosystem management approach</li>
            <li><strong>Advanced Workflows:</strong> Enhanced assessment management, issue tracking, and remediation capabilities</li>
            <li><strong>Integration Ecosystem:</strong> Expanded integration capabilities with leading risk intelligence providers</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations gain modern, comprehensive third-party risk management with enhanced capabilities while maintaining existing vendor relationships and data.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on TPRM success stories)
  const caseStudies = [
    {
      title: "Uber Digitizes Risk Management with Complete Policy Lifecycle Visibility",
      client: "Uber Technologies",
      industry: "Transportation Technology",
      challenge: "Global transportation platform requiring digitized risk management with complete policy lifecycle visibility and regulatory horizon awareness",
      solution: "ServiceNow TPRM with digitized risk management, policy lifecycle automation, and comprehensive regulatory compliance for transportation operations",
      results: [
        { metric: "Digitized", description: "Risk management" },
        { metric: "Complete", description: "Policy lifecycle visibility" },
        { metric: "Regulatory", description: "Horizon awareness" },
        { metric: "Global", description: "Operations coverage" }
      ],
      testimonial: "ServiceNow TPRM enabled us to digitize risk management with complete policy lifecycle visibility and awareness of the regulatory horizon.",
      executive: "Chief Risk Officer",
      logo: "/images/clients/uber-logo.png"
    },
    {
      title: "Novartis Reduces System Complexity and Streamlines Third-Party Risk Processes",
      client: "Novartis AG",
      industry: "Pharmaceutical",
      challenge: "Complex pharmaceutical operations requiring reduced system complexity and streamlined third-party risk management processes across global supply chain",
      solution: "ServiceNow TPRM with simplified system architecture, automated risk assessments, and integrated third-party management for pharmaceutical compliance",
      results: [
        { metric: "Reduced", description: "System complexity" },
        { metric: "Streamlined", description: "Risk processes" },
        { metric: "Pharmaceutical", description: "Compliance assured" },
        { metric: "Global", description: "Supply chain coverage" }
      ],
      testimonial: "ServiceNow TPRM reduced our system complexity and streamlined third-party risk management processes across our global pharmaceutical operations.",
      executive: "Head of Risk Management",
      logo: "/images/clients/novartis-logo.png"
    },
    {
      title: "Global Financial Services Firm Implements Comprehensive TPRM with Concentration Risk Mapping",
      client: "International Banking Group",
      industry: "Financial Services",
      challenge: "Financial services operations requiring comprehensive third-party risk management with concentration risk mapping and regulatory compliance oversight",
      solution: "ServiceNow TPRM with concentration risk mapping, financial services compliance, and comprehensive vendor portfolio management for banking operations",
      results: [
        { metric: "Concentration", description: "Risk mapping deployed" },
        { metric: "Financial", description: "Compliance enhanced" },
        { metric: "Vendor Portfolio", description: "Management centralized" },
        { metric: "Regulatory", description: "Oversight automated" }
      ],
      testimonial: "ServiceNow TPRM with concentration risk mapping provided comprehensive visibility into our third-party ecosystem while maintaining strict financial compliance.",
      executive: "Chief Risk Officer",
      logo: "/images/clients/banking-group-logo.png"
    },
    {
      title: "Manufacturing Corporation Deploys AI-Powered TPRM with Fourth-Party Risk Management",
      client: "Global Manufacturing Enterprise",
      industry: "Industrial Manufacturing",
      challenge: "Complex supply chain requiring AI-powered third-party risk management with fourth-party risk visibility and supplier resilience monitoring",
      solution: "ServiceNow TPRM with AI-powered risk analytics, fourth-party risk management, and comprehensive supply chain resilience for manufacturing operations",
      results: [
        { metric: "AI-Powered", description: "Risk analytics" },
        { metric: "Fourth-Party", description: "Risk visibility" },
        { metric: "Supply Chain", description: "Resilience enhanced" },
        { metric: "Manufacturing", description: "Operations secured" }
      ],
      testimonial: "ServiceNow TPRM with AI-powered analytics and fourth-party risk management transformed our supply chain resilience and risk visibility.",
      executive: "VP of Supply Chain Risk",
      logo: "/images/clients/manufacturing-enterprise-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Third-Party Risk Management - ServiceNow TPRM Portfolio | ifBash</title>
        <meta
          name="description"
          content="ServiceNow Third-Party Risk Management helps organizations continuously monitor critical vendors so businesses can evaluate, mitigate, and remediate risks."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-slate-600 to-gray-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss TPRM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss TPRM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-slate-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gray-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-slate-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gray-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-zinc-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-slate-500/90 to-gray-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-slate-600 hover:to-gray-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-gray-500/90 to-zinc-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-gray-600 hover:to-zinc-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered TPRM
                  </Badge>
                  <Badge className="bg-gradient-to-r from-zinc-500/90 to-stone-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-zinc-600 hover:to-stone-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Vendor Lifecycle
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 font-semibold">
                    Third-Party Risk
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-zinc-400 to-stone-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-gray-300">Take control of the third-party risk lifecycle,</span> from onboarding to retirement.{' '}
                  <span className="font-semibold text-zinc-300">Reduce risk as you build organizational resilience</span> and compliance across the enterprise.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 hover:from-slate-700 hover:via-gray-700 hover:to-zinc-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(71, 85, 105, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-slate-400/20 via-gray-400/20 to-zinc-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get TPRM Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-stone-400 group-hover:text-stone-300" />
                      View Demo
                    </span>
                  </button>
                </div>

                {/* Vendor Lifecycle Badge */}
                <div className="bg-gradient-to-r from-slate-500/15 to-gray-500/15 backdrop-blur-sm rounded-xl p-4 border border-slate-300/20">
                  <div className="flex items-center gap-3">
                    <Network className="h-8 w-8 text-slate-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Complete Vendor Lifecycle Management</div>
                      <div className="text-sm text-slate-200">From onboarding to retirement with risk intelligence</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-slate-500/15 to-gray-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Third-Party Risk Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-slate-600 to-gray-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Vendor</div>
                      <div className="text-xs text-slate-200">Lifecycle</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Risk</div>
                      <div className="text-xs text-gray-200">Intelligence</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Users2 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-gray-600 to-zinc-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Map className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-slate-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600">
                  Transform Third-Party
                </span>
                <br />
                <span className="text-gray-800">
                  Risk Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Take control throughout every stage of the risk lifecycle with comprehensive vendor management and organizational resilience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-slate-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-4 border border-slate-200">
                      <div className="text-sm font-semibold text-slate-700 mb-1">Key Value</div>
                      <div className="text-slate-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-zinc-600 to-stone-600">
                  Key TPRM Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Vendor Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive third-party risk management features from onboarding to portfolio analytics with intelligent risk monitoring.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-zinc-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability, idx) => (
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

        {/* Third-Party Integrations Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-zinc-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-stone-600 to-neutral-600">
                  Risk Intelligence Integrations
                </span>
                <br />
                <span className="text-gray-800">
                  Leading Risk Providers
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive integrations with leading risk intelligence providers for automated data feeds and enhanced vendor visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {thirdPartyIntegrations.map((integration, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-zinc-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 to-stone-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-zinc-500 to-stone-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Plug className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {integration.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {integration.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {integration.capabilities.map((capability, idx) => (
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

        {/* Advanced Capabilities Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-600 via-neutral-600 to-slate-700">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Risk Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced third-party risk capabilities including fourth-party risk, AI-powered analytics, and enterprise-scale vendor management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-stone-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-500/5 to-neutral-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-stone-500 to-neutral-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-stone-50 to-neutral-50 rounded-xl p-4 border border-stone-200">
                      <div className="text-sm font-semibold text-stone-700 mb-1">Key Benefit</div>
                      <div className="text-stone-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-neutral-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 via-slate-600 to-gray-700">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Third-Party Risk Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about TPRM implementation, vendor risk management, and third-party ecosystem transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-neutral-500 to-slate-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-neutral-600 hover:text-neutral-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-gray-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-slate-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real TPRM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their third-party risk management with AI-powered TPRM solutions.
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
                              <Badge className="bg-gradient-to-r from-slate-500/20 to-gray-500/20 text-slate-200 border border-slate-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-gray-500/20 to-zinc-500/20 text-gray-200 border border-gray-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-zinc-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-zinc-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-slate-900/30 to-gray-900/30 rounded-xl p-4 border-l-4 border-slate-400">
                              <Quote className="h-6 w-6 text-slate-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-slate-300">— {study.executive}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Results Achieved</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                  <div className="text-2xl font-bold text-yellow-400 mb-1">{result.metric}</div>
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
                                <span className="text-slate-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-slate-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-slate-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Third-Party Risk Management?
                </h2>
                <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive third-party risk management with vendor lifecycle automation and risk intelligence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-slate-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact TPRM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Data Sheet
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-slate-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">tprm-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-gray-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-zinc-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">View Demo</p>
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
