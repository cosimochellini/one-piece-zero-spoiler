import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { FillerPageView } from '~/lib/view/filler'
import { peekPending } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { FillerGuide } from './FillerGuide'

const page: FillerPageView = {
  aired: 1168,
  countdown: {
    cells: [{ episode: 52, slot: null }],
    here: 52,
    inRun: null,
    marks: [],
    next: { first: 54, last: 60, distance: 2 },
  },
  groups: [],
  marks: [{ episode: 54, kind: 'filler' }],
  skipGroups: [],
  unnumbered: 55,
}

describe('FillerGuide', () => {
  it('leads with the countdown for an episode reader', () => {
    renderWithProviders(
      <FillerGuide
        page={page}
        peek={peekPending()}
      />,
      { bookmark: ep(52) },
    )

    expect(
      screen.getByRole('heading', {
        name: 'The next filler is 2 episodes away.',
      }),
    ).toBeVisible()
    expect(screen.queryByText(/not set a bookmark/u)).not.toBeInTheDocument()
    expect(screen.getByText('Your bookmark')).toBeInTheDocument()
  })

  it('asks for a bookmark, and draws no countdown, without one', () => {
    renderWithProviders(
      <FillerGuide
        page={{ ...page, countdown: null }}
        peek={peekPending()}
      />,
    )

    expect(screen.getByText(/not set a bookmark/u)).toBeVisible()
    expect(
      screen.queryByRole('heading', { name: /next filler/u }),
    ).not.toBeInTheDocument()
    expect(screen.queryByText('Your bookmark')).not.toBeInTheDocument()
  })

  it('leaves the bookmark out of the legend for a chapter reader', () => {
    renderWithProviders(
      <FillerGuide
        page={{ ...page, countdown: null }}
        peek={peekPending()}
      />,
      { bookmark: { mode: 'chapter', chapter: 400 } },
    )

    expect(screen.queryByText('Your bookmark')).not.toBeInTheDocument()
    expect(screen.queryByText(/not set a bookmark/u)).not.toBeInTheDocument()
  })
})
