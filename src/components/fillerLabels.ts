import type { Translate } from '~/i18n/types'
import { type BookmarkMode, episodeValue } from '~/lib/progress/episode'
import type { SkipRange } from '~/lib/view/filler'

/**
 * An episode, or a run of them, in the reader's unit. A season reader reads
 * codes, which carry their own prefix; everyone else reads `EP 54–60`.
 */
export function episodesLabel(
  t: Translate,
  mode: BookmarkMode,
  { first, last }: SkipRange,
): string {
  const from = episodeValue(first, mode)
  const to = episodeValue(last, mode)

  if (mode === 'season') {
    return first === last ? from : `${from}–${to}`
  }

  return first === last ?
      t('filler.episode', { value: from })
    : t('filler.episodes', { first: from, last: to })
}
