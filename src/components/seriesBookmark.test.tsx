import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { HUNTER_X_HUNTER_SERIES } from '~/lib/progress/series'
import type { CharacterView } from '~/lib/view/records'
import { at, coveredSlot, peekPending } from '~/test/fixtures'
import { renderWithProviders } from '~/test/providers'

import { BookmarkForm } from './BookmarkForm'
import type { DialPoint } from './dial'
import { OnboardingDial } from './OnboardingDial'
import { SpoilerVeil } from './SpoilerVeil'

/** Hunter x Hunter's pages, rendered before the series opens (#793). */
const HXH = {
  path: '/hunter-x-hunter/en',
  series: HUNTER_X_HUNTER_SERIES,
} as const

function body(shown: CharacterView): ReactElement {
  return <p>{shown.name}</p>
}

describe('the bookmark controls of Hunter x Hunter', () => {
  it.each([
    ['episode', '26'],
    ['chapter', '43'],
  ] as const)(
    'stops the landing dial at its own demo span in %ss',
    (mode, last) => {
      renderWithProviders(
        <OnboardingDial
          arc={undefined}
          onPoint={vi.fn<(next: DialPoint) => void>()}
          point={{ mode, value: 1 }}
        />,
        HXH,
      )

      expect(screen.getByRole('slider')).toHaveAttribute('max', last)
    },
  )

  it('offers its own six seasons', async () => {
    const user = userEvent.setup()
    renderWithProviders(<BookmarkForm onDone={vi.fn<() => void>()} />, HXH)

    await user.click(screen.getByRole('radio', { name: 'Season' }))

    const seasons = screen
      .getAllByRole('option')
      .filter((option) => option.getAttribute('value') !== '')

    expect(seasons).toHaveLength(6)
  })

  it('names episode 38 as S02E12 to a season reader', () => {
    renderWithProviders(
      <SpoilerVeil
        peek={peekPending()}
        placeholder={<p>Spoiler</p>}
        slot={coveredSlot<CharacterView>(at(38))}
      >
        {body}
      </SpoilerVeil>,
      { ...HXH, bookmark: { mode: 'season', season: 1, episode: 5 } },
    )

    expect(
      screen.getByRole('button', { name: /Under fog until S02E12/u }),
    ).toBeInTheDocument()
  })
})
