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
  AlertCircle,
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
  ChevronRightIcon
} from "lucide-react";

export default function ITOperationsManagementPage() {
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
    "name": "IT Operations Management - ServiceNow ITOM Implementation",
    "description": "Gain visibility into your multistack IT environment, on-premises to cloud, and see the impact on your applications. Automate alert triage and impact analysis with AI agents.",
    "applicationCategory": "IT Operations Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow IT Operations Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow ITOM enables organizations to gain visibility across infrastructure and apps, maintain service health, and optimize cloud delivery and spend. It provides visibility into multistack IT environments from on-premises to cloud."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the main featured apps and capabilities of ITOM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ITOM includes Agentic workflows, Discovery, Service Mapping, Certificate Management, Firewall Audits, Service Graph Connectors, CMDB, Event Management, Metric Intelligence, Health Log Analytics, Cloud Accelerate, and Service Observability."
        }
      }
    ]
  };

  // Benefits (Exact from ServiceNow)
  const benefits = [
    {
      icon: DiscoverIcon,
      title: "Discover your IT estate",
      description: "Gain full visibility into your infrastructure, including on-premises, cloud, and serverless environments. Manage TLS certificates and firewall policies on a single platform.",
      color: "from-orange-500 to-red-500",
      stats: "Complete infrastructure visibility"
    },
    {
      icon: Brain,
      title: "Predict issues with AIOps",
      description: "Stop chasing false positives and identify anomalies with less guesswork. Analyze telemetry and log data using generative AI to reduce noise, predict issues, and automate resolution.",
      color: "from-red-500 to-pink-500",
      stats: "99% reduction in false positives"
    },
    {
      icon: CloudLightning,
      title: "Speed cloud adoption",
      description: "Make the move to intelligent workflows that automate cloud service delivery and maintain continuous governance.",
      color: "from-pink-500 to-purple-500",
      stats: "60% faster cloud adoption"
    },
    {
      icon: Route,
      title: "Get business service context",
      description: "Create intuitive service maps with multiple options. Leverage machine learning for fast deployment. Visualize the impact of change for application services.",
      color: "from-purple-500 to-indigo-500",
      stats: "Real-time service mapping"
    }
  ];

  // Featured Apps and Capabilities (Exact from ServiceNow)
  const featuredApps = [
    {
      icon: Bot,
      title: "Agentic workflows",
      description: "Help operators triage alerts faster and more accurately with generative AI.",
      capabilities: [
        "Generative AI-powered triage",
        "Operator assistance",
        "Faster alert processing",
        "Improved accuracy"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Radar,
      title: "Discovery",
      description: "Get a holistic view of your operations footprint across on-premises data centers and cloud.",
      capabilities: [
        "Holistic operations view",
        "On-premises discovery",
        "Cloud environment mapping",
        "Infrastructure visibility"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Route,
      title: "Service Mapping",
      description: "Map the relationships between IT components and business services in dynamic environments.",
      capabilities: [
        "Relationship mapping",
        "Business service context",
        "Dynamic environment support",
        "Component visualization"
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: FileX,
      title: "Certificate Management",
      description: "Discover, itemize, and proactively manage your TLS certificates.",
      capabilities: [
        "TLS certificate discovery",
        "Certificate itemization",
        "Proactive management",
        "Security compliance"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Firewall Audits and Reporting",
      description: "Track firewall policies and perform proactive audits on a single platform.",
      capabilities: [
        "Firewall policy tracking",
        "Proactive audit capabilities",
        "Single platform management",
        "Security reporting"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Network,
      title: "Service Graph Connectors",
      description: "Use certified integration partners to keep third-party data consistent.",
      capabilities: [
        "Certified integrations",
        "Third-party data consistency",
        "Partner connectivity",
        "Data synchronization"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Configuration Management Database (CMDB)",
      description: "Track the dependencies and relationships of supported IT services within a single system of action.",
      capabilities: [
        "Dependency tracking",
        "Relationship management",
        "Single system of action",
        "Service correlation"
      ],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: MonitorSpeaker,
      title: "Event Management",
      description: "Reduce event floods from monitoring tools and gain insight into business service health.",
      capabilities: [
        "Event flood reduction",
        "Monitoring tool integration",
        "Business service insights",
        "Health monitoring"
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Activity,
      title: "Metric Intelligence",
      description: "Analyze your IT infrastructure proactively to spot service degradation and reduce outages.",
      capabilities: [
        "Proactive analysis",
        "Service degradation detection",
        "Outage reduction",
        "Infrastructure monitoring"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Health Log Analytics",
      description: "Deliver uninterrupted digital services with real-time log data to solve problems quickly.",
      capabilities: [
        "Real-time log analysis",
        "Problem solving acceleration",
        "Digital service continuity",
        "Quick resolution"
      ],
      color: "from-emerald-500 to-lime-500"
    },
    {
      icon: Rocket,
      title: "Cloud Accelerate",
      description: "Speed cloud adoption with automated service delivery and continuous governance.",
      capabilities: [
        "Cloud adoption acceleration",
        "Automated service delivery",
        "Continuous governance",
        "Speed optimization"
      ],
      color: "from-lime-500 to-yellow-500"
    },
    {
      icon: Eye,
      title: "Service Observability",
      description: "Make data-driven decisions based on business impact.",
      capabilities: [
        "Data-driven decision making",
        "Business impact analysis",
        "Service visibility",
        "Performance monitoring"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  // Package Options (From ServiceNow)
  const packageOptions = [
    {
      icon: Eye,
      title: "ITOM Visibility",
      description: "Build a consistent foundation with a single system of action across your IT estate.",
      details: [
        "Discovery",
        "Service Mapping",
        "Certificate Management",
        "Firewall Audits and Reporting",
        "Service Graph Connectors",
        "CMDB",
        "Agent Client Collector"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "ITOM AIOps Professional",
      description: "Focus on business-impacting projects by reducing noise and shortening MTTR.",
      details: [
        "Event Management",
        "Metric Intelligence", 
        "Service Reliability Management",
        "All Visibility features",
        "Plus additional AIOps capabilities"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "ITOM AIOps Enterprise",
      description: "Move from reactive to proactive with built-in anomaly detection and automated remediation.",
      details: [
        "Health Log Analytics",
        "Cloud Accelerate",
        "Service Observability",
        "Synthetic Monitoring",
        "All Professional features",
        "Plus advanced automation"
      ],
      color: "from-pink-500 to-purple-500"
    }
  ];

  // Platform Capabilities (From ServiceNow)
  const platformCapabilities = [
    {
      icon: Database,
      title: "Single Data Model",
      description: "Say goodbye to manual data inputs, redundancy, and siloed tasks. Eliminate information silos with one data source for your enterprise.",
      details: [
        "Manual input elimination",
        "Redundancy reduction",
        "Siloed task elimination",
        "Single enterprise data source"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Work smarter and make better business decisions. Supercharge your workflows with machine learning and AI-powered experiences.",
      details: [
        "Smart decision making",
        "Workflow supercharging",
        "Machine learning integration",
        "AI-powered experiences"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Modern Mobile Experiences",
      description: "Deliver AI-powered technology experiences your operations and services teams will love. Keep users informed and engaged anytime, anywhere.",
      details: [
        "AI-powered mobile experiences",
        "Operations team engagement",
        "Anytime, anywhere access",
        "Intuitive mobile apps"
      ],
      color: "from-blue-500 to-cyan-500"
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
      color: "from-cyan-500 to-teal-500"
    }
  ];

  // Certified Integrations (From ServiceNow)
  const certifiedIntegrations = [
    {
      name: "AWS Integration",
      description: "Get visibility into your AWS services deployed in the cloud with a consolidated view of multicloud and hybrid deployments.",
      icon: Cloud,
      features: ["AWS service visibility", "Multicloud consolidation", "Hybrid deployment support", "Cloud resource management"],
      availability: "Certified integration"
    },
    {
      name: "Microsoft Azure Integration",
      description: "Use on-demand and schedule-based discovery to collect IaaS, PaaS, FaaS, and CaaS services for Azure and multicloud deployments.",
      icon: Building,
      features: ["Azure service discovery", "IaaS, PaaS, FaaS, CaaS support", "Multicloud integration", "Schedule-based collection"],
      availability: "Certified integration"
    },
    {
      name: "Kubernetes Integration",
      description: "Discover your containerized Kubernetes components to use for service mapping and tracking.",
      icon: Boxes,
      features: ["Kubernetes discovery", "Container component mapping", "Service tracking", "Containerized environment support"],
      availability: "Certified integration"
    },
    {
      name: "SolarWinds Integration",
      description: "Ingest SolarWinds alerts into event management to identify issues and restore services faster with noise suppression.",
      icon: AlertTriangle,
      features: ["Alert ingestion", "Issue identification", "Service restoration", "Noise suppression"],
      availability: "Certified integration"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow IT Operations Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow ITOM enables organizations to gain visibility across infrastructure and apps, maintain service health, and optimize cloud delivery and spend. It provides:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Visibility into multistack IT environment, on-premises to cloud</li>
            <li>Impact analysis on applications with automated alert triage</li>
            <li>AI agents to break down data silos</li>
            <li>IT infrastructure visibility in business service context</li>
            <li>Predictive AIOps powered by generative AI</li>
          </ul>
          <p className="mt-3 text-sm text-orange-600">
            <strong>Built on ServiceNow AI Platform</strong> for unified enterprise automation.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the main featured apps and capabilities of ITOM?",
      answer: (
        <div>
          <p className="mb-3">ITOM includes twelve core featured apps and capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Agentic workflows:</strong> Help operators triage alerts faster with generative AI</li>
            <li><strong>Discovery:</strong> Holistic view of operations footprint across on-premises and cloud</li>
            <li><strong>Service Mapping:</strong> Map relationships between IT components and business services</li>
            <li><strong>Certificate Management:</strong> Discover, itemize, and manage TLS certificates</li>
            <li><strong>Firewall Audits:</strong> Track firewall policies and perform proactive audits</li>
            <li><strong>Event Management:</strong> Reduce event floods and gain business service insights</li>
            <li><strong>Metric Intelligence:</strong> Analyze infrastructure to spot degradation and reduce outages</li>
            <li><strong>Health Log Analytics:</strong> Real-time log data for quick problem solving</li>
            <li><strong>Cloud Accelerate:</strong> Speed cloud adoption with automated service delivery</li>
            <li><strong>Service Observability:</strong> Make data-driven decisions based on business impact</li>
          </ul>
        </div>
      )
    },

    {
      question: "What are the ITOM package options and their differences?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow offers three ITOM packages:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-orange-600 mb-2">ITOM Visibility</h4>
              <p className="text-sm mb-2">Build a consistent foundation with single system of action across IT estate.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Discovery, Service Mapping, Certificate Management</li>
                <li>Firewall Audits, Service Graph Connectors</li>
                <li>CMDB, Agent Client Collector</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">ITOM AIOps Professional</h4>
              <p className="text-sm mb-2">Focus on business-impacting projects by reducing noise and shortening MTTR.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Visibility features plus:</li>
                <li>Event Management, Metric Intelligence</li>
                <li>Service Reliability Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-pink-600 mb-2">ITOM AIOps Enterprise</h4>
              <p className="text-sm mb-2">Move from reactive to proactive with built-in anomaly detection and automated remediation.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Professional features plus:</li>
                <li>Health Log Analytics, Cloud Accelerate</li>
                <li>Service Observability, Synthetic Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "What certified integrations are available with ITOM?",
      answer: (
        <div>
          <p className="mb-3">
            ITOM integrates easily with partner and third-party applications:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>AWS Integration:</strong> Visibility into AWS services with consolidated multicloud view</li>
            <li><strong>Microsoft Azure:</strong> On-demand discovery for IaaS, PaaS, FaaS, and CaaS services</li>
            <li><strong>Kubernetes:</strong> Discover containerized components for service mapping and tracking</li>
            <li><strong>SolarWinds:</strong> Ingest alerts into event management with noise suppression</li>
            <li><strong>Google Cloud Platform:</strong> Visibility into GCP resources and hybrid deployments</li>
            <li><strong>Puppet:</strong> Pull data into ServiceNow CMDB for infrastructure visibility</li>
            <li><strong>Infoblox:</strong> Import subnets and IP addresses securely</li>
          </ul>
          <p className="mt-3">
            All integrations provide seamless data flow and unified visibility across environments.
          </p>
        </div>
      )
    },

    {
      question: "How does ITOM help with AIOps and predictive analytics?",
      answer: (
        <div>
          <p className="mb-3">ITOM provides comprehensive AIOps capabilities through:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Predictive AIOps:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Minimize user impact and speed remediation with predictive capabilities</li>
                <li>Generative AI-powered analysis and resolution</li>
                <li>Automated alert triage and impact analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Agentic Workflows:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Help operators triage alerts faster and more accurately</li>
                <li>Generative AI-powered automation</li>
                <li>Intelligent guidance and suggested remediations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Anomaly Detection:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Stop chasing false positives and identify anomalies with less guesswork</li>
                <li>Analyze telemetry and log data using generative AI</li>
                <li>Reduce noise, predict issues, and automate resolution</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ITOM implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs vary based on package selection, environment complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ITOM Visibility Implementation:</strong> Starting from $250K - includes discovery, mapping, and basic visibility</li>
            <li><strong>AIOps Professional Implementation:</strong> $400K-$550K - includes event management, metric intelligence, and AIOps</li>
            <li><strong>AIOps Enterprise Implementation:</strong> $650K+ - full suite with health log analytics, observability, and advanced automation</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 8-12 months through outage reduction (60-80%), MTTR improvement (50-70%), and operational efficiency gains.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "ITOM ROI Calculator", url: "/itom-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ITOM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on package scope and environment complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ITOM Visibility:</strong> 18-22 weeks for discovery, mapping, and certificate management</li>
            <li><strong>AIOps Professional:</strong> 22-28 weeks including event management and metric intelligence</li>
            <li><strong>AIOps Enterprise:</strong> 26-34 weeks for complete suite with health log analytics and observability</li>
          </ul>
          <p className="mt-3">
            Our methodology: Environment Discovery (4-5 weeks) → Platform Configuration & Integration (12-16 weeks) → AIOps & Automation Setup (6-8 weeks) → Go-Live & Optimization (4-6 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ITOM support cloud and hybrid environments?",
      answer: (
        <div>
          <p className="mb-3">ITOM provides comprehensive cloud and hybrid environment support:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Multi-Cloud Discovery:</strong> Holistic view across on-premises, AWS, Azure, GCP, and hybrid environments</li>
            <li><strong>Cloud Accelerate:</strong> Speed cloud adoption with automated service delivery and continuous governance</li>
            <li><strong>Service Mapping:</strong> Map relationships between cloud and on-premises components</li>
            <li><strong>Container Support:</strong> Kubernetes discovery for containerized environments</li>
            <li><strong>Serverless Visibility:</strong> Support for FaaS and serverless architectures</li>
            <li><strong>Unified Management:</strong> Single platform for cloud and on-premises operations</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations typically see 60% faster cloud adoption and 80% improvement in hybrid visibility.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on ServiceNow content)
  const caseStudies = [
    {
      title: "NBA Uses AIOps to Elevate Fan Experience with 200M Logs Daily",
      client: "",
      industry: "Sports & Entertainment",
      challenge: "Analyzing massive volumes of log data (200M logs daily) while reducing alert noise and maintaining exceptional fan experience during live events",
      solution: "ServiceNow ITOM with AIOps capabilities for log analysis, alert reduction, and predictive issue resolution to support live NBA operations",
      results: [
        { metric: "200M", description: "Logs analyzed daily" },
        { metric: "99.999%", description: "Alert reduction achieved" },
        { metric: "Enhanced", description: "Fan experience delivery" },
        { metric: "Live Event", description: "Support optimization" }
      ],
      testimonial: "ServiceNow helps us constantly mature our capabilities and take our game up to the next level. AIOps enables us to analyze 200M logs daily while reducing alerts by 99.999%.",
      executive: "Mark Bennett, SVP, Head of Technology and Infrastructure Operations",
      logo: "/images/clients/nba-logo.png"
    },
    {
      title: "Munich Re Enhances Audit Capability with End-to-End CMDB Visibility",
      client: "",
      industry: "Financial Services",
      challenge: "Enhancing audit capability while providing end-to-end visibility of all IT assets companywide for regulatory compliance and operational excellence",
      solution: "ServiceNow ITOM with comprehensive CMDB implementation for complete IT asset visibility and audit capability enhancement",
      results: [
        { metric: "End-to-End", description: "IT asset visibility" },
        { metric: "Enhanced", description: "Audit capabilities" },
        { metric: "Companywide", description: "Asset coverage" },
        { metric: "Regulatory", description: "Compliance achievement" }
      ],
      testimonial: "ServiceNow ITOM transformed our audit capabilities by providing complete end-to-end visibility of all IT assets across our global operations.",
      executive: "Munich Re IT Operations Team",
      logo: "/images/clients/munich-re-logo.png"
    },
    {
      title: "Körber Supply Chain Improves Customer Support with Data-Driven Insights",
      client: "",
      industry: "Supply Chain Technology",
      challenge: "Improving customer support operations while reducing aged tickets and boosting mean time to resolution (MTTR) for supply chain operations",
      solution: "ServiceNow ITOM with service observability and data-driven insights for customer support optimization and operational efficiency",
      results: [
        { metric: "58%", description: "Reduction in aged tickets" },
        { metric: "32%", description: "MTTR improvement" },
        { metric: "Data-Driven", description: "Customer support insights" },
        { metric: "Operational", description: "Efficiency gains" }
      ],
      testimonial: "ServiceNow ITOM enabled us to achieve significant improvements in customer support with 58% reduction in aged tickets and 32% MTTR boost through data-driven insights.",
      executive: "Supply Chain Operations Team",
      logo: "/images/clients/korber-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>IT Operations Management - Complete ServiceNow ITOM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Gain visibility into your multistack IT environment, on-premises to cloud, and see the impact on your applications. Automate alert triage and impact analysis with AI agents to break down data silos."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss ITOM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss ITOM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-orange-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 overflow-x-hidden width-sm-fix max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8 px-2 sm:px-0">
                {/* ServiceNow Official Badge */}
                <div className="flex flex-wrap gap-1.5 sm:gap-4 mb-6 sm:mb-8">
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-orange-500/90 to-red-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-red-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-red-600 hover:to-pink-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Complete ITOM Suite
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    AIOps Ready
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 font-semibold">
                    IT Operations
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-orange-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-red-300">Gain visibility into your multistack IT environment,</span> on-premises to cloud, and see the impact on your applications.{' '}
                  <span className="font-semibold text-pink-300">Automate alert triage and impact analysis</span> with AI agents.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-700 hover:via-red-700 hover:to-pink-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(234, 88, 12, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get ITOM Implementation
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-pink-400 group-hover:text-pink-300" />
                      View Demos
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow IT Operations Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-orange-600 to-red-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                      <div className="text-xs text-orange-200">AIOps</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Predictive</div>
                      <div className="text-xs text-red-200">Analytics</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Monitor className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
                  Benefits of IT Operations
                </span>
                <br />
                <span className="text-gray-800">
                  Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Predict issues, prevent impact, and automate resolutions with comprehensive IT Operations Management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 capitalize">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                      <div className="text-sm font-semibold text-orange-700 mb-1">Impact Achieved</div>
                      <div className="text-orange-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
                  Featured Apps and Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  for IT Operations Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ITOM groups key applications and capabilities into packages that can scale with your operational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {featuredApps.slice(0, 8).map((app, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
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

            {/* Show More Apps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {featuredApps.slice(8).map((app, index) => (
                <div key={index + 8} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
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

        {/* Package Options Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                  Package Options
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable ITOM Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get the tools you need most with ITOM packages that meet your business needs and scale as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {packageOptions.map((pkg, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <pkg.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.details.map((detail, idx) => (
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

        {/* Platform Capabilities Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Built on ServiceNow
                </span>
                <br />
                <span className="text-gray-800">
                  AI Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ITOM includes AI-powered platform capabilities for shared data, intelligent automation, and modern mobile experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{capability.title}</h3>
                      <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-xs px-2 py-1 mt-1">
                        Platform Feature
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Platform Benefits:</h4>
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

        {/* Certified Integrations Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
                  Certified Integrations
                </span>
                <br />
                <span className="text-gray-800">
                  Partner Applications
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                IT Operations Management integrates easily with partner and third-party applications for comprehensive visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifiedIntegrations.map((integration, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <integration.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{integration.name}</h3>
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-2 py-1 mt-1">
                        {integration.availability}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{integration.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Integration Features:</h4>
                    <ul className="space-y-2">
                      {integration.features.map((feature, idx) => (
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
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About IT Operations Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about ITOM implementation, AIOps capabilities, and benefits.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg sm:rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
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
                        <div className="w-full h-px bg-gradient-to-r from-blue-500 to-cyan-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-900 via-teal-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-teal-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-cyan-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real ITOM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                See how companies like yours use IT Operations Management to predict issues, prevent outages, and resolve issues automatically.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-200 border border-cyan-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-200 border border-teal-400/30">
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
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 rounded-xl p-4 border-l-4 border-cyan-400">
                              <Quote className="h-6 w-6 text-cyan-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-cyan-300">— {study.executive}</p>
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
                                <span className="text-cyan-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-cyan-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Optimize Operations Productivity?
                </h2>
                <p className="text-lg md:text-xl text-cyan-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to discuss IT Operations Management implementation and transform your operational resilience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact ITOM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Product Brief
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-cyan-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">itom-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-teal-200 mx-auto mb-2" />
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
        }
      `}</style>
    </>
  );
}
