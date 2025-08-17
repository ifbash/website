import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FlaskConical,
  Workflow,
  Settings,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Brain,
  Users,
  Shield,
  Rocket,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function LifeSciencesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <FlaskConical className="h-8 w-8 text-primary" />
              <Badge variant="outline" className="text-primary border-primary/20">Life Sciences</Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Transform Life Sciences with ServiceNow & IfBash
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
              Accelerate innovation, compliance, and patient outcomes. IfBash leverages ServiceNow, AI, and CRM to help life sciences organizations modernize R&D, streamline clinical trials, optimize supply chains, and deliver connected patient experiences.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Digitize R&D, clinical, and regulatory workflows</li>
              <li>Automate compliance, quality, and documentation</li>
              <li>Enhance patient and partner engagement with CRM</li>
              <li>Leverage AI for predictive insights and operational efficiency</li>
              <li>Optimize supply chain and manufacturing processes</li>
            </ul>
            <Button size="lg" variant="secondary" className="px-8 py-3 mb-4">
              Explore Life Sciences Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1465101178521-c1a4c8a0f3b7?auto=format&fit=crop&w=600&q=80"
              alt="Life Sciences Innovation"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* ServiceNow in Life Sciences */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            ServiceNow for Life Sciences: Key Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* R&D and Innovation Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">R&D and Innovation Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Digitize research workflows, automate documentation, and accelerate product development with AI-powered insights.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Project & Portfolio Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Collaboration & Knowledge Sharing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Regulatory Documentation Automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Clinical Trials & Case Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Workflow className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Clinical Trials & Case Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Streamline trial operations, automate case tracking, and improve compliance for faster, safer studies.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Trial Site & Participant Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Case Tracking & Resolution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Compliance & Audit Automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Regulatory Compliance & Quality */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Regulatory Compliance & Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate compliance, quality management, and reporting to meet global standards and reduce risk.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Quality Issue Tracking & Resolution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Regulatory Reporting Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Risk Management & Analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Supply Chain & Manufacturing */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Settings className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Supply Chain & Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Optimize supply chain visibility, automate manufacturing workflows, and ensure product quality.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Supplier Collaboration & Quality</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Inventory & Logistics Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Production Analytics & Monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI & Analytics for Life Sciences */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Brain className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">AI & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Harness AI and analytics for predictive insights, process optimization, and smarter decisions in R&D, trials, and supply chain.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Predictive Trial Outcomes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Supply Chain Risk Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Patient Sentiment & Engagement Analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CRM & Partner Network Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">CRM & Partner Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect providers, payers, and partners with unified CRM, collaboration, and service management.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Partner Portal & Collaboration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Sales & Service Performance Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Patient Engagement & Loyalty Programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Life Sciences Transformation Benefits */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-10 text-center">
            Why Digital Transformation Matters in Life Sciences
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1465101178521-c1a4c8a0f3b7?auto=format&fit=crop&w=400&q=80"
                alt="R&D Innovation"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">R&D Innovation</h3>
              <p className="text-muted-foreground text-sm text-center">
                Accelerate research and product development with digital workflows and AI-powered insights.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Clinical Trials"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Clinical Trials</h3>
              <p className="text-muted-foreground text-sm text-center">
                Streamline trial operations, automate compliance, and improve patient safety and outcomes.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Patient Experience"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Patient Experience</h3>
              <p className="text-muted-foreground text-sm text-center">
                Deliver frictionless support, engagement, and loyalty programs to build trust and improve outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Our Approach for Life Sciences Transformation
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Assess</h3>
              <p className="text-muted-foreground text-sm">
                Analyze current processes, technology, and data landscape for transformation readiness.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Design</h3>
              <p className="text-muted-foreground text-sm">
                Develop tailored ServiceNow, AI, and CRM solutions for life sciences needs.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Implement</h3>
              <p className="text-muted-foreground text-sm">
                Deploy and integrate digital workflows across R&D, clinical, supply chain, and patient service.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Continuously improve processes and drive innovation with analytics and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why IfBash & ServiceNow Section */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Why IfBash & ServiceNow for Life Sciences?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Industry Expertise & Security
                </h3>
                <p className="text-muted-foreground">
                  Proven delivery for pharma, biotech, and medtech. Enterprise-grade security, compliance, and data protection.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Sparkles className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  AI & CRM Innovation
                </h3>
                <p className="text-muted-foreground">
                  Integrated AI, analytics, and CRM for predictive insights, automation, and patient engagement.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Rocket className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Scalable, Future-Proof Solutions
                </h3>
                <p className="text-muted-foreground">
                  Flexible platforms that grow with your organization and adapt to new life sciences trends.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageCircle className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  End-to-End Partnership
                </h3>
                <p className="text-muted-foreground">
                  From strategy to implementation and optimization, IfBash is your partner for continuous transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Drive Life Sciences Innovation with ServiceNow & IfBash
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Transform your life sciences organization with digital workflows, AI, CRM, and patient-centric solutions.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1465101178521-c1a4c8a0f3b7?auto=format&fit=crop&w=600&q=80"
              alt="Life Sciences Team"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}