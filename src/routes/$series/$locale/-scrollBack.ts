import { useElementScrollRestoration } from '@tanstack/react-router'
import { useEffect } from 'react'

/**
 * A reload deep in a list the served page leaves out: the character shelves
 * (#776), the places index (#781). The router puts the page back where it
 * was as soon as it renders, but the served page is shorter than the list,
 * and the position comes back clamped. Once the page is tall enough again,
 * finish the job: once, and not after the reader has moved on their own.
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
