/* Hallmark · pre-emit critique: P5 H4 E4 S5 R5 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Specimen · theme: Sea Chart
 *   (locked) · enrichment: Tier B hand-built SVG (a grown drawing for every
 *   fruit, eleven of them drawn by hand) · nav: N9 edge-aligned (shared)
 * · footer: Ft4 colophon (shared)
 * · idea: "a specimen sheet — three plates, one fruit to a row, and the fog
 *   keeps its own row"
 * · differs from the previous build (Narrative Workflow) on macrostructure;
 *   theme is the project's locked system and does not rotate */
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
 * The devil fruits page (Hallmark macrostructure 10, Specimen).
 *
 * A specimen sheet: the brand line and a count, then three plates — Paramecia,
 * Zoan, Logia — each a numbered label beside a heading, and under it one fruit
 * to a row: the number and the drawing in the margin, the kind, the episode,
 * the name and the sentence beside them. No hero and no display headline; the
 * sheet is the page.
 *
 * It is deliberately not the signal book's uniform grid and not the log's
 * numbered spine. The search filters the open rows only, and the covered ones
 * keep their own band at the foot of every plate, which is the spoiler rule
 * applied to a text field.
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
