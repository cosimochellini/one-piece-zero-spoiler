import type { Entity, FillerArc, SeriesArchive } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type {
  FillerGroup,
  FillerMark,
  FillerPageView,
  FillerRowView,
  FillerRun,
  SkipGroup,
} from '~/lib/view/filler'

import { countdownOf } from './fillerCountdown.server'
import {
  arcGateOf,
  canonArcOf,
  type Chunk,
  chunkBy,
  type Indexed,
  indexedFor,
  type Looker,
  positionOf,
  rowOf,
  skipRangesOf,
  slotOf,
} from './fillerRows.server'
import { handleIndex } from './handle.server'
import type { Reader } from './reader.server'

/**
 * What the filler guide may say at one bookmark. The rules for one entry
 * are in `./fillerRows.server`, the countdown in `./fillerCountdown.server`.
 *
 * The skip ranges and the strip are numbers and kinds only. They are sent
 * whatever the bookmark, because "episodes 54–60 are filler" names nothing.
 * The names of the sagas, canon and filler, are always shown too (owner,
 * 2026-10-10): a reader finds their way by them, and the titles and plots
 * under them still wait for the bookmark.
 */

const byArc = new WeakMap<SeriesArchive, Chunk<Entity | undefined, Indexed>[]>()
function chunksFor(look: Looker): Chunk<Entity | undefined, Indexed>[] {
  let chunks = byArc.get(look.archive)
  if (chunks === undefined) {
    chunks = chunkBy(indexedFor(look), (item) =>
      canonArcOf(positionOf(item.entry), look),
    )
    byArc.set(look.archive, chunks)
  }
  return chunks
}

/** The filler arc a numbered episode belongs to. */
function fillerArcOf({ entry }: Indexed, look: Looker): FillerArc | undefined {
  if (!('episode' in entry)) {
    return undefined
  }

  const { episode } = entry
  return look.archive.fillerArcs.find(
    (arc) => arc.first <= episode && episode <= arc.last,
  )
}

/** A run: a filler arc, named, or a stretch of rows that belong to none. */
function runOf(
  { key: arc, items }: Chunk<FillerArc | undefined, Indexed>,
  look: Looker,
): FillerRun {
  return {
    name: arc?.name[look.locale],
    rows: items.map((item) => slotOf(item, look)),
  }
}

/** A canon arc's name, in the page's locale. */
function arcName(arc: Entity | undefined, locale: Locale): string {
  return arc?.name[locale] ?? ''
}

/** The catalogue: one group per canon arc, the reader's own one current. */
function groupsFor(look: Looker): FillerGroup[] {
  const current = chunksFor(look).findLastIndex(({ key }) =>
    look.sees(arcGateOf(key)),
  )

  return chunksFor(look).map((chunk, at) => {
    return {
      ...arcGateOf(chunk.key),
      current: at === current,
      name: arcName(chunk.key, look.locale),
      runs: chunkBy(chunk.items, (item) => fillerArcOf(item, look)).map((run) =>
        runOf(run, look),
      ),
    }
  })
}

/** The runs to skip, per canon arc, leaving out arcs with none. */
function skipGroupsFor(look: Looker): SkipGroup[] {
  const groups: SkipGroup[] = []

  for (const { key, items } of chunksFor(look)) {
    const ranges = skipRangesOf(items.map((item) => item.entry))
    if (ranges.length > 0) {
      groups.push({
        ...arcGateOf(key),
        name: arcName(key, look.locale),
        ranges,
      })
    }
  }

  return groups
}

/** The numbered entries as the strip draws them: a number and a kind. */
function marks(look: Looker): FillerMark[] {
  const drawn: FillerMark[] = []

  for (const entry of look.archive.filler) {
    if ('episode' in entry) {
      drawn.push({ episode: entry.episode, kind: entry.kind })
    }
  }

  return drawn
}

/** The guide at this bookmark. */
export function fillerPage(r: Reader): FillerPageView {
  const look = r

  return {
    aired: r.archive.lastAired,
    countdown: countdownOf(r),
    groups: groupsFor(look),
    marks: marks(look),
    skipGroups: skipGroupsFor(look),
    unnumbered: r.archive.filler.filter((entry) => !('episode' in entry))
      .length,
  }
}

/**
 * One entry, lifted by hand. As with the archive's peeks, this is the reader
 * choosing to look, so the bookmark is not asked.
 */
export function peekFiller(
  handle: string,
  r: Reader,
): FillerRowView | undefined {
  const index = handleIndex(handle, r.archive)
  const entry = index === undefined ? undefined : r.archive.filler.at(index)
  return entry === undefined || index === undefined ?
      undefined
    : rowOf({ entry, index }, r)
}
