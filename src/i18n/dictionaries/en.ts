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
  'nav.fruits': 'Fruits',
  'nav.label': 'Pages',

  'hero.headline': 'The One Piece wiki without spoilers',
  'hero.setBookmark': 'Set your bookmark',
  'hero.changeBookmark': 'Change bookmark · {threshold}',

  'onboarding.lede':
    'Move the dial through East Blue. Entries up to that point open, and the ones after it stay under fog. Once you set your bookmark, every page of the wiki works this way.',
  'onboarding.dial': 'Point in the story',
  'onboarding.unitEpisode': 'Episode',
  'onboarding.unitChapter': 'Chapter',
  'onboarding.here': 'I’m here',
  'onboarding.further': 'I’m further on',
  'onboarding.start': 'Starting now · EP 1',
  'onboarding.arcs': 'Arcs',
  'onboarding.cast': 'Characters',
  'onboarding.places': 'Places and ships',
  'onboarding.tryHint':
    'Open an entry to see its page at this point. Your bookmark is not saved.',
  'onboarding.tailTitle': 'After East Blue',
  'onboarding.tail':
    '{count} more entries stay under fog until your bookmark reaches them.',

  'trial.episode': 'Trying episode {threshold}. Nothing is saved.',
  'trial.chapter': 'Trying chapter {threshold}. Nothing is saved.',
  'trial.save': 'Save this point',
  'trial.leave': 'Leave the trial',

  'welcome.title': 'What you can do now',
  'welcome.lede':
    'Your bookmark is saved. Every page shows what you have reached and keeps the rest under fog.',
  'welcome.dismiss': 'Close',

  'home.point.episode': 'Episode {threshold}',
  'home.point.season': 'Season {season} · episode {episode}',
  'home.point.chapter': 'Chapter {threshold}',
  'home.recent': 'Just happened',
  'home.before': 'Just before',
  'home.noStories': 'No stories yet.',
  'home.storyAt.episode': 'Episode {threshold}',
  'home.storyAt.season': '{threshold}',
  'home.storyAt.chapter': 'About chapter {threshold}',
  'home.more': 'More stories',
  'home.cast': 'Who matters now',
  'home.filler.title': 'Watch out for filler',
  'home.filler.link': 'See all filler',

  'mark.unset': 'Set episode',
  'mark.unsetShort': 'EP ?',
  'mark.episode': 'EP {threshold}',
  'mark.season': '{threshold}',
  'mark.chapter': 'CH {threshold}',
  'mark.change': 'Change bookmark ({threshold})',

  'dialog.title': 'Where are you up to?',
  'dialog.lede': 'Everything after that point stays under fog.',
  'dialog.modeLabel': 'Count by',
  'dialog.modeEpisode': 'Episode',
  'dialog.modeSeason': 'Season',
  'dialog.modeChapter': 'Chapter',
  'dialog.episodeLabel': 'Last episode you watched',
  'dialog.chapterLabel': 'Last chapter you read',
  'dialog.seasonLabel': 'Season',
  'dialog.seasonPlaceholder': 'Choose a season',
  'dialog.seasonOption': 'Season {season} · episodes {first}–{last}',
  'dialog.seasonOptionOpen': 'Season {season} · episode {first} onwards',
  'dialog.seasonEpisodeLabel': 'Episode in that season',
  'dialog.saga': 'Arc · {name}',
  'dialog.filler': 'Filler',
  'dialog.hint': 'From 1 to {max}.',
  'dialog.errorEmpty': 'Enter a number.',
  'dialog.errorRange': 'Enter a number from 1 to {max}.',
  'dialog.errorSeason': 'Choose a season first.',
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
  'veil.reveal': 'Show anyway',
  'veil.revealShort': 'Show',
  'veil.ask': 'Show it anyway?',
  'veil.confirm': 'Yes, show',
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

  'faq.animeQ': 'Anime or manga?',
  'faq.animeA':
    'Both. You can count by anime episode, by season and episode, or by manga chapter. Every entry has an episode number and a chapter number. When the exact point is uncertain, the later one is used, so an entry is more likely to open late than early.',
  'faq.bookmarkQ': 'Where is my bookmark stored?',
  'faq.bookmarkA':
    'In a cookie on this device. The server reads it before it builds the page, so entries past your bookmark are not in the page you receive. Without a bookmark, this page carries East Blue for the dial and nothing past it. There is no account and no tracking.',
  'faq.peekQ': 'Can I see a hidden entry?',
  'faq.peekA':
    'Yes. On the other pages of the wiki, press “Show anyway” on it. The choice is not saved, and every other entry stays under fog.',

  'legal.title': 'Legal notice',
  'legal.description':
    'The unofficial project notice, rights contact, privacy and cookies, sources and licenses.',
  'legal.projectTitle': 'An unofficial project',
  'legal.unofficial':
    'Zero Spoiler is an unofficial, nonprofit fan project. It is not affiliated with or endorsed by the One Piece rights holders.',
  'legal.credits':
    'One Piece was created by Eiichiro Oda. Anime credit: © Eiichiro Oda/Shueisha, Toei Animation.',
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
  'credits.wikiTerms':
    'The English and Italian One Piece Wikis declare CC BY-SA 3.0 Unported for community text by default. Exceptions, imported material and images can have different terms. Fandom permits author attribution through links to the contributed articles.',
  'credits.otherTerms':
    'No general open-content license was established for AnimeFillerList or the official episode synopsis. Classification facts and citations do not grant permission to copy prose, images or an entire compilation. Official titles and One Piece material are not offered as project-owned content.',
  'credits.wikiEn': 'English One Piece Wiki',
  'credits.wikiIt': 'Italian One Piece Wiki',
  'credits.fandomTerms': 'Fandom licensing and attribution',
  'credits.fandomTermsIt': 'Fandom licensing in Italian',
  'credits.fillerList': 'AnimeFillerList: classification reference',
  'credits.referencesTitle': 'Documented references',
  'credits.coverage':
    'This list covers the bounded review recorded on 20 October 2026 and the summary replacement reviewed on 22 October 2026. Other historical text, translations and illustrations remain unreviewed or unresolved. These references do not certify the rights in every entry.',
  'credits.bookmark':
    'Only references to material open at your bookmark are listed. The license beside a source refers to its text, not to the whole archive.',
  'credits.empty':
    'No entry references are open at your bookmark. You can still read the general source and license notices above.',
  'credits.episode': 'Episode {episode}',
  'credits.scope.dossier': 'Character fields in the reviewed sample',
  'credits.scope.chronicle': 'Story entry in the reviewed sample',
  'credits.scope.filler': 'Release title and summary in the reviewed sample',
  'credits.scope.title': 'Release title only',
  'credits.scope.summary': 'Replacement summary',
  'credits.factCheck':
    'Reference for the documented comparison or fact check. The historical writing process is not established; no claim of independent authorship or new content license is made.',
  'credits.replacement':
    'Both summaries were replaced with brief accounts of facts checked against the official synopsis. The synopsis was not translated in full. No new content license is assigned.',
  'credits.source.wiki-en':
    'English One Piece Wiki contributors: source revision',
  'credits.source.wiki-it':
    'Italian One Piece Wiki contributors: source revision',
  'credits.source.official': 'ONE PIECE.com: official episode synopsis',
  'credits.noOpenLicense': 'No open-content permission established.',

  'privacy.title': 'Privacy and cookies',
  'privacy.updated': 'Last checked: 20 October 2026.',
  'privacy.controllerTitle': 'Who runs the site',
  'privacy.controller':
    'Zero Spoiler is a personal, nonprofit fan project. Its operator and data controller is a private individual based in Italy, reachable as @cosimochellini on GitHub. Use the GitHub contact link below for an initial request.',
  'privacy.serviceTitle': 'What a visit sends',
  'privacy.service':
    'Your browser sends Netlify the requested address, IP address, browser information and applicable cookies to deliver pages and apply your spoiler boundary. Requests stay on this site; fonts and drawings are hosted here. There are no user accounts, advertising, analytics or profiling in the application.',
  'privacy.cookiesTitle': 'Technical cookies and browser storage',
  'privacy.cookiesIntro':
    'These first-party cookies support features you request. They are not used for advertising or tracking across sites. They do not require a consent banner under the Italian rules for necessary technical cookies.',
  'privacy.bookmark':
    'zs_one-piece: your episode, chapter or live-action bookmark; kept for 365 days after saving it, or until you clear it. Opening a shared bookmark link also sets this cookie. The value is sent to the server to hide later events.',
  'privacy.language':
    'opzs_lang: your selected language (it or en); kept for 365 days after choosing it. Sent to the server to remember the language on later visits.',
  'privacy.trial':
    'zs_one-piece_try: a temporary bookmark set when you try the site; a session cookie with no fixed expiry, removed when you save or clear a bookmark or leave the trial. Browser session restore can preserve session cookies.',
  'privacy.attributes':
    'All three cookies use Path=/ and SameSite=Lax, with no Domain, Secure or HttpOnly attribute. The site is served over HTTPS. They can be read by this site’s JavaScript and sent on applicable same-site requests and top-level cross-site navigations.',
  'privacy.storage':
    'opzs_welcome is a sessionStorage flag used to show a welcome once after saving a bookmark. It is removed when the home page reads it, or when the tab session ends; it is not sent to the server. The application does not use localStorage.',
  'privacy.controlTitle': 'Your choices',
  'privacy.control':
    'You can clear the bookmark in its dialog and remove cookies and site storage in your browser settings. Blocking them prevents the site from remembering your preferences; without a bookmark you see the introductory view. There are no optional tracking cookies to accept or reject.',
  'privacy.hostingTitle': 'Hosting, logs and transfers',
  'privacy.hosting':
    'Netlify, Inc. hosts and delivers the site using its CDN and server functions. The configured function region is us-east-2 (Ohio, United States), so requests are processed outside the EEA. The checked configuration has no Analytics or Identity instance, database, injected snippets, forms or service add-ons.',
  'privacy.logs':
    'Netlify retains function activity logs: its documentation specifies at least 24 hours, with longer retention on some plans. This is not a verified maximum for this site or for traffic and security logs. The complete provider retention period is still being verified. No analytics does not mean no personal data is processed.',
  'privacy.terms':
    'Netlify’s published Data Processing Agreement forms part of its standard subscription terms, describes its processor role and subprocessors, and provides for the EU–US Data Privacy Framework with standard contractual clauses as a fallback. These are the provider’s published terms; site-specific contractual details and the full retention arrangements remain to be confirmed.',
  'privacy.basesTitle': 'Purposes and legal bases',
  'privacy.bases':
    'The purposes are delivering the pages you request, applying your spoiler boundary, remembering your choices and keeping the site operational and secure. The basis is the legitimate interest in providing this limited service (GDPR Article 6(1)(f)); the application adds no visitor history or profiling for these purposes. Applicable data-rights requests are handled to meet legal obligations (Article 6(1)(c)). The technical-cookie consent exemption is separate from these GDPR bases. You may object as described below.',
  'privacy.rightsTitle': 'Questions and your rights',
  'privacy.rights':
    'Where applicable, you may request access, correction, erasure, restriction or portability of personal data, object to processing, and complain to the Italian Garante or your local supervisory authority. Requests concern data actually held; a cookie value alone does not identify a named account.',
  'privacy.contact': 'Contact on GitHub',
  'privacy.contactHelp':
    'For an initial privacy contact request, open a GitHub issue without personal or confidential details. Issues are public and require an account. Do not include IP addresses, cookie values or identity documents. We will agree a private channel before discussing any personal details. GitHub processes information you submit there under its own privacy policy.',
  'privacy.sourcesTitle': 'Sources and verification',
  'privacy.garante': 'Italian Garante: cookies and tracking guidance',
  'privacy.netlifyLogs': 'Netlify: function logs and retention',
  'privacy.netlifyTerms': 'Netlify: DPA and subprocessors',
  'privacy.audit': 'Technical audit and outstanding checks',

  'footer.lead': 'A One Piece wiki that hides what comes after your bookmark.',
  'footer.colophon':
    'All the drawings are made for this site; no official artwork is used. Your bookmark is saved in a cookie on this device.',

  'footer.unofficial':
    'Unofficial fan project, not endorsed by the One Piece rights holders.',
  'footer.sharedLead': 'Wikis that hide what comes after your bookmark.',
  'footer.sharedColophon':
    'All the drawings are made for this site; no official artwork is used. Your bookmarks are saved in cookies on this device, one for each series.',
  'footer.sharedUnofficial':
    'Unofficial fan project, not endorsed by the rights holders of the series.',

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
    'What happens to them up to your bookmark, latest first. Each part starts at the episode where it takes place.',
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
  'places.searchLabel': 'Search places',
  'places.searchPlaceholder': 'Name of a place',
  'places.searchClear': 'Clear search',
  'places.searchOpen': 'Search',
  'places.controls': 'Filters',
  'places.shown': 'Showing {count} of {total} open places',
  'places.noMatch': 'No open place matches “{query}”.',
  'places.noneShown': 'No open place matches these filters.',
  'places.showAll': 'Show all',
  'places.allSeas': 'All seas',
  'places.allForms': 'All types',
  'places.saga': 'Saga',
  'places.allSagas': 'All sagas',
  'places.groupCount': '{count} places',
  'places.groupCountOne': '1 place',

  'place.pageTitle': '{name} | Zero Spoiler',
  'place.foggedTitle': 'A place under fog | Zero Spoiler',
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
  'fruit.turn': 'Previous and next fruit',
  'fruit.previous': 'Previous fruit',
  'fruit.next': 'Next fruit',
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

  'form.village': 'Village',
  'form.town': 'Town',
  'form.restaurant': 'Floating restaurant',
  'form.island': 'Island',
  'form.region': 'Region',
  'form.city': 'City',
  'form.archipelago': 'Archipelago',
  'form.sea': 'Stretch of sea',
  'form.ship': 'Ship',
  'form.train': 'Sea train',
  'form.prison': 'Prison',
  'form.fortress': 'Fortress',

  'status.alive': 'Alive',
  'status.deceased': 'Deceased',
  'status.presumed-dead': 'Presumed dead',
  'status.captured': 'Captured',
  'status.imprisoned': 'Imprisoned',
  'status.missing': 'Missing',
  'status.unknown': 'Fate unknown',

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

  'kind.character': 'Character',
  'kind.arc': 'Arc',
  'kind.place': 'Place',
  'kind.ship': 'Ship',
  'kind.fruit': 'Devil fruit',

  'locale.label': 'Language',
  'locale.it': 'Italiano',
  'locale.en': 'English',
} as const
