/* Hallmark · pre-emit critique: P5 H4 E4 S5 R5 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Portfolio Grid · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (a grown drawing for
 *   every fruit, eleven of them drawn by hand) · nav: N9 edge-aligned (shared)
 * · footer: Ft4 colophon (shared)
 * · idea: "an album — a pinned control bar (search, view, kind chips, all
 *   in the address; on a phone it folds to one row once you scroll) over
 *   three plates of tiles, the drawing big, who ate it
 *   under the name, two across on a phone, and the fog keeps its place at
 *   the foot of each plate as tiles of drifting fog that clear on a peek
 *   while the drawing draws itself in; with no bookmark, one wide bank of
 *   that fog with the question and the bookmark control in its centre, and
 *   the plates closed behind a disclosure under it"
 * · motion: fog drift (transform/opacity, paused off-screen, the wall's
 *   bank too), fog clear
 *   420ms, stroke draw-in once; reduced motion → still fog, 150ms crossfade
 * · differs from the previous build (Specimen) on macrostructure; theme is
 *   the project's locked system and does not rotate */
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { FruitsAlbum } from '~/components/FruitWall'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { parseFruitParams } from '~/lib/search/fruitParams'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { useFruitParams } from '~/routes/$locale/fruits/-params'
import { liftFruit, loadFruits } from '~/server/api'

export const Route = createFileRoute('/$locale/fruits/')({
  // The view, the kind and the query live in the address, so a filtered
  // album can be shared and Back steps through the picks. An unknown value
  // falls back to its default.
  validateSearch: parseFruitParams,
  // Awaited, not streamed. The count under the search field is over all three
  // plates, so a boundary around it alone would buy nothing while the plates
  // behind it were still on their way.
  loader: async ({ context }) =>
    loadFruits({ data: { locale: context.locale } }),
  head: ({ match, params }) => {
    return isLocale(params.locale) ?
        describeNamedPage({
          descriptionKey: 'fruits.pageDescription',
          kind: 'index',
          locale: params.locale,
          pathname: match.pathname,
          titleKey: 'fruits.pageTitle',
        })
      : {}
  },
  component: FruitsPage,
})

/**
 * The devil fruits page (Hallmark macrostructure 18, Portfolio Grid).
 *
 * An album: the brand line and a count, then three plates — Paramecia, Zoan,
 * Logia — each a pinned head over a grid of tiles. A tile is the drawing,
 * large, and the name, as one link; under them the eater the reader has
 * reached, as a link of their own, and the kind. Two across on a phone, up
 * to six on a wide page. The sentence is the fruit page's.
 *
 * A control bar pins over the plates: the search, the view and the kind
 * chips, all three kept in the address so a filtered album can be shared and
 * Back steps through the picks. On a phone it folds to one row.
 *
 * The search filters the open tiles only, and the covered ones keep their own
 * band at the foot of every plate, which is the spoiler rule applied to a
 * text field. A covered tile is a `FogTile`: the same drifting fog for every
 * fruit, lifted by hand in two presses.
 *
 * With no bookmark the album is a wall of fog with the control that sets
 * one, and the wall says the count itself, so the line under the heading
 * goes.
 */
function FruitsPage(): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const { bands, filed } = Route.useLoaderData()

  const peek = usePeek(liftFruit)
  const [params, onParams] = useFruitParams()

  return (
    <ArchivePage
      count={
        bookmark === null ? undefined : t('fruits.count', { count: filed })
      }
      title={t('fruits.title')}
    >
      <FruitsAlbum
        bands={bands}
        filed={filed}
        onParams={onParams}
        params={params}
        peek={peek}
      />
    </ArchivePage>
  )
}
