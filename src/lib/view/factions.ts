import type { Faction } from '~/lib/view/records'

/**
 * Every faction, keyed so a faction added to the union does not compile until
 * it is listed here: the server prints a group only if it is one of these
 * (`~/server/archive/printed.server`).
 */
export const FACTIONS = new Set<string>(
  Object.keys({
    'alabasta': true,
    'baroque-works': true,
    'beasts-pirates': true,
    'big-mom-pirates': true,
    'blackbeard-pirates': true,
    'buggy-pirates': true,
    'cp0': true,
    'cp9': true,
    'cross-guild': true,
    'donquixote-pirates': true,
    'emperors': true,
    'galley-la': true,
    'independent': true,
    'knights-of-god': true,
    'kozuki-alliance': true,
    'kozuki-family': true,
    'kuja-pirates': true,
    'kurozumi-family': true,
    'marines': true,
    'nine-red-scabbards': true,
    'punk-hazard': true,
    'revolutionary-army': true,
    'straw-hat-grand-fleet': true,
    'straw-hat-pirates': true,
    'thriller-bark-pirates': true,
    'tontatta': true,
    'warlords': true,
    'whitebeard-pirates': true,
    'world-government': true,
  } satisfies Record<Faction, true>),
)
