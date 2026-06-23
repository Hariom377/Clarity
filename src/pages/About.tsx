import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { useI18n } from '../lib/i18n';

export default function About() {
  const { t } = useI18n();

  return (
    <div>
      <section className="px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>{t.about.label}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-[820px] text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">{t.about.title}</h1>
          </Reveal>
        </div>
      </section>

      {/* founder story */}
      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal><SectionLabel>{t.about.founderLabel}</SectionLabel></Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.08}>
                <div className="space-y-5 text-[17px] leading-relaxed text-muted">
                  {t.about.founderStory.map((p, i) => (
                    <p key={i} className={i === t.about.founderStory.length - 1 ? 'text-paper' : ''}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* why we exist */}
      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>{t.about.whyLabel}</SectionLabel></Reveal>
              <Reveal delay={0.05}><h2 className="mt-6 text-[clamp(1.6rem,3.2vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">{t.about.whyTitle}</h2></Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <Reveal delay={0.1}><p className="text-[17px] leading-relaxed text-muted">{t.about.whyBody}</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* mission / vision */}
      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <Reveal><SectionLabel>{t.about.missionLabel}</SectionLabel></Reveal>
              <Reveal delay={0.05}><p className="mt-5 text-[20px] leading-relaxed tracking-[-0.01em] text-paper">{t.about.mission}</p></Reveal>
            </div>
            <div>
              <Reveal><SectionLabel>{t.about.visionLabel}</SectionLabel></Reveal>
              <Reveal delay={0.05}><p className="mt-5 text-[20px] leading-relaxed tracking-[-0.01em] text-paper">{t.about.vision}</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>{t.about.valuesLabel}</SectionLabel></Reveal>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {t.about.values.map((v, i) => (
              <Reveal key={i} delay={0.04}>
                <div className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-8">
                  <div className="sm:col-span-4"><h3 className="text-[17px] font-medium tracking-[-0.01em] text-paper">{v.t}</h3></div>
                  <div className="sm:col-span-8"><p className="text-[15px] leading-relaxed text-muted">{v.d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
