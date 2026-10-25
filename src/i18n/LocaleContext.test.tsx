import { render, screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { describe, expect, expectTypeOf, it } from 'vitest'

import { useThreshold } from '~/lib/progress/BookmarkContext'
import { HUNTER_X_HUNTER_SERIES, ONE_PIECE_SERIES } from '~/lib/progress/series'
import { copyOf } from '~/server/copy.server'

import { useLocale, useSeriesOnlyT, useSeriesT, useT } from './LocaleContext'
import { LocaleProvider } from './LocaleProvider'
import type { CommonKey, SeriesCopies, TranslationKey } from './types'

/** A part of a Hunter x Hunter page. */
function HunterPage(): ReactElement {
  const t = useSeriesOnlyT('hunter-x-hunter')

  return <p>{t('onboarding.tailTitle')}</p>
}

/** A part of a One Piece page: its devil fruits. */
function FruitsTitle(): ReactElement {
  const t = useSeriesOnlyT('one-piece')

  return <h1>{t('fruits.title')}</h1>
}

/** The shared keys and the common ones, under whichever series. */
function Lede(): ReactElement {
  const t = useSeriesT()

  return <p>{t('onboarding.lede')}</p>
}

/** A shared part of a page: One Piece's word, only on its pages. */
function FruitsLink(): ReactElement {
  const onePiece = useSeriesT('one-piece')

  return <p>{onePiece === undefined ? 'none' : onePiece('nav.fruits')}</p>
}

/** Never rendered: what `npm run typecheck` must refuse (#791). */
function OnePieceKeyUnderHunter(): string {
  const t = useSeriesOnlyT('hunter-x-hunter')
  // @ts-expect-error -- a One Piece key under Hunter x Hunter
  return t('fruits.title')
}

/** Never rendered: a series' translate is read only behind its check. */
function UncheckedOnePieceKey(): string {
  const t = useSeriesT('one-piece')
  // @ts-expect-error -- undefined on another series' page: branch first
  return t('fruits.title')
}

/** Never rendered: nor is a series' threshold sentence said unchecked. */
function UncheckedOnePieceThreshold(): string {
  const threshold = useThreshold('one-piece')
  // @ts-expect-error -- undefined on another series' page: branch first
  return threshold('fruit.opensAt', {
    revealedAtChapter: 1,
    revealedAtEpisode: 1,
  })
}

/** Never rendered: the context has no translate of its own to reach for. */
function KeyThroughTheContext(): unknown {
  const context = useLocale()
  // @ts-expect-error -- the context hands out no untyped translate (#791)
  return context.t
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

  it('gives a series’ translate on its own pages only', () => {
    render(
      <LocaleProvider
        copy={copyOf(HUNTER_X_HUNTER_SERIES, 'en')}
        locale="en"
      >
        <FruitsLink />
      </LocaleProvider>,
    )

    expect(screen.getByText('none')).toBeInTheDocument()
  })

  it('throws where only another series’ pages reach', () => {
    expect(() =>
      render(
        <LocaleProvider
          copy={copyOf(HUNTER_X_HUNTER_SERIES, 'en')}
          locale="en"
        >
          <FruitsTitle />
        </LocaleProvider>,
      ),
    ).toThrow('Only a page of one-piece reaches this')
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
    expect(KeyThroughTheContext).toBeTypeOf('function')
    expect(UncheckedOnePieceKey).toBeTypeOf('function')
    expect(UncheckedOnePieceThreshold).toBeTypeOf('function')

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
