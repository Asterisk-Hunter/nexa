import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlassCard from './GlassCard';
import PerspectiveCard from './PerspectiveCard';

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote: "The interface they built feels alive. It anticipates user intent in ways we didn't think possible.",
      author: "Elena Vos",
      role: "Director of Product, NeuralLink",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      quote: "Nexa Studio doesn't just build websites; they architect digital ecosystems. A masterclass in spatial UI.",
      author: "Dr. Aris Thorne",
      role: "Lead Researcher, Quantum Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      quote: "We saw a 400% increase in engagement after the redesign. The 3D integration is seamless.",
      author: "Sarah Chen",
      role: "CTO, Future Corp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-space-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
            Transmission Log
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Signals</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="h-full"
            >
              <PerspectiveCard className="h-full">
                <GlassCard className="p-8 h-full flex flex-col justify-between relative overflow-hidden group">
                  {/* Decorative Gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50" />
                  
                  <div>
                    <div className="text-4xl text-blue-500/40 mb-6 font-serif">"</div>
                    <p className="text-slate-300 leading-relaxed mb-8 text-lg font-light">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 rounded-full" />
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover ring-1 ring-white/20 relative z-10"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm tracking-wide">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-blue-400 font-mono mt-1">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </PerspectiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
