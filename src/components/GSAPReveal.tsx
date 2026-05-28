'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TOGGLE = 'play reverse play reverse'

export default function GSAPReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // 섹션 h2 헤드라인
      document.querySelectorAll('section h2').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: TOGGLE } }
        )
      })

      // Projects 카드 stagger
      document.querySelectorAll('.proj-grid-2').forEach((grid) => {
        gsap.fromTo(Array.from(grid.children),
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: grid, start: 'top 82%', toggleActions: TOGGLE } }
        )
      })

      // About 그리드
      document.querySelectorAll('.about-grid').forEach((el) => {
        gsap.fromTo(Array.from(el.children),
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.14,
            scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: TOGGLE } }
        )
      })

      // Background 블록 (학력→대외활동→자격증→수상경력 순)
      const bgBlocks = Array.from(document.querySelectorAll('.bg-block'))
        .sort((a, b) => Number((a as HTMLElement).dataset.order) - Number((b as HTMLElement).dataset.order))
      if (bgBlocks.length) {
        gsap.fromTo(bgBlocks,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
            scrollTrigger: { trigger: bgBlocks[0], start: 'top 85%', toggleActions: TOGGLE } }
        )
      }

      // Education 그리드
      document.querySelectorAll('.edu-grid').forEach((el) => {
        gsap.fromTo(Array.from(el.children),
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: TOGGLE } }
        )
      })

      // Footer Thank You
      const footerTitle = document.querySelector('.footer-title')
      const footerSub = document.querySelector('.footer-sub')
      if (footerTitle) {
        gsap.fromTo(footerTitle,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: footerTitle, start: 'top 88%', toggleActions: TOGGLE } }
        )
      }
      if (footerSub) {
        gsap.fromTo(footerSub,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2,
            scrollTrigger: { trigger: footerSub, start: 'top 90%', toggleActions: TOGGLE } }
        )
      }

      // Contact 콘텐츠
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        const items = contactSection.querySelectorAll('a')
        gsap.fromTo(Array.from(items),
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
            scrollTrigger: { trigger: contactSection, start: 'top 80%', toggleActions: TOGGLE } }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return null
}
