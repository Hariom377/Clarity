import { AnimatedNumber } from './AnimatedNumber';

const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const income = [62, 38, 70, 45, 88, 30, 55, 72, 40, 60, 48, 80];
const expense = [40, 40, 42, 38, 45, 40, 40, 42, 38, 40, 40, 42];

export default function FullDashboard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-line2 bg-card">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="font-mono text-[10px] tracking-[0.15em] text-muted">CLARITY OS — DASHBOARD</span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-paper" />
          SYNCED
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* left: safe spending + chart */}
        <div className="lg:col-span-7 lg:border-r lg:border-line">
          <div className="border-b border-line px-6 py-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Safe spending today</p>
            <div className="mt-3 flex items-end gap-4">
              <p className="font-mono text-[64px] font-medium leading-none tracking-[-0.03em] sm:text-[80px]">
                <AnimatedNumber value={247} prefix="$" />
                <span className="text-faint">.00</span>
              </p>
              <div className="mb-2 flex items-center gap-1.5 font-mono text-[11px] text-paper">
                <span>↑ $12</span>
                <span className="text-muted">vs yesterday</span>
              </div>
            </div>
            <p className="mt-3 max-w-md text-[13px] leading-relaxed text-muted">
              Calculated from your 90-day income variance, committed expenses, emergency buffer and active goals.
            </p>
          </div>

          {/* chart */}
          <div className="px-6 py-6">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Income vs expenses · 12mo</p>
              <div className="flex items-center gap-3 font-mono text-[9px] text-muted">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 bg-paper" /> income</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 border border-line2" /> expenses</span>
              </div>
            </div>
            <div className="mt-6 flex h-40 items-end gap-1.5">
              {months.map((m, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex h-full w-full items-end justify-center gap-1">
                    <div className="w-1/2 bg-paper" style={{ height: `${income[i]}%` }} />
                    <div className="w-1/2 border border-line2 bg-ink" style={{ height: `${expense[i]}%` }} />
                  </div>
                  <span className="font-mono text-[8px] text-faint">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right: metrics */}
        <div className="grid grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {[
            { label: 'Emergency buffer', value: 3.2, suffix: 'mo', decimals: 1, note: 'Target: 3 months' },
            { label: 'Runway', value: 18, suffix: ' days', decimals: 0, note: 'At current burn' },
            { label: 'Goal progress', value: 46, suffix: '%', decimals: 0, note: '2 active goals' },
            { label: 'Income stability', value: 72, suffix: '%', decimals: 0, note: '90-day index' },
          ].map((m, i) => (
            <div key={i} className={`px-6 py-6 ${i < 2 ? 'border-b border-line' : ''} ${i % 2 === 0 ? 'lg:border-r lg:border-line' : ''}`}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{m.label}</p>
              <p className="mt-2 font-mono text-[32px] font-medium leading-none tracking-[-0.02em]">
                <AnimatedNumber value={m.value} decimals={m.decimals} suffix={m.suffix} />
              </p>
              <p className="mt-2 font-mono text-[10px] text-faint">{m.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* footer strip */}
      <div className="flex items-center justify-between border-t border-line px-5 py-3">
        <span className="font-mono text-[10px] text-faint">Last sync · 14:02 UTC</span>
        <span className="font-mono text-[10px] text-faint">v0.8.1 · clarity-engine</span>
      </div>
    </div>
  );
}