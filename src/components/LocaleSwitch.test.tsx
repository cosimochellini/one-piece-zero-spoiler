import { useLocation } from '@tanstack/react-router'
import { fireEvent, screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import { renderOnRoute } from '~/test/providers'

import { LocaleSwitch } from './LocaleSwitch'

/** Where the router is, painted, so a test can wait for it to move. */
function Where(): ReactElement {
  return <output>{useLocation({ select: (at) => at.pathname })}</output>
}

describe('LocaleSwitch', () => {
  it('offers the same page in the other language, not the landing', async () => {
    await renderOnRoute(<LocaleSwitch />, {
      pattern: '/$locale/characters/$id',
      path: '/en/characters/nami',
    })

    expect(screen.getByRole('link', { name: 'Italiano' })).toHaveAttribute(
      'href',
      '/it/characters/nami',
    )
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute(
      'href',
      '/en/characters/nami',
    )
  })

  it('marks the active language for assistive technology', async () => {
    await renderOnRoute(<LocaleSwitch />, {
      locale: 'it',
      pattern: '/$locale',
      path: '/it',
    })

    expect(screen.getByRole('link', { name: 'Italiano' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByRole('link', { name: 'English' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('on a phone, picks the same page in the other language from a select', async () => {
    await renderOnRoute(
      <>
        <LocaleSwitch />
        <Where />
      </>,
      { pattern: '/$locale/characters/$id', path: '/en/characters/nami' },
    )
    const pick = screen.getByRole('combobox', { name: 'Language' })

    expect(pick).toHaveValue('en')

    fireEvent.change(pick, { target: { value: 'it' } })

    const where = await screen.findByText('/it/characters/nami')

    expect(where).toBeInTheDocument()
    expect(document.cookie).toContain('opzs_lang=it')
  })
})
