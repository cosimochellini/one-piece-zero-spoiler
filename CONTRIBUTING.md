# Contributing to Zero Spoiler

Thank you for helping. This page tells you where things live, which rules the
tests enforce and how a pull request becomes a release. If something here is
unclear, open a
[discussion](https://github.com/cosimochellini/zero-spoiler/discussions).

By taking part you agree to the [code of conduct](CODE_OF_CONDUCT.md).

## Ways to help

- **Report a wrong episode or chapter.** Use the
  [content form](https://github.com/cosimochellini/zero-spoiler/issues/new?template=content.yml)
  and link a source.
- **Pick a
  [good first issue](https://github.com/cosimochellini/zero-spoiler/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).**
  Most are redrawings: one character, one episode, a checklist.
- **Add what is missing:** chronicle stories, places, devil fruits, statuses.
  Issues labelled
  [`help wanted`](https://github.com/cosimochellini/zero-spoiler/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
  list the larger gaps.
- **Fix a bug or improve the code.** Open an issue first for anything larger
  than a small fix, so we can agree on the approach.

**Keep spoilers out of titles.** Issue and pull request titles are public and
show up in notifications. Write "Wrong episode for a character", not the fact
itself. Details go in the body.

Every issue carries one label from each group in
[`.github/labels.json`](.github/labels.json): `type:`, `area:`, `status:`,
`priority:` and `size:`. The forms set `status:triage`, and the issue gets the
rest when someone triages it.

## Setup

You need Node 24.21 and npm 12.2, as set in `.nvmrc` and in the `packageManager`
field of `package.json`.

```sh
git clone https://github.com/cosimochellini/zero-spoiler.git
cd zero-spoiler
nvm use
npm install
npm run dev     # http://localhost:3000
```

- `npm install` also installs the git hooks through the `prepare` script.
- Do not install with `--omit=optional`: fallow ships its binary as an optional
  dependency.
- The dev server and the production build can lay out styles slightly
  differently. To check a visual change, run `npm run build && npm start`.
- Your bookmark is the `zs_one-piece` cookie. You can set it in the bookmark
  dialog, in the browser's dev tools, or with a link such as `/en?ep=650`,
  `/en?s=2&ep=3` or `/en?ch=1044`.

## The one rule

An entry that opens too early is a spoiler. That is the one bug this project
cannot ship. An entry that opens too late only stays hidden a little longer. So
when you are not sure about an episode or chapter, **round it up**.

The same goes for text. A summary, a role or a log line may only say what a
viewer knows at the entry's own threshold. A later fact goes in a dated timeline
entry, which carries the episode it is learned in. The comment at the top of
`src/data/series/one-piece/entities.ts` has the full rules.

- Episodes count canonical anime episodes only. Filler, films and specials do
  not count.
- A character opens at the episode that names them, not the one that first shows
  them.
- Check facts on the [One Piece Wiki](https://onepiece.fandom.com) and link the
  page in your pull request. [Sources and rights](#sources-and-rights) says what
  else to record.

## Where things live

| Path                               | What is there                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| `src/data/`                        | The engine every series shares: the record shapes, the reveal and order rules. Server only.       |
| `src/data/series/one-piece/`       | The One Piece archive: records, drawings and most editorial tests. Server only.                   |
| `src/data/series/hunter-x-hunter/` | The Hunter x Hunter archive, its arcs so far. Filed, not open to readers yet (#763). Server only. |
| `src/components/`                  | React components, styled with StyleX.                                                             |
| `src/routes/`                      | TanStack Start file routes, under `$locale/`.                                                     |
| `src/server/`                      | Server functions that cut the archive down to what a bookmark reaches.                            |
| `src/lib/`                         | Code the client may import: bookmark logic, search, SVG helpers, views.                           |
| `src/i18n/`                        | Locales and the English and Italian dictionaries.                                                 |
| `src/styles/`                      | Global CSS and the StyleX design tokens.                                                          |
| `scripts/`                         | Quality gates, the PR title validator, the wiki checks and the merge helper.                      |
| `docs/`                            | [Architecture](docs/architecture.md), media and the chronicle verification report.                |

A new module with prose outside a series' `records/` must go into its series'
`prose` in `EXTRA` in `scripts/archive-gate.mjs` and into `textsOf` in
`src/data/leaks.test.ts`, with the gate its page applies to it.

A new server function in `src/server/api.ts` must go into `PAYLOADS` in
`src/server/archive/payloads.server.ts`, with the ids or handles it is asked
for. `src/server/archive/payloads.test.ts` fails until it is, and then checks
that the new page names no record the reader has not reached.

Components, routes and `src/lib` cannot import `~/data`. ESLint rejects the
import and `npm run gate:archive` rejects the build, because that import would
put the whole archive in the browser.

## Adding or fixing an entry

Every record has the same shape, defined as `Entity` in `src/data/types.ts`:

```ts
{
  id: 'roronoa-zoro',
  kind: 'character',
  revealedAtEpisode: 2,
  revealedAtChapter: 3,
  name: { it: 'Roronoa Zoro', en: 'Roronoa Zoro' },
  summary: { it: '…', en: '…' },
  visual: { art: 'roronoa-zoro', tint: 'green' },
}
```

- `id` is an English slug.
- `name.en` uses the English edition's names. `name.it` uses the Italian dub's
  names (Rufy, Bagy, Usop), or the Star Comics spelling where the dub never
  voiced the character. Where the dub's spelling has not been checked, the Star
  Comics spelling stands in until it is. The Italian
  [One Piece Wiki](https://onepiece.fandom.com/it)'s page titles follow Star
  Comics; its "Nome doppiaggio italiano" field gives the dub's name where it
  differs.
- Records live in one module per saga, in
  `src/data/series/one-piece/records/<saga>.ts`, plus
  `src/data/series/one-piece/records/fruits.ts` for the devil fruits.

| To add            | Edit                                                                                                                                                                                                                                                                                                    | Guarded by                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A character       | The record and its entry in `dossiers` in the series' `records/<saga>.ts` (One Piece: `src/data/series/one-piece/records/<saga>.ts`), and a drawing in its `art/`                                                                                                                                       | `src/data/archive.test.ts`, `src/data/leaks.test.ts`, and the series' own tests (One Piece: `src/data/series/one-piece/characters.test.ts`)                                        |
| A devil fruit     | `FRUIT_FORMS` in `src/data/series/one-piece/fruit-forms.ts`, the record in `src/data/series/one-piece/records/fruits.ts` (no thresholds: they come from the `devilFruit` entry in the eater's `dossiers`), a drawing in `src/data/series/one-piece/art/fruits/`, and that `devilFruit` entry            | `src/data/series/one-piece/fruits.test.ts`                                                                                                                                         |
| A place           | The record in its saga module and its entry in the series' `PLACE_DOSSIERS` (`src/data/series/<series>/places.ts`), its region and form among the series' place words (`placeWords.ts`); in One Piece also its point on the sea chart in `CHART` in `src/data/series/one-piece/chart.ts`; and a drawing | `src/data/archive.test.ts`, `src/data/leaks.test.ts`, and the series' own tests (One Piece: `src/data/series/one-piece/places.test.ts`, `src/data/series/one-piece/chart.test.ts`) |
| A chronicle story | The story in `src/data/series/one-piece/records/<saga>.chronicle.ts`, its source in `scripts/chronicle-sources.mjs`, then `npm run docs:chronicle` to regenerate `docs/chronicle-verification.md`                                                                                                       | `src/data/archive.test.ts`, `scripts/chronicle-verification.test.mjs`                                                                                                              |
| A redrawing       | A dated entry in the saga's `…Redrawn` timeline in `src/data/series/one-piece/art/<saga>.ts`. `skypieaRedrawn` is the model                                                                                                                                                                             | `src/data/series/index.test.ts`, `src/server/archive/slices.test.ts`                                                                                                               |

A new series also needs a row in `EXPECTED` in `src/test/series.ts`: the kinds
of text its leak scan reads and the least it files of each thing the shared
rules in `src/data/archive.test.ts` read. Raise the floors as it files more, so
no shared rule passes on nothing.

A few rules that are easy to miss:

- **Drawings** are lists of stroke paths in a 160×200 box: at least four
  strokes, at least one of them `accent`, no fills, no faces, no logos, no
  official artwork. The helpers are in `src/lib/svg/primitives.ts`. The
  `line-drawings` skill (`.claude/skills/line-drawings/SKILL.md`) sets the
  standard every drawing is held to. `npm run art:sheet -- <id>` renders every
  stage at crest and tile size without the site, including non-character
  drawings. Use `art:shots` below to verify character stage gates on the site.
- **Dated entries** (`{ episode, chapter?, value }`) are in ascending order and
  start no earlier than the record. Set `chapter` only when you checked it
  against a source. Without it, a manga reader reaches the entry at the first
  chapter that covers its episode, which can be too early.
- **Name facts.** If the show says a name before its record opens, set
  `nameSaidAt` on the record. If the name is an ordinary word, set
  `commonWord: true`. `src/data/leaks.test.ts` tells you when you need either.
- **Chronicle stories** link other characters with `[[id]]` or
  `[[id|shown text]]` markers, and only to characters already open at the
  story's episode.
- **A saga's first redrawing** needs a new `…Redrawn` export in its art module,
  spread into `REDRAWINGS` in `src/data/series/one-piece/art/index.ts` and added
  to the module list in `src/data/series/one-piece/art/index.test.ts`.
- **A new saga module** has to be added to `sagas` in
  `src/data/series/one-piece/sagas.ts`, to `DRAWINGS` in
  `src/data/series/one-piece/art/index.ts`, and to the module list in
  `src/data/series/one-piece/art/index.test.ts`.

`npm run verify:chapters` checks every chapter and every episode against the
first appearance on the One Piece Wiki. It needs the network, so it is not part
of `npm run check` or CI. Run it when you change a chapter or an episode. A
record kept below the wiki's episode after a hand check goes in `EPISODE_KEPT`
in the script, with the reason.

`npm run verify:fruits` checks where the One Piece Wiki shows each devil fruit
as a real fruit (the infobox `fruit` field and the Appearance section) against
its drawings: a fruit shown by its threshold needs the real fruit as its first
drawing, and one shown later needs a redrawing at that episode and chapter. It
also needs the network. Run it when you add a fruit or change a fruit's drawing
or threshold. A real-fruit first drawing goes in `REAL_FIRST` in the script, a
showing outside the story in `NOT_COUNTED`, and a failure checked by hand in
`SHOWING_KEPT`, each with the reason.

`npm run verify:names` checks every character's Italian name against the Italian
One Piece Wiki: the page title, the dub's name in "Nome doppiaggio italiano", or
an alias, or the bare part of one of them when the rest is a surname or a real
name said later. It also needs the network. Run it when you add a character or
change an Italian name. A character the English wiki does not link to its
Italian page goes in `ITALIAN_TITLES` in the script; one with no page of its own
goes in `NAMES_KEPT`, with the reason.

`npm run verify:filler` checks the filler guide in
`src/data/series/one-piece/filler.ts`. The kinds are checked against
AnimeFillerList, with its "anime canon" episodes settled by the Italian wiki's
`tipo`. The titles are checked against both wikis, each entry's chapter against
the chapters the anime had adapted by then, and where a film or special sits
against the Episode Guide. It needs the network. Run it when a new filler, film
or special airs, or when you edit the guide.

## Archive and drawing verification

`npm run --silent archive:table` prints every chapter mapping, episode mapping,
and dated entry in archive order. Use `-- --dated-only` to print only dated
entries. Save dumps from the PR base and head when changing archive data; the
`--silent` flag keeps npm's command banner out of redirected output.

Compare the chapter and episode mappings separately from dated entries. Report
the actual mapping diff and the number of added and removed dated entries in the
PR. Count each occurrence, including duplicate lines: sort the dated-only dumps
and use `comm -13 base-dated.txt head-dated.txt` for additions and
`comm -23 base-dated.txt head-dated.txt` for removals. Use the same locale for
sorting and `comm` (for example `LC_ALL=C`).

A change to `src/server` that should change no page can be checked the same way:
`npm run --silent archive:dump > head.jsonl` writes every payload in `PAYLOADS`,
for every id or handle, at One Piece's sweep bookmarks
(`src/data/series/index.ts`) and in both locales, about 1 GB. Dump the base too
and `cmp` the two files.

For characters with redrawings, capture the production site's stage gates:

```sh
npm run build
npm run art:shots -- karoo
npm run art:shots -- karoo franky
```

This needs installed Chrome; set `CHROME_PATH` to its executable when it is not
found automatically. The command starts and closes its own preview server and
browser. Each redrawing gets a row: four crest cells followed by four tile
cells, at episode − 1, episode, chapter − 1 and chapter. Missing stage chapters
use the app's derived opening threshold, including the record's gate, and are
labelled “derived.” A record still covered at a bookmark gets a labelled
placeholder. The initial drawing is not a row.

Read the generated `.gate/shots/karoo.png` (or `.gate/shots/karoo+franky.png`
for multiple IDs), and include the grid in the PR's verification evidence.
`art:shots` accepts character IDs with redrawings; use `art:sheet` for first
drawings, other record kinds and draft compositions. Generated screenshots stay
out of the repository.

## Sources and rights

Zero Spoiler is an unofficial, nonprofit fan project run by a private individual
in Italy. Neither that, nor a disclaimer, nor an AI rewrite gives anyone rights
in someone else's work. These rules keep each contribution's sources and rights
visible from the pull request to the published site. They are editorial
practice, not legal advice.

[LICENSE-SCOPE.md](LICENSE-SCOPE.md) says what the licenses cover. Code and
original technical documentation are MIT. Archive text, drawings and branding
are outside the MIT grant, and third-party material keeps its own terms. A
contribution does not change that scope.

Every pull request fills in the **Sources and rights** section of the template.

### Facts

Episode and chapter numbers, names and what happens are facts. Check them on the
One Piece Wiki, or in an official source you can lawfully access: a licensed
manga edition or a licensed stream. Write the text in your own words, and record
in the pull request:

- the wiki page you checked;
- for a manga or anime check, the chapter and page, or the episode and
  timestamp.

Link no unofficial manga or anime site, in code, docs, issues or pull requests.
Commit no scan, screenshot, subtitle file or transcript of the series.

### Adapted wording

Wiki text you keep in edited form (abridged, reworded close to the original, or
translated) is an adaptation of that page. Write your own words where you can.
The One Piece Wikis license community text under **CC BY-SA 3.0 Unported** by
default ([Fandom licensing](https://www.fandom.com/licensing),
[Licenza Fandom](https://www.fandom.com/it/licensing-it)). A page or file can
carry its own notice, and imported text and images can have other owners. When
you cannot name the license of a passage, use the facts only.

An adaptation stays under CC BY-SA 3.0, or another license section 4(b) of the
[legal code](https://creativecommons.org/licenses/by-sa/3.0/legalcode) allows,
with no added restriction, as
[LICENSE-SCOPE.md](LICENSE-SCOPE.md#source-terms-and-adaptations) sets out.

An adaptation needs, in the same pull request:

1. the local fields it fills, by record id and field, in each locale;
2. the article title and its revision link, as
   `https://onepiece.fandom.com/index.php?oldid=<revision>` (or `/it/index.php`
   for the Italian wiki), and the date you read it;
3. the license, with every copyright, attribution or license notice the page
   supplies;
4. what you changed: abridged, reworded, translated;
5. a public credit on the legal page (`/en/legal`, `/it/legal`) that opens no
   later than the text. This is a code change: add the revision to
   [`docs/content-provenance/sources.json`](docs/content-provenance/sources.json)
   with every field its entries carry (`revision`, `revisionDate`, `url`,
   `revisionUrl`, `apiUrl`, `contentSha256`), map the record in
   `src/server/archive/credits.server.ts`, which today lists only the #719
   sample, and extend `src/server/archive/credits.test.ts`. A record kind with
   no credit scope yet (`scope` in `src/lib/view/credits.ts`) needs one first.
   [source-credits.md](docs/source-credits.md) has the rules: revision links
   only, nothing sent before the reader's bookmark reaches it. When the credit
   would spoil at the text's threshold, or you cannot make the change, the text
   waits and the facts go in your own words.

The record in a pull request looks like this. The example shows the format only:
it is not the provenance of the real story.

```text
Adapted: monkey-d-luffy, chronicle story at episode 1, body.en and body.it
Source: "Episode 1", One Piece Wiki, https://onepiece.fandom.com/index.php?oldid=2131598, read 2026-10-20
        "Episodio 1", One Piece Wiki italiana, https://onepiece.fandom.com/it/index.php?oldid=353984, read 2026-10-20
License: CC BY-SA 3.0 Unported; authors: the pages' contributors (page history)
Changes: abridged to three sentences and reworded; the Italian is not a translation of the English
Credit: both revisions in sources.json, mapped in credits.server.ts (already there for this sample)
```

### Quotations

A research note quotes a source only where the exact words prove a name or a
threshold: at most two quotations of 12 words and 80 characters or fewer.
`scripts/chronicle-verification.test.mjs` holds the chronicle notes to it, and
the [quotation review](docs/chronicle-quotation-review.md) explains why.
Paraphrase everything else. Archive text reproduces no dialogue, subtitle or
manga line.

### Drawings

Every drawing is original: stroke paths written for this project in the house
style of the [line-drawings skill](.claude/skills/line-drawings/SKILL.md), drawn
by eye and never traced from an image.

- Look at the scene in a source you can lawfully access. The wiki's Appearance
  section, its gallery and image search results are leads, not permission.
- Keep reference images on your own machine. Commit, upload or paste none, in
  the repository, an issue or a pull request.
- Record each reference in the pull request as chapter and page, or episode and
  timestamp. An agent that cannot view the source records what the wiki and
  `npm run wiki:pairs` establish, marked "not viewed", and the human author
  checks the scene.

A drawing of a distinctive design waits for the owner. A design is distinctive
when a combination of its features identifies one subject of the series on its
own: Luffy's banded hat over his costume, Franky's forearm and star, the Going
Merry's curled prow and hull, a landmark's silhouette, a real devil fruit's
skin. A single ordinary object (a barrel, a pair of shears, a plain hat) is not.
The [illustration audit](docs/illustration-rights-audit.md) lists the flagged
cases as F1 to F4. Label the issue `status:needs-decision`, with the reference
and the alternatives you considered; the work can go on in a branch, and the
pull request merges after the owner's ruling.

### AI-assisted work

Say in the pull request which parts an AI helped write or draw, and which
sources you checked its output against. You stay the author: you identify the
sources, check every fact and drawing, and apply the rules above. An AI
paraphrase is not evidence of permission or of independent authorship. Give an
AI only material you may use yourself: what it reads can come back in its
output.

### Rights concerns

Anyone can raise a rights concern through the contact link on the legal page,
which opens a GitHub issue. Keep spoilers out of the title and confidential
details out of the issue; the owner agrees a private channel before any
confidential detail is shared. For a concrete claim about specific material, the
owner unpublishes or replaces that material promptly, labels the issue
`status:needs-decision`, reviews it and decides whether it needs professional
legal advice. If a rights holder contacts you about the project, by any channel,
point them to that link and tell the owner, with any deadline the message gives.

## Writing copy

The site's text, the README and the record texts follow the
[tone-of-voice skill](.claude/skills/tone-of-voice/SKILL.md): neutral, short
sentences, one term per concept, Italian written by a native speaker and not
translated from English. `src/i18n/translate.test.ts` fails on an em dash, an
exclamation mark or a banned phrase in either dictionary.

New interface strings go in `src/i18n/dictionaries/en.ts` and `it.ts` when every
series says them word for word (with `{series}` for the series' name), or in the
series' own folder, `src/i18n/dictionaries/<series>/`, when each series words
them for itself (the common keys) or when only one series has the feature (One
Piece's devil fruits, ships and seas, bounties, factions, the filler guide). A
series' copy stays on the server and reaches a page with its series. The Italian
dictionary is typed against the English one, so a missing key fails
`npm run typecheck`, and a series' file cannot redefine a shared key. Read a
series' own key with `useSeriesT('<series>')`.

## Checks

```sh
npm run check
```

This runs everything CI runs, in the same order: typecheck, lint, format check,
tests with coverage, production build, then three gates (react-doctor, fallow
and the archive gate). Run it before you push.

| Script                            | Does                                             |
| --------------------------------- | ------------------------------------------------ |
| `npm run dev`                     | Dev server                                       |
| `npm run build` / `npm start`     | Production build, and serve it                   |
| `npm run typecheck`               | `tsc --noEmit`                                   |
| `npm run lint` / `lint:fix`       | ESLint, type-aware, zero warnings allowed        |
| `npm run format` / `format:check` | Prettier                                         |
| `npm test` / `test:watch`         | Vitest, with coverage                            |
| `npm run gate:react-doctor`       | Blocking react-doctor health gate                |
| `npm run gate:fallow`             | Blocking fallow codebase-intelligence gate       |
| `npm run gate:archive`            | Blocking gate: the archive is not in the bundle  |
| `npm run gate:docs`               | Blocking gate: the counts table is up to date    |
| `npm run verify:chapters`         | Chapters against the One Piece Wiki (network)    |
| `npm run verify:fruits`           | Real fruits against the One Piece Wiki (network) |
| `npm run verify:names`            | Italian names against the Italian wiki (network) |
| `npm run verify:filler`           | The filler guide against its sources (network)   |
| `npm run docs:chronicle`          | Regenerate `docs/chronicle-verification.md`      |
| `npm run docs:counts`             | Regenerate the counts in `docs/architecture.md`  |

- The gates run after the build and the tests because they need them:
  `gate:archive` reads `dist/` and `gate:fallow` reads `coverage/`.

CI compares each PR's client JavaScript bytes with a separate build of its exact
base commit. Growth up to 2,048 bytes passes. For larger growth, add a
standalone `client-budget: <reason>` line to the PR body explaining why it is
needed; a body edit reruns the check. Leak checks still run and cannot be waived
this way. `npm run check` locally and CI on `main` skip only the size
comparison. To run it yourself after building both revisions:

```sh
node scripts/client-budget.mjs /path/to/base/dist/client dist/client
```

Pass the PR body through `PR_BODY` if the growth needs its documented exception.

- `gate:fallow` compares your branch with `origin/main`. On a shallow clone, run
  `git fetch --unshallow origin main` first.
- The git hooks check part of this on the way: `pre-commit` formats, lints and
  typechecks, `commit-msg` runs commitlint, `pre-push` runs the tests and checks
  formatting and lint on the files being pushed. `LEFTHOOK=0` skips them for one
  command.

## Commits and pull requests

Commit messages and pull request titles follow
[Conventional Commits](https://www.conventionalcommits.org):

```text
type(optional-scope): subject
```

- Types: `feat`, `fix`, `perf`, `revert`, `refactor`, `docs`, `style`, `test`,
  `build`, `ci`, `chore`. A `!` after the type marks a breaking change.
- The scope is lower case, for example `records`, `characters`, `places`.
- The title is at most 100 characters.

Pull requests are squashed, and the title becomes the commit on `main`.
semantic-release reads it to choose the version: `feat` is a minor release, a
`!` is a major one, every other type is a patch. So every merged pull request is
released, and the title is checked in CI.

Fill in the pull request template: what changed, why, how a reviewer can verify
it, and its [sources and rights](#sources-and-rights). For a visual change, add
a screenshot at the bookmark just before the change and at the bookmark where it
applies.

## Working with an agent

The project was built with [Claude Code](https://claude.com/claude-code), and
agents are welcome. The skills in `.claude/skills/` load in Claude Code, and
`tone-of-voice` is the one to use for any copy. An agent's pull request goes
through the same checks and the same review as anyone else's, and says what the
agent wrote or drew ([AI-assisted work](#ai-assisted-work)).

[CODING_STANDARDS.md](CODING_STANDARDS.md) is what the reviewer reads: the
judgement calls the tests do not hold, and where owner rulings live.

Once a pull request is reviewed, `scripts/land-pr.sh <pr> <reviewed-head-sha>`
lands it without going back to its author. It waits for CI `check`, merges on
green, and refuses if the head is no longer the reviewed one. When the branch is
behind `main` by more than `chore(release)` commits, it rebases the branch on
GitHub, waits for `check` again and merges that. The exit codes are listed at
the top of the script. Only 2, a rebase conflict whose files it names, needs a
rebase by hand. GitHub starts no CI run on a pull request that conflicts with
`main`, so the script asks GitHub first and stops with 2 without waiting. 4, the
head changed, and 6, main kept moving, need a person to look.
