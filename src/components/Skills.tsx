'use client'
import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Skill = { name: string; slug?: string; ext?: string; level: number }
type SkillGroup = { category: string; skills: Skill[] }

const row1: SkillGroup[] = [
  {
    category: 'Graphic',
    skills: [
      { name: 'Adobe Photoshop', slug: 'photoshop', level: 5 },
      { name: 'Adobe Illustrator', slug: 'illustrator', level: 5 },
      { name: 'Adobe InDesign', slug: 'indesign', level: 4 },
    ],
  },
  {
    category: 'UI Design',
    skills: [
      { name: 'Figma', slug: 'figma', level: 5 },
      { name: 'Adobe XD', slug: 'xd', level: 5 },
    ],
  },
  {
    category: 'Video & Motion',
    skills: [
      { name: 'After Effects', slug: 'aftereffects', level: 4 },
      { name: 'Premiere Pro', slug: 'premiere', level: 4 },
    ],
  },
]

const row2: SkillGroup[] = [
  {
    category: 'AI Tools',
    skills: [
      { name: 'ChatGPT', slug: 'chatgpt', level: 5 },
      { name: 'Gemini', slug: 'gemini', level: 5 },
      { name: 'Midjourney', slug: 'midjourney', level: 4 },
      { name: 'Kling AI', slug: 'kling', level: 3 },
    ],
  },
  {
    category: 'Vibe Coding',
    skills: [
      { name: 'Claude', slug: 'claude', level: 5 },
      { name: 'Cursor', slug: 'cursor', level: 4 },
    ],
  },
  {
    category: 'Office Suite',
    skills: [
      { name: 'Microsoft Word', slug: 'word', ext: 'svg', level: 4 },
      { name: 'Microsoft PowerPoint', slug: 'powerpoint', ext: 'svg', level: 4 },
      { name: 'Microsoft Excel', slug: 'excel', ext: 'svg', level: 3 },
    ],
  },
  {
    category: 'Collaboration',
    skills: [
      { name: 'Notion', slug: 'notion', level: 4 },
      { name: 'Slack', slug: 'slack', level: 4 },
    ],
  },
]


const WHITE_BOX = ['chatgpt', 'gemini', 'midjourney', 'cursor', 'notion']
const GRAY_BOX = ['kling']

function SkillLogo({ slug, name, ext = 'png' }: { slug?: string; name: string; ext?: string }) {
  const [failed, setFailed] = useState(false)
  if (!slug || failed) return null

  const boxColor = GRAY_BOX.includes(slug) ? '#444' : '#fff'
  const needsBox = WHITE_BOX.includes(slug) || GRAY_BOX.includes(slug)

  return needsBox ? (
    <div style={{ width: 28, height: 28, background: boxColor, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 3 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/skills/${slug}.${ext}`} alt={name} onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/skills/${slug}.${ext}`} alt={name} onError={() => setFailed(true)} style={{ width: 28, height: 28, objectFit: 'contain', flexShrink: 0 }} />
  )
}

function SkillCard({ category, skills }: SkillGroup) {
  return (
    <div
      className="skill-card"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(255, 0, 229, 0.7)',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
        {category}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {skills.map(skill => (
          <div key={skill.name} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'var(--bg-elevated)' }}>
            <SkillLogo slug={skill.slug} name={skill.name} ext={skill.ext} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-muted)', flex: 1 }}>
              {skill.name}
            </span>
            <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{
                  width: 7, height: 7, borderRadius: '50%', display: 'block',
                  background: i < skill.level ? 'var(--accent)' : 'transparent',
                  border: `1.5px solid ${i < skill.level ? 'var(--accent)' : 'var(--text-faint)'}`,
                }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const rows = document.querySelectorAll('.skills-row')
    rows.forEach((row) => {
      gsap.fromTo(Array.from(row.children),
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    })
  }, [])

  return (
    <section id="skills" style={{ background: 'var(--bg)', padding: `var(--section-y) var(--gutter)`, borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95, textTransform: 'uppercase', color: 'var(--accent)', flexShrink: 0 }}>
          Skills & Tools
        </h2>
        <div style={{ flex: 1, height: 1, background: 'var(--border-strong)' }} />
      </div>

      {/* 1행: 3열 */}
      <div className="skills-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(0.75rem, 1.5vw, 1.25rem)', marginBottom: 'clamp(0.75rem, 1.5vw, 1.25rem)' }}>
        {row1.map((group) => (
          <SkillCard key={group.category} {...group} />
        ))}
      </div>

      {/* 2행: 4열 */}
      <div className="skills-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(0.75rem, 1.5vw, 1.25rem)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        {row2.map((group) => (
          <SkillCard key={group.category} {...group} />
        ))}
      </div>

    </section>
  )
}
