/**
 * The frame every fruit is grown in, and the two things every part of one
 * needs: where the body sits, and how a coordinate is written.
 *
 * The radii are tables rather than free numbers because containment is a
 * proof here and not a hope: a seed cannot supply a radius, so the widest
 * fruit the generator can produce is known in advance and is inside the
 * drawing box with room to spare. The two tables are read with coprime
 * strides so a wide fruit is not automatically a tall one.
 */

/** The centre of every fruit body, in the 160x200 drawing box. */
export const BODY_CX = 80

/** How far down the box a fruit sits: low enough to leave room for the stem. */
export const BODY_CY = 112

/** Half-widths, widest 52: `80 + 52 = 132`, inside the box with 22 to spare. */
const RX = [34, 38, 41, 44, 47, 50, 52]

/** Half-heights, tallest 56: `112 + 56 = 168`, above the shadow at 178. */
const RY = [38, 42, 45, 48, 51, 54, 56]

/**
 * One decimal, like every other drawing in the archive. Written out rather
 * than imported from `~/lib/svg/primitives`, whose own rounder is private
 * too, and private here for the same reason: nothing outside this module
 * writes a coordinate.
 */
function round1(value: number): string {
  return String(Math.round(value * 10) / 10)
}

/** One absolute coordinate pair, as a path command takes it. */
export function point(x: number, y: number): string {
  return `${round1(x)} ${round1(y)}`
}

/** The body a grain grows: never wider than 52, never taller than 56. */
export function radiiFor(grain: number): {
  readonly rx: number
  readonly ry: number
} {
  return {
    rx: RX[grain % RX.length] ?? 44,
    ry: RY[(grain * 3 + 1) % RY.length] ?? 48,
  }
}
