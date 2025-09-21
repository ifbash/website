"use client";

import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Building, 
  Search, 
  Users,
  Trophy,
  Heart,
  Zap,
  ChevronRight,
  Globe,
  Coffee,
  Shield,
  Star,
  Award,
  Phone,
  Mail,
  Calendar,
  LinkedinIcon,
  Twitter,
  Youtube,
  ArrowRight,
  Target,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Settings,
  TrendingUp,
  CheckCircle,
  Quote,
  Briefcase,
  GraduationCap,
  DollarSign
} from "lucide-react";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Enhanced JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at IfBash - Join Our ServiceNow Expert Team | Hyderabad",
    "description": "Join IfBash's team of ServiceNow experts in Hyderabad & globally. Explore exciting career opportunities in digital transformation, workflow automation, and enterprise innovation.",
    "url": "https://ifbash.com/careers",
    "mainEntity": {
      "@type": "Organization",
      "name": "IfBash - ServiceNow Solutions & Digital Transformation Experts",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "IfBash",
        "url": "https://ifbash.com"
      }
    }
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Senior ServiceNow Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead ServiceNow platform development and customization for enterprise clients. Work with cutting-edge ServiceNow technologies and AI-powered solutions.",
      skills: ["JavaScript", "ServiceNow", "REST APIs", "ITIL", "AI Integration"]
    },
    {
      id: 2,
      title: "ServiceNow Solution Architect",
      department: "Consulting",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "5+ years",
      description: "Design and implement complex ServiceNow solutions for Fortune 500 companies. Lead digital transformation initiatives and client engagements.",
      skills: ["ServiceNow", "Solution Design", "Client Management", "ITSM", "Digital Strategy"]
    },
    {
      id: 3,
      title: "Technical Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      experience: "4-6 years",
      description: "Manage ServiceNow implementation projects and coordinate cross-functional teams. Drive project success and client satisfaction.",
      skills: ["Project Management", "Agile", "ServiceNow", "Stakeholder Management"]
    },
    {
      id: 4,
      title: "ServiceNow Business Analyst",
      department: "Consulting",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Analyze business requirements and translate them into ServiceNow solutions. Bridge the gap between business needs and technical implementation.",
      skills: ["Business Analysis", "Process Mapping", "ServiceNow", "Documentation"]
    },
    {
      id: 5,
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      description: "Generate qualified leads and build relationships with potential ServiceNow clients. Drive revenue growth and market expansion.",
      skills: ["Sales", "Lead Generation", "CRM", "Communication", "ServiceNow Knowledge"]
    },
    {
      id: 6,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "Design intuitive user experiences for ServiceNow applications and portals. Create engaging digital experiences for enterprise clients.",
      skills: ["Figma", "UI Design", "User Research", "Prototyping", "ServiceNow Portals"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs for you and your family",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      icon: Trophy,
      title: "Professional Growth",
      description: "ServiceNow certifications, training programs, conference attendance, and continuous learning opportunities",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      icon: Globe,
      title: "Remote Flexibility",
      description: "Hybrid and fully remote work options with flexible schedules and work-life balance",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Unlimited PTO, sabbatical programs, mental health support, and flexible working hours",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Zap,
      title: "Innovation Time",
      description: "20% time for learning, experimentation, personal projects, and emerging technology exploration",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Shield,
      title: "Financial Security",
      description: "Competitive salary, equity options, performance bonuses, 401k matching, and financial planning support",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    }
  ];

  const departments = ["all", "Engineering", "Consulting", "Sales", "Operations", "Design", "Marketing"];
  const locations = ["all", "Remote", "Hyderabad, India", "Global", "North America", "Europe"];

  const stats = [
    { number: "50+", label: "Team Members", description: "Growing global team" },
    { number: "9+", label: "Years Experience", description: "ServiceNow expertise" },
    { number: "25+", label: "Countries Served", description: "Global presence" },
    { number: "95%", label: "Employee Satisfaction", description: "Happy workforce" }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <>
      <Head>
        <title>Careers at IfBash - Join Our ServiceNow Expert Team | Digital Transformation Jobs</title>
        <meta
          name="description"
          content="Join IfBash's team of ServiceNow experts in Hyderabad & globally. Explore exciting career opportunities in digital transformation, workflow automation, and enterprise innovation."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ifbash.com/careers" />
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
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300">
            <LinkedinIcon className="h-5 w-5" />
          </div>
        </a>
        <a
          href="https://twitter.com/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300">
            <Twitter className="h-5 w-5" />
          </div>
        </a>
        <a
          href="https://youtube.com/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300">
            <Youtube className="h-5 w-5" />
          </div>
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* Hero Section - Strong Blue Gradient */}
        <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Briefcase className="h-8 w-8 text-blue-200" />
                  <Badge className="bg-blue-800/50 text-blue-100 border-blue-600 px-4 py-2">
                    Join Our Team
                  </Badge>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
                  Build Your Career with
                  <span className="block text-blue-200 font-light">
                    ServiceNow Experts
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                  Join a team of passionate professionals transforming businesses through ServiceNow innovation, AI-powered solutions, and digital transformation excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold bg-white text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 shadow-xl"
                    onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Search className="mr-2 h-5 w-5" />
                    View Open Positions
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/70 hover:bg-white/10 rounded-xl transition-all duration-300"
                    onClick={() => document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Our Culture
                  </Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-blue-200 font-semibold text-sm mb-1">{stat.label}</div>
                    <div className="text-blue-300 text-xs">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Clean White Background */}
        <section className="py-20 px-4 sm:px-6 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-6 px-4 py-2 border border-blue-200">
                Why Choose IfBash
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Benefits & Perks That
                <span className="block text-blue-600">
                  Make The Difference
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We're not just a ServiceNow partner – we're a community of innovators, problem-solvers, and growth-minded professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className={`group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border`}>
                  <CardHeader className="pb-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings Section - Pure White Background for Better Readability */}
        <section id="job-openings" className="py-20 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-800 mb-6 px-4 py-2 border border-green-200">
                Open Positions
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Find Your Perfect Role in
                <span className="block text-green-600">
                  ServiceNow Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore exciting opportunities to grow your career with our team of ServiceNow specialists
              </p>
            </div>

            {/* Search and Filters - Clean White Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative">
                  <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs, skills, or keywords..."
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg bg-white text-gray-900"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <Building className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <select
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg appearance-none bg-white text-gray-900"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>
                        {dept === "all" ? "All Departments" : dept}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <select
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg appearance-none bg-white text-gray-900"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>
                        {location === "all" ? "All Locations" : location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings - Clean White Cards with Strong Contrast */}
            <div className="space-y-6">
              {filteredJobs.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
                </div>
              ) : (
                filteredJobs.map((job) => (
                  <Card key={job.id} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="flex-1">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                              <span className="flex items-center gap-1">
                                <Building className="w-4 h-4" />
                                {job.department}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {job.experience}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            {job.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {job.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="lg:ml-8">
                          <Button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                            Apply Now
                            <ChevronRight className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-blue-50 rounded-2xl p-12 shadow-lg border border-blue-200">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Don't see the right role?</h3>
                <p className="text-xl mb-8 text-blue-700">
                  We're always looking for talented individuals to join our team. Send us your resume!
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300">
                  Submit General Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="py-20 px-4 sm:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 mb-6 px-4 py-2 border border-purple-200">
                Our Culture
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                The Philosophy Behind
                <span className="block text-purple-600">
                  IfBash Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We believe in fostering an environment where innovation thrives and every team member can reach their full potential
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl border">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">What Makes Us Different</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-lg">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h4>
                      <p className="text-gray-700">We encourage experimentation and provide time for learning new ServiceNow technologies.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-lg">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Environment</h4>
                      <p className="text-gray-700">Cross-functional teams work together on challenging ServiceNow projects with open communication.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-lg">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Growth Mindset</h4>
                      <p className="text-gray-700">Continuous learning opportunities, ServiceNow certifications, and clear career advancement paths.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative bg-gray-100 rounded-2xl p-4 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="IfBash team collaboration"
                    className="rounded-xl shadow-lg w-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Employee Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Strong Blue Gradient */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-blue-800/50 text-blue-100 border-blue-600/50 mb-6 px-4 py-2">
              Ready to Join Our Team?
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Journey with
              <span className="block text-blue-200">
                IfBash Excellence
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Connect with our team to discover how you can grow your career with ServiceNow experts and contribute to digital transformation success stories worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 shadow-xl">
                <Users className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/70 hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Interview
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Phone className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-blue-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Mail className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-blue-200 text-xs">careers@ifbash.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <MapPin className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                <p className="text-white text-sm">Visit Us</p>
                <p className="text-blue-200 text-xs">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
