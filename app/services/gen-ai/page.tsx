import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Bot,
  Users,
  BarChart3,
  Rocket,
  Shield,
  Star,
  Quote,
  Sparkles,
  Workflow,
  CheckCircle,
  ArrowRight,
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
              Service
            </Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            Gen AI & Agentic AI Solutions for ServiceNow, AI & CRM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Unlock the next level of automation and intelligence with Generative AI and Agentic AI. Enhance ServiceNow workflows, CRM engagement, and business decision-making with advanced AI agents that learn, adapt, and act autonomously.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “Gen AI agents from ifBash transformed our customer service and internal operations. We saw a 50% reduction in manual tasks and a 35% increase in customer satisfaction within months.”
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
              <h3 className="text-3xl font-bold text-primary mb-2">50%</h3>
              <p className="text-muted-foreground">Reduction in Manual Workflows</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">35%</h3>
              <p className="text-muted-foreground">Increase in Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">AI Agent Availability</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Case Study: AI-Driven Transformation in Retail
            </span>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A leading retailer partnered with ifBash to deploy Gen AI and Agentic AI agents integrated with ServiceNow and CRM. The result: automated support, predictive sales insights, and round-the-clock customer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Gen AI & Agentic AI Solutions */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Gen AI & Agentic AI Solutions
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
                  Deploy AI agents that handle tasks, learn from data, and interact with users across ServiceNow and CRM platforms.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Ticket Resolution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Customer Query Handling</span>
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
                  Leverage Gen AI to generate actionable insights, automate reporting, and personalize customer communications.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Predictive Analytics</span>
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
                <strong>Integration:</strong> Seamless with Gen AI, Agentic AI, CRM, and legacy systems.
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
                <strong>Expertise:</strong> Deep experience in Gen AI, Agentic AI, ServiceNow, and CRM implementations.
              </li>
              <li>
                <strong>Innovation:</strong> Pioneering AI solutions tailored to your industry.
              </li>
              <li>
                <strong>Customer-Centric:</strong> Proven track record of delivering measurable business value.
              </li>
              <li>
                <strong>End-to-End Support:</strong> From strategy to deployment and optimization.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to Transform with Gen AI & Agentic AI?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let ifBash help you unlock the full potential of ServiceNow, AI, and CRM for your business.
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