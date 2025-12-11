import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Rocket, Globe, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const services = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Modern, fast, and responsive websites built with the latest technologies. From simple landing pages to complex web applications.',
        features: ['React & Next.js', 'Custom CMS', 'E-commerce', 'API Integration'],
        gradient: 'from-blue-500 to-cyan-400'
    },
    {
        icon: Smartphone,
        title: 'App Development',
        description: 'Cross-platform mobile apps that work seamlessly on iOS and Android. Native performance with a single codebase.',
        features: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Support'],
        gradient: 'from-purple-500 to-pink-400'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that your users will love. We focus on both aesthetics and usability.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        gradient: 'from-orange-500 to-yellow-400'
    },
    {
        icon: Globe,
        title: 'Brand Identity',
        description: 'Establish a strong brand presence from logo design to complete visual identity that tells your story.',
        features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Systems'],
        gradient: 'from-emerald-500 to-teal-400'
    },
    {
        icon: Rocket,
        title: 'SEO & Marketing',
        description: 'Get found online. We optimize your site for search engines and help you reach your target audience.',
        features: ['Technical SEO', 'Content Strategy', 'Analytics', 'Performance'],
        gradient: 'from-red-500 to-rose-400'
    },
    {
        icon: Zap,
        title: 'Maintenance',
        description: 'Keep your site running smoothly with ongoing updates, security patches, and performance monitoring.',
        features: ['Monthly Updates', 'Security', 'Backups', '24/7 Support'],
        gradient: 'from-amber-500 to-orange-400'
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
};

export default function ServicesPage() {
    return (
        <>
            <SEOHead
                title="Services — Web Development, App Development & Design | Nexa Web Solutions"
                description="Professional web development, mobile app development, UI/UX design, and branding services. Affordable solutions for startups and growing businesses."
                canonical="https://thenexawebsolutions.com/services"
            />

            <div className="min-h-screen bg-space-950 pt-28 pb-20">
                {/* Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wide uppercase">
                            What We Do
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                            Services that help
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                your business grow
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            From web development to brand identity, we offer comprehensive digital solutions
                            at prices that make sense for startups and growing businesses.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon size={24} className="text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{service.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1 text-xs bg-white/5 text-slate-300 rounded-full border border-white/10"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pricing CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Affordable pricing, premium results
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Starting from just $1,000 for a professional website. No hidden fees, no surprises.
                        </p>
                        <Link
                            to="/#pricing"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-space-950 rounded-full font-semibold hover:bg-blue-50 transition-all"
                        >
                            View Pricing
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
