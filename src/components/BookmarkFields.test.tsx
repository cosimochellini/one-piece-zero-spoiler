import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { type ReactElement, useMemo } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { BookmarkContext, useBookmark } from '~/lib/progress/BookmarkContext'
import { type BookmarkSeries, ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import { renderWithProviders } from '~/test/providers'

import { BookmarkForm } from './BookmarkForm'

const SERIES: BookmarkSeries = {
  ...ONE_PIECE_BOOKMARK,
  slug: 'test-series',
  cookie: 'zs_test-series',
  trialCookie: 'zs_test-series_try',
  episodeCeiling: 26,
  chapterCeiling: 43,
  seasons: [{ number: 7, first: 11, last: 26 }],
}

const done = vi.fn<() => void>()

function SeriesForm({ series }: { series: BookmarkSeries }): ReactElement {
  const bookmark = useBookmark()
  const value = useMemo(() => ({ ...bookmark, series }), [bookmark, series])

  return (
    <BookmarkContext value={value}>
      <BookmarkForm onDone={done} />
    </BookmarkContext>
  )
}

describe('the bookmark form for a series', () => {
  it('uses its episode and chapter ranges for hints, validation and stepping', async () => {
    const user = userEvent.setup()
    renderWithProviders(<SeriesForm series={SERIES} />)

    const episode = screen.getByLabelText('Last episode you watched')
    await user.type(episode, '26')

    expect(screen.getByText('From 1 to 26.')).toBeVisible()
    expect(screen.getByRole('button', { name: 'One more' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled()

    await user.type(episode, '0')
    await user.tab()

    expect(screen.getByRole('alert')).toHaveTextContent('1 to 26')
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled()

    await user.click(screen.getByRole('radio', { name: 'Chapter' }))
    await user.type(screen.getByLabelText('Last chapter you read'), '44')
    await user.tab()

    expect(screen.getByRole('alert')).toHaveTextContent('1 to 43')
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled()
  })

  it('offers only its seasons and validates against their lengths', async () => {
    const user = userEvent.setup()
    renderWithProviders(<SeriesForm series={SERIES} />)

    await user.click(screen.getByRole('radio', { name: 'Season' }))
    const season = screen.getByRole('combobox', { name: 'Season' })

    expect(screen.getAllByRole('option')).toHaveLength(2)

    await user.selectOptions(season, '7')
    await user.type(screen.getByLabelText('Episode in that season'), '16')

    expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled()
    expect(screen.getByRole('button', { name: 'One more' })).toBeDisabled()

    await user.type(screen.getByLabelText('Episode in that season'), '0')

    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled()
  })

  it('leaves the season choice out when the series has no seasons', async () => {
    const user = userEvent.setup()
    renderWithProviders(<SeriesForm series={{ ...SERIES, seasons: [] }} />)

    expect(
      screen.queryByRole('radio', { name: 'Season' }),
    ).not.toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(2)

    await user.click(screen.getByRole('radio', { name: 'Chapter' }))

    expect(screen.getByLabelText('Last chapter you read')).toBeEnabled()
  })
})
