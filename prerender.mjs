/**
 * iRREGO — Static Site Generation (SSG) Prerender Script
 *
 * Run via: node prerender.mjs (called by "npm run build")
 *
 * What this does:
 * 1. Builds the client bundle (normal Vite build)
 * 2. Builds a Node.js server bundle (entry-server.tsx → renderToString)
 * 3. Renders each route to a static HTML file in dist/
 * 4. Injects per-route meta tags (title, description, canonical, OG)
 *
 * Result: Google's crawler gets real HTML on the first request.
 * No JS rendering required for indexing.
 */

import { build } from 'vite';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
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

// ─── Inject per-route meta tags into the HTML template ───────────────────────
function injectMeta(html, meta) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(<meta name="title"\s+content=")[^"]*(")/,           `$1${meta.title}$2`)
    .replace(/(<meta name="description"\s+content=")[^"]*(")/,     `$1${meta.description}$2`)
    .replace(/(<meta property="og:title"\s+content=")[^"]*(")/,    `$1${meta.title}$2`)
    .replace(/(<meta property="og:description"\s+content=")[^"]*(")/,`$1${meta.description}$2`)
    .replace(/(<meta property="og:url"\s+content=")[^"]*(")/,      `$1${meta.canonical}$2`)
    .replace(/(<meta name="twitter:title"\s+content=")[^"]*(")/,   `$1${meta.title}$2`)
    .replace(/(<meta name="twitter:description"\s+content=")[^"]*(")/,`$1${meta.description}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/,         `$1${meta.canonical}$2`);
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

  const { render } = await import(join(__dirname, 'dist/server/entry-server.js'));
  const baseTemplate = readFileSync(join(__dirname, 'dist/index.html'), 'utf-8');

  for (const route of ROUTES) {
    const meta = ROUTE_META[route] ?? ROUTE_META['/'];

    let appHtml = '';
    try {
      appHtml = render(route);
    } catch (err) {
      console.warn(`  ⚠ renderToString failed for ${route}: ${err.message}`);
      console.warn('    Falling back to empty shell (page will still work via client-side React)');
    }

    let html = baseTemplate.replace('<!--app-html-->', appHtml);
    html = injectMeta(html, meta);

    const outDir = route === '/'
      ? join(__dirname, 'dist')
      : join(__dirname, 'dist', route.slice(1));

    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

    writeFileSync(join(outDir, 'index.html'), html);
    console.log(`  ✓ ${route.padEnd(20)} → dist${route}/index.html`);
  }

  console.log('\n✅ Pre-rendering complete! All routes have static HTML.\n');
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
