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
  throw new Error('Yorknew City tests require Hunter x Hunter')
}
const { archive } = series
const RECORDS = [
  { id: 'melody', episode: 40, chapter: 68, place: false },
  { id: 'basho', episode: 40, chapter: 68, place: false },
  { id: 'baise', episode: 40, chapter: 68, place: false },
  { id: 'squala', episode: 40, chapter: 68, place: false },
  { id: 'shachmono-tocino', episode: 40, chapter: 68, place: false },
  { id: 'dalzollene', episode: 41, chapter: 70, place: false },
  { id: 'neon-nostrade', episode: 41, chapter: 71, place: false },
  { id: 'machi', episode: 41, chapter: 71, place: false },
  { id: 'ivlenkov', episode: 42, chapter: 72, place: false },
  { id: 'linssen', episode: 42, chapter: 72, place: false },
  { id: 'shizuku', episode: 42, chapter: 72, place: false },
  { id: 'yorknew-city', episode: 41, chapter: 70, place: true },
  { id: 'lingon-airport', episode: 41, chapter: 71, place: true },
  { id: 'cemetery-building', episode: 42, chapter: 72, place: true },
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

const NEON_GUARD = 'Nostrade family, Neon’s bodyguard'

describe('the bodyguards’ dated steps', () => {
  it.each([
    { unit: 'episode', hired: 41, named: 41 },
    { unit: 'chapter', hired: 70, named: 71 },
  ])('dates each step in $unit units', ({ unit, hired, named }) => {
    const read = (count: number): Reader =>
      readerFor(archive, at(unit, count), 'en')
    const role = (id: string, count: number): string | undefined =>
      archive.roleOf(read(count), character(id))?.en
    const affiliation = (id: string, count: number): string | undefined =>
      factsOf(character(id), read(count)).affiliation

    // The three applicants Dalzollene hires.
    for (const id of ['melody', 'basho', 'baise']) {
      expect(role(id, hired - 1), id).toBe('Bodyguard applicant')
      expect(role(id, hired), id).toBe('Bodyguard')
    }
    // The two plants among them, bodyguards once they ride with Neon.
    for (const id of ['squala', 'shachmono-tocino']) {
      expect(role(id, named - 1), id).toBe('Plant among the applicants')
      expect(role(id, named), id).toBe('Bodyguard')
    }

    expect(role('kurapika', hired - 1)).toBe('Hunter')
    expect(role('kurapika', hired)).toBe('Hunter, bodyguard')

    // The family is named with Neon, so every Nostrade affiliation waits.
    for (const id of [
      'melody',
      'basho',
      'baise',
      'squala',
      'shachmono-tocino',
    ]) {
      expect(affiliation(id, named - 1), id).toBeUndefined()
      expect(affiliation(id, named), id).toBe(NEON_GUARD)
    }

    expect(affiliation('dalzollene', named - 1)).toBeUndefined()
    expect(affiliation('dalzollene', named)).toBe(
      'Nostrade family, head of Neon’s bodyguards',
    )
    expect(affiliation('kurapika', named - 1)).toBe(
      'Hunter Association, Hunter',
    )
    expect(affiliation('kurapika', named)).toMatch(/Neon’s bodyguard/u)
  })
})

describe('the arc’s leads', () => {
  it('names the cast row of the Yorknew City arc', () => {
    expect(archive.leads['yorknew-city-arc']).toStrictEqual([
      'kurapika',
      'gon-freecss',
      'killua',
      'leorio-paradinight',
      'melody',
    ])
  })
})
