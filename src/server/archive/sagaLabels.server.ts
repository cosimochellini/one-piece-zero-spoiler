import { orderByMode } from '~/data/order'
import { toldIn } from '~/data/reveal'
import type { LocalizedText, SeriesArchive } from '~/data/types'
import type { SagaRow, SagaTable } from '~/lib/progress/sagaLabel'
import { type Source, thresholdIn } from '~/lib/progress/spoiler'

import { skipRangesOf } from './fillerRows.server'
import type { Reader } from './reader.server'

/** The source a unit counts in. */
function sourceIn(mode: 'chapter' | 'episode'): Source {
  return mode === 'chapter' ? 'manga' : 'anime'
}

/** One saga's opening in one unit. */
export interface SagaStart {
  from: number
  name: LocalizedText
}
const cached = new WeakMap<
  SeriesArchive,
  { chapter: SagaStart[]; episode: SagaStart[]; filler: SagaTable['filler'] }
>()

/**
 * Arcs and skip ranges belong to the loaded archive, never another series. A
 * unit's saga starts at the arcs its own source tells.
 */
function startsIn(mode: 'chapter' | 'episode', r: Reader): SagaStart[] {
  return r.archive.sagas
    .map((saga) => {
      const ids = new Set(saga.entries.map((entry) => entry.id))
      let from = Infinity
      for (const arc of r.archive.arcs) {
        if (ids.has(arc.id) && toldIn(arc, sourceIn(mode))) {
          from = Math.min(from, thresholdIn(arc, mode))
        }
      }
      return { from, name: saga.name }
    })
    .toSorted((a, b) => a.from - b.from)
}

function tableFor(r: Reader): NonNullable<ReturnType<typeof cached.get>> {
  let table = cached.get(r.archive)
  if (table === undefined) {
    table = {
      chapter: startsIn('chapter', r),
      episode: startsIn('episode', r),
      filler: skipRangesOf(
        r.archive.filler.filter((entry) => entry.kind === 'filler'),
      ),
    }
    cached.set(r.archive, table)
  }
  return table
}

/**
 * One unit's rows: the arcs its source tells, so a reader trying the other
 * unit in the dialog is never shown an arc that unit does not have.
 */
function rowsIn(mode: 'chapter' | 'episode', r: Reader): SagaRow[] {
  const told = r.archive.arcs.filter((arc) => toldIn(arc, sourceIn(mode)))

  return orderByMode(told, mode).map((arc) => ({
    from: thresholdIn(arc, mode),
    name: arc.name[r.locale],
  }))
}

/** The dialog names arcs at any point; their names are deliberately ungated. */
export function sagaLabels(r: Reader): SagaTable {
  return {
    episode: rowsIn('episode', r),
    chapter: rowsIn('chapter', r),
    filler: tableFor(r).filler,
  }
}

/** Saga starts in the reader's unit, cached per archive. */
export function sagaStarts(
  mode: 'chapter' | 'episode',
  r: Reader,
): SagaStart[] {
  return tableFor(r)[mode]
}

/** The saga containing one episode or chapter. */
export function sagaOf(
  mode: 'chapter' | 'episode',
  at: number,
  r: Reader,
): SagaStart | undefined {
  return sagaStarts(mode, r).findLast((saga) => saga.from <= at)
}
