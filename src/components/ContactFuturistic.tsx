import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';

// Antigravity removed for performance


const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@nexastudio.io',
    href: 'mailto:hello@nexastudio.io'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#'
  }
];

const socials = [
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Dribbble', href: '#' },
  { name: 'Instagram', href: '#' }
];

export default function ContactFuturistic() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-screen bg-space-950 overflow-hidden py-32"
    >
      {/* 3D Background - Removed for Zero-GPU Strategy */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-40"> ... </div> */}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-slate-300 font-medium">Get in Touch</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter font-display">
            Let's create
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              something amazing
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
            Drop us a line and let's explore the possibilities together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-slate-400 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', company: '', budget: '', message: '' });
                  }}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-8">Start a conversation</h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-space-900">Select budget</option>
                        <option value="50k-100k" className="bg-space-900">$50k - $100k</option>
                        <option value="100k-250k" className="bg-space-900">$100k - $250k</option>
                        <option value="250k+" className="bg-space-900">$250k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Tell us about your project</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all resize-none"
                      placeholder="Describe your vision, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold text-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group glass-card flex items-center gap-6 p-6 hover:bg-white/[0.08] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <method.icon size={24} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 mb-1">{method.label}</p>
                    <p className="text-lg text-white font-medium">{method.value}</p>
                  </div>
                  <ArrowUpRight size={20} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card p-8"
            >
              <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="px-6 py-3 bg-white/5 rounded-full text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass-card p-8"
            >
              <h4 className="text-lg font-bold text-white mb-4">Office Hours</h4>
              <div className="space-y-2 text-slate-400">
                <p>Monday - Friday: 9am - 6pm PST</p>
                <p>Weekend: By appointment</p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-400">Currently accepting new projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
