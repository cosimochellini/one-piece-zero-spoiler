import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { ep, renderWithProviders } from '~/test/providers'

import { EpisodeMark } from './EpisodeMark'

// The form's code arrives only when the test lets it: a slow connection.
const network = vi.hoisted(() => {
  const line = new EventTarget()
  const arrived = new Promise<void>((resolve) => {
    line.addEventListener('deliver', () => {
      resolve()
    })
  })
  return { arrived, deliver: () => line.dispatchEvent(new Event('deliver')) }
})

vi.mock(import('~/components/BookmarkForm'), async (importOriginal) => {
  await network.arrived
  return importOriginal()
})

describe('BookmarkSkeleton', () => {
  it('opens the dialog on the press with a skeleton, then hands the focus to the form', async () => {
    const user = userEvent.setup()
    renderWithProviders(<EpisodeMark />, { bookmark: ep(650) })

    await user.click(screen.getByRole('button', { name: /EP 650/u }))
    const dialog = screen.getByRole('dialog', { name: 'Where are you up to?' })

    expect(within(dialog).getByRole('status')).toHaveTextContent('Loading…')
    expect(
      within(dialog).queryByRole('button', { name: 'Save' }),
    ).not.toBeInTheDocument()

    network.deliver()
    const save = await within(dialog).findByRole('button', { name: 'Save' })

    expect(save).toBeEnabled()
    expect(within(dialog).queryByRole('status')).not.toBeInTheDocument()
    expect(within(dialog).getByRole('radio', { name: 'Episode' })).toHaveFocus()
  })
})
