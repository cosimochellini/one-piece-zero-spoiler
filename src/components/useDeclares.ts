import { useMatch } from '@tanstack/react-router'

import { hasPage, type SeriesPage } from '~/lib/progress/series'

/**
 * Whether the series in the address declares a page (`hasPage`), from the
 * public description its `/$series` route holds. With no description (a bare
 * test router, never a series page) every page counts as declared.
 */
export function useDeclares(): (page: SeriesPage) => boolean {
  const described = useMatch({ from: '/$series', shouldThrow: false })?.context
    .series

  return (page) => described === undefined || hasPage(described, page)
}
