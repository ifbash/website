import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Database,
  BarChart3,
  Rocket,
  Shield,
  Star,
  Quote,
  MessageCircle,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function CRMPage() {
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
              url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">
              Service
            </Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            CRM-Driven Experiences with ServiceNow, AI & CRM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Deliver seamless, personalized customer journeys and empower your teams with CRM solutions powered by ServiceNow and AI. Transform engagement, automate service, and drive loyalty with data-driven insights and intelligent workflows.
          </p>
          {/* Executive Quote/Testimonial */}
          <div className="mt-8 flex items-center justify-center">
            <Quote className="h-6 w-6 text-primary mr-2" />
            <span className="italic text-lg text-muted-foreground max-w-2xl">
              “ifBash helped us unify our customer data and automate service workflows. Our NPS improved by 20 points and our support costs dropped by 30% in the first year.”
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
              <h3 className="text-3xl font-bold text-primary mb-2">+20</h3>
              <p className="text-muted-foreground">NPS Improvement</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">30%</h3>
              <p className="text-muted-foreground">Reduction in Support Costs</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-muted-foreground">Customer Data Accuracy</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Case Study: CRM Transformation in Telecom
            </span>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A telecom leader partnered with ifBash to implement ServiceNow CRM and AI-driven automation. The result: unified customer profiles, predictive support, and measurable improvements in customer satisfaction and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* CRM Solutions */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            CRM-Driven Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Unified Customer Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Integrate data from every touchpoint for a 360° customer view.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Real-Time Data Sync</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Personalized Engagement</span>
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
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <Database className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">AI-Powered Service Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate support, case routing, and feedback with intelligent AI.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Predictive Case Resolution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Virtual Agents & Chatbots</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Automated Feedback Collection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Customer Insights & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Gain actionable insights to drive loyalty and growth.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Churn Prediction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Customer Segmentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Sales & Service Analytics</span>
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
            Ready to Transform Your CRM Experience?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let ifBash help you deliver seamless, data-driven customer experiences with ServiceNow, AI, and CRM.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Schedule Consultation
            <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}