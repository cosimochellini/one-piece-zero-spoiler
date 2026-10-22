# Selected fruit illustration replacements (#732)

Reviewed 2026-10-22, against `6a943d2`. This maintainer document contains story
names and source links; it is not included in application payloads.

## Owner decision and scope

The owner explicitly authorized generic replacements for all three F1 entries:
“Autorizzo sostituzioni generiche per tutti e tre”. This is a bounded exception
to the real-fruit rule in `.claude/skills/line-drawings/SKILL.md`, not a change
to the policy for other records. The owner chose replacement, rather than
retention pending permission or professional assessment.

The new compositions were drawn directly as vector paths: ordinary fruit shapes,
short straight stalks and leaves, with an elastic deformation, flame or
separated cut. No source scans, source-image downloads, tracing or reproduction
of the three canonical fruit designs were used for the replacements. This
describes the method; it is not a legal certification or permission for any
other depiction. No new content license is assigned.

| Entry in `src/data/art/fruits/index.ts` | Disposition                                                                                                                                                                                                                       | Existing gate                                 |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `gum-gum-fruit`, first drawing          | Generic fruit stretched sideways. The accent follows the elongated skin; the remaining strokes give the body, short stalk/leaf, highlight, hatching and shadow. Replaces the spherical swirl-covered fruit and long curled stalk. | Episode 1 / chapter 1; no new timeline entry. |
| `flame-flame-fruit`, later drawing      | Smooth generic pear with an adjacent flame touching its lower flank. The flame is the only accent. Replaces the flame-shaped canonical body, swirls and curled stalk. The earlier kit drawing stays unchanged.                    | Episode 629 / chapter 700.                    |
| `op-op-fruit`, later drawing            | Generic fruit divided into two offset halves, with visible cut surfaces and one accented cut edge. Replaces the heart silhouette, swirls and double-curled stalk. The earlier kit drawing stays unchanged.                        | Episode 704 / chapter 765.                    |

All three retain the record's tint, absolute path commands, line-only rendering,
one accent and the 160×200 box. The new compositions have 10, 11 and 11 strokes.
Each was inspected at crest and tile size with `art:sheet`, alongside the
unchanged earlier stages. They meet the house drawing bar under the owner's
symbolic-composition exception: a substantial hero object, highlight and
hatching, ground shadow, readable silhouette and no face, emblem or lettering.

The two later stages are now labelled **Symbolic drawing / Disegno simbolico**
in the fruit-page switch. Calling these generic compositions “Real fruit” would
misrepresent them. This category is sent only when the existing stage opens.
Canonical record text, episode/chapter gates and all other illustrations are
preserved.

## Exact references and their limits

The public official character pages below are references for power concepts, not
templates for fruit shape or permission to reproduce artwork. Their current
search-index text was consulted on 2026-10-22; no direct manga-panel inspection
or full-episode viewing is claimed. These pages contain later story information,
so their links stay in this maintainer document.

| Reference                                                                | Supporting text / use                                                                                                                                                                                             |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ONE PIECE.com: Luffy](https://one-piece.com/character/luffy/index.html) | “身体がゴムのように伸び” describes rubber-like stretching. Used only for the elasticity concept; no later identity or awakening detail enters the drawing.                                                        |
| [ONE PIECE.com: Ace](https://one-piece.com/character/ace/index.html)     | “炎を操るメラメラの実” identifies the fire power. Used only for a generic flame, not the depicted physical fruit.                                                                                                 |
| [ONE PIECE.com: Law](https://one-piece.com/character/law/index.html)     | “自由自在に人体改造できる” describes the modification power. The generic separated section is a metaphor for cutting/rearrangement already represented in the unchanged earlier kit drawing, not a new technique. |

The retained gates come from the existing archive and are checked by the
server's stage-boundary tests. They do not assert that these invented generic
fruit shapes appear in the episode or manga. The
[original illustration audit](illustration-rights-audit.md) remains evidence of
the old designs, not a clearance of the untouched kit forms, other real-fruit
drawings or screenshot contents outside this bounded replacement.

## Screenshot copies and historical evidence

`docs/media/fruits-ep650.png` is refreshed from the production preview at the
same episode bookmark, with the replacement Gum-Gum drawing.

The four `docs/media/issue-500/fruits-*-before.png` / `fruits-*-after.png` paths
are also refreshed. Their new provenance and captions are in
[the screenshot notice](media/issue-500/README.md). They are current UI captures
at two scroll positions, **not reconstructed before/after proof of #500**. The
historical originals remain identifiable in Git history, rather than silently
presenting a current rerender as a historical capture. No old canonical fruit
image is retained in these five current PNGs.

## Verification

- `npm run art:sheet -- gum-gum-fruit flame-flame-fruit op-op-fruit` renders all
  five first/later drawings at crest and tile sizes.
- Fruit drawing tests check geometry and look uniqueness. Fruit-page tests check
  the symbolic switch; archive tests walk the existing boundaries in episode,
  chapter and season units, including the steps immediately before.
- Production-preview checks cover the first drawing and both later stages,
  before/at their episode and chapter thresholds, and confirm the symbolic label
  in both languages. No later stage may be sent early.
- Compare base/head `archive:table` and `--dated-only` output, keeping order and
  duplicate occurrences. No mapping or dated-entry changes are intended.
- Run `npm run check` after the screenshots and close the preview/browser before
  running the full test suite.
