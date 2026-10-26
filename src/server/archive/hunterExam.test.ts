import { describe, expect, it } from 'vitest'

import type { Entity, LocalizedText } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { foldName, matchFolded } from '~/lib/search/fold'
import type { RecordView, SearchableCharacter, Slot } from '~/lib/view/records'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES } from '~/test/series'

import { onboardingPage } from './onboarding.server'
import {
  characterPage,
  charactersPage,
  drawingsFor,
  shelvesPage,
} from './pages.server'
import { placePage } from './placePage.server'
import { placesPage } from './places.server'
import { factsOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error(
    'The Hunter Exam tests need the filed Hunter x Hunter archive',
  )
}
const { archive } = series
const leaksIn = leaksOf(series)

// The named scenes of episodes 3–6 / chapters 5–12, not the wiki debut floors.
const RECORDS = [
  { id: 'tonpa', episode: 3, chapter: 5, kind: 'character' },
  { id: 'hisoka', episode: 3, chapter: 5, kind: 'character' },
  { id: 'hanzo', episode: 3, chapter: 6, kind: 'character' },
  { id: 'nicholas', episode: 3, chapter: 6, kind: 'character' },
  { id: 'satotz', episode: 3, chapter: 6, kind: 'character' },
  { id: 'killua', episode: 4, chapter: 6, kind: 'character' },
  { id: 'menchi', episode: 6, chapter: 10, kind: 'character' },
  { id: 'buhara', episode: 6, chapter: 10, kind: 'character' },
  { id: 'netero', episode: 6, chapter: 12, kind: 'character' },
  { id: 'zaban-city', episode: 3, chapter: 5, kind: 'place' },
  { id: 'milsy-wetlands', episode: 4, chapter: 7, kind: 'place' },
  { id: 'visca-forest-preserve', episode: 6, chapter: 10, kind: 'place' },
  { id: 'split-mountain', episode: 6, chapter: 12, kind: 'place' },
] as const

const UNITS = ['episode', 'chapter'] as const
type Unit = (typeof UNITS)[number]

function bookmark(mode: Unit, count: number): Bookmark {
  return mode === 'episode' ?
      { mode, episode: count }
    : { mode, chapter: count }
}

function entityOf(id: string): Entity {
  const entity = archive.getEntity(id)
  if (entity === undefined) {
    throw new Error(`Missing Hunter Exam record: ${id}`)
  }
  return entity
}

function pageOf(entity: Entity, r: Reader): unknown {
  return entity.kind === 'character' ?
      characterPage(entity.id, r)
    : placePage(entity.id, r)
}

function searched(id: string, r: Reader): SearchableCharacter {
  const found = shelvesPage(r)
    .flatMap((shelf) => shelf.open)
    .find((record) => record.id === id)
  if (found === undefined) {
    throw new Error(`Missing searchable Hunter Exam character: ${id}`)
  }
  return found
}

function localized(value: LocalizedText | string, locale: Locale): string {
  return typeof value === 'string' ? value : value[locale]
}

const CASES = RECORDS.flatMap((record) =>
  UNITS.flatMap((mode) =>
    LOCALES.map((locale) => ({ ...record, mode, locale })),
  ),
)
const CHARACTERS = CASES.filter(({ kind }) => kind === 'character')
const FACTS = CHARACTERS.flatMap((row) =>
  (['affiliation', 'epithet', 'origin', 'status'] as const).flatMap((field) =>
    archive
      .datedOf(entityOf(row.id), field)
      .map((entry) => ({ ...row, field, entry })),
  ),
)
const FORMS = [
  {
    id: 'zaban-city',
    episode: 3,
    chapter: 5,
    form: 'city',
    en: 'City',
    it: 'Città',
  },
  {
    id: 'milsy-wetlands',
    episode: 4,
    chapter: 7,
    form: 'wetland',
    en: 'Wetlands',
    it: 'Palude',
  },
  {
    id: 'visca-forest-preserve',
    episode: 6,
    chapter: 10,
    form: 'forest',
    en: 'Forest preserve',
    it: 'Riserva forestale',
  },
  {
    id: 'split-mountain',
    episode: 6,
    chapter: 12,
    form: 'mountain',
    en: 'Mountain',
    it: 'Montagna',
  },
].flatMap((place) =>
  UNITS.flatMap((mode) =>
    LOCALES.map((locale) => ({ ...place, mode, locale })),
  ),
)

function featuredAt(mode: Unit, count: number, locale: Locale): string[] {
  const r = readerFor(archive, bookmark(mode, count), locale)
  return charactersPage(r).featuredOpen.map(({ id }) => id)
}

function filedAt(id: string, r: Reader): Slot<RecordView>[] | undefined {
  const page = placePage(id, r)
  if (page === undefined || !('detail' in page) || !page.detail.slot.open) {
    throw new Error(`Expected open place: ${id}`)
  }
  return page.detail.slot.record.dossier?.filedHere
}

