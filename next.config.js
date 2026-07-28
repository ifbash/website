/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // No `images: { unoptimized: true }` here on purpose — it was required by the
  // old `output: 'export'` setup, which is gone, and leaving it on disabled
  // Next's image pipeline for no benefit. Do not re-add it.

  // Enterprise buyers — public sector, healthcare, financial services — run
  // security questionnaires against the marketing site. These are the headers
  // a scanner looks for.
  //
  // On the CSP: `script-src` still allows 'unsafe-inline' because Next injects
  // inline hydration scripts, and locking that down properly needs nonces
  // generated in middleware — which would make every page dynamic. So this
  // policy deliberately does NOT claim to stop script injection. What it does
  // do is real and worth having on its own:
  //   object-src 'none'    kills <object>/<embed> injection outright
  //   base-uri 'self'      stops a <base> tag hijacking every relative URL
  //   frame-ancestors      clickjacking protection (and outranks X-Frame-Options)
  //   form-action 'self'   a script cannot repoint the lead form off-site
  //   connect/img/font     an injected script cannot phone home anywhere new
  // Adding nonce middleware is the next step whenever it is worth the tradeoff.
  async headers() {
    // Dev mode gets NO security headers. The strict production CSP below breaks
    // `next dev`: webpack's dev runtime needs eval ('unsafe-eval'), HMR needs a
    // ws:// connection, and `upgrade-insecure-requests` can force http://localhost
    // subresources onto https://, which fails outright — blank page, dead menus.
    // CSP protects real users in production; on localhost it only breaks tooling.
    if (process.env.NODE_ENV !== 'production') {
      return [];
    }

    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      'upgrade-insecure-requests',
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), geolocation=(), payment=(), usb=(), microphone=(self)' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // www served the whole site at 200 alongside the apex — two live copies of
      // every URL, and the pages that set no canonical (the home page most of
      // all) left Google to pick a winner. It reported the home page as
      // "Duplicate without user-selected canonical". One host, one copy.
      // Vercel's domain-level redirect would do the same; keeping it here means
      // it travels with the repo instead of living only in project settings.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ifbash.com' }],
        destination: 'https://ifbash.com/:path*',
        permanent: true,
      },

      // /solutions/* was a duplicate layer over the same ServiceNow topics as
      // /portfolio and /services — never linked from the nav, but indexed.
      // Each URL goes to its closest surviving equivalent.
      { source: '/solutions/crm', destination: '/services/crm-customer-experience', permanent: true },
      { source: '/solutions/customer', destination: '/portfolio/customer-service-management', permanent: true },
      { source: '/solutions/it-digital', destination: '/portfolio/it-service-management', permanent: true },
      { source: '/solutions/employee', destination: '/portfolio/hr-service-delivery', permanent: true },
      { source: '/solutions/hr', destination: '/portfolio/hr-service-delivery', permanent: true },
      { source: '/solutions/risk-security', destination: '/portfolio/security-operations', permanent: true },
      // Was pointing at /portfolio/accounts-payable-operations, which the 2026-07-25
      // capability prune retired — that made a two-hop redirect chain. Chains leak
      // link equity and are an SEO smell, so this goes straight to the survivor.
      { source: '/solutions/finance-supply', destination: '/portfolio', permanent: true },
      { source: '/solutions/technology', destination: '/industries/technology-software-companies', permanent: true },
      { source: '/solutions/core-business', destination: '/services', permanent: true },
      { source: '/solutions/app-development', destination: '/services/custom-apps', permanent: true },
      { source: '/solutions', destination: '/services', permanent: true },

      // The old client-success page carried invented clients and figures
      // ("a regional bank with 340 branches", "$2.1M saved"). /work carries
      // proof that can actually be checked.
      { source: '/company/case-studies-client-success', destination: '/work', permanent: true },

      // ── Retired platform capabilities (2026-07-25) ────────────────────
      // /portfolio was ServiceNow's whole product catalogue (38 pages), not
      // work ifBash had done. Cut to the 13 products customers actually buy
      // — see components/nav-data.ts, which is the source of truth for the
      // live set. These 25 were indexed, so every one gets a 301 to its
      // nearest surviving equivalent rather than a 404.
      // To bring one back: restore its title in portfolioCategories and
      // DELETE its line here. Its page body is still in lib/portfolio-data.ts.
      { source: '/portfolio/accounts-payable-operations', destination: '/portfolio', permanent: true },
      { source: '/portfolio/sourcing-and-procurement-operations', destination: '/portfolio', permanent: true },
      { source: '/portfolio/cloud-governance-suite', destination: '/portfolio/it-operations-management', permanent: true },
      { source: '/portfolio/operational-technology-management', destination: '/portfolio/it-operations-management', permanent: true },
      { source: '/portfolio/servicenow-cloud-observability', destination: '/portfolio/it-operations-management', permanent: true },
      { source: '/portfolio/digital-end-user-experience', destination: '/portfolio/it-service-management', permanent: true },
      { source: '/portfolio/service-operations-workspace', destination: '/portfolio/it-service-management', permanent: true },
      { source: '/portfolio/enterprise-architecture', destination: '/portfolio/strategic-portfolio-management', permanent: true },
      { source: '/portfolio/configure-price-quote', destination: '/portfolio/customer-service-management', permanent: true },
      { source: '/portfolio/financial-services-operations', destination: '/portfolio/customer-service-management', permanent: true },
      { source: '/portfolio/sales-and-order-management', destination: '/portfolio/customer-service-management', permanent: true },
      { source: '/portfolio/sales-and-order-management-for-technology-providers', destination: '/portfolio/customer-service-management', permanent: true },
      { source: '/portfolio/privacy-management', destination: '/portfolio/integrated-risk-management', permanent: true },
      { source: '/portfolio/third-party-risk-management', destination: '/portfolio/integrated-risk-management', permanent: true },
      { source: '/portfolio/supplier-lifecycle-operations', destination: '/portfolio/integrated-risk-management', permanent: true },
      { source: '/portfolio/security-posture-control', destination: '/portfolio/security-operations', permanent: true },
      { source: '/portfolio/threat-intelligence-security-center', destination: '/portfolio/security-operations', permanent: true },
      { source: '/portfolio/legal-service-delivery', destination: '/portfolio/hr-service-delivery', permanent: true },
      { source: '/portfolio/talent-development', destination: '/portfolio/hr-service-delivery', permanent: true },
      { source: '/portfolio/workplace-service-delivery', destination: '/portfolio/hr-service-delivery', permanent: true },
      // Industry-shaped products go to the industry page, not a product page.
      { source: '/portfolio/healthcare-and-life-sciences-service-management', destination: '/industries/healthcare-providers', permanent: true },
      { source: '/portfolio/public-sector-digital-services', destination: '/industries/public-sector-government', permanent: true },
      { source: '/portfolio/technology-provider-service-management', destination: '/industries/technology-software-companies', permanent: true },
      { source: '/portfolio/telecommunications-service-management', destination: '/industries/telecommunications', permanent: true },
      { source: '/portfolio/sales-and-order-management-for-telecommunications', destination: '/industries/telecommunications', permanent: true },
    ];
  },
};

module.exports = nextConfig;
