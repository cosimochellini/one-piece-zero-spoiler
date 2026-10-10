import { entities } from '~/data/entities'
import { FILLER, type FillerEntry } from '~/data/filler'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Gated } from '~/lib/progress/spoiler'
import type {
  FillerPlace,
  FillerRowView,
  FillerSlot,
  SkipRange,
} from '~/lib/view/filler'

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

// Base 36, as the archive's own handles: short, and nothing but an index.
export const RADIX = 36

/** The reader, as far as this page needs one. */
export interface Looker {
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

/** An entry with its index. A named function: `map` hands it both. */
function indexed(entry: FillerEntry, index: number): Indexed {
  return { entry, index }
}

/** Every entry with its index, in the order a viewer reaches them. */
export const INDEXED = FILLER.map((entry, at) => indexed(entry, at))

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
    if (last === undefined) {
      chunks.push({ key, items: [item] })
      continue
    }

    if (last.key === key) {
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
const CANON_ARCS = entities
  .filter((entity) => entity.kind === 'arc')
  .toSorted((a, b) => a.revealedAtEpisode - b.revealedAtEpisode)

/** The canon arc an episode falls in: the last one opened by then. */
export function canonArcOf(episode: number): Entity | undefined {
  return CANON_ARCS.findLast((arc) => arc.revealedAtEpisode <= episode)
}

/** When a reader reaches a canon arc's group. */
export function arcGateOf(arc: Entity | undefined): Gated {
  return {
    revealedAtEpisode: arc?.revealedAtEpisode ?? 1,
    revealedAtChapter: arc?.revealedAtChapter ?? 1,
  }
}

/** When a reader reaches an entry, in both units. */
export function gateOf(entry: FillerEntry): Gated {
  const arc = canonArcOf(positionOf(entry))

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
export function rowOf(
  { entry, index }: Indexed,
  locale: Locale,
): FillerRowView {
  return {
    ...placeOf(entry),
    ...gateOf(entry),
    handle: index.toString(RADIX),
    kind: entry.kind,
    title: entry.title[locale],
    summary: entry.summary[locale],
    ...('released' in entry && { released: entry.released }),
  }
}

/** An entry, open or covered, for this reader. */
export function slotOf(item: Indexed, look: Looker): FillerSlot {
  const { entry, index } = item
  const gate = gateOf(entry)
  if (look.sees(gate)) {
    return { open: true, record: rowOf(item, look.locale) }
  }

  return {
    open: false,
    covered: {
      ...placeOf(entry),
      ...gate,
      kind: entry.kind,
      handle: index.toString(RADIX),
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
