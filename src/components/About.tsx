'use client'
import { PERSONAL, EDUCATION, GPA, ACTIVITIES, AWARDS, CERTIFICATIONS } from '@/lib/constants'

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-elevated)', padding: `var(--section-y) var(--gutter)`, borderTop: '1px solid var(--border)' }}>

      {/* 섹션 레이블 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95, textTransform: 'uppercase', color: 'var(--accent)', flexShrink: 0 }}>
          About
        </h2>
        <div style={{ flex: 1, height: 1, background: 'var(--border-strong)' }} />
      </div>

      {/* 프로필 그리드 */}
      <div className="about-grid" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        {/* 왼쪽: 사진 → 제목 → 설명 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            width: 160,
            aspectRatio: '3 / 4',
            overflow: 'hidden',
            background: 'var(--bg-card)',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile2.jpg"
              alt={PERSONAL.nameEn}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

          <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
            사용자의 <span style={{ color: 'magenta' }}>심리를 분석</span>하여<br />
            <span style={{ color: 'magenta' }}>행동을 설계</span>하는<br />
            UX/UI 디자이너 <span style={{ background: 'var(--accent)', color: '#000', padding: '0 0.2em' }}>박지호</span>입니다.
          </p>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-muted)', maxWidth: 600 }}>
            사용자의 심리와 행동 패턴을 분석해 목적에 맞는 경험을 설계합니다.<br />
            직관적인 흐름과 시각적 설득력으로, 타겟이 원하는 행동을<br />
            자연스럽게 이끌어냅니다.
          </p>
        </div>

        {/* 오른쪽: 정보 목록 */}
        <div>
          {[
            ['이름', `${PERSONAL.name} / ${PERSONAL.nameEn}`],
            ['포지션', PERSONAL.title],
            ['생년월일', PERSONAL.birth],
            ['연락처', PERSONAL.phone],
            ['이메일', PERSONAL.email],
            ['주소', PERSONAL.location],
          ].map(([label, val]) => (
            <div key={label} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 12, padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-faint)", paddingTop: 2 }}>{label}</span>
              <span style={{ fontSize: 17, color: 'var(--text-muted)', wordBreak: 'break-word' }}>{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background 구분선 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        marginBottom: 'clamp(2rem, 4vw, 3rem)',
      }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', flexShrink: 0 }}>
          Background
        </span>
      </div>

      {/* Background 그리드: 2열 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'start' }}>

        {/* 왼쪽: 학력 → 자격증 */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 28 }}>학력</p>
          {EDUCATION.map((e, i) => (
            <div key={i} style={{ paddingLeft: 16, borderLeft: '2px solid var(--accent)', marginBottom: 28 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, letterSpacing: '0.04em' }}>{e.period}</p>
              <p style={{ fontSize: 18, color: 'var(--text)', fontWeight: 600, marginBottom: 4 }}>{e.institution}</p>
              <p style={{ fontFamily: i === 0 ? undefined : 'var(--font-mono)', fontSize: 16, fontWeight: i === 0 ? 600 : undefined, color: i === 0 ? 'var(--accent)' : 'var(--text-muted)', marginBottom: i === 0 ? 12 : 0, whiteSpace: 'pre-line' }}>{e.major}</p>
              {i === 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {GPA.map((g) => (
                    <div key={g.label} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--text-muted)', flexShrink: 0 }}>{g.label}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--accent)' }}>{g.gpa}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '40px 0 28px' }}>자격증</p>
          {CERTIFICATIONS.map((c, i) => (
            <div key={i} style={{ paddingLeft: 16, borderLeft: '2px solid var(--accent)', marginBottom: 22 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>{c.date}</p>
              <p style={{ fontSize: 18, color: 'var(--text)', fontWeight: 600, marginBottom: 4 }}>{c.name}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--text-muted)' }}>{c.issuer}</p>
            </div>
          ))}
        </div>

        {/* 오른쪽: 대외활동 → 수상경력 */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 28 }}>대외활동</p>
          {ACTIVITIES.map((a, i) => (
            <div key={i} style={{ paddingLeft: 16, borderLeft: '2px solid var(--accent)', marginBottom: 22 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>{a.period}</p>
              <p style={{ fontSize: 18, color: 'var(--text)', fontWeight: 600, marginBottom: 2 }}>{a.title}</p>
              {a.role && <p style={{ fontSize: 15, color: 'var(--accent)', marginBottom: 6 }}>{a.role}</p>}
              {a.organizer && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--text-muted)' }}>{a.organizer}</p>}
            </div>
          ))}

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '40px 0 28px' }}>수상경력</p>
          {AWARDS.map((a, i) => (
            <div key={i} style={{ paddingLeft: 16, borderLeft: '2px solid var(--accent)', marginBottom: 22 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>{a.date}</p>
              <p style={{ fontSize: 18, color: 'var(--text)', fontWeight: 600, marginBottom: 4 }}>{a.event}</p>
              <p style={{ marginBottom: 6 }}>
                <span style={{ background: 'var(--accent)', color: '#000', fontWeight: 700, fontSize: 18, padding: '0 0.3em' }}>{a.award}</span>
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--text-muted)' }}>{a.issuer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
