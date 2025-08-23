import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Database,
  BookOpen,
  MonitorSmartphone,
  Layers,
  Bot,
  UserCheck,
  BarChart2,
  PieChart,
  Zap,
  Link2,
  ShoppingCart,
  DollarSign,
  ClipboardCheck,
  UserPlus,
  TrendingUp,
  CalendarCheck,
} from "lucide-react";

export default function SalesOrderManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-6 moondust-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-6">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-primary border-primary/20">ServiceNow</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Accelerate Revenue with ServiceNow Sales & Order Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-2">
            Streamline your sales operations and order fulfillment with ServiceNow Sales & Order Management. Automate sales processes, improve visibility, and deliver seamless customer experiences from quote to cash.
          </p>
          <p className="text-lg text-primary font-medium max-w-2xl">
            Discover ServiceNow Sales Management: unified workflows, faster deal cycles, and real-time insights for sales teams.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-foreground mb-12 text-center">Sales & Order Management Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Lead & Opportunity Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Lead & Opportunity Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Capture, qualify, and track leads and opportunities with automated workflows.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Lead scoring & assignment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Opportunity pipeline tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated follow-ups</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Quote Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-3">
                  <DollarSign className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-lg">Quote Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Generate, approve, and manage quotes with configurable pricing and discount rules.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated quote generation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Approval workflows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Discount management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Order Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <ClipboardCheck className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Automate order processing, fulfillment, and tracking for faster delivery and improved accuracy.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Order creation & validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Fulfillment automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Status tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contract Management */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Contract Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Manage sales contracts, renewals, and compliance with automated alerts and workflows.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Contract repository</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Renewal notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Compliance tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Customer 360 View */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-5/20 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-lg">Customer 360 View</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Gain a unified view of customer interactions, orders, and support history for personalized engagement.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Unified customer profiles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Order & support history</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Personalized recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sales Forecasting & Analytics */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Sales Forecasting & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Predict sales performance, analyze trends, and optimize strategies with real-time dashboards.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Forecasting models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Pipeline analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Performance dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Order Fulfillment & Tracking */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <CalendarCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Order Fulfillment & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Monitor order status, automate fulfillment, and provide real-time updates to customers.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Order status visibility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Delivery tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Integration & Automation */}
            <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-3">
                  <Link2 className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Integration & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect sales and order management with ERP, CRM, and finance systems for end-to-end automation.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>ERP & CRM integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Automated data sync</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-chart-2" />
                    <span>Workflow automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-foreground mb-4">Key Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlock faster sales cycles and seamless order fulfillment with ServiceNow Sales & Order Management: unified workflows, real-time insights, and automated processes for measurable business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Accelerated Sales Cycles</h3>
              <p className="text-muted-foreground">
                Close deals faster with automated workflows and real-time pipeline visibility.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-2/20 flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Seamless Order Fulfillment</h3>
              <p className="text-muted-foreground">
                Automate order processing and provide customers with real-time status updates.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-chart-5/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-chart-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Unified Customer Experience</h3>
              <p className="text-muted-foreground">
                Deliver personalized engagement and support with a 360-degree customer view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Ready to Transform Your Sales Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how ServiceNow Sales & Order Management delivers unified workflows, faster deal cycles, and seamless order fulfillment for your business.
          </p>
          <Button size="lg" className="moondust-gradient hover:opacity-90 text-white px-8 py-3">
            Explore Sales Management
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}