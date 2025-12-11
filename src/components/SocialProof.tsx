import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'Acme Corp',
  'TechVision',
  'Quantum Labs',
  'Stellar Industries',
  'Nova Systems',
  'Pulse Digital',
  'Vertex Group',
  'Zenith Partners'
];

export default function SocialProof() {
  return (
    <section className="relative py-12 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm text-slate-500 mb-6 tracking-wide uppercase">
          Trusted by Industry Leaders
        </p>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1000]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="text-slate-600 font-semibold text-lg whitespace-nowrap hover:text-slate-400 transition-colors"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
