import { render } from '@testing-library/react'

import { characters } from '~/data/characters'

import { CharacterCrest } from './CharacterCrest'

describe('CharacterCrest', () => {
  it('sets every character’s drawing inside the same seal', () => {
    for (const character of characters) {
      const { container, unmount } = render(
        <CharacterCrest visual={character.visual} />,
      )
      const svg = container.querySelector('svg')

      expect(svg).toHaveAttribute('aria-hidden', 'true')
      // Two rings and two bezel paths, then the drawing in a nested box.
      expect(svg?.querySelectorAll(':scope > path')).toHaveLength(4)
      const nested = svg?.querySelector('svg')
      expect(nested).toHaveAttribute('viewBox', '0 0 160 200')
      expect(nested?.querySelectorAll('path').length).toBeGreaterThan(0)
      unmount()
    }
  })

  it('keeps every stroke at the same width whatever size it is drawn at', () => {
    const { container } = render(
      <CharacterCrest visual={{ art: 'nami', tint: 'orange' }} />,
    )

    for (const path of container.querySelectorAll('path')) {
      expect(path).toHaveAttribute('vector-effect', 'non-scaling-stroke')
    }
  })
})
