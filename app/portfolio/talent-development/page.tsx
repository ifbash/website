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
  ShieldIcon,
  UserIcon,
  HandHeart
} from "lucide-react";

export default function TalentDevelopmentPage() {
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
    "name": "Talent Development - ServiceNow AI-Powered Talent Management",
    "description": "Gain insights into the skills of your workforce. Empower your people to take ownership of their growth and development with AI and skills intelligence.",
    "applicationCategory": "Talent Development"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Talent Development and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Talent Development improves employee satisfaction by harnessing the power of AI and skills intelligence to proactively guide and develop talent while strategically planning for future workforce needs with comprehensive skills-based workforce management."
        }
      },
      {
        "@type": "Question", 
        "name": "What is Skills Intelligence and how does it enhance talent management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Skills Intelligence is an AI-driven platform that analyzes, aggregates, and normalizes skills data from various sources to offer comprehensive skills landscape overview, helping identify skill gaps, detect emerging trends, and assess talent needs for informed decision-making."
        }
      }
    ]
  };

  // Core Benefits (From ServiceNow Talent Development content)
  const benefits = [
    {
      icon: BarChart3,
      title: "Gain workforce insights",
      description: "Make smarter talent decisions with direct insights into employee development activities and workforce skills competencies with comprehensive analytics.",
      color: "from-amber-500 to-yellow-500",
      stats: "Data-driven talent decisions"
    },
    {
      icon: MessageCircle,
      title: "Foster informed career conversations",
      description: "Provide managers with AI-powered recommendations to drive better career development conversations and customized growth plans with intelligent guidance.",
      color: "from-yellow-500 to-orange-500",
      stats: "AI-powered career guidance"
    },
    {
      icon: TrendingUp,
      title: "Empower career growth",
      description: "Enable employees to take action on their career aspirations with skills-driven development plans. Provide self-service experience powered by AI search.",
      color: "from-orange-500 to-red-500",
      stats: "Skills-driven development"
    },
    {
      icon: Target,
      title: "Strategic workforce planning",
      description: "Proactively guide and develop talent while strategically planning for future workforce needs with comprehensive skills intelligence and analytics.",
      color: "from-red-500 to-pink-500",
      stats: "Future workforce readiness"
    }
  ];

  // Key Features (From ServiceNow Talent Development content)
  const keyFeatures = [
    {
      icon: UserCog,
      title: "Manager Hub",
      description: "Empower people leaders to support their teams effectively with comprehensive team insights, skill visibility, and AI-powered management recommendations.",
      capabilities: [
        "Team skills visibility",
        "Skills gap identification",
        "Development recommendations",
        "Performance insights"
      ],
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: TrendingUp,
      title: "Career Hub",
      description: "Enable employees to take action with their career growth through a centralized hub with personalized development plans and skill-driven opportunities.",
      capabilities: [
        "Personalized growth plans",
        "Career path mapping",
        "Skills development tracking",
        "Goal alignment tools"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Leader Hub",
      description: "Help organizational leaders truly understand their talent with comprehensive workforce analytics, skill metrics, and strategic talent insights.",
      capabilities: [
        "Workforce talent overview",
        "Skills metrics analysis",
        "Strategic talent planning",
        "Organizational capability mapping"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Layout,
      title: "Employee Center Pro",
      description: "Empower managers to better support employee needs with a single portal providing comprehensive access to talent development tools and resources.",
      capabilities: [
        "Unified talent portal",
        "Manager resource access",
        "Employee development tracking",
        "Cross-departmental visibility"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Skills Intelligence",
      description: "AI-driven platform that analyzes, aggregates, and normalizes skills data from various sources for comprehensive skills landscape understanding.",
      capabilities: [
        "AI-powered skills analysis",
        "Skills data normalization",
        "Gap identification",
        "Emerging trends detection"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users2,
      title: "Opportunity Marketplace",
      description: "Use AI algorithms to match employees with internal jobs aligned with their skills, aspirations, and preferences for enhanced internal mobility.",
      capabilities: [
        "AI-powered job matching",
        "Internal mobility promotion",
        "Skills-based recommendations",
        "Employee engagement enhancement"
      ],
      color: "from-rose-500 to-red-600"
    },
    {
      icon: HandHeart,
      title: "Mentoring",
      description: "Suggest mentors based on employees' skills, preferences, and expertise with easy-to-use scheduling tools for continuous engagement.",
      capabilities: [
        "AI-powered mentor matching",
        "Skills-based pairing",
        "Mentorship activity tracking",
        "Continuous engagement tools"
      ],
      color: "from-red-600 to-orange-600"
    },
    {
      icon: Briefcase,
      title: "Gigs & Projects",
      description: "Create opportunities for temporary help and skill development through project-based assignments and cross-functional collaboration.",
      capabilities: [
        "Project-based skill development",
        "Cross-functional assignments",
        "Temporary opportunity creation",
        "Skills application tracking"
      ],
      color: "from-orange-600 to-amber-600"
    }
  ];

  // Skills Intelligence Components
  const skillsIntelligenceComponents = [
    {
      title: "Skills Core",
      description: "Provides the latest industry-specific skills data that's updated regularly to help organizations adapt to market changes and stay relevant.",
      icon: Database,
      benefit: "Current industry skills data"
    },
    {
      title: "Skills Intelligence Administration",
      description: "Enables organizations to import, review, and update skill-related data, providing insights to facilitate critical business decisions.",
      icon: Settings,
      benefit: "Skills data management"
    },
    {
      title: "Skills Adoption",
      description: "Automatically delivers skill recommendations to employees, managers, and stakeholders within the context of their regular workflows.",
      icon: Zap,
      benefit: "Contextual skill recommendations"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities analyze job descriptions, performance reviews, and other text to extract and identify relevant skills automatically.",
      icon: MessageCircle,
      benefit: "Automated skills extraction"
    },
    {
      title: "Machine Learning Algorithms",
      description: "ML algorithms identify skill gaps, predict future talent needs, and recommend personalized learning paths for employee development.",
      icon: Bot,
      benefit: "Predictive talent insights"
    },
    {
      title: "Skills Taxonomy",
      description: "Comprehensive skills taxonomy with standardized skill definitions and hierarchies for consistent skills management across the organization.",
      icon: GitBranch, // FIXED: Changed from Tree to GitBranch
      benefit: "Standardized skills framework"
    }
  ];

  // Advanced Talent Capabilities
  const advancedCapabilities = [
    {
      title: "AI-Powered Growth Plans",
      description: "Leverage artificial intelligence to create personalized development plans that align with career aspirations and organizational needs.",
      icon: Rocket,
      benefit: "Personalized development"
    },
    {
      title: "Skills Gap Analysis",
      description: "Comprehensive analysis of current workforce skills versus future needs with actionable insights for closing identified gaps.",
      icon: Target,
      benefit: "Strategic skills planning"
    },
    {
      title: "Internal Talent Mobility",
      description: "Facilitate internal movement of talent through skills-based job matching and career progression pathways within the organization.",
      icon: Route,
      benefit: "Enhanced career mobility"
    },
    {
      title: "Learning Recommendations",
      description: "AI-driven learning content suggestions based on individual skills profiles, career goals, and organizational priorities.",
      icon: BookOpen,
      benefit: "Targeted learning experiences"
    },
    {
      title: "Performance Integration",
      description: "Integration with performance management systems to align skills development with performance outcomes and business objectives.",
      icon: BarChart3,
      benefit: "Performance-aligned development"
    },
    {
      title: "Succession Planning",
      description: "Skills-based succession planning tools that identify potential successors and development paths for critical organizational roles.",
      icon: Users,
      benefit: "Strategic succession readiness"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Talent Development and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Talent Development (formerly Employee Growth and Development) transforms talent management through AI and skills intelligence:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Improves employee satisfaction by harnessing the power of AI and skills intelligence for proactive talent development</li>
            <li>Proactively guides and develops talent while strategically planning for future workforce needs with comprehensive analytics</li>
            <li>Connects numerous, disconnected point solutions used for learning and development to guide employees and managers</li>
            <li>Uses AI-powered skills intelligence to recommend relevant trainings, mentors, and mobility opportunities</li>
            <li>Enables organizations to make smarter talent decisions, aligning workforce capabilities with business objectives</li>
          </ul>
          <p className="mt-3 text-sm text-amber-600">
            <strong>Built on ServiceNow AI Platform</strong> with Skills Intelligence engine providing dynamic, AI-powered recommendations for personalized talent development.
          </p>
        </div>
      )
    },
    
    {
      question: "What is Skills Intelligence and how does it enhance talent management?",
      answer: (
        <div>
          <p className="mb-3">Skills Intelligence is an AI-driven platform that revolutionizes how organizations understand and manage talent:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Advanced Technology Stack:</strong> Uses artificial intelligence, natural language processing, and machine learning to analyze skills data</li>
            <li><strong>Comprehensive Data Analysis:</strong> Analyzes, aggregates, and normalizes skills data from various sources for complete skills landscape overview</li>
            <li><strong>Skills Core:</strong> Provides latest industry-specific skills data updated regularly to adapt to market changes</li>
            <li><strong>Skills Administration:</strong> Enables organizations to import, review, and update skill-related data for critical business decisions</li>
            <li><strong>Skills Adoption:</strong> Automatically delivers skill recommendations to employees and managers within their regular workflows</li>
            <li><strong>Gap Identification:</strong> Helps identify skill gaps, detect emerging trends, and assess talent needs for competitive advantage</li>
            <li><strong>Workflow Integration:</strong> Guides employees on when to add and update skills while helping managers validate employee capabilities</li>
          </ul>
          <p className="mt-3">
            This comprehensive approach supports Talent Development applications to promote growth plans, learning, and talent initiatives for informed decision-making.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features and capabilities of ServiceNow Talent Development?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow Talent Development provides comprehensive talent management capabilities:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-yellow-600 mb-2">Core Hub Applications:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Manager Hub:</strong> Empower people leaders with team insights, skills visibility, and AI-powered recommendations</li>
                <li><strong>Career Hub:</strong> Enable employees to take action with career growth through centralized development planning</li>
                <li><strong>Leader Hub:</strong> Help organizational leaders understand talent with workforce analytics and strategic insights</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-600 mb-2">AI-Powered Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Skills Intelligence:</strong> AI-driven platform for comprehensive skills analysis and gap identification</li>
                <li><strong>Opportunity Marketplace:</strong> AI algorithms match employees with internal jobs aligned with skills and aspirations</li>
                <li><strong>Mentoring:</strong> AI-powered mentor matching based on skills, preferences, and expertise</li>
                <li><strong>Gigs & Projects:</strong> Create opportunities for skill development through project-based assignments</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does Manager Hub enhance people leadership and team management?",
      answer: (
        <div>
          <p className="mb-3">
            Manager Hub provides comprehensive tools and insights for effective people leadership:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Team Skills Visibility:</strong> Comprehensive view of team skills directly integrated into tools managers already use</li>
            <li><strong>Skills Gap Analysis:</strong> Identify team strengths, assess skills gaps, and understand how employee skills align with jobs</li>
            <li><strong>Development Recommendations:</strong> AI-powered recommendations for training and development that support team growth</li>
            <li><strong>Performance Insights:</strong> Review skills proficiencies and activities related to skills development for informed decision-making</li>
            <li><strong>Team Management Tools:</strong> Prioritize, filter employees by need, and gain better view of dispersed teams</li>
            <li><strong>Journey Integration:</strong> Access to personalized journeys for onboarding, career development, and team transitions</li>
            <li><strong>Mobile Access:</strong> Stay connected with teams from anywhere through Now Mobile app integration</li>
          </ul>
          <p className="mt-3">
            These capabilities help managers close skills gaps, assign work based on strengths, hire for relevant skills, and provide targeted development support.
          </p>
        </div>
      )
    },

    {
      question: "What is the Opportunity Marketplace and how does it support internal mobility?",
      answer: (
        <div>
          <p className="mb-3">Opportunity Marketplace revolutionizes internal talent mobility through AI-powered job matching:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">AI-Powered Matching:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Skills Alignment:</strong> Matches employees with internal jobs based on their current skills and capabilities</li>
                <li><strong>Aspirations Integration:</strong> Considers employee career aspirations and preferences for optimal job recommendations</li>
                <li><strong>High-Priority Roles:</strong> Prompts employees to explore high-priority organizational roles for faster fulfillment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Enhanced Employee Experience:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Search Functionality:</strong> Employees can search by specific job type and location preferences</li>
                <li><strong>Time Savings:</strong> Reduces time and effort when searching internal recruiting platforms</li>
                <li><strong>Engagement & Retention:</strong> Promotes employee engagement and retention through internal growth opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Talent Development implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, talent complexity, and skills intelligence requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Talent Development Standard:</strong> Starting from $220K - includes Manager Hub, Career Hub, basic skills intelligence, and core talent development workflows</li>
            <li><strong>Talent Development Professional:</strong> $350K-$520K - includes Leader Hub, Opportunity Marketplace, advanced skills intelligence, and comprehensive mentoring capabilities</li>
            <li><strong>Talent Development Enterprise:</strong> $600K+ - complete solution with full Skills Intelligence platform, AI-powered recommendations, and enterprise-scale talent management</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 8-14 months through employee engagement improvements (25%), internal mobility increases (40%), and skills development acceleration (35%). Skills Intelligence can reduce talent acquisition costs by 30%.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "Talent ROI Calculator", url: "/talent-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow Talent Development?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on talent program maturity and skills intelligence scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Talent Development Standard:</strong> 10-16 weeks for Manager Hub, Career Hub, basic skills intelligence, and core talent development processes</li>
            <li><strong>Talent Development Professional:</strong> 16-22 weeks including Leader Hub, Opportunity Marketplace, advanced skills analytics, and mentoring programs</li>
            <li><strong>Talent Development Enterprise:</strong> 22-28 weeks for complete solution with full Skills Intelligence platform, AI-powered recommendations, and enterprise integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Talent Strategy Assessment & Skills Analysis (3-4 weeks) → Core Platform & Hub Configuration (6-8 weeks) → Skills Intelligence Setup & Data Integration (4-6 weeks) → Advanced Features & AI Recommendations (3-5 weeks) → Go-Live & Change Management (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does Talent Development integrate with existing HR systems and learning platforms?",
      answer: (
        <div>
          <p className="mb-3">Talent Development provides extensive integration capabilities for comprehensive talent ecosystems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>HCM Integration:</strong> Seamless integration with Oracle HCM, SAP SuccessFactors, and other major HR systems for employee data synchronization</li>
            <li><strong>Learning Management Systems:</strong> Integration with learning platforms for automated training recommendations and skill development tracking</li>
            <li><strong>Performance Management:</strong> Connection with performance systems to align skills development with performance outcomes</li>
            <li><strong>Recruitment Platforms:</strong> Integration with ATS systems for skills-based hiring and internal mobility workflows</li>
            <li><strong>Employee Survey Tools:</strong> Integration with engagement platforms for comprehensive talent insights and feedback loops</li>
            <li><strong>Third-Party Skills Data:</strong> Import skills data from external sources and industry skills databases for comprehensive skills intelligence</li>
            <li><strong>Business Intelligence:</strong> Integration with BI tools for advanced talent analytics and strategic workforce planning</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations achieve unified talent management while maintaining existing HR technology investments and operational workflows.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on Talent Development success stories)
  const caseStudies = [
    {
      title: "Elara Caring Differentiates Caregiver Experience with AI-Powered Talent Development",
      client: "Elara Caring",
      industry: "Healthcare Services",
      challenge: "Healthcare services requiring differentiated caregiver experience with comprehensive talent development and skills management for improved patient care outcomes",
      solution: "ServiceNow Talent Development with Skills Intelligence, caregiver development workflows, and healthcare-specific talent management for enhanced patient experience",
      results: [
        { metric: "Caregiver", description: "Experience differentiated" },
        { metric: "Patient", description: "Experience improved" },
        { metric: "Healthcare", description: "Talent optimized" },
        { metric: "Skills", description: "Intelligence deployed" }
      ],
      testimonial: "ServiceNow allows us to differentiate the experience our caregivers have and, subsequently, the experience our patients have.",
      executive: "Chris Mate, Chief Information Officer",
      logo: "/images/clients/elara-caring-logo.png"
    },
    {
      title: "Global Technology Firm Implements Skills-Based Workforce Management with AI Intelligence",
      client: "Fortune 500 Technology Corporation",
      industry: "Enterprise Technology",
      challenge: "Complex technology operations requiring skills-based workforce management with AI-powered talent development and strategic skills planning across global teams",
      solution: "ServiceNow Talent Development with comprehensive Skills Intelligence, Manager Hub, and technology-specific talent optimization for global workforce development",
      results: [
        { metric: "Skills-Based", description: "Workforce management" },
        { metric: "AI-Powered", description: "Talent development" },
        { metric: "Global", description: "Teams optimized" },
        { metric: "Strategic", description: "Skills planning" }
      ],
      testimonial: "ServiceNow Talent Development with Skills Intelligence transformed our global workforce management with skills-based talent optimization and strategic development planning.",
      executive: "Chief Human Resources Officer",
      logo: "/images/clients/enterprise-tech-logo.png"
    },
    {
      title: "Financial Services Firm Enhances Internal Mobility with Opportunity Marketplace",
      client: "International Banking Group",
      industry: "Financial Services",
      challenge: "Financial services operations requiring enhanced internal mobility with AI-powered job matching and comprehensive career development for employee retention",
      solution: "ServiceNow Talent Development with Opportunity Marketplace, career development pathways, and financial services talent optimization for enhanced mobility",
      results: [
        { metric: "Internal", description: "Mobility enhanced" },
        { metric: "AI-Powered", description: "Job matching" },
        { metric: "Career", description: "Development optimized" },
        { metric: "Employee", description: "Retention improved" }
      ],
      testimonial: "ServiceNow Talent Development with Opportunity Marketplace significantly enhanced our internal mobility capabilities with AI-powered job matching and career development.",
      executive: "Head of Talent Management",
      logo: "/images/clients/banking-group-logo.png"
    },
    {
      title: "Manufacturing Company Deploys Comprehensive Skills Intelligence for Workforce Planning",
      client: "Global Manufacturing Enterprise",
      industry: "Industrial Manufacturing",
      challenge: "Manufacturing operations requiring comprehensive skills intelligence for strategic workforce planning and skills gap analysis across industrial operations",
      solution: "ServiceNow Talent Development with full Skills Intelligence platform, workforce analytics, and manufacturing-specific talent development for operational excellence",
      results: [
        { metric: "Skills", description: "Intelligence deployed" },
        { metric: "Workforce", description: "Planning optimized" },
        { metric: "Manufacturing", description: "Operations enhanced" },
        { metric: "Skills Gap", description: "Analysis completed" }
      ],
      testimonial: "ServiceNow Talent Development with comprehensive Skills Intelligence enabled strategic workforce planning and skills gap analysis across our global manufacturing operations.",
      executive: "VP of Human Resources",
      logo: "/images/clients/manufacturing-enterprise-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Talent Development - ServiceNow AI-Powered Talent Portfolio | ifBash</title>
        <meta
          name="description"
          content="Gain insights into the skills of your workforce. Empower your people to take ownership of their growth and development with AI and skills intelligence."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss Talent Development"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss Talent Development
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-amber-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-amber-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-orange-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-amber-500/90 to-yellow-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-amber-600 hover:to-yellow-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-500/90 to-orange-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-yellow-600 hover:to-orange-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered Talent
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Skills Intelligence
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 font-semibold">
                    Talent
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 font-semibold">
                      Development
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-yellow-300">Gain insights into the skills of your workforce.</span>{' '}
                  <span className="font-semibold text-orange-300">Empower your people to take ownership</span> of their growth and development with AI and skills intelligence.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 hover:from-amber-700 hover:via-yellow-700 hover:to-orange-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-400/20 to-orange-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get Talent Development
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-red-400 group-hover:text-red-300" />
                      Watch Video
                    </span>
                  </button>
                </div>

                {/* Skills Intelligence Badge */}
                <div className="bg-gradient-to-r from-amber-500/15 to-yellow-500/15 backdrop-blur-sm rounded-xl p-4 border border-amber-300/20">
                  <div className="flex items-center gap-3">
                    <Brain className="h-8 w-8 text-amber-300" />
                    <div>
                      <div className="text-lg font-bold text-white">AI-Powered Skills Intelligence Platform</div>
                      <div className="text-sm text-amber-200">Formerly Employee Growth and Development</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-amber-500/15 to-yellow-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Talent Development Platform"
                      className="w-full h-full object-cover"
                      gradient="from-amber-600 to-yellow-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Skills</div>
                      <div className="text-xs text-amber-200">Intelligence</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Talent</div>
                      <div className="text-xs text-yellow-200">Development</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Brain className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600">
                  Transform Talent
                </span>
                <br />
                <span className="text-gray-800">
                  Development Strategy
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Gain workforce insights, foster informed conversations, and empower career growth with AI-powered talent development and skills intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200">
                      <div className="text-sm font-semibold text-amber-700 mb-1">Key Value</div>
                      <div className="text-amber-600">{benefit.stats}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600">
                  Key Talent Features
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Development Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive talent development features from skills intelligence to career management with AI-powered recommendations and workforce analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

        {/* Skills Intelligence Components Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
                  Skills Intelligence Components
                </span>
                <br />
                <span className="text-gray-800">
                  AI-Driven Skills Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive Skills Intelligence platform with AI-powered analysis, data normalization, and contextual skill recommendations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsIntelligenceComponents.map((component, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <component.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {component.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {component.description}
                    </p>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                      <div className="text-sm font-semibold text-orange-700 mb-1">Key Benefit</div>
                      <div className="text-orange-600 text-lg font-bold">{component.benefit}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-rose-600">
                  Advanced Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise Talent Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Advanced talent capabilities including AI-powered growth plans, skills gap analysis, and comprehensive succession planning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 border border-red-200">
                      <div className="text-sm font-semibold text-red-700 mb-1">Key Benefit</div>
                      <div className="text-red-600 text-lg font-bold">{capability.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-pink-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-700">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Talent Development
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about Talent Development implementation, Skills Intelligence, and workforce transformation.
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-900 via-red-900 to-orange-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-red-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-rose-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-orange-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real Talent Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their talent development with AI-powered Skills Intelligence and comprehensive workforce management solutions.
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
                              <Badge className="bg-gradient-to-r from-rose-500/20 to-red-500/20 text-rose-200 border border-rose-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-200 border border-red-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-orange-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-rose-900/30 to-red-900/30 rounded-xl p-4 border-l-4 border-rose-400">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-rose-600 via-red-600 to-orange-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Talent Development?
                </h2>
                <p className="text-lg md:text-xl text-rose-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement comprehensive talent development with AI-powered Skills Intelligence and workforce optimization.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-rose-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Talent Experts
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
                    <Mail className="h-6 w-6 text-rose-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">talent-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-orange-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Watch Video</p>
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
