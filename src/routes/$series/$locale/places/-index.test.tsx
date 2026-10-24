import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import type { SagaPick, StopView } from '~/lib/view/places'
import type { CoveredRecord } from '~/lib/view/records'
import { at, coveredRecord, stop } from '~/test/fixtures'
import { ep, renderOnRoute } from '~/test/providers'

import { PlaceIndex } from './-index'
import { usePlacePicks } from './-params'

const open = [
  stop({ id: 'shells-town', name: 'Shells Town', ...at(2), form: 'town' }),
  stop({ id: 'baratie', name: 'Baratie', ...at(20) }),
  stop({
    id: 'whisky-peak',
    name: 'Whisky Peak',
    ...at(64),
    sea: 'grand-line',
    form: 'town',
    saga: 2,
  }),
]

const sagas: SagaPick[] = [
  { number: 1, title: 'East Blue Saga' },
  { number: 2, title: 'Alabasta Saga' },
]

const fogged = [
  coveredRecord({ kind: 'place', handle: 'h1', ...at(70) }),
  coveredRecord({ kind: 'place', handle: 'h2', ...at(80) }),
]

/** The index as the page wires it, with the lit stops printed beside it. */
function Index({
  covered,
  stops,
}: {
  covered: CoveredRecord[]
  stops: StopView[]
}): ReactElement {
  const { lit, ...picks } = usePlacePicks(stops)

  return (
    <>
      <pre aria-label="lit">{lit === null ? 'all' : [...lit].join(',')}</pre>
      <PlaceIndex
        covered={covered}
        open={stops}
        sagas={sagas}
        {...picks}
      />
    </>
  )
}

async function draw(
  search = '',
  { stops = open } = {},
): Promise<ReturnType<typeof renderOnRoute>> {
  return renderOnRoute(
    <Index
      covered={fogged}
      stops={stops}
    />,
    {
      bookmark: ep(64),
      path: `/one-piece/en/places${search}`,
      pattern: '/$series/$locale/places',
    },
  )
}

/** The seas the index shows, by their headings, in order. */
function seas(): string[] {
  return screen
    .getAllByRole('heading', { level: 2 })
    .map((heading) => heading.textContent)
}

describe('the places index', () => {
  it('groups the open places by sea, each a link to its page', async () => {
    await draw()

    expect(seas()).toStrictEqual(['East Blue', 'Grand Line'])

    const eastBlue = screen.getByRole('region', { name: 'East Blue' })

    expect(within(eastBlue).getByText('2 places')).toBeVisible()
    expect(
      within(eastBlue).getByRole('link', { name: /Baratie/u }),
    ).toHaveAttribute('href', '/one-piece/en/places/baratie')
    expect(
      screen.getByRole('link', { name: /Whisky Peak/u }),
    ).toHaveTextContent(/03.*Episode 64/u)
    expect(screen.getByText('Showing 3 of 3 open places')).toBeVisible()
    expect(screen.getByLabelText('lit')).toHaveTextContent('all')
  })

  it('says the stops under fog once, after every sea', async () => {
    await draw()

    expect(screen.getAllByText(/under fog/u)).toHaveLength(1)
    expect(screen.getByText('2 stops under fog')).toBeVisible()
  })

  it('searches the open places and lights only those on the chart', async () => {
    await draw('?q=peak')

    expect(seas()).toStrictEqual(['Grand Line'])
    expect(screen.getByLabelText('lit')).toHaveTextContent('whisky-peak')
    expect(screen.getByText('2 stops under fog')).toBeVisible()
  })

  it('says when a query finds nothing', async () => {
    await draw('?q=zou')

    expect(screen.queryAllByRole('link')).toHaveLength(0)

    await screen.findByText('No open place matches “zou”.')

    expect(screen.getByText('No open place matches “zou”.')).toBeVisible()
  })

  it('keeps a sea pick in the address', async () => {
    const user = userEvent.setup()
    await draw()

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Sea' }),
      'grand-line',
    )

    expect(seas()).toStrictEqual(['Grand Line'])
    expect(screen.getByLabelText('lit')).toHaveTextContent('whisky-peak')
  })

  it('reads a type and a saga from the address, an old layout left out', async () => {
    await draw('?form=town&saga=1&view=list')

    expect(
      screen.queryByRole('radio', { name: 'Grid' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Type' })).toHaveValue('town')
    expect(screen.getByRole('combobox', { name: 'Saga' })).toHaveValue('1')
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(screen.getByLabelText('lit')).toHaveTextContent('shells-town')
  })

  it('offers only the seas, types and sagas of open places', async () => {
    await draw()

    const seaPicks = within(screen.getByRole('combobox', { name: 'Sea' }))

    expect(
      seaPicks.getAllByRole('option').map((option) => option.textContent),
    ).toStrictEqual(['All seas', 'East Blue · 2', 'Grand Line · 1'])

    const types = within(screen.getByRole('combobox', { name: 'Type' }))

    expect(
      types.getAllByRole('option').map((option) => option.textContent),
    ).toStrictEqual(['All types', 'Town · 2', 'Floating restaurant · 1'])
  })

  it('ignores a pick the reader has not reached', async () => {
    await draw('?sea=new-world&saga=8')

    expect(seas()).toStrictEqual(['East Blue', 'Grand Line'])
    expect(screen.getByLabelText('lit')).toHaveTextContent('all')
    expect(screen.queryByText(/New World/u)).not.toBeInTheDocument()
  })

  it('offers every place back when the picks leave none', async () => {
    const user = userEvent.setup()
    await draw('?sea=grand-line&saga=1')

    expect(
      screen.getByText('No open place matches these filters.'),
    ).toBeVisible()

    await user.click(screen.getByRole('button', { name: 'Show all' }))

    expect(seas()).toStrictEqual(['East Blue', 'Grand Line'])
  })

  it('offers every place back when a query and a pick leave none', async () => {
    const user = userEvent.setup()
    await draw('?q=zou&sea=grand-line')

    await user.click(screen.getByRole('button', { name: 'Show all' }))

    expect(seas()).toStrictEqual(['East Blue', 'Grand Line'])
    expect(screen.getByRole('searchbox')).toHaveValue('')
  })

  it('leaves a query alone that finds nothing, with no pick to clear', async () => {
    await draw('?q=zou')

    expect(
      screen.queryByRole('button', { name: 'Show all' }),
    ).not.toBeInTheDocument()
  })

  it('is not there with nothing open', async () => {
    await draw('', { stops: [] })

    expect(screen.queryByRole('search')).not.toBeInTheDocument()
    expect(screen.queryByText(/under fog/u)).not.toBeInTheDocument()
  })
})
