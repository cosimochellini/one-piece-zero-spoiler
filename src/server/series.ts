import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'

import { COMING_SERIES, descriptionOf } from '~/data/series'
import { parseCookieHeader } from '~/lib/cookies'

import { hubFor, openArchives, openDescriptions } from './archive/hub.server'

/** Public descriptions of the open series only: this loads no archive. */
export const loadSeriesDescriptions = createServerFn().handler(() =>
  openDescriptions(),
)

/**
 * The hub, of the open series; the decisions are `hubFor`'s. A series filed
 * but not open is still a name the hub announces as coming.
 */
export const loadHub = createServerFn().handler(async () => ({
  series: hubFor(
    parseCookieHeader(getRequestHeader('cookie')),
    await openArchives(),
  ),
  coming: COMING_SERIES,
}))

/** Unknown series return nothing so the route can answer with a 404. */
export const loadSeriesDescription = createServerFn()
  .validator((input: unknown): string => {
    if (typeof input !== 'string') {
      throw new TypeError('A series slug is required')
    }
    return input
  })
  .handler(({ data }) => descriptionOf(data))
