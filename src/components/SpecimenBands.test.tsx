import { screen } from '@testing-library/react'
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
    expect(screen.getByText(/Plate 01 · 3 fruits/u)).toBeInTheDocument()
  })

  it('counts every open fruit across the three plates', async () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    const status = await screen.findByText('3 of 3 open fruits shown')

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
    // called "Specimen 01" would be a sheet that counted itself twice.
    expect(screen.getAllByText('Specimen 01')).toHaveLength(2)
    expect(screen.getAllByText('Specimen 02')).toHaveLength(2)
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
    expect(screen.getAllByText('Specimen 02')).toHaveLength(2)
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
      screen.getAllByText('Nothing is under fog on this plate.'),
    ).toHaveLength(2)
  })
})
