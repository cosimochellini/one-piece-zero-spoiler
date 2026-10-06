import { BODY_CX, BODY_CY, point } from '~/data/art/fruits/units'

/**
 * The six silhouettes a fruit can take, and the one function that writes one.
 *
 * Six families would have been six near-identical path writers, which is six
 * copies of the same eight lines and the thing fallow's duplicate detector
 * exists to refuse. So a family is a table of six control points down the
 * right side, as fractions of the body's radii, and `lobed` walks any of them.
 * Mirroring the same six points back up the left side is what makes every
 * fruit symmetrical without a second table.
 */

/** Which of the six silhouettes a fruit takes. */
export type BodyFamily =
  'gourd' | 'heart' | 'oblong' | 'pear' | 'round' | 'star'

/**
 * Six points down the right side of a body, each as a fraction of `rx` and
 * `ry` from the centre. The last is the bottom of the body, so it is always
 * `[0, 1]`; every fraction is inside the unit circle, which is what puts a
 * whole silhouette inside its own radii.
 */
type Profile = [number, number][]

const PROFILES: Record<BodyFamily, Profile> = {
  // Nearly a circle: the plain fruit every other family is a departure from.
  round: [
    [0.62, -1],
    [1, -0.45],
    [1, 0],
    [1, 0.62],
    [0.58, 1],
    [0, 1],
  ],
  // A narrow shoulder over a wide seat.
  pear: [
    [0.34, -1],
    [0.44, -0.42],
    [0.42, -0.12],
    [0.46, 0.3],
    [1, 0.62],
    [0, 1],
  ],
  // Straight-sided, like a plum held the long way.
  oblong: [
    [0.45, -1],
    [0.86, -0.62],
    [0.92, 0],
    [0.86, 0.62],
    [0.45, 1],
    [0, 1],
  ],
  // Pinched at the waist: two bulbs, one above the other.
  gourd: [
    [0.5, -1],
    [0.72, -0.55],
    [0.44, -0.1],
    [0.62, 0.3],
    [1, 0.66],
    [0, 1],
  ],
  // Wide at the shoulder and drawn to a point at the foot.
  heart: [
    [0.86, -0.92],
    [1, -0.4],
    [0.92, 0],
    [0.7, 0.46],
    [0.36, 0.84],
    [0, 1],
  ],
  // Lobed: the outline steps in and out on its way down.
  star: [
    [0.7, -0.86],
    [0.52, -0.4],
    [1, -0.18],
    [0.6, 0.3],
    [0.86, 0.8],
    [0, 1],
  ],
}

/** One profile point in the drawing box, optionally mirrored to the left. */
function at(
  fraction: [number, number],
  radii: [number, number],
  side: number,
): string {
  return point(
    BODY_CX + side * fraction[0] * radii[0],
    BODY_CY + fraction[1] * radii[1],
  )
}

/**
 * The silhouette of one body: four cubics from the top, down the right side
 * to the foot, and back up the left side to where they started.
 *
 * Every coordinate is a control point or an end point inside the body's own
 * radii, and a cubic never leaves the hull of its control points, so the
 * whole outline is inside the box by construction and not by inspection.
 */
export function lobed(family: BodyFamily, rx: number, ry: number): string {
  const profile = PROFILES[family]
  const radii: [number, number] = [rx, ry]
  const on = (index: number, side: number): string =>
    at(profile[index] ?? [0, 1], radii, side)
  const top = point(BODY_CX, BODY_CY - ry)

  return [
    `M${top}`,
    `C${on(0, 1)} ${on(1, 1)} ${on(2, 1)}`,
    `C${on(3, 1)} ${on(4, 1)} ${on(5, 1)}`,
    `C${on(4, -1)} ${on(3, -1)} ${on(2, -1)}`,
    `C${on(1, -1)} ${on(0, -1)} ${top}`,
    'Z',
  ].join(' ')
}

/** Points read along each cubic of the right side when measuring a width. */
const STEPS = 32

/** One point of a cubic, `t` of the way along it from its first point. */
export function bezier(cubic: [number, number][], t: number): [number, number] {
  const weights = [
    (1 - t) ** 3,
    3 * (1 - t) ** 2 * t,
    3 * (1 - t) * t ** 2,
    t ** 3,
  ]
  const sum: [number, number] = [0, 0]

  for (const [index, [x, y]] of cubic.entries()) {
    sum[0] += (weights[index] ?? 0) * x
    sum[1] += (weights[index] ?? 0) * y
  }

  return sum
}

/**
 * How far the right side of a body reaches at height `y`, both as fractions
 * of its radii. It is read off the outline `lobed` draws, which on a pear or
 * a gourd runs well inside the ellipse its radii describe. Above the top
 * or below the foot the side never crosses `y`, so the width there is 0.
 */
export function widthAt(family: BodyFamily, y: number): number {
  const profile = PROFILES[family]
  const on = (index: number): [number, number] => profile[index] ?? [0, 1]
  const cubics: [number, number][][] = [
    [[0, -1], on(0), on(1), on(2)],
    [on(2), on(3), on(4), on(5)],
  ]
  const side: [number, number][] = []

  for (const cubic of cubics) {
    for (let step = 0; step <= STEPS; step++) {
      side.push(bezier(cubic, step / STEPS))
    }
  }
  let width = 0

  for (const [index, [x1, y1]] of side.entries()) {
    const [x0, y0] = side[index - 1] ?? [x1, y1]

    if (y0 !== y1 && (y0 - y) * (y1 - y) <= 0) {
      width = Math.max(width, x0 + ((x1 - x0) * (y - y0)) / (y1 - y0))
    }
  }

  return width
}
