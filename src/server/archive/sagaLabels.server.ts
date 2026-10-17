import { arcs } from '~/data/characters'
import { FILLER } from '~/data/filler'
import { orderByMode } from '~/data/order'
import { sagas } from '~/data/sagas'
import type { LocalizedText } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { SagaRow, SagaTable } from '~/lib/progress/sagaLabel'
import { thresholdIn } from '~/lib/progress/spoiler'

import { skipRangesOf } from './fillerRows.server'

function rowsIn(mode: 'chapter' | 'episode', locale: Locale): SagaRow[] {
  return orderByMode(arcs, mode).map((arc) => {
    return {
      from: mode === 'chapter' ? arc.revealedAtChapter : arc.revealedAtEpisode,
      name: arc.name[locale],
    }
  })
}

// Pure filler only. A mixed episode is canon in part, and a recap retells
// the saga it sits in rather than leaving it.
const FILLER_RANGES = skipRangesOf(
  FILLER.filter((entry) => entry.kind === 'filler'),
)

/**
 * The saga table the bookmark dialog reads its label from. It does not read
 * the bookmark: the dialog names the saga of any number typed into it, past
 * the bookmark too (owner, 2026-10-12), as the filler guide names every saga.
 */
export function sagaLabels(locale: Locale): SagaTable {
  return {
    episode: rowsIn('episode', locale),
    chapter: rowsIn('chapter', locale),
    filler: FILLER_RANGES,
  }
}

/** One of the twelve sagas: where it opens in one unit, and its name. */
export interface SagaStart {
  from: number
  name: LocalizedText
}

/**
 * The twelve sagas in one unit, each opening at the earliest arc its module
 * files. The table above is the arcs', which is finer than the fruits
 * page's marquee wants (owner, 2026-10-17: the twelve sagas).
 */
function startsIn(mode: 'chapter' | 'episode'): SagaStart[] {
  return sagas
    .map((saga) => {
      const ids = new Set(saga.entries.map((entry) => entry.id))
      let from = Infinity
      for (const arc of arcs) {
        if (ids.has(arc.id)) {
          from = Math.min(from, thresholdIn(arc, mode))
        }
      }

      return { from, name: saga.name }
    })
    .toSorted((a, b) => a.from - b.from)
}

const SAGA_STARTS = {
  chapter: startsIn('chapter'),
  episode: startsIn('episode'),
}

/** The twelve sagas in the order a reader counting in `mode` reaches them. */
export function sagaStarts(mode: 'chapter' | 'episode'): SagaStart[] {
  return SAGA_STARTS[mode]
}

/** The saga a chapter or an episode falls in. */
export function sagaOf(
  mode: 'chapter' | 'episode',
  at: number,
): SagaStart | undefined {
  return SAGA_STARTS[mode].findLast((saga) => saga.from <= at)
}
