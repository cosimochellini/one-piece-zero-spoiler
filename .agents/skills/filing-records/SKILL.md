---
name: filing-records
description: Checklist for filing a record set, an arc's new characters and places, with the hidden tests, scripts and docs each addition touches. Load it before you file records, add dated steps to returning characters, or review such a pull request.
---

# Filing records

A record set is one arc's new characters and places, plus the dated steps it adds to characters filed earlier. Its models are PRs #829, #839, #926 and #943. The paths are Hunter x Hunter's; `<hxh>` is `src/data/series/hunter-x-hunter`. Drawings follow the `line-drawings` skill and prose the `tone-of-voice` skill. Chronicles and relationships are authored in issues of their own, but every new character still enters the relationship registry here (step 6).

Every record has a **gate**: the episode and chapter at which it opens.

## 1. Records and dossiers

- File the records in the arc's module, `<hxh>/records/<arc>.ts`: `entries` for the records, `dossiers` for the characters' facts.
- A returning character gets new dated steps in the dossier that already holds him, in the module that first filed him. The test `files each dossier once, and only for a character` in `src/data/archive.test.ts` fails on a second dossier.
- Export the arc's places from the same module as `<ARC>_PLACES` and spread them in `<hxh>/places.ts`, as `trick-tower.ts` and `heavens-arena.ts` do. Prose under `records/` is in the archive gate's prose check; a place file anywhere else needs its own line in `EXTRA` in `scripts/archive-gate.mjs`.
- A new place type goes in the `form` union in `<hxh>/records/saga.ts` and in `forms` in `<hxh>/placeWords.ts`, with both labels.
- Every record gets its own drawing, keyed by its id, in `<hxh>/art/<arc>.ts` and spread in `<hxh>/art/index.ts`. The test `gives every record the drawing made for it` in `src/data/series/index.test.ts` holds `visual.art === id`.

Done when every new character has an entry and a dossier, every place an entry and a place dossier, every record a drawing, and `./node_modules/.bin/vitest run src/data` passes.

## 2. Gates

- The gate is the scene where the name is said or printed, in each medium, not the first unnamed appearance. Cite the chapter and the episode for each.
- A name only one medium gives makes a source-only record: `source: 'chapter'` or `'episode'` (`Source` in `src/lib/progress/spoiler.ts`). Its other number only orders it.
- A record whose name is an ordinary word gets `commonWord: true`; one whose name is said before its record opens gets `nameSaidAt`. Records that share a name, such as a place named like its arc, share both facts. A fact no text needs fails too. Both rules are tests in `src/data/leaks.test.ts`: `give records that share a name the same name facts` and `need every name fact for some text to pass`.
- Write the summary, role, log and first facts for the gate: what a reader knows there. Anything later is a dated step.
- A status timeline opens at the record's gate. Every later change is its own entry with its `chapter:` pinned (`pins every change of status to the chapter that tells it` in `src/data/archive.test.ts`).

Done when every gate has its naming chapter and episode, and `src/data/leaks.test.ts` and `src/data/archive.test.ts` pass.

## 3. Hidden tests

- `src/test/fog.test.ts`, `the place words of a series that labels its own`:
  - the `Terraferma` row lists every mainland place by id; add each new one;
  - add an English and an Italian row for each new form label, as `its tower label` does.
- `src/test/series.ts`: raise each `least` floor of `'hunter-x-hunter'` to the new count and update the dated comment above it. `files at least what the series is known to file` in `src/data/archive.test.ts` prints a count when its floor is set too high.
- `scripts/archive-gate.test.mjs`, `reads the shipped dictionaries, keeping only the words they do not hold`: the exact list of HxH place-word canaries. A new region or form id or label goes in, in table order, when it holds a space or a hyphen or has 8+ characters (`DISTINCT_WORD` in `scripts/archive-gate.mjs`) and no shipped dictionary contains it.

Done when `./node_modules/.bin/vitest run src/test scripts/archive-gate.test.mjs` passes.

## 4. Name scripts

Both scripts read the wikis over the network and are not part of `npm run check`.

- `scripts/verify-names.mjs`: add each new character to `ITALIAN_TITLES`, as `Page#Section` for a section of an Italian Wikipedia list page. A name kept after a hand check found no page goes in `NAMES_KEPT`.
- `scripts/verify-chapters.mjs`: add to `TITLES` only a record whose English name is not its wiki page title.

Done when `npm run verify:chapters -- --series hunter-x-hunter` reports nothing too low and nothing unresolved, and `npm run verify:names -- --series hunter-x-hunter` passes every new name. Failures already on main are named as such in the PR.

## 5. Archive

In `<hxh>/archive.ts`:

- `leads['<arc>-arc']`: the arc's cast row.
- The `sweepOf` lists: both sides, gate−1 and gate, of every new gate and dated step, in the episode list and in the chapter list. The payload sweep asks every page at these bookmarks.

The home page ranks the arc's leads by chronicle mentions and falls back to `newcomersOf` in `src/server/archive/home.server.ts`, the leads first shelved in this arc. Returning leads show there only once the arc's chronicles exist; state that in the PR.

Done when the leads list and both sides of every new gate are in the file.

## 6. Provenance

Add one key per new record to `docs/content-provenance/hunter-x-hunter.json`: `sources` for the pages read, `unverified` for every page, timestamp or Italian dub form not viewed. A returning character's key gains the pages of each new step.

Add every new character to `docs/content-provenance/hunter-x-hunter-relationships.json` under `pending`, keyed to the issue that will author its relationships (`"zushi": "#947"`), or under `omitted` with a reason when it has none to author. Each archived character sits in exactly one of `authored`, `omitted` and `pending`; `src/data/provenance.test.ts` (`accounts for every archived character exactly once`) and `src/server/archive/hunterRelationships.test.ts` enforce it. `CONTRIBUTING.md`, "Recording provenance", has the rules.

Done when `src/data/provenance.test.ts` and `hunterRelationships.test.ts` pass and every new character is in both files.

## 7. The arc's server test

Write `src/server/archive/<arc>.test.ts` on the model of `heavensArena.test.ts` and `zoldyck.test.ts` in the same folder:

- each record closed, with no drawing, at gate−1 and open at the gate, for both units and both locales;
- each dated step, status or affiliation, before and at its pin;
- the arc's leads.

Done when the test passes, and moving one gate or pin down by one makes it fail.

## 8. Docs

- `npm run docs:counts` rewrites the counts block of `docs/architecture.md`; `gate:docs` fails without it.
- Update the Hunter x Hunter coverage paragraph under `## Series and routing` in `docs/architecture.md`.
- Update the rounded line in `README.md` ("Hunter x Hunter currently covers …").

Done when `npm run check` passes.

## 9. Probe a built page

Run `npm run build && npm start` and take the port it prints. A `?ep=N` or `?ch=N` link answers 302 and sets the bookmark cookie (`src/lib/progress/linkBookmark.ts`), so follow it with a cookie jar and quote the URL:

```sh
curl -sL -c jar.txt -b jar.txt "http://localhost:$PORT/hunter-x-hunter/en/characters/zushi?ep=26"
```

Done when each new record is closed at gate−1 and open at the gate, in both units, and the PR's Evidence lists the pages probed.
