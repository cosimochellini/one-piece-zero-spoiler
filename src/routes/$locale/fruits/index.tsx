/* Hallmark · pre-emit critique: P5 H4 E4 S5 R5 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Portfolio Grid · theme: Sea
 *   Chart (locked) · enrichment: Tier B hand-built SVG (a grown drawing for
 *   every fruit, eleven of them drawn by hand) · nav: N9 edge-aligned (shared)
 * · footer: Ft4 colophon (shared)
 * · idea: "an album — three plates of tiles, the drawing big, two across on a
 *   phone, and the fog keeps its place at the foot of each plate"
 * · differs from the previous build (Specimen) on macrostructure; theme is
 *   the project's locked system and does not rotate */
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { SpecimenBands } from '~/components/SpecimenBands'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { liftFruit, loadFruits } from '~/server/api'

export const Route = createFileRoute('/$locale/fruits/')({
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
 * large, the name and the kind, and the whole of it is a link; two across on
 * a phone, up to six on a wide page. The sentence is the fruit page's.
 *
 * The search filters the open tiles only, and the covered ones keep their own
 * band at the foot of every plate, which is the spoiler rule applied to a
 * text field.
 */
function FruitsPage(): ReactElement {
  const t = useT()
  const { bands, filed } = Route.useLoaderData()

  const peek = usePeek(liftFruit)

  return (
    <ArchivePage
      count={t('fruits.count', { count: filed })}
      title={t('fruits.title')}
    >
      <SpecimenBands
        bands={bands}
        peek={peek}
      />
    </ArchivePage>
  )
}
