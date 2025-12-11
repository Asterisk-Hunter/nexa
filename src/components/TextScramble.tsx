// src/components/TextScramble.tsx
import { useEffect, useState } from 'react'

// Removed block-like characters that might look like glitches
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export default function TextScramble({ text }: { text: string }) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    let frame = 0
    let loopId: any
    const length = text.length
    // Slower speed: Update every 45ms instead of 16ms (60fps)
    const speed = 45
    // Duration: number of cycles before resolving
    const totalFrames = length * 5

    function update() {
      // Linear progress
      const progress = Math.min(1, frame / totalFrames)

      const out = text.split('').map((ch, i) => {
        // Resolve characters one by one based on progress
        if (i / length < progress) return ch
        // Show random characters otherwise
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      }).join('')

      setDisplay(out)
      frame++

      if (progress < 1) {
        loopId = setTimeout(update, speed)
      } else {
        setDisplay(text)
      }
    }

    loopId = setTimeout(update, speed)
    return () => clearTimeout(loopId)
  }, [text])

  return <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 font-extrabold">{display}</span>
}
