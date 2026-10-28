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

  'faq.animeQ': 'Anime or manga?',
  'faq.animeA':
    'Both. You can count by anime episode, by season and episode, or by manga chapter. Every entry has an episode number and a chapter number. When the exact point is uncertain, the later one is used, so an entry is more likely to open late than early.',
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

  'privacy.title': 'Privacy and cookies',
  'privacy.updated': 'Last checked: 27 October 2026.',
  'privacy.controllerTitle': 'Who runs the site',
  'privacy.controller':
    'Zero Spoiler is a personal, nonprofit fan project. Its operator and data controller is a private individual based in Italy, reachable as @cosimochellini on GitHub. Use the GitHub contact link below for an initial request.',
  'privacy.serviceTitle': 'What a visit sends',
  'privacy.service':
    'Your browser sends Cloudflare the requested address, IP address, browser information and applicable cookies to deliver pages and apply your spoiler boundary. Requests stay on this site; fonts and drawings are hosted here. There are no user accounts, advertising, analytics or profiling in the application.',
  'privacy.cookiesTitle': 'Technical cookies and browser storage',
  'privacy.cookiesIntro':
    'These first-party cookies support features you request. They are not used for advertising or tracking across sites. They do not require a consent banner under the Italian rules for necessary technical cookies.',
  'privacy.bookmark':
    'zs_one-piece and zs_hunter-x-hunter: your bookmark for each series, by episode, season, chapter or live action where supported; kept for 365 days after saving it, or until you clear it. Opening a shared bookmark link also sets this cookie. The value is sent to the server to hide later events.',
  'privacy.language':
    'opzs_lang: your selected language (it or en); kept for 365 days after choosing it. Sent to the server to remember the language on later visits.',
  'privacy.trial':
    'zs_one-piece_try and zs_hunter-x-hunter_try: a temporary bookmark for each series set when you try the site; a session cookie with no fixed expiry, removed when you save or clear a bookmark or leave the trial. Browser session restore can preserve session cookies.',
  'privacy.attributes':
    'All five cookies use Path=/ and SameSite=Lax, with no Domain, Secure or HttpOnly attribute. The site is served over HTTPS. They can be read by this site’s JavaScript and sent on applicable same-site requests and top-level cross-site navigations.',
  'privacy.storage':
    'opzs_welcome is a sessionStorage flag used to show a welcome once after saving a bookmark. It is removed when the home page reads it, or when the tab session ends; it is not sent to the server. opzs_intro is a sessionStorage flag, value 1, set when you close the introduction a page shows when you arrive with no bookmark, or once a bookmark is in use, so the introduction is not shown in the rest of the tab session; it is not sent to the server. The application does not use localStorage.',
  'privacy.controlTitle': 'Your choices',
  'privacy.control':
    'You can clear the bookmark in its dialog and remove cookies and site storage in your browser settings. Blocking them prevents the site from remembering your preferences; without a bookmark you see the introductory view. There are no optional tracking cookies to accept or reject.',
  'privacy.hostingTitle': 'Hosting, logs and transfers',
  'privacy.hosting':
    'Cloudflare, Inc. hosts and delivers the site through its network and Cloudflare Workers. A request is handled in a Cloudflare data centre, usually one near you, which can be outside the EEA. Cloudflare is a US company, so data can be transferred to the United States. The site uses no Cloudflare database, file storage, analytics or forms. Until it is switched off, the old address one-piece-zero-spoiler.netlify.app is still served by Netlify, Inc., whose functions run in Ohio, United States.',
  'privacy.logs':
    'Workers Logs is turned on to find faults and abuse. Each request the Worker handles is logged in the site’s Cloudflare account. That covers pages and the drawings loaded with them. A log entry holds the requested address with its query, the method, the response status and any error. It also holds the request headers, with your IP address, browser information and possibly cookies, and the location Cloudflare derives from the request. On the Workers Free plan the site uses, Cloudflare keeps these logs for 3 days. Fonts, icons and other static files are served without a log entry. Cloudflare also processes request data on its network for security and for aggregate traffic metrics; how long it keeps that data is not verified for this site. On the old address, Netlify retains function activity logs for at least 24 hours, longer on some plans. No analytics does not mean no personal data is processed.',
  'privacy.terms':
    'Cloudflare’s published Data Processing Addendum forms part of its subscription terms. It describes Cloudflare as processor and its subprocessors, and relies on the EU–US Data Privacy Framework, with standard contractual clauses if that certification lapses. Netlify’s published terms work the same way for the old address. These are the providers’ published terms; site-specific contractual details and the full retention arrangements remain to be confirmed.',
  'privacy.basesTitle': 'Purposes and legal bases',
  'privacy.bases':
    'The purposes are delivering the pages you request, applying your spoiler boundary, remembering your choices and keeping the site operational and secure. The basis is the legitimate interest in providing this limited service (GDPR Article 6(1)(f)); apart from those 3-day Workers Logs, the application adds no visitor history or profiling for these purposes. Applicable data-rights requests are handled to meet legal obligations (Article 6(1)(c)). The technical-cookie consent exemption is separate from these GDPR bases. You may object as described below.',
  'privacy.rightsTitle': 'Questions and your rights',
  'privacy.rights':
    'Where applicable, you may request access, correction, erasure, restriction or portability of personal data, object to processing, and complain to the Italian Garante or your local supervisory authority. Requests concern data actually held; a cookie value alone does not identify a named account.',
  'privacy.contact': 'Contact on GitHub',
  'privacy.contactHelp':
    'For an initial privacy contact request, open a GitHub issue without personal or confidential details. Issues are public and require an account. Do not include IP addresses, cookie values or identity documents. We will agree a private channel before discussing any personal details. GitHub processes information you submit there under its own privacy policy.',
  'privacy.sourcesTitle': 'Sources and verification',
  'privacy.garante': 'Italian Garante: cookies and tracking guidance',
  'privacy.cloudflareLogs': 'Cloudflare: Workers Logs and retention',
  'privacy.cloudflareTerms': 'Cloudflare: Data Processing Addendum',
  'privacy.netlifyLogs': 'Netlify: function logs and retention',
  'privacy.netlifyTerms': 'Netlify: DPA and subprocessors',
  'privacy.audit': 'Technical audit and outstanding checks',

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
  'character.routeTitle': 'In story order',
  'character.position': 'Entry {index} of {total}',
  'character.positionLede':
    'Where this character comes in the story, with the entries just before and after.',
  'character.status': 'Status',
  'character.epithet': 'Epithet',
  'character.affiliation': 'Affiliation',
  'character.origin': 'Origin',
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
