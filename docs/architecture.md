# How Zero Spoiler works

The [README](../README.md) shows what the site does. This page explains how, and
why each piece is built the way it is. The finer decisions are documented in
code comments next to the code they explain.

## Hidden content stays on the server

The archive is 737 records and their line drawings, about 2.7 MB of TypeScript.
None of it is compiled into the client bundle. A route loader reads the
`zs_one-piece` cookie from the request and returns the records at or below the
bookmark, with their strings already in the page's locale and their drawings
already turned into stroke paths. A record the reader has not reached is sent as
its kind, two thresholds and an opaque handle:

```ts
export interface CoveredRecord {
  handle: string
  kind: EntityKind
  revealedAtChapter: number
  revealedAtEpisode: number
}
```

There is no id, because the id is the name slug: `/characters/trafalgar-law` in
a `key`, an `href` or a DOM `id` would give the name away. The handle is the
record's index in one fixed order, written in base 36, and the table that maps
indexes back to ids exists only in the server bundle.

A covered entry is a placeholder, not a blur over the real content: a plain
seal, the word "Spoiler" and the threshold. Knowing that something opens at
episode 392 is not a spoiler. The hidden text is not in the DOM, so find-in-page
cannot turn it up, and it is not in the payload either.

The cost is one round trip. Moving the bookmark used to be instant because every
record was already in the browser. Now it is a request, made inside a
`useTransition`, so the current page stays on screen until the new one is ready.

A link can set the bookmark as well: `?ep=650`, `?s=2&ep=3` or `?ch=1044` on a
series content page. Root, legal, privacy and unknown paths drop these
parameters without creating a bookmark. A request middleware in `src/start.ts`
runs before routing, writes the `zs_one-piece` cookie and sends the reader on to
the same address without those parameters, so the page that renders reads the
new cookie like any other, and a reload cannot undo a bookmark moved since. The
hop is a meta refresh rather than a 302, because Netlify, which still serves the
old address, appends the request's query string to any `Location` without one,
and the link would redirect to itself. A value outside the dialog's ranges, a
season without an episode, a chapter next to an episode or a repeated parameter
leaves the cookie as it was and still drops the parameters.

Each series has its own saved and trial cookies, ranges, demo bounds and season
table in the public bookmark metadata (`src/lib/progress/series.ts`), separate
from the server-only archive. Series content lives under `/<series>/<locale>/…`;
`/<locale>` is the shared hub, and legal/privacy remain shared. Unknown series
and locales answer 404. A request to a legacy locale-first content URL receives
a 301 with the same path and exact query under `/one-piece`, before bookmark
parameters are consumed. `/<series>` negotiates the language and answers 302.

The hub (`src/components/SeriesHub.tsx`) gives each series a card in its own
theme: its name, a drawing of the series' own
(`src/components/seriesEmblems.ts`, which shares no line with a record drawing
but the common sea waves), its count of entries and the reader's saved bookmark
on it. The count is of the records the reader's source tells, and of the records
both sources tell for a reader with no bookmark. `loadHub` in
`src/server/series.ts` loads each archive only to count it, and `hubFor` reads
each series' saved cookie; a trial or a crawler shows no bookmark there. A
series announced but not yet open is a hard-coded name with no link and no
count. The payload sweep holds the plain call behind every function in
`src/server/series.ts` to the fog of a reader with no bookmark, so the hub can
name no record of any series, open or covered. The footer on the shared pages
names no series.

`src/data/series/index.ts` is the single registry used by runtime, scripts and
gates. Its public descriptions contain no records; each archive is loaded by a
literal dynamic import only when requested. The selected archive, bookmark and
locale travel together on the server's `Reader`. Handles, filler ranges, canon
arcs and sitemap entries are cached per loaded archive. One Piece keeps its
deployed ordinal handles; every other series requires its own prefix, so handles
cannot resolve through another series' table. Fallow forbids direct server
imports from a series, and the archive gate checks the emitted server graph as
well as client leak canaries.

A series can be filed before it opens (`open` on its registry entry). Hunter x
Hunter is, until #763: it is in `SERIES`, so the payload sweep, the leak scan,
the data tests, the archive gate, the counts and the `verify:*` scripts all run
for it, through `filedArchiveOf`. Every path a reader takes goes through
`OPEN_SERIES` and `archiveOf`, which refuses a series that is not open, and
ESLint (`no-restricted-imports`, and `no-restricted-syntax` for a dynamic
`import()`) fails the server, the request middleware or the archive importing
`SERIES` or `filedArchiveOf`. Its addresses answer 404, no server function
serves it, the sitemap leaves it out, and the hub still announces it as coming.

