'use client'

export default function HeroOrbit() {
  return (
    <div className="hero-orbit-wrap" aria-hidden>
      <div className="hero-orbit-glow" />
      <div className="orbit-ring orbit-ring--a">
        <span className="orbit-node orbit-node--violet" />
      </div>
      <div className="orbit-ring orbit-ring--b">
        <span className="orbit-node orbit-node--blue" />
      </div>
      <div className="orbit-ring orbit-ring--c">
        <span className="orbit-node orbit-node--orange" />
      </div>
      <div className="orbit-core">
        <span className="orbit-core-highlight" />
      </div>
    </div>
  )
}
