'use client'

import Image from 'next/image'
import { useState } from 'react'

type Props = {
  src: string
  alt: string
  projectId: string
}

export default function ProjectThumbnail({ src, alt, projectId }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="proj-card-placeholder">
        <span className="proj-card-placeholder-id">{projectId}</span>
        <span className="proj-card-placeholder-hint">썸네일 추가</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
      className="proj-card-img"
      onError={() => setFailed(true)}
    />
  )
}
