# Public sources and licenses (#721)

Implemented on 23 October 2026. `/it/legal` and `/en/legal` (the single legal
page) are linked from the shared footer. The page follows the owner's decision:
one public notice with entry references filtered by the bookmark on the server.
Software and original technical documentation retain MIT; no new blanket license
is assigned to archive text, illustrations, branding or third-party material.

## Coverage and provenance

The page publishes the existing bounded
[#719 audit](content-provenance-audit.md), not a new archive-wide rights
finding. `credits.server.ts` reads the original
[source manifest](content-provenance/sources.json); its pinned revisions are not
copied into the client or replaced with guessed article addresses.

The complete anime-bookmark list contains 17 local-material references and 33
source links: three sampled character records, four sampled stories, eight
numbered filler entries, one film, and the replacement summary from
[#739](filler-1030-editorial-review.md). Both wiki locales remain distinct
sources. For episode 1030 the wiki references identify only the release title;
the replacement summaries identify the official synopsis separately and state
the changes in both languages. No blanket open-content permission is claimed for
that synopsis, AnimeFillerList, official titles or underlying One Piece rights.

These are documented comparisons and fact checks, not a declaration that all
sampled prose is independent or that the wiki pages are the recovered historical
writing inputs. The audit's identified possible adaptation was replaced in #739;
no other retained adaptation was verified by that bounded audit. Historical
quotations were reduced in #738 ([review](chronicle-quotation-review.md)), other
unresolved provenance remains as documented by #719/#720, and future provenance
records remain #725. Do not silently classify unreviewed text as original or as
licensed adaptations to fill this list.

The source notice links
[Fandom's licensing policy](https://www.fandom.com/licensing), its
[Italian version](https://www.fandom.com/it/licensing-it), and
[CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/).
Fandom's Attribution section permits links to contributed articles as author
attribution. Each sampled wiki source links directly to its pinned article
revision and credits the appropriate wiki's contributors, rather than relying on
a generic home-page link. The source license is explicitly distinguished from
the local archive's licensing scope. Source terms were rechecked against
Fandom's primary policy and the CC legal code on 23 October 2026; the per-wiki
and per-page evidence remains the dated #719 inventory, with its stated limits.

## Spoiler boundary

- `loadCredits` accepts only the locale and reads the effective bookmark from
  the request, using the same validator and cookie/trial handling as other
  archive server functions. Client-supplied bookmark fields cannot select data.
- Record references use `readerFor().sees`; story references use their existing
  combined character/story gate. Filler references reuse `rowOf` and its
  episode/chapter/film gates. No second gate table is maintained.
- The server sends only open references. It sends no covered names, source URLs,
  source titles, inventory keys, hashes, comparison excerpts or hidden DOM rows.
  No bookmark gives an empty reference array and still renders the general
  notice.
- Links use the manifest's numeric `oldid` addresses. In particular, a canonical
  wiki title can reveal a later identity even after the character first opens;
  the source title and canonical address are never sent. Visible names come from
  the same gated local records already used by the archive.
- External sources may reveal later information after navigation. The public
  page warns before the links; external sites cannot inherit this site's
  bookmark filtering. Metadata stays generic and localized at every bookmark.
- Do not link the public page directly to the plot-bearing audit, comparison
  corpus or editorial report. They remain maintainer evidence in the repository.

Any future verified adaptation needs its exact local fields, applicable source
terms, author attribution, supplied notices and change notice recorded together.
Its complete required credit must open no later than the material it credits. If
a mandatory title or notice would spoil at that point, withhold the affected
material or resolve its publication before shipping; never remove a required
notice or send it hidden. This rule does not predeclare unreviewed prose
licensed.

## Verification

Run `npm run check`. The credits payload participates in the ordinary payload
spoiler sweep. Dedicated tests cover no bookmark, both locales, record and story
boundaries in episodes and chapters, season equivalence, numeric addresses, and
the separate title/summary references around episode 1030. Component tests cover
the public notice, footer link and source attribution rendering.

The archive gate also scans client scripts for all 32 source revision URLs and
the official synopsis URL. Its tests exercise a leaked source-link build and
missing evidence. Public policy copy can increase the measured client ceiling
with approximately 1 KB headroom; private references remain server-only.

Production-preview checks inspect raw HTML, metadata and rendered links at no
bookmark and early/late bookmarks in both locales, including the record and
replacement boundaries. Screenshots cover mobile and desktop. Existing payloads
and archive chapter/episode mappings are compared separately; only the newly
registered credits payload is expected to add data. No archive prose,
thresholds, drawings or dated entries are changed by this task.
