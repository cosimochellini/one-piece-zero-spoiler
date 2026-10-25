import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import type { Affiliation } from '~/data/types'
import { onePieceEn } from '~/i18n/dictionaries/one-piece/en'

import { eatersOf } from './dated'
import { fruits } from './fruits'
import { CHARACTER_DOSSIERS } from './sagas'

/**
 * The faction tags on the fruit eaters' affiliations (`Affiliation` in
 * `./types`). The type already holds every tag to the vocabulary; these hold
 * the rest: every eater's every entry is tagged, and the vocabulary is no
 * larger than the tags. Whether a label names a record too early is the leak
 * scan's (`~/data/leaks.test.ts`).
 */

const PREFIX = 'faction.'

/** Every id the dictionaries give a label, which is the vocabulary. */
const VOCABULARY = Object.keys(onePieceEn)
  .filter((key) => key.startsWith(PREFIX))
  .map((key) => key.slice(PREFIX.length))

/** Every eater's id, once, from every fruit's eaters. */
const EATERS = [
  ...new Set(
    fruits.flatMap((fruit) =>
      eatersOf(fruit.id).map(({ entity }) => entity.id),
    ),
  ),
]

/** Every affiliation entry of every eater, labelled for a failure message. */
const ENTRIES: { entry: Affiliation; label: string }[] = EATERS.flatMap((id) =>
  (CHARACTER_DOSSIERS[id]?.affiliation ?? []).map((entry) => ({
    entry,
    label: `${id} @${String(entry.episode)}`,
  })),
)

describe('the faction tags', () => {
  it('are on every affiliation entry of every fruit eater', () => {
    expect(EATERS.length).toBeGreaterThan(0)

    const untagged = ENTRIES.filter(
      ({ entry }) => (entry.factions?.length ?? 0) === 0,
    ).map(({ label }) => label)

    expect(untagged).toStrictEqual([])
  })

  it('name each group once, and independent only on its own', () => {
    const wrong = ENTRIES.filter(({ entry }) => {
      const factions = entry.factions ?? []
      const unique = new Set(factions)

      return (
        unique.size !== factions.length
        || (unique.has('independent') && factions.length > 1)
      )
    }).map(({ label }) => label)

    expect(wrong).toStrictEqual([])
  })

  it('use every id the vocabulary labels', () => {
    // A label nobody is tagged with is a group the archive does not need.
    const used = new Set(ENTRIES.flatMap(({ entry }) => entry.factions ?? []))

    expect(VOCABULARY.toSorted(byString())).toStrictEqual(
      [...used].toSorted(byString()),
    )
  })
})
