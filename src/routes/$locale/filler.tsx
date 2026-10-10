/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram, v2 led by
 *   a countdown · theme: Sea Chart (locked) · enrichment: Tier B hand-built
 *   SVG (the whole series as a strip of cells) · nav: N9 (shared) · footer:
 *   Ft4 (shared) · mobile first
 * · idea: "how far the next filler is", said in one sentence over six
 *   calendar cells; then the runs to skip and the catalogue, both by saga
 *   with the saga pinned while it scrolls, the catalogue folded to the
 *   reader's own saga
 * · theme is the project's locked system and does not rotate */
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { FillerGuide } from '~/components/FillerGuide'
import { isLocale } from '~/i18n/locales'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { liftFiller, loadFiller } from '~/server/api'

export const Route = createFileRoute('/$locale/filler')({
  // Awaited, so a skip range's `#ep-54` lands on a row that is in the first
  // paint.
  loader: async ({ context }) =>
    loadFiller({ data: { locale: context.locale } }),
  head: ({ match, params }) => {
    return isLocale(params.locale) ?
        describeNamedPage({
          descriptionKey: 'filler.pageDescription',
          kind: 'index',
          locale: params.locale,
          pathname: match.pathname,
          titleKey: 'filler.pageTitle',
        })
      : {}
  },
  component: FillerPage,
})

/** The filler guide, reached by its address only: it is not in the bar. */
function FillerPage(): ReactElement {
  return (
    <FillerGuide
      page={Route.useLoaderData()}
      peek={usePeek(liftFiller)}
    />
  )
}
