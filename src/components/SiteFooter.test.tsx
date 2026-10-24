import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '~/test/providers'

import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it.each([
    {
      locale: 'en',
      lead: 'A One Piece wiki that hides what comes after your bookmark.',
      unofficial:
        'Unofficial fan project, not endorsed by the One Piece rights holders.',
      legal: 'Legal notice',
    },
    {
      locale: 'it',
      lead: 'Una wiki di One Piece che nasconde quello che viene dopo il tuo segnalibro.',
      unofficial:
        'Progetto amatoriale non ufficiale, non approvato dai titolari dei diritti di One Piece.',
      legal: 'Note legali',
    },
  ] as const)(
    'closes with a colophon and one legal link in $locale',
    ({ locale, lead, unofficial, legal }) => {
      renderWithProviders(<SiteFooter />, { locale })

      expect(screen.getByText(lead)).toBeInTheDocument()
      expect(screen.getByRole('contentinfo')).toHaveTextContent(unofficial)
      expect(screen.getAllByRole('link')).toHaveLength(1)
      expect(screen.getByRole('link', { name: legal })).toHaveAttribute(
        'href',
        `/${locale}/legal`,
      )
    },
  )
})
