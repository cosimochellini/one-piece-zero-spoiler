/**
 * The form ranges the bookmark accepts, kept in a module that imports nothing
 * so both the data layer (`~/lib/progress/seasons`) and the progress library can read
 * them without a cycle.
 */

/** Name of the cookie holding the reader's bookmark. */
export const EPISODE_COOKIE = 'opzs_ep'

export const FIRST_EPISODE = 1

/**
 * Upper bound the dialog accepts for an anime episode. It is a form range,
 * not a claim about how many episodes have aired: raise it when the archive
 * needs to file something above it. Anything larger is a typo, and a typo
 * that sets the bookmark to 99999 would quietly reveal the whole site.
 */
export const EPISODE_CEILING = 1300

export const FIRST_CHAPTER = 1

/** The same range for a manga chapter. */
export const CHAPTER_CEILING = 1300

/**
 * Name of the cookie holding a trial point: a bookmark the onboarding sets
 * for one browser session, so a visitor can open a page at the dial's point
 * without saving it. It carries no Max-Age and ends with the session.
 */
export const TRIAL_COOKIE = 'opzs_try'

/**
 * The last episode and chapter of East Blue, the stretch the onboarding dial
 * covers. A reader with no bookmark is sent this much and nothing past it, and
 * a trial point past it is ignored. The data tests hold both against the
 * first arc after East Blue.
 */
export const DEMO_LAST_EPISODE = 61

export const DEMO_LAST_CHAPTER = 100
