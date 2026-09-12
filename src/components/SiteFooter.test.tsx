import { screen } from '@testing-library/react'

import { renderWithProviders } from '~/test/providers'

import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('closes with a colophon, not a sitemap', () => {
    renderWithProviders(<SiteFooter />)

    expect(
      screen.getByText('Nobody should learn the ending before they get there.'),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Thresholds count anime episodes or manga chapters, whichever you pick.',
    )
    expect(screen.queryAllByRole('link')).toHaveLength(0)
  })

  it('follows the active locale', () => {
    renderWithProviders(<SiteFooter />, { locale: 'it' })

    expect(
      screen.getByText(
        'Nessuno dovrebbe sapere come va a finire prima di arrivarci.',
      ),
    ).toBeInTheDocument()
  })
})
