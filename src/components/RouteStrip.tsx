import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { tintOf } from '~/components/drawing'
import type { TintId } from '~/lib/view/records'
import { color, rule } from '~/styles/tokens.stylex'

/** What the strip needs to draw itself and to say what it is showing. */
export type RouteStripProps = {
  /**
   * How many waypoints the route has, and how many the reader has reached.
   * Counts rather than records: the strip draws dots, and sending it the
   * chart so it can call `length` on it would be the same waste in a smaller
   * costume.
   */
  readonly openCount: number
  readonly total: number
  /** Where this record sits on the route, zero-based. */
  readonly at: number
  /** What a screen reader hears instead of the dots. */
  readonly label: string
  /**
   * The current record's hue, or `null` under fog — so a covered record's
   * colour is not in the HTML. The server applies the guard.
   */
  readonly tint: null | TintId
}

// Half a step first: the horizon tick falls between two marks, so the strip
// is measured in halves and a step is two of them.
const HALF_STEP = 6
const STEP = HALF_STEP + HALF_STEP
const PAD = 8
const Y = 16
// How far the horizon tick reaches above and below the line.
const TICK_ARM = 7
// The ring around the current record, and the marks: the current one is drawn
// a hair larger so it reads as the subject even before the ring is noticed.
const RING_R = 7.5
const HERE_R = 4
const MARK_R = 3

/** Where the index-th waypoint sits along the strip. */
const markX = (index: number): number => PAD + STEP * index

/**
 * The route as one horizontal line of waypoints, with this record ringed in
 * its own colour.
 *
 * The same marks as the chart on the landing page: a gold stretch with filled
 * marks as far as the reader has sailed, a dashed stretch with hollow marks
 * beyond, and a short gold tick where the two meet. It is drawn from the same
 * two facts, the archive and the bookmark, so it is never wrong about either.
 */
export function RouteStrip({
  total,
  openCount,
  at,
  tint,
  label,
}: RouteStripProps): ReactElement {
  const ringHue = tint === null ? null : tintOf(tint)
  const width = PAD + STEP * (total - 1) + PAD
  // Between the last open mark and the first covered one; before the first
  // mark when nothing is open.
  const horizonX =
    openCount === 0 ? PAD - HALF_STEP : markX(openCount - 1) + HALF_STEP

  return (
    <svg
      aria-label={label}
      role="img"
      viewBox={`0 0 ${String(width)} 32`}
      {...stylex.props(styles.svg)}
    >
      {openCount > 1 && (
        <path
          d={`M${String(markX(0))} ${String(Y)} H${String(markX(openCount - 1))}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.lineOpen)}
        />
      )}
      {openCount < total && (
        <path
          d={`M${String(Math.max(markX(0), horizonX))} ${String(Y)} H${String(markX(total - 1))}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.lineCovered)}
        />
      )}
      {openCount < total && (
        <path
          d={`M${String(horizonX)} ${String(Y - TICK_ARM)} V${String(Y + TICK_ARM)}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.lineOpen)}
        />
      )}
      {Array.from({ length: total }, (_, index) => {
        return (
          // A fixed-length range that cannot reorder, so the index is the
          // key. It is also the only key available: a covered waypoint has no
          // id, because the id is the name slug.
          <Mark
            key={index}
            here={index === at}
            index={index}
            open={index < openCount}
            ringHue={ringHue}
          />
        )
      })}
    </svg>
  )
}

/**
 * One waypoint on the strip. The ring is a second circle rather than a wider
 * stroke on the mark, because only the ring carries the record's colour and
 * the mark has to stay filled or hollow on its own.
 */
function Mark({
  here,
  index,
  open,
  ringHue,
}: {
  readonly here: boolean
  readonly index: number
  readonly open: boolean
  /** `null` while the record is under fog, so no colour reaches the HTML. */
  readonly ringHue: null | string
}): ReactElement {
  return (
    <g>
      {here && (
        <circle
          cx={markX(index)}
          cy={Y}
          r={RING_R}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(
            styles.line,
            ringHue === null ? styles.ringCovered : styles.ring(ringHue),
          )}
        />
      )}
      <circle
        cx={markX(index)}
        cy={Y}
        r={here ? HERE_R : MARK_R}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(
          styles.mark,
          open ? styles.markOpen : styles.markCovered,
        )}
      />
    </g>
  )
}

const styles = stylex.create({
  svg: { overflow: 'visible', display: 'block', height: 'auto', width: '100%' },
  line: { fill: 'none', strokeLinecap: 'round', strokeWidth: rule.fine },
  lineOpen: { stroke: color.accent },
  lineCovered: { stroke: color.rule2, strokeDasharray: '3 6' },
  ring: (hue: string) => ({ stroke: hue }),
  ringCovered: { stroke: color.ink2 },
  mark: { strokeWidth: rule.fine },
  markOpen: { fill: color.accent, stroke: color.accent },
  markCovered: { fill: color.paper, stroke: color.rule2 },
})
