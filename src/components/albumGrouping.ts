import type { FogTitles } from '~/components/FogBand'
import type { Translate } from '~/i18n/types'
import { type AlbumView, sagaAnchor } from '~/lib/search/fruitParams'
import type {
  FruitFactionView,
  FruitRef,
  FruitSagaView,
} from '~/lib/view/records'

/**
 * The album's grouped views as one shape, so one component (`AlbumGroups`)
 * draws them both: the saga view and the faction view.
 */

/** What the later sagas' band calls itself at each count. */
const LATER_FOG: FogTitles<'one-piece'> = {
  allOpen: 'fruits.laterAllOpen',
  hint: 'fruits.foggedHint',
  many: 'fruits.later',
  one: 'fruits.laterOne',
}

/** What the faction view's band of every covered fruit calls itself. */
const COVERED_FOG: FogTitles<'one-piece'> = {
  allOpen: 'fruits.noneFogged',
  hint: 'fruits.foggedHint',
  many: 'fruits.foggedTitle',
  one: 'fruits.foggedTitleOne',
}

/**
 * One group of a grouped view: a pinned heading over open tiles by id and fog
 * tiles by handle. An open ref that lists `eaters` may show only those on its
 * tile (the faction view's); one without shows whichever the search found.
 */
export interface AlbumGroup {
  anchor: string
  covered: string[]
  open: (FruitRef & { eaters?: number[] })[]
  title: string
}

/** A grouped view: its groups, and its trailing band of fog with its words. */
export interface AlbumGrouping {
  groups: AlbumGroup[]
  later: string[]
  words: FogTitles<'one-piece'>
}

/** The view picked, and what the server sent for the grouped views. */
export interface GroupedData {
  factions?: FruitFactionView[] | undefined
  /** Prefixes the faction groups' heading ids. */
  fieldId: string
  later: string[]
  sagas: FruitSagaView[]
  view: AlbumView | undefined
}

/** The groups of a view, or `undefined` for the Type view's plates. */
export function groupingOf(
  t: Translate<'one-piece'>,
  data: GroupedData,
): AlbumGrouping | undefined {
  if (data.view === 'saga') {
    return sagaGrouping(data.sagas, data.later)
  }

  return data.view === 'faction' ? factionGrouping(t, data) : undefined
}

/**
 * The saga view: every saga the bookmark has reached, anchored by its place
 * in route order, then every covered fruit of the sagas past it.
 */
function sagaGrouping(sagas: FruitSagaView[], later: string[]): AlbumGrouping {
  return {
    groups: sagas.map((group, at) => ({
      anchor: sagaAnchor(at),
      covered: group.covered,
      open: group.open,
      title: group.saga,
    })),
    later,
    words: LATER_FOG,
  }
}

/**
 * The faction view: the server's groups under the labels they came with, then
 * every covered fruit in one band. The saga view already holds each covered
 * fruit once, in the reader's order, its sagas in route order and the later
 * ones after, so the band reads them from there in that order.
 */
function factionGrouping(
  t: Translate<'one-piece'>,
  { factions = [], fieldId, later, sagas }: GroupedData,
): AlbumGrouping {
  return {
    groups: factions.map(({ label, open }, at) => ({
      anchor: `${fieldId}-faction-${String(at + 1)}`,
      covered: [],
      open,
      title: label ?? t('fruits.noFaction'),
    })),
    later: [...sagas.flatMap(({ covered }) => covered), ...later],
    words: COVERED_FOG,
  }
}
