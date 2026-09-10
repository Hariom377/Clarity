import { motion } from 'framer-motion';
import { Shield, Sparkles } from 'lucide-react';

export default function ProductMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-[380px] items-center justify-center select-none py-4">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-white/[0.035] via-emerald-500/[0.025] to-transparent blur-3xl" />

      {/* Floating Phone */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-full max-w-[230px] sm:max-w-[250px] lg:max-w-[265px]"
      >
        {/* Phone frame + screenshot — new iRREGO Today screen */}
        <div className="relative overflow-hidden rounded-[44px] shadow-[0_28px_60px_-12px_rgba(0,0,0,0.96),0_0_32px_rgba(255,255,255,0.03)] transition-transform duration-300 hover:scale-[1.01]">
          <img
            src="/app-mockup.png"
            alt="iRREGO app — Today dashboard showing ₹27,000 total balance and upcoming obligations"
            className="block h-auto w-full object-cover"
            loading="eager"
            draggable={false}
          />
        </div>

        {/* Floating Chip 1: Safe Spend Today */}
        <motion.div
          animate={{ y: [3, -3, 3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="hidden sm:flex absolute -right-8 top-14 z-20 items-center gap-2 rounded-xl border border-line2 bg-card/90 px-3 py-2 shadow-2xl backdrop-blur-md"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <div className="text-left">
            <p className="font-mono text-[8px] uppercase tracking-wider text-muted">Safe Spend Today</p>
            <p className="font-mono text-[12px] font-semibold text-paper">
              ₹900 <span className="text-[9px] font-normal text-emerald-400">100% avail</span>
            </p>
          </div>
        </motion.div>

        {/* Floating Chip 2: Total Balance */}
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="hidden sm:flex absolute -left-8 bottom-20 z-20 items-center gap-2 rounded-xl border border-line2 bg-card/90 px-3 py-2 shadow-2xl backdrop-blur-md"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-paper">
            <Shield className="h-3.5 w-3.5" />
          </span>
          <div className="text-left">
            <p className="font-mono text-[8px] uppercase tracking-wider text-muted">Total Balance</p>
            <p className="font-mono text-[12px] font-semibold text-paper">
              ₹27,000 <span className="text-[9px] font-normal text-muted">Protected</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
