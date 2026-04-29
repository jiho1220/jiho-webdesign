import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PROJECTS } from '@/lib/constants'

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = PROJECTS.find((p) => p.id === id)
  if (!project) notFound()

  return (
    <main style={{ background: 'var(--void)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* 상단 네비 */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 var(--gutter)', height: 64,
        background: 'rgba(5, 5, 5, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <Link href="/#projects" className="proj-back-link">
          ← Back
        </Link>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
          {project.id} / {project.category}
        </span>
      </div>

      {/* 헤더 */}
      <div style={{ padding: '4rem 4rem 3rem 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'start',
        }}>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              {project.category}
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}>
              {project.title.split('\n').map((line, i) => (
                <span key={i} style={{
                  display: 'block',
                  fontSize: i === 0 ? 'clamp(1.5rem, 3vw, 2.25rem)' : 'clamp(0.95rem, 1.6vw, 1.25rem)',
                  fontWeight: i === 0 ? 800 : 600,
                  color: i === 0 ? 'var(--text)' : 'var(--text-muted)',
                  marginTop: i === 0 ? 0 : '0.5rem',
                }}>
                  {line}
                </span>
              ))}
            </h1>
            {project.overview && (
              <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 780, whiteSpace: 'pre-line' }}>
                {project.overview}
              </p>
            )}
          </div>

          {/* 메타 */}
          {project.meta && project.meta.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, minWidth: 220 }}>
              {project.meta.map((m) => (
                <div key={m.label}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 6 }}>
                    {m.label}
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 16, letterSpacing: '0', color: 'var(--text-muted)' }}>{m.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 히어로 썸네일 — 전체 너비 */}
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '16/9',
        background: 'var(--bg-card)',
        marginBottom: '20px',
      }}>
        <Image
          src={project.thumbnail}
          alt={project.title.replace(/\n/g, ' ')}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* 이미지 없을 때 하단 버튼 */}
      {(!project.images || project.images.length === 0) && (
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '4rem var(--gutter) 0' }}>
          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'center' }}>
            <Link href="/#projects" className="btn-outline">← Projects</Link>
          </div>
        </div>
      )}

      {/* 추가 이미지 — 전체 너비 */}
      {project.images && project.images.length > 0 && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--void)', padding: '0 4rem' }}>
            {project.images.map((src, i) => (
              <div key={i} style={{ position: 'relative', width: '100%', background: 'var(--bg-card)' }}>
                <Image src={src} alt={`${project.title} — ${i + 1}`} width={1920} height={1080} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 var(--gutter)' }}>
            <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'center' }}>
              <Link href="/#projects" className="btn-outline">
                ← Projects
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
