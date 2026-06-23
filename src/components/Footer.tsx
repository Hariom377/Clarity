import { Link } from 'react-router-dom';
import Logo from './Logo';
import { brand } from '../lib/brand';
import { useI18n } from '../lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-[240px] text-[13px] leading-relaxed text-muted">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{t.footer.product}</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/" className="text-[13px] text-muted hover:text-paper">{t.nav.home}</Link></li>
              <li><Link to="/features" className="text-[13px] text-muted hover:text-paper">{t.nav.features}</Link></li>
              <li><Link to="/how-it-works" className="text-[13px] text-muted hover:text-paper">{t.nav.howItWorks}</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{t.footer.company}</p>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/about" className="text-[13px] text-muted hover:text-paper">{t.nav.about}</Link></li>
              <li><Link to="/faq" className="text-[13px] text-muted hover:text-paper">{t.nav.faq}</Link></li>
              <li><Link to="/contact" className="text-[13px] text-muted hover:text-paper">{t.nav.contact}</Link></li>
              <li><Link to="/waitlist" className="text-[13px] text-muted hover:text-paper">{t.nav.joinWaitlist}</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{t.footer.resources}</p>
            <ul className="mt-4 space-y-2.5">
              {brand.futureRoutes.slice(0, 5).map((r) => (
                <li key={r.path}>
                  <Link to={r.path} className="text-[13px] text-muted hover:text-paper">
                    {r.label} <span className="font-mono text-[9px] text-faint">· {t.footer.comingSoon}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-faint">© {new Date().getFullYear()} {brand.name.toUpperCase()} {brand.suffix} — {t.footer.rights}</p>
          <p className="font-mono text-[11px] text-faint">{t.footer.builtFor}</p>
        </div>
      </div>
    </footer>
  );
}
