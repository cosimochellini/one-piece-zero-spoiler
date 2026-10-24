import { useElementScrollRestoration } from '@tanstack/react-router'
import { createIsomorphicFn } from '@tanstack/react-start'
import { useEffect, useRef, useSyncExternalStore } from 'react'

import type { Album } from '~/components/SpecimenBands'
import type { Locale } from '~/i18n/locales'
import { useBookmark, useSeriesParams } from '~/lib/progress/BookmarkContext'
import { serialiseBookmark } from '~/lib/progress/episode'
import { loadFruitAlbum } from '~/server/api'

/**
 * The fruit album, which the server leaves out of the page it renders.
 *
 * The plates were most of that page's time and bytes (#778), so the server
 * stops at the marquee and the control bar, and the browser asks for the
 * album on its own: right after hydration, or in the loader on a navigation
 * or a bookmark move, so the plates come with the page there. Search and the
 * chips need every plate, so it is the whole album, not what scrolls near.
 *
 * Filed by the bookmark the server read it at, which it sends back, and not
 * by the one it was asked from: a bookmark moved while the call was out
 * files the answer under the new one, never an album past the old one under
 * it. Kept for the tab's life, so Back draws the plates at once.
 *
 * A sibling of the route rather than a component: it names `~/server`.
 */

interface Asked {
  locale: Locale
  series: string
}

const albums = new Map<string, Album>()
const listeners = new Set<() => void>()

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

const keyOf = (series: string, locale: Locale, at: string): string =>
  `${series} ${locale} ${at}`

/**
 * Asks for the album and files it. A failed call leaves the plates out until
 * the page asks again: on the next navigation here, or a bookmark move.
 */
async function fetchAlbum(data: Asked): Promise<void> {
  try {
    const { at, ...album } = await loadFruitAlbum({ data })
    albums.set(keyOf(data.series, data.locale, at), album)
  } catch {
    return
  }
  for (const listener of listeners) {
    listener()
  }
}

/**
 * For the loader: the album on a navigation in the browser, awaited, so a
 * bookmark move commits its plates with the rest of the page. Nothing on
 * the server, which is the point.
 */
export const primeAlbum = createIsomorphicFn().client(fetchAlbum)

/**
 * The album for the page's series, locale and bookmark, or `null` until it
 * is here. The server renders `null`, and so does the render that hydrates
 * it, so the two agree; the album is asked for after.
 */
export function useFruitAlbum(): Album | null {
  const { locale, series } = useSeriesParams()
  const { bookmark } = useBookmark()
  const key = keyOf(
    series,
    locale,
    bookmark === null ? '' : serialiseBookmark(bookmark),
  )
  const album = useSyncExternalStore(
    subscribe,
    () => albums.get(key) ?? null,
    () => null,
  )

  useEffect(() => {
    if (album === null) {
      void fetchAlbum({ series, locale })
    }
  }, [album, locale, series])

  useRestoredScroll(album)

  return album
}

/**
 * Puts the window back where the reader left it once the plates are in.
 *
 * The router restores the position when the page renders, which on a reload
 * is before the album: the page is too short then, and the position is cut
 * to its foot. So it is set again when the album comes, if the page still
 * stands above it, and an address with a saga's anchor scrolls to it. An
 * album already here on the first render needs neither.
 */
function useRestoredScroll(album: Album | null): void {
  const saved = useElementScrollRestoration({
    getElement: () => globalThis.window,
  })
  const waitedRef = useRef(album === null)

  useEffect(() => {
    if (album === null || !waitedRef.current) {
      return
    }
    waitedRef.current = false
    const { hash } = globalThis.location
    if (saved !== undefined && saved.scrollY > globalThis.scrollY) {
      globalThis.scrollTo(saved.scrollX, saved.scrollY)
    } else if (saved === undefined && hash.length > 1) {
      document.querySelector(`#${CSS.escape(hash.slice(1))}`)?.scrollIntoView()
    }
  }, [album, saved])
}
