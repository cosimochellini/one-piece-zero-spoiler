---
name: line-drawings
description: How Zero Spoiler's line drawings are made, checked and audited, so every icon on the site reads as one set. Load it before drawing, redrawing, reviewing or auditing any drawing in src/data/series/<series>/art (One Piece's characters, redrawings, devil fruits, places, arcs and ships; Hunter x Hunter's arcs, characters and places), and before writing an issue that asks for one.
---

# Zero Spoiler line drawings

Every record on the site has a line drawing made for this project: an object
that stands for a character, the place itself for a place, a fruit for a
fruit. They are data (`src/data/series/<series>/art/`), and one component
draws all of them, in every series (`src/components/ChartArt.tsx`). The point of
this skill is that a drawing made today sits next to one made a year ago and
the two read as the same hand.

The worked example is One Piece's Franky, both stages, in `src/data/series/one-piece/art/water-seven.ts`:
the forearm of the first years (ep 235) and the forearm of the two years
(ep 517, PR #192), drawn over the same wrench and bolt. Render them with
`npm run art:sheet -- franky` and keep the sheet open while you draw.

## The house style

These rules hold for every drawing. **(test)** marks the ones a test fails on;
the rest are left to review, so check them yourself.

- **The box.** 160×200, x to the right, y down (`ART_VIEWBOX`). The object
  centred near x 80; ground or a base at y 150; `shadow()` at y 180–190
  (Hunter x Hunter's arcs differ; see its section);
  `SEA` waves at y 158/172/186. A drawing may run past the box (a wave
  does); One Piece's fruits may not **(test)**.
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
  not the object's: one of the nineteen `tint` tokens every series shares
  (`src/styles/tokens.stylex.ts`), never the series' UI `accent`. A redrawing never changes it. Put the accent on the one
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
  a new weapon that becomes part of the object, a scar that stands for
  something, a transformation, an arc-long disguise. It does not count when
  it is an outfit that never touches the object, a one-scene moment, or
  anime filler (no chapter to pair); see the rulings below for what else
  does not count. As a rule it lasts two or three episodes or more,
  unless it is a story symbol. A temporary feature is **two entries**: the
  change, then the drawing before it again (the same `const`, so the return
  is the first drawing itself) from the episode it is gone. Luffy's hat is
  the worked example (`east-blue.ts`, `LUFFY_HAT`). When the object is
  hidden under the costume (Luffy's knight helm), the accent moves to the
  costume's own mark (the plume). If the honest composition does not read at
  56 px, drop the stage rather than draw something false. Every redrawing
  is a whole drawing, `{ episode, chapter, value }`, strictly after
  `revealedAtEpisode`, ascending. The `chapter:` must be a true pair with the
  episode, the chapter that same scene is in, or chapter readers see it
  early; when the true chapter is below the record's, pin the record's (see
  the rulings below). `src/data/series/index.test.ts` holds every series'
  redrawings, read as the pages read them, to the house style, a `chapter:`
  pin, an episode after the threshold and ascending order; that the pin is
  the true chapter is a review check. The rest of this paragraph is One Piece's
  mechanics: the entry goes in the `<saga>Redrawn` timeline of the saga that
  first drew the record, and `src/server/archive/slices.test.ts` walks every
  stage from the data
  (episode − 1, episode, no bookmark, chapter − 1, chapter), so a stage needs
  no test of its own; a stage that is an earlier drawing again gets a row in
  the "redraws %s at stage %i" table there. A saga's first redrawing is
  also spread into `REDRAWINGS` and added to `src/data/series/one-piece/art/index.test.ts`.
  The owner's stage rulings (2026-10-10):
  - **A death is a stage, almost always.** When the story kills a character
    after their record opens, or leaves them for dead (`deceased`,
    `presumed-dead` in the status timeline), the drawing changes from the
    episode that tells it, with the most honest composition for that
    character, chosen case by case: Ace's hat losing its flame at 483
    (`alabastaRedrawn`), Jorul's grave at 838 (`wholeCakeRedrawn`). A death
    told in a flashback dates from the episode that tells it. Records already
    dead when they open, and the devil fruits, keep their drawing. An audit
    that finds a death missing from the status timeline adds the status
    entry (true pair) and the drawing in the same PR. The PR states which of
    the two exceptions applies: the character dies in the episode their
    record opens, or no true composition reads at 56 px.
  - **Back from the dead is a new drawing** that shows what the return leaves
    (Kanjuro at 1024, Orochi at 1051, Sabo at 663).
  - **A zombie's purification is a stage** (One Piece; owner, 2026-10-12, #554): the
    episode it loses its borrowed shadow, to salt or to the shadow going
    home, and goes still (Kumashi at 360, the Shadow's Asgard at 373). Only
    the first time counts, and the death exceptions apply.
  - **A destroyed or badly damaged place or ship is a stage**, even for a
    while (the Going Merry burning, Enies Lobby after the Buster Call, Water
    Seven after Aqua Laguna), and its rebuilding is a new drawing again.
  - **A state of the body keeps the drawing as it is:** frozen, chained,
    petrified, wounded, a lost limb.
  - **A weapon held beside the object keeps the drawing as it is**, and so
    does a one-fight weapon or technique.
  - **A Zoan form is a permanent stage** (One Piece) with no exit entry (King, Ulti,
    Queen), drawn as a part of the animal's body (a shell, a foreleg).
  - **Canon is the manga and the episodes that adapt it.** A One Piece cover story
    counts only where an episode adapts it as story; anime-only looks stay
    out.
  - **A stage whose true chapter is below its record's chapter is pinned at
    the record's chapter**, as the status entries are (#459): in One Piece,
    the Shinobu entry in `wano.ts`, Pekoms in `fish-man-island.ts`. The gate is the later
    of the record's chapter and the entry's `chapter:`, or without one the
    first chapter that reaches its episode, which can be many chapters late.
    The pin adds nothing to the chapter table, and in One Piece the stage
    walk in `slices.test.ts` walks it.
  - **A frame check on manga pages decides** the start, the end, and what is
    really on the object. The wiki's prose is a lead: Jack's sails, Leo's
    goggles and Tamago's teacup were all wrong or missing in it.
- **One Piece's places and arcs** are the place itself, seen from the sea: the landmark,
  the ground at y 150, `...SEA` (or `SEA.slice(1|2)`) below. **Ships** are the
  ship side on, with a figurehead but no flag mark.
- **Devil fruits** (One Piece) are a fruit and its power (#461). The fruit is a body
  from the kit in `src/data/series/one-piece/art/fruits/kit.ts`: one of six (`round`, `pear`,
  `gourd`, `heart`, `oblong`, `segmented`), shared radii, seen a little from
  above. `crown()` draws the rim of the dimple the stalk sits in, `shine()`
  the highlight on the near shoulder, `hatching()` the far side turning away,
  `skin()` a few `soft` curls, and `sprout()` the stalk and leaf. Pick the
  body by hand. The power is the **only accent**, and it acts **on the fruit's
  own body**, as the owner picked in #462:
  - **Logia**: the fruit sunk in its element where the shadow would be (smoke
    in a bank of cloud, ice in a cluster of shards).
  - **Paramecia**: the power breaking out of the fruit or done to it (a blast
    out of an open side, a bite out of the shoulder, the stalk wound into a
    spring). Cut the outline where the power has it, with `outline(body,
    keep)`, so the skin is open there rather than drawn under it.
  - **Zoan**: the animal's attribute grown out of the fruit, both ends on the
    rim (`onRim()`): bison horns, falcon wings. Never a head, never a face.
  - **The power as the threshold episode shows it**: no later technique,
    form or awakening. Redraw a fruit later only on an identity turn (its
    true name, its true model, a declared awakening), never for a new
    technique.
  - **The real fruit** is a redrawing at the episode the show first shows it,
    with a true chapter pair, and it is the pure real fruit with no power
    (the flame-flame and op-op entries in `fruitRedrawn`). The owner ruled
    that Gum-Gum is the real fruit from episode 1, with no redrawing.
  - **10–14 strokes**; `drawings.test.ts` fails a kit fruit under ten. Watch
    for faces: two curls over a row of points reads as eyes and teeth, so
    keep curls off a level line and away from a jagged edge (the first ice
    drawing failed on this).
  - Every fruit drawing, kit or not, obeys what `drawings.test.ts` holds:
    absolute commands only (so `shadowUnder()`, never `shadow()`, whose `q`
    is relative), one decimal, no `transform`, inside the box, **exactly
    one** accent. Fruit compositions go in `fruitArt` in `index.ts`, keyed by
    the fruit's id, and later stages in `fruitRedrawn`.

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
  `chapter:`, the record's when the true chapter is below it (see the rulings
  in "Each kind of record"); check `chapterAtEpisode(episode)` against the
  manga debut.

## Hunter x Hunter

Everything above holds for Hunter x Hunter, with what is its own here. Its
drawings are `DRAWINGS` in `src/data/series/hunter-x-hunter/art/index.ts`:
the arcs, and the Hunter Exam's characters and places as #760 files them
(#761 reviews and completes them). Render them
with `npm run art:sheet -- --series hunter-x-hunter <id>` (or `--kind
arc|character|place`; `--saga` is One Piece's), on the series' own paper.

- **The palette.** The `HUNTER_X_HUNTER` theme in `src/styles/themes.ts`:
  papers and inks tinted forest green (hue 160), and Gon's leaf green,
  `oklch(82% 0.2 145)`, as the page's `accent`. A record still takes one of
  the shared tints. `green` and `acid` go only to a record, character, place
  or arc alike, whose accent mark is itself green in the 2011 anime frame (or
  the manga colour page) at its threshold, settled by the frame check; the
  site's leaf accent is never a reason (owner, #797). Every other record
  takes another tint, which is why the Greed Island arc is `orange`.
- **Motifs.** A character is the object the reader would name first at the
  record's threshold: Gon's fishing rod, Killua's skateboard, Leorio's
  briefcase, Kurapika's two wooden swords, each as the threshold episode of
  the 2011 anime and its chapter show it, settled by the frame check. The
  accent is the role of a stroke on a real part the show shows (the rod's
  reel, the board's deck, the case's handle; the swords' grips if the frame
  shows them apart from the blades, else the blades), never a mark added to
  carry it.
- **Arcs and places** are a landmark or an object from the arc's opening:
  on land, a ground line at y 150 or an object standing on its own base,
  with `shadow()` at y 150–160 (the tower on its ground, the gavel on its
  block, the console on its table); at sea, on `...SEA` with no shadow (the
  exam ship in a storm). An object that is itself the map or the ground
  needs no shadow (the Kakin map, over a wave).
- **Nen and later looks.** Weapons and looks in Hunter x Hunter are often Nen
  abilities shown arcs later, so the threshold check bites hardest here: no
  later weapon, form, Nen ability or costume. Kurapika at the Hunter Exam is
  the wooden swords; his chains are a Nen ability first shown in Yorknew City.
  Nen is drawn only when the record's threshold already shows it, as open
  `ambient` lines around the object: never a glow or a fill, and never the
  accent, which always sits on a real object the show shows, chains
  included. Nen is never added after the threshold, so no redrawing is
  made for Nen alone (owner, #797). Nen lines are never the reason for a
  stage nor part of one: a weapon the show draws as an object (Kurapika's
  chains) can be a stage, drawn as the object, with no Nen lines.
- **Redrawings** follow the rulings in "Each kind of record": a `chapter:`
  pin at the true chapter, a new drawing on a death or a costume change. A
  new weapon that becomes part of the object is a stage; a one-fight
  technique is not.
- **Manga-only stages.** The 2011 anime ends at episode 148, and the last
  chapter it adapts is `lastAdaptedChapter` in `src/data/series/index.ts`
  (339 today). A stage the anime never shows is filed at episode 148 with
  `source: 'chapter'` and its true chapter, as the Kakin arc is filed, so an
  anime viewer who has finished never sees it.
  - **The test enforces:** a record or fact past `lastAdaptedChapter` is
    `source: 'chapter'` at episode 148; anything the manga alone tells
    declares its chapter wherever it is filed; at episode 148 only an
    anime-only fact goes without one.
  - **Review checks by hand:** at most one such stage per record; a record
    filed at episode 148 is not redrawn; anything the 2011 anime omits at
    or below `lastAdaptedChapter` also takes `source: 'chapter'`. A
    manga-only fact on an anime-only record, and anything else outside
    these rules, waits for an owner ruling.
- **Filing the first redrawing.** The series has none yet, so the first one
  files the timeline: export `REDRAWINGS` (`Redrawings`, keyed by record id)
  from `art/index.ts`, and in `hunter-x-hunter/archive.ts` pass it to
  `filedTimelines(DOSSIERS, { redrawing: (id) => REDRAWINGS[id] })`, as One
  Piece does in `one-piece/chapter-table.ts`. The chapter table's anchors
  and every dated read (`datedOf`, `reachedOf`, `latestOf`, `redrawn`,
  `timelines`) then follow. Done when `archive.datedOf(record,
  'redrawing')` returns it and the tests pass: `src/data/series/index.test.ts`
  holds every stage to the house style, a `chapter:` pin, an episode after
  the threshold, ascending episodes and non-decreasing chapters, the
  manga's source and the last episode above `lastAdaptedChapter`, and
  fails on an exported `REDRAWINGS`
  the archive does not read; `src/data/archive.test.ts` holds the pin within
  the record's chapter and the dial. The stage walk in `slices.test.ts` is
  One Piece's: until Hunter x Hunter has one, review checks each
  redrawing's episode and chapter pair by hand against the wiki.
- **Research** reads the Hunter x Hunter Wiki API
  (`https://hunterxhunter.fandom.com/api.php`): `|manga debut` and
  `|anime debut` (the `Episode N (2011)` entry) give a record's pair, the
  `Chapter N` and `Episode N (2011)` pages its scene. `wiki:pairs` and
  `art:shots` read One Piece only.

## Workflow

1. **Research.** Read the record (threshold, summary, dossier) and the wiki
   page through the series' API (`wiki.en` in `src/data/series/index.ts`),
   which works with curl when the HTML is blocked:
   `https://onepiece.fandom.com/api.php?action=parse&page=<Page>&prop=wikitext&format=json&redirects=1`.
   On the One Piece Wiki, `{{Qref|chap=N|ep=M|…}}` gives the episode and
   chapter of a fact; the `Episode_N` page confirms it, and N − 1 should
   still show the old look. Check One Piece chapter/episode pairs and their
   page ranges with `npm run wiki:pairs -- 129 157` (ranges work too:
   `1050-1056`). The command
   reads the rendered chapter infobox and caches it in `.gate/wiki/`; use its
   page ranges to locate the scene, then check the scene itself in a source
   you can lawfully access: a licensed manga edition or a licensed stream.
   Note each reference as chapter and page, or episode and timestamp, for the
   pull request's Sources and rights section; when you cannot view it, write
   what the wiki and `wiki:pairs` establish, marked "not viewed", for the
   human author to check. The wiki's gallery and image
   search results are leads, not permission. Reference images stay on your
   machine: commit, upload and paste none. Draw by eye; a trace is not a
   drawing. A distinctive design (a costume ensemble, a ship, a landmark, a
   real fruit) waits for the owner's ruling under `status:needs-decision`, as
   [CONTRIBUTING.md](../../../CONTRIBUTING.md#sources-and-rights) sets out.
2. **Render the before.** `npm run art:sheet -- <id>` writes every stage of
   the record to `.gate/art/<id>.png` (`--out` to move it; `--series <slug>`
   for a series other than One Piece). Read the PNG.
3. **Draft.** Write candidates in a scratch `.ts` file that default-exports
   `Record<string, Stroke[]>` (it may import `~/lib/svg/primitives`), and render
   them beside the record: `npm run art:sheet -- <id> --draft <file.ts>`.
   When the user chooses, give three candidates that differ in structure (a
   pose, a view, a composition), not in parameters: three sizes of the same
   shape read as "all the same".
4. **Look at it at both sizes** on the sheet, then fix what fails the bar.
   Iterate until it is an A.
5. **Write it in the art module** as literal paths and helper calls, with the
   comment above it. Run `npm run art:sheet -- <id>` again.
6. **Verify mappings and stage gates.** `archive:table` reads One Piece
   only (it refuses `--series`): for Hunter x Hunter, check each pinned
   entry's episode and chapter pair by hand against the wiki and the
   series' chapter table, say so in the PR, and never report "no changes"
   from One Piece's dump. For One Piece, save
   `npm run --silent archive:table` dumps from the PR base and head, plus
   `npm run --silent archive:table -- --dated-only` dumps. Compare chapter and
   episode mappings separately; count added and removed dated entries as
   occurrences, preserving duplicate lines. Follow the duplicate-aware
   comparison in `CONTRIBUTING.md` under “Archive and drawing verification.”
   For One Piece characters with redrawings, run `npm run build` then
   `npm run art:shots -- <id> [<id>…]`. It needs installed Chrome
   (`CHROME_PATH` overrides its executable) and manages its own preview server.
   Read `.gate/shots/<ids-joined-with-+>.png`: each redrawing has four crest
   cells then four tile cells, at episode − 1, episode, chapter − 1 and chapter.
   Missing chapters use the app's derived opening threshold, including the
   record's gate, labelled “derived”; covered records have placeholders.
   Confirm every boundary shows the intended drawing. For first drawings and
   non-character records, keep `art:sheet` and check the crest and tile on
   `npm run build && npm start`. Screenshots stay out of the repo.
7. **Run `npm run check`.** The PR body states What (where the entry goes,
   what each stroke is), Why (a table of sources with supporting quotations),
   and How to verify (check, tests and the generated stage grid). Include the
   actual chapter/episode mapping diff (One Piece; Hunter x Hunter's hand
   check of step 6 instead), including an explicit “no changes”
   when empty, and separate counts of added and removed dated entries.

## Auditing the archive

To bring a whole saga or kind up to the bar:

1. `npm run art:sheet -- --saga <file>` (One Piece, for example `water-seven`), or
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
