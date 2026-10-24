import { useElementScrollRestoration } from '@tanstack/react-router'
import { useEffect, useSyncExternalStore } from 'react'

import type { Shelves, ShelvesSource } from '~/components/CharacterShelves'
import type { Locale } from '~/i18n/locales'
import { readPlain } from '~/lib/plain'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'
import { loadShelves } from '~/server/api'

// The shelves the browser asks for itself, for the served page that has
// none (#776). A sibling of the route rather than in it: a route file exports
// components only, so Fast Refresh can keep their state.

/**
 * The shelves, asked for from the browser and read back from plain JSON. A
 * call that fails (offline, a server error) answers `'failed'` instead of
 * rejecting, so the shelves can offer to ask again and nothing else breaks.
 */
export async function fetchShelves(
  series: string,
  locale: Locale,
): Promise<Shelves> {
  try {
    return await readPlain(await loadShelves({ data: { series, locale } }))
  } catch {
    return 'failed'
  }
}

// The shelves asked for after the served page, by the page they belong to:
// a Back to that same page finds them here, already read, instead of the
// shorter loading placeholders.
const late = new WeakMap<object, Promise<Shelves>>()

/** Once the page has hydrated it stays hydrated: there is nothing to hear. */
function subscribeNothing(): () => void {
  return unsubscribeNothing
}

function unsubscribeNothing(): void {
  // Nothing was subscribed.
}

/**
 * The shelves: the loader's, or for the served page, which has none, the ones
 * the browser asks for once it has hydrated. The served HTML and the first
 * render in the browser both say they are loading, so the two agree.
 */
export function useShelvesSource(
  page: object,
  shelves: ShelvesSource,
): ShelvesSource {
  const { locale, series } = useSeriesParams()
  const hydrated = useSyncExternalStore(
    subscribeNothing,
    () => true,
    () => false,
  )

  // Asked for once per page: `use` needs the very same promise every render.
  if (shelves === null && hydrated && !late.has(page)) {
    late.set(page, fetchShelves(series, locale))
  }

  return shelves ?? late.get(page) ?? null
}

/**
 * A reload deep in the shelves. The router puts the page back where it was as
 * soon as it renders, but the served page has only the shelves' placeholders,
 * which can be shorter than the shelves, and the position comes back clamped.
 * Once the page is tall enough again, finish the job: once, and not after the
 * reader has moved on their own.
 */
export function useScrollBackOnceTall(served: boolean): void {
  // Where the router put the page back to. It keeps that until the reader
  // leaves, whatever they scroll in between.
  const saved = useElementScrollRestoration({
    // eslint-disable-next-line unicorn/prefer-global-this -- the router files the page's own scroll under `window` itself, and `globalThis` is not typed as a Window.
    getElement: () => window,
  })?.scrollY

  useEffect(() => {
    if (
      !served
      || saved === undefined
      || typeof ResizeObserver === 'undefined'
    ) {
      return
    }

    const stop = new AbortController()
    const observer = new ResizeObserver(() => {
      if (document.documentElement.scrollHeight - innerHeight < saved) {
        return
      }
      stopWatching()
      if (scrollY < saved) {
        scrollTo(scrollX, saved)
      }
    })
    function stopWatching(): void {
      observer.disconnect()
      stop.abort()
    }
    for (const moved of ['keydown', 'pointerdown', 'touchstart', 'wheel']) {
      addEventListener(moved, stopWatching, {
        passive: true,
        signal: stop.signal,
      })
    }
    observer.observe(document.body)

    return stopWatching
  }, [saved, served])
}
