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
  Bug
} from "lucide-react";

export default function SecurityOperationsPage() {
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
    "name": "Security Operations (SecOps) - ServiceNow Security Operations Implementation",
    "description": "ServiceNow Security Operations (SecOps) connects your existing security tools to prioritize and respond to vulnerabilities and security incidents faster with AI-powered automation.",
    "applicationCategory": "Security Operations"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Security Operations (SecOps) and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow SecOps connects existing security tools to prioritize and respond to vulnerabilities and security incidents faster, using intelligent workflows, automation, and MITRE ATT&CK integration to enhance cyber resilience."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Now Assist for Security Operations and how does it enhance incident response?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Now Assist for Security Operations uses generative AI to create incident summaries, generate resolution notes, and enable natural language queries, potentially saving organizations over $400,000 annually through enhanced analyst productivity."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow SecOps content)
  const benefits = [
    {
      icon: Zap,
      title: "Reach operational agility",
      description: "Use MITRE ATT&CK to investigate threats and close gaps. Accelerate incident response with context and AI for smart workflows.",
      color: "from-red-500 to-orange-500",
      stats: "Enhanced threat response"
    },
    {
      icon: Target,
      title: "Prioritize remediation",
      description: "Apply risk-based vulnerability management across your infrastructure. Use collaborative workspaces for effective management of risks and IT remediation.",
      color: "from-orange-500 to-amber-500",
      stats: "Risk-based prioritization"
    },
    {
      icon: Eye,
      title: "Know your security posture",
      description: "View key metrics and indicators with role-based dashboards and reporting. Enhance visibility into your security posture and team performance.",
      color: "from-amber-500 to-yellow-500",
      stats: "Complete visibility"
    },
    {
      icon: Shield,
      title: "Simplify threat management",
      description: "Automate threat and vulnerability management and response while reducing risks to your organization with AI-powered workflows.",
      color: "from-yellow-500 to-lime-500",
      stats: "Automated protection"
    }
  ];

  // Key Features (From ServiceNow SecOps content)
  const keyFeatures = [
    {
      icon: AlertTriangle,
      title: "Security Incident Response",
      description: "Prioritize and respond quickly to security threats using intelligent workflows and automation with comprehensive incident management.",
      capabilities: [
        "Intelligent threat prioritization",
        "Automated workflow orchestration",
        "Incident lifecycle management",
        "MITRE ATT&CK integration"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Bug,
      title: "Vulnerability Response",
      description: "Respond efficiently and prioritize vulnerabilities based on business impact with risk-based vulnerability management across infrastructure.",
      capabilities: [
        "Risk-based prioritization",
        "Business impact assessment",
        "Collaborative remediation",
        "Vulnerability lifecycle tracking"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Shield,
      title: "Security Posture Control",
      description: "Understand which assets are protected and which are at risk with comprehensive visibility into security tool coverage gaps.",
      capabilities: [
        "Asset protection visibility",
        "Risk assessment analytics",
        "Security coverage analysis",
        "Posture monitoring dashboards"
      ],
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Brain,
      title: "Threat Intelligence Security Center",
      description: "Gain a comprehensive platform to bolster cybersecurity posture through advanced threat intelligence and indicator management.",
      capabilities: [
        "Advanced threat intelligence",
        "Indicator of compromise tracking",
        "Threat hunting capabilities",
        "Intelligence feed integration"
      ],
      color: "from-yellow-500 to-lime-500"
    },
    {
      icon: Settings,
      title: "Configuration Compliance",
      description: "Identify, prioritize, and remediate misconfigured software with automated compliance monitoring and remediation workflows.",
      capabilities: [
        "Misconfig identification",
        "Compliance monitoring",
        "Automated remediation",
        "Configuration assessment"
      ],
      color: "from-lime-500 to-green-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics for Security Operations",
      description: "Anticipate trends, prioritize resources, and continuously improve with real-time analytics and comprehensive security metrics.",
      capabilities: [
        "Real-time security analytics",
        "Trend analysis and prediction",
        "Resource prioritization",
        "Performance measurement"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Bot,
      title: "Now Assist for Security Operations",
      description: "Enhance and scale your incident response capabilities with generative AI-powered summaries, notes, and natural language queries.",
      capabilities: [
        "AI-powered incident summaries",
        "Automated resolution notes",
        "Natural language querying",
        "Enhanced analyst productivity"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: FileX,
      title: "Data Loss Prevention Incident Response",
      description: "Integrate SecOps with your data loss prevention tool to reduce exposure and automate response to data security incidents.",
      capabilities: [
        "DLP tool integration",
        "Data exposure reduction",
        "Automated incident response",
        "Data security monitoring"
      ],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  // Role-Based Applications
  const roleBasedApps = [
    {
      role: "Chief Information Security Officer (CISO)",
      description: "Streamline security processes through automated workflows, enhance situational awareness and reduce response time to critical threats.",
      applications: [
        "Performance Analytics for Security Incident Response",
        "Security Incident Response",
        "Major Security Incident Management"
      ],
      icon: UserCog,
      color: "from-red-500 to-orange-500"
    },
    {
      role: "Security Analyst",
      description: "Automatize and orchestrate capabilities to identify, prioritize, and respond to incidents and threats with modern tools.",
      applications: [
        "Security Incident Response",
        "Major Security Incident Management", 
        "Threat Intelligence"
      ],
      icon: Search,
      color: "from-orange-500 to-amber-500"
    },
    {
      role: "Vulnerability Manager",
      description: "Respond faster and more efficiently to vulnerabilities, connect work with security and IT teams, and gain real-time visibility.",
      applications: [
        "Vulnerability Response",
        "Security Posture Control",
        "Configuration Compliance"
      ],
      icon: Bug,
      color: "from-amber-500 to-yellow-500"
    }
  ];

  // Advanced Capabilities
  const advancedCapabilities = [
    {
      title: "MITRE ATT&CK Integration",
      description: "Leverage MITRE ATT&CK framework to map incidents, understand attacker tactics, and accelerate threat investigation processes.",
      icon: Radar,
      benefit: "Enhanced threat intelligence"
    },
    {
      title: "Major Security Incident Management",
      description: "Manage security incidents with dedicated workspace and workflow methodology to coordinate activities and resolve incidents efficiently.",
      icon: AlertTriangle,
      benefit: "Coordinated incident response"
    },
    {
      title: "Single Tenant Security",
      description: "Maximize security with isolated and dedicated cloud instance for enhanced protection and faster threat response capabilities.",
      icon: Lock,
      benefit: "Enhanced data protection"
    },
    {
      title: "Advanced High Availability",
      description: "Keep business running with paired data centers and asynchronous database replication for improved cyber resilience.",
      icon: Server,
      benefit: "Business continuity assurance"
    },
    {
      title: "Centralized Security Management",
      description: "Empower admins to access instance compliance levels, monitor security trends, and mitigate risk from unified interface.",
      icon: Layout,
      benefit: "Unified security oversight"
    },
    {
      title: "Certified Security Integrations",
      description: "Seamlessly integrate with third-party security tools, SIEM platforms, and threat intelligence feeds for comprehensive coverage.",
      icon: Plug,
      benefit: "Ecosystem connectivity"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Security Operations (SecOps) and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Security Operations (SecOps) connects existing security tools to enhance organizational cyber resilience:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Connects disparate security tools into orchestrated, automated workflows for unified response</li>
            <li>Prioritizes and responds to vulnerabilities and security incidents faster with intelligent automation</li>
            <li>Uses MITRE ATT&CK framework integration to investigate threats and close security gaps</li>
            <li>Applies risk-based vulnerability management across infrastructure with business impact assessment</li>
            <li>Provides comprehensive security posture visibility with role-based dashboards and analytics</li>
          </ul>
          <p className="mt-3 text-sm text-red-600">
            <strong>Built on ServiceNow AI Platform</strong> with SOAR principles for enterprise-scale security operations.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Now Assist for Security Operations and how does it enhance incident response?",
      answer: (
        <div>
          <p className="mb-3">Now Assist for Security Operations leverages generative AI to transform security operations:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>AI-Powered Summaries:</strong> Automatically generates comprehensive incident summaries, reducing analysis time and improving accuracy</li>
            <li><strong>Resolution Notes Generation:</strong> Creates detailed resolution notes based on actions taken during incident response for streamlined closure</li>
            <li><strong>Natural Language Queries:</strong> Enables analysts to ask security incident questions using conversational language for faster information retrieval</li>
            <li><strong>Enhanced Productivity:</strong> Increases analyst efficiency by automating repetitive documentation and analysis tasks</li>
            <li><strong>Significant Cost Savings:</strong> Can save organizations over $400,000 annually by handling 500+ security incidents per week more efficiently</li>
          </ul>
          <p className="mt-3">
            This represents the first step toward transforming SOC operations and bridging the cybersecurity skills gap through AI automation.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow SecOps?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SecOps provides comprehensive security operations capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-orange-600 mb-2">Incident Response:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Security Incident Response:</strong> Intelligent workflows and automation for rapid threat response</li>
                <li><strong>Major Security Incident Management:</strong> Dedicated workspace for coordinating high-impact security events</li>
                <li><strong>MITRE ATT&CK Integration:</strong> Framework-based threat analysis and investigation capabilities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-600 mb-2">Vulnerability Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Vulnerability Response:</strong> Risk-based prioritization and business impact assessment</li>
                <li><strong>Security Posture Control:</strong> Visibility into asset protection status and security coverage gaps</li>
                <li><strong>Configuration Compliance:</strong> Automated misconfiguration identification and remediation</li>
                <li><strong>Threat Intelligence:</strong> Advanced threat intelligence platform with IoC tracking</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow SecOps integrate MITRE ATT&CK framework for threat analysis?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow SecOps integrates MITRE ATT&CK framework to enhance threat analysis and incident response:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Tactics, Techniques, Procedures (TTP) Mapping:</strong> Automatically map security incidents to MITRE techniques for faster analysis</li>
            <li><strong>Attack Phase Understanding:</strong> Leverage embedded MITRE ATT&CK view to understand potential attack phases and related TTPs</li>
            <li><strong>Detection Coverage Insight:</strong> Gain visibility into MITRE technique detection coverage across security tools</li>
            <li><strong>Threat Hunting Enhancement:</strong> Improve threat hunting capabilities by leveraging relationships between TTPs and security incidents</li>
            <li><strong>Investigative Action Guidance:</strong> Determine additional investigative actions and forensic evidence to collect</li>
            <li><strong>Remediation Planning:</strong> Identify necessary remediation or mitigative actions based on attack technique analysis</li>
          </ul>
          <p className="mt-3">
            This integration helps security analysts understand adversary intent and anticipate cyberattack responses more effectively.
          </p>
        </div>
      )
    },

    {
      question: "What role-based applications does ServiceNow SecOps provide for different security professionals?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SecOps offers role-based applications tailored to different security professionals:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Chief Information Security Officer (CISO):</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Performance Analytics for Security Incident Response with key metrics visibility</li>
                <li>Security Incident Response for strategic threat management oversight</li>
                <li>Major Security Incident Management for coordinating critical security events</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Security Analyst:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Security Incident Response with automated workflows and intelligent prioritization</li>
                <li>Major Security Incident Management for coordinated response activities</li>
                <li>Threat Intelligence with IoC tracking and threat hunting capabilities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Vulnerability Manager:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Vulnerability Response with risk-based prioritization and assessment</li>
                <li>Security Posture Control for comprehensive asset protection visibility</li>
                <li>Configuration Compliance with automated remediation workflows</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Security Operations implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, security complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SecOps Standard Implementation:</strong> Starting from $350K - includes incident response, basic vulnerability management, and standard integrations for mid-size organizations</li>
            <li><strong>SecOps Professional Implementation:</strong> $500K-$750K - includes Now Assist for Security Operations, MITRE ATT&CK integration, and advanced threat intelligence for large enterprises</li>
            <li><strong>SecOps Enterprise Suite:</strong> $800K+ - complete solution with major incident management, advanced analytics, and comprehensive security ecosystem integration</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through incident response acceleration (45%), vulnerability management efficiency (35%), and analyst productivity gains (40%). Now Assist can save over $400K annually.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "SecOps ROI Calculator", url: "/secops-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow SecOps?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on security complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SecOps Standard:</strong> 14-18 weeks for incident response, basic vulnerability management, and security tool integrations</li>
            <li><strong>SecOps Professional:</strong> 18-24 weeks including Now Assist for Security Operations, MITRE ATT&CK integration, and advanced threat intelligence</li>
            <li><strong>SecOps Enterprise Suite:</strong> 24-30 weeks for complete solution with major incident management, advanced analytics, and extensive ecosystem integration</li>
          </ul>
          <p className="mt-3">
            Our methodology: Security Assessment & Tool Analysis (3-4 weeks) → Core SecOps Platform & Incident Response Configuration (8-12 weeks) → MITRE ATT&CK Integration & AI Setup (4-6 weeks) → Go-Live & Security Team Training (3-4 weeks) → Advanced Analytics & Optimization (2-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow SecOps integrate with existing security tools and SIEM platforms?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SecOps provides extensive integration capabilities for security ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SIEM Platforms:</strong> Native integration with Splunk, IBM QRadar, ArcSight, and other SIEM solutions for incident data</li>
            <li><strong>Threat Intelligence Feeds:</strong> Integration with multiple TIP platforms for IoC enrichment and threat context</li>
            <li><strong>Vulnerability Scanners:</strong> Tenable, Qualys, Rapid7, and other vulnerability assessment tool integration</li>
            <li><strong>Endpoint Security:</strong> Integration with EDR/XDR platforms for comprehensive endpoint visibility</li>
            <li><strong>Cloud Security Tools:</strong> Native integration with AWS, Azure, GCP security services and CSPM platforms</li>
            <li><strong>Authentication Systems:</strong> Integration with identity and access management platforms</li>
            <li><strong>Ticketing Systems:</strong> Bi-directional integration with ITSM platforms for coordinated response</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations maintain existing security investments while gaining unified orchestration and AI-powered capabilities across entire security ecosystem.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on SecOps success stories)
  const caseStudies = [
    {
      title: "Wellstar Delivers Patient Care with Quality and Confidence using SecOps",
      client: "Wellstar Health System",
      industry: "Healthcare",
      challenge: "Need to protect patient data and healthcare systems while maintaining operational efficiency and ensuring compliance with healthcare security regulations",
      solution: "ServiceNow Security Operations with comprehensive incident response, vulnerability management, and healthcare-specific security controls",
      results: [
        { metric: "Enhanced", description: "Patient data protection" },
        { metric: "Improved", description: "Security compliance" },
        { metric: "Streamlined", description: "Incident response" },
        { metric: "Quality", description: "Care delivery confidence" }
      ],
      testimonial: "ServiceNow SecOps enables us to deliver patient care with quality and confidence by protecting our healthcare systems while maintaining operational efficiency.",
      executive: "Chief Information Security Officer",
      logo: "/images/clients/wellstar-logo.png"
    },
    {
      title: "SAS Strengthens Incident Management for Faster Threat Response",
      client: "SAS Institute",
      industry: "Analytics Software",
      challenge: "Complex threat landscape requiring faster incident response times and strengthened security incident management across global software development operations",
      solution: "ServiceNow Security Operations with advanced incident response capabilities, threat intelligence integration, and automated workflow orchestration",
      results: [
        { metric: "Strengthened", description: "Incident management" },
        { metric: "Faster", description: "Threat response" },
        { metric: "Enhanced", description: "Security automation" },
        { metric: "Improved", description: "Global coordination" }
      ],
      testimonial: "ServiceNow SecOps strengthened our incident management capabilities, enabling significantly faster threat response across our global software development operations.",
      executive: "VP of Information Security",
      logo: "/images/clients/sas-logo.png"
    },
    {
      title: "Yokogawa Electric Shortens Threat Response and Recovery Time",
      client: "Yokogawa Electric Corporation",
      industry: "Industrial Automation",
      challenge: "Industrial systems requiring rapid threat response and recovery capabilities to protect critical infrastructure and maintain operational continuity",
      solution: "ServiceNow Security Operations with industrial-focused security controls, rapid response automation, and comprehensive recovery procedures",
      results: [
        { metric: "Significantly", description: "Shortened response time" },
        { metric: "Rapid", description: "Recovery capabilities" },
        { metric: "Enhanced", description: "Infrastructure protection" },
        { metric: "Improved", description: "Operational continuity" }
      ],
      testimonial: "ServiceNow SecOps significantly shortened our threat response and recovery time, enabling us to protect critical industrial infrastructure more effectively.",
      executive: "Chief Security Officer",
      logo: "/images/clients/yokogawa-logo.png"
    },
    {
      title: "ServiceNow Uses Own SecOps Products to Increase Security Team Efficiency",
      client: "ServiceNow (Now on Now)",
      industry: "Software Platform",
      challenge: "Demonstrating platform effectiveness by using ServiceNow Security Operations internally to manage security for global software platform operations",
      solution: "ServiceNow Security Operations with full platform capabilities including Now Assist, vulnerability management, and comprehensive automation",
      results: [
        { metric: "Increased", description: "Security team efficiency" },
        { metric: "Enhanced", description: "Vulnerability management" },
        { metric: "Actionable", description: "Security insights" },
        { metric: "Continual", description: "Improvement processes" }
      ],
      testimonial: "The Now platform has increased the effectiveness of our vulnerability management program and provides actionable insight for continual improvement.",
      executive: "Howard Atlas, ServiceNow Security Team",
      logo: "/images/clients/servicenow-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Security Operations (SecOps) - ServiceNow Security Operations Portfolio | ifBash</title>
        <meta
          name="description"
          content="ServiceNow Security Operations (SecOps) connects your existing security tools to prioritize and respond to vulnerabilities and security incidents faster with AI-powered automation."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss SecOps Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss SecOps Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-red-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-orange-900 to-amber-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-amber-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-red-500/90 to-orange-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-red-600 hover:to-orange-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500/90 to-amber-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-amber-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Now Assist AI
                  </Badge>
                  <Badge className="bg-gradient-to-r from-amber-500/90 to-yellow-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-amber-600 hover:to-yellow-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    MITRE ATT&CK
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 font-semibold">
                    Security Operations
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 font-semibold">
                      (SecOps)
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-orange-300">Simplify and automate threat and vulnerability management</span> while{' '}
                  <span className="font-semibold text-amber-300">reducing risks to your organization</span> with AI-powered security operations.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-700 hover:via-orange-700 hover:to-amber-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-orange-400/20 to-amber-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get SecOps Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-amber-400 group-hover:text-amber-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>

                {/* Security Badge */}
                <div className="bg-gradient-to-r from-red-500/15 to-orange-500/15 backdrop-blur-sm rounded-xl p-4 border border-red-300/20">
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-red-300" />
                    <div>
                      <div className="text-lg font-bold text-white">AI-Powered Threat Protection</div>
                      <div className="text-sm text-red-200">MITRE ATT&CK integrated security operations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Security Operations (SecOps) Platform"
                      className="w-full h-full object-cover"
                      gradient="from-red-600 to-orange-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Threat</div>
                      <div className="text-xs text-red-200">Intelligence</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Automated</div>
                      <div className="text-xs text-orange-200">Response</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Radar className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                  Transform Security
                </span>
                <br />
                <span className="text-gray-800">
                  Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Apply risk-based vulnerability management, enhance visibility, and accelerate incident response with AI-powered automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-200">
                      <div className="text-sm font-semibold text-red-700 mb-1">Key Value</div>
                      <div className="text-red-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Key SecOps Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Security Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive security operations features from incident response to vulnerability management with AI-powered automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-lime-600">
                  Role-Based Applications
                </span>
                <br />
                <span className="text-gray-800">
                  Security Professional Focus
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Tailored applications for different security roles, from CISO strategic oversight to analyst tactical operations.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {roleBasedApps.map((roleApp, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Advanced Capabilities Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-lime-600 to-green-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Security Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced security capabilities including MITRE ATT&CK integration, high availability, and enterprise-scale security management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-lime-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-lime-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-yellow-50 to-lime-50 rounded-xl p-4 border border-yellow-200">
                      <div className="text-sm font-semibold text-yellow-700 mb-1">Key Benefit</div>
                      <div className="text-yellow-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-lime-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Security Operations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about SecOps implementation, Now Assist, and security transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-lime-500 to-green-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-lime-600 hover:text-lime-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-emerald-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-green-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real SecOps Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their security operations with AI-powered Security Operations solutions.
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
                              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-200 border border-green-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-200 border border-emerald-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-teal-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-teal-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-4 border-l-4 border-green-400">
                              <Quote className="h-6 w-6 text-green-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-green-300">— {study.executive}</p>
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
                                <span className="text-green-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-green-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Security Operations?
                </h2>
                <p className="text-lg md:text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive security operations with Now Assist AI and MITRE ATT&CK integration.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact SecOps Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Security Guide
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-green-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">secops-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-emerald-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-teal-200 mx-auto mb-2" />
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
      `}</style>
    </>
  );
}
