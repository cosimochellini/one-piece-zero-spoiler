import { screen } from '@testing-library/react'

import { renderWithProviders } from '~/test/providers'

import { SiteMasthead } from './SiteMasthead'

// The switch is two <Link>s, which need a router this test has no use for. The
// masthead's own job is the edition line, so the switch is stubbed out.
vi.mock('~/components/LocaleSwitch', () => ({
  LocaleSwitch: () => <nav aria-label="Language" />,
}))

describe('SiteMasthead', () => {
  it('says out loud that nothing has been set, rather than showing nothing', () => {
    renderWithProviders(<SiteMasthead />)

    expect(
      screen.getByText('No episode set — everything is covered'),
    ).toBeInTheDocument()
  })

  it('reports the bookmark once there is one', () => {
    renderWithProviders(<SiteMasthead />, { progress: 1089 })

    expect(screen.getByText('Reading through episode 1089')).toBeInTheDocument()
  })
})
