import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Users,
  BarChart3,
  Award,
  CheckCircle,
  ArrowRight,
  MonitorCheck,
  ShieldCheck,
  RefreshCcw,
  LifeBuoy
} from "lucide-react";

export default function ManagedServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <MonitorCheck className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">Service</Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            Managed Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Proactive management and support for your critical IT systems and business applications. 
            Our managed services team ensures reliability, security, and performance—so you can focus on growth.
          </p>
        </div>
      </section>

      {/* Managed Services Solutions */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Managed Services Solutions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Application Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  End-to-end monitoring, maintenance, and optimization of your business applications.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>24/7 Monitoring & Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Incident & Problem Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Protect your data and systems with robust security and compliance management.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Threat Detection & Response</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Vulnerability Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Regulatory Compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <RefreshCcw className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Cloud & Infrastructure Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Ensure high availability and scalability of your cloud and IT infrastructure.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Cloud Operations & Optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Backup & Disaster Recovery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Capacity Planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">End User Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Responsive helpdesk and technical support for your teams and users.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Helpdesk Services</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Remote & Onsite Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Knowledge Base & Self-Service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <LifeBuoy className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Proactive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Prevent issues before they impact your business with regular health checks and updates.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>System Health Monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Patch Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Preventive Maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Managed Services Approach */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Our Managed Services Approach</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <MonitorCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Monitor</h3>
              <p className="text-muted-foreground text-sm">
                Proactively monitor systems and applications for optimal performance.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Protect</h3>
              <p className="text-muted-foreground text-sm">
                Safeguard your environment with robust security and compliance controls.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <RefreshCcw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Maintain</h3>
              <p className="text-muted-foreground text-sm">
                Perform regular updates, health checks, and preventive maintenance.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Support</h3>
              <p className="text-muted-foreground text-sm">
                Provide responsive helpdesk and technical support for your users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready for Hassle-Free IT Operations?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let our managed services experts keep your systems running smoothly and securely.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}