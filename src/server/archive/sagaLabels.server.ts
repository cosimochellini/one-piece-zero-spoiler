import { arcs } from '~/data/characters'
import { FILLER } from '~/data/filler'
import { orderByMode } from '~/data/order'
import type { Locale } from '~/i18n/locales'
import type { SagaRow, SagaTable } from '~/lib/progress/sagaLabel'

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
