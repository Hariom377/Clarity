import type { ReactNode } from 'react';

export function TechDiagram({
  steps,
}: {
  steps: { tag: string; label: string }[];
}) {
  return (
    <div className="flex flex-wrap items-stretch gap-0">
      {steps.map((s, i) => (
        <div key={i} className="flex items-stretch">
          <div className="border border-line2 bg-card px-4 py-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-faint">{s.tag}</p>
            <p className="mt-1 text-[13px] text-paper">{s.label}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center px-3">
              <span className="font-mono text-[14px] text-faint">→</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line py-2.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{label}</span>
      <span className="font-mono text-[12px] text-paper">{value}</span>
    </div>
  );
}
