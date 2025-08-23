import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  AlertTriangle,
  RefreshCw,
  FileText,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Database,
  BookOpen,
  MonitorSmartphone,
  Layers,
  Bot,
  UserCheck,
  BarChart2,
  PieChart,
  Zap,
  Link2,
  Phone,
  Globe,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  Package,
} from "lucide-react";

export default function TelecomServiceManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 moondust-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <Phone className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">ServiceNow</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Transform Telecom Operations with ServiceNow Telecommunications Service Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-2">
            Deliver seamless customer experiences and optimize telecom operations with ServiceNow Telecommunications Service Management (TSM). Automate service assurance, streamline order management, and unify workflows across your network and business support systems.
          </p>
          <p className="text-lg text-primary font-medium max-w-2xl">
            Discover ServiceNow TSM: faster issue resolution, proactive service assurance, and digital transformation for telecom providers.
          </p>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Telecom Service Management Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Assurance */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-1/20 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-chart-1" />
                </div>
                <CardTitle className="text-lg">Service Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Proactively monitor, detect, and resolve network issues to ensure high-quality telecom services.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated incident detection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Root cause analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Real-time service health dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Order Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Package className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate and orchestrate telecom order fulfillment from quote to activation.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Order capture & validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated provisioning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Status tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Customer Care & Case Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Customer Care & Case Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Deliver personalized support and resolve customer issues faster with unified case management.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Omnichannel support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated case routing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Customer 360 view</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Network Inventory Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Database className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Network Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Track, manage, and optimize telecom network assets and resources for operational efficiency.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Asset lifecycle management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Inventory visibility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Cost optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Order Orchestration */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <RefreshCw className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Service Order Orchestration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Coordinate complex service orders across multiple systems and teams for faster delivery.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated workflows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Multi-system integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Real-time status updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* SLA & Performance Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">SLA & Performance Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Define, monitor, and manage SLAs to ensure consistent service delivery and compliance.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>SLA tracking & alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Performance analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Compliance reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Partner & Supplier Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Layers className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Partner & Supplier Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Manage telecom partners and suppliers, contracts, and performance for better outcomes.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Partner profiles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Contract management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Performance analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Knowledge Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <BookOpen className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Knowledge Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Centralized telecom knowledge base with AI-powered search and self-service resources.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>AI-powered search</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Self-service articles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated article creation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Virtual Agent & GenAI */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Virtual Agent & GenAI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  GenAI-powered chatbots for 24/7 telecom support, automated triage, and predictive issue resolution.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Conversational GenAI support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated triage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Performance Analytics */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <BarChart2 className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Real-time dashboards and KPIs to monitor, analyze, and improve telecom service performance.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Customizable dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Trend analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Actionable insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Reporting */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <PieChart className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Advanced reporting tools for compliance, audit, and business intelligence in telecom.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated reports</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Exportable analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Regulatory compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Integrations */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Link2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Seamlessly connect ServiceNow TSM with OSS/BSS, cloud platforms, and third-party telecom tools.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>API & connectors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Multi-cloud support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Partner ecosystem</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile TSM */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <MonitorSmartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Mobile TSM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Manage telecom services on the go with mobile apps for incident, request, and approval management.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Mobile ticketing</span>
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
              Unlock seamless telecom operations with ServiceNow TSM: proactive service assurance, automated order management, and unified workflows for measurable business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Proactive Service Assurance</h3>
              <p className="text-muted-foreground">
                Detect and resolve network issues before they impact customers.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-2/20 flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Automated Order Management</h3>
              <p className="text-muted-foreground">
                Streamline order fulfillment and activation with end-to-end automation.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-5/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-chart-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Unified Customer Experience</h3>
              <p className="text-muted-foreground">
                Deliver personalized support and seamless engagement across channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Ready to Transform Your Telecom Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how ServiceNow Telecommunications Service Management delivers proactive assurance, automated order management, and unified workflows for telecom providers.
          </p>
          <Button size="lg" className="moondust-gradient hover:opacity-90 text-white px-8 py-3">
            Explore Telecom Service Management
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}