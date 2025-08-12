import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Lightbulb, ArrowRight, Award } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">Careers</Badge>
          </div>
          <h1 className="text-4xl font-light text-foreground mb-4">
            Careers at Our ServiceNow Organization
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Join a team of innovators, problem-solvers, and ServiceNow experts driving digital transformation for global clients. Grow your career in a collaborative, inclusive, and technology-driven environment.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Why Build Your Career With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Collaborative Culture</h3>
              <p className="text-muted-foreground text-sm">
                Work with passionate colleagues in a supportive, team-oriented environment.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground text-sm">
                Access ongoing ServiceNow training, certifications, and career development programs.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Impactful Work</h3>
              <p className="text-muted-foreground text-sm">
                Deliver solutions that transform businesses and public services worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Career Growth</h3>
              <p className="text-muted-foreground text-sm">
                Advance your career with clear paths for progression and leadership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">
            Explore Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-8 bg-background shadow-sm">
              <h3 className="text-xl font-medium text-foreground mb-2">ServiceNow Developer</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Build and customize ServiceNow applications, integrations, and workflows for enterprise clients.
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mb-4">
                <li>Experience with ServiceNow platform and scripting</li>
                <li>Problem-solving and analytical skills</li>
                <li>Collaboration with cross-functional teams</li>
              </ul>
              <Button variant="outline" className="w-full">Apply Now</Button>
            </div>
            <div className="border rounded-lg p-8 bg-background shadow-sm">
              <h3 className="text-xl font-medium text-foreground mb-2">ServiceNow Consultant</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Advise clients on ServiceNow best practices, process optimization, and digital transformation.
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mb-4">
                <li>Strong communication and client management skills</li>
                <li>Understanding of ITSM, ITOM, or HR workflows</li>
                <li>ServiceNow certifications preferred</li>
              </ul>
              <Button variant="outline" className="w-full">Apply Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ready to Grow Your Career?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join us and help shape the future of digital transformation with ServiceNow.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            View All Openings
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}