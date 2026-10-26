import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import { LOADED_SERIES } from '~/test/series'

import { characterPage, drawingsFor, shelvesPage } from './pages.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Chapter-one tests require Hunter x Hunter')
}
const { archive } = series
const IDS = ['kite', 'kon']
const CASES = LOCALES.flatMap((locale) => IDS.map((id) => ({ id, locale })))

function shelfContaining(id: string, reader: Reader): unknown {
  return shelvesPage(reader).find((candidate) =>
    candidate.open.some((character) => character.id === id),
  )?.arc
}

describe.each(CASES)('$id in $locale', ({ id, locale }) => {
  it('uses the reader’s source to choose the heading and opens its pinned facts', () => {
    const manga = readerFor(archive, { mode: 'chapter', chapter: 1 }, locale)
    const anime = readerFor(archive, { mode: 'episode', episode: 76 }, locale)
    for (const [reader, arc] of [
      [manga, 'hunter-exam-arc'],
      [anime, 'chimera-ant-arc'],
    ] as const) {
      expect(shelfContaining(id, reader)).toMatchObject({
        open: true,
        record: { id: arc },
      })

      const page = characterPage(id, reader)

      expect(page?.detail.slot.open).toBe(true)
      expect(page?.detail.log).not.toBeNull()
      expect(drawingsFor([id], reader)[id]?.length).toBeGreaterThan(3)
    }
  })

  it('keeps the record and its drawing covered at episode 75 and without progress', () => {
    for (const bookmark of [null, { mode: 'episode', episode: 75 }] as const) {
      const reader = readerFor(archive, bookmark, locale)

      expect(characterPage(id, reader)?.detail.slot.open).toBe(false)
      expect(characterPage(id, reader)?.detail.log).toBeNull()
      expect(drawingsFor([id], reader)).toStrictEqual({})
    }
  })
})

describe('chapter-one pins', () => {
  it.each(IDS)(
    'pins every %s fact and excludes the reordered conversion anchor',
    (id) => {
      const record = archive.getCharacter(id)
      const timelines = archive.timelines.filter(
        (timeline) => timeline.owner.id === id,
      )

      expect(record?.unanchored).toBe(true)
      expect(record?.revealedAtChapter).toBe(1)
      expect(record?.revealedAtEpisode).toBe(76)
      expect(timelines.length).toBeGreaterThan(0)

      for (const { timeline } of timelines) {
        for (const entry of timeline) {
          expect(entry.chapter).toBe(1)
        }
      }
    },
  )

  it('does not advance chapter one into the later anime', () => {
    expect(archive.chapterAtEpisode(76)).toBeGreaterThan(43)
  })
})

describe('a reordered character beside a source-only arc', () => {
  const first = archive.arcs.find(({ id }) => id === 'hunter-exam-arc')
  const character = archive.getCharacter('kite')
  if (first === undefined || character === undefined) {
    throw new Error('Missing chapter-one shelf fixture')
  }

  it('chooses an earlier heading the manga actually tells', () => {
    const unavailable = {
      ...first,
      id: 'anime-only-bridge',
      source: 'episode' as const,
    }
    const future = { ...first, id: 'future-heading', revealedAtChapter: 50 }
    const fixture = {
      ...archive,
      arcs: [first, unavailable, future],
      characters: [character],
      bookSections: [{ arc: future, characters: [character] }],
    }
    const reader = readerFor(fixture, { mode: 'chapter', chapter: 1 }, 'en')

    expect(reader.archive.bookSections).toStrictEqual([
      { arc: first, characters: [character] },
    ])
  })
})
