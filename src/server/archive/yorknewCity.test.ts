import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RecordView, Slot } from '~/lib/view/records'
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
  { id: 'uvogin', episode: 43, chapter: 74, place: false },
  { id: 'feitan', episode: 43, chapter: 74, place: false },
  { id: 'worm', episode: 43, chapter: 75, place: false },
  { id: 'rabid-dog', episode: 43, chapter: 75, place: false },
  { id: 'franklin', episode: 44, chapter: 76, place: false },
  { id: 'porcupine', episode: 44, chapter: 76, place: false },
  { id: 'leech', episode: 44, chapter: 76, place: false },
  { id: 'nobunaga', episode: 45, chapter: 77, place: false },
  { id: 'owl', episode: 45, chapter: 77, place: false },
  { id: 'phinks', episode: 45, chapter: 78, place: false },
  { id: 'shalnark', episode: 46, chapter: 79, place: false },
  { id: 'light-nostrade', episode: 46, chapter: 79, place: false },
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

function shelfOf(id: string, reader: Reader): Slot<RecordView>[] {
  const page = placePage(id, reader)
  if (page === undefined || !('detail' in page) || !page.detail.slot.open) {
    throw new Error(`Expected open place: ${id}`)
  }
  return page.detail.slot.record.dossier?.filedHere ?? []
}

describe('the shelves of the arc’s places', () => {
  const SHELVES = [
    {
      place: 'yorknew-city',
      ids: ['shizuku'],
      episodes: [41],
      chapters: [70, 71],
    },
    {
      place: 'lingon-airport',
      ids: ['ivlenkov', 'linssen'],
      episodes: [41],
      chapters: [71],
    },
  ]

  it.each(
    SHELVES.flatMap((shelf) =>
      LOCALES.flatMap((locale) => [
        {
          ...shelf,
          locale,
          unit: 'episode',
          covered: shelf.episodes,
          open: 42,
        },
        {
          ...shelf,
          locale,
          unit: 'chapter',
          covered: shelf.chapters,
          open: 72,
        },
      ]),
    ),
  )(
    'covers $place’s tiles until 42 / 72 by $unit ($locale)',
    ({ place, ids, locale, unit, covered, open }) => {
      for (const count of covered) {
        const shelf = shelfOf(
          place,
          readerFor(archive, at(unit, count), locale),
        )

        expect(shelf).toHaveLength(ids.length)

        // Exactly the handle, the kind and the thresholds: no name, no id.
        for (const slot of shelf) {
          const tile = slot.open ? undefined : slot.covered

          expect(tile?.handle).toBeTypeOf('string')
          expect({ ...tile, handle: 'opaque' }).toStrictEqual({
            handle: 'opaque',
            kind: 'character',
            revealedAtChapter: 72,
            revealedAtEpisode: 42,
          })
        }

        const text = JSON.stringify(shelf)

        for (const id of ids) {
          const record = character(id)

          expect(text).not.toContain(id)
          expect(text).not.toContain(record.name.en)
          expect(text).not.toContain(record.name.it)
        }
      }

      const reached = shelfOf(place, readerFor(archive, at(unit, open), locale))

      expect(
        reached.map((slot) => (slot.open ? slot.record.id : undefined)),
      ).toStrictEqual(ids)
    },
  )
})

/**
 * Every status step of the second phase, one row per unit: the status a
 * reader sees one before the step and at it. A row whose `before` is
 * `undefined` is the record's own gate. Episode 45 holds Nobunaga's trap
 * and release, and episode 47 Uvogin's second capture and his death, so
 * only a chapter reader stands between them.
 */
const STATUS_STEPS = [
  ...['baise', 'shachmono-tocino', 'ivlenkov'].flatMap((id) => [
    { id, unit: 'episode', count: 43, before: 'alive', after: 'deceased' },
    { id, unit: 'chapter', count: 73, before: 'alive', after: 'deceased' },
  ]),
  {
    id: 'dalzollene',
    unit: 'episode',
    count: 45,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'dalzollene',
    unit: 'chapter',
    count: 78,
    before: 'alive',
    after: 'deceased',
  },
  ...['worm', 'rabid-dog'].flatMap((id) => [
    { id, unit: 'episode', count: 44, before: 'alive', after: 'deceased' },
    { id, unit: 'chapter', count: 76, before: 'alive', after: 'deceased' },
  ]),
  ...['porcupine', 'leech'].flatMap((id) => [
    { id, unit: 'episode', count: 44, before: undefined, after: 'deceased' },
    { id, unit: 'chapter', count: 76, before: undefined, after: 'deceased' },
  ]),
  {
    id: 'uvogin',
    unit: 'episode',
    count: 44,
    before: 'alive',
    after: 'captured',
  },
  {
    id: 'uvogin',
    unit: 'chapter',
    count: 77,
    before: 'alive',
    after: 'captured',
  },
  {
    id: 'uvogin',
    unit: 'episode',
    count: 45,
    before: 'captured',
    after: 'alive',
  },
  {
    id: 'uvogin',
    unit: 'chapter',
    count: 78,
    before: 'captured',
    after: 'alive',
  },
  {
    id: 'uvogin',
    unit: 'episode',
    count: 47,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'uvogin',
    unit: 'chapter',
    count: 82,
    before: 'alive',
    after: 'captured',
  },
  {
    id: 'uvogin',
    unit: 'chapter',
    count: 84,
    before: 'captured',
    after: 'deceased',
  },
  {
    id: 'nobunaga',
    unit: 'episode',
    count: 45,
    before: undefined,
    after: 'alive',
  },
  {
    id: 'nobunaga',
    unit: 'chapter',
    count: 77,
    before: undefined,
    after: 'captured',
  },
  {
    id: 'nobunaga',
    unit: 'chapter',
    count: 78,
    before: 'captured',
    after: 'alive',
  },
  { id: 'owl', unit: 'episode', count: 47, before: 'alive', after: 'captured' },
  { id: 'owl', unit: 'chapter', count: 84, before: 'alive', after: 'captured' },
]

describe('the deaths and captures of the auction nights', () => {
  it.each(STATUS_STEPS)(
    'pins $id’s status at $unit $count',
    ({ id, unit, count, before, after }) => {
      const status = (n: number): string | undefined =>
        archive.latestOf(
          readerFor(archive, at(unit, n), 'en'),
          character(id),
          'status',
        )

      expect(status(count - 1)).toBe(before)
      expect(status(count)).toBe(after)
    },
  )
})

describe('Kurapika at the head of the bodyguards', () => {
  it.each([
    { unit: 'episode', count: 46 },
    { unit: 'chapter', count: 79 },
  ])('dates his role and affiliation in $unit units', ({ unit, count }) => {
    const read = (n: number): Reader => readerFor(archive, at(unit, n), 'en')
    const kurapika = character('kurapika')

    expect(archive.roleOf(read(count - 1), kurapika)?.en).toBe(
      'Hunter, bodyguard',
    )
    expect(archive.roleOf(read(count), kurapika)?.en).toBe(
      'Hunter, head of the bodyguards',
    )
    expect(factsOf(kurapika, read(count - 1)).affiliation).toMatch(
      /Nostrade family, Neon’s bodyguard/u,
    )
    expect(factsOf(kurapika, read(count)).affiliation).toMatch(
      /Nostrade family, head of Neon’s bodyguards/u,
    )
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
