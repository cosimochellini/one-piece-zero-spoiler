import { fireEvent, screen } from '@testing-library/react'
import { type ReactElement, useState } from 'react'
import { describe, expect, it, vi } from 'vitest'

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
import { EatersBand, KinBand, SagaBand } from './-$id.bands'
import { HistoryBand } from './-$id.history'
import { StageBand } from './-$id.stage'

const PATHNAME = '/one-piece/en/fruits/gum-gum'

interface Meta {
  content?: string
  name?: string
  title?: string
}

type Head = (input: {
  loaderData: undefined | { head: DocumentHead }
  match: { pathname: string }
  params: { locale: string; series: string }
}) => {
  links?: { href: string; rel: string }[]
  meta?: Meta[]
  scripts?: { children: string }[]
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
    params: { locale: 'en', series: 'one-piece' },
  })
}

function metaFor(head: DocumentHead | undefined): string {
  return JSON.stringify(headFor(head).meta ?? [])
}

describe('fruit route head', () => {
  it('spells out the loader’s title and description, and derives nothing', () => {
    const meta = metaFor({
      description: 'Turns the body to rubber.',
      title: 'Gum-Gum Fruit | Zero Spoiler',
    })

    expect(meta).toContain('Gum-Gum Fruit | Zero Spoiler')
    expect(meta).toContain('Turns the body to rubber.')
  })

  it('carries a fogged title through untouched', () => {
    const fogged = metaFor({
      description: 'A One Piece devil fruit first named in episode 462.',
      title: 'A fruit under fog | Zero Spoiler',
    })

    expect(fogged).not.toContain('Dark')
    expect(fogged).toContain('A fruit under fog | Zero Spoiler')
    expect(fogged).toContain('episode 462')
  })

  it('points the canonical link and the cards at this page', () => {
    const { links, scripts } = headFor({
      description: 'A rubber fruit.',
      title: 'Gum-Gum Fruit | Zero Spoiler',
    })
    const canonical = links?.filter((link) => link.rel === 'canonical') ?? []
    const alternates = links?.filter((link) => link.rel === 'alternate') ?? []

    expect(canonical).toHaveLength(1)
    expect(canonical[0]?.href).toBe(
      'https://zerospoiler.app/one-piece/en/fruits/gum-gum',
    )
    // Italian, English and the x-default.
    expect(alternates).toHaveLength(3)
    expect(JSON.stringify(scripts)).toContain('BreadcrumbList')
  })

  it('keeps a covered name out of the structured data too', () => {
    const { scripts } = headFor({
      description: 'A devil fruit filed at episode 130.',
      title: 'A fruit under fog | Zero Spoiler',
    })
    const graph: unknown = JSON.parse(scripts?.[0]?.children ?? 'null')

    expect(JSON.stringify(graph)).not.toContain('Gum-Gum')
    expect(JSON.stringify(graph)).toContain('A fruit under fog')
  })

  it('says nothing at all before the loader has run', () => {
    expect(metaFor(undefined)).toBe('[]')
  })
})

