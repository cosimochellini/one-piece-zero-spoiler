import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { factsOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Heavens Arena tests require Hunter x Hunter')
}
const { archive } = series
const RECORDS = [
  { id: 'heavens-arena', episode: 27, chapter: 44, place: true },
  { id: 'zushi', episode: 27, chapter: 45, place: false },
  { id: 'wing', episode: 27, chapter: 45, place: false },
  { id: 'gido', episode: 29, chapter: 49, place: false },
  { id: 'kastro', episode: 31, chapter: 52, place: false },
  { id: 'sadaso', episode: 33, chapter: 57, place: false },
  { id: 'riehlvelt', episode: 34, chapter: 59, place: false },
]
const CASES = RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    ['episode', 'chapter'].map((unit) => ({ ...record, locale, unit })),
  ),
)

function at(unit: string, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

function opened(id: string, place: boolean, reader: Reader): boolean {
  const page = place ? placePage(id, reader) : characterPage(id, reader)
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

function character(id: string): Entity {
  const record = archive.getCharacter(id)
  if (record === undefined) {
    throw new Error(`Missing ${id} fixture`)
  }
  return record
}

describe.each(CASES)('$id in $locale by $unit', (row) => {
  it('opens the record and drawing at its named scene, never before', () => {
    const threshold = row.unit === 'chapter' ? row.chapter : row.episode
    const before = readerFor(archive, at(row.unit, threshold - 1), row.locale)
    const reached = readerFor(archive, at(row.unit, threshold), row.locale)

    expect(opened(row.id, row.place, before)).toBe(false)
    expect(drawingsFor([row.id], before)).toStrictEqual({})

    expect(opened(row.id, row.place, reached)).toBe(true)
    expect(drawingsFor([row.id], reached)[row.id]?.length).toBeGreaterThan(3)
  })
})

describe('Kastro’s death', () => {
  const kastro = character('kastro')

  it.each([
    { unit: 'episode', death: 32 },
    { unit: 'chapter', death: 54 },
  ])('pins it in $unit units', ({ unit, death }) => {
    const before = readerFor(archive, at(unit, death - 1), 'en')
    const reached = readerFor(archive, at(unit, death), 'en')

    expect(archive.latestOf(before, kastro, 'status')).toBe('alive')
    expect(archive.latestOf(reached, kastro, 'status')).toBe('deceased')
  })
})

describe('the returning characters at Heavens Arena', () => {
  it.each([
    { unit: 'episode', pupils: 29, floor: 28, tattoo: 32 },
    { unit: 'chapter', pupils: 48, floor: 47, tattoo: 55 },
  ])(
    'pins each new affiliation in $unit units',
    ({ unit, pupils, floor, tattoo }) => {
      const read = (count: number): Reader =>
        readerFor(archive, at(unit, count), 'en')
      const gon = character('gon-freecss')
      const killua = character('killua')
      const hisoka = character('hisoka')

      expect(factsOf(gon, read(pupils - 1)).affiliation).toBe(
        'Hunter Association, Hunter',
      )
      expect(factsOf(gon, read(pupils)).affiliation).toMatch(/Wing’s pupil/u)
      expect(factsOf(killua, read(pupils - 1)).affiliation).toBe(
        'Travelling with Gon',
      )
      expect(factsOf(killua, read(pupils)).affiliation).toMatch(/Wing’s pupil/u)

      expect(factsOf(hisoka, read(floor - 1)).affiliation).toBe(
        'Hunter Association, Hunter',
      )
      expect(factsOf(hisoka, read(floor)).affiliation).toMatch(/200th-floor/u)
      expect(factsOf(hisoka, read(tattoo - 1)).affiliation).not.toMatch(
        /Phantom Troupe/u,
      )
      expect(factsOf(hisoka, read(tattoo)).affiliation).toMatch(
        /fake member of the Phantom Troupe/u,
      )
    },
  )
})

describe('the arc’s leads', () => {
  it('names the cast row of the Heavens Arena arc', () => {
    expect(archive.leads['heavens-arena-arc']).toStrictEqual([
      'gon-freecss',
      'killua',
      'wing',
      'zushi',
      'hisoka',
    ])
  })
})
