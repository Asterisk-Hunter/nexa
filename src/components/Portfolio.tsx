import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PerspectiveCard from './PerspectiveCard';

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'NeoBank',
      category: 'Fintech Platform',
      description: 'Revolutionary banking experience with AI-powered insights',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      alt: 'NeoBank fintech platform dashboard showing data visualizations and financial analytics',
      tags: ['UI/UX', 'Development', 'AI'],
    },
    {
      title: 'Aurora',
      category: 'E-Commerce',
      description: 'Next-gen shopping platform with immersive 3D product views',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      alt: 'Aurora e-commerce platform interface displaying product catalog with modern design',
      tags: ['3D', 'WebGL', 'React'],
    },
    {
      title: 'MindFlow',
      category: 'SaaS Product',
      description: 'AI-driven productivity tool for modern teams',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      alt: 'MindFlow SaaS productivity dashboard with task management and team collaboration features',
      tags: ['UI/UX', 'AI', 'Cloud'],
    },
    {
      title: 'Velocity',
      category: 'Mobile App',
      description: 'Fitness tracking with real-time motion analysis',
      image: 'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=800&q=80',
      alt: 'Velocity fitness tracking mobile app interface showing workout analytics and progress charts',
      tags: ['Mobile', 'ML', 'Health'],
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-32 bg-slate-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-pink-400 font-semibold text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-4 font-spacegrotesk">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <PerspectiveCard className="h-full">
                <div className="group relative overflow-hidden rounded-3xl bg-slate-900 cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-sm text-slate-400 font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-black text-white mt-2 mb-3 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {project.description}
                    </p>
                  </div>
                </div>
              </PerspectiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
