import { afterEach, describe, expect, it, vi } from 'vitest'

import type { Locale } from '~/i18n/locales'
import type { RecordMatch } from '~/routes/$series/$locale/-found'
import { loadCharacter, loadRelationships } from '~/server/api'
import { opCharacterPage } from '~/test/archive'
import { ep } from '~/test/providers'

import { Route } from './$id'

vi.mock(import('~/server/api'), async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    loadCharacter: vi.fn<typeof original.loadCharacter>(),
    loadRelationships: vi.fn<typeof original.loadRelationships>(),
  }
})

type Loader = (
  match: RecordMatch,
) => Promise<{ relationships: ReturnType<typeof loadRelationships> }>

function isLoader(value: unknown): value is Loader {
  return typeof value === 'function'
}

async function load(series: string, locale: Locale): ReturnType<Loader> {
  const loader: unknown = Route.options.loader
  if (!isLoader(loader)) {
    throw new TypeError('The character route has no loader')
  }
  return loader({
    context: { locale, series: { slug: series } },
    params: { id: 'mansherry' },
  })
}

describe.each(['en', 'it'] as const)(
  'character rollout loader in %s',
  (locale) => {
    afterEach(() => {
      vi.resetAllMocks()
    })

    it.each(['one-piece', 'hunter-x-hunter'])(
      'loads only the character and reached relationships for %s',
      async (series) => {
        vi.mocked(loadCharacter).mockResolvedValue(
          opCharacterPage('mansherry', ep(800), locale) ?? null,
        )
        vi.mocked(loadRelationships).mockResolvedValue([])

        const page = await load(series, locale)

        expect(new Set(Object.keys(page))).toStrictEqual(
          new Set(['detail', 'head', 'relationships']),
        )
        await expect(page.relationships).resolves.toStrictEqual([])

        const args = { data: { id: 'mansherry', locale, series } }

        expect(loadCharacter).toHaveBeenCalledExactlyOnceWith(args)
        expect(loadRelationships).toHaveBeenCalledExactlyOnceWith(args)
      },
    )

    it('does not request supplementary data for a missing character', async () => {
      vi.mocked(loadCharacter).mockResolvedValue(null)

      await expect(load('one-piece', locale)).rejects.toMatchObject({
        isNotFound: true,
      })
      expect(loadRelationships).not.toHaveBeenCalled()
    })
  },
)
