import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '~/test/providers'

import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('closes with a colophon, not a sitemap', () => {
    renderWithProviders(<SiteFooter />)

    expect(
      screen.getByText(
        'A One Piece wiki that hides what comes after your bookmark.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Your bookmark is saved in a cookie on this device.',
    )
    expect(screen.queryAllByRole('link')).toHaveLength(0)
  })

  it('follows the active locale', () => {
    renderWithProviders(<SiteFooter />, { locale: 'it' })

    expect(
      screen.getByText(
        'Una wiki di One Piece che nasconde quello che viene dopo il tuo segnalibro.',
      ),
    ).toBeInTheDocument()
  })
})
