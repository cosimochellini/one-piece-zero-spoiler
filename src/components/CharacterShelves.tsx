import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/CharacterGrid.styles'
import type { Match, MatchOf } from '~/components/characterMatches'
import { CharacterTile } from '~/components/CharacterTile'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import type { BookSection } from '~/data/characters'
import { orderByMode } from '~/data/order'
import type { Entity } from '~/data/types'
import { useLocale, useT } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import {
  type Bookmark,
  type BookmarkMode,
  modeOf,
} from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'

/** What a shelf needs: the arc it holds, the reader, and the live query. */
export type CharacterShelvesProps = {
  readonly bookmark: Bookmark
  /** Prefix for every heading id on the page, so the shelves cannot collide. */
  readonly fieldId: string
  readonly matchOf: MatchOf
  readonly searching: boolean
  readonly sections: readonly BookSection[]
}

/**
 * Everyone the archive has filed, one shelf per arc, in the order the reader's
 * own unit reaches those arcs.
 *
 * Nothing here ever moves under a search. The open tiles are filtered, the
 * covered ones stay where they are, and a shelf leaves the page only when it
 * has neither left to show — otherwise a shelf appearing or vanishing would
 * itself answer the question the fog refuses to answer.
 */
export function CharacterShelves({
  sections,
  fieldId,
  bookmark,
  matchOf,
  searching,
}: CharacterShelvesProps): ReactElement {
  const t = useT()

  return (
    <section
      aria-labelledby={`${fieldId}-book`}
      {...stylex.props(styles.part)}
    >
      <div {...stylex.props(styles.partHead)}>
        <h2
          id={`${fieldId}-book`}
          {...stylex.props(styles.partTitle)}
        >
          {t('characters.bookTitle')}
        </h2>
        <p {...stylex.props(styles.partLede)}>{t('characters.bookLede')}</p>
      </div>

      {shelvesInOrder(sections, modeOf(bookmark)).map((section) => {
        return (
          <Shelf
            key={section.arc.id}
            bookmark={bookmark}
            headingId={`${fieldId}-${section.arc.id}`}
            matchOf={matchOf}
            searching={searching}
            section={section}
          />
        )
      })}
    </section>
  )
}

/**
 * The shelves in the order the reader's unit reaches their arcs. The
 * sections come shelved by episode; a reader who counts in chapters gets
 * the same shelves sorted by chapter, so the open ones stay a prefix.
 */
function shelvesInOrder(
  sections: readonly BookSection[],
  mode: BookmarkMode,
): readonly BookSection[] {
  const byArc = new Map(sections.map((section) => [section.arc.id, section]))

  return orderByMode(
    sections.map((section) => section.arc),
    mode,
  ).flatMap((arc) => {
    const section = byArc.get(arc.id)
    return section === undefined ? [] : [section]
  })
}

/**
 * One shelf: the arc's head, then the open tiles that answer the search and
 * every covered tile, in that order. A shelf with nothing to show during a
 * search is left out; with no search every shelf is on the page.
 */
function Shelf({
  section,
  bookmark,
  headingId,
  matchOf,
  searching,
}: {
  readonly bookmark: Bookmark
  readonly headingId: string
  readonly matchOf: MatchOf
  readonly searching: boolean
  readonly section: BookSection
}): null | ReactElement {
  const characters = orderByMode(section.characters, modeOf(bookmark))
  const shown = characters.flatMap((entry) => {
    if (!isRevealed(entry, bookmark)) {
      return []
    }
    const match = matchOf(entry)
    return match === undefined ? [] : [match]
  })
  const covered = characters.filter((entry) => !isRevealed(entry, bookmark))

  if (searching && shown.length === 0 && covered.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.shelf)}
    >
      <ShelfHead
        arc={section.arc}
        count={characters.length}
        headingId={headingId}
        revealed={isRevealed(section.arc, bookmark)}
      />
      <ShelfTiles
        covered={covered}
        shown={shown}
      />
    </section>
  )
}

/**
 * The arc's name, the threshold it opens on, and how many characters it holds.
 * The name is veiled when the arc is covered, which for a reader counting in
 * episodes only happens when every tile on the shelf is covered too; the
 * threshold and the count stay legible either way, because they are the
 * promise and not the spoiler.
 */
function ShelfHead({
  arc,
  count,
  headingId,
  revealed,
}: {
  readonly arc: Entity
  readonly count: number
  readonly headingId: string
  readonly revealed: boolean
}): ReactElement {
  const { locale, t } = useLocale()
  const threshold = useThreshold()

  return (
    <div {...stylex.props(styles.shelfHead)}>
      <SpoilerVeil
        density="inline"
        gated={arc}
        placeholder={
          <h3
            id={headingId}
            {...stylex.props(styles.shelfTitle)}
          >
            {t('characters.sectionFogged')}
          </h3>
        }
        revealed={revealed}
      >
        <h3
          id={headingId}
          {...stylex.props(styles.shelfTitle)}
        >
          {arc.name[locale]}
        </h3>
      </SpoilerVeil>
      <p {...stylex.props(styles.shelfMeta)}>
        <span {...stylex.props(styles.shelfEpisode)}>
          {threshold('characters.sectionOpensAt', arc)}
        </span>
        <span>
          {count === 1 ?
            t('characters.sectionCountOne')
          : t('characters.sectionCount', { count })}
        </span>
      </p>
    </div>
  )
}

/**
 * The open tiles that answered the search, then every covered one. The two
 * runs are kept apart and in this order so a covered tile never changes place
 * as the reader types.
 */
function ShelfTiles({
  shown,
  covered,
}: {
  readonly covered: readonly Entity[]
  readonly shown: readonly Match[]
}): ReactElement {
  return (
    <ul {...stylex.props(styles.tiles)}>
      {shown.map(({ entry, match }) => {
        return (
          <CharacterTile
            key={entry.id}
            entity={entry}
            highlight={match.highlight}
            revealed
          />
        )
      })}
      {covered.map((entry) => {
        return (
          <CharacterTile
            key={entry.id}
            entity={entry}
            revealed={false}
          />
        )
      })}
    </ul>
  )
}
