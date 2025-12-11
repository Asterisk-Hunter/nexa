// src/components/MagneticButton.tsx
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) setDisabled(true)
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) setDisabled(true)
  }, [])

  function handleMove(e: React.MouseEvent) {
    if (!ref.current || disabled) return
    const r = ref.current.getBoundingClientRect()
    const mx = e.clientX - (r.left + r.width / 2)
    const my = e.clientY - (r.top + r.height / 2)
    x.set(mx * 0.3)
    y.set(my * 0.3)
  }
  function handleLeave() {
    x.set(0); y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}
