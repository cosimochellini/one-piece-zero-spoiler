import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import {
  coveredRecord,
  drawing,
  fruitBand,
  peekPending,
  peekTo,
  specimen,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { SpecimenBands } from './SpecimenBands'

const GUM = specimen({ id: 'gum-gum-fruit', name: 'Gum-Gum Fruit' })
const CHOP = specimen({ id: 'chop-chop-fruit', name: 'Chop-Chop Fruit' })
const FLAME = specimen({
  id: 'flame-flame-fruit',
  name: 'Flame-Flame Fruit',
  form: 'logia',
  folded: 'flame-flame fruit',
  // The server folds the eaters' names into the aliases, in both locales.
  aliases: ['frutto foco foco', 'portgas d. ace', 'portuguese d. ace', 'sabo'],
  eaters: [
    { id: 'portgas-d-ace', name: 'Portgas D. Ace', visual: drawing() },
    { id: 'sabo', name: 'Sabo', visual: drawing('blue') },
  ],
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

  it('filters the open tiles and leaves the fog exactly where it was', async () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )

    await userEvent.type(screen.getByRole('searchbox'), 'flame')

    expect(
      screen.getByRole('link', { name: /^Flame-Flame Fruit/u }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /^Gum-Gum Fruit/u }),
    ).not.toBeInTheDocument()
    // The covered tile is not a search result and never moves out of its band.
    expect(screen.getByText('1 under fog')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: 'Under fog until episode 1089. Show anyway',
      }),
    ).toBeInTheDocument()
  })

  it('finds a fruit by an eater’s name and shows that eater, marked', async () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(700) },
    )

    expect(screen.getByRole('link', { name: 'Portgas D. Ace' })).toBeVisible()

    await userEvent.type(screen.getByRole('searchbox'), 'sab')

    const sabo = await screen.findByRole('link', { name: 'Sabo' })

    expect(sabo.querySelector('mark')).toHaveTextContent('Sab')
    expect(
      screen.getByRole('link', { name: /^Flame-Flame Fruit/u }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: 'Portgas D. Ace' }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('+1')).toBeInTheDocument()
  })

  it('keeps the first eater, unmarked, for a name only the other locale uses', async () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(700) },
    )

    await userEvent.type(screen.getByRole('searchbox'), 'portuguese')

    const ace = await screen.findByRole('link', { name: 'Portgas D. Ace' })

    expect(
      screen.queryByRole('link', { name: /^Gum-Gum Fruit/u }),
    ).not.toBeInTheDocument()
    expect(ace.querySelector('mark')).toBeNull()
  })

  it('numbers a covered tile on from the open ones above it', () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    // The Logia plate holds one open fruit and one covered one. The covered
    // tile is the plate's second fruit, not a second "Fruit 01".
    expect(screen.getByText('Fruit 02 · Logia')).toBeInTheDocument()
    expect(screen.queryByText(/Fruit 01/u)).not.toBeInTheDocument()
  })

  it('keeps a covered tile’s number while the reader types', async () => {
    renderWithProviders(
      <SpecimenBands
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )

    // Filtering the open Logia fruit out must not promote the covered one.
    await userEvent.type(screen.getByRole('searchbox'), 'gum')

    expect(
      screen.queryByRole('link', { name: /Flame-Flame Fruit/u }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('Fruit 02 · Logia')).toBeInTheDocument()
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

  it('draws an inline tile at once, and keeps a left-behind one empty but searchable', async () => {
    const later = specimen({
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
      name: /^Chop-Chop Fruit/u,
    })

    expect(chopLink).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /^Gum-Gum Fruit/u }),
    ).not.toBeInTheDocument()
  })
})
