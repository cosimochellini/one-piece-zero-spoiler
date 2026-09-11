import { useState } from 'react'

import { SpoilerBadge } from '~/components/SpoilerBadge'

/**
 * The reveal state for the latest chapter badge.
 *
 * `SpoilerBadge` is controlled on purpose, so something has to own the state.
 * It lives here rather than in the route because route modules are excluded
 * from coverage and cannot be rendered by a test without a router, which
 * would leave the app's only piece of client state untested.
 */
export function LatestChapter() {
  const [revealed, setRevealed] = useState(false)

  // A block body, not a concise one: `no-confusing-void-expression` is part
  // of typescript-eslint's strictTypeChecked set and rejects an arrow that
  // implicitly returns the void result of a state setter.
  const handleReveal = () => {
    setRevealed(true)
  }

  return (
    <SpoilerBadge
      label="Latest chapter"
      revealed={revealed}
      onReveal={handleReveal}
    />
  )
}
