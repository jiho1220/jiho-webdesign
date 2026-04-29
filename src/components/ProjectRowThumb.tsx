'use client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  thumbnail: string
  images?: string[]
  alt: string
  projectId: string
  isHovered: boolean
}

export default function ProjectRowThumb({ thumbnail, images = [], alt, projectId, isHovered }: Props) {
  const allImgs = [thumbnail, ...images].filter(Boolean)
  const [cur, setCur] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const idxRef = useRef(0)

  useEffect(() => {
    if (isHovered && allImgs.length > 1) {
      idxRef.current = 0
      setCur(0)

      const step = () => {
        idxRef.current = (idxRef.current + 1) % allImgs.length
        setCur(idxRef.current)
        timerRef.current = setTimeout(step, 1400)
      }
      timerRef.current = setTimeout(step, 1400)
    } else {
      if (timerRef.current) clearTimeout(timerRef.current)
      setCur(0)
      idxRef.current = 0
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [isHovered, allImgs.length])

  const hasReal = thumbnail && !thumbnail.includes('placeholder')

  return (
    <div className="proj-row-thumb" style={{ overflow: 'hidden' }}>
      {hasReal ? (
        <>

          {isHovered && (
            <div style={{
              position: 'absolute',
              inset: '-1px',
              background: 'rgba(0,0,0,0.35)',
              zIndex: 1,
              pointerEvents: 'none',
              opacity: cur > 0 ? 1 : 0,
              transition: 'opacity 0.45s cubic-bezier(0.77, 0, 0.18, 1)',
            }} />
          )}
          <div style={{
            position: 'absolute',
            inset: '-1px',
            display: 'flex',
            flexDirection: 'column',
            transform: `translateY(calc(-${cur} * (100% + 1px)))`,
            transition: 'transform 0.45s cubic-bezier(0.77, 0, 0.18, 1)',
            willChange: 'transform',
          }}>
            {allImgs.map((src, i) => (
              <div key={i} style={{ position: 'relative', width: '100%', height: '100%', flexShrink: 0 }}>
                <Image
                  src={src}
                  alt={`${alt} ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="proj-card-placeholder" style={{ position: 'absolute', inset: '-1px' }}>
          <span className="proj-card-placeholder-id">{projectId}</span>
          <span className="proj-card-placeholder-hint">thumbnail</span>
        </div>
      )}
    </div>
  )
}
