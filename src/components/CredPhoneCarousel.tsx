import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenItem {
  id: number;
  src: string;
  alt: string;
}

const SCREENS: ScreenItem[] = [
  {
    id: 0,
    src: '/screens/screen-1.png',
    alt: 'iRREGO Today Dashboard — Safe spend today and upcoming obligations',
  },
  {
    id: 1,
    src: '/screens/screen-2.png',
    alt: 'iRREGO Financial Goals — Emergency fund, savings goal, and milestones',
  },
  {
    id: 2,
    src: '/screens/screen-3.png',
    alt: 'iRREGO Analytics — Daily burn rate, 24-day runway, and expense donut',
  },
  {
    id: 3,
    src: '/screens/screen-4.png',
    alt: 'iRREGO New Transaction — Fast expense and income categorization',
  },
  {
    id: 4,
    src: '/screens/screen-5.png',
    alt: 'iRREGO Transactions Feed — Real-time deposits, bills, and history',
  },
];

// ─── Dimensions ───────────────────────────────────────────────────────────────
// Screen PNGs: 315×662  →  AR = 2.1016
const PHONE_W    = 175;
const SCREEN_AR  = 662 / 315;
const PHONE_H    = Math.round(PHONE_W * SCREEN_AR);   // 369 px

// Phone body thickness in CSS px  (iPhone ~8mm at this scale ≈ 12 px)
// This creates the 3D edge depth — the key to CRED-style 3D look
const THICKNESS  = 12;

// Cylinder translateZ — how far each card sits from center axis
const RADIUS     = 280;

// Stage must be tall enough for the full phone card + padding
const STAGE_H    = PHONE_H + 64;   // 433 px

// Pacific Blue iPhone frame colour (matches the back panel photo)
const EDGE_COLOR_TOP    = '#1a3545';
const EDGE_COLOR_MID    = '#0f2535';
const EDGE_COLOR_BOT    = '#1a3545';

