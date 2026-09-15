/* Hallmark · pre-emit critique: P5 H4 E4 S5 R5 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Catalogue · theme: Sea Chart
 *   (locked) · enrichment: Tier B hand-built SVG (CharacterCrest seals)
 * · nav: N9 edge-aligned (shared) · footer: Ft4 colophon (shared)
 * · idea: "a signal book — every flag on one chart, and the fog does not
 *   answer a search"
 * · differs from the previous build (Map / Diagram) on macrostructure; theme
 *   is the project's locked system and does not rotate */
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { CharacterGrid } from '~/components/CharacterGrid'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { liftCharacter, loadCharacters, loadShelves } from '~/server/api'

export const Route = createFileRoute('/$locale/characters/')({
  loader: async ({ context }) => ({
    // The fold: the count, and the thirty-six crests.
    page: await loadCharacters({ data: { locale: context.locale } }),
    // Not awaited. Three hundred and twenty-six tiles with a drawing each
    // are the heavy half of this page and the half below the fold, so they
    // stream into a boundary of their own while the crests are already up.
    shelves: loadShelves({ data: { locale: context.locale } }),
  }),
  head: ({ match, params }) => {
    return isLocale(params.locale) ?
        describeNamedPage({
          descriptionKey: 'characters.pageDescription',
          kind: 'index',
          locale: params.locale,
          pathname: match.pathname,
          titleKey: 'characters.pageTitle',
        })
      : {}
  },
  component: CharactersPage,
})

/**
 * The characters page (Hallmark macrostructure 11, Catalogue).
 *
 * A signal book: the brand line and a count, then the featured crests on one
 * uniform grid and the whole cast on shelves by arc, in the order the reader's
 * unit meets them. No hero, no display headline; the crests are the page. The
 * search above the grid filters the open characters, and the fogged ones sit
 * where they were, which is the spoiler rule applied to a text field.
 */
function CharactersPage(): ReactElement {
  const t = useT()
  const { page, shelves } = Route.useLoaderData()

  const peek = usePeek(liftCharacter)

  return (
    <ArchivePage
      count={t('characters.count', { count: page.filed })}
      title={t('characters.title')}
    >
      <CharacterGrid
        featuredCovered={page.featuredCovered}
        featuredOpen={page.featuredOpen}
        peek={peek}
        shelfCount={page.shelfCount}
        shelves={shelves}
      />
    </ArchivePage>
  )
}
