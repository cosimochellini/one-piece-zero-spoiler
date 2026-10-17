import * as stylex from '@stylexjs/stylex'
import type { ComponentProps, ReactElement } from 'react'

import type { AlbumGroup, AlbumGrouping } from '~/components/albumGrouping'
import { CatalogueSection } from '~/components/CatalogueSection'
import { FogBand } from '~/components/FogBand'
import { FruitTile, OpenTiles } from '~/components/FruitTile'
import {
  type EaterMatch,
  groupEaterMatch,
  type Match,
  matchesIn,
} from '~/components/recordMatches'
import { styles } from '~/components/SpecimenBands.styles'
import { useT } from '~/i18n/LocaleContext'
import type {
  CoveredRecord,
  FruitBandView,
  FruitForm,
  FruitView,
  SpecimenView,
} from '~/lib/view/records'

/** A covered fruit as its plate holds it: the record, its kind, its number. */
interface CoveredTile {
  covered: CoveredRecord
  form: FruitForm
  index: number
}

/** What a grouped view is built from: the plates, the groups, the picks. */
export interface AlbumGroupsProps extends AlbumGrouping {
  bands: FruitBandView[]
  fieldId: string
  /** The picked kind, or every kind. */
  form: FruitForm | undefined
  /** The query, already folded. Empty matches everything. */
  needle: string
  peek: (handle: string) => Promise<FruitView>
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
 * A grouped view of the album: the saga view (one group per saga reached, in
 * route order, each its fruits in the order the story names them, the covered
 * ones as fog tiles after the open, then one band for every covered fruit of
 * the sagas past the bookmark, counted once and never by saga) or the
 * faction view (one group per faction an open eater stands in, then one band
 * for every covered fruit).
 *
 * The server grouped them, by id and by handle: the records are the plates'.
 * The kind chip filters both runs; the search filters the open tiles only. A
 * covered tile keeps its plate number, so a fruit is the same number in every
 * view.
 */
export function AlbumGroups({
  bands,
  fieldId,
  form,
  groups,
  later,
  needle,
  peek,
  words,
}: AlbumGroupsProps): ReactElement {
  const lookup = { ...byRef(bands), form }
  const laterTiles = pickedOf(form, lookup.covered, later)
  // A fruit shown in two groups travels from the first one only.
  const shown = new Set<string>()

  return (
    <>
      {groups.map((group) => {
        const matches = matchesOf(group, lookup, needle).map((found) => {
          const morph = !shown.has(found.entry.id)
          shown.add(found.entry.id)

          return { ...found, morph }
        })

        return (
          <Group
            key={group.anchor}
            group={group}
            lookup={lookup}
            matches={matches}
            needle={needle}
            peek={peek}
          />
        )
      })}

      <FogBand
        count={laterTiles.length}
        headingId={`${fieldId}-later`}
        level="h2"
        words={words}
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
 * The open tiles of a group the picks find, each with the eater it shows when
 * the group chose among them (the faction view). A fruit the query found only
 * through an eater of another group is left out here.
 */
function matchesOf(
  group: AlbumGroup,
  lookup: Lookup,
  needle: string,
): (Match<SpecimenView> & { eater?: EaterMatch })[] {
  const among = new Map(group.open.map((ref) => [ref.id, ref.eaters]))
  const ids = group.open.map(({ id }) => id)

  return matchesIn(pickedOf(lookup.form, lookup.open, ids), needle).flatMap(
    (found) => {
      const eaters = among.get(found.entry.id)
      if (eaters === undefined) {
        return found
      }
      const eater = groupEaterMatch(found.entry, needle, eaters)

      return eater === null ? [] : { ...found, eater }
    },
  )
}

/**
 * One group: its title pinned over the open tiles the search finds, then its
 * fog tiles. With nothing left to show it leaves the page, as a character's
 * shelf does. The count is the group's tiles before any pick.
 */
function Group({
  group,
  lookup,
  matches,
  needle,
  peek,
}: {
  group: AlbumGroup
  lookup: Lookup
  matches: ComponentProps<typeof OpenTiles>['matches']
  needle: string
  peek: (handle: string) => Promise<FruitView>
}): null | ReactElement {
  const t = useT()
  const fog = pickedOf(lookup.form, lookup.covered, group.covered)
  if (matches.length === 0 && fog.length === 0) {
    return null
  }

  const total = group.open.length + group.covered.length

  return (
    <CatalogueSection
      headingId={group.anchor}
      lede={t(total === 1 ? 'fruits.bandCountOne' : 'fruits.bandCount', {
        count: total,
      })}
      sticky
      title={group.title}
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
