import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { useI18n } from '../lib/i18n';

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <div>
      <section className="px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>{t.howItWorks.label}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-[760px] text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">{t.howItWorks.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[560px] text-[17px] leading-relaxed text-muted">{t.howItWorks.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Animated step timeline */}
      <section className="border-t border-line px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line2 sm:left-[23px]" />
            <div className="space-y-12 sm:space-y-16">
              {t.howItWorks.steps.map((s, i) => (
                <Reveal key={s.n} delay={0.05} y={30}>
                  <div className="flex gap-6 sm:gap-8">
                    {/* node */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line2 bg-ink sm:h-12 sm:w-12">
                      <span className="font-mono text-[12px] text-paper sm:text-[13px]">{s.n}</span>
                    </div>
                    {/* content */}
                    <div className="flex-1 pt-1.5 sm:pt-2.5">
                      <h3 className="text-[clamp(1.3rem,2.5vw,1.9rem)] font-semibold tracking-[-0.02em] text-paper">{s.t}</h3>
                      <p className="mt-3 max-w-[560px] text-[15.5px] leading-relaxed text-muted">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-line px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <h2 className="max-w-[600px] text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">{t.cta.title}</h2>
              <a href="/waitlist" className="mt-6 rounded-md bg-paper px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-[#e5e5e5]">{t.cta.button}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
