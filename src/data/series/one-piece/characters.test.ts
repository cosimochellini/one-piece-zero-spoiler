import { describe, expect, it } from 'vitest'

import type { Timeline } from '~/data/types'

import {
  characters,
  dossierOf,
  FEATURED_CHARACTER_IDS,
  featuredCharacters,
  getCharacter,
} from './characters'

/**
 * One Piece's own rules about its characters: its featured list, its
 * bounties and chronicles. The rules every
 * series' characters follow (dossiers, statuses, chronicles, shelves) are
 * in `~/data/archive.test.ts`.
 */

/** Every bounty timeline, named by the character it came from. */
const BOUNTY_TIMELINES: { label: string; timeline: Timeline<number> }[] =
  characters.flatMap((character) => {
    const timeline = dossierOf(character)?.bounty

    return timeline === undefined ?
        []
      : { label: `${character.id}.bounty`, timeline }
  })

describe('the featured list', () => {
  it('lists exactly thirty-six distinct characters that all exist', () => {
    const distinct = new Set(FEATURED_CHARACTER_IDS)

    expect(FEATURED_CHARACTER_IDS).toHaveLength(36)
    expect(distinct.size).toBe(36)

    for (const id of FEATURED_CHARACTER_IDS) {
      expect(getCharacter(id)?.kind, id).toBe('character')
    }

    expect(featuredCharacters).toHaveLength(36)
  })
})

describe('the dossiers', () => {
  it('says what became of every featured character', () => {
    for (const character of featuredCharacters) {
      expect(
        dossierOf(character)?.status?.length,
        character.id,
      ).toBeGreaterThan(0)
    }
  })

  it('files every bounty as a whole number of Berry above zero', () => {
    for (const { label, timeline } of BOUNTY_TIMELINES) {
      for (const entry of timeline) {
        expect(Number.isSafeInteger(entry.value), label).toBe(true)
        expect(entry.value, label).toBeGreaterThan(0)
      }
    }
  })
})

describe('the chronicles', () => {
  it('tells the story of every featured character, in several stories', () => {
    // A character the chart puts in evidence has a chronicle, and one of
    // more than a story or two; a featured character with none is a test
    // failure, so a chronicle cannot be dropped by accident.
    for (const character of featuredCharacters) {
      const chronicle = dossierOf(character)?.chronicle

      expect(chronicle?.length, character.id).toBeGreaterThanOrEqual(4)
    }
  })
})

describe('getCharacter', () => {
  it('finds a character and refuses an arc', () => {
    expect(getCharacter('nami')?.name.en).toBe('Nami')
    // Exists in the archive, but `/characters/alabasta` is not a page.
    expect(getCharacter('alabasta')).toBeUndefined()
    expect(getCharacter('nobody')).toBeUndefined()
  })
})
