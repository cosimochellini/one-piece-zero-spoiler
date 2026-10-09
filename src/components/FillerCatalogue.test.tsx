import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { FillerGroup, FillerRowView } from '~/lib/view/filler'
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

const groups: FillerGroup[] = [
  {
    ...at(45),
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
})

describe('FillerRanges', () => {
  it('says a range in the reader’s unit and links to its first row', () => {
    renderWithProviders(
      <FillerRanges
        mode="season"
        ranges={[
          { first: 54, last: 60 },
          { first: 102, last: 102 },
        ]}
      />,
    )

    // Episode 54 is S01E54; 102 is S04E10.
    expect(screen.getByText('S01E54–S01E60')).toBeInTheDocument()
    expect(screen.getByText('7 episodes')).toBeInTheDocument()
    expect(screen.getByText('1 episode')).toBeInTheDocument()
    expect(screen.getByText('S04E10').closest('a')).toHaveAttribute(
      'href',
      '#ep-102',
    )
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
