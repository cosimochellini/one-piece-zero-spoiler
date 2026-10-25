/**
 * The floors every series' form ranges start at, kept in a module that imports
 * nothing so both the data layer (`~/lib/progress/seasons`) and the progress
 * library can read them without a cycle. Ceilings and cookie names belong to
 * each series' own description (`~/lib/progress/series`).
 */

export const FIRST_EPISODE = 1

export const FIRST_CHAPTER = 1
