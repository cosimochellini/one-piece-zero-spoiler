import { render, screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { describe, expect, expectTypeOf, it } from 'vitest'

import { HUNTER_X_HUNTER_SERIES, ONE_PIECE_SERIES } from '~/lib/progress/series'
import { copyOf } from '~/server/copy.server'

import { useSeriesT, useT } from './LocaleContext'
import { LocaleProvider } from './LocaleProvider'
import type { CommonKey, SeriesCopies, TranslationKey } from './types'

/** A part of a Hunter x Hunter page. */
function HunterPage(): ReactElement {
  const t = useSeriesT('hunter-x-hunter')

  return <p>{t('onboarding.tailTitle')}</p>
}

/** A part of a One Piece page: its devil fruits. */
function FruitsTitle(): ReactElement {
  const t = useSeriesT('one-piece')

  return <h1>{t('fruits.title')}</h1>
}

/** The shared keys and the common ones, under whichever series. */
function Lede(): ReactElement {
  const t = useSeriesT()

  return <p>{t('onboarding.lede')}</p>
}

/** Never rendered: what `npm run typecheck` must refuse (#791). */
function OnePieceKeyUnderHunter(): string {
  const t = useSeriesT('hunter-x-hunter')
  // @ts-expect-error -- a One Piece key under Hunter x Hunter
  return t('fruits.title')
}

/** Never rendered: a common key needs a page of a series. */
function CommonKeyWithoutSeries(): string {
  const t = useT()
  // @ts-expect-error -- every series words it for itself; no page without one
  return t('site.description')
}

/** Never rendered: a series' own key is not a shared one. */
function SeriesKeyAsShared(): string {
  const t = useT()
  // @ts-expect-error -- One Piece's key with the shared translate
  return t('faction.marines')
}

describe('useSeriesT', () => {
  it('reads a key of its own series under that series', () => {
    render(
      <LocaleProvider
        copy={copyOf(ONE_PIECE_SERIES, 'en')}
        locale="en"
      >
        <FruitsTitle />
        <Lede />
      </LocaleProvider>,
    )

    expect(
      screen.getByRole('heading', { name: 'Devil fruits' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/through East Blue/u)).toBeInTheDocument()
  })

  it('throws for a key of another series under this one', () => {
    expect(() =>
      render(
        <LocaleProvider
          copy={copyOf(HUNTER_X_HUNTER_SERIES, 'en')}
          locale="en"
        >
          <FruitsTitle />
        </LocaleProvider>,
      ),
    ).toThrow('fruits.title')
  })

  it('reads each series’ common keys in its own words', () => {
    render(
      <LocaleProvider
        copy={copyOf(HUNTER_X_HUNTER_SERIES, 'it')}
        locale="it"
      >
        <HunterPage />
        <Lede />
      </LocaleProvider>,
    )

    expect(screen.getByText('Dopo l’Esame Hunter')).toBeInTheDocument()
    expect(screen.getByText(/lungo l’Esame Hunter/u)).toBeInTheDocument()
  })

  it('fails typecheck for a key of another series', () => {
    expect(OnePieceKeyUnderHunter).toBeTypeOf('function')
    expect(SeriesKeyAsShared).toBeTypeOf('function')
    expect(CommonKeyWithoutSeries).toBeTypeOf('function')

    expectTypeOf<'fruits.title'>().not.toExtend<
      TranslationKey<'hunter-x-hunter'>
    >()
    expectTypeOf<'fruits.title'>().toExtend<TranslationKey<'one-piece'>>()
  })

  it('keeps the series’ own keys apart, but the common ones', () => {
    expectTypeOf<
      Exclude<
        keyof SeriesCopies['hunter-x-hunter'] & keyof SeriesCopies['one-piece'],
        CommonKey
      >
    >().toBeNever()
  })
})
