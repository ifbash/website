import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  Database, 
  Workflow, 
  BarChart3,
  Users,
  Shield,
  Code,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "ServiceNow Implementation",
      description: "Complete ServiceNow platform implementation and configuration across all modules",
      icon: Settings,
      href: "/services/servicenow-implementation",
      features: ["ITSM Implementation", "ITOM Setup", "Security Operations", "HR Service Delivery", "Custom Development"],
      color: "blue"
    },
    {
      title: "SAP Consulting",
      description: "End-to-end SAP solutions from S/4HANA to cloud migration strategies",
      icon: Database,
      href: "/services/sap-consulting",
      features: ["S/4HANA Migration", "SuccessFactors HCM", "Analytics Cloud", "Integration Services", "Support & Maintenance"],
      color: "green"
    },
    {
      title: "Digital Transformation",
      description: "Strategic digital transformation consulting and technology roadmaps",
      icon: Workflow,
      href: "/services/digital-transformation",
      features: ["Strategy Development", "Technology Assessment", "Change Management", "Process Optimization", "Training & Adoption"],
      color: "purple"
    },
    {
      title: "Process Optimization",
      description: "Business process analysis, redesign, and automation for maximum efficiency",
      icon: BarChart3,
      href: "/services/process-optimization",
      features: ["Process Analysis", "Workflow Automation", "Performance Metrics", "Continuous Improvement", "ROI Measurement"],
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center space-y-8">
            <ScrollAnimation delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                Our
                <span className="block font-medium moondust-text-gradient">
                  Services
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive consulting services designed to transform your business operations 
                and maximize your technology investments.
              </p>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-primary border-primary/20">
                        Service
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-medium text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href={service.href}>
                      <Button className="w-full moondust-gradient hover:opacity-90 text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Why Choose TechConsult</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expertise and proven methodology ensure successful project delivery
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Certified professionals with deep expertise in ServiceNow and SAP platforms.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Proven Methodology</h3>
                <p className="text-muted-foreground">
                  Time-tested implementation approaches that minimize risk and ensure success.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Rapid Delivery</h3>
                <p className="text-muted-foreground">
                  Accelerated implementation timelines without compromising on quality.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to Get Started?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business operations.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}