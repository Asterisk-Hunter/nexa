import { BrowserRouter, Routes, Route, Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

// Import components
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import { openContactModal } from '@/lib/contact';
import ContactModal from '@/components/ContactModal';
import NoiseOverlay from '@/components/NoiseOverlay';
import CookieConsent from '@/components/ui/CookieConsent';
import SkipLink from '@/components/SkipLink';
import SEOHead from '@/components/SEOHead';

// ScrollToTop - also handles hash scrolling after navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for DOM to be ready, then scroll to hash
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

// Full NavBar with all links
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();


  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/#portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/#pricing' },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  // Handle navigation with hash scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      e.preventDefault();
      const hash = href.split('#')[1];
      const basePath = href.split('#')[0] || '/';

      if (location.pathname === basePath || (basePath === '/' && location.pathname === '/')) {
        // Already on the page, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to page first using React Router, hash will be handled by ScrollToTop
        navigate(href);
      }
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 border-b ${scrolled
        ? 'py-4 bg-space-950/80 backdrop-blur-md border-white/10'
        : 'py-6 bg-transparent border-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg tracking-tight relative group z-50">
          Nexa Web Solutions
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full" />
        </Link>

        <ul className="hidden md:flex gap-8 text-sm text-slate-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors relative group py-2 cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
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
      </nav>
    </header>
  );
}

// Full About Page
function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Nexa Web Solutions — Our Mission & Team"
        description="Meet the team behind Nexa Web Solutions. We build modern websites and apps that help businesses grow."
        canonical="https://thenexawebsolutions.com/about"
      />
      <div className="min-h-screen bg-space-950 overflow-hidden relative">
        {/* CSS Nebula Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] mix-blend-screen" />
        </div>

        <article className="relative pt-32 pb-20 px-4 container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md"
          >
            Who We Are
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            We build websites that
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              help businesses grow.
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            Nexa Web Solutions is a design and development team focused on building
            websites and apps that help small businesses and startups succeed online.
          </p>

          {/* Values Grid */}
          <section aria-labelledby="values-heading" className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
            <h2 id="values-heading" className="sr-only">Our Core Values</h2>
            {[
              { title: 'Consistency', desc: 'Every element follows a clear system.' },
              { title: 'Speed', desc: 'Fast delivery without cutting corners.' },
              { title: 'Craft', desc: 'Refined details that make products feel premium.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-space-900/80 border border-white/10 p-8 rounded-2xl glass-card hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </section>
        </article>
      </div>
    </>
  );
}

// Full Contact Page
function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Nexa Web Solutions — Start Your Web Design Project"
        description="Ready to start your project? Reach out to Nexa Web Solutions. We reply fast, keep things simple, and deliver websites that stand out."
        canonical="https://thenexawebsolutions.com/contact"
      />
      <div className="min-h-screen bg-space-950 flex items-center justify-center relative overflow-hidden">
        {/* CSS Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] mix-blend-screen" />
        </div>

        <article className="text-center z-10 px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md"
          >
            Let's Build
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
            Something with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Presence
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-xl mx-auto mb-12">
            Tell us about your product and what you want it to become. We reply fast and keep the process simple.
          </p>

          <div className="flex flex-col items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openContactModal('contact-page')}
              className="px-10 py-4 bg-white text-space-950 rounded-full font-bold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-spatial"
              aria-label="Open contact form to start your project"
            >
              Start Your Project
            </motion.button>

            <address className="text-slate-500 text-sm mt-8 p-6 border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm not-italic">
              <p className="uppercase tracking-widest text-xs mb-2">Direct Contact</p>
              <a href="mailto:nexawebstudiodesign@gmail.com" className="text-white hover:text-neon-blue transition-colors font-medium text-lg">
                nexawebstudiodesign@gmail.com
              </a>
            </address>
          </div>
        </article>
      </div>
    </>
  );
}

// Layout
function Layout() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSource, setContactSource] = useState<string>('unknown');
  const [prefillPlan, setPrefillPlan] = useState<string | undefined>();

  useEffect(() => {
    const handleOpenContact = (e: CustomEvent) => {
      setContactSource(e.detail.source);
      setPrefillPlan(e.detail.prefillPlan);
      setIsContactOpen(true);
    };
    window.addEventListener('openContactModal', handleOpenContact as EventListener);
    return () => window.removeEventListener('openContactModal', handleOpenContact as EventListener);
  }, []);

  return (
    <div className="min-h-screen w-full bg-space-950 text-white flex flex-col font-sans selection:bg-neon-blue/30 selection:text-white">
      <SkipLink />
      <ScrollToTop />
      <NoiseOverlay />
      <CookieConsent />
      <NavBar />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        source={contactSource}
        prefillPlan={prefillPlan}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
