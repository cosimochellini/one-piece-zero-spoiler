import { describe, expect, it } from 'vitest'

import { absoluteUrl } from '~/lib/seo/site'

import { Route as LandingRoute } from '.'
import { Route as CharactersRoute } from './characters'
import { Route as FruitsRoute } from './fruits'
import { Route as PlacesRoute } from './places'

type Head = (input: {
  readonly match: { readonly pathname: string }
  readonly params: { readonly locale: string }
}) => {
  readonly links?: readonly { href: string; hrefLang?: string; rel: string }[]
  readonly meta?: readonly { content?: string; title?: string }[]
  readonly scripts?: readonly { children: string }[]
}

/**
 * The route options are typed against the whole generated tree, whose context
 * no test can stand up. Each `head` is pure and reads only the two fields
 * declared above, so it is reached through a guard over `unknown` rather than
 * through an assertion on the real option type.
 */
function isHead(value: unknown): value is Head {
  return typeof value === 'function'
}

function headOf(
  route: { options: { head?: unknown } },
  pathname: string,
): ReturnType<Head> {
  const describeHead: unknown = route.options.head
  if (!isHead(describeHead)) {
    throw new TypeError('the route has no head')
  }

  return describeHead({ match: { pathname }, params: { locale: 'en' } })
}

// Each page that is not a record's own: the route, the path the router
// matches it with — index routes carry a trailing slash — and the canonical
// address that must come out the other side.
const PAGES = [
  { route: LandingRoute, matched: '/en/', canonical: '/en' },
  {
    route: CharactersRoute,
    matched: '/en/characters/',
    canonical: '/en/characters',
  },
  { route: FruitsRoute, matched: '/en/fruits/', canonical: '/en/fruits' },
  { route: PlacesRoute, matched: '/en/places/', canonical: '/en/places' },
] as const

describe('every page that is not a record’s own', () => {
  it('claims one canonical address, without the trailing slash it was matched with', () => {
    for (const page of PAGES) {
      const { links } = headOf(page.route, page.matched)
      const canonical = links?.filter((link) => link.rel === 'canonical') ?? []

      expect(canonical).toHaveLength(1)
      // Exactly, not `toContain`: the trailing slash this is here to catch
      // would still be a substring match.
      expect(canonical[0]?.href).toBe(absoluteUrl(page.canonical))
    }
  })

  it('offers both languages and an x-default', () => {
    for (const page of PAGES) {
      const { links } = headOf(page.route, page.matched)
      const alternates = links?.filter((link) => link.rel === 'alternate') ?? []

      expect(alternates.map((link) => link.hrefLang)).toStrictEqual([
        'it',
        'en',
        'x-default',
      ])
    }
  })

  it('carries a title, a description and a structured-data graph', () => {
    for (const page of PAGES) {
      const head = headOf(page.route, page.matched)
      const meta = head.meta ?? []
      const scripts = head.scripts ?? []

      expect(JSON.stringify(meta)).toContain('title')
      expect(JSON.stringify(meta)).toContain('description')
      expect(JSON.stringify(scripts)).toContain('schema.org')
    }
  })

  it('files the three indexes as collections and the landing as a page', () => {
    const landing = headOf(LandingRoute, '/en/').scripts?.[0]?.children ?? ''
    const index = headOf(CharactersRoute, '/en/characters/').scripts?.[0]

    expect(landing).not.toContain('CollectionPage')
    expect(index?.children).toContain('CollectionPage')
  })

  it('says nothing at all for a prefix that is not a language', () => {
    for (const page of PAGES) {
      const describeHead: unknown = page.route.options.head
      if (!isHead(describeHead)) {
        throw new TypeError('the route has no head')
      }

      expect(
        describeHead({ match: { pathname: '/fr/' }, params: { locale: 'fr' } }),
      ).toStrictEqual({})
    }
  })
})
