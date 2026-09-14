import { circle, dots } from '~/lib/svg/primitives'

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
 * apply — only `dots` and `circle`, which take their points as given.
 *
 * The box is cropped rather than squashed, and the crop takes the sides: at
 * the narrowest frame the reader sees x 302 to 1298 and never less. Every
 * shape that has to be seen, and the whole travel of every shape that moves,
 * is inside that band. What sits outside it is the reward for a wide screen.
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

// The crescent's centre. It used to hang at x 1400, which a phone crops away
// entirely: the one light source in the drawing was a desktop-only shape.
const MOON_CX = 470
const MOON_CY = 136

/** A crescent: one disc with a second bitten out of it, never a full moon. */
export const MOON = 'M470 60 a76 76 0 1 0 0 152 a60 60 0 1 1 0 -152z'

/**
 * Three hairline rings widening away from the crescent. A drawing made of
 * lines says "this is the light in here" by drawing the light, so the glow is
 * ruled rather than blurred.
 */
export const MOON_RINGS = [90, 112, 138]
  .map((r) => circle(MOON_CX, MOON_CY, r))
  .join(' ')

/**
 * The soft bloom the rings sit in, painted with the page's overlay glow and
 * never with the accent: gold is a signal here, not a surface. The radius
 * stops short of the horizon so the light never spills onto the water.
 */
export const MOON_HALO = { cx: MOON_CX, cy: MOON_CY, r: 196 }

/**
 * The faint field behind everything. These are the stars a reader registers
 * as depth rather than as points, so they are drawn in the ambient ink at a
 * hairline. They keep clear of the crescent, which would otherwise read as
 * pitted.
 */
const DEEP_STARS = [
  [318, 52],
  [352, 176],
  [388, 262],
  [442, 22],
  [502, 232],
  [524, 66],
  [568, 158],
  [604, 36],
  [642, 230],
  [688, 62],
  [716, 190],
  [754, 132],
  [806, 44],
  [842, 216],
  [880, 150],
  [918, 84],
  [956, 240],
  [994, 120],
  [1032, 58],
  [1070, 200],
  [1108, 146],
  [1184, 232],
  [1222, 104],
  [1262, 168],
] as const

/** The deep field as one path, the way `STARS` is one path. */
export const DEEP_FIELD = dots(DEEP_STARS)

// The six stars that carry the light. They are three paths rather than one so
// each pair can breathe out of step with the others; a sky where everything
// pulses together is a sky that blinks.
/** The first pair of bright stars, the pair the flares belong to. */
export const BRIGHT_STARS_A = dots([
  [566, 96],
  [1102, 54],
])

/** The second pair, a beat behind the first. */
export const BRIGHT_STARS_B = dots([
  [784, 66],
  [1206, 140],
])

/** The third pair, a beat behind the second. */
export const BRIGHT_STARS_C = dots([
  [344, 118],
  [900, 214],
])

/** A cross of light on the two brightest stars: the only flare the sky allows. */
export const STAR_FLARES = 'M566 78 v36 M548 96 h36 M1102 36 v36 M1084 54 h36'

/** Edge to edge, and the one line that says which way is up. */
export const HORIZON = 'M0 380 H1600'

/**
 * Two low islands sitting on the horizon behind the ship, left of her so
 * nothing crosses her rigging. They are the distance: two strokes in the
 * ambient ink are enough to say the sea has a far side.
 */
export const FAR_ISLES =
  'M508 380 q44 -30 86 -8 q26 -16 54 8 M672 380 q38 -24 72 -4 q22 -12 48 4'

/**
 * One row of swell: thirty repeats of a crest exactly 60 units wide, started
 * at an offset so the crests of the rows never line up into a grid. Thirty
 * repeats run 1800 units, which is more than a period past either edge of the
 * widest crop — so a row can be slid one crest to the left forever and the
 * seam never comes into frame.
 */
function swell(y: number, offset: number): string {
  return `M${String(-40 + offset)} ${String(y)} ${Array.from(
    { length: 30 },
    () => 'q30 -10 60 0',
  ).join(' ')}`
}

/** The swell at the horizon, the slowest of the four. */
export const WAVE_FAR = swell(420, 0)

/** The swell between the horizon and the reader. */
export const WAVE_MID = swell(462, 30)

/** The swell nearest the reader of the three ruled rows. */
export const WAVE_NEAR = swell(508, 60)

/**
 * The foreground swell: twice the period of the others and cut off by the
 * bottom of the frame, which is what puts the reader in the water rather than
 * on the shore.
 */
export const WAVE_FORE = `M-60 528 ${Array.from(
  { length: 16 },
  () => 'q60 -18 120 0',
).join(' ')}`

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

/**
 * The light the ship's lantern throws on the water: five broken strokes
 * widening toward the reader, crossing every row of swell. It is the only
 * gold below the horizon besides the course, a hairline and dashed, so the
 * accent stays a signal rather than becoming a surface.
 */
export const LANTERN_PATH =
  'M916 404 h48 M902 432 h76 M886 464 h108 M868 500 h144 M848 540 h184'

/** Leaves the ship level with her waterline and rises into the fog. */
export const COURSE = 'M1030 380 C1120 380 1200 340 1290 346 S1440 380 1600 330'

/**
 * The band the fog gradient is painted over: the right third plus the width
 * of the ship, so the course is already fading where it passes her.
 */
export const FOG_BAND = { height: 560, width: 600, x: 1000, y: 0 }
