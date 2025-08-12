import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, Phone, Mail, ArrowRight } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">Location</Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            Our Locations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Discover where our ServiceNow-focused organization operates. Connect with our offices and teams around the globe to learn more about our services and expertise.
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Global Offices
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-8 bg-background shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">Headquarters</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                New York, USA
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                123 Innovation Avenue, Suite 400<br />
                New York, NY 10001, USA
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                <Phone className="h-4 w-4" />
                <span>+1 555 123 4567</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@servicenoworg.com</span>
              </div>
            </div>
            <div className="border rounded-lg p-8 bg-background shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">Regional Office</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                London, UK
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                456 Digital Lane, Floor 2<br />
                London EC1A 1AA, United Kingdom
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                <Phone className="h-4 w-4" />
                <span>+44 20 7946 0123</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>uk@servicenoworg.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Find Us
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Visit our offices or reach out to schedule a meeting with our ServiceNow experts. We’re here to help you on your digital transformation journey.
          </p>
          <Button variant="secondary" size="lg" className="px-8 py-3">
            Get Directions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Connect With Us Worldwide
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Reach out to any of our global offices to learn more about our ServiceNow solutions and services.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Contact Our Team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}