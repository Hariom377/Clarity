import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { TechDiagram, SpecRow } from '../components/TechDiagram';

const engines = [
  {
    id: '01',
    tag: 'PROCESSING LOOP',
    title: 'The daily cycle',
    desc: 'Every 24 hours the system runs a complete loop: ingest new transactions, normalize income, separate committed from flexible expenses, recompute the safe-spending figure, and update every goal and buffer. The loop is idempotent — running it twice changes nothing.',
    flow: [{ tag: 'INGEST', label: 'Transactions' }, { tag: 'NORMALIZE', label: 'Income signal' }, { tag: 'COMPUTE', label: 'Safe spend' }, { tag: 'EMIT', label: 'Daily brief' }],
    specs: [{ label: 'Cadence', value: 'Daily · 24h' }, { label: 'Latency', value: '< 2s after sync' }, { label: 'Idempotent', value: 'Yes' }],
  },
  {
    id: '02',
    tag: 'SIGNAL ENGINE',
    title: 'Income normalization',
    desc: 'Irregular income is not averaged into a misleading monthly number. The signal engine builds a rolling distribution of your actual deposits, weighting recent history, and produces a confidence-weighted expected-income figure that respects volatility instead of hiding it.',
    flow: [{ tag: 'INPUT', label: 'Raw deposits' }, { tag: 'CLASSIFY', label: 'Source / type' }, { tag: 'MODEL', label: 'Distribution' }, { tag: 'OUTPUT', label: 'Income signal' }],
    specs: [{ label: 'Window', value: '90 days rolling' }, { label: 'Method', value: 'Weighted distribution' }, { label: 'Output', value: 'Confidence-weighted' }],
  },
  {
    id: '03',
    tag: 'CLARITY ENGINE',
    title: 'Safe spending computation',
    desc: 'The core. The clarity engine combines the income signal, committed expenses, the emergency buffer target and active goal obligations into a single, spendable number for today. It is not a budget. It is the mathematically safe amount you can spend without compromising the future.',
    flow: [{ tag: 'SIGNAL', label: 'Income' }, { tag: 'COMMITTED', label: 'Expenses' }, { tag: 'BUFFER', label: 'Health' }, { tag: 'GOALS', label: 'Obligations' }],
    specs: [{ label: 'Output', value: 'Safe spend · USD/day' }, { label: 'Inputs', value: '4 weighted factors' }, { label: 'Recalc', value: 'Per transaction' }],
  },
  {
    id: '04',
    tag: 'SPENDING ENGINE',
    title: 'Real-time guidance',
    desc: 'As you spend, the spending engine tracks committed outflows against the safe-spending figure and adjusts the remaining daily allowance in real time. A heavy day reduces tomorrow. A light day restores it. The system always tells you where you stand, not where you planned to be.',
    flow: [{ tag: 'TRACK', label: 'Outflows' }, { tag: 'COMPARE', label: 'vs allowance' }, { tag: 'ADJUST', label: 'Remaining' }, { tag: 'ADVISE', label: 'Guidance' }],
    specs: [{ label: 'Update', value: 'Real-time' }, { label: 'Horizon', value: 'Today → runway' }, { label: 'Mode', value: 'Adaptive' }],
  },
];

export default function Technology() {
  return (
    <div>
      <section className="px-5 pt-32 pb-16 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <Reveal><SectionLabel>Technology</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-[760px] text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">
              The system behind the clarity.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[560px] text-[17px] leading-relaxed text-muted">
              Four engines, one daily loop. Each is documented below as it runs in production — inputs, process, outputs, and the specs that govern them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1280px]">
          {engines.map((e, i) => (
            <div key={e.id} className="border-b border-line px-5 py-16 sm:px-8 sm:py-20">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <Reveal>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[12px] text-faint">{e.id}</span>
                      <SectionLabel>{e.tag}</SectionLabel>
                    </div>
                    <h2 className="mt-5 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">{e.title}</h2>
                  </Reveal>
                </div>
                <div className="lg:col-span-8">
                  <Reveal delay={0.08}>
                    <p className="max-w-[560px] text-[16px] leading-relaxed text-muted">{e.desc}</p>
                    <div className="mt-8"><TechDiagram steps={e.flow} /></div>
                    <div className="mt-8 max-w-[420px]">
                      {e.specs.map((s) => <SpecRow key={s.label} label={s.label} value={s.value} />)}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}