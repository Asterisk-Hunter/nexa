import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlassCard from './GlassCard';
import HeroR3F from './HeroR3F';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    { value: '98%', label: 'Neural Accuracy' },
    { value: '2.4s', label: 'Global Latency' },
    { value: '∞', label: 'Scale Potential' },
    { value: '24/7', label: 'AI Monitoring' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-space-950 overflow-hidden"
    >
      {/* 3D Background */}
      <HeroR3F className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" low />

      {/* Holographic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
                  System Architecture
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mt-4 leading-tight tracking-tight">
                We don't predict the future. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  We compile it.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed font-light max-w-xl"
            >
              Nexa Studio isn't just an agency; it's a quantum leap in digital production. 
              We fuse algorithmic precision with human creativity to build platforms that 
              feel less like websites and more like extensions of the mind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 backdrop-blur-sm">
                React Three Fiber
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 backdrop-blur-sm">
                WebGL 2.0
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 backdrop-blur-sm">
                Neural Networks
              </div>
            </motion.div>
          </div>

          {/* Right Stats Grid - Quantum Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              >
                <GlassCard className="p-8 text-center h-full flex flex-col justify-center items-center group">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs font-mono uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
