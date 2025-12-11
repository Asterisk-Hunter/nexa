import React, { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const shouldRender = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduced = mediaQuery.matches;
    if (reduced) {
      shouldRender.current = false;
      return;
    }

    const handleReduceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        shouldRender.current = false;
        particles.current = [];
        const ctx = canvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      } else {
        shouldRender.current = true;
      }
    };
    mediaQuery.addEventListener('change', handleReduceChange);

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Add particle
      particles.current.push({
        x: mouse.current.x,
        y: mouse.current.y,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        life: 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!shouldRender.current) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((p, index) => {
        p.life -= 0.02;
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.life <= 0) {
          particles.current.splice(index, 1);
        } else {
          ctx.fillStyle = `rgba(96, 165, 250, ${p.life * 0.5})`; // Neon blue
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Cap particle count
      if (particles.current.length > 30) {
        particles.current.shift();
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleReduceChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9997]"
    />
  );
}
