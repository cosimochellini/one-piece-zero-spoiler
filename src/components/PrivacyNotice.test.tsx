import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '~/test/providers'

import { PrivacyNotice } from './PrivacyNotice'
import { SiteFooter } from './SiteFooter'

describe('PrivacyNotice', () => {
  it.each([
    ['en', 'Privacy and cookies'],
    ['it', 'Privacy e cookie'],
  ] as const)('is accessible without a bookmark in %s', (locale, title) => {
    renderWithProviders(
      <>
        <SiteFooter />
        <PrivacyNotice />
      </>,
      { locale },
    )

    expect(
      screen.getByRole('heading', { level: 1, name: title }),
    ).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveAttribute('id', 'content')
    expect(screen.getByRole('link', { name: title })).toHaveAttribute(
      'href',
      `/${locale}/privacy`,
    )

    for (const name of ['opzs_ep', 'opzs_lang', 'opzs_try', 'opzs_welcome']) {
      expect(screen.getByRole('main')).toHaveTextContent(name)
    }

    expect(screen.getByRole('main')).toHaveTextContent('365')
    expect(screen.getByRole('main')).toHaveTextContent('us-east-2')
    expect(screen.getByRole('main')).toHaveTextContent('24')
    expect(screen.getByRole('main')).toHaveTextContent('6(1)(f)')
    expect(screen.getByRole('main')).toHaveTextContent('6(1)(c)')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
