import { useSyncExternalStore } from 'react'

import type { Orientation } from '~/components/chartGeometry'

/** Below this width the chart stands upright and the route runs down. */
const UPRIGHT = '(max-width: 37.5rem)'

/** The orientation the chart takes at the window's width now. */
export function measuredOrientation(): Orientation {
  return matchMedia(UPRIGHT).matches ? 'down' : 'across'
}

function subscribe(onChange: () => void): () => void {
  const query = matchMedia(UPRIGHT)
  query.addEventListener('change', onChange)

  return () => {
    query.removeEventListener('change', onChange)
  }
}

/**
 * The orientation to draw the sea chart in: the one the server drew while
 * the page hydrates, so the first render matches the HTML, then the one the
 * window's width asks for, following it as the window turns or resizes.
 */
export function useChartOrientation(served: Orientation): Orientation {
  return useSyncExternalStore(subscribe, measuredOrientation, () => served)
}
