import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { openContactModal } from '@/lib/contact';
import MagneticButton from './MagneticButton';

// Advanced Text Reveal Component
const RevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  // Split by words first to keep spacing correct
  const words = text.split(" ");

  return (
    <span className={`inline-block whitespace-pre-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap overflow-hidden align-top">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delay + (i * 0.05),
              ease: [0.25, 1, 0.5, 1]
            }}
            className="inline-block"
          >
            {word}
            {i !== words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Character Reveal for Headline
const CharReveal = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1], // Custom easing
            delay: delay + (i * 0.03)
          }}
          className="inline-block origin-bottom"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroPremium() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Mouse move effect for background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const bgX = useTransform(mouseX, [0, 1], ["-5%", "5%"]);
  const bgY = useTransform(mouseY, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-space-950 flex items-center justify-center perspective-1000">
      {/* Animated Interactive Background */}
      <motion.div
        style={{ x: bgX, y: bgY, scale: 1.1 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-neon-blue/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-neon-purple/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-cyan-500/5 rounded-full blur-[80px] mix-blend-screen" />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] z-0 pointer-events-none mask-gradient-b" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div style={{ y: y2 }} className="mb-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-slate-300 text-xs font-bold tracking-[0.2em] uppercase">
              Est. 2035 — Dimensions Ahead
            </span>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: y1 }} className="mb-8">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter leading-[0.9]">
            <CharReveal text="Digital experiences" delay={0.2} />
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
              <CharReveal text="built for the next decade." delay={0.8} />
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-10"
        >
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            We design interfaces with depth, motion and clarity. <br className="hidden md:block" />
            Every detail supports a single idea: <span className="text-white">your brand should feel ahead of its time.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <MagneticButton>
            <button
              onClick={() => openContactModal('hero-primary')}
              className="px-10 py-5 bg-white text-space-950 rounded-full font-bold text-lg hover:bg-neon-blue hover:text-white transition-all shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-10px_rgba(96,165,250,0.5)] active:scale-95"
            >
              Start Your Project
            </button>
          </MagneticButton>

          <a href="#portfolio" className="group px-8 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center gap-3">
            Explore Our Work
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 pt-8 border-t border-white/5 max-w-lg mx-auto"
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">
            Trusted by founders, product teams and fast-moving brands.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </div>
  );
}
