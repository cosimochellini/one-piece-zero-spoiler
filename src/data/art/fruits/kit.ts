import { type LeafForm, leafPath, stemPath } from '~/data/art/fruits/parts'
import { type BodyFamily, sideOf, widthAt } from '~/data/art/fruits/shape'
import { BODY_CX, point } from '~/data/art/fruits/units'
import type { Stroke } from '~/data/art/stroke'

/**
 * The body kit every fruit drawn as fruit + power is set on (#461).
 *
 * A grown fruit is a flat outline wearing a mark. A kit fruit is a solid one:
 * seen a little from above, so the rim of the dimple its stalk sits in shows,
 * with a highlight on the near shoulder, the far side turning away into
 * hatching and a skin of curls. The power is drawn on top of that, as the
 * only accent, acting on the fruit itself.
 *
 * Six bodies, five of them the generator's own silhouettes, so a kit fruit
 * and a grown one keep the same shapes. The sixth, segmented, is the round
 * one with its ribs drawn in. Every body shares the same radii, so the sheet
 * stays one sheet.
 */

/** Which of the six bodies a kit fruit is set on. */
export type KitFamily =
  'gourd' | 'heart' | 'oblong' | 'pear' | 'round' | 'segmented'

/** A body in the box: its silhouette and how far down the box it sits. */
export interface Body {
  cy: number
  family: KitFamily
}

/** A point in the drawing box. */
export type Point = [number, number]

/** Half the width and half the height of every kit body. */
const KIT_RX = 44
const KIT_RY = 46

/** Points read along each cubic of a side when drawing an outline. */
const SIDE_STEPS = 12

/** How far in from the rim the highlight runs. */
const SHINE_INSET = 0.78

const DEGREES = Math.PI / 180

/** The generator's silhouette a kit body is drawn with. */
function silhouetteOf(family: KitFamily): BodyFamily {
  return family === 'segmented' ? 'round' : family
}

/** Half the width of a body at a height in the box, 0 above or below it. */
export function halfWidth(body: Body, y: number): number {
  return widthAt(silhouetteOf(body.family), (y - body.cy) / KIT_RY) * KIT_RX
}

/** The top of a body, where its stalk goes in. */
export function crownY(body: Body): number {
  return body.cy - KIT_RY
}

/** Points joined into one line, closed when asked. */
export function polyline(points: string[], closed = false): string {
  const line = points.map((step, at) => (at === 0 ? `M${step}` : `L${step}`))

  return (closed ? [...line, 'Z'] : line).join(' ')
}

/** How far a curl winds before it reaches its rim. Nearly two full turns. */
const CURL_TURNS = 1.9

/** Segments a curl is drawn with; round joins make them read as a curve. */
const CURL_STEPS = 22

/** Where a curl starts, so the eye reads a spiral and not a comma. */
const CURL_TILT = 0.6

/**
 * One curl of skin, wound out from a point.
 *
 * The mark a devil fruit is known by is not one spiral but a skin covered in
 * them, at every size and winding both ways. A negative radius winds the
 * other way round, which is what keeps ten of them on one fruit from reading
 * as ten copies of one stamp.
 *
 * Sampled rather than written as arcs: an arc command is relative, and a
 * relative command in a fruit defeats the bounds test that reads the numbers
 * in a path as coordinates.
 */
export function curl(cx: number, cy: number, r: number): string {
  const way = r < 0 ? -1 : 1
  const reach = Math.abs(r)
  const steps = Array.from({ length: CURL_STEPS + 1 }, (_unused, at) => {
    const along = at / CURL_STEPS
    const angle = way * (CURL_TILT + CURL_TURNS * 2 * Math.PI * along)

    return point(
      cx + reach * along * Math.cos(angle),
      cy + reach * along * Math.sin(angle),
    )
  })

  return polyline(steps)
}

/** A point of a silhouette, as fractions of the radii, placed in the box. */
function placed(body: Body, [x, y]: Point, way: number): Point {
  return [BODY_CX + way * x * KIT_RX, body.cy + y * KIT_RY]
}

/** Every point of a body's outline, clockwise from the crown and back. */
function rimOf(body: Body): Point[] {
  const side = sideOf(silhouetteOf(body.family), SIDE_STEPS)
  const right = side.map((fraction) => placed(body, fraction, 1))
  const left = side.toReversed().map((fraction) => placed(body, fraction, -1))

  return [...right, ...left.slice(1, -1)]
}

/**
 * A body's outline, or only the stretches of it where `keep` holds: the rest
 * is where the power has the fruit, sunk in a cloud, broken open, bitten.
 */
export function outline(
  body: Body,
  keep: (x: number, y: number) => boolean = () => true,
): string {
  const rim = rimOf(body)
  const gap = rim.findIndex(([x, y]) => !keep(x, y))

  if (gap === -1) {
    return polyline(
      rim.map(([x, y]) => point(x, y)),
      true,
    )
  }
  const runs: string[][] = [[]]
  const walk = (points: Point[]): void => {
    for (const [x, y] of points) {
      if (keep(x, y)) {
        runs.at(-1)?.push(point(x, y))
      } else if (runs.at(-1)?.length !== 0) {
        runs.push([])
      }
    }
  }

  // Walk the ring from a point that is left out, so no run is cut in two
  // where the ring starts.
  walk(rim.slice(gap))
  walk(rim.slice(0, gap))

  const lines: string[] = []

  for (const run of runs) {
    if (run.length > 1) {
      lines.push(polyline(run))
    }
  }

  return lines.join(' ')
}

