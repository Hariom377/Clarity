import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../lib/i18n';

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={(i % 2) * 0.04}>
      <div className="border-b border-line">
        <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
          <span className="flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-faint">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-[17px] font-medium tracking-[-0.01em] text-paper sm:text-[19px]">{q}</span>
          </span>
          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line2 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
            <span className="relative h-3 w-3">
              <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-paper" />
              <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-paper" />
            </span>
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
              <p className="max-w-[680px] pb-6 pl-10 text-[15px] leading-relaxed text-muted sm:pl-12">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  const { t } = useI18n();
  return (
    <div>
      <section className="px-5 pt-32 pb-12 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>{t.faq.label}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-[720px] text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1] tracking-[-0.035em] text-balance">{t.faq.title}</h1>
          </Reveal>
        </div>
      </section>
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="border-t border-line">
            {t.faq.items.map((f, i) => <Item key={i} q={f.q} a={f.a} i={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
