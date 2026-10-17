import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { ControlBar } from './ControlBar'

function renderBar(): void {
  render(
    <>
      <ControlBar
        searchLabel="Search"
        summary="Type · Zoan"
        toggleLabel="Filters"
      >
        <input
          aria-label="Search devil fruits"
          type="search"
        />
        <input
          aria-label="Zoan"
          name="kind"
          type="radio"
        />
      </ControlBar>
      <button type="button">elsewhere</button>
    </>,
  )
}

describe('ControlBar', () => {
  it('opens and folds from the toggle, which names the picks', async () => {
    const user = userEvent.setup()
    renderBar()
    const toggle = screen.getByRole('button', { name: 'Filters. Type · Zoan' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // The toggle names the box the controls are in.
    const controls = screen.getByRole('searchbox').closest('[id]')

    expect(controls).toHaveAttribute('id', toggle.getAttribute('aria-controls'))

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens when focus reaches a control, and folds when it leaves the bar or a pick is made', async () => {
    const user = userEvent.setup()
    renderBar()
    const toggle = screen.getByRole('button', { name: /^Filters/u })

    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(screen.getByRole('searchbox')).toHaveFocus()
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('button', { name: 'elsewhere' }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(screen.getByRole('searchbox'))
    fireEvent.click(screen.getByRole('radio', { name: 'Zoan' }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('stays open after a pick made with the keyboard, so the arrows step on', async () => {
    const user = userEvent.setup()
    renderBar()
    const toggle = screen.getByRole('button', { name: /^Filters/u })
    const radio = screen.getByRole('radio', { name: 'Zoan' })

    await user.click(screen.getByRole('searchbox'))
    fireEvent.keyDown(radio, { key: 'ArrowRight' })
    fireEvent.click(radio)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })
})