An arc's name is shown at every bookmark (the dialog's saga rows), so it may say
no event, death, departure or twist the reader may not have reached. Hunter x
Hunter names its arcs neutrally for that reason: "Election", not the wiki's
"13th Hunter Chairman Election", which says the chairman has gone, and "Kakin",
not "Succession Contest", which the manga tells nine chapters into the arc.

The record shapes and the archive contract (`SeriesArchive`) in
`src/data/types.ts` take nothing from a series. The core is what every series
has: arcs, characters, places, dossiers, the chapter table. The devil fruits,
the ships, the filler guide and the factions are One Piece's, optional slices in
`features` (`src/data/features.ts`), which the server reads filled with nothing
where a series has none; a data test holds each slice to the flag on the series'
description. Place forms, regions and affiliation groups are strings in the
engine (`Vocabulary`), narrowed by each series, as One Piece's `Saga` narrows
them to its forms, seas and factions (`OnePieceVocabulary`) and a record's
drawing and fruits to the ids it files. The registry and the server hold every
archive by the generic words, so a series with its own registers as it is, and
the server passes a word on only where a page prints it
(`src/server/archive/printed.server.ts`), failing on one the series' pages
cannot print. The registry holds each series' place words (`placeWords` on its
entry, `placeWordsOf` in `src/data/series/index.ts`), keyed by its vocabulary so
a new word does not compile until it is listed. One Piece's are labelled by the
shared dictionaries (`sea.*`, `form.*`), which every page ships. A series that
labels its words itself is sent, with the places page and a place's page, the
labels of the words its open places use and no others, so no page names a region
the reader has not reached; the client holds no table of them, and the archive
gate looks for each one in the client chunks. Whether a series draws One Piece's
world map is a feature on its description (`features.worldMap`): without it the
server sends no map point and no ship, and the places page is the index, grouped
by region, served in full. The factions are One Piece's alone. The chapter
table, the sweep's bookmarks, the dated facts (timelines, stories, natives) and
the shelves (characters, arcs, places, the chart and the signal book) are built
by the engine (`src/data/chapterTable.ts`, `src/data/sweep.ts`,
`src/data/dated.ts`, `src/data/shelves.ts`) from each series' own records and
dossiers. A dated field a series does not file reads as an empty timeline, so a
field one series adds asks nothing of another.

A record or a dated fact can exist in one source only (`source: 'anime'` or
`'manga'` on the record or the entry; absent means both). An episode or season
bookmark counts in the anime and a chapter bookmark in the manga; no bookmark
counts in neither. `readerFor` hands each page the archive as the reader's
source tells it (`src/data/source.ts`, built once per source and cached), so a
record of the other source is in no list: it is never sent open or covered,
never counted and has no handle, and its page answers 404. Handles are numbered
within that copy, so no gap gives a record away. A fact's gate carries its
source, so `reveal(bookmark).sees` never opens it for the other reader. Neither
kind is in the demo or the sitemap. The chapter table takes no anchor from them,
and a devil fruit opens in each unit only by the namings its source tells.

Each public description names its colour theme. The theme is a full override of
the `color` tokens in `src/styles/themes.ts`, set on `<html>` whenever the
`/<series>` route matches, its 404s included. The defaults in
`src/styles/tokens.stylex.ts` are the site's own neutral theme, worn by the hub,
the legal notices and unknown addresses; One Piece's gold on night blue is its
theme, not the site's. Layout, type and the drawing tints stay shared.

The same request middleware reads legacy `opzs_ep` and `opzs_try` cookies once,
validates them as One Piece bookmarks and writes `zs_one-piece` and
`zs_one-piece_try`, then expires the legacy cookies. It updates the incoming
cookie header before loaders run, so the first response keeps the old progress.
An existing new cookie wins even when invalid; a valid shared-link bookmark wins
over migration. Saved bookmarks keep their one-year lifetime, and trials remain
session cookies.

The landing page for a visitor with no bookmark is the one exception, and its
limit is fixed. It sends East Blue (episodes 1–61, chapters 1–100) so a dial can
open and cover those records in the browser as it moves, and nothing past it:
every record and every dated fact it carries is inside both limits, and past
them there are only covered records and a count. A test holds the payload to
that, in both units. An open card on that page links to its record's page on a
trial: a `zs_one-piece_try` cookie with no `Max-Age`, which normally ends when
the browser closes and counts as the bookmark only while there is no
`zs_one-piece`. A trial past East Blue or in seasons is ignored, so it cannot be
used to reach anything the dial could not.

Search follows the same rule, by construction: a covered character is not on the
page, so it cannot be found. Search matches only the epithets the reader has
already reached, so "Whitebeard" finds Edward Newgate from episode 151, where
the epithet opens. Those epithets are checked on the server and sent already
folded, so an epithet the reader has not reached is not in the browser at all.

