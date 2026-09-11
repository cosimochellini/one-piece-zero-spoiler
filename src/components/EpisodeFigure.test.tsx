import { screen } from '@testing-library/react'

import { renderWithProviders } from '~/test/providers'

import { EpisodeFigure } from './EpisodeFigure'

describe('EpisodeFigure', () => {
  it('echoes the bookmark back as the page figure', () => {
    renderWithProviders(<EpisodeFigure />, { progress: 1089 })

    expect(screen.getByText('1089')).toBeInTheDocument()
    expect(screen.getByText('episodes in')).toBeInTheDocument()
  })

  it('shows a dash, not a zero, when no bookmark is set', () => {
    // A zero would be a claim that the reader has watched nothing. The hole is
    // honest; the number would not be.
    renderWithProviders(<EpisodeFigure />)

    expect(screen.getByText('—')).toBeInTheDocument()
    expect(screen.queryByText('0')).not.toBeInTheDocument()
    expect(screen.getByText('no episode set')).toBeInTheDocument()
  })
})
