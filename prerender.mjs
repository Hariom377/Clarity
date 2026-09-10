/**
 * iRREGO — Static Site Generation (SSG) Prerender Script
 *
 * Run via: node prerender.mjs (called by "npm run build")
 *
 * What this does:
 * 1. Builds the client bundle (normal Vite build)
 * 2. Builds a Node.js server bundle (entry-server.tsx → renderToString)
 * 3. Renders each route to a static HTML file in dist/
 * 4. Injects per-route meta tags (title, description, canonical, OG, JSON-LD)
 *
 * Result: Google's crawler gets real HTML on the first request.
 * No JS rendering required for indexing.
 */

import { build } from 'vite';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Routes to pre-render ─────────────────────────────────────────────────────
const ROUTES = [
  '/',
  '/features',
  '/how-it-works',
  '/about',
  '/waitlist',
  '/faq',
  '/contact',
];

// ─── Per-route SEO meta ───────────────────────────────────────────────────────
const ROUTE_META = {
  '/': {
    title: 'iRREGO — Financial Operating System for Irregular Earners',
    description: 'A Financial Operating System for freelancers, creators, and irregular earners. Know exactly how much you can safely spend today.',
    canonical: 'https://irrego.online/',
  },
  '/features': {
    title: 'Features — iRREGO | Smart Budgeting for Irregular Income',
    description: 'Safe spending calculator, income tracking, expense management, goal planning, and smart insights — all built specifically for freelancers and gig workers.',
    canonical: 'https://irrego.online/features',
  },
  '/how-it-works': {
    title: 'How It Works — iRREGO | Daily Safe Spending Limit Explained',
    description: 'Learn how iRREGO calculates your daily safe spending limit using your income history, fixed commitments, and savings goals — automatically.',
    canonical: 'https://irrego.online/how-it-works',
  },
  '/about': {
    title: 'About — iRREGO | Built for Freelancers and Gig Workers in India',
    description: 'Two founders from Varanasi building the personal finance app Indian freelancers, creators, and gig workers actually need.',
    canonical: 'https://irrego.online/about',
  },
  '/waitlist': {
    title: 'Join Waitlist — iRREGO | Early Access + 3 Months Free Premium',
    description: 'Join thousands of freelancers and gig workers waiting for iRREGO. Early members get 3 months of premium free at launch.',
    canonical: 'https://irrego.online/waitlist',
  },
  '/faq': {
    title: 'FAQ — iRREGO | Common Questions About Irregular Income Budgeting',
    description: 'Answers to common questions about iRREGO — the personal finance app built specifically for people with irregular income.',
    canonical: 'https://irrego.online/faq',
  },
  '/contact': {
    title: 'Contact — iRREGO | Get in Touch',
    description: 'Contact the iRREGO team. We are two founders from Varanasi and we would love to hear from you.',
    canonical: 'https://irrego.online/contact',
  },
};

// ─── FAQPage JSON-LD (injected into /faq pre-rendered HTML) ──────────────────
const FAQ_ITEMS = [
  { q: 'Who is it built for?', a: 'For Unstable Income Users, Freelancers, creators, designers, developers, consultants, agency owners, gig workers, delivery partners, self-employed professionals and students with side income — anyone whose income does not arrive on a fixed schedule.' },
  { q: 'Why not use spreadsheets?', a: 'Spreadsheets are manual and backward-looking. They record what happened, but they do not compute what is safe to do next. For an irregular earner, the question is never "what did I spend last month" — it is "how much can I spend today without breaking my runway." That requires a system, not a grid.' },
  { q: 'How is this different from expense trackers?', a: 'Expense trackers tell you what you already spent. That is looking backward. iRREGO tells you what you can safely spend today — that is looking forward. The difference is the same as a rear-view mirror versus a windshield. Both matter, but only one helps you avoid the crash.' },
  { q: 'Is my data secure?', a: 'Yes. iRREGO is built on Supabase, an industry-standard secure cloud platform. Your data is encrypted and stored safely. We do not sell it, share it, or use it for advertising. You can delete your entire account and all your data permanently at any time from the app settings.' },
  { q: 'When is the launch?', a: 'Early access is opening soon. The core engine is in private testing now. Join the waitlist to be notified the moment it opens.' },
  { q: 'Will there be a mobile app?', a: 'Yes. The system is being built cross-platform from day one — a native mobile app for daily use and a web dashboard for the deeper view.' },
  { q: 'Will there be a web dashboard?', a: 'Yes. A web dashboard is planned so you can check your finances from any browser, not just your phone. Full dashboard access will be available after launch.' },
  { q: 'Will it remain free?', a: 'iRREGO will launch as a free app with core features available to everyone. A premium plan with advanced insights, goal tracking, and financial health scoring will be available at a small monthly fee. Everyone on the waitlist gets 3 months of premium free when we launch.' },
  { q: 'Is this app only for English speakers?', a: 'iRREGO currently supports English. Hindi and regional language support is on our roadmap. If you want Hindi support prioritized, tell us when you join the waitlist.' },
  { q: 'I am a student with a part-time income. Is iRREGO for me?', a: 'Yes. If you earn from freelancing, tutoring, YouTube, Instagram, or any irregular source — iRREGO is built for you. You do not need a fixed salary to use it. You just need income that varies, which is exactly the problem iRREGO solves.' },
];

