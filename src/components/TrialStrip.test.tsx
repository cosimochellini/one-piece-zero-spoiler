import { fireEvent, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { expireCookie, parseCookieHeader, writeCookie } from '~/lib/cookies'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import { dismissWelcome, welcomeOwed } from '~/lib/progress/welcome'
import { renderWithProviders } from '~/test/providers'

import { TrialStrip } from './TrialStrip'

function cookies(): Map<string, string> {
  return parseCookieHeader(document.cookie)
}

describe('TrialStrip', () => {
  afterEach(() => {
    expireCookie(ONE_PIECE_BOOKMARK.cookie)
    expireCookie(ONE_PIECE_BOOKMARK.trialCookie)
    dismissWelcome()
  })

  it('says nothing without a trial', () => {
    renderWithProviders(<TrialStrip />, {
      bookmark: { mode: 'episode', episode: 12 },
    })

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('names the trial point and saves it as the bookmark', () => {
    writeCookie(ONE_PIECE_BOOKMARK.trialCookie, '12')
    renderWithProviders(<TrialStrip />, {
      bookmark: { mode: 'episode', episode: 12 },
      trial: true,
    })

    expect(
      screen.getByText('Trying episode 12. Nothing is saved.'),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Save this point' }))

    expect(cookies().get(ONE_PIECE_BOOKMARK.cookie)).toBe('12')
    expect(cookies().has(ONE_PIECE_BOOKMARK.trialCookie)).toBe(false)
    expect(welcomeOwed()).toBe(true)
  })

  it('leaves the trial without saving anything', () => {
    writeCookie(ONE_PIECE_BOOKMARK.trialCookie, 'c40')
    renderWithProviders(<TrialStrip />, {
      bookmark: { mode: 'chapter', chapter: 40 },
      trial: true,
    })

    expect(
      screen.getByText('Trying chapter 40. Nothing is saved.'),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Leave the trial' }))

    expect(cookies().has(ONE_PIECE_BOOKMARK.trialCookie)).toBe(false)
    expect(cookies().has(ONE_PIECE_BOOKMARK.cookie)).toBe(false)
  })
})
