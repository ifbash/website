import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Workflow,
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
  Database,
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
  Play,
} from "lucide-react";

export default function ServiceNowDigitalTransformationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Digital Transformation Services - IfBash",
    "alternateName": "ServiceNow Implementation & Consulting",
    "description": "Leading ServiceNow digital transformation services with AI automation, ITSM, HR automation, and CRM integration. 40% faster implementations, 30% cost reduction. Free consultation available.",
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
      "ServiceNow Digital Transformation",
      "Workflow Automation",
      "ITSM Implementation",
      "AI Integration",
      "CRM Integration"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "ServiceNow Implementation",
        "description": "Complete ServiceNow platform implementation with 40% faster delivery",
        "category": "Digital Transformation"
      },
      {
        "@type": "Offer", 
        "name": "AI Workflow Automation",
        "description": "Intelligent process automation using ServiceNow AI capabilities",
        "category": "Automation"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
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
        "name": "What is ServiceNow Digital Transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Digital Transformation is the process of modernizing enterprise operations using the ServiceNow platform to automate workflows, integrate systems, and enhance employee and customer experiences through AI-powered solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does ServiceNow implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ServiceNow implementations typically take 3-6 months, which is 40% faster than industry average due to our proven methodologies and certified expertise."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can I expect from ServiceNow transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations typically see 30% cost reduction, 40% faster service delivery, and 85% user adoption rates within the first year of ServiceNow implementation."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Digital Transformation Services | AI Workflow Automation | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow digital transformation services in Hyderabad & globally. AI workflow automation, ITSM, HR automation & CRM integration. 40% faster implementation, 30% cost savings. Free consultation."
        />
        <meta 
          name="keywords" 
          content="ServiceNow digital transformation, ServiceNow implementation, workflow automation, ITSM ServiceNow, HR automation ServiceNow, ServiceNow consulting Hyderabad, ServiceNow AI automation, enterprise automation, ServiceNow CRM integration, digital workplace transformation"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Digital Transformation Services | AI Automation | IfBash" />
        <meta property="og:description" content="Leading ServiceNow transformation experts. 500+ successful implementations. AI automation, ITSM, HR workflows. 40% faster delivery, 30% cost reduction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-digital-transformation" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ServiceNow Digital Transformation | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow consulting. 40% faster implementations, 30% cost reduction. AI automation & workflow optimization." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-digital-transformation" />
        
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

        {/* Enhanced Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
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
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-indigo-900/85 z-5" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <Workflow className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                <Badge variant="outline" className="text-blue-300 border-blue-400/40 bg-blue-900/30 px-3 py-1.5 md:px-4 md:py-2 text-sm">
                  ServiceNow Elite Partner
                </Badge>
              </div>
              <Badge variant="outline" className="text-green-300 border-green-400/40 bg-green-900/30 px-3 py-1.5 md:px-4 md:py-2 text-sm w-fit">
                500+ Implementations
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  ServiceNow Digital Transformation
                  <span className="block text-blue-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                    Accelerate Enterprise Innovation
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed mb-6 md:mb-8">
                  Transform your organization with enterprise-grade ServiceNow solutions. Our certified consultants deliver AI-powered workflow automation, seamless integrations, and exceptional experiences that drive measurable ROI.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Get Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                    <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Watch Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Free Initial Assessment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Certified Experts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Proven ROI Results</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Clock className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">40%</div>
                  <div className="text-slate-300 text-sm">Faster Implementation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <DollarSign className="h-10 w-10 md:h-12 md:w-12 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">30%</div>
                  <div className="text-slate-300 text-sm">Cost Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Globe className="h-10 w-10 md:h-12 md:w-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
                  <div className="text-slate-300 text-sm">Platform Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Users className="h-10 w-10 md:h-12 md:w-12 text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">85%</div>
                  <div className="text-slate-300 text-sm">User Adoption</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is ServiceNow Section - Enhanced for SEO */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <Badge className="bg-blue-100 text-blue-800 mb-4">Digital Transformation</Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                    What is ServiceNow Digital Transformation?
                  </h2>
                </div>
                
                <div className="prose prose-lg text-slate-700 space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed">
                    <strong>ServiceNow Digital Transformation</strong> leverages the world's leading cloud platform to modernize enterprise operations through intelligent workflow automation, AI-driven insights, and seamless system integration.
                  </p>
                  <p className="leading-relaxed">
                    Our certified ServiceNow consultants help organizations unlock operational efficiency, enhance employee experiences, and accelerate innovation across <strong>IT Service Management (ITSM)</strong>, <strong>HR automation</strong>, <strong>customer service</strong>, and business applications.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>AI workflow automation</strong> to predictive analytics, we deliver comprehensive digital transformation solutions that drive measurable business outcomes and competitive advantage for enterprises globally.
                  </p>
                </div>
                
                {/* Key Features List */}
                <div className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">AI-Powered Automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">ITSM Implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">HR Service Delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">CRM Integration</span>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More About Our Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="ServiceNow digital transformation dashboard showing workflow automation and analytics"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="eager"
                  width="800"
                  height="600"
                />
                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-blue-600 text-white p-3 md:p-4 rounded-xl shadow-lg">
                  <div className="text-xl md:text-2xl font-bold">500+</div>
                  <div className="text-xs md:text-sm">Successful Projects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Optimized */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Our Services</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Comprehensive ServiceNow Solutions
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                End-to-end ServiceNow implementation and consulting services designed to modernize your enterprise operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI Workflow Automation",
                  description: "Intelligent process automation with predictive analytics and machine learning capabilities.",
                  features: ["Process Mining", "Predictive Analytics", "AI Virtual Agents", "Smart Routing"],
                  color: "blue"
                },
                {
                  icon: Database,
                  title: "ITSM Implementation",
                  description: "Complete IT Service Management setup with incident, problem, and change management.",
                  features: ["Incident Management", "Problem Management", "Change Management", "Asset Management"],
                  color: "purple"
                },
                {
                  icon: Users,
                  title: "HR Service Delivery",
                  description: "Streamline HR processes with employee self-service and automated workflows.",
                  features: ["Employee Onboarding", "Case Management", "Knowledge Base", "Mobile Access"],
                  color: "green"
                },
                {
                  icon: MessageCircle,
                  title: "Customer Service Management",
                  description: "Transform customer service with omnichannel support and AI-powered assistance.",
                  features: ["Omnichannel Support", "AI Chatbots", "Case Routing", "SLA Management"],
                  color: "orange"
                },
                {
                  icon: BarChart3,
                  title: "Business Intelligence",
                  description: "Advanced analytics and reporting for data-driven decision making.",
                  features: ["Real-time Dashboards", "Performance Analytics", "Custom Reports", "KPI Tracking"],
                  color: "indigo"
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description: "Enterprise-grade security with GRC and risk management capabilities.",
                  features: ["GRC Implementation", "Risk Management", "Audit Management", "Compliance Reporting"],
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

        {/* Results Section - Enhanced */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-green-100 text-green-800 mb-4">Proven Results</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Our ServiceNow implementations deliver quantifiable results across all business metrics
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { metric: "40%", label: "Faster Implementation", desc: "Accelerated delivery vs industry average", color: "blue" },
                { metric: "30%", label: "Cost Reduction", desc: "Through automation and efficiency", color: "green" },
                { metric: "99.9%", label: "Platform Uptime", desc: "Enterprise-grade reliability", color: "purple" },
                { metric: "85%", label: "User Adoption", desc: "Employee engagement success", color: "orange" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.metric}</div>
                  <p className="text-slate-700 font-medium text-sm md:text-base mb-2">{stat.label}</p>
                  <p className="text-xs md:text-sm text-slate-500">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Client Testimonial */}
            <div className="mt-12 md:mt-16 bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <Quote className="h-8 w-8 md:h-10 md:w-10 text-blue-400 flex-shrink-0" />
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-slate-700 italic mb-4">
                    "IfBash transformed our ServiceNow implementation timeline by 40%. Their expertise in AI automation and workflow optimization delivered immediate ROI and improved our employee experience significantly."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <cite className="text-slate-600 not-italic font-medium">
                      — CTO, Fortune 500 Manufacturing Company
                    </cite>
                    <div className="flex mt-2 sm:mt-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-indigo-100 text-indigo-800 mb-4">Why IfBash</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Your Trusted ServiceNow Partner
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Partner with certified ServiceNow experts who deliver enterprise-grade solutions with proven results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: UserCheck,
                  title: "Certified ServiceNow Experts",
                  description: "Our team consists of certified ServiceNow professionals with deep platform expertise and years of implementation experience across industries.",
                  color: "blue"
                },
                {
                  icon: Award,
                  title: "500+ Successful Implementations",
                  description: "Proven track record of delivering successful ServiceNow transformations for enterprises across healthcare, manufacturing, and financial services.",
                  color: "green"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security & Compliance",
                  description: "Robust data protection, privacy controls, and regulatory compliance frameworks trusted by Fortune 500 companies worldwide.",
                  color: "purple"
                },
                {
                  icon: TrendingUp,
                  title: "Scalable & Future-Ready Solutions",
                  description: "Solutions designed to scale with your business growth and adapt to evolving technology landscapes with seamless integration capabilities.",
                  color: "orange"
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

        {/* Implementation Process */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-purple-100 text-purple-800 mb-4">Our Process</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Proven Implementation Methodology
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Our systematic approach ensures successful ServiceNow transformation with measurable business outcomes
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: Target,
                  title: "1. Assessment",
                  description: "Comprehensive evaluation of digital maturity, processes, and transformation readiness.",
                  color: "blue"
                },
                {
                  icon: Lightbulb,
                  title: "2. Strategy",
                  description: "Design transformation roadmaps leveraging ServiceNow for maximum business impact.",
                  color: "purple"
                },
                {
                  icon: Zap,
                  title: "3. Implementation",
                  description: "Execute workflows, AI automation, and integrations using agile methodology.",
                  color: "green"
                },
                {
                  icon: TrendingUp,
                  title: "4. Optimization",
                  description: "Continuous improvement with analytics, feedback, and performance optimization.",
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

        {/* FAQ Section for SEO */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-slate-100 text-slate-800 mb-4">FAQ</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                Common questions about ServiceNow digital transformation
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  question: "What is ServiceNow Digital Transformation?",
                  answer: "ServiceNow Digital Transformation is the process of modernizing enterprise operations using the ServiceNow platform to automate workflows, integrate systems, and enhance employee and customer experiences through AI-powered solutions. It includes ITSM, HR automation, customer service management, and business process optimization."
                },
                {
                  question: "How long does ServiceNow implementation take?",
                  answer: "Our ServiceNow implementations typically take 3-6 months, which is 40% faster than industry average due to our proven methodologies, certified expertise, and pre-built accelerators. Timeline varies based on scope, complexity, and organization size."
                },
                {
                  question: "What ROI can I expect from ServiceNow transformation?",
                  answer: "Organizations typically see 30% cost reduction, 40% faster service delivery, 85% user adoption rates, and significant improvements in employee satisfaction within the first year. ROI is usually achieved within 12-18 months of implementation."
                },
                {
                  question: "Do you provide ServiceNow support after implementation?",
                  answer: "Yes, we provide comprehensive 24/7 support, maintenance, continuous optimization, user training, and platform updates. Our ongoing partnership ensures your ServiceNow investment continues to deliver value and evolves with your business needs."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 md:p-8 hover:bg-slate-100 transition-all duration-300">
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

        {/* Enhanced CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Ready to Transform Your Enterprise with ServiceNow?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Partner with IfBash to unlock ServiceNow's full potential. Our certified experts deliver 40% faster implementations with proven ROI results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 px-8 md:px-10 py-3 md:py-4 text-lg font-semibold shadow-xl w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 md:px-10 py-3 md:py-4 text-lg font-semibold w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
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
                <span className="text-sm md:text-base">servicenow@ifbash.com</span>
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