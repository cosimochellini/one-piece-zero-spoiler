/**
 * The chart frame a place's drawing is set into. Characters get a round seal
 * (`~/data/art/crest`); a place on a chart is a plate, so it gets a rectangle,
 * a graticule and a north mark. `PortPlate` owns the `<svg>` and the ink;
 * which line goes where is here.
 *
 * Coordinates are in the plate's own 200-square, not the 160x200 of
 * `ART_VIEWBOX`.
 */

/** A square, so a plate keeps its proportions in a grid of any width. */
export const PLATE_VIEWBOX = '0 0 200 200'

const SIDE = 200
// The frame, and the dashed rule inside it.
const OUTER = 12
const INSET = 22
const FAR = SIDE - OUTER
// A tick every 16 units, the way a chart's margin is divided into minutes of
// arc, starting far enough in that the first one clears the corner brackets.
const FIRST_TICK = 28
const TICK_STEP = 16
const TICK_COUNT = 10

/** The rule that takes the place's colour, and the edge of the chart. */
export const PLATE_FRAME = `M${String(OUTER)} ${String(OUTER)} H${String(FAR)} V${String(FAR)} H${String(OUTER)} Z`

/** Dashed, and the margin the drawing inside keeps clear of. */
export const PLATE_INNER = `M${String(INSET)} ${String(INSET)} H${String(SIDE - INSET)} V${String(SIDE - INSET)} H${String(INSET)} Z`

/** All four margins in one path, ticked inwards from the frame. */
export const PLATE_GRATICULE = Array.from(
  { length: TICK_COUNT },
  (_, index) => {
    const at = String(FIRST_TICK + index * TICK_STEP)
    return `M${at} ${String(OUTER)} v4 M${at} ${String(FAR)} v-4 M${String(OUTER)} ${at} h4 M${String(FAR)} ${at} h-4`
  },
).join(' ')

/**
 * Four L-shaped brackets outside the frame, the register marks of a printed
 * chart. They are the one thing on the plate that breaks its own margin.
 */
export const PLATE_CORNERS =
  'M4 20 V4 H20 M180 4 H196 V20 M196 180 V196 H180 M20 196 H4 V180'

/** Inside the top-right corner, and drawn only once a place is open. */
export const PLATE_NORTH = 'M170 40 V24 M166 29 L170 24 L174 29'

/**
 * The 4:5 box the record drawing sits in: 112 by 140 inside the dashed rule's
 * 156-square, so the waves at the foot of a drawing stop short of the frame.
 */
export const PLATE_ART_BOX = { height: 140, width: 112, x: 44, y: 30 }
