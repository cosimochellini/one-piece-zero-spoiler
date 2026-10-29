import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { COPIES } from '~/server/copy.server'

import { enDictionary } from './dictionaries/en'
import { itDictionary } from './dictionaries/it'
import { type Locale, LOCALES } from './locales'
import { translate, translatorFor } from './translate'
import type { CommonKey } from './types'

/**
 * Every dictionary, the shared one and each series' own, by name and locale:
 * what the checks below read. A series added to `COPIES` is checked with no
 * line here.
 */
const ALL: [string, Record<Locale, Record<string, string>>][] = [
  ['shared', { en: enDictionary, it: itDictionary }],
  ...Object.entries(COPIES),
]

/** Every value of a copy, with its locale and key. */
function entriesOf(
  copy: Record<Locale, Record<string, string>>,
): [Locale, string, string][] {
  return LOCALES.flatMap((locale) =>
    Object.entries(copy[locale]).map(
      ([key, value]): [Locale, string, string] => [locale, key, value],
    ),
  )
}

describe('the dictionaries', () => {
  it.each(ALL)('translates every key of %s in every locale', (_, copy) => {
    // The TypeScript annotations already catch a missing key. This catches
    // the other half: a key that is present but left empty.
    for (const [locale, key, value] of entriesOf(copy)) {
      expect(value.trim(), `${locale} ${key}`).not.toBe('')
    }
  })

  it.each(ALL)(
    'carries the same placeholders in both languages in %s',
    (_, copy) => {
      // A translation that drops `{threshold}` silently renders a sentence with a
      // hole in it, and nothing else would notice.
      for (const [key, value] of Object.entries(copy.en)) {
        expect(placeholdersIn(copy.it[key] ?? ''), key).toStrictEqual(
          placeholdersIn(value),
        )
      }
    },
  )
})

describe('each series’ own copy', () => {
  it('shares no key with another series but the common ones', () => {
    // A later copy spread over an earlier one would silently change a key
    // for the first series.
    const owners = new Map<string, string>()
    for (const [slug, copy] of Object.entries(COPIES)) {
      for (const key of Object.keys(copy.en)) {
        if (COMMON.has(key)) {
          continue
        }

        expect(owners.get(key), `${slug} ${key}`).toBeUndefined()

        owners.set(key, slug)
      }
    }
  })

  it('redefines no shared key, and words every common one', () => {
    for (const copy of Object.values(COPIES)) {
      for (const locale of LOCALES) {
        const keys = Object.keys(copy[locale])

        expect(
          keys.filter((key) => Object.hasOwn(enDictionary, key)),
        ).toStrictEqual([])
        expect([...COMMON].filter((key) => !keys.includes(key))).toStrictEqual(
          [],
        )
      }
    }
  })

  it.each(ALL)('%s names no series but its own', (name, copy) => {
    // The shared copy names none, whatever the case ("ONE PIECE.com").
    const others = Object.keys(COPIES).filter((slug) => slug !== name)
    for (const [locale, key, value] of entriesOf(copy)) {
      for (const other of others) {
        expect(value.toLowerCase(), `${name} ${locale} ${key}`).not.toContain(
          nameOf(other).toLowerCase(),
        )
      }
    }
  })
})

/** The keys every series words for itself, as the copies hold them. */
const COMMON = new Set<string>([
  'characters.count',
  'characters.featuredLede',
  'credits.coverage',
  'credits.otherTerms',
  'credits.source.wiki-en',
  'credits.source.wiki-it',
  'credits.wikiEn',
  'credits.wikiIt',
  'credits.wikiTerms',
  'faq.animeA',
  'faq.animeQ',
  'faq.bookmarkA',
  'legal.credits',
  'onboarding.lede',
  'onboarding.places',
  'onboarding.tailTitle',
  'places.count',
  'places.pageDescription',
  'site.description',
] satisfies CommonKey[])

