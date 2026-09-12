import { screen } from '@testing-library/react'

import { getEntity } from '~/data/entities'
import { ep, renderWithProviders } from '~/test/providers'

import { RecordTile } from './RecordTile'

function record(id: string) {
  const entity = getEntity(id)
  if (entity === undefined) throw new Error(`no ${id}`)
  return entity
}

describe('RecordTile', () => {
  it('links an open character to their page', () => {
    renderWithProviders(
      <RecordTile entry={record('sanji')} bookmark={ep(20)} />,
    )

    expect(screen.getByRole('link', { name: 'Sanji' })).toHaveAttribute(
      'href',
      '/en/characters/sanji',
    )
    expect(screen.getByText('Episode 20')).toBeVisible()
  })

  it('links an open place to its entry in the log', () => {
    renderWithProviders(
      <RecordTile entry={record('baratie')} bookmark={ep(20)} />,
    )

    expect(screen.getByRole('link', { name: 'Baratie' })).toHaveAttribute(
      'href',
      '/en/places#baratie',
    )
  })

  it('leaves a ship as a name', () => {
    renderWithProviders(
      <RecordTile entry={record('going-merry')} bookmark={ep(20)} />,
    )

    expect(screen.getByText('Going Merry')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('keeps a covered record’s name, drawing and slug out of the DOM', () => {
    const { container } = renderWithProviders(
      <RecordTile entry={record('sanji')} bookmark={ep(5)} />,
    )

    expect(screen.queryByText('Sanji')).not.toBeInTheDocument()
    expect(screen.getByText('Spoiler')).toBeInTheDocument()
    expect(container.querySelector('a')).toBeNull()
    expect(container.querySelector('svg')).toBeNull()
    expect(screen.getByText('Episode 20')).toBeVisible()
  })
})
