import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { tintOf } from '~/components/drawing'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import { color, rule } from '~/styles/tokens.stylex'

/** What the strip needs to draw itself and to say what it is showing. */
export type RouteStripProps = {
  /** The whole archive, sorted by the threshold the bookmark counts in. */
  readonly entries: readonly Entity[]
  /** The record this strip is about. */
  readonly bookmark: Bookmark
  readonly current: Entity
  /** What a screen reader hears instead of the dots. */
  readonly label: string
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
  entries,
  current,
  bookmark,
  label,
}: RouteStripProps): ReactElement {
  const openCount = entries.filter((entry) =>
    isRevealed(entry, bookmark),
  ).length
  // The ring takes the record's colour only once the reader has reached it;
  // under fog it is drawn in the ambient ink, so the colour is not in the HTML.
  const ringHue =
    isRevealed(current, bookmark) ? tintOf(current.visual.tint) : null
  const width = PAD + STEP * (entries.length - 1) + PAD
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
      {openCount < entries.length && (
        <path
          d={`M${String(Math.max(markX(0), horizonX))} ${String(Y)} H${String(markX(entries.length - 1))}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.lineCovered)}
        />
      )}
      {openCount < entries.length && (
        <path
          d={`M${String(horizonX)} ${String(Y - TICK_ARM)} V${String(Y + TICK_ARM)}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.lineOpen)}
        />
      )}
      {entries.map((entry, index) => {
        return (
          <Mark
            key={entry.id}
            here={entry.id === current.id}
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
