import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type ReactNode,
  useEffect,
  useId,
  useState,
} from 'react'

import { CharacterCard } from '~/components/CharacterCard'
import { styles } from '~/components/CharacterGrid.styles'
import {
  type Match,
  matchesFor,
  type MatchOf,
} from '~/components/characterMatches'
import { CharacterShelves } from '~/components/CharacterShelves'
import { Button } from '~/components/ui/Button'
import type { BookSection } from '~/data/characters'
import { orderByMode } from '~/data/order'
import type { Entity } from '~/data/types'
import { useLocale, useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import {
  type Bookmark,
  type BookmarkMode,
  modeOf,
} from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'

// Long enough that a reader typing "Nami" hears one count and not four, short
// enough that the count still arrives while the query is under their hands.
const ANNOUNCE_DELAY_MS = 250

/** What the signal book is built from: the crests, the shelves, the reader. */
export type CharacterGridProps = {
  /** The characters in evidence, in route order: the ones drawn as crests. */
  readonly featured: readonly Entity[]
  /** The whole book, shelved by arc, in route order. */
  readonly bookmark: Bookmark
  readonly sections: readonly BookSection[]
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
 * Filtering is a few hundred names in memory and is instant. Only the
 * announcement to a screen reader waits, so a reader still mid-word is not
 * read a fresh count on every keystroke.
 */
export function CharacterGrid({
  featured,
  sections,
  bookmark,
}: CharacterGridProps): ReactElement {
  const { locale, t } = useLocale()
  const fieldId = useId()
  const [query, setQuery] = useState('')
  // Crests and tiles run in the order of the threshold the reader counts in,
  // so the open ones are always a prefix of each list.
  const mode = modeOf(bookmark)

  const everyone = sections.flatMap((section) => section.characters)
  const open = everyone.filter((entry) => isRevealed(entry, bookmark))
  const matched = matchesFor({ bookmark, locale, open, query })
  const matchOf: MatchOf = (entry) => matched.get(entry.id)

  const trimmed = query.trim()
  const empty = trimmed !== '' && matched.size === 0
  const status =
    empty ?
      t('characters.noMatch', { query: trimmed })
    : t('characters.shown', { count: matched.size, total: open.length })
  const announced = useSettled(status, ANNOUNCE_DELAY_MS)

  return (
    <div {...stylex.props(styles.book)}>
      <SearchBox
        empty={empty}
        fieldId={fieldId}
        onQuery={setQuery}
        query={query}
        status={announced}
      />

      <FeaturedCrests
        bookmark={bookmark}
        featured={featured}
        fieldId={fieldId}
        matchOf={matchOf}
        mode={mode}
      />

      <CharacterShelves
        bookmark={bookmark}
        fieldId={fieldId}
        matchOf={matchOf}
        searching={trimmed !== ''}
        sections={sections}
      />
    </div>
  )
}

/**
 * The one control on the page: a field, a clear button, and a line saying what
 * the query found. That line is `aria-live`, which is why it is given the
 * settled count rather than the live one.
 */
function SearchBox({
  fieldId,
  query,
  onQuery,
  status,
  empty,
}: {
  readonly empty: boolean
  readonly fieldId: string
  readonly onQuery: (query: string) => void
  readonly query: string
  readonly status: string
}): ReactElement {
  const t = useT()

  return (
    <div
      role="search"
      {...stylex.props(styles.search)}
    >
      <label
        htmlFor={fieldId}
        {...stylex.props(styles.label)}
      >
        {t('characters.searchLabel')}
      </label>
      <div {...stylex.props(styles.fieldRow)}>
        <input
          autoComplete="off"
          id={fieldId}
          onChange={(event) => {
            onQuery(event.target.value)
          }}
          placeholder="Nami"
          spellCheck={false}
          type="search"
          value={query}
          {...stylex.props(styles.field)}
        />
        <ClearSlot
          blank={query.trim() === ''}
          onClear={() => {
            onQuery('')
          }}
        />
      </div>
      <p
        aria-live="polite"
        {...stylex.props(styles.status, empty && styles.statusEmpty)}
      >
        {status}
      </p>
    </div>
  )
}

/**
 * The × that empties the field, and the space it keeps whether or not there is
 * anything to clear.
 *
 * The slot is always in the layout, so the field beside it does not change
 * width when a query appears. The button stays mounted and is hidden with
 * `visibility`, which keeps the row's geometry identical in both states and
 * takes it out of the tab order. The `hidden` attribute alone would not: the
 * button's own `display` wins over the user agent's `[hidden]` rule.
 */
function ClearSlot({
  blank,
  onClear,
}: {
  readonly blank: boolean
  readonly onClear: () => void
}): ReactElement {
  const t = useT()

  return (
    <span {...stylex.props(styles.clearSlot)}>
      <Button
        aria-label={t('characters.searchClear')}
        hidden={blank}
        onClick={onClear}
        sx={blank ? styles.clearHidden : undefined}
        variant="quiet"
      >
        ×
      </Button>
    </span>
  )
}

/**
 * The crests: the featured characters the reader has reached, filtered by the
 * query, and below them a band of the ones they have not. The two never trade
 * places, which is the whole reason they are kept in separate lists.
 */
function FeaturedCrests({
  featured,
  fieldId,
  bookmark,
  matchOf,
  mode,
}: {
  readonly bookmark: Bookmark
  readonly featured: readonly Entity[]
  readonly fieldId: string
  readonly matchOf: MatchOf
  readonly mode: BookmarkMode
}): ReactElement {
  const t = useT()
  const ordered = orderByMode(featured, mode)
  const covered = ordered.filter((entry) => !isRevealed(entry, bookmark))
  const matches = ordered
    .filter((entry) => isRevealed(entry, bookmark))
    .map((entry) => matchOf(entry))
    .filter((match): match is Match => match !== undefined)

  return (
    <section
      aria-labelledby={`${fieldId}-featured`}
      {...stylex.props(styles.part)}
    >
      <div {...stylex.props(styles.partHead)}>
        <h2
          id={`${fieldId}-featured`}
          {...stylex.props(styles.partTitle)}
        >
          {t('characters.featuredTitle')}
        </h2>
        <p {...stylex.props(styles.partLede)}>{t('characters.featuredLede')}</p>
      </div>

      {matches.length === 0 ? null : (
        <CharacterCardList>
          {matches.map(({ entry, match }) => {
            return (
              <CharacterCard
                key={entry.id}
                entity={entry}
                highlight={match.highlight}
                revealed
              />
            )
          })}
        </CharacterCardList>
      )}

      <FogBand
        covered={covered}
        headingId={`${fieldId}-fog`}
      />
    </section>
  )
}

/**
 * The band below the crests. It is on the page even with nothing under fog,
 * because a band that appeared the moment a reader fell behind would itself be
 * news; empty, it says so and shows no cards.
 */
function FogBand({
  covered,
  headingId,
}: {
  readonly covered: readonly Entity[]
  readonly headingId: string
}): ReactElement {
  const t = useT()

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.fog)}
    >
      <h3
        id={headingId}
        {...stylex.props(styles.fogTitle)}
      >
        {fogTitle(t, covered.length)}
      </h3>
      {covered.length === 0 ? null : (
        <>
          <p {...stylex.props(styles.fogHint)}>{t('characters.foggedHint')}</p>
          <CharacterCardList>
            {covered.map((entry) => {
              return (
                <CharacterCard
                  key={entry.id}
                  entity={entry}
                  revealed={false}
                />
              )
            })}
          </CharacterCardList>
        </>
      )}
    </section>
  )
}

/**
 * What the fog band calls itself. None, one and many are three different
 * sentences rather than one sentence with a count wedged into it.
 */
function fogTitle(t: Translate, count: number): string {
  if (count === 0) {
    return t('characters.allOpen')
  }
  if (count === 1) {
    return t('characters.foggedTitleOne')
  }

  return t('characters.foggedTitle', { count })
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

/** The value as it stood once it had stopped changing for `delay` ms. */
function useSettled<T>(value: T, delay: number): T {
  const [settled, setSettled] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSettled(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return settled
}
