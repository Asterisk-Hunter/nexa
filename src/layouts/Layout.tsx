import { Outlet, useLocation } from 'react-router-dom';
import { usePerformance } from '@/context/PerformanceProvider';
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import NoiseOverlay from '@/components/NoiseOverlay';
import CustomCursor from '@/components/CustomCursor';
import ContactModal from '@/components/ContactModal';
import CookieConsent from '@/components/ui/CookieConsent';
import { useState } from 'react';
import { openContactModal } from '@/lib/contact';

// Simple ScrollToTop - No Lenis dependency
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}

export default function Layout() {
    // Contact Modal State
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

    // Keyboard shortcut 'C'
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'c' && !e.metaKey && !e.ctrlKey && !isContactOpen) {
                const target = e.target as HTMLElement;
                if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
                    openContactModal('keyboard');
                }
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isContactOpen]);

    return (
        <div className="min-h-screen w-full bg-space-950 text-white flex flex-col font-sans selection:bg-neon-blue/30 selection:text-white">
            <ScrollToTop />

            {/* Global Overlays */}
            <NoiseOverlay />
            <CustomCursor />
            <CookieConsent />

            {/* Navigation */}
            <NavBar />

            {/* Main Content Area */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

            {/* Global Modal */}
            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                source={contactSource}
                prefillPlan={prefillPlan}
            />
        </div>
    );
}
