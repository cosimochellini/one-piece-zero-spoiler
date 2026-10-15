import { point } from '~/data/art/fruits/units'

/** The circle constant: four cubics of this reach approximate a ring. */
const KAPPA = 0.5523

/**
 * One closed ring, as four absolute cubics rather than an arc command.
 *
 * `circle` in `~/lib/svg/primitives` writes a relative arc, and a relative
 * command in a fruit would defeat the fruit drawing bounds test, which
 * reads the numbers in a path as coordinates.
 */
export function ring(cx: number, cy: number, r: number): string {
  const k = KAPPA * r

  return [
    `M${point(cx + r, cy)}`,
    `C${point(cx + r, cy + k)} ${point(cx + k, cy + r)} ${point(cx, cy + r)}`,
    `C${point(cx - k, cy + r)} ${point(cx - r, cy + k)} ${point(cx - r, cy)}`,
    `C${point(cx - r, cy - k)} ${point(cx - k, cy - r)} ${point(cx, cy - r)}`,
    `C${point(cx + k, cy - r)} ${point(cx + r, cy - k)} ${point(cx + r, cy)}`,
    'Z',
  ].join(' ')
}
