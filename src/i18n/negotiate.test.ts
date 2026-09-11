import { negotiateLocale, parseAcceptLanguage } from './negotiate'

describe('parseAcceptLanguage', () => {
  it('matches a bare tag', () => {
    expect(parseAcceptLanguage('it')).toBe('it')
  })

  it('drops the region subtag', () => {
    expect(parseAcceptLanguage('en-GB')).toBe('en')
  })

  it('honours the q ranking rather than the written order', () => {
    expect(parseAcceptLanguage('fr;q=0.9, it;q=0.4, en;q=0.8')).toBe('en')
  })

  it('treats a missing q as 1', () => {
    expect(parseAcceptLanguage('de, it;q=0.9')).toBe('it')
  })

  it('ignores an entry the reader explicitly refused', () => {
    expect(parseAcceptLanguage('it;q=0, en;q=0.1')).toBe('en')
  })

  it('returns undefined when nothing is supported or nothing was sent', () => {
    expect(parseAcceptLanguage('fr, de')).toBeUndefined()
    expect(parseAcceptLanguage('')).toBeUndefined()
    expect(parseAcceptLanguage(undefined)).toBeUndefined()
  })

  it('survives an unparseable q instead of throwing', () => {
    expect(parseAcceptLanguage('it;q=abc, en')).toBe('en')
  })
})

describe('negotiateLocale', () => {
  it('prefers the cookie, because it is a choice the reader made here', () => {
    expect(negotiateLocale('opzs_lang=en', 'it')).toBe('en')
  })

  it('ignores a cookie holding a locale the site does not publish', () => {
    expect(negotiateLocale('opzs_lang=fr', 'en')).toBe('en')
  })

  it('falls back to the header when there is no cookie', () => {
    expect(negotiateLocale(null, 'en-US,en;q=0.9')).toBe('en')
  })

  it('falls back to Italian when neither says anything usable', () => {
    expect(negotiateLocale(null, null)).toBe('it')
    expect(negotiateLocale('', 'fr')).toBe('it')
  })
})
