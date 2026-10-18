/**
 * The index under the chart on the places page: a control bar (search,
 * layout, sea, type, saga), then the places the reader has reached grouped
 * by sea, as rows or as a grid of plates, each a link to its own page, and
 * one line for the stops under fog. A sibling of the route module; the
 * leading `-` keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { type ReactElement, useId } from 'react'

import { CatalogueSection } from '~/components/CatalogueSection'
import { Marked } from '~/components/CharacterCard'
import { OpenPortPlate } from '~/components/PortPlate'
import { Button } from '~/components/ui/Button'
import { useLocale } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import { matchFolded } from '~/lib/search/fold'
import type { IndexView, PlaceParams } from '~/lib/search/placeParams'
import type { StopView } from '~/lib/view/places'
import type { CoveredRecord, Sea } from '~/lib/view/records'

import { PlaceControls, type PlaceControlsProps } from './-index.controls'
import { styles } from './-index.styles'

/** How wide a stop's number is printed. `03`, never `3`. */
const NUMBER_WIDTH = 2

/** What the index draws, and the picks it reads and moves. */
export interface PlaceIndexProps extends Omit<
  PlaceControlsProps,
  'count' | 'fieldId'
> {
  covered: CoveredRecord[]
  /** The query, already folded. Empty matches everything. */
  needle: string
  /** The open stops the picks and the query leave, in the reader's order. */
  shown: StopView[]
}

/**
 * The index. Nothing with no place reached: the chart above already says
 * everything is under fog.
 *
 * The picks and the search apply to the open places only. A covered stop has
 * no sea, type or saga in the page, so the stops under fog are one line at
 * the foot, the same whatever is picked: a line per sea would tell how many
 * stops a sea still holds, and so where the next one begins.
 */
export function PlaceIndex({
  covered,
  needle,
  shown,
  ...controls
}: PlaceIndexProps): null | ReactElement {
  const { t } = useLocale()
  const fieldId = useId()
  const { onParams, open, params } = controls

  if (open.length === 0) {
    return null
  }

  return (
    <div {...stylex.props(styles.index)}>
      <PlaceControls
        count={shown.length}
        fieldId={fieldId}
        {...controls}
      />

      {shown.length === 0 && isPicked(params) ?
        <div {...stylex.props(styles.empty)}>
          <p>{t('places.noneShown')}</p>
          <Button
            onClick={() => {
              onParams(params.view === undefined ? {} : { view: 'grid' }, false)
            }}
          >
            {t('places.showAll')}
          </Button>
        </div>
      : null}

      {groupsOf(open, shown).map(({ sea, stops, total }) => {
        return (
          <CatalogueSection
            key={sea}
            headingId={`${fieldId}-${sea}`}
            lede={countOf(t, total)}
            sticky
            title={t(`sea.${sea}`)}
          >
            <Stops
              needle={needle}
              open={open}
              stops={stops}
              view={params.view ?? 'list'}
            />
          </CatalogueSection>
        )
      })}

      <FogLine count={covered.length} />
    </div>
  )
}

/** The stops under fog, one line for all of them; nothing with none. */
function FogLine({ count }: { count: number }): null | ReactElement {
  const { t } = useLocale()
  if (count === 0) {
    return null
  }

  return (
    <p {...stylex.props(styles.fog)}>
      <span
        aria-hidden="true"
        {...stylex.props(styles.fogDot)}
      />
      {count === 1 ? t('chart.fogOne') : t('chart.fog', { count })}
    </p>
  )
}

/**
 * Whether a sea, a type or a saga is picked. With only a query, the line
 * under the field already says it finds nothing, and the field's × clears
 * it; with a pick, "Show all" clears the picks and the query together.
 */
function isPicked({ form, saga, sea }: PlaceParams): boolean {
  return [form, saga, sea].some((value) => value !== undefined)
}

/** How many places a sea holds. One and many are two sentences. */
function countOf(t: Translate, count: number): string {
  return count === 1 ?
      t('places.groupCountOne')
    : t('places.groupCount', { count })
}

/** One sea of the index: its shown stops, and how many it holds open. */
interface SeaGroup {
  sea: Sea
  stops: StopView[]
  total: number
}

/**
 * The shown stops by sea, the seas in the order the reader first reaches
 * them. The order is the open stops', so a pick never moves a sea, and a sea
 * with nothing shown leaves the page.
 */
function groupsOf(open: StopView[], shown: StopView[]): SeaGroup[] {
  const seas = [...new Set(open.map((stop) => stop.sea))]

  return seas.flatMap((sea) => {
    const stops = shown.filter((stop) => stop.sea === sea)

    return stops.length === 0 ?
        []
      : { sea, stops, total: open.filter((stop) => stop.sea === sea).length }
  })
}

/** One sea's stops, as rows or as plates. */
function Stops({
  needle,
  open,
  stops,
  view,
}: {
  needle: string
  open: StopView[]
  stops: StopView[]
  view: IndexView
}): ReactElement {
  const grid = view === 'grid'

  return (
    <ol {...stylex.props(grid ? styles.grid : styles.list)}>
      {stops.map((stop) => {
        return (
          <li
            key={stop.id}
            {...stylex.props(styles.item)}
          >
            <Entry
              grid={grid}
              highlight={matchFolded(stop, needle).highlight}
              number={open.indexOf(stop) + 1}
              stop={stop}
            />
          </li>
        )
      })}
    </ol>
  )
}

/**
 * One place, one link: its number on the route, its plate, its name with a
 * search match marked, its type and the episode it first appears in. A
 * plate in the grid drops the type, so the drawing leads.
 */
function Entry({
  grid,
  highlight,
  number,
  stop,
}: {
  grid: boolean
  highlight: [number, number] | null
  number: number
  stop: StopView
}): ReactElement {
  const { locale, t } = useLocale()
  const threshold = useThreshold()

  return (
    <Link
      params={{ locale, id: stop.id }}
      to="/$locale/places/$id"
      {...stylex.props(styles.entry, grid ? styles.plate : styles.row)}
    >
      <span {...stylex.props(grid ? styles.plateArt : styles.rowArt)}>
        <OpenPortPlate port={stop} />
      </span>
      <span {...stylex.props(styles.words)}>
        <span {...stylex.props(styles.name)}>
          <Marked
            span={highlight}
            text={stop.name}
          />
        </span>
        <span {...stylex.props(styles.meta)}>
          <span {...stylex.props(styles.number)}>
            {String(number).padStart(NUMBER_WIDTH, '0')}
          </span>
          {grid ? null : <span>{t(`form.${stop.form}`)}</span>}
          <span {...stylex.props(styles.episode)}>
            {threshold('chart.opensAt', stop)}
          </span>
        </span>
      </span>
    </Link>
  )
}
