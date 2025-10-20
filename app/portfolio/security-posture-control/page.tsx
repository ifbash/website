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
  Layers as LayersIcon
} from "lucide-react";

export default function SecurityPostureControlPage() {
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
    "name": "Security Posture Control - ServiceNow SPC Implementation",
    "description": "Discover ServiceNow's Security Posture Control to identify security tool coverage gaps and critical vulnerabilities across all enterprise assets with 360° visibility.",
    "applicationCategory": "Security Posture Control"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Security Posture Control and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow SPC provides 360° visibility into attack surface, detects and remediates security control gaps and unmanaged assets, prioritizes vulnerabilities by asset risk, and unifies attack surface coverage data to identify highest risk gaps."
        }
      },
      {
        "@type": "Question", 
        "name": "How does SPC integrate with CMDB and provide attack surface visibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SPC uses Service Graph Connectors to collect asset data from multiple security and IT tools, generates insights directly in CMDB, and provides comprehensive attack surface visibility with automated asset reconciliation and vulnerability management."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow SPC content)
  const benefits = [
    {
      icon: Target,
      title: "Reduce your attack surface",
      description: "Make sure all assets have baseline security tools such as endpoint protection. Identify risky combinations in assets including vulnerabilities and internet exposure.",
      color: "from-emerald-500 to-green-500",
      stats: "Attack surface reduction"
    },
    {
      icon: CheckCircle,
      title: "Improve compliance",
      description: "Get real-time visibility into your asset inventory. Detect unmanaged and unauthorized assets to boost compliance with security benchmark standards such as CIS.",
      color: "from-green-500 to-teal-500",
      stats: "Enhanced compliance"
    },
    {
      icon: BarChart3,
      title: "Eliminate reporting overhead",
      description: "Create reports seamlessly without manual data collection, spreadsheets, or custom tools with automated reporting and insights generation.",
      color: "from-teal-500 to-cyan-500",
      stats: "Automated reporting"
    },
    {
      icon: AlertTriangle,
      title: "Prioritize vulnerabilities that matter",
      description: "Reduce noise and prioritize critical asset vulnerabilities. Generate insights on asset security hygiene and posture with intelligent risk scoring.",
      color: "from-cyan-500 to-blue-500",
      stats: "Intelligent prioritization"
    }
  ];

  // Key Features (From ServiceNow SPC content)
  const keyFeatures = [
    {
      icon: Search,
      title: "Instant Insights for Security Tool Coverage Gaps",
      description: "Use out-of-the-box policies and insights to monitor assets for missing endpoint protection, vulnerability scanner coverage issues, and more.",
      capabilities: [
        "Out-of-the-box policy detection",
        "Missing endpoint protection alerts",
        "Vulnerability scanner coverage",
        "Security tool gap analysis"
      ],
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Settings,
      title: "Custom Search and Policies",
      description: "Search for assets by criteria such as OS, host name, and security tool configuration. Convert the query into a continuous monitoring policy.",
      capabilities: [
        "Custom asset search criteria",
        "OS and hostname filtering",
        "Tool configuration queries",
        "Continuous monitoring policies"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: FileText,
      title: "Configurable Reports and Insights",
      description: "Create custom reports easily with insights into patterns and trends of assets that match a variety of policies with comprehensive analytics.",
      capabilities: [
        "Custom report generation",
        "Pattern and trend analysis",
        "Policy-based insights",
        "Comprehensive analytics"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Vulnerability and Configuration Prioritization",
      description: "Control prioritization of vulnerable items using the Vulnerability Response module. Apply Security Posture Control insights to alter risk scores.",
      capabilities: [
        "Vulnerability prioritization",
        "Risk score modification",
        "Configuration assessment",
        "VR module integration"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Workflow,
      title: "Remediation Workflow Automation",
      description: "Run automated response workflows involving assignment, prioritization, remediation target setting, exception management, and more.",
      capabilities: [
        "Automated workflow responses",
        "Assignment automation",
        "Remediation target setting",
        "Exception management"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Database,
      title: "CMDB Integration and Asset Management",
      description: "Leverage ServiceNow CMDB for comprehensive asset visibility with Service Graph Connectors collecting data from multiple security and IT tools.",
      capabilities: [
        "Service Graph Connectors",
        "Multi-tool data collection",
        "Asset data enrichment",
        "CMDB maturity enhancement"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Calculator,
      title: "Asset Risk Engine",
      description: "Use SPC as a central risk calculator for assets by creating policies based on security tool configuration, vulnerability data, and IRM exceptions.",
      capabilities: [
        "Central risk calculation",
        "Policy-based scoring",
        "Vulnerability data integration",
        "IRM exception handling"
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: LayersIcon,
      title: "Integrated Platform Capabilities",
      description: "Built-in better together use cases with CMDB, Integrated Risk Management (IRM), and Vulnerability Response for unified security operations.",
      capabilities: [
        "CMDB integration",
        "IRM connectivity",
        "VR module synergy",
        "Unified security operations"
      ],
      color: "from-violet-500 to-fuchsia-500"
    }
  ];

  // Out-of-the-Box Policies
  const outOfBoxPolicies = [
    {
      title: "Assets Missing Security Tools",
      description: "Detect assets missing endpoint protection, antimalware, and other critical security tools across enterprise environments.",
      icon: Shield,
      benefit: "Security tool coverage"
    },
    {
      title: "Unmanaged Assets Detection",
      description: "Identify assets missing configuration and patch management agents or endpoint management solutions for comprehensive oversight.",
      icon: Monitor,
      benefit: "Asset management visibility"
    },
    {
      title: "Vulnerability Scanner Coverage Gaps",
      description: "Find assets that have been missed by vulnerability scanners, ensuring complete security assessment coverage across the enterprise.",
      icon: Search,
      benefit: "Scanner coverage assurance"
    },
    {
      title: "Critical Vulnerabilities with Missing Tools",
      description: "Identify high-risk assets that both lack security tools and have critical vulnerabilities requiring immediate attention.",
      icon: AlertTriangle,
      benefit: "High-risk asset identification"
    },
    {
      title: "Internet-Exposed Cloud Assets",
      description: "Detect cloud assets exposed to internet with critical vulnerabilities and/or security tool coverage gaps for cloud security.",
      icon: Cloud,
      benefit: "Cloud exposure management"
    },
    {
      title: "CIS Compliance Monitoring",
      description: "Monitor compliance with CIS (Center for Internet Security) benchmark standards for enhanced security posture management.",
      icon: CheckCircle,
      benefit: "Compliance assurance"
    }
  ];

  // Advanced Capabilities
  const advancedCapabilities = [
    {
      title: "Attack Surface Intelligence Integration",
      description: "Real-time attack surface monitoring with automated asset reconciliation and exposure trend analysis for proactive risk management.",
      icon: Crosshair,
      benefit: "Proactive risk management"
    },
    {
      title: "Threat-Aware CMDB",
      description: "Transform standard CMDB into threat-aware system connecting threat intelligence to servers, applications, and services for context-rich security.",
      icon: Brain,
      benefit: "Context-rich security"
    },
    {
      title: "Business Impact Analysis",
      description: "Link vulnerabilities to actual business impact using service mapping and dependency analysis for risk-informed decision making.",
      icon: Target,
      benefit: "Risk-informed decisions"
    },
    {
      title: "Automated Asset Discovery",
      description: "Continuous asset discovery and reconciliation with CMDB using Service Graph Connectors for comprehensive asset inventory management.",
      icon: Radar,
      benefit: "Comprehensive inventory"
    },
    {
      title: "Security Hygiene Scoring",
      description: "Generate comprehensive security hygiene scores based on multiple factors including tool coverage, vulnerabilities, and compliance status.",
      icon: Award,
      benefit: "Holistic security assessment"
    },
    {
      title: "Configuration Compliance Integration",
      description: "Seamless integration with Configuration Compliance for automated issue creation, assignment, and remediation workflow orchestration.",
      icon: Cog,
      benefit: "Automated remediation"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Security Posture Control and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Security Posture Control (SPC) provides comprehensive attack surface visibility and security gap management:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Provides 360° visibility into attack surface to detect and remediate security control gaps and unmanaged assets</li>
            <li>Prioritizes vulnerabilities by asset risk and generates insights on asset security hygiene and posture</li>
            <li>Unifies attack surface coverage data to identify the highest risk gaps across enterprise environments</li>
            <li>Uses API connectors (Service Graph Connectors) to collect asset data from multiple security and IT tools</li>
            <li>Eliminates reporting overhead by creating reports seamlessly without manual data collection or spreadsheets</li>
          </ul>
          <p className="mt-3 text-sm text-emerald-600">
            <strong>Built on ServiceNow AI Platform</strong> with CMDB integration and automated workflow orchestration for comprehensive security posture management.
          </p>
        </div>
      )
    },
    
    {
      question: "How does SPC integrate with CMDB and provide attack surface visibility?",
      answer: (
        <div>
          <p className="mb-3">SPC leverages ServiceNow CMDB and Service Graph Connectors for comprehensive attack surface management:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Service Graph Connectors:</strong> API-based connectors collect asset data from multiple security and IT tools to generate insights</li>
            <li><strong>CMDB Maturity Enhancement:</strong> Operationalizing SPC helps mature asset data in CMDB through continuous integration with various tools</li>
            <li><strong>Automated Asset Reconciliation:</strong> Automatically reconcile newly detected assets with CMDB and create vulnerable items for new exposures</li>
            <li><strong>Configuration Item Integration:</strong> Findings are directly tied to Configuration Items (CIs) in CMDB for simplified owner identification</li>
            <li><strong>Real-Time Intelligence:</strong> Provides real-time insights on assets and exposures for proactive risk management</li>
            <li><strong>Attack Surface Intelligence:</strong> Comprehensive visibility across attack surface to proactively identify vulnerabilities and exposures</li>
            <li><strong>Intuitive Dashboards:</strong> Visibility into integration performance and exposure trends for data-driven decision making</li>
          </ul>
          <p className="mt-3">
            This integration creates a single, authoritative source of truth on asset coverage and security posture across the enterprise.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow SPC?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SPC provides comprehensive security posture management capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Core Detection Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Security Tool Coverage Gaps:</strong> Out-of-the-box policies for missing endpoint protection and vulnerability scanner issues</li>
                <li><strong>Custom Search and Policies:</strong> Asset search by OS, hostname, and security tool configuration with continuous monitoring</li>
                <li><strong>Vulnerability Prioritization:</strong> Risk score modification using Vulnerability Response module integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">Advanced Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Asset Risk Engine:</strong> Central risk calculator using security tool configuration and vulnerability data</li>
                <li><strong>Remediation Workflow Automation:</strong> Automated assignment, prioritization, and exception management</li>
                <li><strong>Configurable Reports:</strong> Custom report generation with pattern analysis and comprehensive insights</li>
                <li><strong>Integrated Platform:</strong> Better together use cases with CMDB, IRM, and Vulnerability Response</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "What out-of-the-box policies does SPC provide for security gap detection?",
      answer: (
        <div>
          <p className="mb-3">
            SPC includes comprehensive out-of-the-box policies to detect common security gaps:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Assets Missing Security Tools:</strong> Endpoint protection, antimalware, and other critical security tools</li>
            <li><strong>Unmanaged Assets:</strong> Assets missing configuration and patch management agents or endpoint management solutions</li>
            <li><strong>Vulnerability Scanner Coverage:</strong> Assets missed by vulnerability scanners for complete assessment coverage</li>
            <li><strong>High-Risk Combinations:</strong> Assets missing security tools and having critical vulnerabilities</li>
            <li><strong>Internet-Exposed Cloud Assets:</strong> Cloud assets exposed to internet with critical vulnerabilities and/or coverage gaps</li>
            <li><strong>CIS Compliance:</strong> Monitoring compliance with Center for Internet Security benchmark standards</li>
          </ul>
          <p className="mt-3">
            Organizations can also create custom policies based on asset metadata, security tool configuration data, and vulnerability data to monitor internal security standards compliance.
          </p>
        </div>
      )
    },

    {
      question: "How does SPC work with Vulnerability Response for risk prioritization?",
      answer: (
        <div>
          <p className="mb-3">SPC and Vulnerability Response integration provides enhanced risk prioritization capabilities:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Risk Score Enhancement:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Policy Violation Impact:</strong> Vulnerability managers can define remediation targets and risk scores based on SPC policy violations</li>
                <li><strong>Context-Aware Scoring:</strong> Assets missing endpoint protection or internet-exposed with missing tools receive higher priority</li>
                <li><strong>Business Context Integration:</strong> Risk scoring considers business impact and asset criticality for informed prioritization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Automated Workflow Integration:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Configuration Compliance:</strong> SPC findings captured in Configuration Compliance for automated response workflows</li>
                <li><strong>Assignment Automation:</strong> Automated assignments based on CI ownership and security tool configuration</li>
                <li><strong>Remediation Targeting:</strong> Automated remediation target setting and exception management workflows</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Security Posture Control implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, asset complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SPC Standard Implementation:</strong> Starting from $200K - includes basic attack surface visibility, out-of-the-box policies, and standard CMDB integration for mid-size organizations</li>
            <li><strong>SPC Professional Implementation:</strong> $300K-$450K - includes custom policies, advanced analytics, and comprehensive security tool integrations for large enterprises</li>
            <li><strong>SPC Enterprise Suite:</strong> $500K+ - complete solution with attack surface intelligence, threat-aware CMDB, and enterprise-scale security posture management</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 8-12 months through security gap identification (65%), compliance automation (50%), and vulnerability prioritization improvements (45%). Attack surface visibility can reduce manual asset discovery by 80%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "SPC ROI Calculator", url: "/spc-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow SPC?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on asset inventory complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SPC Standard:</strong> 6-10 weeks for basic attack surface visibility, out-of-the-box policies, and core CMDB integration</li>
            <li><strong>SPC Professional:</strong> 10-16 weeks including custom policies, advanced analytics, and comprehensive security tool integrations</li>
            <li><strong>SPC Enterprise Suite:</strong> 16-22 weeks for complete solution with attack surface intelligence, threat-aware CMDB, and enterprise integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Asset Discovery & CMDB Assessment (1-2 weeks) → Core SPC Platform & Policy Configuration (3-6 weeks) → Service Graph Connector Setup & Tool Integration (2-4 weeks) → Custom Policies & Analytics Dashboard (2-4 weeks) → Go-Live & Security Team Training (2-3 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does SPC integrate with third-party security tools and attack surface intelligence platforms?",
      answer: (
        <div>
          <p className="mb-3">SPC provides extensive integration capabilities for comprehensive attack surface management:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Service Graph Connectors:</strong> API-based connectors for collecting data from multiple security and IT tools</li>
            <li><strong>Vulnerability Scanners:</strong> Integration with Qualys, Rapid7, Tenable, and other vulnerability assessment platforms</li>
            <li><strong>Endpoint Protection Platforms:</strong> Data collection from endpoint security tools for coverage gap analysis</li>
            <li><strong>Attack Surface Intelligence:</strong> Integration with Recorded Future, CyCognito, and other ASI platforms for external visibility</li>
            <li><strong>Cloud Security Platforms:</strong> Integration with AWS, Azure, GCP security services for cloud asset visibility</li>
            <li><strong>Configuration Management:</strong> Integration with patch management and configuration tools for compliance monitoring</li>
            <li><strong>SIEM Platforms:</strong> Data sharing with security information and event management systems for enhanced context</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve unified attack surface visibility while maintaining existing security tool investments and operational workflows.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on SPC success stories)
  const caseStudies = [
    {
      title: "Global Enterprise Achieves 360° Attack Surface Visibility with SPC",
      client: "Fortune 500 Technology Corporation",
      industry: "Enterprise Technology",
      challenge: "Complex global infrastructure requiring comprehensive attack surface visibility and security tool coverage gap identification across multi-cloud environments",
      solution: "ServiceNow SPC with Service Graph Connectors, attack surface intelligence integration, and comprehensive CMDB enhancement for unified security posture",
      results: [
        { metric: "360°", description: "Attack surface visibility" },
        { metric: "Comprehensive", description: "Coverage gap detection" },
        { metric: "Multi-Cloud", description: "Environment coverage" },
        { metric: "Unified", description: "Security posture" }
      ],
      testimonial: "ServiceNow SPC provided 360° attack surface visibility, enabling us to identify and remediate security tool coverage gaps across our global infrastructure.",
      executive: "Chief Information Security Officer",
      logo: "/images/clients/enterprise-tech-logo.png"
    },
    {
      title: "Healthcare Organization Strengthens Compliance with Automated CIS Monitoring",
      client: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Healthcare infrastructure requiring CIS compliance monitoring and automated security posture management while maintaining patient care operations",
      solution: "ServiceNow SPC with CIS compliance policies, automated monitoring, and healthcare-specific security posture controls for regulatory compliance",
      results: [
        { metric: "CIS", description: "Compliance automated" },
        { metric: "Healthcare", description: "Posture enhanced" },
        { metric: "Patient Care", description: "Operations maintained" },
        { metric: "Regulatory", description: "Compliance assured" }
      ],
      testimonial: "ServiceNow SPC automated our CIS compliance monitoring, strengthening our security posture while maintaining critical healthcare operations.",
      executive: "VP of Information Security",
      logo: "/images/clients/healthcare-system-logo.png"
    },
    {
      title: "Financial Services Firm Eliminates Manual Reporting with SPC Automation",
      client: "International Banking Group",
      industry: "Financial Services",
      challenge: "Financial services operations requiring elimination of manual security reporting overhead while maintaining comprehensive risk visibility and compliance",
      solution: "ServiceNow SPC with automated reporting, custom policies, and financial services compliance integration for streamlined security operations",
      results: [
        { metric: "Eliminated", description: "Manual reporting overhead" },
        { metric: "Automated", description: "Security operations" },
        { metric: "Financial", description: "Compliance maintained" },
        { metric: "Risk", description: "Visibility enhanced" }
      ],
      testimonial: "ServiceNow SPC eliminated our manual reporting overhead, providing automated security insights while maintaining comprehensive risk visibility.",
      executive: "Chief Risk Officer",
      logo: "/images/clients/banking-group-logo.png"
    },
    {
      title: "Manufacturing Company Deploys Threat-Aware CMDB with SPC Intelligence",
      client: "Global Manufacturing Enterprise",
      industry: "Industrial Manufacturing",
      challenge: "Complex manufacturing operations requiring threat-aware CMDB capabilities with real-time security intelligence and operational technology integration",
      solution: "ServiceNow SPC with threat-aware CMDB, OT/IT security integration, and manufacturing-specific attack surface management for industrial security",
      results: [
        { metric: "Threat-Aware", description: "CMDB deployed" },
        { metric: "OT/IT", description: "Security integrated" },
        { metric: "Manufacturing", description: "Operations secured" },
        { metric: "Industrial", description: "Attack surface managed" }
      ],
      testimonial: "ServiceNow SPC with threat-aware CMDB capabilities transformed our manufacturing security operations with real-time intelligence integration.",
      executive: "Director of Cybersecurity",
      logo: "/images/clients/manufacturing-enterprise-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Security Posture Control - ServiceNow SPC Portfolio | ifBash</title>
        <meta
          name="description"
          content="Discover ServiceNow's Security Posture Control to identify security tool coverage gaps and critical vulnerabilities across all enterprise assets with 360° visibility."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss SPC Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss SPC Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-emerald-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-teal-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-emerald-500/90 to-green-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-emerald-600 hover:to-green-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500/90 to-teal-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-green-600 hover:to-teal-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered SPC
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    360° Visibility
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 font-semibold">
                    Security Posture
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 font-semibold">
                      Control
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-green-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-green-300">Get 360° visibility into your attack surface.</span>{' '}
                  <span className="font-semibold text-teal-300">Detect and remediate security control gaps</span> and unmanaged assets, prioritize vulnerabilities by asset risk.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get SPC Implementation
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
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-cyan-400 group-hover:text-cyan-300" />
                      Get Data Sheet
                    </span>
                  </button>
                </div>

                {/* Attack Surface Badge */}
                <div className="bg-gradient-to-r from-emerald-500/15 to-green-500/15 backdrop-blur-sm rounded-xl p-4 border border-emerald-300/20">
                  <div className="flex items-center gap-3">
                    <Crosshair className="h-8 w-8 text-emerald-300" />
                    <div>
                      <div className="text-lg font-bold text-white">360° Attack Surface Visibility</div>
                      <div className="text-sm text-emerald-200">Comprehensive security posture management</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Security Posture Control Platform"
                      className="w-full h-full object-cover"
                      gradient="from-emerald-600 to-green-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Attack</div>
                      <div className="text-xs text-emerald-200">Surface</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Security</div>
                      <div className="text-xs text-green-200">Posture</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Eye className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
                  Transform Security
                </span>
                <br />
                <span className="text-gray-800">
                  Posture Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get comprehensive attack surface visibility and security control gap management with intelligent vulnerability prioritization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200">
                      <div className="text-sm font-semibold text-emerald-700 mb-1">Key Value</div>
                      <div className="text-emerald-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600">
                  Key SPC Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Posture Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive security posture control features from coverage gap detection to automated remediation with intelligent risk analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Out-of-the-Box Policies Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  Out-of-the-Box Policies
                </span>
                <br />
                <span className="text-gray-800">
                  Comprehensive Security Detection
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Pre-built security policies for detecting common gaps including missing tools, unmanaged assets, and compliance violations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {outOfBoxPolicies.map((policy, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <policy.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {policy.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {policy.description}
                    </p>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
                      <div className="text-sm font-semibold text-teal-700 mb-1">Key Benefit</div>
                      <div className="text-teal-600 text-lg font-bold">{policy.benefit}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Security Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced security posture capabilities including threat-aware CMDB, attack surface intelligence, and automated asset discovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200">
                      <div className="text-sm font-semibold text-cyan-700 mb-1">Key Benefit</div>
                      <div className="text-cyan-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Security Posture Control
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about SPC implementation, attack surface visibility, and security posture transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-blue-500 to-indigo-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
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
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real SPC Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their security posture management with AI-powered Security Posture Control solutions.
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
                              <Badge className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border border-indigo-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 border border-purple-400/30">
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

                            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-4 border-l-4 border-indigo-400">
                              <Quote className="h-6 w-6 text-indigo-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-indigo-300">— {study.executive}</p>
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
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Security Posture Management?
                </h2>
                <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive security posture control with 360° attack surface visibility and intelligent gap detection.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact SPC Experts
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
                    <Mail className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">spc-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-blue-200 mx-auto mb-2" />
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
