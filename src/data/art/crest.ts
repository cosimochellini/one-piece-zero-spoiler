import { circle } from './primitives'

/**
 * The seal a character's drawing is set into, drawn once and shared by every
 * character so the featured drawings read as one set of emblems rather than a
 * row of illustrations. `CharacterCrest` owns the `<svg>` and the ink; which
 * line goes where is here.
 *
 * Coordinates are in the seal's own 200-square, not the 160x200 of
 * `ART_VIEWBOX`, and are rounded finer than a record drawing's because a tick
 * at 11.25 degrees lands between tenths.
 */

/** A square, so the seal is a circle at any size the page gives it. */
export const CREST_VIEWBOX = '0 0 200 200'

const CENTRE = 100

const n = (value: number): string => String(Math.round(value * 100) / 100)

type TicksOptions = {
  readonly count: number
  /** How far in the tick starts, measured from the centre of the seal. */
  readonly inner: number
  readonly outer: number
  /** Drops every n-th tick, index 0 included; `0` draws them all. */
  readonly skip?: number
}

/**
 * One radial tick per step around the seal, between two radii, as a single
 * path. Taking the options by name rather than in a row keeps `inner` and
 * `outer` from being read in the wrong order.
 */
function ticks({ count, inner, outer, skip = 0 }: TicksOptions): string {
  return Array.from({ length: count }, (_, index) => {
    if (skip > 0 && index % skip === 0) {
      return ''
    }
    const a = -Math.PI / 2 + (index * 2 * Math.PI) / count
    const cos = Math.cos(a)
    const sin = Math.sin(a)
    return `M${n(CENTRE + inner * cos)} ${n(CENTRE + inner * sin)} L${n(CENTRE + outer * cos)} ${n(CENTRE + outer * sin)}`
  })
    .filter((segment) => segment !== '')
    .join(' ')
}

/** The outer ring, and the one line that takes the character's colour. */
export const CREST_RING = circle(CENTRE, CENTRE, 94)

/** Dashed, and the radius the drawing inside has to fit within. */
export const CREST_INNER_RING = circle(CENTRE, CENTRE, 82)

/**
 * Thirty-two ticks with the four cardinal ones left out, so the compass card
 * reads as a bezel and the cardinals can be drawn over the gaps in colour.
 */
export const CREST_BEZEL = ticks({ count: 32, inner: 86, outer: 90, skip: 8 })

/** Longer than the minor ticks at both ends, and drawn in the colour. */
export const CREST_CARDINALS = ticks({ count: 4, inner: 84, outer: 92 })

/**
 * The 4:5 box the record drawing sits in, inscribed in the inner ring: a
 * 100x125 box has a half-diagonal of 80, inside the 82 of the dashed ring, so
 * a drawing that fills its corners still clears the seal.
 */
export const CREST_ART_BOX = { height: 125, width: 100, x: 50, y: 37.5 }
