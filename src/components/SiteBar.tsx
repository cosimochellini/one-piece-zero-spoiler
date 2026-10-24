import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { LocaleSwitch } from '~/components/LocaleSwitch'
import { useLocale } from '~/i18n/LocaleContext'
import { useBookmark, useSeriesParams } from '~/lib/progress/BookmarkContext'
import {
  color,
  dur,
  ease,
  font,
  leading,
  pin,
  rule,
  space,
  text,
  z,
} from '~/styles/tokens.stylex'

/**
 * The bar (Hallmark N9, edge-aligned).
 *
 * Wordmark hard-left, the controls hard-right, and nothing in between. It
 * stays pinned at every width, so the pages and the bookmark are one tap
 * away from anywhere down a long listing; a phone only folds the pages onto
 * a second row. The site has four pages and two languages, so the right edge
 * carries three links, the reader's bookmark and the language select, and no
 * more. The bookmark is the one control the whole site turns on, so it lives here, on
 * every page, as a single mark that opens the dialog where it is set; the
 * route still draws it as the horizon line, which is where the eye goes to
 * see what it did.
 */
export function SiteBar(): ReactElement {
  const { locale, t } = useLocale()
  const { series } = useBookmark()

  const home =
    series === null ?
      { to: '/$locale' as const, params: { locale } }
    : {
        to: '/$series/$locale' as const,
        params: { locale, series: series.slug },
      }

  return (
    <header {...stylex.props(styles.bar, series === null && styles.sharedBar)}>
      <Link
        {...home}
        {...stylex.props(styles.wordmark)}
      >
        {t('site.name')}
      </Link>
      {series !== null && (
        <>
          <SeriesNavigation />
          <EpisodeMark />
        </>
      )}
      <LocaleSwitch />
    </header>
  )
}

/** Content navigation belongs to the series selected by the route. */
function SeriesNavigation(): ReactElement {
  const { t } = useLocale()
  const params = useSeriesParams()
  return (
    <nav
      aria-label={t('nav.label')}
      {...stylex.props(styles.pages)}
    >
      <Link
        activeProps={{ 'aria-current': 'page' }}
        params={params}
        to="/$series/$locale/characters"
        {...stylex.props(styles.link)}
      >
        {t('nav.characters')}
      </Link>
      <Link
        activeProps={{ 'aria-current': 'page' }}
        params={params}
        to="/$series/$locale/places"
        {...stylex.props(styles.link)}
      >
        {t('nav.places')}
      </Link>
      <Link
        activeProps={{ 'aria-current': 'page' }}
        params={params}
        to="/$series/$locale/fruits"
        {...stylex.props(styles.link)}
      >
        {t('nav.fruits')}
      </Link>
    </nav>
  )
}

// One breakpoint, the site's: below it the bar is the phone bar.
const WIDE = '@media (min-width: 40rem)'

const styles = stylex.create({
  // One grid at every width, pinned to the top of the window, its height
  // `pin.bar`: the value every other pinned element offsets itself by. A wide
  // screen sets wordmark, pages, bookmark and language on one row; a phone
  // has room for three of them, so the pages fold onto a second row.
  bar: {
    paddingBlock: space.xs2,
    paddingInline: space.md,
    alignItems: 'center',
    // Frosted, so the lantern bloom still shows where the page begins and a
    // page scrolling under the bar is never read through it.
    backdropFilter: 'blur(14px) saturate(1.4)',
    backgroundColor: color.veil,
    columnGap: { [WIDE]: space.lg, default: space.sm },
    display: 'grid',
    gridTemplateColumns: {
      [WIDE]: 'minmax(0, 1fr) auto auto auto',
      default: 'minmax(0, 1fr) auto auto',
    },
    insetBlockStart: 0,
    position: 'sticky',
    zIndex: z.bar,
    height: pin.bar,
    minWidth: 0,
  },
  sharedBar: {
    gridTemplateColumns: {
      [WIDE]: 'minmax(0, 1fr) auto',
      default: 'minmax(0, 1fr) auto',
    },
  },
  // Flush with the wordmark on a phone's second row: the first link's own
  // padding is pulled back into the gutter so its word starts where the
  // wordmark does, and the row spans the bar rather than the first column,
  // which the bookmark's width decides. The bookmark and the language
  // follow on their own, into the next free cells.
  pages: {
    gap: space.xs,
    gridRow: { [WIDE]: 1, default: 2 },
    alignItems: 'center',
    display: 'flex',
    gridColumnEnd: { [WIDE]: 'auto', default: -1 },
    gridColumnStart: { [WIDE]: 2, default: 1 },
    marginInlineStart: { [WIDE]: 0, default: `calc(-1 * ${space.xs2})` },
  },

  wordmark: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: { [WIDE]: text.lg, default: text.base },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
    textTransform: 'uppercase',
    // A wordmark is one line or it is not a wordmark.
    whiteSpace: 'nowrap',
  },

  // The same voice as the language switch beside it; the current page is
  // marked with the accent rule and `aria-current`, never with colour alone.
  link: {
    paddingInline: { [WIDE]: space.xs, default: space.xs2 },
    alignItems: 'center',
    color: {
      'default': color.ink2,
      ':is([aria-current="page"])': color.ink,
      ':hover': color.accent,
      ':active': color.ink,
    },
    display: 'inline-flex',
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: {
      'default': 'transparent',
      ':is([aria-current="page"])': color.accent,
    },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    whiteSpace: 'nowrap',
    minHeight: '44px',
  },
})
