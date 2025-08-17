import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Brain,
  Bot,
  BarChart3,
  Shield,
  Star,
  Quote,
  Workflow,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Rocket,
  Target,
  Users,
  Award,
  Database,
  UserCheck,
  MessageCircle,
} from "lucide-react";

export default function GenAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(247,248,250,0.92) 60%, rgba(38,163,217,0.18) 100%),
              url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">
              Gen AI & Agentic AI Services
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Lead the Future with Gen AI & Agentic AI on ServiceNow
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Unlock transformative automation, intelligent decision-making, and autonomous agents. ifBash delivers Gen AI and Agentic AI solutions seamlessly integrated with ServiceNow and CRM—driving measurable business outcomes, operational excellence, and innovation for the C-suite.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “ifBash’s Gen AI and Agentic AI services revolutionized our ServiceNow platform—automating complex workflows, enhancing customer engagement, and unlocking new growth opportunities.”
            </span>
            <Star className="h-5 w-5 text-yellow-400 ml-2" />
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">60%</h3>
              <p className="text-muted-foreground">Faster Resolution of ServiceNow Cases</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">45%</h3>
              <p className="text-muted-foreground">Increase in Employee & Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Autonomous AI Agent Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gen AI & Agentic AI Services */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            ifBash Gen AI & Agentic AI Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Autonomous AI Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Deploy intelligent agents that automate tasks, learn from data, and interact with users across ServiceNow and CRM.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Ticket Resolution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Customer & Employee Query Handling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Workflow Orchestration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Brain className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Generative AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Leverage Gen AI to generate actionable insights, automate reporting, and personalize communications.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Predictive Analytics & Forecasting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Knowledge Base Creation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Personalized CRM Messaging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Workflow className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">AI-Enhanced Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Integrate Gen AI and Agentic AI into ServiceNow workflows for end-to-end automation and optimization.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Process Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Real-Time Decision Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Continuous Improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">AI-Driven Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Unlock new business models and revenue streams with Gen AI-powered ideation, automation, and analytics.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Business Model Transformation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>AI-Enabled Product Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Continuous Innovation Frameworks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Executive Dashboards & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Provide C-suite leaders with real-time visibility into AI performance, ROI, and business impact.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Custom Executive Dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>ROI & Value Tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Strategic Insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Framework */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            ifBash Gen AI Transformation Framework
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Assess</h3>
              <p className="text-muted-foreground text-sm">
                Evaluate AI readiness, digital maturity, and ServiceNow integration for strategic alignment.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Strategize</h3>
              <p className="text-muted-foreground text-sm">
                Design transformation roadmaps leveraging Gen AI, Agentic AI, and ServiceNow for measurable outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Execute</h3>
              <p className="text-muted-foreground text-sm">
                Implement AI agents, generative insights, and automated workflows with speed and precision.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Continuously improve with analytics, feedback, and innovation for sustained value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Why IfBash & ServiceNow?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Enterprise-Grade Security & Compliance
                </h3>
                <p className="text-muted-foreground">
                  Robust data protection, privacy, and regulatory compliance—trusted by global leaders.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <BarChart3 className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Scalable & Future-Proof Innovation
                </h3>
                <p className="text-muted-foreground">
                  AI solutions that adapt to evolving business needs and integrate seamlessly with your ecosystem.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Star className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Strategic Expertise & Delivery
                </h3>
                <p className="text-muted-foreground">
                  Proven success in Gen AI, Agentic AI, ServiceNow, and CRM—focused on measurable outcomes for stakeholders and C-suite.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Rocket className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  End-to-End Partnership
                </h3>
                <p className="text-muted-foreground">
                  From strategy to deployment and optimization, IfBash is your partner for continuous AI-powered transformation.
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
            The ifBash Advantage for Gen AI Transformation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Proven AI Expertise</h3>
              <p className="text-muted-foreground">
                Decades of experience delivering AI-powered transformation for Fortune 500 and high-growth organizations.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Autonomous Efficiency</h3>
              <p className="text-muted-foreground">
                Automate, optimize, and gain insights with Gen AI and agentic AI built into ServiceNow.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Accelerated Innovation</h3>
              <p className="text-muted-foreground">
                Drive new business models and competitive advantage with continuous AI-powered innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to Lead with Gen AI & Agentic AI?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how ifBash can help your organization unlock the full potential of ServiceNow, AI, and CRM for strategic growth and operational excellence.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Connect with Gen AI Experts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}