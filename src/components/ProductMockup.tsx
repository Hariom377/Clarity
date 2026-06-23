import { AnimatedNumber } from './AnimatedNumber';
import { brand } from '../lib/brand';
import { useI18n } from '../lib/i18n';

export default function ProductMockup() {
  const { t } = useI18n();
  const sym = brand.currency.symbol;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-line2 bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_80px_-20px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-line2" />
          <span className="h-2 w-2 rounded-full bg-line2" />
          <span className="h-2 w-2 rounded-full bg-line2" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.15em] text-muted">{brand.name.toUpperCase()} {brand.suffix} — {t.hero.mockup.title}</span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-paper" />
          {t.hero.mockup.live}
        </span>
      </div>

      <div className="border-b border-line px-5 py-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{t.hero.mockup.safeSpend}</p>
        <p className="mt-2 font-mono text-[42px] font-medium leading-none tracking-[-0.02em] text-paper">
          {sym}<AnimatedNumber value={8470} locale={brand.currency.locale} />
          <span className="text-faint">.00</span>
        </p>
        <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-paper" />
          {t.hero.mockup.updated}
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {[
          { label: t.hero.mockup.balance, value: `${sym}84,200` },
          { label: t.hero.mockup.buffer, value: '3.2 mo' },
          { label: t.hero.mockup.runway, value: '18 days' },
        ].map((m) => (
          <div key={m.label} className="px-4 py-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">{m.label}</p>
            <p className="mt-1.5 font-mono text-[16px] font-medium tracking-[-0.01em]">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="px-5 py-5">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{t.hero.mockup.goals}</p>
          <p className="font-mono text-[10px] text-faint">2 {t.hero.mockup.active}</p>
        </div>
        <div className="mt-4 space-y-4">
          {[
            { name: 'Emergency fund', pct: 64, target: `${sym}50,000` },
            { name: 'New equipment', pct: 28, target: `${sym}32,000` },
          ].map((g) => (
            <div key={g.name}>
              <div className="flex items-center justify-between text-[12px]">
                <span className="text-paper">{g.name}</span>
                <span className="font-mono text-[11px] text-muted">{g.pct}% · {g.target}</span>
              </div>
              <div className="mt-2 h-1 w-full bg-line">
                <div className="h-full bg-paper" style={{ width: `${g.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
