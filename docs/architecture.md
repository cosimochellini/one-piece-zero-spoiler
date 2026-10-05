# How Zero Spoiler works

The [README](../README.md) shows what the site does. This page explains how, and
why each piece is built the way it is. The finer decisions are documented in
code comments next to the code they explain.

## Hidden content stays on the server

The archive is 737 records and their line drawings, about 2.7 MB of TypeScript.
None of it is compiled into the client bundle. A route loader reads the
`opzs_ep` cookie from the request and returns the records at or below the
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

Search follows the same rule, by construction: a covered character is not on the
page, so it cannot be found. Search matches only the epithets the reader has
already reached, so "Whitebeard" finds Edward Newgate from episode 151, where
the epithet opens. Those epithets are checked on the server and sent already
folded, so an epithet the reader has not reached is not in the browser at all.

## The archive in numbers

| Thing               | Count                                                 |
| ------------------- | ----------------------------------------------------- |
| Records             | 737                                                   |
| Characters          | 534                                                   |
| Devil fruits        | 128                                                   |
| Arcs, places, ships | 34 · 39 · 2                                           |
| Saga modules        | 12, plus one for the devil fruits                     |
| Line drawings       | 737, one per record, plus 26 redrawings of 24 records |
| Chronicle stories   | 756, for 185 characters                               |
| Test files          | 68                                                    |
| Test cases          | 605                                                   |
| Coverage            | 80.8 % statements, 78.2 % branches, 82.5 % functions  |

Counted on 2026-10-05. Coverage includes the scripts under `scripts/`. The live
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
keeps several hundred illustrations consistent as a set.

A drawing can have a date, like a fact on a character page. When the story
changes a record, it gets a new drawing from that episode on, and the server
picks the latest drawing the reader's bookmark has reached. The picture for a
character never shows something the reader has not seen yet.

The frames work the same way. The seal behind each crest and the plate around
each place are stroke geometry in `src/components/chrome/`, not SVG markup
written by hand.

The devil fruits are generated rather than drawn one by one. More than a hundred
drawings of the same kind of object have to look like one set and still be told
apart, so each is composed from a seed written next to its id: one of six
silhouettes, one of four marks, a stalk and a leaf. The eleven fruits a reader
already knows well are drawn by hand and override their generated version. The
sizing is guaranteed rather than hoped for: a seed cannot set a radius, so the
widest fruit the generator can produce is known in advance. Every path it writes
uses absolute commands only, which lets the test read the numbers in a path as
coordinates.

## Stack

| Layer     | Choice                                            |
| --------- | ------------------------------------------------- |
| UI        | React 19.3.0                                      |
| Framework | TanStack Start 1.168.60 (SSR, file-based routes)  |
| Router    | TanStack Router 1.170.41                          |
| Styling   | StyleX 0.19.1, compiled to one same-origin sheet  |
| Build     | Vite 8.3.2                                        |
| Language  | TypeScript 6.0.3, `strict` plus nine extra flags  |
| Tests     | Vitest 5.0.3, jsdom, Testing Library              |
| Lint      | ESLint 10 flat config, 1,059 rules on, type-aware |
| Gates     | react-doctor 0.9.17, fallow 3.31.0                |
| Host      | Netlify, SSR function plus CDN assets             |
| Runtime   | Node 24.21.0, npm 12.2.0                          |

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
  that happened to be `btoa(id)` would undo the whole scheme;
- ids are unique, thresholds are within the allowed range, and every record is
  translated in both locales;
- each record has its own drawing, never one borrowed from another record;
- every timeline, a character's, a ship's or a redrawing's, is in ascending
  order and starts no earlier than the record's own threshold, so a fact can
  never come before the record it belongs to;
- no text names a record the reader has not reached. The links a chronicle
  builds from `[[id]]` markers are checked against the story's episode, and
  every text the archive prints, summaries, roles, logs, affiliations, origins,
  epithets, stories and ship fates, is scanned for every later record's full
  name in both locales. A name the show says before its record opens, or one
  that is an ordinary word, is declared on the record itself rather than excused
  in a test;
- every place belongs to an arc that opens no later than the place itself,
  because the place page shows that arc;
- every drawing belongs to a record;
- every devil fruit opens no later than any character entry that names it, which
  lets a character page link to its fruit without checking anything, and no
  sooner either, in both units, so a fruit page never tells a reader what the
  story has not.

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
- Contrast is measured and recorded next to the tokens: 17.4:1 for body text,
  12.2:1 for the accent.

## Security

- A per-request nonce Content Security Policy, `default-src 'self'`,
  `object-src 'none'`, `frame-ancestors 'none'`, plus HSTS, Referrer-Policy and
  Permissions-Policy.
- The headers are set in the app, not in `netlify.toml`, because Netlify does
  not apply file headers to responses from a function, and every document here
  is rendered by one.
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
  character below the fold, come from the loader as a promise that is not
  awaited and stream into a `<Suspense>` boundary, so the search field and the
  main characters load first. The landing page (the fogged chart for a reader
  with no bookmark, the reader's arc and its stories for one with a bookmark),
  the places list and a character page are awaited instead: they are the page,
  and a reader with scripting off should get them in full.
- Search runs on names folded once by the server, so a keystroke costs one
  folded query and a few hundred `indexOf` calls. The list below the field is
  deferred; the field itself never is.
- Three self-hosted variable font families in five woff2 files, each with a
  metric-matched fallback face so the `font-display: swap` switch does not
  reflow the page.
- Assets and fonts have immutable one-year cache headers. The archive's own
  responses vary by cookie and are never stored in a shared cache.

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
applies set to error: nine zones with a declared import direction between them,
no export that nothing reads (entry files included), no duplicated block of five
lines or more outside the tests, near-identical ones included, and limits of 8
cyclomatic and 8 cognitive complexity. Its CRAP score reads the coverage
`npm test` writes, so a complex function with no test fails the gate. A second
run, `fallow security --gate new`, fails a branch that adds a command-injection,
path-traversal, secret or other sink against `origin/main`. Two tests fail when
an upgrade of either tool ships a rule or a security category the configuration
does not turn on. Both gates write a machine-readable report that CI uploads as
an artifact on every run, passing or failing.

**ESLint runs over a thousand rules.** `eslint --print-config` on a source file
reports 1,059 rules switched on. Most of them come from unicorn (357) and
sonarjs (228), followed by typescript-eslint's type-aware sets, `@eslint-react`,
regexp, jsdoc and jsx-a11y-x. `eslint-config-prettier` is applied last, so the
two tools never disagree about formatting. On top of these are explicit limits:
complexity 8, cognitive complexity 10, 60 lines per function, 300 per file, 15
statements, 3 parameters, 3 levels of nesting. They are sized for what a
reviewer can hold in their head at once, not as a target to grow into. A
suppression has to justify itself: `require-description` means an
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
