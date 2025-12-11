// src/lib/lenis.ts
import Lenis from '@studio-freight/lenis';

export const initLenis = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null;
  }

  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing for "butter" feel
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};

export const scrollToTarget = (lenis: Lenis | null, target: string | HTMLElement, offset = 0, duration = 1.1) => {
  if (!lenis) {
    if (typeof window !== 'undefined') {
      const element = typeof target === 'string' ? document.querySelector(target) : target;
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  // Handle string selectors
  const targetEl = typeof target === 'string' ? document.querySelector(target) : target;
  if (!targetEl) return;

  lenis.scrollTo(targetEl as HTMLElement, { offset, duration });
};
