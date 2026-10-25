import type { SeriesCopy } from '~/i18n/types'

/**
 * One Piece's own copy, in English: the words of the features no other
 * series has (owner, 2026-10-23). The keys are its own; `SeriesCopy` fails
 * one that redefines a shared key of `../en.ts`.
 */
export const onePieceEn = {
  'nav.fruits': 'Fruits',

  'home.filler.title': 'Watch out for filler',
  'home.filler.link': 'See all filler',

  'dialog.filler': 'Filler',

  'character.devilFruit': 'Devil fruit',
  'character.bounty': 'Bounty',
  'character.bountyValue': '{amount} Berry',

  'ship.foggedName': 'A ship under fog',
  'ship.foggedTitle': 'A ship under fog | Zero Spoiler',
  'ship.foggedDescription.episode':
    'A One Piece ship, under fog until episode {threshold}. Set your bookmark to read about it.',
  'ship.foggedDescription.season':
    'A One Piece ship, under fog until {threshold}. Set your bookmark to read about it.',
  'ship.foggedDescription.chapter':
    'A One Piece ship, under fog until chapter {threshold}. Set your bookmark to read about it.',
  'ship.drawingsLede':
    'Every drawing of this ship up to your bookmark, oldest first.',

  'filler.title': 'Filler episodes',
  'filler.count':
    '{episodes} episodes that are filler in whole or in part, and {unnumbered} films and specials. Each one opens at the episode where it airs.',
  'filler.pageTitle': 'Filler episodes | Zero Spoiler',
  'filler.pageDescription':
    'Which One Piece episodes are filler, mixed or recaps, the runs you can skip, and where the films and specials fit.',
  'filler.noBookmark':
    'You have not set a bookmark yet, so every title and plot is under fog. The runs to skip and the strip are only numbers, so they stay visible.',
  'filler.stripTitle': 'The whole series',
  'filler.stripLede': 'Every episode from 1 to {aired}, a hundred to a row.',
  'filler.stripLabel':
    'Episodes 1 to {aired}: {filler} filler, {mixed} mixed and {recap} recaps.',
  'filler.legendCanon': 'Canon',
  'filler.legendHere': 'Your bookmark',
  'filler.kind.filler': 'Filler',
  'filler.kind.mixed': 'Mixed',
  'filler.kind.recap': 'Recap',
  'filler.kind.film': 'Film',
  'filler.kind.special': 'Special',
  'filler.skipTitle': 'What you can skip',
  'filler.skipLede':
    'Pure filler and recaps, in runs. A mixed episode breaks a run, because skipping it loses part of the story.',
  'filler.skipCount': '{count} episodes',
  'filler.skipCountOne': '1 episode',
  'filler.episode': 'EP {value}',
  'filler.episodes': 'EP {first}–{last}',
  'filler.after': 'After {value}',
  'filler.catalogueTitle': 'Episode by episode',
  'filler.catalogueLede':
    'Grouped by the arc they air in. The entries after your bookmark are under fog.',
  'filler.countdown.next': 'The next filler is {count} episodes away.',
  'filler.countdown.nextOne': 'The next episode is filler.',
  'filler.countdown.inRun':
    'You are in a filler run. The canon picks up again at {resume}, {count} episodes away.',
  'filler.countdown.inRunOne':
    'You are in a filler run. The canon picks up again with the next episode.',
  'filler.countdown.none':
    'There is no filler ahead, up to episode {aired}, the last one aired.',
  'filler.countdown.span': 'Next run to skip: {span}.',
  'filler.countdown.label': 'Your episode and the five after it',
  'filler.countdown.here': 'your bookmark',
  'filler.cell.here': 'Now',
  'filler.cell.filler': 'Filler',
  'filler.cell.mixed': 'Mixed',
  'filler.cell.recap': 'Recap',
  'filler.cell.film': 'Film',
  'filler.cell.special': 'Special',
  'filler.entries': '{count} entries',
  'filler.entriesOne': '1 entry',
  'filler.foggedRows': '{count} entries under fog',

  'ships.title': 'Ships',
  'ships.builder': 'Designed by',
  'ships.launched': 'Received at',
  'ships.fate': 'Fate',
  'ships.ports': 'Places she reaches',

  'fruits.title': 'Devil fruits',
  'fruits.count':
    '{count} devil fruits, grouped by type and listed in the order the story names them. Fruits under fog do not show up in search.',
  'fruits.countSaga':
    '{count} devil fruits, grouped by saga and listed in the order the story names them. Fruits under fog do not show up in search.',
  'fruits.countFaction':
    '{count} devil fruits, grouped by the faction of the characters who ate them, as of your bookmark. A fruit appears under each of their factions. Fruits under fog do not show up in search.',
  'fruits.pageTitle': 'Devil fruits | Zero Spoiler',
  'fruits.pageDescription':
    'One Piece devil fruits, each hidden until the episode where it is first named.',
  'fruits.searchLabel': 'Search devil fruits',
  'fruits.searchClear': 'Clear search',
  'fruits.searchPlaceholder': 'Gum-Gum, Luffy',
  'fruits.controls': 'Filters',
  'fruits.searchOpen': 'Search',
  'fruits.view.legend': 'Group by',
  'fruits.view.type': 'Type',
  'fruits.view.saga': 'Saga',
  'fruits.view.faction': 'Faction',
  'fruits.form.legend': 'Fruit type',
  'fruits.form.all': 'All',
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
  'fruits.albumFailed': 'The devil fruits could not be loaded.',
  'fruits.albumRetry': 'Try again',
  'fruits.wall.title': '{count} devil fruits are under fog',
  'fruits.wall.ask': 'Which episode are you on?',
  'fruits.wall.browse': 'Browse anyway',
  'fruits.marquee': '{saga}: {count} fruits so far',
  'fruits.marqueeOne': '{saga}: 1 fruit so far',
  'fruits.marqueeNone': 'No new fruit in this saga yet.',
  'fruits.marqueeLink': 'See the whole saga',
  'fruits.later': '{count} fruits from later sagas, under fog',
  'fruits.laterOne': '1 fruit from a later saga, under fog',
  'fruits.laterAllOpen': 'Nothing from a later saga is under fog here.',
  'fruits.noFaction': 'No faction yet',
  'fruits.noneFogged': 'Nothing is under fog here.',
  'fruits.lastFruit.episode':
    'The last one was the {name}, episode {threshold}.',
  'fruits.lastFruit.season': 'The last one was the {name}, {threshold}.',
  'fruits.lastFruit.chapter':
    'The last one was the {name}, chapter {threshold}.',
  'fruits.moreEaters': 'and {count} more characters who ate it',
  'fruits.moreEatersOne': 'and 1 more character who ate it',

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
  'fruit.looks': 'Drawings of this fruit',
  'fruit.look.power': 'Power',
  'fruit.look.real': 'Real fruit',
  'fruit.look.awakening': 'Awakening',
  'fruit.historyTitle': 'History',
  'fruit.historyLede': 'What happens to this fruit, up to your bookmark.',
  'fruit.history.named': 'First named in the {saga}',
  'fruit.history.eaten': '{name} eats it',
  'fruit.history.deceased': '{name} dies',
  'fruit.history.presumed-dead': '{name} is presumed dead',
  'fruit.sagaTitle': 'Other fruits of this saga',
  'fruit.sagaLede':
    'The open fruits first named in the same saga, closest to this one.',
  'fruit.notFoundTitle': 'Fruit not found',
  'fruit.notFoundBody':
    'There is no fruit at this address. The devil fruits page lists all of them.',

  'fruitForm.paramecia': 'Paramecia',
  'fruitForm.zoan': 'Zoan',
  'fruitForm.logia': 'Logia',

  'sea.east-blue': 'East Blue',
  'sea.grand-line': 'Grand Line',
  'sea.new-world': 'New World',
  'sea.calm-belt': 'Calm Belt',
  'sea.red-line': 'Red Line',
  'sea.north-blue': 'North Blue',
  'sea.west-blue': 'West Blue',
  'sea.south-blue': 'South Blue',

  'faction.straw-hat-pirates': 'Straw Hat Pirates',
  'faction.straw-hat-grand-fleet': 'Straw Hat Grand Fleet',
  'faction.emperors': 'Emperors',
  'faction.warlords': 'Seven Warlords of the Sea',
  'faction.marines': 'Marines',
  'faction.world-government': 'World Government',
  'faction.cp9': 'Cipher Pol 9',
  'faction.cp0': 'Cipher Pol 0',
  'faction.knights-of-god': 'Knights of God',
  'faction.revolutionary-army': 'Revolutionary Army',
  'faction.baroque-works': 'Baroque Works',
  'faction.buggy-pirates': 'Buggy Pirates',
  'faction.cross-guild': 'Cross Guild',
  'faction.whitebeard-pirates': 'Whitebeard Pirates',
  'faction.blackbeard-pirates': 'Blackbeard Pirates',
  'faction.donquixote-pirates': 'Donquixote Pirates',
  'faction.beasts-pirates': 'Beasts Pirates',
  'faction.big-mom-pirates': 'Big Mom Pirates',
  'faction.thriller-bark-pirates': 'Thriller Bark Pirates',
  'faction.kuja-pirates': 'Kuja Pirates',
  'faction.galley-la': 'Galley-La Company',
  'faction.alabasta': 'Kingdom of Alabasta',
  'faction.tontatta': 'Tontatta Kingdom',
  'faction.punk-hazard': 'Punk Hazard laboratory',
  'faction.kozuki-family': 'Kozuki family',
  'faction.kozuki-alliance': 'Kozuki alliance',
  'faction.nine-red-scabbards': 'Nine Red Scabbards',
  'faction.kurozumi-family': 'Kurozumi family',
  'faction.independent': 'Independent',

  'kind.ship': 'Ship',
  'kind.fruit': 'Devil fruit',
} as const satisfies SeriesCopy
