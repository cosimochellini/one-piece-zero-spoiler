import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { CatalogueSection } from '~/components/CatalogueSection'
import { FogBand, type FogTitles } from '~/components/FogBand'
import { FruitTile, OpenTiles } from '~/components/FruitTile'
import { matchesIn } from '~/components/recordMatches'
import { styles } from '~/components/SpecimenBands.styles'
import { useT } from '~/i18n/LocaleContext'
import { sagaAnchor } from '~/lib/search/fruitParams'
import type {
  CoveredRecord,
  FruitBandView,
  FruitForm,
  FruitSagaView,
  FruitView,
  SpecimenView,
} from '~/lib/view/records'

/** What the later sagas' band calls itself at each count. */
const LATER_FOG: FogTitles = {
  allOpen: 'fruits.laterAllOpen',
  hint: 'fruits.foggedHint',
  many: 'fruits.later',
  one: 'fruits.laterOne',
}

/** A covered fruit as its plate holds it: the record, its kind, its number. */
interface CoveredTile {
  covered: CoveredRecord
  form: FruitForm
  index: number
}

/** What the saga view is built from: the plates, the sagas, the picks. */
export interface SagaGroupsProps {
  bands: FruitBandView[]
  fieldId: string
  /** The picked kind, or every kind. */
  form: FruitForm | undefined
  later: string[]
  /** The query, already folded. Empty matches everything. */
  needle: string
  peek: (handle: string) => Promise<FruitView>
  sagas: FruitSagaView[]
}

/** The plates' fruits by ref, and the picked kind, as every group reads them. */
interface Lookup {
  covered: Map<string, CoveredTile>
  form: FruitForm | undefined
  open: Map<string, SpecimenView>
}

/** The tiles these ids or handles stand for, of the picked kind. */
function pickedOf<T extends { form: FruitForm }>(
  form: FruitForm | undefined,
  from: Map<string, T>,
  keys: string[],
): T[] {
  const tiles: T[] = []
  for (const key of keys) {
    const tile = from.get(key)
    if (tile !== undefined && (form === undefined || tile.form === form)) {
      tiles.push(tile)
    }
  }

  return tiles
}

/**
 * The saga view: one group per saga the bookmark has reached, in route
 * order, each a pinned heading over its fruits in the order the story names
 * them. The covered ones keep their place in time as fog tiles, after the
 * open ones, which is where the reader's order puts them. Then one band for
 * every covered fruit of the sagas past the bookmark, counted once and never
 * by saga.
 *
 * The server grouped them, by id and by handle: the records are the plates'.
 * The kind chip filters both runs; the search filters the open tiles only. A
 * covered tile keeps its plate number, so a fruit is the same number in both
 * views.
 */
export function SagaGroups({
  bands,
  fieldId,
  form,
  later,
  needle,
  peek,
  sagas,
}: SagaGroupsProps): ReactElement {
  const lookup = { ...byRef(bands), form }
  const laterTiles = pickedOf(form, lookup.covered, later)

  return (
    <>
      {sagas.map((group, at) => {
        return (
          <SagaGroup
            key={group.saga}
            anchor={sagaAnchor(at)}
            group={group}
            lookup={lookup}
            needle={needle}
            peek={peek}
          />
        )
      })}

      <FogBand
        count={laterTiles.length}
        headingId={`${fieldId}-later`}
        level="h2"
        words={LATER_FOG}
      >
        <ul {...stylex.props(styles.grid)}>
          <CoveredTiles
            peek={peek}
            tiles={laterTiles}
          />
        </ul>
      </FogBand>
    </>
  )
}

/**
 * One saga: its name pinned over the open tiles the search finds, then its
 * fog tiles. With nothing left to show it leaves the page, as a character's
 * shelf does. The count is the saga's tiles before any pick.
 */
function SagaGroup({
  anchor,
  group,
  lookup,
  needle,
  peek,
}: {
  anchor: string
  group: FruitSagaView
  lookup: Lookup
  needle: string
  peek: (handle: string) => Promise<FruitView>
}): null | ReactElement {
  const t = useT()
  const ids = group.open.map(({ id }) => id)
  const matches = matchesIn(pickedOf(lookup.form, lookup.open, ids), needle)
  const fog = pickedOf(lookup.form, lookup.covered, group.covered)
  if (matches.length === 0 && fog.length === 0) {
    return null
  }

  const total = group.open.length + group.covered.length

  return (
    <CatalogueSection
      headingId={anchor}
      lede={t(total === 1 ? 'fruits.bandCountOne' : 'fruits.bandCount', {
        count: total,
      })}
      sticky
      title={group.saga}
    >
      <ul {...stylex.props(styles.grid)}>
        <OpenTiles
          matches={matches}
          needle={needle}
          peek={peek}
        />
        <CoveredTiles
          peek={peek}
          tiles={fog}
        />
      </ul>
    </CatalogueSection>
  )
}

/** Covered tiles, each with its plate's kind and number. */
function CoveredTiles({
  peek,
  tiles,
}: {
  peek: (handle: string) => Promise<FruitView>
  tiles: CoveredTile[]
}): ReactElement {
  return (
    <>
      {tiles.map((tile) => {
        return (
          <FruitTile
            key={`fog-${tile.covered.handle}`}
            form={tile.form}
            index={tile.index}
            peek={peek}
            slot={{ open: false, covered: tile.covered }}
          />
        )
      })}
    </>
  )
}

/**
 * Every fruit of the plates, open by id and covered by handle. A covered
 * fruit's number carries on from its plate's open ones, as on the plate.
 */
function byRef(bands: FruitBandView[]): {
  covered: Map<string, CoveredTile>
  open: Map<string, SpecimenView>
} {
  const open = new Map<string, SpecimenView>()
  const covered = new Map<string, CoveredTile>()
  for (const band of bands) {
    for (const fruit of band.open) {
      open.set(fruit.id, fruit)
    }
    for (const [at, entry] of band.covered.entries()) {
      covered.set(entry.handle, {
        covered: entry,
        form: band.form,
        index: band.open.length + at,
      })
    }
  }

  return { covered, open }
}
