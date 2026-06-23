import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { FeaturePreview } from '../components/FeaturePreview';
import { useI18n } from '../lib/i18n';

export default function Features() {
  const { t } = useI18n();

  return (
    <div>
      <section className="px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>{t.features.label}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-[760px] text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">{t.features.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[520px] text-[17px] leading-relaxed text-muted">{t.features.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((m, i) => (
              <Reveal key={m.n} delay={(i % 3) * 0.05}>
                <div className="group flex h-full flex-col border border-line2 bg-card p-6 transition-colors duration-300 hover:border-faint sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-faint">MODULE {m.n}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-line2 transition-colors group-hover:bg-paper" />
                  </div>
                  <h3 className="mt-4 text-[20px] font-medium tracking-[-0.01em] text-paper">{m.t}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{m.d}</p>
                  {/* Interactive UI preview */}
                  <div className="mt-5"><FeaturePreview index={i} /></div>
                  <div className="mt-5 border-t border-line pt-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">{m.spec}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
