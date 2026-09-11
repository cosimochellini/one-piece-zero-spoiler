/**
 * The English dictionary, and the source of truth for the key set.
 *
 * It is named `enDictionary` rather than `en` for one blunt reason: Vitest
 * puts `it` in global scope, and a dictionary exported as `it` shadows it in
 * every test file that imports one. The pair is named symmetrically so the
 * trap is not reintroduced later.
 *
 * `TranslationKey` is derived from this object, so adding a key here is what
 * makes every other dictionary fail to typecheck until it catches up. Keys are
 * flat and dotted rather than nested: a flat record gives an exact key union,
 * where a nested one would need a recursive path type for no gain.
 *
 * Placeholders are `{name}` and are filled by `t()`.
 */
export const enDictionary = {
  'site.name': 'Zero Spoiler',
  'site.title': 'Zero Spoiler — a One Piece wiki that waits for you',
  'site.description':
    'A One Piece wiki that hides every entry filed after the episode you have reached.',

  'nav.skip': 'Skip to content',
  'mast.editionSet': 'Reading through episode {episode}',
  'mast.editionUnset': 'No episode set — everything is covered',

  'hero.headline': 'The wiki stops where you stopped',
  'hero.lede':
    'Set the episode you have reached. Every entry filed after it stays covered until you decide otherwise.',

  'dial.label': 'Episode you have reached',
  'dial.hint': 'Between 1 and {max}.',
  'dial.errorRange': 'Enter a number between 1 and {max}.',
  'dial.errorEmpty': 'Enter the episode you have reached.',
  'dial.decrease': 'One episode back',
  'dial.increase': 'One episode forward',
  'dial.clear': 'Forget my episode',

  'veil.locked': 'Covered until episode {episode}',
  'veil.reveal': 'Uncover anyway',
  'veil.revealShort': 'Uncover',
  'veil.placeholder': 'Spoiler',

  'hero.figureNote': 'episodes in',
  'hero.figureNoteUnset': 'no episode set',
  'hero.figureUnset': '—',

  'ledger.title': 'The archive, as it stands for you',
  'ledger.colEntry': 'Entry',
  'ledger.colKind': 'Kind',
  'ledger.colFrom': 'Open from',
  'ledger.colStatus': 'Status',
  'ledger.statusOpen': 'Open',
  'ledger.statusCovered': 'Covered',
  'ledger.caption':
    '{count} entries, sorted by the episode each one opens at. The line moves when you do.',

  'tally.open': 'open to you',
  'tally.covered': 'still covered',
  'tally.filed': 'filed so far',

  'colophon.animeLead': 'Anime, not manga.',
  'colophon.animeBody':
    'Every threshold counts anime episodes, and an uncertain one is rounded up — a threshold set too low uncovers a record early, which is the only bug here that matters.',
  'colophon.bookmarkLead': 'The bookmark stays with you.',
  'colophon.bookmarkBody':
    'Your episode lives in a cookie on this device and is read on the server before the page is drawn, so nothing slips out in the moment before the script loads. No account, no tracking.',
  'colophon.revealLead': 'Uncovering is your call.',
  'colophon.revealBody':
    'Nothing is shut away for good. A covered entry is always one deliberate click from being read, and the page will not remember that you looked.',

  'kind.character': 'Character',
  'kind.arc': 'Arc',
  'kind.place': 'Place',

  'footer.statement': 'Nobody should learn the ending before they get there.',
  'footer.note': 'Built for readers who take the long way.',

  'locale.label': 'Language',
  'locale.it': 'Italiano',
  'locale.en': 'English',
} as const
