import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Zap,
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
  Globe,
  Wrench,
  CloudLightning,
} from "lucide-react";

export default function EnergyUtilitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-8 w-8 text-primary" />
              <Badge variant="outline" className="text-primary border-primary/20">Energy & Utilities</Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Powering Energy & Utilities Transformation with ServiceNow & IfBash
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
              Accelerate grid modernization, operational resilience, and customer trust. IfBash leverages ServiceNow, AI, and CRM to help energy and utilities leaders optimize assets, empower field teams, and deliver sustainable, connected experiences.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Modernize grid and asset management with predictive AI</li>
              <li>Enhance field service efficiency and safety</li>
              <li>Deliver seamless customer journeys and self-service</li>
              <li>Enable sustainability, compliance, and ESG reporting</li>
              <li>Leverage real-time analytics and CRM for smarter decisions</li>
            </ul>
            <Button size="lg" variant="secondary" className="px-8 py-3 mb-4">
              Explore Energy & Utilities Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
              alt="Energy Innovation"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* ServiceNow in Energy & Utilities */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            ServiceNow for Energy & Utilities: Key Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Grid & Asset Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <CloudLightning className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Grid & Asset Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Optimize grid reliability, asset lifecycle, and maintenance with AI-powered workflows and IoT integration.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Predictive Maintenance & Monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Asset Lifecycle Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Grid Outage & Restoration Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            {/* Field Service & Workforce Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Wrench className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Field Service & Workforce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Empower field teams with mobile tools, automated scheduling, and real-time safety alerts.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Mobile Work Orders & Dispatch</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Scheduling & Routing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Safety & Compliance Monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            {/* Customer Experience & Self-Service */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Customer Experience & Self-Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Deliver seamless support, outage notifications, and personalized journeys with unified CRM and AI-powered service management.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Omnichannel Service & Virtual Agents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Outage Notifications & Case Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Personalized Billing & Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            {/* Sustainability & ESG Reporting */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Leaf className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Sustainability & ESG</CardTitle>
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
                    <span>Carbon Footprint Tracking</span>
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
                  Harness AI and analytics for demand forecasting, outage prediction, and smarter business decisions.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Demand Sensing & Forecasting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Outage Prediction & Risk Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Customer Sentiment & Engagement Analysis</span>
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
                  Connect partners, regulators, and customers with unified CRM, collaboration, and service management.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Partner Portal & Collaboration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Performance Analytics & Reporting</span>
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

      {/* Transformation Benefits */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-10 text-center">
            Why Digital Transformation Matters in Energy & Utilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Grid Modernization"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Grid Modernization</h3>
              <p className="text-muted-foreground text-sm text-center">
                Integrate IoT, AI, and automation for predictive maintenance, outage management, and optimized grid operations.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80"
                alt="Field Service"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Field Service Excellence</h3>
              <p className="text-muted-foreground text-sm text-center">
                Empower field teams with mobile tools, automated scheduling, and real-time safety alerts.
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
                Deliver frictionless support, outage notifications, and personalized journeys to build trust and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Our Approach for Energy & Utilities Transformation
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
                Develop tailored ServiceNow, AI, and CRM solutions for energy and utilities needs.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Implement</h3>
              <p className="text-muted-foreground text-sm">
                Deploy and integrate digital workflows across grid, field service, and customer operations.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
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
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Why IfBash & ServiceNow for Energy & Utilities?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Industry Expertise & Security
                </h3>
                <p className="text-muted-foreground">
                  Proven delivery for utilities, grid operators, and energy providers. Enterprise-grade security, compliance, and data protection.
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
                  Flexible platforms that grow with your business and adapt to new energy trends.
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
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Power Your Energy & Utilities Transformation with ServiceNow & IfBash
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Transform your energy and utilities business with digital workflows, AI, CRM, and customer-centric solutions.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
              alt="Energy Team"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}