describe('the Hunter Exam’s first two phases', () => {
  it('gives a new visitor the exam and its five leads without later records', () => {
    const demo = onboardingPage(null, readerFor(archive, null, 'en'))

    expect(demo.arcs.map(({ id }) => id)).toStrictEqual(['hunter-exam-arc'])
    expect(demo.cast.map(({ id }) => id)).toStrictEqual([
      'gon-freecss',
      'kurapika',
      'leorio-paradinight',
      'hisoka',
      'killua',
    ])
    expect(JSON.stringify(demo)).not.toContain('Ging Freecss')
  })

  it.each(CASES)(
    'opens $id only at its named scene in $mode ($locale)',
    ({ id, episode, chapter, kind, mode, locale }) => {
      const entity = entityOf(id)

      expect(entity).toMatchObject({
        kind,
        revealedAtEpisode: episode,
        revealedAtChapter: chapter,
      })

      const threshold = mode === 'episode' ? episode : chapter
      const before = bookmark(mode, threshold - 1)
      const at = bookmark(mode, threshold)
      const hidden = readerFor(archive, before, locale)
      const reached = readerFor(archive, at, locale)
      const covered = pageOf(entity, hidden)
      const opened = pageOf(entity, reached)

      expect(covered).toMatchObject({ detail: { slot: { open: false } } })
      expect(opened).toMatchObject({
        detail: {
          slot: { open: true, record: { id, name: entity.name[locale] } },
        },
      })
      expect(drawingsFor([id], hidden)).toStrictEqual({})
      expect(drawingsFor([id], reached)[id]?.length).toBeGreaterThan(3)

      const pages = [
        covered,
        charactersPage(hidden),
        shelvesPage(hidden),
        placesPage(hidden),
        drawingsFor([id], hidden),
      ]

      expect(leaksIn(pages, before)).toStrictEqual([])
      expect(JSON.stringify(pages)).not.toContain(`"${id}"`)
    },
  )

  it.each(CHARACTERS)(
    'makes $id searchable by either locale’s name in $mode ($locale)',
    ({ id, mode, episode, chapter, locale }) => {
      const entity = entityOf(id)
      const r = readerFor(
        archive,
        bookmark(mode, mode === 'episode' ? episode : chapter),
        locale,
      )
      const entry = searched(id, r)

      expect(matchFolded(entry, foldName(entity.name.it)).matches).toBe(true)
      expect(matchFolded(entry, foldName(entity.name.en)).matches).toBe(true)
    },
  )

  it.each(FACTS)(
    'gates $id’s $field in $mode ($locale)',
    ({ id, mode, locale, field, entry }) => {
      const entity = entityOf(id)
      const threshold =
        mode === 'episode' ?
          entry.gate.revealedAtEpisode
        : entry.gate.revealedAtChapter
      const before = readerFor(archive, bookmark(mode, threshold - 1), locale)
      const at = readerFor(archive, bookmark(mode, threshold), locale)

      expect(factsOf(entity, before)).not.toHaveProperty(field)
      expect(factsOf(entity, at)).toHaveProperty(
        field,
        localized(entry.value, locale),
      )
    },
  )

  it.each(FORMS)('opens $form’s label with $id in $mode ($locale)', (row) => {
    const threshold = row.mode === 'episode' ? row.episode : row.chapter
    const before = readerFor(
      archive,
      bookmark(row.mode, threshold - 1),
      row.locale,
    )
    const at = readerFor(archive, bookmark(row.mode, threshold), row.locale)

    expect(placesPage(before).words?.forms ?? {}).not.toHaveProperty(row.form)
    expect(placesPage(at).words?.forms).toHaveProperty(
      row.form,
      row[row.locale],
    )
    expect(placePage(row.id, before)).toMatchObject({
      detail: { slot: { open: false } },
    })
    expect(placePage(row.id, at)).toMatchObject({
      detail: {
        slot: {
          record: {
            dossier: { words: { forms: { [row.form]: row[row.locale] } } },
          },
        },
      },
    })
  })

  it.each(
    [
      {
        place: 'zaban-city',
        character: 'killua',
        mode: 'episode' as const,
        before: 3,
        at: 4,
      },
      {
        place: 'zaban-city',
        character: 'killua',
        mode: 'chapter' as const,
        before: 5,
        at: 6,
      },
      {
        place: 'visca-forest-preserve',
        character: 'netero',
        mode: 'chapter' as const,
        before: 10,
        at: 12,
      },
    ].flatMap((row) => LOCALES.map((locale) => ({ ...row, locale }))),
  )('gates $character on $place’s dossier in $mode ($locale)', (row) => {
    const before = readerFor(
      archive,
      bookmark(row.mode, row.before),
      row.locale,
    )
    const at = readerFor(archive, bookmark(row.mode, row.at), row.locale)

    expect(JSON.stringify(placePage(row.place, before))).not.toContain(
      `"${row.character}"`,
    )

    const character = filedAt(row.place, at)?.find(
      (slot) => slot.open && slot.record.id === row.character,
    )

    expect(character).toMatchObject({
      open: true,
      record: { id: row.character },
    })
  })

  it.each(UNITS.flatMap((mode) => LOCALES.map((locale) => ({ mode, locale }))))(
    'gates the two new featured characters in $mode ($locale)',
    ({ mode, locale }) => {
      const hisoka = mode === 'episode' ? 3 : 5
      const killua = mode === 'episode' ? 4 : 6

      expect(featuredAt(mode, hisoka - 1, locale)).not.toContain('hisoka')
      expect(featuredAt(mode, hisoka, locale)).toContain('hisoka')
      expect(featuredAt(mode, killua - 1, locale)).not.toContain('killua')
      expect(featuredAt(mode, killua, locale)).toContain('killua')
    },
  )

  it.each(LOCALES)(
    'keeps deferred names and identities absent (%s)',
    (locale) => {
      const r = readerFor(archive, bookmark('episode', 6), locale)
      const sent = JSON.stringify([
        shelvesPage(r),
        charactersPage(r),
        placesPage(r),
        ...archive.characters.map(({ id }) => characterPage(id, r)),
      ])

      expect(sent).not.toMatch(/Gittarackur|Illumi|Mamen|Beans|Zoldyck|Morow/iu)

      for (const id of [
        'gittarackur',
        'illumi-zoldyck',
        'beans',
        'mamen-beans',
      ]) {
        expect(archive.getEntity(id)).toBeUndefined()
      }
    },
  )
})
