import { describe, expect, it } from 'vitest'

import { enDictionary } from './dictionaries/en'
import { itDictionary } from './dictionaries/it'
import { LOCALES } from './locales'
import { getDictionary, translate } from './translate'

type DictionaryKey = keyof typeof enDictionary

/**
 * `Object.keys` widens to `string[]`, which loses the only thing that makes
 * the loops below type-check against a dictionary. The guard narrows back
 * without an assertion.
 */
function dictionaryKeys(): DictionaryKey[] {
  return Object.keys(enDictionary).filter((key): key is DictionaryKey =>
    Object.hasOwn(enDictionary, key),
  )
}

describe('the dictionaries', () => {
  it('publishes one dictionary per locale', () => {
    for (const locale of LOCALES) {
      expect(Object.keys(getDictionary(locale)).length).toBeGreaterThan(0)
    }
  })

  it('translates every key in every locale', () => {
    // The TypeScript annotation on `it` already catches a missing key. This
    // catches the other half: a key that is present but left empty.
    for (const locale of LOCALES) {
      const dictionary = getDictionary(locale)

      for (const key of dictionaryKeys()) {
        expect(dictionary[key].trim()).not.toBe('')
      }
    }
  })

  it('carries the same placeholders in both languages', () => {
    // A translation that drops `{threshold}` silently renders a sentence with a
    // hole in it, and nothing else would notice.
    for (const key of dictionaryKeys()) {
      expect(placeholdersIn(itDictionary[key]), key).toStrictEqual(
        placeholdersIn(enDictionary[key]),
      )
    }
  })
})

describe('translate', () => {
  it('fills a placeholder from the params', () => {
    expect(
      translate(enDictionary, 'veil.locked.episode', { threshold: 1089 }),
    ).toBe('Under fog until episode 1089')
  })

  it('leaves an unfilled placeholder visible rather than blanking it', () => {
    expect(translate(enDictionary, 'veil.locked.episode')).toContain(
      '{threshold}',
    )
    expect(translate(enDictionary, 'veil.locked.episode', {})).toContain(
      '{threshold}',
    )
  })

  it('returns a string with no placeholders untouched', () => {
    expect(translate(enDictionary, 'veil.reveal', { unused: 'x' })).toBe(
      'Lift the fog anyway',
    )
  })
})

function placeholdersIn(value: string): string[] {
  return Array.from(
    value.matchAll(/\{(?<name>\w+)\}/gu),
    (match) => match.groups?.['name'] ?? '',
  ).toSorted((a, b) => a.localeCompare(b))
}
