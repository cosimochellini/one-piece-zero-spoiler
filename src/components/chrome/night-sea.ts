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
export const SUNNY_PLACE = { scale: 0.98, x: 966, y: 380 }

/** `SUNNY_PLACE` as the one `transform` attribute the placing group carries. */
export const SUNNY_AT = `translate(${String(SUNNY_PLACE.x)} ${String(
  SUNNY_PLACE.y,
)}) scale(${String(SUNNY_PLACE.scale)})`

/**
 * The extents of the drawing about its origin, before `SUNNY_PLACE`. The bow
 * is the tip of the mane's forward flame, the stern the back of the paddle
 * housing, the masthead the foot of the pennant, the keel the lowest point the
 * hull's curve can reach (its control points, so a conservative bound).
 */
export const SUNNY_MARKS = {
  bow: [223.5, -147.1],
  keel: 22,
  masthead: [36, -310],
  stern: [-170, -30],
} as const

/**
 * The ship, less her sail and pennants: hull, paddle housing, the aft cabin
 * with its domed lookout, both masts, the yard, the crow's nest, and the lion
 * at her prow. Many closed subpaths in one `d`, every one wound the same way,
 * so under the default nonzero rule they union into one solid.
 *
 * The lion is drawn as the figurehead is: a round head with a muzzle pushed
 * forward and low, and a mane of seven broad flames that curl aft, shorter on
 * the side that faces the sail and parted where the muzzle comes through. In
 * silhouette it has no eyes and no mouth, so the site's rule that no drawing
 * carries a face holds here too.
 */
export const SUNNY_BODY =
  'M-150 -92 L-92 -92 L-92 -64 L-60 -64 C-30 -38 0 -42 40 -42 C96 -42 114 -46 126 -62 Q152 -72 160 -76 C168 -56 164 -6 142 8 C100 22 -40 22 -110 8 C-130 4 -136 -2 -136 -4 C-156 -10 -156 -50 -150 -56 Z '
  + 'M-170 -30 a12 12 0 1 1 24 0 a12 12 0 1 1 -24 0 Z M-128 -122 L-120 -122 L-120 -90 L-128 -90 Z '
  + 'M-145 -124 L-103 -124 L-103 -120 L-145 -120 Z M-141 -122 a17 17 0 1 1 34 0 a17 17 0 1 1 -34 0 Z '
  + 'M33 -310 L39 -310 L39 -38 L33 -38 Z M-74.5 -180 L-69.5 -180 L-69.5 -60 L-74.5 -60 Z '
  + 'M16 -264 L56 -264 L56 -260 L16 -260 Z M18 -262 a18 18 0 1 1 36 0 a18 18 0 1 1 -36 0 Z '
  + 'M-36 -238 L108 -238 L108 -234 L-36 -234 Z M138 -102 a32 32 0 1 1 64 0 a32 32 0 1 1 -64 0 Z '
  + 'M180.8 -88.6 a18 18 0 1 1 36 0 a18 18 0 1 1 -36 0 Z '
  + 'M194.7 -115.2 C201.5 -115.5 210.4 -137.8 223.5 -147.1 C231.5 -133.6 218.3 -94 197.9 -99.5 Z '
  + 'M183.2 -77.3 C183.5 -70.5 205.8 -61.6 215.1 -48.5 C201.6 -40.5 162 -53.7 167.5 -74.1 Z '
  + 'M161.9 -75.2 C157.6 -71 167 -52 164.6 -38.5 C150.8 -42 132.7 -75.3 148.5 -84.1 Z '
  + 'M145.3 -88.8 C140 -89.2 134.7 -70.8 125 -64.1 C118.2 -75.4 127.2 -109.1 142.1 -104.5 Z '
  + 'M143.2 -110.1 C139.5 -114.3 121.9 -104.9 109.7 -107.2 C113 -120.3 144.2 -138 152.1 -123.5 Z '
  + 'M156.8 -126.7 C156.7 -133.2 135.1 -141.4 126.4 -153.8 C139.4 -161.5 177.8 -149.2 172.5 -129.9 Z '
  + 'M178.1 -128.8 C182.8 -133.8 173.3 -155.9 176 -171.7 C191.1 -167.9 209.8 -130.6 191.5 -119.9 Z'
  + 'M-170 -30 a12 12 0 1 1 24 0 a12 12 0 1 1 -24 0 Z '
  + 'M-128 -122 L-120 -122 L-120 -90 L-128 -90 Z M-145 -124 L-103 -124 L-103 -120 L-145 -120 Z M-141 -122 a17 17 0 1 1 34 0 a17 17 0 1 1 -34 0 Z '
  + 'M37 -310 L43 -310 L43 -38 L37 -38 Z M-74.5 -180 L-69.5 -180 L-69.5 -60 L-74.5 -60 Z '
  + 'M20 -264 L60 -264 L60 -260 L20 -260 Z M22 -262 a18 18 0 1 1 36 0 a18 18 0 1 1 -36 0 Z '
  + 'M-38 -238 L118 -238 L118 -234 L-38 -234 Z '
  + 'M138 -100 a30 30 0 1 1 60 0 a30 30 0 1 1 -60 0 Z '
  + 'M195.8 -103.7 L220 -100 L195.8 -96.3 Z M193.9 -89.3 L213 -74 L190.2 -83 Z M185 -77.8 L194 -55 L178.7 -74.1 Z M171.7 -72.2 L168 -48 L164.3 -72.2 Z M157.3 -74.1 L142 -55 L151 -77.8 Z M145.8 -83 L123 -74 L142.1 -89.3 Z M140.2 -96.3 L116 -100 L140.2 -103.7 Z M142.1 -110.7 L123 -126 L145.8 -117 Z M151 -122.2 L142 -145 L157.3 -125.9 Z M164.3 -127.8 L168 -152 L171.7 -127.8 Z M178.7 -125.9 L194 -145 L185 -122.2 Z M190.2 -117 L213 -126 L193.9 -110.7 Z'

/**
 * One sail, full, hung from the yard and bellied toward the bow. It is a
 * shape of its own rather than part of the body so it can breathe on its own
 * loop, about the yard it hangs from.
 */
export const SUNNY_SAILS =
  'M-30 -234 L102 -234 C122 -185.2 118 -130.4 104 -86 C69 -70 3 -70 -26 -86 C-18 -130.4 -20 -185.2 -30 -234 Z'

/** The two pennants, one per masthead, streaming aft to for'ard with the wind. */
export const SUNNY_FLAG =
  'M36 -310 L66 -303 L36 -296 Z M-72 -180 L-48 -174 L-72 -168 Z'

/** Leaves the ship level with her waterline and rises into the fog. */
export const COURSE = 'M1190 380 C1260 380 1330 340 1410 346 S1500 380 1600 330'

/**
 * The band the fog gradient is painted over: the right third, started past
 * the disc so the moon keeps a hard edge and only the course goes soft.
 */
export const FOG_BAND = { height: 560, width: 380, x: 1220, y: 0 }