The filler guide at `/filler` follows the same rule. It is not in the bar: the
home page links to it from the welcome card and the filler warning. Its entries
live in `src/data/series/one-piece/filler.ts` and reach the page as a covered
row until the reader gets there: the episode number and the kind, never the
title or the plot. An entry opens at its own episode, or at the one a film or
special is watched after. A chapter reader has no episode, so an entry opens for
them at the later of two chapters: the one its canon arc opens at, and the last
one the anime had adapted when the entry aired. The skip ranges and the strip of
the whole series are numbers and kinds only, so they are sent at every bookmark.
So are the saga names, canon and filler, by the owner's choice: a reader finds
their way by them, and the titles and plots under them still wait. The countdown
at the top, the reader's episode and the five after it, is built from the same
rows, so a cell past the bookmark is a covered row like any other. A chapter
reader gets no countdown, because the manga has no filler. The home page's
filler warning uses the same runs and cells, as an episode and a kind each, and
shows only when the reader is inside a run or the next one starts within the six
cells.

## The archive in numbers

<!-- Generated by `npm run docs:counts` from the archive. Do not edit by hand. -->

### `one-piece`

| Thing               | Count                                                   |
| ------------------- | ------------------------------------------------------- |
| Records             | 737                                                     |
| Characters          | 534                                                     |
| Devil fruits        | 128                                                     |
| Arcs, places, ships | 34 · 39 · 2                                             |
| Saga modules        | 12, plus one for the devil fruits                       |
| Line drawings       | 737, one per record, plus 308 redrawings of 172 records |
| Chronicle stories   | 757, for 186 characters                                 |

### `hunter-x-hunter`

| Thing             | Count                                             |
| ----------------- | ------------------------------------------------- |
| Records           | 7                                                 |
| Characters        | 0                                                 |
| Arcs, places      | 7 · 0                                             |
| Saga modules      | 7                                                 |
| Line drawings     | 7, one per record, plus 0 redrawings of 0 records |
| Chronicle stories | 0, for 0 characters                               |

<!-- End of the generated counts. -->

The tables, one per series, are generated by `npm run docs:counts`, and
`npm run check` fails when one is stale. `npx vitest list --staticParse=false`
lists the tests. Coverage, measured on 2026-10-05, was 80.8 % statements, 78.2 %
branches and 82.5 % functions, scripts under `scripts/` included. The live
counts are on the site: each page says how many entries it has.

## Drawings

Toei and Shueisha own every frame of the anime and every panel of the manga, so
none of it is shipped or hotlinked. Every record has a line drawing made for
this project instead: a straw hat, three sheathed swords, a lit cannonball, a
windmill on a hill. There are no faces, logos or official artwork.

The drawings are data, not markup. They are lists of stroke paths in TypeScript,
and one component renders all of them: a 160×200 box, a 2 px stroke kept at 2 px
with `vector-effect: non-scaling-stroke`, round caps and joins, no fills. Each
drawing uses one hue for its main stroke and the neutral ink for the rest, which
keeps several hundred illustrations consistent as a set. `npm run art:sheet`
(`scripts/art-sheet.mjs`) renders any drawing, saga or kind to a PNG sheet at
the sizes the site uses, in the site's colours, without starting the site.

A drawing can have a date, like a fact on a character page. When the story
changes a record, it gets a new drawing from that episode on, and the server
picks the latest drawing the reader's bookmark has reached. The picture for a
character never shows something the reader has not seen yet.

The frames work the same way. The seal behind each crest and the plate around
each place are stroke geometry in `src/components/chrome/`, not SVG markup
written by hand.

Every devil fruit has a hand-drawn composition. Fruit + power drawings share
five silhouettes and a segmented round body through the body kit
(`src/data/series/one-piece/art/fruits/kit.ts`), with a crown, a highlight,
hatching and curls for volume. The power is the single accent and acts on the
fruit's own body. Real-fruit drawings show the fruit itself without a power,
from the episode and chapter that show it. Until then a declared awakening can
redraw the power. Once the real fruit is drawn, later identity turns keep that
drawing. Every fruit path uses absolute commands, which lets the drawing tests
read its numbers as coordinates and check the 160×200 bounds.

## Stack

| Layer     | Choice                                                   |
| --------- | -------------------------------------------------------- |
| UI        | React 19.3.0                                             |
| Framework | TanStack Start 1.169.1 (SSR, file-based routes)          |
| Router    | TanStack Router 1.170.44                                 |
| Styling   | StyleX 0.19.1, compiled to one same-origin sheet         |
| Build     | Vite 8.3.4                                               |
| Language  | TypeScript 6.0.3, `strict` plus nine extra flags         |
| Tests     | Vitest 5.0.4, jsdom, Testing Library                     |
| Lint      | ESLint 10 flat config, over a thousand rules, type-aware |
| Gates     | react-doctor 0.9.18, fallow 3.33.1                       |
| Host      | Cloudflare Workers, SSR Worker plus static assets        |
| Runtime   | Node 24.21.0, npm 12.2.0                                 |

