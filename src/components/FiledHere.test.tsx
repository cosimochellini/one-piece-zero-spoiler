import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { RecordView } from '~/lib/view/records'
import { at, coveredSlot, openSlot, peekPending, record } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { FiledHere } from './FiledHere'

describe('FiledHere', () => {
  it('files each record behind its own fog', () => {
    renderWithProviders(
      <FiledHere
        filed={[
          openSlot(record({ id: 'sanji', name: 'Sanji', ...at(20) })),
          coveredSlot<RecordView>({ ...at(24) }),
        ]}
        peekRecord={peekPending()}
        title="Found here"
      />,
      { bookmark: ep(20) },
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'Found here' }),
    ).toBeVisible()
    expect(screen.getByRole('link', { name: 'Sanji' })).toBeVisible()
    expect(screen.getByText('Episode 24')).toBeVisible()
  })

  it('draws no heading over an empty list', () => {
    const { container } = renderWithProviders(
      <FiledHere
        filed={[]}
        peekRecord={peekPending()}
        title="Found here"
      />,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
