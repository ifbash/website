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
  Crosshair
} from "lucide-react";

export default function ThreatIntelligenceSecurityCenterPage() {
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
    "name": "Threat Intelligence Security Center - ServiceNow TISC Implementation",
    "description": "ServiceNow's TISC integrates a Threat Intelligence Platform (TIP) into the ServiceNow AI Platform, empowering businesses with advanced threat intelligence capabilities.",
    "applicationCategory": "Threat Intelligence Security Center"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Threat Intelligence Security Center and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow TISC integrates a comprehensive Threat Intelligence Platform into the ServiceNow AI Platform, providing advanced threat intelligence capabilities including threat hunting, modeling, analysis, and monitoring."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the Threat Analyst Workspace and how does it enhance threat hunting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Threat Analyst Workspace provides centralized operations for threat modeling, threat hunting, and threat intelligence visualization in a purpose-built workspace designed specifically for threat analysts."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow TISC content)
  const benefits = [
    {
      icon: Shield,
      title: "Improve your security posture",
      description: "Strengthen security operations with threat intelligence. Get increased visibility through deep, extensive integrations with security tools and IT.",
      color: "from-indigo-500 to-purple-500",
      stats: "Enhanced security posture"
    },
    {
      icon: Crosshair,
      title: "Manage threats proactively start to finish",
      description: "Handle the full lifecycle of threats and attacks from modeling and hunting through analysis, response, and reporting.",
      color: "from-purple-500 to-violet-500",
      stats: "Complete threat lifecycle"
    },
    {
      icon: Target,
      title: "Assess threat risks contextually",
      description: "Identify potential threats quickly and easily with business context from the CMDB. Understand digital assets and environment at risk.",
      color: "from-violet-500 to-fuchsia-500",
      stats: "Contextual risk assessment"
    },
    {
      icon: Zap,
      title: "Expedite responses and reduce workload",
      description: "Collect, analyze, and disseminate high volumes and varieties of ingested machine-readable threat intelligence feeds.",
      color: "from-fuchsia-500 to-pink-500",
      stats: "Accelerated response"
    }
  ];

  // Key Features (From ServiceNow TISC content)
  const keyFeatures = [
    {
      icon: Brain,
      title: "Built-in Advanced Threat Intelligence",
      description: "Perform the advanced defense actions of threat intelligence platforms such as hunting, modeling, analysis, and monitoring.",
      capabilities: [
        "Advanced threat hunting",
        "Threat modeling capabilities",
        "Intelligence analysis tools",
        "Continuous monitoring"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Layout,
      title: "Threat Analyst Workspace",
      description: "Perform threat modeling, hunting, and intelligence visualization in a workspace purpose-built for threat analysts.",
      capabilities: [
        "Centralized operations",
        "Threat modeling tools",
        "Intelligence visualization",
        "Purpose-built interface"
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Plug,
      title: "Integration with Major Security Tools",
      description: "Integrate internal incident and vulnerability information with threat intelligence platforms, SIEM, EDR, and firewalls.",
      capabilities: [
        "TIP platform integration",
        "SIEM connectivity",
        "EDR tool integration",
        "Firewall data correlation"
      ],
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: Calculator,
      title: "Customizable Threat Score Calculations",
      description: "Prioritize observables based on precise threat scores calculated using criteria from up to seven related lists and aggregates.",
      capabilities: [
        "Customizable scoring",
        "Multi-criteria assessment",
        "Observable prioritization",
        "Weighted calculations"
      ],
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Threat-Specific Playbooks",
      description: "Scale team capacity and efficiency through automated actions and continually updated threat intelligence-specific playbooks.",
      capabilities: [
        "Automated threat actions",
        "Intelligence-specific workflows",
        "Team capacity scaling",
        "Efficiency optimization"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: BarChart3,
      title: "Persona-Based Dashboards and Reporting",
      description: "Gain real-time, actionable insights and reporting with persona-specific dashboards to measure and monitor progress.",
      capabilities: [
        "Real-time insights",
        "Persona-specific views",
        "Progress monitoring",
        "Actionable reporting"
      ],
      color: "from-rose-500 to-red-500"
    },
    {
      icon: Database,
      title: "Threat Intelligence Management",
      description: "Data collection, aggregation, normalization, correlation, and enrichment from various sources including SIR, MITRE ATT&CK, and CMDB.",
      capabilities: [
        "Multi-source data collection",
        "Intelligence aggregation",
        "Data normalization",
        "Correlation and enrichment"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Radar,
      title: "MITRE ATT&CK Integration",
      description: "Automated MITRE ATT&CK technique extraction and rollup with comprehensive framework integration for enhanced threat context.",
      capabilities: [
        "Automated technique extraction",
        "Framework integration",
        "Threat context enhancement",
        "TTPs correlation"
      ],
      color: "from-orange-500 to-amber-500"
    }
  ];

  // Threat Intelligence Feeds
  const threatFeeds = [
    {
      title: "OSINT Threat Feeds",
      description: "Curated catalog of popular open-source intelligence threat feed sources with automated ingestion and processing.",
      icon: Globe,
      benefit: "Comprehensive open intelligence"
    },
    {
      title: "Premium Intelligence Feeds",
      description: "Integration of premium commercial threat intelligence feeds to enhance detection and analysis capabilities.",
      icon: Award,
      benefit: "Commercial intelligence access"
    },
    {
      title: "STIX/TAXII Format Support",
      description: "Data aggregation from diverse feeds including STIX, MISP, JSON, and other industry-standard formats.",
      icon: FileText,
      benefit: "Multi-format intelligence"
    },
    {
      title: "IoC Extraction and Analysis",
      description: "Capability to automatically identify and extract all observables from uploaded files with contextual analysis.",
      icon: Search,
      benefit: "Automated IoC processing"
    },
    {
      title: "Enrichment and Validation",
      description: "Advanced enrichment capabilities for false positive removal, confidence scoring, and indicator validation.",
      icon: CheckCircle,
      benefit: "Intelligence quality assurance"
    },
    {
      title: "Correlation Rules Engine",
      description: "Automated establishment of relationships between observables through configurable correlation rules.",
      icon: Link,
      benefit: "Intelligent data correlation"
    }
  ];

  // Advanced Capabilities
  const advancedCapabilities = [
    {
      title: "Threat Hunting Canvas",
      description: "Interactive investigation canvas for threat hunting with case and task management functionalities for comprehensive analysis.",
      icon: Crosshair,
      benefit: "Interactive threat hunting"
    },
    {
      title: "Microsoft Sentinel Integration",
      description: "Bi-directional integration with Microsoft Sentinel for automated threat intel ingestion and incident enrichment.",
      icon: Cloud,
      benefit: "Cloud SIEM integration"
    },
    {
      title: "Domain Separation Support",
      description: "Multi-tenant capabilities with domain separation support for Managed Security Service Provider (MSSP) use cases.",
      icon: Building2,
      benefit: "MSSP-ready architecture"
    },
    {
      title: "Webhook and API Support",
      description: "Real-time, trigger-based notifications through webhook support and comprehensive API integration capabilities.",
      icon: Plug,
      benefit: "Real-time integration"
    },
    {
      title: "Data Retention Policies",
      description: "Granular expiration policies and data retention management with automated cleanup and lifecycle management.",
      icon: Clock,
      benefit: "Intelligent data lifecycle"
    },
    {
      title: "Rich Report Generation",
      description: "Generate and share detailed investigation summaries using rich text editor experience and customizable templates.",
      icon: FileText,
      benefit: "Comprehensive reporting"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Threat Intelligence Security Center and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Threat Intelligence Security Center (TISC) integrates a comprehensive Threat Intelligence Platform into the ServiceNow AI Platform:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Provides advanced threat intelligence capabilities including threat hunting, modeling, analysis, and monitoring</li>
            <li>Integrates seamlessly with internal security operations including SIR, VR, Assets, Services, and CMDB</li>
            <li>Offers comprehensive data collection, aggregation, normalization, correlation, and enrichment capabilities</li>
            <li>Enables threat analysts to perform advanced defense actions through purpose-built workspaces</li>
            <li>Provides automated MITRE ATT&CK technique extraction and rollup for enhanced threat context</li>
          </ul>
          <p className="mt-3 text-sm text-indigo-600">
            <strong>Built on ServiceNow AI Platform</strong> with machine learning for threat intelligence correlation and analysis.
          </p>
        </div>
      )
    },
    
    {
      question: "What is the Threat Analyst Workspace and how does it enhance threat hunting?",
      answer: (
        <div>
          <p className="mb-3">The Threat Analyst Workspace provides centralized operations for advanced threat analysis:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Purpose-Built Interface:</strong> Workspace specifically designed for threat analysts with intuitive navigation and tools</li>
            <li><strong>Threat Modeling:</strong> Advanced modeling capabilities for understanding attack patterns and threat actor behaviors</li>
            <li><strong>Interactive Hunting Canvas:</strong> Visual investigation canvas for threat hunting with case and task management</li>
            <li><strong>Intelligence Visualization:</strong> Graphical visualization tools for comprehending complex threat intelligence data</li>
            <li><strong>Case Management:</strong> Seamless creation and oversight of diverse cases with multi-team collaboration</li>
            <li><strong>Lifecycle Tracking:</strong> Complete case tracking from initial investigation through resolution and reporting</li>
            <li><strong>Customizable Interface:</strong> Workspace can be modified to meet each analyst's specific needs and requirements</li>
          </ul>
          <p className="mt-3">
            This dedicated workspace empowers analysts to perform daily threat analysis, hunting, correlation, and collaboration more effectively.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow TISC?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow TISC provides comprehensive threat intelligence platform capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Core Intelligence Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Advanced Threat Intelligence:</strong> Hunting, modeling, analysis, and monitoring capabilities</li>
                <li><strong>Threat Analyst Workspace:</strong> Purpose-built interface for centralized threat operations</li>
                <li><strong>Customizable Threat Scoring:</strong> Precise threat scores using multi-criteria calculations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-violet-600 mb-2">Integration and Automation:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Security Tool Integration:</strong> TIP, SIEM, EDR, and firewall connectivity</li>
                <li><strong>Threat-Specific Playbooks:</strong> Automated actions and intelligence-specific workflows</li>
                <li><strong>MITRE ATT&CK Integration:</strong> Automated technique extraction and framework correlation</li>
                <li><strong>Data Management:</strong> Collection, aggregation, normalization, and enrichment from multiple sources</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does TISC handle threat intelligence feeds and data sources?",
      answer: (
        <div>
          <p className="mb-3">
            TISC provides comprehensive threat intelligence feed management and data processing:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>OSINT Feeds:</strong> Curated catalog of popular open-source intelligence threat feed sources</li>
            <li><strong>Premium Intelligence:</strong> Integration of commercial threat intelligence feeds for enhanced detection</li>
            <li><strong>Multi-Format Support:</strong> Data aggregation from STIX, MISP, JSON, and other industry formats</li>
            <li><strong>Automated IoC Extraction:</strong> Automatic identification and extraction of observables from uploaded files</li>
            <li><strong>Enrichment Capabilities:</strong> False positive removal, confidence scoring, and indicator validation</li>
            <li><strong>Correlation Rules:</strong> Automated establishment of relationships between observables</li>
            <li><strong>Granular Policies:</strong> Expiration policies and data retention management with automated cleanup</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach ensures high-quality, actionable threat intelligence for security operations.
          </p>
        </div>
      )
    },

    {
      question: "What integrations does TISC provide with security tools and platforms?",
      answer: (
        <div>
          <p className="mb-3">TISC offers extensive integration capabilities with security ecosystems:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Security Platform Integrations:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>SIEM Platforms:</strong> Integration with major SIEM solutions for alert enrichment and correlation</li>
                <li><strong>Threat Intelligence Platforms:</strong> Connectivity with external TIP platforms for data sharing</li>
                <li><strong>EDR/XDR Solutions:</strong> Endpoint detection and response platform integration</li>
                <li><strong>Network Security:</strong> Firewall and network intelligence solution connectivity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Cloud and Enterprise Integrations:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Microsoft Sentinel:</strong> Bi-directional integration for threat intel ingestion and incident enrichment</li>
                <li><strong>ServiceNow Platform:</strong> Native integration with SIR, VR, Assets, Services, and CMDB</li>
                <li><strong>API and Webhook Support:</strong> Real-time notifications and comprehensive API integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Specialized Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Domain Separation:</strong> Multi-tenant support for MSSP use cases</li>
                <li><strong>Data Migration Utility:</strong> Migration support from SIR Threat Intelligence to TISC</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Threat Intelligence Security Center implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, threat intelligence complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TISC Standard Implementation:</strong> Starting from $250K - includes basic threat intelligence management, analyst workspace, and standard feed integrations for mid-size organizations</li>
            <li><strong>TISC Professional Implementation:</strong> $350K-$550K - includes advanced threat hunting, comprehensive integrations, and premium intelligence feeds for large enterprises</li>
            <li><strong>TISC Enterprise Suite:</strong> $600K+ - complete solution with MSSP capabilities, extensive automation, and enterprise-scale threat intelligence operations</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through threat detection acceleration (60%), analyst productivity gains (45%), and false positive reduction (50%). Advanced correlation capabilities significantly enhance threat hunting effectiveness.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "TISC ROI Calculator", url: "/tisc-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow TISC?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on threat intelligence complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>TISC Standard:</strong> 8-12 weeks for basic threat intelligence management, analyst workspace setup, and core feed integrations</li>
            <li><strong>TISC Professional:</strong> 12-18 weeks including advanced threat hunting capabilities, comprehensive tool integrations, and premium feed setup</li>
            <li><strong>TISC Enterprise Suite:</strong> 18-24 weeks for complete solution with MSSP capabilities, extensive automation, and enterprise integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Threat Intelligence Assessment & Feed Analysis (2-3 weeks) → Core TISC Platform & Workspace Configuration (4-6 weeks) → Feed Integration & Data Processing Setup (3-5 weeks) → Advanced Analytics & Hunting Canvas (2-4 weeks) → Go-Live & Analyst Training (2-3 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does TISC enhance threat hunting and security analyst workflows?",
      answer: (
        <div>
          <p className="mb-3">TISC transforms threat hunting and analyst workflows through specialized capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Interactive Hunting Canvas:</strong> Visual investigation canvas for threat hunting with case and task management</li>
            <li><strong>Threat Analyst Workspace:</strong> Purpose-built interface for centralized threat operations and collaboration</li>
            <li><strong>Automated Correlation:</strong> AI-powered correlation rules for establishing relationships between observables</li>
            <li><strong>MITRE ATT&CK Integration:</strong> Automated technique extraction and framework mapping for threat context</li>
            <li><strong>Customizable Scoring:</strong> Weighted threat score calculations using multi-criteria assessment</li>
            <li><strong>Intelligence Visualization:</strong> Graphical tools for comprehending complex threat intelligence data</li>
            <li><strong>Playbook Automation:</strong> Threat-specific automated actions and workflows for efficiency scaling</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Security analysts gain advanced capabilities for proactive threat hunting, faster incident response, and more effective threat intelligence operations.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on TISC success stories)
  const caseStudies = [
    {
      title: "Global Enterprise Transforms Threat Hunting with TISC Interactive Canvas",
      client: "",
      industry: "Enterprise Technology",
      challenge: "Complex threat landscape requiring advanced threat hunting capabilities with better analyst productivity and threat intelligence correlation across multiple security tools",
      solution: "ServiceNow TISC with Threat Analyst Workspace, interactive hunting canvas, and comprehensive security tool integrations for unified threat intelligence operations",
      results: [
        { metric: "Interactive", description: "Threat hunting canvas" },
        { metric: "Advanced", description: "Analyst workspace" },
        { metric: "Unified", description: "Intelligence operations" },
        { metric: "Enhanced", description: "Threat correlation" }
      ],
      testimonial: "ServiceNow TISC with interactive hunting canvas transformed our threat hunting capabilities, enabling our analysts to conduct more effective investigations with better intelligence correlation.",
      executive: "Chief Information Security Officer",
      logo: "/images/clients/enterprise-tech-logo.png"
    },
    {
      title: "Financial Services Implements MSSP-Ready TISC with Domain Separation",
      client: "",
      industry: "Financial Services",
      challenge: "Multi-tenant security operations requiring domain separation capabilities for different business units while maintaining comprehensive threat intelligence sharing",
      solution: "ServiceNow TISC with domain separation support, MSSP capabilities, and enterprise-scale threat intelligence management for multi-tenant operations",
      results: [
        { metric: "Domain", description: "Separation implemented" },
        { metric: "MSSP", description: "Capabilities deployed" },
        { metric: "Multi-Tenant", description: "Operations enabled" },
        { metric: "Intelligence", description: "Sharing optimized" }
      ],
      testimonial: "ServiceNow TISC with domain separation enabled us to implement MSSP-ready threat intelligence operations while maintaining security and compliance across business units.",
      executive: "Chief Security Officer",
      logo: "/images/clients/financial-services-logo.png"
    },
    {
      title: "Healthcare Organization Automates Threat Intelligence with MITRE ATT&CK Integration",
      client: "",
      industry: "Healthcare",
      challenge: "Healthcare-specific threats requiring automated MITRE ATT&CK technique extraction and comprehensive threat intelligence correlation for patient data protection",
      solution: "ServiceNow TISC with automated MITRE ATT&CK integration, healthcare-specific threat playbooks, and comprehensive intelligence correlation for medical environments",
      results: [
        { metric: "Automated", description: "MITRE ATT&CK extraction" },
        { metric: "Healthcare", description: "Threat playbooks" },
        { metric: "Patient Data", description: "Protection enhanced" },
        { metric: "Intelligence", description: "Correlation improved" }
      ],
      testimonial: "ServiceNow TISC with automated MITRE ATT&CK integration enhanced our healthcare threat intelligence operations while protecting patient data more effectively.",
      executive: "VP of Information Security",
      logo: "/images/clients/healthcare-system-logo.png"
    },
    {
      title: "Manufacturing Company Deploys Cloud-Integrated TISC with Microsoft Sentinel",
      client: "",
      industry: "Industrial Manufacturing",
      challenge: "Cloud-first security architecture requiring bi-directional threat intelligence integration with Microsoft Sentinel for comprehensive industrial security operations",
      solution: "ServiceNow TISC with Microsoft Sentinel integration, automated threat intel ingestion, and industrial-specific threat intelligence for OT/IT environments",
      results: [
        { metric: "Microsoft", description: "Sentinel integration" },
        { metric: "Bi-Directional", description: "Intel sharing" },
        { metric: "Industrial", description: "Security enhanced" },
        { metric: "OT/IT", description: "Environments unified" }
      ],
      testimonial: "ServiceNow TISC with Microsoft Sentinel integration provided comprehensive threat intelligence capabilities for our industrial operations with seamless cloud integration.",
      executive: "Director of Cybersecurity",
      logo: "/images/clients/manufacturing-corp-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Threat Intelligence Security Center - ServiceNow TISC Portfolio | ifBash</title>
        <meta
          name="description"
          content="ServiceNow's TISC integrates a Threat Intelligence Platform (TIP) into the ServiceNow AI Platform, empowering businesses with advanced threat intelligence capabilities."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss TISC Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss TISC Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-indigo-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-violet-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 px-2 sm:px-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-violet-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-purple-600 hover:to-violet-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered TIP
                  </Badge>
                  <Badge className="bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-0.5 sm:py-1 px-1.5 sm:px-3 hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Advanced Hunting
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 font-semibold">
                    Threat Intelligence
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 font-semibold">
                      Security Center
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-purple-300">Gain advanced threat intelligence capabilities</span> such as{' '}
                  <span className="font-semibold text-violet-300">threat hunting, modeling, and analysis</span> built into the ServiceNow AI Platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-2 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-violet-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get TISC Implementation
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-violet-400 group-hover:text-violet-300" />
                      Get Data Sheet
                    </span>
                  </button>
                </div>

                {/* TIP Badge */}
                <div className="bg-gradient-to-r from-indigo-500/15 to-purple-500/15 backdrop-blur-sm rounded-xl p-4 border border-indigo-300/20">
                  <div className="flex items-center gap-3">
                    <Brain className="h-8 w-8 text-indigo-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Advanced Threat Intelligence Platform</div>
                      <div className="text-sm text-indigo-200">Hunting, modeling, and analysis capabilities</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Threat Intelligence Security Center Platform"
                      className="w-full h-full object-cover"
                      gradient="from-indigo-600 to-purple-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Threat</div>
                      <div className="text-xs text-indigo-200">Hunting</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Intelligence</div>
                      <div className="text-xs text-purple-200">Platform</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Crosshair className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Brain className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  Transform Threat
                </span>
                <br />
                <span className="text-gray-800">
                  Intelligence Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Gain advanced threat intelligence capabilities for hunting, modeling, and analysis with comprehensive security posture improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                      <div className="text-sm font-semibold text-indigo-700 mb-1">Key Value</div>
                      <div className="text-indigo-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600">
                  Key TISC Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Intelligence Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive threat intelligence features from advanced hunting to automated analysis with purpose-built analyst workspaces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Threat Intelligence Feeds Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-violet-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600">
                  Threat Intelligence Feeds
                </span>
                <br />
                <span className="text-gray-800">
                  Comprehensive Data Sources
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced threat intelligence feed management including OSINT sources, premium feeds, and automated processing capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {threatFeeds.map((feed, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-violet-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <feed.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feed.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feed.description}
                    </p>

                    <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-xl p-4 border border-fuchsia-200">
                      <div className="text-sm font-semibold text-fuchsia-700 mb-1">Key Benefit</div>
                      <div className="text-fuchsia-600 text-lg font-bold">{feed.benefit}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Intelligence Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced threat intelligence capabilities including interactive hunting, cloud integration, and enterprise-scale management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-fuchsia-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-xl p-4 border border-fuchsia-200">
                      <div className="text-sm font-semibold text-fuchsia-700 mb-1">Key Benefit</div>
                      <div className="text-fuchsia-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-pink-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Threat Intelligence Security Center
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about TISC implementation, threat hunting, and intelligence platform capabilities.
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
                        <div className="w-full h-px bg-gradient-to-r from-pink-500 to-rose-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-pink-600 hover:text-pink-800 text-sm font-medium transition-colors"
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
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-r from-rose-900 via-pink-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-rose-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real TISC Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their threat intelligence operations with AI-powered TISC solutions.
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
                              <Badge className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-200 border border-rose-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-200 border border-pink-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-rose-900/30 to-pink-900/30 rounded-xl p-4 border-l-4 border-rose-400">
                              <Quote className="h-6 w-6 text-rose-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-rose-300">— {study.executive}</p>
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
                                <span className="text-rose-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-rose-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Threat Intelligence Operations?
                </h2>
                <p className="text-lg md:text-xl text-rose-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive threat intelligence capabilities with advanced hunting and analysis.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-rose-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact TISC Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Data Sheet
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-rose-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">tisc-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Get Data Sheet</p>
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
