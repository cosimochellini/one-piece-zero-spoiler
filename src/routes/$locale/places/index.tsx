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
import { useServerFn } from '@tanstack/react-start'
import { type ReactElement, useCallback } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { PortLog } from '~/components/PortLog'
import { useLocale } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { liftPort, liftRecord, loadPlaces } from '~/server/api'

export const Route = createFileRoute('/$locale/places/')({
  // Awaited, not streamed: a record tile elsewhere links here with a `#id`,
  // and an anchor that is not in the first paint is one the browser cannot
  // scroll to.
  loader: async ({ context }) =>
    loadPlaces({ data: { locale: context.locale } }),
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
  const { locale, t } = useLocale()
  const { bookmark } = useBookmark()
  const { covered, filed, open } = Route.useLoaderData()

  const callPort = useServerFn(liftPort)
  const peek = useCallback(
    async (handle: string) => {
      const port = await callPort({ data: { handle, locale } })
      if (port === null) {
        throw new Error('No port is filed under that mark')
      }

      return port
    },
    [callPort, locale],
  )

  const callRecord = useServerFn(liftRecord)
  const peekRecord = useCallback(
    async (handle: string) => {
      const record = await callRecord({ data: { handle, locale } })
      if (record === null) {
        throw new Error('No record is filed under that mark')
      }

      return record
    },
    [callRecord, locale],
  )

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
