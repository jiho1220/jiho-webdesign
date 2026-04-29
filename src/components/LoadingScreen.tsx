'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLDivElement>(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const obj = { v: 0 }
    gsap.timeline()
      .to(obj, {
        v: 100, duration: 1.6, ease: 'power2.inOut',
        onUpdate() {
          const val = Math.round(obj.v)
          setN(val)
          if (bar.current) bar.current.style.width = val + '%'
        },
      })
      .to(ref.current, {
        yPercent: -100, duration: 0.9, ease: 'power4.inOut',
        delay: 0.15, onComplete,
      })
  }, [onComplete])

  return (
    <div ref={ref} className="loading">
      <p className="loading-num">{String(n).padStart(2, '0')}</p>
      <div ref={bar} className="loading-bar" />
    </div>
  )
}
