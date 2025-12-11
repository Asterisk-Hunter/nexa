import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePerformance } from '@/context/PerformanceProvider';

export default function CustomCursor() {
  const { tier, isScrolling } = usePerformance();
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Use stiffer, faster spring on low tier to reduce calc overhead
  const springConfig = tier === 'low' ? { stiffness: 500, damping: 25 } : { stiffness: 150, damping: 15 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    if (tier === 'low' && /Mobi|Android/i.test(navigator.userAgent)) return; // Disable on mobile low tier

    const moveCursor = (e: MouseEvent) => {
      // Throttling logic: only update every 32ms (~30fps) on 'low' tier, else 60fps
      const now = performance.now();
      if (tier === 'low' && previousTimeRef.current && now - previousTimeRef.current < 32) return;

      previousTimeRef.current = now;

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Skip expensive DOM traversal for hover check if scrolling
      if (isScrolling) {
        setIsHovered(false);
        return;
      }

      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.hasAttribute('data-magnet')
      );
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [tier, isScrolling]);

  // Hide cursor entirely on touch devices or if preferred
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Main Dot - Always visible unless scrolling fast */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-neon-blue rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isScrolling ? 0.5 : 1 // Fade out when scrolling
        }}
      />

      {/* Trailing Ring - Hide on low tier or scrolling */}
      {tier !== 'low' && !isScrolling && (
        <motion.div
          className="fixed top-0 left-0 border border-neon-blue rounded-full pointer-events-none z-[9998] mix-blend-screen"
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%'
          }}
          animate={{
            width: isHovered ? 60 : 20,
            height: isHovered ? 60 : 20,
            opacity: isHovered ? 0.3 : 0.6,
            backgroundColor: isHovered ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        />
      )}
    </>
  );
}
