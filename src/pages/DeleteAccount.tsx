import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DeleteAccount() {
  return (
    <>
      <SEO
        title="Delete Your Account — iRREGO"
        description="How to permanently delete your iRREGO account and all associated data. Step-by-step instructions."
        canonical="https://irrego.online/delete-account"
      />
      <div className="mx-auto max-w-[720px] px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
        {/* Header */}
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Account</p>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          Delete Your Account
        </h1>
        <p className="mt-3 text-[15px] text-muted max-w-[520px]">
          You can permanently delete your Irrego account and all your data directly inside the app.
          This page exists to make that process easy and transparent.
        </p>
        <div className="mt-6 h-px w-16 bg-line2" />

        {/* Warning callout */}
        <div className="mt-10 rounded-xl border border-red-500/25 bg-red-500/[0.04] p-5">
          <p className="text-[13px] font-medium text-red-400">⚠️ Deletion is permanent</p>
          <p className="mt-1.5 text-[13px] text-muted leading-relaxed">
            Once deleted, your account and all data cannot be recovered. There is no grace period and no undo.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 space-y-4">
          <h2 className="text-[1.1rem] font-semibold text-paper tracking-[-0.02em]">
            How to Delete Your Account
          </h2>
          <p className="text-[14px] text-muted">Follow these steps inside the Irrego Android app:</p>

          {[
            { step: '1', text: 'Open the Irrego app on your Android phone.' },
            { step: '2', text: 'Tap Profile in the bottom navigation bar.' },
            { step: '3', text: 'Tap "Delete Account".' },
            { step: '4', text: 'Complete the CAPTCHA verification to confirm your intent.' },
            { step: '5', text: 'Your account and all associated data are permanently deleted immediately.' },
          ].map(({ step, text }) => (
            <div key={step} className="flex items-start gap-4 rounded-lg border border-line2 bg-card p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-line2 font-mono text-[12px] font-semibold text-paper">
                {step}
              </span>
              <p className="text-[14px] text-muted leading-relaxed pt-0.5">{text}</p>
            </div>
          ))}
        </div>

        {/* What gets deleted */}
        <div className="mt-10">
          <h2 className="text-[1.1rem] font-semibold text-paper tracking-[-0.02em]">
            What Gets Deleted
          </h2>
          <p className="mt-2 text-[14px] text-muted">The following is immediately and permanently removed from our database:</p>
          <ul className="mt-4 space-y-2">
            {[
              'Your Google account link and authentication token',
              'All income records and expense entries',
              'All transaction history',
              'Savings goals and progress data',
              'Emergency buffer and fixed expense settings',
              'Onboarding data and app preferences',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Key facts */}
        <div className="mt-10 rounded-xl border border-line2 bg-card p-6 space-y-3">
          <h2 className="text-[1rem] font-semibold text-paper">Key Facts</h2>
          {[
            'Deletion happens immediately — the moment CAPTCHA is confirmed.',
            'No grace period. No recovery option. This is final.',
            'No email confirmation is sent — deletion is confirmed in-app.',
            'Third-party services (Supabase) may retain encrypted backups per their own policies.',
          ].map((fact) => (
            <div key={fact} className="flex items-start gap-3 text-[13px] text-muted">
              <span className="mt-1 text-paper font-bold shrink-0">·</span>
              {fact}
            </div>
          ))}
        </div>

        {/* Trouble */}
        <div className="mt-10 text-[14px] text-muted">
          <h2 className="text-[1rem] font-semibold text-paper mb-2">Having Trouble?</h2>
          <p>
            If you can't access the app or face any issue with the deletion flow, email us at{' '}
            <a href="mailto:support@irrego.online" className="text-emerald-400 hover:underline">
              support@irrego.online
            </a>{' '}
            with the subject line "Account Deletion Request". We'll manually process your request
            within 7 business days.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-6 border-t border-line">
          <Link to="/privacy-policy" className="text-[13px] text-muted hover:text-paper transition-colors">
            ← Read our Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
}
