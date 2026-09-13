import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'

import { EpisodeMark } from '~/components/EpisodeMark'
import { LocaleSwitch } from '~/components/LocaleSwitch'
import { useLocale } from '~/i18n/LocaleContext'
import {
  color,
  dur,
  ease,
  font,
  leading,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * The bar (Hallmark N9, edge-aligned).
 *
 * Wordmark hard-left, the controls hard-right, and nothing in between. The
 * site has three pages and two languages, so the right edge carries two
 * links, the reader's bookmark and the language switch, and no more. The
 * bookmark is the one control the whole site turns on, so it lives here, on
 * every page, as a single mark that opens the dialog where it is set; the
 * route still draws it as the horizon line, which is where the eye goes to
 * see what it did.
 */
export function SiteBar() {
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
        </nav>
        <EpisodeMark />
        <LocaleSwitch />
      </div>
    </header>
  )
}

const styles = stylex.create({
  // The wordmark and the controls are two flex items that may wrap: on a
  // phone the controls drop under the wordmark and keep the right edge, so
  // the bar is never narrower than its own words and never widens the page.
  bar: {
    paddingBlock: {
      'default': space.sm,
      '@media (min-width: 40rem)': space.md,
    },
    paddingInline: space.md,
    alignItems: 'center',
    columnGap: { 'default': space.sm, '@media (min-width: 40rem)': space.md },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 0,
    minWidth: 0,
  },

  // Two page links, the bookmark and the language switch. They may wrap too,
  // on a 320px phone, where the switch drops under the page links.
  controls: {
    alignItems: 'center',
    columnGap: { 'default': space.xs, '@media (min-width: 40rem)': space.lg },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginInlineStart: 'auto',
    rowGap: 0,
  },
  pages: {
    gap: { 'default': space.xs2, '@media (min-width: 40rem)': space.sm },
    alignItems: 'center',
    display: 'flex',
  },

  wordmark: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: { 'default': text.base, '@media (min-width: 40rem)': text.lg },
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
    paddingInline: space.xs,
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
