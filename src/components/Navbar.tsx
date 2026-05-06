'use client'
import { useEffect, useRef } from 'react'

const links = [['about', 'About'], ['projects', 'Project'], ['contact', 'Contact']]

export default function Navbar() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let lastY = 0
    const onScroll = () => {
      const y = window.scrollY
      if (ref.current) {
        ref.current.style.transform = y > 100 && y > lastY ? 'translateY(-100%)' : 'translateY(0)'
      }
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav ref={ref} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: `0 var(--gutter)`, height: 64,
      background: 'rgba(5, 5, 5, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      transition: 'transform .4s cubic-bezier(.4,0,.2,1)',
    }}>
      {/* 로고 */}
      <button
        type="button"
        onClick={() => go('hero')}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text)',
        }}
      >
        Jiho Park
      </button>

      {/* 링크 */}
      <ul style={{ display: 'flex', gap: 'clamp(1.5rem, 3vw, 2.5rem)', listStyle: 'none', alignItems: 'center' }}>
        {links.map(([id, label]) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => go(id)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                transition: 'color .2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* 우측 상태 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'block' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
          Open to Work
        </span>
      </div>
    </nav>
  )
}
