import { isRevealed } from '~/lib/progress/spoiler'

import { entities } from './entities'
import { orderByMode } from './order'

describe('orderByMode', () => {
  it('sorts by episode for an episode or season reader', () => {
    for (const mode of ['episode', 'season'] as const) {
      const thresholds = orderByMode(entities, mode).map(
        (entity) => entity.revealedAtEpisode,
      )
      expect(thresholds).toEqual([...thresholds].sort((a, b) => a - b))
    }
  })

  it('sorts by chapter for a manga reader', () => {
    const thresholds = orderByMode(entities, 'chapter').map(
      (entity) => entity.revealedAtChapter,
    )
    expect(thresholds).toEqual([...thresholds].sort((a, b) => a - b))
  })

  it('keeps the open rows a prefix of the list in every unit', () => {
    // The chart, the log and the strip all draw one horizon between two runs,
    // which only works when nothing open comes after something covered.
    const bookmarks = [
      { mode: 'episode', episode: 92 },
      { mode: 'season', season: 4, episode: 1 },
      { mode: 'chapter', chapter: 155 },
    ] as const

    for (const bookmark of bookmarks) {
      const flags = orderByMode(entities, bookmark.mode).map((entity) =>
        isRevealed(entity, bookmark),
      )
      const firstCovered = flags.indexOf(false)
      expect(flags.slice(firstCovered)).not.toContain(true)
    }
  })

  it('does not change the archive itself', () => {
    const before = entities.map((entity) => entity.id)
    orderByMode(entities, 'chapter')
    expect(entities.map((entity) => entity.id)).toEqual(before)
  })
})
