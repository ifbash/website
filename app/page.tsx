import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  Database, 
  Users, 
  BarChart3,
  Building,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f7f8fa 60%, #e6f0fa 100%)",
        }}
      >
        {/* Beautiful Light Blue Soothing Background Image with Decorative Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(247,248,250,0.92) 60%, rgba(38,163,217,0.18) 100%),
              url('http://backgroundsy.com/wp-content/uploads/light-blue-background.jpg')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        {/* Decorative SVG shapes for extra design */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 1 }}
        >
          <path
            fill="#e6f0fa"
            fillOpacity="0.6"
            d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,117.3C1120,128,1280,192,1360,224L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
          <circle cx="1200" cy="80" r="60" fill="#26a3d9" fillOpacity="0.12" />
          <circle cx="200" cy="220" r="40" fill="#6c28d9" fillOpacity="0.10" />
        </svg>
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollAnimation className="text-center space-y-8">
            <ScrollAnimation delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-light text-[#1a2e61] leading-tight">
                Transform Your Business with
                <span
                  className="block font-medium"
                  style={{
                    background: "linear-gradient(135deg, #6c28d9, #26a3d9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ServiceNow
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-[#1a2e61] max-w-3xl mx-auto leading-relaxed opacity-80">
                We deliver enterprise-grade consulting services that streamline operations, 
                enhance productivity, and drive digital transformation across your organization.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="moondust-gradient hover:opacity-90 text-white px-8 py-3 moondust-glow">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-white bg-[#1a2e61] border-[#1a2e61] hover:bg-[#1a2e61] hover:text-white"
                >
                  View Our Work
                </Button>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized consulting services designed to maximize your technology investments
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {/* ServiceNow Card */}
            <StaggerItem>
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-medium text-foreground">ServiceNow</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Complete ServiceNow platform implementation, from ITSM and ITOM to HR Service Delivery 
                    and custom application development.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground/80">IT Service Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground/80">Security Operations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground/80">HR Service Delivery</span>
                    </li>
                  </ul>
                  <Link href="/portfolio/servicenow">
                    <Button variant="outline" className="w-full">
                      Explore ServiceNow Solutions
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>

           
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep industry expertise across multiple sectors
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Financial Services", icon: BarChart3 },
              { name: "Healthcare", icon: Users },
              { name: "Manufacturing", icon: Settings },
              { name: "Retail", icon: Building },
              { name: "Public Sector", icon: Globe },
              { name: "Technology", icon: Database },
            ].map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="text-center group">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{industry.name}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 moondust-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to Transform Your Business?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our ServiceNow expertise can drive your digital transformation journey.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Download Brochure
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded moondust-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
                <span className="font-semibold text-xl text-foreground">TechConsult</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Leading ServiceNow consulting firm delivering enterprise transformation solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/servicenow" className="hover:text-foreground">ServiceNow</Link></li>
                <li><Link href="/services/digital-transformation" className="hover:text-foreground">Digital Transformation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/learning-center" className="hover:text-foreground">Learning Center</Link></li>
                <li><Link href="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 TechConsult. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}