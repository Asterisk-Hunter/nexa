import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Globe } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { openContactModal } from '@/lib/contact';

const plans = [
    {
        name: 'Starter',
        price: '$1,000',
        description: 'Perfect for small businesses needing a professional online presence.',
        features: ['One-page website', 'Modern, clean design', 'Mobile responsive', 'Delivered in 5-7 days', 'Basic SEO setup'],
        gradient: 'from-blue-500/20 to-cyan-500/20',
        border: 'group-hover:border-blue-400/50',
        icon: Zap
    },
    {
        name: 'Growth',
        price: '$1,500',
        description: 'For businesses ready to scale with a multi-page site.',
        features: ['Up to 5 pages', 'Custom design & branding', 'Contact forms', 'Delivered in 2 weeks', 'Full SEO optimization'],
        gradient: 'from-purple-500/20 to-pink-500/20',
        border: 'group-hover:border-purple-400/50',
        icon: Sparkles,
        popular: true
    },
    {
        name: 'Maintenance',
        price: '$100/mo',
        description: 'Keep your site updated, secure, and running smoothly.',
        features: ['Monthly updates', 'Security monitoring', 'Performance optimization', 'Content updates', 'Priority support'],
        gradient: 'from-emerald-500/20 to-teal-500/20',
        border: 'group-hover:border-emerald-400/50',
        icon: Globe
    }
];

export default function PricingPremium() {
    return (
        <section id="pricing" className="py-32 relative overflow-hidden bg-space-950">
            {/* CSS-Only Antigravity Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Blob 1 */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                {/* Blob 2 */}
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6"
                    >
                        Straightforward pricing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">built for clarity</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto font-light"
                    >
                        No hidden fees. No long waits. Just clean work delivered with care.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.07] ${plan.border}`}
                        >
                            {/* Highlight Gradient */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <plan.icon size={28} className="text-white/80" />
                                        {plan.popular && (
                                            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-neon-purple border border-neon-purple/20">
                                                MOST POPULAR
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-3xl font-display font-bold mb-2">{plan.name}</h3>
                                    <div className="text-sm text-slate-400 min-h-[40px]">{plan.description}</div>
                                </div>

                                <div className="mb-8">
                                    <div className="text-4xl font-bold mb-1">{plan.price}</div>
                                    {plan.price !== 'Custom' && (
                                        <div className="text-xs text-slate-500 uppercase tracking-widest">Starting at</div>
                                    )}
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-300">
                                            <Check size={16} className="text-neon-cyan shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <MagneticButton>
                                    <button
                                        onClick={() => openContactModal(plan.name.toLowerCase() as any)}
                                        className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 border border-white/20 hover:bg-white hover:text-black hover:border-white"
                                    >
                                        Select Plan
                                    </button>
                                </MagneticButton>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
