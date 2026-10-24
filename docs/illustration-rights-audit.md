# Illustration and branding rights-risk inventory (#724)

Reviewed 2026-10-20 against `a63f0729b5284c0c48f5af3dad214142359f349e`. This is
a bounded evidence inventory for a private individual in Italy running an
international, non-revenue fan project. It is not legal certification, a finding
of infringement, or permission to reuse a third party's design. Nonprofit
operation, AI rewriting and a disclaimer do not establish rights.

## Method and coverage

Read the drawing registry and family exports, the fruit kit, map outlines,
`.claude/skills/line-drawings/SKILL.md`, `docs/thriller-bark-drawing-audit.md`,
branding SVG sources and their consumers. The registry contains **737 first
drawings and 308 later entries**. Counts include repeated return drawings as
separate dated entries; they do not count map outlines. This audit visually
inspected **45 distinct first drawings and 28 later entries**, plus all **38**
`ISLES` outlines. It did not inspect the other 692 first drawings or 280 later
entries, nor compare the archive against all manga/anime frames. No sample
establishes clearance for its family.

Representative selection was reproducible rather than a claim of statistical
coverage: first, middle (`floor(length / 2)`) and last key in each exported
`*Art` object, in file insertion order. Rendered these 39 first drawings as a
scratch default-export `Record<string, Stroke[]>` with `art:sheet --draft`.
Drafts share the first record's tint; geometry is unchanged. Separately rendered
all 20 Luffy entries and targeted records at their actual tints. Inspected every
listed cell at both crest and tile sizes, including each flagged entry in the
targeted sheet. These renders test appearance, not provenance or permission.

| Family file under `src/data/art/` | First / later inventory | Representative first drawings inspected                                            |
| --------------------------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| `east-blue.ts`                    | 68 / 69                 | `east-blue`, `ninjin-piiman-and-tamanegi`, `lord-of-the-coast`                     |
| `alabasta.ts`                     | 54 / 39                 | `reverse-mountain`, `chess`, `nico-robin`                                          |
| `skypiea.ts`                      | 44 / 16                 | `jaya-arc`, `enel`, `nola`                                                         |
| `water-seven.ts`                  | 51 / 36                 | `jaguar-d-saul`, `post-enies-lobby`, `thatch`                                      |
| `thriller-bark.ts`                | 23 / 17                 | `thriller-bark-arc`, `yorki`, `risky-brothers`                                     |
| `summit-war.ts`                   | 80 / 20                 | `trafalgar-law`, `vasco-shot`, `shiki`                                             |
| `fish-man-island.ts`              | 34 / 7                  | `return-to-sabaody`, `ikaros-much`, `bobbin`                                       |
| `dressrosa.ts`                    | 68 / 20                 | `koala`, `machvise`, `diez-barrels`                                                |
| `whole-cake.ts`                   | 67 / 21                 | `gerd`, `carmel`, `tokikake`                                                       |
| `wano.ts`                         | 57 / 35                 | `wano`, `sasaki`, `kazenbo`                                                        |
| `egghead.ts`                      | 39 / 14                 | `egghead`, `hibari`, `emet`                                                        |
| `elbaf.ts`                        | 24 / 3                  | `elbaf`, `biblo`, `blade`                                                          |
| `fruits/index.ts`                 | 128 / 11                | `gum-gum-fruit`, `ripple-ripple-fruit`, `dragon-dragon-fruit-mythical-model-kirin` |

Additional first drawings: `monkey-d-luffy`, `going-merry`, `thousand-sunny`,
`franky`, `flame-flame-fruit`, `op-op-fruit`. Later entries inspected: all 19
Luffy entries, all four Franky entries, one each for Merry, Flame-Flame, Op-Op
and Law. A separate source-risk check inspected the Risky Brothers' 375/483
stage too. Thus the main sample/flag batch covers 27 later entries, and the
extra reference check brings the total to 28.

Local evidence (generated files are ignored, with no source scans added):

- `npm run art:sheet -- monkey-d-luffy --draft .gate/art/rights-sample.ts --out .gate/rights-sample`
  produced three pages; inspected all three.
- `npm run art:sheet -- enel emet going-merry thousand-sunny franky gum-gum-fruit flame-flame-fruit op-op-fruit trafalgar-law egghead --out .gate/rights-flags`
  produced one 18-cell page; inspected each cell.
- `npm run art:sheet -- risky-brothers --out .gate/rights-reference` produced
  the first drawing and restoration stage; inspected both.
- Imported `ISLES` via `scripts/archive-loader.mjs`, rendered every path on
  white with its id using `rsvg-convert`; inspected `.gate/isles.png`. This
  shows the outlines, not the entire live chart or every geographic arrangement.
- Rendered `docs/media/hero-banner.svg` and `scripts/og-card.svg` with
  `rsvg-convert`; inspected both and the raster inventory described below.

The representative draft can be reconstructed without maintaining another tool:
import each family above using `importArchive`, select its export whose name
ends in `Art`, take the three keys at indices `0`, `floor(length / 2)`,
`length - 1`, then write their stroke arrays to a scratch default export. Use
the existing `art:sheet` command for colour-correct crest/tile rendering.

