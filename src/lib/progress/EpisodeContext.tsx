import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'

import {
  COOKIE_MAX_AGE_SECONDS,
  expireCookie,
  writeCookie,
} from '~/lib/cookies'

import { clampEpisode, EPISODE_COOKIE, type Progress } from './episode'

type EpisodeContextValue = {
  readonly progress: Progress
  readonly setProgress: (next: Progress) => void
}

const EpisodeContext = createContext<EpisodeContextValue | null>(null)

export type EpisodeProviderProps = {
  /**
   * The bookmark as the server read it. Passing it in rather than reading
   * `document.cookie` in an effect is what keeps the first server-rendered
   * HTML correct — an effect would paint the uncovered page first and cover it
   * a frame later, which is a spoiler.
   */
  readonly initialProgress: Progress
  readonly children: ReactNode
}

export function EpisodeProvider({
  initialProgress,
  children,
}: EpisodeProviderProps) {
  const [progress, setStoredProgress] = useState<Progress>(initialProgress)

  const setProgress = useCallback((next: Progress) => {
    const normalised = next === null ? null : clampEpisode(next)

    setStoredProgress(normalised)
    // Written from the browser rather than through a server round trip. The
    // server never trusts this value for anything but choosing what to render,
    // and a round trip would put a network delay between a keystroke and the
    // page reacting to it.
    if (normalised === null) expireCookie(EPISODE_COOKIE)
    else writeCookie(EPISODE_COOKIE, String(normalised), COOKIE_MAX_AGE_SECONDS)
  }, [])

  const value = useMemo<EpisodeContextValue>(
    () => ({ progress, setProgress }),
    [progress, setProgress],
  )

  return <EpisodeContext value={value}>{children}</EpisodeContext>
}

export function useEpisode(): EpisodeContextValue {
  const value = useContext(EpisodeContext)

  if (value === null) {
    throw new Error('useEpisode must be used inside an EpisodeProvider')
  }

  return value
}
