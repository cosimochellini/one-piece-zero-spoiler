import { byNumber, byString, byValues } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import {
  CHAPTER_CEILING,
  EPISODE_CEILING,
  FIRST_CHAPTER,
  FIRST_EPISODE,
} from '~/lib/progress/episode'

import { DRAWINGS } from './art'
import { CHARACTER_DOSSIERS, dossierOf, getCharacter } from './characters'
import { entities } from './entities'
import { FRUIT_FORMS } from './fruit-forms'
import { eatersOf, fruitFormOf, fruits, fruitsOfForm, getFruit } from './fruits'
import { gateOf } from './reveal'
import type { Entity } from './types'

/**
 * The fruit layer's invariants.
 *
 * Two of them are the point of the whole layer. The first is that a fruit
 * opens no later than any dossier entry that names it, which is what lets a
 * character's page print its fruit as a link without checking anything: the
 * row is only built from an entry the reader has reached. The second is that
 * it opens no sooner either, in both units: a fruit page open before any
 * entry that names it would tell a reader what the story has not.
 */

/** One dossier entry that names a fruit: who, when, and which fruits. */
interface Mention {
  character: Entity
  episode: number
  fruitIds: string[]
  /** The chapter a reader reaches the entry at (`gateOf`). */
  opens: number
}

/** Every dossier entry that names a fruit, flattened out of the archive. */
function readMentions(): Mention[] {
  const found: Mention[] = []

  for (const [id, dossier] of Object.entries(CHARACTER_DOSSIERS)) {
    const character = getCharacter(id)
    const named = dossier.devilFruit
    if (character === undefined || named === undefined) {
      continue
    }

    for (const entry of named) {
      found.push({
        character,
        episode: entry.episode,
        fruitIds: entry.value,
        opens: gateOf(entry, character).revealedAtChapter,
      })
    }
  }

  return found
}

const MENTIONS = readMentions()

/**
 * Every mention of one fruit, in the order the archive files a fruit's
 * thresholds from: the earliest episode, then the earliest chapter among the
 * characters that name it there, then the id, so the rule is the same whatever
 * order the dossiers are read in.
 */
function mentionsOf(id: string): Mention[] {
  return MENTIONS.filter((mention) => mention.fruitIds.includes(id)).toSorted(
    byValues([
      [(mention) => mention.episode, byNumber()],
      [(mention) => mention.character.revealedAtChapter, byNumber()],
      [(mention) => mention.character.id, byString()],
    ]),
  )
}

/** The mention a fruit's thresholds are filed from, or a failure naming it. */
function firstMentionOf(id: string): Mention {
  const first = mentionsOf(id).at(0)
  if (first === undefined) {
    throw new Error(`No dossier names ${id}`)
  }

  return first
}

/**
 * Who the dossiers say ate one fruit, as `id@episode`, sorted. A character
 * who names the same fruit twice is one eater, at the earlier of the two.
 */
function writtenFor(id: string): string[] {
  const first = new Map<string, number>()

  for (const mention of mentionsOf(id)) {
    const seen = first.get(mention.character.id)

    if (seen === undefined || mention.episode < seen) {
      first.set(mention.character.id, mention.episode)
    }
  }

  return [...first]
    .map(([character, episode]) => `${character}@${String(episode)}`)
    .toSorted(byString())
}

/** A slug the archive gate's canary can see: hyphenated and long enough. */
const CANARY_SLUG = /^[a-z\d-]+$/u
const CANARY_LENGTH = 12

