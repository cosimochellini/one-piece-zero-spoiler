import { useRouter } from '@tanstack/react-router'
import {
  type ReactElement,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
  useTransition,
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
   *
   * It seeds the state and nothing more. The records themselves come from the
   * loaders, which read the cookie server-side on every pass, so a stale value
   * here can never open a record the reader has not reached.
   */
  readonly initialBookmark: Bookmark
}

/**
 * Holds the reader's bookmark for the whole page and writes it back to the
 * cookie whenever it moves.
 *
 * Moving it also re-reads the pages: the records live on the server now, and
 * the loaders decide what the reader may see from the cookie this writes.
 *
 * The context object and its hooks live in BookmarkContext.ts, so this module
 * exports a component and nothing else and Vite can refresh it in place.
 */
export function BookmarkProvider({
  initialBookmark,
  children,
}: BookmarkProviderProps): ReactElement {
  const router = useRouter()
  const [storedBookmark, setStoredBookmark] =
    useState<Bookmark>(initialBookmark)
  const [pending, startTransition] = useTransition()

  const setBookmark = useCallback(
    (next: Bookmark) => {
      // The cookie first, and outside the transition. `invalidate` re-runs
      // every loader, and the server functions they call read this cookie out
      // of the request the browser is about to send; written after, they would
      // answer for the bookmark the reader has just left.
      if (next === null) {
        expireCookie(EPISODE_COOKIE)
      } else {
        writeCookie(
          EPISODE_COOKIE,
          serialiseBookmark(next),
          COOKIE_MAX_AGE_SECONDS,
        )
      }

      // Inside a transition, so the pages the reader is looking at stay on
      // screen — already correct, already censored — until the new ones are
      // ready, and then both commit at once. A horizon that had moved past a
      // row still under fog, even for one frame, would read as a bug in the
      // one thing this site is for.
      startTransition(async () => {
        // Before the await, so it lands in this transition with the records.
        setStoredBookmark(next)
        await router.invalidate()
      })
    },
    [router],
  )

  const value = useMemo<BookmarkContextValue>(
    () => ({ bookmark: storedBookmark, pending, setBookmark }),
    [storedBookmark, pending, setBookmark],
  )

  return <BookmarkContext value={value}>{children}</BookmarkContext>
}
