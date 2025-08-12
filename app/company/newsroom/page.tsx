import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Newspaper, Megaphone, CalendarDays, ArrowRight } from "lucide-react";

export default function NewsroomPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <Newspaper className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">Newsroom</Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            Newsroom
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Stay updated with the latest news, press releases, and events from our ServiceNow-focused organization. Discover how we’re driving innovation and digital transformation for clients worldwide.
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Latest Announcements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-8 bg-background shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Megaphone className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">Press Release</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                Organization Achieves ServiceNow Elite Partner Status
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                We are proud to announce our recognition as a ServiceNow Elite Partner, reflecting our commitment to delivering world-class solutions and customer success.
              </p>
              <Button variant="outline" className="w-full">Read More</Button>
            </div>
            <div className="border rounded-lg p-8 bg-background shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">Event</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                Upcoming Webinar: Accelerating Digital Transformation with ServiceNow
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Join our experts for a live session on leveraging ServiceNow to streamline workflows and drive innovation in your organization.
              </p>
              <Button variant="outline" className="w-full">Register</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contacts */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Media & Press Contacts
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            For media inquiries, interviews, or more information about our ServiceNow initiatives, please contact our communications team.
          </p>
          <Button variant="secondary" size="lg" className="px-8 py-3">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Discover More About Our ServiceNow Journey
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our newsroom for the latest updates, insights, and success stories.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}