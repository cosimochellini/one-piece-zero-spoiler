# one-piece-zero-spoiler

A [TanStack Start](https://tanstack.com/start) (React) application.

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

**Styling is StyleX.** Every visual rule is authored with
`@stylexjs/stylex` and compiled by `@stylexjs/unplugin`, which appends the
generated CSS to `src/styles/global.css` — the single same-origin stylesheet
the SSR manifest links on every document. That is why `default-src 'self'`
needs no new source, and why the design uses no web fonts and no images.
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
