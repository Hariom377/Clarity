import type { ReactNode } from 'react';

export function SectionLabel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted ${className}`}>
      <span className="h-px w-5 bg-line2" />
      {children}
    </span>
  );
}
