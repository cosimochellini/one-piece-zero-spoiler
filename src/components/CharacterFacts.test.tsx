import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { facts } from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'

import { CharacterFacts } from './CharacterFacts'

/**
 * The rows, the labels and the digit grouping. Which fact the reader has
 * reached is decided on the server now, and is asserted there:
 * `src/server/archive/facts.test.ts`.
 */
describe('CharacterFacts', () => {
  it('shows a row for each fact it is given, and none for the rest', () => {
    renderWithProviders(
      <CharacterFacts facts={facts({ affiliation: 'Straw Hat Pirates' })} />,
    )

    expect(screen.getByText('Affiliation')).toBeInTheDocument()
    expect(screen.getByText('Straw Hat Pirates')).toBeInTheDocument()
    // A fact with no value is not a row: an empty "Bounty" line would say
    // that a bounty is coming, which is itself a spoiler.
    expect(screen.queryByText('Origin')).not.toBeInTheDocument()
    expect(screen.queryByText('Epithet')).not.toBeInTheDocument()
    expect(screen.queryByText('Bounty')).not.toBeInTheDocument()
    expect(screen.queryByText(/Berry/u)).not.toBeInTheDocument()
  })

  it('groups a bounty’s digits the English way in English', () => {
    renderWithProviders(
      <CharacterFacts facts={facts({ bounty: 30_000_000 })} />,
    )

    expect(screen.getByText('30,000,000 Berry')).toBeInTheDocument()
  })

  it('groups them the Italian way in Italian', () => {
    renderWithProviders(
      <CharacterFacts
        facts={facts({ bounty: 100_000_000, epithet: 'Cappello di Paglia' })}
      />,
      { locale: 'it' },
    )

    expect(screen.getByText('Taglia')).toBeInTheDocument()
    expect(screen.getByText('100.000.000 Berry')).toBeInTheDocument()
    expect(screen.getByText('Cappello di Paglia')).toBeInTheDocument()
  })

  it('shows the note and no fact to a reader who counts in chapters', () => {
    renderWithProviders(<CharacterFacts facts={{ mode: 'chapterNote' }} />)

    expect(screen.getByText(/count in anime episodes/u)).toBeInTheDocument()
    expect(screen.queryByText(/Berry/u)).not.toBeInTheDocument()
    expect(screen.queryByText('Affiliation')).not.toBeInTheDocument()
  })

  it('renders nothing at all when the reader has reached no fact', () => {
    const { container } = renderWithProviders(
      <CharacterFacts facts={facts()} />,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
