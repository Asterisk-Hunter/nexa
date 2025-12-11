import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { initLenis } from './lenis';
import { connectGsapToLenis } from './gsap';

export function useLenis() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = initLenis();
        lenisRef.current = lenis;

        if (lenis) {
            connectGsapToLenis(lenis);
        }

        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
        };
    }, []);

    return lenisRef.current;
}
