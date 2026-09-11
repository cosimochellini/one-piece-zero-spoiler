import * as stylex from '@stylexjs/stylex'
import { useEffect, useId, useState, type ReactNode } from 'react'

import { CharacterCard } from '~/components/CharacterCard'
import { Button } from '~/components/ui/Button'
import { matchName } from '~/data/characters'
import type { Entity } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import type { Progress } from '~/lib/progress/episode'
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
  /** The characters to list, in route order. */
  readonly entries: readonly Entity[]
  readonly progress: Progress
}

/**
 * The signal book: every listed character as a crest on one uniform grid,
 * with a search that only the open ones answer.
 *
 * That last rule is the spoiler system applied to a search box. A covered
 * character whose card appeared when its name was typed would confirm the
 * name, so the fogged cards sit in their own band below the results and never
 * move: typing filters the open pages and leaves the fog exactly as it was.
 *
 * Filtering is instant, because it is twenty names in memory. Only the
 * announcement to a screen reader waits, 250ms after the last keystroke, so a
 * reader typing "Nami" hears one count and not four.
 */
export function CharacterGrid({ entries, progress }: CharacterGridProps) {
  const { locale, t } = useLocale()
  const fieldId = useId()
  const [query, setQuery] = useState('')

  const open = entries.filter((entry) => isRevealed(entry, progress))
  const covered = entries.filter((entry) => !isRevealed(entry, progress))

  const matches = open
    .map((entry) => ({ entry, match: matchName(entry, query, locale) }))
    .filter(({ match }) => match.matches)

  const trimmed = query.trim()
  const status =
    trimmed !== '' && matches.length === 0
      ? t('characters.noMatch', { query: trimmed })
      : t('characters.shown', { count: matches.length, total: open.length })
  const announced = useSettled(status, 250)

  return (
    <div {...stylex.props(styles.book)}>
      <div role="search" {...stylex.props(styles.search)}>
        <label htmlFor={fieldId} {...stylex.props(styles.label)}>
          {t('characters.searchLabel')}
        </label>
        <div {...stylex.props(styles.fieldRow)}>
          <input
            id={fieldId}
            type="search"
            autoComplete="off"
            spellCheck={false}
            value={query}
            placeholder="Nami"
            onChange={(event) => {
              setQuery(event.target.value)
            }}
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
              variant="quiet"
              aria-label={t('characters.searchClear')}
              hidden={trimmed === ''}
              sx={trimmed === '' ? styles.clearHidden : undefined}
              onClick={() => {
                setQuery('')
              }}
            >
              ×
            </Button>
          </span>
        </div>
        <p
          aria-live="polite"
          {...stylex.props(
            styles.status,
            trimmed !== '' && matches.length === 0 && styles.statusEmpty,
          )}
        >
          {announced}
        </p>
      </div>

      {matches.length === 0 ? null : (
        <CharacterCardList>
          {matches.map(({ entry, match }) => (
            <CharacterCard
              key={entry.id}
              entity={entry}
              revealed
              highlight={match.highlight}
            />
          ))}
        </CharacterCardList>
      )}

      <section aria-labelledby={`${fieldId}-fog`} {...stylex.props(styles.fog)}>
        <h2 id={`${fieldId}-fog`} {...stylex.props(styles.fogTitle)}>
          {covered.length === 0
            ? t('characters.allOpen')
            : covered.length === 1
              ? t('characters.foggedTitleOne')
              : t('characters.foggedTitle', { count: covered.length })}
        </h2>
        {covered.length === 0 ? null : (
          <>
            <p {...stylex.props(styles.fogHint)}>
              {t('characters.foggedHint')}
            </p>
            <CharacterCardList>
              {covered.map((entry) => (
                <CharacterCard key={entry.id} entity={entry} revealed={false} />
              ))}
            </CharacterCardList>
          </>
        )}
      </section>
    </div>
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
  book: {
    display: 'grid',
    gap: space.xl,
  },

  search: {
    display: 'grid',
    gap: space.xs,
    justifyItems: 'start',
  },
  label: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
  },
  fieldRow: {
    alignItems: 'center',
    display: 'flex',
    gap: space.xs,
    maxWidth: '100%',
  },
  field: {
    appearance: 'textfield',
    backgroundColor: { default: color.paper, ':hover': color.paper2 },
    borderColor: { default: color.rule2, ':focus': color.ink },
    borderRadius: radius.input,
    borderStyle: 'solid',
    // Constant in every state; the outline carries focus.
    borderWidth: rule.fine,
    color: color.ink,
    fontFamily: font.body,
    fontSize: text.lg,
    fontWeight: 600,
    // The same 44px as every button on the site.
    minHeight: '44px',
    minWidth: 0,
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    paddingBlock: space.xs2,
    paddingInline: space.sm,
    transitionDuration: dur.micro,
    transitionProperty: 'background-color, border-color',
    transitionTimingFunction: ease.out,
    width: 'min(100%, 22rem)',
    '::placeholder': {
      color: color.muted,
      fontWeight: 400,
    },
    '::-webkit-search-cancel-button': {
      appearance: 'none',
    },
  },
  clearSlot: {
    display: 'inline-flex',
    flexShrink: 0,
    minWidth: '44px',
  },
  clearHidden: {
    visibility: 'hidden',
  },
  status: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    // Reserved whether or not there is anything to say.
    minHeight: '1lh',
  },
  statusEmpty: {
    color: color.ink2,
  },

  grid: {
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(2, minmax(0, 1fr))',
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
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'dashed',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    gap: space.md,
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
    maxWidth: '52ch',
  },
})
