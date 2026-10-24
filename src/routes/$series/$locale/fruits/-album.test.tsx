import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { plain } from '~/lib/plain'
import { type Bookmark, serialiseBookmark } from '~/lib/progress/episode'
import { loadFruitAlbum } from '~/server/api'
import { fruitBand } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { useFruitAlbum } from './-album'

vi.mock(import('~/server/api'), async (original) => ({
  ...(await original()),
  loadFruitAlbum: vi.fn<typeof loadFruitAlbum>(),
}))

const load = vi.mocked(loadFruitAlbum)

/** What the server answers when it read the cookie at `bookmark`. */
function answerAt(
  bookmark: Bookmark,
): Awaited<ReturnType<typeof loadFruitAlbum>> {
  return plain({
    at: bookmark === null ? '' : serialiseBookmark(bookmark),
    bands: [fruitBand()],
    factions: [],
    later: [],
    sagas: [],
  })
}

/** What the page would draw: the plates, or nothing, and the retry. */
function Probe(): ReactElement {
  const { album, retry } = useFruitAlbum()

  return (
    <>
      <p>
        {album === null ? 'no album' : `${String(album.bands.length)} plate`}
      </p>
      {retry === undefined ? null : (
        <button
          onClick={retry}
          type="button"
        >
          retry
        </button>
      )}
    </>
  )
}

// Each test stands at bookmarks of its own: the store lasts the module's
// life, as it lasts the tab's.
describe('useFruitAlbum', () => {
  it('files an album under the bookmark the server read, not the one it was asked from', async () => {
    load.mockReset().mockResolvedValue(answerAt(ep(300)))
    const view = renderWithProviders(<Probe />, { bookmark: ep(1150) })
    const retry = await screen.findByRole('button', { name: 'retry' })

    expect(retry).toBeInTheDocument()
    expect(screen.getByText('no album')).toBeInTheDocument()
    expect(load).toHaveBeenCalledTimes(1)

    view.unmount()
    renderWithProviders(<Probe />, { bookmark: ep(300) })

    expect(screen.getByText('1 plate')).toBeInTheDocument()
    expect(load).toHaveBeenCalledTimes(1)
  })

  it('files nothing when the call fails, and asks again on retry', async () => {
    load.mockReset().mockRejectedValueOnce(new Error('offline'))
    load.mockResolvedValueOnce(answerAt(ep(400)))
    const user = userEvent.setup()
    renderWithProviders(<Probe />, { bookmark: ep(400) })

    await user.click(await screen.findByRole('button', { name: 'retry' }))

    const plates = await screen.findByText('1 plate')

    expect(plates).toBeInTheDocument()
    expect(load).toHaveBeenCalledTimes(2)
    expect(
      screen.queryByRole('button', { name: 'retry' }),
    ).not.toBeInTheDocument()
  })
})
