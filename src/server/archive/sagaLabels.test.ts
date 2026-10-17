import { describe, expect, it } from 'vitest'

import { arcs } from '~/data/characters'
import { sagas } from '~/data/sagas'
import type { LocalizedText } from '~/data/types'
import { thresholdIn } from '~/lib/progress/spoiler'

import { sagaOf, sagaStarts } from './sagaLabels.server'

const UNITS = ['episode', 'chapter'] as const

/** Where each arc's saga module says it belongs, by the saga's name. */
const SAGA_OF_ARC = new Map<string, LocalizedText>()
for (const saga of sagas) {
  for (const entry of saga.entries) {
    SAGA_OF_ARC.set(entry.id, saga.name)
  }
}

describe('the twelve sagas', () => {
  it.each(UNITS)('open at the earliest arc of their module, in %s', (mode) => {
    const earliest = new Map<LocalizedText, number>()
    for (const arc of arcs) {
      const name = SAGA_OF_ARC.get(arc.id)
      if (name !== undefined) {
        earliest.set(
          name,
          Math.min(earliest.get(name) ?? Infinity, thresholdIn(arc, mode)),
        )
      }
    }

    expect(sagaStarts(mode)).toHaveLength(sagas.length)
    expect(
      sagaStarts(mode).map(({ from, name }) => [name, from]),
    ).toStrictEqual(sagas.map(({ name }) => [name, earliest.get(name)]))
  })

  it.each(UNITS)('keep every arc inside its own saga, in %s', (mode) => {
    for (const arc of arcs) {
      expect(sagaOf(mode, thresholdIn(arc, mode))?.name, arc.id).toBe(
        SAGA_OF_ARC.get(arc.id),
      )
    }
  })

  it.each(UNITS)('run in route order from the first %s', (mode) => {
    const starts = sagaStarts(mode).map(({ from }) => from)

    expect(starts[0]).toBe(1)
    expect(starts).toStrictEqual(starts.toSorted((a, b) => a - b))
  })
})
