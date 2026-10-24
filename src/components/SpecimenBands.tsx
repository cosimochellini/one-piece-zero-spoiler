import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useDeferredValue, useId } from 'react'

import {
  AlbumControls,
  type AlbumControlsProps,
} from '~/components/AlbumControls'
import { groupingOf } from '~/components/albumGrouping'
import { AlbumGroups } from '~/components/AlbumGroups'
import { LoadFailed } from '~/components/BookmarkSkeleton'
import { FogBand, type FogTitles } from '~/components/FogBand'
import { FruitTile, OpenTiles } from '~/components/FruitTile'
import { matchesIn } from '~/components/recordMatches'
import { styles } from '~/components/SpecimenBands.styles'
import { useT } from '~/i18n/LocaleContext'
import type { Translate, TranslationKey } from '~/i18n/types'
import { foldName } from '~/lib/search/fold'
import type { FruitParams } from '~/lib/search/fruitParams'
import type { FruitAlbumView, FruitPlateCount } from '~/lib/view/fruits'
import type { FruitBandView, FruitForm, FruitView } from '~/lib/view/records'
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

/** The plates and the groups of the saga and faction views. */
export type Album = Omit<FruitAlbumView, 'at'>

/** What the sheet is built from: the counts, the album, the picks, the peek. */
export interface SpecimenBandsProps {
  /** The plates and the groups, `null` until the page has them. */
  album: Album | null
  onParams: AlbumControlsProps['onParams']
  params: FruitParams
  peek: (handle: string) => Promise<FruitView>
  /** Asks for the album again; set only when it could not be fetched. */
  onRetry?: (() => void) | undefined
  /** Every plate's counts, which the bar prints before the album is here. */
  plates: FruitPlateCount[]
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
 *
 * The bar is in the page the server sends; the plates come after, once the
 * browser has asked for the album, and until then the count is the chip's.
 */
export function SpecimenBands({
  album,
  onParams,
  onRetry,
  params,
  peek,
  plates,
}: SpecimenBandsProps): ReactElement {
  const fieldId = useId()
  // The field is never deferred; the plates behind it are.
  const needle = useDeferredValue(foldName((params.q ?? '').trim()))

  return (
    <div {...stylex.props(styles.sheet)}>
      <AlbumControls
        count={
          album === null ?
            openIn(plates, params.form)
          : matchesIn(
              shownOf(album.bands, params.form).flatMap((band) => band.open),
              needle,
            ).length
        }
        fieldId={fieldId}
        onParams={onParams}
        params={params}
        plates={plates}
      />

      {album === null ?
        onRetry !== undefined && <AlbumFailed onRetry={onRetry} />
      : <Plates
          album={album}
          fieldId={fieldId}
          needle={needle}
          params={params}
          peek={peek}
        />
      }
    </div>
  )
}

/** The plates a kind chip keeps on the page: all of them, or its own. */
function shownOf(
  bands: FruitBandView[],
  form: FruitForm | undefined,
): FruitBandView[] {
  return bands.filter((band) => form === undefined || band.form === form)
}

/** The album could not be fetched: one line, and a button that asks again. */
export function AlbumFailed({
  onRetry,
}: {
  onRetry: () => void
}): ReactElement {
  return (
    <LoadFailed
      message="fruits.albumFailed"
      onRetry={onRetry}
      retry="fruits.albumRetry"
    />
  )
}

/** The open fruits of the picked plates, before the album says which match. */
function openIn(
  plates: FruitPlateCount[],
  form: FruitForm | undefined,
): number {
  return plates
    .filter((plate) => form === undefined || plate.form === form)
    .reduce((sum, plate) => sum + plate.opened, 0)
}

/** The plates shown, or the groups of the saga or faction view. */
function Plates({
  album: { bands, ...sent },
  fieldId,
  needle,
  params,
  peek,
}: Pick<SpecimenBandsProps, 'params' | 'peek'> & {
  album: Album
  fieldId: string
  needle: string
}): ReactElement {
  const t = useT()
  const grouping = groupingOf(t, { ...sent, fieldId, view: params.view })

  if (grouping !== undefined) {
    return (
      <AlbumGroups
        bands={bands}
        fieldId={fieldId}
        form={params.form}
        needle={needle}
        peek={peek}
        {...grouping}
      />
    )
  }

  return (
    <>
      {shownOf(bands, params.form).map((band) => {
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
      })}
    </>
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
