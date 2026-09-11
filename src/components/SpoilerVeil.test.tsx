import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProviders } from '~/test/providers'

import { SpoilerVeil } from './SpoilerVeil'

const covered = <p data-testid="secret">Spoiler body</p>

describe('SpoilerVeil', () => {
  it('hides the content from assistive technology while it is covered', () => {
    renderWithProviders(
      <SpoilerVeil revealedAtEpisode={1089} revealed={false}>
        {covered}
      </SpoilerVeil>,
    )

    // The blur is only paint. These two attributes are what actually stop a
    // screen reader reading the spoiler out loud and a Tab press landing
    // inside it.
    const wrapper = screen.getByTestId('secret').parentElement
    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
    expect(wrapper).toHaveAttribute('inert')
  })

  it('names the threshold on the uncover control', () => {
    renderWithProviders(
      <SpoilerVeil revealedAtEpisode={1089} revealed={false}>
        {covered}
      </SpoilerVeil>,
    )

    expect(
      screen.getByRole('button', {
        name: /Covered until episode 1089.*Uncover anyway/su,
      }),
    ).toBeInTheDocument()
  })

  it('uncovers the content when the control is used', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SpoilerVeil revealedAtEpisode={1089} revealed={false}>
        {covered}
      </SpoilerVeil>,
    )

    await user.click(screen.getByRole('button'))

    const wrapper = screen.getByTestId('secret').parentElement
    expect(wrapper).not.toHaveAttribute('aria-hidden')
    expect(wrapper).not.toHaveAttribute('inert')
  })

  it('shows the content outright when the reader is already past it', () => {
    renderWithProviders(
      <SpoilerVeil revealedAtEpisode={1} revealed>
        {covered}
      </SpoilerVeil>,
    )

    const wrapper = screen.getByTestId('secret').parentElement
    expect(wrapper).not.toHaveAttribute('aria-hidden')
  })

  it('keeps the curtain mounted after a reveal so the fade can run', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SpoilerVeil revealedAtEpisode={1089} revealed={false}>
        {covered}
      </SpoilerVeil>,
    )

    await user.click(screen.getByRole('button'))

    // Still in the DOM, because a node that unmounts cannot transition. It is
    // `visibility: hidden` that takes it out of the tab order, which jsdom
    // does not compute, so this asserts the mounting contract only.
    expect(screen.getByRole('button', { hidden: true })).toBeInTheDocument()
  })

  it('translates the control into the active locale', () => {
    renderWithProviders(
      <SpoilerVeil revealedAtEpisode={890} revealed={false}>
        {covered}
      </SpoilerVeil>,
      { locale: 'it' },
    )

    expect(
      screen.getByRole('button', { name: /Coperto fino all’episodio 890/u }),
    ).toBeInTheDocument()
  })
})

describe('SpoilerVeil at inline density', () => {
  it('shows the verb alone but still names the threshold to a screen reader', () => {
    // In a table cell the threshold already has its own column, and the full
    // sentence plus the verb wraps to two lines below ~40rem — which reads as
    // a broken control.
    renderWithProviders(
      <SpoilerVeil revealedAtEpisode={1089} revealed={false} density="inline">
        {covered}
      </SpoilerVeil>,
    )

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Uncover')
    expect(button).not.toHaveTextContent('Covered until episode 1089')
    expect(button).toHaveAccessibleName(
      'Covered until episode 1089 — Uncover anyway',
    )
  })
})
