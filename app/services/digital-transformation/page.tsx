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
        <div className="absolute inset-0 z-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(247,248,250,0.92) 60%, rgba(38,163,217,0.18) 100%),
            url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <Workflow className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">Service</Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            Digital Transformation with ServiceNow, AI & CRM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Empower your organization to innovate, automate, and connect with ServiceNow’s digital workflows, AI-driven insights, and advanced CRM capabilities. Modernize operations, elevate customer and employee experiences, and unlock new growth through intelligent transformation.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “ServiceNow helped us achieve 30% faster onboarding and a 25% increase in customer satisfaction. Their AI and CRM solutions are game-changers for our business.”
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
              <h3 className="text-3xl font-bold text-primary mb-2">30%</h3>
              <p className="text-muted-foreground">Faster Employee Onboarding</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">25%</h3>
              <p className="text-muted-foreground">Increase in Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-muted-foreground">Platform Uptime & Reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Services */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">ServiceNow-Powered Transformation Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">AI-Driven Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Leverage ServiceNow’s AI and machine learning to automate repetitive tasks, predict outcomes, and drive smarter decisions.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Intelligent Workflow Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Predictive Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Virtual Agents & Chatbots</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Database className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Connected CRM Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Integrate customer data and engagement tools to deliver personalized experiences and build lasting relationships.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Unified Customer Profiles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Omni-channel Service Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Customer Journey Analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <UserCheck className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Employee Experience Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Enhance productivity and satisfaction with AI-powered HR workflows and self-service portals.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>HR Service Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Employee Onboarding & Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>AI-Driven Knowledge Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <MessageCircle className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Customer Service Modernization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Deliver fast, proactive support with AI-powered case routing, virtual agents, and real-time feedback.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Case Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Virtual Customer Assistants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Real-Time Feedback Loops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Innovation & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Harness data and AI to uncover new opportunities, optimize processes, and drive continuous improvement.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Advanced Analytics & Reporting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Process Optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Continuous Improvement Frameworks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Implementation & Change Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  End-to-end ServiceNow implementation, project management, and change enablement for lasting results.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Agile Project Delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Risk & Quality Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Stakeholder Training & Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Framework */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Our ServiceNow Transformation Framework</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Assess</h3>
              <p className="text-muted-foreground text-sm">
                Evaluate digital maturity, AI readiness, and CRM capabilities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Strategize</h3>
              <p className="text-muted-foreground text-sm">
                Design transformation roadmaps leveraging ServiceNow, AI, and CRM.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Execute</h3>
              <p className="text-muted-foreground text-sm">
                Implement digital workflows, AI automation, and CRM integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Continuously improve with analytics, feedback, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">Why ServiceNow?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Enterprise-Grade Security & Compliance</h3>
                <p className="text-muted-foreground">
                  ServiceNow meets the highest standards for data protection, privacy, and regulatory compliance, trusted by global enterprises.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <BarChart3 className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Scalable & Future-Proof</h3>
                <p className="text-muted-foreground">
                  Built for growth, ServiceNow adapts to your evolving business needs and integrates seamlessly with existing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Why Choose ServiceNow for Digital Transformation?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Proven Platform</h3>
              <p className="text-muted-foreground">
                Trusted by leading organizations for scalable, secure, and innovative transformation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">AI-Powered Efficiency</h3>
              <p className="text-muted-foreground">
                Automate processes and gain insights with built-in AI and analytics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Connected CRM</h3>
              <p className="text-muted-foreground">
                Deliver seamless customer experiences and drive loyalty with unified CRM tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to Transform with ServiceNow, AI & CRM?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our ServiceNow digital transformation expertise can drive your business forward.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Start Your Transformation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}