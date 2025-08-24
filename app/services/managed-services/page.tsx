import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Workflow,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  Rocket,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Award,
  Brain,
  Database,
  UserCheck,
  MessageCircle,
  Star,
  Quote,
} from "lucide-react";

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-blue-50 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(247,248,250,0.92) 60%, rgba(38,163,217,0.18) 100%),
              url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <Workflow className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">
              Managed Services for ServiceNow
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Optimize & Secure Your ServiceNow Platform with Managed Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Ensure peak performance, reliability, and continuous improvement for your ServiceNow environment. IfBash provides proactive monitoring, expert support, and strategic enhancements—freeing your teams to focus on business growth while we manage your platform end-to-end.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “IfBash’s managed services keep our ServiceNow running smoothly, secure, and always up-to-date. Their expertise and responsiveness let us focus on innovation, not platform issues.”
            </span>
            <Star className="h-5 w-5 text-yellow-400 ml-2" />
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-muted-foreground">ServiceNow Uptime & Reliability</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Expert Monitoring & Support</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">40%</h3>
              <p className="text-muted-foreground">Reduction in Platform Incidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Services for ServiceNow */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            IfBash Managed Services for ServiceNow
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Platform Monitoring & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Proactive monitoring, threat detection, and compliance management to keep ServiceNow secure and resilient.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Incident & Problem Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Rapid resolution of incidents and root-cause analysis to minimize downtime and disruptions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Rocket className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Continuous Platform Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Regular updates, performance tuning, and enhancements to maximize ServiceNow value.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">User Support & Enablement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Dedicated helpdesk, training, and onboarding to empower users and drive adoption.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Reporting & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Actionable dashboards and insights to track performance, usage, and improvement opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Upgrade & Release Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Seamless ServiceNow upgrades, patching, and release management to keep your platform current and compliant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Managed Services Framework */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            IfBash Managed Services Framework
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Assess</h3>
              <p className="text-muted-foreground text-sm">
                Review platform health, security posture, and support requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Strategize</h3>
              <p className="text-muted-foreground text-sm">
                Develop managed services plans for monitoring, support, and optimization.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Execute</h3>
              <p className="text-muted-foreground text-sm">
                Deliver 24/7 monitoring, incident response, and platform enhancements.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Continuously improve ServiceNow with analytics, upgrades, and user enablement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Why IfBash Managed Services for ServiceNow?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Security, Compliance & Reliability
                </h3>
                <p className="text-muted-foreground">
                  Trusted by enterprises for secure, compliant, and always-on ServiceNow operations.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Expert Support & Continuous Improvement
                </h3>
                <p className="text-muted-foreground">
                  Certified ServiceNow professionals deliver proactive support and ongoing platform enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            The IfBash Managed Services Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Business Continuity</h3>
              <p className="text-muted-foreground">
                Maximize uptime and minimize risk with proactive platform management.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Cost Efficiency</h3>
              <p className="text-muted-foreground">
                Reduce operational costs and resource overhead with expert managed services.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">User Satisfaction</h3>
              <p className="text-muted-foreground">
                Empower users with responsive support, training, and platform enhancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready for Worry-Free ServiceNow Operations?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how IfBash Managed Services can optimize, secure, and support your ServiceNow platform—so you can focus on what matters most.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Connect with Managed Services Experts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}