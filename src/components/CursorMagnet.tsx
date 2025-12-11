import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface CursorMagnetProps {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}

export default function CursorMagnet({
  children,
  strength = 50,
  radius = 100,
  className = '',
}: CursorMagnetProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < radius) {
        gsap.to(element, {
          x: distanceX * (strength / 100),
          y: distanceY * (strength / 100),
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, radius]);

  return (
    <div ref={ref} className={`inline-block ${className}`} data-magnet>
      {children}
    </div>
  );
}
