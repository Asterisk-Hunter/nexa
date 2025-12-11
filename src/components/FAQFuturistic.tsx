import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is Nexa Studio's core philosophy?",
        answer: "We believe in the convergence of art and code. Our philosophy is rooted in 'Quantum Design'—interfaces that feel alive, responsive, and deeper than the screen they inhabit."
    },
    {
        question: "How do you ensure high performance with 3D visuals?",
        answer: "We utilize WebGL optimization techniques, including geometry instancing, shader-based animations, and adaptive quality scaling based on device GPU capabilities."
    },
    {
        question: "Can you integrate with existing tech stacks?",
        answer: "Absolutely. Our systems are agnostic. We build modular React components that can plug into Next.js, Remix, or proprietary architectures seamlessy."
    },
    {
        question: "What is the typical timeline for a 'Future-Grade' project?",
        answer: "Excellence takes time, but our proprietary 'Velocity' framework allows us to deliver MVP results in 4-6 weeks, with full immersive experiences maturing in 8-12 weeks."
    }
];

export default function FAQFuturistic() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-space-950 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Critical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Data</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Decrypted answers to your most frequent queries.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative border transition-all duration-300 overflow-hidden",
                                activeIndex === index
                                    ? "border-neon-blue/50 bg-neon-blue/5 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                                    : "border-white/10 bg-white/5 hover:border-white/20"
                            )}
                        >
                            {/* Electric Border Line (Vertical for active) */}
                            <div className={cn(
                                "absolute left-0 top-0 bottom-0 w-1 bg-neon-blue shadow-[0_0_10px_#60a5fa] transition-all duration-300",
                                activeIndex === index ? "opacity-100" : "opacity-0"
                            )} />

                            <button
                                onClick={() => toggleIndex(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={cn(
                                    "text-lg font-medium transition-colors",
                                    activeIndex === index ? "text-white" : "text-slate-300 group-hover:text-white"
                                )}>
                                    {faq.question}
                                </span>
                                <div className={cn(
                                    "p-2 rounded-full border border-white/10 transition-all duration-300",
                                    activeIndex === index ? "bg-neon-blue/20 text-neon-blue" : "text-slate-400"
                                )}>
                                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                                            <div className="h-2" /> {/* Spacer */}
                                            <p className="flex gap-3">
                                                <Zap size={16} className="text-neon-purple mt-1 shrink-0" />
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 transition-all group-hover:border-neon-blue/50" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 transition-all group-hover:border-neon-blue/50" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
