import { fireEvent, screen } from '@testing-library/react'
import { type ReactElement, useState } from 'react'
import { describe, expect, it } from 'vitest'

import type { RelationshipView } from '~/lib/view/relationships'
import { opRelationshipsPage } from '~/test/archive'
import { ep, renderWithProviders } from '~/test/providers'

import { RelationshipBand } from './-$id.relationships'

const relationships: RelationshipView[] = [
  {
    person: { id: 'test-person', name: 'A person' },
    type: 'Ally',
    summary: 'Helps them return home.',
    history: [
      {
        key: '5:7:both',
        revealedAtEpisode: 5,
        revealedAtChapter: 7,
        type: 'Stranger',
        summary: 'They have just met.',
      },
      {
        key: '9:12:both',
        revealedAtEpisode: 9,
        revealedAtChapter: 12,
        type: 'Ally',
        summary: 'Helps them return home.',
      },
    ],
  },
]

/** Both native controls must exist before the independent-expansion check. */
function disclosures(): [HTMLElement, HTMLElement] {
  const [first, second] = screen.getAllByText('Relationship history')
  if (first === undefined || second === undefined) {
    throw new Error('Both disclosures must render')
  }
  return [first, second]
}

/** Simulate a loader replacing its server-filtered selection on bookmark movement. */
function SelectionDemo(): ReactElement {
  const [later, setLater] = useState(false)
  const retained = relationships[0]
  if (retained === undefined) {
    throw new Error('The retained person is absent')
  }
  const added: RelationshipView = {
    ...retained,
    person: { id: 'later-person', name: 'Later person' },
    type: 'Rival',
    summary: 'They compete.',
  }
  return (
    <>
      <button
        onClick={() => {
          setLater(!later)
        }}
        type="button"
      >
        Move bookmark
      </button>
      <RelationshipBand
        band={0}
        relationships={later ? [added, retained] : relationships}
      />
    </>
  )
}

/** Moving back removes the section instead of restoring legacy navigation. */
function MigrationDemo(): ReactElement {
  const [reached, setReached] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setReached(!reached)
        }}
        type="button"
      >
        Move bookmark
      </button>
      <RelationshipBand
        band={0}
        relationships={reached ? relationships : []}
      />
    </>
  )
}

describe('the character relationship band', () => {
  it('shows only reached relationships when moving forwards and backwards', () => {
    renderWithProviders(<MigrationDemo />)

    expect(screen.queryByText('Legacy route')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Move bookmark' }))

    expect(screen.queryByText('Legacy route')).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Relationships' }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Move bookmark' }))

    expect(screen.queryByText('Legacy route')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'Relationships' }),
    ).not.toBeInTheDocument()
  })

  it('keeps current words and the person link outside the closed history', () => {
    renderWithProviders(
      <RelationshipBand
        band={0}
        relationships={relationships}
      />,
      { bookmark: ep(10) },
    )

    expect(
      screen.getByRole('heading', { name: 'Relationships' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'A person' })).toHaveAttribute(
      'href',
      '/one-piece/en/characters/test-person',
    )

    const name = screen.getByRole('link', { name: 'A person' })

    expect(name.closest('details')).toBeNull()
    expect(screen.getAllByText('Ally')[0]).toBeVisible()
    expect(screen.getAllByText('Helps them return home.')[0]).toBeVisible()
    expect(screen.getByText('Stranger')).not.toBeVisible()

    fireEvent.click(screen.getByText('Relationship history'))

    expect(screen.getByText('Stranger')).toBeVisible()
    expect(screen.getByText('Available from episode 5')).toBeVisible()
    expect(screen.queryByText(/Entry \d+ of/u)).not.toBeInTheDocument()
  })

  it('uses the locale in its heading and person link', () => {
    renderWithProviders(
      <RelationshipBand
        band={0}
        relationships={relationships}
      />,
      { locale: 'it', bookmark: { mode: 'chapter', chapter: 12 } },
    )

    expect(
      screen.getByRole('heading', { name: 'Relazioni' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'A person' })).toHaveAttribute(
      'href',
      '/one-piece/it/characters/test-person',
    )

    fireEvent.click(screen.getByText('Storia del legame'))

    expect(screen.getByText('Visibile dal capitolo 7')).toBeVisible()
    expect(
      screen.queryByText('Available from episode 5'),
    ).not.toBeInTheDocument()
  })

  it('expands each person independently', () => {
    renderWithProviders(
      <RelationshipBand
        band={0}
        relationships={[
          ...relationships,
          {
            person: { id: 'another-person', name: 'Another person' },
            type: 'Friend',
            summary: 'A stable friendship.',
            history: [
              {
                key: '3:4:both',
                revealedAtEpisode: 3,
                revealedAtChapter: 4,
                type: 'Friend',
                summary: 'A stable friendship.',
              },
            ],
          },
        ]}
      />,
      { bookmark: ep(10) },
    )
    const [first, second] = disclosures()
    fireEvent.click(first)

    expect(first.closest('details')).toHaveAttribute('open')
    expect(second.closest('details')).not.toHaveAttribute('open')

    fireEvent.click(second)

    expect(first.closest('details')).toHaveAttribute('open')
    expect(second.closest('details')).toHaveAttribute('open')
  })

  it('replaces cards in server order and removes later cards on backwards movement', () => {
    renderWithProviders(<SelectionDemo />, { bookmark: ep(10) })

    expect(
      screen.queryByRole('link', { name: 'Later person' }),
    ).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Move bookmark' }))

    expect(
      screen.getAllByRole('link').map((link) => link.textContent),
    ).toStrictEqual(['Later person', 'A person'])
    expect(
      screen.getByLabelText('Relationship history with A person'),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Move bookmark' }))

    expect(
      screen.getAllByRole('link').map((link) => link.textContent),
    ).toStrictEqual(['A person'])
    expect(screen.queryByText('Later person')).not.toBeInTheDocument()
    expect(screen.queryByText('Rival')).not.toBeInTheDocument()
    expect(screen.queryByText('They compete.')).not.toBeInTheDocument()
  })

  it('has no heading, count or placeholder for an empty/covered relation set', () => {
    const { container } = renderWithProviders(
      <RelationshipBand
        band={0}
        relationships={[]}
      />,
    )

    expect(container).toBeEmptyDOMElement()
  })
})

