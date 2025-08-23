import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Workflow,
  Settings,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Brain,
  Users,
  Shield,
  Rocket,
  MessageCircle,
  Sparkles,
  Cloud,
  Server,
  Lock,
} from "lucide-react";

export default function TechnologyProviderPage() {
  return (
    <>
      <Head>
        <title>Technology Provider Digital Transformation | ServiceNow & IfBash</title>
        <meta name="description" content="Empower innovation, agility, and customer success. Modernize platforms, deliver managed services, and create seamless digital experiences with ServiceNow, AI, and CRM from IfBash." />
        <meta name="keywords" content="Technology Provider, ServiceNow, AI, CRM, Digital Transformation, Managed Services, Cloud, Cybersecurity, Platform Integration, IfBash" />
        <meta property="og:title" content="Technology Provider Digital Transformation | ServiceNow & IfBash" />
        <meta property="og:description" content="Accelerate technology innovation and customer success with ServiceNow, AI, and CRM solutions from IfBash." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-6">
                <Cpu className="h-8 w-8 text-primary" />
                <Badge variant="outline" className="text-primary border-primary/20">Technology Provider</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Accelerate Technology Transformation with ServiceNow & IfBash
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
                Empower innovation, agility, and customer success. IfBash leverages ServiceNow, AI, and CRM to help technology providers modernize platforms, deliver managed services, and create seamless digital experiences.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Integrate and automate IT, cloud, and business platforms</li>
                <li>Deliver scalable managed services and support</li>
                <li>Enhance customer journeys with CRM and analytics</li>
                <li>Enable cybersecurity, compliance, and resilience</li>
                <li>Leverage AI for predictive insights and automation</li>
              </ul>
              <Button size="lg" variant="secondary" className="px-8 py-3 mb-4">
                Explore Technology Provider Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Technology Innovation"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#1a2e61] mb-4">Why Choose IfBash?</h2>
                <ul className="space-y-4 text-base sm:text-lg text-muted-foreground">
                  <li>
                    <Shield className="inline-block mr-2 text-primary" />
                    <strong className="text-primary">Technology Expertise:</strong> Trusted by global tech firms, MSPs, and SaaS providers for digital transformation.
                  </li>
                  <li>
                    <Sparkles className="inline-block mr-2 text-[#6c28d9]" />
                    <strong className="text-primary">AI & CRM Innovation:</strong> Integrated AI, analytics, and CRM for predictive insights and automation.
                  </li>
                  <li>
                    <CheckCircle className="inline-block mr-2 text-green-500" />
                    <strong className="text-primary">End-to-End Partnership:</strong> Strategy, implementation, and continuous optimization.
                  </li>
                  <li>
                    <Rocket className="inline-block mr-2 text-primary" />
                    <strong className="text-primary">Scalable, Secure Solutions:</strong> Enterprise-grade security, compliance, and future-proof platforms.
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                  alt="Technology Team"
                  className="rounded-xl shadow-lg object-cover w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ServiceNow in Technology Provider */}
        <section className="py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-12 text-center">
              ServiceNow for Technology Providers: Key Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Platform Integration & Automation */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <Workflow className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Platform Integration & Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Connect IT, cloud, and business systems for seamless workflows, data exchange, and process automation.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>API & Data Integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Automated Service Workflows</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>ITSM & ITOM Automation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              {/* Managed Services & Support */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                    <Server className="h-6 w-6 text-chart-2" />
                  </div>
                  <CardTitle className="text-lg">Managed Services & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Deliver scalable, proactive managed services and support for cloud, infrastructure, and applications.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Service Desk & Incident Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Proactive Monitoring & Resolution</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Customer Self-Service Portals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              {/* Customer Experience & CRM */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                    <BarChart3 className="h-6 w-6 text-chart-3" />
                  </div>
                  <CardTitle className="text-lg">Customer Experience & CRM</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Deliver seamless onboarding, support, and engagement with unified CRM, analytics, and AI-powered service management.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Omnichannel CRM & Virtual Agents</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Customer Onboarding & Success</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Engagement & Loyalty Programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              {/* Cloud & Digital Services */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                    <Cloud className="h-6 w-6 text-chart-4" />
                  </div>
                  <CardTitle className="text-lg">Cloud & Digital Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Enable cloud migration, SaaS delivery, and digital product management with automated workflows.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Cloud Migration & Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>SaaS Subscription & Billing Automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Digital Product Lifecycle</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              {/* Cybersecurity & Compliance */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                    <Lock className="h-6 w-6 text-chart-5" />
                  </div>
                  <CardTitle className="text-lg">Cybersecurity & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Protect data, ensure regulatory compliance, and manage risk with automated security workflows.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Security Incident Response</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Compliance Automation & Reporting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Risk Management & Analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              {/* AI & Analytics */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">AI & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Harness AI and analytics for predictive insights, process optimization, and smarter business decisions.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Predictive Service & Support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Customer Sentiment & Usage Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Operational Performance Dashboards</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              {/* Partner Network & Collaboration */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Partner Network & Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Connect partners, resellers, and customers with unified CRM, collaboration, and service management.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Partner Portal & Collaboration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Sales & Service Performance Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Customer Engagement & Loyalty Programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Provider Transformation Benefits */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-10 text-center">
              Why Digital Transformation Matters for Technology Providers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
                  alt="Platform Integration"
                  className="h-24 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Platform Integration</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Connect IT, cloud, and business platforms for seamless workflows and data-driven innovation.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Managed Services"
                  className="h-24 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Managed Services</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Deliver scalable, proactive support and managed services for cloud, infrastructure, and applications.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                  alt="Customer Experience"
                  className="h-24 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Customer Experience</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Deliver frictionless onboarding, support, and engagement to build loyalty and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-12 text-center">
              Our Approach for Technology Provider Transformation
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Workflow className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">1. Assess</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze current platforms, processes, and data landscape for transformation readiness.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">2. Design</h3>
                <p className="text-muted-foreground text-sm">
                  Develop tailored ServiceNow, AI, and CRM solutions for technology provider needs.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">3. Implement</h3>
                <p className="text-muted-foreground text-sm">
                  Deploy and integrate digital workflows across IT, cloud, and customer operations.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
                <p className="text-muted-foreground text-sm">
                  Continuously improve processes and drive innovation with analytics and AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why IfBash & ServiceNow Section */}
        <section className="py-10 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">
              Why IfBash & ServiceNow for Technology Providers?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Industry Expertise & Security
                  </h3>
                  <p className="text-muted-foreground">
                    Proven delivery for global tech firms, MSPs, and SaaS providers. Enterprise-grade security, compliance, and data protection.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Sparkles className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    AI & CRM Innovation
                  </h3>
                  <p className="text-muted-foreground">
                    Integrated AI, analytics, and CRM for predictive insights, automation, and customer engagement.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Rocket className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Scalable, Future-Proof Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    Flexible platforms that grow with your business and adapt to new technology trends.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    End-to-End Partnership
                  </h3>
                  <p className="text-muted-foreground">
                    From strategy to implementation and optimization, IfBash is your partner for continuous transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-light text-primary mb-10 text-center">
              What Our Technology Provider Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg border-none">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    “IfBash helped us automate platform integration and managed services. Our operational efficiency and customer satisfaction are at an all-time high.”
                  </p>
                  <div className="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Client" className="h-10 w-10 rounded-full" />
                    <div>
                      <span className="font-semibold text-primary">David G.</span>
                      <span className="block text-xs text-muted-foreground">CTO, SaaS Provider</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-none">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    “The ServiceNow platform and AI solutions from IfBash transformed our customer experience and security. We’re now leaders in managed services and compliance.”
                  </p>
                  <div className="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/women/51.jpg" alt="Client" className="h-10 w-10 rounded-full" />
                    <div>
                      <span className="font-semibold text-primary">Linda S.</span>
                      <span className="block text-xs text-muted-foreground">VP, Technology Operations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">How quickly can we see results from ServiceNow transformation?</h3>
                <p className="text-muted-foreground">
                  Most clients see measurable improvements in platform integration, managed services, and customer experience within 3-6 months of implementation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Is your solution scalable for global technology enterprises?</h3>
                <p className="text-muted-foreground">
                  Yes, our ServiceNow and AI solutions are designed for scalability, security, and compliance across global operations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Do you offer ongoing support and optimization?</h3>
                <p className="text-muted-foreground">
                  Absolutely. IfBash provides end-to-end partnership, including continuous support, analytics, and process optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Drive Technology Innovation with ServiceNow & IfBash
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Transform your technology business with digital workflows, AI, CRM, and customer-centric solutions.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="mt-8 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Technology Team"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}