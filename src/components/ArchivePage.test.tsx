import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '~/test/providers'
import { settleDelay } from '~/test/settle'

import { ArchivePage } from './ArchivePage'

describe('ArchivePage', () => {
  it('names the page and says how much is in it', () => {
    renderWithProviders(
      <ArchivePage
        count="4 of 326 open to you"
        title="Signal book"
      >
        <p>the listing</p>
      </ArchivePage>,
    )

    expect(
      screen.getByRole('heading', { level: 1, name: 'Signal book' }),
    ).toBeVisible()
    expect(screen.getByText('4 of 326 open to you')).toBeVisible()
    expect(screen.getByText('the listing')).toBeVisible()
  })

  it('shows its heading at once and settles the listing under it', () => {
    renderWithProviders(
      <ArchivePage
        count="5 ports"
        title="Ship's log"
      >
        <p>the log</p>
      </ArchivePage>,
    )

    const head = screen.getByRole('heading', { level: 1 }).parentElement

    expect(settleDelay(head)).toBeNull()
    expect(settleDelay(screen.getByText('the log').parentElement)).toBe('0ms')
  })

  it('is the skip link target', () => {
    const view = renderWithProviders(
      <ArchivePage
        count="5 ports"
        title="Ship's log"
      >
        <p>the log</p>
      </ArchivePage>,
    )

    const main = view.container.querySelector('main')

    expect(main).toHaveAttribute('id', 'content')
  })

  it('leaves the count out when it is not given', () => {
    renderWithProviders(
      <ArchivePage title="Devil fruits">
        <p>the wall</p>
      </ArchivePage>,
    )

    const head = screen.getByRole('heading', { level: 1 }).parentElement

    expect(head?.children).toHaveLength(1)
  })
})
