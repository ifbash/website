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
              Process Optimization for ServiceNow
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Optimize Enterprise Processes with ServiceNow & IfBash
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Streamline, automate, and continuously improve your business operations. IfBash leverages ServiceNow to optimize workflows, reduce manual effort, and deliver actionable insights—driving efficiency, compliance, and measurable results across your enterprise.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “IfBash’s process optimization expertise with ServiceNow helped us eliminate bottlenecks, automate approvals, and improve service delivery. Our teams are more productive and our customers are happier.”
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
              <h3 className="text-3xl font-bold text-primary mb-2">45%</h3>
              <p className="text-muted-foreground">Reduction in Manual Work</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">50%</h3>
              <p className="text-muted-foreground">Faster Workflow Cycle Times</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-muted-foreground">Process Compliance & Reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Optimization Services for ServiceNow */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            IfBash Process Optimization Services for ServiceNow
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate repetitive tasks, approvals, and notifications to boost productivity and reduce errors.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Process Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Gain visibility into process performance, bottlenecks, and opportunities for improvement with ServiceNow analytics.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Continuous Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Establish feedback loops and optimization frameworks to refine processes and sustain results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Compliance & Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Ensure processes meet regulatory requirements and reduce operational risks with automated controls.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Employee Enablement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Empower teams with self-service portals, knowledge management, and streamlined workflows.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">End-to-End Process Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Assess, redesign, and optimize business processes across departments for maximum efficiency and impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Optimization Framework */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            IfBash Process Optimization Framework
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Assess</h3>
              <p className="text-muted-foreground text-sm">
                Map current processes, identify inefficiencies, and set optimization goals.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Strategize</h3>
              <p className="text-muted-foreground text-sm">
                Design process improvements, automation strategies, and success metrics.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Execute</h3>
              <p className="text-muted-foreground text-sm">
                Implement optimized workflows, automation, and controls in ServiceNow.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Continuously monitor, analyze, and refine processes for sustained improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Why IfBash for ServiceNow Process Optimization?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Proven ServiceNow Expertise
                </h3>
                <p className="text-muted-foreground">
                  Decades of experience optimizing processes for global enterprises using ServiceNow.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Security, Compliance & Scalability
                </h3>
                <p className="text-muted-foreground">
                  Trusted solutions for secure, compliant, and scalable process optimization.
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
            The IfBash Process Optimization Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Operational Excellence</h3>
              <p className="text-muted-foreground">
                Achieve higher efficiency, lower costs, and better outcomes with optimized processes.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Data-Driven Decisions</h3>
              <p className="text-muted-foreground">
                Leverage analytics and insights to continuously improve and innovate.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Empowered Teams</h3>
              <p className="text-muted-foreground">
                Enable employees with streamlined workflows and self-service tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to Optimize Your Processes with ServiceNow?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how IfBash can help your organization streamline operations, automate workflows, and achieve process excellence with ServiceNow.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Connect with Process Optimization Experts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}