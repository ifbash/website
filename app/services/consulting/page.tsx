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
  Lightbulb,
  ClipboardCheck,
  Rocket,
  Shield,
  Star,
  Quote,
  Database,
} from "lucide-react";

export default function ConsultingPage() {
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
            <Lightbulb className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">Service</Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            Consulting for ServiceNow, AI & CRM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Accelerate transformation and unlock business value with strategic consulting for ServiceNow, AI, and CRM. Our experts deliver tailored strategies, process optimization, and technology enablement for measurable results.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “ifBash’s consulting team helped us reimagine our workflows and leverage ServiceNow and AI for a 45% boost in operational efficiency and a 25% increase in customer retention.”
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
              <h3 className="text-3xl font-bold text-primary mb-2">45%</h3>
              <p className="text-muted-foreground">Increase in Operational Efficiency</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">25%</h3>
              <p className="text-muted-foreground">Customer Retention Growth</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-muted-foreground">Project Delivery Success Rate</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Case Study: ServiceNow & AI Consulting in Healthcare
            </span>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A healthcare provider partnered with ifBash to optimize processes and implement ServiceNow and AI-driven CRM. The result: streamlined patient onboarding, improved compliance, and measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Solutions */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Consulting Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Process Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Redesign and automate workflows for efficiency and scalability.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Workflow Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>ServiceNow Integration</span>
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
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">AI & CRM Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Develop and execute AI and CRM strategies for customer-centric growth.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>AI-Driven Insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>CRM Personalization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Customer Journey Mapping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Change Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Drive adoption and success for new processes and technologies.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Stakeholder Engagement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Training & Enablement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Communication Planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <ClipboardCheck className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Project Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Ensure projects are delivered on time, within scope, and on budget.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Agile Project Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Risk & Quality Assurance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>ServiceNow Implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Performance & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Use data-driven insights to monitor, measure, and optimize business performance.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>KPIs & Metrics Definition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Dashboard & Reporting</span>
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

      {/* Consulting Approach */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Our Consulting Approach</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Discover</h3>
              <p className="text-muted-foreground text-sm">
                Assess your business needs, challenges, and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Design</h3>
              <p className="text-muted-foreground text-sm">
                Develop tailored strategies and solutions for your goals.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Deliver</h3>
              <p className="text-muted-foreground text-sm">
                Execute solutions and drive measurable business outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Monitor, analyze, and continuously improve results.
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
                <strong>Expertise:</strong> Deep experience in ServiceNow, AI, and CRM consulting.
              </li>
              <li>
                <strong>Innovation:</strong> Pioneering solutions tailored to your industry.
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
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with our consulting experts to unlock new opportunities and drive transformation.
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