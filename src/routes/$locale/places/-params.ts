import { useLocation, useNavigate } from '@tanstack/react-router'
import { useDeferredValue } from 'react'

import { foldName } from '~/lib/search/fold'
import {
  isNarrowed,
  parsePlaceParams,
  type PlaceParams,
  reachedParams,
  stopMatches,
} from '~/lib/search/placeParams'
import type { StopView } from '~/lib/view/places'

/** The index's picks, what they leave, and the way to move them. */
export interface PlacePicks {
  /**
   * The ids of the open stops left, for the chart to light; `null` while
   * nothing is picked or searched, so the chart is drawn as it is.
   */
  lit: null | Set<string>
  /** The query, folded. */
  needle: string
  /** `replace` for the query, so typing leaves no history entry per letter. */
  onParams: (next: PlaceParams, replace: boolean) => void
  /** The picks, read from the address, less any the reader has not reached. */
  params: PlaceParams
  /** The open stops the picks and the query leave, in the reader's order. */
  shown: StopView[]
}

/**
 * The places page's picks, read from the address, and the open stops they
 * leave, for the index and the chart alike.
 *
 * Read from the location for the same reason as the fruits page's
 * (`../fruits/-params`): a field bound to the route's match drops the letters
 * typed while the router settles.
 */
export function usePlacePicks(open: StopView[]): PlacePicks {
  const address = parsePlaceParams(useLocation({ select: (at) => at.search }))
  const navigate = useNavigate()
  const params = reachedParams(address, open)
  // The field is never deferred; the index and the chart behind it are.
  const needle = useDeferredValue(foldName((params.q ?? '').trim()))
  const shown = open.filter((stop) => stopMatches(stop, params, needle))

  return {
    lit: isNarrowed(params) ? new Set(shown.map(({ id }) => id)) : null,
    needle,
    onParams: (next, replace) => {
      void navigate({ replace, resetScroll: false, search: next, to: '.' })
    },
    params,
    shown,
  }
}
