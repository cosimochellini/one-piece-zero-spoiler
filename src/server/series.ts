import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'

import { archiveOf, descriptionOf, SERIES } from '~/data/series'
import { parseCookieHeader } from '~/lib/cookies'

import { hubFor } from './archive/hub.server'

/** Public descriptions only: this does not load an archive. */
export const loadSeriesDescriptions = createServerFn().handler(() =>
  SERIES.map(({ description }) => description),
)

/** The hub; the decisions are `hubFor`'s. */
export const loadHub = createServerFn().handler(async () =>
  hubFor(
    parseCookieHeader(getRequestHeader('cookie')),
    await Promise.all(SERIES.map(async ({ slug }) => archiveOf(slug))),
  ),
)

/** Unknown series return nothing so the route can answer with a 404. */
export const loadSeriesDescription = createServerFn()
  .validator((input: unknown): string => {
    if (typeof input !== 'string') {
      throw new TypeError('A series slug is required')
    }
    return input
  })
  .handler(({ data }) => descriptionOf(data))
