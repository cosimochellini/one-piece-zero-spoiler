import { describe, expect, it } from 'vitest'

import { sagaAt, type SagaTable } from './sagaLabel'

const TABLE: SagaTable = {
  episode: [
    { from: 1, name: 'East Blue Saga' },
    { from: 1, name: 'Romance Dawn' },
    { from: 62, name: 'Reverse Mountain' },
    { from: 629, name: 'Dressrosa' },
  ],
  chapter: [
    { from: 1, name: 'Romance Dawn' },
    { from: 700, name: 'Dressrosa' },
  ],
  filler: [{ first: 54, last: 61 }],
}

describe('sagaAt', () => {
  it('reads an episode against the episode openings', () => {
    expect(
      sagaAt(TABLE, { mode: 'episode', season: '', number: '650' }),
    ).toStrictEqual({ name: 'Dressrosa', filler: false })
  })

  it('gives a shared opening to the later saga in route order', () => {
    expect(
      sagaAt(TABLE, { mode: 'episode', season: '', number: '1' }),
    ).toStrictEqual({ name: 'Romance Dawn', filler: false })
  })

  it('reads a season and episode as the absolute episode', () => {
    // Season 2 opens at episode 62.
    expect(
      sagaAt(TABLE, { mode: 'season', season: '2', number: '1' }),
    ).toStrictEqual({ name: 'Reverse Mountain', filler: false })
  })

  it('reads a chapter against the chapter openings, never as filler', () => {
    expect(
      sagaAt(TABLE, { mode: 'chapter', season: '', number: '58' }),
    ).toStrictEqual({ name: 'Romance Dawn', filler: false })
    expect(
      sagaAt(TABLE, { mode: 'chapter', season: '', number: '700' }),
    ).toStrictEqual({ name: 'Dressrosa', filler: false })
  })

  it('marks an episode inside a run of filler', () => {
    expect(
      sagaAt(TABLE, { mode: 'episode', season: '', number: '55' }),
    ).toStrictEqual({ name: 'Romance Dawn', filler: true })
  })

  it('names nothing for a draft that is not a bookmark yet', () => {
    expect(
      sagaAt(TABLE, { mode: 'episode', season: '', number: '' }),
    ).toBeNull()
    expect(
      sagaAt(TABLE, { mode: 'episode', season: '', number: '99999' }),
    ).toBeNull()
    expect(
      sagaAt(TABLE, { mode: 'season', season: '', number: '3' }),
    ).toBeNull()
  })
})
