import type { Drawings, Stroke } from '~/data/art/stroke'
import type { Entity, Timeline } from '~/data/types'
import {
  type Bookmark,
  CHAPTER_CEILING,
  EPISODE_CEILING,
} from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'

import { DRAWINGS } from './one-piece/art'
import { TIMELINES } from './one-piece/chapters'
import { datedOf } from './one-piece/dated'
import { entities } from './one-piece/entities'
import { sagas } from './one-piece/sagas'

/**
 * The series the site files, for the tests, the gates and the scripts only:
 * every spoiler check runs once per series here, so a series cannot ship
 * without them. The server and the browser never import this module, and
 * fallow holds them to it (the `series-list` zone). The registry the server
 * reads comes in #753.
 */

/** What the gates read of a series' archive, imported as it is. */
export interface SeriesArchive {
  /** Every drawing, one per record, keyed by its id. */
  drawings: Drawings
  /** Every record the series files. */
  entities: Entity[]
  /** A record's redrawings, each with the gate a reader must pass to see it. */
  redrawn: (owner: Entity) => { gate: Gated; value: Stroke[] }[]
  /** The modules the records are filed in, for the counts table. */
  sagas: { entries: Entity[] }[]
  /** Every timeline of every record, with the field it is filed under. */
  timelines: {
    field: string
    label: string
    owner: Entity
    timeline: Timeline<unknown>
  }[]
}

/** One series, as the tests, gates and scripts see it. */
export interface ListedSeries {
  archive: SeriesArchive
  /** The bookmarks its payload sweep asks every page at. */
  bookmarks: Bookmark[]
  /** Its folder under `src/data/series/`. */
  folder: string
  slug: string
  /** The MediaWiki `api.php` its `verify:*` scripts read, per language. */
  wiki: { en: string; it: string }
}

/**
 * Every saga's start in one unit, where the most opens at once, and the
 * number before it. The fruits file no arc, so they have no start.
 */
function aroundSagas(threshold: (arc: Entity) => number): number[] {
  const around: number[] = []
  for (const { entries } of sagas) {
    const arcs = entries.filter(({ kind }) => kind === 'arc')
    const start = Math.min(...arcs.map((arc) => threshold(arc)))
    if (Number.isFinite(start)) {
      around.push(...[start - 1, start].filter((count) => count > 0))
    }
  }

  return around
}

export const ONE_PIECE: ListedSeries = {
  slug: 'one-piece',
  folder: 'one-piece',
  archive: {
    drawings: DRAWINGS,
    entities,
    redrawn: (owner) => datedOf(owner, 'redrawing'),
    sagas,
    timelines: TIMELINES,
  },
  /**
   * None, both sides of every saga's start in both units, both sides of
   * Robin's episode in seasons (S04E38 is 130), and the last episode and
   * chapter. A season that resolves to no episode is not here: the cookie
   * parser turns it into no bookmark.
   */
  bookmarks: [
    null,
    ...aroundSagas((arc) => arc.revealedAtEpisode).map((episode): Bookmark => ({
      mode: 'episode',
      episode,
    })),
    ...aroundSagas((arc) => arc.revealedAtChapter).map((chapter): Bookmark => ({
      mode: 'chapter',
      chapter,
    })),
    { mode: 'season', season: 4, episode: 37 },
    { mode: 'season', season: 4, episode: 38 },
    { mode: 'episode', episode: EPISODE_CEILING },
    { mode: 'chapter', chapter: CHAPTER_CEILING },
  ],
  wiki: {
    en: 'https://onepiece.fandom.com/api.php',
    it: 'https://onepiece.fandom.com/it/api.php',
  },
}

export const SERIES: ListedSeries[] = [ONE_PIECE]
