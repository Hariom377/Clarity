import SEO from '../components/SEO';

const today = new Date().toLocaleDateString('en-IN', {
  day: 'numeric', month: 'long', year: 'numeric',
});

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — iRREGO by Broxgit"
        description="Read iRREGO's privacy policy. Learn how we handle your data and financial information with full transparency."
        canonical="https://irrego.online/privacy-policy"
      />
      <div className="mx-auto max-w-[860px] px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Legal</p>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-[13px] text-muted font-mono">
          Effective Date: {today} &nbsp;&middot;&nbsp; Organization: Broxgit &nbsp;&middot;&nbsp; App: iRREGO
        </p>
        <div className="mt-2 h-px w-16 bg-line2" />

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-muted">

          {/* Intro */}
          <section>
            <p>
              Broxgit ("we", "us", "our") built the <strong className="text-paper">iRREGO</strong> app
              to help freelancers and gig workers manage irregular income. This Privacy Policy explains
              what data we collect, why we collect it, how we use it, and what control you have over it.
              Written in plain English — no legal maze.
            </p>
            <p className="mt-3">
              By using iRREGO, you agree to this policy. If you do not agree, please do not use the app.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">1. Information We Collect</h2>

            <h3 className="mt-5 text-[1rem] font-medium text-paper">1a. Google Sign-In</h3>
            <p className="mt-2 text-[14px]">
              When you sign in with Google, we receive your <strong className="text-paper">name, email address,
              and profile picture</strong> via Google OAuth. This is used only to create and authenticate
              your account. We do not use it for advertising or share it beyond what is listed in Section 4.
            </p>

            <h3 className="mt-5 text-[1rem] font-medium text-paper">1b. Financial Data You Enter</h3>
            <p className="mt-2 text-[14px]">iRREGO stores the financial data you manually enter, including:</p>
            <ul className="mt-3 ml-5 list-disc space-y-1.5 text-[14px]">
              <li>Income amounts and income type (freelance, gig, salary, etc.)</li>
              <li>Expense entries and categories</li>
              <li>Fixed monthly commitments (rent, EMI, subscriptions)</li>
              <li>Savings goal percentage and target amounts</li>
              <li>Emergency buffer settings</li>
            </ul>

            <h3 className="mt-5 text-[1rem] font-medium text-paper">1c. What We Do NOT Collect</h3>
            <p className="mt-2 text-[14px]">
              We do not collect your device identifiers, location, contacts, call logs, SMS messages,
              browsing history, or any other personal data beyond what is listed above.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">2. How We Use Your Data</h2>
            <ul className="mt-4 ml-5 list-disc space-y-2 text-[14px]">
              <li>To calculate your "Safe to Spend Today" daily limit</li>
              <li>To show your transaction history, balance, and spending analytics</li>
              <li>To track your savings goals and financial runway</li>
              <li>To authenticate your account via Google Sign-In</li>
              <li>To sync your data across devices via Supabase</li>
            </ul>
            <p className="mt-3 text-[14px]">
              We do <strong className="text-paper">not</strong> use your data for advertising, sell it to
              anyone, or share it with third parties beyond the services listed in Section 3.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">3. Third-Party Services</h2>
            <p className="mt-3 text-[14px]">
              iRREGO uses <strong className="text-paper">only these two third-party services</strong>.
              No analytics, no ads, no crash reporting tools:
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-line2 bg-card p-4">
                <p className="font-medium text-paper text-[14px]">Supabase</p>
                <p className="mt-1 text-[13px]">
                  Stores your financial data securely in the cloud. Handles authentication, database,
                  sync, and backup. Review their privacy policy at{' '}
                  <a href="https://supabase.com/privacy" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    supabase.com/privacy
                  </a>.
                </p>
              </div>
              <div className="rounded-lg border border-line2 bg-card p-4">
                <p className="font-medium text-paper text-[14px]">Google OAuth</p>
                <p className="mt-1 text-[13px]">
                  Used for Sign-In only. No additional Google tracking or ad services are used. Review
                  Google's privacy policy at{' '}
                  <a href="https://policies.google.com/privacy" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    policies.google.com/privacy
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">4. Data Storage &amp; Security</h2>
            <ul className="mt-4 ml-5 list-disc space-y-2 text-[14px]">
              <li>Your financial data is stored on Supabase with <strong className="text-paper">Row-Level Security (RLS)</strong> enabled — only you can access your own data.</li>
              <li>All data is encrypted in transit via HTTPS.</li>
              <li>No Broxgit employee can read your individual financial records.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">5. Account Deletion</h2>
            <p className="mt-3 text-[14px]">
              You can delete your account at any time from inside the app:{' '}
              <strong className="text-paper">Profile &rarr; Delete Account &rarr; Complete CAPTCHA.</strong>
            </p>
            <p className="mt-3 text-[14px]">
              Upon completion, all your data is <strong className="text-paper">immediately and permanently deleted</strong>{' '}
              from our application database. There is no grace period and no recovery option.
            </p>
            <p className="mt-3 text-[14px]">
              Having trouble? Email{' '}
              <a href="mailto:support@irrego.online" className="text-emerald-400 hover:underline">support@irrego.online</a>
              {' '}and we will handle it within 7 days.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">6. Your Rights</h2>
            <p className="mt-3 text-[14px]">Under applicable Indian law, you have the right to:</p>
            <ul className="mt-3 ml-5 list-disc space-y-2 text-[14px]">
              <li><strong className="text-paper">Access</strong> — Request a copy of the data we hold about you.</li>
              <li><strong className="text-paper">Correction</strong> — Edit any inaccurate data directly in the app.</li>
              <li><strong className="text-paper">Deletion</strong> — Delete your account and all associated data.</li>
            </ul>
            <p className="mt-3 text-[14px]">
              To exercise any right, email{' '}
              <a href="mailto:support@irrego.online" className="text-emerald-400 hover:underline">support@irrego.online</a>.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">7. Children's Privacy</h2>
            <p className="mt-3 text-[14px]">
              iRREGO is not intended for users under 13 years of age. We do not knowingly collect
              personal information from children. If we discover we have received data from a child,
              we will delete it immediately.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">8. Changes to This Policy</h2>
            <p className="mt-3 text-[14px]">
              We may update this policy from time to time. When we do, we will update the effective date
              at the top and, for significant changes, notify you in-app. Continued use of iRREGO after
              changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">9. Governing Law</h2>
            <p className="mt-3 text-[14px]">
              This Privacy Policy is governed by the laws of the Republic of India, including the
              Information Technology Act, 2000 and its applicable rules.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-[1.25rem] font-semibold text-paper tracking-[-0.02em]">10. Contact Us</h2>
            <div className="mt-4 rounded-lg border border-line2 bg-card p-4 text-[13px] space-y-1">
              <p><span className="text-faint">Organization:</span> <span className="text-paper font-medium">Broxgit</span></p>
              <p><span className="text-faint">App:</span> <span className="text-paper">iRREGO</span></p>
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
