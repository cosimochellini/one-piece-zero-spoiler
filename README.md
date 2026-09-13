# one-piece-zero-spoiler

A [TanStack Start](https://tanstack.com/start) (React) application: a One Piece
wiki that hides every entry filed after the episode the reader has reached.

## Requirements

- Node 24.18.0 (`nvm use`)
- npm 11.16.0

## Setup

```bash
npm install
npm run dev
```

The dev server listens on http://localhost:3000.

`npm install` also installs the git hooks. It does that through the `prepare`
script rather than through lefthook's own postinstall, so the hooks land on a
plain install without the project having to allow install scripts from its
dependencies. To put them back by hand after a `.git` is recreated or a hook
file is deleted, run `npx lefthook install`. To skip them for a single command,
set `LEFTHOOK=0` for it — `LEFTHOOK=0 git commit` commits without running
anything. CI sets `LEFTHOOK=0` for the whole workflow instead of per step: no
hook has anything useful to add to a run that already executes `npm run check`,
and it is also what keeps the release job's generated commit body away from
commitlint.

## Scripts

| Script                                      | Description                                                             |
| ------------------------------------------- | ----------------------------------------------------------------------- |
| `npm run dev`                               | Dev server on http://localhost:3000                                     |
| `npm run build`                             | Production build to `dist/client` and `dist/server`                     |
| `npm start`                                 | Serve the production build (`vite preview`)                             |
| `npm run typecheck`                         | `tsc --noEmit`                                                          |
| `npm run lint` / `lint:fix`                 | ESLint, type-aware, zero warnings allowed                               |
| `npm run format` / `format:check`           | Prettier                                                                |
| `npm test` / `test:watch` / `test:coverage` | Vitest                                                                  |
| `npm run gate:react-doctor`                 | Blocking [react-doctor](https://react.doctor) health gate               |
| `npm run gate:fallow`                       | Blocking [fallow](https://docs.fallow.tools) codebase-intelligence gate |
| `npm run check`                             | Everything above, in the same order CI runs it                          |

`npm run check` is what CI runs. Run it before pushing.

The git hooks sit in front of that, never in place of it. `pre-commit` runs
Prettier over the staged files and stages what it rewrote, runs ESLint over them
at zero warnings, and then typechecks the whole project rather than the staged
files, because a changed type breaks files that are not staged; it skips
entirely during a merge or a rebase, which replays commits that were checked
once already and is not the moment to argue about formatting. `commit-msg` puts
the message through commitlint. `pre-push` runs the test suite. All three only
shorten the loop: they see a subset of the work `npm run check` does, and that
command, run by CI, is still what decides.

## Versioning and releases

The project is versioned with [SemVer](https://semver.org), and the version is
produced entirely by CI. Nobody edits `version` in `package.json` by hand.

**The pull request title is the version bump.** Merges to `main` are squashed
into a single commit whose subject is the PR title, and
[semantic-release](https://semantic-release.gitbook.io) reads that subject to
decide what to release. The `pr-title` check validates the format on every pull
request, so a malformed title is visible before the merge button — though see
the note on branch protection below for why it is a warning rather than a hard
block.

```
type(optional-scope): subject
type(optional-scope)!: subject   # breaking change, releases a major
```

| Title type                                                                  | Release |
| --------------------------------------------------------------------------- | ------- |
| any type with `!`, or a `BREAKING CHANGE:` footer                           | major   |
| `feat`                                                                      | minor   |
| `fix` `perf` `revert` `refactor` `docs` `style` `test` `build` `ci` `chore` | patch   |

Every type maps to a release, on purpose: a merged pull request always produces
a version. That is configured through `releaseRules` in `.releaserc.json`, which
overrides semantic-release's default of releasing nothing for `chore` and
friends.

What happens on a merge to `main`:

1. The `check` job runs the full gate. A red build releases nothing.
2. The `release` job bumps `package.json` and `package-lock.json`, commits them
   back as `chore(release): x.y.z [skip ci]`, creates the `vx.y.z` tag, and
   publishes a GitHub Release with notes generated from the commits.

There is no `CHANGELOG.md`: the GitHub Releases page is the changelog. Nothing
is published to npm — the package is `private`.

`main` carries no branch protection, and that is a decision rather than an
omission. A ruleset requiring a pull request would also reject the
`chore(release)` commit the release job pushes, and the usual escape hatch —
adding `github-actions` to the ruleset's bypass list — is rejected on a personal
repository with
`Actor GitHub Actions integration must be part of the ruleset source or owner organization`.
Protecting the branch therefore costs either a deploy key held as a secret, or
giving up the `package.json` bump. Both checks still run on every pull request;
they are simply advisory.

If the `release` job dies between tagging and publishing — the tag and the
version commit land, the GitHub Release does not — the next merge will not
backfill it, because the tag already exists and the commits are already
released. Recreate it by hand:

```bash
gh release create vX.Y.Z --generate-notes
```

Three details worth knowing before changing any of this:

- **`scripts/validate-pr-title.mjs`, `.releaserc.json` and
  `commitlint.config.mjs` must agree.** A type the validator accepts but the
  release rules ignore would merge cleanly and then release nothing.
  `scripts/validate-pr-title.test.mjs` reads `.releaserc.json` and asserts the
  two maps are identical, so the drift fails the test run rather than a release.
  The commit-message linter is the third corner, and it cannot drift at all: it
  imports `TYPE_BUMPS` and `MAX_TITLE_LENGTH` from the validator instead of
  repeating them, so the type list has one home and the header cap is the pull
  request title cap — anything shorter would make a local commit stricter than
  the squashed subject it turns into. `scripts/commitlint-parity.test.mjs`
  checks that the import is actually what the tool ends up enforcing, by
  spawning the same binary the `commit-msg` hook runs over one message per
  accepted type and over four that must be rejected.
- **`revert` needs two release rules.** `{ revert: true }` only matches the body
  `git revert` writes (`This reverts commit <sha>.`), which a squashed pull
  request never carries because the squash body is blank. The
  `{ type: 'revert' }` rule is what actually matches a `revert:` title.
- **semantic-release is installed by pinned `npx`, not by `devDependencies`.**
  It pulls roughly 250 packages that no other job and no local install needs. If
  plugin resolution through `npx -p` ever breaks, the fallback is to pin the
  same versions in `devDependencies` and run it through `npm ci`.

## Architecture notes

**Two Vite configs, on purpose.** `vitest.config.ts` deliberately omits
`tanstackStart()`. That plugin unconditionally sets `optimizeDeps.include` for
`react` and `react-dom`, which prebundles a second copy of React under Vitest
and makes every test fail with
`TypeError: Cannot read properties of null (reading 'useState')`
([TanStack/router#6246](https://github.com/TanStack/router/issues/6246)). Vitest
gives `vitest.config.ts` full priority — `vite.config.ts` is ignored, not merged
— so this is real isolation rather than a conditional workaround.

**Plugin order matters.** `viteReact()` must come _after_ `tanstackStart()`.
Start no longer auto-configures the React plugin, and the old
`customViteReactPlugin` option no longer exists.

**TypeScript is pinned to 6.0.x, not 7.x.** `typescript-eslint` declares a peer
range of `typescript >=4.8.4 <6.1.0`. Upgrading TypeScript past 6.0 would break
the type-aware ESLint rules, so the pin holds until `typescript-eslint` supports
the native compiler.

**Prettier owns the whitespace, ESLint owns the choice of construct.**
`eslint-config-prettier` is applied last, so every rule about where a character
sits is switched off and the two tools cannot disagree about a line break. The
one rule it disables that is not really about whitespace comes straight back on
after it: `curly` is off in that config only because Prettier cannot re-indent a
body it did not brace, and with `curly: all` there is nothing left for it to
re-indent. What ESLint does carry is `stylisticTypeChecked`, which is enabled
and is not a stylistic ruleset in the sense the name suggests: its rules pick
between constructs that mean the same thing — `type` over `interface`, `??` over
`||`, `T[]` over `Array<T>` — and none of those is a whitespace decision, so
Prettier has nothing to say about any of them.

Thirteen Prettier options are pinned rather than five. `endOfLine` and
`bracketSameLine` only restate the defaults, which is the point: an editor that
disagrees is then disagreeing with something written down.
`singleAttributePerLine` and `objectWrap: collapse` make JSX and object literals
wrap the same way every time instead of by whether the author's first draft
happened to fit. `quoteProps: consistent` stops one key that needs quoting from
leaving its neighbours bare. `proseWrap: always` is what fixes this file's line
length. `experimentalTernaries` and `experimentalOperatorPosition: start` settle
the last two placement questions Prettier used to leave to whoever typed the
line. `prettier-plugin-packagejson` sorts `package.json` into the canonical key
order, which is why the `scripts` block reads alphabetically rather than in the
order the scripts were added, and why a new dependency lands in its slot instead
of at the bottom of the list.

**Git hooks run through lefthook.** `lefthook.yml` is the whole of it: one
declarative file, globs and `{staged_files}` built in, and `stage_fixed` to
re-stage what Prettier rewrote. Husky would mean a committed shell script per
hook plus lint-staged on top, because husky itself knows nothing about what is
staged, and that is two more moving parts for something lefthook does in one.
The hooks themselves are described under Scripts; none of them is authoritative,
and all of them are skipped wholesale in CI through `LEFTHOOK: '0'` in the
workflow's `env` rather than per step.

**`.git-blame-ignore-revs` names the reformat commits.** Widening the Prettier
configuration rewrote seventy-five files in one commit, and `git blame` would
otherwise credit every line in them to that commit and to nothing earlier. The
file lists the revision; GitHub reads it with no configuration, and locally it
takes one `git config blame.ignoreRevsFile .git-blame-ignore-revs`. Any future
commit that only reformats belongs in it too. `.editorconfig` and `.vscode/`
carry the same decisions into the editor — format on save with Prettier, ESLint
fixes on save, the workspace TypeScript rather than the editor's own bundled
one, and the three extensions that make all of it work.

**Spoiler gating is decided on the server.** The reader's bookmark lives in the
`opzs_ep` cookie, and `src/lib/progress/readBookmark.ts` reads it through
`createIsomorphicFn` — the server branch before the first byte of HTML, the
client branch from `document.cookie` on a navigation. The cookie has three
grammars, one per way of counting: a bare integer is an anime episode (which is
also what the site wrote before it counted anything else, so an old bookmark
still works), `s2e3` is a season and an episode within it, and `c1044` is a
manga chapter. `parseBookmark` in `src/lib/progress/episode.ts` fails closed: a
missing cookie, a corrupt one, or a value outside the form range hides
everything rather than revealing it. The decision is then made once by
`isRevealed` in `src/lib/progress/spoiler.ts`: every record carries both a
`revealedAtEpisode` and a `revealedAtChapter`, a chapter bookmark is read
against the chapter and everything else against the episode, and a season
bookmark is turned into an absolute episode through the table in
`src/data/seasons.ts` (Wikipedia's 22 seasons, the last one open-ended to the
ceiling). There is no conversion between the units, on purpose: a reader picks
one, and every threshold on the site — a waypoint's "Episode 130", the veil's
"Under fog until chapter 218", the character page's `<title>` description — is
then said in that unit through `describeThreshold`. That is what makes the first
paint already correct; reading the cookie in an effect would paint the uncovered
page and cover it one frame later, which is a spoiler.

The cookie is not `HttpOnly`. It is written by the browser when the reader saves
the dialog, the server never trusts it for anything but choosing what to render,
and a round trip would put network latency between a click and the page
reacting.

**The bookmark is set from the bar, and only from the bar.** The one gold thing
in `SiteBar` is a mark showing the bookmark as it stands — `EP 650`, `S02E03`,
`CH 1044`, or the invitation to set one — and pressing it opens
`BookmarkDialog`, a native `<dialog>` opened with `showModal()`: the browser
puts it in the top layer, makes the page behind it inert, closes it on Escape
and hands focus back to the mark. The dialog is a three-way choice of unit, then
the number (a `<select>` of seasons first, in season mode); switching the unit
empties the field rather than converting it, and nothing is written until Save.
The dialog is mounted only while it is open, so every opening starts from the
bookmark as it stands and none of it is in the served HTML. jsdom does not
implement `showModal`, so `src/test/setup.ts` carries a small stand-in.

Because the anime and the manga do not introduce every record in the same order
(Shanks is on the first page of the manga and in the fourth episode of the
anime), the chart, the log and the strip are handed the archive sorted by the
unit the reader counts in (`orderByMode` in `src/data/order.ts`). That is what
keeps the open rows a prefix of the list in every unit, which the horizon
construction below relies on. The chapter numbers in `src/data/entities.ts` were
filed from memory of the manga and are marked for a check against a source
before the wiki is published.

`SpoilerVeil` blurs by default. On the landing chart the covered text is in the
DOM: `inert` and `aria-hidden` keep it away from the keyboard and from screen
readers, and `user-select: none` keeps it out of a drag-select, but browser
find-in-page and devtools can still surface it. The character pages pass a
`placeholder` instead, so a covered name, role or summary is absent from the
served HTML and only mounts on the client once the fog is lifted. A fogged crest
is a bare seal with no drawing and no colour, and a fogged catalogue card has no
link, because the slug would spell the name.

**Locales are route prefixes.** Every page lives under `/$locale`
(`src/routes/$locale.tsx`), so the same page in two languages is two addresses.
`/` negotiates once — cookie, then `Accept-Language`, then Italian — and
redirects with a 302, never a 301. An unrecognised prefix is a 404 rather than a
silent redirect to the default language. `src/i18n/dictionaries/en.ts` is the
source of truth for the key set; `it.ts` is annotated `Dictionary`, so a missing
key fails `typecheck`. The pair is exported as `enDictionary` and `itDictionary`
because Vitest puts `it` in global scope and a dictionary named `it` shadows it
in every test file.

**Styling is StyleX, and the design system is Hallmark's.** Every visual rule is
authored with `@stylexjs/stylex` and compiled by `@stylexjs/unplugin`, which
appends the generated CSS to `src/styles/global.css` — the single same-origin
stylesheet the SSR manifest links on every document. That is why
`default-src 'self'` needs no new source.

The tokens in `src/styles/tokens.stylex.ts` follow the naming Hallmark uses
(`paper` / `ink` / `rule` / `muted` / `accent` / `accentInk` / `focus`, a 4pt
space scale, named easings and durations). Hallmark normally emits a
`tokens.css` full of `:root { --color-ink: … }`; this project does not, because
`defineVars` compiles to exactly those custom properties. There is one source of
truth, and it is the TypeScript module. `accentInk` is a contract: any surface
painted `accent` that carries text sets its colour to `accentInk`, never to a
hardcoded white.

**The landing is a sea chart.** The Hallmark run that produced it picked the Map
/ Diagram macrostructure: the archive is drawn as one vertical route
(`src/components/RouteChart.tsx`), every entry a waypoint in the order the anime
reaches it, and the reader's episode is a horizon line across the route. Rows
above it are open and drawn in gold; rows below are under fog, their names
behind a `SpoilerVeil` and their stretch of route dashed. Because the entries
are sorted by threshold and `isRevealed` is monotone, the open rows are always a
prefix of the list, so the horizon is a single `<li aria-current="step">`
between two runs rather than a marker interpolated along a path. Each row draws
its own SVG segment with `preserveAspectRatio="none"` and `non-scaling-stroke`,
which is how the line follows whatever height the row's text needs. The
orientation column (headline, lede, legend) is `position: sticky` from 60rem so
saving a new bookmark from the bar moves the horizon in view. The stamp at the
top of `tokens.stylex.ts` records the picks; `.hallmark/log.json` records the
history.

**The characters pages are the signal book.** `/$locale/characters` opens with
the thirty-six characters named in `FEATURED_CHARACTER_IDS`
(`src/data/characters.ts`, an editorial ranking; the page draws them in route
order) as one uniform grid of crests, Hallmark's Catalogue macrostructure, and
continues with the whole cast as compact tiles on one shelf per arc
(`bookSections`: a character is shelved under the arc with the greatest
threshold no later than their own, so a shelf's heading is open whenever any
tile on it is). `/$locale/characters/$id` is a page for any character record,
listed or not, shaped as Split Studio: crest beside dossier, then the record's
place on the chart beside a strip of the chart (`RouteStrip.tsx`), then the
featured characters filed nearest by episode.

The archive is filed by saga. `src/data/records/<saga>.ts` holds the records of
one stretch of the route and the dossiers of the characters it introduces;
`src/data/entities.ts` is their concatenation. A dossier (`CharacterDossier` in
`src/data/types.ts`) is a role and a log entry, both written to the same "safe
at the threshold" rule as the summaries, plus five timelines: affiliation,
origin, epithet, devil fruit and bounty, each a list of `{ episode, value }`.
The page shows the latest entry the reader has reached (`latestAt` in
`src/lib/progress/spoiler.ts`) and no row at all for a fact with no entry yet,
so Robin's affiliation changes when she changes it and a bounty above the
reader's episode is never in the DOM. The data tests hold that every timeline is
ascending and starts no earlier than the record's threshold. Thresholds follow
one rule, written at the top of `entities.ts`: the first canonical episode where
the viewer knows the character by name and by sight, rounded up when in doubt;
the hooded man at Loguetown is filed at the episode that names him. Italian
names are the Italian dub's.

The search on the list page is the spoiler rule applied to a text field. It
filters the open characters only, crests and tiles alike; the fogged crests sit
in a band of their own and the fogged tiles stay on their shelves, and neither
ever changes, because a covered card that appeared when its name was typed would
confirm the name. Both locales' names are searched (an Italian reader who knows
him as Luffy still finds Rufy), and so are the epithets the reader has reached
and only those, so "Barbabianca" finds Edward Newgate after episode 152 and not
before. The match is marked only in the name that is shown. The character page
decides its document title in the route's `head`, from the reveal state its
`loader` computed from the bookmark the root route read, so a covered
character's `<title>` is "A character under fog" and never the name; the page
body then follows the live bookmark. `SpoilerVeil` has a `compact` density for
the cards and tiles (the verb alone, centred, a drawing's blur), and the
language switch uses `to="."` so it keeps the reader on the same page.

**The landing chart draws the chart route, not the whole archive.** `chart` in
`src/data/characters.ts` is every arc, place and ship plus the featured
characters; the rest of the cast is in the signal book. A character page draws
its route position against `chartWith(entity, mode)`, the chart with that record
set in when it is not already drawn, sorted by the threshold the reader counts
in, so an unlisted character still has a waypoint number while the reader is
looking at them.

**The dossier timelines count in anime episodes only.** A record carries two
thresholds because a reader may count in episodes, seasons or chapters, but the
facts inside a dossier are dated once, in episodes: `latestAt` resolves a season
bookmark to its absolute episode and knows nothing for a chapter one, so a
chapter reader sees a note in place of the facts rather than a fact they may not
have reached. The same goes for the epithet search.

**The places page is the ship's log.** `/$locale/places` lists every `place`
record (`src/data/places.ts`, in the order the ship reaches them) as numbered
ports of call down one spine, Hallmark's Narrative Workflow macrostructure. Each
port is a plate beside a dossier: the name, the summary, four facts (sea, what
it is, arc, landmark), a longer log entry, and the records the archive files
there (`filedHere`: the characters met at that port, the ship received there),
each as a `RecordTile` behind its own fog. The reader's episode is a horizon on
the spine, gold above and dashed below, and a fogged port keeps its number and
episode while its name, drawing and colour stay out of the served HTML; its `id`
anchor is set only once it is open, because a slug spells a name. Every dossier
field obeys the same "safe at the threshold" rule as the summaries. An arc is
named directly rather than veiled, because `places.test.ts` holds that an arc
opens no later than any place filed under it. `RecordTile` is shared with the
character page's neighbours; a place's name links to its entry in the log, on
the route chart too.

**Every place has a plate, every character a crest, and both are the site's own
marks.** `src/components/PortPlate.tsx` sets a place's drawing inside a
rectangular chart frame: a rule in the place's tint, a dashed inner rule,
graticule ticks along all four edges, corner brackets and a north mark. A
character's crest is round, a place's plate is square, and the fogged version of
each is bare.

**The locale shell pins its column to `minmax(0, 1fr)`.** Left implicit the
column is `auto`, whose minimum is the widest child's min-content, and a page
grid that resolves `1fr` against indefinite space reports its max-content as
that minimum: at 375px the shell grew to 521px, and the root's
`overflow-x: clip` hid it (no horizontal scrollbar, text cut at the edge). Check
mobile by measuring element rects, not `scrollWidth`.

**Every character has a crest, and it is the site's own mark.**
`src/components/CharacterCrest.tsx` sets the character's existing line drawing
inside a seal: a ring in the character's tint, a dashed inner ring, thirty-two
bezel ticks with the four cardinal ones in the tint, like a compass card. The
seal is identical for everyone and only the object and the colour change, which
is what makes the featured emblems read as one set. On the shelves the same
drawing sits in a plain frame (`CharacterTile.tsx`): a shelf holds hundreds, and
a seal apiece would put thousands of ticks in the HTML. No faces and no official
Jolly Rogers appear; `ChartArt.tsx` exports `ArtStrokes` so the same strokes can
be nested in the crest's `<svg>` without a second copy.

**Every picture is a line drawing made here; no photographs, no official
artwork.** Toei and Shueisha own every frame of the anime and every panel of the
manga, so nothing of theirs appears, and the CSP is `default-src 'self'` with a
nonce-only `script-src`, so nothing is hotlinked either. The drawings live in
`src/data/art`, one module per saga beside the records they stand for, as lists
of SVG path strokes; `src/data/art/index.ts` merges them and derives `ArtId`
from their keys, so a record cannot name a drawing that does not exist and
`art/index.test.ts` holds that no drawing is left without a record.
`src/components/ChartArt.tsx` is the one renderer: a 160x200 box, a uniform 2px
stroke kept at 2px through `vector-effect: non-scaling-stroke`, round caps and
joins, no fills. Each character is an object that stands for them (a straw hat,
three sheathed swords, a violin), never a face or a logo; each place is the
place. A drawing takes exactly one colour for its main stroke, from the
nineteen-hue `tint` token set in `tokens.stylex.ts`, and leaves every other line
in `ink2`, which is what keeps several hundred illustrations reading as one set.
The record's `visual` names its drawing and its tint; `ChartArt.test.tsx`
renders all of them. The fold is `SeaChartHero.tsx`, the same line at 1600x560.

**Fonts are self-hosted.** Bricolage Grotesque, Instrument Sans and JetBrains
Mono (all Google Fonts, variable cuts) live in `public/fonts` as woff2, declared
in `@layer fonts` at the top of `global.css`. Pulling them from a CDN would mean
widening both `style-src` and `font-src` for five files. Each has a
metric-matched fallback face — `size-adjust` equalises x-height against Arial,
then the ascent and descent overrides are the real font's `hhea` values divided
by that adjustment — so the `font-display: swap` handover does not reflow the
page. The metrics used are written down beside the declarations. The site icon
is `public/icon.svg`, the compass star from the chart on a night-sea tile;
`scripts/make-icons.mjs` renders it into `favicon.ico` and
`apple-touch-icon.png`, both committed so the build never needs librsvg.
`src/styles/tokens.stylex.ts` holds the design tokens and must keep its
`.stylex.ts` suffix, because the compiler only evaluates `defineVars` in a
`*.stylex.{js,ts}` module. Three things about the setup are easy to get wrong
and are commented where they live: the root route imports the stylesheet as a
plain side-effect import rather than `?url` (Vite treats `url` as
side-effect-free, so a `?url` import reaches neither the route manifest nor
Start's dev style collector); the reset in `global.css` sits in `@layer reset`,
because unlayered CSS beats layered CSS and StyleX output is layered; and the
plugin has to be registered in `vitest.config.ts` too, since `stylex.create`
throws at runtime when it has not been compiled. Generated class names are
content hashes, so tests never assert on them.

**`unplugin` is pinned by an override.** `@stylexjs/unplugin` declares a peer
range of `unplugin@^2.3.11`, while `@tanstack/router-plugin` depends on
`unplugin@^3.3.0`. Those ranges are disjoint, so a clean `npm install` or
`npm ci` fails with `ERESOLVE could not resolve` — which is how it first showed
up, as a red CI install step and a failed Netlify deploy, not as a local
failure. The `overrides` entry pins every `unplugin` to `3.3.0`, the version
TanStack already requires; StyleX's plugin works on it. The alternative, a
second nested copy for StyleX alone, duplicates the package without fixing
anything. Drop the override once StyleX widens its peer range.

**`src/routeTree.gen.ts` is committed.** It carries the `Register` module
augmentation that gives the whole project its router types, so a fresh clone
would fail `typecheck` and `lint` without it. It is marked
`linguist-generated=true`, and excluded from ESLint, Prettier, coverage and
fallow.

## Quality gates

Three tools decide whether the tree is healthy — ESLint, react-doctor and fallow
— and all three block, locally and in CI. A warning is the exception here rather
than the middle setting: `npm run lint` runs at `--max-warnings=0`, every
react-doctor finding blocks whatever severity it carries, and the one fallow
rule still set to `warn` says in the file why it cannot be an error. A finding
nobody has to act on is a finding nobody acts on, so anything not worth failing
on is switched off by name with its reason beside it rather than demoted to a
line in the log.

- **react-doctor** runs through `scripts/react-doctor-gate.mjs`. The wrapper
  exists because react-doctor's crash path and its "blocked by findings" path
  both exit 1; the wrapper runs it with `--blocking none` so that any non-zero
  child exit means the tool itself failed, then decides the verdict from the
  JSON report. Exit 1 means findings, exit 2 means the tool failed. A report
  that is not a complete analysis counts as a tool failure rather than a pass: a
  skipped check, a project the `--max-duration` cut short, or a run where the
  analysed and scanned file counts disagree all exit 2, because findings that
  were never looked for are not an absence of findings. Telemetry is off
  (`--no-telemetry`), which is an alias for `--no-score` and also disables the
  remote score API, so the verdict is the presence of findings and never a
  number.
- **fallow** runs through `scripts/fallow-gate.mjs`, which forwards fallow's
  exit code and labels which class it was: 1 = findings, 2 = invalid config, 3+
  = analyzer failure. Note that `fallow --format json` exits 0 even with
  critical health findings, so the gate uses the human format.
  `--fail-on-issues` is deliberately not passed: it promotes every warn rule to
  error for that one run, which would silently override the severity policy
  `.fallowrc.json` sets on purpose.

Both gates write a machine-readable report under `.gate/` (`react-doctor.json`,
`fallow.sarif`), which CI uploads as the `gate-reports` artifact on every run,
red or green.

**react-doctor is configured in `doctor.config.ts`, and nowhere else.** It used
to be a `reactDoctor` key in `package.json`; the two cannot coexist, because
which one wins when both are present is undocumented, so the key is gone rather
than kept as a duplicate that might or might not be read.

**Every finding blocks, whatever severity it carries.** `isBlocking()` in the
wrapper is a function that returns `true` and says why. The alternative — fail
on errors, print the warnings — leaves the warnings with nowhere to go; eleven
had accumulated that way before the gate was tightened. A rule that should not
fire at all is turned off in the configuration with its reason, not demoted.
`blocking: 'warning'` in the configuration says the same thing to the bare CLI,
so `npx react-doctor` agrees with the gate instead of being more forgiving than
it.

**Inline disables are neutralised, twice.** `respectInlineDisables: false` in
the configuration and `--no-respect-inline-disables` on the command line say the
same thing, so a comment cannot walk a finding past the gate and the flag still
holds if the file drifts. **The cache is off** for a related reason: it is keyed
on the configuration, and a verdict replayed from an older `doctor.config.ts`
would be a pass nobody earned. CI runners are fresh anyway, so this costs only a
local rerun.

All five categories — Security, Bugs, Performance, Accessibility,
Maintainability — are stamped `error`, and then seventy-five rules are listed
one by one, because a category severity re-stamps the rules that are already
enabled and never activates one that ships disabled. Those seventy-five are
every opt-out rule that applies to this stack: a React 19 app on TanStack Start,
with StyleX rather than Tailwind, no React Native, no react-three-fiber, no
WebGL. The families left out are left out for a reason, and each is written down
beside the list:

- `design` is tagged test-noise upstream, and its rules encode a different
  visual system from the one this site is drawn in.
- `project-analysis` — unused export, unused file, unused dependency, circular
  dependency — cannot be trusted here. react-doctor honours `.prettierignore`,
  which hides `src/routeTree.gen.ts`, and that generated file is the only
  importer of the route modules, so every `Route` export would read as unused.
  Dead code is fallow's job, and fallow's entry globs and that same ignore are
  kept as one atomic pair.
- `jsx-props-no-spreading` would fire on every StyleX call site, all of which
  are `{...stylex.props(…)}` by construction, and `react-in-jsx-scope` predates
  the automatic JSX runtime this project compiles with (`jsx: react-jsx`).
- `forbid-component-props`, `jsx-max-depth`, `no-many-boolean-props`,
  `no-multi-comp`, `no-set-state` and `prefer-useReducer` each want a project
  decision this project has not made, or repeat a ceiling ESLint already
  enforces.

One rule that is on by default is switched off by name. `js-set-map-lookups`
reads `foldName(name).includes(needle)` as a scan over an array when it is a
substring search over one folded name, and a Set cannot replace a substring
search. The Socket.dev supply-chain scan stays disabled too, for the reason it
always was: it makes a network call per dependency at error severity, which
would turn CI red without a code change.

**Every fallow rule that ships as a warning is now an error** — the five CSS
rules, private type leaks, prop drilling, thin wrappers, stale suppressions and
the rest — with two exceptions. `coverage-gaps` stays a warning because the
route modules have no static test path and `vitest.config.ts` excludes them from
coverage deliberately, so the rule reports a decision rather than an omission.
`feature-flags` is off because there are no flags to detect. A third rule is off
without ever having been a warning: `policy-violation`, for the reason it always
was, which is that there is no rule pack to enforce and fallow reports an
unconfigured check as "nothing was measured" rather than as a pass.

**`boundary-violation` is on, so a green fallow run now says something about the
architecture.** It was off for as long as there was no `boundaries` block to
give it, and a `fallow gate: PASSED` therefore meant nothing about which module
may reach which. Eight zones divide `src`, and what each may import is the
architecture written down:

- **tests** (`src/test/**` and every `*.test.ts[x]`) is listed first, because a
  file matching two zones takes the first one and a test beside a component is a
  test. It carries no rule of its own, so a suite may reach the render helpers —
  and no production zone lists it, so nothing may reach a suite.
- **routes** (`src/routes/**`, `src/router.tsx`) may import everything below it.
- **components** may import `ui`, the library, the records, the dictionaries and
  the styles, but never a route.
- **ui** (`src/components/ui/**`) may import the styles and nothing else, which
  is what keeps a button from knowing the archive exists.
- **lib**, **data** and **i18n** may reach each other and the styles, and none
  of the three may import a component or a route.
- **styles** imports nothing.

`requireAllFiles` is what holds the zones honest: a new file under `src` that
matches no zone fails the gate instead of quietly escaping it. The
`allowUnmatched` list is the configuration files and `scripts/**`, which are
outside the application rather than unclassified within it.

**Duplication is capped at one per cent over a floor of eight lines** (`mild`
mode, with the compiler-appended `src/styles/global.css` excepted). The cap
earns its keep: it found three clone groups that were each a real omission — the
settle orchestration written out three times and already drifted by a step, a
fifteen-line stylesheet the seal and the plate carried verbatim, and the heading
markup both bands of the signal book repeated.

**Complexity is capped at eight cyclomatic and eight cognitive**, roughly two
and a half times stricter than the default, with a sixty-line unit on top of
that. There is one threshold override, and it raises only the unit size, only
for the test files, to two hundred lines: a `describe()` block is one unit, and
a suite is long by design. `typeAware` is on against `tsconfig.json` at
`best-effort`, so the rules that need types get them and a file outside the
program degrades instead of failing the run.

Two entries in `.fallowrc.json` deserve an explanation:

- `entry` lists the route modules, `src/router.tsx`, `scripts/*.mjs`,
  `doctor.config.ts` and `commitlint.config.mjs`. Ignoring the generated
  `src/routeTree.gen.ts` removes the only static importer of the route modules,
  so the ignore and the `entry` globs are one atomic pair — never add one
  without the other. The two configuration files are entries for the same kind
  of reason: nothing in the tree imports them, and the tool that reads each one
  is not something fallow can see.
- `ignoreDependencies` lists `@tanstack/react-start` alone. It is so far
  imported only by `vite.config.ts`, which fallow classifies as non-production;
  it is a genuine runtime dependency and the entry can be dropped once a route
  imports it. `react-doctor` used to sit beside it, because a binary invoked
  from an npm script is invisible to fallow — `doctor.config.ts` imports
  `react-doctor/api`, so the dependency is now visible in the source and the
  entry is gone.

**ESLint is the third gate, and it carries twenty-three plugins.** They stand
behind `npm run lint`, grouped by what each can actually prove: accessibility
(`eslint-plugin-jsx-a11y-x` at `strict` — the es-tooling fork of the same rule
set, because the original's peer range stops at ESLint 9 and this repo is on
10), React correctness (`eslint-plugin-react-hooks` as the sole authority on
hooks, eslint-react at `strict-type-checked` for everything else with its two
overlapping rules turned off, the Fast Refresh boundary rule, and the
you-might-not-need-an-effect detector), TanStack Router's own rules, StyleX's
own six, import hygiene and cycles through import-x, one deterministic order for
imports, exports, type members and JSX props through perfectionist, unicorn in
full, sonarjs, regexp, de Morgan, promise, security, dependency hygiene, secret
detection, JSDoc on every public export, and the vitest, Testing Library and
jest-dom rule sets on the suites. typescript-eslint runs `strictTypeChecked` and
`stylisticTypeChecked`, type-aware, against the whole program.

Size and shape carry ceilings: complexity eight, three levels of nesting, three
parameters, sixty lines in a function, three hundred in a file, fifteen
statements, and a cognitive complexity of ten. They are the ceiling for a unit a
reviewer can hold in their head at once, not a target to grow into. Each scope
that relaxes one of them names what it relaxes and why, and relaxes nothing
else: a test drops the size limits and the duplicate-string rule, because a
scenario reads top to bottom as one thing and repeats the strings it asserts on;
a route module drops `only-throw-error`, because TanStack Router signals a
redirect by throwing a plain object the router catches, and drops the Fast
Refresh rule, because a file route has no component export to anchor to; the
records, the dictionaries and the token modules drop the magic-number and
duplicate-string rules, because they are content rather than code and every
number in them is the value itself; `src/data/art/primitives.ts` takes a fourth
parameter, because `polygon(cx, cy, r, sides)` reads as geometry where the
options object a ceiling of three would force reads as bookkeeping; the
configuration files keep their default exports; and the gate scripts may spawn a
child process and write to stdout, which is their entire contract with CI.

**A suppression has to name its rule and carry a reason.**
`no-unlimited-disable` rejects a bare `eslint-disable`,
`eslint-comments/require-description` rejects one written without a `-- reason`,
and `disable-enable-pair` refuses to let a block disable run to the end of the
file. `reportUnusedDisableDirectives` and `reportUnusedInlineConfigs` are errors
as well, so a suppression that has outlived the thing it silenced fails the lint
rather than sitting there looking load-bearing. Four exist in the tree today:

- `src/routes/__root.tsx` disables `unicorn/text-encoding-identifier-case` on
  the charset attribute, which HTML requires to be an ASCII case-insensitive
  match for `utf-8`; `utf8` is a valid encoding label everywhere else, which is
  what the rule is enforcing.
- `src/routes/__root.tsx` disables `import-x/no-unresolved` on the StyleX
  stylesheet id, which `@stylexjs/unplugin` mints at dev time and which exists
  on no filesystem for any resolver to be pointed at.
- `src/data/types.ts` disables `perfectionist/sort-union-types` across the
  `tint` union, because red round to wine is the hue wheel the tokens are
  written in, and which hues sit next to each other is the entire content of
  that list.
- `src/components/BookmarkDialog.test.tsx` disables `unicorn/no-document-cookie`
  to clear, between tests, the cookie the component wrote: jsdom ships no
  CookieStore, so there is no other way.
