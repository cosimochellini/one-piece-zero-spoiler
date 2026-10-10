import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import type { Countdown, FillerRowView } from '~/lib/view/filler'
import { at, peekPending, peekTo } from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { FillerCountdown } from './FillerCountdown'

const opened: FillerRowView = {
  episode: 54,
  ...at(54),
  handle: '0',
  kind: 'filler',
  title: 'Precursor to a new adventure',
  summary: 'A girl escapes a Marine ship and hides on the Going Merry.',
}

/** The row from 52: two canon cells, then 54 open and 55 under fog. */
function countdown(change: Partial<Countdown> = {}): Countdown {
  return {
    cells: [
      { episode: 52, slot: null },
      { episode: 53, slot: null },
      { episode: 54, slot: { open: true, record: opened } },
      {
        episode: 55,
        slot: {
          open: false,
          covered: { episode: 55, ...at(55), handle: '1', kind: 'filler' },
        },
      },
    ],
    here: 52,
    inRun: null,
    marks: [],
    next: { first: 54, last: 60, distance: 2 },
    ...change,
  }
}

/** Draws the countdown for a reader at episode 52. */
function draw(value: Countdown): void {
  renderWithProviders(
    <FillerCountdown
      aired={1168}
      countdown={value}
      mode="episode"
      peek={peekPending()}
    />,
    { bookmark: ep(52) },
  )
}

describe('FillerCountdown', () => {
  it('says how far the next filler is, and which run it is', () => {
    draw(countdown())

    expect(
      screen.getByRole('heading', {
        name: 'The next filler is 2 episodes away.',
      }),
    ).toBeVisible()
    expect(screen.getByText('Next run to skip: EP 54–60.')).toBeVisible()
    expect(
      screen.getByRole('img', { name: 'EP 52. your bookmark' }),
    ).toBeVisible()
  })

  it('says the next episode, a run the reader is in, and nothing ahead', () => {
    draw(countdown({ next: { first: 53, last: 60, distance: 1 } }))

    expect(screen.getByText('The next episode is filler.')).toBeVisible()
  })

  it('says where the canon picks up inside a run', () => {
    draw(countdown({ inRun: { resume: 61, distance: 9 } }))

    expect(
      screen.getByText(
        'You are in a filler run. The canon picks up again at episode 61, 9 episodes away.',
      ),
    ).toBeVisible()
    expect(screen.queryByText(/Next run to skip/u)).not.toBeInTheDocument()
  })

  it('says when there is nothing ahead', () => {
    draw(countdown({ next: null }))

    expect(
      screen.getByText(
        'There is no filler ahead, up to episode 1168, the last one aired.',
      ),
    ).toBeVisible()
  })

  it('opens an entry under the row, and the veil for one under fog', async () => {
    const user = userEvent.setup()
    draw(countdown())

    await user.click(screen.getByRole('button', { name: 'EP 54. Filler' }))

    expect(screen.getByText(opened.title)).toBeVisible()

    await user.click(screen.getByRole('button', { name: 'EP 55. Filler' }))

    expect(screen.queryByText(opened.title)).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Show anyway/u })).toBeVisible()
    expect(
      screen.getByRole('button', { name: 'EP 55. Filler' }),
    ).toHaveAttribute('aria-expanded', 'true')
  })

  it('does not carry a lifted veil over to the next entry it shows', async () => {
    const user = userEvent.setup()
    const lifted: FillerRowView = {
      ...opened,
      episode: 55,
      handle: '1',
      title: 'Lifted',
    }
    const value = countdown()
    value.cells.push({
      episode: 56,
      slot: {
        open: false,
        covered: { episode: 56, ...at(56), handle: '2', kind: 'filler' },
      },
    })
    renderWithProviders(
      <FillerCountdown
        aired={1168}
        countdown={value}
        mode="episode"
        peek={peekTo(lifted)}
      />,
      { bookmark: ep(52) },
    )

    await user.click(screen.getByRole('button', { name: 'EP 55. Filler' }))
    await user.click(screen.getByRole('button', { name: /Show anyway/u }))
    await settle()

    expect(screen.getByText('Lifted')).toBeVisible()

    await user.click(screen.getByRole('button', { name: 'EP 56. Filler' }))

    expect(screen.queryByText('Lifted')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Show anyway/u })).toBeVisible()
  })
})
