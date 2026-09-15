import { isNotFound } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'

import type { DocumentHead } from '~/lib/view/records'
import { orNotFound } from '~/routes/$locale/-found'

import { Route } from './$id'

const PATHNAME = '/en/characters/nico-robin'

type Meta = {
  readonly content?: string
  readonly name?: string
  readonly title?: string
}

type Head = (input: {
  readonly loaderData: undefined | { readonly head: DocumentHead }
  readonly match: { readonly pathname: string }
  readonly params: { readonly locale: string }
}) => {
  readonly links?: readonly { href: string; rel: string }[]
  readonly meta?: readonly Meta[]
  readonly scripts?: readonly { children: string }[]
}

/**
 * The route options are typed against the whole generated tree, whose context
 * no test can stand up. `head` is pure and reads only the field declared
 * above, so it is reached through a guard over `unknown` rather than through
 * an assertion on the real option type.
 */
function isHead(value: unknown): value is Head {
  return typeof value === 'function'
}

function headFor(head: DocumentHead | undefined): ReturnType<Head> {
  const describeHead: unknown = Route.options.head
  if (!isHead(describeHead)) {
    throw new TypeError('the route has no head')
  }

  return describeHead({
    loaderData: head === undefined ? undefined : { head },
    match: { pathname: PATHNAME },
    params: { locale: 'en' },
  })
}

function metaFor(head: DocumentHead | undefined): string {
  return JSON.stringify(headFor(head).meta ?? [])
}

/**
 * The `head` only. What it is given — which is where the decision that a
 * covered name must not reach a title is actually taken — is asserted against
 * the plain function in `src/server/archive/pages.test.ts`: the loader is
 * async and calls a server function now, and a server function called under
 * Vitest throws out of `getStartContext()` rather than running.
 */
describe('character route head', () => {
  it('spells out the loader’s title and description, and derives nothing', () => {
    const meta = metaFor({
      description: 'A scholar.',
      title: 'Nico Robin — Zero Spoiler',
    })

    expect(meta).toContain('Nico Robin — Zero Spoiler')
    expect(meta).toContain('A scholar.')
  })

  it('carries a fogged title through untouched', () => {
    const fogged = metaFor({
      description: 'A One Piece character filed at episode 130.',
      title: 'A character under fog — Zero Spoiler',
    })

    expect(fogged).not.toContain('Robin')
    expect(fogged).toContain('A character under fog — Zero Spoiler')
    expect(fogged).toContain('episode 130')
  })

  it('points the canonical link and the cards at this page', () => {
    const { links, scripts } = headFor({
      description: 'A scholar.',
      title: 'Nico Robin — Zero Spoiler',
    })
    const canonical = links?.filter((link) => link.rel === 'canonical') ?? []
    const alternates = links?.filter((link) => link.rel === 'alternate') ?? []

    expect(canonical).toHaveLength(1)
    expect(canonical[0]?.href).toBe(
      'https://one-piece-zero-spoiler.netlify.app/en/characters/nico-robin',
    )
    // Italian, English and the x-default.
    expect(alternates).toHaveLength(3)
    expect(JSON.stringify(scripts)).toContain('BreadcrumbList')
  })

  it('keeps a covered name out of the structured data too', () => {
    const { scripts } = headFor({
      description: 'A One Piece character filed at episode 130.',
      title: 'A character under fog — Zero Spoiler',
    })
    const graph: unknown = JSON.parse(scripts?.[0]?.children ?? 'null')

    expect(JSON.stringify(graph)).not.toContain('Robin')
    expect(JSON.stringify(graph)).toContain('A character under fog')
  })

  it('says nothing at all before the loader has run', () => {
    expect(metaFor(undefined)).toBe('[]')
  })
})

describe('an id the archive does not file as a character', () => {
  it('becomes the router’s not-found signal', () => {
    // The server function answers `null` rather than throwing: a router
    // signal thrown across an RPC boundary is only an error. The turning is
    // the route's job, so it is the route that is held to it.
    let thrown: unknown = null
    try {
      orNotFound(null)
    } catch (error: unknown) {
      thrown = error
    }

    expect(isNotFound(thrown)).toBe(true)
  })

  it('leaves a page that was found alone', () => {
    const page = { head: { description: 'A scholar.', title: 'Nico Robin' } }

    expect(orNotFound(page)).toBe(page)
  })
})
