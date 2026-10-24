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
  it('names both languages in full and shows the one being read', async () => {
    await renderOnRoute(<LocaleSwitch />, {
      locale: 'it',
      pattern: '/$locale',
      path: '/it',
    })
    const pick = screen.getByRole('combobox', { name: 'Lingua' })

    expect(pick).toHaveValue('it')
    expect(
      screen.getAllByRole('option').map((option) => option.textContent),
    ).toStrictEqual(['Italiano', 'English'])
  })

  it('goes to the same page in the other language, not the landing', async () => {
    await renderOnRoute(
      <>
        <LocaleSwitch />
        <Where />
      </>,
      {
        pattern: '/$series/$locale/characters/$id',
        path: '/one-piece/en/characters/nami',
      },
    )
    const pick = screen.getByRole('combobox', { name: 'Language' })

    expect(pick).toHaveValue('en')

    fireEvent.change(pick, { target: { value: 'it' } })

    const where = await screen.findByText('/one-piece/it/characters/nami')

    expect(where).toBeInTheDocument()
    expect(document.cookie).toContain('opzs_lang=it')
  })
})
