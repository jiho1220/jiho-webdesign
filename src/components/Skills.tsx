type Skill = { name: string; slug: string; level: number }

const designTools: Skill[] = [
  { name: 'Figma', slug: 'figma', level: 5 },
  { name: 'Adobe XD', slug: 'xd', level: 5 },
  { name: 'Adobe Illustrator', slug: 'illustrator', level: 5 },
  { name: 'Adobe Photoshop', slug: 'photoshop', level: 4 },
  { name: 'Adobe After Effects', slug: 'aftereffects', level: 3 },
  { name: 'Adobe Premiere Pro', slug: 'premiere', level: 3 },
]

const collaboration: Skill[] = [
  { name: 'Notion', slug: 'notion', level: 4 },
  { name: 'Slack', slug: 'slack', level: 4 },
]

const expertise = ['UX Research', 'UI Design', 'Usability Test', 'Interaction Design', 'Brand Identity']

const MAX = 5

function SkillRow({ name, slug, level }: Skill) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/skills/${slug}.png`} alt={name} style={{ width: 32, height: 32, objectFit: 'contain', flexShrink: 0 }} />
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text)', flex: 1 }}>{name}</span>
      <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
        {Array.from({ length: MAX }).map((_, i) => (
          <span key={i} style={{
            width: 8, height: 8, borderRadius: '50%',
            background: i < level ? 'var(--text)' : 'transparent',
            border: '1.5px solid',
            borderColor: i < level ? 'var(--text)' : 'var(--text-faint)',
            display: 'block',
          }} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg)', padding: `var(--section-y) var(--gutter)`, borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95, textTransform: 'uppercase', color: 'var(--accent)', flexShrink: 0 }}>
          Skills
        </h2>
        <div style={{ flex: 1, height: 1, background: 'var(--border-strong)' }} />
      </div>

      <div className="skills-grid">
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-faint)', lineHeight: 1.8, maxWidth: 280 }}>
            디자인 도구부터 협업 방법론까지, 문제 해결에 필요한 스킬을 갖추고 있습니다.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {/* Design Tools */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
              Design Tools
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 40px' }}>
              {designTools.map(item => <SkillRow key={item.slug} {...item} />)}
            </div>
          </div>

          {/* Collaboration */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
              Collaboration
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 40px' }}>
              {collaboration.map(item => <SkillRow key={item.slug} {...item} />)}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
              Expertise
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {expertise.map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
