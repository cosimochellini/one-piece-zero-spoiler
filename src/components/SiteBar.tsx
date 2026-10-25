import * as stylex from '@stylexjs/stylex'
import { Link, useMatch } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { LocaleSwitch } from '~/components/LocaleSwitch'
import { useDeclares } from '~/components/useDeclares'
import { useLocale, useSeriesT, useT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useBookmark, useSeriesParams } from '~/lib/progress/BookmarkContext'
import type { SeriesPage } from '~/lib/progress/series'
import {
  BAR,
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
 * The wordmark hard-left, the controls hard-right. On a series page the
 * series' name follows the wordmark, a breadcrumb: the wordmark is the way
 * back to the hub, the name the series' home. Past them the row is empty. It
 * stays pinned at every width, so the pages and the bookmark are one tap
 * away from anywhere down a long listing. Below `ROOMY` a series bar folds
 * the name and the pages onto a second row.
 * The right edge carries the series' pages, the reader's bookmark and the
 * language select, and no more. The bookmark is the one control the whole
 * site turns on, so it lives here, on every page, as a single mark that opens
 * the dialog where it is set; the route still draws it as the horizon line,
 * which is where the eye goes to see what it did.
 */
export function SiteBar(): ReactElement {
  const { locale } = useLocale()
  const t = useT()
  const { series } = useBookmark()
  // The public description, for the series' name in the reader's language.
  const described = useMatch({ from: '/$series', shouldThrow: false })?.context
    .series

  return (
    <header {...stylex.props(styles.bar, series === null && styles.sharedBar)}>
      {/* The wordmark is the site's, so it goes to the hub on every page. */}
      <Link
        activeOptions={{ exact: true }}
        aria-label={`${t('site.name')}. ${t('nav.hub')}`}
        params={{ locale }}
        to="/$locale"
        {...stylex.props(styles.wordmark, series !== null && styles.quiet)}
      >
        {t('site.name')}
      </Link>
      {series !== null && (
        <>
          <div {...stylex.props(styles.seriesRow)}>
            <span
              aria-hidden="true"
              {...stylex.props(styles.slash)}
            >
              /
            </span>
            <Link
              activeOptions={{ exact: true }}
              activeProps={{ 'aria-current': 'page' }}
              params={{ locale, series: series.slug }}
              to="/$series/$locale"
              {...stylex.props(styles.seriesName)}
            >
              <span {...stylex.props(styles.seriesText)}>
                {described?.name[locale] ?? series.slug}
              </span>
            </Link>
            <SeriesNavigation />
          </div>
          <EpisodeMark />
        </>
      )}
      <LocaleSwitch />
    </header>
  )
}

/**
 * The bar's pages, in its order; the filler guide is reached by its address.
 * Labelled by the page's own copy: the fruits and the filler guide are One
 * Piece's, and only a series that declares them links them.
 */
const NAV = [
  {
    page: 'characters',
    to: '/$series/$locale/characters',
    label: 'nav.characters',
  },
  { page: 'places', to: '/$series/$locale/places', label: 'nav.places' },
  { page: 'fruits', to: '/$series/$locale/fruits', label: 'nav.fruits' },
] as const satisfies {
  label: TranslationKey<'one-piece'>
  page: SeriesPage
  to: string
}[]

/**
 * Content navigation belongs to the series selected by the route, and lists
 * the pages it declares.
 */
function SeriesNavigation(): ReactElement {
  const t = useSeriesT('one-piece')
  const params = useSeriesParams()
  const declares = useDeclares()
  const links: ReactElement[] = []
  for (const { label, page, to } of NAV) {
    if (declares(page)) {
      links.push(
        <Link
          key={to}
          activeProps={{ 'aria-current': 'page' }}
          params={params}
          to={to}
          {...stylex.props(styles.link)}
        >
          {t(label)}
        </Link>,
      )
    }
  }
  return (
    <nav
      aria-label={t('nav.label')}
      {...stylex.props(styles.pages)}
    >
      {links}
    </nav>
  )
}

// The site's breakpoint: below it the bar is the phone bar.
const WIDE = '@media (min-width: 40rem)'
// A series bar needs more room for one row: the wordmark, the name, three
// pages, the bookmark and the language fit from about 52rem with the longest
// name (Hunter x Hunter, in Italian). Below it the name and the pages fold
// under, as on a phone.
const ROOMY = BAR.seriesWide

const styles = stylex.create({
  // One grid at every width, pinned to the top of the window, its height
  // `pin.bar`: the value every other pinned element offsets itself by. From
  // `ROOMY` a series bar sets wordmark, slash, name, pages, bookmark and
  // language on one row, and the free space is the name's column, so a name
  // too long for the row ends in an ellipsis rather than under the pages.
  // Below it the first row has the wordmark, bookmark and language, and the
  // series' row folds under.
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
      [ROOMY]: 'auto auto minmax(0, 1fr) auto auto auto',
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
  pages: {
    gap: space.xs,
    alignItems: 'center',
    display: 'flex',
    flexShrink: 0,
  },
  // A phone's second row: the series' name, a hairline, then its pages,
  // flush with the wordmark above. The row spans the bar rather than the
  // first column, which the bookmark's width decides. From `ROOMY` the row
  // unwraps, so the slash, the name and the pages take their own columns.
  seriesRow: {
    gridRow: { [ROOMY]: 'auto', default: 2 },
    alignItems: 'center',
    columnGap: space.xs,
    display: { [ROOMY]: 'contents', default: 'flex' },
    gridColumnEnd: { [ROOMY]: 'auto', default: -1 },
    gridColumnStart: { [ROOMY]: 'auto', default: 1 },
  },
  // A column of no width, the glyph centred on it, so the slash sits halfway
  // between the wordmark and the name whatever its own width.
  slash: {
    color: color.rule2,
    display: { [ROOMY]: 'flex', default: 'none' },
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 400,
    justifyContent: 'center',
    width: 0,
  },
  // On a narrow phone the name gives way first, so the pages stay whole.
  seriesName: {
    alignItems: 'center',
    borderInlineEndColor: color.rule2,
    borderInlineEndStyle: { [ROOMY]: 'none', default: 'solid' },
    borderInlineEndWidth: rule.hair,
    color: { 'default': color.ink, ':hover': color.accent },
    display: 'inline-flex',
    fontFamily: font.display,
    fontSize: { [ROOMY]: text.lg, default: text.base },
    fontStretch: 'semi-condensed',
    fontWeight: 800,
    justifySelf: 'start',
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    paddingInlineEnd: { [ROOMY]: 0, default: space.sm },
    textDecorationLine: 'none',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    minHeight: '44px',
    minWidth: 0,
  },
  seriesText: { overflow: 'hidden', textOverflow: 'ellipsis' },
  // On a series page the series' name is the louder of the two.
  quiet: { color: { 'default': color.ink2, ':hover': color.accent } },

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
