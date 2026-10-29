import { afterEach, describe, expect, it, vi } from 'vitest'

import type { Locale } from '~/i18n/locales'
import type { RecordMatch } from '~/routes/$series/$locale/-found'
import {
  loadCharacter,
  loadNearby,
  loadRelationships,
  loadRoutePosition,
} from '~/server/api'
import { opCharacterPage } from '~/test/archive'
import { ep } from '~/test/providers'

import { Route } from './$id'

vi.mock(import('~/server/api'), async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    loadCharacter: vi.fn<typeof original.loadCharacter>(),
    loadNearby: vi.fn<typeof original.loadNearby>(),
    loadRelationships: vi.fn<typeof original.loadRelationships>(),
    loadRoutePosition: vi.fn<typeof original.loadRoutePosition>(),
  }
})

type Loader = (
  match: RecordMatch,
) => Promise<{
  legacy: null | {
    nearby: ReturnType<typeof loadNearby>
    position: ReturnType<typeof loadRoutePosition>
  }
  relationships: null | ReturnType<typeof loadRelationships>
}>

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

    it('never requests archive adjacency or nearby recommendations for One Piece', async () => {
      vi.mocked(loadCharacter).mockResolvedValue(
        opCharacterPage('mansherry', ep(800), locale) ?? null,
      )
      vi.mocked(loadRelationships).mockResolvedValue([])

      const page = await load('one-piece', locale)

      expect(page.legacy).toBeNull()
      await expect(page.relationships).resolves.toStrictEqual([])
      expect(loadRelationships).toHaveBeenCalledExactlyOnceWith({
        data: { id: 'mansherry', locale, series: 'one-piece' },
      })
      expect(loadNearby).not.toHaveBeenCalled()
      expect(loadRoutePosition).not.toHaveBeenCalled()
    })

    it('retains both legacy requests for a series without authored relationships', async () => {
      vi.mocked(loadCharacter).mockResolvedValue(
        opCharacterPage('mansherry', ep(800), locale) ?? null,
      )
      vi.mocked(loadNearby).mockResolvedValue([])
      vi.mocked(loadRoutePosition).mockResolvedValue(null)

      const page = await load('hunter-x-hunter', locale)
      const args = {
        data: { id: 'mansherry', locale, series: 'hunter-x-hunter' },
      }

      expect(page.relationships).toBeNull()
      expect(page.legacy).not.toBeNull()
      expect(loadNearby).toHaveBeenCalledExactlyOnceWith(args)
      expect(loadRoutePosition).toHaveBeenCalledExactlyOnceWith(args)
      expect(loadRelationships).not.toHaveBeenCalled()
    })

    it('does not request supplementary data for a missing character', async () => {
      vi.mocked(loadCharacter).mockResolvedValue(null)

      await expect(load('one-piece', locale)).rejects.toMatchObject({
        isNotFound: true,
      })
      expect(loadRelationships).not.toHaveBeenCalled()
      expect(loadNearby).not.toHaveBeenCalled()
      expect(loadRoutePosition).not.toHaveBeenCalled()
    })
  },
)
