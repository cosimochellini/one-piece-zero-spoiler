import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { at, fruitBand, specimen } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { SagaMarquee } from './SagaMarquee'

const DOOR = specimen({
  id: 'door-door-fruit',
  name: 'Door-Door Fruit',
  ...at(243),
})
const LEOPARD = specimen({
  id: 'cat-cat-fruit-model-leopard',
  name: 'Cat-Cat Fruit, Model: Leopard',
  form: 'zoan',
  ...at(246),
})
const BUBBLE = specimen({
  id: 'bubble-bubble-fruit',
  name: 'Bubble-Bubble Fruit',
  ...at(293),
})

const LINK = { hash: 'saga-4', search: { view: 'saga' as const } }

const BANDS = [
  fruitBand({ form: 'paramecia', open: [DOOR, BUBBLE], total: 2 }),
  fruitBand({ form: 'zoan', open: [LEOPARD], total: 1 }),
]

describe('SagaMarquee', () => {
  it('names the saga and its fruits so far, the latest first and the rest oldest first', () => {
    renderWithProviders(
      <SagaMarquee
        bands={BANDS}
        link={LINK}
        marquee={{
          saga: 'Water Seven Saga',
          fruits: [{ id: DOOR.id }, { id: LEOPARD.id }, { id: BUBBLE.id }],
          last: null,
        }}
      />,
      { bookmark: ep(320) },
    )

    const marquee = screen.getByRole('region', {
      name: 'Water Seven Saga: 3 fruits so far',
    })
    const links = within(marquee).getAllByRole('link')

    expect(links.map((link) => link.textContent)).toStrictEqual([
      'Bubble-Bubble FruitEpisode 293',
      'Door-Door FruitEpisode 243',
      'Cat-Cat Fruit, Model: LeopardEpisode 246',
      'See the whole saga→',
    ])
    expect(links[0]).toHaveAttribute(
      'href',
      '/one-piece/en/fruits/bubble-bubble-fruit',
    )
  })

  it('goes on to its group in the saga view, the picks kept, in both states', () => {
    const search = { view: 'saga' as const, form: 'zoan' as const, q: 'cat' }
    renderWithProviders(
      <SagaMarquee
        bands={BANDS}
        link={{ hash: 'saga-4', search }}
        marquee={{ saga: 'Water Seven Saga', fruits: [], last: null }}
      />,
      { bookmark: ep(210) },
    )

    expect(
      screen.getByRole('link', { name: 'See the whole saga' }),
    ).toHaveAttribute(
      'href',
      '/one-piece/en/fruits?view=saga&form=zoan&q=cat#saga-4',
    )
  })

  it('says one fruit in the singular', () => {
    renderWithProviders(
      <SagaMarquee
        bands={BANDS}
        link={LINK}
        marquee={{
          saga: 'Water Seven Saga',
          fruits: [{ id: DOOR.id }],
          last: null,
        }}
      />,
      { bookmark: ep(250) },
    )

    expect(
      screen.getByRole('heading', { name: 'Water Seven Saga: 1 fruit so far' }),
    ).toBeInTheDocument()
  })

  it('points back to the last fruit when the saga has none yet', () => {
    renderWithProviders(
      <SagaMarquee
        bands={BANDS}
        link={LINK}
        marquee={{
          saga: 'Thriller Bark Saga',
          fruits: [],
          last: { id: BUBBLE.id },
        }}
      />,
      { bookmark: { mode: 'chapter', chapter: 440 } },
    )

    expect(
      screen.getByRole('heading', { name: 'Thriller Bark Saga' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /^No new fruit in this saga yet\. The last one was the/u,
      ),
    ).toHaveTextContent(
      'No new fruit in this saga yet. The last one was the Bubble-Bubble Fruit, chapter 293.',
    )
    expect(
      screen.getByRole('link', { name: 'Bubble-Bubble Fruit' }),
    ).toHaveAttribute('href', '/one-piece/en/fruits/bubble-bubble-fruit')
  })

  it('draws nothing without a marquee', () => {
    const view = renderWithProviders(
      <SagaMarquee
        bands={BANDS}
        link={LINK}
        marquee={null}
      />,
      { bookmark: ep(1) },
    )

    expect(view.container).toBeEmptyDOMElement()
  })
})
