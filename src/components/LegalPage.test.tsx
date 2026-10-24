import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { archiveOf } from '~/data/series'
import { LOCALES } from '~/i18n/locales'
import { EPISODE_CEILING } from '~/lib/progress/episode'
import { creditsPage } from '~/server/archive/credits.server'
import { readerFor } from '~/server/archive/reader.server'
import { ep, renderWithProviders } from '~/test/providers'

import { LegalPage } from './LegalPage'

const archive = await archiveOf('one-piece')

const OFFICIAL = 'https://one-piece.com/anime/o6217/index.html'

describe('LegalPage', () => {
  it.each([
    {
      locale: 'en',
      title: 'Legal notice',
      privacy: 'Privacy and cookies',
      sources: 'Sources and licenses',
    },
    {
      locale: 'it',
      title: 'Note legali',
      privacy: 'Privacy e cookie',
      sources: 'Fonti e licenze',
    },
  ] as const)(
    'holds every notice without a bookmark in $locale',
    ({ locale, title, privacy, sources }) => {
      renderWithProviders(
        <LegalPage credits={creditsPage(readerFor(archive, null, locale))} />,
        { locale },
      )
      const main = screen.getByRole('main')

      expect(main).toHaveAttribute('id', 'content')
      expect(
        screen.getByRole('heading', { level: 1, name: title }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { level: 2, name: privacy }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { level: 2, name: sources }),
      ).toBeInTheDocument()
      expect(
        document.querySelector(
          'a[href="https://www.toei-animation.com/copyrights/"]',
        ),
      ).toBeInTheDocument()

      for (const name of [
        'zs_one-piece',
        'opzs_lang',
        'zs_one-piece_try',
        'opzs_welcome',
      ]) {
        expect(main).toHaveTextContent(name)
      }

      expect(main).toHaveTextContent('Workers Logs')
      expect(main).toHaveTextContent('6(1)(f)')
      expect(main).toHaveTextContent('CC BY-SA 3.0 Unported')
      expect(screen.queryAllByRole('heading', { level: 4 })).toHaveLength(0)
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
      const credits = creditsPage(
        readerFor(archive, ep(EPISODE_CEILING), locale),
      )
      renderWithProviders(<LegalPage credits={credits} />, { locale })

      expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(17)
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
