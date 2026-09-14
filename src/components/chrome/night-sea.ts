import { dots } from '~/lib/svg/primitives'

/**
 * The night sea of the fold drawing: a full moon low over the water and the
 * Thousand Sunny crossing it in silhouette, a course that leaves her bow and
 * runs off into fog, the moon's light broken on the swell, and a scatter of
 * stars kept clear of the disc.
 *
 * The ship is the one shape on the site drawn as a solid rather than as a
 * stroke list. A ship the size of a headline drawn in 2px outline read as a
 * diagram of a ship; a silhouette cut out of the moon reads as the ship. Her
 * one line of ink is a hairline of the route gold around her profile, and it
 * is the only gold she takes.
 *
 * It is data for the same reason every other drawing is: `SeaChartHero` and
 * its parts own the `<svg>`, the gradients and the ink, and nothing about
 * where a line goes is written in JSX. Coordinates here are in the box below,
 * not the 160x200 of `ART_VIEWBOX`, so the primitives that assume that box do
 * not apply — only `dots`, which takes its points as given.
 *
 * The box is cropped rather than squashed, and the crop takes the sides: at
 * the narrowest frame the reader sees x 302 to 1298 and never less. Every
 * shape that has to be seen, and the whole travel of every shape that moves,
 * is inside that band. What sits outside it is the reward for a wide screen.
 */

/**
 * Wide enough that a phone's 4:3 crop of it still shows the moon and the ship
 * whole. The drawing is cropped to whatever frame it is given rather than
 * squashed, so nothing may depend on the aspect ratio holding.
 */
export const SEA_CHART_VIEWBOX = '0 0 1600 560'

/**
 * The moon: a full disc, low, its lower edge under the horizon so it sits on
 * the water rather than in the sky. It stands right of centre so the headline,
 * set into the lower-left corner from 40rem up, never reaches it. It is the light source and the backdrop
 * at once — everything that has to be seen at a glance is cut out of it.
 */
export const MOON_DISC = { cx: 980, cy: 250, r: 220 }

/**
 * The soft bloom the disc sits in, painted with the page's overlay glow and
 * never with the accent: gold is a signal here, not a surface. It is drawn
 * first and the sea is painted over it, so the water takes no bloom.
 */
export const MOON_HALO = { cx: MOON_DISC.cx, cy: MOON_DISC.cy, r: 410 }

/** The sea as a surface: everything below the horizon, in the card paper. */
export const SEA_FILL = { height: 180, width: 1600, x: 0, y: 380 }

// Every star keeps clear of the disc: a point of light on the moon reads as
// a flaw in it. The nearest is a dozen units outside the rim.

/** Loose stars in the route gold, the ones a reader registers as points. */
export const STARS = dots([
  [180, 90],
  [260, 150],
  [420, 60],
  [640, 118],
  [684, 96],
  [1240, 200],
  [1480, 130],
  [1540, 60],
  [120, 210],
  [1440, 250],
  [560, 220],
])

/**
 * The faint field behind everything: the stars a reader registers as depth
 * rather than as points, drawn in the ambient ink at a hairline.
 */
export const DEEP_FIELD = dots([
  [318, 52],
  [352, 176],
  [388, 262],
  [442, 22],
  [502, 232],
  [524, 66],
  [568, 158],
  [604, 36],
  [642, 230],
  [790, 30],
  [1060, 30],
  [1180, 90],
  [1230, 300],
  [1222, 104],
  [1262, 168],
  [1300, 300],
])

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
  [760, 50],
  [1206, 140],
])

/** The third pair, a beat behind the second. */
export const BRIGHT_STARS_C = dots([
  [344, 118],
  [1250, 320],
])

/** A cross of light on the two brightest stars: the only flare the sky allows. */
export const STAR_FLARES = 'M566 78 v36 M548 96 h36 M1102 36 v36 M1084 54 h36'

/** Edge to edge, and the one line that says which way is up. */
export const HORIZON = 'M0 380 H1600'

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
 * The moon on the water: six broken strokes under the disc, narrow at the
 * horizon and widening toward the reader the way a reflection does. It is the
 * only gold below the horizon besides the course, dashed so the accent stays a
 * signal rather than becoming a surface.
 */
export const GLITTER =
  'M950 404 h60 M934 428 h92 M916 452 h128 M896 478 h168 M872 506 h216 M844 536 h272'

/**
 * Where the ship sits and how big she is. She is drawn about her own waterline
 * at the origin, heading right, so this is the only place her position is
 * stated — and the tests read it from here rather than from the transform.
 */
export const SUNNY_PLACE = { scale: 0.92, x: 956, y: 380 }

/** `SUNNY_PLACE` as the one `transform` attribute the placing group carries. */
export const SUNNY_AT = `translate(${String(SUNNY_PLACE.x)} ${String(
  SUNNY_PLACE.y,
)}) scale(${String(SUNNY_PLACE.scale)})`

/**
 * The extents of the drawing about its origin, before `SUNNY_PLACE`. The bow
 * is the mane's forwardmost point, the stern the back of the paddle
 * housing, the masthead the foot of the pennant, the keel the lowest point the
 * hull's curve can reach (its control points, so a conservative bound).
 */
export const SUNNY_MARKS = {
  bow: [238.5, -96.8],
  keel: 22,
  masthead: [30, -310],
  stern: [-170, -30],
} as const

