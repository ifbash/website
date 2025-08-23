import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HeartPulse,
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

export default function HealthcarePage() {
  return (
    <>
      <Head>
        <title>Healthcare Digital Transformation | ServiceNow & IfBash</title>
        <meta name="description" content="Transform healthcare with ServiceNow, AI, and CRM. Modernize patient experience, care coordination, compliance, and operations with IfBash." />
        <meta name="keywords" content="Healthcare, ServiceNow, AI, CRM, Digital Transformation, Patient Experience, Care Coordination, Compliance, IfBash" />
        <meta property="og:title" content="Healthcare Digital Transformation | ServiceNow & IfBash" />
        <meta property="og:description" content="Deliver connected, efficient, and patient-centric care with ServiceNow, AI, and CRM solutions from IfBash." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-pink-50 to-blue-50">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-6">
                <HeartPulse className="h-8 w-8 text-primary" />
                <Badge variant="outline" className="text-primary border-primary/20">Healthcare</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Transform Healthcare with ServiceNow & IfBash
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
                Deliver connected, efficient, and patient-centric care. IfBash leverages ServiceNow, AI, and CRM to help healthcare organizations modernize operations, enhance patient experience, and ensure compliance.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Digitize patient journeys and care coordination</li>
                <li>Automate workflows for clinical, admin, and IT teams</li>
                <li>Enhance engagement with CRM and omni-channel support</li>
                <li>Enable compliance, security, and data protection</li>
                <li>Leverage AI for predictive insights and operational efficiency</li>
              </ul>
              <Button size="lg" variant="secondary" className="px-8 py-3 mb-4">
                Explore Healthcare Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Healthcare Innovation"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#1a2e61] mb-4">Why Choose IfBash?</h2>
                <ul className="space-y-4 text-base sm:text-lg text-muted-foreground">
                  <li>
                    <Shield className="inline-block mr-2 text-primary" />
                    <strong className="text-primary">Healthcare Expertise:</strong> Trusted by hospitals, clinics, and payers for digital transformation.
                  </li>
                  <li>
                    <Sparkles className="inline-block mr-2 text-[#6c28d9]" />
                    <strong className="text-primary">AI & CRM Innovation:</strong> Integrated AI, analytics, and CRM for predictive insights and automation.
                  </li>
                  <li>
                    <CheckCircle className="inline-block mr-2 text-green-500" />
                    <strong className="text-primary">End-to-End Partnership:</strong> Strategy, implementation, and continuous optimization.
                  </li>
                  <li>
                    <Rocket className="inline-block mr-2 text-primary" />
                    <strong className="text-primary">Scalable, Secure Solutions:</strong> Enterprise-grade security, compliance, and future-proof platforms.
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                  alt="Healthcare Team"
                  className="rounded-xl shadow-lg object-cover w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ServiceNow in Healthcare */}
        <section className="py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-12 text-center">
              ServiceNow for Healthcare: Key Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Patient Experience & Engagement */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <Workflow className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Patient Experience & Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Digitize patient onboarding, support, and feedback with unified CRM and omni-channel service.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Patient Portal & Self-Service</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Omni-channel CRM & Virtual Agents</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Feedback & Satisfaction Analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Care Coordination & Clinical Workflows */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                    <Settings className="h-6 w-6 text-chart-2" />
                  </div>
                  <CardTitle className="text-lg">Care Coordination & Clinical Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Automate care team collaboration, referrals, and discharge planning for better outcomes.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Care Team Collaboration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Referral & Discharge Automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Clinical Task Management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* IT & Operations Management */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                    <BarChart3 className="h-6 w-6 text-chart-3" />
                  </div>
                  <CardTitle className="text-lg">IT & Operations Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Enhance uptime, efficiency, and safety of clinical and IT systems with AI-driven automation.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Incident & Change Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Asset Lifecycle & Preventive Maintenance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>IoT Integration & Real-Time Monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Compliance, Security & Risk */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-chart-4" />
                  </div>
                  <CardTitle className="text-lg">Compliance, Security & Risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Protect patient data, ensure regulatory compliance, and manage risk with automated security workflows.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>HIPAA & Regulatory Automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Security Incident Response</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Risk Management & Analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* AI & Analytics for Healthcare */}
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                    <Brain className="h-6 w-6 text-chart-5" />
                  </div>
                  <CardTitle className="text-lg">AI & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Harness AI and analytics for predictive insights, population health, and smarter decisions.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Predictive Patient Outcomes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Population Health Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Operational Performance Dashboards</span>
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
                      <span>Provider Portal & Collaboration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>Referral & Network Management</span>
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

        {/* Healthcare Transformation Benefits */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-pink-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-10 text-center">
              Why Digital Transformation Matters in Healthcare
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  alt="Patient Experience"
                  className="h-24 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Patient Experience</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Digitize and automate patient journeys for faster, more personalized care.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                  alt="Care Coordination"
                  className="h-24 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Care Coordination</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Enable seamless collaboration and workflow automation for clinical teams.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Compliance & Security"
                  className="h-24 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">Compliance & Security</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Protect sensitive data, ensure regulatory compliance, and manage risk with automated workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-pink-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-12 text-center">
              Our Approach for Healthcare Transformation
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
                  Develop tailored ServiceNow, AI, and CRM solutions for healthcare needs.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">3. Implement</h3>
                <p className="text-muted-foreground text-sm">
                  Deploy and integrate digital workflows across clinical, admin, and patient service.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <HeartPulse className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
                <p className="text-muted-foreground text-sm">
                  Continuously improve processes and drive innovation with analytics and AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-light text-primary mb-10 text-center">
              What Our Healthcare Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg border-none">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    “IfBash helped us digitize patient journeys and automate care coordination. Our patient satisfaction scores have never been higher.”
                  </p>
                  <div className="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Client" className="h-10 w-10 rounded-full" />
                    <div>
                      <span className="font-semibold text-primary">Dr. James L.</span>
                      <span className="block text-xs text-muted-foreground">CMO, Regional Hospital</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-none">
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    “The ServiceNow platform and AI solutions from IfBash transformed our compliance and security. We’re now leaders in patient data protection.”
                  </p>
                  <div className="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/women/53.jpg" alt="Client" className="h-10 w-10 rounded-full" />
                    <div>
                      <span className="font-semibold text-primary">Priya S.</span>
                      <span className="block text-xs text-muted-foreground">VP, Healthcare Operations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-pink-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">How quickly can we see results from ServiceNow transformation?</h3>
                <p className="text-muted-foreground">
                  Most clients see measurable improvements in patient experience, care coordination, and compliance within 3-6 months of implementation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Is your solution scalable for large healthcare organizations?</h3>
                <p className="text-muted-foreground">
                  Yes, our ServiceNow and AI solutions are designed for scalability, security, and compliance across hospitals, clinics, and payers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Do you offer ongoing support and optimization?</h3>
                <p className="text-muted-foreground">
                  Absolutely. IfBash provides end-to-end partnership, including continuous support, analytics, and process optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why IfBash & ServiceNow Section */}
        <section className="py-10 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-pink-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">
              Why IfBash & ServiceNow for Healthcare?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Industry Expertise & Security
                  </h3>
                  <p className="text-muted-foreground">
                    Proven delivery for hospitals, clinics, and payers. Enterprise-grade security, compliance, and data protection.
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
                    Flexible platforms that grow with your organization and adapt to new healthcare trends.
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
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-pink-600 to-blue-700">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Drive Healthcare Innovation with ServiceNow & IfBash
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Transform your healthcare organization with digital workflows, AI, CRM, and patient-centric solutions.
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="mt-8 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Healthcare Team"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}