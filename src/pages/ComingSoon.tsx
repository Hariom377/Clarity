import { Link, useLocation } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { useI18n } from '../lib/i18n';
import { brand } from '../lib/brand';

export default function ComingSoon() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const route = brand.futureRoutes.find((r) => r.path === pathname);
  const title = route?.label || t.comingSoon.title;

  return (
    <div>
      <section className="px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>{t.nav.comingSoon}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">{title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[520px] text-[17px] leading-relaxed text-muted">{t.comingSoon.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/" className="mt-8 inline-block rounded-md border border-line2 px-5 py-3 text-[14px] text-paper transition-colors hover:border-faint">{t.comingSoon.back}</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
