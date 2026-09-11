import { screen } from '@testing-library/react'

import { renderWithProviders } from '~/test/providers'

import { RouteLegend } from './RouteLegend'

describe('RouteLegend', () => {
  it('pairs each figure with what it counts', () => {
    renderWithProviders(<RouteLegend open={4} covered={6} filed={10} />)

    expect(screen.getByText('open to you')).toBeVisible()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('follows the active locale', () => {
    renderWithProviders(<RouteLegend open={0} covered={10} filed={10} />, {
      locale: 'it',
    })

    expect(screen.getByText('nella nebbia')).toBeInTheDocument()
    expect(screen.getByText('archiviate finora')).toBeInTheDocument()
  })
})
