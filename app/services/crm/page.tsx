import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  BarChart3,
  Lightbulb,
  Rocket,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Award,
  Brain,
  UserCheck,
  MessageCircle,
  Star,
  Quote,
  Clock,
  DollarSign,
  Globe,
  Phone,
  Mail,
  Calendar,
  FileText,
  Settings,
  Layers,
  Briefcase,
  ChartLine,
  BookOpen,
  Database,
  UserPlus,
  PieChart,
  Filter,
  Search,
  Bell,
  Smartphone,
  Headphones,
  TrendingDown,
  Activity,
  Handshake,
  RefreshCw,
  Lock,
  Cloud,
  BarChart2
} from "lucide-react";

export default function ServiceNowCRMPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    "name": "ServiceNow CRM Services - Customer Service Management Solutions | IfBash",
    "alternateName": "ServiceNow CSM Implementation Services",
    "description": "Expert ServiceNow CRM and Customer Service Management implementation services. Sales automation, customer portal, case management, omnichannel support. Certified CSM consultants.",
    "provider": {
      "@type": "Organization",
      "name": "IfBash",
      "url": "https://ifbash.com",
      "logo": "https://ifbash.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/ifbash",
        "https://twitter.com/ifbash"
      ]
    },
    "serviceType": [
      "ServiceNow CRM",
      "Customer Service Management",
      "Sales Automation",
      "Customer Portal Development",
      "Case Management Implementation",
      "Omnichannel Support"
    ],
    "areaServed": {
      "@type": "Place", 
      "name": "Global"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "ServiceNow CSM Implementation",
        "description": "Complete Customer Service Management platform implementation with customization and integration",
        "category": "CRM Services"
      },
      {
        "@type": "Offer",
        "name": "Customer Portal Development",
        "description": "Self-service customer portals with knowledge base and case management capabilities",
        "category": "Portal Development"
      },
      {
        "@type": "Offer",
        "name": "Omnichannel Support Setup",
        "description": "Multi-channel customer support integration including chat, email, phone, and social media",
        "category": "Support Solutions"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
      "bestRating": "5"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana", 
      "addressCountry": "IN"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Customer Service Management (CSM)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow CSM is a comprehensive customer service platform that enables organizations to deliver exceptional customer experiences through case management, self-service portals, knowledge management, omnichannel support, and automated workflows."
        }
      },
      {
        "@type": "Question",
        "name": "How long does ServiceNow CRM implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow CRM implementation typically takes 3-6 months depending on complexity, customization requirements, integrations, and organizational readiness. We provide detailed project timelines during the planning phase."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of ServiceNow CRM over traditional CRM systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow CRM offers unified platform integration, advanced automation, AI-powered insights, seamless ITSM integration, robust reporting, and scalable architecture that traditional CRM systems often lack."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ServiceNow CRM customization services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive ServiceNow CRM customization including custom workflows, forms, fields, business rules, UI policies, client scripts, and integration with third-party systems to meet specific business requirements."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow CRM Services | Customer Service Management Implementation | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow CRM & CSM implementation services in Hyderabad & globally. Customer portals, case management, sales automation, omnichannel support. Certified consultants. Free consultation."
        />
        <meta 
          name="keywords" 
          content="ServiceNow CRM services, ServiceNow CSM implementation, Customer Service Management, ServiceNow customer portal, case management ServiceNow, omnichannel support, sales automation ServiceNow, CRM implementation Hyderabad, ServiceNow integration, customer experience platform"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow CRM Services | Customer Service Management | IfBash" />
        <meta property="og:description" content="Expert ServiceNow CRM and CSM implementation services. Customer portals, case management, sales automation, omnichannel support. Transform customer experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-crm-services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ServiceNow CRM Services | IfBash" />
        <meta name="twitter:description" content="Transform customer experience with ServiceNow CRM. Expert CSM implementation, customer portals, case management, omnichannel support." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-crm-services" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1920&q=80" as="image" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-900/75 to-purple-900/85 z-5" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                <Badge variant="outline" className="text-blue-300 border-blue-400/40 bg-blue-900/30 px-3 py-1.5 md:px-4 md:py-2 text-sm">
                  ServiceNow CRM Specialist
                </Badge>
              </div>
              <Badge variant="outline" className="text-green-300 border-green-400/40 bg-green-900/30 px-3 py-1.5 md:px-4 md:py-2 text-sm w-fit">
                150+ CRM Implementations
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  ServiceNow CRM Services
                  <span className="block text-blue-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                    Customer Experience Excellence
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed mb-6 md:mb-8">
                  Transform customer relationships with comprehensive ServiceNow CRM and Customer Service Management solutions. From case management to omnichannel support, deliver exceptional customer experiences at scale.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                    <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Get CRM Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                    <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Download CRM Guide
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Free CRM Assessment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Certified CSM Experts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>24/7 Support Included</span>
                  </div>
                </div>
              </div>

              {/* Key Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <MessageCircle className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">50%</div>
                  <div className="text-slate-300 text-sm">Faster Case Resolution</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <TrendingUp className="h-10 w-10 md:h-12 md:w-12 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">85%</div>
                  <div className="text-slate-300 text-sm">Customer Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Clock className="h-10 w-10 md:h-12 md:w-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">3-6</div>
                  <div className="text-slate-300 text-sm">Months Implementation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Award className="h-10 w-10 md:h-12 md:w-12 text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">95%</div>
                  <div className="text-slate-300 text-sm">Project Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is ServiceNow CRM */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <Badge className="bg-blue-100 text-blue-800 mb-4">ServiceNow CRM</Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                    What is ServiceNow Customer Service Management?
                  </h2>
                </div>
                
                <div className="prose prose-lg text-slate-700 space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed">
                    <strong>ServiceNow Customer Service Management (CSM)</strong> is a comprehensive platform that transforms how organizations deliver customer service through intelligent case management, self-service portals, knowledge management, and omnichannel support capabilities.
                  </p>
                  <p className="leading-relaxed">
                    Unlike traditional CRM systems, ServiceNow CSM integrates seamlessly with ITSM processes, provides <strong>AI-powered insights</strong>, enables <strong>automated workflows</strong>, and delivers a unified customer experience across all touchpoints with advanced reporting and analytics.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>case routing</strong> and <strong>SLA management</strong> to <strong>customer portals</strong> and <strong>field service management</strong>, ServiceNow CSM provides enterprise-grade customer service capabilities that scale with your business growth.
                  </p>
                </div>
                
                {/* Key CRM Features */}
                <div className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Case Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Customer Portals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Omnichannel Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">AI-Powered Automation</span>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Explore CRM Capabilities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80"
                  alt="ServiceNow CRM dashboard showing customer service management interface with case management and analytics"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="eager"
                  width="800"
                  height="600"
                />
                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-blue-600 text-white p-3 md:p-4 rounded-xl shadow-lg">
                  <div className="text-xl md:text-2xl font-bold">150+</div>
                  <div className="text-xs md:text-sm">CRM Implementations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CRM Services */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-indigo-100 text-indigo-800 mb-4">Our CRM Services</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Comprehensive ServiceNow CRM Solutions
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                End-to-end ServiceNow CRM services designed to transform customer experience and drive business growth
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Case Management Implementation",
                  description: "Intelligent case routing, SLA management, escalation workflows, and automated resolution processes for efficient customer service operations.",
                  features: ["Smart Case Routing", "SLA Management", "Escalation Workflows", "Performance Analytics"],
                  color: "blue"
                },
                {
                  icon: Globe,
                  title: "Customer Portal Development", 
                  description: "Self-service portals with knowledge base integration, ticket submission, status tracking, and personalized customer experience.",
                  features: ["Self-Service Portal", "Knowledge Base", "Ticket Management", "User Authentication"],
                  color: "green"
                },
                {
                  icon: Smartphone,
                  title: "Omnichannel Support Setup",
                  description: "Unified customer experience across email, chat, phone, social media, and mobile channels with consistent service delivery.",
                  features: ["Multi-Channel Integration", "Unified Inbox", "Channel Analytics", "Response Automation"],
                  color: "purple"
                },
                {
                  icon: Database,
                  title: "Customer Data Management",
                  description: "Centralized customer database with 360-degree view, data synchronization, and integration with existing systems.",
                  features: ["Customer 360 View", "Data Integration", "Record Management", "Data Quality Tools"],
                  color: "orange"
                },
                {
                  icon: BarChart3,
                  title: "Sales Process Automation",
                  description: "Automated sales workflows, lead management, opportunity tracking, and sales performance analytics for revenue growth.",
                  features: ["Lead Management", "Opportunity Tracking", "Sales Pipeline", "Revenue Analytics"],
                  color: "indigo"
                },
                {
                  icon: Brain,
                  title: "AI-Powered Insights",
                  description: "Predictive analytics, customer sentiment analysis, automated recommendations, and intelligent decision support.",
                  features: ["Predictive Analytics", "Sentiment Analysis", "Smart Recommendations", "Performance Insights"],
                  color: "red"
                }
              ].map((service, index) => (
                <Card key={index} className="bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className={`h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center mb-4 shadow-lg`}>
                      <service.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 md:space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm md:text-base text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Implementation Process</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                CRM Implementation Methodology
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Proven approach to ServiceNow CRM implementation ensuring successful deployment and user adoption
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: Search,
                  title: "1. Requirements Analysis",
                  description: "Comprehensive analysis of customer service processes, business requirements, and integration needs.",
                  color: "blue"
                },
                {
                  icon: Settings,
                  title: "2. Design & Configuration",
                  description: "Custom CRM configuration, workflow design, portal setup, and integration architecture planning.",
                  color: "green"
                },
                {
                  icon: Rocket,
                  title: "3. Implementation & Testing",
                  description: "CRM deployment, data migration, integration setup, comprehensive testing, and user acceptance.",
                  color: "purple"
                },
                {
                  icon: UserCheck,
                  title: "4. Training & Go-Live",
                  description: "User training, change management, go-live support, and post-implementation optimization.",
                  color: "orange"
                }
              ].map((step, index) => (
                <div key={index} className="text-center bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-slate-400" />
                  )}
                  <div className={`h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg`}>
                    <step.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Features & Capabilities */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-green-100 text-green-800 mb-4">CRM Capabilities</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Powerful ServiceNow CRM Features
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Advanced capabilities that transform customer service operations and drive business success
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: Filter, title: "Smart Case Routing", desc: "Intelligent assignment based on skills and workload", color: "blue" },
                { icon: Bell, title: "Real-time Notifications", desc: "Instant alerts and updates for critical cases", color: "green" },
                { icon: BarChart2, title: "Performance Analytics", desc: "Comprehensive reporting and KPI tracking", color: "purple" },
                { icon: Cloud, title: "Multi-System Integration", desc: "Seamless connectivity with existing tools", color: "orange" },
                { icon: Lock, title: "Security & Compliance", desc: "Enterprise-grade security and regulatory compliance", color: "red" },
                { icon: RefreshCw, title: "Automated Workflows", desc: "Streamlined processes with intelligent automation", color: "indigo" },
                { icon: Handshake, title: "Customer Self-Service", desc: "Empowering customers with self-help capabilities", color: "green" },
                { icon: Activity, title: "SLA Management", desc: "Automated SLA tracking and escalation", color: "purple" }
              ].map((feature, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Benefits */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-4">CRM Results</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Our ServiceNow CRM implementations deliver quantifiable results and strategic value
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { metric: "50%", label: "Faster Resolution", desc: "Reduced average case resolution time", color: "green" },
                { metric: "85%", label: "Customer Satisfaction", desc: "Improved customer satisfaction scores", color: "blue" },
                { metric: "40%", label: "Cost Reduction", desc: "Lower customer service operational costs", color: "purple" },
                { metric: "90%", label: "First Call Resolution", desc: "Issues resolved on first contact", color: "orange" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.metric}</div>
                  <p className="text-slate-700 font-medium text-sm md:text-base mb-2">{stat.label}</p>
                  <p className="text-xs md:text-sm text-slate-500">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Case Study Highlight */}
            <div className="mt-12 md:mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">Customer Success</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    Global Tech Company CRM Transformation
                  </h3>
                  <blockquote className="text-lg md:text-xl text-slate-700 italic mb-6">
                    "IfBash's ServiceNow CRM solution revolutionized our customer service. We achieved 50% faster case resolution and 85% customer satisfaction within 6 months."
                  </blockquote>
                  <cite className="text-slate-600 not-italic font-medium mb-4 block">
                    — Customer Service Director, Fortune 500 Technology Company
                  </cite>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">50%</div>
                    <div className="text-sm text-slate-600">Faster Resolution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">85%</div>
                    <div className="text-sm text-slate-600">Satisfaction Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">40%</div>
                    <div className="text-sm text-slate-600">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">4</div>
                    <div className="text-sm text-slate-600">Months ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our CRM Services */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-indigo-100 text-indigo-800 mb-4">Why Choose IfBash</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Your Trusted ServiceNow CRM Partner
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Partner with certified ServiceNow CRM experts who deliver exceptional customer service solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Certified CRM Specialists",
                  description: "Our team consists of ServiceNow certified professionals with extensive experience in Customer Service Management implementations across diverse industries and complex enterprise environments.",
                  color: "blue"
                },
                {
                  icon: Rocket,
                  title: "Rapid Implementation",
                  description: "Accelerated deployment methodology that reduces implementation time by 40% while maintaining quality standards, ensuring faster time-to-value and quicker business impact realization.",
                  color: "green"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Comprehensive security implementation including data encryption, role-based access control, compliance frameworks, and industry-standard security measures for complete data protection.",
                  color: "red"
                },
                {
                  icon: Headphones,
                  title: "24/7 Support & Maintenance",
                  description: "Continuous support with dedicated account management, proactive monitoring, regular health checks, and immediate issue resolution to ensure optimal CRM performance at all times.",
                  color: "purple"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 md:space-x-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className={`h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center shadow-lg`}>
                      <item.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Integrations */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-purple-100 text-purple-800 mb-4">Integrations</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Seamless CRM Integrations
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Connect ServiceNow CRM with your existing business systems for unified customer data management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Database,
                  title: "ERP Integration",
                  description: "Seamless integration with SAP, Oracle, and other ERP systems for unified customer and financial data.",
                  items: ["SAP Integration", "Oracle Connectivity", "Data Synchronization", "Real-time Updates"]
                },
                {
                  icon: MessageCircle,
                  title: "Communication Platforms",
                  description: "Integration with email, chat, and telephony systems for omnichannel customer support.",
                  items: ["Email Integration", "Live Chat", "VoIP Systems", "Social Media"]
                },
                {
                  icon: BarChart2,
                  title: "Analytics & BI Tools",
                  description: "Connect with business intelligence platforms for advanced analytics and reporting capabilities.",
                  items: ["Power BI", "Tableau", "Custom Dashboards", "Data Visualization"]
                },
                {
                  icon: Cloud,
                  title: "Cloud Platforms",
                  description: "Integration with major cloud platforms and services for scalable and flexible operations.",
                  items: ["AWS Integration", "Azure Connectivity", "Google Cloud", "Hybrid Solutions"]
                },
                {
                  icon: Layers,
                  title: "Third-party Applications",
                  description: "Custom integrations with industry-specific applications and legacy systems.",
                  items: ["API Development", "Webhook Integration", "Custom Connectors", "Legacy Systems"]
                },
                {
                  icon: Lock,
                  title: "Security Systems",
                  description: "Integration with identity management and security platforms for comprehensive protection.",
                  items: ["Single Sign-On", "Active Directory", "Security Tools", "Compliance Systems"]
                }
              ].map((integration, index) => (
                <Card key={index} className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                      <integration.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold text-slate-900">{integration.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {integration.description}
                    </p>
                    <div className="space-y-2">
                      {integration.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-slate-100 text-slate-800 mb-4">FAQ</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                Common questions about ServiceNow CRM implementation and services
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  question: "What is ServiceNow Customer Service Management (CSM)?",
                  answer: "ServiceNow CSM is a comprehensive customer service platform that enables organizations to deliver exceptional customer experiences through case management, self-service portals, knowledge management, omnichannel support, and automated workflows integrated with your existing business processes."
                },
                {
                  question: "How long does ServiceNow CRM implementation take?",
                  answer: "ServiceNow CRM implementation typically takes 3-6 months depending on complexity, customization requirements, data migration needs, integrations, and organizational readiness. We provide detailed project timelines and milestones during the planning phase to ensure transparent delivery."
                },
                {
                  question: "What are the benefits of ServiceNow CRM over traditional CRM systems?",
                  answer: "ServiceNow CRM offers unified platform integration with ITSM, advanced automation capabilities, AI-powered insights, seamless workflow orchestration, robust reporting and analytics, scalable architecture, and enterprise-grade security that traditional CRM systems often lack."
                },
                {
                  question: "Do you provide ServiceNow CRM customization services?",
                  answer: "Yes, we provide comprehensive ServiceNow CRM customization including custom workflows, forms, fields, business rules, UI policies, client scripts, custom applications, and integration with third-party systems to meet specific business requirements and industry needs."
                },
                {
                  question: "What support do you provide post-implementation?",
                  answer: "We provide 24/7 support including system monitoring, regular health checks, performance optimization, user training, change management, issue resolution, platform updates, and ongoing consultation to ensure optimal CRM performance and user adoption."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Transform Your Customer Experience with ServiceNow CRM
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Partner with IfBash for expert ServiceNow CRM implementation. Deliver exceptional customer service, streamline operations, and drive business growth with our proven solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 px-8 md:px-10 py-3 md:py-4 text-lg font-semibold shadow-xl w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Get CRM Demo
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 md:px-10 py-3 md:py-4 text-lg font-semibold w-full sm:w-auto">
                <FileText className="mr-2 h-5 w-5" />
                Download CRM Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-blue-100">
              <div className="flex flex-col sm:flex-row items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-sm md:text-base">+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-sm md:text-base">crm@ifbash.com</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                <Globe className="h-5 w-5 text-green-400" />
                <span className="text-sm md:text-base">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}