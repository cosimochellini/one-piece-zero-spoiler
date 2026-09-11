import { render, screen } from '@testing-library/react'

import { Tile } from './Tile'

describe('Tile', () => {
  it('gives the page a real heading rather than styled text', () => {
    render(
      <Tile title="What gets filed">
        <p>Characters, arcs, places.</p>
      </Tile>,
    )

    expect(
      screen.getByRole('heading', { level: 2, name: 'What gets filed' }),
    ).toBeInTheDocument()
  })

  it('renders the mark beside the title when one is given', () => {
    render(
      <Tile title="Try the veil" mark={<span>EP 1089</span>}>
        <p>Body</p>
      </Tile>,
    )

    expect(screen.getByText('EP 1089')).toBeInTheDocument()
  })
})
