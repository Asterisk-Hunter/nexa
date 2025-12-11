import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type PerformanceTier = 'high' | 'medium' | 'low';

interface PerformanceState {
    tier: PerformanceTier;
    isScrolling: boolean;
    dpr: number;
    reduceMotion: boolean;
    shouldUseR3F: boolean;
    disableR3F: boolean;
    setScrolling: (isScrolling: boolean) => void;
    setDisableR3F: (disable: boolean) => void;
    clampDPR: (dpr: number) => number;
}

const PerformanceContext = createContext<PerformanceState>({
    tier: 'high',
    isScrolling: false,
    dpr: 1,
    reduceMotion: false,
    shouldUseR3F: false,
    disableR3F: true,
    setScrolling: () => { },
    setDisableR3F: () => { },
    clampDPR: (d) => d,
});

export const usePerformance = () => useContext(PerformanceContext);

export function PerformanceProvider({ children }: { children: ReactNode }) {
    const [tier, setTier] = useState<PerformanceTier>('high');
    const [isScrolling, setIsScrolling] = useState(false);
    const [dpr, setDpr] = useState(1);
    const [reduceMotion, setReduceMotion] = useState(false);
    const [disableR3F, setDisableR3F] = useState(true);

    // Initial Detection based on Hardware
    useEffect(() => {
        // @ts-ignore
        const deviceMemory = navigator.deviceMemory || 4;
        const hw = navigator.hardwareConcurrency || 4;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Check for Env Override
        const envDisable = import.meta.env.REACT_APP_DISABLE_R3F === 'true';

        let detectedTier: PerformanceTier = 'high';

        // Strict Logic: Low if <=2GB RAM or <=2 cores
        if (deviceMemory <= 2 || hw <= 2 || prefersReduced) {
            detectedTier = 'low';
        }
        // Medium if <=4GB RAM or <=4 cores
        else if (deviceMemory <= 4 || hw <= 4) {
            detectedTier = 'medium';
        }

        console.log(`[Performance] Detected Tier: ${detectedTier} (RAM: ${deviceMemory}, Cores: ${hw})`);

        setTier(detectedTier);
        setReduceMotion(prefersReduced);
        setDisableR3F(true); // FORCE DISABLE

        // Initial DPR set
        const baseDpr = window.devicePixelRatio || 1;
        setDpr(Math.min(baseDpr, detectedTier === 'low' ? 1 : detectedTier === 'medium' ? 1.25 : 1.75));

    }, []);

    const clampDPR = (val: number) => {
        if (tier === 'low') return Math.min(val, 1);
        if (tier === 'medium') return Math.min(val, 1.25);
        return Math.min(val, 1.75);
    };

    // Global "Should we run R3F?" logic
    // FORCE FALSE for Zero-GPU Strategy
    const shouldUseR3F = false;

    return (
        <PerformanceContext.Provider
            value={{
                tier,
                isScrolling,
                dpr,
                reduceMotion,
                shouldUseR3F,
                disableR3F,
                setScrolling: setIsScrolling,
                setDisableR3F,
                clampDPR
            }}
        >
            {children}
        </PerformanceContext.Provider>
    );
}

export { PerformanceContext };
