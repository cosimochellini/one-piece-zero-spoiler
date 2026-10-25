import { describe, expect, it } from 'vitest'

import type { SeriesCopy } from '~/i18n/types'
import { ONE_PIECE_SERIES } from '~/lib/progress/series'
import type { DocumentHead } from '~/lib/view/records'
import { copyOf } from '~/server/copy.server'

import { Route } from './$id'

/** The copy the series route hands every page of One Piece. */
const COPY = copyOf(ONE_PIECE_SERIES, 'en')

type Head = (input: {
  loaderData: undefined | { head: DocumentHead }
  match: { context: { copy: SeriesCopy }; pathname: string }
  params: { locale: string; series: string }
}) => {
  links?: { href: string; rel: string }[]
  meta?: { title?: string }[]
  scripts?: { children: string }[]
}

/** `head` is pure; reached through a guard, as on the character route. */
function isHead(value: unknown): value is Head {
  return typeof value === 'function'
}

function headFor(head: DocumentHead): ReturnType<Head> {
  const describeHead: unknown = Route.options.head
  if (!isHead(describeHead)) {
    throw new TypeError('the route has no head')
  }

  return describeHead({
    loaderData: { head },
    match: { context: { copy: COPY }, pathname: '/one-piece/en/places/jaya' },
    params: { locale: 'en', series: 'one-piece' },
  })
}

describe('place route head', () => {
  it('carries a fogged title through untouched, the name nowhere', () => {
    const { meta, scripts } = headFor({
      description: 'A One Piece place that first appears in episode 146.',
      title: 'A place under fog | Zero Spoiler',
    })
    const all = JSON.stringify({ meta, scripts })

    expect(all).toContain('A place under fog | Zero Spoiler')
    expect(all).not.toContain('Jaya')
  })

  it('points the canonical link at this page, under the places page', () => {
    const { links, scripts } = headFor({
      description: 'An island.',
      title: 'Jaya | Zero Spoiler',
    })

    expect(links?.find((link) => link.rel === 'canonical')?.href).toBe(
      'https://zerospoiler.app/one-piece/en/places/jaya',
    )
    expect(JSON.stringify(scripts)).toContain('/one-piece/en/places')
  })
})
