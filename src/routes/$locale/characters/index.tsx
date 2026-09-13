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
import { bookSections, characters, featuredCharacters } from '~/data/characters'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import { useBookmark } from '~/lib/progress/BookmarkContext'

export const Route = createFileRoute('/$locale/characters/')({
  head: ({ params }) => {
    if (!isLocale(params.locale)) {
      return {}
    }
    const dictionary = getDictionary(params.locale)

    return {
      meta: [
        { title: translate(dictionary, 'characters.pageTitle') },
        {
          name: 'description',
          content: translate(dictionary, 'characters.pageDescription'),
        },
      ],
    }
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
  const { bookmark } = useBookmark()

  return (
    <ArchivePage
      count={t('characters.count', { count: characters.length })}
      title={t('characters.title')}
    >
      <CharacterGrid
        bookmark={bookmark}
        featured={featuredCharacters}
        sections={bookSections}
      />
    </ArchivePage>
  )
}
