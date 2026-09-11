import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LatestChapter } from './LatestChapter'

describe('LatestChapter', () => {
  it('hides the chapter until the badge is revealed', async () => {
    const user = userEvent.setup()

    render(<LatestChapter />)
    expect(screen.getByTestId('spoiler-label')).toHaveTextContent('Hidden')

    await user.click(screen.getByRole('button', { name: 'Reveal' }))

    expect(screen.getByTestId('spoiler-label')).toHaveTextContent(
      'Latest chapter',
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