/**
 * The ship, less her sail and pennants: hull, paddle housing, the aft cabin
 * with its domed lookout, both masts, the yard, the crow's nest, and the lion
 * at her prow. Many closed subpaths in one `d`, every one wound the same way,
 * so under the default nonzero rule they union into one solid.
 *
 * The lion is the figurehead's own outline — the round head, the muzzle pushed
 * forward and low, the mane of eight flames curling aft — traced from a
 * side view and reduced to one closed curve, because a mane drawn from rules
 * kept reading as a cog or a flower and the real one reads as the Sunny at a
 * glance. In silhouette it has no eyes and no mouth, so the site's rule that
 * no drawing carries a face holds here too.
 */
export const SUNNY_BODY =
  'M-150 -92 L-92 -92 L-92 -64 L-60 -64 C-30 -38 0 -42 40 -42 C102 -42 120 -46 132 -62 Q160 -72 168 -76 C176 -56 172 -6 150 8 C108 22 -40 22 -110 8 C-130 4 -136 -2 -136 -4 C-156 -10 -156 -50 -150 -56 Z '
  + 'M-170 -30 a12 12 0 1 1 24 0 a12 12 0 1 1 -24 0 Z M-128 -122 L-120 -122 L-120 -90 L-128 -90 Z '
  + 'M-145 -124 L-103 -124 L-103 -120 L-145 -120 Z M-141 -122 a17 17 0 1 1 34 0 a17 17 0 1 1 -34 0 Z '
  + 'M27 -310 L33 -310 L33 -38 L27 -38 Z M-74.5 -180 L-69.5 -180 L-69.5 -60 L-74.5 -60 Z '
  + 'M10 -264 L50 -264 L50 -260 L10 -260 Z M12 -262 a18 18 0 1 1 36 0 a18 18 0 1 1 -36 0 Z '
  + 'M-34 -238 L94 -238 L94 -234 L-34 -234 Z '
  + 'M164 -161.7 L164.3 -167.9 C164.9 -167.9 168.6 -165.1 172.9 -161.4 C184 -151.3 191.7 -138.9 194.5 -126.9 C194.5 -125.4 195.1 -124.2 195.1 -124.2 C195.1 -123.9 196.3 -124.8 197.9 -126 C204.3 -131.9 209.3 -138.9 210.8 -145.4 C211.7 -148.8 211.4 -148.5 212.9 -146.9 C216.9 -143.3 220 -137.1 221.3 -130.9 C222.5 -123.6 220.6 -110.9 217.6 -104.2 C217.3 -103.2 216.9 -102 216.9 -100.2 L216.9 -97.7 L219.1 -96.8 C226.2 -93.4 232.7 -94 236.7 -98.3 L238.5 -100.2 L238.5 -96.8 C238.5 -77.1 225.9 -63.2 211.4 -66.9 C208.9 -67.5 208.9 -67.2 209.9 -65.4 C211.4 -59.8 216 -54.3 221.3 -50.9 C224 -49 224 -49 222.2 -47.5 C216 -42.9 207.4 -42.3 200.3 -45.7 C196.6 -47.2 192 -51.5 188.9 -55.8 C188 -57.4 188 -57.4 187.1 -55.5 C184.3 -50 178.2 -44.4 172.9 -42.9 C164.6 -40.1 150.8 -44.7 146.1 -51.5 L145.2 -52.7 L146.4 -53.4 C147.4 -53.7 148 -54.3 148.3 -54.3 C151.4 -55.5 156.9 -60.4 159.1 -64.1 C160.3 -66 161.2 -67.5 160.9 -67.5 C160.9 -67.5 160 -67.2 159.1 -66.9 C156 -66.3 148.9 -66 145.2 -66.9 C129.2 -70 117.8 -82 114.4 -98.9 C113.5 -103.2 113.5 -103.2 116 -101.4 C122.7 -96.1 131.4 -93.4 139.1 -94 C142.4 -94 142.4 -94.3 140.3 -95.2 C132 -99.5 124.3 -107.5 120.9 -115.9 C118.1 -122.6 117.2 -131.9 118.4 -140.8 C118.4 -142.6 118.7 -142.6 121.5 -140.2 C124.3 -137.7 127.4 -135.6 131.4 -132.8 C135.4 -130 138.1 -128.5 142.1 -126.9 C147.1 -124.5 151.4 -123.2 156.3 -122.6 L157.8 -122.6 L157.8 -126.3 C158.1 -130.3 158.8 -134.3 160.6 -139.9 C163.1 -149.1 163.7 -151.3 164 -161.7 Z'

/**
 * One sail, full, hung from the yard and bellied toward the bow. It is a
 * shape of its own rather than part of the body so it can breathe on its own
 * loop, about the yard it hangs from.
 */
export const SUNNY_SAILS =
  'M-28 -234 L88 -234 C108 -185.2 104 -130.4 90 -86 C59 -70 1 -70 -24 -86 C-16 -130.4 -18 -185.2 -28 -234 Z'

/** The two pennants, one per masthead, streaming aft to for'ard with the wind. */
export const SUNNY_FLAG =
  'M30 -310 L60 -303 L30 -296 Z M-72 -180 L-48 -174 L-72 -168 Z'

/** Leaves the ship level with her waterline and rises into the fog. */
export const COURSE = 'M1190 380 C1260 380 1330 340 1410 346 S1500 380 1600 330'

/**
 * The band the fog gradient is painted over: the right third, started past
 * the disc so the moon keeps a hard edge and only the course goes soft.
 */
export const FOG_BAND = { height: 560, width: 380, x: 1220, y: 0 }
