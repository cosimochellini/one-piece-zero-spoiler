import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

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
    renderWithProviders(
      <CharacterChronicle
        chronicle={chronicle([
          story({ episode: 1, title: 'A boy in a barrel' }),
          story({ episode: 45, title: 'The first poster' }),
        ])}
      />,
    )

    const titles = screen.getAllByRole('heading', { level: 3 })

    expect(titles.map((title) => title.textContent)).toStrictEqual([
      'A boy in a barrel',
      'The first poster',
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

    expect(link).toHaveAttribute('href', '/en/characters/roronoa-zoro')
    expect(screen.getByText(/from the post/u)).toBeInTheDocument()
  })

  it('says the episode in Italian', () => {
    renderWithProviders(
      <CharacterChronicle chronicle={chronicle([story({ episode: 130 })])} />,
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

  it('shows the note and no story to a reader who counts in chapters', () => {
    renderWithProviders(
      <CharacterChronicle chronicle={{ mode: 'chapterNote' }} />,
    )

    expect(screen.getByText(/count in anime episodes/u)).toBeInTheDocument()
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })
})
