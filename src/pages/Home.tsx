import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import ProductMockup from '../components/ProductMockup';
import SEO from "../components/SEO";
import { useI18n } from '../lib/i18n';
import { brand } from '../lib/brand';

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

<>
  <SEO
    title="iRREGO | Personal Finance Companion for Irregular Income"
    description="Know exactly how much you can safely spend today. iRREGO helps freelancers, creators, gig workers and self-employed professionals manage irregular income, budget smarter, track expenses and achieve financial freedom."
    canonical="https://irrego.online/"
  />

    
    <div>
      {/* ===== HERO ===== */}
      <section className="relative px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <Reveal><SectionLabel>{t.hero.label}</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-[clamp(2.4rem,6.5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">
                  {t.hero.title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-[480px] text-[17px] leading-relaxed text-muted">{t.hero.subtitle}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link to="/waitlist" className="rounded-md bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-[#e5e5e5]">{t.hero.ctaPrimary}</Link>
                  <Link to="/how-it-works" className="rounded-md border border-line2 px-5 py-3 text-[14px] text-paper transition-colors hover:border-faint">{t.hero.ctaSecondary}</Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={0.2} y={30}>
                <div className="lg:pl-6"><ProductMockup /></div>
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
          </div>
        </div>
      </section>

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

      {/* ===== CTA ===== */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <SectionLabel>{t.cta.label}</SectionLabel>
              <h2 className="mt-6 max-w-[700px] text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.035em] text-balance">{t.cta.title}</h2>
              <p className="mt-5 max-w-[440px] text-[16px] leading-relaxed text-muted">{t.cta.body}</p>
              <Link to="/waitlist" className="mt-8 rounded-md bg-paper px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-[#e5e5e5]">{t.cta.button}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  </>
  );
}
