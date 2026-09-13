import { enDictionary } from './dictionaries/en'
import { itDictionary } from './dictionaries/it'
import { LOCALES } from './locales'
import { getDictionary, translate } from './translate'

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

      for (const key of Object.keys(enDictionary)) {
        expect(dictionary[key as keyof typeof enDictionary].trim()).not.toBe('')
      }
    }
  })

  it('carries the same placeholders in both languages', () => {
    // A translation that drops `{threshold}` silently renders a sentence with a
    // hole in it, and nothing else would notice.
    for (const key of Object.keys(enDictionary) as Array<
      keyof typeof enDictionary
    >) {
      expect(placeholdersIn(itDictionary[key])).toEqual(
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

function placeholdersIn(value: string): Array<string> {
  return [...value.matchAll(/\{(\w+)\}/gu)]
    .map((match) => match[1] ?? '')
    .sort()
}
