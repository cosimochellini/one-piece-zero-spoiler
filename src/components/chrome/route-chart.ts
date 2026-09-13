/**
 * The route itself, drawn: the stretch of line between two waypoints and the
 * compass that marks the reader's own position on it. `RouteChart` owns the
 * `<svg>`, the ink and the transitions; where the line bows is here.
 *
 * These coordinates are in a 64x100 cell that is stretched to whatever height
 * a row needs (`preserveAspectRatio="none"`), so only the proportions along
 * each axis mean anything — a circle drawn in this box would come out an
 * ellipse, which is why the waypoint mark is a separate element.
 */

/** Which side the stretch bows to; it alternates row by row. */
export type Bow = 'left' | 'right'

const SEGMENT_BOX = 64

/**
 * Enters and leaves at the centre of the cell with a vertical tangent, so
 * consecutive stretches join without a kink, and bows to one side in between.
 */
const bow = (x: number): string =>
  `M32 0 C32 25 ${String(x)} 25 ${String(x)} 50 C${String(x)} 75 32 75 32 100`

/** The cell one stretch of route is drawn in, stretched to the row's height. */
export const SEGMENT_VIEWBOX = `0 0 ${String(SEGMENT_BOX)} 100`

/**
 * The two stretches, at 14/64 and 50/64 of the cell. The waypoint marks are
 * placed at the same two fractions in CSS, so a mark sits on its line.
 */
export const SEGMENT: Readonly<Record<Bow, string>> = {
  left: bow(14),
  right: bow(50),
}

/** Above the compass, and gold once the reader has set a bookmark. */
export const HORIZON_ABOVE = 'M32 0 V50'

/** Below the compass, and always dashed: everything past here is under fog. */
export const HORIZON_BELOW = 'M32 50 V100'

/** A square, and the one drawing on the chart that is never stretched. */
export const COMPASS_VIEWBOX = '0 0 32 32'

/** Filled with the page ground, so the route does not show through it. */
export const COMPASS_RING = { cx: 16, cy: 16, r: 13 }

/** A four-point star, hand-drawn: long north–south, the same east–west. */
export const COMPASS_STAR =
  'M16 4 L18.4 13.6 L28 16 L18.4 18.4 L16 28 L13.6 18.4 L4 16 L13.6 13.6 Z'
