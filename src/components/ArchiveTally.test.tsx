import { screen } from '@testing-library/react'

import { renderWithProviders } from '~/test/providers'

import { ArchiveTally } from './ArchiveTally'

/** The count sitting next to a label, read the way the page reads it. */
function countFor(label: string): string {
  const value = screen.getByText(label).nextElementSibling
  if (value === null) throw new Error(`no count beside "${label}"`)

  return value.textContent
}

describe('ArchiveTally', () => {
  it('pairs every count with the label that explains it', () => {
    renderWithProviders(<ArchiveTally open={4} covered={6} filed={10} />)

    expect(countFor('open to you')).toBe('4')
    expect(countFor('still covered')).toBe('6')
    expect(countFor('filed so far')).toBe('10')
  })

  it('shows a real zero rather than hiding the row', () => {
    // Nothing open is the correct reading for a reader who has set no episode,
    // and it has to be visible for the page to be honest about it.
    renderWithProviders(<ArchiveTally open={0} covered={10} filed={10} />)

    expect(countFor('open to you')).toBe('0')
  })
})
