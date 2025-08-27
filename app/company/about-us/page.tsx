import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Lightbulb,
  Award,
  ArrowRight,
  Globe,
  Target,
  Zap,
  Heart,
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Calendar,
  LinkedinIcon,
  Twitter,
  Youtube,
  MapPin,
  Building,
  Rocket,
  Code,
  Database,
  Cloud,
  Settings,
  Quote
} from "lucide-react";

export default function AboutUsPage() {
  // Enhanced JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IfBash - ServiceNow Solutions & Digital Transformation Experts",
    "alternateName": ["IfBash", "ServiceNow Specialists", "Digital Transformation Company"],
    "description": "Leading ServiceNow solutions provider in Hyderabad & globally. Expert team delivering AI-powered digital transformation, workflow automation, and enterprise innovation. 9+ years experience, 1000+ implementations, certified specialists driving business excellence.",
    "url": "https://ifbash.com",
    "logo": "https://ifbash.com/images/ifbash-logo.png",
    "foundingDate": "2016",
    "founder": {
      "@type": "Person",
      "name": "IfBash Leadership Team"
    },
    "numberOfEmployees": "50-100",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "India",
      "postalCode": "500001"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXX-XXXXXX",
      "contactType": "customer service",
      "email": "info@ifbash.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/ifbash",
      "https://twitter.com/ifbash",
      "https://www.youtube.com/c/ifbash"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "knowsAbout": [
      "ServiceNow Implementation",
      "Digital Transformation",
      "Workflow Automation",
      "AI Integration",
      "Enterprise Solutions",
      "Cloud Migration",
      "ITSM",
      "ITOM",
      "CSM",
      "HRSD"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "award": [
      "ServiceNow Elite Partner",
      "Digital Transformation Leader",
      "Innovation Excellence Award"
    ]
  };

  const stats = [
    { number: "9+", label: "Years Experience", description: "ServiceNow expertise" },
    { number: "1000+", label: "Implementations", description: "Successful projects" },
    { number: "50+", label: "Certified Experts", description: "ServiceNow specialists" },
    { number: "25+", label: "Countries Served", description: "Global presence" }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We drive innovation by leveraging ServiceNow and emerging technologies like AI to solve complex business challenges and deliver measurable results that transform organizations.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Our culture is built on teamwork, transparency, and a shared commitment to client success. We believe in partnership-driven approaches that create lasting value.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions with continuous improvement, best practices, and measurable business outcomes.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every solution we deliver is focused on achieving tangible business results, driving efficiency, reducing costs, and enabling organizational growth through technology.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  const expertise = [
    { icon: Code, title: "ServiceNow Development", description: "Custom applications and workflows" },
    { icon: Database, title: "Data Integration", description: "Seamless system connectivity" },
    { icon: Cloud, title: "Cloud Solutions", description: "Scalable cloud implementations" },
    { icon: Settings, title: "Process Automation", description: "Intelligent workflow optimization" },
    { icon: Shield, title: "Security & Compliance", description: "Enterprise-grade governance" },
    { icon: TrendingUp, title: "Digital Strategy", description: "Transformation roadmaps" }
  ];

  return (
    <>
      <Head>
        <title>About IfBash - Leading ServiceNow Solutions & Digital Transformation Experts | Hyderabad</title>
        <meta
          name="description"
          content="Leading ServiceNow solutions provider in Hyderabad & globally. Expert team delivering AI-powered digital transformation, workflow automation, and enterprise innovation. 9+ years experience, 1000+ implementations, certified specialists driving business excellence."
        />
        <meta
          name="keywords"
          content="about ifbash, ServiceNow experts, digital transformation company, workflow automation specialists, enterprise solutions, ServiceNow implementation, Hyderabad technology company, AI-powered solutions"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="About IfBash - Leading ServiceNow Solutions & Digital Transformation Experts" />
        <meta property="og:description" content="Expert team delivering AI-powered digital transformation with 9+ years experience, 1000+ implementations, and certified ServiceNow specialists driving business excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/about" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About IfBash - Leading ServiceNow Solutions & Digital Transformation Experts" />
        <meta name="twitter:description" content="Expert team delivering AI-powered digital transformation with 9+ years experience, 1000+ implementations, and certified ServiceNow specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" />

        <link rel="canonical" href="https://ifbash.com/about" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Fixed Social Links */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        <a
          href="https://linkedin.com/company/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Follow ifBash on LinkedIn"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25">
            <LinkedinIcon className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white text-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm border">
            Follow on LinkedIn
          </span>
        </a>

        <a
          href="https://twitter.com/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Follow ifBash on Twitter"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-sky-500/25">
            <Twitter className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white text-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm border">
            Follow on Twitter
          </span>
        </a>

        <a
          href="https://youtube.com/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Watch ifBash on YouTube"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-rose-600 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-red-500/25">
            <Youtube className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white text-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm border">
            Watch on YouTube
          </span>
        </a>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
        <Header />

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-blue-600/5 to-transparent" />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-8 w-8 text-blue-400" />
                  <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-4 py-2">
                    About IfBash
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-6">
                  Transforming Businesses with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    ServiceNow Excellence
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                  We are a global team of ServiceNow experts dedicated to helping organizations achieve{' '}
                  <span className="font-semibold text-indigo-300">digital transformation</span>, operational excellence, and innovation through world-class workflow automation and AI-powered platform solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Team
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Our Journey
                  </Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-gradient-to-br from-white/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-blue-200 font-semibold text-sm mb-1">{stat.label}</div>
                    <div className="text-blue-300/70 text-xs">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Our Core Values
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Mission & Values That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Drive Our Success
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our mission is to empower organizations worldwide through innovative ServiceNow solutions that drive digital transformation, enhance operational efficiency, and create lasting business value
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className={`group bg-gradient-to-br ${value.bgColor} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50`}>
                  <CardHeader className="pb-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-500/5 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                  Our Story
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  The Philosophy Behind
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                    IfBash
                  </span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    The name <strong className="text-indigo-600">ifBash</strong> embodies our philosophy and approach to problem-solving.
                  </p>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200/50">
                    <p className="leading-relaxed mb-4">
                      <strong className="text-indigo-700">"if"</strong> stands for curiosity—the power of asking "why?" and challenging what's possible. Every transformation begins with a question: <em className="text-purple-600">"What if we could do things better?"</em>
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-purple-700">"Bash"</strong> is our commitment to action—solving the "if" and "why" with technology, creativity, and expertise. We turn questions into solutions, using ServiceNow and digital innovation to make a real impact.
                    </p>
                  </div>
                  
                  <p className="leading-relaxed">
                    Our story is about combining <strong>vision and execution</strong>. We believe every "if" deserves a "Bash"—and that's how we help organizations transform, grow, and succeed through intelligent automation and digital excellence.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                    Learn More About Our Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="IfBash team collaboration and innovation in ServiceNow solutions development"
                    className="rounded-xl shadow-xl w-full"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">2016</div>
                  <div className="text-sm opacity-90">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Our Expertise
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Solutions & Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our team of certified experts delivers end-to-end ServiceNow solutions across all modules and industries, ensuring successful digital transformation outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 group">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Quote Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12 border border-blue-200/50 backdrop-blur-sm text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Quote className="h-8 w-8 text-white" />
              </div>
              <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-8 leading-relaxed">
                "We don't just implement technology; we craft digital experiences that transform how organizations work, connect, and grow."
              </blockquote>
              <div className="text-gray-600 font-medium">
                - IfBash Leadership Team
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-blue-600/5 to-transparent" />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Your Business?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Partner With Us for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                ServiceNow Success
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Connect with our team of certified ServiceNow experts to discover how we can help your organization achieve its digital transformation goals and drive measurable business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700">
                <Users className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-blue-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-indigo-200 text-xs">info@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <MapPin className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Visit Us</p>
                <p className="text-purple-200 text-xs">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
