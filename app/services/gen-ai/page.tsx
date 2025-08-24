import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Zap,
  Database,
  MessageCircle,
  Lightbulb,
  Rocket,
  ArrowRight,
  TrendingUp,
  Award,
  Shield,
  BarChart3,
  Star,
  Quote,
} from "lucide-react";

export default function GenAIPage() {
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
            <Brain className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">
              GenAI & Agentic AI for ServiceNow
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Elevate ServiceNow with GenAI & Agentic AI Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Supercharge your ServiceNow platform with Generative AI and Agentic AI. IfBash delivers intelligent automation, conversational agents, and advanced analytics—enabling self-driving workflows, smarter service experiences, and rapid business outcomes.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “IfBash’s GenAI and Agentic AI for ServiceNow transformed our ITSM and employee experience. Automated agents resolved requests instantly and delivered actionable insights for our teams.”
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
              <h3 className="text-3xl font-bold text-primary mb-2">60%</h3>
              <p className="text-muted-foreground">Faster Ticket Resolution with Agentic AI</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">4x</h3>
              <p className="text-muted-foreground">Increase in Automated Workflow Coverage</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">98%</h3>
              <p className="text-muted-foreground">User Satisfaction with GenAI-powered ServiceNow</p>
            </div>
          </div>
        </div>
      </section>

      {/* GenAI & Agentic AI Services for ServiceNow */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            GenAI & Agentic AI Services for ServiceNow
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">GenAI Strategy for ServiceNow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Identify high-impact GenAI and Agentic AI use cases, build a roadmap, and align with ServiceNow workflows.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Agentic AI Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Deploy autonomous agents to resolve tickets, orchestrate workflows, and drive self-service across ServiceNow modules.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Database className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">GenAI Integration & Data Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Integrate GenAI for predictive analytics, data summarization, and actionable insights within ServiceNow dashboards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <MessageCircle className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Conversational AI Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Implement chatbots and virtual assistants for ITSM, HR, and customer service—delivering instant, contextual support.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Self-Driving Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Enable ServiceNow workflows to run autonomously, handling requests, approvals, and escalations with minimal human input.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Responsible AI & Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Ensure ethical, compliant, and secure GenAI and Agentic AI deployments within ServiceNow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GenAI & Agentic AI Framework */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            IfBash GenAI & Agentic AI Delivery Framework
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Discover</h3>
              <p className="text-muted-foreground text-sm">
                Assess ServiceNow environment, data readiness, and GenAI/Agentic AI opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Design</h3>
              <p className="text-muted-foreground text-sm">
                Architect GenAI and Agentic AI solutions, select models, and define ServiceNow integration strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Deploy</h3>
              <p className="text-muted-foreground text-sm">
                Implement, integrate, and launch GenAI/Agentic AI solutions within ServiceNow.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Monitor, refine, and scale GenAI/Agentic AI for continuous improvement and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Why IfBash for GenAI & Agentic AI in ServiceNow?
          </h2>
          <h3 className="text-xl font-medium text-foreground mb-2">
            ServiceNow & AI Expertise
          </h3>
          <p className="text-muted-foreground">
            Deep experience in ServiceNow, GenAI, and agentic automation for enterprise transformation.
          </p>
          <h3 className="text-xl font-medium text-foreground mb-2">
            Secure & Responsible AI
          </h3>
          <p className="text-muted-foreground">
            Enterprise-grade security, compliance, and ethical AI governance for ServiceNow environments.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            The IfBash GenAI & Agentic AI Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Autonomous Service Delivery</h3>
              <p className="text-muted-foreground">
                Enable self-driving workflows and instant resolution with agentic AI.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Smarter Insights</h3>
              <p className="text-muted-foreground">
                Unlock predictive analytics and actionable intelligence within ServiceNow.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Secure, compliant, and responsible GenAI/Agentic AI for mission-critical ServiceNow operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to Transform ServiceNow with GenAI & Agentic AI?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with IfBash’s experts to design, deploy, and optimize GenAI and Agentic AI for your ServiceNow platform.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Start Your ServiceNow AI Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}