export default function CredPhoneCarousel() {
  const stageRef        = useRef<HTMLDivElement>(null);
  const wheelRef        = useRef<HTMLDivElement>(null);
  const isDraggingRef   = useRef(false);
  const isHoveredRef    = useRef(false);
  const startXRef       = useRef(0);
  const currentAngleRef = useRef(0);
  const targetAngleRef  = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const numScreens = SCREENS.length;
  const angleStep  = 360 / numScreens; // 72°

  // ─── RAF loop — zero React jitter ────────────────────────────────────────
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isDraggingRef.current && !isHoveredRef.current) {
        targetAngleRef.current += 16 * dt;
      }

      const diff = targetAngleRef.current - currentAngleRef.current;
      currentAngleRef.current += diff * 0.10;

      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotateY(${-currentAngleRef.current}deg)`;
      }

      const norm    = ((currentAngleRef.current % 360) + 360) % 360;
      const closest = Math.round(norm / angleStep) % numScreens;
      setActiveIndex((prev) => (prev !== closest ? closest : prev));

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [numScreens, angleStep]);

  // ─── Navigation ──────────────────────────────────────────────────────────
  const snapTo = (idx: number) => {
    const norm = ((currentAngleRef.current % 360) + 360) % 360;
    let diff = idx * angleStep - norm;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    targetAngleRef.current = currentAngleRef.current + diff;
  };
  const next = () => { targetAngleRef.current += angleStep; };
  const prev = () => { targetAngleRef.current -= angleStep; };

  // ─── Pointer handlers ─────────────────────────────────────────────────────
  const onDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    startXRef.current = e.clientX;
    targetAngleRef.current  -= dx * 0.5;
    currentAngleRef.current -= dx * 0.5;
  };
  const onUp = () => { isDraggingRef.current = false; };

  // ─── Shared edge gradient (Pacific Blue titanium frame) ──────────────────
  const edgeGradientV = `linear-gradient(to bottom, ${EDGE_COLOR_TOP}, ${EDGE_COLOR_MID}, ${EDGE_COLOR_BOT})`;
  const edgeGradientH = `linear-gradient(to right, ${EDGE_COLOR_TOP}, ${EDGE_COLOR_MID}, ${EDGE_COLOR_BOT})`;

  return (
    <div className="relative w-full select-none py-4">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[240px] w-[460px] rounded-full bg-white/[0.018] blur-[100px]" />
        <div className="h-[160px] w-[280px] rounded-full bg-sky-600/[0.012] blur-[80px]" />
      </div>

      {/* ── 3D Stage ── */}
      <div
        ref={stageRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; isDraggingRef.current = false; }}
        className="relative mx-auto w-full max-w-[900px] cursor-grab active:cursor-grabbing touch-pan-y overflow-visible"
        style={{ height: `${STAGE_H}px`, perspective: '1200px' }}
      >
        {/* 3D Wheel hub — anchored at exact center */}
        <div
          ref={wheelRef}
          className="will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(0deg)',
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 0,
            height: 0,
          }}
        >
          {SCREENS.map((screen, i) => {
            const angle = i * angleStep;
            return (
              <div
                key={screen.id}
                onClick={() => snapTo(i)}
                style={{
                  // This div is the 3D phone "chassis" — has depth THICKNESS
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                  position: 'absolute',
                  left:   `-${PHONE_W / 2}px`,
                  top:    `-${PHONE_H / 2}px`,
                  width:  `${PHONE_W}px`,
                  height: `${PHONE_H}px`,
                  cursor: 'pointer',
                }}
              >
                {/*
                  ╔══════════════════════════════════════════════╗
                  ║  FRONT FACE — App screenshot                 ║
                  ║  Pushed THICKNESS/2 toward viewer (Z+)       ║
                  ╚══════════════════════════════════════════════╝
                */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    position: 'absolute',
                    inset: 0,
                    transform: `translateZ(${THICKNESS / 2}px)`,
                  }}
                >
                  {/* Drop shadow */}
                  <div style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '42px',
                    background: 'rgba(0,0,0,0.82)',
                    filter: 'blur(14px)',
                  }} />

                  {/* Phone bezel + screenshot — rounded corners, dark bezel */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '34px',
                    background: '#060606',
                    // Thin bright metal rim — creates the CRED-style edge highlight
                    boxShadow: [
                      '0 0 0 1.5px rgba(255,255,255,0.12)',   // thin bright rim
                      '0 0 0 3px rgba(15,37,53,0.9)',          // Pacific Blue frame band
                      '0 0 0 4px rgba(255,255,255,0.06)',      // outer subtle glow
                      '0 20px 48px rgba(0,0,0,0.96)',          // ambient shadow
                    ].join(', '),
                    overflow: 'hidden',
                  }}>
                    {/*
                      Screenshot fills the full card.
                      Card AR = SCREEN_AR → objectFit:fill = no cropping, full screen shown.
                      NO extra notch div here — the PNG already has Dynamic Island built in.
                    */}
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                        pointerEvents: 'none',
                        userSelect: 'none',
                      }}
                      loading="eager"
                      draggable={false}
                    />

                    {/* Glass sheen reflection (subtle) */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, transparent 45%)',
                      pointerEvents: 'none',
                    }} />
                  </div>
                </div>

                {/*
                  ╔══════════════════════════════════════════════╗
                  ║  BACK FACE — Pacific Blue iPhone back panel  ║
                  ║  Pushed THICKNESS/2 away from viewer (Z-)    ║
                  ╚══════════════════════════════════════════════╝
                */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    position: 'absolute',
                    inset: 0,
                    transform: `rotateY(180deg) translateZ(${THICKNESS / 2}px)`,
                  }}
                >
                  {/* Drop shadow for back */}
                  <div style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '42px',
                    background: 'rgba(0,0,0,0.88)',
                    filter: 'blur(14px)',
                  }} />

                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '34px',
                    overflow: 'hidden',
                    boxShadow: [
                      '0 0 0 1.5px rgba(255,255,255,0.10)',
                      '0 0 0 3px rgba(15,37,53,0.9)',
                      '0 20px 48px rgba(0,0,0,0.96)',
                    ].join(', '),
                  }}>
                    <img
                      src="/screens/phone-back.png"
                      alt="iPhone 12 Pro Max Pacific Blue back"
                      style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        pointerEvents: 'none',
                        userSelect: 'none',
                      }}
                      draggable={false}
                    />
                    {/* Subtle gloss on back too */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
                      pointerEvents: 'none',
                    }} />
                  </div>
                </div>

                {/*
                  ╔══════════════════════════════════════════════╗
                  ║  3D EDGE PANELS — give real phone depth      ║
                  ║  This is why CRED phones look 3D, not flat   ║
                  ╚══════════════════════════════════════════════╝

                  Each edge panel is THICKNESS px wide, full height/width.
                  transform-origin is set to the edge that stays fixed.
                  rotateY/X swings the panel 90° to be perpendicular to the front face.
                */}

                {/* RIGHT EDGE */}
                <div style={{
                  position: 'absolute',
                  top: '4%',
                  right: 0,
                  width: `${THICKNESS}px`,
                  height: '92%',
                  transformOrigin: 'right center',
                  transform: 'rotateY(90deg)',
                  background: edgeGradientV,
                  borderRadius: '0 8px 8px 0',
                  // Thin highlight line on inner edge (where screen meets frame)
                  boxShadow: 'inset 2px 0 3px rgba(255,255,255,0.08)',
                }} />

                {/* LEFT EDGE */}
                <div style={{
                  position: 'absolute',
                  top: '4%',
                  left: 0,
                  width: `${THICKNESS}px`,
                  height: '92%',
                  transformOrigin: 'left center',
                  transform: 'rotateY(-90deg)',
                  background: edgeGradientV,
                  borderRadius: '8px 0 0 8px',
                  boxShadow: 'inset -2px 0 3px rgba(255,255,255,0.08)',
                }} />

                {/* TOP EDGE */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '3%',
                  width: '94%',
                  height: `${THICKNESS}px`,
                  transformOrigin: 'center top',
                  transform: 'rotateX(-90deg)',
                  background: edgeGradientH,
                  borderRadius: '8px 8px 0 0',
                  boxShadow: 'inset 0 2px 3px rgba(255,255,255,0.08)',
                }} />

                {/* BOTTOM EDGE */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '3%',
                  width: '94%',
                  height: `${THICKNESS}px`,
                  transformOrigin: 'center bottom',
                  transform: 'rotateX(90deg)',
                  background: edgeGradientH,
                  borderRadius: '0 0 8px 8px',
                  boxShadow: 'inset 0 -2px 3px rgba(255,255,255,0.08)',
                }} />
              </div>
            );
          })}
        </div>

        {/* Nav arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous screen"
          className="absolute left-2 sm:left-5 top-1/2 z-40 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-line2 bg-card/90 text-paper shadow-2xl backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next screen"
          className="absolute right-2 sm:right-5 top-1/2 z-40 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-line2 bg-card/90 text-paper shadow-2xl backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110 active:scale-95"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="relative z-20 mx-auto mt-4 flex items-center justify-center gap-1.5">
        {SCREENS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => snapTo(idx)}
            aria-label={`Go to screen ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'w-6 bg-paper' : 'w-1.5 bg-line2 hover:bg-faint'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
