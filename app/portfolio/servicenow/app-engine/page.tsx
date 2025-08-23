import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Layers,
  MonitorSmartphone,
  Bot,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Database,
  BookOpen,
  BarChart2,
  PieChart,
  Zap,
  Link2,
  Code2,
  Sliders,
  Puzzle,
  ShieldCheck,
  Cloud,
} from "lucide-react";

export default function AppEnginePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 moondust-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <Settings className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">ServiceNow</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Build Powerful Apps Fast with ServiceNow App Engine
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-2">
            Accelerate innovation with ServiceNow App Engine. Empower anyone to build, automate, and deliver enterprise-grade applications—no code, low code, or pro code—all on a single, secure platform.
          </p>
          <p className="text-lg text-primary font-medium max-w-2xl">
            Discover App Engine: rapid development, seamless automation, and scalable digital workflows.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">App Engine Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* App Engine Studio */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">App Engine Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Visual, low-code development environment for building apps quickly and collaboratively.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Drag-and-drop UI builder</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Reusable components</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Collaboration tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Automation Engine */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Automation Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate workflows and integrate systems with low-code, no-code, and pro-code tools.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Flow Designer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Integration Hub</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>RPA & GenAI automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data & Security */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Data & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Enterprise-grade security, compliance, and data management built into every app.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Role-based access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Data encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Audit trails</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* App Templates & Store */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">App Templates & Store</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Jumpstart development with pre-built templates and access a marketplace of ready-to-use apps.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Industry templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>App marketplace</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Reusable solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile App Builder */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <MonitorSmartphone className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Mobile App Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Create mobile-first experiences for employees and customers with responsive design tools.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Mobile UI designer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Push notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Offline capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Integration Hub */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Link2 className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Integration Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect apps to any system—cloud, on-premises, or third-party—with pre-built spokes and APIs.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>API connectors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Pre-built spokes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Secure integrations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Governance & Lifecycle */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Sliders className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Governance & Lifecycle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Manage app development, deployment, and updates with built-in governance and lifecycle tools.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Release management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Change tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Analytics & Reporting */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <BarChart2 className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Gain actionable insights with real-time dashboards, KPIs, and advanced reporting tools.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Custom dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Performance analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Exportable reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* GenAI & Intelligent Automation */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-7/20 flex items-center justify-center mb-3">
                  <Bot className="h-6 w-6 text-chart-7" />
                </div>
                <CardTitle className="text-lg">GenAI & Intelligent Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Enhance apps with GenAI-powered chatbots, predictive analytics, and intelligent recommendations.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>GenAI chatbots</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Predictive insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-foreground mb-4">Key Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlock rapid innovation with ServiceNow App Engine: build apps faster, automate workflows, and scale securely—all on a unified platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Faster App Delivery</h3>
              <p className="text-muted-foreground">
                Launch enterprise apps in days, not months, with low-code and no-code tools.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-2/20 flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Unified Platform</h3>
              <p className="text-muted-foreground">
                Build, automate, and manage all your apps on a single, secure platform.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-5/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-chart-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Enterprise-Grade Security</h3>
              <p className="text-muted-foreground">
                Ensure compliance and protect data with built-in security and governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Ready to Build Apps Faster?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how ServiceNow App Engine empowers everyone to create, automate, and scale enterprise apps—no code, low code, or pro code.
          </p>
          <Button size="lg" className="moondust-gradient hover:opacity-90 text-white px-8 py-3">
            Explore App Engine
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}