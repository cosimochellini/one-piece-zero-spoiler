import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'

import { useT } from '~/i18n/LocaleContext'
import {
  COOKIE_MAX_AGE_SECONDS,
  expireCookie,
  writeCookie,
} from '~/lib/cookies'

import {
  EPISODE_COOKIE,
  modeOf,
  serialiseBookmark,
  type Bookmark,
} from './episode'
import type { Gated } from './spoiler'
import { describeThreshold, type ThresholdSentence } from './threshold'

type BookmarkContextValue = {
  readonly bookmark: Bookmark
  readonly setBookmark: (next: Bookmark) => void
}

const BookmarkContext = createContext<BookmarkContextValue | null>(null)

export type BookmarkProviderProps = {
  /**
   * The bookmark as the server read it. Passing it in rather than reading
   * `document.cookie` in an effect is what keeps the first server-rendered
   * HTML correct — an effect would paint the uncovered page first and cover it
   * a frame later, which is a spoiler.
   */
  readonly initialBookmark: Bookmark
  readonly children: ReactNode
}

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
    if (next === null) expireCookie(EPISODE_COOKIE)
    else {
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

export function useBookmark(): BookmarkContextValue {
  const value = useContext(BookmarkContext)

  if (value === null) {
    throw new Error('useBookmark must be used inside a BookmarkProvider')
  }

  return value
}

/**
 * Names a record's threshold in the unit the reader counts in, so a card
 * says "Chapter 218" to a manga reader and "Episode 130" to everyone else.
 */
export function useThreshold(): (
  sentence: ThresholdSentence,
  gated: Gated,
) => string {
  const t = useT()
  const mode = modeOf(useBookmark().bookmark)

  return useCallback(
    (sentence: ThresholdSentence, gated: Gated) =>
      describeThreshold(t, sentence, gated, mode),
    [t, mode],
  )
}
