# Content provenance and reuse audit

Audit date: **2026-10-20**. Baseline:
`c53d007bd78839d37f52edc467c2a8935777efc7`. This completes the bounded research
in [#719](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/719),
not rights clearance for the archive. No published prose or thresholds change.
This maintainer report and its evidence contain plot details; public credits
must be spoiler-safe separately.

The episode 1030 summaries were subsequently replaced in #739; see the
[editorial review](filler-1030-editorial-review.md). The comparisons and source
manifest below remain historical evidence for the baseline above, not updated
measurements of the replacement. The chronicle verification notes were
subsequently reviewed in #738; see the
[quotation review](chronicle-quotation-review.md).

## Historical evidence and source inventory

| Repository evidence                                                                                                               | What it establishes, and its limit                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CONTRIBUTING.md`, “The one rule”, Italian names and filler verification                                                          | Contributors are directed to the English and Italian One Piece Wikis for facts, names and thresholds. This is not permission to copy prose or proof of translation provenance.                                                                                                                                                                            |
| `scripts/wiki.mjs`                                                                                                                | Retrieves English parsed wikitext/HTML, chapter revisions and language links, plus Italian revision content. `.gate/wiki` caches never expire. This does not record the revision/date used to write each historical record. This audit uses a separate, fresh, revision-pinned cache.                                                                     |
| `scripts/verify-filler.mjs`, `src/data/filler.ts` header                                                                          | AnimeFillerList supplies classifications; Italian `tipo` resolves “anime canon”; the wikis supply titles, chapter mappings and film/special ordering. The header records one-time generation from wikis followed by hand edits. Editing does not itself remove source rights.                                                                             |
| `scripts/chronicle-sources.mjs`, generated `docs/chronicle-verification.md`                                                       | Per-story wiki URLs, factual verification notes and explicitly quoted wiki/manga/subtitle/transcript wording. “Checked twice” describes factual verification, not permission to republish wording.                                                                                                                                                        |
| [Historical PR #496](https://github.com/cosimochellini/one-piece-zero-spoiler/pull/496), merged as `7213b78`                      | Reports four writer agents, three verifier agents and 52 changed filler plot lines out of 213; its Decisions section says 25 never-Italian-released specials received project translations. `git show 7213b78:src/data/filler.ts` reproduces the original header. These historical statements do not recover agent prompts, inputs or ownership evidence. |
| [Owner's earlier sample](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/719#issuecomment-6268289470), 2026-10-19 | Reports 42 English wiki pages against 4,999 English record strings, with 26 common seven-word sequences and no shared sentence. No complete page/revision manifest, snapshots or program are attached, so that run is not independently reproduced here. It excludes Italian, later sagas and filler; its counts are not merged with this audit's.        |

No historical AI prompt history was recovered or inferred. The evidence does not
justify calling all archive prose either copied or original. The project's MIT
notice cannot grant rights the project does not control.

## Current primary terms

All sources below were accessed **2026-10-20**. Exact article/revision/API URLs,
revision timestamps and content SHA-256 hashes are in
[sources.json](content-provenance/sources.json). Policy/API access evidence and
AnimeFillerList's response hash are in
[terms-evidence.json](content-provenance/terms-evidence.json).

| Source actually evidenced                                                                                                                                | Terms and reuse disposition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [English One Piece Wiki](https://onepiece.fandom.com/wiki/Monkey_D._Luffy), episode, character, history and chapter pages used by project tools/research | [English API rightsinfo](https://onepiece.fandom.com/api.php?action=query&meta=siteinfo&siprop=rightsinfo&format=json) reports `CC-BY-SA` and points to [Fandom Licensing](https://www.fandom.com/licensing). The policy gives a default **CC BY-SA 3.0 Unported** for community text, subject to exceptions. For retained licensed wording/adaptations, track article/revision, authors through page/history attribution, license and changes, and preserve applicable ShareAlike conditions. Imported text may have additional requirements. |
| [Italian One Piece Wiki](https://onepiece.fandom.com/it/wiki/Monkey_D._Rufy), episode/name fields and summaries                                          | [Italian API rightsinfo](https://onepiece.fandom.com/it/api.php?action=query&meta=siteinfo&siprop=rightsinfo&format=json) independently reports `CC-BY-SA` and links [Italian Licensing](https://www.fandom.com/it/licensing-it). This policy also gives default **3.0 Unported**, with English terms taking precedence over translation. Italian is a separate source; an English citation does not identify it. Translating protected English expression can be an adaptation without any Italian exact match.                               |
| [AnimeFillerList One Piece guide](https://www.animefillerlist.com/shows/one-piece)                                                                       | The guide has classifications, titles, dates, contributors and a copyright footer, linking a [Privacy Policy](https://www.animefillerlist.com/privacy-policy). No general open-content license was found on this guide. The verifier uses classification facts; no permission to copy its introductory prose or its compilation/database wholesale was established. Privacy or contributor links are not reuse licenses. No conclusion that facts are protected expression or that all database extraction is cleared.                         |
| Manga/anime material named in historical notes as “VIZ”, “CR subs”, Japanese `.srt` and English transcripts                                              | [VIZ terms](https://www.viz.com/terms) were readable. [Crunchyroll terms](https://www.crunchyroll.com/terms) yielded no readable body in this browser access. Historical notes do not consistently record individual official chapter/episode URLs or transcript origin. No broad redistribution permission was established; provider labels alone do not prove lawful access or permission. Underlying dialogue/translations are a separate rights layer from wiki prose. Historical quotations were reviewed in #738.                        |

[CC BY-SA 3.0 deed](https://creativecommons.org/licenses/by-sa/3.0/) and
[legal code](https://creativecommons.org/licenses/by-sa/3.0/legalcode),
especially sections 1 and 4, explain attribution and conditions for adaptations
including translation. Attribution is not permission for unrelated underlying
material. Fandom distinguishes text from non-text media and off-wiki content.
See the separate [illustration audit](illustration-rights-audit.md) for
drawings. Nonprofit operation, AI rewriting and disclaimers provide no
third-party rights.

The independently checked per-wiki declarations corroborate a **default**, not a
warranty for each component of every page. The compared revision wikitext was
manually checked for alternative source-specific license/permission notices;
none was identified in this sample. This does not override imported quotations,
media licensing or underlying franchise rights. #720 owns broader licensing and
notice decisions; this report assigns no new license.

## Reproduction and limits of the method

From the repository root with the project's Node 24.21+ on `PATH`, Python 3 and
`curl`:

```sh
python3 docs/content-provenance/reproduce.py --self-test
python3 docs/content-provenance/reproduce.py
```

The second command imports actual TypeScript modules through the existing
`scripts/archive-loader.mjs`, selects the fields below, fetches **pinned
revision IDs**, checks content hashes and compares output to committed
[comparisons.json](content-provenance/comparisons.json). It fails on source
errors, missing pages, hash mismatches or changed local comparisons. Responses
and output stay in ignored `.gate/provenance`; deleting only that audit cache
forces a network refetch. It does not read/delete the verification tools' cache.
The baseline above permits later reproduction; future archive edits should
produce differences requiring review.

Normalization decodes HTML entities, lowercases Unicode words, uses visible
wiki-link labels, removes references/comments, HTML tags and URLs, and strips up
to twelve template levels. This is a heuristic, not a full MediaWiki renderer.
Title comparisons retain template content because release titles occur in
infoboxes. Each local segment is compared independently against its paired
source with Python `SequenceMatcher`, `autojunk=False`. `longestWords` is a
contiguous normalized run, not a plagiarism score. The output displays at most
twelve words per run but keeps the full match length and source token offset.
Human reading is needed for structure, translation and close paraphrase; low
exact overlap cannot exclude adaptation.

## Bounded comparison and expansion

This purposive early/late bilingual sample has **32 local/source pairs, 76
segments and 2,022 local word tokens**, including titles. It covers four Luffy
stories, all non-chronicle localized dossier fields for three characters, eight
numbered fillers and one film. Later stories in the East Blue character module
reach Whole Cake and Wano; this does not sample every saga's own module. The
initial filler sample was 54, 196 and 1029. Release-title matches and a six-word
Italian narrative run prompted adjacent expansion to 55–56, 197–198 and 1030;
the latter's prose overlap prompted the Film Red comparison.

Narrative totals and longest runs below exclude the separately compared titles.
The last column records human reading of the local fields and linked pinned
source passages; those semantic/structural observations are not outputs of the
comparison utility. A reviewer can inspect the named fields and source revisions
to assess those judgments independently. Paths are under `src/data/records/`
except `src/data/filler.ts`.

| Fields and corresponding wiki pages, both locales                                        | Words EN / IT | Longest run EN / IT | Human comparison and disposition                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------- | ------------: | ------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `east-blue.chronicle.ts`, `monkey-d-luffy@1.body`; Episode/Episodio 1                    |     109 / 109 |               3 / 4 | Same barrel/Koby/Alvida events, different compression, narration and sentence structure. Local EN/IT closely follow each other; translation direction/history unknown. No distinctive extended source wording identified in this pair.                                                                                        |
| Same module, `monkey-d-luffy@126.body`; Episode/Episodio 126                             |      96 / 100 |               3 / 3 | Shared defeat/rain facts. Local opening recalls earlier fights; no extended matching sentence identified in this pair.                                                                                                                                                                                                        |
| Same module, `monkey-d-luffy@869.body`; Episode/Episodio 869                             |      98 / 102 |               4 / 3 | Shared future-sight/fight facts and names; expanded local internal narration. No extended matching wording identified; token overlap cannot determine adaptation.                                                                                                                                                             |
| Same module, `monkey-d-luffy@916.body`; Episode/Episodio 916                             |     110 / 111 |               2 / 3 | Same confrontation/capture; compressed local account. No distinctive extended wording identified in this pair.                                                                                                                                                                                                                |
| `east-blue.ts`, Luffy dossier excluding `chronicle`; Monkey D. Luffy / Monkey D. Rufy    |       81 / 91 |               4 / 5 | Roles, powers and ambition are shared concepts, not proof of copied prose. Compared to main pages, not every English `/History` subpage.                                                                                                                                                                                      |
| `wano.ts`, `tama` dossier excluding `chronicle`; Kurozumi Tama                           |       71 / 82 |               5 / 4 | Shared village/food/fruit facts, different narrative organization. Short proper-name/formulaic matches do not establish a copying history.                                                                                                                                                                                    |
| `whole-cake.ts`, `jack` dossier excluding `chronicle`; Jack                              |       80 / 79 |               3 / 5 | Shared affiliation/attack facts, different local imagery and structure; no distinctive extended wording identified.                                                                                                                                                                                                           |
| `filler.ts`, summaries 54–56; Episode/Episodio 54–56                                     |     106 / 100 |         6 / 6 (max) | 54 follows the factual escape/rescue/return-home/Calm Belt sequence. The six-word Italian run is “fugge da una nave della marina”, a stock escape description; insufficient to identify protected copied expression in context. Adjacent 55–56 reveal no longer run. Retain uncertainty.                                      |
| Same file, summaries 196–198; Episode/Episodio 196–198                                   |       86 / 89 |         5 / 5 (max) | Shared infiltration/cook/medical events, much shorter local lines. No extended prose match identified after expansion.                                                                                                                                                                                                        |
| Same file, summary 1029; Episode/Episodio 1029                                           |       36 / 33 |               4 / 3 | Shared childhood meeting/flashback. No extended narrative run; origin of parallel local EN/IT wording remains unknown.                                                                                                                                                                                                        |
| Same file, summary 1030; Episode/Episodio 1030                                           |       31 / 33 |          **10** / 3 | English local and wiki Long Summary share “the world with Shanks and bringing joy with her singing”. This goes beyond a title/name. Local Italian conveys the same sentence: possible adapted wording, not certified original. **Historical wording replaced in [#739's editorial review](filler-1030-editorial-review.md).** |
| Same file, Film Red summary (`kind: film`, `after: 1027`); One Piece Film: Red / Film 15 |       36 / 35 |               6 / 3 | Expanded after 1030: shared concert/singer/parentage setup, no seven-word narrative run. No further distinctive overlap identified; not clearance for every film/special.                                                                                                                                                     |

The episode-1 ship setting illustrates source uncertainty: the English Long
Summary describes a cruise ship boarded by pirates; the Italian introduction
also names a cruise ship, while its manga/anime-differences section instead
names Alvida’s ship. This audit does not resolve that inconsistency from an
independently viewed episode or certify factual accuracy from similarity alone.

Eight numbered release titles were compared separately in both languages.
English title runs are 7–12 words; Italian 198, 1029 and 1030 have 8–10 word
runs. These are sourced release identifiers, not proof that surrounding prose is
independently written. Shorter Italian matches do not make those titles
project-owned. A wiki can itself quote third-party release wording. **Do not
relicense official titles as original project prose**; #720/#721 must preserve
that distinction.

AnimeFillerList was additionally read against these eight numbered entries: each
is classified as filler there, agreeing with local `kind`. The guide has
titles/classifications, not these episode plot summaries; its short series
introduction differs from the sampled prose. This manual comparison does not
audit the whole compilation or establish database reuse permission.

## Dispositions and uncovered material

| Concrete finding / affected files                                                                                                                                                                 | Disposition                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Possible adapted English episode 1030 summary and its Italian counterpart, `src/data/filler.ts`                                                                                                   | [#739](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/739): both summaries replaced after fact-checking the official episode synopsis; [decision and limits](filler-1030-editorial-review.md). Historical wording is not retroactively cleared or relabelled as original.                       |
| Extended third-party quotation sequences in `scripts/chronicle-sources.mjs` and generated `docs/chronicle-verification.md`; examples `ohm@164`, `zunesha@755`, `shishilian@776`, `emet@1151–1153` | [#738](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/738): extended wording replaced with factual paraphrase, citations kept, brief name/threshold proofs left by owner decision; [coverage and dispositions](chronicle-quotation-review.md). Historical wording is not retroactively cleared. |
| General MIT notice does not distinguish software, release wording and potentially adapted narrative                                                                                               | Existing [#720](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/720), informed by this inventory. No blanket content license assigned here.                                                                                                                                                      |
| A verification log does not supply public attribution, article/history links, license and modification notices                                                                                    | Existing [#721](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/721): spoiler-safe presentation, distinct Italian source credit and notices for retained licensed/adapted wording.                                                                                                               |
| Future submissions lack consistent provenance/rights records                                                                                                                                      | Existing [#725](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/725): separate facts, exact wording, translation/adaptation and permission evidence.                                                                                                                                             |

Open and historical issues were searched for quotation/transcript/provenance and
filler-rights/editorial work before creating #738/#739. They cover distinct
historical-corpus and single-entry remediation, not #720/#721/#725's structural
work or #726's mirror-link cleanup.

Unreviewed material remains **unreviewed**: other chronicle modules, dossier
records/places/fruits/ships, other filler/recap/film/special summaries, the 25
project-translated special titles, undocumented sources and the source revisions
actually used at generation time. No complete sentence-level or cross-language
archive audit was performed. No further specific problem was identified in the
other sampled narrative pairs. That does not clear unsampled material or make
this an exhaustive inventory of historical sources. The concrete remediation
tickets stay open after #719 closes.
