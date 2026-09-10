import SEO from '../components/SEO';

const today = new Date().toLocaleDateString('en-IN', {
  day: 'numeric', month: 'long', year: 'numeric',
});

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service — iRREGO by Broxgit"
        description="Read iRREGO's Terms of Service. Understand your rights, responsibilities, and the limitations of this personal finance tracking app."
        canonical="https://irrego.online/terms"
      />
      <div className="mx-auto max-w-[860px] px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Legal</p>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          Terms of Service
        </h1>
        <p className="mt-3 text-[13px] text-muted font-mono">
          Effective Date: {today} &nbsp;&middot;&nbsp; Governing Law: Republic of India
        </p>
        <div className="mt-2 h-px w-16 bg-line2" />

        {/* Critical disclaimer */}
        <div className="mt-10 rounded-xl border border-amber-500/25 bg-amber-500/[0.04] p-5">
          <p className="text-[13px] font-semibold text-amber-400">Important Disclaimer</p>
          <p className="mt-2 text-[13px] text-muted leading-relaxed">
            The "Safe to Spend Today" figure and all other metrics shown in iRREGO are{' '}
            <strong className="text-paper">estimates based solely on data you provide</strong>. They are not
            financial advice. Broxgit bears no responsibility for financial decisions made based on
            these figures. For financial advice, consult a qualified financial advisor.
          </p>
        </div>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-muted">

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">1. Acceptance of Terms</h2>
            <p className="mt-3 text-[14px]">
              By downloading, installing, or using the iRREGO app, you agree to be bound by these
              Terms of Service. If you do not agree, do not use the app. These Terms constitute a
              legally binding agreement between you and Broxgit.
            </p>
          </section>

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">2. What iRREGO Is (and Is Not)</h2>
            <p className="mt-3 text-[14px]">
              iRREGO is a <strong className="text-paper">personal finance tracking tool</strong>. It helps
              you log income and expenses, track daily spending, and visualize your financial patterns.
            </p>
            <p className="mt-3 text-[14px]">iRREGO is <strong className="text-paper">not</strong>:</p>
            <ul className="mt-3 ml-5 list-disc space-y-1.5 text-[14px]">
              <li>A financial advisor or wealth management service</li>
              <li>A banking or payment application</li>
              <li>Affiliated with any bank, NBFC, or financial institution</li>
              <li>A SEBI-registered investment advisor or RBI-regulated entity</li>
            </ul>
            <p className="mt-3 text-[14px]">
              All figures in the app are estimates based on data you enter. They do not constitute
              financial advice. Broxgit is not liable for any financial loss arising from reliance
              on these figures.
            </p>
          </section>

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">3. User Responsibilities</h2>
            <p className="mt-3 text-[14px]">By using iRREGO, you agree to:</p>
            <ul className="mt-3 ml-5 list-disc space-y-2 text-[14px]">
              <li>Enter accurate financial data. Inaccurate input will produce inaccurate estimates.</li>
              <li>Keep your Google account credentials secure. You are responsible for all activity under your account.</li>
              <li>Use iRREGO only for lawful personal finance tracking purposes.</li>
              <li>Not use iRREGO to track finances for illegal, fraudulent, or deceptive activities.</li>
              <li>Be at least 13 years old to use the app.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">4. Prohibited Uses</h2>
            <p className="mt-3 text-[14px]">You may not:</p>
            <ul className="mt-3 ml-5 list-disc space-y-2 text-[14px]">
              <li>Reverse engineer, decompile, or attempt to extract the source code of the app</li>
              <li>Use the app to commit fraud, money laundering, or any illegal financial activity</li>
              <li>Create multiple accounts to abuse free access or circumvent limitations</li>
              <li>Attempt to gain unauthorized access to other users' data</li>
              <li>Interfere with the app's infrastructure, servers, or security mechanisms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">5. Account Termination</h2>
            <p className="mt-3 text-[14px]">
              <strong className="text-paper">You may delete your account at any time</strong> via
              Profile &rarr; Delete Account. Deletion is immediate and permanent.
            </p>
            <p className="mt-3 text-[14px]">
              Broxgit reserves the right to suspend or terminate accounts that violate these Terms
              or engage in fraudulent activity. We will provide notice where reasonably possible.
            </p>
          </section>

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">6. Disclaimer of Warranties</h2>
            <p className="mt-3 text-[14px]">
              iRREGO is provided <strong className="text-paper">"as is"</strong> and{' '}
              <strong className="text-paper">"as available"</strong> without warranties of any kind. We do not guarantee:
            </p>
            <ul className="mt-3 ml-5 list-disc space-y-1.5 text-[14px]">
              <li>Uninterrupted or error-free operation of the app</li>
              <li>That the app will meet your specific financial needs</li>
              <li>Specific uptime or availability targets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">7. Limitation of Liability</h2>
            <p className="mt-3 text-[14px]">
              To the maximum extent permitted by Indian law, Broxgit shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of iRREGO.
              This includes financial losses resulting from reliance on app estimates.
            </p>
            <p className="mt-3 text-[14px]">
              Our total aggregate liability shall not exceed the amount you paid us in the 12 months
              preceding the claim (which, if the app is free, is Rs. 0).
            </p>
          </section>

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">8. Modifications to Terms</h2>
            <p className="mt-3 text-[14px]">
              We may update these Terms from time to time. We will update the effective date above
              and, for significant changes, notify you in-app. Your continued use after changes are
              posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">9. Governing Law</h2>
            <p className="mt-3 text-[14px]">
              These Terms are governed by the laws of the Republic of India, including the Information
              Technology Act, 2000. Any disputes shall be subject to the exclusive jurisdiction of
              the courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">10. Contact</h2>
            <div className="mt-4 rounded-lg border border-line2 bg-card p-4 text-[13px] space-y-1">
              <p><span className="text-faint">Organization:</span> <span className="text-paper font-medium">Broxgit</span></p>
              <p>
                <span className="text-faint">Email:</span>{' '}
                <a href="mailto:support@irrego.online" className="text-emerald-400 hover:underline">support@irrego.online</a>
              </p>
              <p>
                <span className="text-faint">Website:</span>{' '}
                <a href="https://irrego.online" className="text-emerald-400 hover:underline">irrego.online</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
