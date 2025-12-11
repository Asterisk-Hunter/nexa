import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { usePerformance } from '@/context/PerformanceProvider'

if (typeof window !== 'undefined' && gsap && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    title: 'NeoBank',
    category: 'Fintech Platform',
    description: 'AI-powered insights for modern banking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop'
  },
  {
    title: 'Aurora',
    category: 'E-Commerce',
    description: 'Immersive 3D shopping with spatial navigation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop'
  },
  {
    title: 'MindFlow',
    category: 'SaaS Productivity',
    description: 'Neural UI for deep work teams.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80&auto=format&fit=crop'
  },
  {
    title: 'Velocity',
    category: 'Health & Motion',
    description: 'Real-time biomechanics and coaching.',
    image: 'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=1200&q=80&auto=format&fit=crop'
  }
]

export default function PortfolioScrub() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const { tier, isScrolling } = usePerformance()

  // Premium Effect: Internal Parallax for images
  // We use Framer Motion's useScroll to drive internal image movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const parallaxX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth
      const viewportWidth = container.clientWidth
      const distance = totalWidth - viewportWidth

      gsap.to(track, {
        x: () => -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${Math.max(totalWidth, window.innerHeight)}`,
          scrub: 0, // Keep 0 for implementation of "smooth scrub" via Lenis integration elsewhere
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    }, container)

    return () => ctx.revert()
  }, [])

  const isHighTier = tier === 'high';

  return (
    <section ref={containerRef} className="relative bg-space-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-space-950 via-transparent to-space-950 z-10" />

      <div className="py-20 px-6 sticky top-0 z-10 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          <div>
            <span className="text-neon-blue font-semibold text-sm tracking-wider uppercase">Case Study Reel</span>
            <h2 className="text-5xl md:text-6xl font-spacegrotesk font-black text-white mt-3">
              Scroll-Scrub <span className="gradient-text">Showcase</span>
            </h2>
          </div>
          <div className="text-slate-400 text-sm max-w-sm hidden md:block">
            Scroll to scrub through our hero projects.
            {isHighTier ? " Enhanced with parallax depth." : " Optimized for your device."}
          </div>
        </div>
      </div>

      <div ref={trackRef} className="flex gap-8 px-6 pb-24 will-change-transform">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="group relative w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/5 bg-space-900 transition-all duration-500
                ${isHighTier ? 'group-hover:border-neon-blue/40 group-hover:shadow-[0_0_50px_-12px_rgba(96,165,250,0.3)]' : 'group-hover:border-neon-blue/20'}
              `}
            >
              {/* Parallax Image Container */}
              <motion.div
                className="w-[120%] h-full absolute top-0 left-0"
                style={{ x: isHighTier ? parallaxX : 0 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform
                    ${isHighTier ? 'grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105' : 'grayscale-[0.5]'}
                  `}
                />
              </motion.div>

              {/* Interaction Overlay */}
              <div className="absolute inset-0 bg-space-950/40 group-hover:bg-transparent transition-colors duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[1px] w-6 bg-neon-blue" />
                  <span className="text-neon-blue text-xs font-mono tracking-widest uppercase">{project.category}</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-spacegrotesk font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed max-w-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1 group-hover:line-clamp-none">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
