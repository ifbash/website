import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
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

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <Badge variant="outline" className="text-primary border-primary/20">Retail</Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Transform Retail Experiences with ServiceNow & IfBash
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
              Deliver seamless, personalized, and efficient shopping journeys. IfBash leverages ServiceNow, AI, and CRM to help retailers modernize store operations, optimize supply chains, and engage customers across every channel.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Digitize store operations and workforce management</li>
              <li>Enhance omnichannel customer journeys with CRM and AI</li>
              <li>Optimize supply chain, inventory, and fulfillment</li>
              <li>Automate compliance, promotions, and service requests</li>
              <li>Leverage analytics for smarter merchandising and loyalty</li>
            </ul>
            <Button size="lg" variant="secondary" className="px-8 py-3 mb-4">
              Explore Retail Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
              alt="Retail Innovation"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* ServiceNow in Retail */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            ServiceNow for Retail: Key Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Store Operations & Workforce */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Store Operations & Workforce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Digitize store processes, automate scheduling, and empower staff with mobile tools and real-time insights.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Workforce Scheduling & Task Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Incident & Change Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Mobile Store Operations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Omnichannel Customer Experience */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Omnichannel Customer Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Deliver seamless support, personalized offers, and loyalty programs with unified CRM and AI-powered service management.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Omnichannel CRM & Virtual Agents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Personalized Promotions & Loyalty</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Customer Feedback & Analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Supply Chain & Inventory Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Workflow className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Supply Chain & Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Optimize inventory, automate replenishment, and improve supplier collaboration for agile fulfillment.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Inventory Visibility & Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Supplier Portal & Collaboration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Replenishment & Fulfillment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Promotions, Compliance & Service Requests */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Sparkles className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Promotions, Compliance & Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate promotions, ensure regulatory compliance, and manage service requests efficiently.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Promotion Management Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Regulatory Compliance Tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Service Request Automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI & Analytics for Retail */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Brain className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">AI & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Harness AI and analytics for predictive insights, merchandising optimization, and smarter business decisions.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Demand Forecasting & Inventory Optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Customer Sentiment & Loyalty Analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Sales Performance Dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CRM & Partner Network Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">CRM & Partner Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect stores, suppliers, and customers with unified CRM, collaboration, and service management.
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

      {/* Retail Transformation Benefits */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-10 text-center">
            Why Digital Transformation Matters in Retail
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
                alt="Omnichannel Experience"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Omnichannel Experience</h3>
              <p className="text-muted-foreground text-sm text-center">
                Deliver seamless shopping journeys and personalized engagement across every channel.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Store Operations"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Store Operations</h3>
              <p className="text-muted-foreground text-sm text-center">
                Digitize and automate store processes for greater efficiency, compliance, and staff empowerment.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Supply Chain"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Supply Chain</h3>
              <p className="text-muted-foreground text-sm text-center">
                Optimize inventory, automate replenishment, and improve supplier collaboration for agile fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Our Approach for Retail Transformation
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
                Develop tailored ServiceNow, AI, and CRM solutions for retail needs.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Implement</h3>
              <p className="text-muted-foreground text-sm">
                Deploy and integrate digital workflows across stores, supply chain, and customer service.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
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
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Why IfBash & ServiceNow for Retail?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Industry Expertise & Security
                </h3>
                <p className="text-muted-foreground">
                  Proven delivery for global retailers, brands, and marketplaces. Enterprise-grade security, compliance, and data protection.
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
                  Flexible platforms that grow with your business and adapt to new retail trends.
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

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Drive Retail Innovation with ServiceNow & IfBash
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Transform your retail business with digital workflows, AI, CRM, and customer-centric solutions.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
              alt="Retail Team"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}