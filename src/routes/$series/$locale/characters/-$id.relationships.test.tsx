import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { RelationshipView } from '~/lib/view/relationships'
import { ep, renderWithProviders } from '~/test/providers'

import { RelationshipBand } from './-$id.relationships'

const relationships: RelationshipView[] = [
  {
    person: { id: 'test-person', name: 'A person' },
    type: 'Ally',
    summary: 'Helps them return home.',
  },
]

describe('the character relationship band', () => {
  it('links the person and shows the connection without an invented history control', () => {
    renderWithProviders(<RelationshipBand relationships={relationships} />, {
      bookmark: ep(10),
    })

    expect(
      screen.getByRole('heading', { name: 'Relationships' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'A person' })).toHaveAttribute(
      'href',
      '/one-piece/en/characters/test-person',
    )
    expect(screen.getByText('Ally')).toBeInTheDocument()
    expect(screen.getByText('Helps them return home.')).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByText(/Entry \d+ of/u)).not.toBeInTheDocument()
  })

  it('uses the locale in its heading and person link', () => {
    renderWithProviders(<RelationshipBand relationships={relationships} />, {
      locale: 'it',
      bookmark: ep(10),
    })

    expect(
      screen.getByRole('heading', { name: 'Relazioni' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'A person' })).toHaveAttribute(
      'href',
      '/one-piece/it/characters/test-person',
    )
  })

  it('has no heading, count or placeholder for an empty/covered relation set', () => {
    const { container } = renderWithProviders(
      <RelationshipBand relationships={[]} />,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
