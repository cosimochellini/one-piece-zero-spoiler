import * as stylex from '@stylexjs/stylex'
import { type ReactNode, useEffect, useId, useState } from 'react'

import { CharacterCard } from '~/components/CharacterCard'
import { CharacterTile } from '~/components/CharacterTile'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { Button } from '~/components/ui/Button'
import { type BookSection, matchName, type NameMatch } from '~/data/characters'
import { orderByMode } from '~/data/order'
import type { Entity } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import {
  type Bookmark,
  type BookmarkMode,
  modeOf,
} from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
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

export type CharacterGridProps = {
  /** The characters in evidence, in route order: the ones drawn as crests. */
  readonly featured: readonly Entity[]
  /** The whole book, shelved by arc, in route order. */
  readonly bookmark: Bookmark
  readonly sections: readonly BookSection[]
}

type Match = { readonly entry: Entity; readonly match: NameMatch }

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
 * announcement to a screen reader waits, 250ms after the last keystroke, so a
 * reader typing "Nami" hears one count and not four.
 */
export function CharacterGrid({
  featured,
  sections,
  bookmark,
}: CharacterGridProps) {
  const { locale, t } = useLocale()
  const fieldId = useId()
  const [query, setQuery] = useState('')
  // Crests and tiles run in the order of the threshold the reader counts in,
  // so the open ones are always a prefix of each list.
  const mode = modeOf(bookmark)

  const everyone = sections.flatMap((section) => section.characters)
  const open = everyone.filter((entry) => isRevealed(entry, bookmark))
  const matched = new Map<string, Match>(
    open
      .map((entry) => ({
        entry,
        match: matchName(entry, query, locale, bookmark),
      }))
      .filter(({ match }) => match.matches)
      .map((match) => [match.entry.id, match]),
  )
  const matchOf = (entry: Entity) => matched.get(entry.id)

  const ordered = orderByMode(featured, mode)
  const featuredOpen = ordered.filter((entry) => isRevealed(entry, bookmark))
  const featuredCovered = ordered.filter(
    (entry) => !isRevealed(entry, bookmark),
  )
  const featuredMatches = featuredOpen
    .map(matchOf)
    .filter((match): match is Match => match !== undefined)

  const trimmed = query.trim()
  const status =
    trimmed !== '' && matched.size === 0 ?
      t('characters.noMatch', { query: trimmed })
    : t('characters.shown', { count: matched.size, total: open.length })
  const announced = useSettled(status, 250)

  return (
    <div {...stylex.props(styles.book)}>
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
              setQuery(event.target.value)
            }}
            placeholder="Nami"
            spellCheck={false}
            type="search"
            value={query}
            {...stylex.props(styles.field)}
          />
          {/*
            The slot is always there, so the field does not change width when
            a query appears. The button stays mounted and is hidden with
            `visibility`, which keeps the row's geometry identical in both
            states and takes it out of the tab order. The `hidden` attribute
            alone would not: the button's own `display` wins over the user
            agent's `[hidden]` rule.
          */}
          <span {...stylex.props(styles.clearSlot)}>
            <Button
              aria-label={t('characters.searchClear')}
              hidden={trimmed === ''}
              onClick={() => {
                setQuery('')
              }}
              sx={trimmed === '' ? styles.clearHidden : undefined}
              variant="quiet"
            >
              ×
            </Button>
          </span>
        </div>
        <p
          aria-live="polite"
          {...stylex.props(
            styles.status,
            trimmed !== '' && matched.size === 0 && styles.statusEmpty,
          )}
        >
          {announced}
        </p>
      </div>

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
          <p {...stylex.props(styles.partLede)}>
            {t('characters.featuredLede')}
          </p>
        </div>

        {featuredMatches.length === 0 ? null : (
          <CharacterCardList>
            {featuredMatches.map(({ entry, match }) => {
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

        <section
          aria-labelledby={`${fieldId}-fog`}
          {...stylex.props(styles.fog)}
        >
          <h3
            id={`${fieldId}-fog`}
            {...stylex.props(styles.fogTitle)}
          >
            {featuredCovered.length === 0 ?
              t('characters.allOpen')
            : featuredCovered.length === 1 ?
              t('characters.foggedTitleOne')
            : t('characters.foggedTitle', { count: featuredCovered.length })}
          </h3>
          {featuredCovered.length === 0 ? null : (
            <>
              <p {...stylex.props(styles.fogHint)}>
                {t('characters.foggedHint')}
              </p>
              <CharacterCardList>
                {featuredCovered.map((entry) => {
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
      </section>

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

        {shelvesInOrder(sections, mode).map((section) => {
          return (
            <Shelf
              key={section.arc.id}
              bookmark={bookmark}
              headingId={`${fieldId}-${section.arc.id}`}
              matchOf={matchOf}
              searching={trimmed !== ''}
              section={section}
            />
          )
        })}
      </section>
    </div>
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
 * One shelf: the arc's name as a heading, the threshold it opens on and how
 * many characters it holds, then the open tiles that answer the search and
 * every covered tile, in that order. The heading is veiled when the arc is
 * covered, which for a reader counting in episodes only happens when every
 * tile on the shelf is covered too. A shelf with nothing to show during a search is left out;
 * with no search every shelf is on the page.
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
  readonly matchOf: (entry: Entity) => Match | undefined
  readonly searching: boolean
  readonly section: BookSection
}) {
  const { locale, t } = useLocale()
  const threshold = useThreshold()
  const { arc } = section
  const characters = orderByMode(section.characters, modeOf(bookmark))
  const arcOpen = isRevealed(arc, bookmark)

  const shown = characters
    .filter((entry) => isRevealed(entry, bookmark))
    .map(matchOf)
    .filter((match): match is Match => match !== undefined)
  const covered = characters.filter((entry) => !isRevealed(entry, bookmark))

  if (searching && shown.length === 0 && covered.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.shelf)}
    >
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
          revealed={arcOpen}
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
            {characters.length === 1 ?
              t('characters.sectionCountOne')
            : t('characters.sectionCount', { count: characters.length })}
          </span>
        </p>
      </div>

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
    </section>
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
}) {
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

const styles = stylex.create({
  book: { gap: space.xl2, display: 'grid' },

  search: { gap: space.xs, display: 'grid', justifyItems: 'start' },
  label: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
  },
  fieldRow: {
    gap: space.xs,
    alignItems: 'center',
    display: 'flex',
    maxWidth: '100%',
  },
  field: {
    'borderColor': { 'default': color.rule2, ':focus': color.ink },
    'borderRadius': radius.input,
    'borderStyle': 'solid',
    // Constant in every state; the outline carries focus.
    'borderWidth': rule.fine,
    'paddingBlock': space.xs2,
    'paddingInline': space.sm,
    'appearance': 'textfield',
    'backgroundColor': { 'default': color.paper, ':hover': color.paper2 },
    'color': color.ink,
    'fontFamily': font.body,
    'fontSize': text.lg,
    'fontWeight': 600,
    'outlineColor': { 'default': 'transparent', ':focus-visible': color.focus },
    'outlineOffset': space.xs3,
    'outlineStyle': 'solid',
    'outlineWidth': rule.fine,
    'transitionDuration': dur.micro,
    'transitionProperty': 'background-color, border-color',
    'transitionTimingFunction': ease.out,
    // The same 44px as every button on the site.
    'minHeight': '44px',
    'minWidth': 0,
    'width': 'min(100%, 22rem)',
    '::-webkit-search-cancel-button': { appearance: 'none' },
    '::placeholder': { color: color.muted, fontWeight: 400 },
  },
  clearSlot: { display: 'inline-flex', flexShrink: 0, minWidth: '44px' },
  clearHidden: { visibility: 'hidden' },
  status: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    // Reserved whether or not there is anything to say.
    minHeight: '1lh',
  },
  statusEmpty: { color: color.ink2 },

  // The two parts of the book, each with an inventory heading: the crests,
  // then the shelves.
  part: { gap: space.lg, display: 'grid' },
  partHead: { gap: space.xs2, display: 'grid' },
  partTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  partLede: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },

  grid: {
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 40rem)': 'repeat(3, minmax(0, 1fr))',
      '@media (min-width: 60rem)': 'repeat(4, minmax(0, 1fr))',
      '@media (min-width: 76rem)': 'repeat(5, minmax(0, 1fr))',
    },
    listStyleType: 'none',
    paddingInlineStart: 0,
    rowGap: space.xl,
  },

  // The fog band is set apart by a dashed rule, the same mark the route uses
  // for the stretch the reader has not sailed.
  fog: {
    gap: space.md,
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'dashed',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    paddingBlockStart: space.lg,
  },
  fogTitle: {
    color: color.muted,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  fogHint: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    marginBlockStart: `calc(-1 * ${space.xs})`,
    maxWidth: '58ch',
  },

  // A shelf: a hairline above, the arc's name and its two facts, then the
  // tiles four across on a wide page and one across on a phone. Long shelves
  // far down the page are skipped by the renderer until they scroll near.
  shelf: {
    containIntrinsicSize: 'auto 24rem',
    gap: space.md,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    contentVisibility: 'auto',
    display: 'grid',
    paddingBlockStart: space.md,
  },
  shelfHead: {
    alignItems: 'baseline',
    columnGap: space.md,
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: space.xs2,
  },
  shelfTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  shelfMeta: {
    color: color.muted,
    columnGap: space.sm,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: text.xs,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  shelfEpisode: {
    color: color.ink2,
    fontFamily: font.mono,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
  },
  tiles: {
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 60rem)': 'repeat(3, minmax(0, 1fr))',
      '@media (min-width: 76rem)': 'repeat(4, minmax(0, 1fr))',
    },
    listStyleType: 'none',
    paddingInlineStart: 0,
    rowGap: space.md,
  },
})