Six runtime dependencies. Every version is pinned exactly, with no ranges and
one documented `overrides` entry.

## What the tests guarantee

The archive is TypeScript modules rather than JSON, so most mistakes are caught
before anything runs:

- `ArtId` is derived from the drawings themselves, so a record cannot name a
  drawing that does not exist.
- The English dictionary defines the key set and the Italian one is typed
  against it, so a missing translation fails `typecheck`.
- The bookmark is a discriminated union read through an exhaustive switch, under
  `noFallthroughCasesInSwitch`.
- `strict` is on with nine more flags, including `noUncheckedIndexedAccess`,
  `exactOptionalPropertyTypes` and `noPropertyAccessFromIndexSignature`. Every
  `eslint-disable` comment in the codebase names its rule and gives a reason,
  because the lint rejects one that does not.

The test suite covers what the compiler cannot. These editorial rules are
checked on every run:

- nothing in a payload names a record the reader has not reached, no handle can
  be turned back into a name, and a covered record has no id. A single handle
  that happened to be `btoa(id)` would undo the whole scheme. One sweep
  (`src/server/archive/payloads.test.ts`) runs for every series in the series
  list (`src/data/series/index.ts`, for runtime, the tests, the gates and the
  scripts). It asks every server function for its payload at the series' own
  bookmarks, about fifty for One Piece (both sides of every saga's start in both
  units), and in both locales, and walks it for the id or the name of any record
  not reached, and for any id, name or drawing of another series. A page asked
  for by id is asked for one id in seven at each bookmark, a different seventh
  each time. A test fails when `src/server/api.ts` gains a server function the
  sweep does not know, or when a listed series has no sweep;
- every folder under `src/data/series/` is in the list, and for every listed
  series (`src/data/series/index.test.ts`) ids are unique, thresholds are within
  the allowed range, and every record is translated in both locales;
- each record has its own drawing, never one borrowed from another record;
- every timeline, a character's, a ship's or a redrawing's, is in ascending
  order and starts no earlier than the record's own threshold, so a fact can
  never come before the record it belongs to;
- no text names a record the reader has not reached, in any listed series
  (`src/data/leaks.test.ts`, which reads the texts through the archive). The
  links a chronicle builds from `[[id]]` markers are checked against the story's
  episode, and every text the archive prints, summaries, roles, logs,
  affiliations, origins, epithets, stories, ship fates, place visits and the
  labels of the factions an affiliation is tagged with, is scanned for every
  later record's full name in both locales. A name the show says before its
  record opens, or one that is an ordinary word, is declared on the record
  itself rather than excused in a test;
- for every listed series (`src/data/archive.test.ts`), the dated facts the
  engine derives follow the same rules: a series files only the dated fields of
  the core and of its features; each character has one dossier, filed in one
  saga (the merge throws on a second), and no other record has one; a status
  opens at its character's threshold, is filed only where it changes and pins
  every change to its chapter; a chronicle opens at the threshold and links only
  characters the reader has met, in both units and sources; no shelf heading
  opens after a character on it, in either unit; every chapter an entry pins is
  within the dial and no earlier than its record, no entry opens before its
  record, and nothing dated names an unanchored record before its chapter. A
  featured id that files no character throws when the archive is built, and a
  series that files content is held to a floor of it (`expectedOf` in
  `src/test/series.ts`), so no rule passes on nothing;
- every affiliation entry of a devil fruit eater carries the factions its prose
  names, as ids from a closed vocabulary (`Faction` in
  `src/lib/view/records.ts`, labelled in both dictionaries), and every id in the
  vocabulary is used (`src/data/series/one-piece/factions.test.ts`). A tag never
  says more than its entry: a former member, a prisoner, a vague line or a group
  of one eater is `independent`;
- for every listed series (`src/data/archive.test.ts`), every place has a
  dossier and nothing else has one, and it belongs to an arc that opens no later
  than the place itself in both units, because the places page prints that arc's
  name; the records it files there exist and are not places;
- every later visit to a place comes after the place in both units, in order and
  distinct (`src/data/archive.test.ts`), at the episode and the chapter that
  show it (checked against the wiki, not derived); the place page sends only the
  visits the reader has reached, and none under fog;
- every origin entry that names a place names a filed place and carries the
  chapter that tells it (`src/data/archive.test.ts`), and the place page lists a
  character as coming from it only once the reader has met the character and
  reached that entry, in both units; nobody else is sent or counted;
