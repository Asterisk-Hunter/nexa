import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function SectionWave() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Animation disabled for performance
    /*
    gsap.to(pathRef.current, {
      attr: { d: "M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 C1150,200 1350,0 1440,100 V320 H0 Z" },
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    */
  }, []);

  return (
    <div className="w-full overflow-hidden leading-[0] rotate-180">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
        <path
          ref={pathRef}
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          className="fill-space-950 opacity-50"
        />
      </svg>
    </div>
  );
}
