import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_ARCHIVE as archive } from '~/data/series/hunter-x-hunter/archive'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES } from '~/test/series'

import {
  characterPage,
  charactersPage,
  drawingsFor,
  shelvesPage,
} from './pages.server'
import { placePage } from './placePage.server'
import { placesPage } from './places.server'
import { factsOf } from './project.server'
import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Hunter x Hunter is not filed')
}
const scan = leaksOf(series)

const NAMED = [
  { id: 'trick-tower', episode: 8, chapter: 14, kind: 'place' },
  { id: 'lippo', episode: 8, chapter: 17, kind: 'character' },
  { id: 'bendot', episode: 8, chapter: 17, kind: 'character' },
  { id: 'sedokan', episode: 8, chapter: 17, kind: 'character' },
  { id: 'majtani', episode: 9, chapter: 18, kind: 'character' },
  { id: 'leroute', episode: 10, chapter: 20, kind: 'character' },
  { id: 'johness', episode: 11, chapter: 21, kind: 'character' },
] as const

const CASES = NAMED.flatMap((entry) =>
  (['en', 'it'] as const).flatMap((locale) =>
    (['episode', 'chapter'] as const).map((mode) => ({
      ...entry,
      locale,
      mode,
    })),
  ),
)

function at(mode: 'chapter' | 'episode', count: number): Bookmark {
  return mode === 'episode' ?
      { mode, episode: count }
    : { mode, chapter: count }
}

function characterOf(id: string): Entity {
  const character = archive.getCharacter(id)
  if (character === undefined) {
    throw new Error(`${id} is not filed`)
  }
  return character
}

describe('the named characters and place of Trick Tower', () => {
  it.each(CASES)('opens $id at its named $mode scene ($locale)', (entry) => {
    const threshold = entry[entry.mode]
    const before = at(entry.mode, threshold - 1)
    const hidden = readerFor(archive, before, entry.locale)
    const reached = readerFor(archive, at(entry.mode, threshold), entry.locale)
    const page = entry.kind === 'place' ? placePage : characterPage

    expect(page(entry.id, hidden)).toMatchObject({
      detail: { slot: { open: false } },
    })
    expect(page(entry.id, reached)).toMatchObject({
      detail: { slot: { open: true, record: { id: entry.id } } },
    })
    expect(drawingsFor([entry.id], hidden)).toStrictEqual({})
    expect(drawingsFor([entry.id], reached)[entry.id]?.length).toBeGreaterThan(
      3,
    )

    const payloads = [
      page(entry.id, hidden),
      charactersPage(hidden),
      shelvesPage(hidden),
      placesPage(hidden),
    ]

    expect(scan(payloads, before)).toStrictEqual([])
    expect(JSON.stringify(payloads)).not.toContain(`"${entry.id}"`)
  })

  it.each(['en', 'it'] as const)(
    'keeps the anime-only name Togari out of manga payloads (%s)',
    (locale) => {
      const manga = readerFor(archive, at('chapter', 43), locale)

      expect(characterPage('togari', manga)).toBeUndefined()
      expect(drawingsFor(['togari'], manga)).toStrictEqual({})
      expect(
        JSON.stringify([
          charactersPage(manga),
          shelvesPage(manga),
          placePage('trick-tower', manga),
        ]),
      ).not.toContain('togari')

      const before = readerFor(archive, at('episode', 9), locale)
      const reached = readerFor(archive, at('episode', 10), locale)

      expect(characterPage('togari', before)).toMatchObject({
        detail: { slot: { open: false } },
      })
      expect(characterPage('togari', reached)).toMatchObject({
        detail: { slot: { open: true, record: { id: 'togari' } } },
      })
      expect(
        drawingsFor(['togari'], reached)['togari']?.length,
      ).toBeGreaterThan(3)
    },
  )

  it.each(['en', 'it'] as const)(
    'opens the prison form label with the tower (%s)',
    (locale) => {
      for (const mode of ['episode', 'chapter'] as const) {
        const threshold = mode === 'episode' ? 8 : 14

        const before = readerFor(archive, at(mode, threshold - 1), locale)
        const reached = readerFor(archive, at(mode, threshold), locale)

        expect(placesPage(before).words?.forms).not.toHaveProperty('prison')
        expect(placesPage(reached).words?.forms).toHaveProperty(
          'prison',
          locale === 'en' ? 'Prison' : 'Prigione',
        )
      }
    },
  )

  it.each(['episode', 'chapter'] as const)(
    'dates Killua’s family disclosure in %s',
    (mode) => {
      const character = characterOf('killua')
      const threshold = mode === 'episode' ? 7 : 13
      const before = factsOf(
        character,
        readerFor(archive, at(mode, threshold - 1), 'en'),
      )
      const reached = factsOf(
        character,
        readerFor(archive, at(mode, threshold), 'en'),
      )

      expect(before).toHaveProperty('affiliation', 'Hunter Exam, applicant')
      expect(reached).toHaveProperty('affiliation', 'His family of assassins')
    },
  )

  it('files the deaths at the records’ own opening scenes', () => {
    for (const id of ['johness', 'togari']) {
      const character = characterOf(id)
      const atOpening = readerFor(
        archive,
        at('episode', character.revealedAtEpisode),
        'en',
      )

      expect(factsOf(character, atOpening)).toHaveProperty('status', 'deceased')
      expect(archive.redrawn(character)).toStrictEqual([])
    }
  })
})
