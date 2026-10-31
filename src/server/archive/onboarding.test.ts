import { describe, expect, it } from 'vitest'

import { sagaArchive } from '~/data/sagaArchive'
import { HUNTER_X_HUNTER_ARCHIVE } from '~/data/series/hunter-x-hunter/archive'
import { REDRAWINGS } from '~/data/series/hunter-x-hunter/art'
import { PLACE_DOSSIERS } from '~/data/series/hunter-x-hunter/places'
import { passedExam } from '~/data/series/hunter-x-hunter/records/saga'
import { sagas } from '~/data/series/hunter-x-hunter/sagas'
import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { demoDrawingsPage, onboardingPage } from './onboarding.server'
import { readerFor } from './reader.server'

describe('public demo drawings', () => {
  it('returns exactly each series’ demo drawings and bounded redrawings regardless of bookmark', () => {
    // A series with no record yet (Game of Thrones, #849) has no demo.
    const filing = LOADED_SERIES.filter(
      ({ archive }) => archive.entities.length > 0,
    )
    for (const { archive } of filing) {
      const { demoLastChapter, demoLastEpisode } = archive.series
      const bookmarks: Bookmark[] = [
        null,
        { mode: 'episode', episode: demoLastEpisode + 1 },
        { mode: 'chapter', chapter: demoLastChapter + 1 },
      ]
      const page = onboardingPage(null, readerFor(archive, null, 'en'))
      const entries = [page.arcs, page.cast, page.places].flat()
      const ids = new Set(entries.map(({ id }) => id))
      const entities = archive.entities.filter(({ id }) => ids.has(id))

      expect(entries.length).toBeGreaterThan(0)
      expect(JSON.stringify(page)).not.toContain('"strokes"')
      expect(JSON.stringify(page)).not.toContain('"drawings"')

      for (const bookmark of bookmarks) {
        const drawings = demoDrawingsPage(readerFor(archive, bookmark, 'it'))

        expect(Object.keys(drawings)).toStrictEqual(entries.map(({ id }) => id))

        for (const entity of entities) {
          const expected = [
            {
              revealedAtChapter: entity.revealedAtChapter,
              revealedAtEpisode: entity.revealedAtEpisode,
              value: {
                strokes: archive.drawings[entity.visual.art] ?? [],
                tint: entity.visual.tint,
              },
            },
            ...archive
              .datedOf(entity, 'redrawing')
              .filter(
                ({ gate }) =>
                  gate.source === undefined
                  && gate.revealedAtChapter <= demoLastChapter
                  && gate.revealedAtEpisode <= demoLastEpisode,
              )
              .map(({ gate, value }) => ({
                revealedAtChapter: gate.revealedAtChapter,
                revealedAtEpisode: gate.revealedAtEpisode,
                value: { strokes: value, tint: entity.visual.tint },
              })),
          ]

          expect(entity.source).toBeUndefined()
          expect(entity.revealedAtChapter).toBeLessThanOrEqual(demoLastChapter)
          expect(entity.revealedAtEpisode).toBeLessThanOrEqual(demoLastEpisode)
          expect(drawings[entity.id]).toStrictEqual(expected)
        }
      }
    }
  })
})

/**
 * Hunter x Hunter filed through the engine again, with Gon's dated role given
 * a third step inside the demo that the anime alone tells.
 */
function withAnimeOnlyRole(): SeriesArchive {
  const told = {
    episode: 23,
    source: 'episode' as const,
    value: { en: 'Anime-only role', it: 'Ruolo solo anime' },
  }
  const { core } = sagaArchive({
    featured: HUNTER_X_HUNTER_ARCHIVE.featuredCharacters.map(({ id }) => id),
    placeDossiers: PLACE_DOSSIERS,
    redrawings: REDRAWINGS,
    sagas: sagas.map((saga) => {
      const gon = saga.dossiers['gon-freecss']

      return gon === undefined ? saga : (
          {
            ...saga,
            dossiers: {
              ...saga.dossiers,
              'gon-freecss': { ...gon, role: [...passedExam(1, 1), told] },
            },
          }
        )
    }),
    series: HUNTER_X_HUNTER_ARCHIVE.series,
  })

  return { ...HUNTER_X_HUNTER_ARCHIVE, ...core }
}

describe('a dated role on the demo dial', () => {
  it('drops a step one source alone tells, and keeps the others', () => {
    const page = onboardingPage(
      null,
      readerFor(withAnimeOnlyRole(), null, 'en'),
    )
    const gon = page.cast.find(({ id }) => id === 'gon-freecss')

    expect(gon?.role).toStrictEqual([
      {
        revealedAtEpisode: 1,
        revealedAtChapter: 1,
        value: 'Hunter Exam applicant',
      },
      { revealedAtEpisode: 21, revealedAtChapter: 37, value: 'Hunter' },
    ])
  })
})
