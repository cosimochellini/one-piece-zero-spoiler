/** Name of the cookie holding the reader's bookmark. */
export const EPISODE_COOKIE = 'opzs_ep'

export const FIRST_EPISODE = 1

/**
 * Upper bound the dial accepts. It is a form range, not a claim about how many
 * episodes have aired: raise it when the archive needs to file something above
 * it. Anything larger is a typo, and a typo that sets the bookmark to 99999
 * would quietly reveal the whole site.
 */
export const EPISODE_CEILING = 1200

/**
 * The reader's progress. `null` means no bookmark has been set, and it is not
 * the same as episode 0 — the masthead says so out loud, because a reader who
 * never set one should be told why everything is covered.
 */
export type Progress = number | null

/** Parses a raw cookie value into a valid episode, or `null`. */
export function parseEpisode(raw: string | null | undefined): Progress {
  if (raw === null || raw === undefined || raw.trim() === '') return null

  const value = Number(raw)
  if (!Number.isInteger(value)) return null
  if (value < FIRST_EPISODE || value > EPISODE_CEILING) return null

  return value
}

/** Pulls a number into the accepted range. */
export function clampEpisode(value: number): number {
  if (!Number.isFinite(value)) return FIRST_EPISODE

  return Math.min(EPISODE_CEILING, Math.max(FIRST_EPISODE, Math.trunc(value)))
}

/** Why a draft typed into the episode field is not usable yet. */
export type DraftProblem = 'empty' | 'range'

export type DraftState = {
  readonly episode: Progress
  readonly problem: DraftProblem | null
}

/**
 * Grades what someone has typed into the episode field.
 *
 * Kept out of the component so the rules can be tested directly, and so the
 * component is left deciding only *when* to show a message — which is the part
 * that depends on whether the field has been blurred yet.
 */
export function gradeEpisodeDraft(draft: string): DraftState {
  if (draft.trim() === '') return { episode: null, problem: 'empty' }

  const episode = parseEpisode(draft)

  return episode === null
    ? { episode: null, problem: 'range' }
    : { episode, problem: null }
}
