import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement, ReactNode } from 'react'

import { CharacterCrest } from '~/components/CharacterCrest'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { roleOf } from '~/data/characters'
import type { Entity } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
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

/** One page of the book: the record, whether it is open, and what matched. */
export type CharacterCardProps = {
  readonly entity: Entity
  readonly revealed: boolean
  /** A span of the name to mark, from a search match. */
  readonly highlight?: null | readonly [number, number]
}

/**
 * One page of the signal book: a crest, a name, a role, and the episode the
 * character first appears in. Every card is the same shape, because the
 * rhythm of a catalogue comes from the things in it and not from the layout.
 *
 * Under fog the crest, the name and the role are covered together; the
 * episode stays legible beneath, because "someone opens at episode 392" is
 * the promise and not the spoiler.
 */
export function CharacterCard({
  entity,
  revealed,
  highlight = null,
}: CharacterCardProps): ReactElement {
  const { locale, t } = useLocale()
  const threshold = useThreshold()
  const role = roleOf(entity)
  const name = entity.name[locale]

  return (
    <li {...stylex.props(styles.card)}>
      <SpoilerVeil
        density="compact"
        gated={entity}
        // A fogged card has no link, no name and no drawing in the DOM: the
        // slug in the href would spell the name a blur is meant to hide, and
        // the drawing and its colour would say as much.
        placeholder={
          <span {...stylex.props(styles.link)}>
            <span {...stylex.props(styles.frame)}>
              <CharacterCrest />
            </span>
            <span {...stylex.props(styles.name)}>{t('veil.placeholder')}</span>
          </span>
        }
        revealed={revealed}
      >
        <Link
          params={{ locale, id: entity.id }}
          to="/$locale/characters/$id"
          {...stylex.props(styles.link)}
        >
          <span {...stylex.props(styles.frame)}>
            <CharacterCrest visual={entity.visual} />
          </span>
          <span {...stylex.props(styles.name)}>
            <Marked
              span={highlight}
              text={name}
            />
          </span>
          {role === undefined ? null : (
            <span {...stylex.props(styles.role)}>{role[locale]}</span>
          )}
        </Link>
      </SpoilerVeil>
      <p {...stylex.props(styles.episode)}>
        {threshold('chart.opensAt', entity)}
      </p>
    </li>
  )
}

/** The name with the matched letters in a `<mark>`, or the name alone. */
export function Marked({
  text: value,
  span,
}: {
  readonly span: null | readonly [number, number]
  readonly text: string
}): ReactNode {
  if (span === null) {
    return value
  }

  const [from, to] = span
  return (
    <>
      {value.slice(0, from)}
      <mark {...stylex.props(styles.mark)}>{value.slice(from, to)}</mark>
      {value.slice(to)}
    </>
  )
}

const styles = stylex.create({
  card: { gap: space.xs, display: 'grid', minWidth: 0 },
  // The whole card is the link; the crest frame is the one container signal.
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
    padding: space.sm,
    borderColor: {
      'default': color.rule,
      ':is(a:focus-visible) > &': color.rule2,
      ':is(a:hover) > &': color.rule2,
    },
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    overflow: 'hidden',
    aspectRatio: '1',
    backgroundColor: color.paper2,
    display: 'block',
    marginBlockEnd: space.xs,
    transitionDuration: dur.micro,
    transitionProperty: 'border-color',
    transitionTimingFunction: ease.out,
  },
  name: {
    color: {
      'default': color.ink,
      ':is(a:active) > &': color.ink2,
      ':is(a:focus-visible) > &': color.accent,
      ':is(a:hover) > &': color.accent,
    },
    display: 'block',
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    minWidth: 0,
  },
  role: {
    color: color.muted,
    display: 'block',
    fontSize: text.base,
    lineHeight: leading.body,
  },
  episode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  // A match is marked with the accent as an underline, not a highlighter
  // block: a yellow slab behind display type on a dark page is a tell.
  mark: {
    backgroundColor: 'transparent',
    color: 'inherit',
    textDecorationColor: color.accent,
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '3px',
  },
})
