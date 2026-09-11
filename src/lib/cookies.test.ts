import { expireCookie, parseCookieHeader, writeCookie } from './cookies'

describe('parseCookieHeader', () => {
  it('returns an empty jar for nothing to parse', () => {
    expect(parseCookieHeader(undefined).size).toBe(0)
    expect(parseCookieHeader(null).size).toBe(0)
    expect(parseCookieHeader('').size).toBe(0)
  })

  it('reads several cookies and trims the whitespace between them', () => {
    const jar = parseCookieHeader('opzs_ep=1089; opzs_lang=it')

    expect(jar.get('opzs_ep')).toBe('1089')
    expect(jar.get('opzs_lang')).toBe('it')
  })

  it('keeps a value that contains an equals sign', () => {
    expect(parseCookieHeader('token=a=b=c').get('token')).toBe('a=b=c')
  })

  it('accepts an empty value', () => {
    expect(parseCookieHeader('opzs_ep=').get('opzs_ep')).toBe('')
  })

  it('skips fragments with no name or no separator', () => {
    const jar = parseCookieHeader('=orphan; broken; opzs_ep=12')

    expect(jar.size).toBe(1)
    expect(jar.get('opzs_ep')).toBe('12')
  })

  it('decodes percent-encoded values', () => {
    expect(parseCookieHeader('note=a%20b').get('note')).toBe('a b')
  })

  it('returns a malformed encoding verbatim instead of throwing', () => {
    expect(parseCookieHeader('note=%E0%A4%A').get('note')).toBe('%E0%A4%A')
  })
})

describe('writeCookie', () => {
  afterEach(() => {
    expireCookie('probe')
  })

  it('round-trips through document.cookie', () => {
    writeCookie('probe', 'kept', 60)

    expect(parseCookieHeader(document.cookie).get('probe')).toBe('kept')
  })

  it('removes the cookie when it is expired', () => {
    writeCookie('probe', 'kept', 60)
    expireCookie('probe')

    expect(parseCookieHeader(document.cookie).has('probe')).toBe(false)
  })
})
