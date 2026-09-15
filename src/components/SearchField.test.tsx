import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { renderWithProviders } from '~/test/providers'

import { SearchField } from './SearchField'

describe('SearchField', () => {
  it('takes its words from its props, not from a page it knows about', () => {
    const view = renderWithProviders(
      <SearchField
        clearLabel="Clear the search"
        fieldId="find"
        label="Find a character"
        onQuery={vi.fn<(query: string) => void>()}
        placeholder="Nami"
        query=""
        status={null}
      />,
    )

    expect(screen.getByLabelText('Find a character')).toHaveAttribute(
      'placeholder',
      'Nami',
    )

    view.unmount()

    renderWithProviders(
      <SearchField
        clearLabel="Cancella la ricerca"
        fieldId="find"
        label="Trova un frutto"
        onQuery={vi.fn<(query: string) => void>()}
        placeholder="Gom Gom"
        query=""
        status={null}
      />,
    )

    expect(screen.getByLabelText('Trova un frutto')).toHaveAttribute(
      'placeholder',
      'Gom Gom',
    )
  })

  it('keeps the clear button out of the page while the field is blank', () => {
    renderWithProviders(
      <SearchField
        clearLabel="Clear the search"
        fieldId="find"
        label="Find a fruit"
        onQuery={vi.fn<(query: string) => void>()}
        placeholder="Gum-Gum"
        query="   "
        status={null}
      />,
    )

    // Hidden, not unmounted: the slot keeps the row's width in both states.
    expect(
      screen.queryByRole('button', { name: 'Clear the search' }),
    ).not.toBeInTheDocument()
  })

  it('empties the field when the clear button is pressed', async () => {
    const onQuery = vi.fn<(query: string) => void>()

    renderWithProviders(
      <SearchField
        clearLabel="Clear the search"
        fieldId="find"
        label="Find a fruit"
        onQuery={onQuery}
        placeholder="Gum-Gum"
        query="gum"
        status={null}
      />,
    )

    await userEvent.click(
      screen.getByRole('button', { name: 'Clear the search' }),
    )

    expect(onQuery).toHaveBeenCalledWith('')
  })

  it('reports every keystroke to the page that owns the query', async () => {
    const onQuery = vi.fn<(query: string) => void>()

    renderWithProviders(
      <SearchField
        clearLabel="Clear the search"
        fieldId="find"
        label="Find a fruit"
        onQuery={onQuery}
        placeholder="Gum-Gum"
        query=""
        status={null}
      />,
    )

    await userEvent.type(screen.getByRole('searchbox'), 'g')

    expect(onQuery).toHaveBeenCalledWith('g')
  })

  it('puts the caller’s status line last, inside the search landmark', () => {
    const { container } = renderWithProviders(
      <SearchField
        clearLabel="Clear the search"
        fieldId="find"
        label="Find a fruit"
        onQuery={vi.fn<(query: string) => void>()}
        placeholder="Gum-Gum"
        query=""
        status={<p>3 of 3 open fruits shown</p>}
      />,
    )

    const landmark = container.querySelector('search')

    expect(landmark?.lastElementChild).toHaveTextContent(
      '3 of 3 open fruits shown',
    )
  })
})
