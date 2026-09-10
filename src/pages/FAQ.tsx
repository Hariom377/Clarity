import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
<<<<<<< HEAD
import SEO from '../components/SEO';

function Item({ q, a, i }: { q: string; a: string | React.ReactNode; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={(i % 3) * 0.03}>
      <div className="border-b border-line">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 py-5 text-left"
          aria-expanded={open}
        >
          <span className="text-[15px] font-medium text-paper leading-snug pr-2">{q}</span>
          <span
            className="shrink-0 text-muted transition-transform duration-300"
            style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </button>

        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? '600px' : '0px', opacity: open ? 1 : 0 }}
          aria-hidden={!open}
        >
          <div className="pb-5 text-[14px] leading-relaxed text-muted">
            {typeof a === 'string' ? <p>{a}</p> : a}
          </div>
        </div>

        {!open && typeof a === 'string' && (
          <span className="sr-only">{a}</span>
        )}
=======
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
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9
      </div>
    </Reveal>
  );
}

<<<<<<< HEAD
interface FAQSection {
  label: string;
  items: { q: string; a: string | React.ReactNode }[];
}

const FAQ_DATA: FAQSection[] = [
  {
    label: 'General',
    items: [
      {
        q: 'What is iRREGO?',
        a: "iRREGO is a personal finance app built for people with irregular income — freelancers, delivery partners, gig workers, and anyone whose income changes month to month. It tells you exactly how much you can safely spend today without stressing your future bills or goals.",
      },
      {
        q: 'Who is iRREGO for?',
        a: "iRREGO is for Indian freelancers, Zomato/Swiggy/Ola/Uber delivery partners, YouTube creators, tutors, and anyone whose income is not a fixed monthly salary. If you have ever wondered \"can I afford this today?\", iRREGO answers that question for you.",
      },
      {
        q: 'Is iRREGO free to use?',
        a: "Yes. iRREGO is currently free to use during our early access phase. We will always offer a generous free tier for core features.",
      },
      {
        q: 'Which devices does iRREGO support?',
        a: "iRREGO is available on Android (Google Play Store). iOS support is on our roadmap.",
      },
    ],
  },
  {
    label: 'Privacy & Data',
    items: [
      {
        q: 'Is my financial data safe?',
        a: "Yes. Your data is stored on Supabase with Row-Level Security (RLS) — only you can access your own data. All data is encrypted in transit via HTTPS. No Broxgit employee can read your individual records.",
      },
      {
        q: 'Who can see my data?',
        a: "Only you. Your financial data is private to your account. We do not sell your data, share it with advertisers, or use it for any purpose other than running the app for you.",
      },
      {
        q: 'What data does iRREGO collect?',
        a: "iRREGO collects your Google profile (name, email, photo) for sign-in, and the financial data you manually enter — income amounts, expense entries, savings goals, and fixed monthly commitments. We do not collect SMS, location, contacts, or any other device data.",
      },
    ],
  },
  {
    label: 'Account',
    items: [
      {
        q: 'How do I create an account?',
        a: "Download iRREGO from the Google Play Store and tap \"Sign in with Google\". No password needed. Your Google account is used only for authentication.",
      },
      {
        q: 'How do I delete my account?',
        a: "Open the app, tap Profile in the bottom nav, tap \"Delete Account\", then complete the CAPTCHA. Your account and all data are permanently deleted immediately. No email needed.",
      },
      {
        q: 'What happens to my data after I delete my account?',
        a: "All your data — income records, expenses, goals, transaction history, and Google auth link — is immediately and permanently deleted from our database.",
      },
      {
        q: 'Can I recover my account after deletion?',
        a: "No. Deletion is permanent and immediate. There is no grace period and no recovery option. Please note any important data before deleting.",
      },
    ],
  },
  {
    label: 'Features',
    items: [
      {
        q: 'How is "Safe to Spend Today" calculated?',
        a: (
          <div className="space-y-2">
            <p>It is your average monthly income minus your committed expenses, divided into a daily budget:</p>
            <div className="mt-2 rounded-lg bg-card border border-line2 p-3 font-mono text-[12px] text-paper leading-relaxed">
              (3-month avg income - fixed expenses - emergency buffer - savings goal) / days in month
            </div>
            <p className="mt-2">This is an estimate based on data you enter. The more accurate your data, the more useful this number is.</p>
          </div>
        ),
      },
      {
        q: 'What if my income changes every month?',
        a: "That is exactly what iRREGO is built for. The app uses a rolling 3-month average of your income to smooth out high and low months. A good month will not make you overspend, and a bad month will not make the limit seem impossible.",
      },
      {
        q: 'How do I add transactions?',
        a: "Tap the + button in the app and enter your income or expense manually. Select the category, enter the amount, and save. It takes about 10 seconds per transaction.",
      },
      {
        q: 'What is "Runway"?',
        a: "Runway tells you how many days your current available balance will last if you keep spending at your current daily burn rate. For example, \"24-day runway\" means your money will last 24 more days at your current pace.",
      },
      {
        q: 'What is "Daily Burn"?',
        a: "Daily Burn is your average daily spending based on recent transactions. If your Daily Burn is Rs. 450, you are spending about Rs. 450 per day on average.",
      },
      {
        q: 'What income types does iRREGO support?',
        a: "iRREGO supports freelance project income, gig/delivery income, UPI transfers, salary, part-time work, rental income, and custom income types. You can categorize and track multiple income sources.",
      },
    ],
  },
  {
    label: 'Support',
    items: [
      {
        q: 'How do I contact support?',
        a: "Email us at support@irrego.online. We typically respond within 1-2 business days. Please include your registered email and a brief description of the issue.",
      },
      {
        q: 'How do I give feedback or suggest a feature?',
        a: "We would love to hear from you. Email support@irrego.online with the subject \"Feedback\" or \"Feature Request\". Since we are building this for gig workers and freelancers, your real-world input directly shapes the app.",
      },
    ],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.flatMap((section) =>
    section.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof item.a === 'string' ? item.a : item.q,
      },
    }))
  ),
};

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ — iRREGO Personal Finance App for Freelancers"
        description="Frequently asked questions about iRREGO — data privacy, Safe to Spend Today calculation, features, and account management."
        canonical="https://irrego.online/faq"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[860px] px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
        <Reveal>
          <SectionLabel>Help &amp; FAQ</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Frequently Asked Questions
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted">
            Everything you need to know about iRREGO — how it works, how your data is handled,
            and how to get the most out of it.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {FAQ_DATA.map((section) => (
            <div key={section.label}>
              <Reveal>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint mb-1">
                  {section.label}
                </p>
              </Reveal>
              <div className="mt-2">
                {section.items.map((item, i) => (
                  <Item key={item.q} q={item.q} a={item.a} i={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-16 rounded-xl border border-line2 bg-card p-6 sm:p-8 text-center">
            <p className="text-[15px] font-medium text-paper">Still have a question?</p>
            <p className="mt-2 text-[13px] text-muted">
              We are a small team and we reply personally.
            </p>
            <a
              href="mailto:support@irrego.online"
              className="mt-5 inline-block rounded-md bg-paper px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-[#e5e5e5]"
            >
              Email support@irrego.online
            </a>
          </div>
        </Reveal>
      </div>
    </>
=======
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
>>>>>>> 1e97b0db204183a11b56dde0978ffc7ba6d953b9
  );
}
