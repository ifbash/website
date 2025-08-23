import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Link2,
  Zap,
  BarChart2,
  PieChart,
  Layers,
  Bot,
  MonitorSmartphone,
  CheckCircle,
  ArrowRight,
  Database,
  FileText,
  BookOpen,
  Users,
} from "lucide-react";

export default function IntegrationHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 moondust-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <Link2 className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">ServiceNow</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Accelerate Digital Workflows with ServiceNow Integration Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-2">
            Connect your enterprise with ServiceNow Integration Hub. Orchestrate workflows, automate processes, and integrate systems across cloud and on-premises environments—all from a single platform.
          </p>
          <p className="text-lg text-primary font-medium max-w-2xl">
            Discover Integration Hub: fast, secure, and scalable integrations for digital transformation.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Integration Hub Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Spokes Library */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Spokes Library</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Pre-built integrations for popular enterprise apps like Microsoft, SAP, Slack, and more.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Hundreds of ready-to-use spokes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Rapid deployment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Continuous updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Flow Designer */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Flow Designer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Build, visualize, and automate workflows with a low-code, drag-and-drop interface.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Low-code automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Reusable flows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Real-time testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Action Designer */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Bot className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Action Designer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Create custom actions to extend integrations and automate complex business logic.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Reusable actions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Secure execution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* API & Connectors */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">API & Connectors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Integrate with REST, SOAP, JDBC, and other protocols for seamless data exchange.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>REST & SOAP APIs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>JDBC connectors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Secure authentication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Transformation */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Data Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Transform, map, and enrich data between systems for consistent and accurate workflows.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Data mapping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Field transformation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Validation rules</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Monitoring & Analytics */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <BarChart2 className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Monitoring & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Track integration performance, usage, and health with real-time dashboards and reports.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Real-time dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Usage analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Error tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Security & Governance */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Security & Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Ensure compliance, auditability, and secure integrations with robust governance controls.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Role-based access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Audit trails</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Encryption & compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile Integration */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <MonitorSmartphone className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Mobile Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Extend integrations to mobile apps for on-the-go workflow automation and notifications.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Mobile workflow triggers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Push notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Remote approvals</span>
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
              Unlock seamless enterprise connectivity with ServiceNow Integration Hub: faster automation, simplified integrations, and secure digital workflows for measurable business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Accelerated Automation</h3>
              <p className="text-muted-foreground">
                Automate processes across systems with low-code flows and pre-built spokes.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-2/20 flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Unified Integrations</h3>
              <p className="text-muted-foreground">
                Connect cloud, on-premises, and legacy systems from a single platform.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-5/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-chart-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Enterprise-Grade Security</h3>
              <p className="text-muted-foreground">
                Ensure compliance and governance with robust security controls and audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Ready to Connect and Automate Your Enterprise?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how ServiceNow Integration Hub delivers fast, secure, and scalable integrations for your digital transformation.
          </p>
          <Button size="lg" className="moondust-gradient hover:opacity-90 text-white px-8 py-3">
            Explore Integration Hub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}