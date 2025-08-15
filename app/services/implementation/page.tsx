import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Settings,
  CheckCircle,
  ArrowRight,
  Database,
  Users,
  BarChart3,
  Rocket,
  Layers,
  ClipboardCheck,
  Shield,
  Star,
  Quote,
} from "lucide-react";

export default function ImplementationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(247,248,250,0.92) 60%, rgba(38,163,217,0.18) 100%),
            url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <Rocket className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">Service</Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            Implementation Services for ServiceNow, AI & CRM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Seamlessly deploy and integrate ServiceNow, AI, and CRM solutions tailored to your business needs. Our experts ensure secure, scalable, and compliant implementations that drive measurable results and empower your teams.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “Our ServiceNow implementation reduced IT ticket resolution time by 40%, improved data security, and enabled real-time customer insights. The project was delivered on time and exceeded our expectations.”
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
              <h3 className="text-3xl font-bold text-primary mb-2">40%</h3>
              <p className="text-muted-foreground">Reduction in IT Ticket Resolution Time</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">99.99%</h3>
              <p className="text-muted-foreground">Data Security & Compliance Achieved</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">3x</h3>
              <p className="text-muted-foreground">Increase in Real-Time Customer Insights</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Case Study: Leading Financial Services Implementation
            </span>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A top financial institution partnered with us to implement ServiceNow and AI-powered CRM. The result: streamlined IT operations, enhanced compliance, and actionable customer analytics that drove business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Solutions - Card Layout */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Implementation Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Platform Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  End-to-end deployment of ServiceNow, AI, and CRM platforms.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Solution Configuration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Custom Module Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>System Integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Database className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Data Migration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Secure and efficient migration of legacy data to new platforms.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Data Mapping & Cleansing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Migration Validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Post-Migration Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Layers className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Integration Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect your enterprise systems for seamless data flow and process automation.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>API & Middleware Integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Third-Party System Connectivity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Process Automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">User Enablement & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Empower your teams with hands-on training and enablement programs.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Role-Based Training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Knowledge Transfer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Adoption Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <ClipboardCheck className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Rigorous testing and validation to ensure reliable solution performance.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Functional & UAT Testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Performance Validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Go-Live Readiness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Our Implementation Approach</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">1. Plan</h3>
              <p className="text-muted-foreground text-sm">
                Define project scope, objectives, and success criteria.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Build</h3>
              <p className="text-muted-foreground text-sm">
                Configure, develop, and integrate solutions tailored to your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Validate</h3>
              <p className="text-muted-foreground text-sm">
                Test and ensure quality, performance, and user acceptance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Launch</h3>
              <p className="text-muted-foreground text-sm">
                Go live with confidence and ongoing support for success.
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
                <strong>Expertise:</strong> Deep experience in ServiceNow, AI, and CRM implementations.
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
            Ready for Seamless Implementation?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let our implementation experts deliver reliable, scalable solutions for your business.
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