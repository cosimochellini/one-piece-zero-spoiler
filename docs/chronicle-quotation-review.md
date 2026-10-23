# Chronicle quotation review

Review date: **2026-10-23**. Baseline:
`e10aac52f9fd91ae20e2e0870324856b1df733f0`. This completes the bounded editorial
review in
[#738](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/738),
which the [provenance audit](content-provenance-audit.md) opened. It is risk
reduction for the project's own research notes, not a legal certification. No
archive data, story, threshold or source URL changes.

## Scope

The corpus is every research note in `scripts/chronicle-sources.mjs`, which
`npm run docs:chronicle` renders into
[chronicle-verification.md](chronicle-verification.md): 759 notes, one per
chronicle story. Every note was scanned, not only the issue's examples or the
notes with a source marker. A note counted as quoting when it held a span in
“…”, "…", 「…」, ‘…’ or a single-quoted span.

| Marker searched    | Notes with it | Of those, quoting before |
| ------------------ | ------------: | -----------------------: |
| Qref               |           270 |                      233 |
| Long/Short Summary |           236 |                      217 |
| JP subs            |            77 |                       76 |
| subtitle(s)        |            17 |                       17 |
| transcript         |           185 |                      185 |
| VIZ                |             1 |                        1 |
| t=                 |            65 |                       65 |
| .srt               |            34 |                       29 |
| SDH                |             6 |                        6 |
| CR subs / cr/      |            18 |                       18 |
| fd/                |             2 |                        2 |

Notes without any marker were covered by the same quotation scan: wiki summaries
quoted after `Episode_N:` or `Chapter_N:`, character-page History lines and
manga lines.

## Before and after

| Measure                         | Before |  After |
| ------------------------------- | -----: | -----: |
| Notes                           |    759 |    759 |
| Notes holding a quotation       |    490 |     75 |
| Quoted spans                    |   3422 |     87 |
| Quoted words                    |  32946 |    306 |
| Notes with over 50 quoted words |    286 |      0 |
| Characters across all notes     | 457005 | 416141 |
| Notes changed by this review    |        |    493 |

## Method

1. **Inventory.** Every note's quoted spans were counted by source marker.
2. **Rewrite.** Eight agents rewrote the 490 notes holding quotation marks under
   one written rule set. Quoted dialogue, captions, transcripts and wiki or
   manga wording became a factual statement of what the source shows. Citations
   stayed: episode, chapter and page numbers, timestamps, source labels, Qref
   data, issue references, correction history, negative evidence
   ("no ズニーシャ in 751–754") and every stated uncertainty. Quoted episode
   titles were dropped, because the cited `Episode_N` page carries them;
   title-card ids such as `20x930` were kept.
3. **Compression.** 360 notes still retold a source line by line, close to its
   expression. A second pass cut each source down to the facts the filing
   argument needs, and removed any speaker the original note did not identify.
4. **Independent checks.** Separate agents compared every changed note with its
   original, and the final rounds also compared it with the story text it
   vouches for. They looked for lost evidence, unsupported claims and
   near-verbatim wording left without quotation marks. Every confirmed defect
   was fixed and the fixed notes were checked again. A script confirmed that
   every number and source label outside quotation marks in an original note is
   still in its rewrite.
5. **Unmarked copies.** A review of the pull request found six notes that
   reproduced Japanese subtitle cues without any quotation marks, and one wiki
   sentence opened with “ but closed with ’. All seven were paraphrased like the
   rest, and the three short quotations whose source the notes did not record
   (`usopp@643`, `sanji@108`, `silvers-rayleigh@398`) and `borsalino@544` lost
   their marks.
6. **Guard.** `scripts/chronicle-verification.test.mjs` now fails if a note
   holds more than two spans in “…”, "…", 「…」 or ‘…’, or one longer than 12
   words or 80 characters; a mark left open counts to the end of the note. It
   also fails if more than 30 kana or kanji sit outside 「…」, so a subtitle cue
   cannot stay unquoted; Japanese has no spaces, so the 80-character limit is
   the one that binds a 「…」 quotation. Straight single quotes are not checked,
   because they cannot be told from apostrophes; none is left in a note.

The facts were not researched again at their sources: each paraphrase restates
only what the original note recorded. Agents did the rewriting and checking
under the rules above; their prompts are kept here as the method, not as a claim
about how the historical notes were first written.

## Dispositions

| Source type in the notes                                                                              | Disposition                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One Piece Wiki summaries, History sections and chapter pages (CC BY-SA 3.0 by default; see the audit) | Paraphrased. The page URL in the Source column and the `Episode_N`, `Chapter_N` and Qref citations stay. No wiki sentence is kept verbatim, beyond short factual clauses and the kept quotations below. |
| English subtitles and transcripts (`CR subs`, `cr/…`, `fd/…`, `transcript (t=N)`, fansub transcripts) | Paraphrased, timestamps kept. Short name lines kept as listed below.                                                                                                                                    |
| Japanese subtitles (`JP N`, `N.srt`, `Prime SDH`)                                                     | Paraphrased; speaker labels such as （ワンダ） stay as labels. Short lines that are the first spoken name kept as listed below.                                                                         |
| On-screen captions                                                                                    | Kept only where the caption is the naming evidence, or where its misprint is why a story leaves a detail out.                                                                                           |
| VIZ manga text (one note, `holy@164`)                                                                 | One fragment of Chapter 251 p.9 kept as the naming proof, beside its matching subtitle fragment.                                                                                                        |
| Episode titles                                                                                        | Dropped; the cited `Episode_N` page carries them.                                                                                                                                                       |

### Kept quotations

Basis: **owner decision, 2026-10-23.** A note may keep at most two quotations of
12 words or fewer, each attributed to its source, where the exact words are the
evidence: the first time a name is spoken or printed, or wording a threshold
argument turns on. Wiki wording that remains is attributed to the cited page
under its CC BY-SA terms. This is an editorial decision, not a claim that every
retained fragment is cleared.

| Note                           | Source                                                               | What it proves                                                                                                                                                                   |
| ------------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `roronoa-zoro@377`             | One Piece Wiki (Long Summary)                                        | The Long Summary closing on Zoro’s words proves the whole scene resolves within 377 (threshold).                                                                                 |
| `usopp@115`                    | One Piece Wiki (Short Summary)                                       | The threshold argument turns on these Short Summary words: 114 only has the tide turning, 115 has the defeat.                                                                    |
| `trafalgar-law@1066`           | The project's own story wording                                      | Threshold wording: this verb is what put the story at chapter 1040 / episode 1067, above its episode.                                                                            |
| `bartholomew-kuma@377`         | One Piece Wiki (Long Summary)                                        | The Long Summary closing on Zoro’s words proves the scene resolves within 377 (threshold).                                                                                       |
| `rika@2`                       | English subtitles/transcript                                         | First on-screen speaking of Rika’s name in episode 2, the naming threshold.                                                                                                      |
| `ninjin-piiman-and-tamanegi@9` | English subtitles/transcript                                         | Tamanegi’s name (as Onion) spoken in the ep 9 fansub opening scene, the on-screen naming.                                                                                        |
| `buchi@13`                     | English subtitles/transcript                                         | Buchi’s name spoken on screen in the ep 13 fansub transcript, the naming threshold.                                                                                              |
| `sham@13`                      | English subtitles/transcript                                         | Sham’s name spoken on screen in the ep 13 fansub transcript, the naming threshold.                                                                                               |
| `fullbody@20`                  | English subtitles/transcript                                         | Fullbody names himself on screen in the ep 20 fansub transcript, the naming threshold.                                                                                           |
| `carne@21`                     | English subtitles/transcript                                         | Carne’s name spoken on screen in ep 21, the naming threshold.                                                                                                                    |
| `patty@21`                     | English subtitles/transcript                                         | Patty’s name spoken on screen by Zeff in ep 21, the naming threshold.                                                                                                            |
| `momoo@38`                     | English subtitles/transcript                                         | First line where Momoo is both on screen and named (ep 38), the threshold that moved from 32.                                                                                    |
| `holy@164`                     | Manga (VIZ Ch 251 p.9), English subtitles                            | First time Holy is named: Ohm’s line in VIZ chapter 251 p.9 and the matching line in the episode 164 subtitles.                                                                  |
| `nola@189`                     | One Piece Wiki (Char Box)                                            | The exact epithet, first spoken by a Divine Soldier at chap 267 / ep 175, where it is filed.                                                                                     |
| `nola@191`                     | One Piece Wiki (Chapter_296)                                         | Usopp’s own coinage for the tremor, the term the story uses.                                                                                                                     |
| `t-bone@261`                   | English subtitles (Funimation)                                       | Zambai’s on-screen epithet in the Funimation wording, the naming that sets the threshold at 261.                                                                                 |
| `hildon@339`                   | The project's own story wording                                      | The stand-in wording the story uses because Hogback is not filed until 340.                                                                                                      |
| `hildon@341`                   | The project's own story wording                                      | The stand-in wording the story uses because Cindry is not filed until 342.                                                                                                       |
| `buhichuck@341`                | Manga (Ch 447 p.12)                                                  | The first printing of his name, Ch 447 p.12, adapted in ep 341.                                                                                                                  |
| `buhichuck@344`                | English subtitles/transcript                                         | The group name, first spoken in the ep 344 transcript, which dates the affiliation entry.                                                                                        |
| `kumashi@345`                  | English subtitles/transcript                                         | Oye, bearsy!: the ep 345 transcript form of address that confirms he is named at 345; the zombie line: first time he is called a zombie, which sets the status change at 348.    |
| `spoil@375`                    | English subtitles/transcript                                         | First time the name Spoil is spoken on screen (Ep 375), the naming threshold.                                                                                                    |
| `gyoro-nin-and-bao@350`        | English subtitles/transcript                                         | First on-screen naming of Gyoro and Bao (Ep 350), the naming threshold.                                                                                                          |
| `jigoro@346`                   | English subtitles/transcript                                         | First time Jigoro gives his name on screen (Ep 346), the naming threshold.                                                                                                       |
| `tararan@349`                  | English subtitles/transcript                                         | First on-screen naming of Tararan (Ep 349), the naming threshold.                                                                                                                |
| `risky-brothers@370`           | English subtitles/transcript                                         | Shows the 369 naming sits only in the next-episode preview, so the threshold is 370.                                                                                             |
| `mocha@591`                    | English subtitles/transcript                                         | First time Mocha’s name is spoken on screen (Ep 591), the naming threshold.                                                                                                      |
| `rock-and-scotch@592`          | English subtitles/transcript                                         | First on-screen naming of both brothers (Ep 592), the naming threshold.                                                                                                          |
| `smiley@594`                   | English subtitles/transcript                                         | First time the name Smiley is spoken on screen (Ep 594), the naming threshold.                                                                                                   |
| `gatz@638`                     | English subtitles/transcript                                         | First time the announcer’s name is spoken on screen (ep 638), the naming threshold.                                                                                              |
| `ucy@644`                      | English subtitles/transcript                                         | First on-screen naming of the bull as Ucy (Ep 644), after 639 and 643 used only epithets.                                                                                        |
| `kelly-funk@633`               | English subtitles/transcript                                         | First time Kelly Funk’s name is spoken on screen (Ep 633), the naming threshold.                                                                                                 |
| `suleiman@633`                 | English subtitles/transcript                                         | First time Suleiman’s name is spoken on screen (Ep 633), the naming threshold, and the dub’s epithet wording.                                                                    |
| `boo@633`                      | English subtitles/transcript                                         | First time Boo’s name is spoken on screen (Ep 633), the naming threshold.                                                                                                        |
| `gambia@634`                   | English subtitles/transcript                                         | First time Gambia’s name is spoken on screen (Ep 634), the naming threshold.                                                                                                     |
| `tank-lepanto@636`             | English subtitles/transcript                                         | First time Tank Lepanto’s name is spoken on screen (Ep 636), the naming threshold.                                                                                               |
| `scarlett@651`                 | English subtitles/transcript                                         | First time her name is spoken on screen, in ep 651; it sets the naming threshold.                                                                                                |
| `demalo-black@521`             | Japanese subtitles                                                   | First time his name and epithet are spoken on screen (ep 521, 16:55); it sets the naming threshold.                                                                              |
| `ankoro@525`                   | Japanese subtitles                                                   | First time Ankoro’s name is spoken in dialogue (525, 22:07); it sets the naming threshold.                                                                                       |
| `surume@526`                   | Japanese subtitles                                                   | Luffy gives the kraken the name Surume here (526, 11:03-11:22); first spoken name, the naming threshold.                                                                         |
| `wadatsumi@526`                | Japanese subtitles                                                   | First time Wadatsumi’s name is spoken (526, 07:37), not only a speaker label; it sets the naming threshold.                                                                      |
| `megalo@532`                   | Japanese subtitles                                                   | The line that first names Megalo as the princess’s pet, at 531, which dates the affiliation.                                                                                     |
| `minister-of-the-right@532`    | Japanese subtitles                                                   | First time his title-name is spoken on screen (532, 12:08) rather than only in an SDH speaker label; it sets the naming threshold.                                               |
| `minister-of-the-left@544`     | Japanese subtitles                                                   | First time his title-name is spoken on screen (544, 14:11), after only SDH speaker labels in 531-543; it sets the naming threshold.                                              |
| `bobbin@571`                   | Japanese subtitles                                                   | First time Bobbin’s name is spoken, by Big Mom (571, 14:32-14:42); it sets the naming threshold.                                                                                 |
| `sheepshead@739`               | Japanese subtitles                                                   | First time his name is spoken on screen (739, 00:15:47) with no speaker label; it sets the naming threshold.                                                                     |
| `edward-weevil@751`            | Japanese subtitles                                                   | First time his name is spoken on screen (751, 00:17:57); it sets the naming threshold.                                                                                           |
| `shishilian@758`               | Japanese subtitles                                                   | First time his name is spoken on screen (758, 07:50); it sets the naming threshold.                                                                                              |
| `gotti@783`                    | Japanese subtitles                                                   | First spoken naming of Gotti on screen at 783 (16:01), the naming threshold.                                                                                                     |
| `pound@797`                    | Japanese subtitles                                                   | First spoken naming of Pound at 797 21:49, the naming threshold (792-796 have only speaker labels).                                                                              |
| `amande@809`                   | Japanese subtitles, English subtitles/transcript                     | First spoken naming of Amande at 809 10:11-10:24 (JP) and its English wording with the epithet; 786 has only a speaker label.                                                    |
| `amande@850`                   | Japanese subtitles                                                   | The first time her position as Minister is said, at 849, the threshold for the title.                                                                                            |
| `amande@859`                   | Japanese subtitles                                                   | Brûlée calling her big sister at 859 04:51 dates Amande as Big Mom’s daughter.                                                                                                   |
| `charlotte-opera@806`          | On-screen caption (English transcript)                               | The on-screen caption at 806 is the first naming (the spoken subtitles wait until 814), and its dropped ordinal is why the story leaves the number out.                          |
| `charlotte-opera@818`          | Japanese subtitles                                                   | The first naming of the Prisoner Library, at 819, which dates the detail the story leaves out.                                                                                   |
| `charlotte-compote@831`        | English subtitles/transcript                                         | First spoken naming of Compote at 831 06:21 (830 has no cue or caption), the naming threshold.                                                                                   |
| `charlotte-flampe@867`         | Japanese subtitles, On-screen caption (English transcript)           | The first spoken naming at 865 09:22, and the caption whose misprinted ordinal is why the daughter number is left out.                                                           |
| `randolph@792`                 | On-screen caption (English transcript)                               | The on-screen caption at 792 is the first naming (786 has only a speaker label).                                                                                                 |
| `randolph@797`                 | Japanese subtitles                                                   | First spoken naming of Randolph at 797 00:13:04.                                                                                                                                 |
| `zeus@806`                     | Japanese subtitles                                                   | First naming of Zeus in dialogue at 806 00:16:12; earlier mentions are speaker labels only.                                                                                      |
| `prometheus@806`               | Japanese subtitles                                                   | First naming of Prometheus in dialogue at 806 00:16:17; earlier mentions are speaker labels only.                                                                                |
| `napoleon@816`                 | Japanese subtitles, On-screen caption (English transcript)           | First spoken naming of Napoleon at 816 00:10:13 and his on-screen caption; earlier episodes have speaker labels only.                                                            |
| `lu-feld@830`                  | Japanese subtitles, On-screen caption (English transcript)           | First spoken naming at 830 00:10:26 and the on-screen name caption; 828 and 829 name only silhouettes and the conglomerate.                                                      |
| `jorul@836`                    | Japanese subtitles                                                   | The first spoken epithet (00:17:57) and the first spoken name (00:18:10) at 836, the naming threshold.                                                                           |
| `gion@887`                     | On-screen caption (English transcript)                               | Nobody says her name; this on-screen caption at 887 is the only naming, the threshold.                                                                                           |
| `tokikake@887`                 | On-screen caption (English transcript)                               | The JP rip has labels only; this on-screen caption at 887 is the naming threshold.                                                                                               |
| `tsurujo@899`                  | English subtitles/transcript, On-screen caption (English transcript) | Her first spoken name and on-screen name caption at 899; the 897 and 898 transcripts never name her.                                                                             |
| `urashima@902`                 | English subtitles/transcript                                         | The first time the Flower Capital (902) and the samurai class (901) are said, the thresholds for his affiliation entry.                                                          |
| `holdem@901`                   | On-screen caption (English transcript)                               | The on-screen name caption at 901 that makes it the on-screen-and-named threshold, and the Holdem spelling the story uses.                                                       |
| `speed@904`                    | On-screen caption (English transcript)                               | Her on-screen name caption at 904, the first episode where she is on screen and named (901-902 only list the name).                                                              |
| `dobon@919`                    | English subtitles/transcript, On-screen caption (English transcript) | His first spoken name and on-screen name caption at 919, the naming threshold.                                                                                                   |
| `alpacaman@929`                | On-screen caption (English transcript)                               | His on-screen name caption at 929, the naming threshold.                                                                                                                         |
| `daifugo@929`                  | On-screen caption (English transcript)                               | His on-screen name caption at 929, the naming threshold (928 never names him).                                                                                                   |
| `hotei@1023`                   | English subtitles/transcript                                         | First time the name Hotei is spoken on screen (ep 1023), the naming threshold the note argues against the wiki’s 995.                                                            |
| `shimotsuki-ushimaru@954`      | The project's own record wording (en/it)                             | The exact phrase (and its Italian counterpart in the record) is the wording the chapter-threshold argument turns on: the manga first says it at 1023, so it was cut at gate 962. |

## The issue's examples

The four entries the audit named, measured on the note before and after. Ohm's
note is filed under his dog's record, `holy@164`.

| Note             | Quoted spans | Quoted words | What the note keeps                                                                                                                                                                                              |
| ---------------- | -----------: | -----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `holy@164`       |       10 → 2 |     171 → 14 | The two naming fragments (VIZ Chapter 251 p.9 and the episode 164 subtitles); the sunset line, the chase and the lightning hedge as paraphrase, with every page, Qref and later-opening record.                  |
| `zunesha@755`    |        9 → 0 |      103 → 0 | Wanda's naming at 00:10:01, the absence of ズニーシャ and Zunesha in 751–754, the transcript and wiki facts as paraphrase, and the chapter 806 Qref.                                                             |
| `shishilian@776` |       11 → 0 |       67 → 0 | The 776.srt 14:44–16:30 exchange as reported speech, because who turns him down is the evidence: on screen Pedro tells him to back off and Nekomamushi picks Pedro, where the wiki says Nekomamushi refused him. |
| `emet@1151–1153` |       52 → 0 |      321 → 0 | Three notes that quoted 12 to 18 Crunchyroll lines each now state what each episode shows, with the `cr/` and `fd/` absence checks and the Qref data.                                                            |

## Unknown origin and limits

- The source labels `transcript (t=N)`, `cr/…`, `fd/…`, `N.srt`, `Prime SDH` and
  `CR subs` are kept exactly as recorded, because they are the evidence trail. A
  few notes name fan transcript sites ("forever dreaming" in 7, "subslikescript"
  in 5, "fansub" in 4), so some `t=N` labels appear to be topic ids on such a
  site; for the rest the origin is **unknown**. This review does not establish
  lawful access or permission for any of them, and adds no link.
- A paraphrase of translated dialogue can still be close to it in substance. The
  rewrite keeps the facts a filing needs, but it does not establish that every
  remaining clause is free of third-party expression.
- Notes that held no quotation marks were not compared against their sources;
  wording copied there without marks, if any, was not detected.
- The old wording remains in git history. This review changes the current notes
  and the generated document only.
- Out of scope: the chronicle stories themselves and other archive prose, which
  stay as the [provenance audit](content-provenance-audit.md) records them.

## Follow-ups

No new issue was opened from this review: every finding of the checks was fixed
in place. The limits above stay open as recorded, and future provenance records
remain
[#725](https://github.com/cosimochellini/one-piece-zero-spoiler/issues/725).

## Reproduce

1. On the baseline and on this change, run `npm run --silent archive:table` and
   compare the outputs: they are identical.
2. Run `npm run docs:chronicle` and then
   `npx prettier --write docs/chronicle-verification.md`, twice; the second
   round leaves the file unchanged.
3. Run `npx vitest run scripts/chronicle-verification.test.mjs`; the quotation
   test holds every note to the limits above.
