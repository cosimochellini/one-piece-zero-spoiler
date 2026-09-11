import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { Entity } from '~/data/types'
import { renderWithProviders } from '~/test/providers'

import { CharacterGrid } from './CharacterGrid'

const entries: readonly Entity[] = [
  {
    id: 'monkey-d-luffy',
    kind: 'character',
    revealedAtEpisode: 1,
    name: { it: 'Monkey D. Rufy', en: 'Monkey D. Luffy' },
    summary: { it: 'x', en: 'x' },
    visual: { art: 'monkey-d-luffy', tint: 'red' },
  },
  {
    id: 'nami',
    kind: 'character',
    revealedAtEpisode: 5,
    name: { it: 'Nami', en: 'Nami' },
    summary: { it: 'x', en: 'x' },
    visual: { art: 'nami', tint: 'orange' },
  },
  {
    id: 'nico-robin',
    kind: 'character',
    revealedAtEpisode: 130,
    name: { it: 'Nico Robin', en: 'Nico Robin' },
    summary: { it: 'x', en: 'x' },
    visual: { art: 'nico-robin', tint: 'violet' },
  },
]

function fogBand(): HTMLElement {
  return screen.getByRole('region', { name: /under fog/u })
}

describe('CharacterGrid', () => {
  it('lists the open characters as links to their pages and fogs the rest', () => {
    renderWithProviders(<CharacterGrid entries={entries} progress={10} />, {
      progress: 10,
    })

    expect(
      screen.getByRole('link', { name: /Monkey D\. Luffy/u }),
    ).toHaveAttribute('href', '/en/characters/monkey-d-luffy')
    expect(screen.getByRole('link', { name: /Nami/u })).toBeInTheDocument()
    // Robin is under fog: no link a keyboard can reach, one card in the band.
    expect(
      screen.queryByRole('link', { name: /Nico Robin/u }),
    ).not.toBeInTheDocument()
    expect(fogBand()).toHaveTextContent('1 under fog')
    // The covered name is not in the DOM at all, only its episode is.
    expect(within(fogBand()).queryByText('Nico Robin')).not.toBeInTheDocument()
    expect(within(fogBand()).getByText('Spoiler')).toBeInTheDocument()
    expect(fogBand().querySelectorAll('svg svg')).toHaveLength(0)
    expect(within(fogBand()).getByText('Episode 130')).toBeVisible()
  })

  it('filters the open characters as the reader types, and marks the match', async () => {
    const user = userEvent.setup()
    renderWithProviders(<CharacterGrid entries={entries} progress={10} />, {
      progress: 10,
    })

    await user.type(screen.getByRole('searchbox'), 'nam')

    expect(screen.getByRole('link', { name: /Nami/u })).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /Luffy/u }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('Nam').tagName).toBe('MARK')
  })

  it('never lets the fog answer a search', async () => {
    const user = userEvent.setup()
    renderWithProviders(<CharacterGrid entries={entries} progress={10} />, {
      progress: 10,
    })

    await user.type(screen.getByRole('searchbox'), 'robin')

    // The covered card is still there and unchanged; the open results are
    // empty, and the page says so in the reader's words.
    expect(within(fogBand()).queryByText('Nico Robin')).not.toBeInTheDocument()
    expect(fogBand()).toHaveTextContent('1 under fog')
    expect(
      await screen.findByText('No open character is called “robin”.'),
    ).toBeInTheDocument()
  })

  it('announces the count once the typing has settled', async () => {
    const user = userEvent.setup()
    renderWithProviders(<CharacterGrid entries={entries} progress={10} />, {
      progress: 10,
    })

    await user.type(screen.getByRole('searchbox'), 'na')
    // Not yet: the announcement waits 250ms after the last keystroke, so a
    // screen reader hears one count and not one per letter.
    expect(screen.getByText('2 of 2 open characters shown')).toBeVisible()

    expect(
      await screen.findByText('1 of 2 open characters shown'),
    ).toBeVisible()
  })

  it('clears the search from the button beside the field', async () => {
    const user = userEvent.setup()
    renderWithProviders(<CharacterGrid entries={entries} progress={10} />, {
      progress: 10,
    })

    const field = screen.getByRole('searchbox')
    // Hidden until there is something to clear, but its slot is reserved.
    expect(
      screen.queryByRole('button', { name: 'Clear the search' }),
    ).not.toBeInTheDocument()
    await user.type(field, 'nami')
    await user.click(screen.getByRole('button', { name: 'Clear the search' }))

    expect(field).toHaveValue('')
    expect(screen.getByRole('link', { name: /Luffy/u })).toBeInTheDocument()
  })

  it('says so when nothing is under fog', () => {
    renderWithProviders(<CharacterGrid entries={entries} progress={1200} />, {
      progress: 1200,
    })

    expect(
      screen.getByText('Nothing is under fog. Every character is open to you.'),
    ).toBeInTheDocument()
  })

  it('speaks the active locale', () => {
    renderWithProviders(<CharacterGrid entries={entries} progress={null} />, {
      locale: 'it',
    })

    expect(screen.getByLabelText('Trova un personaggio')).toBeInTheDocument()
    expect(screen.getByText('3 nella nebbia')).toBeInTheDocument()
  })
})
