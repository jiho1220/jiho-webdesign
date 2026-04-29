'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot     = useRef<HTMLDivElement>(null)
  const ring    = useRef<HTMLDivElement>(null)
  const hovered = useRef(false)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, raf: number
    const d = dot.current!, r = ring.current!

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      d.style.left = mx + 'px'
      d.style.top  = my + 'px'
    }

    const loop = () => {
      const vx = (mx - rx) * 0.15
      const vy = (my - ry) * 0.15
      rx += vx
      ry += vy

      r.style.left = rx + 'px'
      r.style.top  = ry + 'px'

      if (!hovered.current) {
        const speed   = Math.sqrt(vx * vx + vy * vy)
        const angle   = Math.atan2(vy, vx) * (180 / Math.PI)
        const stretch = Math.min(1 + speed * 0.06, 1.6)
        const squish  = 1 / Math.sqrt(stretch)
        r.style.transform = `translate(-50%,-50%) rotate(${angle}deg) scaleX(${stretch}) scaleY(${squish})`
      } else {
        r.style.transform = 'translate(-50%,-50%)'
      }

      raf = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)

    const bind = () => {
      document.querySelectorAll('a,button,[data-cur]').forEach(el => {
        el.addEventListener('mouseenter', () => {
          hovered.current = true
          d.classList.add('hov')
          r.classList.add('hov')
        })
        el.addEventListener('mouseleave', () => {
          hovered.current = false
          d.classList.remove('hov')
          r.classList.remove('hov')
        })
      })
    }
    bind()
    const obs = new MutationObserver(bind)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dot}  className="cur-dot" />
      <div ref={ring} className="cur-ring" />
    </>
  )
}
