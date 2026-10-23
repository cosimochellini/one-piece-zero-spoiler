import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import { EPISODE_CEILING } from '~/lib/progress/episode'
import { creditsPage } from '~/server/archive/credits.server'
import { ep, renderWithProviders } from '~/test/providers'

import { SiteFooter } from './SiteFooter'
import { SourceCredits } from './SourceCredits'

const OFFICIAL = 'https://one-piece.com/anime/o6217/index.html'

describe('SourceCredits', () => {
  it.each([
    ['en', 'Sources and licenses'],
    ['it', 'Fonti e licenze'],
  ] as const)(
    'has public notices and a localized footer link in %s',
    (locale, title) => {
      renderWithProviders(
        <>
          <SiteFooter />
          <SourceCredits credits={creditsPage(null, locale)} />
        </>,
        { locale },
      )

      expect(
        screen.getByRole('heading', { level: 1, name: title }),
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: title })).toHaveAttribute(
        'href',
        `/${locale}/sources`,
      )
      expect(screen.getByRole('main')).toHaveAttribute('id', 'content')
      expect(screen.getByRole('main')).toHaveTextContent(
        'CC BY-SA 3.0 Unported',
      )
      expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(0)
      expect(
        document.querySelector('a[href*="oldid="]'),
      ).not.toBeInTheDocument()
      expect(
        document.querySelector(`a[href="${CSS.escape(OFFICIAL)}"]`),
      ).not.toBeInTheDocument()
    },
  )

  it.each(LOCALES)(
    'renders article attribution and the official replacement separately in %s',
    (locale) => {
      const credits = creditsPage(ep(EPISODE_CEILING), locale)
      renderWithProviders(<SourceCredits credits={credits} />, { locale })

      expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(17)
      expect(document.querySelectorAll('a[href*="oldid="]')).toHaveLength(32)
      expect(
        document.querySelector(`a[href="${CSS.escape(OFFICIAL)}"]`),
      ).toBeInTheDocument()

      for (const { sources } of credits) {
        for (const { url } of sources) {
          expect(
            document.querySelector(`a[href="${CSS.escape(url)}"]`),
          ).toBeInTheDocument()
        }
      }

      expect(screen.getByRole('main')).not.toHaveTextContent('Kurozumi')
    },
  )
})
