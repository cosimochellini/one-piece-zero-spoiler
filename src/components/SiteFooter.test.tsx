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
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'The MIT licence covers the software and original technical documentation. It does not cover archive text, drawings, branding or third-party material. Third-party licences still apply.',
    )
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Unofficial, nonprofit fan project. Not affiliated with or endorsed by One Piece rights holders.',
    )
    expect(
      screen.getByRole('link', {
        name: 'Rights inquiries and corrections on GitHub',
      }),
    ).toHaveAttribute(
      'href',
      'https://github.com/cosimochellini/one-piece-zero-spoiler/issues/new?template=blank.md',
    )
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Keep spoilers out of the title. GitHub issues are public and require an account. Do not post confidential information.',
    )
    expect(
      screen.getByRole('link', { name: 'Official credit source' }),
    ).toHaveAttribute('href', 'https://www.toei-animation.com/copyrights/')
  })

  it('follows the active locale', () => {
    renderWithProviders(<SiteFooter />, { locale: 'it' })

    expect(
      screen.getByText(
        'Una wiki di One Piece che nasconde quello che viene dopo il tuo segnalibro.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'La licenza MIT copre il software e la documentazione tecnica originale. Non copre i testi delle voci, i disegni, il branding o i materiali di terzi. Restano applicabili le licenze di terzi.',
    )
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Progetto amatoriale non ufficiale e senza scopo di lucro.',
    )
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Non è affiliato né approvato dai titolari dei diritti di One Piece.',
    )
    expect(
      screen.getByRole('link', {
        name: 'Richieste sui diritti e correzioni su GitHub',
      }),
    ).toHaveAttribute(
      'href',
      'https://github.com/cosimochellini/one-piece-zero-spoiler/issues/new?template=blank.md',
    )
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Evita spoiler nel titolo. Le issue GitHub sono pubbliche e richiedono un account. Non inserire informazioni riservate.',
    )
  })
})
