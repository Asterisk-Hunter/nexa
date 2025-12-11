import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlassCard from './GlassCard';
import { Sparkles, Layers, Zap, Box, Rocket, Shield } from 'lucide-react';

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services = [
    { 
      title: 'Neural Interface Design', 
      span: 'col-span-1 md:col-span-2', 
      desc: 'Direct-to-cognition UI patterns that anticipate user intent before interaction occurs.', 
      icon: <Sparkles size={24} />,
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    { 
      title: 'Quantum Architecture', 
      desc: 'Scalable systems built on next-gen frameworks ready for the post-silicon era.', 
      icon: <Layers size={24} />,
      gradient: 'from-emerald-500/20 to-cyan-500/20'
    },
    { 
      title: 'Hyper-Scale Infrastructure', 
      desc: 'Global edge networks optimized for millisecond latency and infinite redundancy.', 
      icon: <Shield size={24} />,
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    { 
      title: 'Immersive 3D Environments', 
      span: 'col-span-1 md:col-span-2', 
      desc: 'WebGL-powered spatial experiences that blur the line between digital and physical reality.', 
      icon: <Box size={24} />,
      gradient: 'from-pink-500/20 to-rose-500/20'
    },
    { 
      title: 'Product Launch Systems', 
      desc: 'Go-to-market accelerators and automation pipelines for rapid deployment.', 
      icon: <Rocket size={24} />,
      gradient: 'from-violet-500/20 to-fuchsia-500/20'
    },
    { 
      title: 'Realtime Performance', 
      desc: 'Micro-interactions tuned to 60fps with physics-based animation engines.', 
      icon: <Zap size={24} />,
      gradient: 'from-yellow-500/20 to-amber-500/20'
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-space-950 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-mono text-xs tracking-widest uppercase">
            Capabilities
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tight">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Modules</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${item.span || ''}`}
              data-magnet
            >
              <GlassCard className="h-full min-h-[240px] transition-transform duration-300 hover:-translate-y-2 group">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white border border-white/10`}>
                      {item.icon}
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-neon-blue transition-colors" />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold text-white font-spacegrotesk mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
