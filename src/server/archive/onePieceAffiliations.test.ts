import { describe, expect, it } from 'vitest'

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
].flatMap((row) =>
  UNITS.map((unit) => ({
    ...row,
    gate: unit === 'episode' ? row.episode : row.chapter,
    unit,
  })),
)

function affiliationAt(id: string, at: Bookmark): string | undefined {
  const entity = archive.getEntity(id)
  if (entity === undefined) {
    throw new Error(`Missing One Piece record: ${id}`)
  }

  return archive.latestOf(readerFor(archive, at, 'en'), entity, 'affiliation')
    ?.en
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
})
