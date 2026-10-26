import { describe, expect, it } from 'vitest'

import type { Relationship, SeriesArchive, Timeline } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { relationshipArchive } from '~/test/relationships'

import { readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

/** Fictional editorial choices keep the selection rules independent of canon. */
function relation(character: string, type = 'Ally'): Relationship {
  return {
    character,
    type: { en: type, it: `IT ${type}` },
    summary: { en: `${character} helps.`, it: `IT ${character} helps.` },
  }
}

const TARGET = relation('target')
const OTHER = relation('other')
const RETURNED = relation('target', 'Rival')
const SELECTIONS: Timeline<Relationship[]> = [
  { episode: 5, chapter: 7, value: [TARGET, OTHER] },
  { episode: 6, chapter: 8, value: [OTHER, TARGET] },
  { episode: 7, chapter: 9, value: [OTHER] },
  { episode: 8, chapter: 10, value: [RETURNED, OTHER] },
  { episode: 9, chapter: 11, value: [] },
]
const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

function selection(
  archive: SeriesArchive,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  const reader = readerFor(archive, bookmark, locale)
  const owner = reader.archive.getCharacter('owner')
  if (owner === undefined) {
    throw new Error('The fixture owner is absent')
  }
  return relationshipsOf(owner, reader)
}

function ids(
  archive: SeriesArchive,
  bookmark: Bookmark,
  locale: Locale,
): string[] {
  return selection(archive, bookmark, locale).map(({ person }) => person.id)
}

describe.each(LOCALES)('complete editorial selections in %s', (locale) => {
  const archive = relationshipArchive({ snapshots: SELECTIONS })

  it.each([
    [ep(4), ep(5), ep(6), ep(7), ep(8), ep(9)],
    [ch(6), ch(7), ch(8), ch(9), ch(10), ch(11)],
  ])('replaces the list at each reached threshold: %j', (...bookmarks) => {
    expect(
      bookmarks.map((bookmark) => ids(archive, bookmark, locale)),
    ).toStrictEqual([
      [],
      ['target', 'other'],
      ['other', 'target'],
      ['other'],
      ['target', 'other'],
      [],
    ])
    expect(ids(archive, null, locale)).toStrictEqual([])
  })

  it.each([ep(6), ch(8)])(
    'carries a selection forward and restores it backwards at %j',
    (bookmark) => {
      const earlier = selection(archive, bookmark, locale)

      expect(selection(archive, ep(20), locale)).toStrictEqual([])
      expect(selection(archive, ch(20), locale)).toStrictEqual([])
      expect(selection(archive, bookmark, locale)).toStrictEqual(earlier)
    },
  )

  it('retains the returned person’s previous history without a removal stage', () => {
    const returned = selection(archive, ep(8), locale)[0]

    expect(returned?.history.map(({ type }) => type)).toStrictEqual(
      locale === 'en' ? ['Ally', 'Rival'] : ['IT Ally', 'IT Rival'],
    )
    expect(
      returned?.history.map(({ revealedAtEpisode }) => revealedAtEpisode),
    ).toStrictEqual([5, 8])
    expect(selection(archive, ch(10), locale)).toStrictEqual(
      selection(archive, ep(8), locale),
    )
    expect(selection(archive, ep(8), locale)[1]?.history).toHaveLength(1)
  })

  it('cannot observe a future selection in its current payload shape or order', () => {
    const present = relationshipArchive({ snapshots: SELECTIONS.slice(0, 2) })
    for (const bookmark of [ep(6), ch(8)]) {
      const before = selection(present, bookmark, locale)

      expect(selection(archive, bookmark, locale)).toStrictEqual(before)
      expect(JSON.stringify(selection(archive, bookmark, locale))).toBe(
        JSON.stringify(before),
      )
      expect(selection(present, ep(20), locale)).toStrictEqual(before)
    }
  })

  it('keeps anime-only and manga-only replacement selections independent', () => {
    const sources = relationshipArchive({
      snapshots: [
        { episode: 5, chapter: 7, value: [TARGET, OTHER] },
        { episode: 6, chapter: 8, source: 'anime', value: [OTHER] },
        { episode: 7, chapter: 9, source: 'manga', value: [TARGET] },
      ],
    })

    expect(ids(sources, ep(5), locale)).toStrictEqual(['target', 'other'])
    expect(ids(sources, ep(6), locale)).toStrictEqual(['other'])
    expect(ids(sources, ep(20), locale)).toStrictEqual(['other'])
    expect(ids(sources, ch(8), locale)).toStrictEqual(['target', 'other'])
    expect(ids(sources, ch(9), locale)).toStrictEqual(['target'])
    expect(ids(sources, ch(20), locale)).toStrictEqual(['target'])
  })

  it('preserves all five authored slots without sorting them by appearance', () => {
    const people = ['fifth', 'other', 'third', 'target', 'fourth']
    const five = relationshipArchive({
      extraCharacters: ['third', 'fourth', 'fifth'],
      snapshots: [
        { episode: 5, chapter: 7, value: people.map((id) => relation(id)) },
      ],
    })

    expect(ids(five, ep(5), locale)).toStrictEqual(people)
    expect(ids(five, ch(7), locale)).toStrictEqual(people)
  })
})
