import type { Entity, FillerEntry, SeriesArchive } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Gated } from '~/lib/progress/spoiler'
import type {
  FillerPlace,
  FillerRowView,
  FillerSlot,
  SkipRange,
} from '~/lib/view/filler'

import { indexHandle } from './handle.server'

/**
 * What every part of the filler guide decides about one entry: where it
 * sits, when a reader reaches it, and what it sends either way.
 *
 * An entry opens at its own episode for an episode or season reader, which
 * is the episode it airs as or the one it is watched after. A chapter reader
 * has no episode, so an entry opens for them with its canon arc, or at the
 * last chapter the anime had adapted when it aired, whichever is later: the
 * text of a filler near the end of an arc can still say how the arc went.
 */

/** The reader, as far as this page needs one. */
export interface Looker {
  archive: SeriesArchive
  locale: Locale
  sees: (gated: Gated) => boolean
}

/** An entry and its index in `FILLER`, which is its handle. */
export interface Indexed {
  entry: FillerEntry
  index: number
}

/** A run of consecutive items that share a key. */
export interface Chunk<K, T> {
  items: T[]
  key: K
}

/** Every entry with its index, in the order a viewer reaches them. */
const indexed = new WeakMap<SeriesArchive, Indexed[]>()
/** Filler ordinals are scoped to one loaded archive. */
export function indexedFor(r: Looker): Indexed[] {
  let items = indexed.get(r.archive)
  if (items === undefined) {
    items = r.archive.filler.map((entry, index) => ({ entry, index }))
    indexed.set(r.archive, items)
  }
  return items
}

/** Splits a list where the key changes, keeping the order. */
export function chunkBy<K, T>(
  items: T[],
  keyOf: (item: T) => K,
): Chunk<K, T>[] {
  const chunks: Chunk<K, T>[] = []

  for (const item of items) {
    const key = keyOf(item)
    const last = chunks.at(-1)
    // Not `last?.key === key`: the key can be `undefined`, and so can `last`.
    if (last !== undefined && last.key === key) {
      last.items.push(item)
    } else {
      chunks.push({ key, items: [item] })
    }
  }

  return chunks
}

/** The episode an entry sits at: its own, or the one it follows. */
export function positionOf(entry: FillerEntry): number {
  return 'episode' in entry ? entry.episode : entry.after
}

/** The canon arcs, in the order the anime reaches them. */
const canon = new WeakMap<SeriesArchive, Entity[]>()
function canonArcs(r: Looker): Entity[] {
  let arcs = canon.get(r.archive)
  if (arcs === undefined) {
    arcs = r.archive.entities
      .filter((entity) => entity.kind === 'arc')
      .toSorted((a, b) => a.revealedAtEpisode - b.revealedAtEpisode)
    canon.set(r.archive, arcs)
  }
  return arcs
}

/** The canon arc an episode falls in: the last one opened by then. */
export function canonArcOf(episode: number, r: Looker): Entity | undefined {
  return canonArcs(r).findLast((arc) => arc.revealedAtEpisode <= episode)
}

/** When a reader reaches a canon arc's group. */
export function arcGateOf(arc: Entity | undefined): Gated {
  return {
    revealedAtEpisode: arc?.revealedAtEpisode ?? 1,
    revealedAtChapter: arc?.revealedAtChapter ?? 1,
  }
}

/** When a reader reaches an entry, in both units. */
function gateOf(entry: FillerEntry, r: Looker): Gated {
  const arc = canonArcOf(positionOf(entry), r)

  return {
    revealedAtEpisode: positionOf(entry),
    revealedAtChapter: Math.max(entry.chapter, arc?.revealedAtChapter ?? 0),
  }
}

function placeOf(entry: FillerEntry): FillerPlace {
  return 'episode' in entry ?
      { episode: entry.episode }
    : { after: entry.after }
}

/** An entry as the page prints it once it is open. */
export function rowOf({ entry, index }: Indexed, look: Looker): FillerRowView {
  return {
    ...placeOf(entry),
    ...gateOf(entry, look),
    handle: indexHandle(index, look.archive),
    kind: entry.kind,
    title: entry.title[look.locale],
    summary: entry.summary[look.locale],
    ...('released' in entry && { released: entry.released }),
  }
}

/** An entry, open or covered, for this reader. */
export function slotOf(item: Indexed, look: Looker): FillerSlot {
  const { entry, index } = item
  const gate = gateOf(entry, look)
  if (look.sees(gate)) {
    return { open: true, record: rowOf(item, look) }
  }

  return {
    open: false,
    covered: {
      ...placeOf(entry),
      ...gate,
      kind: entry.kind,
      handle: indexHandle(index, look.archive),
    },
  }
}

/** Consecutive pure filler and recaps among some entries, as ranges. */
export function skipRangesOf(entries: FillerEntry[]): SkipRange[] {
  const ranges: SkipRange[] = []

  for (const entry of entries) {
    if (!('episode' in entry) || entry.kind === 'mixed') {
      continue
    }

    const last = ranges.at(-1)
    if (last?.last === entry.episode - 1) {
      last.last = entry.episode
    } else {
      ranges.push({ first: entry.episode, last: entry.episode })
    }
  }

  return ranges
}