describe('the stage', () => {
  it('names the fruit, its kind and its episode once the reader is there', () => {
    renderWithProviders(
      <StageBand
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
      <StageBand
        detail={fruitDetail({ slot: coveredSlot({ revealedAtEpisode: 462 }) })}
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

describe('the switch between a fruit’s drawings', () => {
  const POWER = [{ d: 'M0 0 L1 1', role: 'accent' as const }]
  const REAL = [{ d: 'M2 2 L3 3', role: 'accent' as const }]

  it('is not there with one drawing, which is drawn once', () => {
    const { container } = renderWithProviders(
      <StageBand
        detail={fruitDetail({
          slot: openSlot(fruit({ visual: { strokes: REAL, tint: 'red' } })),
        })}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )

    expect(screen.queryByRole('radio')).not.toBeInTheDocument()
    expect(container.querySelectorAll('path')).toHaveLength(1)
  })

  it('lists the drawings reached, the latest picked, and switches', () => {
    const { container } = renderWithProviders(
      <StageBand
        detail={fruitDetail({
          drawings: [
            { look: 'power', strokes: POWER },
            { look: 'real', strokes: REAL },
          ],
          slot: openSlot(fruit({ visual: { strokes: REAL, tint: 'red' } })),
        })}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )
    const power = screen.getByRole('radio', { name: 'Power' })
    const real = screen.getByRole('radio', { name: 'Real fruit' })

    expect(
      screen.getByRole('group', { name: 'Drawings of this fruit' }),
    ).toBeInTheDocument()
    expect(real).toBeChecked()
    // Both are on the page, stacked, so the switch only cross-fades.
    expect(container.querySelectorAll('path')).toHaveLength(2)

    fireEvent.click(power)

    expect(power).toBeChecked()
    expect(real).not.toBeChecked()
  })

  it('starts on the latest when the bookmark brings a second drawing', () => {
    const slot = openSlot(fruit({ visual: { strokes: REAL, tint: 'red' } }))
    const before = fruitDetail({ slot })
    const later = fruitDetail({
      drawings: [
        { look: 'power', strokes: POWER },
        { look: 'real', strokes: REAL },
      ],
      slot,
    })
    // The page stays mounted when the bookmark moves; only its data changes.
    function Moved(): ReactElement {
      const [detail, setDetail] = useState(before)

      return (
        <>
          <button
            onClick={() => {
              setDetail(later)
            }}
            type="button"
          >
            move
          </button>
          <StageBand
            detail={detail}
            peek={peekPending()}
          />
        </>
      )
    }
    renderWithProviders(<Moved />, { bookmark: ep(650) })

    fireEvent.click(screen.getByRole('button', { name: 'move' }))

    expect(screen.getByRole('radio', { name: 'Real fruit' })).toBeChecked()
  })
})

describe('the eaters band', () => {
  it('says so when the archive files nobody', () => {
    renderWithProviders(
      <EatersBand
        eaters={{ mode: 'eaters', eaters: [] }}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getByText('No character in the wiki has eaten it yet.'),
    ).toBeInTheDocument()
  })
})

describe('the rail of others of this type', () => {
  it('says so when the archive files nothing else of the kind', () => {
    renderWithProviders(
      <KinBand
        peek={peekPending()}
        siblings={[]}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getByText('No other fruit of this type yet.'),
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
      screen.getByRole('region', { name: 'Other fruits of this type' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: /route/iu }),
    ).not.toBeInTheDocument()
  })
})

describe('the history', () => {
  it('reads oldest first, and links each eater to their page', () => {
    renderWithProviders(
      <HistoryBand
        detail={fruitDetail({
          saga: 'Alabasta Saga',
          history: [
            { event: 'named', revealedAtEpisode: 95, revealedAtChapter: 161 },
            {
              event: 'eaten',
              who: { id: 'portgas-d-ace', name: 'Portgas D. Ace' },
              revealedAtEpisode: 95,
              revealedAtChapter: 161,
            },
            {
              event: 'deceased',
              who: { id: 'portgas-d-ace', name: 'Portgas D. Ace' },
              revealedAtEpisode: 483,
              revealedAtChapter: 574,
            },
          ],
        })}
      />,
      { bookmark: ep(650) },
    )

    const items = screen
      .getAllByRole('listitem')
      .map((item) => item.textContent)

    expect(items).toStrictEqual([
      'Episode 95First named in the Alabasta Saga',
      'Episode 95Portgas D. Ace eats it',
      'Episode 483Portgas D. Ace dies',
    ])
    expect(
      screen.getAllByRole('link', { name: 'Portgas D. Ace' })[0],
    ).toHaveAttribute('href', '/one-piece/en/characters/portgas-d-ace')
  })

  it('draws no band at all with nothing reached', () => {
    const { container } = renderWithProviders(
      <HistoryBand detail={fruitDetail()} />,
      { bookmark: ep(650) },
    )

    expect(container).toBeEmptyDOMElement()
  })
})

describe('the fruit stage', () => {
  it('does not change fruit on arrow keys or horizontal swipes', () => {
    const { router } = renderWithProviders(
      <StageBand
        detail={fruitDetail()}
        peek={peekPending()}
      />,
      { bookmark: ep(1150) },
    )
    const navigate = vi.spyOn(router, 'navigate').mockResolvedValue()

    fireEvent.keyDown(document.body, { key: 'ArrowLeft' })
    fireEvent.keyDown(document.body, { key: 'ArrowRight' })

    const stage = screen.getByRole('heading')
    for (const [from, to] of [
      [50, 200],
      [200, 50],
    ]) {
      fireEvent.pointerDown(stage, {
        pointerType: 'touch',
        clientX: from,
        clientY: 100,
      })
      fireEvent.pointerUp(stage, {
        pointerType: 'touch',
        clientX: to,
        clientY: 100,
      })
    }

    expect(navigate).not.toHaveBeenCalled()
  })
})

describe('the rail of the same saga', () => {
  it('draws nothing with no rail, and its heading over one', () => {
    const view = renderWithProviders(
      <SagaBand
        peek={peekPending()}
        rail={[]}
      />,
      { bookmark: ep(650) },
    )

    expect(view.container).toBeEmptyDOMElement()

    view.unmount()
    renderWithProviders(
      <SagaBand
        peek={peekPending()}
        rail={[openSlot(fruit()), openSlot(fruit({ id: 'other-fruit' }))]}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getByRole('region', { name: 'Other fruits of this saga' }),
    ).toBeInTheDocument()
  })
})
