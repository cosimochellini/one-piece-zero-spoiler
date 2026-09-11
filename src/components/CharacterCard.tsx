import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'

import { CharacterCrest } from '~/components/CharacterCrest'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { roleOf } from '~/data/characters'
import type { Entity } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
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

export type CharacterCardProps = {
  readonly entity: Entity
  readonly revealed: boolean
  /** A span of the name to mark, from a search match. */
  readonly highlight?: readonly [number, number] | null
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
}: CharacterCardProps) {
  const { locale, t } = useLocale()
  const role = roleOf(entity)
  const name = entity.name[locale]

  return (
    <li {...stylex.props(styles.card)}>
      <SpoilerVeil
        revealedAtEpisode={entity.revealedAtEpisode}
        revealed={revealed}
        density="compact"
        strength="media"
        // A fogged card has no link and no name in the DOM: the slug in the
        // href would spell the name a blur is meant to hide.
        placeholder={
          <span {...stylex.props(styles.link)}>
            <span {...stylex.props(styles.frame)}>
              <CharacterCrest visual={entity.visual} />
            </span>
            <span {...stylex.props(styles.name)}>{t('veil.placeholder')}</span>
          </span>
        }
      >
        <Link
          to="/$locale/characters/$id"
          params={{ locale, id: entity.id }}
          {...stylex.props(styles.link)}
        >
          <span {...stylex.props(styles.frame)}>
            <CharacterCrest visual={entity.visual} />
          </span>
          <span {...stylex.props(styles.name)}>
            <Marked text={name} span={highlight} />
          </span>
          {role === undefined ? null : (
            <span {...stylex.props(styles.role)}>{role[locale]}</span>
          )}
        </Link>
      </SpoilerVeil>
      <p {...stylex.props(styles.episode)}>
        {t('chart.opensAt', { episode: entity.revealedAtEpisode })}
      </p>
    </li>
  )
}

/** The name with the matched letters in a `<mark>`, or the name alone. */
function Marked({
  text: value,
  span,
}: {
  readonly text: string
  readonly span: readonly [number, number] | null
}) {
  if (span === null) return value

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
  card: {
    display: 'grid',
    gap: space.xs,
    minWidth: 0,
  },
  // The whole card is the link; the crest frame is the one container signal.
  link: {
    borderRadius: radius.card,
    color: color.ink,
    display: 'grid',
    gap: space.xs2,
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  frame: {
    aspectRatio: '1',
    backgroundColor: color.paper2,
    borderColor: {
      default: color.rule,
      ':is(a:hover) > &': color.rule2,
      ':is(a:focus-visible) > &': color.rule2,
    },
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    display: 'block',
    marginBlockEnd: space.xs,
    overflow: 'hidden',
    padding: space.sm,
    transitionDuration: dur.micro,
    transitionProperty: 'border-color',
    transitionTimingFunction: ease.out,
  },
  name: {
    color: {
      default: color.ink,
      ':is(a:hover) > &': color.accent,
      ':is(a:focus-visible) > &': color.accent,
      ':is(a:active) > &': color.ink2,
    },
    display: 'block',
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
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
