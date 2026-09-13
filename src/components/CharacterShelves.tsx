import * as stylex from '@stylexjs/stylex'
import { type ReactElement, Suspense, use } from 'react'

import { CatalogueSection } from '~/components/CatalogueSection'
import { styles } from '~/components/CharacterGrid.styles'
import { type Match, matchesIn } from '~/components/characterMatches'
import { CharacterTile } from '~/components/CharacterTile'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useT } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type {
  CharacterView,
  CoveredRecord,
  ShelfView,
  Slot,
} from '~/lib/view/records'

/**
 * The shelves, or the promise of them.
 *
 * The route hands over a promise so the three hundred and twenty-six tiles
 * stream in behind the crests. A test hands over the array, because `use()`
 * does not resume under jsdom inside an `act` scope — a classic thrown
 * promise does, but `use` does not — and a streaming boundary that cannot be
 * awaited would mean the shelves went untested altogether.
 */
export type ShelvesSource = Promise<readonly ShelfView[]> | readonly ShelfView[]

/** What the shelves need: the arcs, the live query, and a way to ask. */
export type CharacterShelvesProps = {
  /** Prefix for every heading id on the page, so the shelves cannot collide. */
  readonly fieldId: string
  /** The query, already folded. Empty matches everything. */
  readonly needle: string
  readonly peek: (handle: string) => Promise<CharacterView>
  readonly shelves: ShelvesSource
  /** How many are coming, so the pending state reserves their height. */
  readonly shelfCount: number
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
  shelves,
  shelfCount,
  fieldId,
  needle,
  peek,
}: CharacterShelvesProps): ReactElement {
  const t = useT()

  return (
    <CatalogueSection
      headingId={`${fieldId}-book`}
      lede={t('characters.bookLede')}
      title={t('characters.bookTitle')}
    >
      <Suspense fallback={<ShelvesPending count={shelfCount} />}>
        <Shelves
          fieldId={fieldId}
          needle={needle}
          peek={peek}
          shelves={shelves}
        />
      </Suspense>
    </CatalogueSection>
  )
}

/**
 * The shelves once they are here. Keyed and labelled by position rather than
 * by the arc's id: a covered shelf has no id to use, and the one it used to
 * borrow put the covered arc's slug into the markup.
 */
function Shelves({
  shelves,
  fieldId,
  needle,
  peek,
}: {
  readonly fieldId: string
  readonly needle: string
  readonly peek: (handle: string) => Promise<CharacterView>
  readonly shelves: ShelvesSource
}): ReactElement {
  return (
    <>
      {useShelves(shelves).map((section, index) => {
        // The heading id is built from the shelf's position, not the arc's:
        // the id of a covered arc is its name slug, and it would end up in
        // the markup on `aria-labelledby`. The React key is the arc's own
        // identity — its id when it is open, its opaque handle when it is
        // not — because a key has to survive the list being re-read.
        const headingId = `${fieldId}-shelf-${String(index)}`

        return (
          <Shelf
            key={
              section.arc.open ?
                `open-${section.arc.record.id}`
              : `fog-${section.arc.covered.handle}`
            }
            headingId={headingId}
            needle={needle}
            peek={peek}
            section={section}
          />
        )
      })}
    </>
  )
}

/**
 * The shelves, waiting for them first if they are still on their way.
 *
 * Named as a hook because the lint rule reads names rather than bodies, and
 * `use` is not a hook: it may sit in a branch, which is what lets the array
 * form skip it entirely.
 */
function useShelves(source: ShelvesSource): readonly ShelfView[] {
  return source instanceof Promise ? use(source) : source
}

/**
 * The shelves' height before they arrive, so the page does not jump when they
 * do. The same `content-visibility` box as a real shelf, for the same reason:
 * the renderer skips what is far down the page.
 */
function ShelvesPending({ count }: { readonly count: number }): ReactElement {
  const t = useT()

  return (
    // Busy rather than hidden: the boxes themselves are decoration, but a
    // reader who cannot see them still needs to be told the shelves are on
    // their way rather than absent.
    <div aria-busy="true">
      <p {...stylex.props(styles.shelvesPending)}>{t('characters.loading')}</p>
      {Array.from({ length: count }, (_, index) => {
        return (
          <div
            key={index}
            aria-hidden="true"
            {...stylex.props(styles.shelf)}
          />
        )
      })}
    </div>
  )
}

/**
 * One shelf: the arc's head, then the open tiles that answer the search and
 * every covered tile, in that order. A shelf with nothing to show during a
 * search is left out; with no search every shelf is on the page.
 */
function Shelf({
  section,
  headingId,
  needle,
  peek,
}: {
  readonly headingId: string
  readonly needle: string
  readonly peek: (handle: string) => Promise<CharacterView>
  readonly section: ShelfView
}): null | ReactElement {
  const shown = matchesIn(section.open, needle)

  if (needle !== '' && shown.length === 0 && section.covered.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.shelf)}
    >
      <ShelfHead
        arc={section.arc}
        count={section.total}
        headingId={headingId}
        peek={peek}
      />
      <ShelfTiles
        covered={section.covered}
        peek={peek}
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
  peek,
}: {
  readonly arc: Slot<CharacterView>
  readonly count: number
  readonly headingId: string
  readonly peek: (handle: string) => Promise<CharacterView>
}): ReactElement {
  const t = useT()
  const threshold = useThreshold()

  return (
    <div {...stylex.props(styles.shelfHead)}>
      <SpoilerVeil
        density="inline"
        peek={peek}
        placeholder={
          <h3
            id={headingId}
            {...stylex.props(styles.shelfTitle)}
          >
            {t('characters.sectionFogged')}
          </h3>
        }
        slot={arc}
      >
        {(record) => {
          return (
            <h3
              id={headingId}
              {...stylex.props(styles.shelfTitle)}
            >
              {record.name}
            </h3>
          )
        }}
      </SpoilerVeil>
      <p {...stylex.props(styles.shelfMeta)}>
        <span {...stylex.props(styles.shelfEpisode)}>
          {threshold(
            'characters.sectionOpensAt',
            arc.open ? arc.record : arc.covered,
          )}
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
  peek,
}: {
  readonly covered: readonly CoveredRecord[]
  readonly peek: (handle: string) => Promise<CharacterView>
  readonly shown: readonly Match[]
}): ReactElement {
  return (
    <ul {...stylex.props(styles.tiles)}>
      {shown.map(({ entry, match }) => {
        return (
          <CharacterTile
            key={`open-${entry.id}`}
            highlight={match.highlight}
            peek={peek}
            slot={{ open: true, record: entry }}
          />
        )
      })}
      {covered.map((entry) => {
        return (
          <CharacterTile
            key={`fog-${entry.handle}`}
            peek={peek}
            slot={{ open: false, covered: entry }}
          />
        )
      })}
    </ul>
  )
}
