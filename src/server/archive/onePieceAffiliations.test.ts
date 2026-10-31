import { describe, expect, it } from 'vitest'

import { factionsOf } from '~/data/series/one-piece/dated'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'one-piece')
if (series === undefined) {
  throw new Error('The affiliation tests need the filed One Piece archive')
}
const { archive } = series

const UNITS = ['episode', 'chapter'] as const

// Affiliation steps moved to the scene that tells them: the English line
// before the step and from it, at its gate in each unit.
const MOVED = [
  // #983: chapter 608, where she lives in the waitresses' dormitory, and
  // episode 529, where she talks to her boss at the café.
  {
    id: 'camie',
    episode: 529,
    chapter: 608,
    from: 'Takoyaki 8, staff; Hatchan’s friend',
    to: 'Mermaid Café, Fish-Man Island',
  },
  // #986: chapter 817, where Kin'emon tells whose son he is, and episode
  // 768, which adapts it.
  {
    id: 'momonosuke',
    episode: 768,
    chapter: 817,
    from: 'Kin’emon’s son, so he says',
    to: 'Kozuki Momonosuke, heir of Wano',
  },
].flatMap((row) =>
  UNITS.map((unit) => ({
    ...row,
    gate: unit === 'episode' ? row.episode : row.chapter,
    unit,
  })),
)

function entityOf(id: string): Entity {
  const entity = archive.getEntity(id)
  if (entity === undefined) {
    throw new Error(`Missing One Piece record: ${id}`)
  }

  return entity
}

function affiliationAt(id: string, at: Bookmark): string | undefined {
  return archive.latestOf(
    readerFor(archive, at, 'en'),
    entityOf(id),
    'affiliation',
  )?.en
}

/** Momonosuke's factions, which the fruit album groups his fruit by. */
function momonosukeFactionsAt(at: Bookmark): string[] | undefined {
  return factionsOf(readerFor(archive, at, 'en'), entityOf('momonosuke'))
}

function bookmark(unit: (typeof UNITS)[number], count: number): Bookmark {
  return unit === 'episode' ?
      { mode: 'episode', episode: count }
    : { mode: 'chapter', chapter: count }
}

describe('One Piece affiliations moved to the scene that tells them', () => {
  it.each(MOVED)(
    'gives $id the new affiliation from $unit $gate, not before',
    ({ from, gate, id, to, unit }) => {
      expect(affiliationAt(id, bookmark(unit, gate - 1))).toBe(from)
      expect(affiliationAt(id, bookmark(unit, gate))).toBe(to)
    },
  )

  it.each(UNITS)(
    'keeps Momonosuke out of the Kozuki family until it is told (%s)',
    (unit) => {
      const gate = unit === 'episode' ? 768 : 817

      expect(momonosukeFactionsAt(bookmark(unit, gate - 1))).not.toContain(
        'kozuki-family',
      )
      expect(momonosukeFactionsAt(bookmark(unit, gate))).toContain(
        'kozuki-family',
      )
    },
  )
})
