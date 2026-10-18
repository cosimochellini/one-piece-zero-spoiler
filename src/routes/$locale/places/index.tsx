/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram (the sea
 *   chart) over a Catalogue index · theme: Sea Chart (locked) · enrichment:
 *   Tier B hand-built SVG (the chart, the ships' own drawings on the route,
 *   each place's plate in the index) · nav: N9 edge-aligned (shared) ·
 *   footer: Ft4 colophon (shared)
 * · idea: "where the crew is, drawn on a chart that fills in as you go; under
 *   it, every place reached, found by name, sea, type or saga, and the chart
 *   lights what the index keeps"
 * · differs from the previous build (the chart over a short list of links)
 *   on rhythm: the list became an index with the fruits album's pinned
 *   control bar (search, layout, and sea, type and saga pickers, all in the
 *   address), one pinned group per sea, rows or plates, and one fog line at
 *   the foot; theme is the project's locked system and does not rotate */
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { SeaChart } from '~/components/SeaChart'
import { ShipLog } from '~/components/ShipLog'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { parsePlaceParams } from '~/lib/search/placeParams'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { liftPort, liftRecord, loadPlaces } from '~/server/api'

import { PlaceIndex } from './-index'
import { usePlacePicks } from './-params'

export const Route = createFileRoute('/$locale/places/')({
  // The index's picks, its layout and its query live in the address, so a
  // filtered index can be shared and Back steps through the picks. An
  // unknown value falls back to its default.
  validateSearch: parsePlaceParams,
  // Awaited, not streamed: a ship's tile elsewhere links here with a `#id`,
  // and an anchor that is not in the first paint is one the browser cannot
  // scroll to.
  loader: async ({ context }) =>
    loadPlaces({ data: { locale: context.locale } }),
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
  component: PlacesPage,
})

/**
 * The places page (Hallmark macrostructure Map / Diagram).
 *
 * The brand line and a count, then the sea chart: the route as far as the
 * reader has come, the ship on it and fog past it. Under it, the index of
 * the places the reader has reached: a search, the layout and three picks
 * (sea, type, saga) in a bar, the places by sea, each a link to its own
 * page, and one line for the stops still under fog. The picks and the
 * search light the same stops on the chart and leave the rest faint. The
 * ships the crew sails close the page: they travel on the chart now, so
 * they no longer open it.
 */
function PlacesPage(): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const { covered, filed, open, sagas, ships } = Route.useLoaderData()

  const peekRecord = usePeek(liftRecord)
  const peekPort = usePeek(liftPort)
  const { lit, ...picks } = usePlacePicks(open)

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
        ships={ships}
      />
      <PlaceIndex
        covered={covered}
        open={open}
        sagas={sagas}
        {...picks}
      />
      <ShipLog
        peekRecord={peekRecord}
        ships={ships}
      />
    </ArchivePage>
  )
}