describe.each(['en', 'it'] as const)(
  'Dressrosa authored cards in %s',
  (locale) => {
    it('renders the reached family reveal and keeps it out of the earlier DOM', () => {
      const before = opRelationshipsPage('rebecca', ep(674), locale)
      const family = opRelationshipsPage('rebecca', ep(675), locale)

      const { unmount } = renderWithProviders(
        <RelationshipBand
          band={0}
          relationships={before}
        />,
        { locale, bookmark: ep(674) },
      )

      expect(
        screen.queryByRole('link', { name: 'Kyros' }),
      ).not.toBeInTheDocument()

      unmount()
      renderWithProviders(
        <RelationshipBand
          band={0}
          relationships={family}
        />,
        { locale, bookmark: ep(675) },
      )

      expect(screen.getByRole('link', { name: 'Kyros' })).toHaveAttribute(
        'href',
        `/one-piece/${locale}/characters/kyros`,
      )
      expect(
        screen.getAllByText(locale === 'en' ? 'Father' : 'Padre')[0],
      ).toBeVisible()
    })
  },
)

describe.each(['en', 'it'] as const)(
  'Alabasta authored cards in %s',
  (locale) => {
    it('withholds the future pair and renders its reached dated history', () => {
      const earlier = opRelationshipsPage('laboon', ep(352), locale)
      const reached = opRelationshipsPage('laboon', ep(353), locale)

      const { unmount } = renderWithProviders(
        <RelationshipBand
          band={0}
          relationships={earlier}
        />,
        { locale, bookmark: ep(352) },
      )

      expect(
        screen.queryByRole('link', { name: 'Brook' }),
      ).not.toBeInTheDocument()

      unmount()
      renderWithProviders(
        <RelationshipBand
          band={0}
          relationships={reached}
        />,
        { locale, bookmark: ep(353) },
      )

      expect(screen.getByRole('link', { name: 'Brook' })).toHaveAttribute(
        'href',
        `/one-piece/${locale}/characters/brook`,
      )

      fireEvent.click(
        screen.getByLabelText(
          locale === 'en' ?
            'Relationship history with Brook'
          : 'Storia del legame con Brook',
        ),
      )

      expect(
        screen.getByText(
          locale === 'en' ?
            'Available from episode 353'
          : 'Visibile dall’episodio 353',
        ),
      ).toBeVisible()
    })
  },
)

describe.each(['en', 'it'] as const)(
  'Water Seven authored cards in %s',
  (locale) => {
    it('shows Franky’s new captain and dated history only after he joins', () => {
      const captain = locale === 'en' ? 'Captain' : 'Capitano'
      const joinedDate =
        locale === 'en' ?
          'Available from episode 322'
        : 'Visibile dall’episodio 322'
      const earlier = opRelationshipsPage('franky', ep(321), locale)
      const reached = opRelationshipsPage('franky', ep(322), locale)

      const { unmount } = renderWithProviders(
        <RelationshipBand
          band={0}
          relationships={earlier}
        />,
        { locale, bookmark: ep(321) },
      )

      expect(screen.queryByText(captain)).not.toBeInTheDocument()
      expect(screen.queryByText(joinedDate)).not.toBeInTheDocument()

      unmount()
      renderWithProviders(
        <RelationshipBand
          band={0}
          relationships={reached}
        />,
        { locale, bookmark: ep(322) },
      )
      const link = screen.getByRole('link', { name: /Luffy|Rufy/u })

      expect(link).toHaveAttribute(
        'href',
        `/one-piece/${locale}/characters/monkey-d-luffy`,
      )
      expect(screen.getAllByText(captain)[0]).toBeVisible()

      fireEvent.click(
        screen.getByLabelText(
          locale === 'en' ?
            /Relationship history with .*Luffy/u
          : /Storia del legame con .*Rufy/u,
        ),
      )

      expect(
        screen
          .getAllByText(joinedDate)
          .some((element) => element.closest('details')?.open === true),
      ).toBe(true)
    })
  },
)
