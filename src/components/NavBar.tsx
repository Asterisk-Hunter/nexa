// src/components/Navbar.tsx
import { useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50)
    })
  }, [scrollY])

  const handleHashScroll = (hash: string) => {
    // If we're not on home, we can't scroll to hash, so just ignore for now
    // User should navigate to home first
    if (location.pathname !== '/') {
      return;
    }
    const element = document.querySelector(hash);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Work', href: '#portfolio', isRoute: false },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Pricing', href: '#pricing', isRoute: false },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 border-b ${scrolled
        ? 'py-4 bg-space-950/80 backdrop-blur-md border-white/10'
        : 'py-6 bg-transparent border-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl tracking-tighter font-spacegrotesk relative group z-50">
          NEXA
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full" />
        </Link>

        <ul className="hidden md:flex gap-8 text-sm text-slate-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="hover:text-white transition-colors relative group py-2 cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              ) : (
                <button
                  onClick={() => handleHashScroll(link.href)}
                  className="hover:text-white transition-colors relative group py-2 cursor-pointer bg-transparent border-none"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className="z-50 md:flex hidden gap-4 items-center">
          <MagneticButton>
            <Link
              to="/contact"
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all shadow-lg inline-block ${scrolled
                ? 'bg-white text-black hover:bg-blue-50 shadow-white/10'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
            >
              Contact
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Menu Trigger could go here */}
      </nav>
    </header>
  )
}
