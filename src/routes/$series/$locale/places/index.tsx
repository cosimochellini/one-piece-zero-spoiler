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
import { ClientOnly, createFileRoute } from '@tanstack/react-router'
import { createIsomorphicFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import type { Orientation } from '~/components/chartGeometry'
import { SeaChart } from '~/components/SeaChart'
import { measuredOrientation } from '~/components/useChartOrientation'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { parsePlaceParams } from '~/lib/search/placeParams'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$series/$locale/-peek'
import { useScrollBackOnceTall } from '~/routes/$series/$locale/-scrollBack'
import { liftPort, loadPlaces } from '~/server/api'

import { PlaceIndex } from './-index'
import { usePlacePicks } from './-params'

export const Route = createFileRoute('/$series/$locale/places/')({
  // The index's picks and its query live in the address, so a
  // filtered index can be shared and Back steps through the picks. An
  // unknown value falls back to its default.
  validateSearch: parsePlaceParams,
  // Awaited, not streamed: the chart is the page.
  loader: async ({ context }) => ({
    ...(await loadPlaces({
      data: { series: context.series.slug, locale: context.locale },
    })),
    served: servedOrientation(),
  }),
  head: ({ match, params }) => {
    return isLocale(params.locale) ?
        describeNamedPage({
          descriptionKey: 'places.pageDescription',
          kind: 'index',
          locale: params.locale,
          pathname: match.pathname,
          titleKey: 'places.pageTitle',
        })
      : {}
  },
  // The served chart's orientation is guessed from these request headers
  // (`servedOrientation`), so the HTML varies by them too.
  headers: () => ({ Vary: 'User-Agent, Sec-CH-UA-Mobile' }),
  component: PlacesPage,
})

/**
 * The places page (Hallmark macrostructure Map / Diagram).
 *
 * The brand line and a count, then the sea chart: the route as far as the
 * reader has come, the ship on it and fog past it. Under it, the index of
 * the places the reader has reached: a search and three picks (sea, type,
 * saga) in a bar, the places by sea, each a link to its own
 * page, and one line for the stops still under fog. The picks and the
 * search light the same stops on the chart and leave the rest faint. The
 * ships the crew sails travel on the chart, and each has a page of her own.
 *
 * The index is drawn only in the browser, once the page has hydrated: its
 * data is in the payload already, and leaving it out of the served HTML
 * keeps the render inside a Worker's CPU limit (#781). Each place's own page
 * is served in full.
 */
function PlacesPage(): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const { covered, filed, open, sagas, served, ships } = Route.useLoaderData()

  const peekPort = usePeek(liftPort)
  const { lit, ...picks } = usePlacePicks(open)
  // Always on: after a client visit the index is drawn at once, the page is
  // already tall, and the hook stops at its first look.
  useScrollBackOnceTall(true)

  return (
    <ArchivePage
      count={t('places.count', { count: filed })}
      title={t('places.title')}
    >
      <SeaChart
        bookmark={bookmark}
        covered={covered}
        lit={lit}
        open={open}
        peekPort={peekPort}
        sagas={sagas}
        served={served}
        ships={ships}
      />
      <ClientOnly>
        <PlaceIndex
          covered={covered}
          open={open}
          sagas={sagas}
          {...picks}
        />
      </ClientOnly>
    </ArchivePage>
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
