/**
 * Five shared silhouettes, each a table of six control points down the
 * right side as fractions of the body's radii. Mirrored up the left side,
 * one profile gives a symmetrical outline.
 */

/** Which of the five silhouettes a fruit takes. */
export type BodyFamily = 'gourd' | 'heart' | 'oblong' | 'pear' | 'round'

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
 * The right side of a body as the points along it, from the crown down to the
 * foot, each as fractions of its radii: the profile's outline, read at
 * `steps` even points along each of its two cubics.
 */
export function sideOf(family: BodyFamily, steps = STEPS): [number, number][] {
  const profile = PROFILES[family]
  const on = (index: number): [number, number] => profile[index] ?? [0, 1]
  const cubics: [number, number][][] = [
    [[0, -1], on(0), on(1), on(2)],
    [on(2), on(3), on(4), on(5)],
  ]

  return cubics.flatMap((cubic) => {
    return Array.from({ length: steps + 1 }, (_unused, step) =>
      bezier(cubic, step / steps),
    )
  })
}

/**
 * How far the right side of a body reaches at height `y`, both as fractions
 * of its radii. It is read off the profile's outline, which on a pear or
 * a gourd runs well inside the ellipse its radii describe. Above the top
 * or below the foot the side never crosses `y`, so the width there is 0.
 */
export function widthAt(family: BodyFamily, y: number): number {
  const side = sideOf(family)
  let width = 0

  for (const [index, [x1, y1]] of side.entries()) {
    const [x0, y0] = side[index - 1] ?? [x1, y1]

    if (y0 !== y1 && (y0 - y) * (y1 - y) <= 0) {
      width = Math.max(width, x0 + ((x1 - x0) * (y - y0)) / (y1 - y0))
    }
  }

  return width
}
