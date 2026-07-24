import { MetadataRoute } from "next";
import { portfolioSlugs } from "@/lib/portfolio-data";
import { industrySlugs } from "@/lib/industry-data";
import { getAllInsights } from "@/lib/insights";
import { ROUTE_PAIRS } from "@/lib/i18n/config";

export const dynamic = "force-static";

const BASE_URL = "https://ifbash.com";

type Entry = {
  url: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  /** Articles carry their own edit date; everything else uses the build time. */
  lastModified?: Date;
};

/**
 * hreflang for any URL that exists in both languages.
 *
 * Declared here rather than per-page: Google treats sitemap alternates as
 * equivalent to <link rel="alternate">, and keeping it in one place means the
 * English and Arabic sides can't end up pointing at each other inconsistently.
 * Both members of a pair must list the same set, including x-default.
 */
function languagesFor(urlPath: string) {
  const pair = ROUTE_PAIRS.find((p) => p.en === urlPath || p.ar === urlPath);
  if (!pair) return undefined;
  return {
    en: `${BASE_URL}${pair.en}`,
    ar: `${BASE_URL}${pair.ar}`,
    "x-default": `${BASE_URL}${pair.en}`,
  };
}

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

  // Articles report their own edit date so crawlers see genuine freshness
  // rather than every URL appearing to change on each deploy.
  const posts = getAllInsights();
  const insights: Entry[] = [
    ...(posts.length
      ? [{ url: "/insights", priority: 0.8, changeFrequency: "weekly" as const }]
      : []),
    ...posts.map((p) => ({
      url: `/insights/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: new Date(`${p.updated || p.date}T00:00:00Z`),
    })),
  ];

  // Arabic pages, generated from the same pairing that drives the header
  // toggle and the hreflang tags, so the three can never disagree.
  const arabic: Entry[] = ROUTE_PAIRS.map((p) => ({
    url: p.ar,
    priority: p.ar === "/ar" ? 0.9 : 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...core,
    ...services,
    ...insights,
    ...industries,
    ...portfolio,
    ...company,
    ...legal,
    ...arabic,
  ].map(({ url, priority, changeFrequency, lastModified }) => {
    const languages = languagesFor(url);
    return {
      url: `${BASE_URL}${url}`,
      lastModified: lastModified ?? now,
      changeFrequency,
      priority,
      ...(languages ? { alternates: { languages } } : {}),
    };
  });
}
