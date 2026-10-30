import { afterEach, describe, expect, it, vi } from 'vitest'

describe('getRouter', () => {
  afterEach(() => {
    document.documentElement.lang = ''
  })

  it.each([
    ['en', 'en', 'it'],
    ['it', 'it', 'en'],
    ['', 'it', 'en'],
  ] as const)(
    'loads the shared copy of <html lang="%s"> before it hydrates',
    async (lang, loaded, skipped) => {
      vi.resetModules()
      const { getRouter } = await import('./router')
      const { getDictionary } = await import('./i18n/translate')
      document.documentElement.lang = lang

      await getRouter().options.hydrate?.({})

      expect(getDictionary(loaded)['site.name']).toBe('Zero Spoiler')
      expect(() => getDictionary(skipped)).toThrow('copy is not loaded')
    },
  )
})