/** A series' name as its copy would print it: One Piece, Hunter x Hunter. */
function nameOf(slug: string): string {
  return slug
    .split('-')
    .map((word) =>
      word === 'x' ? word : `${word[0]?.toUpperCase() ?? ''}${word.slice(1)}`,
    )
    .join(' ')
}

/**
 * The phrases the `tone-of-voice` skill in `.claude/skills` rules out, per
 * locale. This list is the single source: the skill points here rather than
 * repeating it. Each pattern is tested against every value, ignoring case,
 * and anchored to word boundaries so that ordinary words that merely contain
 * one ("profiled", "riscoprire") still pass.
 */
const BANNED: Record<Locale, RegExp[]> = {
  en: [
    /\bsignal book\b/iu,
    /\bspecimen sheet\b/iu,
    /\bship['’]s log\b/iu,
    /\bports? of call\b/iu,
    /\bsailing nearby\b/iu,
    /\bshelves\b/iu,
    /\bdossiers?\b/iu,
    /\bfiled\b/iu,
    /\blift the fog\b/iu,
    /\b(?:(?:discover|unlock)(?:s|ed|ing)?|explor(?:e|es|ed|ing))\b|\bdive in\b/iu,
  ],
  it: [
    /\blibro dei segnali\b/iu,
    /\bfoglio dei campioni\b/iu,
    /\bgiornale di bordo\b/iu,
    /\bscaffal[ei]\b/iu,
    /\bdossier\b/iu,
    /\barchiviat[aeio]\b/iu,
    // The old verb for revealing: "Dirada la nebbia", "Dirado…".
    /\bdirad[aio]\b/iu,
    /\b(?:scopri|immergiti|esplora)\b/iu,
  ],
}

describe('the tone of voice', () => {
  // The en dash stays allowed: it is the right mark for a range such as
  // `{first}–{last}`.
  it.each(ALL)('uses no em dash and no exclamation mark in %s', (_, copy) => {
    for (const [locale, key, value] of entriesOf(copy)) {
      expect(value, `${locale} ${key}`).not.toMatch(/[—!]/u)
    }
  })

  it.each(ALL)('uses none of the banned phrases in %s', (_, copy) => {
    for (const [locale, key, value] of entriesOf(copy)) {
      const banned = BANNED[locale]
      for (const pattern of banned) {
        expect(value, `${locale} ${key} ${String(pattern)}`).not.toMatch(
          pattern,
        )
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

  it('throws on a key the dictionary does not hold', () => {
    // A series' key on a shared page, or under another series.
    expect(() => translate(enDictionary, 'fruits.title')).toThrow(
      'fruits.title',
    )
  })
})

describe('translatorFor', () => {
  it('names the series a page belongs to', () => {
    const t = translatorFor('it', {
      slug: 'hunter-x-hunter',
      name: 'Hunter x Hunter',
      words: COPIES['hunter-x-hunter'].it,
    })

    expect(t('hero.headline')).toBe('La wiki di Hunter x Hunter senza spoiler')
    expect(t('onboarding.tailTitle')).toBe('Dopo l’Esame Hunter')
  })

  it('types its keys by the series of the copy it is given', () => {
    const copy = {
      slug: 'hunter-x-hunter' as const,
      name: 'Hunter x Hunter',
      words: COPIES['hunter-x-hunter'].en,
    }

    // @ts-expect-error -- a One Piece translate cannot be built on another copy
    expect(translatorFor<'one-piece'>('en', copy)).toBeTypeOf('function')
    // @ts-expect-error -- nor read a One Piece key from it (#791)
    expect(() => translatorFor('en', copy)('fruits.title')).toThrow(
      'fruits.title',
    )
  })

  it('reads only the shared copy without a series', () => {
    const t = translatorFor('en')

    expect(t('nav.places')).toBe('Places')
    // @ts-expect-error -- a common key needs a series (#791)
    expect(() => t('site.description')).toThrow('site.description')
  })
})

function placeholdersIn(value: string): string[] {
  return Array.from(
    value.matchAll(/\{(?<name>\w+)\}/gu),
    (match) => match.groups?.['name'] ?? '',
  ).toSorted(byString())
}
