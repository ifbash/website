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
  ExternalLinkIcon,
  Layers as LayersIcon,
  ShieldIcon
} from "lucide-react";

export default function PrivacyManagementPage() {
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
    "name": "Privacy Management - ServiceNow Privacy Implementation",
    "description": "Privacy management unifies and scales privacy data compliance while ensuring data protection building trust with customers and employees.",
    "applicationCategory": "Privacy Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Privacy Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Privacy Management helps organizations identify and manage privacy risks across the enterprise with workflow automation while staying compliant with evolving global data privacy regulations like GDPR, CCPA, and HIPAA."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Privacy Case Management and how does it enhance incident response?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Privacy Case Management enables organizations to triage, investigate, and resolve privacy breaches with automated workflows, stakeholder communication, and regulatory reporting capabilities for comprehensive privacy incident management."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow Privacy Management content)
  const benefits = [
    {
      icon: Cog,
      title: "Support Privacy by Design",
      description: "Embed privacy management into daily workflows, making it a natural part of the enterprise fabric with integrated privacy controls.",
      color: "from-violet-500 to-purple-500",
      stats: "Embedded privacy controls"
    },
    {
      icon: Target,
      title: "Manage risk and compliance",
      description: "Identify risks, incidents, and compliance violations in real time through continuous monitoring with automated risk assessment.",
      color: "from-purple-500 to-fuchsia-500",
      stats: "Real-time risk management"
    },
    {
      icon: Database,
      title: "Unify governance",
      description: "Keep privacy top of mind with a single platform, consistent cross-functional automation, AI, and machine learning capabilities.",
      color: "from-fuchsia-500 to-pink-500",
      stats: "Unified governance platform"
    },
    {
      icon: Heart,
      title: "Build trust",
      description: "Communicate effectively to support data protection across the enterprise and third-party entities with transparent privacy management.",
      color: "from-pink-500 to-rose-500",
      stats: "Enhanced customer trust"
    }
  ];

  // Key Features (From ServiceNow Privacy Management content)
  const keyFeatures = [
    {
      icon: AlertTriangle,
      title: "Privacy Case Management",
      description: "Triage, investigate, and resolve privacy breaches with comprehensive incident management workflows and regulatory reporting capabilities.",
      capabilities: [
        "Privacy incident triage",
        "Breach investigation workflows",
        "Regulatory reporting automation",
        "Stakeholder communication"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Scale,
      title: "Agnostic Framework",
      description: "Import any privacy regulation into a common taxonomy for easy policy and compliance management across global privacy requirements.",
      capabilities: [
        "Multi-regulation support",
        "Common taxonomy framework",
        "GDPR, CCPA, HIPAA compliance",
        "Global policy management"
      ],
      color: "from-purple-500 to-fuchsia-500"
    },
    {
      icon: Bot,
      title: "Control Testing Automation",
      description: "Replace a point-in-time approach with ongoing monitoring to identify violations and respond faster with automated control testing.",
      capabilities: [
        "Continuous control monitoring",
        "Automated violation detection",
        "Real-time compliance testing",
        "Proactive issue identification"
      ],
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Response-Triggered Actions",
      description: "Apply controls, tag personal info, and update processing activity records from assessment responses with automated workflows.",
      capabilities: [
        "Automated control application",
        "Personal data tagging",
        "ROPA updates automation",
        "Assessment-driven actions"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Plug,
      title: "Third-Party Integrations",
      description: "Support data discovery of personal information and access to libraries of current regulations with comprehensive integration capabilities.",
      capabilities: [
        "Data discovery integration",
        "Regulatory library access",
        "Third-party tool connectivity",
        "Privacy platform interoperability"
      ],
      color: "from-rose-500 to-red-500"
    },
    {
      icon: Activity,
      title: "Processing Activity Identification",
      description: "Use a record of processing activity (ROPA) or automatically detect an application record change with comprehensive data flow mapping.",
      capabilities: [
        "ROPA management",
        "Automated activity detection",
        "Data flow mapping",
        "Processing record tracking"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "Smart Issue Management",
      description: "Use AI/ML to assign, group, and suggest remediation—reducing time spent from days to just minutes with intelligent automation.",
      capabilities: [
        "AI-powered assignment",
        "Intelligent issue grouping",
        "Automated remediation suggestions",
        "Machine learning optimization"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: CheckCircle,
      title: "Privacy Impact Assessments",
      description: "Assess how personal data is collected, used, accessed, shared, safeguarded, and stored to gauge risk with comprehensive PIA workflows.",
      capabilities: [
        "Comprehensive PIA workflows",
        "Risk assessment automation",
        "Data lifecycle evaluation",
        "Privacy risk scoring"
      ],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  // Privacy Regulations Support
  const regulationsSupport = [
    {
      title: "GDPR Compliance",
      description: "Comprehensive General Data Protection Regulation compliance with automated data subject rights, ROPA management, and breach notification workflows.",
      icon: Flag,
      benefit: "EU regulation compliance"
    },
    {
      title: "CCPA Compliance",
      description: "California Consumer Privacy Act compliance with consumer rights management, opt-out mechanisms, and privacy disclosure automation.",
      icon: Landmark,
      benefit: "California privacy law"
    },
    {
      title: "HIPAA Compliance",
      description: "Health Insurance Portability and Accountability Act compliance with protected health information management and healthcare privacy controls.",
      icon: HeartPulse,
      benefit: "Healthcare privacy"
    },
    {
      title: "LGPD Compliance",
      description: "Lei Geral de Proteção de Dados compliance for Brazilian operations with data subject rights and privacy impact assessment capabilities.",
      icon: Globe,
      benefit: "Brazilian privacy law"
    },
    {
      title: "PIPEDA Compliance",
      description: "Personal Information Protection and Electronic Documents Act compliance for Canadian operations with privacy breach management workflows.",
      icon: Leaf,
      benefit: "Canadian privacy law"
    },
    {
      title: "Custom Regulation Framework",
      description: "Agnostic framework for importing and managing any privacy regulation with common taxonomy and policy management capabilities.",
      icon: Settings,
      benefit: "Custom regulation support"
    }
  ];

  // Advanced Privacy Capabilities
  const advancedCapabilities = [
    {
      title: "Privacy by Design Integration",
      description: "Embed privacy considerations into system design and business processes from the ground up with automated privacy controls and assessments.",
      icon: Cog,
      benefit: "Proactive privacy protection"
    },
    {
      title: "Data Subject Rights Automation",
      description: "Automated handling of data subject requests including access, rectification, erasure, and portability with workflow orchestration and tracking.",
      icon: UserCheck,
      benefit: "Automated rights management"
    },
    {
      title: "Consent Management",
      description: "Comprehensive consent tracking and management with granular consent preferences, withdrawal mechanisms, and audit trail capabilities.",
      icon: CheckCircle,
      benefit: "Consent lifecycle management"
    },
    {
      title: "Data Discovery and Classification",
      description: "Automated personal data discovery and classification across enterprise systems with sensitive data identification and tagging capabilities.",
      icon: Search,
      benefit: "Data visibility enhancement"
    },
    {
      title: "Supplier Privacy Assessment",
      description: "Integration with Third-party Risk Management to assess third-party privacy risk and ensure vendor privacy compliance across the supply chain.",
      icon: Building2,
      benefit: "Supply chain privacy"
    },
    {
      title: "Cross-Border Transfer Management",
      description: "Manage international data transfers with transfer impact assessments, adequacy decision tracking, and data localization compliance.",
      icon: Globe,
      benefit: "Global data governance"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Privacy Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Privacy Management helps organizations identify and manage privacy risks across the enterprise:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Unifies and scales privacy data compliance while ensuring data protection and building trust with customers and employees</li>
            <li>Enables workflow automation to stay compliant with evolving global data privacy regulations like GDPR, CCPA, and HIPAA</li>
            <li>Eliminates privacy risks, responds promptly to emerging threats, and complies with global data privacy regulations</li>
            <li>Operationalizes risk and resilience as part of the employee experience with integrated privacy workflows</li>
            <li>Provides comprehensive privacy case management for incident response and breach notification automation</li>
          </ul>
          <p className="mt-3 text-sm text-violet-600">
            <strong>Built on ServiceNow AI Platform</strong> with AI/ML capabilities for intelligent issue management and automated privacy workflow orchestration.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Privacy Case Management and how does it enhance incident response?",
      answer: (
        <div>
          <p className="mb-3">Privacy Case Management provides comprehensive privacy incident response capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Incident Triage and Investigation:</strong> Centralized system to manage privacy incidents and requests with automated triage workflows</li>
            <li><strong>Breach Assessment Automation:</strong> Automated privacy incident risk assessment and clear notification obligations within seconds</li>
            <li><strong>Regulatory Reporting:</strong> Automated breach notification workflows for regulators and stakeholders with compliance tracking</li>
            <li><strong>Cross-Team Collaboration:</strong> Integration with Security Operations and ITSM for coordinated incident response across teams</li>
            <li><strong>Communication Management:</strong> Manage entire privacy case communications with external stakeholders and regulators</li>
            <li><strong>RadarFirst Integration:</strong> Seamless integration with RadarFirst for automated risk scoring and regulatory assessment</li>
            <li><strong>API-Driven Creation:</strong> Privacy cases can be created through employee center or APIs for automated incident detection</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach reduces mean time to resolution for privacy incidents while ensuring regulatory compliance and stakeholder communication.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow Privacy Management?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow Privacy Management provides comprehensive privacy governance capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Core Privacy Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Privacy Case Management:</strong> Comprehensive incident response with triage, investigation, and breach resolution</li>
                <li><strong>Agnostic Framework:</strong> Multi-regulation support for GDPR, CCPA, HIPAA with common taxonomy</li>
                <li><strong>Smart Issue Management:</strong> AI/ML-powered assignment, grouping, and remediation suggestions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-fuchsia-600 mb-2">Advanced Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Control Testing Automation:</strong> Continuous monitoring with automated violation detection and response</li>
                <li><strong>Processing Activity Identification:</strong> ROPA management with automated data flow mapping</li>
                <li><strong>Privacy Impact Assessments:</strong> Comprehensive PIA workflows with risk assessment automation</li>
                <li><strong>Third-Party Integrations:</strong> Data discovery tools and regulatory library access with platform interoperability</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does Privacy Management support different global privacy regulations?",
      answer: (
        <div>
          <p className="mb-3">
            Privacy Management provides comprehensive support for global privacy regulations through an agnostic framework:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>GDPR (General Data Protection Regulation):</strong> EU compliance with data subject rights, ROPA management, and breach notification</li>
            <li><strong>CCPA (California Consumer Privacy Act):</strong> California compliance with consumer rights, opt-out mechanisms, and disclosure automation</li>
            <li><strong>HIPAA (Health Insurance Portability and Accountability Act):</strong> Healthcare privacy with PHI management and security controls</li>
            <li><strong>LGPD (Lei Geral de Proteção de Dados):</strong> Brazilian privacy law compliance with data subject rights and impact assessments</li>
            <li><strong>PIPEDA (Personal Information Protection and Electronic Documents Act):</strong> Canadian privacy compliance with breach management</li>
            <li><strong>Custom Regulations:</strong> Agnostic framework allows importing any privacy regulation into common taxonomy for unified management</li>
          </ul>
          <p className="mt-3">
            This approach enables organizations to manage multiple regulations consistently while adapting to new privacy laws without extensive customization.
          </p>
        </div>
      )
    },

    {
      question: "What is Record of Processing Activities (ROPA) and how does ServiceNow manage it?",
      answer: (
        <div>
          <p className="mb-3">ROPA is a comprehensive record of data processing activities required by privacy regulations like GDPR:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">ROPA Management Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Automated Detection:</strong> Automatically detect application record changes and processing activities</li>
                <li><strong>Comprehensive Documentation:</strong> Record data types, processing purposes, legal bases, and data flows</li>
                <li><strong>CMDB Integration:</strong> Direct relationship with applications, systems, and configuration items</li>
                <li><strong>Data Flow Mapping:</strong> Visual data flow mapper for internal and external data movements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Advanced ROPA Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Global ROPAs:</strong> Shared processing activities that can be localized by different organizational units</li>
                <li><strong>DPIA Integration:</strong> Automatic recommendations for Data Protection Impact Assessments based on ROPA content</li>
                <li><strong>Version Control:</strong> Complete lifecycle management with periodic review cycles and version tracking</li>
                <li><strong>Transfer Impact Assessments:</strong> Automated assessment of international data transfers with adequacy decisions</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Privacy Management implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, privacy complexity, and regulatory requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Privacy Management Standard:</strong> Starting from $240K - includes basic privacy case management, single regulation support, and standard workflows for mid-size organizations</li>
            <li><strong>Privacy Management Professional:</strong> $360K-$540K - includes multi-regulation support, advanced analytics, and comprehensive privacy automation for large enterprises</li>
            <li><strong>Privacy Management Enterprise:</strong> $600K+ - complete solution with AI-powered analytics, global compliance, and enterprise-scale privacy operations</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 10-15 months through privacy incident response acceleration (60%), compliance automation (45%), and regulatory fine avoidance (70%). Automated ROPA management can reduce manual documentation by 75%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "Privacy ROI Calculator", url: "/privacy-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow Privacy Management?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on privacy program maturity and regulatory scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Privacy Management Standard:</strong> 8-12 weeks for basic privacy case management, single regulation compliance, and core data subject rights workflows</li>
            <li><strong>Privacy Management Professional:</strong> 12-18 weeks including multi-regulation support, advanced automation, and comprehensive privacy integration</li>
            <li><strong>Privacy Management Enterprise:</strong> 18-24 weeks for complete solution with AI-powered analytics, global compliance, and enterprise integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Privacy Program Assessment & Regulatory Analysis (2-3 weeks) → Core Privacy Platform & Case Management Configuration (4-6 weeks) → ROPA Setup & Data Flow Mapping (3-5 weeks) → Advanced Analytics & Automation (2-4 weeks) → Go-Live & Privacy Team Training (2-3 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does Privacy Management integrate with RadarFirst and other third-party privacy tools?",
      answer: (
        <div>
          <p className="mb-3">Privacy Management provides extensive integration capabilities for comprehensive privacy ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>RadarFirst Integration:</strong> Automated privacy incident risk assessment with bidirectional data sharing for Security Operations and ITSM</li>
            <li><strong>OneTrust Integration:</strong> Comprehensive privacy compliance platform integration for consent management and data discovery</li>
            <li><strong>Data Discovery Tools:</strong> Integration with data classification and discovery platforms for personal information identification</li>
            <li><strong>Regulatory Content Providers:</strong> Access to current regulation libraries and automated regulatory change management</li>
            <li><strong>Security Tool Integration:</strong> Connection with SIEM, DLP, and endpoint protection platforms for privacy-aware security</li>
            <li><strong>Employee Center:</strong> Native integration with ServiceNow Employee Center for privacy request submission and self-service</li>
            <li><strong>API Ecosystem:</strong> Comprehensive APIs for custom integrations and third-party privacy platform connectivity</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve unified privacy management while maintaining existing privacy tool investments and regulatory compliance frameworks.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on Privacy Management success stories)
  const caseStudies = [
    {
      title: "Global Enterprise Achieves GDPR Compliance with Automated Privacy Case Management",
      client: "Fortune 500 Financial Services",
      industry: "Financial Services",
      challenge: "Complex global operations requiring GDPR compliance with automated data subject rights, breach notification, and privacy incident response across multiple jurisdictions",
      solution: "ServiceNow Privacy Management with comprehensive GDPR workflows, automated case management, and RegTech integration for financial services compliance",
      results: [
        { metric: "GDPR", description: "Compliance automated" },
        { metric: "Privacy", description: "Case management deployed" },
        { metric: "Data Subject", description: "Rights automated" },
        { metric: "Breach", description: "Notification streamlined" }
      ],
      testimonial: "ServiceNow Privacy Management automated our GDPR compliance processes, enabling efficient privacy case management and regulatory reporting across our global operations.",
      executive: "Chief Privacy Officer",
      logo: "/images/clients/financial-services-logo.png"
    },
    {
      title: "Healthcare Organization Implements HIPAA-Compliant Privacy Management with PHI Protection",
      client: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Healthcare operations requiring HIPAA compliance with protected health information management, patient privacy rights, and healthcare-specific breach notification",
      solution: "ServiceNow Privacy Management with HIPAA compliance framework, PHI management workflows, and healthcare privacy impact assessments",
      results: [
        { metric: "HIPAA", description: "Compliance achieved" },
        { metric: "PHI", description: "Protection enhanced" },
        { metric: "Patient", description: "Privacy rights managed" },
        { metric: "Healthcare", description: "Breach response automated" }
      ],
      testimonial: "ServiceNow Privacy Management provided comprehensive HIPAA compliance with automated PHI protection and streamlined patient privacy rights management.",
      executive: "Chief Information Officer",
      logo: "/images/clients/healthcare-system-logo.png"
    },
    {
      title: "E-commerce Platform Deploys Multi-Regulation Privacy Compliance with CCPA and GDPR",
      client: "Global E-commerce Corporation",
      industry: "Retail Technology",
      challenge: "Global e-commerce operations requiring simultaneous GDPR and CCPA compliance with customer privacy rights, consent management, and cross-border data transfers",
      solution: "ServiceNow Privacy Management with agnostic framework, multi-regulation support, and automated consumer privacy rights for global e-commerce compliance",
      results: [
        { metric: "Multi-Regulation", description: "Compliance deployed" },
        { metric: "GDPR & CCPA", description: "Support implemented" },
        { metric: "Consumer Rights", description: "Automation achieved" },
        { metric: "Global", description: "E-commerce secured" }
      ],
      testimonial: "ServiceNow Privacy Management enabled simultaneous GDPR and CCPA compliance with unified privacy workflows for our global e-commerce operations.",
      executive: "Head of Privacy",
      logo: "/images/clients/ecommerce-corp-logo.png"
    },
    {
      title: "Technology Company Implements Privacy by Design with AI-Powered Issue Management",
      client: "Global Software Enterprise",
      industry: "Enterprise Software",
      challenge: "Software development requiring privacy by design integration with AI-powered privacy issue management and automated remediation for enterprise applications",
      solution: "ServiceNow Privacy Management with privacy by design workflows, AI-powered issue management, and software development privacy impact assessments",
      results: [
        { metric: "Privacy", description: "By design implemented" },
        { metric: "AI-Powered", description: "Issue management" },
        { metric: "Software", description: "Development secured" },
        { metric: "Enterprise", description: "Applications protected" }
      ],
      testimonial: "ServiceNow Privacy Management with AI-powered issue management transformed our software development with embedded privacy by design principles.",
      executive: "Chief Technology Officer",
      logo: "/images/clients/software-enterprise-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Privacy Management - ServiceNow Privacy Portfolio | ifBash</title>
        <meta
          name="description"
          content="Privacy management unifies and scales privacy data compliance while ensuring data protection building trust with customers and employees."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss Privacy Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss Privacy Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-violet-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-fuchsia-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-violet-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-violet-600 hover:to-purple-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-fuchsia-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-fuchsia-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered Privacy
                  </Badge>
                  <Badge className="bg-gradient-to-r from-fuchsia-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-fuchsia-600 hover:to-pink-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Global Compliance
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 font-semibold">
                    Privacy
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-purple-300">Identify and manage privacy risks across the enterprise</span> with workflow automation.{' '}
                  <span className="font-semibold text-fuchsia-300">Stay compliant with evolving global data privacy regulations.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-fuchsia-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get Privacy Implementation
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
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-pink-400 group-hover:text-pink-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* Privacy Compliance Badge */}
                <div className="bg-gradient-to-r from-violet-500/15 to-purple-500/15 backdrop-blur-sm rounded-xl p-4 border border-violet-300/20">
                  <div className="flex items-center gap-3">
                    <ShieldIcon className="h-8 w-8 text-violet-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Global Privacy Compliance Platform</div>
                      <div className="text-sm text-violet-200">GDPR, CCPA, HIPAA and more with workflow automation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-violet-500/15 to-purple-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Privacy Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-violet-600 to-purple-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Privacy</div>
                      <div className="text-xs text-violet-200">Compliance</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Data</div>
                      <div className="text-xs text-purple-200">Protection</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Scale className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Heart className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-violet-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600">
                  Transform Privacy
                </span>
                <br />
                <span className="text-gray-800">
                  Risk Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Manage privacy risk and compliance in real time across the enterprise with comprehensive data protection and trust-building capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-violet-200 transform hover:-translate-y-2">
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
                      <div className="text-sm font-semibold text-violet-700 mb-1">Key Value</div>
                      <div className="text-violet-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600">
                  Key Privacy Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Privacy Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive privacy management features from case management to impact assessments with intelligent automation and compliance tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Regulations Support Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-fuchsia-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600">
                  Global Privacy Regulations
                </span>
                <br />
                <span className="text-gray-800">
                  Comprehensive Compliance Support
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Support for major global privacy regulations including GDPR, CCPA, HIPAA with agnostic framework for custom requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {regulationsSupport.map((regulation, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-fuchsia-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <regulation.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {regulation.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {regulation.description}
                    </p>

                    <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-xl p-4 border border-fuchsia-200">
                      <div className="text-sm font-semibold text-fuchsia-700 mb-1">Regulation Type</div>
                      <div className="text-fuchsia-600 text-lg font-bold">{regulation.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Capabilities Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Privacy Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced privacy capabilities including privacy by design, data subject rights automation, and comprehensive consent management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-200">
                      <div className="text-sm font-semibold text-pink-700 mb-1">Key Benefit</div>
                      <div className="text-pink-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-orange-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Privacy Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about Privacy Management implementation, privacy compliance, and data protection transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-rose-500 to-red-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-rose-600 hover:text-rose-800 text-sm font-medium transition-colors"
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
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-r from-red-900 via-orange-900 to-amber-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-red-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real Privacy Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their privacy management with AI-powered Privacy Management solutions and regulatory compliance automation.
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
                              <Badge className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-200 border border-red-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-200 border border-orange-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-amber-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-amber-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-4 border-l-4 border-red-400">
                              <Quote className="h-6 w-6 text-red-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-red-300">— {study.executive}</p>
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
                                <span className="text-red-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-red-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Privacy Management?
                </h2>
                <p className="text-lg md:text-xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive privacy management with global compliance automation and data protection excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Privacy Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Read Brief
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">privacy-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-orange-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-amber-200 mx-auto mb-2" />
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
