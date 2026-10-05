<p align="center">
  <img src="docs/media/hero-banner.svg" alt="Zero Spoiler: a drawn route that disappears into fog" width="900">
</p>

<h1 align="center">Zero Spoiler</h1>

<p align="center">
  <strong>The One Piece wiki without spoilers.</strong>
  <br>
  Set a bookmark at the last episode or chapter you reached. Everything after it stays on the server.
</p>

<p align="center">
  <a href="https://one-piece-zero-spoiler.netlify.app/en"><strong>Open the wiki</strong></a>
  ·
  <a href="CONTRIBUTING.md">Contribute</a>
  ·
  <a href="docs/architecture.md">How it works</a>
</p>

<p align="center">
  <a href="https://github.com/cosimochellini/one-piece-zero-spoiler/actions/workflows/ci.yml"><img src="https://github.com/cosimochellini/one-piece-zero-spoiler/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI"></a>
  <a href="https://github.com/cosimochellini/one-piece-zero-spoiler/releases/latest"><img src="https://img.shields.io/github/v/release/cosimochellini/one-piece-zero-spoiler?sort=semver&display_name=tag&label=release" alt="Latest release"></a>
  <a href="https://app.netlify.com/sites/one-piece-zero-spoiler/deploys"><img src="https://api.netlify.com/api/v1/badges/51908d48-c22b-4c57-939d-6da57ea6982a/deploy-status" alt="Netlify status"></a>
  <a href="https://github.com/cosimochellini/one-piece-zero-spoiler/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"><img src="https://img.shields.io/github/issues/cosimochellini/one-piece-zero-spoiler/good%20first%20issue?label=good%20first%20issues&color=7057ff" alt="Good first issues"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-informational" alt="License: MIT"></a>
</p>

## Same page, two bookmarks

Look up one character on a normal wiki and the sidebar tells you who dies and
who betrays whom. Here you set a bookmark, and every entry after it is under
fog.

| Bookmark at episode 45                                                                                                                        | Bookmark at episode 650                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="docs/media/fog-before.png" alt="The character grid at episode 45: the crests after that point are blurred and unnamed" width="420"> | <img src="docs/media/fog-after.png" alt="The same crop at episode 650: the same crests are open, named and drawn" width="420"> |

## Hidden entries never reach the browser

The fog is not a blur over the full page. Ask the live site for a character you
have not met yet, with no bookmark set:

```sh
curl -s https://one-piece-zero-spoiler.netlify.app/en/characters/trafalgar-law \
  | grep -c 'Trafalgar Law'
# 0

curl -s https://one-piece-zero-spoiler.netlify.app/en/characters/trafalgar-law \
  | grep -o '<title>[^<]*</title>'
# <title>A character under fog | Zero Spoiler</title>
```

With `Cookie: opzs_ep=650` the title is the name. The server reads the bookmark
before it builds the page. An entry you have not reached is sent as its kind,
two thresholds and an opaque handle, with no name, no id and no text:

```mermaid
flowchart LR
  A["Request + opzs_ep cookie"] --> B["Loader calls a server function"]
  B --> C["reveal(bookmark).sees() per record, on the server"]
  C --> D["Revealed records, in the route's locale"]
  C --> E["Covered records: two thresholds and an opaque handle"]
  D --> F["HTML, and a payload with nothing else in it"]
  E --> F
```

The archive is never compiled into the client bundle, and a build gate fails if
any of it gets there. Search, drawings and links follow the same rule. The full
design is in [docs/architecture.md](docs/architecture.md).

## What's inside

500+ characters, 120+ devil fruits and about 40 places, from the first episode
to the latest arc, in Italian and English. Every entry has its own line drawing
made for this project, and some are redrawn from the episode the story changes
them. There is no official artwork.

|                                                                                                                                                                                              |                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="docs/media/home-ep650.png" alt="The landing page at episode 650: the Dressrosa arc with its drawing" width="420"><br>The landing page: the arc you are in, and what just happened. | <img src="docs/media/characters-ep650.png" alt="The characters page with the search field and the main characters' crests" width="420"><br>Characters: each one with its own crest.                    |
| <img src="docs/media/fruits-ep650.png" alt="The devil fruits page with the Gum-Gum Fruit and its drawing" width="420"><br>Devil fruits: grouped by type, in the order the story names them.  | <img src="docs/media/bookmark-dialog.png" alt="The bookmark dialog offering anime episode, season and episode, or manga chapter" width="420"><br>The bookmark dialog: three ways to say where you are. |

## Run it

Node 24.21 and npm 12.2, as set in `.nvmrc` and `packageManager`.

```sh
nvm use
npm install
npm run dev     # http://localhost:3000
npm run check   # everything CI runs: types, lint, format, tests, build, gates
```

## Contribute

The most useful contributions need no code:

- **A wrong episode or chapter.** An entry that opens too early is a spoiler,
  the one bug this project cannot ship. Open a
  [content issue](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/new?template=content.yml)
  with a source.
- **A redrawing.** Some characters change during the story, and their drawing
  should change with them. Each one is a
  [good first issue](https://github.com/cosimochellini/one-piece-zero-spoiler/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
  with a checklist.
- **Stories, places and devil fruits** that the wiki does not have yet.

[CONTRIBUTING.md](CONTRIBUTING.md) explains where each kind of entry lives,
which tests guard it and how pull requests are released.

## Stack

React 19 · TanStack Start (SSR) · StyleX · TypeScript `strict` · Vite · Vitest ·
Netlify. Six runtime dependencies, each pinned to an exact version.

## Built with Claude Code

This project was built in agentic sessions with
[Claude Code](https://claude.com/claude-code). The checks came first: a
type-aware lint of over a thousand rules, tests that scan every text for names
the reader has not reached, a production build and three blocking gates. Code
from a person or an agent is accepted by those checks, not on trust, and copy
from either follows the same
[tone-of-voice skill](.claude/skills/tone-of-voice/SKILL.md).

## License

[MIT](LICENSE) © 2026 Cosimo Chellini.

One Piece is created by Eiichiro Oda and owned by Shueisha and Toei Animation.
This is an unofficial, non-commercial fan project. It contains no official
artwork, scans or frames, and it is not endorsed by the rights holders.
