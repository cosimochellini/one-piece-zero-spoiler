import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'

import { ep, renderWithProviders } from '~/test/providers'

import { SeaChartFold } from './SeaChartFold'

const FIRST_BAND = 0

describe('SeaChartFold', () => {
  beforeEach(() => {
    // The dialog writes the bookmark to `document.cookie`, and jsdom keeps one
    // document for the whole file, so a value left behind would let a later
    // assertion pass on the previous test's cookie.
    // eslint-disable-next-line unicorn/no-document-cookie -- jsdom has no CookieStore, and this is the only way to clear what the dialog wrote.
    document.cookie = 'opzs_ep=; Max-Age=0; Path=/'
  })

  it('sets the headline as the first-level heading of the page', () => {
    renderWithProviders(<SeaChartFold band={FIRST_BAND} />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'The wiki stops where you stopped',
      }),
    ).toBeVisible()
  })

  it('offers exactly two ways in and keeps the drawing out of the tree', () => {
    const { container } = renderWithProviders(
      <SeaChartFold band={FIRST_BAND} />,
    )

    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })

  it('invites a first bookmark and names the one already set', () => {
    const { unmount } = renderWithProviders(<SeaChartFold band={FIRST_BAND} />)

    expect(
      screen.getByRole('button', { name: 'Set your bookmark' }),
    ).toBeVisible()

    unmount()
    renderWithProviders(<SeaChartFold band={FIRST_BAND} />, {
      bookmark: ep(650),
    })

    expect(
      screen.getByRole('button', { name: 'Change your bookmark · EP 650' }),
    ).toBeVisible()
  })

  it('follows the active locale, in the copy and in the link', () => {
    renderWithProviders(<SeaChartFold band={FIRST_BAND} />, { locale: 'it' })

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'La wiki si ferma dove sei tu',
      }),
    ).toBeVisible()
    expect(
      screen.getByRole('button', { name: 'Imposta il capitolo' }),
    ).toBeVisible()
    expect(
      screen.getByRole('link', { name: 'Esplora l’archivio' }),
    ).toHaveAttribute('href', '/it/characters')
  })

  it('opens the one bookmark dialog from the fold and gives focus back', async () => {
    const user = userEvent.setup()
    renderWithProviders(<SeaChartFold band={FIRST_BAND} />, {
      bookmark: ep(650),
    })

    const cta = screen.getByRole('button', {
      name: 'Change your bookmark · EP 650',
    })

    expect(cta).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(cta)

    expect(
      screen.getByRole('dialog', { name: 'Where have you got to?' }),
    ).toBeVisible()
    expect(screen.getAllByRole('dialog')).toHaveLength(1)
    expect(cta).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
