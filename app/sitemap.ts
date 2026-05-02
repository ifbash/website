import { MetadataRoute } from "next";

const BASE_URL = "https://ifbash.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{
    url: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    // Core pages
    { url: "/",                                    priority: 1.0, changeFrequency: "weekly" },
    { url: "/get-started",                         priority: 0.9, changeFrequency: "monthly" },
    { url: "/contactus",                           priority: 0.8, changeFrequency: "monthly" },

    // Services
    { url: "/services/servicenow-implementation",  priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/ai-automation",              priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/crm-customer-experience",    priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/digital-transformation",     priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/managed-services-support",   priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/custom-apps",                priority: 0.8, changeFrequency: "monthly" },

    // Solutions
    { url: "/solutions/it-digital",                priority: 0.8, changeFrequency: "monthly" },
    { url: "/solutions/employee",                  priority: 0.8, changeFrequency: "monthly" },
    { url: "/solutions/customer",                  priority: 0.8, changeFrequency: "monthly" },
    { url: "/solutions/crm",                       priority: 0.8, changeFrequency: "monthly" },
    { url: "/solutions/risk-security",             priority: 0.8, changeFrequency: "monthly" },
    { url: "/solutions/hr",                        priority: 0.7, changeFrequency: "monthly" },
    { url: "/solutions/finance-supply",            priority: 0.7, changeFrequency: "monthly" },
    { url: "/solutions/technology",                priority: 0.7, changeFrequency: "monthly" },
    { url: "/solutions/core-business",             priority: 0.7, changeFrequency: "monthly" },
    { url: "/solutions/app-development",           priority: 0.7, changeFrequency: "monthly" },

    // Industries
    { url: "/industries/healthcare-providers",              priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/manufacturing-solutions",           priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/technology-software-companies",     priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/financial-services",                priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/automotive-manufacturing",          priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/retail-ecommerce",                  priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/consumer-goods-retail",             priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/telecommunications",                priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/energy-utilities",                  priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/life-sciences-pharma",              priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/public-sector-government",          priority: 0.7, changeFrequency: "monthly" },

    // Portfolio
    { url: "/portfolio/it-service-management",                           priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/it-operations-management",                        priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/it-asset-management",                             priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/hr-service-delivery",                             priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/customer-service-management",                     priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/field-service-management",                        priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/security-operations",                             priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/integrated-risk-management",                      priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/strategic-portfolio-management",                  priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/app-engine",                                      priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/integration-hub",                                 priority: 0.7, changeFrequency: "monthly" },
    { url: "/portfolio/digital-end-user-experience",                     priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/enterprise-architecture",                         priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/workplace-service-delivery",                      priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/legal-service-delivery",                          priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/financial-services-operations",                   priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/configure-price-quote",                           priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/sales-and-order-management",                      priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/sales-and-order-management-for-technology-providers", priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/sales-and-order-management-for-telecommunications",   priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/accounts-payable-operations",                     priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/sourcing-and-procurement-operations",             priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/supplier-lifecycle-operations",                   priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/third-party-risk-management",                     priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/privacy-management",                              priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/security-incident-response",                      priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/security-posture-control",                        priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/threat-intelligence-security-center",             priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/vulnerability-response",                          priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/cloud-governance-suite",                          priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/servicenow-cloud-observability",                  priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/operational-technology-management",               priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/service-operations-workspace",                    priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/talent-development",                              priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/healthcare-and-life-sciences-service-management", priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/public-sector-digital-services",                  priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/technology-provider-service-management",          priority: 0.6, changeFrequency: "monthly" },
    { url: "/portfolio/telecommunications-service-management",           priority: 0.6, changeFrequency: "monthly" },

    // Company
    { url: "/company/about-us",                          priority: 0.7, changeFrequency: "monthly" },
    { url: "/company/case-studies-client-success",       priority: 0.8, changeFrequency: "weekly" },
    { url: "/company/careers-servicenow-jobs",           priority: 0.6, changeFrequency: "weekly" },
    { url: "/company/news-events-servicenow",            priority: 0.6, changeFrequency: "weekly" },

    // Resources
    { url: "/learning-center-servicenow",                priority: 0.7, changeFrequency: "weekly" },

    // Legal
    { url: "/privacy",                                   priority: 0.3, changeFrequency: "yearly" },
    { url: "/terms",                                     priority: 0.3, changeFrequency: "yearly" },
    { url: "/cookies",                                   priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
