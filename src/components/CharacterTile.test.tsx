import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { DrawingsContext } from '~/lib/view/drawings'
import type { Stroke } from '~/lib/view/records'
import {
  at,
  coveredSlot,
  openSlot,
  peekPending,
  searchable,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { CharacterTile } from './CharacterTile'

const nami = searchable({ id: 'test-navigator', name: 'Nami', ...at(5) })

describe('CharacterTile', () => {
  it('links an open character with their drawing and name', () => {
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile
          highlight={[0, 3]}
          peek={peekPending()}
          slot={openSlot(nami)}
        />
      </ul>,
      { bookmark: ep(10) },
    )

    expect(screen.getByRole('link', { name: /Nami/u })).toHaveAttribute(
      'href',
      '/en/characters/test-navigator',
    )
    expect(screen.getByText('Nam').tagName).toBe('MARK')
    expect(screen.getByText('Episode 5')).toBeVisible()
    expect(container.querySelectorAll('path').length).toBeGreaterThan(3)
  })

  it('keeps a covered character out of the DOM but for the episode', () => {
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile
          peek={peekPending()}
          slot={coveredSlot({ ...at(5) })}
        />
      </ul>,
      { bookmark: ep(1) },
    )

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByText('Nami')).not.toBeInTheDocument()
    expect(container.querySelectorAll('path')).toHaveLength(0)
    expect(screen.getByText('Spoiler')).toBeInTheDocument()
    expect(screen.getByText('Episode 5')).toBeVisible()
  })

  it('names the drawing and the name once clicked, and only then', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile
          peek={peekPending()}
          slot={openSlot(nami)}
        />
      </ul>,
      { bookmark: ep(10) },
    )

    expect(
      container.querySelector('[style*="character-test-navigator"]'),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: /Nami/u }))

    expect(
      container.querySelector('[style*="character-test-navigator-art"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('[style*="character-test-navigator-name"]'),
    ).toBeInTheDocument()
  })

  it('leaves the names to the crest card of a featured character', () => {
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile
          morph={false}
          peek={peekPending()}
          slot={openSlot(nami)}
        />
      </ul>,
      { bookmark: ep(10) },
    )

    expect(
      container.querySelector('[style*="character-test-navigator"]'),
    ).not.toBeInTheDocument()
  })

  it('asks for a deferred drawing by id and draws what comes back', async () => {
    const load = vi
      .fn<(ids: string[]) => Promise<Record<string, Stroke[]>>>()
      .mockResolvedValue({ 'test-deferred': nami.visual.strokes })
    const later = searchable({ id: 'test-deferred', name: 'Later', ...at(5) })
    const { container } = renderWithProviders(
      <DrawingsContext value={load}>
        <ul>
          <CharacterTile
            peek={peekPending()}
            slot={openSlot({
              ...later,
              visual: { strokes: [], tint: later.visual.tint, deferred: true },
            })}
          />
        </ul>
      </DrawingsContext>,
      { bookmark: ep(10) },
    )

    expect(container.querySelectorAll('path')).toHaveLength(0)

    await vi.waitFor(() => {
      expect(container.querySelectorAll('path')).toHaveLength(
        nami.visual.strokes.length,
      )
    })

    expect(load).toHaveBeenCalledExactlyOnceWith(['test-deferred'], 'en')
  })

  it('asks again when a failed drawing comes near the screen again', async () => {
    type Notify = (entries: { isIntersecting: boolean }[]) => void
    // Observers still watching: a disconnected one hears nothing more.
    const watching = new Set<Notify>()
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        disconnect: () => void
        observe = vi.fn<() => void>()

        constructor(notify: Notify) {
          watching.add(notify)
          this.disconnect = () => {
            watching.delete(notify)
          }
        }
      },
    )
    const near = (): void => {
      for (const notify of watching) {
        notify([{ isIntersecting: true }])
      }
    }
    const load = vi
      .fn<(ids: string[]) => Promise<Record<string, Stroke[]>>>()
      .mockRejectedValueOnce(new Error('offline'))
      .mockResolvedValue({ 'test-retried': nami.visual.strokes })
    const later = searchable({ id: 'test-retried', name: 'Later', ...at(5) })
    const { container } = renderWithProviders(
      <DrawingsContext value={load}>
        <ul>
          <CharacterTile
            peek={peekPending()}
            slot={openSlot({
              ...later,
              visual: { strokes: [], tint: later.visual.tint, deferred: true },
            })}
          />
        </ul>
      </DrawingsContext>,
      { bookmark: ep(10) },
    )

    near()
    await vi.waitFor(() => {
      expect(load).toHaveBeenCalledExactlyOnceWith(['test-retried'], 'en')
    })

    expect(container.querySelectorAll('path')).toHaveLength(0)

    near()
    await vi.waitFor(() => {
      expect(container.querySelectorAll('path')).toHaveLength(
        nami.visual.strokes.length,
      )
    })

    expect(load).toHaveBeenCalledTimes(2)

    vi.unstubAllGlobals()
  })

  it('puts no transition name on a covered tile, which would spell its id', () => {
    const { container } = renderWithProviders(
      <ul>
        <CharacterTile
          peek={peekPending()}
          slot={coveredSlot({ ...at(5) })}
        />
      </ul>,
      { bookmark: ep(1) },
    )

    expect(
      container.querySelector('[style*="character-"]'),
    ).not.toBeInTheDocument()
  })
})
