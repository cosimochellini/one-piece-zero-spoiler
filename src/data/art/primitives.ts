import type { Role, Stroke } from './stroke'

/**
 * The shapes every drawing is built from. Everything is a path, so a dot is a
 * zero-length line with round caps and a circle is two half arcs. Coordinates
 * live in the 160x200 box of `ART_VIEWBOX`.
 */

const n = (value: number) => String(Math.round(value * 10) / 10)

export const circle = (cx: number, cy: number, r: number) =>
  `M${n(cx - r)} ${n(cy)} a${n(r)} ${n(r)} 0 1 0 ${n(2 * r)} 0 a${n(r)} ${n(r)} 0 1 0 ${n(-2 * r)} 0`

export const ellipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${n(cx - rx)} ${n(cy)} a${n(rx)} ${n(ry)} 0 1 0 ${n(2 * rx)} 0 a${n(rx)} ${n(ry)} 0 1 0 ${n(-2 * rx)} 0`

export const dot = (x: number, y: number) => `M${n(x)} ${n(y)} h0.01`

export const dots = (points: readonly (readonly [number, number])[]) =>
  points.map(([x, y]) => dot(x, y)).join(' ')

export function polygon(cx: number, cy: number, r: number, sides: number) {
  const points = Array.from({ length: sides }, (_, index) => {
    const a = -Math.PI / 2 + (index * 2 * Math.PI) / sides
    return `${n(cx + r * Math.cos(a))} ${n(cy + r * Math.sin(a))}`
  })
  return `M${points.join(' L')} Z`
}

export function star(cx: number, cy: number, outer: number, inner: number) {
  const points = Array.from({ length: 10 }, (_, index) => {
    const r = index % 2 === 0 ? outer : inner
    const a = -Math.PI / 2 + (index * Math.PI) / 5
    return `${n(cx + r * Math.cos(a))} ${n(cy + r * Math.sin(a))}`
  })
  return `M${points.join(' L')} Z`
}

export const wave = (y: number) =>
  `M-4 ${n(y)} q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0`

/** Three rows of wave low in the box, the sea every place stands in. */
export const SEA: readonly Stroke[] = [
  { d: wave(158), role: 'ambient' },
  { d: wave(172), role: 'ambient' },
  { d: wave(186), role: 'ambient' },
]

/** The soft ellipse an object throws on the table it sits on. */
export const shadow = (cx: number, cy: number, rx: number): Stroke => {
  return {
    d: `M${n(cx - rx)} ${n(cy)} q${n(rx)} 6 ${n(2 * rx)} 0`,
    role: 'ambient',
    dashed: true,
  }
}

/** A sheathed sword lying at the same angle as its two companions. */
export function sheath(dx: number, role: Role): readonly Stroke[] {
  const a = { x: 50 + dx, y: 158 }
  const b = { x: 100 + dx, y: 46 }
  // Perpendicular offset for the sheath's width.
  const o = { x: 4.6, y: 2 }
  const at = (t: number) => {
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }
  }
  const guard = at(0.3)
  const wrap1 = at(0.1)
  const wrap2 = at(0.19)
  return [
    { d: `M${n(a.x)} ${n(a.y)} L${n(b.x)} ${n(b.y)}`, role },
    {
      d: `M${n(a.x + o.x)} ${n(a.y + o.y)} L${n(b.x + o.x)} ${n(b.y + o.y)}`,
      role,
    },
    {
      d: `M${n(a.x)} ${n(a.y)} L${n(a.x + o.x)} ${n(a.y + o.y)} M${n(b.x)} ${n(b.y)} L${n(b.x + o.x)} ${n(b.y + o.y)}`,
      role,
    },
    {
      d: `M${n(guard.x - 5)} ${n(guard.y - 2.4)} L${n(guard.x + 9.6)} ${n(guard.y + 4.4)}`,
      role,
    },
    {
      d: `M${n(wrap1.x - 1)} ${n(wrap1.y)} l6.6 2.6 M${n(wrap2.x - 1)} ${n(wrap2.y)} l6.6 2.6`,
      role,
    },
  ]
}

/** A small ghost, the kind that follows an umbrella. */
export const ghost = (x: number, y: number, role: Role): readonly Stroke[] => {
  return [
    {
      d: `M${n(x)} ${n(y)} c0 -16 10 -22 16 -22 c6 0 16 6 16 22 v12 c-5 -4 -11 -4 -16 0 c-5 -4 -11 -4 -16 0z`,
      role,
    },
    {
      d: dots([
        [x + 11, y - 8],
        [x + 21, y - 8],
      ]),
      role,
    },
  ]
}

/** A sake cup, seen from the side. */
export const cup = (x: number, role: Role): Stroke => {
  return { d: `M${n(x)} 146 h20 l-3 12 h-14z`, role }
}

/**
 * One arm of a windmill with its sail, hub at (80, 80), pointing up and to
 * the right. The other three are the same stroke rotated about the hub.
 */
export const BLADE =
  'M80 80 L104 56 M84.2 75.8 L101.2 58.8 L106.2 63.7 L89.2 80.7 Z'

/** A house front: walls, a pitched roof, a door. */
export const house = (x: number, w: number, top: number, ridge: number) =>
  `M${n(x)} 150 V${n(top)} h${n(w)} V150 M${n(x - 4)} ${n(top)} L${n(x + w / 2)} ${n(ridge)} L${n(x + w + 4)} ${n(top)} M${n(x + w / 2 - 4)} 150 V${n(top + 16)} h8 V150`

/** A hexagonal cell of the lattice behind the dome. */
export const cell = (x: number, y: number) =>
  `M${n(x)} ${n(y)} l10 -6 l10 6 v12 l-10 6 l-10 -6z`
