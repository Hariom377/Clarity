import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedNumber } from './AnimatedNumber';
import { brand } from '../lib/brand';
import { useI18n } from '../lib/i18n';

export default function ProductMockup() {
  const { t } = useI18n();
  const sym = brand.currency.symbol;
  
  // Sequence states to match your natural application flow
  const [phase, setPhase] = useState<"idle" | "cursor-entering" | "clicking" | "revealed">("idle");

  useEffect(() => {
    // Stage 1: Wait briefly for layout paint, then cursor tracks down
    const startTimer = setTimeout(() => {
      setPhase("cursor-entering");
    }, 600);

    // Stage 2: Cursor hits the precise center target of "I ALREADY HAVE AN ACCOUNT"
    const clickTimer = setTimeout(() => {
      setPhase("clicking");
    }, 2200);

    // Stage 3: Complete click micro-interaction and unlock the real-time brief dashboard
    const revealTimer = setTimeout(() => {
      setPhase("revealed");
    }, 2450); 

    return () => {
      clearTimeout(startTimer);
      clearTimeout(clickTimer);
      clearTimeout(revealTimer);
    };
  }, []);

  // Structural coordinate map to explicitly strike the secondary login action canvas link
  const cursorVariants: Variants = {
    idle: { x: 340, y: 320, opacity: 0 },
    entering: {
      x: 180,
      y: 262, // Re-indexed to hover precisely over the lower "I Already Have An Account" container boundary
      opacity: 1,
      transition: { duration: 1.6, ease: "easeInOut" }
    },
    clicking: {
      x: 180,
      y: 262,
      opacity: 1,
      scale: 0.8,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="relative w-full overflow-hidden select-none">
      
      {/* ===== PHASE 1 & 2: PITCH BLACK MOBILE APP START LAYOUT ===== */}
      {phase !== "revealed" && (
        <div className="flex h-[420px] w-full flex-col items-center justify-between rounded-xl border border-line2 bg-black shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] px-6 py-12">
          
          {/* Brand/Product Identity Header Frame */}
          <div className="flex flex-col items-center text-center mt-4">
            {/* Minimal App Icon Container */}
            <div className="h-12 w-12 rounded-xl bg-white border border-neutral-800 flex items-center justify-center shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                <path d="M3 11h18"/>
                <path d="M16 14v2"/>
              </svg>
            </div>
            <span className="mt-5 font-mono text-[9px] uppercase tracking-[0.25em] text-muted">Welcome to</span>
            <h4 className="mt-1 font-sans text-3xl font-semibold tracking-tight text-paper">{brand.name}</h4>
            <p className="mt-2 font-sans text-[11px] text-muted">Your personal finance companion</p>
          </div>

          {/* Core Interactive Action Group Layout */}
          <div className="w-full max-w-[280px] space-y-2.5 mb-2">
            
            {/* Primary Action Button Link */}
            <div className="w-full text-center rounded-full bg-white py-3 text-[11px] font-semibold text-black tracking-wide shadow-sm flex items-center justify-center gap-1">
              GET STARTED
              <span className="text-[10px]">→</span>
            </div>
            
            {/* Secondary Action Loop Element (Target of Simulated Click) */}
            <motion.div
              animate={
                phase === "clicking" 
                  ? { scale: 0.97, backgroundColor: "rgba(255,255,255,0.04)" } 
                  : { scale: 1 }
              }
              className="w-full text-center rounded-full border border-neutral-800 bg-transparent py-3 text-[10px] font-bold text-paper tracking-wider"
            >
              I ALREADY HAVE AN ACCOUNT
            </motion.div>
          </div>

          {/* Regional Localization Footer Baseline */}
          <div className="font-mono text-[8px] tracking-wider text-faint flex gap-2">
            <span>Secure</span>·<span>Private</span>·<span>Made for India</span>
          </div>
        </div>
      )}

      {/* ===== PHASE 3: LIVE OPERATIONAL FINANCIAL TERMINAL (Dashboard Transition) ===== */}
      {phase === "revealed" && (
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full overflow-hidden rounded-xl border border-line2 bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_80px_-20px_rgba(0,0,0,0.8)]"
        >
          {/* Header Window Framework */}
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

          {/* Operational Metrics Block */}
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

          {/* Tri-Column Layout Structure */}
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

          {/* Allocation Milestone Metrics */}
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

      {/* ===== TRANSLATION HARDWARE POINTER CROSS-OVER ===== */}
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
