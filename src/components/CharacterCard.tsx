import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { type ReactElement, type ReactNode, useState } from 'react'

import { CharacterCrest } from '~/components/CharacterCrest'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { CharacterView, Slot } from '~/lib/view/records'
import { morphPart } from '~/styles/morph'
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

/** One page of the book: the slot it fills, and what a search matched. */
export interface CharacterCardProps {
  peek: (handle: string) => Promise<CharacterView>
  slot: Slot<CharacterView>
  /** A span of the name to mark, from a search match. */
  highlight?: [number, number] | null
  /**
   * When the crest and the name take the names that travel to the page.
   * `always` on the signal book, so the way back lands on the card too.
   * `onClick` for the cards a record's own page lists: those are other pages'
   * cards as well, and carrying the names from the start would pair them with
   * the signal book's, flying in from wherever they sat on the page left.
   */
  morph?: 'always' | 'onClick'
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
  slot,
  peek,
  highlight = null,
  morph = 'always',
}: CharacterCardProps): ReactElement {
  const { t } = useLocale()
  const threshold = useThreshold()

  return (
    <li {...stylex.props(styles.card)}>
      <SpoilerVeil
        density="compact"
        peek={peek}
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
        slot={slot}
      >
        {(record) => {
          return (
            <CardLink
              highlight={highlight}
              morph={morph}
              record={record}
            />
          )
        }}
      </SpoilerVeil>
      <p {...stylex.props(styles.episode)}>
        {threshold('chart.opensAt', slot.open ? slot.record : slot.covered)}
      </p>
    </li>
  )
}

/** An open card: the crest, the name and the role, as a link to the page. */
function CardLink({
  record,
  highlight,
  morph,
}: {
  highlight: [number, number] | null
  morph: 'always' | 'onClick'
  record: CharacterView
}): ReactElement {
  const { locale } = useLocale()
  // Set in the click, which renders before the router starts the transition,
  // so the old page is captured with the names on. ponytail: a modified click
  // that opens a tab also sets it; the card then pairs like a signal book one.
  const [clicked, setClicked] = useState(false)
  const travels = morph === 'always' || clicked

  return (
    <Link
      onClick={() => {
        setClicked(true)
      }}
      params={{ locale, id: record.id }}
      to="/$locale/characters/$id"
      {...stylex.props(styles.link)}
    >
      <span
        {...stylex.props(
          styles.frame,
          travels && morphPart('character', record.id, 'art'),
        )}
      >
        <CharacterCrest visual={record.visual} />
      </span>
      <span
        {...stylex.props(
          styles.name,
          travels && morphPart('character', record.id, 'name'),
        )}
      >
        <Marked
          span={highlight}
          text={record.name}
        />
      </span>
      {record.role === undefined ? null : (
        <span {...stylex.props(styles.role)}>{record.role}</span>
      )}
    </Link>
  )
}

/** The name with the matched letters in a `<mark>`, or the name alone. */
export function Marked({
  text: value,
  span,
}: {
  span: [number, number] | null
  text: string
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
