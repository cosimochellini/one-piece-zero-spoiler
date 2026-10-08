---
name: line-drawings
description: How Zero Spoiler's line drawings are made, checked and audited, so every icon on the site reads as one set. Load it before drawing, redrawing, reviewing or auditing any drawing in src/data/art (characters, redrawings, devil fruits in src/data/art/fruits, places, arcs and ships), and before writing an issue that asks for one.
---

# Zero Spoiler line drawings

Every record on the site has a line drawing made for this project: an object
that stands for a character, the place itself for a place, a fruit for a
fruit. They are data (`src/data/art/<saga>.ts`, `src/data/art/fruits/`), and
one component draws all of them (`src/components/ChartArt.tsx`). The point of
this skill is that a drawing made today sits next to one made a year ago and
the two read as the same hand.

The worked example is Franky, both stages, in `src/data/art/water-seven.ts`:
the forearm of the first years (ep 235) and the forearm of the two years
(ep 517, PR #192), drawn over the same wrench and bolt. Render them with
`npm run art:sheet -- franky` and keep the sheet open while you draw.

## The house style

These rules hold for every drawing. **(test)** marks the ones a test fails on;
the rest are left to review, so check them yourself.

- **The box.** 160×200, x to the right, y down (`ART_VIEWBOX`). The object
  centred near x 80; ground or a base at y 150; `shadow()` at y 180–190;
  `SEA` waves at y 158/172/186. Saga drawings may run past the box (a wave
  does); fruits may not **(test)**.
- **The pen.** One 2 px line, round caps and joins, kept at 2 px at every size
  (`non-scaling-stroke`) **(test)**. No fills, anywhere. A dot is a zero-length
  line (`dot()`), a circle two arcs (`circle()`).
- **Four strokes or more, at least one `accent`** **(test)**. Fewer than four
  is an icon, not a drawing.
- **Roles.** No role is the second ink (`ink2`). `accent` is the record's tint.
  `ambient` is the muted rule colour, for hatching, ground, water and things
  that are merely there. `dashed: true` is for shadows, ground and water.
  `soft` renders exactly like no role: it is a label for the person drawing
  (folds, knuckles, seams), not a style.
- **One colour.** The tint (`visual.tint` on the record) is the record's colour,
  not the object's. A redrawing never changes it. Put the accent on the one
  mark that identifies the record (Franky's star, Luffy's hat band), never on
  everything.
- **Never a face, a logo, an official mark or lettering.** No eyes, no mouth,
  no Jolly Roger, no "BF-37", no ship's name. A silhouette lion has a mane, not
  a muzzle.
- **Shade is hatched, never filled**, and only where the object is really dark
  or turns away from the viewer: Teach's brim, Shusui's black scabbard, the far
  face of Franky's forearm. Enma's sheath is lilac, so it is not hatched.
- **No repeated stroke** **(test)**: the renderer keys a path by
  `d|transform`, so the same shape may repeat only under another `transform`
  (a windmill's blades, a flower's petals).
- **Coordinates to one decimal**, as the helpers in `src/lib/svg/primitives.ts`
  write them (`circle`, `ellipse`, `dot`, `dots`, `polygon`, `star`, `wave`,
  `SEA`, `shadow`, `sheath`, `BLADE`, `house`, `cell`). Use them
  before writing a path by hand.
- **A comment above every drawing** says what the object is and where the
  reader first sees it, in the dry voice of the `tone-of-voice` skill.

## The quality bar

Grade every drawing you make or review. Only A ships.

- **A, the standard.** Franky's two forearms are the model:
  - **One hero object, with volume.** A 3/4 view, a second face, a cuff seen
    from below: something that says the object is solid. A flat outline is B.
  - **The accent on the identity mark only.**
  - **Supporting objects beneath or beside it**, smaller and plain, when they
    add something true (Franky's tools). Never a crowd.
  - **Detail lines in `soft`** (knuckles, folds), **hatching in `ambient`** on
    the side that turns away, **a `shadow()`** under anything that stands on a
    table.
  - **Usually 10–16 strokes.** Fewer is fine if the drawing is still rich.
    More starts to blur at tile size.
  - **Reads at 56 px.** At tile size the silhouette alone must still say who
    it is, and the hatching must stay open lines rather than a grey patch.
  - **True to the source and to the threshold** (see below).
  - **Shared geometry is shared**: two stages that keep the same object reuse
    one `const` (`FRANKY_TOOLS`), so the only thing that changes is what the
    story changed. The fallow duplicate gate fails on repeated blocks anyway.
- **B, correct but poor.** True and safe, but flat, sparse (often 5–7 strokes),
  generic (could be anyone's), or visually off the set: no volume, the accent
  smeared over everything, no ground or shadow.
- **C, wrong.** Unreadable at tile size, misleading, invented (an object or
  detail the show never shows), a face or logo, or a spoiler (it shows
  something after the record's threshold).

## Each kind of record

- **Characters** are an object that stands for them, never the person. Prefer
  the thing the reader would name first: the straw hat, three swords, the
  forearm with the star.
- **Redrawings** are for whenever the story gives the character a new
  visible feature, **for good or only for a while** (#74, #468). It counts
  when it changes the object or adds something readable at 56 px: headwear,
  a new weapon, a scar that stands for something, a transformation, an
  arc-long disguise. It does not count when it is an outfit that never
  touches the object, a new technique, a one-scene moment, or anime filler
  (no chapter to pair). As a rule it lasts two or three episodes or more,
  unless it is a story symbol. A temporary feature is **two entries**: the
  change, then the drawing before it again (the same `const`, so the return
  is the first drawing itself) from the episode it is gone. Luffy's hat is
  the worked example (`east-blue.ts`, `LUFFY_HAT`). When the object is
  hidden under the costume (Luffy's knight helm), the accent moves to the
  costume's own mark (the plume). If the honest composition does not read at
  56 px, drop the stage rather than draw something false. A whole
  drawing in the `<saga>Redrawn` timeline of the saga that first drew the
  record: `{ episode, chapter, value }`, strictly after `revealedAtEpisode`,
  ascending. The `chapter:` must be a true pair with the episode, the chapter
  that same scene is in, or chapter readers see it early. Add one `it` in
  `src/server/archive/slices.test.ts` on Franky's model (episode − 1, episode,
  no bookmark, chapter − 1, chapter); a record with many stages walks its
  timeline in one `it` instead, on Luffy's model. A saga's first redrawing is also spread
  into `REDRAWINGS` and added to `src/data/art/index.test.ts`. Recount the
  "Line drawings" line in `docs/architecture.md`.
- **Places and arcs** are the place itself, seen from the sea: the landmark,
  the ground at y 150, `...SEA` (or `SEA.slice(1|2)`) below. **Ships** are the
  ship side on, with a figurehead but no flag mark.
- **Devil fruits**: most are grown from a seed in `src/data/art/fruits/index.ts`
  (`fruit({ body, grain, leaf, stem, swirl })`, five strokes). They are the
  standard for fruits by construction; do not hand-draw a generated fruit
  unless readers would recognise its real look. A hand drawing goes in
  `bespoke.ts` and obeys what `fruits/generate.test.ts` holds: absolute
  commands only, one decimal, no `transform`, inside the box, **exactly one**
  accent, the shared body radii and `furniture()`.

## Spoilers in a drawing

A drawing is gated like any text, and it can spoil just as well.

- **It shows only what the threshold episode shows.** Hibari's rifle and
  Grus's clay (#136) and Kiku's katana (#149) appeared in drawings before the
  show reveals them. Franky's first forearm has no weapon in it, because the
  arm's cannon is shown later.
- **Nothing invented.** The early Egghead drawings had a volcano and a
  bulb-headed Vegapunk the show never has (#180). Check the object against the
  wiki's Appearance section, not memory or an issue's wording (Chopper's cap
  and Brook's guitar were both described wrong in their issues).
- **Chapter readers too.** A redrawing reaches chapter readers through its
  `chapter:`; check `chapterAtEpisode(episode)` against the manga debut.

## Workflow

1. **Research.** Read the record (threshold, summary, dossier) and the wiki
   page through the API, which works with curl when the HTML is blocked:
   `https://onepiece.fandom.com/api.php?action=parse&page=<Page>&prop=wikitext&format=json&redirects=1`.
   `{{Qref|chap=N|ep=M|…}}` gives the episode and chapter of a fact; the
   `Episode_N` page confirms it, and N − 1 should still show the old look.
   For proportions, find a reference image: load
   `https://duckduckgo.com/?q=…&iax=images&ia=images` in puppeteer-core and
   curl the `tse*.mm.bing.net` thumbnails. Keep references in the scratchpad;
   nothing raster ships.
2. **Render the before.** `npm run art:sheet -- <id>` writes every stage of
   the record to `.gate/art/<id>.png` (`--out` to move it). Read the PNG.
3. **Draft.** Write candidates in a scratch `.ts` file that default-exports
   `Record<string, Stroke[]>` (it may import `~/lib/svg/primitives`), and render
   them beside the record: `npm run art:sheet -- <id> --draft <file.ts>`.
   When the user chooses, give three candidates that differ in structure (a
   pose, a view, a composition), not in parameters: three sizes of the same
   shape read as "all the same".
4. **Look at it at both sizes** on the sheet, then fix what fails the bar.
   Iterate until it is an A.
5. **Write it in the saga file** as literal paths and helper calls, with the
   comment above it. Run `npm run art:sheet -- <id>` again.
6. **Check it on the site.** `npm run build && npm start` (never `vite dev`:
   its StyleX layer order differs). With puppeteer-core in the scratchpad,
   set the bookmark cookie before navigating,
   `page.setCookie({ name: 'opzs_ep', value: '516', domain: 'localhost', path: '/' })`
   (`c598` for a chapter), and screenshot the character page (crest) and the
   list (tile). `clip` takes page coordinates. Screenshots stay out of the repo.
7. **Run `npm run check`.** A PR body follows the redraw PRs (#192): What
   (where the entry goes, what each stroke is), Why (a table of the source,
   quoting the wiki), How to verify (check, tests, the screenshots).

## Auditing the archive

To bring a whole saga or kind up to the bar:

1. `npm run art:sheet -- --saga <file>` (for example `water-seven`), or
   `--kind fruit|place|arc|ship|character`, writes contact sheets of 24 cells,
   each at crest and tile size with its id, threshold and stroke count.
2. Grade every cell A, B or C against the bar above. For each B or C, read the
   comment in the saga file and the record's threshold, and propose an object
   that the threshold episode shows. Say why in a few words.
3. File the work as an epic plus one issue per saga file, on the #74 model,
   labelled `content`. Each child says "Part of #<epic>" and lists, C first:
   `- [ ] \`<id>\` · C — <current object> → <proposed object> (<why>)`, then
   the rules (this skill) and How to verify (`art:sheet` before and after,
   `npm run check`, crest and tile screenshots).
4. One PR per child issue. Redraw every listed record to grade A in place:
   the first drawing changes, so no test changes unless a redrawing does.

## Pitfalls

- librsvg paints every `oklch()` black; `art:sheet` converts the tokens to hex.
  Write hex if you render an SVG by hand.
- Prettier sets `quoteProps: "consistent"`: in a module with one quoted key,
  every key is quoted.
- `scripts/archive-gate.mjs` reads the art modules' quoted two-space keys, so
  fruit keys are written out one by one, never built from a table.
- A redrawing at the record's threshold fails a test: that is the first
  drawing.
- An issue's candidate episode or object is a lead, not a fact. Several redraw
  PRs filed a later episode or corrected the object.
