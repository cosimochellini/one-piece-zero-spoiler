import { FILLER, FILLER_ARCS, type FillerArc, LAST_AIRED } from '~/data/filler'
import { reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
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
  INDEXED,
  type Indexed,
  type Looker,
  positionOf,
  RADIX,
  rowOf,
  skipRangesOf,
  slotOf,
} from './fillerRows.server'

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

const HANDLE_SHAPE = /^[\da-z]{1,3}$/u

/** The entries chunked by the canon arc they air in. */
const BY_ARC = chunkBy(INDEXED, (item) => canonArcOf(positionOf(item.entry)))

/** The filler arc a numbered episode belongs to. */
function fillerArcOf({ entry }: Indexed): FillerArc | undefined {
  if (!('episode' in entry)) {
    return undefined
  }

  const { episode } = entry
  return FILLER_ARCS.find((arc) => arc.first <= episode && episode <= arc.last)
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
  const current = BY_ARC.findLastIndex(({ key }) => look.sees(arcGateOf(key)))

  return BY_ARC.map((chunk, at) => {
    return {
      ...arcGateOf(chunk.key),
      current: at === current,
      name: arcName(chunk.key, look.locale),
      runs: chunkBy(chunk.items, fillerArcOf).map((run) => runOf(run, look)),
    }
  })
}

/** The runs to skip, per canon arc, leaving out arcs with none. */
function skipGroupsFor(look: Looker): SkipGroup[] {
  const groups: SkipGroup[] = []

  for (const { key, items } of BY_ARC) {
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
function marks(): FillerMark[] {
  const drawn: FillerMark[] = []

  for (const entry of FILLER) {
    if ('episode' in entry) {
      drawn.push({ episode: entry.episode, kind: entry.kind })
    }
  }

  return drawn
}

/** The guide at this bookmark. */
export function fillerPage(bookmark: Bookmark, locale: Locale): FillerPageView {
  const look = { locale, sees: reveal(bookmark).sees }

  return {
    aired: LAST_AIRED,
    countdown: countdownOf(bookmark, look),
    groups: groupsFor(look),
    marks: marks(),
    skipGroups: skipGroupsFor(look),
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
