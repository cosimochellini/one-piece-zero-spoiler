import { entities } from '~/data/entities'
import {
  FILLER,
  FILLER_ARCS,
  type FillerArc,
  type FillerEntry,
  LAST_AIRED,
  type NumberedFiller,
} from '~/data/filler'
import { reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import type {
  FillerGroup,
  FillerMark,
  FillerPageView,
  FillerPlace,
  FillerRowView,
  FillerRun,
  FillerSlot,
  SkipRange,
} from '~/lib/view/filler'

/**
 * What the filler guide may say at one bookmark.
 *
 * An entry opens at its own episode for an episode or season reader, which
 * is the episode it airs as or the one it is watched after. A chapter reader
 * has no episode, so an entry opens for them with its canon arc, or at the
 * last chapter the anime had adapted when it aired, whichever is later: the
 * text of a filler near the end of an arc can still say how the arc went.
 *
 * The skip ranges and the strip are numbers and kinds only. They are sent
 * whatever the bookmark, because "episodes 54–60 are filler" names nothing.
 */

// Base 36, as the archive's own handles: short, and nothing but an index.
const RADIX = 36
const HANDLE_SHAPE = /^[\da-z]{1,3}$/u

/** The reader, as far as this page needs one. */
interface Looker {
  locale: Locale
  sees: (gated: Gated) => boolean
}

/** An entry and its index in `FILLER`, which is its handle. */
interface Indexed {
  entry: FillerEntry
  index: number
}

/** A run of consecutive items that share a key. */
interface Chunk<K, T> {
  items: T[]
  key: K
}

/** Splits a list where the key changes, keeping the order. */
function chunkBy<K, T>(items: T[], keyOf: (item: T) => K): Chunk<K, T>[] {
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
function positionOf(entry: FillerEntry): number {
  return 'episode' in entry ? entry.episode : entry.after
}

/** The canon arcs, in the order the anime reaches them. */
const CANON_ARCS = entities
  .filter((entity) => entity.kind === 'arc')
  .toSorted((a, b) => a.revealedAtEpisode - b.revealedAtEpisode)

/** The canon arc an episode falls in: the last one opened by then. */
function canonArcOf(episode: number): Entity | undefined {
  return CANON_ARCS.findLast((arc) => arc.revealedAtEpisode <= episode)
}

/** When a reader reaches an entry, in both units. */
function gateOf(entry: FillerEntry): Gated {
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
function rowOf({ entry, index }: Indexed, locale: Locale): FillerRowView {
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
function slotOf(item: Indexed, look: Looker): FillerSlot {
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

/** The filler arc a numbered episode belongs to. */
function fillerArcOf(entry: FillerEntry): FillerArc | undefined {
  if (!('episode' in entry)) {
    return undefined
  }

  const { episode } = entry
  return FILLER_ARCS.find((arc) => arc.first <= episode && episode <= arc.last)
}

/** A run: a filler arc, named once its first episode is open, or no arc. */
function runOf(
  { key: arc, items }: Chunk<FillerArc | undefined, Indexed>,
  look: Looker,
): FillerRun {
  const rows = items.map((item) => slotOf(item, look))
  if (arc === undefined) {
    return { name: undefined, rows }
  }

  const open = items[0] !== undefined && look.sees(gateOf(items[0].entry))
  return { name: open ? arc.name[look.locale] : null, rows }
}

/** A canon arc's group, named once the arc is open. */
function groupOf(
  { key: arc, items }: Chunk<Entity | undefined, Indexed>,
  look: Looker,
): FillerGroup {
  const gate = {
    revealedAtEpisode: arc?.revealedAtEpisode ?? 1,
    revealedAtChapter: arc?.revealedAtChapter ?? 1,
  }

  return {
    ...gate,
    name: arc !== undefined && look.sees(gate) ? arc.name[look.locale] : null,
    runs: chunkBy(items, (item) => fillerArcOf(item.entry)).map((run) =>
      runOf(run, look),
    ),
  }
}

/** Consecutive pure filler and recaps, as inclusive ranges. */
function skipRanges(): SkipRange[] {
  const ranges: SkipRange[] = []

  for (const entry of FILLER) {
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

/** A numbered entry as the strip draws it: a number and a kind. */
function markOf(entry: NumberedFiller): FillerMark {
  return { episode: entry.episode, kind: entry.kind }
}

/** The guide at this bookmark. */
export function fillerPage(bookmark: Bookmark, locale: Locale): FillerPageView {
  const look = { locale, sees: reveal(bookmark).sees }
  const indexed = FILLER.map((entry, index) => ({ entry, index }))

  return {
    aired: LAST_AIRED,
    groups: chunkBy(indexed, (item) => canonArcOf(positionOf(item.entry))).map(
      (group) => groupOf(group, look),
    ),
    marks: FILLER.filter((entry) => 'episode' in entry).map((entry) =>
      markOf(entry),
    ),
    ranges: skipRanges(),
    unnumbered: FILLER.filter((entry) => !('episode' in entry)).length,
  }
}

/**
 * One entry, lifted by hand. As with the archive's peeks, this is the reader
 * choosing to look, so the bookmark is not asked.
 */
export function peekFiller(
  handle: string,
  locale: Locale,
): FillerRowView | undefined {
  if (!HANDLE_SHAPE.test(handle)) {
    return undefined
  }

  const index = Number.parseInt(handle, RADIX)
  const entry = FILLER.at(index)
  return entry === undefined ? undefined : rowOf({ entry, index }, locale)
}
