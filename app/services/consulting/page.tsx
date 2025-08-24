import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
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
  Wrench,
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
  Code,
  Database,
  Layers,
  Briefcase,
  ChartLine,
  BookOpen,
  Cog,
  Server,
  Cloud,
  Integration,
  Workflow,
  Bug,
  Gauge,
} from "lucide-react";

export default function ServiceNowConsultingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    "name": "ServiceNow Consulting Services - Implementation & Customization | IfBash",
    "alternateName": "ServiceNow Implementation Consulting",
    "description": "Expert ServiceNow consulting services. Implementation, customization, integration, optimization. Transform your business with certified ServiceNow consultants in Hyderabad.",
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
      "ServiceNow Implementation",
      "ServiceNow Customization",
      "ServiceNow Integration",
      "ITSM Consulting",
      "ITOM Consulting",
      "ServiceNow Development"
    ],
    "areaServed": {
      "@type": "Place", 
      "name": "Global"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "ServiceNow Implementation",
        "description": "Complete ServiceNow platform implementation with customization and integration services",
        "category": "Implementation Services"
      },
      {
        "@type": "Offer",
        "name": "ServiceNow Optimization",
        "description": "Platform optimization and performance enhancement for existing ServiceNow instances",
        "category": "Optimization Services"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
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
        "name": "What ServiceNow consulting services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive ServiceNow consulting including implementation, customization, integration, ITSM/ITOM setup, workflow automation, custom application development, and ongoing support and optimization services."
        }
      },
      {
        "@type": "Question",
        "name": "How long does ServiceNow implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow implementation timeline varies based on scope and complexity. Typical implementations range from 3-6 months for standard ITSM to 12+ months for enterprise-wide digital transformation projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ServiceNow customization services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide extensive ServiceNow customization including custom workflows, forms, reports, dashboards, integrations, and custom application development tailored to your specific business requirements."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Consulting Services | Implementation & Customization | IfBash Hyderabad</title>
        <meta
          name="description"
          content="Expert ServiceNow consulting services in Hyderabad. Implementation, customization, integration, ITSM/ITOM setup. Certified consultants, proven methodologies. Get free consultation."
        />
        <meta 
          name="keywords" 
          content="ServiceNow consulting, ServiceNow implementation, ServiceNow customization, ITSM consulting, ITOM consulting, ServiceNow integration, ServiceNow development, ServiceNow consultant Hyderabad, ServiceNow services India, workflow automation"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Consulting Services | Implementation & Customization | IfBash" />
        <meta property="og:description" content="Transform your business with expert ServiceNow consulting. Implementation, customization, integration services. Certified consultants, proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-consulting-services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ServiceNow Consulting Services | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow implementation, customization & integration services. Certified consultants delivering proven results." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-consulting-services" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1920&q=80" as="image" />
        
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
              backgroundImage: `url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1920&q=80')`,
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
                <Settings className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                <Badge variant="outline" className="text-blue-300 border-blue-400/40 bg-blue-900/30 px-3 py-1.5 md:px-4 md:py-2 text-sm">
                  Certified ServiceNow Partner
                </Badge>
              </div>
              <Badge variant="outline" className="text-green-300 border-green-400/40 bg-green-900/30 px-3 py-1.5 md:px-4 md:py-2 text-sm w-fit">
                500+ Successful Implementations
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  ServiceNow Consulting Services
                  <span className="block text-blue-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                    Implementation & Customization
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed mb-6 md:mb-8">
                  Transform your business with expert ServiceNow consulting. Our certified consultants deliver end-to-end implementation, customization, integration, and optimization services that drive operational excellence and digital transformation.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                    <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Get Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                    <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    View Implementation Guide
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Free Project Assessment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Certified Consultants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
              </div>

              {/* Key Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Code className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                  <div className="text-slate-300 text-sm">Implementations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Clock className="h-10 w-10 md:h-12 md:w-12 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">50%</div>
                  <div className="text-slate-300 text-sm">Faster Delivery</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Award className="h-10 w-10 md:h-12 md:w-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
                  <div className="text-slate-300 text-sm">Client Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <Users className="h-10 w-10 md:h-12 md:w-12 text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                  <div className="text-slate-300 text-sm">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is ServiceNow Consulting */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <Badge className="bg-blue-100 text-blue-800 mb-4">ServiceNow Consulting</Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                    What is ServiceNow Consulting?
                  </h2>
                </div>
                
                <div className="prose prose-lg text-slate-700 space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed">
                    <strong>ServiceNow Consulting</strong> encompasses comprehensive services including platform implementation, customization, integration, and optimization to help organizations leverage ServiceNow's full potential for digital transformation and operational excellence.
                  </p>
                  <p className="leading-relaxed">
                    Our certified ServiceNow consultants provide end-to-end services from <strong>initial planning and design</strong> to <strong>implementation, testing, and go-live support</strong>. We specialize in ITSM, ITOM, HR, Security, and custom application development.
                  </p>
                  <p className="leading-relaxed">
                    Whether you're implementing ServiceNow for the first time or optimizing an existing instance, our proven methodologies ensure <strong>successful delivery</strong>, <strong>user adoption</strong>, and <strong>measurable business value</strong>.
                  </p>
                </div>
                
                {/* Key Consulting Areas */}
                <div className="mt-6 md:mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Platform Implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Custom Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">System Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Performance Optimization</span>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Explore Our Consulting Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="ServiceNow consulting team working on platform implementation and customization"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="eager"
                  width="800"
                  height="600"
                />
                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-blue-600 text-white p-3 md:p-4 rounded-xl shadow-lg">
                  <div className="text-xl md:text-2xl font-bold">500+</div>
                  <div className="text-xs md:text-sm">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-indigo-100 text-indigo-800 mb-4">Our Services</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Comprehensive ServiceNow Consulting Services
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                End-to-end ServiceNow consulting services to transform your business operations and accelerate digital transformation
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Rocket,
                  title: "ServiceNow Implementation",
                  description: "Complete ServiceNow platform implementation from planning to go-live with proven methodologies and best practices.",
                  features: ["Platform Setup", "Configuration", "Data Migration", "User Training"],
                  color: "blue"
                },
                {
                  icon: Code,
                  title: "Custom Development", 
                  description: "Custom ServiceNow applications, workflows, and integrations tailored to your specific business requirements.",
                  features: ["Custom Apps", "Workflow Automation", "Scripting", "API Development"],
                  color: "purple"
                },
                {
                  icon: Database,
                  title: "System Integration",
                  description: "Seamless integration with existing systems and third-party applications for unified operations.",
                  features: ["API Integration", "Data Sync", "SSO Setup", "Legacy Migration"],
                  color: "green"
                },
                {
                  icon: Gauge,
                  title: "Performance Optimization",
                  description: "Optimize ServiceNow performance for better user experience and system efficiency.",
                  features: ["Performance Tuning", "Query Optimization", "Load Balancing", "Monitoring Setup"],
                  color: "red"
                },
                {
                  icon: Settings,
                  title: "ITSM Implementation",
                  description: "IT Service Management implementation with incident, problem, change, and knowledge management modules.",
                  features: ["Incident Management", "Problem Management", "Change Management", "Service Catalog"],
                  color: "orange"
                },
                {
                  icon: Server,
                  title: "ITOM & Discovery",
                  description: "IT Operations Management and Service Mapping for complete infrastructure visibility and automation.",
                  features: ["Service Mapping", "Discovery", "Event Management", "Orchestration"],
                  color: "indigo"
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
              <Badge className="bg-blue-100 text-blue-800 mb-4">Our Process</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Proven ServiceNow Implementation Methodology
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Our structured approach ensures successful ServiceNow implementation with minimal risk and maximum value
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {[
                {
                  icon: Target,
                  title: "1. Discovery",
                  description: "Requirements gathering, current state analysis, and solution design.",
                  color: "blue"
                },
                {
                  icon: Layers,
                  title: "2. Design",
                  description: "Technical architecture, workflows design, and integration planning.",
                  color: "purple"
                },
                {
                  icon: Code,
                  title: "3. Build",
                  description: "Platform configuration, custom development, and system integration.",
                  color: "green"
                },
                {
                  icon: Bug,
                  title: "4. Test",
                  description: "Comprehensive testing including UAT, performance, and security testing.",
                  color: "orange"
                },
                {
                  icon: Rocket,
                  title: "5. Deploy",
                  description: "Go-live execution, user training, and post-deployment support.",
                  color: "red"
                }
              ].map((step, index) => (
                <div key={index} className="text-center bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                  {index < 4 && (
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
              <Badge className="bg-green-100 text-green-800 mb-4">Proven Results</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Delivering Measurable Business Impact
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Our ServiceNow consulting services deliver tangible results and business transformation
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { metric: "50%", label: "Faster Resolution", desc: "Average incident resolution time", color: "green" },
                { metric: "70%", label: "Process Efficiency", desc: "Improvement in workflow automation", color: "blue" },
                { metric: "90%", label: "User Adoption", desc: "Platform adoption rate", color: "purple" },
                { metric: "60%", label: "Cost Reduction", desc: "IT operational cost savings", color: "orange" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
                  <Badge className="bg-blue-100 text-blue-800 mb-4">Client Success</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    Global Manufacturing Leader Digital Transformation
                  </h3>
                  <blockquote className="text-lg md:text-xl text-slate-700 italic mb-6">
                    "IfBash's ServiceNow consulting transformed our entire IT operations. Their implementation reduced our incident resolution time by 65% and improved service availability to 99.9%."
                  </blockquote>
                  <cite className="text-slate-600 not-italic font-medium mb-4 block">
                    — CIO, Global Manufacturing Company
                  </cite>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">65%</div>
                    <div className="text-sm text-slate-600">Faster Resolution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">99.9%</div>
                    <div className="text-sm text-slate-600">Service Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
                    <div className="text-sm text-slate-600">Months to Go-Live</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">$2M</div>
                    <div className="text-sm text-slate-600">Annual Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Consulting Services */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-indigo-100 text-indigo-800 mb-4">Why Choose IfBash</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Your Trusted ServiceNow Implementation Partner
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Partner with certified ServiceNow experts who deliver proven results and exceptional service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: UserCheck,
                  title: "Certified ServiceNow Experts",
                  description: "Our team consists of certified ServiceNow professionals with extensive platform expertise across all major modules including ITSM, ITOM, HR, Security, and custom application development.",
                  color: "blue"
                },
                {
                  icon: Rocket,
                  title: "Proven Implementation Methodology",
                  description: "Leverage our battle-tested implementation framework developed through 500+ successful projects, ensuring predictable outcomes and accelerated time-to-value.",
                  color: "purple"
                },
                {
                  icon: Globe,
                  title: "Industry-Specific Solutions",
                  description: "Deep expertise across healthcare, financial services, manufacturing, government, and technology sectors with pre-built accelerators and industry best practices.",
                  color: "green"
                },
                {
                  icon: Shield,
                  title: "End-to-End Support",
                  description: "Comprehensive support from initial consultation through post-implementation optimization, including 24/7 support, managed services, and ongoing enhancement services.",
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

        {/* Consulting Deliverables */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-purple-100 text-purple-800 mb-4">Project Deliverables</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                What You Get with Our Consulting Services
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive deliverables ensuring successful ServiceNow implementation and long-term success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: FileText,
                  title: "Technical Documentation",
                  description: "Complete technical documentation including architecture diagrams, configuration guides, and operation manuals.",
                  items: ["Architecture Blueprints", "Configuration Guides", "API Documentation", "User Manuals"]
                },
                {
                  icon: Code,
                  title: "Custom Development",
                  description: "Tailored solutions including custom workflows, applications, forms, and business rules.",
                  items: ["Custom Applications", "Workflow Automation", "Business Rules", "UI Components"]
                },
                {
                  icon: Database,
                  title: "Data Migration & Integration",
                  description: "Seamless data migration from legacy systems and integration with existing applications.",
                  items: ["Data Migration Scripts", "Integration Mapping", "ETL Processes", "Data Validation"]
                },
                {
                  icon: Users,
                  title: "Training & Knowledge Transfer",
                  description: "Comprehensive user training and knowledge transfer to ensure team self-sufficiency.",
                  items: ["Administrator Training", "End-User Training", "Best Practices Guide", "Knowledge Base"]
                },
                {
                  icon: Bug,
                  title: "Testing & Quality Assurance",
                  description: "Rigorous testing including functional, performance, security, and user acceptance testing.",
                  items: ["Test Plans", "Test Cases", "Performance Reports", "UAT Documentation"]
                },
                {
                  icon: Shield,
                  title: "Go-Live Support",
                  description: "Comprehensive go-live support and post-implementation monitoring and optimization.",
                  items: ["Go-Live Planning", "24/7 Support", "Performance Monitoring", "Issue Resolution"]
                }
              ].map((deliverable, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-50 to-purple-50 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
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

        {/* Technologies & Integrations */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-green-100 text-green-800 mb-4">Technologies</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ServiceNow Modules & Integration Expertise
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive expertise across all ServiceNow modules and enterprise integrations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  category: "ITSM Modules",
                  items: ["Incident Management", "Problem Management", "Change Management", "Service Catalog", "Knowledge Management", "Asset Management"]
                },
                {
                  category: "ITOM Modules", 
                  items: ["Service Mapping", "Discovery", "Event Management", "Orchestration", "Cloud Management", "Monitoring"]
                },
                {
                  category: "Platform Features",
                  items: ["Workflow Engine", "Business Rules", "UI Actions", "Client Scripts", "REST APIs", "Import Sets"]
                },
                {
                  category: "Integrations",
                  items: ["Active Directory", "Azure AD", "AWS", "Salesforce", "Office 365", "Monitoring Tools"]
                }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-slate-100 text-slate-800 mb-4">FAQ</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-slate-600">
                Common questions about ServiceNow consulting services
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  question: "What ServiceNow consulting services do you offer?",
                  answer: "We offer comprehensive ServiceNow consulting including implementation, customization, integration, ITSM/ITOM setup, workflow automation, custom application development, performance optimization, and ongoing support and maintenance services."
                },
                {
                  question: "How long does ServiceNow implementation take?",
                  answer: "ServiceNow implementation timeline varies based on scope and complexity. Typical implementations range from 3-6 months for standard ITSM modules to 12+ months for enterprise-wide digital transformation projects with multiple modules and complex integrations."
                },
                {
                  question: "Do you provide ServiceNow customization services?",
                  answer: "Yes, we provide extensive ServiceNow customization including custom workflows, forms, reports, dashboards, business rules, client scripts, integrations, and custom application development tailored to your specific business requirements and processes."
                },
                {
                  question: "What is your ServiceNow implementation methodology?",
                  answer: "We follow a proven 5-phase methodology: Discovery (requirements and analysis), Design (architecture and workflows), Build (configuration and development), Test (comprehensive testing including UAT), and Deploy (go-live and support)."
                },
                {
                  question: "Do you provide post-implementation support?",
                  answer: "Yes, we offer comprehensive post-implementation support including 24/7 technical support, managed services, performance optimization, user training, platform upgrades, and ongoing enhancements to ensure continued success and value realization."
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
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Ready to Transform with ServiceNow?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Partner with IfBash for expert ServiceNow consulting services. Get proven implementation methodologies, certified consultants, and 24/7 support for your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 px-8 md:px-10 py-3 md:py-4 text-lg font-semibold shadow-xl w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 md:px-10 py-3 md:py-4 text-lg font-semibold w-full sm:w-auto">
                <FileText className="mr-2 h-5 w-5" />
                Download Service Guide
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
                <span className="text-sm md:text-base">consulting@ifbash.com</span>
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