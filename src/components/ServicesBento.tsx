import { motion } from 'framer-motion'
import { Sparkles, Layers, Zap, Box, Rocket, Shield } from 'lucide-react'

const services = [
  { title: 'Web Design', span: 'col-span-1 md:col-span-2', desc: 'We design sites with strong structure, balanced motion and modern identity. Clean typography, smart spacing and confident layouts form the core of our work.', icon: <Sparkles size={22} />, gradient: 'from-blue-500/30 to-purple-500/30' },
  { title: 'Web Development', desc: 'We deliver stable, fast and scalable builds. We use the latest frameworks, tight code standards and zero noise. Every feature is built with intent.', icon: <Layers size={22} />, gradient: 'from-emerald-500/30 to-cyan-500/30' },
  { title: 'Brand Systems', desc: 'We create brand systems that fit the web. Colors, motion, shapes and tone all work together. The result is a unified identity that grows with your product.', icon: <Shield size={22} />, gradient: 'from-orange-500/30 to-red-500/30' },
  { title: 'Interface Motion', span: 'col-span-1 md:col-span-2', desc: 'Motion explains ideas faster than text. We use smooth, subtle transitions that guide attention and help visitors move through pages without friction.', icon: <Box size={22} />, gradient: 'from-pink-500/30 to-rose-500/30' },
  { title: 'Landing Pages', desc: 'We design high-conversion pages with clear narrative flow, sharp visuals and smart micro-interactions that keep users on the page longer.', icon: <Rocket size={22} />, gradient: 'from-violet-500/30 to-fuchsia-500/30' },
  { title: 'Creative Engineering', desc: 'We build small interactive elements that make your product feel alive. No heavy tech. Clean CSS, SVG and smart logic to keep performance high.', icon: <Zap size={22} />, gradient: 'from-yellow-500/30 to-amber-500/30' }
]

export default function ServicesBento() {
  return (
    <section id="services" className="py-24 bg-space-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tight font-spacegrotesk">
            We build digital products <br />
            <span className="gradient-text">with a clear focus</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            Speed, polish and precision.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={`${s.span ?? ''} group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="h-full min-h-[220px] p-8 glass-card hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0 mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                    {s.icon}
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
