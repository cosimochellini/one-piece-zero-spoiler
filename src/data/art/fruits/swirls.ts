import { BODY_CX, BODY_CY, point } from '~/data/art/fruits/units'

/**
 * The mark that makes a drawing a devil fruit rather than an apple.
 *
 * Four families, and every one of them is sized off the body's own radii
 * rather than off the box, so a swirl can never break the skin of the fruit
 * it is drawn on however wide or tall that fruit is. The furthest any of them
 * reaches is 0.72 of a radius, which the generator's test holds against the
 * body's ellipse for every one of the drawings.
 */

/** Which of the four marks a fruit wears. */
export type SwirlFamily = 'scales' | 'spiral' | 'waves' | 'whorls'

/**
 * How far out a spiral reaches, as a fraction of the shorter radius.
 *
 * A spiral's ceiling and nobody else's: the other three families each work
 * their reach out of the radii themselves, and the furthest any of the four
 * goes is `waves` at 0.72 of a radius. What holds all of them inside the body
 * is the generator's test, which walks every mark it can grow against the
 * body's own ellipse — not this number.
 */
const SPREAD = 0.55

/** Where a spiral starts, so two fruits of the same family are not the same. */
const TILT = 37

/** Segments a spiral is drawn with. Round joins make them read as a curve. */
const SAMPLES = 24

/** Turns a spiral takes before it reaches the rim. */
const TURNS = [2.25, 2.75, 3.25]

/** The circle constant: four cubics of this reach approximate a ring. */
const KAPPA = 0.5523

const RADIANS = Math.PI / 180

/**
 * One closed ring, as four absolute cubics rather than an arc command.
 *
 * `circle` in `~/lib/svg/primitives` writes a relative arc, and a relative
 * command in a fruit would defeat the generator's own bounds test, which
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

/** One coil from the middle of the fruit out to 0.55 of its radii. */
function spiral(rx: number, ry: number, grain: number): string {
  const reach = SPREAD * Math.min(rx, ry)
  const start = grain * TILT * RADIANS
  const turns = TURNS[grain % TURNS.length] ?? TURNS[0] ?? 2.75
  const steps = Array.from({ length: SAMPLES + 1 }, (_unused, step) => {
    const along = step / SAMPLES
    const radius = 2 + (reach - 2) * along
    const angle = start + 2 * Math.PI * turns * along

    return point(
      BODY_CX + radius * Math.cos(angle),
      BODY_CY + radius * Math.sin(angle) * (ry / rx),
    )
  })

  return steps.map((step, at) => (at === 0 ? `M${step}` : `L${step}`)).join(' ')
}

/** Three loops set around the middle, like knots in a grain. */
function whorls(rx: number, ry: number, grain: number): string {
  const start = grain * TILT * RADIANS
  const loop = 0.18 * Math.min(rx, ry)

  return [0, 1, 2]
    .map((turn) => {
      const angle = start + (turn * 2 * Math.PI) / 3

      return ring(
        BODY_CX + 0.4 * rx * Math.cos(angle),
        BODY_CY + 0.4 * ry * Math.sin(angle),
        loop,
      )
    })
    .join(' ')
}

/** Four bands across the body, each shorter as it nears the top or the foot. */
function waves(rx: number, ry: number, grain: number): string {
  const lift = grain % 2 === 0 ? 0.08 : -0.08

  return [-2, -1, 1, 2]
    .map((row) => {
      const off = row * 0.22
      const y = BODY_CY + off * ry
      const half = 0.8 * rx * Math.sqrt(1 - off * off)

      return [
        `M${point(BODY_CX - half, y)}`,
        `C${point(BODY_CX - half / 3, y - lift * ry)}`,
        point(BODY_CX + half / 3, y + lift * ry),
        point(BODY_CX + half, y),
      ].join(' ')
    })
    .join(' ')
}

/** Nine small arcs in three rows, each row offset half a step from the last. */
function scales(rx: number, ry: number, grain: number): string {
  const wide = 0.15 * rx
  const tall = 0.14 * ry

  return [0, 1, 2]
    .flatMap((row) => {
      const y = BODY_CY + (row - 1) * 0.26 * ry
      const shift = (row + grain) % 2 === 0 ? 0 : 0.5

      return [0, 1, 2].map((column) => {
        const x = BODY_CX + (column - 1 + shift) * 0.34 * rx

        return [
          `M${point(x - wide, y + tall)}`,
          `C${point(x - wide, y - tall)}`,
          point(x + wide, y - tall),
          point(x + wide, y + tall),
        ].join(' ')
      })
    })
    .join(' ')
}

const SWIRLS: Readonly<
  Record<SwirlFamily, (rx: number, ry: number, grain: number) => string>
> = { scales, spiral, waves, whorls }

/** The mark a fruit wears, in the one colour its drawing is allowed. */
export function swirlOf(
  family: SwirlFamily,
  radii: { readonly rx: number; readonly ry: number },
  grain: number,
): string {
  return SWIRLS[family](radii.rx, radii.ry, grain)
}
