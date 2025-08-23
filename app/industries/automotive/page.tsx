import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Car,
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
} from "lucide-react";

export default function AutomotivePage() {
  return (
    <>
      <Head>
        <title>Automotive Digital Transformation | ServiceNow & IfBash</title>
        <meta name="description" content="Accelerate automotive innovation with ServiceNow, AI, and CRM. Modernize manufacturing, supply chain, and customer experience with IfBash." />
        <meta name="keywords" content="Automotive, ServiceNow, AI, CRM, Digital Transformation, Manufacturing, Supply Chain, Customer Experience, IfBash" />
        <meta property="og:title" content="Automotive Digital Transformation | ServiceNow & IfBash" />
        <meta property="og:description" content="Drive innovation and customer loyalty in automotive with ServiceNow, AI, and CRM solutions from IfBash." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80" />
      </Head>
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-6">
                <Car className="h-8 w-8 text-primary" />
                <Badge variant="outline" className="text-primary border-primary/20">Automotive</Badge>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Accelerate Automotive Transformation with ServiceNow & IfBash
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
                Drive innovation, resilience, and customer loyalty across manufacturing, supply chain, retail, and aftersales. IfBash leverages ServiceNow, AI, and CRM to help automotive leaders modernize operations, connect ecosystems, and deliver seamless experiences.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Boost production efficiency and reduce downtime with predictive AI</li>
                <li>Enhance supplier collaboration, compliance, and transparency</li>
                <li>Deliver frictionless customer journeys from showroom to aftersales</li>
                <li>Leverage real-time analytics and CRM for smarter decisions</li>
                <li>Enable connected vehicles and digital services</li>
              </ul>
              <Button size="lg" variant="secondary" className="px-8 py-3 mb-4">
                Explore Automotive Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80"
                alt="Automotive Innovation"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* ServiceNow in Automotive */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-12 text-center">
              ServiceNow for Automotive: Key Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Supplier Collaboration */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <Workflow className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Supplier Collaboration & Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Streamline onboarding, compliance, and issue resolution with automated workflows and AI-powered analytics.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Supplier Portal & Case Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Quality Issue Tracking & Predictive Alerts</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Compliance Automation & Documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* IT & Operations Management */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                    <Settings className="h-6 w-6 text-chart-2" />
                  </div>
                  <CardTitle className="text-lg">Smart Manufacturing & IT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Enhance uptime, efficiency, and safety of manufacturing systems and IT infrastructure with AI-driven automation.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Incident & Change Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Asset Lifecycle & Preventive Maintenance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>IoT Integration & Real-Time Monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Customer Experience */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                    <BarChart3 className="h-6 w-6 text-chart-3" />
                  </div>
                  <CardTitle className="text-lg">Connected Customer Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Deliver seamless aftersales, warranty, and omni-channel support with unified CRM and AI-powered service management.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Warranty & Claims Automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Aftersales Service Requests & Scheduling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Omni-channel CRM & Virtual Agents</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Connected Vehicles & Digital Services */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                    <Rocket className="h-6 w-6 text-chart-4" />
                  </div>
                  <CardTitle className="text-lg">Connected Vehicles & Mobility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Enable real-time data sharing, remote diagnostics, and personalized digital services for modern vehicles.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Telematics & IoT Integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Remote Diagnostics & Predictive Maintenance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Subscription & Mobility Services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* AI & Analytics for Automotive */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                    <Brain className="h-6 w-6 text-chart-5" />
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
                      <span>Predictive Quality & Maintenance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Supply Chain Risk Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Customer Sentiment & Loyalty Analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* CRM & Dealer Network Management */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">CRM & Dealer Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Connect dealers, partners, and customers with unified CRM, sales, and service management.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Dealer Portal & Collaboration</span>
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

        {/* Automotive Transformation Benefits */}
        <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-10 text-center">
              Why Digital Transformation Matters in Automotive
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80"
                  alt="Smart Factory"
                  className="h-24 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Smart Manufacturing</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Integrate IoT, AI, and automation for predictive maintenance, quality control, and optimized production lines.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                  alt="Connected Vehicles"
                  className="h-24 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Connected Vehicles</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Enable real-time data sharing, remote diagnostics, and personalized digital services for modern vehicles.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Customer Experience"
                  className="h-24 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Customer Experience</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Deliver frictionless aftersales, warranty, and omni-channel support to build loyalty and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-12 text-center">
              Our Approach for Automotive Transformation
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Workflow className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">1. Assess</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze current processes, technology, and data landscape for transformation readiness.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">2. Design</h3>
                <p className="text-muted-foreground text-sm">
                  Develop tailored ServiceNow, AI, and CRM solutions for automotive needs.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">3. Implement</h3>
                <p className="text-muted-foreground text-sm">
                  Deploy and integrate digital workflows across manufacturing, supply chain, and customer service.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-primary" />
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
        <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">
              Why IfBash & ServiceNow for Automotive?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Industry Expertise & Security
                  </h3>
                  <p className="text-muted-foreground">
                    Proven delivery for global OEMs, suppliers, and dealers. Enterprise-grade security, compliance, and data protection.
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
                    Flexible platforms that grow with your business and adapt to new mobility trends.
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
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-light text-primary mb-10 text-center">
              What Our Automotive Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg border-none">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    “IfBash helped us connect our supply chain and improve quality control. Our downtime dropped by 30% and customer satisfaction is at an all-time high.”
                  </p>
                  <div className="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="h-10 w-10 rounded-full" />
                    <div>
                      <span className="font-semibold text-primary">John M.</span>
                      <span className="block text-xs text-muted-foreground">COO, Global OEM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-none">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    “The ServiceNow platform and AI solutions from IfBash transformed our aftersales experience. We’re now leaders in customer loyalty.”
                  </p>
                  <div className="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="h-10 w-10 rounded-full" />
                    <div>
                      <span className="font-semibold text-primary">Priya S.</span>
                      <span className="block text-xs text-muted-foreground">VP, Automotive Retail</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">How quickly can we see results from ServiceNow transformation?</h3>
                <p className="text-muted-foreground">
                  Most clients see measurable improvements in efficiency and customer experience within 3-6 months of implementation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Is your solution scalable for global automotive enterprises?</h3>
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
        <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-light text-white mb-6">
              Drive Automotive Innovation with ServiceNow & IfBash
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Transform your automotive business with digital workflows, AI, CRM, and customer-centric solutions.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="mt-8 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
                alt="Automotive Team"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}