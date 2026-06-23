import { AnimatedNumber } from './AnimatedNumber';
import { brand } from '../lib/brand';

const sym = brand.currency.symbol;

/**
 * Interactive UI previews for each feature module.
 * Each renders a mini, monochrome product surface — no illustrations,
 * just the OS aesthetic carried through.
 */
export function FeaturePreview({ index }: { index: number }) {
  switch (index) {
    case 0: // Safe Spending Today
      return (
        <div className="rounded-lg border border-line2 bg-card p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Safe spending today</p>
          <p className="mt-2 font-mono text-[36px] font-medium leading-none tracking-[-0.02em]">
            {sym}<AnimatedNumber value={8470} locale={brand.currency.locale} />
          </p>
          <div className="mt-4 h-1.5 w-full bg-line">
            <div className="h-full bg-paper" style={{ width: '62%' }} />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9px] text-faint">
            <span>Spent 38%</span><span>Remaining 62%</span>
          </div>
        </div>
      );
    case 1: // Income Tracking
      return (
        <div className="rounded-lg border border-line2 bg-card p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Recent income</p>
          <div className="mt-3 space-y-2.5">
            {[
              { s: 'Acme Studio — Invoice #204', a: `${sym}42,000`, d: '2d' },
              { s: 'Freelance project', a: `${sym}18,500`, d: '5d' },
              { s: 'Royalty payment', a: `${sym}6,200`, d: '8d' },
            ].map((r) => (
              <div key={r.s} className="flex items-center justify-between border-b border-line pb-2.5 last:border-0">
                <div>
                  <p className="text-[12px] text-paper">{r.s}</p>
                  <p className="font-mono text-[9px] text-faint">{r.d} ago</p>
                </div>
                <span className="font-mono text-[12px] text-paper">{r.a}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case 2: // Expense Tracking
      return (
        <div className="rounded-lg border border-line2 bg-card p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Expenses by type</p>
          <div className="mt-4 space-y-3">
            {[
              { l: 'Rent', v: 85, a: `${sym}22,000`, c: 'committed' },
              { l: 'Software', v: 35, a: `${sym}4,500`, c: 'committed' },
              { l: 'Food', v: 55, a: `${sym}8,200`, c: 'flexible' },
            ].map((r) => (
              <div key={r.l}>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-paper">{r.l}</span>
                  <span className="font-mono text-[10px] text-muted">{r.a} · {r.c}</span>
                </div>
                <div className="mt-1.5 h-1 w-full bg-line">
                  <div className="h-full bg-paper" style={{ width: `${r.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 3: // Goal Planning
      return (
        <div className="rounded-lg border border-line2 bg-card p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Goals</p>
          <div className="mt-4 space-y-4">
            {[
              { n: 'Emergency fund', p: 64, t: `${sym}50,000` },
              { n: 'Tax reserve', p: 42, t: `${sym}80,000` },
              { n: 'New laptop', p: 85, t: `${sym}1,20,000` },
            ].map((g) => (
              <div key={g.n}>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-paper">{g.n}</span>
                  <span className="font-mono text-[10px] text-muted">{g.p}% · {g.t}</span>
                </div>
                <div className="mt-1.5 h-1 w-full bg-line">
                  <div className="h-full bg-paper" style={{ width: `${g.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 4: // Emergency Fund Planning
      return (
        <div className="rounded-lg border border-line2 bg-card p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Emergency buffer</p>
          <div className="mt-4 flex items-end gap-4">
            <p className="font-mono text-[36px] font-medium leading-none">3.2<span className="text-[16px] text-muted"> mo</span></p>
            <p className="mb-1 font-mono text-[10px] text-muted">target 6 mo</p>
          </div>
          <div className="mt-4 flex h-2 w-full gap-0.5">
            {[0,1,2,3].map((i) => (
              <div key={i} className="flex-1 bg-paper" />
            ))}
            {[4,5].map((i) => (
              <div key={i} className="flex-1 bg-line" />
            ))}
          </div>
          <p className="mt-2 font-mono text-[9px] text-faint">4 of 6 months funded</p>
        </div>
      );
    case 5: // Smart Insights
      return (
        <div className="rounded-lg border border-line2 bg-card p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Insights</p>
          <div className="mt-3 space-y-2.5">
            {[
              { t: 'Income trending up 12% vs last quarter', d: 'signal' },
              { t: 'Acme Studio pays 5 days late on average', d: 'pattern' },
              { t: 'August is historically your lowest month', d: 'seasonal' },
            ].map((r) => (
              <div key={r.t} className="flex items-start gap-2.5 border-b border-line pb-2.5 last:border-0">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-paper" />
                <div>
                  <p className="text-[12px] leading-snug text-paper">{r.t}</p>
                  <p className="font-mono text-[9px] text-faint">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 6: // Financial Health Score
      return (
        <div className="rounded-lg border border-line2 bg-card p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Financial health score</p>
          <div className="mt-4 flex items-center gap-5">
            <div className="relative flex h-20 w-20 items-center justify-center">
              <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="#1a1a1a" strokeWidth="3" />
                <circle cx="40" cy="40" r="34" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 34 * 0.74} ${2 * Math.PI * 34}`} />
              </svg>
              <span className="absolute font-mono text-[22px] font-medium"><AnimatedNumber value={74} /></span>
            </div>
            <div className="space-y-1.5">
              {[
                { l: 'Buffer', v: '3.2 mo' },
                { l: 'Runway', v: '18 d' },
                { l: 'Stability', v: '72%' },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between gap-6 font-mono text-[10px]">
                  <span className="text-muted">{r.l}</span><span className="text-paper">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
