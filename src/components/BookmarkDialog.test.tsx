import {
  act,
  fireEvent,
  type RenderResult,
  screen,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { useBookmark } from '~/lib/progress/BookmarkContext'
import { type Bookmark, serialiseBookmark } from '~/lib/progress/episode'
import { type SagaTable, SagaTableContext } from '~/lib/progress/sagaLabel'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { EpisodeMark } from './EpisodeMark'

/**
 * Reports what the rest of the app would see, so the dialog can be tested by
 *  its effect rather than by its internals.
 */
function BookmarkProbe(): ReactElement {
  const { bookmark } = useBookmark()

  return (
    <output data-testid="bookmark">
      {bookmark === null ? 'none' : serialiseBookmark(bookmark)}
    </output>
  )
}

function renderMark(bookmark: Bookmark = null): RenderResult {
  return renderWithProviders(
    <>
      <EpisodeMark />
      <BookmarkProbe />
    </>,
    { bookmark },
  )
}

// Two sagas and one run of filler: enough to read a label and its mark.
const SAGAS: SagaTable = {
  episode: [
    { from: 92, name: 'Alabasta Saga' },
    { from: 579, name: 'Punk Hazard' },
    { from: 629, name: 'Dressrosa' },
  ],
  chapter: [],
  filler: [{ first: 747, last: 750 }],
}

const loadSagas = vi.fn<() => Promise<SagaTable>>().mockResolvedValue(SAGAS)

const stored = (): null | string => screen.getByTestId('bookmark').textContent
const dialog = (): HTMLElement =>
  screen.getByRole('dialog', { name: 'Where are you up to?' })
const field = (name: string): HTMLElement =>
  within(dialog()).getByLabelText(name)
// The unit radio is called Season too, so the select is found by its role.
const seasonSelect = (): HTMLElement =>
  within(dialog()).getByRole('combobox', { name: 'Season' })
const button = (name: string): HTMLElement =>
  within(dialog()).getByRole('button', { name })

async function open(
  user: ReturnType<typeof userEvent.setup>,
): Promise<HTMLElement> {
  await user.click(screen.getByRole('button', { name: /Set episode|Change/u }))
  // The dialog's code is loaded on demand, so it appears a tick later.
  return screen.findByRole('dialog', { name: 'Where are you up to?' })
}

describe('EpisodeMark', () => {
  // The mark fetches the dialog's code on demand. Fetched once here, so the
  // first test does not spend its wait on transforming the module.
  beforeAll(async () => {
    await import('./BookmarkDialog')
  })

  beforeEach(() => {
    // The component writes the bookmark to `document.cookie`, and jsdom keeps
    // one document for the whole file, so a value left behind would let a
    // later assertion pass on the previous test's cookie. jsdom ships no
    // `CookieStore`, which is the only writer the rule accepts.
    // eslint-disable-next-line unicorn/no-document-cookie -- jsdom has no CookieStore, and this is the only way to clear what the component wrote.
    document.cookie = 'opzs_ep=; Max-Age=0; Path=/'
  })

  it('shows the invitation with no bookmark and nothing else', () => {
    renderMark()

    expect(screen.getByRole('button', { name: 'Set episode' })).toBeVisible()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the dialog on the mark, with the mode group focused first', async () => {
    const user = userEvent.setup()
    renderMark()

    await open(user)

    expect(dialog()).toBeVisible()
    expect(screen.getByRole('radio', { name: 'Episode' })).toHaveFocus()
    expect(screen.getByRole('radio', { name: 'Episode' })).toBeChecked()
    expect(button('Save')).toBeDisabled()
    // There is nothing to clear, so the line is not there at all.
    expect(
      within(dialog()).queryByRole('button', { name: 'Clear bookmark' }),
    ).not.toBeInTheDocument()
  })

  it('opens on the bookmark as it stands', async () => {
    const user = userEvent.setup()
    renderMark({ mode: 'season', season: 2, episode: 3 })

    await open(user)

    expect(screen.getByRole('radio', { name: 'Season' })).toBeChecked()
    expect(seasonSelect()).toHaveValue('2')
    expect(field('Episode in that season')).toHaveValue('3')
    expect(button('Save')).toBeEnabled()
  })

  it('saves an anime episode, closes, and writes the cookie', async () => {
    const user = userEvent.setup()
    renderMark()

    await open(user)
    await user.type(field('Last episode you watched'), '92')
    await user.click(button('Save'))
    // The stored bookmark moves inside an async transition, which commits
    // after `router.invalidate()` resolves, not when the click returns. Under
    // load the click can return first, so every way out of the dialog waits
    // here, and the ones that save nothing are checked in their final state too.
    await settle()

    expect(stored()).toBe('92')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.cookie).toContain('opzs_ep=92')
    expect(screen.getByRole('button', { name: /EP 92/u })).toBeInTheDocument()
  })

  it('saves a season and an episode within it', async () => {
    const user = userEvent.setup()
    renderMark()

    await open(user)
    await user.click(screen.getByRole('radio', { name: 'Season' }))

    // No season yet: the field waits, and so does Save.
    expect(field('Episode in that season')).toBeDisabled()
    expect(dialog()).toHaveTextContent('Choose a season first.')

    await user.selectOptions(seasonSelect(), '2')
    await user.type(field('Episode in that season'), '3')
    await user.click(button('Save'))
    await settle()

    expect(stored()).toBe('s2e3')
    expect(document.cookie).toContain('opzs_ep=s2e3')
    expect(screen.getByRole('button', { name: /S02E03/u })).toBeInTheDocument()
  })

  it('saves a manga chapter', async () => {
    const user = userEvent.setup()
    renderMark()

    await open(user)
    await user.click(screen.getByRole('radio', { name: 'Chapter' }))
    await user.type(field('Last chapter you read'), '1044')
    await user.click(button('Save'))
    await settle()

    expect(stored()).toBe('c1044')
    expect(screen.getByRole('button', { name: /CH 1044/u })).toBeInTheDocument()
  })

  it('empties the field when the unit changes rather than converting', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)

    expect(field('Last episode you watched')).toHaveValue('650')

    await user.click(screen.getByRole('radio', { name: 'Chapter' }))

    expect(field('Last chapter you read')).toHaveValue('')
    expect(button('Save')).toBeDisabled()
    // Nothing has been saved yet.
    expect(stored()).toBe('650')
  })

  it('steps the number with the two controls', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)
    await user.click(button('One more'))
    await user.click(button('One more'))
    await user.click(button('One less'))

    expect(field('Last episode you watched')).toHaveValue('651')
  })

  it('keeps stepping while a stepper is held, and stops when let go', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))
    await open(user)

    vi.useFakeTimers()
    try {
      fireEvent.pointerDown(button('One more'), { button: 0 })
      // The press rolls the numeral in once; the repeat that follows changes
      // the value in the same field rather than rebuilding it on every tick.
      const numeral = field('Last episode you watched')
      // One step on the press, one when the hold starts repeating, and one
      // a shorter interval after that.
      act(() => {
        vi.advanceTimersByTime(400)
      })
      act(() => {
        vi.advanceTimersByTime(84)
      })
      fireEvent.pointerUp(button('One more'))
      act(() => {
        vi.advanceTimersByTime(1000)
      })

      expect(field('Last episode you watched')).toBe(numeral)
    } finally {
      vi.useRealTimers()
    }

    expect(field('Last episode you watched')).toHaveValue('653')
  })

  it('names the saga the number falls in, filler included', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SagaTableContext value={loadSagas}>
        <EpisodeMark />
      </SagaTableContext>,
      { bookmark: ep(650) },
    )

    await open(user)

    const saga = await within(dialog()).findByText('Arc · Dressrosa')

    expect(saga).toBeVisible()

    await user.clear(field('Last episode you watched'))
    await user.type(field('Last episode you watched'), '750')

    expect(within(dialog()).getByText('Arc · Dressrosa · Filler')).toBeVisible()

    // A name that already says what it is goes without the prefix.
    await user.clear(field('Last episode you watched'))
    await user.type(field('Last episode you watched'), '100')

    expect(within(dialog()).getByText('Alabasta Saga')).toBeVisible()
  })

  it('says nothing about validity until the field has been left', async () => {
    const user = userEvent.setup()
    renderMark()

    await open(user)
    await user.type(field('Last episode you watched'), '99999')

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    await user.tab()

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Enter a number from 1 to 1300.',
    )
    expect(field('Last episode you watched')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
    expect(button('Save')).toBeDisabled()
  })

  it('forgets the bookmark and closes', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)
    await user.click(button('Clear bookmark'))
    await settle()

    expect(stored()).toBe('none')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Set episode' })).toBeVisible()
  })

  it('closes without saving on Cancel', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)
    await user.clear(field('Last episode you watched'))
    await user.type(field('Last episode you watched'), '700')
    await user.click(button('Cancel'))
    await settle()

    expect(stored()).toBe('650')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes without saving on Escape', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)
    await user.keyboard('{Escape}')
    await settle()

    expect(stored()).toBe('650')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes without saving on a click on the backdrop', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    const element = await open(user)
    await user.click(element)
    await settle()

    expect(stored()).toBe('650')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('speaks the active locale', async () => {
    const user = userEvent.setup()
    renderWithProviders(<EpisodeMark />, { locale: 'it' })

    await user.click(screen.getByRole('button', { name: 'Imposta episodio' }))

    const shown = await screen.findByRole('dialog', {
      name: 'A che punto sei?',
    })

    expect(shown).toBeVisible()
    expect(screen.getByRole('radio', { name: 'Capitolo' })).toBeInTheDocument()
  })
})
