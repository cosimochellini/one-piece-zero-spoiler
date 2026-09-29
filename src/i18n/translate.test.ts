import { describe, expect, it } from 'vitest'

import { enDictionary } from './dictionaries/en'
import { itDictionary } from './dictionaries/it'
import { type Locale, LOCALES } from './locales'
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

/**
 * The phrases the `tone-of-voice` skill in `.claude/skills` rules out, per
 * locale. This list is the single source: the skill points here rather than
 * repeating it. Each pattern is tested against every value, ignoring case.
 */
const BANNED: Record<Locale, readonly RegExp[]> = {
  en: [
    /signal book/iu,
    /specimen sheet/iu,
    /ship['’]s log/iu,
    /ports? of call/iu,
    /sailing nearby/iu,
    /shelves/iu,
    /dossier/iu,
    /filed/iu,
    /lift the fog/iu,
    /discover|unlock|dive in/iu,
  ],
  it: [
    /libro dei segnali/iu,
    /foglio dei campioni/iu,
    /giornale di bordo/iu,
    /scaffal/iu,
    /dossier/iu,
    /archiviat/iu,
    /dirad/iu,
    /scopri|immergiti/iu,
    // Whole words only: `parco` and `Marco` are fine.
    /\barc(?:o|hi)\b/iu,
  ],
}

describe('the tone of voice', () => {
  // The en dash stays allowed: it is the right mark for a range such as
  // `{first}–{last}`.
  it('uses no em dash and no exclamation mark', () => {
    for (const locale of LOCALES) {
      const dictionary = getDictionary(locale)

      for (const key of dictionaryKeys()) {
        expect(dictionary[key], `${locale} ${key}`).not.toMatch(/[—!]/u)
      }
    }
  })

  it('uses none of the banned phrases', () => {
    for (const locale of LOCALES) {
      const dictionary = getDictionary(locale)
      const banned = BANNED[locale]

      for (const key of dictionaryKeys()) {
        for (const pattern of banned) {
          expect(dictionary[key], `${locale} ${key}`).not.toMatch(pattern)
        }
      }
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
      'Show anyway',
    )
  })
})

function placeholdersIn(value: string): string[] {
  return Array.from(
    value.matchAll(/\{(?<name>\w+)\}/gu),
    (match) => match.groups?.['name'] ?? '',
  ).toSorted((a, b) => a.localeCompare(b))
}