## Observed categories and dispositions

A generic object can be drawn independently; a distinctive fictional design can
remain recognisable in fresh vector paths. In this sample, the barrel
(`thriller-bark-arc`), shears (`koala`), bottle (`vasco-shot`), chest
(`diez-barrels`) and ruler/set square (`blade`) use familiar object geometry.
The kit/power metaphors such as `ripple-ripple-fruit` are compositions rather
than direct depictions of a shown fruit. These are lower-concern observations,
not proof of independent authorship or a decision about all similar assets.

The following are **specific review flags**, based on visible combinations and
source comments. Every flagged item was inspected in the targeted sheet or
labelled map render; all its existing art stages were included. No matching
source-frame overlay or creator provenance record was available, so **possible
close reproduction/tracing remains untested**, not established or ruled out. A
handwritten `d` path, lack of embedded images, a fresh style, or an AI author
cannot settle that question. No official Jolly Roger, series wordmark, or
lettered emblem was observed in the inspected cells; that is not an archive-wide
logo search or trademark clearance.

| Flag | Exact assets / observed evidence                                                                                                                                                                                                                                                                                                                                                       | Required disposition and bounded follow-up                                                                                                                                                                                                                                                                                                                                                                  |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| F1   | `fruits/index.ts`: `gum-gum-fruit` first drawing; `flame-flame-fruit` 629/700 and `op-op-fruit` 704/765 stages. Curled stalk/swirl skin and story-specific silhouettes, deliberately identified as real fruits by the workflow. Earlier kit forms were inspected separately and are not being treated as identical designs.                                                            | Permission, reasoned owner/professional review, or independently composed generic alternatives. [#732](https://github.com/cosimochellini/zero-spoiler/issues/732) tracks all three entries and their screenshot copies.                                                                                                                                                                                     |
| F2   | `skypiea.ts`: `enel` drum-ring/staff; `egghead.ts`: `emet` horned robot helmet; `water-seven.ts`: `franky` mechanical forearm/star and all four stages; `summit-war.ts`: `trafalgar-law` spotted hat/sword and 584/659 stage; `east-blue.ts`: `monkey-d-luffy` banded hat plus all 19 costume/identity stages. A star or hat alone is generic; the named combinations motivate review. | Review the five ensembles and all listed stages; permission, documented reasoned assessment, or generic replacement. [#733](https://github.com/cosimochellini/zero-spoiler/issues/733). No claim that every other costume in the archive is cleared.                                                                                                                                                        |
| F3   | `east-blue.ts`: `going-merry` first and damaged 312/430 stage retain curled prow/hull ensemble. `water-seven.ts`: `thousand-sunny` has circular maned figurehead/hull. No flag emblem is drawn, but distinctive ship structure remains.                                                                                                                                                | Review both ship designs, with permission/assessment/replacement recorded for each stage. [#734](https://github.com/cosimochellini/zero-spoiler/issues/734), including copies in committed screenshots.                                                                                                                                                                                                     |
| F4   | `egghead.ts`: `egghead` broken-shell landmark. `isles.ts`: `water-seven` concentric city, `enies-lobby` ring/hole/gate, `zou` elephant-supported island and `egghead-island` elevated landmark. Simplification does not itself settle rights in a fictional place.                                                                                                                     | Review these five entries individually, with permission/assessment/alternative documented. [#735](https://github.com/cosimochellini/zero-spoiler/issues/735). Other outlines and world-layout rights remain unassessed.                                                                                                                                                                                     |
| F5   | Workflow research step recommends search-engine thumbnails and manga-page checks without recording the reference owner's authorization or retained evidence. Search results and wiki galleries establish neither permission nor a tracing conclusion.                                                                                                                                  | [#725](https://github.com/cosimochellini/zero-spoiler/issues/725) aligned [CONTRIBUTING.md](../CONTRIBUTING.md#sources-and-rights) and the line-drawing workflow: lawful access, exact reference, original drawing and AI disclosure, no committed reference images, owner decision for a distinctive design. The skill's research step was rewritten there.                                                |
| F6   | Thriller Bark audit linked two third-party Blogspot manga-image pages and described scan-based frame inspection. No authorization evidence accompanied them.                                                                                                                                                                                                                           | Links replaced here with official volume/access citations; historical observation retained and clearly not reverified from licensed interiors. [#726](https://github.com/cosimochellini/zero-spoiler/issues/726) covers historical GitHub copies; [#725](https://github.com/cosimochellini/zero-spoiler/issues/725) set lawful future rechecks in [CONTRIBUTING.md](../CONTRIBUTING.md#sources-and-rights). |
| F7   | Social card says “A One Piece wiki that stops where you do” without an unofficial qualifier; README has a disclaimer but standalone previews can omit it.                                                                                                                                                                                                                              | [#723](https://github.com/cosimochellini/zero-spoiler/issues/723) should include preview text/source/raster in its affiliation wording check. [#727](https://github.com/cosimochellini/zero-spoiler/issues/727) covers domain naming. No assertion of actual consumer confusion or registered-mark clearance.                                                                                               |

## Committed raster material and branding

`git ls-files` lists **22 PNGs under `docs/media/`**, plus
`public/apple-touch-icon.png`, `public/og-card.png`, and `public/favicon.ico`.
Loaded all 25 into a labelled browser contact sheet, inspected every thumbnail;
checked the SVG sources separately. The 22 documentation images are six root
screenshots (`bookmark-dialog`, `characters-ep650`, `fog-before`, `fog-after`,
`fruits-ep650`, `home-ep650`) and the 16 `issue-500` screenshots (characters,
filler, fruits, places × 320/1280 × before/after).

Observed app interfaces, project line drawings and text; no full manga-page
scan, anime frame or photograph was observed. Contact-sheet inspection is not
pixel-level comparison with external works. It cannot establish provenance of
every small embedded drawing or clearance of screenshot text (wiki-derived prose
is tracked in
[#719](https://github.com/cosimochellini/zero-spoiler/issues/719)). F1 and F3
follow-ups explicitly include visible derivative screenshot copies; a changed
source drawing alone does not change a committed PNG. Preserve clear historical
captions when retaining before/after evidence.

`public/icon.svg` and its raster icon variants show a compass/star on a dark
rounded tile. `scripts/og-card.svg` / `public/og-card.png` combine the compass
with a fading route and plain “Zero Spoiler” typography.
`docs/media/hero-banner.svg` combines plain typography, a generic sailboat, a
route and stars. No One Piece skull emblem or official series wordmark was
observed in these assets. The visual compositions present lower concern than the
flagged fictional designs; no reverse-image search or trademark register search
was performed. Series naming and the unqualified preview description still
warrant F7's affiliation review. The installed tool skill's
`.agents/skills/firecrawl-lean/docs/assets/firecrawl-lean-mark.svg` is a tooling
asset outside the app illustration/media scope, not project branding.

The README/footer promise of project-made art describes execution, not rights in
every depicted subject. Keep “no official artwork” precise: the inspected raster
files do not show scans, but distinctive designs remain in SVG form. Do not turn
this report into a blanket rights claim. License boundaries and published
notices remain tracked in
[#720](https://github.com/cosimochellini/zero-spoiler/issues/720) and
[#721](https://github.com/cosimochellini/zero-spoiler/issues/721).

## References and provenance

Sources checked 2026-10-20; no copyrighted source images were added as evidence.

- [ONE PIECE.com volume 50](https://one-piece.com/comics/o50/index.html)
  identifies chapters 482–491 in its current search-index extract (direct
  retrieval returned 403).
  [Authorized English publisher/distributor listing](https://www.simonandschuster.com/books/One-Piece-Vol-50/Eiichiro-Oda/One-Piece/9781421534664)
  identifies VIZ's edition. These replace the Thriller Bark mirror
  recommendations, not the missing licensed panel check. Access/territory
  availability must be checked by the reader.
- The removed Blogspot references ended in `one-piece-chapter-482.html` and
  `one-piece-chapter-481.html`. The first returned HTTP 429; the second exposed
  a chapter image index with numerous image links and no permission evidence in
  retrieved text. Prior notes report misleading URL/chapter numbers. This is
  evidence of a questionable reference and incomplete provenance, not a fresh
  image verification or definitive ruling that the operator lacked
  authorization. Do not restore the links or download their source images.
- [ONE PIECE.com FAQ](https://one-piece.com/faq/index.html) and
  [site terms](https://one-piece.com/agreement/index.html): current search-index
  extracts limit character/image use to legally permitted uses and prohibit
  unlawful reproduction, modification and distribution. Direct retrieval
  returned 403, so no full-term compliance assessment is claimed. Neither
  extract supplies a fan-art license for these assets.
- [Italian Law 633/1941, official portal](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1941-04-22;633)
  and [EU Directive 2001/29](https://eur-lex.europa.eu/eli/dir/2001/29/oj/eng)
  are primary legal starting points for professional review, not a claim that
  any particular exception applies here. Italian and international distribution
  questions are unresolved; this audit does not substitute US “fair use” for an
  Italian analysis.
- Git history and source comments show drawings implemented as project stroke
  data; they do not provide a complete source-image log, permission record,
  author declaration or comparison against original designs.
  `docs/thriller-bark-drawing-audit.md` is a scene/stage audit, not a rights
  grant. Wiki prose/gallery citations are research leads, not permissions.

The four new asset follow-ups (#732–#735) are `status:needs-decision`: the owner
must choose assessment/permission or authorize a departure from canonical
depiction rules before implementation. They include concrete questions and
recommendations. This audit authorizes no canonical-design replacements.

The follow-ups require a recorded outcome for every flag. Opening a ticket does
not resolve underlying rights uncertainty. Retained assets are not cleared by
this report, and pending owner/professional decisions remain visible in the
linked issues.
