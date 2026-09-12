import { screen } from '@testing-library/react'

import type { CharacterDossier } from '~/data/types'
import { renderWithProviders } from '~/test/providers'

import { CharacterFacts } from './CharacterFacts'

const dossier: CharacterDossier = {
  role: { it: 'Capitano', en: 'Captain' },
  log: { it: 'x', en: 'x' },
  affiliation: [
    { episode: 1, value: { it: 'Nessuna ciurma', en: 'No crew yet' } },
    {
      episode: 3,
      value: { it: 'Pirati di Cappello di Paglia', en: 'Straw Hat Pirates' },
    },
  ],
  origin: [
    { episode: 4, value: { it: 'Villaggio Fuschia', en: 'Foosha Village' } },
  ],
  epithet: [
    { episode: 45, value: { it: 'Cappello di Paglia', en: 'Straw Hat' } },
  ],
  bounty: [
    { episode: 45, value: 30_000_000 },
    { episode: 130, value: 100_000_000 },
  ],
}

describe('CharacterFacts', () => {
  it('shows each fact as the reader knows it, and no fact not yet learned', () => {
    renderWithProviders(<CharacterFacts dossier={dossier} progress={3} />, {
      progress: 3,
    })

    expect(screen.getByText('Affiliation')).toBeInTheDocument()
    expect(screen.getByText('Straw Hat Pirates')).toBeInTheDocument()
    expect(screen.queryByText('No crew yet')).not.toBeInTheDocument()
    // Origin (4), epithet (45) and bounty (45) are still ahead of the reader:
    // not a row, not a label, not in the DOM.
    expect(screen.queryByText('Origin')).not.toBeInTheDocument()
    expect(screen.queryByText('Epithet')).not.toBeInTheDocument()
    expect(screen.queryByText('Bounty')).not.toBeInTheDocument()
    expect(screen.queryByText(/Berry/u)).not.toBeInTheDocument()
  })

  it('shows the latest bounty reached and never a later one', () => {
    renderWithProviders(<CharacterFacts dossier={dossier} progress={100} />, {
      progress: 100,
    })

    expect(screen.getByText('30,000,000 Berry')).toBeInTheDocument()
    expect(screen.queryByText(/100,000,000/u)).not.toBeInTheDocument()
  })

  it('groups digits the Italian way in Italian', () => {
    renderWithProviders(<CharacterFacts dossier={dossier} progress={130} />, {
      progress: 130,
      locale: 'it',
    })

    expect(screen.getByText('Taglia')).toBeInTheDocument()
    expect(screen.getByText('100.000.000 Berry')).toBeInTheDocument()
    expect(screen.getByText('Cappello di Paglia')).toBeInTheDocument()
  })

  it('renders nothing at all when the reader has reached no fact', () => {
    const { container } = renderWithProviders(
      <CharacterFacts dossier={dossier} progress={null} />,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
