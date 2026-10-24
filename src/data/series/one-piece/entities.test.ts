import { describe, expect, it } from 'vitest'

import { getEntity, openedBy } from './entities'

describe('getEntity', () => {
  it('finds a record by id', () => {
    expect(getEntity('egghead')?.revealedAtEpisode).toBe(1090)
  })

  it('returns undefined for an id the archive does not hold', () => {
    expect(getEntity('not-a-record')).toBeUndefined()
  })
})

describe('openedBy', () => {
  const both = { revealedAtEpisode: 10, revealedAtChapter: 20 }
  const anime = {
    revealedAtEpisode: 5,
    revealedAtChapter: 6,
    source: 'anime' as const,
  }
  const manga = {
    revealedAtEpisode: 3,
    revealedAtChapter: 4,
    source: 'manga' as const,
  }

  it('opens a fruit in each unit at the first naming its source tells', () => {
    expect(openedBy([both, anime, manga])).toStrictEqual({
      revealedAtEpisode: 5,
      revealedAtChapter: 4,
    })
  })

  it('keeps a fruit only one source names to that source', () => {
    // The other unit's threshold only orders it, and stays within the dial.
    expect(openedBy([anime])).toStrictEqual(anime)
    expect(openedBy([manga])).toStrictEqual(manga)
    expect(openedBy([both])).not.toHaveProperty('source')
  })
})