describe('the specimen sheet', () => {
  it('files a record for every fruit the table names, and no other', () => {
    const keyed = Object.keys(FRUIT_FORMS).toSorted(byString())
    const filed = fruits.map((fruit) => fruit.id).toSorted(byString())

    expect(filed).toStrictEqual(keyed)
    expect(fruits).toHaveLength(Object.keys(FRUIT_FORMS).length)
  })

  it('gives every fruit a hyphenated slug the gate can look for', () => {
    for (const fruit of fruits) {
      expect(fruit.id, fruit.id).toMatch(CANARY_SLUG)
      // Hyphenated, because the gate treats a bare word as a word.
      expect(fruit.id, fruit.id).toContain('-')
    }

    // The gate's slug canary ignores anything shorter, because a short slug
    // is a word and a gate that failed on a word is a gate nobody trusts.
    const seen = fruits.filter((fruit) => fruit.id.length >= CANARY_LENGTH)

    expect(seen.length).toBeGreaterThan(0)
  })

  it('translates and draws every fruit', () => {
    for (const fruit of fruits) {
      expect(fruit.kind, fruit.id).toBe('fruit')
      expect(fruit.visual.art, fruit.id).toBe(fruit.id)
      expect(DRAWINGS, fruit.id).toHaveProperty(fruit.id)

      for (const locale of LOCALES) {
        expect(fruit.name[locale].length, fruit.id).toBeGreaterThan(0)
        expect(fruit.summary[locale].length, fruit.id).toBeGreaterThan(0)
      }
    }
  })

  it('files every fruit where the dial can reach it', () => {
    for (const fruit of fruits) {
      expect(fruit.revealedAtEpisode, fruit.id).toBeGreaterThanOrEqual(
        FIRST_EPISODE,
      )
      expect(fruit.revealedAtEpisode, fruit.id).toBeLessThanOrEqual(
        EPISODE_CEILING,
      )
      expect(fruit.revealedAtChapter, fruit.id).toBeGreaterThanOrEqual(
        FIRST_CHAPTER,
      )
      expect(fruit.revealedAtChapter, fruit.id).toBeLessThanOrEqual(
        CHAPTER_CEILING,
      )
    }
  })

  it('gives every fruit exactly one kind, and partitions them by it', () => {
    const plates = [
      ...fruitsOfForm('paramecia'),
      ...fruitsOfForm('zoan'),
      ...fruitsOfForm('logia'),
    ]

    expect(plates.map((fruit) => fruit.id).toSorted(byString())).toStrictEqual(
      fruits.map((fruit) => fruit.id).toSorted(byString()),
    )

    for (const fruit of fruits) {
      expect(fruitFormOf(fruit), fruit.id).toBeDefined()
    }
  })
})

describe('the relation between a character and a fruit', () => {
  it('names a filed fruit in every dossier entry that names one', () => {
    for (const mention of MENTIONS) {
      expect(mention.fruitIds.length, mention.character.id).toBeGreaterThan(0)

      for (const id of mention.fruitIds) {
        expect(getFruit(id), `${mention.character.id} -> ${id}`).toBeDefined()
      }
    }
  })

  it('gives every fruit at least one eater', () => {
    // A fruit nobody ate has no threshold to be filed at: the dossiers are
    // the only source for one.
    for (const fruit of fruits) {
      expect(eatersOf(fruit.id).length, fruit.id).toBeGreaterThan(0)
    }
  })

  it('reads the eaters back out of the dossiers and nowhere else', () => {
    for (const fruit of fruits) {
      const read = eatersOf(fruit.id)
        .map((eater) => `${eater.entity.id}@${String(eater.named.episode)}`)
        .toSorted(byString())

      expect(read, fruit.id).toStrictEqual(writtenFor(fruit.id))
    }
  })

  it('opens a fruit no later than any entry that names it', () => {
    // This is what makes the devil fruit row on a character's page a link the
    // page can print without checking: the row is only ever built from an
    // entry the reader has reached, so the fruit behind it is open too.
    for (const mention of MENTIONS) {
      for (const id of mention.fruitIds) {
        const fruit = getFruit(id)

        expect(fruit?.revealedAtEpisode, id).toBeLessThanOrEqual(
          mention.episode,
        )
      }
    }
  })
})

describe('the fruit thresholds', () => {
  it('files every fruit at the episode its earliest dossier entry names it', () => {
    for (const fruit of fruits) {
      expect(fruit.revealedAtEpisode, fruit.id).toBe(
        firstMentionOf(fruit.id).episode,
      )
    }
  })

  it('files every fruit at the earliest chapter an entry naming it opens at', () => {
    // An entry with no chapter of its own opens at the first chapter that
    // reaches its episode, so a fruit named long after its eater's debut
    // waits for the chapter that names it, not the one that met the eater.
    for (const fruit of fruits) {
      const opens = mentionsOf(fruit.id).map((mention) => mention.opens)

      expect(fruit.revealedAtChapter, fruit.id).toBe(Math.min(...opens))
    }
  })
})

describe('getFruit', () => {
  it('finds a fruit and refuses a character', () => {
    expect(getFruit('gum-gum-fruit')?.name.en).toBe('Gum-Gum Fruit')
    expect(getFruit('monkey-d-luffy')).toBeUndefined()
    expect(getFruit('not-a-fruit')).toBeUndefined()
  })
})

describe('the archive after the fruits', () => {
  it('files no dossier for a fruit', () => {
    for (const fruit of fruits) {
      expect(dossierOf(fruit), fruit.id).toBeUndefined()
    }
  })

  it('counts the fruits among the records exactly once', () => {
    const filed = entities.filter((entity) => entity.kind === 'fruit')

    expect(filed).toHaveLength(fruits.length)
  })
})
