import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { demoDrawingsFor, onboardingPage } from './onboarding.server'
import { readerFor } from './reader.server'

const BOOKMARKS: Bookmark[] = [
  null,
  { mode: 'episode', episode: 1 },
  { mode: 'chapter', chapter: 1 },
]

describe.each(LOADED_SERIES)(
  '$slug deferred onboarding drawings',
  ({ archive }) => {
    const reader = readerFor(archive, null, 'en')
    const page = onboardingPage(null, reader)
    const entries = [...page.arcs, ...page.cast, ...page.places]

    it('leaves every below-fold demo drawing out of the page', () => {
      expect(page.arcs.length).toBeGreaterThan(0)

      for (const entry of entries) {
        for (const step of entry.drawings) {
          expect(step.value).toMatchObject({ strokes: [], deferred: true })
        }
      }
    })

    it.each(BOOKMARKS)(
      'serves the same bounded demo regardless of bookmark %j',
      (bookmark) => {
        const r = readerFor(archive, bookmark, 'it')
        const got = demoDrawingsFor(
          entries.map(({ id }) => id),
          r,
        )

        expect(Object.keys(got)).toStrictEqual(entries.map(({ id }) => id))

        for (const entry of entries) {
          const entity = archive.getEntity(entry.id)
          if (entity === undefined) {
            throw new Error(`Missing demo entity: ${entry.id}`)
          }
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
                  && gate.revealedAtChapter <= archive.series.demoLastChapter
                  && gate.revealedAtEpisode <= archive.series.demoLastEpisode,
              )
              .map(({ gate, value }) => ({
                revealedAtChapter: gate.revealedAtChapter,
                revealedAtEpisode: gate.revealedAtEpisode,
                value: { strokes: value, tint: entity.visual.tint },
              })),
          ]

          expect(got[entry.id]).toStrictEqual(expected)
          expect(
            got[entry.id]?.map(({ value, ...gate }) => ({
              ...gate,
              tint: value.tint,
            })),
          ).toStrictEqual(
            entry.drawings.map(({ value, ...gate }) => ({
              ...gate,
              tint: value.tint,
            })),
          )
        }
      },
    )

    it('rejects unknown, out-of-demo and source-exclusive records even at a late bookmark', () => {
      const ids = new Set(entries.map(({ id }) => id))
      const excluded = archive.entities.filter(({ id }) => !ids.has(id))
      const late = readerFor(
        archive,
        { mode: 'chapter', chapter: archive.series.demoLastChapter + 1 },
        'en',
      )

      expect(excluded.length).toBeGreaterThan(0)
      expect(
        demoDrawingsFor(
          ['not-a-record', '__proto__', ...excluded.map(({ id }) => id)],
          late,
        ),
      ).toStrictEqual({})
    })
  },
)

describe('demo drawing series isolation', () => {
  it('keeps requested identities inside the selected series', () => {
    for (const selected of LOADED_SERIES) {
      const other = LOADED_SERIES.filter(({ slug }) => slug !== selected.slug)
      const foreignIds = other
        .flatMap(({ archive }) => archive.entities)
        .map(({ id }) => id)
        .filter((id) => selected.archive.getEntity(id) === undefined)

      expect(foreignIds.length).toBeGreaterThan(0)
      expect(
        demoDrawingsFor(foreignIds, readerFor(selected.archive, null, 'en')),
      ).toStrictEqual({})
    }
  })
})
