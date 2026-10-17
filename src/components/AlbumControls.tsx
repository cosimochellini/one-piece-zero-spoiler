import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { type Choice, ChoiceGroup } from '~/components/ChoiceGroup'
import { ControlBar } from '~/components/ControlBar'
import { SearchField } from '~/components/SearchField'
import { searchStyles } from '~/components/SearchField.styles'
import { styles } from '~/components/SpecimenBands.styles'
import { useSettled } from '~/components/useSettled'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import {
  type AlbumView,
  type FruitParams,
  fruitParams,
} from '~/lib/search/fruitParams'
import type { FruitBandView, FruitForm } from '~/lib/view/records'

// The same delay the signal book announces its own count with.
const ANNOUNCE_DELAY_MS = 250

/** Every kind a chip can pick, with "all" first. */
type FormPick = 'all' | FruitForm

/** What the bar reads and writes, and the count the album worked out. */
export interface AlbumControlsProps {
  bands: FruitBandView[]
  /** The open fruits the query finds on the plates shown. */
  count: number
  fieldId: string
  /**
   * Moves the page to new picks: `replace` for the query, which would leave
   * one history entry per letter otherwise, a new entry for a view or a kind.
   */
  onParams: (next: FruitParams, replace: boolean) => void
  /** The view, the kind and the query, read from the address. */
  params: FruitParams
}

/**
 * The album's control bar: the search field and its count, the view switch
 * and the kind chips. The count settles before it is announced, and its
 * total is the picked chip's own number.
 */
export function AlbumControls({
  bands,
  count,
  fieldId,
  onParams,
  params,
}: AlbumControlsProps): ReactElement {
  const t = useT()
  const query = params.q ?? ''
  const trimmed = query.trim()
  const pick: FormPick = params.form ?? 'all'
  const view: AlbumView = params.view ?? 'type'
  const choices = formChoices(t, bands)
  const empty = trimmed !== '' && count === 0
  const status = useSettled(
    statusOf(t, { choices, count, pick, query: trimmed }),
    ANNOUNCE_DELAY_MS,
  )

  return (
    <ControlBar
      searchLabel={t('fruits.searchOpen')}
      summary={summaryOf(t, { pick, query: trimmed, view })}
      toggleLabel={t('fruits.controls')}
    >
      <SearchField
        clearLabel={t('fruits.searchClear')}
        fieldId={fieldId}
        label={t('fruits.searchLabel')}
        onQuery={(next) => {
          onParams(fruitParams({ view, form: pick, query: next }), true)
        }}
        placeholder={t('fruits.searchPlaceholder')}
        query={query}
        status={
          <p
            aria-live="polite"
            {...stylex.props(
              searchStyles.status,
              empty && searchStyles.statusEmpty,
            )}
          >
            {status}
          </p>
        }
      />
      <AlbumChoices
        choices={choices}
        fieldId={fieldId}
        onPick={(next) => {
          onParams(fruitParams({ view, form: next, query }), false)
        }}
        onView={(next) => {
          onParams(fruitParams({ view: next, form: pick, query }), false)
        }}
        pick={pick}
        view={view}
      />
    </ControlBar>
  )
}

/**
 * The line under the field: how many open fruits the query finds out of the
 * picked chip's own number, or that it finds none.
 */
function statusOf(
  t: Translate,
  {
    choices,
    count,
    pick,
    query,
  }: {
    choices: Choice<FormPick>[]
    count: number
    pick: FormPick
    query: string
  },
): string {
  if (query !== '' && count === 0) {
    return t('fruits.noMatch', { query })
  }
  const total = choices.find((choice) => choice.value === pick)?.count ?? 0

  return t('fruits.shown', { count, total })
}

/** The folded bar's words: "Type · Zoan · “gum”". */
function summaryOf(
  t: Translate,
  { pick, query, view }: { pick: FormPick; query: string; view: AlbumView },
): string {
  return [
    t(`fruits.view.${view}`),
    t(pick === 'all' ? 'fruits.form.all' : `fruitForm.${pick}`),
    ...(query === '' ? [] : [`“${query}”`]),
  ].join(' · ')
}

/**
 * The view switch and the kind chips, side by side while they fit. A pick in
 * either is a radio change in the bar, so it scrolls back to where the bar
 * pins as a chip does (`controlBarFold`).
 */
function AlbumChoices({
  choices,
  fieldId,
  onPick,
  onView,
  pick,
  view,
}: {
  choices: Choice<FormPick>[]
  fieldId: string
  onPick: (next: FormPick) => void
  onView: (next: AlbumView) => void
  pick: FormPick
  view: AlbumView
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.choices)}>
      <ChoiceGroup
        choices={[
          { label: t('fruits.view.type'), value: 'type' },
          { label: t('fruits.view.saga'), value: 'saga' },
        ]}
        legend={t('fruits.view.legend')}
        look="segments"
        name={`${fieldId}-view`}
        onChoose={onView}
        value={view}
      />
      <ChoiceGroup
        choices={choices}
        legend={t('fruits.form.legend')}
        look="chips"
        name={`${fieldId}-form`}
        onChoose={onPick}
        value={pick}
      />
    </div>
  )
}

/** The chips: every kind, each with its open fruits and never its covered. */
function formChoices(t: Translate, bands: FruitBandView[]): Choice<FormPick>[] {
  const all = bands.reduce((sum, band) => sum + band.open.length, 0)

  return [
    { count: all, label: t('fruits.form.all'), value: 'all' },
    ...bands.map((band) => ({
      count: band.open.length,
      label: t(`fruitForm.${band.form}`),
      value: band.form,
    })),
  ]
}
