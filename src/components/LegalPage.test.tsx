import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { archiveOf } from '~/data/series'
import { type Locale, LOCALES } from '~/i18n/locales'
import {
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_BOOKMARK,
  ONE_PIECE_SERIES,
} from '~/lib/progress/series'
import type { SeriesCredits, SourceCredit } from '~/lib/view/credits'
import { creditsPage } from '~/server/archive/credits.server'
import { readerFor } from '~/server/archive/reader.server'
import { copyOf } from '~/server/copy.server'
import { ep, renderWithProviders } from '~/test/providers'

import { LegalPage } from './LegalPage'

const archive = await archiveOf('one-piece')

const OFFICIAL = 'https://one-piece.com/anime/o6217/index.html'

/** One Piece alone, as the legal page is sent while it is the one open. */
function onePiece(locale: Locale, credits: SourceCredit[]): SeriesCredits[] {
  return [{ copy: copyOf(ONE_PIECE_SERIES, locale), credits }]
}

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
        <LegalPage
          series={onePiece(
            locale,
            creditsPage(readerFor(archive, null, locale)),
          )}
        />,
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
        readerFor(archive, ep(ONE_PIECE_BOOKMARK.episodeCeiling), locale),
      )
      renderWithProviders(<LegalPage series={onePiece(locale, credits)} />, {
        locale,
      })

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

  it.each(LOCALES)(
    'gives each open series its own rights line and sources in %s',
    (locale) => {
      renderWithProviders(
        <LegalPage
          series={[
            ...onePiece(locale, []),
            { copy: copyOf(HUNTER_X_HUNTER_SERIES, locale), credits: [] },
          ]}
        />,
        { locale },
      )
      const main = screen.getByRole('main')

      for (const href of [
        'https://www.toei-animation.com/copyrights/',
        'https://www.viz.com/copyrights',
        'https://onepiece.fandom.com/',
        'https://hunterxhunter.fandom.com/',
        'https://it.wikipedia.org/',
        'https://creativecommons.org/licenses/by-sa/4.0/',
      ]) {
        expect(
          document.querySelector(`a[href="${CSS.escape(href)}"]`),
        ).toBeInTheDocument()
      }

      expect(main).toHaveTextContent('Eiichiro Oda')
      expect(main).toHaveTextContent('Yoshihiro Togashi')
    },
  )

  it('names no series of its own without one', () => {
    renderWithProviders(<LegalPage series={[]} />)

    expect(screen.getByRole('main')).not.toHaveTextContent('One Piece')
  })
})
