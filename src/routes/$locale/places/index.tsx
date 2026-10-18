/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram (the sea
 *   chart) over a short list · theme: Sea Chart (locked) · enrichment: Tier B
 *   hand-built SVG (the chart, the ships' own drawings on the route) · nav:
 *   N9 edge-aligned (shared) · footer: Ft4 colophon (shared)
 * · idea: "where the crew is, drawn on a chart that fills in as you go; a
 *   page for every stop on it"
 * · differs from the previous build (the chart over the stacked log) on
 *   rhythm: each place's entry moved to its own page (#673), and a short
 *   list of links stands where the log was until the index (#675) replaces
 *   it; theme is the project's locked system and does not rotate */
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { SeaChart } from '~/components/SeaChart'
import { ShipLog } from '~/components/ShipLog'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { liftRecord, loadPlaces } from '~/server/api'

import { PlaceLinks } from './-links'

export const Route = createFileRoute('/$locale/places/')({
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
 * reader has come, the ship on it and fog past it. Under it, the places the
 * reader has reached, each a link to its own page, and how many are still
 * under fog. The ships the crew sails close the page: they travel on the
 * chart now, so they no longer open it.
 */
function PlacesPage(): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const { covered, filed, open, ships } = Route.useLoaderData()

  const peekRecord = usePeek(liftRecord)

  return (
    <ArchivePage
      count={t('places.count', { count: filed })}
      title={t('places.title')}
    >
      <SeaChart
        bookmark={bookmark}
        covered={covered}
        open={open}
        ships={ships}
      />
      <PlaceLinks
        covered={covered}
        open={open}
      />
      <ShipLog
        peekRecord={peekRecord}
        ships={ships}
      />
    </ArchivePage>
  )
}
