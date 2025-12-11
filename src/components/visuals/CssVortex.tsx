import { motion } from 'framer-motion';

export default function CssVortex() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Spinning Center - Increased opacity for visibility */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] opacity-60">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#a855f7_15%,transparent_30%,#3b82f6_50%,transparent_70%)] blur-[80px]"
                />
            </div>

            {/* Counter-rotating Core - Brighter */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] opacity-80 mix-blend-screen">
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0%,#60a5fa_20%,transparent_50%,#ec4899_70%,transparent_100%)] blur-[60px]"
                />
            </div>

            {/* Grid overlay for depth */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
}
