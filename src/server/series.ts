import { createServerFn } from '@tanstack/react-start'

import { descriptionOf, SERIES } from '~/data/series'

/** Public descriptions only: this does not load an archive. */
export const loadSeriesDescriptions = createServerFn().handler(() =>
  SERIES.map(({ description }) => description),
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
