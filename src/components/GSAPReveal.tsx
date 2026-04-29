'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function GSAPReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // 섹션 h2 헤드라인
      document.querySelectorAll('section h2').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })

      // 프로젝트 카드 stagger
      document.querySelectorAll('.proj-grid').forEach((grid) => {
        gsap.fromTo(Array.from(grid.children),
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: grid, start: 'top 82%' } }
        )
      })

      // About 그리드
      document.querySelectorAll('.about-grid').forEach((el) => {
        gsap.fromTo(Array.from(el.children),
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: el, start: 'top 82%' } }
        )
      })

      // Skills 그리드
      document.querySelectorAll('.skills-grid').forEach((el) => {
        gsap.fromTo(Array.from(el.children),
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: el, start: 'top 82%' } }
        )
      })

      // Education 그리드
      document.querySelectorAll('.edu-grid').forEach((el) => {
        gsap.fromTo(Array.from(el.children),
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: el, start: 'top 82%' } }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
