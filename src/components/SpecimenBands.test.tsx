import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import {
  coveredRecord,
  fruit,
  fruitBand,
  peekPending,
  peekTo,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { SpecimenBands } from './SpecimenBands'

const GUM = fruit({ id: 'gum-gum-fruit', name: 'Gum-Gum Fruit' })
const CHOP = fruit({ id: 'chop-chop-fruit', name: 'Chop-Chop Fruit' })
const FLAME = fruit({
  id: 'flame-flame-fruit',
  name: 'Flame-Flame Fruit',
  form: 'logia',
})

const BANDS = [
  fruitBand({ form: 'paramecia', open: [GUM, CHOP], total: 3 }),
  fruitBand({ form: 'zoan', open: [], covered: [], total: 0 }),
  fruitBand({
    form: 'logia',
    open: [FLAME],
    covered: [coveredRecord({ kind: 'fruit' })],
    total: 2,
  }),
]

describe('SpecimenBands', () => {
  it('sets out one plate per kind, each labelled and counted', () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getByRole('region', { name: 'Paramecia' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Zoan' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Logia' })).toBeInTheDocument()
    expect(screen.getByText(/Group 01 · 3 fruits/u)).toBeInTheDocument()

    for (const name of ['Paramecia', 'Zoan', 'Logia']) {
      const plate = screen.getByRole('region', { name })
      const headings = within(plate).getAllByRole('heading', { level: 2 })
      const heading = within(plate).getByRole('heading', { level: 2, name })
      const head = heading.parentElement

      expect(headings).toHaveLength(1)
      expect(plate).toHaveAttribute('aria-labelledby', heading.id)
      expect(head?.parentElement).toBe(plate)
      // The explanatory sentence must scroll with the specimens rather than
      // increasing the pinned heading's height.
      expect(head?.nextElementSibling?.tagName).toBe('P')
      expect(head?.nextElementSibling).not.toHaveTextContent(/^$/u)
    }
  })

  it('counts every open fruit across the three plates', async () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    const status = await screen.findByText('Showing 3 of 3 open fruits')

    expect(status).toBeInTheDocument()
  })

  it('filters the open rows and leaves the fog exactly where it was', async () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )

    await userEvent.type(screen.getByRole('searchbox'), 'flame')

    expect(
      screen.getByRole('link', { name: 'Flame-Flame Fruit' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: 'Gum-Gum Fruit' }),
    ).not.toBeInTheDocument()
    // The covered row is not a search result and never moves out of its band.
    expect(screen.getByText('1 under fog')).toBeInTheDocument()
    expect(screen.getByText('A fruit under fog')).toBeInTheDocument()
  })

  it('numbers a plate once, across the open rows and the covered ones', () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    // The Logia plate holds one open fruit and one covered one. Two rows
    // called "Fruit 01" would be a sheet that counted itself twice.
    expect(screen.getAllByText('Fruit 01')).toHaveLength(2)
    expect(screen.getAllByText('Fruit 02')).toHaveLength(2)
  })

  it('keeps a specimen’s number while the reader types', async () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )

    // Chop-Chop is the second fruit on the Paramecia plate. Filtering Gum-Gum
    // out must not promote it to the first.
    await userEvent.type(screen.getByRole('searchbox'), 'chop')

    expect(
      screen.queryByRole('link', { name: 'Gum-Gum Fruit' }),
    ).not.toBeInTheDocument()
    expect(screen.getAllByText('Fruit 02')).toHaveLength(2)
  })

  it('says so when a plate has nothing under fog', () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getAllByText('Nothing of this type is under fog.'),
    ).toHaveLength(2)
  })

  it('draws an inline row at once, and keeps a left-behind one empty but searchable', async () => {
    const later = fruit({
      id: 'chop-chop-fruit',
      name: 'Chop-Chop Fruit',
      visual: { strokes: [], tint: 'red', deferred: true },
    })
    renderWithProviders(
      <SpecimenBands
        bands={[fruitBand({ form: 'paramecia', open: [GUM, later], total: 2 })]}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    const [gum, chop] = screen.getAllByRole('listitem')

    expect(gum?.querySelectorAll('path').length).toBeGreaterThan(0)
    expect(chop?.querySelector('svg')).not.toBeNull()
    expect(chop?.querySelectorAll('path')).toHaveLength(0)

    await userEvent.type(screen.getByRole('searchbox'), 'chop')

    const chopLink = await screen.findByRole('link', {
      name: 'Chop-Chop Fruit',
    })

    expect(chopLink).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: 'Gum-Gum Fruit' }),
    ).not.toBeInTheDocument()
  })
})
