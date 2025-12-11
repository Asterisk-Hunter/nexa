import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Check localStorage
        const consent = localStorage.getItem('nexastudio_consent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    function accept() {
        localStorage.setItem('nexastudio_consent', JSON.stringify({ accepted: true, t: Date.now() }));
        setVisible(false);
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-4 left-4 right-4 z-50 p-6 bg-space-950/80 backdrop-blur-md rounded-xl border border-white/10 flex flex-col md:flex-row gap-6 md:items-center shadow-2xl max-w-4xl mx-auto"
                >
                    <div className="flex-1 text-sm text-slate-300 leading-relaxed">
                        <p className="font-bold text-white mb-1">Privacy & Cookies</p>
                        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <button
                            className="px-6 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-sm font-medium transition-colors text-white"
                            onClick={() => window.alert('Customize Placeholder')}
                        >
                            Customize
                        </button>
                        <button
                            className="px-6 py-2.5 bg-white text-space-950 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg shadow-white/10"
                            onClick={accept}
                        >
                            Accept All
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
