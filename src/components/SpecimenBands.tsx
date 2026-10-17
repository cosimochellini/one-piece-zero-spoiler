import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useDeferredValue, useId } from 'react'

import {
  AlbumControls,
  type AlbumControlsProps,
} from '~/components/AlbumControls'
import { groupingOf } from '~/components/albumGrouping'
import { AlbumGroups } from '~/components/AlbumGroups'
import { FogBand, type FogTitles } from '~/components/FogBand'
import { FruitTile, OpenTiles } from '~/components/FruitTile'
import { matchesIn } from '~/components/recordMatches'
import { styles } from '~/components/SpecimenBands.styles'
import { useT } from '~/i18n/LocaleContext'
import type { Translate, TranslationKey } from '~/i18n/types'
import { foldName } from '~/lib/search/fold'
import type { FruitParams } from '~/lib/search/fruitParams'
import type {
  FruitBandView,
  FruitFactionView,
  FruitForm,
  FruitSagaView,
  FruitView,
} from '~/lib/view/records'
import { stickyStyles } from '~/styles/sticky'

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

const TITLE_KEY: Record<FruitForm, TranslationKey> = {
  logia: 'fruitForm.logia',
  paramecia: 'fruitForm.paramecia',
  zoan: 'fruitForm.zoan',
}

const LEDE_KEY: Record<FruitForm, TranslationKey> = {
  logia: 'fruits.lede.logia',
  paramecia: 'fruits.lede.paramecia',
  zoan: 'fruits.lede.zoan',
}

/** What the sheet is built from: the plates, the groups, the picks, the peek. */
export interface SpecimenBandsProps {
  bands: FruitBandView[]
  /** The factions the open eaters stand in, for the faction view. */
  factions?: FruitFactionView[] | undefined
  /** The covered fruits of the sagas past the bookmark, by handle. */
  later: string[]
  onParams: AlbumControlsProps['onParams']
  params: FruitParams
  peek: (handle: string) => Promise<FruitView>
  /** The sagas the bookmark has reached, for the saga view. */
  sagas: FruitSagaView[]
}

/**
 * The album: the control bar, then the plates down the page, each a numbered
 * label, a heading, and the fruits of that kind as a grid of tiles. In the
 * saga and faction views their groups take the plates' place (`AlbumGroups`),
 * under the same bar, which stays its container's first child so a pick of either view
 * scrolls back to where it pins.
 *
 * The search rule is the signal book's, applied to a different list: a
 * covered fruit is not on the page to be searched, so typing filters the open
 * tiles and leaves every fogged one exactly where it was. A kind chip keeps
 * one plate on the page. The count under the field is over the plates on the
 * page, so its total is the picked chip's number.
 */
export function SpecimenBands({
  bands,
  onParams,
  params,
  peek,
  ...sent
}: SpecimenBandsProps): ReactElement {
  const t = useT()
  const fieldId = useId()
  // The field is never deferred; the plates behind it are.
  const needle = useDeferredValue(foldName((params.q ?? '').trim()))
  const grouping = groupingOf(t, { ...sent, fieldId, view: params.view })
  const shown =
    params.form === undefined ?
      bands
    : bands.filter((band) => band.form === params.form)

  return (
    <div {...stylex.props(styles.sheet)}>
      <AlbumControls
        bands={bands}
        count={
          matchesIn(
            shown.flatMap((band) => band.open),
            needle,
          ).length
        }
        fieldId={fieldId}
        onParams={onParams}
        params={params}
      />

      {grouping === undefined ?
        shown.map((band) => {
          return (
            <Plate
              key={band.form}
              band={band}
              fieldId={fieldId}
              index={bands.indexOf(band)}
              needle={needle}
              peek={peek}
            />
          )
        })
      : <AlbumGroups
          bands={bands}
          fieldId={fieldId}
          form={params.form}
          needle={needle}
          peek={peek}
          {...grouping}
        />
      }
    </div>
  )
}

/** One plate: its label, its heading, its open tiles and its fog band. */
export function Plate({
  band,
  fieldId,
  index,
  needle,
  peek,
}: {
  band: FruitBandView
  fieldId: string
  index: number
  needle: string
  peek: (handle: string) => Promise<FruitView>
}): ReactElement {
  const headingId = `${fieldId}-${band.form}`
  const matches = matchesIn(band.open, needle)

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
        <ul {...stylex.props(styles.grid)}>
          <OpenTiles
            matches={matches}
            needle={needle}
            peek={peek}
          />
        </ul>
      )}

      <FogBand
        count={band.covered.length}
        headingId={`${headingId}-fog`}
        words={FRUIT_FOG}
      >
        <CoveredTiles
          band={band}
          peek={peek}
        />
      </FogBand>
    </section>
  )
}

/**
 * A plate's covered tiles: a number, a kind and a threshold, and no more.
 *
 * The numbers carry on from the open tiles above rather than starting again.
 * The server orders a plate by threshold and the open ones are a prefix of
 * it, so the count is the plate's own order and a fruit keeps its number when
 * the reader's bookmark passes it.
 */
function CoveredTiles({
  band,
  peek,
}: {
  band: FruitBandView
  peek: (handle: string) => Promise<FruitView>
}): ReactElement {
  return (
    <ul {...stylex.props(styles.grid)}>
      {band.covered.map((entry, at) => {
        return (
          <FruitTile
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
  band: FruitBandView
  headingId: string
  index: number
}): ReactElement {
  const t = useT()

  return (
    <>
      <div
        {...stylex.props(
          stickyStyles.bar,
          stickyStyles.underBar,
          styles.plateHead,
        )}
      >
        <p {...stylex.props(styles.plateNumber)}>
          {t('fruits.plate', {
            index: String(index + 1).padStart(NUMBER_WIDTH, '0'),
          })}
          {' · '}
          {countOf(t, band.total)}
        </p>
        <h2
          id={headingId}
          {...stylex.props(styles.plateTitle)}
        >
          {t(TITLE_KEY[band.form])}
        </h2>
      </div>
      <p {...stylex.props(styles.plateLede)}>{t(LEDE_KEY[band.form])}</p>
    </>
  )
}
