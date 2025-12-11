import { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Globe, Cpu, Layers, ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Zap,
    title: 'Neural Design',
    description: 'AI-powered design systems that evolve with your brand identity.',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Globe,
    title: 'Spatial Web',
    description: 'Immersive 3D experiences that transcend traditional interfaces.',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Lightning-fast performance with global edge deployment.',
    gradient: 'from-orange-500 to-yellow-400'
  },
  {
    icon: Layers,
    title: 'Infinite Scale',
    description: 'Architecture built for millions of concurrent users.',
    gradient: 'from-green-500 to-emerald-400'
  }
];

const team = [
  { name: 'Alex Chen', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Sarah Kim', role: 'Lead Engineer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
  { name: 'Marcus Lee', role: '3D Artist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Emma Davis', role: 'UX Strategist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' }
];

export default function AboutFuturistic() {
  const containerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.about-headline-word',
        { opacity: 0, y: 100, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-full"
      ref={containerRef}
      className="relative min-h-screen bg-space-950 overflow-hidden py-32"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm text-slate-300 font-medium">About Nexa Studio</span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter font-display perspective-1000">
            <span className="about-headline-word inline-block">We</span>{' '}
            <span className="about-headline-word inline-block">build</span>{' '}
            <span className="about-headline-word inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">spatial</span>
            <br />
            <span className="about-headline-word inline-block">experiences</span>{' '}
            <span className="about-headline-word inline-block">for</span>{' '}
            <span className="about-headline-word inline-block">tomorrow</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We're a collective of designers, engineers, and dreamers pushing the boundaries 
            of what's possible on the web. Our mission: craft digital experiences that feel 
            like glimpses into the future.
          </motion.p>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-12 md:p-16 mb-32 text-center"
        >
          <blockquote className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight font-display">
            "Design is not just what it looks like. Design is how it 
            <span className="text-glow text-blue-400"> feels</span>."
          </blockquote>
          <p className="mt-8 text-slate-400 text-lg">— Our guiding principle since 2035</p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-display"
          >
            Our Capabilities
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-card p-8 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <cap.icon size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{cap.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 text-center font-display"
          >
            The Minds Behind Nexa
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
          >
            A diverse team of experts united by a passion for exceptional digital craft.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6 mx-auto w-40 h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <p className="text-sm text-slate-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-space-950 rounded-full font-bold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-spatial"
          >
            Start a Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
