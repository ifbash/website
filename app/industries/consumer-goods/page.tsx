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
  Leaf,
  Store,
  Package,
} from "lucide-react";

export default function ConsumerGoodsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <Badge variant="outline" className="text-primary border-primary/20">Consumer Goods</Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Transform Consumer Goods with ServiceNow & IfBash
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
              Accelerate growth, agility, and consumer loyalty. IfBash leverages ServiceNow, AI, and CRM to help consumer goods leaders modernize supply chains, optimize retail execution, and deliver seamless omnichannel experiences.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Enhance supply chain visibility and responsiveness with AI</li>
              <li>Drive retail execution and merchandising excellence</li>
              <li>Deliver personalized consumer journeys with CRM and analytics</li>
              <li>Enable sustainability and compliance across operations</li>
              <li>Empower teams with digital workflows and automation</li>
            </ul>
            <Button size="lg" variant="secondary" className="px-8 py-3 mb-4">
              Explore Consumer Goods Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
              alt="Consumer Goods Innovation"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* ServiceNow in Consumer Goods */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            ServiceNow for Consumer Goods: Key Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Supply Chain & Logistics */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Supply Chain & Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Gain real-time visibility, automate issue resolution, and optimize inventory with AI-powered workflows.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Supplier Collaboration & Case Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Inventory Optimization & Predictive Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Logistics & Returns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Retail Execution & Merchandising */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Store className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Retail Execution & Merchandising</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Ensure perfect store execution, compliance, and rapid response to market changes with digital workflows.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Store Audits & Compliance Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Merchandising Issue Resolution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Promotion & Planogram Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Omnichannel Consumer Experience */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Omnichannel Consumer Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Deliver seamless support, loyalty programs, and personalized journeys with unified CRM and AI-powered service management.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Consumer Service Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Loyalty & Rewards Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Omnichannel CRM & Virtual Agents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sustainability & Compliance */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Leaf className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Sustainability & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Track, report, and optimize sustainability initiatives and regulatory compliance with digital workflows.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>ESG Data Collection & Reporting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Regulatory Compliance Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Supplier Sustainability Audits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI & Analytics */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Brain className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">AI & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Harness AI and analytics for demand forecasting, consumer insights, and smarter business decisions.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Demand Sensing & Forecasting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Consumer Sentiment Analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Promotion & Pricing Optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CRM & Partner Network */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">CRM & Partner Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect retailers, distributors, and consumers with unified CRM, sales, and service management.
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
                    <span>Consumer Engagement & Loyalty Programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Benefits */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-10 text-center">
            Why Digital Transformation Matters in Consumer Goods
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
                alt="Supply Chain"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Agile Supply Chain</h3>
              <p className="text-muted-foreground text-sm text-center">
                Respond faster to market changes and disruptions with real-time visibility and automation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Retail Execution"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Retail Excellence</h3>
              <p className="text-muted-foreground text-sm text-center">
                Ensure perfect store execution and compliance for every product, every time.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Consumer Experience"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Consumer Experience</h3>
              <p className="text-muted-foreground text-sm text-center">
                Deliver frictionless omnichannel support and personalized journeys to build loyalty and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Our Approach for Consumer Goods Transformation
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
                Develop tailored ServiceNow, AI, and CRM solutions for consumer goods needs.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Implement</h3>
              <p className="text-muted-foreground text-sm">
                Deploy and integrate digital workflows across supply chain, retail, and consumer service.
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
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Why IfBash & ServiceNow for Consumer Goods?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Industry Expertise & Security
                </h3>
                <p className="text-muted-foreground">
                  Proven delivery for global brands, retailers, and distributors. Enterprise-grade security, compliance, and data protection.
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
                  Integrated AI, analytics, and CRM for predictive insights, automation, and consumer engagement.
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
                  Flexible platforms that grow with your business and adapt to new market trends.
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
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Drive Consumer Goods Innovation with ServiceNow & IfBash
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Transform your consumer goods business with digital workflows, AI, CRM, and consumer-centric solutions.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
              alt="Consumer Goods Team"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}