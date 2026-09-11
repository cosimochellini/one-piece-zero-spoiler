import { screen } from '@testing-library/react'

import { renderWithProviders } from '~/test/providers'

import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('closes with a sentence, not a sitemap', () => {
    renderWithProviders(<SiteFooter />)

    expect(
      screen.getByText('Nobody should learn the ending before they get there.'),
    ).toBeInTheDocument()
    expect(screen.queryAllByRole('link')).toHaveLength(0)
  })

  it('follows the active locale', () => {
    renderWithProviders(<SiteFooter />, { locale: 'it' })

    expect(
      screen.getByText('Fatto per chi preferisce la strada lunga.'),
    ).toBeInTheDocument()
  })
})
