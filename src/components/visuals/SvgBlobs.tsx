import { motion } from 'framer-motion';

export default function SvgBlobs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#bc13fe" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="blurFilter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
                    </filter>
                </defs>

                <motion.circle
                    cx="200" cy="300" r="150"
                    fill="url(#blobGrad)"
                    filter="url(#blurFilter)"
                    animate={{ cx: [200, 250, 200], cy: [300, 250, 300] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.circle
                    cx="800" cy="700" r="200"
                    fill="#60a5fa"
                    fillOpacity="0.1"
                    filter="url(#blurFilter)"
                    animate={{ cx: [800, 750, 800], cy: [700, 750, 700] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
