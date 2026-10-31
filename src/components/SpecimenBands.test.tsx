import { fireEvent, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { type ReactElement, useState } from 'react'
import { describe, expect, it, vi } from 'vitest'

import type { FruitParams } from '~/lib/search/fruitParams'
import { travelWith } from '~/styles/morph'
import {
  at,
  coveredRecord,
  drawing,
  fruitBand,
  peekPending,
  peekTo,
  platesOf,
  specimen,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import {
  type Album as AlbumView,
  SpecimenBands,
  type SpecimenBandsProps,
} from './SpecimenBands'

type AlbumProps = Partial<Omit<AlbumView, 'bands'>>
  & Pick<AlbumView, 'bands'>
  & Pick<SpecimenBandsProps, 'peek'> & {
    initial?: FruitParams
    onParams?: SpecimenBandsProps['onParams']
  }

const NO_PARAMS: FruitParams = {}
const NONE: string[] = []
const NO_SAGAS: AlbumView['sagas'] = []
const NO_FACTIONS: AlbumView['factions'] = []

/** The album with its picks held in state, as the route holds them in the address. */
function Album({
  bands,
  factions = NO_FACTIONS,
  initial = NO_PARAMS,
  later = NONE,
  onParams,
  peek,
  sagas = NO_SAGAS,
}: AlbumProps): ReactElement {
  const [params, setParams] = useState(initial)

  return (
    <SpecimenBands
      album={{ bands, factions, later, sagas }}
      onParams={(next, replace) => {
        setParams(next)
        onParams?.(next, replace)
      }}
      params={params}
      peek={peek}
      plates={platesOf(bands)}
    />
  )
}

const GUM = specimen({ id: 'gum-gum-fruit', name: 'Gum-Gum Fruit' })
const CHOP = specimen({ id: 'chop-chop-fruit', name: 'Chop-Chop Fruit' })
const FLAME = specimen({
  id: 'flame-flame-fruit',
  name: 'Flame-Flame Fruit',
  form: 'logia',
  folded: 'flame-flame fruit',
  // The server folds the eaters' names into the aliases, in both locales.
  aliases: ['frutto foco foco', 'portgas d. ace', 'portuguese d. ace', 'sabo'],
  eaters: [
    { id: 'portgas-d-ace', name: 'Portgas D. Ace', visual: drawing() },
    { id: 'sabo', name: 'Sabo', visual: drawing('blue') },
  ],
})

const BANDS = [
  fruitBand({ form: 'paramecia', open: [GUM, CHOP], total: 3 }),
  fruitBand({ form: 'zoan', open: [], covered: [], total: 0 }),
  fruitBand({
    form: 'logia',
    open: [FLAME],
    covered: [coveredRecord({ kind: 'fruit' })],
    total: 2,
  }),
]

/** The bar on its own, then the album when the button says it has come. */
function Late({ initial }: { initial: FruitParams }): ReactElement {
  const [album, setAlbum] = useState<AlbumView | null>(null)
  const [params, setParams] = useState(initial)

  return (
    <>
      <button
        onClick={() => {
          setAlbum({ bands: BANDS, factions: [], later: [], sagas: [] })
        }}
        type="button"
      >
        come
      </button>
      <SpecimenBands
        album={album}
        onParams={setParams}
        params={params}
        peek={peekPending()}
        plates={platesOf(BANDS)}
      />
    </>
  )
}

describe('SpecimenBands', () => {
  it('sets out one plate per kind, each labelled and counted', () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getByRole('region', { name: 'Paramecia' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Zoan' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Logia' })).toBeInTheDocument()
    expect(screen.getByText(/Group 01 · 3 fruits/u)).toBeInTheDocument()

    for (const name of ['Paramecia', 'Zoan', 'Logia']) {
      const plate = screen.getByRole('region', { name })
      const headings = within(plate).getAllByRole('heading', { level: 2 })
      const heading = within(plate).getByRole('heading', { level: 2, name })
      const head = heading.parentElement

      expect(headings).toHaveLength(1)
      expect(plate).toHaveAttribute('aria-labelledby', heading.id)
      expect(head?.parentElement).toBe(plate)
      // The explanatory sentence must scroll with the specimens rather than
      // increasing the pinned heading's height.
      expect(head?.nextElementSibling?.tagName).toBe('P')
      expect(head?.nextElementSibling).not.toHaveTextContent(/^$/u)
    }
  })

  it('counts every open fruit across the three plates', async () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    const status = await screen.findByText('Showing 3 of 3 open fruits')

    expect(status).toBeInTheDocument()
  })

  it('filters the open tiles and leaves the fog exactly where it was', async () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )

    await userEvent.type(screen.getByRole('searchbox'), 'flame')

    expect(
      screen.getByRole('link', { name: /^Flame-Flame Fruit/u }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /^Gum-Gum Fruit/u }),
    ).not.toBeInTheDocument()
    // The covered tile is not a search result and never moves out of its band.
    expect(screen.getByText('1 under fog')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: 'Fruit 02 · Logia. Under fog until episode 1089. Show anyway',
      }),
    ).toBeInTheDocument()
  })

  it('draws the bar from the counts before the album is here, and keeps it when the plates come', async () => {
    renderWithProviders(<Late initial={{ form: 'logia' }} />, {
      bookmark: ep(650),
    })
    const field = screen.getByRole('searchbox')
    field.focus()

    expect(screen.getByRole('radio', { name: /^Logia/u })).toBeChecked()

    const status = await screen.findByText('Showing 1 of 1 open fruits')

    expect(status).toBeVisible()
    expect(screen.queryByRole('region')).not.toBeInTheDocument()

    // A synthetic click, which leaves focus where it is.
    fireEvent.click(screen.getByRole('button', { name: 'come' }))

    expect(screen.getByRole('region', { name: 'Logia' })).toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toBe(field)
    expect(field).toHaveFocus()
  })

  it('finds a fruit by an eater’s name and shows that eater, marked', async () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(700) },
    )

    expect(screen.getByRole('link', { name: 'Portgas D. Ace' })).toBeVisible()

    await userEvent.type(screen.getByRole('searchbox'), 'sab')

    const sabo = await screen.findByRole('link', { name: 'Sabo' })

    expect(sabo.querySelector('mark')).toHaveTextContent('Sab')
    expect(
      screen.getByRole('link', { name: /^Flame-Flame Fruit/u }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: 'Portgas D. Ace' }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('+1')).toBeInTheDocument()
  })

  it('keeps the first eater, unmarked, for a name only the other locale uses', async () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(700) },
    )

    await userEvent.type(screen.getByRole('searchbox'), 'portuguese')

    const ace = await screen.findByRole('link', { name: 'Portgas D. Ace' })

    expect(
      screen.queryByRole('link', { name: /^Gum-Gum Fruit/u }),
    ).not.toBeInTheDocument()
    expect(ace.querySelector('mark')).toBeNull()
  })

  it('numbers a covered tile on from the open ones above it', () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    // The Logia plate holds one open fruit and one covered one. The covered
    // tile is the plate's second fruit, not a second "Fruit 01".
    expect(screen.getByText('Fruit 02 · Logia')).toBeInTheDocument()
    expect(screen.queryByText(/Fruit 01/u)).not.toBeInTheDocument()
  })

  it('keeps a covered tile’s number while the reader types', async () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        peek={peekPending()}
      />,
      { bookmark: ep(650) },
    )

    // Filtering the open Logia fruit out must not promote the covered one.
    await userEvent.type(screen.getByRole('searchbox'), 'gum')

    expect(
      screen.queryByRole('link', { name: /Flame-Flame Fruit/u }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('Fruit 02 · Logia')).toBeInTheDocument()
  })

  it('says so when a plate has nothing under fog', () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    expect(
      screen.getAllByText('Nothing of this type is under fog.'),
    ).toHaveLength(2)
  })

  it('draws an inline tile at once, and keeps a left-behind one empty but searchable', async () => {
    const later = specimen({
      id: 'chop-chop-fruit',
      name: 'Chop-Chop Fruit',
      visual: { strokes: [], tint: 'red', deferred: true },
    })
    renderWithProviders(
      <Album
        bands={[fruitBand({ form: 'paramecia', open: [GUM, later], total: 2 })]}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    const [gum, chop] = screen.getAllByRole('listitem')

    expect(gum?.querySelectorAll('path').length).toBeGreaterThan(0)
    expect(chop?.querySelector('svg')).not.toBeNull()
    expect(chop?.querySelectorAll('path')).toHaveLength(0)

    await userEvent.type(screen.getByRole('searchbox'), 'chop')

    const chopLink = await screen.findByRole('link', {
      name: /^Chop-Chop Fruit/u,
    })

    expect(chopLink).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /^Gum-Gum Fruit/u }),
    ).not.toBeInTheDocument()
  })

  it('gives each kind a chip with its open fruits, and the status the same total', async () => {
    const onParams = vi.fn<SpecimenBandsProps['onParams']>()
    const user = userEvent.setup()
    renderWithProviders(
      <Album
        bands={BANDS}
        onParams={onParams}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    const chips = screen.getByRole('group', { name: 'Fruit type' })

    // Open fruits only: the covered Logia never adds to a count.
    expect(within(chips).getByRole('radio', { name: 'All 3' })).toBeChecked()
    expect(
      within(chips).getByRole('radio', { name: 'Paramecia 2' }),
    ).not.toBeChecked()
    expect(
      within(chips).getByRole('radio', { name: 'Zoan 0' }),
    ).toBeInTheDocument()
    expect(
      within(chips).getByRole('radio', { name: 'Logia 1' }),
    ).toBeInTheDocument()

    await user.click(within(chips).getByRole('radio', { name: 'Paramecia 2' }))

    expect(onParams).toHaveBeenLastCalledWith({ form: 'paramecia' }, false)
    expect(
      screen.getByRole('region', { name: 'Paramecia' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: 'Logia' }),
    ).not.toBeInTheDocument()

    const filtered = await screen.findByText('Showing 2 of 2 open fruits')

    expect(filtered).toBeInTheDocument()

    await user.type(screen.getByRole('searchbox'), 'gum')

    expect(onParams).toHaveBeenLastCalledWith(
      { form: 'paramecia', q: 'gum' },
      true,
    )

    const found = await screen.findByText('Showing 1 of 2 open fruits')

    expect(found).toBeInTheDocument()

    await user.click(within(chips).getByRole('radio', { name: 'All 3' }))

    expect(onParams).toHaveBeenLastCalledWith({ q: 'gum' }, false)
  })

  it('opens straight onto the kind the address names, and keeps its number', () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        initial={{ form: 'logia' }}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    expect(screen.getByRole('radio', { name: 'Logia 1' })).toBeChecked()
    expect(screen.getByRole('region', { name: 'Logia' })).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: 'Paramecia' }),
    ).not.toBeInTheDocument()
    expect(screen.getByText(/Group 03 · 2 fruits/u)).toBeInTheDocument()
  })

  it('offers the three views as a named group, and sums up the picks for a phone', () => {
    renderWithProviders(
      <Album
        bands={BANDS}
        initial={{ view: 'saga', form: 'zoan', q: 'gum' }}
        peek={peekTo(GUM)}
      />,
      { bookmark: ep(650) },
    )

    const view = screen.getByRole('group', { name: 'Group by' })

    expect(within(view).getByRole('radio', { name: 'Saga' })).toBeChecked()
    expect(
      within(view)
        .getAllByRole('radio')
        .map((radio) => radio.getAttribute('value')),
    ).toStrictEqual(['type', 'saga', 'faction'])
    expect(
      screen.getByRole('button', { name: 'Filters. Saga · Zoan · “gum”' }),
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches to the saga view and back, the chip and the search kept', async () => {
    const onParams = vi.fn<SpecimenBandsProps['onParams']>()
    const user = userEvent.setup()
    renderWithProviders(
      <Album
        bands={BANDS}
        initial={{ form: 'paramecia', q: 'gum' }}
        onParams={onParams}
        peek={peekTo(GUM)}
        sagas={[
          { saga: 'East Blue Saga', open: [{ id: GUM.id }], covered: [] },
        ]}
      />,
      { bookmark: ep(650) },
    )

    await user.click(screen.getByRole('radio', { name: 'Saga' }))

    expect(onParams).toHaveBeenLastCalledWith(
      { view: 'saga', form: 'paramecia', q: 'gum' },
      false,
    )
    expect(
      screen.getByRole('region', { name: 'East Blue Saga' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: 'Paramecia' }),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('radio', { name: 'Type' }))

    expect(onParams).toHaveBeenLastCalledWith(
      { form: 'paramecia', q: 'gum' },
      false,
    )
    expect(
      screen.getByRole('region', { name: 'Paramecia' }),
    ).toBeInTheDocument()
  })
})

