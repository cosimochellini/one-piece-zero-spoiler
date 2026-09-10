import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SpoilerBadge } from './SpoilerBadge'

describe('SpoilerBadge', () => {
  it('hides the label by default', () => {
    render(<SpoilerBadge label="Chapter 1150" />)

    expect(screen.getByTestId('spoiler-label')).toHaveTextContent('Hidden')
  })

  it('shows the label once revealed', () => {
    render(<SpoilerBadge label="Chapter 1150" revealed />)

    expect(screen.getByTestId('spoiler-label')).toHaveTextContent(
      'Chapter 1150',
    )
  })

  it('calls onReveal when the button is clicked', async () => {
    const onReveal = vi.fn<() => void>()
    const user = userEvent.setup()

    render(<SpoilerBadge label="Chapter 1150" onReveal={onReveal} />)
    await user.click(screen.getByRole('button', { name: 'Reveal' }))

    expect(onReveal).toHaveBeenCalledTimes(1)
  })
})
