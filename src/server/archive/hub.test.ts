import { describe, expect, it } from 'vitest'

import { ONE_PIECE_LOADED } from '~/test/series'

import { hubFor, hubSeries } from './hub.server'

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

describe('hubFor', () => {
  const { archive } = ONE_PIECE_LOADED
  const { cookie, trialCookie } = archive.series
  const bookmarkIn = (jar: [string, string][]): unknown =>
    hubFor(new Map(jar), [archive])[0]?.bookmark

  it('reads the saved bookmark of each series from its own cookie', () => {
    expect(bookmarkIn([[cookie, 's14e3']])).toStrictEqual({
      mode: 'season',
      season: 14,
      episode: 3,
    })
  })

  const cases: { case: string; jar: [string, string][] }[] = [
    { jar: [], case: 'no cookie' },
    { jar: [[trialCookie, '5']], case: 'a trial only' },
    { jar: [[cookie, 'nope']], case: 'a saved cookie the dialog never wrote' },
  ]

  it.each(cases)('shows no bookmark for $case', ({ jar }) => {
    expect(bookmarkIn(jar)).toBeNull()
  })
})
