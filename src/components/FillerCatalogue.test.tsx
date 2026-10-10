import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import type { FillerGroup, FillerRowView, FillerSlot } from '~/lib/view/filler'
import { at, peekPending } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { FillerCatalogue } from './FillerCatalogue'
import { FillerRanges } from './FillerRanges'
import { FillerStrip } from './FillerStrip'

const apis: FillerRowView = {
  episode: 54,
  ...at(54),
  handle: '0',
  kind: 'filler',
  title: 'Precursor to a new adventure',
  summary: 'A girl escapes a Marine ship and hides on the Going Merry.',
}

const film: FillerRowView = {
  after: 60,
  ...at(60),
  handle: '2',
  kind: 'film',
  released: '2001-03-03',
  title: 'Clockwork Island Adventure',
  summary: 'The crew lose their ship to a band of thieves.',
}

/** A row under fog at an episode. */
function covered(episode: number, handle: string): FillerSlot {
  return {
    open: false,
    covered: { episode, ...at(episode), handle, kind: 'filler' },
  }
}

const groups: FillerGroup[] = [
  {
    ...at(45),
    current: true,
    name: 'Loguetown',
    runs: [
      {
        name: 'Warship Island',
        rows: [
          { open: true, record: apis },
          {
            open: false,
            covered: { episode: 61, ...at(61), handle: '1', kind: 'mixed' },
          },
        ],
      },
      { name: undefined, rows: [{ open: true, record: film }] },
    ],
  },
  {
    ...at(144),
    current: false,
    name: null,
    runs: [{ name: undefined, rows: [covered(196, '3'), covered(197, '4')] }],
  },
]

describe('FillerCatalogue', () => {
  it('prints an open row, and a covered one by its number and kind only', () => {
    renderWithProviders(
      <FillerCatalogue
        groups={groups}
        mode="episode"
        peek={peekPending()}
      />,
      { bookmark: ep(60) },
    )

    expect(screen.getByText(apis.title)).toBeInTheDocument()
    expect(screen.getByText('Warship Island')).toBeInTheDocument()
    expect(screen.getByText('EP 61')).toBeInTheDocument()
    expect(screen.getByText('Mixed')).toBeInTheDocument()
    expect(screen.getByText('After EP 60')).toBeInTheDocument()
    expect(screen.getByText('· 2001', { exact: false })).toBeInTheDocument()
    expect(document.querySelector('#ep-54')).not.toBeNull()
  })

  it('opens the reader’s saga only, and folds covered rows in a row', () => {
    renderWithProviders(
      <FillerCatalogue
        groups={groups}
        mode="episode"
        peek={peekPending()}
      />,
      { bookmark: ep(60) },
    )
    const sagas = [...document.querySelectorAll(':scope div > details')]

    expect(sagas.map((saga) => saga.hasAttribute('open'))).toStrictEqual([
      true,
      false,
    ])
    expect(screen.getByText('3 entries')).toBeInTheDocument()
    expect(screen.getByText('2 entries under fog')).toBeInTheDocument()
    expect(screen.getByText('An arc under fog')).toBeInTheDocument()
  })
})

describe('FillerRanges', () => {
  it('says a range in the reader’s unit, under its saga', () => {
    renderWithProviders(
      <FillerRanges
        groups={[
          { ...at(45), name: 'Loguetown', ranges: [{ first: 54, last: 60 }] },
          { ...at(92), name: null, ranges: [{ first: 102, last: 102 }] },
        ]}
        mode="season"
      />,
    )

    // Episode 54 is S01E54; 102 is S04E10.
    expect(screen.getByRole('heading', { name: 'Loguetown' })).toBeVisible()
    expect(screen.getByText('S01E54–S01E60')).toBeInTheDocument()
    expect(screen.getByText('7 episodes')).toBeInTheDocument()
    expect(screen.getByText('1 episode')).toBeInTheDocument()
    expect(screen.getByText('An arc under fog')).toBeInTheDocument()
    expect(screen.getByText('S04E10').closest('a')).toHaveAttribute(
      'href',
      '#ep-102',
    )
  })

  it('opens a closed saga before its link lands on the row', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <>
        <FillerRanges
          groups={[
            { ...at(45), name: 'Loguetown', ranges: [{ first: 54, last: 54 }] },
          ]}
          mode="episode"
        />
        <details data-testid="saga">
          <summary>Loguetown</summary>
          <p id="ep-54">row</p>
        </details>
      </>,
    )

    await user.click(screen.getByRole('link', { name: /EP 54/u }))

    expect(screen.getByTestId('saga')).toHaveAttribute('open')
  })
})

describe('FillerStrip', () => {
  it('names what it draws', () => {
    renderWithProviders(
      <FillerStrip
        aired={250}
        here={null}
        marks={[
          { episode: 54, kind: 'filler' },
          { episode: 61, kind: 'mixed' },
          { episode: 102, kind: 'filler' },
        ]}
      />,
    )

    expect(
      screen.getByRole('img', {
        name: 'Episodes 1 to 250: 2 filler, 1 mixed and 0 recaps.',
      }),
    ).toBeInTheDocument()
    expect(document.querySelectorAll('rect')).toHaveLength(250)
  })
})
