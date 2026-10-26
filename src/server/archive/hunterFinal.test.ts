import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_ARCHIVE as archive } from '~/data/series/hunter-x-hunter/archive'
import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'

import { characterPage, drawingsFor, shelvesPage } from './pages.server'
import { readerFor } from './reader.server'

const CASES = [
  { id: 'masta', episode: 19, chapter: 33 },
  { id: 'illumi', episode: 20, chapter: 35 },
] as const

function mark(mode: 'chapter' | 'episode', count: number): Bookmark {
  return mode === 'chapter' ?
      { mode, chapter: count }
    : { mode, episode: count }
}

const NAMED = CASES.flatMap((row) =>
  (['episode', 'chapter'] as const).flatMap((mode) =>
    LOCALES.map((locale) => ({ ...row, mode, locale })),
  ),
)
const WINNERS = [
  'gon-freecss',
  'kurapika',
  'leorio-paradinight',
  'hanzo',
  'hisoka',
  'pokkle',
  'illumi',
].flatMap((id) =>
  (['episode', 'chapter'] as const).map((mode) => ({ id, mode })),
)

function entityOf(id: string): Entity {
  const entity = archive.getEntity(id)
  if (entity === undefined) {
    throw new Error(`Missing ${id}`)
  }
  return entity
}

describe('the Hunter Exam Final Phase', () => {
  it.each(['episode', 'chapter'] as const)(
    'withholds the disguise connection before its %s reveal',
    (mode) => {
      const entity = entityOf('gittarackur')
      const count = mode === 'chapter' ? 35 : 20
      const before = readerFor(archive, mark(mode, count - 1), 'en')
      const at = readerFor(archive, mark(mode, count), 'en')

      expect(archive.latestOf(before, entity, 'affiliation')?.en).not.toContain(
        'Illumi',
      )
      expect(archive.latestOf(at, entity, 'affiliation')?.en).toContain(
        'Illumi',
      )
    },
  )

  it.each(NAMED)('$id opens at its named $mode in $locale', (row) => {
    const { id, mode, locale } = row
    const before = readerFor(archive, mark(mode, row[mode] - 1), locale)
    const at = readerFor(archive, mark(mode, row[mode]), locale)
    const hidden = JSON.stringify(characterPage(id, before))

    expect(hidden).not.toContain(id)
    expect(drawingsFor([id], before)).toStrictEqual({})
    expect(drawingsFor([id], at)[id]).toBeDefined()
    expect(
      shelvesPage(before)
        .flatMap((s) => s.open)
        .map((r) => r.id),
    ).not.toContain(id)
    expect(
      shelvesPage(at)
        .flatMap((s) => s.open)
        .map((r) => r.id),
    ).toContain(id)
    expect(JSON.stringify(characterPage(id, at))).toContain(
      archive.getEntity(id)?.name[locale],
    )
  })

  it.each(WINNERS)(
    '$id receives the licensed affiliation at the $mode briefing',
    ({ id, mode }) => {
      const entity = entityOf(id)
      const count = mode === 'chapter' ? 37 : 21
      const before = readerFor(archive, mark(mode, count - 1), 'en')
      const at = readerFor(archive, mark(mode, count), 'en')

      expect(archive.latestOf(before, entity, 'affiliation')?.en).not.toContain(
        'Hunter Association',
      )
      expect(archive.latestOf(at, entity, 'affiliation')?.en).toBe(
        'Hunter Association, Hunter',
      )
    },
  )
})
