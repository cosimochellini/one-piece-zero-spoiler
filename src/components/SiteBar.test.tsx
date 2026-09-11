import { screen } from '@testing-library/react'

import { renderWithProviders } from '~/test/providers'

import { SiteBar } from './SiteBar'

// The switch is two <Link>s, which need a router this test has no use for.
vi.mock('~/components/LocaleSwitch', () => ({
  LocaleSwitch: () => <nav aria-label="Language" />,
}))

describe('SiteBar', () => {
  it('carries the wordmark and the language control, and nothing else', () => {
    renderWithProviders(<SiteBar />)

    expect(screen.getByRole('banner')).toHaveTextContent('Zero Spoiler')
    expect(
      screen.getByRole('navigation', { name: 'Language' }),
    ).toBeInTheDocument()
    // No link row filling the middle: the space is the design.
    expect(screen.queryAllByRole('link')).toHaveLength(0)
  })
})
