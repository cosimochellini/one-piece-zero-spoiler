import { byNumber } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { entities } from './entities'
import { orderByMode } from './order'

describe('orderByMode', () => {
  it('sorts by episode for an episode or season reader', () => {
    for (const mode of ['episode', 'season'] as const) {
      const thresholds = orderByMode(entities, mode).map(
        (entity) => entity.revealedAtEpisode,
      )

      expect(thresholds).toStrictEqual(thresholds.toSorted(byNumber()))
    }
  })

  it('sorts by chapter for a manga reader', () => {
    const thresholds = orderByMode(entities, 'chapter').map(
      (entity) => entity.revealedAtChapter,
    )

    expect(thresholds).toStrictEqual(thresholds.toSorted(byNumber()))
  })

  it('does not change the archive itself', () => {
    const before = entities.map((entity) => entity.id)
    orderByMode(entities, 'chapter')

    expect(entities.map((entity) => entity.id)).toStrictEqual(before)
  })
})
