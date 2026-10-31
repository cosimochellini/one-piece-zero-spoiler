import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { type ReactElement, useState } from 'react'

import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import { useSeriesParams, useThreshold } from '~/lib/progress/BookmarkContext'
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
export interface CharacterChronicleProps {
  chronicle: Chronicle
  /**
   * Asks the server for the reached stories the page left out. A prop, not an
   * import: a component may not call a server function.
   */
  loadRest?: (() => Promise<ChronicleEntry[]>) | undefined
}

/**
 * The stories the reader has reached, latest first, as one ledger down the
 * page: the mark in mono, the title as a heading, the paragraph under it.
 *
 * Every story here is one the server has already decided the reader may
 * read; the component draws what it is given and never a count of what it
 * is not. With nothing reached it draws nothing at all — a heading over an
 * empty list would say that stories are coming, which is the spoiler.
 */
export function CharacterChronicle({
  chronicle,
  loadRest,
}: CharacterChronicleProps): null | ReactElement {
  const { older, failed, loading, more } = useOlder(chronicle, loadRest)

  if (chronicle.entries.length === 0) {
    return null
  }

  return (
    <>
      <ol {...stylex.props(styles.ledger)}>
        {[...chronicle.entries, ...older].map((entry) => {
          return (
            <StoryRow
              // Two stories can share an episode, never an episode and a title.
              key={`${String(entry.revealedAtEpisode)}-${entry.title}`}
              entry={entry}
            />
          )
        })}
      </ol>
      {more !== undefined && (
        <ShowMore
          failed={failed}
          loading={loading}
          onClick={more}
        />
      )}
    </>
  )
}

/**
 * The older stories the reader asked for, and the button's state. They belong
 * to the chronicle they were asked for: a moved bookmark brings a new one, and
 * these are dropped with it. `more` is `undefined` when there is nothing to ask.
 */
function useOlder(
  chronicle: Chronicle,
  loadRest: CharacterChronicleProps['loadRest'],
): {
  failed: boolean
  loading: boolean
  more: (() => void) | undefined
  older: ChronicleEntry[]
} {
  const [loaded, setLoaded] = useState<null | {
    entries: ChronicleEntry[]
    of: Chronicle
  }>(null)
  const [state, setState] = useState<'failed' | 'idle' | 'loading'>('idle')
  const older = loaded?.of === chronicle ? loaded.entries : []
  const waiting = chronicle.rest > 0 && older.length === 0

  const ask = async (load: () => Promise<ChronicleEntry[]>): Promise<void> => {
    setState('loading')
    try {
      setLoaded({ of: chronicle, entries: await load() })
      setState('idle')
    } catch {
      setState('failed')
    }
  }

  return {
    older,
    failed: state === 'failed',
    loading: state === 'loading',
    more:
      waiting && loadRest !== undefined ? () => void ask(loadRest) : undefined,
  }
}

/** The button under the ledger, and what went wrong if it did. */
function ShowMore({
  failed,
  loading,
  onClick,
}: {
  failed: boolean
  loading: boolean
  onClick: () => void
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.more)}>
      <Button
        aria-busy={loading}
        disabled={loading}
        onClick={onClick}
      >
        {t('character.chronicleMore')}
      </Button>
      {failed && (
        <p
          role="alert"
          {...stylex.props(styles.body)}
        >
          {t('character.chronicleMoreError')}
        </p>
      )}
    </div>
  )
}

/** One story: the mark in the reader's unit, the title, the paragraph. */
function StoryRow({ entry }: { entry: ChronicleEntry }): ReactElement {
  const threshold = useThreshold()

  return (
    <li {...stylex.props(styles.story)}>
      <p {...stylex.props(styles.mark)}>{threshold('chart.opensAt', entry)}</p>
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
 * character filed no later than its own episode. The home page sets its
 * stories in the same prose.
 */
export function Prose({
  segments,
}: {
  segments: ProseSegment[]
}): ReactElement {
  const { series, locale } = useSeriesParams()

  return (
    <>
      {keyed(segments).map(({ key, segment }) => {
        return segment.kind === 'text' ?
            <span key={key}>{segment.text}</span>
          : <Link
              key={key}
              params={{ series, locale, id: segment.id }}
              to="/$series/$locale/characters/$id"
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
  segments: ProseSegment[],
): { key: string; segment: ProseSegment }[] {
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
  more: {
    gap: space.sm,
    display: 'grid',
    justifyItems: 'start',
    paddingBlockStart: space.lg,
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
