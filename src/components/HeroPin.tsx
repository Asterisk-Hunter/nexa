import { useRef, Suspense, lazy } from 'react';
const Antigravity = lazy(() => import('./Antigravity'));
import SplitText from './SplitText';
import TextScramble from './TextScramble';
import MagneticButton from './MagneticButton';
import { openContactModal } from '@/lib/contact';

export default function HeroPin() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Removed GSAP ScrollTrigger pinning to fix jitter. 
  // Using native CSS sticky behavior or just standard relative flow is smoother.

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-space-950">
      {/* Background Layer - 3D Scene */}
      {/* Background Layer - 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-space-950" />}>
          <div className="w-full h-full">
            <Antigravity
              count={150} // Optimized for performance
              magnetRadius={15}
              ringRadius={12}
              color="#60a5fa" // Matching site theme (neon blue)
              particleSize={1.5}
              autoAnimate={false}
            />
          </div>
        </Suspense>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <div className="mb-4">
          {/* Pointer events allowed on text for potential interactions */}
          <div className="pointer-events-auto">
            <div className="text-6xl md:text-9xl font-bold tracking-tighter gradient-text font-spacegrotesk">
              <TextScramble text="NEXA" />
            </div>
          </div>
        </div>

        <div className="mb-6 pointer-events-auto">
          <SplitText mode="words" delay={0.3} className="text-lg md:text-xl text-slate-300 tracking-widest uppercase">
            Studio 2035 — Spatial Digital Systems
          </SplitText>
        </div>

        <div className="flex gap-6 mt-8 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards] pointer-events-auto">
          <MagneticButton>
            <button
              onClick={() => openContactModal('hero')}
              data-magnet
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full font-bold shadow-vol-sm hover:shadow-vol-lg hover:shadow-neon-blue/40 transition-all"
            >
              Start Project
            </button>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#portfolio"
              data-magnet
              className="inline-block px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View Work
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce z-20">
        Scroll to Explore
      </div>
    </div>
  );
}
