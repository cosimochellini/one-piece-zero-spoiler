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
 * Placeholders are `{name}` and are filled by `t()`. The wording follows the
 * `tone-of-voice` skill in `.claude/skills`.
 */
export const enDictionary = {
  'site.name': 'Zero Spoiler',
  'site.title': 'Zero Spoiler | The One Piece wiki without spoilers',
  'site.description':
    'A One Piece wiki that hides every character, arc, place and devil fruit you have not reached yet. Set the episode or chapter you are on and read up to there.',
  'seo.imageAlt':
    'The Zero Spoiler card: the logo above a route that disappears into fog.',

  'nav.skip': 'Skip to content',
  'nav.characters': 'Characters',
  'nav.places': 'Places',
  'nav.fruits': 'Fruits',
  'nav.label': 'Pages',

  'hero.setBookmark': 'Set your bookmark',
  'hero.changeBookmark': 'Change bookmark · {threshold}',

  'home.point.episode': 'Episode {threshold}',
  'home.point.season': 'Season {season} · episode {episode}',
  'home.point.chapter': 'Chapter {threshold}',
  'home.unset': 'You have not set a bookmark yet. This is the start.',
  'home.recent': 'Just happened',
  'home.before': 'Just before',
  'home.noStories': 'No stories yet.',
  'home.storyAt.episode': 'Episode {threshold}',
  'home.storyAt.season': '{threshold}',
  'home.storyAt.chapter': 'About chapter {threshold}',
  'home.more': 'More stories',
  'home.cast': 'Who matters now',

  'mark.unset': 'Set episode',
  'mark.episode': 'EP {threshold}',
  'mark.season': '{threshold}',
  'mark.chapter': 'CH {threshold}',
  'mark.change': 'Change bookmark ({threshold})',

  'dialog.title': 'Where are you up to?',
  'dialog.lede':
    'Pick how you want to count, then enter the number. Anything after it stays under fog.',
  'dialog.modeLabel': 'Count by',
  'dialog.modeEpisode': 'Anime episode',
  'dialog.modeSeason': 'Season and episode',
  'dialog.modeChapter': 'Manga chapter',
  'dialog.episodeLabel': 'Last episode you watched',
  'dialog.chapterLabel': 'Last chapter you read',
  'dialog.seasonLabel': 'Season',
  'dialog.seasonPlaceholder': 'Choose a season',
  'dialog.seasonOption': 'Season {season} · episodes {first}–{last}',
  'dialog.seasonOptionOpen': 'Season {season} · episode {first} onwards',
  'dialog.seasonEpisodeLabel': 'Episode in that season',
  'dialog.hint': 'From 1 to {max}.',
  'dialog.errorEmpty': 'Enter a number.',
  'dialog.errorRange': 'Enter a number from 1 to {max}.',
  'dialog.errorSeason': 'Choose a season first.',
  'dialog.decrease': 'One less',
  'dialog.increase': 'One more',
  'dialog.save': 'Save',
  'dialog.forget': 'Clear bookmark',
  'dialog.cancel': 'Cancel',

  'veil.locked.episode': 'Under fog until episode {threshold}',
  'veil.locked.season': 'Under fog until {threshold}',
  'veil.locked.chapter': 'Under fog until chapter {threshold}',
  'veil.reveal': 'Show anyway',
  'veil.revealShort': 'Show',
  'veil.revealing': 'Loading…',
  'veil.peekFailed': 'Could not load it. Try again.',
  'veil.placeholder': 'Spoiler',

  'chart.opensAt.episode': 'Episode {threshold}',
  'chart.opensAt.season': '{threshold}',
  'chart.opensAt.chapter': 'Chapter {threshold}',
  'chart.hereSet.episode': 'You are here · episode {threshold}',
  'chart.hereSet.season': 'You are here · {threshold}',
  'chart.hereSet.chapter': 'You are here · chapter {threshold}',
  'chart.hereUnset': 'No bookmark set · everything is under fog',

  'footer.lead': 'A One Piece wiki that hides what comes after your bookmark.',
  'footer.colophon':
    'All the drawings are made for this site; no official artwork is used. Your bookmark is saved in a cookie on this device. MIT licence.',

  'characters.title': 'Characters',
  'characters.count':
    '{count} characters, in the order they appear in the anime. Characters under fog do not show up in search.',
  'characters.searchLabel': 'Search characters',
  'characters.searchClear': 'Clear search',
  'characters.shown': 'Showing {count} of {total} open characters',
  'characters.noMatch': 'No open character matches “{query}”.',
  'characters.foggedTitle': '{count} under fog',
  'characters.foggedHint':
    'Their names are hidden, so search does not find them. Move your bookmark forward to see them.',
  'characters.foggedTitleOne': '1 under fog',
  'characters.allOpen': 'Nothing is under fog. You can see every character.',
  'characters.pageTitle': 'Characters | Zero Spoiler',
  'characters.pageDescription':
    'One Piece characters, each hidden until the episode where they first appear.',
  'characters.featuredTitle': 'Main characters',
  'characters.featuredLede':
    'The Straw Hat crew and the other key characters of the story.',
  'characters.bookTitle': 'All characters',
  'characters.loading': 'Loading characters…',
  'characters.bookLede':
    'Every character in the wiki, grouped by the arc they first appear in.',
  'characters.sectionOpensAt.episode': 'From episode {threshold}',
  'characters.sectionOpensAt.season': 'From {threshold}',
  'characters.sectionOpensAt.chapter': 'From chapter {threshold}',
  'characters.sectionCount': '{count} characters',
  'characters.sectionCountOne': '1 character',
  'characters.sectionFogged': 'Arc under fog',

  'character.opensAt.episode': 'First appears in episode {threshold}',
  'character.opensAt.season': 'First appears in {threshold}',
  'character.opensAt.chapter': 'First appears in chapter {threshold}',
  'character.foggedName': 'A character under fog',
  'character.foggedTitle': 'A character under fog | Zero Spoiler',
  'character.foggedDescription.episode':
    'A One Piece character who first appears in episode {threshold}. Set your bookmark to read this page.',
  'character.foggedDescription.season':
    'A One Piece character who first appears in {threshold}. Set your bookmark to read this page.',
  'character.foggedDescription.chapter':
    'A One Piece character who first appears in chapter {threshold}. Set your bookmark to read this page.',
  'character.pageTitle': '{name} | Zero Spoiler',
  'character.back': 'All characters',
  'character.routeTitle': 'In story order',
  'character.position': 'Entry {index} of {total}',
  'character.positionLede':
    'Where this character comes in the story, with the entries just before and after.',
  'character.status': 'Status',
  'character.epithet': 'Epithet',
  'character.affiliation': 'Affiliation',
  'character.origin': 'Origin',
  'character.devilFruit': 'Devil fruit',
  'character.bounty': 'Bounty',
  'character.bountyValue': '{amount} Berry',
  'character.factsLabel': 'Facts up to your bookmark',
  'character.chronicleTitle': 'Story so far',
  'character.chronicleLede':
    'What happens to them up to your bookmark. Each part starts at the episode where it takes place.',
  'character.before': 'Before',
  'character.after': 'After',
  'character.routeStart': 'Nothing. This is the first entry.',
  'character.routeEnd': 'Nothing yet. This is the last entry in story order.',
  'character.nearbyTitle': 'Appearing around the same time',
  'character.nearbyLoading': 'Loading characters…',
  'character.nearbyLede':
    'Other characters who first appear close to this one.',
  'character.notFoundTitle': 'Character not found',
  'character.notFoundBody':
    'There is no character at this address. The characters page lists all of them.',

  'places.title': 'Places',
  'places.count':
    '{count} places, in the order the crew reaches them. Each one opens at the episode where it first appears.',
  'places.pageTitle': 'Places | Zero Spoiler',
  'places.pageDescription':
    'One Piece places in the order the crew reaches them, each hidden until the episode where it first appears.',
  'places.stage': 'Stop {index} of {total}',
  'places.foggedName': 'A place under fog',
  'places.foggedDescription.episode':
    'A One Piece place that first appears in episode {threshold}. Set your bookmark to read about it.',
  'places.foggedDescription.season':
    'A One Piece place that first appears in {threshold}. Set your bookmark to read about it.',
  'places.foggedDescription.chapter':
    'A One Piece place that first appears in chapter {threshold}. Set your bookmark to read about it.',
  'places.firstSeen.episode': 'First seen in episode {threshold}',
  'places.firstSeen.season': 'First seen in {threshold}',
  'places.firstSeen.chapter': 'First seen in chapter {threshold}',
  'places.sea': 'Sea',
  'places.form': 'Type',
  'places.arc': 'Arc',
  'places.landmark': 'Landmark',
  'places.filedHere': 'Found here',
  'places.filedNone': 'Nothing in the wiki is linked to this place yet.',

  'fruits.title': 'Devil fruits',
  'fruits.count':
    '{count} devil fruits, grouped by type and listed in the order the story names them. Fruits under fog do not show up in search.',
  'fruits.pageTitle': 'Devil fruits | Zero Spoiler',
  'fruits.pageDescription':
    'One Piece devil fruits, each hidden until the episode where it is first named.',
  'fruits.searchLabel': 'Search devil fruits',
  'fruits.searchClear': 'Clear search',
  'fruits.searchPlaceholder': 'Gum-Gum',
  'fruits.shown': 'Showing {count} of {total} open fruits',
  'fruits.noMatch': 'No open fruit matches “{query}”.',
  'fruits.plate': 'Group {index}',
  'fruits.specimen': 'Fruit {index}',
  'fruits.bandCount': '{count} fruits',
  'fruits.bandCountOne': '1 fruit',
  'fruits.lede.paramecia': 'Fruits that give the user a specific power.',
  'fruits.lede.zoan': 'Fruits that let the user turn into an animal.',
  'fruits.lede.logia': 'Fruits that let the user become an element.',
  'fruits.foggedTitle': '{count} under fog',
  'fruits.foggedTitleOne': '1 under fog',
  'fruits.foggedHint':
    'Their names are hidden, so search does not find them. Move your bookmark forward to see them.',
  'fruits.allOpen': 'Nothing of this type is under fog.',

  'fruit.opensAt.episode': 'First named in episode {threshold}',
  'fruit.opensAt.season': 'First named in {threshold}',
  'fruit.opensAt.chapter': 'First named in chapter {threshold}',
  'fruit.foggedName': 'A fruit under fog',
  'fruit.foggedTitle': 'A fruit under fog | Zero Spoiler',
  'fruit.foggedDescription.episode':
    'A One Piece devil fruit first named in episode {threshold}. Set your bookmark to read this page.',
  'fruit.foggedDescription.season':
    'A One Piece devil fruit first named in {threshold}. Set your bookmark to read this page.',
  'fruit.foggedDescription.chapter':
    'A One Piece devil fruit first named in chapter {threshold}. Set your bookmark to read this page.',
  'fruit.pageTitle': '{name} | Zero Spoiler',
  'fruit.back': 'All devil fruits',
  'fruit.form': 'Type',
  'fruit.eatersTitle': 'Who ate it',
  'fruit.eatersLede':
    'Characters who ate this fruit. Each one stays under fog until you reach them.',
  'fruit.eatersLoading': 'Loading characters…',
  'fruit.eatersNone': 'No character in the wiki has eaten it yet.',
  'fruit.siblingsTitle': 'Other fruits of this type',
  'fruit.siblingsLede':
    'The fruits of the same type named closest to this one.',
  'fruit.siblingsLoading': 'Loading fruits…',
  'fruit.siblingsNone': 'No other fruit of this type yet.',
  'fruit.notFoundTitle': 'Fruit not found',
  'fruit.notFoundBody':
    'There is no fruit at this address. The devil fruits page lists all of them.',

  'fruitForm.paramecia': 'Paramecia',
  'fruitForm.zoan': 'Zoan',
  'fruitForm.logia': 'Logia',

  'sea.east-blue': 'East Blue',
  'sea.grand-line': 'Grand Line',
  'sea.new-world': 'New World',

  'form.village': 'Village',
  'form.town': 'Town',
  'form.restaurant': 'Floating restaurant',
  'form.island': 'Island',
  'form.region': 'Region',

  'status.alive': 'Alive',
  'status.deceased': 'Deceased',
  'status.presumed-dead': 'Presumed dead',
  'status.captured': 'Captured',
  'status.imprisoned': 'Imprisoned',
  'status.missing': 'Missing',
  'status.unknown': 'Fate unknown',

  'kind.character': 'Character',
  'kind.arc': 'Arc',
  'kind.place': 'Place',
  'kind.ship': 'Ship',
  'kind.fruit': 'Devil fruit',

  'locale.label': 'Language',
  'locale.it': 'Italiano',
  'locale.en': 'English',
} as const
