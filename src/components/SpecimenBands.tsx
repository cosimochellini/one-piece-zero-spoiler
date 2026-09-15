import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useDeferredValue, useId, useState } from 'react'

import { FogBand, type FogTitles } from '~/components/FogBand'
import { FruitSpecimen } from '~/components/FruitSpecimen'
import { matchesIn } from '~/components/recordMatches'
import { SearchField } from '~/components/SearchField'
import { searchStyles } from '~/components/SearchField.styles'
import { styles } from '~/components/SpecimenBands.styles'
import { useSettled } from '~/components/useSettled'
import { useT } from '~/i18n/LocaleContext'
import type { Translate, TranslationKey } from '~/i18n/types'
import { foldName } from '~/lib/search/fold'
import type { FruitBandView, FruitForm, FruitView } from '~/lib/view/records'

// The same delay the signal book announces its own count with.
const ANNOUNCE_DELAY_MS = 250

/** How wide a plate number is printed. `01`, never `1`. */
const NUMBER_WIDTH = 2

/** How many fruits a plate holds. One and many are two sentences. */
function countOf(t: Translate, count: number): string {
  return count === 1 ?
      t('fruits.bandCountOne')
    : t('fruits.bandCount', { count })
}

/** What a plate's fog band calls itself at each count. */
const FRUIT_FOG: FogTitles = {
  allOpen: 'fruits.allOpen',
  hint: 'fruits.foggedHint',
  many: 'fruits.foggedTitle',
  one: 'fruits.foggedTitleOne',
}

const TITLE_KEY: Readonly<Record<FruitForm, TranslationKey>> = {
  logia: 'fruitForm.logia',
  paramecia: 'fruitForm.paramecia',
  zoan: 'fruitForm.zoan',
}

const LEDE_KEY: Readonly<Record<FruitForm, TranslationKey>> = {
  logia: 'fruits.lede.logia',
  paramecia: 'fruits.lede.paramecia',
  zoan: 'fruits.lede.zoan',
}

/** What the sheet is built from: the three plates, and a way to lift the fog. */
export type SpecimenBandsProps = {
  readonly bands: readonly FruitBandView[]
  readonly peek: (handle: string) => Promise<FruitView>
}

/**
 * The specimen sheet: three plates down the page, each a numbered label, a
 * heading, and the fruits of that kind as numbered rows.
 *
 * The search rule is the signal book's, applied to a different list: a
 * covered fruit is not on the page to be searched, so typing filters the open
 * rows and leaves every fogged one exactly where it was. The count under the
 * field is over all three plates, and it settles before it is announced.
 */
export function SpecimenBands({
  bands,
  peek,
}: SpecimenBandsProps): ReactElement {
  const t = useT()
  const fieldId = useId()
  const [query, setQuery] = useState('')
  const trimmed = query.trim()
  // The field is never deferred; the plates behind it are.
  const needle = useDeferredValue(foldName(trimmed))
  const open = bands.flatMap((band) => band.open)
  const count = matchesIn(open, needle).length
  const empty = trimmed !== '' && count === 0
  const status =
    empty ?
      t('fruits.noMatch', { query: trimmed })
    : t('fruits.shown', { count, total: open.length })

  return (
    <div {...stylex.props(styles.sheet)}>
      <SearchField
        clearLabel={t('fruits.searchClear')}
        fieldId={fieldId}
        label={t('fruits.searchLabel')}
        onQuery={setQuery}
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
            {useSettled(status, ANNOUNCE_DELAY_MS)}
          </p>
        }
      />

      {bands.map((band, at) => {
        return (
          <Plate
            key={band.form}
            band={band}
            fieldId={fieldId}
            index={at}
            needle={needle}
            peek={peek}
          />
        )
      })}
    </div>
  )
}

/** One plate: its label, its heading, its open rows and its fog band. */
function Plate({
  band,
  fieldId,
  index,
  needle,
  peek,
}: {
  readonly band: FruitBandView
  readonly fieldId: string
  readonly index: number
  readonly needle: string
  readonly peek: (handle: string) => Promise<FruitView>
}): ReactElement {
  const headingId = `${fieldId}-${band.form}`
  const matches = matchesIn(band.open, needle)
  // Where each open fruit sits on its plate, which is not where it sits in
  // the search results: a specimen keeps its number while the reader types,
  // and the covered rows carry on from the last open one rather than starting
  // again, so no two rows on a plate are specimen 01.
  const numbered = new Map(band.open.map((entry, at) => [entry.id, at]))

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.plate)}
    >
      <PlateHead
        band={band}
        headingId={headingId}
        index={index}
      />

      {matches.length === 0 ? null : (
        <ul {...stylex.props(styles.rows)}>
          {matches.map(({ entry, match }) => {
            return (
              <FruitSpecimen
                key={`open-${entry.id}`}
                form={band.form}
                highlight={match.highlight}
                index={numbered.get(entry.id) ?? 0}
                peek={peek}
                slot={{ open: true, record: entry }}
              />
            )
          })}
        </ul>
      )}

      <FogBand
        count={band.covered.length}
        headingId={`${headingId}-fog`}
        words={FRUIT_FOG}
      >
        <CoveredRows
          band={band}
          peek={peek}
        />
      </FogBand>
    </section>
  )
}

/**
 * A plate's covered rows: a number, a kind and a threshold, and no more.
 *
 * The numbers carry on from the open rows above rather than starting again.
 * The server orders a plate by threshold and the open ones are a prefix of
 * it, so the count is the plate's own order and a fruit keeps its number when
 * the reader's bookmark passes it.
 */
function CoveredRows({
  band,
  peek,
}: {
  readonly band: FruitBandView
  readonly peek: (handle: string) => Promise<FruitView>
}): ReactElement {
  return (
    <ul {...stylex.props(styles.rows)}>
      {band.covered.map((entry, at) => {
        return (
          <FruitSpecimen
            key={`fog-${entry.handle}`}
            form={band.form}
            index={band.open.length + at}
            peek={peek}
            slot={{ open: false, covered: entry }}
          />
        )
      })}
    </ul>
  )
}

/** A plate's label, its heading and the sentence under it. */
function PlateHead({
  band,
  headingId,
  index,
}: {
  readonly band: FruitBandView
  readonly headingId: string
  readonly index: number
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.plateHead)}>
      <p {...stylex.props(styles.plateNumber)}>
        {t('fruits.plate', {
          index: String(index + 1).padStart(NUMBER_WIDTH, '0'),
        })}
        {' · '}
        {countOf(t, band.total)}
      </p>
      <div>
        <h2
          id={headingId}
          {...stylex.props(styles.plateTitle)}
        >
          {t(TITLE_KEY[band.form])}
        </h2>
        <p {...stylex.props(styles.plateLede)}>{t(LEDE_KEY[band.form])}</p>
      </div>
    </div>
  )
}
