import { motion } from 'framer-motion';

export default function CssNebulaFallback() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-space-950 pointer-events-none">
            {/* Layer 1: Deep Blue Base */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen"
            />

            {/* Layer 2: Purple Accent */}
            <motion.div
                animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen"
            />

            {/* Layer 3: Cyan Pulse */}
            <motion.div
                animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-cyan-900/10 rounded-full blur-[80px] mix-blend-screen"
            />
        </div>
    );
}
