import { useState, useEffect } from 'react';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useI18n } from '../lib/i18n';

export default function Waitlist() {
  const { t } = useI18n();
  const f = t.waitlist.form;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'dup'>('idle');
  const [error, setError] = useState('');
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/waitlist').then((r) => r.json()).then((d) => { if (typeof d.count === 'number') setCount(d.count); }).catch(() => {});
  }, []);

  const validate = () => {
    if (!name.trim()) { setError(f.errName); return false; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { setError(f.errEmail); return false; }
    return true;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!validate()) { setStatus('error'); return; }
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), profession: profession || undefined }),
      });
      const data = await res.json();
      if (res.status === 409) { setStatus('dup'); setError(f.dup); return; }
      if (!res.ok) { setStatus('error'); setError(data.error || f.netError); return; }
      setStatus('success');
      setCount((c) => (c === null ? 1 : c + 1));
    } catch {
      setStatus('error'); setError(f.netError);
    }
  };

  const inputCls = 'w-full rounded-md border border-line2 bg-card px-4 py-3 text-[15px] text-paper placeholder:text-faint focus:border-faint focus:outline-none transition-colors';

  const field = (label: string, children: React.ReactNode) => (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );

  return (
    <div>
      <section className="px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* right: form - appears first on mobile */}
            <div className="order-first lg:order-last lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1} y={24}>
                <div className="rounded-xl border border-line2 bg-card p-6 sm:p-8">
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div key="success" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }} className="flex flex-col items-center text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line2">
                          <Check className="h-6 w-6 text-paper" />
                        </div>
                        <h2 className="mt-6 text-[24px] font-semibold tracking-[-0.02em]">{f.successTitle}</h2>
                        <p className="mt-3 max-w-[300px] text-[15px] leading-relaxed text-muted">{f.successBody}</p>
                        <button onClick={() => { setStatus('idle'); setName(''); setEmail(''); setProfession(''); }} className="mt-6 font-mono text-[12px] text-muted hover:text-paper">{f.again}</button>
                      </motion.div>
                    ) : (
                      <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} onSubmit={submit} className="space-y-5">
                        {field(f.name, <input value={name} onChange={(e)=>setName(e.target.value)} placeholder={f.namePlaceholder} className={inputCls} />)}
                        {field(f.email, <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={f.emailPlaceholder} className={inputCls} />)}
                        {field(t.waitlist.form.profession, (
                          <select value={profession} onChange={(e)=>setProfession(e.target.value)} className={`${inputCls} appearance-none`}>
                            <option value="" disabled>{f.professionPlaceholder}</option>
                            {t.waitlist.professions.map((p) => <option key={p} value={p} className="bg-ink text-paper">{p}</option>)}
                          </select>
                        ))}
                        {(error || status === 'dup') && <p className="font-mono text-[12px] text-paper">{error}</p>}
                        <button type="submit" disabled={status==='loading'} className="w-full rounded-md bg-paper px-5 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-[#e5e5e5] disabled:opacity-50">
                          {status === 'loading' ? f.loading : f.submit}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>

            {/* left: copy + benefits - appears second on mobile */}
            <div className="order-last lg:order-first lg:col-span-5">
              <Reveal><SectionLabel>{t.waitlist.label}</SectionLabel></Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-[clamp(2rem,4.8vw,3.8rem)] font-semibold leading-[1] tracking-[-0.035em] text-balance">{t.waitlist.title}</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-[400px] text-[16px] leading-relaxed text-muted">{t.waitlist.body}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                  <span className="font-mono text-[28px] font-medium tracking-[-0.02em] text-paper">{count === null ? '—' : count.toLocaleString()}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">{t.waitlist.form.countLabel}</span>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{t.waitlist.benefitsLabel}</p>
                  <ul className="mt-4 space-y-3">
                    {t.waitlist.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-paper" />
                        <div>
                          <span className="text-[14px] font-medium text-paper">{b.t}</span>
                          <span className="text-[13px] text-muted"> — {b.d}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
