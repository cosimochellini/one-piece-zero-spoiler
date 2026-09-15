/* Hallmark · pre-emit critique: P5 H4 E4 S5 R5 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Narrative Workflow · theme:
 *   Sea Chart (locked) · enrichment: Tier B hand-built SVG (PortPlate frames,
 *   five new place drawings) · nav: N9 edge-aligned (shared) · footer: Ft4
 *   colophon (shared)
 * · idea: "a ship's log — the ports in the order the ship put in, the
 *   reader's episode a horizon down the spine"
 * · differs from the previous build (Catalogue) on macrostructure; theme is
 *   the project's locked system and does not rotate */
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { PortLog } from '~/components/PortLog'
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
 * The places page (Hallmark macrostructure 14, Narrative Workflow).
 *
 * A ship's log: the brand line and a count, then every place as a
 * numbered port of call down one spine, in the order the ship puts in at
 * them. No hero and no display headline; the log is the page. The reader's
 * episode is drawn as a horizon on the spine, and every port below it keeps
 * its number and its episode while its name, drawing and colour stay out of
 * the served HTML.
 */
function PlacesPage(): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const { covered, filed, open } = Route.useLoaderData()

  const peek = usePeek(liftPort)

  const peekRecord = usePeek(liftRecord)

  return (
    <ArchivePage
      count={t('places.count', { count: filed })}
      title={t('places.title')}
    >
      <PortLog
        bookmark={bookmark}
        covered={covered}
        open={open}
        peek={peek}
        peekRecord={peekRecord}
      />
    </ArchivePage>
  )
}
