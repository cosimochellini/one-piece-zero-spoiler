import { describe, expect, it } from 'vitest'

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
