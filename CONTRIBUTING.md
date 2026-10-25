# Contributing to Zero Spoiler

Keep spoilers out of issue and PR titles. Scope and owner decisions belong in
the issue body/comments. For issue labels and workflow, use
[issues](.agents/skills/issues/SKILL.md).

## Setup

Use the Node version in `.nvmrc` and npm version in `package.json`.

```sh
npm ci
npm run dev
```

Install optional dependencies too: fallow needs its platform binary. `prepare`
installs git hooks. Commands and dependency versions live in `package.json`.

## The one rule

Nothing opens before the reader reaches it. Preserve the
[spoiler contract](docs/architecture.md#spoiler-contract), for both episodes and
chapters. When a threshold is uncertain, round up. A summary says only what is
known at the record's threshold; later facts go in dated entries.

## Where things live

Use the [code map](docs/architecture.md#code-map), then read the affected module
and its tests. Client code imports view types, never `~/data`. New payloads and
prose need the registrations in
[Extending the archive boundary](docs/architecture.md#extending-the-archive-boundary).

## Adding or fixing an entry

Work in `src/data/series/<series>/`; follow its existing saga, dossier and art
modules and their tests. Shapes live in `src/data/types.ts`, series-specific
editorial rules beside the series' archive construction (`entities.ts`).

- Check names and thresholds against the series' sources. A character opens when
  named, not merely shown. For One Piece, use the Italian dub's name, falling
  back to Star Comics when unvoiced or unverified.
- Dated facts start no earlier than their record and stay in ascending order.
  Pin chapters from a checked source; a derived episode-to-chapter mapping can
  reveal a fact too early. Mark source-exclusive records/facts as anime or
  manga.
- New characters need dossiers and drawings; places need place dossiers and
  vocabulary, plus chart points where the series supports the map. Follow the
  existing module's registrations for new sagas and redrawing timelines.
- One Piece fruit thresholds come from the eaters' `devilFruit` entries, rather
  than being filed on the fruit. Chronicle `[[id]]` links must be open at the
  story's threshold in both units.
- Run the relevant network checks: `verify:chapters` for thresholds,
  `verify:names` for Italian character names, `verify:fruits` for fruit drawings
  or thresholds, `verify:filler` for filler-guide edits. Use `npm run <script>`;
  these are outside `check`. Document any source-checked exception in the
  script.
- Run `npm run docs:counts` when counts change and `npm run docs:chronicle` when
  chronicle sources change.

## Archive and drawing verification

Choose the checks for what changed; keep generated evidence outside the
checkout.

- **One Piece archive data:** save base/head `npm run --silent archive:table`
  output. Compare episode/chapter mappings separately from dated entries. Use
  `-- --dated-only`, sort with `LC_ALL=C`, and `comm -13` / `comm -23` to count
  additions/removals, retaining duplicate occurrences. Report intentional
  changes.
- **Behavior-preserving archive/server refactors:** save base/head
  `npm run --silent archive:dump` output outside the checkout and compare with
  `cmp`. Use a separate worktree at the recorded base SHA with its dependencies
  installed. Dumps are large; explain intentional differences instead of
  claiming parity. These two dump scripts currently cover One Piece only; use
  the affected series’ payload/data tests for other series. Docs/tooling changes
  need no dump.
- **Site behavior:** after `npm run build`, run `npm start` on a free port and
  verify the affected flow in installed Chrome with local `puppeteer-core`. Run
  browser scripts inside the worktree. Set the series' bookmark cookie on the
  preview origin; check before/at changed gates in episodes and chapters.
  Capture screenshots for visual changes, then close browser and preview.
- **Drawings:** `npm run art:sheet -- <id>` shows first drawings and all kinds.
  For character redrawings, `npm run art:shots -- <id> [<id>…]` after a build
  captures before/at episode and chapter gates at crest/tile sizes. Inspect
  `.gate/shots/` PNGs and include the evidence in the PR. The command manages
  its preview/browser; set `CHROME_PATH` if Chrome is not auto-detected.

## Sources and rights

Fill **Sources and rights** in every PR, using “none” where inapplicable.
[LICENSE-SCOPE.md](LICENSE-SCOPE.md) defines the grant: software and original
technical documentation are MIT; archive prose, artwork and branding are outside
that grant, and third-party material retains its terms. Nonprofit status,
disclaimers and AI rewriting do not establish permission.

- **Facts:** check the series' wiki or a lawfully accessible official source;
  write independently. Record the wiki URL or chapter/page or episode/timestamp
  in the PR. Link no unofficial manga/anime sites; commit no scans, frames,
  subtitles or transcripts.
- **Adapted wording:** record local ids/fields/locales, article title and pinned
  revision URL, date read, license, authors/notices and changes. Follow
  [source terms and adaptations](LICENSE-SCOPE.md#source-terms-and-adaptations).
  Unknown wording licenses mean using facts only. Required public credit must
  open no later than the text: add the revision to
  `docs/content-provenance/sources.json`, map it in the series' `credits.ts`,
  extend `src/server/archive/credits.test.ts` and add a credit scope in
  `src/lib/view/credits.ts` if needed. Follow
  [source-credits](docs/source-credits.md) for spoiler-safe revision links. If
  required credit would spoil, withhold the adaptation and write from facts
  instead.
- **Quotations:** research notes may contain at most two proofs of a name or
  threshold, each at most 12 words and 80 characters. Archive prose reproduces
  no dialogue, subtitle or manga line.
- **Drawings:** write original paths by eye, following
  [line-drawings](.claude/skills/line-drawings/SKILL.md); never trace. Record a
  lawfully accessible chapter/page or episode/timestamp. Keep reference images
  local, out of commits/issues/PRs. When an agent cannot view the source, mark
  wiki/`wiki:pairs` evidence “not viewed” for human verification. Distinctive
  series designs need an owner ruling before merge: label the issue
  `status:needs-decision`, record references and alternatives. The
  [illustration audit](docs/illustration-rights-audit.md) identifies such cases.
- **AI help:** disclose what the AI wrote/drew and sources checked. Give it only
  material you may use; the contributor remains responsible for verification.
- **Rights concerns:** use the legal page's contact link, keep spoilers out of
  titles and confidential details private. Tell the owner of any direct claim
  and deadline. The owner promptly unpublishes/replaces specifically disputed
  material, marks the issue `status:needs-decision` and reviews the claim.

## Writing copy

Follow [tone-of-voice](.claude/skills/tone-of-voice/SKILL.md) for UI, archive
prose and README. Put wording shared verbatim by every series in
`src/i18n/dictionaries/{en,it}.ts`; series wording belongs under
`src/i18n/dictionaries/<series>/`. Use the translation hooks described in
[Localization](docs/architecture.md#localization).

## Checks

Run before pushing:

```sh
npm run check
```

This runs typecheck, lint, format, generated counts, tests with coverage,
production build and react-doctor/fallow/archive gates. Fix failures introduced
by the change; report any baseline failure. Gates need build/coverage output.
Fallow compares with `origin/main`; fetch full history in a shallow clone.

CI also compares client JavaScript bytes against a build of the exact PR base.
Growth over 2,048 bytes needs a standalone `client-budget: <reason>` in the PR
body. This never waives leak checks. Locally compare two built revisions with
`node scripts/client-budget.mjs /path/to/base/dist/client dist/client` and pass
`PR_BODY` for a justified exception.

## Commits and pull requests

Use `type(optional-scope): subject`, at most 100 characters, for commits and PR
titles. Accepted types live in `scripts/validate-pr-title.mjs`. The squash title
sets the release: `feat` is minor, `!` is major, other accepted types are patch.

Fill `.github/pull_request_template.md`, with verification evidence and
[sources and rights](#sources-and-rights). Issue implementations use `Closes #N`
and open as draft; leave merging to the owner.

## Working with an agent

Use `.claude/agents/issue-implementer.md` for issue work and
[CODING_STANDARDS.md](CODING_STANDARDS.md) for review criteria. Read specialist
skills only for the relevant copy/artwork task. To land an approved PR, the
owner can use `scripts/land-pr.sh <pr> <reviewed-head-sha>`; its header
documents failure codes and safeguards.
