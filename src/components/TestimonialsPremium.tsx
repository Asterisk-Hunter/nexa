import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "They took our outdated website and turned it into something we're proud to show clients. The whole process was smooth and they actually listened to what we needed.",
    author: "Rachel Martinez",
    role: "Owner",
    company: "Bloom Wellness Studio",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5
  },
  {
    quote: "Finally, a web team that delivers on time and on budget. Our new site looks amazing on mobile and we've seen a real increase in customer inquiries since launch.",
    author: "James Wilson",
    role: "Founder",
    company: "Wilson & Co. Consulting",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5
  },
  {
    quote: "As a small business owner, I was nervous about the investment. But they made it affordable and the results speak for themselves. Our bookings doubled in the first month.",
    author: "Sarah Chen",
    role: "Director",
    company: "Peak Fitness Academy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5
  },
  {
    quote: "Professional, creative, and easy to work with. They understood our brand instantly and built exactly what we envisioned. Highly recommend for any startup.",
    author: "Marcus Thompson",
    role: "Co-Founder",
    company: "GreenLeaf Foods",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5
  }
];

export default function TestimonialsPremium() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-space-950 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-purple-500/15 via-blue-500/5 to-transparent rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter font-display">
            What our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> clients say</span>
          </h2>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-3xl p-12 md:p-16"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center opacity-50">
                  <Quote size={32} className="text-white" />
                </div>

                <div className="pt-12 md:pt-8">
                  <p className="text-2xl md:text-4xl text-white font-light leading-relaxed mb-12">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-6">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-50" />
                        <img
                          src={testimonials[activeIndex].avatar}
                          alt={testimonials[activeIndex].author}
                          className="relative w-16 h-16 rounded-full object-cover ring-2 ring-white/20"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{testimonials[activeIndex].author}</h4>
                        <p className="text-slate-400">
                          {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < testimonials[activeIndex].rating ? 'bg-purple-400' : 'bg-white/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'bg-purple-500 w-8'
                  : 'bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
