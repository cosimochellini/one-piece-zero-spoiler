import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'

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
 * site has two pages and two languages, so the right edge carries one link
 * and the language switch and no more. The reader's bookmark is not repeated
 * here either: it is drawn on the route as the horizon line, which is where
 * the eye goes for it.
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
        <nav aria-label={t('nav.label')}>
          <Link
            to="/$locale/characters"
            params={{ locale }}
            activeProps={{ 'aria-current': 'page' }}
            {...stylex.props(styles.link)}
          >
            {t('nav.characters')}
          </Link>
        </nav>
        <LocaleSwitch />
      </div>
    </header>
  )
}

const styles = stylex.create({
  bar: {
    alignItems: 'center',
    display: 'flex',
    // The bar may wrap on a narrow phone; it may never widen the page. The
    // controls keep the right edge when they drop to a second line.
    flexWrap: 'wrap',
    columnGap: { default: space.sm, '@media (min-width: 40rem)': space.md },
    rowGap: 0,
    justifyContent: 'space-between',
    minWidth: 0,
    paddingBlock: { default: space.sm, '@media (min-width: 40rem)': space.md },
    paddingInline: space.md,
  },

  controls: {
    alignItems: 'center',
    display: 'flex',
    gap: { default: space.xs, '@media (min-width: 40rem)': space.lg },
    marginInlineStart: 'auto',
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
