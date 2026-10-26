import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { drawingsFor, shelvesPage } from './pages.server'
import { placePage } from './placePage.server'
import { readerFor } from './reader.server'

const loaded = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (loaded === undefined) {
  throw new Error('Zevil requires the Hunter x Hunter archive')
}
const { archive } = loaded
const RECORDS = [
  { id: 'khara', episode: 14, chapter: 23 },
  { id: 'gittarackur', episode: 19, chapter: 33 },
  { id: 'amori', episode: 17, chapter: 29 },
  { id: 'umori', episode: 17, chapter: 29 },
  { id: 'imori', episode: 17, chapter: 29 },
  { id: 'ponzu', episode: 17, chapter: 30 },
  { id: 'bourbon', episode: 17, chapter: 30 },
  { id: 'pokkle', episode: 19, chapter: 33 },
  { id: 'bodoro', episode: 19, chapter: 33 },
] as const
const CASES = RECORDS.flatMap((row) =>
  LOCALES.flatMap((locale) =>
    (['episode', 'chapter'] as const).map((mode) => ({ ...row, locale, mode })),
  ),
)

function characterOf(id: string): Entity {
  const entity = archive.getCharacter(id)
  if (entity === undefined) {
    throw new Error(`Missing character ${id}`)
  }
  return entity
}

function at(mode: 'chapter' | 'episode', count: number): Bookmark {
  return mode === 'episode' ?
      { mode, episode: count }
    : { mode, chapter: count }
}

describe('the Fourth Phase and its final bracket', () => {
  it.each(CASES)('gates $id in $mode ($locale)', (row) => {
    const entity = archive.getCharacter(row.id)

    expect(entity?.revealedAtEpisode).toBe(row.episode)
    expect(entity?.revealedAtChapter).toBe(row.chapter)

    const before = readerFor(
      archive,
      at(row.mode, row[row.mode] - 1),
      row.locale,
    )
    const reached = readerFor(archive, at(row.mode, row[row.mode]), row.locale)
    const listedBefore = shelvesPage(before).flatMap((shelf) => shelf.open)
    const listedAt = shelvesPage(reached).flatMap((shelf) => shelf.open)

    expect(listedBefore.some(({ id }) => id === row.id)).toBe(false)
    expect(listedAt.some(({ id }) => id === row.id)).toBe(true)
    expect(drawingsFor([row.id], before)).not.toHaveProperty(row.id)
    expect(drawingsFor([row.id], reached)).toHaveProperty(row.id)
  })

  it.each(LOCALES)(
    'opens Zevil on arrival, with a safe dossier (%s)',
    (locale) => {
      for (const mode of ['episode', 'chapter'] as const) {
        const threshold = mode === 'episode' ? 14 : 23
        const before = placePage(
          'zevil-island',
          readerFor(archive, at(mode, threshold - 1), locale),
        )
        const reached = placePage(
          'zevil-island',
          readerFor(archive, at(mode, threshold), locale),
        )

        expect(
          before !== undefined && 'detail' in before && before.detail.slot.open,
        ).toBe(false)
        expect(
          reached !== undefined
            && 'detail' in reached
            && reached.detail.slot.open,
        ).toBe(true)
      }
    },
  )

  it('keeps the disguise free of the true identity before its revelation', () => {
    const r = readerFor(archive, { mode: 'episode', episode: 19 }, 'en')
    const record = shelvesPage(r)
      .flatMap((shelf) => shelf.open)
      .find(({ id }) => id === 'gittarackur')

    expect(JSON.stringify(record)).not.toMatch(/illumi|zoldyck/iu)
  })

  it.each(LOCALES)(
    'gates Bodoro’s death and drawing together (%s)',
    (locale) => {
      const entity = characterOf('bodoro')

      expect(entity).toBeDefined()

      for (const mode of ['episode', 'chapter'] as const) {
        const threshold = mode === 'episode' ? 20 : 36
        const before = readerFor(archive, at(mode, threshold - 1), locale)
        const reached = readerFor(archive, at(mode, threshold), locale)

        expect(archive.latestOf(before, entity, 'status')).toBe('alive')
        expect(archive.latestOf(reached, entity, 'status')).toBe('deceased')
        expect(drawingsFor(['bodoro'], reached)).not.toStrictEqual(
          drawingsFor(['bodoro'], before),
        )
      }
    },
  )
})
