/**
 * The places index's control bar: the search field and its count, and the
 * sea, type and saga pickers. Every pick
 * lives in the address (`~/lib/search/placeParams`), so a filtered index can
 * be shared and Back steps through the picks.
 */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles as dialog } from '~/components/BookmarkDialog.styles'
import { ControlBar } from '~/components/ControlBar'
import { SearchField } from '~/components/SearchField'
import { searchStyles } from '~/components/SearchField.styles'
import { type PlaceLabels, usePlaceLabels } from '~/components/usePlaceLabels'
import { useSettled } from '~/components/useSettled'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { parsePlaceParams, type PlaceParams } from '~/lib/search/placeParams'
import type { SagaPick, StopView } from '~/lib/view/places'
import type { PlaceWordsView } from '~/lib/view/records'

import { styles } from './-index.styles'

// The same delay the other listings announce their count with.
const ANNOUNCE_DELAY_MS = 250

/** What the bar reads and writes, and the count the index worked out. */
export interface PlaceControlsProps {
  /** The open places the picks and the query leave. */
  count: number
  fieldId: string
  /**
   * Moves the page to new picks: `replace` for the query, which would leave
   * one history entry per letter otherwise, a new entry for any pick.
   */
  onParams: (next: PlaceParams, replace: boolean) => void
  /** The places the reader has reached, in their order. */
  open: StopView[]
  /** The picks and the query, read from the address. */
  params: PlaceParams
  /** The sagas the open places are filed under, in route order. */
  sagas: SagaPick[]
  /**
   * The labels of the open places' words, for a series that labels its
   * words itself; One Piece's come from the dictionaries.
   */
  words?: PlaceWordsView | undefined
}

/** A pick: the keys to change, each checked as the address would be. */
type Pick = (next: Record<string, unknown>, replace?: boolean) => void

/** The bar: the search, then the three picks beside it. */
export function PlaceControls({
  count,
  fieldId,
  onParams,
  open,
  params,
  sagas,
  words,
}: PlaceControlsProps): ReactElement {
  const t = useT()
  const labels = usePlaceLabels(words)
  // Every pick goes through the parser, so a default ("all", a blank
  // query) is left out of the address rather than written into it.
  const pick: Pick = (next, replace = false) => {
    onParams(parsePlaceParams({ ...params, ...next }), replace)
  }

  return (
    <ControlBar
      searchLabel={t('places.searchOpen')}
      summary={summaryOf(labels, params, sagas)}
      toggleLabel={t('places.controls')}
    >
      <PlaceSearch
        count={count}
        fieldId={fieldId}
        pick={pick}
        query={params.q ?? ''}
        total={open.length}
      />
      <PlaceChoices
        labels={labels}
        open={open}
        params={params}
        pick={pick}
        sagas={sagas}
      />
    </ControlBar>
  )
}

/**
 * The search field, and the line under it: how many open places are left
 * of how many, or that the query finds none. It settles before it is
 * announced.
 */
function PlaceSearch({
  count,
  fieldId,
  pick,
  query,
  total,
}: {
  count: number
  fieldId: string
  pick: Pick
  query: string
  total: number
}): ReactElement {
  const t = useT()
  const trimmed = query.trim()
  const empty = trimmed !== '' && count === 0
  const status = useSettled(
    empty ?
      t('places.noMatch', { query: trimmed })
    : t('places.shown', { count, total }),
    ANNOUNCE_DELAY_MS,
  )

  return (
    <SearchField
      clearLabel={t('places.searchClear')}
      fieldId={fieldId}
      label={t('places.searchLabel')}
      onQuery={(next) => {
        pick({ q: next }, true)
      }}
      placeholder={t('places.searchPlaceholder')}
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
  )
}

/** The sea, type and saga pickers. */
function PlaceChoices({
  labels: { allRegions, formOf, region, regionOf },
  open,
  params,
  pick,
  sagas,
}: {
  labels: PlaceLabels
  open: StopView[]
  params: PlaceParams
  pick: Pick
  sagas: SagaPick[]
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.choices)}>
      <Picker
        label={region}
        onPick={(next) => {
          pick({ sea: next })
        }}
        options={withAll(
          allRegions,
          counted(open, ({ sea }) => [sea, regionOf(sea)]),
        )}
        value={params.sea ?? ''}
      />
      <Picker
        label={t('places.form')}
        onPick={(next) => {
          pick({ form: next })
        }}
        options={withAll(
          t('places.allForms'),
          counted(open, ({ form }) => [form, formOf(form)]),
        )}
        value={params.form ?? ''}
      />
      <Picker
        label={t('places.saga')}
        onPick={(next) => {
          pick({ saga: Number(next) })
        }}
        options={sagaOptions(t, open, sagas)}
        value={params.saga === undefined ? '' : String(params.saga)}
      />
    </div>
  )
}

/** A picker's option: what it says, and the value it picks. */
interface Option {
  label: string
  value: string
}

/** One value of a picker: what it picks, its name, and how many it holds. */
type Counted = [value: string, label: string, count: number]

/** A picker's options: the one for every value, then each value, counted. */
function withAll(all: string, values: Counted[]): Option[] {
  return [
    { label: all, value: '' },
    ...values.map(([value, label, count]) => ({
      label: withCount(label, count),
      value,
    })),
  ]
}

/** Every saga an open place is filed under, after "All sagas". */
function sagaOptions(
  t: Translate,
  open: StopView[],
  sagas: SagaPick[],
): Option[] {
  return withAll(
    t('places.allSagas'),
    sagas.map((saga) => [
      String(saga.number),
      saga.title,
      open.filter((stop) => stop.saga === saga.number).length,
    ]),
  )
}

/** An option's words: "Island · 17". */
function withCount(label: string, count: number): string {
  return `${label} · ${String(count)}`
}

/**
 * Each value the open places hold, named, in the order the reader first
 * meets it, with how many hold it. Only open places count: a covered one has
 * no sea or type in the page.
 */
function counted(
  open: StopView[],
  of: (stop: StopView) => [value: string, label: string],
): Counted[] {
  const rows: Counted[] = []
  const byValue = new Map<string, Counted>()
  for (const stop of open) {
    const [value, label] = of(stop)
    const row = byValue.get(value)
    if (row === undefined) {
      const first: Counted = [value, label, 1]
      byValue.set(value, first)
      rows.push(first)
    } else {
      row[2] += 1
    }
  }

  return rows
}

/** The folded bar's words: "New World · Island · “wano”". */
function summaryOf(
  { allRegions, formOf, regionOf }: PlaceLabels,
  { form, q = '', saga, sea }: PlaceParams,
  sagas: SagaPick[],
): string {
  const title = sagas.find((candidate) => candidate.number === saga)?.title
  const query = q.trim()

  return [
    sea === undefined ? allRegions : regionOf(sea),
    ...(form === undefined ? [] : [formOf(form)]),
    ...(title === undefined ? [] : [title]),
    ...(query === '' ? [] : [`“${query}”`]),
  ].join(' · ')
}

/**
 * A native `<select>` for a pick: the types and the sagas run to twelve each,
 * too many for chips, and the seas take the same control so the three read
 * as one row. Its first option is every value.
 */
function Picker({
  label,
  onPick,
  options,
  value,
}: {
  label: string
  onPick: (value: string) => void
  options: Option[]
  value: string
}): ReactElement {
  return (
    <select
      aria-label={label}
      onChange={(event) => {
        onPick(event.target.value)
      }}
      value={value}
      {...stylex.props(dialog.select, styles.picker)}
    >
      {options.map((option) => {
        return (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        )
      })}
    </select>
  )
}
