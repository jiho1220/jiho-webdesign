import { EDUCATION, ACTIVITIES, AWARDS, CERTIFICATIONS } from '@/lib/constants'

export default function Education() {
  return (
    <section id="background" style={{ background: 'var(--bg-elevated)', padding: `var(--section-y) var(--gutter)`, borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', marginBottom: 'clamp(3rem, 6vw, 5rem)', flexWrap: 'wrap' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 6rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          textTransform: 'uppercase',
        }}>
          Back<br />
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>ground</span>
        </h2>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.08em', textTransform: 'uppercase', alignSelf: 'flex-end', paddingBottom: 8 }}>
          03 / Education &amp; Awards
        </span>
      </div>

      <div className="edu-grid">
        {/* 학력 */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 28 }}>학력</p>
          {EDUCATION.map((e, i) => (
            <div key={i} style={{ paddingLeft: 16, borderLeft: '2px solid var(--accent)', marginBottom: 28 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-faint)', marginBottom: 8, letterSpacing: '0.04em' }}>{e.period}</p>
              <p style={{ fontSize: 16, color: 'var(--text)', fontWeight: 600, marginBottom: 4 }}>{e.institution}</p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{e.major}</p>
              {e.gpa && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginTop: 8 }}>GPA {e.gpa}</p>}
            </div>
          ))}

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '40px 0 28px' }}>대외활동</p>
          {ACTIVITIES.map((a, i) => (
            <div key={i} style={{ paddingLeft: 16, borderLeft: '1px solid var(--border-strong)', marginBottom: 22 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-faint)', marginBottom: 6 }}>{a.period}</p>
              <p style={{ fontSize: 16, color: 'var(--text-muted)' }}>{a.title}</p>
            </div>
          ))}
        </div>

        {/* 자격증 */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 28 }}>자격증</p>
          {CERTIFICATIONS.map((c, i) => (
            <div key={i} style={{ paddingLeft: 16, borderLeft: '1px solid var(--border-strong)', marginBottom: 22 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-faint)', marginBottom: 6 }}>{c.date}</p>
              <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>{c.name}</p>
              <p style={{ fontSize: 12, color: 'var(--text-faint)' }}>{c.issuer}</p>
            </div>
          ))}
        </div>

        {/* 수상 */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 28 }}>수상경력</p>
          {AWARDS.map((a, i) => (
            <div key={i} style={{
              padding: '1.25rem',
              marginBottom: 12,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-faint)', marginBottom: 10 }}>{a.date}</p>
              <p style={{ fontSize: 16, color: 'var(--text)', fontWeight: 600, lineHeight: 1.55, marginBottom: 4 }}>{a.event}</p>
              <p style={{ fontSize: 16, color: 'var(--text)', lineHeight: 1.55, marginBottom: 8 }}>{a.award}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-red)' }}>{a.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
