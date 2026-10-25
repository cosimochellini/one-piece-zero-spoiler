/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram (the world
 *   map) over a Catalogue index · theme: Sea Chart (locked) · enrichment:
 *   Tier B hand-built SVG (the world in Oda's layout, an outline per island,
 *   the ships' own drawings on the route, each place's plate in the index)
 *   · nav: N9 edge-aligned (shared) · footer: Ft4 colophon (shared)
 * · idea: "the world as Oda draws it, filling in as you go; under it, every
 *   place reached as a plate, found by name, sea, type or saga, and the map
 *   lights what the index keeps"
 * · differs from the previous build (#671's schematic chart, rows or plates)
 *   on structure: the map is the world, zooms and pans across and names
 *   every stop; the index is plates only, the layout switch gone (owner,
 *   #728); theme is the project's locked system and does not rotate
 * · #676: the ships band at the foot is gone; each ship has her own page,
 *   reached from her peek on the chart */
import { createFileRoute } from '@tanstack/react-router'
import { createIsomorphicFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import type { ReactElement } from 'react'

import type { Orientation } from '~/components/chartGeometry'
import { measuredOrientation } from '~/components/useChartOrientation'
import { parsePlaceParams } from '~/lib/search/placeParams'
import { seriesPageHead } from '~/routes/$locale/-head'
import { requirePage } from '~/routes/$series/$locale/-found'
import { usePeek } from '~/routes/$series/$locale/-peek'
import { liftPort, loadPlaces } from '~/server/api'

import { PlacesBody } from './-page'

export const Route = createFileRoute('/$series/$locale/places/')({
  // The index's picks and its query live in the address, so a
  // filtered index can be shared and Back steps through the picks. An
  // unknown value falls back to its default.
  validateSearch: parsePlaceParams,
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'places')
  },
  // Awaited, not streamed: the chart, or the index without one, is the
  // page. Only a series with the world map has an orientation to serve it in.
  loader: async ({ context }) => ({
    ...(await loadPlaces({
      data: { series: context.series.slug, locale: context.locale },
    })),
    served: context.series.features.worldMap ? servedOrientation() : null,
  }),
  head: (match) => seriesPageHead('places', match),
  // The served chart's orientation is guessed from these request headers
  // (`servedOrientation`), so the HTML varies by them too; a series without
  // the map serves the same HTML to every browser.
  headers: ({ loaderData }) =>
    loaderData?.served === null ? {} : { Vary: 'User-Agent, Sec-CH-UA-Mobile' },
  component: PlacesPage,
})

/** The places page: the loaded stops, drawn by `PlacesBody`. */
function PlacesPage(): ReactElement {
  const { served, ...page } = Route.useLoaderData()

  return (
    <PlacesBody
      page={page}
      peekPort={usePeek(liftPort)}
      served={served}
    />
  )
}

/**
 * The orientation the server draws the chart in. It cannot measure the
 * window, so a phone's browser (`Sec-CH-UA-Mobile`, or `Mobi` in the user
 * agent) gets the chart upright and every other one across; the page turns
 * it once it runs if the guess was wrong. Drawing one orientation instead of
 * both halves the chart's render (#781).
 */
const servedOrientation = createIsomorphicFn()
  .server((): Orientation =>
    (
      getRequestHeader('sec-ch-ua-mobile') === '?1'
      || (getRequestHeader('user-agent') ?? '').includes('Mobi')
    ) ?
      'down'
    : 'across',
  )
  .client(measuredOrientation)
