import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SplitTextProps {
  children: string;
  className?: string;
  mode?: 'lines' | 'words' | 'chars';
  stagger?: number;
  delay?: number;
}

export default function SplitText({
  children,
  className = '',
  mode = 'chars',
  stagger = 0.02,
  delay = 0,
}: SplitTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const text = children;
    element.innerHTML = '';
    element.style.opacity = '1';

    if (mode === 'chars') {
      const chars = text.split('');
      chars.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(100%)';
        if (char === ' ') span.style.width = '0.3em';
        element.appendChild(span);
      });

      gsap.to(element.children, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: stagger,
        ease: 'power4.out',
        delay: delay,
      });
    } else if (mode === 'words') {
      const words = text.split(' ');
      words.forEach((word) => {
        const span = document.createElement('span');
        span.textContent = word + '\u00A0';
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(100%)';
        element.appendChild(span);
      });

      gsap.to(element.children, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: stagger * 2,
        ease: 'power4.out',
        delay: delay,
      });
    }
  }, [children, mode, stagger, delay]);

  return (
    <div
      ref={elementRef}
      className={`overflow-hidden ${className}`}
      aria-label={children}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
}
