import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { ep, renderWithProviders, settle } from '~/test/providers'

import { EpisodeMark } from './EpisodeMark'

// The dialog's code cannot be fetched: a deploy replaced the chunk, or the
// network dropped.
vi.mock(import('~/components/BookmarkDialog'), () => {
  throw new Error('Failed to fetch dynamically imported module')
})

describe('EpisodeMark', () => {
  it('stays closed and pressable when the dialog cannot be fetched', async () => {
    const user = userEvent.setup()
    renderWithProviders(<EpisodeMark />, { bookmark: ep(650) })
    const mark = screen.getByRole('button', { name: /EP 650/u })

    await user.click(mark)
    await settle()
    await user.click(mark)
    await settle()

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(mark).toBeEnabled()
    expect(mark).toHaveAttribute('aria-expanded', 'false')
  })
})
