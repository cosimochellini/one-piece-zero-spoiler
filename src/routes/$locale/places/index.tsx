/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram (the sea
 *   chart) over a Narrative Workflow (the log) · theme: Sea Chart (locked) ·
 *   enrichment: Tier B hand-built SVG (the chart, the PortPlate frames, the
 *   ships' own drawings on the route) · nav: N9 edge-aligned (shared) ·
 *   footer: Ft4 colophon (shared)
 * · idea: "where the crew is, drawn on a chart that fills in as you go; the
 *   log of every stop under it"
 * · differs from the previous build (Narrative Workflow alone) on
 *   macrostructure: the chart opens the page, the ships no longer do; theme
 *   is the project's locked system and does not rotate */
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { PortLog } from '~/components/PortLog'
import { SeaChart } from '~/components/SeaChart'
import { ShipLog } from '~/components/ShipLog'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { liftPort, liftRecord, loadPlaces } from '~/server/api'

export const Route = createFileRoute('/$locale/places/')({
  // Awaited, not streamed: a record tile elsewhere links here with a `#id`,
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
 * The places page (Hallmark macrostructure Map / Diagram, over the log).
 *
 * The brand line and a count, then the sea chart: the route as far as the
 * reader has come, the ship on it and fog past it. Under it, every place as
 * a numbered stop down one spine, in the order the ship reaches them, with
 * the reader's episode as a horizon; every stop below it keeps its number
 * and its episode while its name, drawing and colour stay out of the served
 * HTML. The ships the crew sails close the page: they travel on the chart
 * now, so they no longer open it.
 */
function PlacesPage(): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const { covered, filed, open, ships } = Route.useLoaderData()

  const peek = usePeek(liftPort)

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
      <PortLog
        bookmark={bookmark}
        covered={covered}
        open={open}
        peek={peek}
        peekRecord={peekRecord}
      />
      <ShipLog
        peekRecord={peekRecord}
        ships={ships}
      />
    </ArchivePage>
  )
}
