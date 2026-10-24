import { describe, expect, it } from 'vitest'

import { archiveIn } from '~/data/source'
import { ONE_PIECE_LOADED } from '~/test/series'
import { plant } from '~/test/sourceOnly'

import { hubFor, hubSeries, openArchives, openDescriptions } from './hub.server'

describe('hubSeries', () => {
  const { archive } = ONE_PIECE_LOADED

  it('carries only the series, its count and the bookmark', () => {
    const bookmark = { mode: 'season', season: 14, episode: 3 } as const

    expect(hubSeries(archive, bookmark)).toStrictEqual({
      slug: 'one-piece',
      name: { en: 'One Piece', it: 'One Piece' },
      theme: 'one-piece',
      count: archiveIn(archive, 'anime').entities.length,
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

describe('the count on the hub', () => {
  const { archive } = ONE_PIECE_LOADED
  const anime = plant(archive, 'anime').archive
  const manga = plant(archive, 'manga').archive
  const planted = anime.entities.length - archive.entities.length
  const countAt = (
    base: typeof archive,
    bookmark: Parameters<typeof hubSeries>[1],
  ): number => hubSeries(base, bookmark).count

  it('plants a record of one source of every kind', () => {
    expect(planted).toBeGreaterThan(0)
  })

  it.each([
    { reader: 'an episode', bookmark: { mode: 'episode', episode: 1 } },
    { reader: 'a season', bookmark: { mode: 'season', season: 1, episode: 1 } },
  ] as const)(
    "counts the anime's own records for $reader reader",
    ({ bookmark }) => {
      expect(countAt(anime, bookmark)).toBe(archive.entities.length + planted)
      expect(countAt(manga, bookmark)).toBe(archive.entities.length)
    },
  )

  it("counts the manga's own records for a chapter reader", () => {
    const bookmark = { mode: 'chapter', chapter: 1 } as const

    expect(countAt(manga, bookmark)).toBe(archive.entities.length + planted)
    expect(countAt(anime, bookmark)).toBe(archive.entities.length)
  })

  it('counts only what both sources tell for a reader with no bookmark', () => {
    expect(countAt(anime, null)).toBe(archive.entities.length)
    expect(countAt(manga, null)).toBe(archive.entities.length)
  })
})

describe('the series a reader reaches', () => {
  // Hunter x Hunter is filed and swept, and not open until #763: the hub's
  // cards and the legal page's descriptions are the open series alone.
  it('describes the open series only', () => {
    expect(openDescriptions().map(({ slug }) => slug)).toStrictEqual([
      'one-piece',
    ])
  })

  it('puts a card on the hub for the open series only', async () => {
    const hub = hubFor(new Map(), await openArchives())

    expect(hub.map(({ slug }) => slug)).toStrictEqual(['one-piece'])
  })
})
