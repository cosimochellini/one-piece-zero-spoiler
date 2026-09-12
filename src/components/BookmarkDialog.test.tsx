import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useBookmark } from '~/lib/progress/BookmarkContext'
import { serialiseBookmark, type Bookmark } from '~/lib/progress/episode'
import { ep, renderWithProviders } from '~/test/providers'

import { EpisodeMark } from './EpisodeMark'

/** Reports what the rest of the app would see, so the dialog can be tested by
 *  its effect rather than by its internals. */
function BookmarkProbe() {
  const { bookmark } = useBookmark()

  return (
    <output data-testid="bookmark">
      {bookmark === null ? 'none' : serialiseBookmark(bookmark)}
    </output>
  )
}

function renderMark(bookmark: Bookmark = null) {
  return renderWithProviders(
    <>
      <EpisodeMark />
      <BookmarkProbe />
    </>,
    { bookmark },
  )
}

const stored = () => screen.getByTestId('bookmark').textContent
const dialog = () =>
  screen.getByRole('dialog', { name: 'Where have you got to?' })
const field = (name: string) => within(dialog()).getByLabelText(name)
const button = (name: string) => within(dialog()).getByRole('button', { name })

async function open(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: /Set episode|Change/u }))
  return dialog()
}

beforeEach(() => {
  document.cookie = 'opzs_ep=; Max-Age=0; Path=/'
})

describe('EpisodeMark', () => {
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
    expect(screen.getByRole('radio', { name: 'Anime episode' })).toHaveFocus()
    expect(screen.getByRole('radio', { name: 'Anime episode' })).toBeChecked()
    expect(button('Save')).toBeDisabled()
    expect(button('Forget my bookmark')).toBeDisabled()
  })

  it('opens on the bookmark as it stands', async () => {
    const user = userEvent.setup()
    renderMark({ mode: 'season', season: 2, episode: 3 })

    await open(user)

    expect(
      screen.getByRole('radio', { name: 'Season and episode' }),
    ).toBeChecked()
    expect(field('Season')).toHaveValue('2')
    expect(field('Episode within the season')).toHaveValue('3')
    expect(button('Save')).toBeEnabled()
  })

  it('saves an anime episode, closes, and writes the cookie', async () => {
    const user = userEvent.setup()
    renderMark()

    await open(user)
    await user.type(field('Episode you have reached'), '92')
    await user.click(button('Save'))

    expect(stored()).toBe('92')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.cookie).toContain('opzs_ep=92')
    expect(screen.getByRole('button', { name: /EP 92/u })).toBeInTheDocument()
  })

  it('saves a season and an episode within it', async () => {
    const user = userEvent.setup()
    renderMark()

    await open(user)
    await user.click(screen.getByRole('radio', { name: 'Season and episode' }))
    // No season yet: the field waits, and so does Save.
    expect(field('Episode within the season')).toBeDisabled()
    expect(dialog()).toHaveTextContent('Choose a season first.')

    await user.selectOptions(field('Season'), '2')
    await user.type(field('Episode within the season'), '3')
    await user.click(button('Save'))

    expect(stored()).toBe('s2e3')
    expect(document.cookie).toContain('opzs_ep=s2e3')
    expect(screen.getByRole('button', { name: /S02E03/u })).toBeInTheDocument()
  })

  it('saves a manga chapter', async () => {
    const user = userEvent.setup()
    renderMark()

    await open(user)
    await user.click(screen.getByRole('radio', { name: 'Manga chapter' }))
    await user.type(field('Chapter you have reached'), '1044')
    await user.click(button('Save'))

    expect(stored()).toBe('c1044')
    expect(screen.getByRole('button', { name: /CH 1044/u })).toBeInTheDocument()
  })

  it('empties the field when the unit changes rather than converting', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)
    expect(field('Episode you have reached')).toHaveValue('650')

    await user.click(screen.getByRole('radio', { name: 'Manga chapter' }))

    expect(field('Chapter you have reached')).toHaveValue('')
    expect(button('Save')).toBeDisabled()
    // Nothing has been saved yet.
    expect(stored()).toBe('650')
  })

  it('steps the number with the two controls', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)
    await user.click(button('One forward'))
    await user.click(button('One forward'))
    await user.click(button('One back'))

    expect(field('Episode you have reached')).toHaveValue('651')
  })

  it('says nothing about validity until the field has been left', async () => {
    const user = userEvent.setup()
    renderMark()

    await open(user)
    await user.type(field('Episode you have reached'), '99999')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    await user.tab()

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Enter a number between 1 and 1300.',
    )
    expect(field('Episode you have reached')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
    expect(button('Save')).toBeDisabled()
  })

  it('forgets the bookmark and closes', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)
    await user.click(button('Forget my bookmark'))

    expect(stored()).toBe('none')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Set episode' })).toBeVisible()
  })

  it('closes without saving on Cancel', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)
    await user.clear(field('Episode you have reached'))
    await user.type(field('Episode you have reached'), '700')
    await user.click(button('Cancel'))

    expect(stored()).toBe('650')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes without saving on Escape', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    await open(user)
    await user.keyboard('{Escape}')

    expect(stored()).toBe('650')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes without saving on a click on the backdrop', async () => {
    const user = userEvent.setup()
    renderMark(ep(650))

    const element = await open(user)
    await user.click(element)

    expect(stored()).toBe('650')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('speaks the active locale', async () => {
    const user = userEvent.setup()
    renderWithProviders(<EpisodeMark />, { locale: 'it' })

    await user.click(screen.getByRole('button', { name: 'Imposta episodio' }))

    expect(
      screen.getByRole('dialog', { name: 'Dove sei arrivato?' }),
    ).toBeVisible()
    expect(
      screen.getByRole('radio', { name: 'Capitolo del manga' }),
    ).toBeInTheDocument()
  })
})