const FAQ_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

// ─── Inject per-route meta tags into the HTML template ───────────────────────
function injectMeta(html, meta, route) {
  let result = html
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(<meta name="title"\s+content=")[^"]*(")/,           `$1${meta.title}$2`)
    .replace(/(<meta name="description"\s+content=")[^"]*(")/,     `$1${meta.description}$2`)
    .replace(/(<meta property="og:title"\s+content=")[^"]*(")/,    `$1${meta.title}$2`)
    .replace(/(<meta property="og:description"\s+content=")[^"]*(")/,`$1${meta.description}$2`)
    .replace(/(<meta property="og:url"\s+content=")[^"]*(")/,      `$1${meta.canonical}$2`)
    .replace(/(<meta name="twitter:title"\s+content=")[^"]*(")/,   `$1${meta.title}$2`)
    .replace(/(<meta name="twitter:description"\s+content=")[^"]*(")/,`$1${meta.description}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/,         `$1${meta.canonical}$2`);

  // Inject FAQPage JSON-LD into /faq page
  if (route === '/faq') {
    result = result.replace(
      '</head>',
      `<script type="application/ld+json">${FAQ_SCHEMA}</script>\n</head>`
    );
  }

  return result;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function prerender() {
  // 1. Build the client bundle (output → dist/)
  console.log('\n📦 Step 1/3 — Building client bundle...');
  await build({
    configFile: join(__dirname, 'vite.config.ts'),
    logLevel: 'warn',
  });

  // 2. Build the server bundle (output → dist/server/)
  console.log('🖥️  Step 2/3 — Building server bundle...');
  await build({
    configFile: join(__dirname, 'vite.config.ts'),
    logLevel: 'warn',
    build: {
      outDir: join(__dirname, 'dist/server'),
      ssr: join(__dirname, 'src/entry-server.tsx'),
      rollupOptions: { output: { format: 'es' } },
    },
  });

  // 3. Pre-render each route to a static HTML file
  console.log('⚡ Step 3/3 — Pre-rendering routes...\n');

  const serverEntryPath = pathToFileURL(join(__dirname, 'dist/server/entry-server.js')).href;
  const { render } = await import(serverEntryPath);
  const baseTemplate = readFileSync(join(__dirname, 'dist/index.html'), 'utf-8');

  const failures = [];

  for (const route of ROUTES) {
    const meta = ROUTE_META[route] ?? ROUTE_META['/'];

    let appHtml = '';
    try {
      appHtml = render(route);
    } catch (err) {
      // LOUD failure — collect and report after all routes, but still write shell
      failures.push({ route, err: err.message });
      console.warn(`  ⚠ renderToString failed for ${route}: ${err.message}`);
      console.warn('    Writing empty shell — page will hydrate via client-side React');
    }

    let html = baseTemplate.replace('<!--app-html-->', appHtml);
    html = injectMeta(html, meta, route);

    const outDir = route === '/'
      ? join(__dirname, 'dist')
      : join(__dirname, 'dist', route.slice(1));

    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

    writeFileSync(join(outDir, 'index.html'), html);
    const status = failures.find(f => f.route === route) ? '⚠' : '✓';
    console.log(`  ${status} ${route.padEnd(20)} → dist${route}/index.html`);
  }

  console.log('\n✅ Pre-rendering complete! All routes have static HTML.\n');

  if (failures.length > 0) {
    console.error(`\n⚠️  ${failures.length} route(s) fell back to empty shell:`);
    failures.forEach(f => console.error(`   ${f.route}: ${f.err}`));
    console.error('\n   These pages will still work via client-side React, but');
    console.error('   crawlers will see less content. Investigate the errors above.\n');
  }

  console.log('📁 Output structure:');
  ROUTES.forEach(r => {
    const path = r === '/' ? 'dist/index.html' : `dist${r}/index.html`;
    console.log(`   ${path}`);
  });
  console.log('');
}

prerender().catch(err => {
  console.error('\n❌ Pre-render script failed:', err);
  process.exit(1);
});
