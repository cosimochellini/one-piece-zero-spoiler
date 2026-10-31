/**
 * The copy every series shares, in English: the site, its pages and its
 * controls, and the source of truth for the shared key set.
 *
 * It is named `enDictionary` rather than `en` for one blunt reason: Vitest
 * puts `it` in global scope, and a dictionary exported as `it` shadows it in
 * every test file that imports one. The pair is named symmetrically so the
 * trap is not reintroduced later.
 *
 * `SharedKey` is derived from this object, so adding a key here is what makes
 * the Italian dictionary fail to typecheck until it catches up. Keys are flat
 * and dotted rather than nested: a flat record gives an exact key union, where
 * a nested one would need a recursive path type for no gain.
 *
 * Placeholders are `{name}` and are filled by `t()`; `{series}` is the name of
 * the series the page belongs to. The wording follows the `tone-of-voice`
 * skill in `.claude/skills`.
 *
 * Each series' own words are in its folder (`./one-piece/en.ts`,
 * `./hunter-x-hunter/en.ts`): the keys every series words for itself
 * (`CommonKey`) and those of its own features. They stay on the server and
 * reach a page with the series' pages only, so no reader downloads another
 * series' copy.
 */
export const enDictionary = {
  'site.name': 'Zero Spoiler',
  'site.title': 'Zero Spoiler | The {series} wiki without spoilers',
  'hub.title': 'Zero Spoiler | Wikis without spoilers',
  'hub.description':
    'Spoiler-free wikis, one per series. Each series keeps its own bookmark, and every entry past it stays under fog.',
  'hub.headline': 'Wikis without spoilers',
  'hub.lede':
    'One wiki per series, each with its own bookmark. Entries past your bookmark stay under fog.',
  'hub.count': '{count} entries',
  'hub.noBookmark': 'No bookmark yet',
  'hub.coming': 'Coming later',
  'seo.imageAlt':
    'The Zero Spoiler card: the logo above a route that disappears into fog.',

  'nav.skip': 'Skip to content',
  'nav.characters': 'Characters',
  'nav.places': 'Places',
  'nav.label': 'Pages',
  'nav.hub': 'All series',

  'hero.headline': 'The {series} wiki without spoilers',
  'hero.setBookmark': 'Set your bookmark',
  'hero.changeBookmark': 'Change bookmark · {threshold}',

  'onboarding.dial': 'Point in the story',
  'onboarding.unitEpisode': 'Episode',
  'onboarding.unitChapter': 'Chapter',
  'onboarding.unitBook': 'Book {book}, chapter',
  'onboarding.here': 'I’m here',
  'onboarding.further': 'I’m further on',
  'onboarding.start': 'Starting now · EP 1',
  'onboarding.arcs': 'Arcs',
  'onboarding.cast': 'Characters',
  'onboarding.tryHint':
    'Open an entry to see its page at this point. Your bookmark is not saved.',
  'onboarding.tail':
    '{count} more entries stay under fog until your bookmark reaches them.',

  'trial.episode': 'Trying episode {threshold}. Nothing is saved.',
  'trial.chapter': 'Trying chapter {threshold}. Nothing is saved.',
  'trial.book': 'Trying book {book}, chapter {chapter}. Nothing is saved.',
  'trial.save': 'Save this point',
  'trial.leave': 'Leave the trial',

  'welcome.title': 'What you can do now',
  'welcome.lede':
    'Your bookmark is saved. Every page shows what you have reached and keeps the rest under fog.',
  'welcome.dismiss': 'Close',

  'home.point.episode': 'Episode {threshold}',
  'home.point.season': 'Season {season} · episode {episode}',
  'home.point.chapter': 'Chapter {threshold}',
  'home.point.book': 'Book {book}, chapter {chapter}',
  'home.recent': 'Just happened',
  'home.before': 'Just before',
  'home.noStories': 'No stories yet.',
  'home.storyAt.episode': 'Episode {threshold}',
  'home.storyAt.season': '{threshold}',
  'home.storyAt.chapter': 'About chapter {threshold}',
  'home.storyAt.book': 'About book {book}, chapter {chapter}',
  'home.more': 'More stories',
  'home.cast': 'Who matters now',

  'mark.unset': 'Set episode',
  'mark.unsetShort': 'EP ?',
  'mark.episode': 'EP {threshold}',
  'mark.season': '{threshold}',
  'mark.chapter': 'CH {threshold}',
  'mark.book': 'B{book} · CH {chapter}',
  'mark.change': 'Change bookmark ({threshold})',

  'dialog.title': 'Where are you up to?',
  'dialog.lede': 'Everything after that point stays under fog.',
  'dialog.modeLabel': 'Count by',
  'dialog.modeEpisode': 'Episode',
  'dialog.modeSeason': 'Season',
  'dialog.modeChapter': 'Chapter',
  'dialog.modeBook': 'Book',
  'dialog.episodeLabel': 'Last episode you watched',
  'dialog.chapterLabel': 'Last chapter you read',
  'dialog.seasonLabel': 'Season',
  'dialog.seasonPlaceholder': 'Choose a season',
  'dialog.seasonOption': 'Season {season} · episodes {first}–{last}',
  'dialog.seasonOptionOpen': 'Season {season} · episode {first} onwards',
  'dialog.seasonEpisodeLabel': 'Episode in that season',
  'dialog.bookLabel': 'Book',
  'dialog.bookPlaceholder': 'Choose a book',
  'dialog.bookOption': 'Book {book} · {count} chapters',
  'dialog.bookChapterLabel': 'Chapter in that book',
  'dialog.saga': 'Arc · {name}',
  'dialog.hint': 'From 1 to {max}.',
  'dialog.errorEmpty': 'Enter a number.',
  'dialog.errorRange': 'Enter a number from 1 to {max}.',
  'dialog.errorSeason': 'Choose a season first.',
  'dialog.errorBook': 'Choose a book first.',
  'dialog.decrease': 'One less',
  'dialog.increase': 'One more',
  'dialog.save': 'Save',
  'dialog.forget': 'Clear bookmark',
  'dialog.cancel': 'Cancel',
  'dialog.loading': 'Loading…',
  'dialog.loadFailed': 'Loading failed. Check your connection and try again.',
  'dialog.retry': 'Try again',

  'veil.locked.episode': 'Under fog until episode {threshold}',
  'veil.locked.season': 'Under fog until {threshold}',
  'veil.locked.chapter': 'Under fog until chapter {threshold}',
  'veil.locked.book': 'Under fog until book {book}, chapter {chapter}',
  'veil.reveal': 'Show anyway',
  'veil.revealShort': 'Show',
  'veil.ask': 'Show it anyway?',
  'veil.confirm': 'Yes, show',
  'veil.revealing': 'Loading…',
  'veil.peekFailed': 'Could not load it. Try again.',
  'veil.placeholder': 'Spoiler',

  'intro.context.episode':
    'This entry first appears in episode {threshold}. Your bookmark is empty, so the page is under fog.',
  'intro.context.season':
    'This entry first appears in {threshold}. Your bookmark is empty, so the page is under fog.',
  'intro.context.chapter':
    'This entry first appears in chapter {threshold}. Your bookmark is empty, so the page is under fog.',
  'intro.context.book':
    'This entry first appears in book {book}, chapter {chapter}. Your bookmark is empty, so the page is under fog.',
  'intro.step1': 'Set your bookmark to the last episode or chapter you saw.',
  'intro.step2': 'Entries up to that point are open.',
  'intro.step3':
    'Everything after it stays under fog, on every page of the wiki.',

  'chart.opensAt.episode': 'Episode {threshold}',
  'chart.opensAt.season': '{threshold}',
  'chart.opensAt.chapter': 'Chapter {threshold}',
  'chart.opensAt.book': 'Book {book}, chapter {chapter}',
  'chart.hereSet.episode': 'You are here · episode {threshold}',
  'chart.hereSet.season': 'You are here · {threshold}',
  'chart.hereSet.chapter': 'You are here · chapter {threshold}',
  'chart.hereSet.book': 'You are here · book {book}, chapter {chapter}',
  'chart.hereUnset': 'No bookmark set · everything is under fog',
  'chart.title': 'Map of the places',
  'chart.fog': '{count} stops under fog',
  'chart.fogOne': '1 stop under fog',
  'chart.peekOpen': 'Open the entry',
  'chart.peekClose': 'Close',
  'chart.zoom': 'Zoom',
  'chart.zoomIn': 'Zoom in',
  'chart.zoomOut': 'Zoom out',
  'chart.seeAll': 'See all',
  'chart.seeSaga': 'Your saga',
  'chart.zoomHint': 'Ctrl or ⌘ with the wheel to zoom, drag to move.',

  'faq.bookmarkQ': 'Where is my bookmark stored?',
  'faq.peekQ': 'Can I see a hidden entry?',
  'faq.peekA':
    'Yes. On the other pages of the wiki, press “Show anyway” on it. The choice is not saved, and every other entry stays under fog.',

  'legal.title': 'Legal notice',
  'legal.pageTitle': 'Legal notice | Zero Spoiler',
  'legal.description':
    'The unofficial project notice, rights contact, privacy and cookies, sources and licenses.',
  'legal.projectTitle': 'An unofficial project',
  'legal.unofficial':
    'Zero Spoiler is an unofficial, nonprofit fan project. It is not affiliated with or endorsed by the rights holders of the series in the wiki.',
  'legal.creditSource': 'Official credit source',
  'legal.contact': 'Rights inquiries and corrections on GitHub',
  'legal.contactHelp':
    'Include the page URL, the material concerned and the rights inquiry or correction requested. Keep spoilers out of the title. GitHub issues are public and require an account. Do not post confidential information.',

  'credits.title': 'Sources and licenses',
  'credits.intro':
    'Sources used for documented checks and the licenses that apply to the project and its sources.',
  'credits.licensesTitle': 'Project licenses',
  'credits.software':
    'The MIT license covers the software and original technical documentation, within the rights held by contributors. Existing notices remain valid.',
  'credits.scopeNotice': 'License scope and content notices',
  'credits.content':
    'Archive text, drawings and branding are outside the general MIT grant. No new blanket content license is assigned. Third-party rights and existing permissions remain in force.',
  'credits.sourcesTitle': 'Source terms',
  'credits.external':
    'External pages may contain later story information, including in their titles. Opening a source leaves this wiki’s spoiler protection.',
  'credits.fandomTerms': 'Fandom licensing and attribution',
  'credits.fandomTermsIt': 'Fandom licensing in Italian',
  'credits.wikipediaTerms': 'Wikipedia terms of use',
  'credits.referencesTitle': 'Documented references',
  'credits.bookmark':
    'Only references to material open at your bookmark are listed. The license beside a source refers to its text, not to the whole archive.',
  'credits.empty':
    'No entry references are open at your bookmark. You can still read the general source and license notices above.',
  'credits.episode': 'Episode {episode}',
  'credits.scope.dossier': 'Character fields in the reviewed sample',
  'credits.scope.chronicle': 'Story entry in the reviewed sample',
  'credits.scope.title': 'Release title only',
  'credits.scope.summary': 'Replacement summary',
  'credits.factCheck':
    'Reference for the documented comparison or fact check. The historical writing process is not established; no claim of independent authorship or new content license is made.',
  'credits.replacement':
    'Both summaries were replaced with brief accounts of facts checked against the official synopsis. The synopsis was not translated in full. No new content license is assigned.',
  'credits.noOpenLicense': 'No open-content permission established.',

  'footer.lead': 'A {series} wiki that hides what comes after your bookmark.',
  'footer.colophon':
    'All the drawings are made for this site; no official artwork is used. Your bookmark is saved in a cookie on this device.',

  'footer.unofficial':
    'Unofficial fan project, not endorsed by the {series} rights holders.',
  'footer.sharedLead': 'Wikis that hide what comes after your bookmark.',
  'footer.sharedColophon':
    'All the drawings are made for this site; no official artwork is used. Your bookmarks are saved in cookies on this device, one for each series.',
  'footer.sharedUnofficial':
    'Unofficial fan project, not endorsed by the rights holders of the series.',
  'footer.openSource': 'Zero Spoiler is open source: if you find it useful,',
  'footer.star': 'star it on GitHub',

  'report.question': 'Something wrong on this page?',
  'report.link': 'Report it on GitHub',

  'characters.title': 'Characters',
  'characters.searchLabel': 'Search characters',
  'characters.searchClear': 'Clear search',
  'characters.shown': 'Showing {count} of {total} open characters',
  'characters.noMatch': 'No open character matches “{query}”.',
  'characters.foggedTitle': '{count} under fog',
  'characters.foggedHint':
    'Their names are hidden, so search does not find them. Move your bookmark forward to see them.',
  'characters.foggedTitleOne': '1 under fog',
  'characters.allOpen': 'Nothing is under fog. You can see every character.',
  'characters.pageTitle': 'Characters | {series} | Zero Spoiler',
  'characters.pageDescription':
    '{series} characters, each hidden until the episode where they first appear.',
  'characters.featuredTitle': 'Main characters',
  'characters.bookTitle': 'All characters',
  'characters.loading': 'Loading characters…',
  'characters.bookLede':
    'Every character in the wiki, grouped by the arc they first appear in.',
  'characters.sectionOpensAt.episode': 'From episode {threshold}',
  'characters.sectionOpensAt.season': 'From {threshold}',
  'characters.sectionOpensAt.chapter': 'From chapter {threshold}',
  'characters.sectionOpensAt.book': 'From book {book}, chapter {chapter}',
  'characters.sectionCount': '{count} characters',
  'characters.sectionCountOne': '1 character',
  'characters.sectionFogged': 'Arc under fog',

  'character.opensAt.episode': 'First appears in episode {threshold}',
  'character.opensAt.season': 'First appears in {threshold}',
  'character.opensAt.chapter': 'First appears in chapter {threshold}',
  'character.opensAt.book': 'First appears in book {book}, chapter {chapter}',
  'character.foggedName': 'A character under fog',
  'character.foggedTitle': 'A character under fog | {series} | Zero Spoiler',
  'character.foggedDescription.episode':
    'A {series} character who first appears in episode {threshold}. Set your bookmark to read this page.',
  'character.foggedDescription.season':
    'A {series} character who first appears in {threshold}. Set your bookmark to read this page.',
  'character.foggedDescription.chapter':
    'A {series} character who first appears in chapter {threshold}. Set your bookmark to read this page.',
  'character.foggedDescription.book':
    'A {series} character who first appears in book {book}, chapter {chapter}. Set your bookmark to read this page.',
  'character.pageTitle': '{name} | {series} | Zero Spoiler',
  'character.back': 'All characters',
  'character.relationshipHistoryFor': 'Relationship history with {name}',
  'character.relationshipHistory': 'Relationship history',
  'character.relationshipAt.episode': 'Available from episode {threshold}',
  'character.relationshipAt.chapter': 'Available from chapter {threshold}',
  'character.relationshipAt.book':
    'Available from book {book}, chapter {chapter}',
  'character.relationshipAt.season': 'Available from {threshold}',
  'character.relationshipsTitle': 'Relationships',
  'character.relationshipsLede':
    'The important people connected to this character, up to your bookmark.',
  'character.status': 'Status',
  'character.epithet': 'Epithet',
  'character.affiliation': 'Affiliation',
  'character.origin': 'Origin',
  'character.factsLabel': 'Facts up to your bookmark',
  'character.chronicleTitle': 'Story so far',
  'character.chronicleLede':
    'What happens to them up to your bookmark, latest first. Each part starts at the episode where it takes place.',
  'character.chronicleMore': 'Show more',
  'character.chronicleMoreError':
    'Could not load the other stories. Try again.',
  'character.notFoundTitle': 'Character not found',
  'character.notFoundBody':
    'There is no character at this address. The characters page lists all of them.',

  'places.title': 'Places',
  'places.pageTitle': 'Places | {series} | Zero Spoiler',
  'places.stage': 'Stop {index} of {total}',
  'places.foggedName': 'A place under fog',
  'places.foggedDescription.episode':
    'A {series} place that first appears in episode {threshold}. Set your bookmark to read about it.',
  'places.foggedDescription.season':
    'A {series} place that first appears in {threshold}. Set your bookmark to read about it.',
  'places.foggedDescription.chapter':
    'A {series} place that first appears in chapter {threshold}. Set your bookmark to read about it.',
  'places.foggedDescription.book':
    'A {series} place that first appears in book {book}, chapter {chapter}. Set your bookmark to read about it.',
  'places.firstSeen.episode': 'First seen in episode {threshold}',
  'places.firstSeen.season': 'First seen in {threshold}',
  'places.firstSeen.chapter': 'First seen in chapter {threshold}',
  'places.firstSeen.book': 'First seen in book {book}, chapter {chapter}',
  'places.form': 'Type',
  'places.arc': 'Arc',
  'places.landmark': 'Landmark',
  'places.filedHere': 'Found here',
  'places.searchLabel': 'Search places',
  'places.searchPlaceholder': 'Name of a place',
  'places.searchClear': 'Clear search',
  'places.searchOpen': 'Search',
  'places.controls': 'Filters',
  'places.shown': 'Showing {count} of {total} open places',
  'places.noMatch': 'No open place matches “{query}”.',
  'places.noneShown': 'No open place matches these filters.',
  'places.showAll': 'Show all',
  'places.allForms': 'All types',
  'places.saga': 'Saga',
  'places.allSagas': 'All sagas',
  'places.groupCount': '{count} places',
  'places.groupCountOne': '1 place',

  'place.pageTitle': '{name} | {series} | Zero Spoiler',
  'place.foggedTitle': 'A place under fog | {series} | Zero Spoiler',
  'place.back': 'All places',
  'place.mapTitle': 'On the map',
  'place.mapLede':
    'Where this place comes in the story, with the stops just before and after.',
  'place.nativesTitle': 'From here',
  'place.visitsTitle': 'Later visits',
  'place.drawingsTitle': 'How the drawing changes',
  'place.drawingsLede':
    'Every drawing of this place up to your bookmark, oldest first.',
  'place.turn': 'Previous and next stop',
  'place.previous': 'Previous stop',
  'place.next': 'Next stop',
  'place.routeStart': 'Nothing. This is the first stop.',
  'place.routeEnd': 'Nothing yet. This is the last stop in story order.',
  'place.notFoundTitle': 'Place not found',
  'place.notFoundBody':
    'There is no place at this address. The places page lists all of them.',

  'form.village': 'Village',
  'form.town': 'Town',
  'form.restaurant': 'Floating restaurant',
  'form.island': 'Island',
  'form.region': 'Region',
  'form.city': 'City',
  'form.archipelago': 'Archipelago',
  'form.sea': 'Stretch of sea',
  'form.ship': 'Ship',
  'form.prison': 'Prison',
  'form.fortress': 'Fortress',

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

  'locale.label': 'Language',
  'locale.it': 'Italiano',
  'locale.en': 'English',
} as const
