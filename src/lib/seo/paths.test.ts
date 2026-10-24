import { describe, expect, it } from 'vitest'

import {
  localeAlternates,
  localeRoot,
  normalisePath,
  withLocale,
} from './paths'

describe('a canonical path', () => {
  it('drops the trailing slash an index route is matched with', () => {
    expect(normalisePath('/en/characters/')).toBe('/en/characters')
    expect(normalisePath('/en/')).toBe('/en')
  })

  it('leaves a record path as it stands', () => {
    expect(normalisePath('/en/characters/nico-robin')).toBe(
      '/en/characters/nico-robin',
    )
  })

  it('keeps the root, which is nothing else', () => {
    expect(normalisePath('/')).toBe('/')
  })
})

describe('the same page in the other language', () => {
  it('swaps the locale segment and nothing else', () => {
    expect(withLocale('/en/characters/nico-robin', 'it')).toBe(
      '/it/characters/nico-robin',
    )
  })

  it('preserves the series and the rest of a record address', () => {
    expect(withLocale('/one-piece/en/characters/nico-robin', 'it')).toBe(
      '/one-piece/it/characters/nico-robin',
    )
    expect(withLocale('/hunter-x-hunter/it/characters/gon', 'en')).toBe(
      '/hunter-x-hunter/en/characters/gon',
    )
    expect(withLocale('/one-piece/en/', 'it')).toBe('/one-piece/it')
  })

  it('keeps shared legal and hub pages series-free', () => {
    expect(withLocale('/en/legal', 'it')).toBe('/it/legal')
    expect(withLocale('/', 'en')).toBe('/en')
    expect(localeRoot('/it/legal', 'en')).toBe('/en')
    expect(localeRoot('/one-piece/it/characters/nami', 'en')).toBe(
      '/one-piece/en',
    )
  })

  it('handles the locale root', () => {
    expect(withLocale('/en', 'it')).toBe('/it')
    expect(withLocale('/en/', 'it')).toBe('/it')
  })
})

describe('the hreflang alternates', () => {
  it('lists every locale and an x-default', () => {
    const alternates = localeAlternates('/en/fruits')

    expect(alternates.map((alternate) => alternate.hrefLang)).toStrictEqual([
      'it',
      'en',
      'x-default',
    ])
  })

  it('points x-default at the default locale rather than at the bare root', () => {
    const alternates = localeAlternates('/en/fruits')
    const fallback = alternates.find(
      (alternate) => alternate.hrefLang === 'x-default',
    )

    expect(fallback?.href).toBe('/it/fruits')
  })
})
