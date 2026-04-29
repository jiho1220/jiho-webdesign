'use client'

type Dot = [number, number]

// ── 중복 제거 ────────────────────────────────────────────────────
function dedup(dots: Dot[], snap: number): Dot[] {
  const seen = new Set<string>()
  return dots.filter(([x, y]) => {
    const k = `${Math.round(x / snap)},${Math.round(y / snap)}`
    if (seen.has(k)) return false
    seen.add(k); return true
  })
}

// ── 4방향 반짝이 (팔이 끝으로 갈수록 좁아지는 filled star) ──────
function sparkleFill(cx: number, cy: number, arm: number, w: number, gap = 1.6): Dot[] {
  const raw: Dot[] = []
  for (let d = 0; d <= arm; d += gap) {
    const hw = w * (1 - d / arm)
    for (let o = -hw; o <= hw; o += gap) {
      raw.push([cx + d, cy + o])
      if (d > 0) raw.push([cx - d, cy + o])
      raw.push([cx + o, cy + d])
      if (d > 0) raw.push([cx + o, cy - d])
    }
  }
  return dedup(raw, gap)
}

// ── 직선 도트 ────────────────────────────────────────────────────
function lineDots(x1: number, y1: number, x2: number, y2: number, gap = 2): Dot[] {
  const dx = x2 - x1, dy = y2 - y1
  const n = Math.max(1, Math.floor(Math.sqrt(dx * dx + dy * dy) / gap))
  return Array.from({ length: n + 1 }, (_, i) => [x1 + dx * i / n, y1 + dy * i / n] as Dot)
}

// ── 2차 베지어 도트 ──────────────────────────────────────────────
function bezierDots(p0: Dot, p1: Dot, p2: Dot, gap = 2.2): Dot[] {
  const dots: Dot[] = []
  let [px, py] = p0; let acc = 0; dots.push(p0)
  for (let i = 1; i <= 800; i++) {
    const t = i / 800, mt = 1 - t
    const x = mt * mt * p0[0] + 2 * mt * t * p1[0] + t * t * p2[0]
    const y = mt * mt * p0[1] + 2 * mt * t * p1[1] + t * t * p2[1]
    acc += Math.sqrt((x - px) ** 2 + (y - py) ** 2); px = x; py = y
    if (acc >= gap) { dots.push([x, y]); acc = 0 }
  }
  return dots
}

// ── 구성 (viewBox 0 0 400 360) ───────────────────────────────────
const DOTS: Dot[] = [
  // 큰 반짝이 (우중앙)
  ...sparkleFill(262, 198, 108, 22, 1.6),
  // 작은 반짝이 (좌중상)
  ...sparkleFill(74, 140, 42, 10, 1.6),
  // 미니 반짝이 (우상단)
  ...sparkleFill(320, 70, 22, 5, 1.6),
  // 곡선 호 (좌하→우중)
  ...bezierDots([14, 352], [82, 212], [208, 202], 2.2),
  // 미니 십자 (중상)
  ...lineDots(185, 84, 185, 104, 2),
  ...lineDots(175, 94, 195, 94, 2),
  // 흩뿌린 점들
  [238, 90], [243, 84], [248, 92], [234, 96],
  [110, 280], [116, 286], [122, 278],
  [47, 78], [42, 84], [53, 83],
  [357, 218], [363, 223], [351, 224],
  [162, 322], [168, 318], [173, 325],
]

const R = 0.65  // dot 반지름 (viewBox 기준)

export default function HeroDecor() {
  return (
    <div aria-hidden style={{
      position: 'absolute',
      right: '-2%',
      top: 0,
      height: '100%',
      width: '65%',
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      <svg
        viewBox="0 0 400 360"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%', opacity: 0.13 }}
      >
        <g fill="white">
          {DOTS.map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={R} />
          ))}
        </g>
      </svg>
    </div>
  )
}
