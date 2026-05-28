import { PERSONAL } from '@/lib/constants'

export default function Footer() {
  return (
    <>
      {/* Thank You */}
      <div style={{
        background: 'var(--void)',
        padding: `clamp(4rem, 10vw, 8rem) var(--gutter)`,
        overflow: 'hidden',
        position: 'relative',
      }}>
        <p className="footer-title" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 6.25vw, 5.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 0.9,
          textTransform: 'uppercase',
          color: 'transparent',
          WebkitTextStroke: '1.5px var(--accent)',
          userSelect: 'none',
          textAlign: 'right',
        }}>
          Thank You<br />For Watching
        </p>
        <p className="footer-sub" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
          color: '#ffffff',
          fontWeight: 500,
          letterSpacing: '0.04em',
          textAlign: 'right',
          marginTop: '2rem',
          lineHeight: 1.8,
        }}>
          끝까지 봐주셔서 감사합니다.<br />디자이너 박지호였습니다.
        </p>
      </div>

    <footer style={{
      background: 'rgba(8, 8, 15, 0.9)',
      borderTop: '1px solid var(--border)',
      padding: `2.5rem var(--gutter)`,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 1.5,
    }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.03em' }}>
        © {new Date().getFullYear()} {PERSONAL.nameEn}
      </p>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.06em',
        color: 'var(--text-muted)',
        textAlign: 'right',
      }}>
        {PERSONAL.title} {PERSONAL.nameEn}
      </p>
    </footer>
    </>
  )
}
