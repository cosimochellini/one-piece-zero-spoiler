import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { Entity } from '~/data/types'
import { renderWithProviders } from '~/test/providers'

import { ArchiveLedger } from './ArchiveLedger'

const entries: readonly Entity[] = [
  {
    id: 'early',
    kind: 'arc',
    revealedAtEpisode: 1,
    name: { it: 'Saga iniziale', en: 'Opening Saga' },
    summary: { it: 'x', en: 'x' },
  },
  {
    id: 'late',
    kind: 'place',
    revealedAtEpisode: 1089,
    name: { it: 'Isola tarda', en: 'Late Island' },
    summary: { it: 'y', en: 'y' },
  },
]

/** The wrapper the veil marks `inert`, found from the entry name inside it. */
function veilAround(name: string): HTMLElement {
  const wrapper = screen.getByText(name).parentElement
  if (wrapper === null) throw new Error(`no veil wrapper around "${name}"`)

  return wrapper
}

function uncoverControlIn(name: string): HTMLElement {
  const row = screen.getByText(name).closest('tr')
  if (row === null) throw new Error(`no row for "${name}"`)

  const button = row.querySelector('button')
  if (button === null)
    throw new Error(`no uncover control in the "${name}" row`)

  return button
}

describe('ArchiveLedger', () => {
  it('covers the entries the reader has not reached and opens the rest', () => {
    renderWithProviders(<ArchiveLedger entries={entries} progress={500} />, {
      progress: 500,
    })

    expect(veilAround('Opening Saga')).not.toHaveAttribute('inert')
    expect(veilAround('Late Island')).toHaveAttribute('inert')
  })

  it('keeps the threshold readable on a covered row', () => {
    // "Something opens at episode 1089" is the promise the page makes. Hiding
    // it would leave the reader with a blurred row and no way to tell how far
    // away it is.
    renderWithProviders(<ArchiveLedger entries={entries} progress={500} />, {
      progress: 500,
    })

    expect(screen.getByText('1089')).toBeVisible()
  })

  it('covers everything when no bookmark is set', () => {
    renderWithProviders(<ArchiveLedger entries={entries} progress={null} />)

    expect(veilAround('Opening Saga')).toHaveAttribute('inert')
    expect(veilAround('Late Island')).toHaveAttribute('inert')
  })

  it('uncovers one row without touching the others', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ArchiveLedger entries={entries} progress={null} />)

    await user.click(uncoverControlIn('Opening Saga'))

    expect(veilAround('Opening Saga')).not.toHaveAttribute('inert')
    expect(veilAround('Late Island')).toHaveAttribute('inert')
  })

  it('labels the status column in the active locale', () => {
    renderWithProviders(<ArchiveLedger entries={entries} progress={1200} />, {
      locale: 'it',
      progress: 1200,
    })

    expect(screen.getAllByText('Aperta')).toHaveLength(2)
  })
})
