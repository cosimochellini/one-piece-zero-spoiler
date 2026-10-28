import { describe, expect, it } from 'vitest'

import { translatorOf } from '~/server/copy.server'

import {
  type BookmarkSeries,
  ONE_PIECE_BOOKMARK,
  ONE_PIECE_SERIES,
} from './series'
import { bookmarkPoint, describeBookmark, describeThreshold } from './threshold'

const en = translatorOf(ONE_PIECE_SERIES, 'en')
const inItalian = translatorOf(ONE_PIECE_SERIES, 'it')
const robin = { revealedAtEpisode: 130, revealedAtChapter: 218 }

describe('describeThreshold', () => {
  it('names the threshold in the reader’s unit', () => {
    expect(
      describeThreshold({
        gated: robin,
        mode: 'episode',
        sentence: 'veil.locked',
        series: ONE_PIECE_BOOKMARK,
        t: en,
      }),
    ).toBe('Under fog until episode 130')
    expect(
      describeThreshold({
        gated: robin,
        mode: 'season',
        sentence: 'veil.locked',
        series: ONE_PIECE_BOOKMARK,
        t: en,
      }),
    ).toBe('Under fog until S04E38')
    expect(
      describeThreshold({
        gated: robin,
        mode: 'chapter',
        sentence: 'veil.locked',
        series: ONE_PIECE_BOOKMARK,
        t: en,
      }),
    ).toBe('Under fog until chapter 218')
  })

  it('bends the grammar per unit in Italian', () => {
    expect(
      describeThreshold({
        gated: robin,
        mode: 'episode',
        sentence: 'character.opensAt',
        series: ONE_PIECE_BOOKMARK,
        t: inItalian,
      }),
    ).toBe('Compare per la prima volta nell’episodio 130')
    expect(
      describeThreshold({
        gated: robin,
        mode: 'chapter',
        sentence: 'character.opensAt',
        series: ONE_PIECE_BOOKMARK,
        t: inItalian,
      }),
    ).toBe('Compare per la prima volta nel capitolo 218')
    expect(
      describeThreshold({
        gated: robin,
        mode: 'season',
        sentence: 'chart.opensAt',
        series: ONE_PIECE_BOOKMARK,
        t: inItalian,
      }),
    ).toBe('S04E38')
  })
})

describe('describeBookmark', () => {
  it('spells the reader’s own bookmark', () => {
    expect(
      describeBookmark(en, 'mark', {
        bookmark: { mode: 'episode', episode: 650 },
        books: undefined,
      }),
    ).toBe('EP 650')
    expect(
      describeBookmark(en, 'mark', {
        bookmark: { mode: 'season', season: 2, episode: 3 },
        books: undefined,
      }),
    ).toBe('S02E03')
    expect(
      describeBookmark(en, 'mark', {
        bookmark: { mode: 'chapter', chapter: 1044 },
        books: undefined,
      }),
    ).toBe('CH 1044')
    expect(
      describeBookmark(en, 'chart.hereSet', {
        bookmark: { mode: 'chapter', chapter: 1044 },
        books: undefined,
      }),
    ).toBe('You are here · chapter 1044')
  })
})

describe('the book form', () => {
  const books = [
    { number: 1, first: 1, last: 73 },
    { number: 2, first: 74, last: 143 },
  ]
  const withBooks: BookmarkSeries = { ...ONE_PIECE_BOOKMARK, books }
  const chapter103 = { mode: 'chapter', chapter: 103 } as const

  it('says a chapter threshold as a book and the chapter in it', () => {
    const threshold = (t: typeof en, revealedAtChapter: number): string =>
      describeThreshold({
        gated: { revealedAtEpisode: 1, revealedAtChapter },
        mode: 'chapter',
        sentence: 'veil.locked',
        series: withBooks,
        t,
      })

    expect(threshold(en, 103)).toBe('Under fog until book 2, chapter 30')
    expect(threshold(inItalian, 103)).toBe(
      'Nella nebbia fino al libro 2, capitolo 30',
    )
    // Past the last book, the plain chapter.
    expect(threshold(en, 200)).toBe('Under fog until chapter 200')
  })

  it('leaves episode and season readers alone', () => {
    expect(
      describeThreshold({
        gated: robin,
        mode: 'episode',
        sentence: 'veil.locked',
        series: withBooks,
        t: en,
      }),
    ).toBe('Under fog until episode 130')
  })

  it('says the reader’s own bookmark as a book', () => {
    expect(describeBookmark(en, 'mark', { bookmark: chapter103, books })).toBe(
      'B2 · CH 30',
    )
    expect(
      describeBookmark(inItalian, 'mark', { bookmark: chapter103, books }),
    ).toBe('L2 · CH 30')
    expect(bookmarkPoint(en, chapter103, books)).toBe('Book 2, chapter 30')
    expect(bookmarkPoint(en, chapter103, undefined)).toBe('Chapter 103')
  })
})
