import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { type ReactElement, useSyncExternalStore } from 'react'

import { Button } from '~/components/ui/Button'
import { useLocale } from '~/i18n/LocaleContext'
import {
  dismissWelcome,
  subscribeWelcome,
  welcomeOwed,
} from '~/lib/progress/welcome'
import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * Shown once, on the first home page after a bookmark is saved from the
 * onboarding: what the reader can open now, every page of it already at
 * their point.
 *
 * The server always answers no, so the served HTML and the hydrated page
 * agree, and the welcome appears once the browser has read the flag.
 */
export function HomeWelcome(): null | ReactElement {
  const { locale, t } = useLocale()
  const shown = useSyncExternalStore(subscribeWelcome, welcomeOwed, () => false)

  if (!shown) {
    return null
  }

  const pages = [
    { to: '/$locale/characters', label: t('nav.characters') },
    { to: '/$locale/places', label: t('places.title') },
    { to: '/$locale/fruits', label: t('fruits.title') },
    { to: '/$locale/filler', label: t('filler.title') },
  ] as const

  return (
    <section
      aria-labelledby="home-welcome"
      {...stylex.props(styles.welcome)}
    >
      <h2
        id="home-welcome"
        {...stylex.props(styles.title)}
      >
        {t('welcome.title')}
      </h2>
      <p {...stylex.props(styles.lede)}>{t('welcome.lede')}</p>
      <ul {...stylex.props(styles.links)}>
        {pages.map((page) => {
          return (
            <li key={page.to}>
              <Link
                params={{ locale }}
                to={page.to}
                {...stylex.props(styles.link)}
              >
                {page.label}
              </Link>
            </li>
          )
        })}
      </ul>
      <Button
        onClick={dismissWelcome}
        sx={styles.dismiss}
      >
        {t('welcome.dismiss')}
      </Button>
    </section>
  )
}

const styles = stylex.create({
  welcome: {
    padding: space.lg,
    borderColor: color.accent,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    gap: space.md,
    backgroundColor: color.paper2,
    display: 'grid',
    justifyItems: 'start',
  },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  lede: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  links: {
    margin: 0,
    padding: 0,
    gap: space.sm,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
  },
  link: {
    borderColor: { 'default': color.rule2, ':hover': color.accent },
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    paddingBlock: space.xs,
    paddingInline: space.md,
    textDecoration: 'none',
    alignItems: 'center',
    color: color.accent,
    display: 'inline-flex',
    fontWeight: 700,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    whiteSpace: 'nowrap',
    minHeight: '44px',
  },
  dismiss: { color: color.muted },
})
