import {
  type ReactElement,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react'

import {
  COOKIE_MAX_AGE_SECONDS,
  expireCookie,
  writeCookie,
} from '~/lib/cookies'

import { BookmarkContext, type BookmarkContextValue } from './BookmarkContext'
import { type Bookmark, EPISODE_COOKIE, serialiseBookmark } from './episode'

/**
 * One bookmark is held for the whole document, so every veil on the page
 * opens and closes together rather than each reading the cookie for itself.
 */
export type BookmarkProviderProps = {
  readonly children: ReactNode
  /**
   * The bookmark as the server read it. Passing it in rather than reading
   * `document.cookie` in an effect is what keeps the first server-rendered
   * HTML correct – an effect would paint the uncovered page first and cover
   * it a frame later, which is a spoiler.
   */
  readonly initialBookmark: Bookmark
}

/**
 * Holds the reader's bookmark for the whole page and writes it back to the
 * cookie whenever it moves.
 *
 * The context object and its hooks live in BookmarkContext.ts, so this module
 * exports a component and nothing else and Vite can refresh it in place.
 */
export function BookmarkProvider({
  initialBookmark,
  children,
}: BookmarkProviderProps): ReactElement {
  const [storedBookmark, setStoredBookmark] =
    useState<Bookmark>(initialBookmark)

  const setBookmark = useCallback((next: Bookmark) => {
    setStoredBookmark(next)
    // Written from the browser rather than through a server round trip. The
    // server never trusts this value for anything but choosing what to render,
    // and a round trip would put a network delay between a click and the
    // page reacting to it.
    if (next === null) {
      expireCookie(EPISODE_COOKIE)
    } else {
      writeCookie(
        EPISODE_COOKIE,
        serialiseBookmark(next),
        COOKIE_MAX_AGE_SECONDS,
      )
    }
  }, [])

  const value = useMemo<BookmarkContextValue>(
    () => ({ bookmark: storedBookmark, setBookmark }),
    [storedBookmark, setBookmark],
  )

  return <BookmarkContext value={value}>{children}</BookmarkContext>
}
