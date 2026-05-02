import Link from "next/link";
import { BookOpen, ArrowLeft, ArrowRight, FileText, Video, Lightbulb, GraduationCap, Rocket, Brain, Shield, Workflow } from "lucide-react";

export const metadata = {
  title: "ServiceNow Learning Center | ifBash",
  description: "Free guides, tutorials, and best practices on ServiceNow implementation, AI automation, and digital transformation from the ifBash expert team.",
};

const topics = [
  {
    icon: Rocket,
    title: "Getting Started with ServiceNow",
    description: "Foundational concepts, platform overview, and what to expect during your first implementation.",
    badge: "Beginner",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Automation",
    description: "How to leverage ServiceNow's AI capabilities — from Virtual Agent to Predictive Intelligence.",
    badge: "Intermediate",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: Workflow,
    title: "Process Automation & Flow Designer",
    description: "Build powerful automated workflows without code using ServiceNow's Flow Designer.",
    badge: "Intermediate",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: Shield,
    title: "Security Operations & GRC",
    description: "Strengthen your security posture with ServiceNow SecOps, IRM, and compliance tooling.",
    badge: "Advanced",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    icon: GraduationCap,
    title: "ServiceNow Certification Paths",
    description: "A guide to the certifications available and how to prepare for the CSA, CAD, and more.",
    badge: "All levels",
    badgeColor: "bg-gray-100 text-gray-700",
  },
  {
    icon: Lightbulb,
    title: "Implementation Best Practices",
    description: "Lessons learned from 1,500+ implementations — scoping, change management, and go-live.",
    badge: "Practitioner",
    badgeColor: "bg-orange-100 text-orange-700",
  },
];

const resourceTypes = [
  { icon: FileText, label: "Guides & Articles" },
  { icon: Video, label: "Video Tutorials" },
  { icon: BookOpen, label: "Case Studies" },
];

export default function LearningCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #1a2e61 0%, #1e3a8a 50%, #1e40af 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-blue-200 text-sm mb-6">
            <BookOpen className="h-4 w-4" />
            Free Resources
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            ServiceNow Learning Center
          </h1>
          <p className="text-blue-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Practical knowledge from ifBash experts — guides, tutorials, and best practices to
            help you get the most out of ServiceNow.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Resource type badges */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {resourceTypes.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-gray-600 text-sm shadow-sm"
            >
              <Icon className="h-4 w-4 text-blue-500" />
              {label}
            </div>
          ))}
        </div>

        {/* Topics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {topics.map(({ icon: Icon, title, description, badge, badgeColor }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeColor}`}>
                  {badge}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="bg-white rounded-2xl border border-blue-100 p-8 text-center shadow-sm">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Full library coming soon</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            Our team is publishing in-depth articles and video tutorials. In the meantime, reach
            out and our consultants will answer your ServiceNow questions directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" }}
            >
              Talk to an Expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/company/case-studies-client-success"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Read Case Studies
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
