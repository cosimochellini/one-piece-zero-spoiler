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
    'A One Piece wiki that hides every character, arc and island filed after the episode you have reached.',

  'nav.skip': 'Skip to content',
  'nav.characters': 'Characters',
  'nav.label': 'Pages',
  'nav.home': 'Zero Spoiler, home',

  'hero.headline': 'The wiki stops where you stopped',
  'hero.lede':
    'Set the episode you have reached. Every character, arc and island filed after it stays under fog until you decide otherwise.',

  'dial.label': 'Episode you have reached',
  'dial.hint': 'Between 1 and {max}.',
  'dial.errorRange': 'Enter a number between 1 and {max}.',
  'dial.errorEmpty': 'Enter the episode you have reached.',
  'dial.decrease': 'One episode back',
  'dial.increase': 'One episode forward',
  'dial.clear': 'Forget my episode',

  'veil.locked': 'Under fog until episode {episode}',
  'veil.reveal': 'Lift the fog anyway',
  'veil.revealShort': 'Lift',
  'veil.placeholder': 'Spoiler',

  'chart.title': 'The route, as far as you have sailed',
  'chart.opensAt': 'Episode {episode}',
  'chart.hereSet': 'You are here · episode {episode}',
  'chart.hereUnset': 'No episode set · the whole route is under fog',

  'legend.open': 'open to you',
  'legend.covered': 'under fog',
  'legend.filed': 'filed so far',

  'faq.animeQ': 'Anime or manga?',
  'faq.animeA':
    'Anime. Every threshold counts anime episodes, and an uncertain one is rounded up — a threshold set too low lifts the fog early, which is the only bug here that matters.',
  'faq.bookmarkQ': 'Where does my episode live?',
  'faq.bookmarkA':
    'In a cookie on this device. The server reads it before the page is drawn, so nothing slips out in the moment before the script loads. No account, no tracking.',
  'faq.peekQ': 'Can I look anyway?',
  'faq.peekA':
    'Always. Nothing is shut away for good: a covered entry is one deliberate click from being read, and the page will not remember that you looked.',

  'footer.lead': 'Nobody should learn the ending before they get there.',
  'footer.colophon':
    'Zero Spoiler is a One Piece wiki drawn as a sea chart: the route is the archive sorted by the episode each entry opens at, and the horizon line is yours to move. Thresholds count anime episodes. Your bookmark is a cookie on this device and is read on the server. Every picture is a line drawing made for this site; no official artwork appears. Set in Bricolage Grotesque, Instrument Sans and JetBrains Mono. MIT licence.',

  'characters.title': 'The signal book',
  'characters.count':
    '{count} characters, in the order the anime meets them. The fog does not answer a search.',
  'characters.searchLabel': 'Find a character',
  'characters.searchClear': 'Clear the search',
  'characters.shown': '{count} of {total} open characters shown',
  'characters.noMatch': 'No open character is called “{query}”.',
  'characters.foggedTitle': '{count} under fog',
  'characters.foggedHint':
    'Their names are covered, so they do not answer a search. Move the dial to open them.',
  'characters.foggedTitleOne': '1 under fog',
  'characters.allOpen': 'Nothing is under fog. Every character is open to you.',
  'characters.pageTitle': 'Characters — Zero Spoiler',
  'characters.pageDescription':
    'Twenty One Piece characters, each filed at the episode that introduces them and covered until you get there.',

  'character.opensAt': 'First appears in episode {episode}',
  'character.foggedName': 'A character under fog',
  'character.foggedTitle': 'A character under fog — Zero Spoiler',
  'character.foggedDescription':
    'A One Piece character filed at episode {episode}. Set the episode you have reached to read the page.',
  'character.pageTitle': '{name} — Zero Spoiler',
  'character.back': 'All characters',
  'character.routeTitle': 'On the route',
  'character.position': 'Waypoint {index} of {total}',
  'character.positionLede':
    'Where this entry sits among everything the archive has filed, and what is filed either side of it.',
  'character.before': 'Filed before',
  'character.after': 'Filed after',
  'character.routeStart': 'Nothing. This is where the route begins.',
  'character.routeEnd': 'Nothing yet. This is the last entry filed.',
  'character.nearbyTitle': 'Sailing nearby',
  'character.nearbyLede':
    'The listed characters filed closest to this one, by episode.',
  'character.notFoundTitle': 'No such character',
  'character.notFoundBody':
    'Nothing is filed under that address. The signal book lists everyone who is.',

  'kind.character': 'Character',
  'kind.arc': 'Arc',
  'kind.place': 'Place',
  'kind.ship': 'Ship',

  'locale.label': 'Language',
  'locale.it': 'Italiano',
  'locale.en': 'English',
} as const
