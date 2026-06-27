/**
 * ============================================================
 *  CENTRAL BRAND CONFIGURATION
 * ============================================================
 *  Rebrand the entire platform by editing this single file.
 *  The name, logo initial, domain, emails, currency, tagline,
 *  SEO metadata, and social links all flow from here into every
 *  component, page, API route, and meta tag.
 * ============================================================
 */

export const brand = {
  /** Display name shown in nav, footer, and <title>. */
  name: 'iRREGO',
  /** Short badge shown next to the name (e.g. "OS"). 
  suffix: 'R',
  Single-letter or short mark used in the logo + favicon. 
  mark: 'i',
   Public domain (used for emails, SEO canonical, sitemap). */
  domain: 'iRREGO.live',
  /** Default site language code. */
  defaultLang: 'en',

  /** Contact channels. */
  email: {
    general: 'hello@iRREGO.live',
    partnerships: 'partners@iRREGO.live',
    support: 'support@iRREGO.live',
  },

  /** Currency used in all product mockups and previews. */
  currency: { code: 'INR', symbol: '₹', locale: 'en-IN' },

  /** One-line positioning shown under the logo / in hero label. */
  tagline: 'Financial Operating System',

  /** SEO — description used in meta tags. */
  description:
    'A Financial Operating System for freelancers, creators, and irregular earners. Know exactly how much you can safely spend today.',

  /** SEO — comma-separated keywords. */
  keywords:
    'freelancer finance app, irregular income budgeting, financial operating system, freelance money management, creator finance, irregular income tracker',

  /** Social profiles (leave empty string to hide). */
  social: {
    twitter: 'https://twitter.com/iRREGOos',
    linkedin: 'https://linkedin.com/company/iRREGOos',
  },

  /** Open Graph / social share image path. */
  ogImage: '/og-image.png',

  /**
   * Future-ready routes. These are wired into the router and render
   * a polished "Coming Soon" page today, so the architecture is ready
   * to ship each one without restructuring the app.
   */
  futureRoutes: [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Login', path: '/login' },
    { label: 'Blog', path: '/blog' },
    { label: 'Community', path: '/community' },
 { label: 'Careers', path: '/careers' },
    { label: 'Investor Relations', path: '/investors' },
    { label: 'Documentation', path: '/docs' },
    { label: 'Product Updates', path: '/updates' },
  ],
} as const;

export type Brand = typeof brand;
