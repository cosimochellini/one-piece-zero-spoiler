import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { getEntity } from '~/data/entities'
import type { Entity } from '~/data/types'
import { ep, renderWithProviders } from '~/test/providers'

import { RecordTile } from './RecordTile'

function record(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`no ${id}`)
  }
  return entity
}

describe('RecordTile', () => {
  it('links an open character to their page', () => {
    renderWithProviders(
      <RecordTile
        bookmark={ep(20)}
        entry={record('sanji')}
      />,
    )

    expect(screen.getByRole('link', { name: 'Sanji' })).toHaveAttribute(
      'href',
      '/en/characters/sanji',
    )
    expect(screen.getByText('Episode 20')).toBeVisible()
  })

  it('links an open place to its entry in the log', () => {
    renderWithProviders(
      <RecordTile
        bookmark={ep(20)}
        entry={record('baratie')}
      />,
    )

    expect(screen.getByRole('link', { name: 'Baratie' })).toHaveAttribute(
      'href',
      '/en/places#baratie',
    )
  })

  it('leaves a ship as a name', () => {
    renderWithProviders(
      <RecordTile
        bookmark={ep(20)}
        entry={record('going-merry')}
      />,
    )

    expect(screen.getByText('Going Merry')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('keeps a covered record’s name, drawing and slug out of the DOM', () => {
    const { container } = renderWithProviders(
      <RecordTile
        bookmark={ep(5)}
        entry={record('sanji')}
      />,
    )

    expect(screen.queryByText('Sanji')).not.toBeInTheDocument()
    expect(screen.getByText('Spoiler')).toBeInTheDocument()
    expect(container.querySelector('a')).toBeNull()
    expect(container.querySelector('svg')).toBeNull()
    expect(screen.getByText('Episode 20')).toBeVisible()
  })
})
