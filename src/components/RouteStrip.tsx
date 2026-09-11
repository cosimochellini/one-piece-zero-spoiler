import * as stylex from '@stylexjs/stylex'

import { tintOf } from '~/components/ChartArt'
import type { Entity } from '~/data/types'
import type { Progress } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import { color, rule } from '~/styles/tokens.stylex'

export type RouteStripProps = {
  /** The whole archive in route order. */
  readonly entries: readonly Entity[]
  /** The record this strip is about. */
  readonly current: Entity
  readonly progress: Progress
  /** What a screen reader hears instead of the dots. */
  readonly label: string
}

const STEP = 12
const PAD = 8
const Y = 16

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
  progress,
  label,
}: RouteStripProps) {
  const openCount = entries.filter((entry) =>
    isRevealed(entry, progress),
  ).length
  // The ring takes the record's colour only once the reader has reached it;
  // under fog it is drawn in the ambient ink, so the colour is not in the HTML.
  const ringHue = isRevealed(current, progress)
    ? tintOf(current.visual.tint)
    : null
  const width = PAD * 2 + STEP * (entries.length - 1)
  const x = (index: number) => PAD + STEP * index
  // Between the last open mark and the first covered one; before the first
  // mark when nothing is open.
  const horizonX =
    openCount === 0 ? PAD - STEP / 2 : x(openCount - 1) + STEP / 2

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${String(width)} 32`}
      {...stylex.props(styles.svg)}
    >
      {openCount > 1 && (
        <path
          d={`M${String(x(0))} ${String(Y)} H${String(x(openCount - 1))}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.lineOpen)}
        />
      )}
      {openCount < entries.length && (
        <path
          d={`M${String(Math.max(x(0), horizonX))} ${String(Y)} H${String(x(entries.length - 1))}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.lineCovered)}
        />
      )}
      {openCount < entries.length && (
        <path
          d={`M${String(horizonX)} ${String(Y - 7)} V${String(Y + 7)}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.lineOpen)}
        />
      )}
      {entries.map((entry, index) => {
        const open = index < openCount
        const here = entry.id === current.id

        return (
          <g key={entry.id}>
            {here && (
              <circle
                cx={x(index)}
                cy={Y}
                r="7.5"
                vectorEffect="non-scaling-stroke"
                {...stylex.props(
                  styles.line,
                  ringHue === null ? styles.ringCovered : styles.ring(ringHue),
                )}
              />
            )}
            <circle
              cx={x(index)}
              cy={Y}
              r={here ? '4' : '3'}
              vectorEffect="non-scaling-stroke"
              {...stylex.props(
                styles.mark,
                open ? styles.markOpen : styles.markCovered,
              )}
            />
          </g>
        )
      })}
    </svg>
  )
}

const styles = stylex.create({
  svg: {
    display: 'block',
    height: 'auto',
    overflow: 'visible',
    width: '100%',
  },
  line: {
    fill: 'none',
    strokeLinecap: 'round',
    strokeWidth: rule.fine,
  },
  lineOpen: {
    stroke: color.accent,
  },
  lineCovered: {
    stroke: color.rule2,
    strokeDasharray: '3 6',
  },
  ring: (hue: string) => ({ stroke: hue }),
  ringCovered: {
    stroke: color.ink2,
  },
  mark: {
    strokeWidth: rule.fine,
  },
  markOpen: {
    fill: color.accent,
    stroke: color.accent,
  },
  markCovered: {
    fill: color.paper,
    stroke: color.rule2,
  },
})
