import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { useT } from '~/i18n/LocaleContext'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/** The three counts the legend explains, each taken from the live archive. */
export type RouteLegendProps = {
  readonly covered: number
  readonly filed: number
  readonly open: number
}

/**
 * The chart's legend: what a gold stretch of route means, what a dashed one
 * means, and how many waypoints there are of each.
 *
 * Every number here is counted from the archive and the reader's own bookmark
 * at render time. None of them is a claim about the project's size or reach,
 * which is the only reason figures are allowed on this page at all.
 */
export function RouteLegend({
  open,
  covered,
  filed,
}: RouteLegendProps): ReactElement {
  const t = useT()

  return (
    <dl {...stylex.props(styles.legend)}>
      <Entry
        label={t('legend.open')}
        swatch="open"
        value={open}
      />
      <Entry
        label={t('legend.covered')}
        swatch="covered"
        value={covered}
      />
      <Entry
        label={t('legend.filed')}
        swatch="filed"
        value={filed}
      />
    </dl>
  )
}

type Swatch = 'covered' | 'filed' | 'open'

/** One line of the legend: the mark, what it means, and how many there are. */
function Entry({
  swatch,
  value,
  label,
}: {
  readonly label: string
  readonly swatch: Swatch
  readonly value: number
}): ReactElement {
  return (
    <div {...stylex.props(styles.entry)}>
      {/*
        `dt` before `dd` keeps the list semantics intact; the grid puts the
        figure first visually, because "4 open to you" is how the line reads.
      */}
      <dt {...stylex.props(styles.term)}>
        <SwatchMark kind={swatch} />
        {label}
      </dt>
      <dd {...stylex.props(styles.figure)}>{value}</dd>
    </div>
  )
}

/**
 * The three marks used on the route, drawn once more here so the legend is a
 * legend and not a stat strip: a sailed stretch with a filled waypoint, a
 * fogged stretch with a hollow one, and the two waypoint marks side by side
 * for the whole archive.
 */
function SwatchMark({ kind }: { readonly kind: Swatch }): ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 12"
      {...stylex.props(styles.swatch)}
    >
      {kind === 'open' && (
        <>
          <line
            x1="0"
            x2="40"
            y1="6"
            y2="6"
            {...stylex.props(styles.lineOpen)}
          />
          <circle
            cx="20"
            cy="6"
            r="4"
            {...stylex.props(styles.markOpen)}
          />
        </>
      )}
      {kind === 'covered' && (
        <>
          <line
            x1="0"
            x2="40"
            y1="6"
            y2="6"
            {...stylex.props(styles.lineCovered)}
          />
          <circle
            cx="20"
            cy="6"
            r="4"
            {...stylex.props(styles.markCovered)}
          />
        </>
      )}
      {kind === 'filed' && (
        <>
          <circle
            cx="12"
            cy="6"
            r="4"
            {...stylex.props(styles.markOpen)}
          />
          <circle
            cx="28"
            cy="6"
            r="4"
            {...stylex.props(styles.markCovered)}
          />
        </>
      )}
    </svg>
  )
}

const styles = stylex.create({
  legend: { gap: space.xs, display: 'grid' },
  entry: {
    alignItems: 'baseline',
    columnGap: space.sm,
    display: 'grid',
    gridTemplateColumns: 'minmax(3ch, auto) minmax(0, 1fr)',
  },
  term: {
    gap: space.xs,
    gridColumn: '2',
    gridRow: '1',
    alignItems: 'center',
    color: color.muted,
    display: 'flex',
    fontSize: text.base,
    lineHeight: leading.body,
    minWidth: 0,
  },
  figure: {
    gridColumn: '1',
    gridRow: '1',
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 800,
    lineHeight: leading.heading,
    marginInlineStart: 0,
    textAlign: 'end',
  },

  swatch: {
    overflow: 'visible',
    display: 'block',
    flexShrink: 0,
    height: '0.75rem',
    width: '2.5rem',
  },
  lineOpen: { stroke: color.accent, strokeWidth: rule.fine },
  lineCovered: {
    stroke: color.rule2,
    strokeDasharray: '3 5',
    strokeLinecap: 'round',
    strokeWidth: rule.fine,
  },
  markOpen: { fill: color.accent },
  markCovered: {
    fill: color.paper,
    stroke: color.rule2,
    strokeWidth: rule.fine,
  },
})
