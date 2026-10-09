import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { useT } from '~/i18n/LocaleContext'
import type { FillerKind, FillerMark } from '~/lib/view/filler'
import { color, font, space, text } from '~/styles/tokens.stylex'

/** A hundred episodes to a row: the row labels count in hundreds. */
const PER_ROW = 100

// The share of a cell its paint takes. The rest is the gap between cells,
// which is what lets a run of gold read as so many episodes and not a bar.
const CELL = 0.82

// A mixed episode lights the bottom half of its cell: half of `CELL`.
const HALF = 0.41

/** What the strip needs: the run's length, its marks, and the bookmark. */
export interface FillerStripProps {
  aired: number
  /** The reader's absolute episode, or `null` for a chapter reader or none. */
  here: null | number
  marks: FillerMark[]
}

/**
 * The whole series as one diagram: every episode a cell, a hundred to a row,
 * the canon ones in the rule ink and the rest lit. It is drawn from numbers
 * and kinds alone, so it is the same at every bookmark.
 *
 * Each row is its own SVG stretched to the row's width, so the cells are as
 * wide as the screen allows and the labels stay HTML text at text size. The
 * picture is `aria-hidden`: the counts are its accessible name, and the
 * ranges under it say the same thing as a list.
 */
export function FillerStrip({
  aired,
  here,
  marks,
}: FillerStripProps): ReactElement {
  const t = useT()
  const kinds = new Map(marks.map((mark) => [mark.episode, mark.kind]))
  const rows = Array.from(
    { length: Math.ceil(aired / PER_ROW) },
    (_, row) => row * PER_ROW + 1,
  )

  return (
    <figure
      aria-label={t('filler.stripLabel', {
        aired,
        filler: countOf(marks, 'filler'),
        mixed: countOf(marks, 'mixed'),
        recap: countOf(marks, 'recap'),
      })}
      role="img"
      {...stylex.props(styles.strip)}
    >
      {rows.map((first) => {
        return (
          <div
            key={first}
            aria-hidden
            {...stylex.props(styles.row)}
          >
            <span {...stylex.props(styles.label)}>{first}</span>
            <StripRow
              first={first}
              here={here}
              kinds={kinds}
              last={Math.min(aired, first + PER_ROW - 1)}
            />
          </div>
        )
      })}
    </figure>
  )
}

function countOf(marks: FillerMark[], kind: FillerKind): number {
  return marks.filter((mark) => mark.kind === kind).length
}

/** One row of cells, from `first` to `last`. */
function StripRow({
  first,
  last,
  here,
  kinds,
}: {
  first: number
  here: null | number
  kinds: Map<number, FillerKind>
  last: number
}): ReactElement {
  const episodes = Array.from(
    { length: last - first + 1 },
    (_, at) => first + at,
  )

  return (
    <svg
      preserveAspectRatio="none"
      viewBox={`0 0 ${String(PER_ROW)} 1`}
      {...stylex.props(styles.cells)}
    >
      {episodes.map((episode) => {
        const kind = kinds.get(episode)
        const x = episode - first

        return (
          <rect
            key={episode}
            height={kind === 'mixed' ? HALF : CELL}
            width={CELL}
            x={x}
            y={kind === 'mixed' ? HALF : 0}
            {...stylex.props(
              styles.canon,
              kind === 'filler' && styles.filler,
              kind === 'mixed' && styles.filler,
              kind === 'recap' && styles.recap,
              episode === here && styles.here,
            )}
          />
        )
      })}
    </svg>
  )
}

/** The key under the strip: one swatch per kind of cell. */
export function FillerLegend({
  hasBookmark,
}: {
  hasBookmark: boolean
}): ReactElement {
  const t = useT()
  const items = [
    { label: t('filler.kind.filler'), swatch: styles.swatchFiller },
    { label: t('filler.kind.mixed'), swatch: styles.swatchMixed },
    { label: t('filler.kind.recap'), swatch: styles.swatchRecap },
    { label: t('filler.legendCanon'), swatch: styles.swatchCanon },
    ...(hasBookmark ?
      [{ label: t('filler.legendHere'), swatch: styles.swatchHere }]
    : []),
  ]

  return (
    <ul {...stylex.props(styles.legend)}>
      {items.map((item) => {
        return (
          <li
            key={item.label}
            {...stylex.props(styles.legendItem)}
          >
            <span {...stylex.props(styles.swatch, item.swatch)} />
            {item.label}
          </li>
        )
      })}
    </ul>
  )
}

const styles = stylex.create({
  strip: { margin: 0, gap: space.xs2, display: 'grid' },
  row: {
    alignItems: 'center',
    columnGap: space.sm,
    display: 'grid',
    gridTemplateColumns: '2.5rem minmax(0, 1fr)',
  },
  label: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    textAlign: 'end',
  },
  cells: {
    display: 'block',
    height: { 'default': '0.75rem', '@media (min-width: 40rem)': '1rem' },
    width: '100%',
  },
  canon: { fill: color.rule },
  filler: { fill: color.accent },
  recap: { fill: color.ink2 },
  here: { fill: color.ink },

  legend: {
    margin: 0,
    columnGap: space.lg,
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
    paddingInlineStart: 0,
    rowGap: space.xs,
  },
  legendItem: {
    gap: space.xs,
    alignItems: 'center',
    color: color.ink2,
    display: 'flex',
    fontSize: text.xs,
    whiteSpace: 'nowrap',
  },
  swatch: { display: 'block', height: '0.75rem', width: '0.75rem' },
  swatchFiller: { backgroundColor: color.accent },
  // Half a cell, as the strip draws it: the bottom half lit.
  swatchMixed: {
    backgroundImage: `linear-gradient(to bottom, ${color.rule} 50%, ${color.accent} 50%)`,
  },
  swatchRecap: { backgroundColor: color.ink2 },
  swatchCanon: { backgroundColor: color.rule },
  swatchHere: { backgroundColor: color.ink },
})
