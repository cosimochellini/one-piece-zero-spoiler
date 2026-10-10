# Coding standards

This page is for whoever reviews a pull request, person or agent. It lists the
judgement calls. The mechanical rules are tests and `npm run check` already
fails on them, so they are not repeated here.

## Where the bar lives

- **Drawings** (`src/data/art`): the
  [line-drawings skill](.claude/skills/line-drawings/SKILL.md) sets the house
  style, the A/B/C grades and what makes a drawing a spoiler.
- **User-facing text** (dictionaries, record summaries, stories, README): the
  [tone-of-voice skill](.claude/skills/tone-of-voice/SKILL.md).
- **Where things live and the one rule** (nothing shows before its threshold):
  [CONTRIBUTING.md](CONTRIBUTING.md).

## Owner rulings are not findings

Rulings live in the issue or the PR body: the structure the owner picked from
the candidates, a B grade accepted, a stage dropped. Read them there. A ruling
overrides the skill's bar for that drawing, so do not argue it again or report
it as a defect. A B the owner accepted is P3 at most.

## Drawings: not defects

- **The `ivory` tint is the second ink.** It resolves to `color.ink2`
  (`src/components/drawing.ts`, and `inkOf` in `scripts/art-sheet.mjs`), so an
  `ivory` record's accent is drawn in the same ink as its lines. That is the
  design, not an invisible accent.
- **Fruit drawings use `shadowUnder()`** (`src/data/art/fruits/parts.ts`), not
  `shadow()` from `~/lib/svg/primitives`. `shadow()` writes a relative `q`,
  which the fruit alphabet test in `generate.test.ts` rejects. The two are not a
  duplicate to merge.

## Drawings: what counts as P0–P2

Rate each one by its impact:

- an invented fact: an object or detail the show does not have by the threshold;
- a spoiler, including one to chapter readers through a redrawing's `chapter:`
  that is not a true pair with its episode;
- a face, a logo or lettering;
- a drawing worse than the one on `main`, or one that does not read at 56 px;
- a break of the house style that no test catches;
- a doc, a skill or a PR body that misstates the change or a count.

How a drawing looks beyond these, short of an A, is P3 at most.

## Out of scope by default

Work that the epic assigns to a later child issue. Check the epic's list before
you report something as missing.

## Already tested

`src/data/art/index.test.ts` and `src/data/art/fruits/generate.test.ts` hold the
mechanical rules: stroke counts, exactly one accent on a fruit, the path
alphabet, one decimal, the box, no redrawing at the threshold. If CI is green,
they hold.