describe('the saga view', () => {
  const NEAR = coveredRecord({ kind: 'fruit', ...at(700) })
  const FAR = coveredRecord({ kind: 'fruit', ...at(900) })
  const PLATES = [
    fruitBand({ form: 'paramecia', open: [GUM, CHOP], covered: [], total: 2 }),
    fruitBand({ form: 'zoan', open: [], covered: [FAR], total: 1 }),
    fruitBand({ form: 'logia', open: [FLAME], covered: [NEAR], total: 2 }),
  ]
  const SAGAS = [
    { saga: 'East Blue Saga', open: [{ id: GUM.id }], covered: [] },
    {
      saga: 'Dressrosa Saga',
      open: [{ id: CHOP.id }, { id: FLAME.id }],
      covered: [NEAR.handle],
    },
  ]

  /** The saga view at episode 650, with these picks. */
  function renderSagas(initial: FruitParams): void {
    renderWithProviders(
      <Album
        bands={PLATES}
        initial={initial}
        later={[FAR.handle]}
        peek={peekTo(GUM)}
        sagas={SAGAS}
      />,
      { bookmark: ep(650) },
    )
  }

  it('sets out one group per reached saga, counted, then the later sagas as one band', () => {
    renderSagas({ view: 'saga' })

    const east = screen.getByRole('region', { name: 'East Blue Saga' })
    const dressrosa = screen.getByRole('region', { name: 'Dressrosa Saga' })

    expect(
      within(east).getByRole('heading', { level: 2, name: 'East Blue Saga' }),
    ).toHaveAttribute('id', 'saga-1')
    expect(within(east).getByText('1 fruit')).toBeInTheDocument()
    expect(within(dressrosa).getByText('3 fruits')).toBeInTheDocument()
    expect(
      within(dressrosa)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toStrictEqual([
      expect.stringMatching(/^Chop-Chop Fruit/u),
      expect.stringMatching(/^Flame-Flame Fruit/u),
      // A fog tile keeps its plate's number: the Logia plate's second.
      expect.stringMatching(/Fruit 02 · Logia/u),
    ])

    const later = screen.getByRole('region', {
      name: '1 fruit from a later saga, under fog',
    })

    expect(within(later).getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(within(later).getByText(/Fruit 01 · Zoan/u)).toBeInTheDocument()
    expect(later).not.toHaveTextContent(/Saga/u)
  })

  it('filters both runs by the chip, and leaves out a group with nothing left', () => {
    renderSagas({ view: 'saga', form: 'logia' })

    expect(
      screen.queryByRole('region', { name: 'East Blue Saga' }),
    ).not.toBeInTheDocument()
    expect(
      within(screen.getByRole('region', { name: 'Dressrosa Saga' }))
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toStrictEqual([
      expect.stringMatching(/^Flame-Flame Fruit/u),
      expect.stringMatching(/Fruit 02 · Logia/u),
    ])
    expect(
      screen.getByRole('region', {
        name: 'Nothing from a later saga is under fog here.',
      }),
    ).toBeInTheDocument()
  })

  it('filters the open tiles by the search and keeps every fog tile', () => {
    renderSagas({ view: 'saga', q: 'gum' })

    expect(
      within(screen.getByRole('region', { name: 'East Blue Saga' })).getByRole(
        'link',
        { name: /^Gum-Gum Fruit/u },
      ),
    ).toBeInTheDocument()

    const dressrosa = screen.getByRole('region', { name: 'Dressrosa Saga' })

    expect(within(dressrosa).getAllByRole('listitem')).toHaveLength(1)
    expect(within(dressrosa).queryByRole('link')).not.toBeInTheDocument()
  })
})

/** The text of every tile in a group. */
function tilesOf(name: string): (null | string)[] {
  return within(screen.getByRole('region', { name }))
    .getAllByRole('listitem')
    .map((item) => item.textContent)
}

describe('the faction view', () => {
  const NEAR = coveredRecord({ kind: 'fruit', ...at(700) })
  const FAR = coveredRecord({ kind: 'fruit', ...at(900) })
  const PLATES = [
    fruitBand({ form: 'paramecia', open: [GUM, CHOP], covered: [], total: 2 }),
    fruitBand({ form: 'zoan', open: [], covered: [FAR], total: 1 }),
    fruitBand({ form: 'logia', open: [FLAME], covered: [NEAR], total: 2 }),
  ]
  // Ace stands with Whitebeard, Sabo with the Revolutionary Army.
  const FACTIONS: AlbumView['factions'] = [
    {
      faction: 'whitebeard-pirates',
      label: 'Whitebeard Pirates',
      open: [
        { id: CHOP.id, eaters: [0] },
        { id: FLAME.id, eaters: [0] },
      ],
    },
    {
      faction: 'revolutionary-army',
      label: 'Revolutionary Army',
      open: [{ id: FLAME.id, eaters: [1] }],
    },
    { faction: null, label: null, open: [{ id: GUM.id, eaters: [0] }] },
  ]

  /** The faction view at episode 650, with these picks. */
  function renderFactions(initial: FruitParams): void {
    renderWithProviders(
      <Album
        bands={PLATES}
        factions={FACTIONS}
        initial={initial}
        later={[FAR.handle]}
        peek={peekTo(GUM)}
        sagas={[{ saga: 'Dressrosa Saga', open: [], covered: [NEAR.handle] }]}
      />,
      { bookmark: ep(650) },
    )
  }

  it('sets out one group per faction, each tile naming its eater, then every covered fruit as one band', () => {
    renderFactions({ view: 'faction' })

    expect(
      screen
        .getAllByRole('heading', { level: 2 })
        .map((heading) => heading.textContent),
    ).toStrictEqual([
      'Whitebeard Pirates',
      'Revolutionary Army',
      'No faction yet',
      '2 under fog',
    ])
    expect(
      within(
        screen.getByRole('region', { name: 'Whitebeard Pirates' }),
      ).getByText('2 fruits'),
    ).toBeInTheDocument()
    expect(tilesOf('Whitebeard Pirates')).toStrictEqual([
      expect.stringMatching(/^Chop-Chop Fruit/u),
      expect.stringMatching(/^Flame-Flame FruitPortgas D. Ace/u),
    ])
    expect(tilesOf('Revolutionary Army')).toStrictEqual([
      expect.stringMatching(/^Flame-Flame FruitSabo/u),
    ])
    // The band reads the covered fruits in the reader's order, each with
    // its plate's number.
    expect(tilesOf('2 under fog')).toStrictEqual([
      expect.stringMatching(/Fruit 02 · Logia/u),
      expect.stringMatching(/Fruit 01 · Zoan/u),
    ])
  })

  it('keeps a fruit only under the eater the search found', () => {
    renderFactions({ view: 'faction', q: 'sabo' })

    expect(
      screen.queryByRole('region', { name: 'Whitebeard Pirates' }),
    ).not.toBeInTheDocument()
    expect(
      within(
        screen.getByRole('region', { name: 'Revolutionary Army' }),
      ).getByRole('mark'),
    ).toHaveTextContent('Sabo')
  })

  it('keeps a fruit under every faction when the search finds its own name', () => {
    renderFactions({ view: 'faction', q: 'flame' })

    expect(tilesOf('Whitebeard Pirates')).toStrictEqual([
      expect.stringMatching(/Portgas D. Ace/u),
    ])
    expect(tilesOf('Revolutionary Army')).toStrictEqual([
      expect.stringMatching(/Sabo/u),
    ])
  })

  it('filters the groups and the band by the chip', () => {
    renderFactions({ view: 'faction', form: 'zoan' })

    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1)
    expect(tilesOf('1 under fog')).toStrictEqual([
      expect.stringMatching(/Fruit 01 · Zoan/u),
    ])
  })

  it('names only the first tile of a fruit shown twice for the move to its page', () => {
    travelWith('fruit', FLAME.id)
    renderFactions({ view: 'faction' })

    const whitebeard = screen.getByRole('region', {
      name: 'Whitebeard Pirates',
    })

    expect(
      document.querySelectorAll('[style*="fruit-flame-flame-fruit-name"]'),
    ).toHaveLength(1)
    expect(
      whitebeard.querySelector('[style*="fruit-flame-flame-fruit-name"]'),
    ).toBeInTheDocument()
    expect(
      document.querySelectorAll('[style*="fruit-flame-flame-fruit-art"]'),
    ).toHaveLength(1)

    travelWith('fruit', 'none')
  })

  it('says so when nothing is under fog', () => {
    renderFactions({ view: 'faction', form: 'paramecia' })

    expect(
      screen.getByRole('region', { name: 'Nothing is under fog here.' }),
    ).toBeInTheDocument()
  })
})
