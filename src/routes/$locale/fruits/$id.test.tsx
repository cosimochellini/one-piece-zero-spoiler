import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { DocumentHead } from '~/lib/view/records'
import {
  coveredSlot,
  fruit,
  fruitDetail,
  openSlot,
  peekPending,
  peekTo,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { Route } from './$id'
import { EatersBand, KinBand, PlateBand } from './-$id.bands'

type Meta = {
  readonly content?: string
  readonly name?: string
  readonly title?: string
}

type Head = (input: {
  readonly loaderData: undefined | { readonly head: DocumentHead }
}) => { readonly meta?: readonly Meta[] }

/**
 * The route options are typed against the whole generated tree, whose context
 * no test can stand up. `head` is pure and reads only the field declared
 * above, so it is reached through a guard over `unknown` rather than through
 * an assertion on the real option type.
 */
function isHead(value: unknown): value is Head {
  return typeof value === 'function'
}

function metaFor(head: DocumentHead | undefined): string {
  const describeHead: unknown = Route.options.head
  if (!isHead(describeHead)) {
    throw new TypeError('the route has no head')
  }

  const { meta } = describeHead({
    loaderData: head === undefined ? undefined : { head },
  })

  return JSON.stringify(meta ?? [])
}

describe('fruit route head', () => {
  it('spells out the loader’s title and description, and derives nothing', () => {
    const meta = metaFor({
      description: 'Turns the body to rubber.',
      title: 'Gum-Gum Fruit — Zero Spoiler',
    })

    expect(meta).toContain('Gum-Gum Fruit — Zero Spoiler')
    expect(meta).toContain('Turns the body to rubber.')
  })

  it('carries a fogged title through untouched', () => {
    const fogged = metaFor({
      description: 'A One Piece devil fruit filed at episode 462.',
      title: 'A fruit under fog — Zero Spoiler',
    })

    expect(fogged).not.toContain('Dark')
    expect(fogged).toContain('A fruit under fog — Zero Spoiler')
    expect(fogged).toContain('episode 462')
  })

  it('says nothing at all before the loader has run', () => {
    expect(metaFor(undefined)).toBe('[]')
  })
})

describe('the plate band', () => {
  it('names the fruit, its kind and its episode once the reader is there', () => {
    renderWithProviders(
      <PlateBand
        detail={fruitDetail()}
        peek={peekTo(fruit())}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getByRole('heading', { name: 'Gum-Gum Fruit' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Paramecia/u)).toBeInTheDocument()
    expect(screen.getByText('Devil fruit')).toBeInTheDocument()
  })

  it('keeps the kind and the episode outside the fog, and the rest in', () => {
    const { container } = renderWithProviders(
      <PlateBand
        detail={{ slot: coveredSlot({ revealedAtEpisode: 462 }) }}
        peek={peekPending()}
      />,
      { bookmark: ep(100) },
    )

    expect(screen.getByText('Devil fruit')).toBeInTheDocument()
    expect(screen.getByText('First named in episode 462')).toBeInTheDocument()
    // Not by role: covered content carries `inert` and `aria-hidden`, so a
    // screen reader cannot walk into it and neither can a role query.
    expect(screen.getByText('A fruit under fog')).toBeInTheDocument()
    expect(container.querySelectorAll('path')).toHaveLength(0)
  })
})

describe('the eaters band', () => {
  it('says the band counts in episodes to a reader counting in chapters', () => {
    renderWithProviders(
      <EatersBand
        eaters={{ mode: 'chapterNote' }}
        peek={peekPending()}
      />,
      { bookmark: { mode: 'chapter', chapter: 1044 } },
    )

    expect(
      screen.getByText(/The dossiers count in anime episodes/u),
    ).toBeInTheDocument()
  })

  it('says so when the archive files nobody', () => {
    renderWithProviders(
      <EatersBand
        eaters={{ mode: 'eaters', eaters: [] }}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getByText('Nobody in the archive has eaten it yet.'),
    ).toBeInTheDocument()
  })
})

describe('the fruit page’s shape', () => {
  it('has no route position: a fruit is not a waypoint on the chart', () => {
    renderWithProviders(
      <KinBand
        peek={peekPending()}
        siblings={[openSlot(fruit())]}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getByRole('region', { name: 'Others of this type' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: /route/iu }),
    ).not.toBeInTheDocument()
  })
})
