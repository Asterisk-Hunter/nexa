import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { openContactModal } from '@/lib/contact';
import ElectricBorder from './ElectricBorder';
import { usePerformance } from '@/context/PerformanceProvider';

const PricingContent = ({ plan, billingCycle }: { plan: any, billingCycle: any }) => (
  <>
    <div className="mb-8">
      <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">{plan.name}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-bold text-white tracking-tight">
          {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
        </span>
        {plan.price.monthly !== 'Custom' && (
          <span className="text-slate-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
        )}
      </div>
      <p className="mt-4 text-sm text-slate-300 leading-relaxed font-light">
        {plan.description}
      </p>
    </div>

    <div className="space-y-4 mb-8">
      {plan.features.map((feature: any) => (
        <div key={feature} className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
          <div className={`mt-0.5 p-0.5 rounded-full ${plan.highlight ? 'bg-neon-blue/20 text-neon-blue' : 'bg-white/10 text-slate-400'}`}>
            <Check size={12} />
          </div>
          {feature}
        </div>
      ))}
    </div>

    <button
      onClick={() => openContactModal(`pricing-${plan.name.toLowerCase()}` as any, plan.name)}
      className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${plan.highlight
        ? 'bg-neon-blue text-white hover:shadow-glow hover:scale-[1.02]'
        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/30'
        }`}
    >
      {plan.cta}
    </button>
  </>
);

const plans = [
  {
    name: 'Starter',
    price: { monthly: '75k', yearly: '800k' },
    description: 'Perfect for MVP and rapid prototypes',
    features: [
      'Landing page + 3 sections',
      '3 revision rounds',
      'Mobile responsive',
      'Basic SEO setup',
      '2-week delivery'
    ],
    cta: 'Apply Now',
    highlight: false
  },
  {
    name: 'Growth',
    price: { monthly: '150k', yearly: '1.6M' },
    description: 'For scaling products and brands',
    features: [
      'Multi-page site (up to 5 pages)',
      'Custom animations & interactions',
      'Advanced SEO & performance',
      'CMS integration',
      'Unlimited revisions',
      '4-week delivery'
    ],
    cta: 'Apply Now',
    highlight: true
  },
  {
    name: 'Partner',
    price: { monthly: 'Custom', yearly: 'Custom' },
    description: 'Full product & brand partnerships',
    features: [
      'Complete design system',
      'Technical architecture consulting',
      'Ongoing maintenance & support',
      'Priority support channel',
      'Equity & retainer options',
      'Dedicated team'
    ],
    cta: 'Schedule Call',
    highlight: false
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const { tier } = usePerformance();

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 noise opacity-5 pointer-events-none" />

      {/* Disable heavy blur blobs on low tier */}
      {tier !== 'low' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-float" style={{ animationDelay: '2s' }} />
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
            Investment
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Transparent pricing for exceptional digital experiences.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8 backdrop-blur-md bg-white/5 p-1 rounded-full inline-flex border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-white/10 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'yearly' ? 'bg-white/10 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
            >
              Yearly
              <span className="ml-2 text-xs text-neon-blue animate-pulse">(-10%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="h-full" // Ensure height for flex stretch
            >
              {plan.highlight ? (
                <ElectricBorder
                  color={plan.highlight ? '#60a5fa' : '#475569'}
                  speed={1}
                  thickness={2}
                  chaos={0.3}
                  style={{ borderRadius: 24, height: '100%' }}
                  className="shadow-glow"
                >
                  <div className="relative h-full p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-b from-white/5 to-transparent">
                    {/* Highlight Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-blue text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg shadow-neon-blue/40 z-20">
                      <Sparkles size={12} /> POPULAR
                    </div>

                    <PricingContent plan={plan} billingCycle={billingCycle} />
                  </div>
                </ElectricBorder>
              ) : (
                <div className="h-full p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                  <PricingContent plan={plan} billingCycle={billingCycle} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
