import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Award, ArrowRight, Globe2 } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <Globe2 className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">About Us</Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            About Our ServiceNow Organization
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We are a global team of ServiceNow experts dedicated to helping organizations achieve digital transformation, operational excellence, and innovation through world-class workflow automation and platform solutions.
          </p>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                We drive innovation by leveraging ServiceNow to solve complex business challenges and deliver measurable results.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Collaboration</h3>
              <p className="text-muted-foreground text-sm">
                Our culture is built on teamwork, transparency, and a shared commitment to client success.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We strive for excellence in every project, delivering high-quality solutions and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Our Story
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Founded by passionate technologists, our organization has grown into a trusted ServiceNow partner serving clients across industries and continents. We believe in the power of digital workflows to transform how people work, connect, and innovate.
          </p>
          <Button variant="secondary" size="lg" className="px-8 py-3">
            Learn More About Our Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Partner With Us for ServiceNow Success
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with our team to discover how we can help your organization achieve its digital transformation goals.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}