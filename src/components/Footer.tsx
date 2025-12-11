import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NebulaVortex from './NebulaVortex';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">
      <NebulaVortex />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nexa Web Solutions
            </h3>
            <p className="text-slate-400 text-base leading-relaxed mb-5">
              We build modern, fast websites for small businesses and startups. Based in India, working worldwide.
            </p>
            <a
              href="mailto:nexawebstudiodesign@gmail.com"
              className="text-base text-blue-400 hover:text-blue-300 transition-colors"
            >
              nexawebstudiodesign@gmail.com
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors text-base">Web Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors text-base">App Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors text-base">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors text-base">SEO & Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-base">About Us</Link></li>
              <li><Link to="/#portfolio" className="text-slate-400 hover:text-white transition-colors text-base">Our Work</Link></li>
              <li><Link to="/#pricing" className="text-slate-400 hover:text-white transition-colors text-base">Pricing</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Connect</h4>
            <div className="flex gap-3 mb-5">
              {[
                { name: 'X', url: '#' },
                { name: 'In', url: '#' },
                { name: 'Ig', url: '#' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-11 h-11 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-white/5 text-base font-medium"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              Follow us for updates and behind-the-scenes.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-base">
            © 2026 Nexa Web Solutions. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Made with care in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
