import { describe, expect, it } from 'vitest'

import { ONE_PIECE_LOADED } from '~/test/series'

import { hubSeries } from './hub.server'

describe('hubSeries', () => {
  const { archive } = ONE_PIECE_LOADED

  it('counts every entry and carries only the series and the bookmark', () => {
    const bookmark = { mode: 'season', season: 14, episode: 3 } as const

    expect(hubSeries(archive, bookmark)).toStrictEqual({
      slug: 'one-piece',
      name: { en: 'One Piece', it: 'One Piece' },
      theme: 'one-piece',
      count: archive.entities.length,
      bookmark,
    })
  })

  it('says nothing of a bookmark the reader has not saved', () => {
    expect(hubSeries(archive, null).bookmark).toBeNull()
  })
})
