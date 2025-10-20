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
  GraduationCap as CapIcon
} from "lucide-react";

export default function IntegratedRiskManagementPage() {
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
    "name": "Integrated Risk Management - ServiceNow IRM Implementation",
    "description": "Make risk-informed decisions and increase efficiency. Innovate at speed, with confidence, to build trust and reach your business goals with ServiceNow IRM.",
    "applicationCategory": "Integrated Risk Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Integrated Risk Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow IRM helps transform inefficient processes across your extended enterprise into an integrated and resilient risk program through continuous monitoring and intelligent automation with real-time view of compliance and risk."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Operational Resilience Management and how does it enhance business continuity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Operational Resilience Management provides real-time visibility into the resilience of technology, people, processes, and facilities, enabling organizations to anticipate, prevent, respond, and adapt to business disruptions."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow IRM content)
  const benefits = [
    {
      icon: Eye,
      title: "Gain real-time visibility",
      description: "Use continuous monitoring and insights into regulatory changes for a real-time view of your enterprise resilience. Spark action to high-risk areas.",
      color: "from-teal-500 to-cyan-500",
      stats: "Real-time enterprise visibility"
    },
    {
      icon: TrendingUp,
      title: "Increase efficiency",
      description: "Boost productivity with automated cross-functional workflows, artificial intelligence, and consumer-like user experiences while reducing costs.",
      color: "from-cyan-500 to-sky-500",
      stats: "Enhanced productivity"
    },
    {
      icon: Target,
      title: "Make decisions with confidence",
      description: "Engage and connect frontline users and GRC teams with frictionless experiences on a single platform. Share accurate data for informed decisions.",
      color: "from-sky-500 to-blue-500",
      stats: "Confident decision-making"
    },
    {
      icon: Shield,
      title: "Operationalize risk and resilience",
      description: "Continuously monitor risks and controls while managing compliance with tools and automation powered by the ServiceNow AI Platform.",
      color: "from-blue-500 to-indigo-500",
      stats: "Integrated risk program"
    }
  ];

  // Key Features (From ServiceNow IRM content)
  const keyFeatures = [
    {
      icon: FileText,
      title: "Policy and Compliance Management",
      description: "Automate and manage policy lifecycles and continuously monitor for compliance with regulatory requirements and internal policies.",
      capabilities: [
        "Automated policy lifecycles",
        "Continuous compliance monitoring",
        "Regulatory requirement mapping",
        "Policy acknowledgment tracking"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Risk Management",
      description: "Enable fine-grained business impact analysis to appropriately prioritize and respond to risks with comprehensive risk assessment capabilities.",
      capabilities: [
        "Fine-grained impact analysis",
        "Risk prioritization matrix",
        "Business context integration",
        "Risk response automation"
      ],
      color: "from-cyan-500 to-sky-500"
    },
    {
      icon: Settings,
      title: "Operational Risk Management",
      description: "Manage operational risk as part of an integrated risk management program with continuous monitoring and incident reporting.",
      capabilities: [
        "Operational risk assessment",
        "Incident reporting workflows",
        "Risk control self-assessment",
        "Continuous monitoring"
      ],
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: CheckCircle,
      title: "Continuous Authorization and Monitoring",
      description: "Accelerate the process of bringing IT systems online and continuously monitor them for compliance and security posture.",
      capabilities: [
        "System authorization automation",
        "Continuous security monitoring",
        "Compliance validation",
        "Risk posture tracking"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Activity,
      title: "Operational Resilience Management",
      description: "Gain real-time visibility into the resilience of your technology, people, processes, and facilities with comprehensive monitoring.",
      capabilities: [
        "Real-time resilience visibility",
        "Technology monitoring",
        "Process resilience tracking",
        "Facility impact assessment"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Newspaper,
      title: "Regulatory Change Management",
      description: "Keep pace with today's complex regulatory landscape with integration to leading content providers and automated change tracking.",
      capabilities: [
        "Regulatory intelligence feeds",
        "Automated change tracking",
        "Content provider integration",
        "Compliance impact assessment"
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Search,
      title: "Audit Management",
      description: "Use risk data to scope and prioritize audit plans and automate cross-functional processes with comprehensive audit lifecycle management.",
      capabilities: [
        "Risk-based audit planning",
        "Cross-functional automation",
        "Audit lifecycle management",
        "Finding remediation tracking"
      ],
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: Rocket,
      title: "Use Case Accelerators",
      description: "Get an operational head start on compliance with popular frameworks and regulations through pre-built templates and configurations.",
      capabilities: [
        "Framework templates",
        "Regulatory accelerators",
        "Pre-built configurations",
        "Compliance jumpstart"
      ],
      color: "from-fuchsia-500 to-pink-500"
    }
  ];

  // Role-Based Applications
  const roleBasedApps = [
    {
      role: "Head of Risk Management",
      description: "Establish the risk management strategy, working across the enterprise. Engage frontline employees to enable business growth within predefined risk appetite.",
      applications: [
        "Risk Management - Real-time visibility and insights for high-impact risks",
        "Operational Risk Management - Cross-domain risk using enterprise-wide data",
        "Operational Resilience Management - Business disruption prevention and response"
      ],
      icon: UserCog,
      color: "from-teal-500 to-cyan-500"
    },
    {
      role: "Head of Compliance Management", 
      description: "Manage the corporate and regulatory compliance strategy, empowering employees to report violations and acknowledge policies globally.",
      applications: [
        "Policy and Compliance Management - Automate lifecycles and unify processes",
        "Regulatory Change Management - Proactive regulatory change management",
        "Audit Management - Common control framework for growing regulations"
      ],
      icon: Scale,
      color: "from-cyan-500 to-sky-500"
    },
    {
      role: "Head of Audit and Assurance",
      description: "Set enterprise-wide audit and assurance strategy that drives efficiency through self-service portals and focuses on high-risk areas.",
      applications: [
        "Audit Management - Prioritize internal audits and eliminate recurring findings",
        "Policy and Compliance Management - Continuous compliance monitoring",
        "Risk Management - Risk-assess auditable units for improved planning"
      ],
      icon: CheckCircle,
      color: "from-sky-500 to-blue-500"
    },
    {
      role: "Control or Application Owner",
      description: "Take charge of your controls for increased insight and efficiency. Communicate directly with GRC teams and assess risk for changes.",
      applications: [
        "Policy and Compliance Management - Manage controls in integrated solution",
        "Operational Risk Management - User-friendly risk assessments and reporting",
        "Employee Center - Embed risk and compliance into daily work"
      ],
      icon: Cog,
      color: "from-blue-500 to-indigo-500"
    }
  ];

  // Package Tiers
  const packageTiers = [
    {
      name: "IRM Standard",
      description: "For growing businesses that need integrated risk and compliance management with essential features",
      features: [
        "Policy and Compliance Management",
        "Risk Management",
        "Performance Analytics",
        "Audit Management",
        "Use Case Accelerators"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Standard Package"
    },
    {
      name: "IRM Professional", 
      description: "Optimize risk and compliance management while you scale, with AI and intelligent automation capabilities",
      features: [
        "All Standard features",
        "Virtual Agent",
        "Continuous Authorization and Monitoring",
        "Predictive Intelligence",
        "Regulatory Change",
        "Operational Resilience"
      ],
      color: "from-cyan-500 to-sky-500",
      price: "Professional Package"
    },
    {
      name: "IRM Enterprise",
      description: "Advance risk and operational insights to build business resilience with unlimited compliance capabilities",
      features: [
        "All Professional features", 
        "Unlimited compliance requests",
        "Automated risk assessments",
        "Risk event tasks and loss workflow",
        "ORX integration (financial services)",
        "Advanced operational insights"
      ],
      color: "from-sky-500 to-blue-500",
      price: "Enterprise Package"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Integrated Risk Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Integrated Risk Management (IRM) transforms inefficient processes across your extended enterprise:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Helps transform inefficient processes into an integrated and resilient risk program</li>
            <li>Provides continuous monitoring and intelligent automation for real-time compliance and risk view</li>
            <li>Improves decision making and increases performance across your organization</li>
            <li>Enables rapid response to quickly address disruptions and business changes</li>
            <li>Connects business, security, and IT with an integrated risk framework on single platform</li>
          </ul>
          <p className="mt-3 text-sm text-teal-600">
            <strong>Built on ServiceNow AI Platform</strong> with workflow automation and predictive intelligence for comprehensive GRC.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Operational Resilience Management and how does it enhance business continuity?",
      answer: (
        <div>
          <p className="mb-3">Operational Resilience Management provides comprehensive business disruption management:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Real-Time Visibility:</strong> Gain visibility into the resilience of technology, people, processes, and facilities</li>
            <li><strong>Business Disruption Management:</strong> Anticipate, prevent, respond, and adapt to business disruptions effectively</li>
            <li><strong>Continuous Monitoring:</strong> Four-stage workflow for continuous resilience management and monitoring</li>
            <li><strong>Impact Tolerance Setting:</strong> Planning tools with scenario analysis to stress test and improve resilience</li>
            <li><strong>Single Pane of Glass:</strong> Interprets risk, compliance, and operational insights from throughout organization</li>
            <li><strong>Integration Capabilities:</strong> Works with Business Continuity Management and Vendor Risk Management</li>
            <li><strong>Cross-Platform Insights:</strong> Integrates with HR Service Delivery, Security Operations, and other platforms</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach enables Chief Operations Officers and resilience managers to protect customers, employees, products, and services.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow IRM?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow IRM provides comprehensive governance, risk, and compliance capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-cyan-600 mb-2">Core GRC Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Policy and Compliance Management:</strong> Automated policy lifecycles and continuous monitoring</li>
                <li><strong>Risk Management:</strong> Fine-grained business impact analysis and risk prioritization</li>
                <li><strong>Audit Management:</strong> Risk-based audit planning and cross-functional automation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sky-600 mb-2">Advanced Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Operational Risk Management:</strong> Continuous monitoring and incident reporting workflows</li>
                <li><strong>Operational Resilience:</strong> Real-time visibility into technology, people, processes, and facilities</li>
                <li><strong>Regulatory Change Management:</strong> Automated tracking with content provider integration</li>
                <li><strong>Use Case Accelerators:</strong> Pre-built templates for popular frameworks and regulations</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How do role-based applications work in ServiceNow IRM?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow IRM provides role-based applications tailored to different GRC professionals:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Head of Risk Management:</strong> Establish enterprise risk strategy, engage frontline employees, and enable business growth within risk appetite</li>
            <li><strong>Head of Compliance Management:</strong> Manage corporate and regulatory compliance strategy, empower violation reporting, and acknowledge policies globally</li>
            <li><strong>Head of Audit and Assurance:</strong> Set enterprise-wide audit strategy, drive efficiency through self-service, and focus on high-risk areas</li>
            <li><strong>Control or Application Owner:</strong> Take charge of controls, communicate with GRC teams, and assess risk for process changes</li>
          </ul>
          <p className="mt-3">
            Each role receives tailored applications, workflows, and dashboards optimized for their specific responsibilities and decision-making needs.
          </p>
        </div>
      )
    },

    {
      question: "What package tiers are available for ServiceNow IRM?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow IRM offers three package tiers to meet different organizational needs:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">IRM Standard:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Policy and Compliance Management, Risk Management, Performance Analytics</li>
                <li>Audit Management and Use Case Accelerators for growing businesses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">IRM Professional:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Standard features plus Virtual Agent, Continuous Authorization and Monitoring</li>
                <li>Predictive Intelligence, Regulatory Change, and Operational Resilience capabilities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">IRM Enterprise:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Professional features plus unlimited compliance requests and workflows</li>
                <li>Automated risk assessments, risk event workflows, and ORX integration for financial services</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Integrated Risk Management implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, GRC complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>IRM Standard Implementation:</strong> Starting from $320K - includes basic GRC capabilities, policy management, and standard compliance workflows for mid-size organizations</li>
            <li><strong>IRM Professional Implementation:</strong> $480K-$720K - includes operational resilience, regulatory change management, and advanced AI capabilities for large enterprises</li>
            <li><strong>IRM Enterprise Suite:</strong> $800K+ - complete solution with unlimited compliance capabilities, automated assessments, and enterprise-scale GRC operations</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through GRC process efficiency gains (50%), compliance automation (40%), and risk management improvements (45%). Operational resilience can reduce manual asset mapping by 50%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "IRM ROI Calculator", url: "/irm-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow IRM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on GRC complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>IRM Standard:</strong> 12-16 weeks for basic GRC capabilities, policy management, risk assessments, and audit workflows</li>
            <li><strong>IRM Professional:</strong> 16-22 weeks including operational resilience, regulatory change management, and advanced AI integration</li>
            <li><strong>IRM Enterprise Suite:</strong> 22-28 weeks for complete solution with unlimited compliance, automated assessments, and enterprise integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: GRC Assessment & Compliance Analysis (3-4 weeks) → Core IRM Platform & Policy Configuration (6-10 weeks) → Risk Management & Operational Resilience Setup (4-6 weeks) → Advanced Analytics & Regulatory Integration (3-5 weeks) → Go-Live & GRC Team Training (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow IRM integrate with existing enterprise systems and compliance tools?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow IRM provides extensive integration capabilities for enterprise GRC ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Regulatory Content Providers:</strong> Integration with leading regulatory intelligence feeds for proactive compliance</li>
            <li><strong>Data Classification Tools:</strong> Asset classification and cataloging with ServiceNow CMDB for data governance</li>
            <li><strong>Risk Quantification:</strong> FAIR (Factor Analysis of Information Risk) integration for quantitative analysis</li>
            <li><strong>Enterprise Systems:</strong> Native integration with HR Service Delivery, Security Operations, and ITSM platforms</li>
            <li><strong>Audit Tools:</strong> Integration with audit management platforms for comprehensive audit lifecycle</li>
            <li><strong>Business Continuity:</strong> Connection with BCM and Vendor Risk Management for holistic resilience</li>
            <li><strong>Financial Systems:</strong> ORX integration for financial services operational risk management</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve unified GRC operations while maintaining existing compliance tool investments and regulatory relationships.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on IRM success stories)
  const caseStudies = [
    {
      title: "Wipro Transforms Enterprise Risk Management with ServiceNow 'Risk Central'",
      client: "Wipro Limited",
      industry: "Technology Services",
      challenge: "Complex global operations requiring unified risk management approach across cybersecurity, governance, risk, controls, and compliance functions",
      solution: "ServiceNow IRM with centralized risk management, automated workflows, and integrated compliance monitoring for comprehensive enterprise risk strategy",
      results: [
        { metric: "Risk Central", description: "Unified approach deployed" },
        { metric: "Confident", description: "Risk management achieved" },
        { metric: "Enterprise", description: "Scale implementation" },
        { metric: "Integrated", description: "GRC processes unified" }
      ],
      testimonial: "Having 'risk central' is a new way of looking at risk management. ServiceNow makes it so easy to manage risk confidently.",
      executive: "Satvinder Madhok, Head of Business IT Management for Cybersecurity, GRC",
      logo: "/images/clients/wipro-logo.png"
    },
    {
      title: "Avanade Automates IRM and Security Processes with Enhanced Visibility",
      client: "Avanade",
      industry: "Professional Services",
      challenge: "Need to automate IRM and security processes while increasing visibility and responsiveness across global professional services operations",
      solution: "ServiceNow IRM with automated security processes, enhanced visibility dashboards, and responsive risk management for consulting operations",
      results: [
        { metric: "Automated", description: "IRM and security processes" },
        { metric: "Enhanced", description: "Visibility achieved" },
        { metric: "Increased", description: "Responsiveness deployed" },
        { metric: "Professional", description: "Services optimized" }
      ],
      testimonial: "ServiceNow IRM enabled us to automate our security processes while significantly increasing visibility and responsiveness across our operations.",
      executive: "Chief Risk Officer",
      logo: "/images/clients/avanade-logo.png"
    },
    {
      title: "DNB Lowers Risk Vulnerabilities for Continuous Customer Service Compliance",
      client: "DNB Bank",
      industry: "Financial Services",
      challenge: "Banking operations requiring continuous customer service while maintaining legal compliance and lowering risk vulnerabilities across financial services",
      solution: "ServiceNow IRM with financial services compliance, continuous customer service monitoring, and automated vulnerability management",
      results: [
        { metric: "Lowered", description: "Risk vulnerabilities" },
        { metric: "Continuous", description: "Customer service" },
        { metric: "Legal", description: "Compliance maintained" },
        { metric: "Financial", description: "Services secured" }
      ],
      testimonial: "ServiceNow IRM helped us lower risk vulnerabilities while maintaining continuous customer service and ensuring full legal compliance.",
      executive: "Head of Risk Management",
      logo: "/images/clients/dnb-logo.png"
    },
    {
      title: "ServiceNow Increases Scalability and Slashes Costs with Integrated GRC Automation",
      client: "ServiceNow (Now on Now)",
      industry: "Software Platform",
      challenge: "Demonstrating platform effectiveness by using ServiceNow IRM internally for scalable GRC processes and self-service portals",
      solution: "ServiceNow IRM with integrated GRC automation, self-service portals, and comprehensive risk management for internal operations",
      results: [
        { metric: "Increased", description: "Scalability achieved" },
        { metric: "Lowered", description: "Risk exposure" },
        { metric: "Slashed", description: "GRC costs" },
        { metric: "Automated", description: "Processes deployed" }
      ],
      testimonial: "ServiceNow IRM increased our scalability, lowered risk, and slashed costs by integrating and automating GRC processes and self-service portals.",
      executive: "Head of Enterprise Risk",
      logo: "/images/clients/servicenow-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Integrated Risk Management - ServiceNow IRM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Make risk-informed decisions and increase efficiency. Innovate at speed, with confidence, to build trust and reach your business goals with ServiceNow IRM."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss IRM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss IRM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-teal-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-900 to-sky-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-teal-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-sky-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500/90 to-sky-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-cyan-600 hover:to-sky-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered GRC
                  </Badge>
                  <Badge className="bg-gradient-to-r from-sky-500/90 to-blue-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-sky-600 hover:to-blue-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Operational Resilience
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 font-semibold">
                    Integrated Risk
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-cyan-300">Make risk-informed decisions and increase efficiency.</span>{' '}
                  <span className="font-semibold text-sky-300">Innovate at speed, with confidence,</span> to build trust and reach your business goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-2 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 hover:from-teal-700 hover:via-cyan-700 hover:to-sky-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-sky-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get IRM Implementation
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
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-2 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-sky-400 group-hover:text-sky-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* GRC Badge */}
                <div className="bg-gradient-to-r from-teal-500/15 to-cyan-500/15 backdrop-blur-sm rounded-xl p-4 border border-teal-300/20">
                  <div className="flex items-center gap-3">
                    <Scale className="h-8 w-8 text-teal-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Governance, Risk & Compliance Platform</div>
                      <div className="text-sm text-teal-200">Continuous monitoring and intelligent automation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Integrated Risk Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-teal-600 to-cyan-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Risk</div>
                      <div className="text-xs text-teal-200">Management</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Compliance</div>
                      <div className="text-xs text-cyan-200">Automation</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Target className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-600 to-sky-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Activity className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600">
                  Transform Risk &
                </span>
                <br />
                <span className="text-gray-800">
                  Compliance Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Improve visibility and risk-related decisions with real-time intelligence and automated workflows for comprehensive GRC strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
                      <div className="text-sm font-semibold text-teal-700 mb-1">Key Value</div>
                      <div className="text-teal-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600">
                  Key IRM Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete GRC Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive governance, risk, and compliance features from policy management to operational resilience with intelligent automation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-sky-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Role-Based Applications Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-sky-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                  Role-Based Applications
                </span>
                <br />
                <span className="text-gray-800">
                  GRC Professional Focus
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Tailored applications for different GRC roles, from risk management strategy to control ownership and audit assurance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-8">
              {roleBasedApps.map((roleApp, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sky-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${roleApp.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <roleApp.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {roleApp.role}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {roleApp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Applications:</h4>
                      <ul className="space-y-2">
                        {roleApp.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {app}
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

        {/* Package Tiers Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  IRM Package Tiers
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable GRC Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Choose the IRM package that meets your business needs, from standard GRC capabilities to enterprise-scale risk management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {packageTiers.map((tier, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tier.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {tier.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Package Features:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-700 mb-1">Package Type</div>
                      <div className="text-blue-600 text-lg font-bold">{tier.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Integrated Risk Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about IRM implementation, GRC capabilities, and risk management transformation.
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
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-r from-purple-900 via-violet-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real IRM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their risk management operations with AI-powered Integrated Risk Management solutions.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-200 border border-purple-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-violet-500/20 to-indigo-500/20 text-violet-200 border border-violet-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-indigo-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-indigo-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-xl p-4 border-l-4 border-purple-400">
                              <Quote className="h-6 w-6 text-purple-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-purple-300">— {study.executive}</p>
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
        <section className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Risk Management?
                </h2>
                <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive integrated risk management with operational resilience and GRC automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact IRM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Solution Brief
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">irm-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-violet-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Watch Demo</p>
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

          /* Adjust card layouts */
          .card-grid {
            grid-template-columns: 1fr;
          }

          /* Reduce padding */
          .section-padding {
            padding: 1rem;
          }

          /* Adjust image sizes */
          img {
            max-width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
