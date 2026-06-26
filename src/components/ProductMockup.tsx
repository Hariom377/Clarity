import { motion, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from './AnimatedNumber';
import { brand } from '../lib/brand';
import { useI18n } from '../lib/i18n';

export default function ProductMockup() {
  const { t } = useI18n();
  const sym = brand.currency.symbol;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(containerRef, { once: true, amount: 0.2 });
  
  const [phase, setPhase] = useState<"idle" | "cursor-entering" | "clicking" | "revealed">("idle");

  useEffect(() => {
    if (isVisible && phase === "idle") {
      setPhase("cursor-entering");
    }
  }, [isVisible, phase]);

  // Explicit type assignment prevents the Cloudflare compiler from failing on string properties
  const cursorVariants: Variants = {
    idle: { x: 320, y: 220, opacity: 0 },
    entering: {
      x: [320, 190],
      y: [220, 110],
      opacity: [0, 1, 1],
      transition: { duration: 1.4, ease: "easeInOut" }
    },
    clicking: {
      x: 190,
      y: 110,
      opacity: 1,
      scale: 0.85,
      transition: { duration: 0.12 }
    }
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden select-none">
      
      {/* ===== PHASE 1 & 2: LOGIN WORKSPACE TERMINAL ===== */}
      {phase !== "revealed" && (
        <div className="flex h-[420px] w-full flex-col items-center justify-center rounded-xl border border-line2 bg-card shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] p-6">
          <div className="w-full max-w-[260px] space-y-4 text-center">
            <div className="mx-auto h-8 w-8 rounded-md border border-line2 bg-line flex items-center justify-center font-mono text-xs text-paper">i</div>
            <h4 className="font-sans text-sm font-medium tracking-tight text-paper">Access {brand.name} Workspace</h4>
            
            <motion.button
              animate={
                phase === "cursor-entering" 
                  ? { scale: 1 } 
                  : phase === "clicking" 
                    ? { scale: 0.96, filter: "brightness(0.85)" } 
                    : {}
              }
              onAnimationComplete={() => {
                if (phase === "cursor-entering") {
                  setPhase("clicking");
                  setTimeout(() => setPhase("revealed"), 180);
                }
              }}
              className="w-full rounded-md bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors"
            >
              Log In securely
            </motion.button>
          </div>
        </div>
      )}

      {/* ===== PHASE 3: AUTHENTICATED REAL-TIME DASHBOARD ===== */}
      {phase === "revealed" && (
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full overflow-hidden rounded-xl border border-line2 bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_80px_-20px_rgba(0,0,0,0.8)]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-line2" />
              <span className="h-2 w-2 rounded-full bg-line2" />
              <span className="h-2 w-2 rounded-full bg-line2" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.15em] text-muted">{brand.name.toUpperCase()} {brand.suffix} — {t.hero.mockup.title}</span>
            <span className="flex items-center gap-1.5 font-mono text-[9px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-paper animate-pulse" />
              {t.hero.mockup.live}
            </span>
          </div>

          {/* Safe Spend Module */}
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

          {/* Metric Grid Display */}
          <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
            {[
              { label: t.hero.mockup.balance, value: `${sym}84,200` },
              { label: t.hero.mockup.buffer, value: '3.2 mo' },
              { label: t.hero.mockup.runway, value: '18 days' },
            ].map((m) => (
              <div key={m.label} className="px-4 py-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">{m.label}</p>
                <p className="mt-1.5 font-mono text-[16px] font-medium tracking-[-0.01em] text-paper">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Target Milestone Progression Rows */}
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
                  <div className="mt-2 h-1 w-full bg-line overflow-hidden rounded-full">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${g.pct}%` }}
                      transition={{ type: "spring", stiffness: 40, damping: 14, delay: 0.25 }}
                      className="h-full bg-paper" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* ===== VIRTUALIZED DESKTOP MOUSE CURSOR ===== */}
      {phase !== "revealed" && phase !== "idle" && (
        <motion.div
          variants={cursorVariants}
          initial="idle"
          animate={phase === "cursor-entering" ? "entering" : "clicking"}
          className="absolute pointer-events-none z-50 top-0 left-0"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="drop-shadow-2xl">
            <path d="M0 0V16L4.75 11.25L9 20L12.5 18.25L8.25 9.75L14 9L0 0Z" fill="white" stroke="black" strokeWidth="2.5"/>
          </svg>
        </motion.div>
      )}

    </div>
  );
}
