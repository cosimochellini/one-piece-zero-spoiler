import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ep, renderWithProviders } from '~/test/providers'

import { SpoilerVeil } from './SpoilerVeil'

const covered = <p data-testid="secret">Spoiler body</p>

/** A record filed at the same number in both units, for tests that read one. */
const at = (n: number) => ({ revealedAtEpisode: n, revealedAtChapter: n })

describe('SpoilerVeil', () => {
  it('hides the content from assistive technology while it is covered', () => {
    renderWithProviders(
      <SpoilerVeil gated={at(1089)} revealed={false}>
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
      <SpoilerVeil gated={at(1089)} revealed={false}>
        {covered}
      </SpoilerVeil>,
    )

    expect(
      screen.getByRole('button', {
        name: /Under fog until episode 1089.*Lift the fog anyway/su,
      }),
    ).toBeInTheDocument()
  })

  it('uncovers the content when the control is used', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SpoilerVeil gated={at(1089)} revealed={false}>
        {covered}
      </SpoilerVeil>,
    )

    await user.click(screen.getByRole('button'))

    const wrapper = screen.getByTestId('secret').parentElement
    expect(wrapper).not.toHaveAttribute('aria-hidden')
    expect(wrapper).not.toHaveAttribute('inert')
  })

  it('keeps the covered words out of the DOM when given a placeholder', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SpoilerVeil
        gated={at(1089)}
        revealed={false}
        placeholder={<p>Spoiler</p>}
      >
        {covered}
      </SpoilerVeil>,
    )

    expect(screen.queryByTestId('secret')).not.toBeInTheDocument()
    expect(screen.getByText('Spoiler')).toBeInTheDocument()

    await user.click(screen.getByRole('button'))

    expect(screen.getByTestId('secret')).toBeInTheDocument()
    expect(screen.queryByText('Spoiler')).not.toBeInTheDocument()
  })

  it('shows the content outright when the reader is already past it', () => {
    renderWithProviders(
      <SpoilerVeil gated={at(1)} revealed>
        {covered}
      </SpoilerVeil>,
    )

    const wrapper = screen.getByTestId('secret').parentElement
    expect(wrapper).not.toHaveAttribute('aria-hidden')
  })

  it('keeps the curtain mounted after a reveal so the fade can run', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SpoilerVeil gated={at(1089)} revealed={false}>
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
      <SpoilerVeil gated={at(890)} revealed={false}>
        {covered}
      </SpoilerVeil>,
      { locale: 'it' },
    )

    expect(
      screen.getByRole('button', {
        name: /Nella nebbia fino all’episodio 890/u,
      }),
    ).toBeInTheDocument()
  })
})

describe('SpoilerVeil in the other units', () => {
  it('names the chapter to a manga reader', () => {
    renderWithProviders(
      <SpoilerVeil
        gated={{ revealedAtEpisode: 130, revealedAtChapter: 218 }}
        revealed={false}
      >
        {covered}
      </SpoilerVeil>,
      { bookmark: { mode: 'chapter', chapter: 100 } },
    )

    expect(
      screen.getByRole('button', { name: /Under fog until chapter 218/u }),
    ).toBeInTheDocument()
  })

  it('names the season code to a reader who counts in seasons', () => {
    renderWithProviders(
      <SpoilerVeil
        gated={{ revealedAtEpisode: 130, revealedAtChapter: 218 }}
        revealed={false}
      >
        {covered}
      </SpoilerVeil>,
      { bookmark: { mode: 'season', season: 1, episode: 5 } },
    )

    expect(
      screen.getByRole('button', { name: /Under fog until S04E38/u }),
    ).toBeInTheDocument()
  })

  it('counts in episodes for a reader with an episode bookmark', () => {
    renderWithProviders(
      <SpoilerVeil
        gated={{ revealedAtEpisode: 130, revealedAtChapter: 218 }}
        revealed={false}
      >
        {covered}
      </SpoilerVeil>,
      { bookmark: ep(5) },
    )

    expect(
      screen.getByRole('button', { name: /Under fog until episode 130/u }),
    ).toBeInTheDocument()
  })
})

describe('SpoilerVeil at inline density', () => {
  it('shows the verb alone but still names the threshold to a screen reader', () => {
    // In a table cell the threshold already has its own column, and the full
    // sentence plus the verb wraps to two lines below ~40rem — which reads as
    // a broken control.
    renderWithProviders(
      <SpoilerVeil gated={at(1089)} revealed={false} density="inline">
        {covered}
      </SpoilerVeil>,
    )

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Lift')
    expect(button).not.toHaveTextContent('Under fog until episode 1089')
    expect(button).toHaveAccessibleName(
      'Under fog until episode 1089 — Lift the fog anyway',
    )
  })
})
