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
import { type Bookmark, serialiseBookmark } from './episode'
import type { BookmarkSeries } from './series'

/**
 * One bookmark is held for the whole document, so every veil on the page
 * opens and closes together rather than each reading the cookie for itself.
 */
export interface BookmarkProviderProps {
  /** Selected alongside the initial bookmark by the resolved route. */
  children: ReactNode
  series: BookmarkSeries | null
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
  initialBookmark: Bookmark
  /** Whether `initialBookmark` is a trial point, as the server read it. */
  initialTrial?: boolean
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
export function BookmarkProvider(props: BookmarkProviderProps): ReactElement {
  // The series and bookmark arrive together from the resolved route.
  return (
    <SeriesBookmarkProvider
      key={props.series?.slug}
      {...props}
    />
  )
}

/** A route change between series starts with a fresh, server-read bookmark. */
function SeriesBookmarkProvider({
  initialBookmark,
  initialTrial = false,
  children,
  series,
}: BookmarkProviderProps): ReactElement {
  const router = useRouter()
  // The point and whether it is a trial move together, in one update.
  const [stored, setStored] = useState<{ bookmark: Bookmark; trial: boolean }>(
    series === null ?
      { bookmark: null, trial: false }
    : { bookmark: initialBookmark, trial: initialTrial },
  )
  const [pending, startTransition] = useTransition()

  const setBookmark = useCallback(
    (next: Bookmark) => {
      if (series === null) {
        return
      }
      // The cookie first, and outside the transition. `invalidate` re-runs
      // every loader, and the server functions they call read this cookie out
      // of the request the browser is about to send; written after, they would
      // answer for the bookmark the reader has just left.
      // A saved bookmark, or none, ends a trial either way.
      saveCookie(series, next)

      // Inside a transition, so the pages the reader is looking at stay on
      // screen — already correct, already censored — until the new ones are
      // ready, and then both commit at once. A horizon that had moved past a
      // row still under fog, even for one frame, would read as a bug in the
      // one thing this site is for.
      startTransition(async () => {
        // Before the await, so it lands in this transition with the records.
        setStored({ bookmark: next, trial: false })
        await router.invalidate()
      })
    },
    [router, series],
  )

  // The caller is a link, so the page it opens reads this cookie; the cache
  // goes, since a page preloaded before the trial was read with no cookie.
  const enterTrial = useCallback(
    (point: NonNullable<Bookmark>) => {
      if (series === null) {
        return
      }
      writeCookie(series.trialCookie, serialiseBookmark(point))
      router.clearCache()
      startTransition(() => {
        setStored({ bookmark: point, trial: true })
      })
    },
    [router, series],
  )

  const leaveTrial = useCallback(() => {
    if (series === null) {
      return
    }
    expireCookie(series.trialCookie)
    startTransition(async () => {
      setStored({ bookmark: null, trial: false })
      await router.invalidate()
    })
  }, [router, series])

  const value = useMemo<BookmarkContextValue>(
    () => ({ ...stored, series, enterTrial, leaveTrial, pending, setBookmark }),
    [stored, series, enterTrial, leaveTrial, pending, setBookmark],
  )

  return <BookmarkContext value={value}>{children}</BookmarkContext>
}

/** Saving or forgetting progress ends this series' trial. */
function saveCookie(series: BookmarkSeries, next: Bookmark): void {
  expireCookie(series.trialCookie)
  if (next === null) {
    expireCookie(series.cookie)
  } else {
    writeCookie(series.cookie, serialiseBookmark(next), COOKIE_MAX_AGE_SECONDS)
  }
}
