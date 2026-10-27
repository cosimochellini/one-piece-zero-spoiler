import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import type { CharacterView } from '~/lib/view/records'
import { at, character, coveredSlot, spyPeek } from '~/test/fixtures'
import {
  ep,
  renderOnRoute,
  renderWithProviders,
  settle,
} from '~/test/providers'

import { FirstVisitIntro } from './IntroDialog'
import { SpoilerVeil } from './SpoilerVeil'

/** A record page in miniature: its own record, and a neighbour under fog. */
function RecordPage({
  lead,
  neighbour,
}: {
  lead: (handle: string) => Promise<CharacterView>
  neighbour: (handle: string) => Promise<CharacterView>
}): React.ReactElement {
  return (
    <>
      <SpoilerVeil
        lead
        peek={lead}
        placeholder={<p>Lead</p>}
        slot={coveredSlot<CharacterView>({ handle: 'lead', ...at(636) })}
      >
        {(shown) => <p>{shown.name}</p>}
      </SpoilerVeil>
      <SpoilerVeil
        peek={neighbour}
        placeholder={<p>Neighbour</p>}
        slot={coveredSlot<CharacterView>({ handle: 'next', ...at(639) })}
      >
        {(shown) => <p>{shown.name}</p>}
      </SpoilerVeil>
      <FirstVisitIntro />
    </>
  )
}

describe('FirstVisitIntro', () => {
  afterEach(() => {
    sessionStorage.clear()
  })

  it('opens on a page read with no bookmark, without a context line on a list', () => {
    renderWithProviders(<FirstVisitIntro />, {
      path: '/one-piece/en/characters',
    })

    // The dialog holds the focus itself, so its title is read first and a
    // phone sheet opens at its top rather than scrolled to the first unit.
    expect(
      screen.getByRole('dialog', {
        name: 'The One Piece wiki without spoilers',
      }),
    ).toHaveFocus()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.queryByText(/first appears/u)).not.toBeInTheDocument()
  })

  it.each([
    { name: 'a saved bookmark', options: { bookmark: ep(100) } },
    { name: 'a trial', options: { bookmark: ep(30), trial: true } },
  ])('stays closed with $name', ({ options }) => {
    renderWithProviders(<FirstVisitIntro />, {
      path: '/one-piece/en/characters',
      ...options,
    })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('stays closed on the series landing, which has an intro of its own', async () => {
    await renderOnRoute(<FirstVisitIntro />, {
      path: '/one-piece/en/',
      pattern: '/$series/$locale/',
    })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('stays closed for the rest of the session once closed', async () => {
    const user = userEvent.setup()
    const { unmount } = renderWithProviders(<FirstVisitIntro />, {
      path: '/one-piece/en/characters',
    })

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    unmount()
    renderWithProviders(<FirstVisitIntro />, { path: '/one-piece/en/places' })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('names the threshold of the page and lifts the fog off it alone', async () => {
    const user = userEvent.setup()
    const lead = spyPeek(character({ name: 'Orlumbus', ...at(636) }))
    const neighbour = spyPeek(character({ name: 'Next door', ...at(639) }))
    renderWithProviders(
      <RecordPage
        lead={lead.peek}
        neighbour={neighbour.peek}
      />,
      { path: '/one-piece/en/characters/orlumbus' },
    )

    expect(
      screen.getByText(
        'This entry first appears in episode 636. Your bookmark is empty, so the page is under fog.',
      ),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Show anyway' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await settle()

    expect(screen.getByText('Orlumbus')).toBeInTheDocument()
    expect(lead.asked).toStrictEqual(['lead'])
    expect(neighbour.asked).toStrictEqual([])
  })

  it('lifts nothing when it is closed another way', async () => {
    const user = userEvent.setup()
    const lead = spyPeek(character({ name: 'Orlumbus', ...at(636) }))
    const neighbour = spyPeek(character({ name: 'Next door', ...at(639) }))
    renderWithProviders(
      <RecordPage
        lead={lead.peek}
        neighbour={neighbour.peek}
      />,
      { path: '/one-piece/en/characters/orlumbus' },
    )

    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(lead.asked).toStrictEqual([])
  })
})
