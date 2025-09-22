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

export default function SecurityIncidentResponsePage() {
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
    "name": "Security Incident Response (SIR) - ServiceNow Security Incident Response Implementation",
    "description": "Respond rapidly to evolving threats in your organization with Security Incident Response. Optimize and orchestrate your enterprise security operations with MITRE ATT&CK integration.",
    "applicationCategory": "Security Incident Response"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Security Incident Response (SIR) and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow SIR manages the lifecycle of security incidents from initial analysis to containment, eradication, and recovery with automated workflows, MITRE ATT&CK integration, and collaborative security operations."
        }
      },
      {
        "@type": "Question", 
        "name": "How does MITRE ATT&CK framework integration enhance SIR capabilities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MITRE ATT&CK integration provides advanced context by mapping tactics, techniques, and procedures to incidents, enabling faster analysis, detection coverage insights, and improved threat hunting capabilities."
        }
      }
    ]
  };

  // Core Benefits (FIXED: Changed from crimson to standard red colors)
  const benefits = [
    {
      icon: Target,
      title: "Manage threat exposure proactively",
      description: "Know your security posture and quickly prioritize high-impact threats in real time and at scale with comprehensive visibility.",
      color: "from-red-500 to-red-600",
      stats: "Proactive threat management"
    },
    {
      icon: Shield,
      title: "Maintain cyber resilience",
      description: "React faster with collaborative workflows and repeatable processes across security, risk, and IT teams for unified response.",
      color: "from-red-600 to-rose-500",
      stats: "Enhanced cyber resilience"
    },
    {
      icon: Brain,
      title: "Know your response strategy",
      description: "Increase the efficiency, effectiveness, and expertise of your teams, while improving processes with intelligent automation.",
      color: "from-rose-500 to-pink-500",
      stats: "Strategic response planning"
    },
    {
      icon: TrendingUp,
      title: "Improve performance continuously",
      description: "Enhance your security posture and performance with visibility into key metrics and indicators through advanced analytics.",
      color: "from-pink-500 to-purple-500",
      stats: "Continuous improvement"
    }
  ];

  // Key Features (FIXED: Changed from crimson to standard red colors)
  const keyFeatures = [
    {
      icon: Workflow,
      title: "Workflow Management",
      description: "Automate assignments and coordinate incident prioritization and remediation across IT and security teams with intelligent orchestration.",
      capabilities: [
        "Automated assignment workflows",
        "Incident prioritization logic",
        "Cross-team coordination",
        "Intelligent orchestration"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Layout,
      title: "Operations Dashboard",
      description: "See how your SOC is performing and where you need to evolve your teams and response workflows with comprehensive analytics.",
      capabilities: [
        "SOC performance visibility",
        "Team evolution insights",
        "Workflow optimization data",
        "Real-time analytics"
      ],
      color: "from-red-600 to-rose-500"
    },
    {
      icon: AlertTriangle,
      title: "Major Security Incident Management",
      description: "Respond collaboratively to critical security incidents such as ransomware, data breaches, and other targeted attacks.",
      capabilities: [
        "Critical incident response",
        "Collaborative coordination",
        "Ransomware response",
        "Data breach management"
      ],
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Radar,
      title: "MITRE ATT&CK Framework",
      description: "Stay ahead of attackers with the MITRE ATT&CK framework integration, providing advanced context and threat intelligence.",
      capabilities: [
        "Tactic and technique mapping",
        "Advanced threat context",
        "Attack phase understanding",
        "Threat hunting enhancement"
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Anticipate trends, prioritize resources, and continuously improve with real-time analytics and comprehensive security metrics.",
      capabilities: [
        "Trend analysis and prediction",
        "Resource prioritization",
        "Performance measurement",
        "Continuous improvement insights"
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Bug,
      title: "Vulnerability Response Integration",
      description: "Align business context with asset, risk, and threat intelligence for swift response to security vulnerabilities and exposures.",
      capabilities: [
        "Business context alignment",
        "Asset risk assessment",
        "Threat intelligence integration",
        "Swift vulnerability response"
      ],
      color: "from-violet-500 to-indigo-500"
    },
    {
      icon: FileX,
      title: "Data Loss Prevention (DLP) Incident Response",
      description: "Integrate SecOps with your data loss prevention tool to reduce exposure and automate response to data security incidents.",
      capabilities: [
        "DLP tool integration",
        "Data exposure reduction",
        "Automated DLP response",
        "Data security monitoring"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Users2,
      title: "Collaborative Incident Response",
      description: "Enable collaborative workflows across security, IT, and risk teams with unified communication and coordinated response processes.",
      capabilities: [
        "Cross-team collaboration",
        "Unified communication",
        "Coordinated response processes",
        "Stakeholder alignment"
      ],
      color: "from-blue-500 to-sky-500"
    }
  ];

  // Incident Response Phases (FIXED: Changed from crimson to standard red colors)
  const incidentPhases = [
    {
      phase: "Identification",
      description: "Detect and confirm the security threat with automated detection and intelligence-driven analysis.",
      icon: Search,
      activities: [
        "Threat detection and confirmation",
        "Initial impact assessment", 
        "Stakeholder notification",
        "Evidence preservation"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      phase: "Containment",
      description: "Stop the spread and isolate affected systems with coordinated containment strategies and rapid response.",
      icon: Lock,
      activities: [
        "Threat isolation and containment",
        "System quarantine procedures",
        "Network segmentation",
        "Short-term mitigation"
      ],
      color: "from-red-600 to-rose-500"
    },
    {
      phase: "Eradication",
      description: "Remove the root cause including malware, exploits, and vulnerabilities with comprehensive remediation.",
      icon: Zap,
      activities: [
        "Root cause elimination",
        "Malware removal",
        "Vulnerability patching",
        "System hardening"
      ],
      color: "from-rose-500 to-pink-500"
    },
    {
      phase: "Recovery",
      description: "Restore normal operations safely with validated system restoration and enhanced monitoring.",
      icon: RefreshCw,
      activities: [
        "System restoration",
        "Service validation",
        "Enhanced monitoring",
        "Gradual service return"
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      phase: "Post-Incident Review",
      description: "Document lessons learned, identify gaps, and implement improvements for future incident response.",
      icon: FileText,
      activities: [
        "Lessons learned documentation",
        "Gap identification",
        "Process improvements",
        "Team training updates"
      ],
      color: "from-purple-500 to-violet-500"
    }
  ];

  // Advanced Capabilities
  const advancedCapabilities = [
    {
      title: "SIEM Integration",
      description: "Seamlessly integrate with popular SIEM platforms like Splunk, IBM QRadar, and ArcSight for comprehensive security event correlation.",
      icon: Network,
      benefit: "Unified security visibility"
    },
    {
      title: "Automated Response Playbooks",
      description: "Deploy customizable response playbooks for common incidents including malware infections, phishing attacks, and brute-force attempts.",
      icon: BookOpen,
      benefit: "Standardized incident response"
    },
    {
      title: "Threat Intelligence Integration",
      description: "Enrich incidents with threat intelligence data from multiple sources for enhanced context and decision-making capabilities.",
      icon: Brain,
      benefit: "Intelligence-driven response"
    },
    {
      title: "Machine Learning Analytics",
      description: "Leverage AI and machine learning algorithms to correlate alerts, identify potential threats, and prioritize incident response.",
      icon: Bot,
      benefit: "AI-powered threat detection"
    },
    {
      title: "Evidence Chain of Custody",
      description: "Maintain complete evidence chain of custody for forensic investigations and legal defensibility in security incidents.",
      icon: Scale,
      benefit: "Legal compliance assurance"
    },
    {
      title: "Real-Time Collaboration",
      description: "Enable real-time collaboration across security, IT, and business stakeholders with integrated communication and coordination tools.",
      icon: MessageSquare,
      benefit: "Enhanced team coordination"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Security Incident Response (SIR) and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Security Incident Response (SIR) manages the complete lifecycle of security incidents:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Manages security incidents from initial analysis to containment, eradication, and recovery phases</li>
            <li>Automates assignments and coordinates incident prioritization across IT and security teams</li>
            <li>Provides collaborative workflows and repeatable processes for unified response across teams</li>
            <li>Integrates with third-party security solutions for enterprise-wide security posture visibility</li>
            <li>Offers analytics-driven dashboards and comprehensive reporting for continuous improvement</li>
          </ul>
          <p className="mt-3 text-sm text-red-600">
            <strong>Built on ServiceNow AI Platform</strong> with MITRE ATT&CK integration for advanced threat context.
          </p>
        </div>
      )
    },
    
    {
      question: "How does MITRE ATT&CK framework integration enhance SIR capabilities?",
      answer: (
        <div>
          <p className="mb-3">MITRE ATT&CK integration transforms SIR capabilities with structured threat intelligence:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Tactics and Techniques Mapping:</strong> Automatically or manually relate MITRE techniques to security incidents and observables</li>
            <li><strong>Attack Phase Understanding:</strong> Leverage embedded MITRE ATT&CK view to understand potential attack phases and related TTPs</li>
            <li><strong>Accelerated Analysis:</strong> Speed up security incident analysis by leveraging mapping of tactics, techniques, and procedures</li>
            <li><strong>Detection Coverage Insights:</strong> Obtain visibility into MITRE technique detection coverage across security tools</li>
            <li><strong>Enhanced Threat Hunting:</strong> Improve threat hunting capabilities by leveraging relationships between TTPs, incidents, and observables</li>
            <li><strong>Investigative Guidance:</strong> Determine additional investigative actions and forensic evidence to collect based on threat context</li>
          </ul>
          <p className="mt-3">
            This integration helps security analysts understand adversary intent and develop more effective response strategies.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow SIR?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SIR provides comprehensive security incident response capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Core Response Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Workflow Management:</strong> Automated assignments and intelligent incident prioritization</li>
                <li><strong>Operations Dashboard:</strong> SOC performance visibility and team evolution insights</li>
                <li><strong>Major Incident Management:</strong> Collaborative response to critical security events</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-rose-600 mb-2">Advanced Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>MITRE ATT&CK Integration:</strong> Advanced threat context and attack framework mapping</li>
                <li><strong>Performance Analytics:</strong> Real-time analytics for trend analysis and resource prioritization</li>
                <li><strong>Vulnerability Response:</strong> Business context alignment with asset and risk intelligence</li>
                <li><strong>DLP Integration:</strong> Data loss prevention incident response automation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow SIR handle major security incidents like ransomware and data breaches?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow SIR provides specialized major security incident management capabilities:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Dedicated Workspace:</strong> Specialized workspace for managing high-impact security incidents with coordinated response</li>
            <li><strong>Crisis Response Coordination:</strong> Structured workflows for coordinating activities across security, IT, and business teams</li>
            <li><strong>Escalation Management:</strong> Automated escalation paths based on incident severity and business impact assessment</li>
            <li><strong>Communication Templates:</strong> Pre-built communication templates for internal stakeholders and external notifications</li>
            <li><strong>Evidence Management:</strong> Complete chain of custody for forensic evidence and legal defensibility</li>
            <li><strong>Recovery Planning:</strong> Structured recovery processes with validation checkpoints and rollback procedures</li>
            <li><strong>Post-Incident Analysis:</strong> Comprehensive post-incident review processes with lessons learned documentation</li>
          </ul>
          <p className="mt-3">
            This approach ensures coordinated, effective response to critical security events while maintaining business continuity.
          </p>
        </div>
      )
    },

    {
      question: "What are the typical phases of security incident management in ServiceNow SIR?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SIR supports the complete incident response lifecycle with structured phases:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">1. Identification Phase:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Threat detection and confirmation with automated detection capabilities</li>
                <li>Initial impact assessment and stakeholder notification processes</li>
                <li>Evidence preservation and documentation procedures</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">2. Containment Phase:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Threat isolation and system quarantine procedures</li>
                <li>Network segmentation and short-term mitigation strategies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">3. Eradication & Recovery Phases:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Root cause elimination, malware removal, and vulnerability patching</li>
                <li>System restoration with validation and enhanced monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">4. Post-Incident Review:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Lessons learned documentation and process improvement implementation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Security Incident Response implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, security complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SIR Standard Implementation:</strong> Starting from $300K - includes incident response workflows, basic MITRE integration, and standard SIEM connectivity for mid-size organizations</li>
            <li><strong>SIR Professional Implementation:</strong> $450K-$650K - includes major incident management, advanced analytics, and comprehensive threat intelligence integration for large enterprises</li>
            <li><strong>SIR Enterprise Suite:</strong> $700K+ - complete solution with advanced SOAR capabilities, extensive integrations, and custom workflow development</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through incident response acceleration (50%), analyst productivity gains (40%), and threat detection improvements (35%). 6X faster processing possible with automation.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "SIR ROI Calculator", url: "/sir-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow SIR?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on security complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SIR Standard:</strong> 12-16 weeks for incident response workflows, MITRE ATT&CK integration, and basic SIEM connectivity</li>
            <li><strong>SIR Professional:</strong> 16-22 weeks including major incident management, advanced analytics, and comprehensive threat intelligence integration</li>
            <li><strong>SIR Enterprise Suite:</strong> 22-28 weeks for complete solution with advanced SOAR capabilities, extensive integrations, and custom development</li>
          </ul>
          <p className="mt-3">
            Our methodology: Security Assessment & Incident Analysis (2-3 weeks) → Core SIR Platform & Workflow Configuration (6-10 weeks) → MITRE ATT&CK & Intelligence Integration (4-6 weeks) → SIEM Integration & Testing (3-5 weeks) → Go-Live & Security Team Training (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow SIR integrate with existing security tools and SIEM platforms?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SIR provides extensive integration capabilities for security ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SIEM Platforms:</strong> Native integration with Splunk, IBM QRadar, ArcSight, Sumo Logic for comprehensive event correlation</li>
            <li><strong>Endpoint Security:</strong> Integration with EDR/XDR platforms like CrowdStrike, SentinelOne for endpoint incident data</li>
            <li><strong>Threat Intelligence:</strong> Integration with TIP platforms and feeds for incident enrichment and context</li>
            <li><strong>Vulnerability Management:</strong> Integration with vulnerability scanners for coordinated vulnerability response</li>
            <li><strong>Email Security:</strong> Integration for phishing incident response and email threat analysis</li>
            <li><strong>Network Security:</strong> Integration with firewalls, IPS, and network monitoring tools</li>
            <li><strong>SOAR Platforms:</strong> Native SOAR capabilities and third-party SOAR integration for orchestration</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations maintain existing security tool investments while gaining unified incident response orchestration and AI-powered capabilities.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on SIR success stories)
  const caseStudies = [
    {
      title: "Global Enterprise Achieves 6X Faster Security Incident Processing",
      client: "Fortune 500 Technology Company",
      industry: "Enterprise Technology",
      challenge: "Complex security incident response processes requiring faster processing times and improved coordination across security and IT teams with multiple tool integrations",
      solution: "ServiceNow Security Incident Response with automated workflows, MITRE ATT&CK integration, and comprehensive SIEM connectivity for unified response",
      results: [
        { metric: "6X", description: "Faster incident processing" },
        { metric: "Automated", description: "Response playbooks" },
        { metric: "MITRE", description: "ATT&CK integration" },
        { metric: "Unified", description: "Security operations" }
      ],
      testimonial: "ServiceNow SIR delivered 6X faster security incident processing through automation and integration, transforming our security operations effectiveness.",
      executive: "Chief Information Security Officer",
      logo: "/images/clients/enterprise-tech-logo.png"
    },
    {
      title: "Healthcare Organization Strengthens Cyber Resilience with SIR",
      client: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Need to protect patient data and healthcare systems while maintaining HIPAA compliance and ensuring rapid incident response capabilities",
      solution: "ServiceNow Security Incident Response with healthcare-specific workflows, compliance automation, and coordinated incident management",
      results: [
        { metric: "Enhanced", description: "Cyber resilience" },
        { metric: "HIPAA", description: "Compliance maintained" },
        { metric: "Rapid", description: "Incident response" },
        { metric: "Patient Data", description: "Protection assured" }
      ],
      testimonial: "ServiceNow SIR enhanced our cyber resilience while maintaining HIPAA compliance, enabling us to protect patient data with confidence.",
      executive: "VP of Information Security",
      logo: "/images/clients/healthcare-system-logo.png"
    },
    {
      title: "Financial Services Firm Implements Major Security Incident Management",
      client: "International Financial Services",
      industry: "Financial Services",
      challenge: "Critical need for coordinated response to major security incidents including potential data breaches and financial fraud attempts",
      solution: "ServiceNow SIR with Major Security Incident Management, crisis response coordination, and regulatory compliance workflows",
      results: [
        { metric: "Major Incident", description: "Management deployed" },
        { metric: "Coordinated", description: "Crisis response" },
        { metric: "Regulatory", description: "Compliance maintained" },
        { metric: "Financial", description: "Fraud prevention" }
      ],
      testimonial: "ServiceNow SIR Major Security Incident Management enables coordinated crisis response while maintaining regulatory compliance in our financial operations.",
      executive: "Chief Risk Officer",
      logo: "/images/clients/financial-services-logo.png"
    },
    {
      title: "Manufacturing Company Automates Security Operations with AI Integration",
      client: "Global Manufacturing Corporation",
      industry: "Industrial Manufacturing",
      challenge: "Industrial systems requiring automated security operations with AI-powered threat detection and coordinated incident response across OT and IT environments",
      solution: "ServiceNow SIR with AI automation, machine learning analytics, and OT/IT security integration for comprehensive industrial security",
      results: [
        { metric: "AI-Powered", description: "Threat detection" },
        { metric: "Automated", description: "Security operations" },
        { metric: "OT/IT", description: "Security integration" },
        { metric: "Industrial", description: "System protection" }
      ],
      testimonial: "ServiceNow SIR with AI integration automated our security operations, enabling comprehensive protection across our industrial and IT environments.",
      executive: "Director of Cybersecurity",
      logo: "/images/clients/manufacturing-corp-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Security Incident Response (SIR) - ServiceNow SIR Portfolio | ifBash</title>
        <meta
          name="description"
          content="Respond rapidly to evolving threats in your organization with Security Incident Response. Optimize and orchestrate your enterprise security operations with MITRE ATT&CK integration."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button - FIXED: Changed from crimson to red */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-red-600 to-rose-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss SIR Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss SIR Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-red-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section - FIXED: Changed from crimson to red gradients */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-rose-900 to-pink-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-rose-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements - FIXED: Changed from crimson to red */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-rose-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge - FIXED: Changed from crimson to red */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-red-500/90 to-rose-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-red-600 hover:to-rose-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-rose-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-rose-600 hover:to-pink-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered SIR
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    MITRE ATT&CK
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 font-semibold">
                    Security Incident
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 font-semibold">
                      Response (SIR)
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-rose-300">Respond rapidly to evolving threats</span> and{' '}
                  <span className="font-semibold text-pink-300">optimize your enterprise security operations</span> with MITRE ATT&CK integration.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-700 hover:via-rose-700 hover:to-pink-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-rose-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get SIR Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-purple-400 group-hover:text-purple-300" />
                      Get Data Sheet
                    </span>
                  </button>
                </div>

                {/* MITRE ATT&CK Badge - FIXED: Changed from crimson to red */}
                <div className="bg-gradient-to-r from-red-500/15 to-rose-500/15 backdrop-blur-sm rounded-xl p-4 border border-red-300/20">
                  <div className="flex items-center gap-3">
                    <Radar className="h-8 w-8 text-red-300" />
                    <div>
                      <div className="text-lg font-bold text-white">MITRE ATT&CK Integration</div>
                      <div className="text-sm text-red-200">Advanced threat context and intelligence</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual - FIXED: Changed from crimson to red */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-red-500/15 to-rose-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Security Incident Response (SIR) Platform"
                      className="w-full h-full object-cover"
                      gradient="from-red-600 to-rose-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Incident</div>
                      <div className="text-xs text-red-200">Response</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">MITRE</div>
                      <div className="text-xs text-rose-200">ATT&CK</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons - FIXED: Changed from crimson to red */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-red-600 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                      <AlertTriangle className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - FIXED: Changed from crimson to red */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
                  Transform Security
                </span>
                <br />
                <span className="text-gray-800">
                  Incident Response
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Optimize and orchestrate your enterprise security operations with collaborative workflows and intelligent automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-4 border border-red-200">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
                  Key SIR Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Incident Response
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive security incident response features from workflow automation to MITRE ATT&CK integration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-rose-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Incident Response Phases Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600">
                  Incident Response Phases
                </span>
                <br />
                <span className="text-gray-800">
                  Structured Response Methodology
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Complete incident response lifecycle management from identification to post-incident review with automated workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-8">
              {incidentPhases.map((phase, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {phase.phase}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {phase.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {activity}
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Security Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced security incident response capabilities including SIEM integration, AI analytics, and automated playbooks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200">
                      <div className="text-sm font-semibold text-indigo-700 mb-1">Key Benefit</div>
                      <div className="text-indigo-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Security Incident Response
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about SIR implementation, MITRE ATT&CK integration, and incident response transformation.
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
                        <div className="w-full h-px bg-gradient-to-r from-blue-500 to-sky-500 mb-4" />
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-sky-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real SIR Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their security incident response with AI-powered SIR solutions.
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
                              <Badge className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-sky-200 border border-sky-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border border-blue-400/30">
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

                            <div className="bg-gradient-to-r from-sky-900/30 to-blue-900/30 rounded-xl p-4 border-l-4 border-sky-400">
                              <Quote className="h-6 w-6 text-sky-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-sky-300">— {study.executive}</p>
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
                                <span className="text-sky-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-sky-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-sky-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Security Incident Response?
                </h2>
                <p className="text-lg md:text-xl text-sky-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive security incident response with MITRE ATT&CK integration and AI-powered automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-sky-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact SIR Experts
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
                    <Mail className="h-6 w-6 text-sky-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">sir-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
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
      `}</style>
    </>
  );
}
