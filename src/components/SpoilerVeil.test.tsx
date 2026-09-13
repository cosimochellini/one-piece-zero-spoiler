import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import type { CharacterView } from '~/lib/view/records'
import {
  at,
  character,
  coveredSlot,
  openSlot,
  peekFails,
  peekPending,
  peekTo,
  spyPeek,
} from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { SpoilerVeil } from './SpoilerVeil'

const record = character({ name: 'Spoiler body', ...at(1089) })

/** What the curtain covers: built from the record, never before it. */
function body(shown: CharacterView): ReactElement {
  return <p data-testid="secret">{shown.name}</p>
}

describe('SpoilerVeil', () => {
  it('hides the content from assistive technology while it is covered', () => {
    renderWithProviders(
      <SpoilerVeil
        peek={peekPending()}
        placeholder={<p>Spoiler</p>}
        slot={openSlot(record)}
      >
        {body}
      </SpoilerVeil>,
    )

    const shown = screen.getByTestId('secret').parentElement

    expect(shown).not.toHaveAttribute('aria-hidden')

    // The blur is only paint. These two attributes are what actually stop a
    // screen reader reading a spoiler out loud and a Tab press landing
    // inside it.
    renderWithProviders(
      <SpoilerVeil
        peek={peekPending()}
        placeholder={<p data-testid="fog">Spoiler</p>}
        slot={coveredSlot<CharacterView>({ ...at(1089) })}
      >
        {body}
      </SpoilerVeil>,
    )
    const fogged = screen.getByTestId('fog').parentElement

    expect(fogged).toHaveAttribute('aria-hidden', 'true')
    expect(fogged).toHaveAttribute('inert')
  })

  it('never builds the children of a covered record', () => {
    // The one that matters. The whole page used to build the real JSX — name,
    // role, drawing — and then throw it away; with the archive on the server
    // there is nothing to build from, and this holds that it is never tried.
    expect(() => {
      renderWithProviders(
        <SpoilerVeil
          peek={peekPending()}
          placeholder={<p>Spoiler</p>}
          slot={coveredSlot<CharacterView>()}
        >
          {() => {
            throw new Error('the covered children were built')
          }}
        </SpoilerVeil>,
      )
    }).not.toThrow()
  })

  it('names the threshold on the uncover control', () => {
    renderWithProviders(
      <SpoilerVeil
        peek={peekPending()}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>({ ...at(1089) })}
      >
        {body}
      </SpoilerVeil>,
    )

    expect(
      screen.getByRole('button', {
        name: /Under fog until episode 1089.*Lift the fog anyway/su,
      }),
    ).toBeInTheDocument()
  })

  it('asks for the record by its handle and shows nothing until it lands', async () => {
    const user = userEvent.setup()
    const { asked, peek } = spyPeek(record)
    renderWithProviders(
      <SpoilerVeil
        peek={peek}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>({ handle: 'zz' })}
      >
        {body}
      </SpoilerVeil>,
    )

    expect(screen.queryByTestId('secret')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button'))
    await settle()

    // The opaque handle, passed through untouched and never invented.
    expect(asked).toStrictEqual(['zz'])
    expect(screen.getByTestId('secret')).toBeInTheDocument()
    expect(screen.queryByText('Spoiler')).not.toBeInTheDocument()
  })

  it('says it is working, and keeps the record out of the DOM, while the peek is in flight', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SpoilerVeil
        peek={peekPending()}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>()}
      >
        {body}
      </SpoilerVeil>,
    )

    await user.click(screen.getByRole('button'))

    expect(screen.queryByTestId('secret')).not.toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    expect(screen.getByRole('button')).toHaveTextContent('Lifting')
  })

  it('re-arms the control when the peek fails', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SpoilerVeil
        peek={peekFails()}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>()}
      >
        {body}
      </SpoilerVeil>,
    )

    await user.click(screen.getByRole('button'))
    await settle()

    expect(screen.queryByTestId('secret')).not.toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent(/try again/u)
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-busy', 'true')
  })

  it('shows the content outright when the reader is already past it', () => {
    renderWithProviders(
      <SpoilerVeil
        peek={peekTo(record)}
        placeholder={<p>Spoiler</p>}
        slot={openSlot(record)}
      >
        {body}
      </SpoilerVeil>,
    )

    expect(screen.getByTestId('secret')).toBeInTheDocument()
  })

  it('keeps the curtain mounted after a reveal so the fade can run', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SpoilerVeil
        peek={peekTo(record)}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>()}
      >
        {body}
      </SpoilerVeil>,
    )

    await user.click(screen.getByRole('button'))
    await settle()

    // Still in the DOM, because a node that unmounts cannot transition. It is
    // `visibility: hidden` that takes it out of the tab order, which jsdom
    // does not compute, so this asserts the mounting contract only.
    expect(screen.getByRole('button', { hidden: true })).toBeInTheDocument()
  })

  it('translates the control into the active locale', () => {
    renderWithProviders(
      <SpoilerVeil
        peek={peekPending()}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>({ ...at(890) })}
      >
        {body}
      </SpoilerVeil>,
      { locale: 'it' },
    )

    expect(
      screen.getByRole('button', {
        name: /Nella nebbia fino all’episodio 890/u,
      }),
    ).toBeInTheDocument()
  })
})

describe('SpoilerVeil in the other units', () => {
  const dated = { revealedAtEpisode: 130, revealedAtChapter: 218 }

  it('names the chapter to a manga reader', () => {
    renderWithProviders(
      <SpoilerVeil
        peek={peekPending()}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>(dated)}
      >
        {body}
      </SpoilerVeil>,
      { bookmark: { mode: 'chapter', chapter: 100 } },
    )

    expect(
      screen.getByRole('button', { name: /Under fog until chapter 218/u }),
    ).toBeInTheDocument()
  })

  it('names the season code to a reader who counts in seasons', () => {
    renderWithProviders(
      <SpoilerVeil
        peek={peekPending()}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>(dated)}
      >
        {body}
      </SpoilerVeil>,
      { bookmark: { mode: 'season', season: 1, episode: 5 } },
    )

    expect(
      screen.getByRole('button', { name: /Under fog until S04E38/u }),
    ).toBeInTheDocument()
  })

  it('counts in episodes for a reader with an episode bookmark', () => {
    renderWithProviders(
      <SpoilerVeil
        peek={peekPending()}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>(dated)}
      >
        {body}
      </SpoilerVeil>,
      { bookmark: ep(5) },
    )

    expect(
      screen.getByRole('button', { name: /Under fog until episode 130/u }),
    ).toBeInTheDocument()
  })
})

describe('SpoilerVeil at inline density', () => {
  it('shows the verb alone but still names the threshold to a screen reader', () => {
    // In a table cell the threshold already has its own column, and the full
    // sentence plus the verb wraps to two lines below ~40rem — which reads as
    // a broken control.
    renderWithProviders(
      <SpoilerVeil
        density="inline"
        peek={peekPending()}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>({ ...at(1089) })}
      >
        {body}
      </SpoilerVeil>,
    )

    const control = screen.getByRole('button')

    expect(control).toHaveTextContent('Lift')
    expect(control).not.toHaveTextContent('Under fog until episode 1089')
    expect(control).toHaveAccessibleName(
      'Under fog until episode 1089 — Lift the fog anyway',
    )
  })
})
