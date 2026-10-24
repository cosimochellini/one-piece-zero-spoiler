import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'

import { archiveOf, descriptionOf, SERIES } from '~/data/series'
import { parseCookieHeader } from '~/lib/cookies'
import { parseBookmark } from '~/lib/progress/episode'

import { hubSeries } from './archive/hub.server'

/** Public descriptions only: this does not load an archive. */
export const loadSeriesDescriptions = createServerFn().handler(() =>
  SERIES.map(({ description }) => description),
)

/**
 * The hub: every series with its count and the reader's saved bookmark on
 * it. Only the saved one: a trial is a visit to one series' demo, and a
 * crawler has no bookmark to be shown.
 */
export const loadHub = createServerFn().handler(async () => {
  const jar = parseCookieHeader(getRequestHeader('cookie'))
  return Promise.all(
    SERIES.map(async ({ description, slug }) =>
      hubSeries(
        await archiveOf(slug),
        parseBookmark(jar.get(description.cookie), description),
      ),
    ),
  )
})

/** Unknown series return nothing so the route can answer with a 404. */
export const loadSeriesDescription = createServerFn()
  .validator((input: unknown): string => {
    if (typeof input !== 'string') {
      throw new TypeError('A series slug is required')
    }
    return input
  })
  .handler(({ data }) => descriptionOf(data))
