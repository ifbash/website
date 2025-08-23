import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MonitorSmartphone,
  BookOpen,
  Layers,
  Users,
  CheckCircle,
  ArrowRight,
  Link2,
  PieChart,
  BarChart2,
  Zap,
  Bot,
  FileText,
} from "lucide-react";

export default function ServicePortalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 moondust-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <MonitorSmartphone className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">ServiceNow</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Transform Employee Experiences with ServiceNow Service Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-2">
            Empower your workforce with a modern, intuitive self-service portal. ServiceNow Service Portal delivers personalized, mobile-friendly experiences for IT, HR, Facilities, and more—driving productivity and satisfaction.
          </p>
          <p className="text-lg text-primary font-medium max-w-2xl">
            Discover ServiceNow Service Portal: unified access, streamlined requests, and seamless digital workflows.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Service Portal Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Unified Self-Service */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Unified Self-Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Centralize access to IT, HR, Facilities, and other services in one intuitive portal.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Personalized dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Role-based access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Multi-department support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Catalog */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Service Catalog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Enable users to browse, request, and track services with a dynamic catalog.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Customizable catalog items</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated fulfillment workflows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Request status tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Knowledge Base */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <BookOpen className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Provide instant answers with AI-powered search and curated self-help articles.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>GenAI article recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Contextual search</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Self-service troubleshooting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Virtual Agent */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Virtual Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  24/7 conversational support for common requests and issues, powered by GenAI.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated chat assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Request fulfillment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile Experience */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <MonitorSmartphone className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Mobile Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Access the portal anytime, anywhere with responsive design and mobile apps.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Responsive UI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Push notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Mobile approvals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Customizable Widgets */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Layers className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Customizable Widgets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Tailor the portal with drag-and-drop widgets for branding and unique workflows.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Widget library</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Custom themes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Flexible layouts</span>
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
                  Connect Service Portal with enterprise apps, cloud platforms, and third-party tools.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>API & connectors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Single sign-on (SSO)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Partner ecosystem</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Analytics & Reporting */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <BarChart2 className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Monitor portal usage, service performance, and user satisfaction with real-time dashboards.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Customizable dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Usage analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Actionable insights</span>
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
              Unlock seamless employee experiences with ServiceNow Service Portal: personalized self-service, faster request fulfillment, and unified digital workflows for measurable business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Faster Service Delivery</h3>
              <p className="text-muted-foreground">
                Reduce resolution times with automated workflows and GenAI-powered virtual agents.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-2/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Personalized Experience</h3>
              <p className="text-muted-foreground">
                Deliver tailored content, services, and recommendations for every user.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-5/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-chart-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Unified Access</h3>
              <p className="text-muted-foreground">
                Provide a single gateway to all enterprise services, boosting productivity and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Ready to Elevate Your Employee Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how ServiceNow Service Portal delivers unified self-service, personalized workflows, and mobile-friendly access for your organization.
          </p>
          <Button size="lg" className="moondust-gradient hover:opacity-90 text-white px-8 py-3">
            Explore Service Portal
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}