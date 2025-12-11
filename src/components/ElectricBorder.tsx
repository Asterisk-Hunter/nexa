import { usePerformance } from '@/context/PerformanceProvider';
import './ElectricBorder.css';

interface ElectricBorderProps {
    children?: React.ReactNode;
    color?: string;
    speed?: number;
    chaos?: number;
    thickness?: number;
    className?: string;
    style?: React.CSSProperties;
}

const ElectricBorder = ({
    children,
    color = '#60a5fa',
    className,
    style
}: ElectricBorderProps) => {
    const { tier } = usePerformance();
    const isPerformanceMode = tier === 'low' || tier === 'medium';

    return (
        <div
            className={`relative group ${className || ''}`}
            style={style}
        >
            {/* Moving Border Beam - Optimized or Disabled based on Tier */}
            {!isPerformanceMode && (
                <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
                    <div
                        className="absolute inset-[0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-transform"
                        style={{
                            background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, ${color} 10%, transparent 20%)`,
                            animation: 'spin 4s linear infinite',
                        }}
                    />
                </div>
            )}

            {/* Content Wrapper - Removed inner backdrop-blur to save GPU fill rate */}
            <div className={`relative h-full z-10 rounded-[inherit] bg-space-950/80 border transition-colors
                ${isPerformanceMode ? 'border-white/20' : 'border-white/10 group-hover:border-white/20'}
            `}>
                {children}
            </div>

            {/* Pulsing Glow behind - REMOVED BLUR to fix crash */}
            {tier === 'high' && (
                <div
                    className="absolute -inset-[1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-br from-transparent to-white/5"
                    style={{ borderColor: color }}
                />
            )}
        </div>
    );
};

export default ElectricBorder;


