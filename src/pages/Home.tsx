import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import ProductMockup from '../components/ProductMockup';
import { useI18n } from '../lib/i18n';
import { brand } from '../lib/brand';
<<<<<<< HEAD
import SEO from '../components/SEO';

/** Reusable clean phone frame — no blurry background, no outer frame overlay */
function PhoneFrame({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[240px] sm:max-w-[260px] ${className}`}>
      {/* Ambient shadow */}
      <div className="pointer-events-none absolute -inset-4 rounded-[48px] bg-black/60 blur-2xl" />
      {/* Phone card */}
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.07] bg-[#0a0a0a] shadow-[0_24px_64px_-8px_rgba(0,0,0,0.98)]">
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full"
          loading="lazy"
          draggable={false}
        />
        {/* Subtle glass sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
      </div>
    </div>
  );
}
=======
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9

export default function Home() {
  const { t } = useI18n();
  const sym = brand.currency.symbol;

  const months = [
    { label: 'Month 1', amount: 50000 },
    { label: 'Month 2', amount: 18000 },
    { label: 'Month 3', amount: 65000 },
    { label: 'Month 4', amount: 22000 },
  ];
  const maxAmt = 65000;

  return (
<<<<<<< HEAD
    <>
      <SEO
        title="iRREGO — Financial Operating System for Irregular Earners"
        description="A Financial Operating System for freelancers, creators, and irregular earners. Know exactly how much you can safely spend today."
        canonical="https://irrego.online/"
      />
    <div>
      {/* ===== HERO ===== */}
      <section className="relative px-5 pt-24 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6">
              <Reveal><SectionLabel>{t.hero.label}</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-4 text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1.0] tracking-[-0.035em] text-balance">
=======
    <div>
      {/* ===== HERO ===== */}
      <section className="relative px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <Reveal><SectionLabel>{t.hero.label}</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-[clamp(2.4rem,6.5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9
                  {t.hero.title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
<<<<<<< HEAD
                <p className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-muted">{t.hero.subtitle}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link to="/waitlist" className="rounded-md bg-paper px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-[#e5e5e5]">{t.hero.ctaPrimary}</Link>
                  <Link to="/how-it-works" className="rounded-md border border-line2 px-5 py-2.5 text-[13px] text-paper transition-colors hover:border-faint">{t.hero.ctaSecondary}</Link>
=======
                <p className="mt-7 max-w-[480px] text-[17px] leading-relaxed text-muted">{t.hero.subtitle}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link to="/waitlist" className="rounded-md bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-[#e5e5e5]">{t.hero.ctaPrimary}</Link>
                  <Link to="/how-it-works" className="rounded-md border border-line2 px-5 py-3 text-[14px] text-paper transition-colors hover:border-faint">{t.hero.ctaSecondary}</Link>
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.2} y={30}>
<<<<<<< HEAD
                <div className="lg:pl-4"><ProductMockup /></div>
=======
                <div className="lg:pl-6"><ProductMockup /></div>
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>{t.problem.label}</SectionLabel></Reveal>
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal delay={0.05}>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">{t.problem.title}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[16px] leading-relaxed text-muted">{t.problem.body1}</p>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">{t.problem.body2}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.12} y={24}>
                <div className="rounded-xl border border-line2 bg-card p-6 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{t.problem.monthLabel}</p>
                  <div className="mt-6 space-y-5">
                    {months.map((m, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between text-[13px]">
                          <span className="font-mono text-muted">{m.label}</span>
                          <span className="font-mono text-paper">{sym}{m.amount.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="mt-2 h-2 w-full bg-line">
                          <div className="h-full bg-paper transition-all" style={{ width: `${(m.amount / maxAmt) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.18} y={20}>
                <div className="mt-6 rounded-xl border border-line2 bg-card p-6 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{t.problem.failLabel}</p>
                  <h3 className="mt-3 text-[18px] font-medium tracking-[-0.01em] text-paper">{t.problem.failTitle}</h3>
                  <ul className="mt-4 space-y-3">
                    {t.problem.failPoints.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ===== SOLUTION — Analytics screen shows full picture ===== */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Text left */}
            <div className="lg:col-span-6">
              <Reveal><SectionLabel>{t.solution.label}</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">
                  {t.solution.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[16px] leading-relaxed text-muted">{t.solution.body1}</p>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">{t.solution.body2}</p>
              </Reveal>
              {/* Feature grid below text */}
              <Reveal delay={0.14}>
                <div className="mt-10 grid grid-cols-2 gap-px border border-line2 bg-line2">
                  {t.solution.points.map((p, i) => (
                    <div key={i} className="h-full bg-card p-5">
                      <span className="font-mono text-[10px] text-faint">0{i + 1}</span>
                      <h3 className="mt-2 text-[14px] font-medium tracking-[-0.01em] text-paper">{p.t}</h3>
                      <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{p.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            {/* Analytics screen right */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <Reveal delay={0.18} y={24}>
                <PhoneFrame
                  src="/screens/screen-analytics.png"
                  alt="iRREGO Analytics — Daily Burn rate, 24-day Runway, Buffer, Income and Expense breakdown with donut chart"
                />
              </Reveal>
            </div>
=======
<p className="mt-6 text-[16px] leading-relaxed text-muted">
  Learn how our{" "}
  <Link
    to="/features"
    className="text-paper underline underline-offset-4 hover:text-faint"
  >
    budgeting features
  </Link>{" "}
  are built specifically for people with irregular income.
</p>



      

      {/* ===== SOLUTION ===== */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>{t.solution.label}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-[680px] text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">{t.solution.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-muted">{t.solution.body1}</p>
            <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-muted">{t.solution.body2}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px border border-line2 bg-line2 sm:grid-cols-2 lg:grid-cols-4">
            {t.solution.points.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="h-full bg-card p-6">
                  <span className="font-mono text-[11px] text-faint">0{i + 1}</span>
                  <h3 className="mt-3 text-[16px] font-medium tracking-[-0.01em] text-paper">{p.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.d}</p>
                </div>
              </Reveal>
            ))}
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ===== TRACK EVERY RUPEE — Transactions screen ===== */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Transactions screen left */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start">
              <Reveal delay={0.1} y={24}>
                <PhoneFrame
                  src="/screens/screen-transactions.png"
                  alt="iRREGO Transactions — Complete history of income and expenses with categories like Food, Transport, Freelance"
                />
              </Reveal>
            </div>
            {/* Text right */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <Reveal><SectionLabel>Transactions</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">
                  Every rupee tracked — income and expenses in one place
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[16px] leading-relaxed text-muted">
                  See your complete transaction history at a glance. Filter by category — Food, Bills, Transport, Freelance income. iRREGO keeps every debit and every client payment organized so you always know where your money went.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <ul className="mt-8 space-y-3">
                  {[
                    'Income and expenses in a single unified feed',
                    'Filter by category: Food, Bills, Transport, and more',
                    'See both spending history and client deposits together',
                    'Edit or delete any entry at any time',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOG IN SECONDS — New Transaction screen ===== */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Text left */}
            <div className="lg:col-span-7">
              <Reveal><SectionLabel>Add Transactions</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">
                  Log any expense or income in under 10 seconds
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[16px] leading-relaxed text-muted">
                  Tap +, pick a category, enter the amount. Done. iRREGO has 15 built-in categories — Food, Rent, Medical, Transport, Tuition, and more. If yours is missing, create a custom one. No friction, no forms, no confusion.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {['Food', 'Rent', 'Transport', 'Medical', 'Freelance Income', '+ Custom'].map((cat) => (
                    <div key={cat} className="flex items-center gap-2 rounded-lg border border-line2 bg-card px-3 py-2.5">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span className="text-[12px] text-muted">{cat}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            {/* Add Transaction screen right */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={0.18} y={24}>
                <PhoneFrame
                  src="/screens/screen-add-txn.png"
                  alt="iRREGO New Transaction — Add expense or income with 15 categories including Food, Rent, Medical, Transport and a Custom option"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOALS — Financial Goals screen ===== */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Goals screen left */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start">
              <Reveal delay={0.1} y={24}>
                <PhoneFrame
                  src="/screens/screen-goals.png"
                  alt="iRREGO Financial Goals — Emergency Fund, Savings Goal and personal goals like New Bike with progress tracking"
                />
              </Reveal>
            </div>
            {/* Text right */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <Reveal><SectionLabel>Financial Goals</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">
                  Not just budgeting — building your financial future
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[16px] leading-relaxed text-muted">
                  Set goals for an Emergency Fund, a savings target, or something personal — your new bike, a trip, anything. iRREGO automatically sets aside money each month so you make real progress, even when your income is unpredictable.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <ul className="mt-8 space-y-3">
                  {[
                    'Emergency Fund — protect yourself from unexpected expenses',
                    'Savings Goal — build long-term wealth month by month',
                    'Personal goals — bike, travel, equipment, anything you want',
                    'Track progress with visual bars and months-to-go estimate',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
=======
<p className="mt-6 text-[16px] leading-relaxed text-muted">
  Discover exactly{" "}
  <Link
    to="/how-it-works"
    className="text-paper underline underline-offset-4 hover:text-faint"
  >
    how iRREGO works
  </Link>{" "}
  to calculate your safe daily spending limit.
</p>


      
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9

      {/* ===== TRUST ===== */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>{t.trust.label}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-[640px] text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">{t.trust.title}</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px border border-line2 bg-line2 sm:grid-cols-2">
            {t.trust.items.map((item, i) => (
              <Reveal key={i} delay={(i % 2) * 0.06}>
                <div className="h-full bg-card p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line2 font-mono text-[12px] text-paper">0{i + 1}</span>
                    <h3 className="text-[17px] font-medium tracking-[-0.01em] text-paper">{item.t}</h3>
                  </div>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======

<div className="mt-10">
  <Link
    to="/about"
    className="text-paper underline underline-offset-4 hover:text-faint"
  >
    Learn more about why we built iRREGO →
  </Link>
</div>



      

>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9
      {/* ===== CTA ===== */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <SectionLabel>{t.cta.label}</SectionLabel>
              <h2 className="mt-6 max-w-[700px] text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.035em] text-balance">{t.cta.title}</h2>
              <p className="mt-5 max-w-[440px] text-[16px] leading-relaxed text-muted">{t.cta.body}</p>
              <Link to="/waitlist" className="mt-8 rounded-md bg-paper px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-[#e5e5e5]">{t.cta.button}</Link>
<<<<<<< HEAD
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
                <Link to="/features" className="text-muted hover:text-paper">Features</Link>
                <Link to="/how-it-works" className="text-muted hover:text-paper">How It Works</Link>
                <Link to="/faq" className="text-muted hover:text-paper">FAQ</Link>
                <Link to="/about" className="text-muted hover:text-paper">About</Link>
                <Link to="/contact" className="text-muted hover:text-paper">Contact</Link>
              </div>
=======





              
<div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">

  <Link
    to="/features"
    className="text-muted hover:text-paper"
  >
    Features
  </Link>

  <Link
    to="/how-it-works"
    className="text-muted hover:text-paper"
  >
    How It Works
  </Link>

  <Link
    to="/faq"
    className="text-muted hover:text-paper"
  >
    FAQ
  </Link>

  <Link
    to="/about"
    className="text-muted hover:text-paper"
  >
    About
  </Link>

  <Link
    to="/contact"
    className="text-muted hover:text-paper"
  >
    Contact
  </Link>

</div>



              
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9
            </div>
          </Reveal>
        </div>
      </section>
    </div>
<<<<<<< HEAD
    </>
=======
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9
  );
}
