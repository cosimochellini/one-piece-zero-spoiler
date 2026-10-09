# Contributing to Zero Spoiler

Thank you for helping. This page tells you where things live, which rules the
tests enforce and how a pull request becomes a release. If something here is
unclear, open a
[discussion](https://github.com/cosimochellini/one-piece-zero-spoiler/discussions).

By taking part you agree to the [code of conduct](CODE_OF_CONDUCT.md).

## Ways to help

- **Report a wrong episode or chapter.** Use the
  [content form](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/new?template=content.yml)
  and link a source.
- **Pick a
  [good first issue](https://github.com/cosimochellini/one-piece-zero-spoiler/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).**
  Most are redrawings: one character, one episode, a checklist.
- **Add what is missing:** chronicle stories, places, devil fruits, statuses.
  Issues labelled
  [`help wanted`](https://github.com/cosimochellini/one-piece-zero-spoiler/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
  list the larger gaps.
- **Fix a bug or improve the code.** Open an issue first for anything larger
  than a small fix, so we can agree on the approach.

**Keep spoilers out of titles.** Issue and pull request titles are public and
show up in notifications. Write "Wrong episode for a character", not the fact
itself. Details go in the body.

## Setup

You need Node 24.21 and npm 12.2, as set in `.nvmrc` and in the `packageManager`
field of `package.json`.

```sh
git clone https://github.com/cosimochellini/one-piece-zero-spoiler.git
cd one-piece-zero-spoiler
nvm use
npm install
npm run dev     # http://localhost:3000
```

- `npm install` also installs the git hooks through the `prepare` script.
- Do not install with `--omit=optional`: fallow ships its binary as an optional
  dependency.
- The dev server and the production build can lay out styles slightly
  differently. To check a visual change, run `npm run build && npm start`.
- Your bookmark is the `opzs_ep` cookie. You can set it in the bookmark dialog,
  in the browser's dev tools, or with a link such as `/en?ep=650`,
  `/en?s=2&ep=3` or `/en?ch=1044`.

## The one rule

An entry that opens too early is a spoiler. That is the one bug this project
cannot ship. An entry that opens too late only stays hidden a little longer. So
when you are not sure about an episode or chapter, **round it up**.

The same goes for text. A summary, a role or a log line may only say what a
viewer knows at the entry's own threshold. A later fact goes in a dated timeline
entry, which carries the episode it is learned in. The comment at the top of
`src/data/entities.ts` has the full rules.

- Episodes count canonical anime episodes only. Filler, films and specials do
  not count.
- A character opens at the episode that names them, not the one that first shows
  them.
- Use the [One Piece Wiki](https://onepiece.fandom.com) as the source, and link
  the page in your pull request.

## Where things live

| Path              | What is there                                                                      |
| ----------------- | ---------------------------------------------------------------------------------- |
| `src/data/`       | The archive: records, drawings and most editorial tests. Server only.              |
| `src/components/` | React components, styled with StyleX.                                              |
| `src/routes/`     | TanStack Start file routes, under `$locale/`.                                      |
| `src/server/`     | Server functions that cut the archive down to what a bookmark reaches.             |
| `src/lib/`        | Code the client may import: bookmark logic, search, SVG helpers, views.            |
| `src/i18n/`       | Locales and the English and Italian dictionaries.                                  |
| `src/styles/`     | Global CSS and the StyleX design tokens.                                           |
| `scripts/`        | Quality gates, the PR title validator and the wiki checks.                         |
| `docs/`           | [Architecture](docs/architecture.md), media and the chronicle verification report. |

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
- Records live in one module per saga, in `src/data/records/<saga>.ts`, plus
  `src/data/records/fruits.ts` for the devil fruits.

| To add            | Edit                                                                                                                                                                             | Guarded by                                                               |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| A character       | The record and its entry in `dossiers` in `src/data/records/<saga>.ts`, and a drawing in `src/data/art/<saga>.ts`                                                                | `src/data/characters.test.ts`, `src/data/leaks.test.ts`                  |
| A devil fruit     | `FRUIT_FORMS` in `src/data/fruit-forms.ts`, the record in `src/data/records/fruits.ts`, a drawing in `src/data/art/fruits/`, and a `devilFruit` entry in the eater's `dossiers`  | `src/data/fruits.test.ts`                                                |
| A place           | The record in its saga module, its entry in `PLACE_DOSSIERS` in `src/data/places.ts`, and a drawing                                                                              | `src/data/places.test.ts`                                                |
| A chronicle story | The story in `src/data/records/<saga>.chronicle.ts`, its source in `scripts/chronicle-sources.mjs`, then `npm run docs:chronicle` to regenerate `docs/chronicle-verification.md` | `src/data/characters.test.ts`, `scripts/chronicle-verification.test.mjs` |
| A redrawing       | A dated entry in the saga's `…Redrawn` timeline in `src/data/art/<saga>.ts`. `skypieaRedrawn` is the model                                                                       | `src/data/art/index.test.ts`, `src/server/archive/slices.test.ts`        |

A few rules that are easy to miss:

- **Drawings** are lists of stroke paths in a 160×200 box: at least four
  strokes, at least one of them `accent`, no fills, no faces, no logos, no
  official artwork. The helpers are in `src/lib/svg/primitives.ts`. The
  `line-drawings` skill (`.claude/skills/line-drawings/SKILL.md`) sets the
  standard every drawing is held to, and `npm run art:sheet -- <id>` renders a
  drawing at crest and tile size to check it without the site.
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
  spread into `REDRAWINGS` in `src/data/art/index.ts` and added to the module
  list in `src/data/art/index.test.ts`.
- **A new saga module** has to be added to `sagas` in `src/data/entities.ts`, to
  `DRAWINGS` in `src/data/art/index.ts`, and to the module list in
  `src/data/art/index.test.ts`.

`npm run verify:chapters` checks every chapter and every episode against the
first appearance on the One Piece Wiki. It needs the network, so it is not part
of `npm run check` or CI. Run it when you change a chapter or an episode. A
record kept below the wiki's episode after a hand check goes in `EPISODE_KEPT`
in the script, with the reason.

`npm run verify:names` checks every character's Italian name against the Italian
One Piece Wiki: the page title, the dub's name in "Nome doppiaggio italiano", or
an alias, or the bare part of one of them when the rest is a surname or a real
name said later. It also needs the network. Run it when you add a character or
change an Italian name. A character the English wiki does not link to its
Italian page goes in `ITALIAN_TITLES` in the script; one with no page of its own
goes in `NAMES_KEPT`, with the reason.

## Writing copy

The site's text, the README and the record texts follow the
[tone-of-voice skill](.claude/skills/tone-of-voice/SKILL.md): neutral, short
sentences, one term per concept, Italian written by a native speaker and not
translated from English. `src/i18n/translate.test.ts` fails on an em dash, an
exclamation mark or a banned phrase in either dictionary.

New interface strings go in `src/i18n/dictionaries/en.ts` and `it.ts`. The
Italian dictionary is typed against the English one, so a missing key fails
`npm run typecheck`.

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
| `npm run verify:chapters`         | Chapters against the One Piece Wiki (network)    |
| `npm run verify:names`            | Italian names against the Italian wiki (network) |
| `npm run docs:chronicle`          | Regenerate `docs/chronicle-verification.md`      |

- The gates run after the build and the tests because they need them:
  `gate:archive` reads `dist/` and `gate:fallow` reads `coverage/`.
- `gate:fallow` compares your branch with `origin/main`. On a shallow clone, run
  `git fetch --unshallow origin main` first.
- The git hooks check part of this on the way: `pre-commit` formats, lints and
  typechecks, `commit-msg` runs commitlint, `pre-push` runs the tests.
  `LEFTHOOK=0` skips them for one command.

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

Fill in the pull request template: what changed, why, and how a reviewer can
verify it. For a visual change, add a screenshot at the bookmark just before the
change and at the bookmark where it applies.

## Working with an agent

The project was built with [Claude Code](https://claude.com/claude-code), and
agents are welcome. The skills in `.claude/skills/` load in Claude Code, and
`tone-of-voice` is the one to use for any copy. An agent's pull request goes
through the same checks and the same review as anyone else's.
