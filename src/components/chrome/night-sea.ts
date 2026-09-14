import { circle, dots } from '~/lib/svg/primitives'

/**
 * The night sea of the fold drawing, in the same line as the record drawings
 * but composed in a box ten times as wide: a horizon, the Thousand Sunny under
 * sail right of centre, a course that leaves her and runs off the right edge,
 * a thin moon and a scatter of stars.
 *
 * The ship is the archive's own `thousand-sunny` drawing translated into this
 * box rather than a second one drawn from scratch, so the fold and the record
 * card are the same ship: the same hull, the same sail, and the same answer to
 * how you draw a lion figurehead without drawing a face — a disc with rays,
 * read as a mane and as a sun.
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
  // Was at (956, 240), which the larger ship put inside her own sail.
  [964, 22],
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
  // Was at (900, 214): close enough to the crow's nest to read as a lamp hung
  // on it, and a pulsing one at that.
  [1040, 260],
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
  'M468 380 q44 -30 86 -8 q26 -16 54 8 M632 380 q38 -24 72 -4 q22 -12 48 4'

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
 * Where the ship sits and how big she is. She is drawn about her own waterline
 * at the origin, so this is the only place her position is stated.
 *
 * She is the archive's `thousand-sunny` redrawn for this box rather than
 * scaled up from it. At ten times the size a 2px stroke stops carrying the
 * same weight and an unfilled outline stops reading as a solid thing: the
 * swell was crossing the inside of the hull and the stars were showing
 * through the canvas. So the hull, the sail, the crow's nest and the lion are
 * filled with the surface colour here, the way the fog band already is, and
 * the sea passes behind her. What the fold and the record card still share is
 * the reading the archive settled on — a lion figurehead as a disc with a
 * mane of rays, which is a mane and a sun at once and is never a face.
 */
export const SUNNY_AT = 'translate(940 380) scale(1.8)'

/**
 * Hull, from the stem to a sheer that rises aft. One closed path, because it
 * is filled: the outline and the surface are the same shape.
 */
export const SUNNY_HULL = 'M-50 -2 L44 -6 L66 -18 L60 30 Q8 48 -42 30 Z'

/** The bulwark, in the ambient ink: it is on the hull, not of it. */
export const SUNNY_BULWARK = 'M-44 6 L52 2'

/** The wale, lower down and on the same terms. */
export const SUNNY_WALE = 'M-38 16 Q8 28 50 16'

/**
 * Mast, yard and the pennant at the masthead.
 *
 * One line from the deck to the masthead. It is drawn before the sail and the
 * hull, which are filled, so what shows of it is what a mast actually shows:
 * a stub under the foot of the canvas and the topmast above the yard.
 */
export const SUNNY_MAST = 'M0 -2 V-118 M-30 -84 H30 M0 -118 l16 6 l-16 6'

/** A sail, full, and one of the two shapes that take the route gold. */
export const SUNNY_SAIL = 'M-28 -74 Q0 -82 28 -74 L32 -20 Q0 -10 -32 -20 Z'

/** The crow's nest high on the topmast. */
export const SUNNY_NEST = circle(0, -96, 10)

/**
 * The lion at the prow, sat on the foredeck so the hull carries her, drawn as
 * the archive draws her: a disc, and a mane of rays swept forward from it.
 *
 * The reason it is a disc and not a head is a rule rather than a style — no
 * drawing on this site has a face — and it is the reading the record card
 * uses, so a reader who has seen one recognises the other.
 */
export const SUNNY_LION = circle(-48, -16, 15)

/**
 * The rays of the mane. Each one starts on the disc's rim rather than at its
 * centre, because the disc is filled: a ray written from the middle is a ray
 * the lion paints over. None of them reaches the water or the canvas.
 */
export const SUNNY_MANE =
  'M-63 -16 h-16 M-59 -27 l-11 -11 M-48 -31 v-17 M-37 -27 l6 -6 M-60 -7 l-9 5'

/**
 * The light the ship's lantern throws on the water: four broken strokes
 * widening toward the reader, the first of them clear of the keel. It is the
 * only
 * gold below the horizon besides the course, a hairline and dashed, so the
 * accent stays a signal rather than becoming a surface.
 */
export const LANTERN_PATH =
  'M900 462 h96 M880 488 h136 M856 512 h180 M830 540 h228'

/** Leaves the ship level with her waterline and rises into the fog. */
export const COURSE = 'M1066 380 C1150 380 1225 340 1310 346 S1450 380 1600 330'

/**
 * The band the fog gradient is painted over: the right third plus the width
 * of the ship, so the course is already fading where it passes her.
 */
export const FOG_BAND = { height: 560, width: 600, x: 1000, y: 0 }
