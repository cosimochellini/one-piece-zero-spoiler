import { fireEvent, screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import { renderOnRoute } from '~/test/providers'

import { useFruitParams } from './-params'

/** A field bound to the address the way the album's search field is. */
function Field(): ReactElement {
  const [params, onParams] = useFruitParams()

  return (
    <input
      aria-label="query"
      onChange={(event) => {
        onParams({ ...params, q: event.target.value }, true)
      }}
      value={params.q ?? ''}
    />
  )
}

describe('useFruitParams', () => {
  it('reads the kind and the query from the address', async () => {
    await renderOnRoute(<Field />, {
      path: '/one-piece/en/fruits?form=zoan&q=dog',
      pattern: '/$series/$locale/fruits',
    })

    expect(screen.getByRole('textbox', { name: 'query' })).toHaveValue('dog')
  })

  it('keeps every letter typed faster than the router settles', async () => {
    await renderOnRoute(<Field />, {
      path: '/one-piece/en/fruits',
      pattern: '/$series/$locale/fruits',
    })
    const field = screen.getByRole('textbox', { name: 'query' })

    // No await between the letters: each one has to land in the same event.
    fireEvent.change(field, { target: { value: 'g' } })
    fireEvent.change(field, { target: { value: 'gu' } })
    fireEvent.change(field, { target: { value: 'gum' } })

    expect(field).toHaveValue('gum')
  })
})
