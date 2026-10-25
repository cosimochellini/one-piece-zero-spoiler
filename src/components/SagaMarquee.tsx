import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { type ReactElement, type ReactNode, useId } from 'react'

import { ChartArt } from '~/components/ChartArt'
import { DrawInContext, tintOf } from '~/components/drawing'
import { useLocale, useSeriesT } from '~/i18n/LocaleContext'
import { spliced } from '~/i18n/spliced'
import type { Translate } from '~/i18n/types'
import { useSeriesParams, useThreshold } from '~/lib/progress/BookmarkContext'
import type { FruitParams } from '~/lib/search/fruitParams'
import { useDrawing } from '~/lib/view/drawings'
import type { FruitMarqueeView, FruitView } from '~/lib/view/records'
import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/** What the marquee is built from: where it links, and itself. */
export interface SagaMarqueeProps {
  /** Where "See the whole saga" goes: the saga view, at this saga's group. */
  link: { hash: string; search: FruitParams }
  marquee: FruitMarqueeView | null
}

/**
 * The saga the reader is watching, over the album: its name and how many
 * fruits it has named so far, then those fruits as a rail of large tiles
 * that snaps as it scrolls. The latest opens the rail, larger, in a glow of
 * its own tint, and its drawing draws itself in (not with reduced motion).
 *
 * The server sends its records with the page, ahead of the album, the
 * lead's drawing whole. With no fruit in the saga yet, one line points back
 * to the last one. Either way a link goes on to the
 * whole saga in the saga view, the picks kept.
 */
export function SagaMarquee({
  link,
  marquee,
}: SagaMarqueeProps): null | ReactElement {
  const { locale } = useLocale()
  const t = useSeriesT('one-piece')
  const { series } = useSeriesParams()
  const headingId = useId()
  if (marquee === null) {
    return null
  }

  const { fruits } = marquee

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.marquee)}
    >
      <h2
        id={headingId}
        {...stylex.props(styles.title)}
      >
        {headline(t, marquee.saga, fruits.length)}
      </h2>

      {fruits.length === 0 ?
        <Behind last={marquee.last} />
      : <Rail fruits={fruits} />}

      <Link
        hash={link.hash}
        params={{ series, locale }}
        search={link.search}
        to="/$series/$locale/fruits"
        {...stylex.props(styles.lastLink, styles.whole)}
      >
        {t('fruits.marqueeLink')}
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}

/** The saga's name in gold, and how many fruits it has named so far. */
function headline(
  t: Translate<'one-piece'>,
  name: string,
  count: number,
): ReactNode {
  const saga = <strong {...stylex.props(styles.saga)}>{name}</strong>
  if (count === 0) {
    return saga
  }

  return spliced(
    count === 1 ? t('fruits.marqueeOne') : t('fruits.marquee', { count }),
    'saga',
    saga,
  )
}

/** The rail: the latest fruit first and larger, then the rest, oldest first. */
function Rail({ fruits }: { fruits: FruitView[] }): ReactElement {
  const lead = fruits.at(-1)

  return (
    <ul {...stylex.props(styles.rail)}>
      {lead === undefined ? null : (
        <Tile
          lead
          record={lead}
        />
      )}
      {fruits.slice(0, -1).map((fruit) => {
        return (
          <Tile
            key={fruit.id}
            lead={false}
            record={fruit}
          />
        )
      })}
    </ul>
  )
}

/** No fruit in the saga yet: say so, and point back to the last one. */
function Behind({ last }: { last: FruitView | null }): ReactElement {
  const { locale } = useLocale()
  const t = useSeriesT('one-piece')
  const { series } = useSeriesParams()
  const threshold = useThreshold()

  return (
    <p {...stylex.props(styles.behind)}>
      {t('fruits.marqueeNone')}
      {last === null ? null : (
        <>
          {' '}
          {spliced(
            threshold('fruits.lastFruit', last),
            'name',
            <Link
              params={{ series, locale, id: last.id }}
              to="/$series/$locale/fruits/$id"
              {...stylex.props(styles.lastLink)}
            >
              {last.name}
            </Link>,
          )}
        </>
      )}
    </p>
  )
}

/**
 * One tile of the rail: the drawing, the name and the episode the story
 * names it in, as one link to the fruit. Its drawing is asked for once it
 * scrolls near (`useDrawing`); the server sends the first few whole.
 */
function Tile({
  lead,
  record,
}: {
  lead: boolean
  record: FruitView
}): ReactElement {
  const { series, locale } = useSeriesParams()
  const threshold = useThreshold()
  const { ref, strokes } = useDrawing(record.id, record.visual)

  return (
    <li {...stylex.props(styles.tile, lead && styles.leadTile)}>
      <Link
        params={{ series, locale, id: record.id }}
        to="/$series/$locale/fruits/$id"
        {...stylex.props(styles.link)}
      >
        <span
          ref={ref}
          {...stylex.props(
            styles.frame,
            lead && styles.glow(tintOf(record.visual.tint)),
          )}
        >
          <DrawInContext value={lead}>
            <ChartArt
              strokes={strokes}
              tint={record.visual.tint}
            />
          </DrawInContext>
        </span>
        <span {...stylex.props(styles.name, lead && styles.leadName)}>
          {record.name}
        </span>
        <span {...stylex.props(styles.meta)}>
          {threshold('chart.opensAt', record)}
        </span>
      </Link>
    </li>
  )
}

const styles = stylex.create({
  marquee: { gap: space.md, display: 'grid', minWidth: 0 },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  saga: { color: color.accent, fontWeight: 800 },
  behind: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
  lastLink: {
    color: color.accent,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textUnderlineOffset: '3px',
  },
  // `lastLink`'s colour and ring, and a tap target of its own.
  whole: {
    gap: space.xs2,
    alignItems: 'center',
    display: 'inline-flex',
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 600,
    justifySelf: 'start',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    minHeight: '44px',
  },
  // One row that scrolls on its own and snaps to a tile, inside the page's
  // width: the page itself never scrolls sideways.
  rail: {
    gap: space.md,
    scrollSnapType: 'x mandatory',
    alignItems: 'start',
    display: 'flex',
    listStyleType: 'none',
    paddingBlockEnd: space.xs,
    minWidth: 0,
    overflowX: 'auto',
    overscrollBehaviorX: 'contain',
  },
  tile: {
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 0,
    scrollSnapAlign: 'start',
    width: 'clamp(8.5rem, 36vw, 11rem)',
  },
  leadTile: { width: 'clamp(12rem, 58vw, 18rem)' },
  link: {
    borderRadius: radius.card,
    gap: space.xs2,
    color: color.ink,
    display: 'grid',
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  frame: {
    padding: space.xs,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    display: 'block',
  },
  // The lead's own tint, glowing from behind its drawing.
  glow: (hue: string) => ({
    backgroundImage: `radial-gradient(closest-side, color-mix(in oklch, ${hue} 38%, transparent), transparent)`,
  }),
  name: {
    color: {
      'default': color.ink,
      ':is(a:focus-visible) > &': color.accent,
      ':is(a:hover) > &': color.accent,
    },
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  leadName: { fontSize: text.xl },
  meta: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
})
