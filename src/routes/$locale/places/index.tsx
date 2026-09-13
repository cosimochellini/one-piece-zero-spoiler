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
import { orderByMode } from '~/data/order'
import { places } from '~/data/places'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { modeOf } from '~/lib/progress/episode'

export const Route = createFileRoute('/$locale/places/')({
  head: ({ params }) => {
    if (!isLocale(params.locale)) {
      return {}
    }
    const dictionary = getDictionary(params.locale)

    return {
      meta: [
        { title: translate(dictionary, 'places.pageTitle') },
        {
          name: 'description',
          content: translate(dictionary, 'places.pageDescription'),
        },
      ],
    }
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

  return (
    <ArchivePage
      count={t('places.count', { count: places.length })}
      title={t('places.title')}
    >
      <PortLog
        bookmark={bookmark}
        entries={orderByMode(places, modeOf(bookmark))}
      />
    </ArchivePage>
  )
}
