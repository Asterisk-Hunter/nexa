import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { openContactModal } from '@/lib/contact';

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-space-950">
      {/* Simple gradient background - no GPU intensive effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating elements - CSS only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-purple-400/20 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-cyan-400/25 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-[25%] w-4 h-4 bg-blue-400/15 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300 font-medium">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Ready to bring your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              ideas to life?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto"
          >
            Let's discuss your project. We respond quickly and keep things simple.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton>
              <button
                onClick={() => openContactModal('cta')}
                className="px-8 py-4 bg-white text-space-950 rounded-full font-semibold text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Start a Project
              </button>
            </MagneticButton>

            <a
              href="mailto:nexawebstudiodesign@gmail.com"
              className="px-8 py-4 border border-white/20 text-white rounded-full font-medium text-base hover:bg-white/5 transition-all"
            >
              Email Us Directly
            </a>
          </motion.div>

          {/* Contact info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 text-sm text-slate-500"
          >
            nexawebstudiodesign@gmail.com • Typically respond within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
