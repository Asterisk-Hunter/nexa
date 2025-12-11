import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { submitContactForm } from '@/lib/contactService';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  prefillPlan?: string;
}

export default function ContactModal({ isOpen, onClose, source = 'unknown', prefillPlan }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    brief: '',
    budget: '',
    source,
    plan: prefillPlan || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const successTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedElement.current = document.activeElement as HTMLElement;
    document.body.style.setProperty('overflow', 'hidden');

    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    requestAnimationFrame(() => {
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelectors);
      focusable && focusable[0]?.focus();
    });

    return () => {
      document.body.style.removeProperty('overflow');
      lastFocusedElement.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }

      if (event.key !== 'Tab') return;

      const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelectors);
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setFormData((prev) => ({ ...prev, source, plan: prefillPlan || '' }));
  }, [source, prefillPlan, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Construct mailto link
    const subject = `Project Inquiry: ${formData.plan ? `[${formData.plan}]` : ''} ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AProject Brief:%0D%0A${formData.brief}`;

    window.location.href = `mailto:nexawebstudiodesign@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`; // No encodeURIComponent for body generally needed in simple mailto but safer for complex chars, but simple replacement is better for spaces.

    setIsSuccess(true);
    successTimeout.current = setTimeout(() => {
      onClose();
      setIsSuccess(false);
      setFormData({ name: '', company: '', email: '', brief: '', budget: '', source, plan: '' });
    }, 2000);
    setIsSubmitting(false);
  };

  useEffect(() => {
    return () => {
      if (successTimeout.current) {
        clearTimeout(successTimeout.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
            ref={dialogRef}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-space-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Success State */}
              {isSuccess ? (
                <div className="text-center py-12 relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                  >
                    <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2 font-spacegrotesk">Start Your Project</h2>
                    <p className="text-slate-400">Tell us about your vision and we'll craft a custom proposal.</p>
                    {prefillPlan && (
                      <div className="mt-3 inline-block px-3 py-1 bg-neon-blue/20 text-neon-blue text-sm rounded-full border border-neon-blue/20">
                        Plan: {prefillPlan}
                      </div>
                    )}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                          Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue focus:bg-white/10 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue focus:bg-white/10 transition-all"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue focus:bg-white/10 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="brief" className="block text-sm font-medium text-slate-300 mb-2">
                        Project Brief *
                      </label>
                      <textarea
                        id="brief"
                        required
                        rows={4}
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue focus:bg-white/10 transition-all resize-none"
                        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      />
                    </div>

                    {/* Budget Removed */}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-xl font-bold text-lg shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Opening Mail Client...' : 'Send Inquiry'}
                    </button>

                    <p className="text-center text-xs text-slate-500 mt-4">
                      Or email us directly: <a href="mailto:nexawebstudiodesign@gmail.com" className="text-neon-blue hover:underline">nexawebstudiodesign@gmail.com</a>
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

