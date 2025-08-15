import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  BarChart3,
  Award,
  CheckCircle,
  ArrowRight,
  Settings,
  Rocket,
  Shield,
  Star,
  Quote,
  Database,
  MonitorSmartphone,
  RefreshCw,
} from "lucide-react";

export default function ManagedServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(247,248,250,0.92) 60%, rgba(38,163,217,0.18) 100%),
            url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <MonitorSmartphone className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">Service</Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            Managed Services for ServiceNow, AI & CRM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Focus on your core business while we expertly manage, optimize, and secure your ServiceNow, AI, and CRM platforms. Our managed services deliver reliability, innovation, and measurable value for enterprise growth.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “ifBash’s managed services team keeps our ServiceNow and CRM running at peak performance. We’ve reduced downtime by 99%, cut IT costs by 35%, and accelerated innovation across the business.”
            </span>
            <Star className="h-5 w-5 text-yellow-400 ml-2" />
          </div>
        </div>
      </section>

      {/* Results & Case Study */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">99%</h3>
              <p className="text-muted-foreground">Reduction in Downtime</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">35%</h3>
              <p className="text-muted-foreground">Lower IT Operational Costs</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Proactive Monitoring & Support</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Case Study: Managed Services for Global Manufacturing
            </span>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A global manufacturer partnered with ifBash for managed ServiceNow and CRM. The result: near-zero downtime, streamlined IT operations, and rapid deployment of new AI-driven features for business agility.
            </p>
          </div>
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
                  <MonitorSmartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Platform Monitoring & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  24/7 monitoring, incident management, and expert support for ServiceNow, AI, and CRM.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Real-Time Health Checks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Incident Response</span>
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
                  <RefreshCw className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Continuous Improvement & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Proactive enhancements, AI-driven automation, and regular updates to keep your platforms future-ready.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Workflow Updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>AI Feature Deployment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Process Optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Database className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Data Management & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Ensure data integrity, compliance, and security across ServiceNow, AI, and CRM environments.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Data Backup & Recovery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Compliance Monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Security Audits</span>
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
                <MonitorSmartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Monitor</h3>
              <p className="text-muted-foreground text-sm">
                Proactive platform monitoring and health checks.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Continuous improvement and automation for peak performance.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Secure</h3>
              <p className="text-muted-foreground text-sm">
                Data management, compliance, and security assurance.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Innovate</h3>
              <p className="text-muted-foreground text-sm">
                Rapid deployment of new features and AI capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ServiceNow & Why ifBash Sidebars */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-primary/10 p-6">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              Why ServiceNow?
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <strong>Security & Compliance:</strong> Enterprise-grade protection and regulatory confidence.
              </li>
              <li>
                <strong>Scalability:</strong> Grows with your business and adapts to change.
              </li>
              <li>
                <strong>Integration:</strong> Seamless with AI, CRM, and legacy systems.
              </li>
              <li>
                <strong>Proven Results:</strong> Trusted by global leaders for transformation.
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-primary/10 p-6">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Star className="h-6 w-6 mr-2" />
              Why ifBash?
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <strong>Expertise:</strong> Deep experience in ServiceNow, AI, and CRM managed services.
              </li>
              <li>
                <strong>Innovation:</strong> Proactive, AI-driven enhancements for your platforms.
              </li>
              <li>
                <strong>Customer-Centric:</strong> Proven track record of delivering measurable business value.
              </li>
              <li>
                <strong>End-to-End Support:</strong> From monitoring to optimization and innovation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready for Reliable Managed Services?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let ifBash keep your ServiceNow, AI, and CRM platforms secure, optimized, and future-ready.
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