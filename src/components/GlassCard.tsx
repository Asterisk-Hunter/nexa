import React, { useRef } from 'react'
import { usePerformance } from '@/context/PerformanceProvider'

interface Props {
  title?: string
  children?: React.ReactNode
  className?: string
}

export default function GlassCard({ title, children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { tier } = usePerformance()

  function handleMouseMove(e: React.MouseEvent) {
    if (tier === 'low') return; // Skip calculation on low tier

    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ref.current.style.setProperty('--mouse-x', `${x}px`)
    ref.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10 group ${className}`}
    >
      {/* CSS variable based gradient for performance */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.03), transparent 40%)`
        }}
      />

      {title && <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>}
      <div className="text-slate-300 text-sm h-full">{children}</div>
    </div>
  )
}
