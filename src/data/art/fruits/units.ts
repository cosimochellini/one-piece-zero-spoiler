/** Shared body coordinates and path formatting in the 160x200 drawing box. */

/** The centre of every fruit body, in the 160x200 drawing box. */
export const BODY_CX = 80

/** How far down the box a fruit sits: low enough to leave room for the stem. */
export const BODY_CY = 112

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
