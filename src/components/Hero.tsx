'use client'

const items = ['UX Research', 'UI Systems', 'Brand', 'Prototyping', 'Design Ops', 'Accessibility']

export default function Hero() {
  // doubled for seamless marquee loop
  const dup = [...items, ...items]

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--void)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
    }}>

      {/* 배경 장식 텍스트 */}
      <div aria-hidden style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(7rem, 24vw, 22rem)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 0.85,
          textTransform: 'uppercase',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.055)',
          whiteSpace: 'nowrap',
          paddingLeft: 'var(--gutter)',
          transform: 'translateY(8%)',
        }}>
          PARK JIHO
        </p>
      </div>

      {/* 메인 텍스트 영역 */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: `calc(80px + 4rem) var(--gutter) clamp(2rem, 4vw, 3rem)`,
        position: 'relative',
      }}>
        {/* 상단 메타 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
          flexWrap: 'wrap',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}>
            UX/UI Portfolio
          </span>
          <span style={{ width: 40, height: 1, background: 'var(--border-strong)', display: 'block' }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-faint)',
          }}>
            2026
          </span>
        </div>

        {/* 대형 헤드라인 */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 12vw, 10rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 0.9,
          textTransform: 'uppercase',
          marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
        }}>
          <span style={{ display: 'block', color: 'var(--text)' }}>DESIGN</span>
          <span style={{ display: 'block', color: 'var(--accent)', fontStyle: 'italic' }}>THAT</span>
          <span style={{ display: 'block', color: 'var(--text)' }}>MOVES</span>
        </h1>

        {/* 서브 + CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            maxWidth: 400,
          }}>
            맥락을 읽고 구조로 옮기고,<br />
            사용의 순간까지 경험으로 완성합니다.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              PORTFOLIO →
            </button>
            <button
              type="button"
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* 마퀴 스트립 */}
      <div className="ticker" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="ticker-inner"
          style={{ animation: 'marquee 28s linear infinite' }}
        >
          {dup.map((item, i) => (
            <span key={i}>
              {item}<em> ·</em>
            </span>
          ))}
        </div>
      </div>

      {/* 하단 메타 바 */}
      <div style={{
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        padding: `1rem var(--gutter)`,
        flexWrap: 'wrap',
        gap: '0.75rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {items.map((item) => (
            <span key={item} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
