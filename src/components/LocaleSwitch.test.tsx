import { screen } from '@testing-library/react'

import { renderOnRoute } from '~/test/providers'

import { LocaleSwitch } from './LocaleSwitch'

describe('LocaleSwitch', () => {
  it('offers the same page in the other language, not the landing', async () => {
    await renderOnRoute(<LocaleSwitch />, {
      locale: 'en',
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
})
