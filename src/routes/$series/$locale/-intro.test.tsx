import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { afterEach, describe, expect, it } from 'vitest'

import { FirstVisitIntro } from '~/components/IntroDialog'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import type { CharacterView, FruitView } from '~/lib/view/records'
import {
  at,
  character,
  chronicle,
  coveredSlot,
  facts,
  fruit,
  fruitDetail,
  spyPeek,
} from '~/test/fixtures'
import { renderWithProviders, settle } from '~/test/providers'

import { DossierDiptych } from './characters/-$id.dossier'
import { StageBand } from './fruits/-$id.stage'

/** A neighbour on the same page: a covered record the intro must not lift. */
function Neighbour({
  peek,
}: {
  peek: (handle: string) => Promise<CharacterView>
}): ReactElement {
  return (
    <SpoilerVeil
      peek={peek}
      placeholder={<p>Neighbour</p>}
      slot={coveredSlot<CharacterView>({ handle: 'next', ...at(639) })}
    >
      {(shown) => <p>{shown.name}</p>}
    </SpoilerVeil>
  )
}

/**
 * The real first band of each record page, beside a neighbour (#864): the
 * intro's "Show anyway" lifts the band's two veils and nothing else.
 */
describe('the intro on a record page', () => {
  afterEach(() => {
    sessionStorage.clear()
  })

  it('lifts the character dossier, drawing and words, and not the neighbour', async () => {
    const user = userEvent.setup()
    const lead = spyPeek({
      ...character({ name: 'Orlumbus', ...at(636) }),
      summary: 'An admiral.',
    })
    const neighbour = spyPeek(character({ name: 'Next door', ...at(639) }))
    renderWithProviders(
      <>
        <DossierDiptych
          detail={{
            chronicle: chronicle(),
            facts: facts(),
            log: null,
            relationships: [],
            slot: coveredSlot({ handle: 'lead', ...at(636) }),
          }}
          peek={lead.peek}
        />
        <Neighbour peek={neighbour.peek} />
        <FirstVisitIntro />
      </>,
      { path: '/one-piece/en/characters/orlumbus' },
    )

    await user.click(screen.getByRole('button', { name: 'Show anyway' }))
    await settle()

    expect(
      screen.getByRole('heading', { level: 1, name: 'Orlumbus' }),
    ).toBeInTheDocument()
    expect(lead.asked).toStrictEqual(['lead', 'lead'])
    expect(neighbour.asked).toStrictEqual([])
  })

  it('lifts the fruit stage, drawing and words, and not the neighbour', async () => {
    const user = userEvent.setup()
    const lead = spyPeek<FruitView>(fruit({ ...at(636) }))
    const neighbour = spyPeek(character({ name: 'Next door', ...at(639) }))
    renderWithProviders(
      <>
        <StageBand
          detail={fruitDetail({
            slot: coveredSlot({ handle: 'lead', ...at(636) }),
          })}
          peek={lead.peek}
        />
        <Neighbour peek={neighbour.peek} />
        <FirstVisitIntro />
      </>,
      { path: '/one-piece/en/fruits/gum-gum' },
    )

    await user.click(screen.getByRole('button', { name: 'Show anyway' }))
    await settle()

    expect(lead.asked).toStrictEqual(['lead', 'lead'])
    expect(neighbour.asked).toStrictEqual([])
  })
})
