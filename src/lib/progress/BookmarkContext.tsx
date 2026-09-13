import {
  createContext,
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

import { type Bookmark, EPISODE_COOKIE, serialiseBookmark } from './episode'

/** What the provider puts on the context: the bookmark, and how to move it. */
export type BookmarkContextValue = {
  readonly bookmark: Bookmark
  readonly setBookmark: (next: Bookmark) => void
}

export const BookmarkContext = createContext<BookmarkContextValue | null>(null)

export type BookmarkProviderProps = {
  /**
   * The bookmark as the server read it. Passing it in rather than reading
   * `document.cookie` in an effect is what keeps the first server-rendered
   * HTML correct — an effect would paint the uncovered page first and cover it
   * a frame later, which is a spoiler.
   */
  readonly children: ReactNode
  readonly initialBookmark: Bookmark
}

/**
 * Holds the reader's bookmark for the whole page and writes it back to the
 * cookie whenever it moves.
 */
export function BookmarkProvider({
  initialBookmark,
  children,
}: BookmarkProviderProps) {
  const [bookmark, setStoredBookmark] = useState<Bookmark>(initialBookmark)

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
    () => ({ bookmark, setBookmark }),
    [bookmark, setBookmark],
  )

  return <BookmarkContext value={value}>{children}</BookmarkContext>
}
