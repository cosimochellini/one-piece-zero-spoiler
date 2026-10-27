import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { SeriesEmblem } from '~/components/SeriesEmblem'
import { useLocale, useT } from '~/i18n/LocaleContext'
import { bookmarkPoint } from '~/lib/progress/threshold'
import type { ComingSeries, HubSeries } from '~/lib/view/hub'
import { settleStyles } from '~/styles/settle'
import { THEMES } from '~/styles/themes'
import {
  color,
  dur,
  ease,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * The hub (Hallmark · direction "Stage", owner 2026-10-24): the house lights
 * are down, as on every page with no series, and each series is a stage lit
 * by a beam of its own accent. The card wears the series' whole theme, so
 * One Piece's stage is its night blue and gold inside the black page. A
 * series still to come is a dark stage: fog and its name, nothing else.
 *
 * A card says the series' name, how many entries it holds and where the
 * reader's saved bookmark on it stands. It names no record: the count is a
 * number, and the drawing is the series' own (`SeriesEmblem`).
 */
export function SeriesHub({
  coming,
  series,
}: {
  /** The series filed but not open: a name, no link, no count. */
  coming: ComingSeries[]
  series: HubSeries[]
}): ReactElement {
  const { locale } = useLocale()
  const t = useT()

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <header {...stylex.props(styles.head, settleStyles.band)}>
        <h1 {...stylex.props(styles.headline)}>{t('hub.headline')}</h1>
        <p {...stylex.props(styles.lede)}>{t('hub.lede')}</p>
      </header>
      <ul {...stylex.props(styles.stages)}>
        {series.map((entry, index) => (
          <li
            key={entry.slug}
            {...stylex.props(
              styles.item,
              settleStyles.band,
              settleStyles.at(index + 1),
            )}
          >
            <Stage entry={entry} />
          </li>
        ))}
        {coming.map((announced, index) => (
          <li
            key={announced.slug}
            {...stylex.props(
              styles.item,
              settleStyles.band,
              settleStyles.at(series.length + index + 1),
            )}
          >
            <DarkStage name={announced.name[locale]} />
          </li>
        ))}
      </ul>
    </main>
  )
}

/** A series a reader can open: its stage, lit in its own colours. */
function Stage({ entry }: { entry: HubSeries }): ReactElement {
  const { locale } = useLocale()
  const t = useT()

  return (
    <Link
      params={{ series: entry.slug, locale }}
      to="/$series/$locale"
      {...stylex.props(THEMES[entry.theme], styles.stage, styles.lit)}
    >
      <span
        aria-hidden="true"
        {...stylex.props(styles.beam)}
      />
      <span
        aria-hidden="true"
        {...stylex.props(styles.art)}
      >
        <SeriesEmblem slug={entry.slug} />
      </span>
      <div {...stylex.props(styles.copy)}>
        <h2 {...stylex.props(styles.name)}>{entry.name[locale]}</h2>
        <span
          {...stylex.props(
            styles.mono,
            styles.point,
            entry.bookmark === null && styles.unset,
          )}
        >
          {entry.bookmark === null ?
            t('hub.noBookmark')
          : bookmarkPoint(t, entry.bookmark, entry.books)}
        </span>
        <span {...stylex.props(styles.mono, styles.count)}>
          {t('hub.count', { count: entry.count })}
        </span>
      </div>
    </Link>
  )
}

/** A series announced but not open: no link, and the lights still off. */
function DarkStage({ name }: { name: string }): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.stage, styles.dark)}>
      <span
        aria-hidden="true"
        {...stylex.props(styles.fog)}
      />
      <div {...stylex.props(styles.copy)}>
        <h2 {...stylex.props(styles.name, styles.unlitName)}>{name}</h2>
        <span {...stylex.props(styles.mono, styles.point, styles.unset)}>
          {t('hub.coming')}
        </span>
      </div>
    </div>
  )
}

// The stages sit side by side once two fit at a readable width.
const WIDE = '@media (min-width: 48rem)'

const styles = stylex.create({
  page: {
    paddingBlock: space.xl,
    paddingInline: space.md,
    alignContent: 'start',
    display: 'grid',
    rowGap: space.xl,
  },
  head: { display: 'grid', rowGap: space.sm, maxWidth: '44rem' },
  headline: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  lede: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '40rem',
  },
  stages: {
    gap: space.md,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: {
      [WIDE]: 'repeat(2, minmax(0, 1fr))',
      default: 'minmax(0, 1fr)',
    },
    paddingInlineStart: 0,
  },
  item: { display: 'grid', minWidth: 0 },

  // One box for a lit stage and a dark one: the words sit at the foot, over
  // whatever lights the stage above them.
  stage: {
    padding: space.lg,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    overflow: 'clip',
    alignContent: 'end',
    backgroundColor: color.paper,
    color: color.ink,
    display: 'grid',
    position: 'relative',
    minHeight: { [WIDE]: '36rem', default: '28rem' },
  },
  lit: {
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  dark: { backgroundColor: color.paper2 },

  // The spotlight: a pool of the accent falling from above the stage, and a
  // fainter shaft inside it. It brightens under the pointer.
  beam: {
    inset: 0,
    backgroundImage: `radial-gradient(42% 62% at 50% -8%, color-mix(in oklch, ${color.accent} 34%, transparent), transparent 72%), conic-gradient(from 166deg at 50% -12%, transparent 0deg, color-mix(in oklch, ${color.accent} 10%, transparent) 14deg, transparent 28deg)`,
    opacity: {
      'default': 0.8,
      ':is(a:focus-visible) > &': 1,
      ':is(a:hover) > &': 1,
    },
    position: 'absolute',
    transitionDuration: dur.short,
    transitionProperty: 'opacity',
    transitionTimingFunction: ease.out,
  },
  art: {
    insetInline: '12%',
    insetBlockStart: '4%',
    position: 'absolute',
    height: '60%',
  },
  // No light reaches a dark stage, only the fog drifting in it.
  fog: {
    inset: 0,
    backgroundImage: `radial-gradient(60% 40% at 30% 40%, ${color.paper3}, transparent 70%), radial-gradient(50% 45% at 75% 60%, ${color.paper3}, transparent 70%)`,
    filter: 'blur(20px)',
    position: 'absolute',
  },

  copy: { display: 'grid', position: 'relative', rowGap: space.xs },
  name: {
    gridRow: '2',
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.hero,
    fontStretch: 'semi-condensed',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  unlitName: { color: color.muted },
  mono: {
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.12em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  // Above the name, as the fold of a series page sets the reader's point.
  point: { gridRow: '1', color: color.accent },
  unset: { color: color.muted },
  count: { gridRow: '3', color: color.muted },
})
