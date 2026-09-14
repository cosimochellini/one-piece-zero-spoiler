import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type ReactNode,
  Suspense,
  use,
  useDeferredValue,
  useId,
  useState,
} from 'react'

import { CatalogueSection } from '~/components/CatalogueSection'
import { CharacterCard } from '~/components/CharacterCard'
import { styles } from '~/components/CharacterGrid.styles'
import {
  CharacterShelves,
  type ShelvesSource,
} from '~/components/CharacterShelves'
import { FogBand, type FogTitles } from '~/components/FogBand'
import { matchesIn } from '~/components/recordMatches'
import { SearchField } from '~/components/SearchField'
import { searchStyles } from '~/components/SearchField.styles'
import { useSettled } from '~/components/useSettled'
import { useT } from '~/i18n/LocaleContext'
import { foldName } from '~/lib/search/fold'
import type {
  CharacterView,
  CoveredRecord,
  SearchableCharacter,
} from '~/lib/view/records'

// Long enough that a reader typing "Nami" hears one count and not four, short
// enough that the count still arrives while the query is under their hands.
const ANNOUNCE_DELAY_MS = 250

/** What the signal book's fog band calls itself at each count. */
const CHARACTER_FOG: FogTitles = {
  allOpen: 'characters.allOpen',
  hint: 'characters.foggedHint',
  many: 'characters.foggedTitle',
  one: 'characters.foggedTitleOne',
}

/** What the signal book is built from: the crests, the shelves, the query. */
export type CharacterGridProps = {
  /** The characters in evidence: the ones drawn as crests. */
  readonly featuredCovered: readonly CoveredRecord[]
  readonly featuredOpen: readonly SearchableCharacter[]
  readonly peek: (handle: string) => Promise<CharacterView>
  /**
   * The shelves, streamed. The crests are above the fold and there are
   * thirty-six of them; the shelves are three hundred and twenty-six tiles
   * with a drawing each, and they are the part of this page worth not
   * waiting for.
   */
  readonly shelfCount: number
  readonly shelves: ShelvesSource
}

/**
 * The signal book: the featured characters as crests on one uniform grid,
 * then everyone the archive has filed as tiles on shelves, one shelf per
 * arc, with a search that only the open ones answer.
 *
 * That last rule is the spoiler system applied to a search box. A covered
 * character whose card appeared when its name was typed would confirm the
 * name, so the fogged cards sit in a band of their own below the crests, and
 * the fogged tiles stay on their shelves, and neither ever moves: typing
 * filters the open pages and leaves the fog exactly as it was.
 *
 * The names arrive folded, so a keystroke costs one folded query and a few
 * hundred `indexOf` calls. Only the announcement to a screen reader waits, so
 * a reader still mid-word is not read a fresh count on every keystroke.
 */
export function CharacterGrid({
  featuredOpen,
  featuredCovered,
  shelves,
  shelfCount,
  peek,
}: CharacterGridProps): ReactElement {
  const t = useT()
  const fieldId = useId()
  const [query, setQuery] = useState('')
  const trimmed = query.trim()
  // The field is never deferred; the lists behind it are.
  const needle = useDeferredValue(foldName(trimmed))

  return (
    <div {...stylex.props(styles.book)}>
      <SearchField
        clearLabel={t('characters.searchClear')}
        fieldId={fieldId}
        label={t('characters.searchLabel')}
        onQuery={setQuery}
        placeholder="Nami"
        query={query}
        status={
          // The count is over every open character, so it cannot be said
          // until the shelves have landed. Its own boundary, so the field
          // beside it never suspends: an input that unmounts mid-word loses
          // the word and the focus with it.
          <Suspense
            fallback={
              <p
                aria-busy="true"
                aria-live="polite"
                {...stylex.props(searchStyles.status)}
              />
            }
          >
            <SearchStatus
              needle={needle}
              query={trimmed}
              shelves={shelves}
            />
          </Suspense>
        }
      />

      <FeaturedCrests
        covered={featuredCovered}
        fieldId={fieldId}
        needle={needle}
        open={featuredOpen}
        peek={peek}
      />

      <CharacterShelves
        fieldId={fieldId}
        needle={needle}
        peek={peek}
        shelfCount={shelfCount}
        shelves={shelves}
      />
    </div>
  )
}

/**
 * How many open characters the query answers, out of how many there are.
 * Reads the shelves, so it lives inside a boundary of its own.
 */
function SearchStatus({
  shelves,
  needle,
  query,
}: {
  readonly needle: string
  readonly query: string
  readonly shelves: ShelvesSource
}): ReactElement {
  const t = useT()
  const sections = shelves instanceof Promise ? use(shelves) : shelves
  const open = sections.flatMap((section) => section.open)
  const count = matchesIn(open, needle).length
  const empty = query !== '' && count === 0
  const status =
    empty ?
      t('characters.noMatch', { query })
    : t('characters.shown', { count, total: open.length })

  return (
    <p
      aria-live="polite"
      {...stylex.props(searchStyles.status, empty && searchStyles.statusEmpty)}
    >
      {useSettled(status, ANNOUNCE_DELAY_MS)}
    </p>
  )
}

/**
 * The crests: the featured characters the reader has reached, filtered by the
 * query, and below them a band of the ones they have not. The two never trade
 * places, which is the whole reason they are kept in separate lists.
 */
function FeaturedCrests({
  open,
  covered,
  fieldId,
  needle,
  peek,
}: {
  readonly covered: readonly CoveredRecord[]
  readonly fieldId: string
  readonly needle: string
  readonly open: readonly SearchableCharacter[]
  readonly peek: (handle: string) => Promise<CharacterView>
}): ReactElement {
  const t = useT()
  const matches = matchesIn(open, needle)

  return (
    <CatalogueSection
      headingId={`${fieldId}-featured`}
      lede={t('characters.featuredLede')}
      title={t('characters.featuredTitle')}
    >
      {matches.length === 0 ? null : (
        <CharacterCardList>
          {matches.map(({ entry, match }) => {
            return (
              <CharacterCard
                key={`open-${entry.id}`}
                highlight={match.highlight}
                peek={peek}
                slot={{ open: true, record: entry }}
              />
            )
          })}
        </CharacterCardList>
      )}

      <FogBand
        count={covered.length}
        headingId={`${fieldId}-fog`}
        words={CHARACTER_FOG}
      >
        <CharacterCardList>
          {covered.map((entry) => {
            return (
              <CharacterCard
                key={`fog-${entry.handle}`}
                peek={peek}
                slot={{ open: false, covered: entry }}
              />
            )
          })}
        </CharacterCardList>
      </FogBand>
    </CatalogueSection>
  )
}

/**
 * The grid the cards sit on: two across on a phone, up to five on a wide
 * page, every column the same width. `minmax(0, 1fr)` rather than `1fr`
 * because each cell holds a drawing, and a bare `1fr` track lets a long name
 * push the row past the viewport.
 */
export function CharacterCardList({
  children,
}: {
  readonly children: ReactNode
}): ReactElement {
  return <ul {...stylex.props(styles.grid)}>{children}</ul>
}
