import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '../lib/i18n';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useI18n();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/features', label: t.nav.features },
    { to: '/how-it-works', label: t.nav.howItWorks },
    { to: '/about', label: t.nav.about },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <Logo onClick={() => setOpen(false)} />

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[13px] transition-colors duration-200 ${active ? 'text-paper' : 'text-muted hover:text-paper'}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <Link
            to="/waitlist"
            className="hidden rounded-md bg-paper px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-[#e5e5e5] sm:block"
          >
            {t.nav.joinWaitlist}
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center lg:hidden"
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`h-px w-5 bg-paper transition-all ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`h-px w-5 bg-paper transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`h-px w-5 bg-paper transition-all ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-line bg-ink lg:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 text-[15px] text-muted hover:text-paper"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/waitlist"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-md bg-paper px-4 py-3 text-center text-[14px] font-medium text-ink"
              >
                {t.nav.joinWaitlist}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
