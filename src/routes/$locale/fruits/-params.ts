import { useLocation, useNavigate } from '@tanstack/react-router'

import { type FruitParams, parseFruitParams } from '~/lib/search/fruitParams'

/**
 * The fruits page's picks, read from the address, and the way to move them.
 *
 * Read from the location rather than `Route.useSearch()`: the location
 * changes in the same event as the navigation, the match a few ticks later,
 * and a search field bound to the later one drops the letters typed in
 * between. The test beside this file holds it to that.
 */
export function useFruitParams(): [
  FruitParams,
  (next: FruitParams, replace: boolean) => void,
] {
  const params = parseFruitParams(useLocation({ select: (at) => at.search }))
  const navigate = useNavigate()
  const onParams = (next: FruitParams, replace: boolean): void => {
    void navigate({ replace, resetScroll: false, search: next, to: '.' })
  }

  return [params, onParams]
}
