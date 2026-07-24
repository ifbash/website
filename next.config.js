/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  transpilePackages: ['lenis'],

  async redirects() {
    return [
      // /solutions/* was a duplicate layer over the same ServiceNow topics as
      // /portfolio and /services — never linked from the nav, but indexed.
      // Each URL goes to its closest surviving equivalent.
      { source: '/solutions/crm', destination: '/services/crm-customer-experience', permanent: true },
      { source: '/solutions/customer', destination: '/portfolio/customer-service-management', permanent: true },
      { source: '/solutions/it-digital', destination: '/portfolio/it-service-management', permanent: true },
      { source: '/solutions/employee', destination: '/portfolio/hr-service-delivery', permanent: true },
      { source: '/solutions/hr', destination: '/portfolio/hr-service-delivery', permanent: true },
      { source: '/solutions/risk-security', destination: '/portfolio/security-operations', permanent: true },
      { source: '/solutions/finance-supply', destination: '/portfolio/accounts-payable-operations', permanent: true },
      { source: '/solutions/technology', destination: '/industries/technology-software-companies', permanent: true },
      { source: '/solutions/core-business', destination: '/services', permanent: true },
      { source: '/solutions/app-development', destination: '/services/custom-apps', permanent: true },
      { source: '/solutions', destination: '/services', permanent: true },

      // The old client-success page carried invented clients and figures
      // ("a regional bank with 340 branches", "$2.1M saved"). /work carries
      // proof that can actually be checked.
      { source: '/company/case-studies-client-success', destination: '/work', permanent: true },
    ];
  },
};

module.exports = nextConfig;
