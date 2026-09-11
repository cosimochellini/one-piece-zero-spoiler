import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useEpisode } from '~/lib/progress/EpisodeContext'
import { EPISODE_CEILING } from '~/lib/progress/episode'
import { renderWithProviders } from '~/test/providers'

import { EpisodeDial } from './EpisodeDial'

/** Reports what the rest of the app would see, so the dial can be tested by
 *  its effect rather than by its internals. */
function ProgressProbe() {
  const { progress } = useEpisode()

  return <output data-testid="progress">{progress ?? 'none'}</output>
}

function renderDial(progress: number | null = null) {
  return renderWithProviders(
    <>
      <EpisodeDial />
      <ProgressProbe />
    </>,
    { progress },
  )
}

const field = () => screen.getByLabelText('Episode you have reached')
const progress = () => screen.getByTestId('progress').textContent

describe('EpisodeDial', () => {
  it('starts from the bookmark the server read', () => {
    renderDial(892)

    expect(field()).toHaveValue('892')
  })

  it('says nothing about validity until the field has been left', async () => {
    const user = userEvent.setup()
    renderDial()

    await user.type(field(), '9')
    await user.clear(field())

    // Mid-typing, "9" then "" are both on the way somewhere. Neither is an
    // error yet.
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('reports an out-of-range number once the field has been left', async () => {
    const user = userEvent.setup()
    renderDial()

    await user.type(field(), '99999')
    await user.tab()

    expect(screen.getByRole('alert')).toHaveTextContent(
      `Enter a number between 1 and ${String(EPISODE_CEILING)}.`,
    )
    expect(field()).toHaveAttribute('aria-invalid', 'true')
  })

  it('reports an empty field once it has been left', async () => {
    const user = userEvent.setup()
    renderDial(120)

    await user.clear(field())
    await user.tab()

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Enter the episode you have reached.',
    )
  })

  it('publishes a valid number as the reader types it', async () => {
    const user = userEvent.setup()
    renderDial()

    await user.type(field(), '92')

    expect(progress()).toBe('92')
  })

  it('withholds progress while the draft is unusable', async () => {
    const user = userEvent.setup()
    renderDial(92)

    await user.clear(field())

    // Failing closed: an unusable draft covers everything again rather than
    // leaving the last good value in place.
    expect(progress()).toBe('none')
  })

  it('steps one episode at a time', async () => {
    const user = userEvent.setup()
    renderDial(500)

    await user.click(
      screen.getByRole('button', { name: 'One episode forward' }),
    )
    expect(progress()).toBe('501')

    await user.click(screen.getByRole('button', { name: 'One episode back' }))
    expect(progress()).toBe('500')
  })

  it('starts from the first episode when stepping up with no bookmark', async () => {
    const user = userEvent.setup()
    renderDial()

    await user.click(
      screen.getByRole('button', { name: 'One episode forward' }),
    )

    expect(progress()).toBe('2')
  })

  it('disables the step that would leave the range', () => {
    renderDial(EPISODE_CEILING)

    expect(
      screen.getByRole('button', { name: 'One episode forward' }),
    ).toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'One episode back' }),
    ).toBeEnabled()
  })

  it('forgets the bookmark, and cannot be asked to forget it twice', async () => {
    const user = userEvent.setup()
    renderDial(300)

    const clear = screen.getByRole('button', { name: 'Forget my episode' })
    await user.click(clear)

    expect(progress()).toBe('none')
    expect(field()).toHaveValue('')
    expect(clear).toBeDisabled()
    // Clearing is not a mistake, so it must not raise the empty-field error.
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('describes the field with the hint when there is no error', () => {
    renderDial()

    expect(field()).toHaveAccessibleDescription(
      `Between 1 and ${String(EPISODE_CEILING)}.`,
    )
  })
})
