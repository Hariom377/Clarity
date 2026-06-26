import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedNumber } from './AnimatedNumber';
import { brand } from '../lib/brand';
import { useI18n } from '../lib/i18n';

export default function ProductMockup() {
  const { t } = useI18n();
  const sym = brand.currency.symbol;
  
  // Controlled sequential phases for deliberate timing
  const [phase, setPhase] = useState<"idle" | "cursor-entering" | "clicking" | "revealed">("idle");

  useEffect(() => {
    // Phase 1: Wait for parent reveal fade-in to settle completely
    const startTimer = setTimeout(() => {
      setPhase("cursor-entering");
    }, 800);

    // Phase 2: Wait for cursor to finish its crawl path, then press click down
    const clickTimer = setTimeout(() => {
      setPhase("clicking");
    }, 2400); // 800ms initial delay + 1600ms transition time

    // Phase 3: Hold the clicked state briefly, then paint dashboard screen
    const revealTimer = setTimeout(() => {
      setPhase("revealed");
    }, 2650); 

    return () => {
      clearTimeout(startTimer);
      clearTimeout(clickTimer);
      clearTimeout(revealTimer);
    };
  }, []);

  // Explicit type assignment ensures error-free Cloudflare compiling checks
  const cursorVariants: Variants = {
    idle: { x: 380, y: 260, opacity: 0 },
    entering: {
      x: 180,
      y: 115,
      opacity: 1,
      transition: { duration: 1.6, ease: "easeInOut" }
    },
    clicking: {
      x: 180,
      y: 115,
      opacity: 1,
      scale: 0.8,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="relative w-full overflow-hidden select-none">
      
      {/* ===== WORKSPACE LOCK SCREEN TERMINAL ===== */}
      {phase !== "revealed" && (
        <div className="flex h-[420px] w-full flex-col items-center justify-center rounded-xl border border-line2 bg-card shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] p-6">
          <div className="w-full max-w-[260px] space-y-4 text-center">
            <div className="mx-auto h-8 w-8 rounded-md border border-line2 bg-line flex items-center justify-center font-mono text-xs text-paper">i</div>
            <h4 className="font-sans text-sm font-medium tracking-tight text-paper">Access {brand.name} Workspace</h4>
            
            <motion.button
              animate={
                phase === "clicking" 
                  ? { scale: 0.94, filter: "brightness(0.75)" } 
                  : { scale: 1 }
              }
              className="w-full rounded-md bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors"
            >
              Log In securely
            </motion.button>
          </div>
        </div>
      )}

      {/* ===== THE ACTIVE DASHBOARD CARD ===== */}
      {phase === "revealed" && (
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full overflow-hidden rounded-xl border border-line2 bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_80px_-20px_rgba(0,0,0,0.8)]"
        >
          {/* Header Metric Bar */}
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

          {/* Core Safe Spend Display */}
          <div className="border-b border-line px-5 py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{t.hero.mockup.safeSpend}</p>
            <div className="mt-2 font-mono text-[42px] font-medium leading-none tracking-[-0.02em] text-paper">
              {sym}<AnimatedNumber value={8470} locale={brand.currency.locale} />
              <span className="text-faint">.00</span>
            </div>
            <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-paper" />
              {t.hero.mockup.updated}
            </div>
          </div>

          {/* Secondary Metric Items */}
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

          {/* Goal Milestones Progression */}
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
                      transition={{ type: "spring", stiffness: 45, damping: 15, delay: 0.2 }}
                      className="h-full bg-paper" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* ===== SIMULATED POINTER ASSET CONTAINER ===== */}
      {phase !== "revealed" && (
        <motion.div
          variants={cursorVariants}
          initial="idle"
          animate={phase === "idle" ? "idle" : "entering"}
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
