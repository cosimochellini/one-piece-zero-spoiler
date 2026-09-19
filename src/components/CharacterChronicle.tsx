import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import type {
  CharacterChronicle as Chronicle,
  ChronicleEntry,
  ProseSegment,
} from '~/lib/view/records'
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

/** The chronicle as it stands at the reader's bookmark. */
export type CharacterChronicleProps = { readonly chronicle: Chronicle }

/**
 * The stories the reader has reached, as one ledger down the page: the
 * episode in mono, the title as a heading, the paragraph under it.
 *
 * Every story here is one the server has already decided the reader may
 * read; the component draws what it is given and never a count of what it
 * is not. With nothing reached it draws nothing at all — a heading over an
 * empty list would say that stories are coming, which is the spoiler.
 */
export function CharacterChronicle({
  chronicle,
}: CharacterChronicleProps): null | ReactElement {
  const { t } = useLocale()

  // The stories count in anime episodes. A reader who counts in chapters
  // reaches none of them, and is told why instead of shown nothing.
  if (chronicle.mode === 'chapterNote') {
    return (
      <p {...stylex.props(styles.note)}>{t('character.chronicleInEpisodes')}</p>
    )
  }

  if (chronicle.entries.length === 0) {
    return null
  }

  return (
    <ol {...stylex.props(styles.ledger)}>
      {chronicle.entries.map((entry) => {
        return (
          <StoryRow
            key={entry.episode}
            entry={entry}
          />
        )
      })}
    </ol>
  )
}

/** One story: the episode mark, the title, the paragraph. */
function StoryRow({ entry }: { readonly entry: ChronicleEntry }): ReactElement {
  const { t } = useLocale()

  return (
    <li {...stylex.props(styles.story)}>
      <p {...stylex.props(styles.mark)}>
        {t('character.chronicleEpisode', { episode: entry.episode })}
      </p>
      <div {...stylex.props(styles.words)}>
        <h3 {...stylex.props(styles.title)}>{entry.title}</h3>
        <p {...stylex.props(styles.body)}>
          <Prose segments={entry.body} />
        </p>
      </div>
    </li>
  )
}

/**
 * A paragraph cut into words and names. A name is a link to the character's
 * own page, which is always one the reader may open: the server only builds
 * a link from a story the reader has reached, and a story may only name a
 * character filed no later than its own episode.
 */
function Prose({
  segments,
}: {
  readonly segments: readonly ProseSegment[]
}): ReactElement {
  const { locale } = useLocale()

  return (
    <>
      {keyed(segments).map(({ key, segment }) => {
        return segment.kind === 'text' ?
            <span key={key}>{segment.text}</span>
          : <Link
              key={key}
              params={{ locale, id: segment.id }}
              to="/$locale/characters/$id"
              {...stylex.props(styles.link)}
            >
              {segment.name}
            </Link>
      })}
    </>
  )
}

/**
 * Segments have no identity of their own, so each is keyed by where in the
 * paragraph it starts: stable for as long as the paragraph is, and the
 * paragraph is only ever replaced whole with the story it belongs to.
 */
function keyed(
  segments: readonly ProseSegment[],
): readonly { readonly key: string; readonly segment: ProseSegment }[] {
  let offset = 0

  return segments.map((segment) => {
    const key = String(offset)
    offset +=
      segment.kind === 'text' ? segment.text.length : segment.name.length

    return { key, segment }
  })
}

const styles = stylex.create({
  // One rule down the page, the stories hung off it: a ledger read in order,
  // not a grid of cards.
  ledger: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    minWidth: 0,
  },
  story: {
    paddingBlock: space.lg,
    alignItems: 'baseline',
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    columnGap: space.xl,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'minmax(8rem, 10rem) minmax(0, 1fr)',
    },
    rowGap: space.xs,
    minWidth: 0,
  },
  // The episode in the same voice as the route position: mono, accent,
  // tabular, so a column of them lines up down the ledger.
  mark: {
    margin: 0,
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.base,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  words: { gap: space.xs, display: 'grid', minWidth: 0 },
  title: {
    margin: 0,
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  body: {
    margin: 0,
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '60ch',
  },
  note: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  // The same link voice as the facts ledger: colour on hover, the rule under
  // it reserved at rest so nothing shifts when the pointer arrives.
  link: {
    color: {
      'default': color.ink,
      ':hover': color.accent,
      ':active': color.ink2,
    },
    fontWeight: 600,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': color.rule2, ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '3px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },
})
