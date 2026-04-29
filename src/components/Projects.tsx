'use client'
import { useState } from 'react'
import Link from 'next/link'
import { PROJECTS } from '@/lib/constants'
import ProjectRowThumb from '@/components/ProjectRowThumb'

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="projects" style={{ background: 'var(--bg)', padding: `var(--section-y) var(--gutter)` }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95, textTransform: 'uppercase', color: 'var(--accent)', flexShrink: 0 }}>
          Projects
        </h2>
        <div style={{ flex: 1, height: 1, background: 'var(--border-strong)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {PROJECTS.length} works
        </span>
      </div>

      <div className="proj-grid-2">
        {PROJECTS.map((p, i) => (
          <Link
            key={p.id}
            href={`/projects/${p.id}`}
            className="proj-card-2"
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="proj-card-2-thumb">
              <ProjectRowThumb
                thumbnail={p.thumbnail}
                images={p.images}
                alt={p.title.replace(/\n/g, ' ')}
                projectId={p.id}
                isHovered={hoveredId === p.id}
              />
            </div>

            <div className="proj-card-2-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {p.category}
                  </span>
                  {p.description && (
                    <>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>·</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                        {p.description}
                      </span>
                    </>
                  )}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-muted)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, color: 'var(--text)', marginTop: 6 }}>
                {p.title.split('\n').map((line, i) => (
                  <span key={i} style={{ display: 'block', fontSize: i === 0 ? 'clamp(1rem, 1.8vw, 1.3rem)' : 'clamp(0.8rem, 1.4vw, 1.05rem)', fontWeight: i === 0 ? 700 : 600, marginTop: i === 0 ? 0 : '0.5rem' }}>
                    {line}
                  </span>
                ))}
              </h3>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
