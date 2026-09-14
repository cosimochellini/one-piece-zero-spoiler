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
type Profile = readonly (readonly [number, number])[]

const PROFILES: Readonly<Record<BodyFamily, Profile>> = {
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
  fraction: readonly [number, number],
  radii: readonly [number, number],
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
  const radii: readonly [number, number] = [rx, ry]
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
