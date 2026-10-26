import { describe, expect, it } from 'vitest'

import {
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_SERIES,
  type Series,
} from '~/lib/progress/series'
import { absoluteUrl } from '~/lib/seo/site'
import { Route as CharactersRoute } from '~/routes/$series/$locale/characters'
import { Route as FruitsRoute } from '~/routes/$series/$locale/fruits'
import { Route as LandingRoute } from '~/routes/$series/$locale/index'
import { Route as PlacesRoute } from '~/routes/$series/$locale/places'
import { copyOf } from '~/server/copy.server'

import { describeNamedPage, type HeadTags, recordHead } from './-head'

type Head = (input: {
  match: { context: { copy?: unknown; series: Series }; pathname: string }
  params: { locale: string }
}) => {
  links?: { href: string; hrefLang?: string; rel: string }[]
  meta?: { content?: string; title?: string }[]
  scripts?: { children: string }[]
}

/**
 * The route options are typed against the whole generated tree, whose context
 * no test can stand up. Each `head` is pure and reads only the fields
 * declared above, so it is reached through a guard over `unknown` rather than
 * through an assertion on the real option type.
 */
function isHead(value: unknown): value is Head {
  return typeof value === 'function'
}

function headOf(
  route: { options: { head?: unknown } },
  pathname: string,
  series: Series = ONE_PIECE_SERIES,
): ReturnType<Head> {
  const describeHead: unknown = route.options.head
  if (!isHead(describeHead)) {
    throw new TypeError('the route has no head')
  }

  return describeHead({
    match: { context: { copy: copyOf(series, 'en'), series }, pathname },
    params: { locale: 'en' },
  })
}

// Each page that is not a record's own: the route, the path the router
// matches it with — index routes carry a trailing slash — and the canonical
// address that must come out the other side.
const PAGES = [
  {
    route: LandingRoute,
    matched: '/one-piece/en/',
    canonical: '/one-piece/en',
  },
  {
    route: CharactersRoute,
    matched: '/one-piece/en/characters/',
    canonical: '/one-piece/en/characters',
  },
  {
    route: FruitsRoute,
    matched: '/one-piece/en/fruits/',
    canonical: '/one-piece/en/fruits',
  },
  {
    route: PlacesRoute,
    matched: '/one-piece/en/places/',
    canonical: '/one-piece/en/places',
  },
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
    const landing =
      headOf(LandingRoute, '/one-piece/en/').scripts?.[0]?.children ?? ''
    const index = headOf(CharactersRoute, '/one-piece/en/characters/')
      .scripts?.[0]

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
        describeHead({
          match: {
            context: { series: ONE_PIECE_SERIES },
            pathname: '/one-piece/fr/',
          },
          params: { locale: 'fr' },
        }),
      ).toStrictEqual({})
    }
  })

  // Its 404 keeps the shell's title, not the name of a page it does not have.
  it('says nothing at all for a page the series does not declare', () => {
    expect(
      headOf(
        FruitsRoute,
        '/hunter-x-hunter/en/fruits/',
        HUNTER_X_HUNTER_SERIES,
      ),
    ).toStrictEqual({})
  })
})

function presentHead(head: HeadTags | undefined): HeadTags {
  if (head === undefined) {
    throw new TypeError('Expected a record head')
  }
  return head
}

describe('series-specific structured data and social addresses', () => {
  it('keeps a record, its index, and its website inside the same series', () => {
    const pathname = '/hunter-x-hunter/en/characters/gon'
    const head = presentHead(
      recordHead(
        {
          loaderData: {
            head: {
              title: 'A character under fog',
              description: 'A covered record.',
            },
          },
          match: {
            context: { copy: copyOf(HUNTER_X_HUNTER_SERIES, 'en') },
            pathname,
          },
          params: { locale: 'en' },
        },
        'characters',
      ),
    )
    const structured = head.scripts[0]?.children ?? ''

    // The crumb is the index's name, not its page title.
    expect(structured).toContain('"name":"Characters"')
    expect(head.links).toContainEqual({
      rel: 'canonical',
      href: absoluteUrl(pathname),
    })
    expect(head.links).toContainEqual({
      rel: 'alternate',
      hrefLang: 'it',
      href: absoluteUrl('/hunter-x-hunter/it/characters/gon'),
    })
    expect(head.meta).toContainEqual({
      property: 'og:url',
      content: absoluteUrl(pathname),
    })
    expect(structured).toContain(
      `${absoluteUrl('/hunter-x-hunter/en')}#website`,
    )
    expect(structured).toContain(absoluteUrl('/hunter-x-hunter/en/characters'))
    expect(structured).not.toContain(absoluteUrl('/en/characters'))
  })

  it('keeps the legal page attached to the series-free hub', () => {
    const head = describeNamedPage({
      descriptionKey: 'legal.description',
      kind: 'index',
      locale: 'en',
      pathname: '/en/legal',
      titleKey: 'legal.pageTitle',
    })

    expect(head.links).toContainEqual({
      rel: 'canonical',
      href: absoluteUrl('/en/legal'),
    })
    expect(head.scripts[0]?.children).toContain(`${absoluteUrl('/en')}#website`)
    expect(head.scripts[0]?.children).not.toContain('/one-piece/')
  })
})
