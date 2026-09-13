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
        to="/$locale"
        params={{ locale }}
        {...stylex.props(styles.wordmark)}
      >
        {t('site.name')}
      </Link>

      <div {...stylex.props(styles.controls)}>
        <nav aria-label={t('nav.label')} {...stylex.props(styles.pages)}>
          <Link
            to="/$locale/characters"
            params={{ locale }}
            activeProps={{ 'aria-current': 'page' }}
            {...stylex.props(styles.link)}
          >
            {t('nav.characters')}
          </Link>
          <Link
            to="/$locale/places"
            params={{ locale }}
            activeProps={{ 'aria-current': 'page' }}
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
    alignItems: 'center',
    columnGap: { default: space.sm, '@media (min-width: 40rem)': space.md },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minWidth: 0,
    paddingBlock: { default: space.sm, '@media (min-width: 40rem)': space.md },
    paddingInline: space.md,
    rowGap: 0,
  },

  // Two page links, the bookmark and the language switch. They may wrap too,
  // on a 320px phone, where the switch drops under the page links.
  controls: {
    alignItems: 'center',
    columnGap: { default: space.xs, '@media (min-width: 40rem)': space.lg },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginInlineStart: 'auto',
    rowGap: 0,
  },
  pages: {
    alignItems: 'center',
    display: 'flex',
    gap: { default: space.xs2, '@media (min-width: 40rem)': space.sm },
  },

  wordmark: {
    color: color.ink,
    fontFamily: font.display,
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
    fontSize: { default: text.base, '@media (min-width: 40rem)': text.lg },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    textTransform: 'uppercase',
    // A wordmark is one line or it is not a wordmark.
    whiteSpace: 'nowrap',
  },

  // The same voice as the language switch beside it; the current page is
  // marked with the accent rule and `aria-current`, never with colour alone.
  link: {
    alignItems: 'center',
    color: {
      default: color.ink2,
      ':hover': color.accent,
      ':active': color.ink,
      ':is([aria-current="page"])': color.ink,
    },
    display: 'inline-flex',
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    minHeight: '44px',
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    paddingInline: space.xs,
    textDecorationColor: {
      default: 'transparent',
      ':is([aria-current="page"])': color.accent,
    },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    whiteSpace: 'nowrap',
  },
})
