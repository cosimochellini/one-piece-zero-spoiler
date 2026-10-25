import { screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_SERIES, ONE_PIECE_SERIES } from '~/lib/progress/series'
import { dismissWelcome, markWelcome } from '~/lib/progress/welcome'
import { renderUnderSeries } from '~/test/providers'

import { HomeWelcome } from './HomeWelcome'

describe('HomeWelcome', () => {
  afterEach(() => {
    dismissWelcome()
  })

  it.each([
    {
      series: ONE_PIECE_SERIES,
      pages: ['characters', 'places', 'fruits', 'filler'],
    },
    { series: HUNTER_X_HUNTER_SERIES, pages: ['characters', 'places'] },
  ])(
    'points only to the pages $series.slug declares',
    async ({ series, pages }) => {
      markWelcome()
      await renderUnderSeries(<HomeWelcome />, {
        path: `/${series.slug}/en`,
        series,
      })

      expect(
        screen.getAllByRole('link').map((link) => link.getAttribute('href')),
      ).toStrictEqual(pages.map((page) => `/${series.slug}/en/${page}`))
    },
  )
})
