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
  'nav.places': 'Places',
  'nav.label': 'Pages',

  'hero.headline': 'The wiki stops where you stopped',
  'hero.lede':
    'Set your bookmark in the bar above: the anime episode, the season and episode, or the manga chapter you have reached. Every character, arc and island filed after it stays under fog until you decide otherwise.',

  'mark.unset': 'Set episode',
  'mark.episode': 'EP {threshold}',
  'mark.season': '{threshold}',
  'mark.chapter': 'CH {threshold}',
  'mark.change': 'Change your bookmark, {threshold}',

  'dialog.title': 'Where have you got to?',
  'dialog.lede':
    'Choose how you count, then the number. Everything filed after it stays under fog.',
  'dialog.modeLabel': 'Count by',
  'dialog.modeEpisode': 'Anime episode',
  'dialog.modeSeason': 'Season and episode',
  'dialog.modeChapter': 'Manga chapter',
  'dialog.episodeLabel': 'Episode you have reached',
  'dialog.chapterLabel': 'Chapter you have reached',
  'dialog.seasonLabel': 'Season',
  'dialog.seasonPlaceholder': 'Choose a season',
  'dialog.seasonOption': 'Season {season} · episodes {first}–{last}',
  'dialog.seasonOptionOpen': 'Season {season} · from episode {first}',
  'dialog.seasonEpisodeLabel': 'Episode within the season',
  'dialog.hint': 'Between 1 and {max}.',
  'dialog.errorEmpty': 'Enter a number.',
  'dialog.errorRange': 'Enter a number between 1 and {max}.',
  'dialog.errorSeason': 'Choose a season first.',
  'dialog.decrease': 'One back',
  'dialog.increase': 'One forward',
  'dialog.save': 'Save',
  'dialog.forget': 'Forget my bookmark',
  'dialog.cancel': 'Cancel',

  'veil.locked.episode': 'Under fog until episode {threshold}',
  'veil.locked.season': 'Under fog until {threshold}',
  'veil.locked.chapter': 'Under fog until chapter {threshold}',
  'veil.reveal': 'Lift the fog anyway',
  'veil.revealShort': 'Lift',
  'veil.placeholder': 'Spoiler',

  'chart.title': 'The route, as far as you have sailed',
  'chart.opensAt.episode': 'Episode {threshold}',
  'chart.opensAt.season': '{threshold}',
  'chart.opensAt.chapter': 'Chapter {threshold}',
  'chart.hereSet.episode': 'You are here · episode {threshold}',
  'chart.hereSet.season': 'You are here · {threshold}',
  'chart.hereSet.chapter': 'You are here · chapter {threshold}',
  'chart.hereUnset': 'No bookmark set · the whole route is under fog',

  'legend.open': 'open to you',
  'legend.covered': 'under fog',
  'legend.filed': 'filed so far',

  'faq.animeQ': 'Anime or manga?',
  'faq.animeA':
    'Either. Count by anime episode, by season and episode, or by manga chapter: every record carries an episode threshold and a chapter one, and an uncertain threshold is rounded up — one set too low lifts the fog early, which is the only bug here that matters.',
  'faq.bookmarkQ': 'Where does my bookmark live?',
  'faq.bookmarkA':
    'In a cookie on this device. The server reads it before the page is drawn, so nothing slips out in the moment before the script loads. No account, no tracking.',
  'faq.peekQ': 'Can I look anyway?',
  'faq.peekA':
    'Always. Nothing is shut away for good: a covered entry is one deliberate click from being read, and the page will not remember that you looked.',

  'footer.lead': 'Nobody should learn the ending before they get there.',
  'footer.colophon':
    'Zero Spoiler is a One Piece wiki drawn as a sea chart: the route is the archive sorted by the episode each entry opens at, and the horizon line is yours to move. Thresholds count anime episodes or manga chapters, whichever you pick. Your bookmark is a cookie on this device and is read on the server. Every picture is a line drawing made for this site; no official artwork appears. Set in Bricolage Grotesque, Instrument Sans and JetBrains Mono. MIT licence.',

  'characters.title': 'The signal book',
  'characters.count':
    '{count} characters, in the order the anime meets them. The fog does not answer a search.',
  'characters.searchLabel': 'Find a character',
  'characters.searchClear': 'Clear the search',
  'characters.shown': '{count} of {total} open characters shown',
  'characters.noMatch': 'No open character is called “{query}”.',
  'characters.foggedTitle': '{count} under fog',
  'characters.foggedHint':
    'Their names are covered, so they do not answer a search. Move your bookmark in the bar to open them.',
  'characters.foggedTitleOne': '1 under fog',
  'characters.allOpen': 'Nothing is under fog. Every character is open to you.',
  'characters.pageTitle': 'Characters — Zero Spoiler',
  'characters.pageDescription':
    'Twenty One Piece characters, each filed at the episode that introduces them and covered until you get there.',

  'character.opensAt.episode': 'First appears in episode {threshold}',
  'character.opensAt.season': 'First appears in {threshold}',
  'character.opensAt.chapter': 'First appears in chapter {threshold}',
  'character.foggedName': 'A character under fog',
  'character.foggedTitle': 'A character under fog — Zero Spoiler',
  'character.foggedDescription.episode':
    'A One Piece character filed at episode {threshold}. Set your bookmark to read the page.',
  'character.foggedDescription.season':
    'A One Piece character filed at {threshold}. Set your bookmark to read the page.',
  'character.foggedDescription.chapter':
    'A One Piece character filed at chapter {threshold}. Set your bookmark to read the page.',
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
    'The listed characters filed closest to this one on the route.',
  'character.notFoundTitle': 'No such character',
  'character.notFoundBody':
    'Nothing is filed under that address. The signal book lists everyone who is.',

  'places.title': 'The ship’s log',
  'places.count':
    '{count} places, in the order the ship puts in at them. Each one is filed at the episode that first shows it.',
  'places.pageTitle': 'Places — Zero Spoiler',
  'places.pageDescription':
    'The places of One Piece as ports of call, each filed at the episode that first shows it and covered until you get there.',
  'places.stage': 'Port of call {index} of {total}',
  'places.foggedName': 'A place under fog',
  'places.foggedDescription.episode':
    'A One Piece place filed at episode {threshold}. Set your bookmark to read its entry in the log.',
  'places.foggedDescription.season':
    'A One Piece place filed at {threshold}. Set your bookmark to read its entry in the log.',
  'places.foggedDescription.chapter':
    'A One Piece place filed at chapter {threshold}. Set your bookmark to read its entry in the log.',
  'places.firstSeen.episode': 'First seen in episode {threshold}',
  'places.firstSeen.season': 'First seen in {threshold}',
  'places.firstSeen.chapter': 'First seen in chapter {threshold}',
  'places.sea': 'Sea',
  'places.form': 'What it is',
  'places.arc': 'Arc',
  'places.landmark': 'Landmark',
  'places.filedHere': 'Filed here',
  'places.filedNone': 'Nothing in the archive is filed here yet.',

  'sea.east-blue': 'East Blue',
  'sea.grand-line': 'Grand Line',
  'sea.new-world': 'New World',

  'form.village': 'Village',
  'form.town': 'Town',
  'form.restaurant': 'Floating restaurant',
  'form.island': 'Island',

  'kind.character': 'Character',
  'kind.arc': 'Arc',
  'kind.place': 'Place',
  'kind.ship': 'Ship',

  'locale.label': 'Language',
  'locale.it': 'Italiano',
  'locale.en': 'English',
} as const