/** The rim of the dimple at the crown, which is what says "seen from above". */
export function crown(body: Body): Stroke {
  const top = crownY(body)
  const half = Math.min(13, halfWidth(body, top + 6) * 0.8)

  return {
    d: [
      `M${point(BODY_CX - half, top + 3)}`,
      `C${point(BODY_CX - half * 0.6, top + 9)}`,
      point(BODY_CX + half * 0.6, top + 9),
      point(BODY_CX + half, top + 3),
    ].join(' '),
    role: 'soft',
  }
}

/** A highlight on the near shoulder, set in from the rim. */
export function shine(body: Body): Stroke {
  const points: string[] = []

  for (const [x, y] of rimOf(body)) {
    const angle = (Math.atan2(y - body.cy, x - BODY_CX) / DEGREES + 360) % 360

    if (angle >= 200 && angle <= 242) {
      points.push(
        point(
          BODY_CX + (x - BODY_CX) * SHINE_INSET,
          body.cy + (y - body.cy) * SHINE_INSET,
        ),
      )
    }
  }

  // Drawn the other way round from the rim, from the shoulder down.
  return { d: polyline(points.toReversed()), role: 'soft' }
}

/** Short diagonals inside the far side, at heights in the box. */
export function hatching(body: Body, heights: number[]): Stroke {
  return {
    d: heights
      .map((y) => {
        const x = BODY_CX + halfWidth(body, y) - 3

        return `M${point(x, y)} L${point(x - 9, y - 9)}`
      })
      .join(' '),
    role: 'ambient',
  }
}

/** The ribs of the segmented body, following its outline down the front. */
export function ribs(body: Body): Stroke {
  const top = crownY(body) + 8
  const rib = (way: number): string => {
    return polyline(
      Array.from({ length: 13 }, (_unused, at) => {
        const y = top + ((KIT_RY * 2 - 14) * at) / 12

        return point(BODY_CX + way * 0.5 * halfWidth(body, y), y)
      }),
    )
  }

  return { d: `${rib(-1)} ${rib(1)}`, role: 'soft' }
}

/** The stalk out of the dimple, and its leaf. */
export function sprout(
  body: Body,
  lean: number,
  leaf: LeafForm,
): [Stroke, Stroke] {
  const stalk = { baseY: crownY(body) + 6, lean, rise: 20 }

  return [
    { d: stemPath('straight', stalk) },
    { d: leafPath(leaf, stalk, 4), role: 'soft' },
  ]
}

/** Curls of skin, each a stroke of its own. */
export function skin(curls: [number, number, number][]): Stroke[] {
  return curls.map(([x, y, r]) => ({ d: curl(x, y, r), role: 'soft' }))
}

/** How far a billow's spans bow out, as a share of their length. */
const BOW = 0.42

/**
 * A billowing line through points: each span bows out to the left of the
 * way it is drawn, so a shape drawn clockwise puffs outwards.
 */
export function billow(anchors: Point[]): string {
  const parts: string[] = []
  let from: Point | undefined

  for (const to of anchors) {
    if (from === undefined) {
      parts.push(`M${point(...to)}`)
    } else {
      const [dx, dy] = [to[0] - from[0], to[1] - from[1]]
      const [nx, ny] = [dy * BOW, -dx * BOW]

      parts.push(
        `C${point(from[0] + dx * 0.1 + nx, from[1] + dy * 0.1 + ny)}`,
        point(from[0] + dx * 0.9 + nx, from[1] + dy * 0.9 + ny),
        point(...to),
      )
    }
    from = to
  }

  return parts.join(' ')
}

/** A point on a body's rim at a height, on the right (1) or the left (-1). */
export function onRim(body: Body, y: number, way: number): Point {
  return [BODY_CX + way * halfWidth(body, y), y]
}

/** What grows out of a shoulder: the rim heights it leaves and comes back at. */
export interface Growth {
  from: number
  to: number
  /** Cubic points as `[dx, y]` off the middle; the last cubic ends at `to`. */
  through: Point[]
}

/**
 * A shape grown out of the shoulder, on the right (1) or mirrored to the
 * left (-1): it leaves the rim, runs through its cubics and comes back to
 * the rim, so it comes out of the skin rather than resting on it. Horns and
 * wings, what a Zoan grows.
 */
export function grown(body: Body, way: number, growth: Growth): string {
  const ends = [
    ...growth.through.map(([dx, y]) => point(BODY_CX + way * dx, y)),
    point(...onRim(body, growth.to, way)),
  ]
  const cubics = Array.from(
    { length: ends.length / 3 },
    (_unused, at) => `C${ends.slice(at * 3, at * 3 + 3).join(' ')}`,
  )

  return [`M${point(...onRim(body, growth.from, way))}`, ...cubics].join(' ')
}
