import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building,
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

export default function ServiceNowAppDevPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <Building className="h-8 w-8 text-primary" />
              <Badge variant="outline" className="text-primary border-primary/20">IT Digital Solutions</Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Enterprise IT Digital Transformation for Business Leaders
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
              Accelerate your digital transformation and business agility with IfBash’s IT Digital solutions. We deliver measurable ROI, innovation, and seamless integration across your enterprise—empowering C-suite priorities and future-proofing your organization.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Rapid deployment of digital platforms and automation</li>
              <li>Enterprise-grade security, compliance, and scalability</li>
              <li>Seamless integration with ERP, CRM, and legacy systems</li>
              <li>Real-time analytics and executive dashboards</li>
              <li>Continuous optimization and support</li>
            </ul>
            <Button size="lg" variant="secondary" className="px-8 py-3 mb-4">
              Explore IT Digital Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
              alt="ServiceNow App Development"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* IT Digital Transformation Use Cases */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            IT Digital Transformation: Key Enterprise Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Workflow Automation */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Workflow Automation & Digitalization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate complex business processes to boost efficiency and reduce manual effort.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>HR Onboarding & Offboarding</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Finance & Procurement Workflows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>IT Service Management & Digital Operations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Integration & Data Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Settings className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Integration & Unified Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect ServiceNow with ERP, CRM, and legacy systems for unified data and seamless operations.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>API & Middleware Integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Data Migration & Synchronization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Real-Time Reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Executive Dashboards & Analytics */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Executive Dashboards & Digital Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Empower decision makers with real-time insights and predictive analytics.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Custom KPI Dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Predictive Analytics & AI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Security & Compliance */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Security, Compliance & Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Ensure enterprise-grade security and regulatory compliance for all ServiceNow apps.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Role-Based Access Control</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Audit Trails & Data Protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Compliance Automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Employee & Customer Experience */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Employee & Customer Digital Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Deliver frictionless digital experiences for employees and customers with tailored ServiceNow apps.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Self-Service Portals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Virtual Agents & Chatbots</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Omni-channel Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Innovation & Scalability */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Innovation, Modernization & Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Future-proof your enterprise with modular, upgradable ServiceNow solutions.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Low-Code/No-Code Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Continuous Optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Global Scalability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How IfBash Helps Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-10 text-center">
            How IfBash Accelerates Your IT Digital Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                alt="Custom IT Solutions"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Custom IT Solutions</h3>
              <p className="text-muted-foreground text-sm text-center">
                Tailored digital platforms and automation for unique business needs, delivered with speed and precision.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Digital Workflow Automation"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Digital Workflow Automation</h3>
              <p className="text-muted-foreground text-sm text-center">
                Streamline processes and boost productivity with intelligent automation and integration.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Digital Analytics & Insights"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Digital Analytics & Insights</h3>
              <p className="text-muted-foreground text-sm text-center">
                Real-time dashboards and predictive analytics for executive decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Case Study: Global Manufacturer IT Digital Transformation
          </h2>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Challenge</h3>
              <p className="mb-6 text-muted-foreground">
                A Fortune 500 manufacturer faced fragmented workflows and legacy systems, slowing operations and impacting customer satisfaction.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Solution</h3>
              <p className="mb-6 text-muted-foreground">
                IfBash delivered custom IT digital solutions, automating core processes and integrating ERP/CRM platforms.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Results</h3>
              <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                <li>30% faster workflow execution</li>
                <li>25% reduction in operational costs</li>
                <li>Real-time analytics for C-suite visibility</li>
                <li>Seamless user adoption across global teams</li>
              </ul>
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded font-semibold mt-2">
                Status: Live & Scaling Globally
              </span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="ServiceNow Case Study"
                className="rounded-lg shadow w-full max-w-xs object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why IfBash & IT Digital Section */}
      <section className="py-10 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-8 text-center">
            Why IfBash for Enterprise IT Digital Transformation?
          </h2>
          <h3 className="text-xl font-medium text-foreground mb-2">
            Enterprise Expertise & Security
          </h3>
          <p className="text-muted-foreground">
            Proven delivery for global organizations. Enterprise-grade security, compliance, and data protection.
          </p>
          <h3 className="text-xl font-medium text-foreground mb-2">
            Innovation & AI Integration
          </h3>
          <p className="text-muted-foreground">
            Integrated AI, analytics, and automation for smarter, faster business outcomes.
          </p>
          <h3 className="text-xl font-medium text-foreground mb-2">
            Scalable, Future-Proof Solutions
          </h3>
          <p className="text-muted-foreground">
            Flexible digital platforms that grow with your business and adapt to new challenges.
          </p>
          <h3 className="text-xl font-medium text-foreground mb-2">
            End-to-End Partnership
          </h3>
          <p className="text-muted-foreground">
            From strategy to implementation and optimization, IfBash is your partner for continuous digital transformation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Transform Your Enterprise with IT Digital Solutions & IfBash
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Accelerate your IT digital journey with premium solutions, tailored for leaders who demand results.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Schedule IT Digital Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
              alt="Enterprise Team"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}