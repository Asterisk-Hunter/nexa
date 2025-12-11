import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { openContactModal } from '@/lib/contact';
import MagneticButton from './MagneticButton';

export default function HeroPremium() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Subtle parallax effect
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

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

  const bgX = useTransform(mouseX, [0, 1], ["-3%", "3%"]);
  const bgY = useTransform(mouseY, [0, 1], ["-3%", "3%"]);

  // Simple animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-space-950 flex items-center justify-center"
      aria-label="Hero section"
    >
      {/* Animated Interactive Background */}
      <motion.div
        style={{ x: bgX, y: bgY, scale: 1.1 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-neon-blue/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-neon-purple/8 rounded-full blur-[140px]" />
        <div className="absolute top-[30%] left-[50%] w-[40vw] h-[40vw] bg-cyan-500/5 rounded-full blur-[100px]" />
      </motion.div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:72px_72px] z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.div
          style={{ y: y1 }}
          className="mb-8"
        >
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-[1.1]"
          >
            Digital experiences
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">
              that drive results.
            </span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          We design and build modern websites, apps, and brand experiences
          that help businesses stand out and grow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton>
            <button
              onClick={() => openContactModal('hero-primary')}
              className="px-8 py-4 bg-white text-space-950 rounded-full font-semibold text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Start Your Project
            </button>
          </MagneticButton>

          <a
            href="#portfolio"
            className="group px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold text-base hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
          >
            View Our Work
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Trust badge */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="mt-16 text-sm text-slate-500"
        >
          Trusted by startups, agencies, and growing brands worldwide.
        </motion.p>
      </div>
    </section>
  );
}
