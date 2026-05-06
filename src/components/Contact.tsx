'use client'
import { useState } from 'react'
import { PERSONAL } from '@/lib/constants'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function handleCopy(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    navigator.clipboard.writeText(PERSONAL.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" style={{
      background: 'var(--void)',
      padding: `var(--section-y) var(--gutter)`,
      borderTop: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95, textTransform: 'uppercase', color: 'var(--accent)', flexShrink: 0 }}>
            Contact
          </h2>
          <div style={{ flex: 1, height: 1, background: 'var(--border-strong)' }} />
        </div>

        <a
          href={`mailto:${PERSONAL.email}`}
          onClick={handleCopy}
          style={{
            display: 'block',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            lineHeight: 1.2,
            marginBottom: 12,
            transition: 'color .2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text)' }}
        >
          {PERSONAL.email}
        </a>

        {/* 복사 토스트 */}
        <div style={{
          position: 'fixed',
          bottom: 'clamp(1.5rem, 4vw, 2.5rem)',
          left: '50%',
          transform: copied ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(12px)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 28px',
          background: 'var(--accent)',
          color: '#000',
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          borderRadius: 2,
          opacity: copied ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity .25s, transform .25s',
          zIndex: 9990,
          whiteSpace: 'nowrap',
        }}>
          Copied to clipboard
        </div>

        <a
          href={`tel:${PERSONAL.phone}`}
          style={{
            display: 'block',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: 'var(--text-muted)',
            lineHeight: 1.3,
            transition: 'color .2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)' }}
        >
          {PERSONAL.phone}
        </a>
      </div>
    </section>
  )
}
