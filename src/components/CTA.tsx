import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import CTA3D from './CTA3D';

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-space-950 flex items-center justify-center min-h-[80vh]">
      {/* 3D Background */}
      <CTA3D />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-transparent to-space-950 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-block mb-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-sm font-mono text-blue-300 tracking-widest uppercase">
              System Status: Ready
            </span>
          </div>

          <h2 className="text-6xl md:text-9xl font-black text-white mb-8 leading-none tracking-tighter font-spacegrotesk">
            Initialize <br />
            <span className="gradient-text">
              Sequence
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            The future isn't waiting. It's being compiled right now.
            Join the network and build what's next.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <MagneticButton>
              <button className="group relative px-12 py-6 bg-white text-black rounded-full font-bold text-xl tracking-wide overflow-hidden hover:scale-105 transition-transform duration-300">
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button className="px-12 py-6 border border-white/20 text-white rounded-full font-medium text-xl tracking-wide hover:bg-white/5 transition-colors backdrop-blur-sm">
                Schedule Briefing
              </button>
            </MagneticButton>
          </div>

          {/* Footer Links */}

        </motion.div>
      </div>
    </section>
  );
}
