import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { brand } from '../lib/brand';

export default function Contact() {
  const { t } = useI18n();
  const f = t.contact.form;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) { setError(f.errName); setStatus('error'); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { setError(f.errEmail); setStatus('error'); return; }
    if (!message.trim()) { setError(f.errMessage); setStatus('error'); return; }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), category: category || 'General', message: message.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setStatus('error'); setError(data.error || f.netError); return; }
      setStatus('success');
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

  const emails = [brand.email.general, brand.email.partnerships, brand.email.support];

  return (
    <div>
      <section className="px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>{t.contact.label}</SectionLabel></Reveal>
              <Reveal delay={0.05}><h1 className="mt-6 text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1] tracking-[-0.035em] text-balance">{t.contact.title}</h1></Reveal>
              <Reveal delay={0.1}><p className="mt-6 max-w-[400px] text-[16px] leading-relaxed text-muted">{t.contact.body}</p></Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 space-y-4">
                  {t.contact.categories.map((c, i) => (
                    <div key={i} className="border border-line2 bg-card p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[15px] font-medium text-paper">{c.t}</h3>
                        <a href={`mailto:${emails[i]}`} className="font-mono text-[11px] text-muted hover:text-paper">{emails[i]}</a>
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-muted">{c.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1} y={24}>
                <div className="rounded-xl border border-line2 bg-card p-6 sm:p-8">
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div key="success" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }} className="flex flex-col items-center py-10 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line2">
                          <Check className="h-6 w-6 text-paper" />
                        </div>
                        <h2 className="mt-6 text-[24px] font-semibold tracking-[-0.02em]">{f.successTitle}</h2>
                        <p className="mt-3 max-w-[300px] text-[15px] leading-relaxed text-muted">{f.successBody}</p>
                        <button onClick={() => { setStatus('idle'); setName(''); setEmail(''); setCategory(''); setMessage(''); }} className="mt-6 font-mono text-[12px] text-muted hover:text-paper">{f.again}</button>
                      </motion.div>
                    ) : (
                      <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} onSubmit={submit} className="space-y-5">
                        {field(f.name, <input value={name} onChange={(e)=>setName(e.target.value)} placeholder={f.namePlaceholder} className={inputCls} />)}
                        {field(f.email, <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={f.emailPlaceholder} className={inputCls} />)}
                        {field(f.category, (
                          <select value={category} onChange={(e)=>setCategory(e.target.value)} className={`${inputCls} appearance-none`}>
                            <option value="" disabled>Select…</option>
                            {t.contact.categories.map((c) => <option key={c.t} value={c.t} className="bg-ink text-paper">{c.t}</option>)}
                          </select>
                        ))}
                        {field(f.message, <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder={f.messagePlaceholder} rows={5} className={`${inputCls} resize-none`} />)}
                        {error && <p className="font-mono text-[12px] text-paper">{error}</p>}
                        <button type="submit" disabled={status==='loading'} className="w-full rounded-md bg-paper px-5 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-[#e5e5e5] disabled:opacity-50">
                          {status === 'loading' ? f.sending : f.send}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
