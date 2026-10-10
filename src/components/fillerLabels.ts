import type { Translate } from '~/i18n/types'
import { type BookmarkMode, episodeValue } from '~/lib/progress/episode'
import type {
  Countdown,
  FillerKind,
  FillerPlace,
  SkipRange,
} from '~/lib/view/filler'

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

/** `EP 54`, `S03E01`, or `After EP 1027` for an entry with no number. */
export function placeLabel(
  t: Translate,
  mode: BookmarkMode,
  place: FillerPlace,
): string {
  if ('episode' in place) {
    return episodesLabel(t, mode, { first: place.episode, last: place.episode })
  }

  return t('filler.after', {
    value: episodesLabel(t, mode, { first: place.after, last: place.after }),
  })
}

/** The one sentence the countdown leads with. */
export function sentenceOf(
  t: Translate,
  countdown: Countdown,
  aired: number,
): string {
  const { inRun, next } = countdown
  if (inRun !== null) {
    return inRun.distance === 1 ?
        t('filler.countdown.inRunOne')
      : t('filler.countdown.inRun', {
          count: inRun.distance,
          resume: inRun.resume,
        })
  }

  if (next === null) {
    return t('filler.countdown.none', { aired })
  }

  return next.distance === 1 ?
      t('filler.countdown.nextOne')
    : t('filler.countdown.next', { count: next.distance })
}

/** A cell's name: its episode, its kind, and whether it is the reader's. */
export function cellName(
  t: Translate,
  parts: { here: boolean; kind: FillerKind | null; number: string },
): string {
  return [
    parts.number,
    parts.kind === null ? null : t(`filler.kind.${parts.kind}`),
    parts.here ? t('filler.countdown.here') : null,
  ]
    .filter((part) => part !== null)
    .join('. ')
}

/**
 * Opens every closed `<details>` around a row, so a link to `#ep-54` lands on
 * the row even when its saga, or its run under fog, was folded away. Called
 * from the link's click, before the browser follows the hash.
 */
export function openTo(id: string): void {
  let node = document.querySelector(`#${CSS.escape(id)}`)?.parentElement ?? null

  while (node !== null) {
    if (node instanceof HTMLDetailsElement) {
      node.open = true
    }

    node = node.parentElement
  }
}
