import { fireEvent, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { useBookmark } from '~/lib/progress/BookmarkContext'
import { coveredRecord, fruitBand, peekTo, specimen } from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { FruitsAlbum } from './FruitWall'
import type { SpecimenBandsProps } from './SpecimenBands'

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
        bands={FOGGED}
        filed={3}
        onParams={vi.fn<SpecimenBandsProps['onParams']>()}
        params={{}}
        peek={peekTo(GUM)}
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
        bands={OPEN}
        filed={1}
        onParams={vi.fn<SpecimenBandsProps['onParams']>()}
        params={{}}
        peek={peekTo(GUM)}
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
        bands={OPEN}
        filed={1}
        onParams={vi.fn<SpecimenBandsProps['onParams']>()}
        params={{}}
        peek={peekTo(GUM)}
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
          bands={FOGGED}
          filed={3}
          onParams={vi.fn<SpecimenBandsProps['onParams']>()}
          params={{}}
          peek={peekTo(GUM)}
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
