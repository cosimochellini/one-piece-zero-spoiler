import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import type { ChronicleEntry } from '~/lib/view/records'
import { chronicle, story } from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'

import { CharacterChronicle } from './CharacterChronicle'

/**
 * The ledger, the marks and the links. Which story the reader has reached is
 * decided on the server now, and is asserted there:
 * `src/server/archive/chronicle.test.ts`.
 */
describe('CharacterChronicle', () => {
  it('lists every story it is given, in the order it is given them', () => {
    // The server sends them latest first; the component does not re-sort.
    renderWithProviders(
      <CharacterChronicle
        chronicle={chronicle([
          story({ revealedAtEpisode: 45, title: 'The first poster' }),
          story({ revealedAtEpisode: 1, title: 'A boy in a barrel' }),
        ])}
      />,
    )

    const titles = screen.getAllByRole('heading', { level: 3 })

    expect(titles.map((title) => title.textContent)).toStrictEqual([
      'The first poster',
      'A boy in a barrel',
    ])
    expect(screen.getByText('Episode 1')).toBeInTheDocument()
    expect(screen.getByText('Episode 45')).toBeInTheDocument()
  })

  it('links a name in a story to the character’s own page', () => {
    renderWithProviders(
      <CharacterChronicle
        chronicle={chronicle([
          story({
            body: [
              { kind: 'text', text: 'He frees ' },
              { kind: 'link', id: 'roronoa-zoro', name: 'Zoro' },
              { kind: 'text', text: ' from the post.' },
            ],
          }),
        ])}
      />,
    )

    const link = screen.getByRole('link', { name: 'Zoro' })

    expect(link).toHaveAttribute(
      'href',
      '/one-piece/en/characters/roronoa-zoro',
    )
    expect(screen.getByText(/from the post/u)).toBeInTheDocument()
  })

  it('says the episode in Italian', () => {
    renderWithProviders(
      <CharacterChronicle
        chronicle={chronicle([story({ revealedAtEpisode: 130 })])}
      />,
      { locale: 'it' },
    )

    expect(screen.getByText('Episodio 130')).toBeInTheDocument()
  })

  it('draws nothing at all when no story has been reached', () => {
    const { container } = renderWithProviders(
      <CharacterChronicle chronicle={chronicle()} />,
    )

    // Not an empty list either: a heading over nothing would say that
    // stories are coming, which is itself the spoiler.
    expect(container).toBeEmptyDOMElement()
  })

  it('marks each story in the unit the reader counts in', () => {
    const entry = story({ revealedAtEpisode: 130, revealedAtChapter: 218 })

    renderWithProviders(<CharacterChronicle chronicle={chronicle([entry])} />, {
      bookmark: { mode: 'chapter', chapter: 400 },
    })

    expect(screen.getByText('Chapter 218')).toBeInTheDocument()
    expect(screen.queryByText(/Episode/u)).not.toBeInTheDocument()
  })

  it('has no button when nothing waits', () => {
    renderWithProviders(
      <CharacterChronicle
        chronicle={chronicle([story({ title: 'One' })])}
        loadRest={vi.fn<() => Promise<ChronicleEntry[]>>()}
      />,
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('loads the older stories on the click, after the others', async () => {
    const loadRest = vi
      .fn<() => Promise<ChronicleEntry[]>>()
      .mockResolvedValue([story({ revealedAtEpisode: 1, title: 'Older' })])
    const user = userEvent.setup()
    renderWithProviders(
      <CharacterChronicle
        chronicle={chronicle(
          [story({ revealedAtEpisode: 45, title: 'Newer' })],
          1,
        )}
        loadRest={loadRest}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Show more' }))

    await screen.findByText('Older')

    expect(
      screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent),
    ).toStrictEqual(['Newer', 'Older'])

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('says so and keeps the button when the stories do not come', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <CharacterChronicle
        chronicle={chronicle([story({ title: 'Newer' })], 2)}
        loadRest={vi
          .fn<() => Promise<ChronicleEntry[]>>()
          .mockRejectedValue(new Error('offline'))}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Show more' }))

    await screen.findByRole('alert')

    expect(screen.getByRole('button', { name: 'Show more' })).toBeEnabled()
  })
})
