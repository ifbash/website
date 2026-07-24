import { MetadataRoute } from "next";
import { portfolioSlugs } from "@/lib/portfolio-data";
import { industrySlugs } from "@/lib/industry-data";

export const dynamic = "force-static";

const BASE_URL = "https://ifbash.com";

type Entry = {
  url: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: Entry[] = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/get-started", priority: 0.9, changeFrequency: "monthly" },
    { url: "/contactus", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { url: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
    { url: "/work", priority: 0.9, changeFrequency: "monthly" },
    { url: "/engage", priority: 0.8, changeFrequency: "monthly" },
    { url: "/agent", priority: 0.9, changeFrequency: "monthly" },
  ];

  // The three practices sit at equal priority — the site no longer treats
  // ServiceNow as the only thing worth ranking for.
  const services: Entry[] = [
    // ServiceNow
    { url: "/services/servicenow-implementation", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/ai-automation", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/crm-customer-experience", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/managed-services-support", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/custom-apps", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/digital-transformation", priority: 0.8, changeFrequency: "monthly" },
    // AI & Agents
    { url: "/services/ai-agents", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/voice-agents", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/claude-ai-engineering", priority: 0.9, changeFrequency: "monthly" },
    // Web & Mobile
    { url: "/services/website-development", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/mobile-app-development", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/web-mobile-development", priority: 0.8, changeFrequency: "monthly" },
  ];

  const company: Entry[] = [
    { url: "/company/about-us", priority: 0.7, changeFrequency: "monthly" },
    { url: "/company/careers-servicenow-jobs", priority: 0.6, changeFrequency: "weekly" },
    { url: "/company/news-events-servicenow", priority: 0.6, changeFrequency: "weekly" },
    { url: "/learning-center-servicenow", priority: 0.7, changeFrequency: "weekly" },
  ];

  const legal: Entry[] = [
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { url: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  ];

  // Generated from the data files so the sitemap can never drift from the
  // routes that actually exist.
  const industries: Entry[] = industrySlugs.map((s) => ({
    url: `/industries/${s}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const portfolio: Entry[] = portfolioSlugs.map((s) => ({
    url: `/portfolio/${s}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...core, ...services, ...industries, ...portfolio, ...company, ...legal].map(
    ({ url, priority, changeFrequency }) => ({
      url: `${BASE_URL}${url}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  );
}
