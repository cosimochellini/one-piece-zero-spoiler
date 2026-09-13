import {
  CHAPTER_CEILING,
  EPISODE_CEILING,
  FIRST_CHAPTER,
  FIRST_EPISODE,
} from './bounds'
import {
  formatSeasonCode,
  getSeason,
  locateEpisode,
  resolveEpisode,
  seasonLength,
} from './seasons'

export {
  CHAPTER_CEILING,
  EPISODE_CEILING,
  EPISODE_COOKIE,
  FIRST_CHAPTER,
  FIRST_EPISODE,
} from './bounds'

/**
 * The three ways a reader may count where they have got to. There is no
 * conversion between them: a reader picks one, and every threshold on the
 * site is then read in that unit.
 */
export type BookmarkMode = 'chapter' | 'episode' | 'season'

/**
 * The reader's bookmark. `null` means none has been set, and it is not the
 * same as episode 0 — the chart says so out loud, because a reader who never
 * set one should be told why everything is covered.
 *
 * A season bookmark keeps the season and the episode within it as the reader
 * typed them, so the chip can show `S02E03` back; the absolute episode it
 * stands for is derived through `~/lib/progress/seasons` when the fog is decided.
 */
export type Bookmark =
  | null
  | { readonly chapter: number; readonly mode: 'chapter' }
  | { readonly episode: number; readonly mode: 'episode' }
  | {
      readonly episode: number
      readonly mode: 'season'
      readonly season: number
    }

/**
 * The cookie grammar. A bare integer is an anime episode — that is what the
 * site wrote before it counted anything else, so a bookmark set last year
 * still works. `s2e3` is a season and an episode within it; `c1044` is a
 * chapter. Anchored, lower-case, digits only: anything else fails closed.
 */
const EPISODE_FORM = /^(?<episode>\d{1,4})$/u
const SEASON_FORM = /^s(?<season>\d{1,2})e(?<episode>\d{1,4})$/u
const CHAPTER_FORM = /^c(?<chapter>\d{1,4})$/u

function within(value: number, first: number, ceiling: number): boolean {
  return Number.isSafeInteger(value) && value >= first && value <= ceiling
}

// Each of the three returns `undefined` for "not my grammar" and `null` for
// "my grammar, and out of range". Keeping those apart is what makes `c9999`
// fail closed instead of falling through to a grammar that would read it as
// something else.

/** The legacy bare integer. */
function readEpisodeForm(raw: string): Bookmark | undefined {
  const match = EPISODE_FORM.exec(raw)
  if (match === null) {
    return undefined
  }

  const episode = Number(match.groups?.['episode'])
  return within(episode, FIRST_EPISODE, EPISODE_CEILING) ?
      { mode: 'episode', episode }
    : null
}

/** `s2e3`, checked against the season table rather than a flat range. */
function readSeasonForm(raw: string): Bookmark | undefined {
  const match = SEASON_FORM.exec(raw)
  if (match === null) {
    return undefined
  }

  const season = Number(match.groups?.['season'])
  const episode = Number(match.groups?.['episode'])
  return resolveEpisode(season, episode) === null ? null : (
      { mode: 'season', season, episode }
    )
}

/** `c1044`. */
function readChapterForm(raw: string): Bookmark | undefined {
  const match = CHAPTER_FORM.exec(raw)
  if (match === null) {
    return undefined
  }

  const chapter = Number(match.groups?.['chapter'])
  return within(chapter, FIRST_CHAPTER, CHAPTER_CEILING) ?
      { mode: 'chapter', chapter }
    : null
}

// In order, and the order is the grammar's: the bare integer is tried first
// because it is the oldest form and the only ambiguous-looking one.
const FORMS = [readEpisodeForm, readSeasonForm, readChapterForm] as const

/** Parses a raw cookie value into a valid bookmark, or `null`. */
export function parseBookmark(raw: null | string | undefined): Bookmark {
  if (raw === null || raw === undefined) {
    return null
  }

  for (const read of FORMS) {
    const bookmark = read(raw)
    if (bookmark !== undefined) {
      return bookmark
    }
  }

  return null
}

/** The cookie value for a bookmark; `parseBookmark` reads it back. */
export function serialiseBookmark(bookmark: NonNullable<Bookmark>): string {
  switch (bookmark.mode) {
    case 'chapter': {
      return `c${String(bookmark.chapter)}`
    }
    case 'episode': {
      return String(bookmark.episode)
    }
    case 'season': {
      return `s${String(bookmark.season)}e${String(bookmark.episode)}`
    }
  }
}

/**
 * The anime episode a bookmark stands for, or `null` for a chapter bookmark,
 * which stands for no episode at all.
 */
export function absoluteEpisodeOf(
  bookmark: NonNullable<Bookmark>,
): null | number {
  switch (bookmark.mode) {
    case 'chapter': {
      return null
    }
    case 'episode': {
      return bookmark.episode
    }
    case 'season': {
      return resolveEpisode(bookmark.season, bookmark.episode)
    }
  }
}

/** The unit thresholds are read in. With no bookmark, episodes. */
export function modeOf(bookmark: Bookmark): BookmarkMode {
  return bookmark === null ? 'episode' : bookmark.mode
}

