import { type ListedSeries, SERIES } from '~/data/series'
import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'

/** A loaded registry entry for synchronous spoiler assertions. */
export interface LoadedSeries extends ListedSeries {
  archive: SeriesArchive
  bookmarks: Bookmark[]
}

export const LOADED_SERIES: LoadedSeries[] = await Promise.all(
  SERIES.map(async (entry) => {
    const archive = await entry.load()
    return { ...entry, archive, bookmarks: archive.bookmarks }
  }),
)

function onePiece(): LoadedSeries {
  const found = LOADED_SERIES.find(({ slug }) => slug === 'one-piece')
  if (found === undefined) {
    throw new Error('One Piece fixture is not registered')
  }
  return found
}
export const ONE_PIECE_LOADED = onePiece()
