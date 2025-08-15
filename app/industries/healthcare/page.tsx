import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeartPulse, Workflow, Settings, CheckCircle, ArrowRight, BarChart3, Users, Shield } from "lucide-react";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <HeartPulse className="h-8 w-8 text-primary" />
              <Badge variant="outline" className="text-primary border-primary/20">Industry</Badge>
            </div>
            <h1 className="text-4xl font-light text-foreground mb-4">
              Healthcare Industry Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-6">
              Transform healthcare operations, patient experience, and compliance with ServiceNow-powered digital workflows and automation.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Streamline patient services and appointment management</li>
              <li>Enhance healthcare IT reliability and security</li>
              <li>Automate compliance and reporting for regulations</li>
              <li>Empower staff collaboration and knowledge sharing</li>
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

      {/* ServiceNow in Healthcare */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            ServiceNow for Healthcare: Key Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Patient Service Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Deliver responsive, coordinated patient services through unified case management and self-service portals.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Appointment & Request Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Patient Service Portals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Case Tracking & Resolution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-3">
                  <Settings className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Healthcare IT & Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Enhance reliability, security, and compliance of healthcare IT infrastructure and operations.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Incident & Change Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Asset & Configuration Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Security & Compliance Automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Regulatory Compliance & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate compliance tracking, reporting, and policy management for healthcare regulations.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Policy & Document Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Audit Trail & Reporting Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Risk & Compliance Dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare Transformation Benefits */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-10 text-center">
            Why Digital Transformation Matters in Healthcare
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd2b?auto=format&fit=crop&w=400&q=80"
                alt="Patient Experience"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Patient Experience</h3>
              <p className="text-muted-foreground text-sm text-center">
                Deliver seamless appointment scheduling, self-service, and faster case resolution for happier, healthier patients.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Healthcare IT"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Reliable IT & Security</h3>
              <p className="text-muted-foreground text-sm text-center">
                Ensure critical systems are secure, compliant, and always available for staff and patients.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1508385082359-f48fa9f0a2c1?auto=format&fit=crop&w=400&q=80"
                alt="Compliance"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Compliance & Reporting</h3>
              <p className="text-muted-foreground text-sm text-center">
                Automate regulatory compliance, documentation, and reporting to meet healthcare standards and audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Team & Collaboration */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-10 text-center">
            Collaboration & Safety in Healthcare
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1465101178521-c1a4c8a0f3b7?auto=format&fit=crop&w=400&q=80"
                alt="Healthcare Team"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Empowered Teams</h3>
              <p className="text-muted-foreground text-sm text-center">
                Foster collaboration and knowledge sharing across clinical, IT, and compliance teams for faster problem-solving and innovation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80"
                alt="Safety & Compliance"
                className="h-24 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-primary mb-2">Safety & Compliance</h3>
              <p className="text-muted-foreground text-sm text-center">
                Ensure patient safety and regulatory compliance with automated reporting, incident management, and training workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
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
                Analyze current patient service, IT, and compliance processes.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">2. Design</h3>
              <p className="text-muted-foreground text-sm">
                Develop ServiceNow solutions tailored for healthcare provider needs.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">3. Implement</h3>
              <p className="text-muted-foreground text-sm">
                Deploy and integrate digital workflows across patient services, IT, and compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">4. Optimize</h3>
              <p className="text-muted-foreground text-sm">
                Continuously improve patient experience and compliance with analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Transform Healthcare with ServiceNow
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Empower your healthcare organization with digital workflows, automation, and actionable insights.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
              alt="Healthcare Team"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}