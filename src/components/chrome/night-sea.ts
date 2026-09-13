import { dots } from '~/lib/svg/primitives'

/**
 * The night sea of the fold drawing, in the same line as the record drawings
 * but composed in a box ten times as wide: a horizon, a caravel under sail
 * right of centre, a course that leaves her and runs off the right edge, a
 * thin moon and a scatter of stars.
 *
 * It is data for the same reason every other drawing is: `SeaChartHero` owns
 * the `<svg>`, the fog gradient and the ink, and nothing about where a line
 * goes is written in JSX. Coordinates here are in the box below, not the
 * 160x200 of `ART_VIEWBOX`, so the primitives that assume that box do not
 * apply — only `dots`, which takes its points as given.
 */

/**
 * Wide enough that a phone's 4:3 crop of it still shows the ship. The drawing
 * is cropped to whatever frame it is given rather than squashed, so nothing
 * may depend on the aspect ratio holding.
 */
export const SEA_CHART_VIEWBOX = '0 0 1600 560'

/**
 * The four stars the line joins, in the order it joins them. They are stars
 * first: the same points are dotted with the rest, so the constellation is a
 * line drawn between stars that are there anyway, not a shape of its own.
 */
const CONSTELLATION_POINTS = [
  [640, 118],
  [684, 96],
  [732, 108],
  [770, 76],
] as const

// Loose stars, high and to the left of the constellation.
const EARLY_STARS = [
  [180, 90],
  [260, 150],
  [420, 60],
  [700, 110],
  [880, 60],
  [960, 170],
] as const

// Loose stars around the moon, plus two low ones that keep the corners from
// reading as empty at a wide crop.
const LATE_STARS = [
  [1240, 200],
  [1480, 130],
  [1540, 60],
  [120, 210],
  [1440, 250],
] as const

/** Every star as a zero-length stroke, so the sky is one path. */
export const STARS = dots([
  ...EARLY_STARS,
  ...CONSTELLATION_POINTS,
  ...LATE_STARS,
])

/** The line joining `CONSTELLATION_POINTS`, drawn in the muted ink. */
export const CONSTELLATION = `M${CONSTELLATION_POINTS.map(
  ([x, y]) => `${String(x)} ${String(y)}`,
).join(' L')}`

/** A crescent: one disc with a second bitten out of it, never a full moon. */
export const MOON = 'M1400 70 a76 76 0 1 0 0 152 a60 60 0 1 1 0 -152z'

/** Edge to edge, and the one line that says which way is up. */
export const HORIZON = 'M0 380 H1600'

/**
 * Three rows of swell under the horizon, each offset from the one above so
 * the crests do not line up into a grid. Thirty repeats is enough to cross
 * the box at any crop.
 */
export const WAVES = [420, 462, 508]
  .map((y, index) => {
    return `M${String(-40 + index * 30)} ${String(y)} ${Array.from(
      { length: 30 },
      () => 'q30 -10 60 0',
    ).join(' ')}`
  })
  .join(' ')

/**
 * Where the caravel sits and how big she is. She is drawn about her own
 * waterline at the origin, so this is the only place her position is stated.
 */
export const CARAVEL_AT = 'translate(940 380) scale(1.45)'

/** Hull, deck line and wale. */
export const CARAVEL_HULL =
  'M-58 -2 L-48 30 Q0 48 48 30 L58 -2 M-58 -2 H58 M-44 16 Q0 30 44 16'

/** Mast, yard and the pennant at the masthead. */
export const CARAVEL_MAST = 'M0 -2 V-84 M-28 -72 H28 M0 -84 l16 6 l-16 6'

/** The one shape on the ship that takes the route gold: a sail, full. */
export const CARAVEL_SAIL = 'M-26 -70 Q0 -78 26 -70 L30 -20 Q0 -10 -30 -20 Z'

/** The curl at the bow, the only flourish the drawing allows itself. */
export const CARAVEL_FIGUREHEAD =
  'M-58 -2 C-70 -4 -74 -16 -70 -26 C-66 -34 -56 -32 -54 -24 C-52 -18 -58 -14 -60 -18 M-70 -26 q-8 -4 -4 -12'

/** Leaves the ship level with her waterline and rises into the fog. */
export const COURSE = 'M1030 380 C1120 380 1200 340 1290 346 S1440 380 1600 330'

/**
 * The band the fog gradient is painted over: the right third plus the width
 * of the ship, so the course is already fading where it passes her.
 */
export const FOG_BAND = { height: 560, width: 600, x: 1000, y: 0 }
