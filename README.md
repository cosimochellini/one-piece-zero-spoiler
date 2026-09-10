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