- every drawing belongs to a record;
- every devil fruit opens no later than any character entry that names it, which
  lets a character page link to its fruit without checking anything, and no
  sooner either, in both units, so a fruit page never tells a reader what the
  story has not. This one holds by construction:
  `src/data/series/one-piece/records/fruits.ts` files no thresholds, and
  `src/data/series/one-piece/entities.ts` reads them off the eaters'
  `devilFruit` entries, the earliest episode and the earliest chapter one opens
  at. The chapter table is built first, from the records as they are filed
  (`src/data/series/one-piece/sagas.ts`), so the fruits can be read off it. A
  test opens every fruit's page with its eater's at both thresholds.

The self-referential one: the pull request title validator reads the release
configuration and checks that both accept exactly the same commit types. If they
drifted apart, a pull request would merge cleanly and then release nothing, so
the drift fails as a test instead.

The dictionaries have a test of their own: the copy follows the
[tone-of-voice skill](../.claude/skills/tone-of-voice/SKILL.md), and
`src/i18n/translate.test.ts` fails on an em dash, an exclamation mark or a
banned phrase in either language.

## Accessibility

- A skip link, and a native `<dialog>` opened with `showModal()`: top layer,
  page inert, Escape closes it, and focus returns to where it was.
- Covered content has `inert` and `aria-hidden`, so neither Tab nor a screen
  reader can reach a spoiler.
- Contrast is measured and recorded next to the tokens of every theme, and
  `src/styles/themes.test.tsx` holds each one to its floors. One Piece: 17.4:1
  for body text, 12.2:1 for the accent. Hunter x Hunter: 17.4:1 and 12.3:1. The
  neutral theme of the pages with no series: 16.5:1 and 19.7:1; its accent is
  within 3:1 of the text, so its links keep their underline, and the test fails
  a shared page whose link does not.

## Security

- A per-request nonce Content Security Policy, `default-src 'self'`,
  `object-src 'none'`, `frame-ancestors 'none'`, plus HSTS, Referrer-Policy and
  Permissions-Policy.
- The headers are set in the app, not in `public/_headers`, because that file
  reaches static files only, and every document here is rendered by the server.
- In CI the pull request title reaches the validator through the environment,
  never through template interpolation, because anyone opening a pull request
  controls the title.
- The server functions that serve the archive are behind a CSRF middleware, so
  another origin cannot call them on a reader's behalf.

**What the fog does and does not do.** It hides the story from someone reading
the site. It is not an access control. The "Show anyway" button is a deliberate
way out: it asks the server for one record by handle, and a script could go
through every handle on a page and rebuild the archive in a few hundred
requests. What changed is the effort that takes. It used to be one `curl` of a
cacheable, crawlable static file. Now it is same-origin POSTs to a function,
which are logged, can be rate-limited, and are not indexed by search engines.

**Search engines get the whole archive.** A crawler sends no bookmark, so
otherwise it would index hundreds of pages that all say "A character under fog".
A request whose `User-Agent` names one of fourteen known crawlers and link
previewers (Googlebot, Bingbot, Applebot, the Yandex and Baidu bots, the Slack,
Discord and WhatsApp previewers and others) is treated as a reader who has
finished the story, and gets everything. This is a deliberate trade-off: a user
agent is a string anyone can send, so `curl -A Googlebot` reads the whole wiki.
The fog protects readers from spoilers. It does not stop someone who wants to
see everything. WhatsApp is the only name matched at the start of the string.
Its link previewer puts it first, while its in-app browser appends the same
token to a normal mobile browser's user agent, and that is a real reader who
tapped a link a friend sent. The list is in `src/lib/crawler.ts`.

## Performance

- **The archive is not in the bundle.** Moving it behind the loaders took the
  client JavaScript from 1,048,559 bytes to 450,058, and 318 KB of what was left
  is React. A reader at episode 45 downloads only the records they have reached,
  not all 737.
- Payloads carry one locale. A record used to ship its Italian and English name
  and summary together; now it carries only the page's language.
