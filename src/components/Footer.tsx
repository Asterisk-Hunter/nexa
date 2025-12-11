import { motion } from 'framer-motion';
import NebulaVortex from './NebulaVortex';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Company: ['About', 'Services', 'Work', 'Careers', 'Blog'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Contact', 'Support'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses', 'Settings'],
    Social: ['Twitter', 'LinkedIn', 'Instagram', 'Dribbble', 'GitHub'],
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">
      <NebulaVortex />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-black gradient-text mb-4">
              NEXA
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting digital experiences for the future.
            </p>
            <div className="flex gap-4 mt-6">
              {['X', 'Li', 'Ig', 'Dr'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all border border-white/5"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Nexa Web Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
