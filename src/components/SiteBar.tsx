import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { LocaleSwitch } from '~/components/LocaleSwitch'
import { useLocale } from '~/i18n/LocaleContext'
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
 * Wordmark hard-left, the controls hard-right, and nothing in between. On a
 * phone it folds into two rows and stays pinned, so the pages and the
 * bookmark are one tap away from anywhere down a long listing. The
 * site has four pages and two languages, so the right edge carries three
 * links, the reader's bookmark and the language switch, and no more. The
 * bookmark is the one control the whole site turns on, so it lives here, on
 * every page, as a single mark that opens the dialog where it is set; the
 * route still draws it as the horizon line, which is where the eye goes to
 * see what it did.
 */
export function SiteBar(): ReactElement {
  const { locale, t } = useLocale()

  return (
    <header {...stylex.props(styles.bar)}>
      <Link
        params={{ locale }}
        to="/$locale"
        {...stylex.props(styles.wordmark)}
      >
        {t('site.name')}
      </Link>

      <div {...stylex.props(styles.controls)}>
        <nav
          aria-label={t('nav.label')}
          {...stylex.props(styles.pages)}
        >
          <Link
            activeProps={{ 'aria-current': 'page' }}
            params={{ locale }}
            to="/$locale/characters"
            {...stylex.props(styles.link)}
          >
            {t('nav.characters')}
          </Link>
          <Link
            activeProps={{ 'aria-current': 'page' }}
            params={{ locale }}
            to="/$locale/places"
            {...stylex.props(styles.link)}
          >
            {t('nav.places')}
          </Link>
          <Link
            activeProps={{ 'aria-current': 'page' }}
            params={{ locale }}
            to="/$locale/fruits"
            {...stylex.props(styles.link)}
          >
            {t('nav.fruits')}
          </Link>
        </nav>
        <EpisodeMark />
        <div {...stylex.props(styles.locale)}>
          <LocaleSwitch />
        </div>
      </div>
    </header>
  )
}

// One breakpoint, the site's: below it the bar is the phone bar.
const WIDE = '@media (min-width: 40rem)'

const styles = stylex.create({
  // On a wide screen the wordmark and the controls are two flex items on one
  // line, and the bar scrolls away with the page.
  //
  // On a phone the bar is a two-row grid pinned to the top of the window: the
  // wordmark and the bookmark on the first row, the pages and the language on
  // the second. The controls box steps aside (`display: contents`) so its
  // children take those cells. Its height is `pin.bar`, the same value every
  // other pinned element offsets itself by.
  bar: {
    paddingInline: space.md,
    alignItems: 'center',
    // Frosted, so the lantern bloom still shows where the page begins and a
    // page scrolling under the bar is never read through it.
    backdropFilter: { [WIDE]: 'none', default: 'blur(14px) saturate(1.4)' },
    backgroundColor: { [WIDE]: 'transparent', default: color.veil },
    borderBlockEndColor: { [WIDE]: 'transparent', default: color.rule },
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    columnGap: { [WIDE]: space.md, default: space.sm },
    display: { [WIDE]: 'flex', default: 'grid' },
    flexWrap: 'wrap',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
    insetBlockStart: 0,
    justifyContent: 'space-between',
    paddingBlockEnd: { [WIDE]: space.md, default: 0 },
    paddingBlockStart: { [WIDE]: space.md, default: space.xs2 },
    position: { [WIDE]: 'static', default: 'sticky' },
    rowGap: 0,
    zIndex: z.bar,
    height: { [WIDE]: 'auto', default: pin.bar },
    minWidth: 0,
  },

  // On a narrow wide screen, a tablet held upright, the controls may still
  // wrap under the wordmark and keep the right edge.
  controls: {
    alignItems: 'center',
    columnGap: space.lg,
    display: { [WIDE]: 'flex', default: 'contents' },
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginInlineStart: 'auto',
    rowGap: 0,
  },
  // The second row, flush with the wordmark: the first link's own padding is
  // pulled back into the gutter so its word starts where the wordmark does.
  // It spans the row rather than the first column, which the bookmark's
  // width decides; the language code sits over its far end, which the three
  // links never reach, not even at 320px.
  pages: {
    gap: { [WIDE]: space.sm, default: space.xs },
    gridRow: 2,
    alignItems: 'center',
    display: 'flex',
    gridColumnEnd: -1,
    gridColumnStart: 1,
    marginInlineStart: { [WIDE]: 0, default: `calc(-1 * ${space.xs2})` },
  },
  locale: { gridColumn: 2, gridRow: 2, justifySelf: 'end' },

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
