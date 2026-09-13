import { LOCALES } from '~/i18n/locales'
import {
  CHAPTER_CEILING,
  EPISODE_CEILING,
  FIRST_CHAPTER,
  FIRST_EPISODE,
} from '~/lib/progress/episode'

import { entities, getEntity } from './entities'

describe('the seed archive', () => {
  it('gives every record a unique id', () => {
    const ids = entities.map((entity) => entity.id)

    expect(new Set(ids).size).toBe(ids.length)
  })

  it('files every record at an episode the dialog can actually reach', () => {
    // A record filed above the ceiling could never be revealed, and one filed
    // below the first episode would be revealed to a reader who has seen
    // nothing.
    for (const entity of entities) {
      expect(entity.revealedAtEpisode).toBeGreaterThanOrEqual(FIRST_EPISODE)
      expect(entity.revealedAtEpisode).toBeLessThanOrEqual(EPISODE_CEILING)
      expect(Number.isInteger(entity.revealedAtEpisode)).toBe(true)
    }
  })

  it('files every record at a chapter the dialog can actually reach', () => {
    for (const entity of entities) {
      expect(entity.revealedAtChapter).toBeGreaterThanOrEqual(FIRST_CHAPTER)
      expect(entity.revealedAtChapter).toBeLessThanOrEqual(CHAPTER_CEILING)
      expect(Number.isInteger(entity.revealedAtChapter)).toBe(true)
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
})

describe('the archive drawings', () => {
  it('gives every record the drawing made for it', () => {
    // The drawing ids are the record ids on purpose: a record pointing at
    // another record's drawing would put the wrong object beside a name.
    for (const entity of entities) {
      expect(entity.visual.art).toBe(entity.id)
    }
  })
})

describe('getEntity', () => {
  it('finds a record by id', () => {
    expect(getEntity('egghead')?.revealedAtEpisode).toBe(1089)
  })

  it('returns undefined for an id the archive does not hold', () => {
    expect(getEntity('not-a-record')).toBeUndefined()
  })
})
