import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Target,
  Users,
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
  Map,
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
  Eye,
  Settings,
  Layers,
  Briefcase,
  ChartLine,
  BookOpen,
} from "lucide-react";

export default function ServiceNowAdvisoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    "name": "ServiceNow Advisory Services - Strategic Consulting | IfBash",
    "alternateName": "ServiceNow Strategy Consulting",
    "description": "Expert ServiceNow advisory and consulting services. Strategic planning, digital transformation roadmaps, platform optimization. Get actionable insights from certified consultants.",
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
      "ServiceNow Advisory",
      "Strategic Consulting",
      "Platform Assessment",
      "Digital Strategy",
      "Business Process Consulting"
    ],
    "areaServed": {
      "@type": "Place", 
      "name": "Global"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "ServiceNow Strategic Assessment",
        "description": "Comprehensive platform evaluation and strategic roadmap development",
        "category": "Advisory Services"
      },
      {
        "@type": "Offer",
        "name": "Digital Transformation Strategy",
        "description": "End-to-end transformation planning with ServiceNow platform optimization",
        "category": "Strategic Consulting"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89",
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
        "name": "What are ServiceNow Advisory Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Advisory Services provide strategic consulting, platform assessment, digital transformation planning, and optimization recommendations to maximize your ServiceNow investment and business outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a ServiceNow strategic assessment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive ServiceNow assessment typically takes 2-4 weeks, including current state analysis, future state design, and detailed roadmap development with actionable recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in ServiceNow advisory consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our advisory services include platform assessment, strategic roadmap development, business process optimization, governance framework design, and ongoing strategic guidance throughout your ServiceNow journey."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Advisory Services | Strategic Consulting & Platform Assessment | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow advisory services in Hyderabad & globally. Strategic consulting, platform assessment, digital transformation roadmaps. Maximize ROI with certified advisors. Free strategy session."
        />
        <meta 
          name="keywords" 
          content="ServiceNow advisory services, ServiceNow consulting, ServiceNow strategy, platform assessment ServiceNow, digital transformation consulting, ServiceNow roadmap, ServiceNow optimization, strategic consulting Hyderabad, ServiceNow governance, business process consulting"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Advisory Services | Strategic Consulting | IfBash" />
        <meta property="og:description" content="Strategic ServiceNow consulting and advisory services. Platform assessment, transformation roadmaps, optimization strategies. Maximize your ServiceNow ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-advisory-services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ServiceNow Advisory Services | IfBash" />
        <meta name="twitter:description" content="Strategic ServiceNow consulting. Platform assessments, transformation roadmaps, optimization strategies. Maximize ROI with expert guidance." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-advisory-services" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" as="image" />
        
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
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-900/75 to-blue-900/85 z-5" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <Compass className="h-8 w-8 md:h-10 md:w-10 text-purple-400" />
                <Badge variant="outline" className="text-purple-300 border-purple-400/40 bg-purple-900/30 px-3 py-1.5 md:px-4 md:py-2 text-sm">
                  ServiceNow Strategic Partner
                </Badge>
              </div>
              <Badge variant="outline" className="text-amber-300 border-amber-400/40 bg-amber-900/30 px-3 py-1.5 md:px-4 md:py-2 text-sm w-fit">
                200+ Strategic Engagements
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  ServiceNow Advisory Services
                  <span className="block text-purple-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                    Strategic Guidance for Success
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed mb-6 md:mb-8">
                  Navigate your ServiceNow journey with expert advisory services. Our certified consultants provide strategic guidance, platform assessments, and transformation roadmaps that maximize ROI and accelerate business outcomes.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                    <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Schedule Strategy Session
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                    <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Download Assessment Guide
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Certified Strategic Advisors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Proven Methodologies</span>
                  </div>
                </div>
              </div>

              {/* Key Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Eye className="h-10 w-10 md:h-12 md:w-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">360°</div>
                  <div className="text-slate-300 text-sm">Platform Assessment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Map className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">90%</div>
                  <div className="text-slate-300 text-sm">Strategy Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <ChartLine className="h-10 w-10 md:h-12 md:w-12 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">2-4</div>
                  <div className="text-slate-300 text-sm">Weeks to Roadmap</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Award className="h-10 w-10 md:h-12 md:w-12 text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">85%</div>
                  <div className="text-slate-300 text-sm">ROI Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What are ServiceNow Advisory Services */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <Badge className="bg-purple-100 text-purple-800 mb-4">Advisory Services</Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                    What are ServiceNow Advisory Services?
                  </h2>
                </div>
                
                <div className="prose prose-lg text-slate-700 space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed">
                    <strong>ServiceNow Advisory Services</strong> provide strategic consulting and expert guidance to help organizations maximize their ServiceNow investment through comprehensive platform assessment, digital transformation planning, and optimization strategies.
                  </p>
                  <p className="leading-relaxed">
                    Our certified ServiceNow advisors conduct thorough evaluations of your current state, design future-state architectures, and create actionable roadmaps that align with your business objectives while ensuring optimal <strong>platform utilization</strong> and <strong>ROI maximization</strong>.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>strategic planning</strong> to <strong>governance frameworks</strong>, we provide end-to-end advisory support that transforms your ServiceNow platform into a strategic business enabler driving innovation and operational excellence.
                  </p>
                </div>
                
                {/* Key Advisory Areas */}
                <div className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Strategic Assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Transformation Roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Platform Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Governance Framework</span>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Explore Our Advisory Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="ServiceNow advisory services dashboard showing strategic planning and platform assessment analytics"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="eager"
                  width="800"
                  height="600"
                />
                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-purple-600 text-white p-3 md:p-4 rounded-xl shadow-lg">
                  <div className="text-xl md:text-2xl font-bold">200+</div>
                  <div className="text-xs md:text-sm">Strategic Projects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Services */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-indigo-100 text-indigo-800 mb-4">Our Advisory Services</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Strategic ServiceNow Consulting Services
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive advisory services designed to maximize your ServiceNow investment and accelerate business transformation
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Eye,
                  title: "Platform Assessment",
                  description: "Comprehensive evaluation of your current ServiceNow implementation, identifying optimization opportunities and strategic recommendations.",
                  features: ["Current State Analysis", "Performance Evaluation", "Gap Assessment", "ROI Analysis"],
                  color: "purple"
                },
                {
                  icon: Map,
                  title: "Strategic Roadmap Development", 
                  description: "Create detailed transformation roadmaps aligned with business objectives and industry best practices.",
                  features: ["Future State Design", "Implementation Planning", "Priority Mapping", "Timeline Development"],
                  color: "blue"
                },
                {
                  icon: Settings,
                  title: "Platform Optimization",
                  description: "Optimize existing ServiceNow configurations for improved performance, user experience, and business value.",
                  features: ["Performance Tuning", "Workflow Optimization", "User Experience Enhancement", "Integration Improvement"],
                  color: "green"
                },
                {
                  icon: Shield,
                  title: "Governance & Compliance",
                  description: "Establish governance frameworks and ensure compliance with industry standards and regulations.",
                  features: ["Governance Framework", "Compliance Assessment", "Risk Management", "Policy Development"],
                  color: "red"
                },
                {
                  icon: Briefcase,
                  title: "Business Process Consulting",
                  description: "Analyze and optimize business processes to leverage ServiceNow capabilities effectively.",
                  features: ["Process Analysis", "Workflow Design", "Automation Opportunities", "Change Management"],
                  color: "orange"
                },
                {
                  icon: Brain,
                  title: "AI & Innovation Strategy",
                  description: "Develop strategies to leverage ServiceNow's AI capabilities and emerging technologies.",
                  features: ["AI Readiness Assessment", "Innovation Planning", "Technology Roadmap", "Capability Building"],
                  color: "indigo"
                }
              ].map((service, index) => (
                <Card key={index} className="bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1">
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

        {/* Advisory Process */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-purple-100 text-purple-800 mb-4">Our Process</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Strategic Advisory Methodology
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Our proven approach ensures comprehensive assessment and actionable recommendations for ServiceNow success
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: Eye,
                  title: "1. Discovery",
                  description: "Comprehensive analysis of current state, business requirements, and strategic objectives.",
                  color: "purple"
                },
                {
                  icon: Target,
                  title: "2. Assessment",
                  description: "Detailed evaluation of platform capabilities, performance, and optimization opportunities.",
                  color: "blue"
                },
                {
                  icon: Map,
                  title: "3. Strategy",
                  description: "Development of strategic roadmap with prioritized recommendations and implementation plan.",
                  color: "green"
                },
                {
                  icon: Rocket,
                  title: "4. Execution Support",
                  description: "Ongoing guidance and support throughout strategy implementation and optimization.",
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

        {/* Results & Impact */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-green-100 text-green-800 mb-4">Advisory Impact</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Strategic Results That Matter
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Our advisory services deliver measurable business impact and strategic value
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { metric: "85%", label: "ROI Improvement", desc: "Average ROI increase post-advisory", color: "green" },
                { metric: "90%", label: "Strategy Success Rate", desc: "Successful roadmap implementation", color: "blue" },
                { metric: "60%", label: "Time to Value", desc: "Faster realization of benefits", color: "purple" },
                { metric: "95%", label: "Client Satisfaction", desc: "Advisory service satisfaction rate", color: "orange" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.metric}</div>
                  <p className="text-slate-700 font-medium text-sm md:text-base mb-2">{stat.label}</p>
                  <p className="text-xs md:text-sm text-slate-500">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Case Study Highlight */}
            <div className="mt-12 md:mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-purple-100 text-purple-800 mb-4">Success Story</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    Fortune 500 Financial Services Transformation
                  </h3>
                  <blockquote className="text-lg md:text-xl text-slate-700 italic mb-6">
                    "IfBash's strategic advisory transformed our ServiceNow approach. Their roadmap helped us achieve 75% faster service delivery and $3M in annual savings."
                  </blockquote>
                  <cite className="text-slate-600 not-italic font-medium mb-4 block">
                    — VP of Digital Transformation, Leading Financial Institution
                  </cite>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">75%</div>
                    <div className="text-sm text-slate-600">Faster Service Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">$3M</div>
                    <div className="text-sm text-slate-600">Annual Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">40%</div>
                    <div className="text-sm text-slate-600">ROI Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">6</div>
                    <div className="text-sm text-slate-600">Months Implementation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Advisory Services */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-indigo-100 text-indigo-800 mb-4">Why IfBash Advisory</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Your Strategic ServiceNow Partner
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Partner with experienced ServiceNow advisors who understand both technology and business strategy
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: UserCheck,
                  title: "Certified Strategic Advisors",
                  description: "Our advisory team consists of certified ServiceNow professionals with deep platform expertise and proven track record in strategic consulting across multiple industries and enterprise environments.",
                  color: "purple"
                },
                {
                  icon: BookOpen,
                  title: "Proven Methodologies",
                  description: "Leverage our battle-tested advisory frameworks and methodologies developed through 200+ strategic engagements, ensuring consistent results and accelerated transformation timelines.",
                  color: "blue"
                },
                {
                  icon: Globe,
                  title: "Industry Expertise",
                  description: "Deep understanding of industry-specific challenges and regulatory requirements across healthcare, financial services, manufacturing, and government sectors with tailored advisory approaches.",
                  color: "green"
                },
                {
                  icon: TrendingUp,
                  title: "Future-Ready Strategies",
                  description: "Advisory services focused on long-term success with strategies that adapt to emerging technologies, evolving business models, and changing market conditions for sustained competitive advantage.",
                  color: "orange"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 md:space-x-6 bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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

        {/* Advisory Deliverables */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-4">What You Get</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Comprehensive Advisory Deliverables
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Detailed assessments, strategic recommendations, and actionable roadmaps for ServiceNow success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: FileText,
                  title: "Current State Assessment",
                  description: "Detailed analysis of existing ServiceNow implementation with performance metrics and optimization opportunities.",
                  items: ["Platform Configuration Review", "Performance Analysis", "User Experience Assessment", "Integration Evaluation"]
                },
                {
                  icon: Map,
                  title: "Strategic Roadmap",
                  description: "Comprehensive transformation plan with prioritized initiatives and implementation timeline.",
                  items: ["Future State Design", "Implementation Phases", "Resource Planning", "Risk Mitigation"]
                },
                {
                  icon: BarChart3,
                  title: "Business Case & ROI",
                  description: "Financial analysis and business justification for recommended ServiceNow investments.",
                  items: ["Cost-Benefit Analysis", "ROI Projections", "Risk Assessment", "Value Realization Plan"]
                },
                {
                  icon: Settings,
                  title: "Governance Framework",
                  description: "Structured approach to ServiceNow platform governance and ongoing management.",
                  items: ["Operating Model", "Roles & Responsibilities", "Change Management", "Performance KPIs"]
                },
                {
                  icon: Layers,
                  title: "Technical Architecture",
                  description: "Optimized platform architecture recommendations for scalability and performance.",
                  items: ["Architecture Blueprint", "Integration Strategy", "Security Framework", "Scalability Plan"]
                },
                {
                  icon: BookOpen,
                  title: "Implementation Guide",
                  description: "Step-by-step guidance for executing strategic recommendations and best practices.",
                  items: ["Implementation Methodology", "Best Practices", "Success Criteria", "Quality Assurance"]
                }
              ].map((deliverable, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                      <deliverable.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold text-slate-900">{deliverable.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {deliverable.description}
                    </p>
                    <div className="space-y-2">
                      {deliverable.items.map((item, idx) => (
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
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-slate-100 text-slate-800 mb-4">FAQ</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                Common questions about ServiceNow advisory services
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  question: "What are ServiceNow Advisory Services?",
                  answer: "ServiceNow Advisory Services provide strategic consulting, platform assessment, digital transformation planning, and optimization recommendations to maximize your ServiceNow investment and business outcomes. Our services include current state analysis, roadmap development, and ongoing strategic guidance."
                },
                {
                  question: "How long does a ServiceNow strategic assessment take?",
                  answer: "A comprehensive ServiceNow assessment typically takes 2-4 weeks, including current state analysis, stakeholder interviews, platform evaluation, future state design, and detailed roadmap development with actionable recommendations and implementation timeline."
                },
                {
                  question: "What's included in ServiceNow advisory consulting?",
                  answer: "Our advisory services include platform assessment, strategic roadmap development, business process optimization, governance framework design, ROI analysis, technical architecture recommendations, and ongoing strategic guidance throughout your ServiceNow transformation journey."
                },
                {
                  question: "How do you measure advisory service success?",
                  answer: "Success is measured through strategic KPIs including ROI improvement, implementation timeline acceleration, user adoption rates, platform utilization metrics, and achievement of defined business objectives outlined in the strategic roadmap."
                },
                {
                  question: "Do you provide ongoing advisory support?",
                  answer: "Yes, we offer ongoing strategic advisory support including quarterly reviews, roadmap updates, performance optimization recommendations, and guidance on new ServiceNow capabilities and industry best practices to ensure continued success."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 relative overflow-hidden">
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
              Ready to Maximize Your ServiceNow Investment?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Partner with IfBash for strategic ServiceNow advisory services. Get expert guidance, proven methodologies, and actionable roadmaps for transformation success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-purple-50 px-8 md:px-10 py-3 md:py-4 text-lg font-semibold shadow-xl w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Strategy Session
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 md:px-10 py-3 md:py-4 text-lg font-semibold w-full sm:w-auto">
                <FileText className="mr-2 h-5 w-5" />
                Get Assessment Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-purple-100">
              <div className="flex flex-col sm:flex-row items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-sm md:text-base">+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-sm md:text-base">advisory@ifbash.com</span>
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