import { render, screen } from '@testing-library/react'

import { EpisodeStamp } from './EpisodeStamp'

describe('EpisodeStamp', () => {
  it('reads as one string so it can be matched as a label', () => {
    render(<EpisodeStamp prefix="EP" episode={1089} />)

    expect(screen.getByText(/EP/u).parentElement).toHaveTextContent('EP1089')
  })
})