- The character shelves on the characters page, one tile with a drawing per
  character below the fold, are not in the served page. The browser asks for
  them once the page has hydrated, in one call that answers plain JSON (`plain`
  in `src/lib/plain.ts`) instead of going through seroval, and shows
  placeholders of their height until they land. They had been in the HTML (a
  promise the loader did not await resolved before React reached its
  `<Suspense>`), about 7,000 elements and most of the page's server time: at
  episode 1150 the page went from 25 to 5.5 ms of local CPU and from 926 to 247
  KB, and the shelves call from 6.5 ms and 296 KB to 2.1 ms and 145 KB (#776).
  Search engines read the record pages, not the shelves, and a reader with
  scripting off sees the main characters only, and past the first ten of them an
  empty seal where the drawing would be (#777). The fruit album and the call for
  deferred drawings answer plain JSON the same way (#780): at episode 1150 the
  album went from 3.3 ms and 182 KB to 1.2 ms and 96 KB, and 64 drawings from
  1.4 ms and 106 KB to 0.3 ms and 64 KB. Every payload sent this way must read
  back whole from `JSON.stringify`, and `payloads.test.ts` checks that for each
  one; a test there fails if a `plain(` call in `src/server/api.ts` is left out
  of that check. The landing page (East Blue under the dial for a visitor with
  no bookmark, the reader's arc and its stories for one with a bookmark), the
  places chart and a character page are awaited instead: they are the page, and
  a reader with scripting off should get them in full. The places index under
  the chart is not: it follows once the page has hydrated (#781, below).
- The fruits page's HTML stops at the saga marquee and the control bar: the
  server sends the marquee's fruits, each plate's counts and the number filed
  (`loadFruits`). The plates and the saga and faction groups are a second server
  function, `loadFruitAlbum`, which the browser asks for right after hydration,
  or in the route's loader on a navigation or a bookmark move, so there they
  arrive with the page (`src/routes/$series/$locale/fruits/-album.ts`). Search
  and the chips need every plate, so the whole album comes at once, not as it
  scrolls. It reads the bookmark from the cookie like every other call, sends
  back the bookmark it read, and the page files it under that one, so an album
  never shows under a bookmark it was not cut for. A reader with scripting off
  sees the marquee and the bar, or the wall, and not the plates. The plates were
  most of the render and of its loader data: locally, at episode 1150, the page
  went from 8.5 to 1.7 ms of CPU and from 327 to 39 KB, and at episode 1 from
  5.5 to 1.7 ms and 212 to 30 KB; the album call costs 3.3 ms and 182 KB at 1150
  (#778).
- The three list pages send only the first drawings inline: the served
  characters page the first ten featured crests (the shelves call after it, the
  first shelf), the places page the first three places, and the fruits page the
  marquee's lead and the first six tiles of the fruit album. Every other record
  carries its tint and `deferred: true`, and the page asks for its strokes by id
  once it comes within a screen of the viewport (`useDrawing` in
  `src/lib/view/drawings.ts`, `drawingsFor` on the server, which answers only
  records the reader has reached). The box a drawing sits in keeps its size
  while the strokes load, so nothing moves. A test in `slices.test.ts` holds
  each list payload to 28 KB of inline strokes at the latest bookmark. Deferring
  the fruits took `/one-piece/en/fruits` at episode 1150 from 200 KB to 39 KB
  gzip (#610). Deferring the crests past the tenth (two rows at the widest grid)
  took `/one-piece/en/characters` at episode 1150 from about 4.5 to 3 ms of
  local CPU and from 247 to 150 KB (#777).
- The browser skips the layout and paint of list items far from the screen
  (`content-visibility: auto` on a character tile, a record tile and a fruit's
  drawing margin). Each stands in at its own exact height, the same at every
  width, so the page keeps its height and Back returns to the same tile. On a
  phone with the CPU slowed four times, layout, style and paint took 503 → 159
  ms on `/one-piece/en/characters`, 376 → 193 ms on `/one-piece/en/places` and
  194 → 167 ms on `/one-piece/en/fruits` (#621).
- The sea chart works out the scale each name shows from once per set of names.
  Each name's drawn point and box offset are found first, so every scale is
  plain arithmetic, and the result is kept for up to 64 sets of names and dots
  in a module-level cache, so a warm Worker skips it. A search or a pick only
  relights the stops. Locally, `/one-piece/en/places` at episode 1150 went from
  about 14.5 to 8.5 ms of CPU (#779).
- The places page serves the chart in one orientation and no index. The server
  cannot measure the window, so a phone's browser (`Sec-CH-UA-Mobile` or `Mobi`
  in the user agent) gets the chart upright and every other one across; once the
  page runs, `useChartOrientation` follows the window's width and turns it if
  the guess was wrong. The index under it, whose data is in the payload already,
  is drawn once the page has hydrated, and a reload is put back where the reader
  left it (`useScrollBackOnceTall` in
  `src/routes/$series/$locale/-scrollBack.ts`, shared with the character
  shelves). A reader with scripting off gets the chart and each place's own
  page, not the index. Measured back to back on one machine,
  `/one-piece/en/places` at episode 1150 went from 8.8 to 5.0 ms of CPU and from
  278 to 121 KB, and at episode 1 from 3.1 to 2.8 ms and 60 to 40 KB (#781).
- Search runs on names folded once by the server, so a keystroke costs one
  folded query and a few hundred `indexOf` calls. The list below the field is
  deferred; the field itself never is.
- Three self-hosted variable font families in five woff2 files, each with a
  metric-matched fallback face so the `font-display: swap` switch does not
  reflow the page.
- Assets and fonts have immutable one-year cache headers. The archive's own
  responses vary by cookie and are never stored in a shared cache.

### Server time

The site moved from Netlify to a Cloudflare Worker on `zerospoiler.app` (#727).
The figures below were taken on Netlify, whose function ran in Ohio; a Worker
runs in the data centre nearest the reader, so the fixed hop they describe is
not the floor any more. On 2026-10-24, from Italy, the same pages answered in
0.10–0.30 s. A Worker's clock only moves across I/O, so `app;dur` reads close to
zero there; `wrangler tail` reports the CPU time instead: 87–132 ms for
`/one-piece/en/characters`, 16–44 ms for fruits and places, about 10 ms for a
character page. The Workers Free plan documents a 10 ms CPU limit per request,
and a request over an enforced limit fails with error 1102. Every request
succeeded on that day, but the list pages are over it. If 1102s show up in the
Worker's metrics, Workers Paid is the fix.

Measured on 2026-10-15 from Italy with the `Server-Timing` header every response
carries (`app;dur=…`, the time inside the function until the response exists,
and `cold` on an instance's first request; `src/start.ts`). One reused
connection, medians of six runs, before the fixes below (#621):

| Request (episode 1150)          | Time to first byte | Inside the function | The rest |
| ------------------------------- | ------------------ | ------------------- | -------- |
| `/robots.txt?r=…`, a cache miss | 0.21 s             | 0.00 s              | 0.21 s   |
| `/en`                           | 0.35 s             | 0.14 s              | 0.21 s   |
| `/one-piece/en/characters/nami` | 0.30 s             | 0.08 s              | 0.21 s   |
| `/one-piece/en/fruits`          | 0.62 s             | 0.38 s              | 0.23 s   |
| `/one-piece/en/characters`      | 0.70 s             | 0.48 s              | 0.22 s   |
| `/one-piece/en/places`          | 0.87 s             | 0.59 s              | 0.26 s   |

What this says:

- **The hop to the function costs about 0.21 s, whatever the page.** It is the
  same for a 0.1 KB robots file and a 105 KB gzip list, so the size of the body
  does not add to it. On Netlify Free the function ran in the US and could not
  be moved, so this was the floor. (#610 read the body size as the cost; with
  the header in place, that turned out to be wrong.)
- **The rest is the render, and it grows with the number of elements.** At
  episode 1, with almost nothing open, `/one-piece/en/characters` still took
  0.39 s for more than five hundred covered cards. A CPU profile puts most of a
  render in React writing and encoding HTML, and the next largest share in
  serialising the loader data.
- **Production rendered with React's development build.** Netlify did not set
  `NODE_ENV` inside a function, and the server build left React, TanStack and
  StyleX as packages that choose their build from it at run time. The HTML is
  identical either way, so it showed only as time: about twice the work of the
  production build.
- **A cold start** is rare on a busy instance (none in 84 requests) and cost
  1.4–3 s when it happened.

What was decided:

- **No cache for HTML.** A cache key that misses one cookie or one parameter
  would serve another reader's later bookmark, which is a spoiler. Every HTML
  response is rendered per request.
- **The server build bundles its dependencies** (`ssr.noExternal` in
  `vite.config.ts`), so the production branch is written in at build time.
  Locally, with `NODE_ENV` unset as on Netlify, renders take about half as long
  (`/one-piece/en/characters` 62 → 31 ms, `/one-piece/en/places` 36 → 18 ms) and
  a cold start's first response comes in 0.26 s instead of 0.45 s.
- **An open record has no curtain.** Every card the server sent open used to
  carry the hidden "Show anyway" button that lifts the fog, kept only so a
  reveal could fade. It was a fifth of each list page:
  `/one-piece/en/characters` went from 1,165 to 902 KB raw,
  `/one-piece/en/places` from 713 to 555 KB, `/one-piece/en/fruits` from 381 to
  256 KB.
- **Smaller pages first, then fewer elements.** Deferring the fruit drawings cut
  that page by 60% raw (#610). Moving the shared stroke classes from every
  `<path>` to one `<g>` was measured and dropped: most drawings on a list are
  deferred, and an empty `<g>` on each of them costs more than the classes it
  saves.
- **No Edge Functions for now.** Production renders 5–20 times slower than a
  laptop, so even a 31 ms local `/one-piece/en/characters` would not fit the 50
  ms Edge CPU limit, and the archive would have to ship in the edge bundle.

## Localization

Italian and English, as route prefixes: `/it` and `/en`. The root chooses once
(cookie, then `Accept-Language`, then Italian) and redirects with a 302, never
a 301. An unknown prefix is a 404, not a silent redirect. In Italian, character
names follow the Italian dub.

## Engineering notes

**The pull request title sets the version bump.** Merges to `main` are squashed
into one commit whose subject is the title, and semantic-release reads that
subject to create the tag and the GitHub Release. Every conventional type maps
to a release on purpose, so every merged pull request produces a version. There
is no `CHANGELOG.md`; the Releases page is the changelog.

**Three blocking gates beyond lint and test.** react-doctor and fallow run last,
after typecheck, lint, format, test and build, both locally and in CI, and
neither can be skipped. Every react-doctor finding blocks, whatever its tag or
file, tests included. Its configuration is a typed `doctor.config.ts` that turns
on every opt-in rule that applies to this stack, the design family included, and
leaves one off, with its reason. It runs with inline disables ignored, so a
comment cannot get a finding past the gate.

The third gate is `scripts/archive-gate.mjs`. It exists because nothing else can
see the problem it looks for: one stray value import from `~/data` typechecks,
lints, passes every test and passes both other gates, and the only symptom is a
bigger `.js` file that a visitor with no bookmark can read end to end. The gate
searches the built client chunks for a sentence from every saga and from the
places list, read when the gate runs so it cannot go stale. It never searches
for a key such as `revealedAtEpisode`, which is legitimately present on a
covered record. The drawing modules contain no sentences; they are keyed by
record id, and a record's id is its name slug, so the gate looks for those ids
instead, since that is how a leak there would show up. A byte limit on the whole
client payload catches anything large that neither pattern matches. ESLint
catches the same mistake earlier, at the import.

fallow checks the structure of the codebase instead, with every rule that
applies set to error: thirteen zones with a declared import direction between
them (the archive is a shared engine in `src/data` and one zone per series under
`src/data/series`, no series imports another, no zone imports the series list,
and no zone but the list takes anything from a series, types included), no
export that nothing reads (entry files included), no duplicated block of five
lines or more outside the tests, near-identical ones included, and limits of 8
cyclomatic and 8 cognitive complexity. Its CRAP score reads the coverage
`npm test` writes, so a complex function with no test fails the gate. A second
run, `fallow security --gate new`, fails a branch that adds a command-injection,
path-traversal, secret or other sink against `origin/main`. Two tests fail when
an upgrade of either tool ships a rule or a security category the configuration
does not turn on. Both gates write a machine-readable report that CI uploads as
an artifact on every run, passing or failing.

**ESLint runs over a thousand rules.** Most of them come from unicorn and
sonarjs, followed by typescript-eslint's type-aware sets, `@eslint-react`,
regexp, jsdoc and jsx-a11y-x. `eslint-config-prettier` is applied last, and
Unicorn's arrow-return-style rule is explicitly off because its line-count
preference conflicts with Prettier's wrapping. The optional-chain rule uses
`requireNullish: true` to allow explicit guards for comparisons whose key can be
undefined, as in `chunkBy`; nullable operand chains are still checked. On top of
these are explicit limits: complexity 8, cognitive complexity 10, 60 lines per
function, 300 per file, 15 statements, 3 parameters, 3 levels of nesting. They
are sized for what a reviewer can hold in their head at once, not as a target to
grow into. A suppression has to justify itself: `require-description` means an
`eslint-disable` names its rule and gives a reason, and `no-unused-disable`
fails it once the reason no longer applies.

**The commit type list is defined once.** The hooks run through lefthook: one
declarative file with globs, `{staged_files}` and re-staging built in, instead
of a shell script per hook plus lint-staged. `commit-msg` runs the message
through commitlint, and commitlint's config imports `TYPE_BUMPS` and
`MAX_TITLE_LENGTH` from `scripts/validate-pr-title.mjs` instead of repeating
them. The header limit is the pull request title limit, because a squash merge
turns that title into the commit subject. The validator is itself tested against
`.releaserc.json`, so all three stay in sync by construction, and a parity test
runs the same commitlint binary the hook uses to check that the import is what
the tool actually enforces.

**Two Vite configs, on purpose.** The Vitest config leaves out the TanStack
Start plugin, which forces `optimizeDeps.include` for React. Under Vitest that
prebundles a second copy of React and breaks hooks. Vitest uses its own config
instead of merging the two, so the separation is real. StyleX has to be
registered in both, because its `create` throws at runtime when it has not been
compiled.

**One dependency override.** StyleX's plugin and TanStack's router plugin
declare non-overlapping peer ranges for `unplugin`, so a clean install fails
with `ERESOLVE`. The override pins every copy to the version TanStack already
requires. It can be removed once StyleX widens its range.
