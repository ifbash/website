import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, Users } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Mail className="h-10 w-10 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20 text-lg">Contact Us</Badge>
          </div>
          <h1 className="text-5xl font-light text-foreground mb-4">
            Get in Touch With Our ServiceNow Experts
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We’re here to help you accelerate your digital transformation journey. Reach out for project inquiries, partnership opportunities, or support.
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="h-7 w-7 text-primary" />
              <div>
                <div className="font-semibold text-lg text-foreground">Phone</div>
                <div className="text-muted-foreground text-md">+1 555 123 4567</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-7 w-7 text-primary" />
              <div>
                <div className="font-semibold text-lg text-foreground">Email</div>
                <div className="text-muted-foreground text-md">contact@servicenoworg.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-7 w-7 text-primary" />
              <div>
                <div className="font-semibold text-lg text-foreground">Address</div>
                <div className="text-muted-foreground text-md">
                  123 Innovation Avenue, Suite 400<br />
                  New York, NY 10001, USA
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Users className="h-7 w-7 text-primary" />
              <div>
                <div className="font-semibold text-lg text-foreground">Support Team</div>
                <div className="text-muted-foreground text-md">Available 24/7 for client queries</div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form className="bg-white rounded-xl shadow-lg p-10 space-y-6 border border-primary/10">
            <h2 className="text-2xl font-light text-primary mb-4 text-center">Send Us a Message</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-slate-50"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-slate-50"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/40 bg-slate-50"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border rounded-md px-4 py-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 bg-slate-50"
              required
            />
            <Button size="lg" variant="default" className="w-full">
              Send Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Visit Our Office
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We welcome you to visit our headquarters. Find us at the heart of New York’s innovation district.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg border border-primary/10 mb-8">
            {/* Placeholder for embedded map */}
            <iframe
              title="Office Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.00597%2C40.71278%2C-74.00597%2C40.71278&amp;layer=mapnik"
              className="w-full h-64"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <Button variant="secondary" size="lg" className="px-8 py-3">
            Get Directions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Let’s Start Your ServiceNow Journey
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Reach out today and discover how our team can help you transform your business with ServiceNow.
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