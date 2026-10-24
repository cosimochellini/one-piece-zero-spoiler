import { readdirSync } from 'node:fs'
import path from 'node:path'
import { byNumber, byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import { FIRST_CHAPTER, FIRST_EPISODE } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { SERIES } from '.'

/** The folders under `src/data/series/`, one per series. */
const FOLDERS = readdirSync(import.meta.dirname, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)

/** Every file under `src/data/series/`, as a path from there. */
const FILES = new Set(
  readdirSync(import.meta.dirname, { encoding: 'utf8', recursive: true }).map(
    (file) => file.split(path.sep).join('/'),
  ),
)

describe('the series list', () => {
  it('lists every series folder once, and nothing else', () => {
    // A folder left off the list would be swept by nothing below, nor by
    // the payload sweep, the archive gate or the counts.
    const slugs = new Set(SERIES.map(({ slug }) => slug))

    expect(
      SERIES.map(({ folder }) => folder).toSorted(byString()),
    ).toStrictEqual(FOLDERS.toSorted(byString()))
    expect(slugs.size).toBe(SERIES.length)
  })

  it('gives every series a leak scan of its own', () => {
    // The texts a series prints have its own shapes, so its scan lives in
    // its folder; a series without one would print names unchecked.
    for (const { folder } of SERIES) {
      expect(FILES.has(`${folder}/leaks.test.ts`), folder).toBe(true)
    }
  })
})

describe.each(LOADED_SERIES)(
  'the archive of $slug',
  ({ archive, description }) => {
    it('uses the same public description as its registry entry', () => {
      expect(archive.series).toBe(description)
    })

    const { drawings, entities, timelines } = archive

    it('gives every record a unique id', () => {
      const ids = entities.map((entity) => entity.id)
      const unique = new Set(ids)

      expect(unique.size).toBe(ids.length)
    })

    it('files every record at an episode the dialog can actually reach', () => {
      // A record filed above the ceiling could never be revealed, and one filed
      // below the first episode would be revealed to a reader who has seen
      // nothing.
      for (const entity of entities) {
        expect(entity.revealedAtEpisode).toBeGreaterThanOrEqual(FIRST_EPISODE)
        expect(entity.revealedAtEpisode).toBeLessThanOrEqual(
          archive.series.episodeCeiling,
        )
        expect(Number.isSafeInteger(entity.revealedAtEpisode)).toBe(true)
      }
    })

    it('files every record at a chapter the dialog can actually reach', () => {
      for (const entity of entities) {
        expect(entity.revealedAtChapter).toBeGreaterThanOrEqual(FIRST_CHAPTER)
        expect(entity.revealedAtChapter).toBeLessThanOrEqual(
          archive.series.chapterCeiling,
        )
        expect(Number.isSafeInteger(entity.revealedAtChapter)).toBe(true)
      }
    })

    it('translates every record into every published locale', () => {
      for (const entity of entities) {
        for (const locale of LOCALES) {
          expect(entity.name[locale].length).toBeGreaterThan(0)
          expect(entity.summary[locale].length).toBeGreaterThan(0)
        }
      }
    })

    it('gives every record the drawing made for it', () => {
      // The drawing ids are the record ids on purpose: a record pointing at
      // another record's drawing would put the wrong object beside a name.
      for (const entity of entities) {
        expect(entity.visual.art).toBe(entity.id)
      }
    })

    it('has a drawing for every record, and none that no record uses', () => {
      const ids = new Set(entities.map((entity) => entity.id))
      const drawn = new Set(Object.keys(drawings))

      for (const id of ids) {
        expect(drawn.has(id), id).toBe(true)
      }
      for (const id of drawn) {
        expect(ids.has(id), id).toBe(true)
      }
    })

    it('files every timeline in order, from the threshold on, within the dial', () => {
      // What every timeline obeys, a character's, a ship's or a drawing's: at
      // least one entry, in strictly ascending episodes, none before the
      // record's own threshold and none past the dial.
      expect(timelines.length).toBeGreaterThan(0)

      for (const { label, owner, timeline } of timelines) {
        const episodes = timeline.map((entry) => entry.episode)
        const distinct = new Set(episodes)

        expect(episodes.length, label).toBeGreaterThan(0)
        // Sorted and all distinct is the same statement as strictly ascending,
        // without a look back at the previous entry inside the loop.
        expect(episodes, label).toStrictEqual(episodes.toSorted(byNumber()))
        expect(distinct.size, label).toBe(episodes.length)

        for (const episode of episodes) {
          expect(Number.isSafeInteger(episode), label).toBe(true)
          expect(episode, label).toBeGreaterThanOrEqual(owner.revealedAtEpisode)
          expect(episode, label).toBeLessThanOrEqual(
            archive.series.episodeCeiling,
          )
        }
      }
    })
  },
)
