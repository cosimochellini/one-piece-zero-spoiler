import { fireEvent, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { useBookmark } from '~/lib/progress/BookmarkContext'
import type { FruitBandView } from '~/lib/view/records'
import {
  coveredRecord,
  fruitBand,
  peekTo,
  platesOf,
  specimen,
} from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { FruitsAlbum } from './FruitWall'
import type { Album, SpecimenBandsProps } from './SpecimenBands'

const GUM = specimen({ id: 'gum-gum-fruit', name: 'Gum-Gum Fruit' })

// What the server sends with no bookmark: every plate covered.
const FOGGED = [
  fruitBand({
    form: 'paramecia',
    open: [],
    covered: [
      coveredRecord({ kind: 'fruit' }),
      coveredRecord({ kind: 'fruit' }),
    ],
    total: 2,
  }),
  fruitBand({ form: 'zoan', open: [], covered: [], total: 0 }),
  fruitBand({
    form: 'logia',
    open: [],
    covered: [coveredRecord({ kind: 'fruit' })],
    total: 1,
  }),
]

const OPEN = [fruitBand({ form: 'paramecia', open: [GUM], total: 1 })]

/** The album the browser asks for, with these plates and no groups. */
function albumOf(bands: FruitBandView[]): Album {
  return { bands, factions: [], later: [], sagas: [] }
}

/** Saves a bookmark the way the dialog's form does, through the provider. */
function Save(): ReactElement {
  const { setBookmark } = useBookmark()

  return (
    <button
      onClick={() => {
        setBookmark(ep(650))
      }}
      type="button"
    >
      save
    </button>
  )
}

describe('FruitsAlbum', () => {
  it('opens onto a wall of fog with the bookmark control when there is no bookmark', async () => {
    const user = userEvent.setup()
    const view = renderWithProviders(
      <FruitsAlbum
        album={albumOf(FOGGED)}
        filed={3}
        marquee={null}
        onParams={vi.fn<SpecimenBandsProps['onParams']>()}
        params={{}}
        peek={peekTo(GUM)}
        plates={platesOf(FOGGED)}
      />,
    )

    const wall = screen.getByRole('region', {
      name: '3 devil fruits are under fog',
    })

    expect(within(wall).getByText('Which episode are you on?')).toBeVisible()
    expect(wall).toHaveTextContent('2 Paramecia · 0 Zoan · 1 Logia')
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()

    await user.click(
      within(wall).getByRole('button', { name: 'Set your bookmark' }),
    )

    expect(
      screen.getByRole('dialog', { name: 'Where are you up to?' }),
    ).toBeInTheDocument()

    // The covered tiles are on the page, closed behind the disclosure.
    const details = view.container.querySelector('details')

    expect(details).not.toHaveAttribute('open')
    expect(
      within(details ?? view.container).getAllByRole('button', {
        name: /Show anyway/u,
      }),
    ).toHaveLength(3)
    expect(screen.getByText('Browse anyway').tagName).toBe('SUMMARY')
  })

  it('shows the album, search and all, at a trial point', () => {
    renderWithProviders(
      <FruitsAlbum
        album={albumOf(OPEN)}
        filed={1}
        marquee={null}
        onParams={vi.fn<SpecimenBandsProps['onParams']>()}
        params={{}}
        peek={peekTo(GUM)}
        plates={platesOf(OPEN)}
      />,
      { bookmark: ep(1), trial: true },
    )

    expect(screen.queryByText(/under fog$/u)).not.toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByText('Gum-Gum Fruit')).toBeInTheDocument()
  })

  it('leaves focus alone on a first paint with a bookmark', () => {
    renderWithProviders(
      <FruitsAlbum
        album={albumOf(OPEN)}
        filed={1}
        marquee={null}
        onParams={vi.fn<SpecimenBandsProps['onParams']>()}
        params={{}}
        peek={peekTo(GUM)}
        plates={platesOf(OPEN)}
      />,
      { bookmark: ep(650) },
    )

    expect(document.body).toHaveFocus()
    expect(screen.queryByText('Browse anyway')).not.toBeInTheDocument()
  })

  it('swaps the wall for the album on a save, and moves focus to it', async () => {
    const view = renderWithProviders(
      <>
        <Save />
        <FruitsAlbum
          album={albumOf(FOGGED)}
          filed={3}
          marquee={null}
          onParams={vi.fn<SpecimenBandsProps['onParams']>()}
          params={{}}
          peek={peekTo(GUM)}
          plates={platesOf(FOGGED)}
        />
      </>,
    )
    // The dialog has closed and handed focus back to the wall's button.
    screen.getByRole('button', { name: 'Set your bookmark' }).focus()

    // A synthetic click, which leaves focus where it is.
    fireEvent.click(screen.getByRole('button', { name: 'save' }))
    await settle()

    expect(screen.queryByText('Browse anyway')).not.toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(view.container.querySelector('[tabindex="-1"]')).toHaveFocus()
  })
})
