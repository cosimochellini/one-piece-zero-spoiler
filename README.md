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

## Versioning and releases

The project is versioned with [SemVer](https://semver.org), and the version is
produced entirely by CI. Nobody edits `version` in `package.json` by hand.

**The pull request title is the version bump.** Merges to `main` are squashed
into a single commit whose subject is the PR title, and
[semantic-release](https://semantic-release.gitbook.io) reads that subject to
decide what to release. The `pr-title` check validates the format on every pull
request, so a malformed title is visible before the merge button — though see
the note on branch protection below for why it is a warning rather than a
hard block.

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
adding `github-actions` to the ruleset's bypass list — is rejected on a
personal repository with `Actor GitHub Actions integration must be part of
the ruleset source or owner organization`. Protecting the branch therefore
costs either a deploy key held as a secret, or giving up the `package.json`
bump. Both checks still run on every pull request; they are simply advisory.

If the `release` job dies between tagging and publishing — the tag and the
version commit land, the GitHub Release does not — the next merge will not
backfill it, because the tag already exists and the commits are already
released. Recreate it by hand:

```bash
gh release create vX.Y.Z --generate-notes
```

Three details worth knowing before changing any of this:

- **`scripts/validate-pr-title.mjs` and `.releaserc.json` must agree.** A type
  the validator accepts but the release rules ignore would merge cleanly and
  then release nothing. `scripts/validate-pr-title.test.mjs` reads
  `.releaserc.json` and asserts the two maps are identical, so the drift fails
  the test run rather than a release.
- **`revert` needs two release rules.** `{ revert: true }` only matches the
  body `git revert` writes (`This reverts commit <sha>.`), which a squashed
  pull request never carries because the squash body is blank. The
  `{ type: 'revert' }` rule is what actually matches a `revert:` title.
- **semantic-release is installed by pinned `npx`, not by `devDependencies`.**
  It pulls roughly 250 packages that no other job and no local install needs.
  If plugin resolution through `npx -p` ever breaks, the fallback is to pin the
  same versions in `devDependencies` and run it through `npm ci`.

## Architecture notes

**Two Vite configs, on purpose.** `vitest.config.ts` deliberately omits
`tanstackStart()`. That plugin unconditionally sets `optimizeDeps.include` for
`react` and `react-dom`, which prebundles a second copy of React under Vitest
and makes every test fail with `TypeError: Cannot read properties of null
(reading 'useState')` ([TanStack/router#6246](https://github.com/TanStack/router/issues/6246)).
Vitest gives `vitest.config.ts` full priority — `vite.config.ts` is ignored, not
merged — so this is real isolation rather than a conditional workaround.

**Plugin order matters.** `viteReact()` must come _after_ `tanstackStart()`.
Start no longer auto-configures the React plugin, and the old
`customViteReactPlugin` option no longer exists.

**TypeScript is pinned to 6.0.x, not 7.x.** `typescript-eslint` declares a peer
range of `typescript >=4.8.4 <6.1.0`. Upgrading TypeScript past 6.0 would break
the type-aware ESLint rules, so the pin holds until `typescript-eslint` supports
the native compiler.

**Prettier owns formatting.** ESLint carries no stylistic rules
(`stylisticTypeChecked` is deliberately not enabled) and
`eslint-config-prettier` is applied last, so the two tools cannot disagree.

**Spoiler gating is decided on the server.** The reader's episode lives in the
`opzs_ep` cookie, and `src/lib/progress/readProgress.ts` reads it through
`createIsomorphicFn` — the server branch before the first byte of HTML, the
client branch from `document.cookie` on a navigation. The decision is made once
by `isRevealed` in `src/lib/progress/spoiler.ts` and it fails closed: a missing
cookie, a corrupt one, or a value outside `1 … EPISODE_CEILING` hides
everything rather than revealing it. That is what makes the first paint already
correct; reading the cookie in an effect would paint the uncovered page and
cover it one frame later, which is a spoiler.

The cookie is not `HttpOnly`. It is written by the browser when the reader
moves the dial, the server never trusts it for anything but choosing what to
render, and a round trip would put network latency between a keystroke and the
page reacting.

`SpoilerVeil` blurs by default. On the landing chart the covered text is in the
DOM: `inert` and `aria-hidden` keep it away from the keyboard and from screen
readers, and `user-select: none` keeps it out of a drag-select, but browser
find-in-page and devtools can still surface it. The character pages pass a
`placeholder` instead, so a covered name, role or summary is absent from the
served HTML and only mounts on the client once the fog is lifted. A fogged
crest is a bare seal with no drawing and no colour, and a fogged catalogue card
has no link, because the slug would spell the name.

**Locales are route prefixes.** Every page lives under `/$locale`
(`src/routes/$locale.tsx`), so the same page in two languages is two
addresses. `/` negotiates once — cookie, then `Accept-Language`, then Italian —
and redirects with a 302, never a 301. An unrecognised prefix is a 404 rather
than a silent redirect to the default language. `src/i18n/dictionaries/en.ts`
is the source of truth for the key set; `it.ts` is annotated `Dictionary`, so a
missing key fails `typecheck`. The pair is exported as `enDictionary` and
`itDictionary` because Vitest puts `it` in global scope and a dictionary named
`it` shadows it in every test file.

**Styling is StyleX, and the design system is Hallmark's.** Every visual rule
is authored with `@stylexjs/stylex` and compiled by `@stylexjs/unplugin`, which
appends the generated CSS to `src/styles/global.css` — the single same-origin
stylesheet the SSR manifest links on every document. That is why
`default-src 'self'` needs no new source.

The tokens in `src/styles/tokens.stylex.ts` follow the naming Hallmark uses
(`paper` / `ink` / `rule` / `muted` / `accent` / `accentInk` / `focus`, a 4pt
space scale, named easings and durations). Hallmark normally emits a
`tokens.css` full of `:root { --color-ink: … }`; this project does not, because
`defineVars` compiles to exactly those custom properties. There is one source
of truth, and it is the TypeScript module. `accentInk` is a contract: any
surface painted `accent` that carries text sets its colour to `accentInk`,
never to a hardcoded white.

**The landing is a sea chart.** The Hallmark run that produced it picked the
Map / Diagram macrostructure: the archive is drawn as one vertical route
(`src/components/RouteChart.tsx`), every entry a waypoint in the order the anime
reaches it, and the reader's episode is a horizon line across the route. Rows
above it are open and drawn in gold; rows below are under fog, their names
behind a `SpoilerVeil` and their stretch of route dashed. Because the entries
are sorted by threshold and `isRevealed` is monotone, the open rows are always a
prefix of the list, so the horizon is a single `<li aria-current="step">`
between two runs rather than a marker interpolated along a path. Each row draws
its own SVG segment with `preserveAspectRatio="none"` and `non-scaling-stroke`,
which is how the line follows whatever height the row's text needs. The
orientation column (headline, dial, legend) is `position: sticky` from 60rem so
moving the dial moves the horizon in view. The stamp at the top of
`tokens.stylex.ts` records the picks; `.hallmark/log.json` records the history.

**The characters pages are the signal book.** `/$locale/characters` lists
the twenty characters named in `FEATURED_CHARACTER_IDS`
(`src/data/characters.ts`, an editorial ranking; the page draws them in route
order) as one uniform grid of crests, Hallmark's Catalogue macrostructure.
`/$locale/characters/$id` is a page for any character record, listed or not,
shaped as Split Studio: crest beside dossier, then the record's place on the
route beside a strip of the whole route (`RouteStrip.tsx`), then the listed
characters filed nearest by episode. `src/data/characters.ts` also holds the
roles, written to the same "safe at the threshold" rule as the summaries:
Franky is a ship dismantler there, not what he turns out to be.

The search on the list page is the spoiler rule applied to a text field. It
filters the open characters only; the fogged ones sit in a band of their own
that never changes, because a covered card that appeared when its name was
typed would confirm the name. Both locales' names are searched (an Italian
reader who knows him as Luffy still finds Rufy), and the match is marked only
in the name that is shown. The character page decides its document title in
the route's `head`, from the reveal state its `loader` computed from the
bookmark the root route read, so a covered character's `<title>` is "A
character under fog" and never the name; the page body then follows the live
dial. `SpoilerVeil` gained a `compact` density for
the cards (the verb alone, centred, a drawing's blur), and the language switch
now uses `to="."` so it keeps the reader on the same page.

**The places page is the ship's log.** `/$locale/places` lists every `place`
record (`src/data/places.ts`, in the order the ship reaches them) as numbered
ports of call down one spine, Hallmark's Narrative Workflow macrostructure.
Each port is a plate beside a dossier: the name, the summary, four facts
(sea, what it is, arc, landmark), a longer log entry, and the records the
archive files there (`filedHere`: the characters met at that port, the ship
received there), each as a `RecordTile` behind its own fog. The reader's
episode is a horizon on the spine, gold above and dashed below, and a fogged
port keeps its number and episode while its name, drawing and colour stay out
of the served HTML; its `id` anchor is set only once it is open, because a
slug spells a name. Every dossier field obeys the same "safe at the threshold"
rule as the summaries. An arc is named directly rather than veiled, because
`places.test.ts` holds that an arc opens no later than any place filed under
it. `RecordTile` is shared with the character page's neighbours; a place's
name links to its entry in the log, on the route chart too.

**Every place has a plate, every character a crest, and both are the site's
own marks.** `src/components/PortPlate.tsx` sets a place's drawing inside a
rectangular chart frame: a rule in the place's tint, a dashed inner rule,
graticule ticks along all four edges, corner brackets and a north mark. A
character's crest is round, a place's plate is square, and the fogged version
of each is bare.

**The locale shell pins its column to `minmax(0, 1fr)`.** Left implicit the
column is `auto`, whose minimum is the widest child's min-content, and a page
grid that resolves `1fr` against indefinite space reports its max-content as
that minimum: at 375px the shell grew to 521px, and the root's
`overflow-x: clip` hid it (no horizontal scrollbar, text cut at the edge).
Check mobile by measuring element rects, not `scrollWidth`.

**Every character has a crest, and it is the site's own mark.**
`src/components/CharacterCrest.tsx` sets the character's existing line drawing
inside a seal: a ring in the character's tint, a dashed inner ring, thirty-two
bezel ticks with the four cardinal ones in the tint, like a compass card. The
seal is identical for everyone and only the object and the colour change,
which is what makes twenty-five emblems read as one set. No faces and no
official Jolly Rogers appear; `ChartArt.tsx` exports `ArtStrokes` so the same
strokes can be nested in the crest's `<svg>` without a second copy.

**Every picture is a line drawing made here; no photographs, no official
artwork.** Toei and Shueisha own every frame of the anime and every panel of
the manga, so nothing of theirs appears, and the CSP is `default-src 'self'`
with a nonce-only `script-src`, so nothing is hotlinked either. `src/components/ChartArt.tsx` holds forty
drawings, one per record, as lists of SVG path strokes rendered by one
component: a 160x200 box, a uniform 2px stroke kept at 2px through
`vector-effect: non-scaling-stroke`, round caps and joins, no fills. Each
character is an object that stands for them (a straw hat, three sheathed
swords, a violin), never a face or a logo; each place is the place. A drawing
takes exactly one colour for its main stroke, from the nineteen-hue `tint`
token set in `tokens.stylex.ts`, and leaves every other line in `ink2`, which
is what keeps forty illustrations reading as one set. The record's
`visual` names its drawing and its tint; `ChartArt.test.tsx` renders all of
them. The fold is `SeaChartHero.tsx`, the same line at 1600x560.

**Fonts are self-hosted.** Bricolage Grotesque, Instrument Sans and JetBrains
Mono (all Google Fonts, variable cuts) live in `public/fonts` as woff2, declared
in `@layer fonts` at the top of `global.css`. Pulling them from a CDN would mean
widening both `style-src` and `font-src` for five files. Each has a
metric-matched fallback face — `size-adjust` equalises x-height against Arial,
then the ascent and descent overrides are the real font's `hhea` values divided
by that adjustment — so the `font-display: swap` handover does not reflow the
page. The metrics used are written down beside the declarations. The site
icon is `public/icon.svg`, the compass star from the chart on a night-sea
tile; `scripts/make-icons.mjs` renders it into `favicon.ico` and
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
`npm ci` fails with `ERESOLVE could not resolve` — which is how it first
showed up, as a red CI install step and a failed Netlify deploy, not as a
local failure. The `overrides` entry pins every `unplugin` to `3.3.0`, the
version TanStack already requires; StyleX's plugin works on it. The
alternative, a second nested copy for StyleX alone, duplicates the package
without fixing anything. Drop the override once StyleX widens its peer range.

**`src/routeTree.gen.ts` is committed.** It carries the `Register` module
augmentation that gives the whole project its router types, so a fresh clone
would fail `typecheck` and `lint` without it. It is marked
`linguist-generated=true`, and excluded from ESLint, Prettier, coverage and
fallow.

## Quality gates

Both gates block, locally and in CI.

- **react-doctor** runs through `scripts/react-doctor-gate.mjs`. The wrapper
  exists because react-doctor's crash path and its "blocked by findings" path
  both exit 1; the wrapper runs it with `--blocking none` so that any non-zero
  child exit means the tool itself failed, then decides the verdict from the
  JSON report. Exit 1 means findings, exit 2 means the tool failed.
  Telemetry is off (`--no-telemetry`), which also disables the remote score
  API — so the gate is severity-based, not score-based. The Socket.dev
  supply-chain scan is disabled via the `reactDoctor` key in `package.json`
  because it makes a network call per dependency at error severity, which
  would turn CI red without a code change.
- **fallow** runs through `scripts/fallow-gate.mjs`, which forwards fallow's
  exit code and labels which class it was: 1 = findings, 2 = invalid config,
  3+ = analyzer failure. Note that `fallow --format json` exits 0 even with
  critical health findings, so the gate uses the human format.

Both gates write a machine-readable report under `.gate/`
(`react-doctor.json`, `fallow.sarif`), which CI uploads as the `gate-reports`
artifact on every run, red or green.

Two entries in `.fallowrc.json` deserve an explanation:

- `entry` lists the route modules, `src/router.tsx` and `scripts/*.mjs`.
  Ignoring the generated `src/routeTree.gen.ts` removes the only static
  importer of the route modules, so the ignore and the `entry` globs are one
  atomic pair — never add one without the other.
- `ignoreDependencies` lists `react-doctor` (used only as a CLI binary from an
  npm script, which fallow cannot observe) and `@tanstack/react-start` (so far
  imported only by `vite.config.ts`, which fallow classifies as non-production;
  it is a genuine runtime dependency and the entry can be dropped once a route
  imports it).
- `rules` turns off `boundary-violation` and `policy-violation`. There is no
  `boundaries` preset and no rule pack to enforce yet, so fallow reports both
  as "not configured, nothing was measured" and asks to either configure them
  or state that the check is not wanted. Turn them back on together with a
  `boundaries` preset once `src/` grows a module structure worth enforcing —
  until then a `fallow gate: PASSED` says nothing about architecture
  boundaries.