/** `650`, `S02E03` or `1044`: the bookmark as the chip shows it. */
export function bookmarkValue(bookmark: NonNullable<Bookmark>): string {
  switch (bookmark.mode) {
    case 'chapter': {
      return String(bookmark.chapter)
    }
    case 'episode': {
      return String(bookmark.episode)
    }
    case 'season': {
      return formatSeasonCode(bookmark.season, bookmark.episode)
    }
  }
}

/**
 * A record's threshold in the reader's unit: `130`, `S04E38` or `218`. An
 * episode past the season table (which cannot happen while the table runs to
 * the ceiling) falls back to the bare number rather than to nothing.
 */
export function thresholdValue(
  gated: {
    readonly revealedAtChapter: number
    readonly revealedAtEpisode: number
  },
  mode: BookmarkMode,
): string {
  switch (mode) {
    case 'chapter': {
      return String(gated.revealedAtChapter)
    }
    case 'episode': {
      return String(gated.revealedAtEpisode)
    }
    case 'season': {
      const at = locateEpisode(gated.revealedAtEpisode)
      return at === null ?
          String(gated.revealedAtEpisode)
        : formatSeasonCode(at.season, at.episode)
    }
  }
}

/** Pulls a number into `1 … ceiling`. */
export function clampIndex(value: number, ceiling: number): number {
  if (!Number.isFinite(value)) {
    return 1
  }

  return Math.min(ceiling, Math.max(1, Math.trunc(value)))
}

/**
 * What the dialog holds while the reader is typing: a mode, the season as
 * the `<select>` value (empty until one is chosen), and the number as typed.
 */
export type Draft = {
  readonly mode: BookmarkMode
  readonly number: string
  readonly season: string
}

/** Why a draft is not usable yet. `season` means no season has been chosen. */
export type DraftProblem = 'empty' | 'range' | 'season'

/**
 * A graded draft carries both halves at once: the bookmark it would save and
 * the reason it cannot be saved yet. The dialog needs the second to decide
 * whether the button is live, and the first the moment it is.
 */
export type GradedDraft = {
  readonly bookmark: Bookmark
  readonly problem: DraftProblem | null
}

/** The draft a dialog opens with: the current bookmark, spelled back out. */
export function draftOf(bookmark: Bookmark): Draft {
  if (bookmark === null) {
    return { mode: 'episode', season: '', number: '' }
  }

  switch (bookmark.mode) {
    case 'chapter': {
      return { mode: 'chapter', season: '', number: String(bookmark.chapter) }
    }
    case 'episode': {
      return { mode: 'episode', season: '', number: String(bookmark.episode) }
    }
    case 'season': {
      return {
        mode: 'season',
        season: String(bookmark.season),
        number: String(bookmark.episode),
      }
    }
  }
}

/** The largest number the draft's field accepts, given its mode and season. */
export function ceilingOf(draft: Draft): null | number {
  switch (draft.mode) {
    case 'chapter': {
      return CHAPTER_CEILING
    }
    case 'episode': {
      return EPISODE_CEILING
    }
    case 'season': {
      const season = getSeason(Number(draft.season))
      return season === undefined ? null : seasonLength(season)
    }
  }
}

/**
 * What the two steppers beside the number field need to know: the range in
 * force, whether either end has been reached, and the value one step away.
 * An empty or unreadable field steps from zero, so the first press lands on
 * 1 rather than on NaN.
 */
export type Stepper = {
  readonly atCeiling: boolean
  readonly atFloor: boolean
  readonly ceiling: null | number
  readonly stepped: (delta: number) => string
}

/**
 * Wires the two steppers to the field as it currently reads, rather than to a
 * parsed number: the reader may be mid-edit with an empty or nonsense field,
 * and the buttons still have to say something sensible about the next press.
 */
export function stepperOf(draft: Draft): Stepper {
  const ceiling = ceilingOf(draft)
  const current = parseWhole(draft.number)
  const base = current ?? 0

  return {
    ceiling,
    atFloor: current !== null && current <= 1,
    atCeiling: ceiling !== null && current !== null && current >= ceiling,
    stepped: (delta) => {
      return ceiling === null ?
          draft.number
        : String(clampIndex(base + delta, ceiling))
    },
  }
}

function parseWhole(raw: string): null | number {
  if (raw.trim() === '') {
    return null
  }
  const value = Number(raw)
  return Number.isSafeInteger(value) ? value : null
}

/**
 * Grades what the reader has typed. Kept out of the component so the rules
 * can be tested directly, and so the component is left deciding only *when*
 * to show a message — which depends on whether the field has been blurred.
 */
export function gradeDraft(draft: Draft): GradedDraft {
  const ceiling = ceilingOf(draft)
  if (ceiling === null) {
    return { bookmark: null, problem: 'season' }
  }

  if (draft.number.trim() === '') {
    return { bookmark: null, problem: 'empty' }
  }

  const value = parseWhole(draft.number)
  if (value === null || !within(value, 1, ceiling)) {
    return { bookmark: null, problem: 'range' }
  }

  switch (draft.mode) {
    case 'chapter': {
      return { bookmark: { mode: 'chapter', chapter: value }, problem: null }
    }
    case 'episode': {
      return { bookmark: { mode: 'episode', episode: value }, problem: null }
    }
    case 'season': {
      return {
        bookmark: {
          mode: 'season',
          season: Number(draft.season),
          episode: value,
        },
        problem: null,
      }
    }
  }
}
