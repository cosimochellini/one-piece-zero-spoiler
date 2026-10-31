---
name: tone-of-voice
description: How Zero Spoiler's text is written, in English and Italian. Load it before writing or editing any user-facing words: the dictionaries in src/i18n/dictionaries (the site's and each series' own), the README, record summaries and chronicle stories in src/data/series/<series>/records, page titles and meta descriptions, aria labels. Also load it when reviewing copy for AI-sounding writing.
---

# Zero Spoiler tone of voice

The site is a set of wikis, one per series (One Piece, Hunter x Hunter,
Game of Thrones), each hiding what the reader has not reached yet. The text
exists to explain that and to get out of the way. Everything here holds for
every series; each one's names and terms follow, under
[Each series](#each-series). It should read like
it was written by a careful person who knows the series, not by a model trying
to sound evocative.

## Voice

- **Neutral and dry.** Clear, functional, like good documentation. No jokes,
  no winks, no hype.
- **Talk to the reader directly**: "you" in English, informal "tu" in Italian.
- **Short declarative sentences.** One idea per sentence. Say what happens,
  not how it should feel.
- **The site is not a character.** It does not wait, promise, remember or
  care. Write "Hidden entries are not in the page you receive", not "The wiki waits
  for you".
- **Claims about the site are exact.** Say "more likely to open late than
  early", not "never opens too early", unless the code guarantees it. Check the
  sentence next to it: an absolute in one FAQ answer must not be undone by the
  next one.
- **Plain nouns for pages and sections**: Characters, Places, Devil fruits,
  All characters, Story so far.

## One image: the fog

"Under fog" / "nella nebbia" is the one metaphor, and it means exactly one
thing: hidden until the reader's bookmark reaches it. The drawings use it too,
so the words and the pictures agree.

Use no other nautical imagery in copy. There is no "signal book", no
"specimen sheet", no "ship's log", no "ports of call", no "sailing nearby".
One Piece's drawings can keep their sea chart; the words describe the
content, in every series.

## Glossary

One term per concept, in both languages. Do not alternate synonyms for variety.

| Concept | English | Italiano |
|---|---|---|
| the reader's position | bookmark | segnalibro |
| hidden | under fog | nella nebbia |
| not hidden (counts, search status) | open | visibile |
| reveal one entry | Show anyway / Show | Mostra comunque / Mostra |
| story section (a series with arcs) | arc | saga (never "arco") |
| a record's first appearance | first appears in episode N | compare per la prima volta nell'episodio N |
| a fruit's first mention | first named in episode N | nominato per la prima volta nell'episodio N |
| any item in the wiki | entry | voce |
| the whole site | the wiki | la wiki |
| top-bar nav (short form, space is tight) | Fruits | Frutti |
| loading state | Loading… / Loading characters… | Caricamento… / Caricamento dei personaggi… |

Never "filed" / "archiviato" for when something appears. It is internal
jargon for the data model, not a word a reader uses.

## Each series

Each series' own copy lives in `src/i18n/dictionaries/<series>/`, and its
records in `src/data/series/<series>/records`. In Italian, every series'
names follow the Italian dub; Game of Thrones' book-only names are the
exception below.

### One Piece

Italian uses the names from the Italian dub: Rufy, Bagy, Zoo Zoo, Rotta
Maggiore, Gom Gom. The comment above `fruitForm.zoan` in `one-piece/it.ts` explains why.
The dub wins over the Star Comics manga when they differ: "Grande Flotta di
Cappello di Paglia" (the dub title of episode 745), not the manga's
"Megaflotta". Where the dub's spelling has not been checked, the Star Comics
one stands in until it is (the Italian One Piece Wiki's page title).

### Hunter x Hunter

Italian follows the dub of the 2011 anime, as Italian Wikipedia gives it:
there is no Italian Hunter x Hunter wiki (owner, 2026-10-24).

### Game of Thrones

Its two media are the HBO show and the five books, and a reader counts in
one of them (owner, #844). Its copy is `src/i18n/dictionaries/game-of-thrones/`
and its records `src/data/series/game-of-thrones/records/season-N.ts`;
`npx vitest run src/i18n/translate.test.ts` checks the dictionaries, and
`npm run check` everything.

- **Names.** "Game of Thrones" in English, "Il Trono di Spade" in Italian.
  Italian names follow the Italian TV dub, as Italian Wikipedia gives them.
  A name or fact only the books have takes the current Mondadori edition's
  translation (owner, #851).
- **Units.** "the show" / "la serie", "the books" / "i libri", "season" /
  "stagione", "episode" / "episodio", "book" / "libro", "chapter" /
  "capitolo". A season is "Season N" / "Stagione N". A book is "book N" /
  "libro N", counting the five English books, never the volumes an Italian
  edition splits them into. When prose names a book, it gives the English
  title in italics (*A Game of Thrones*) in both languages (owner, #851).
- **No arcs.** The series files no arcs, so its copy never says "arc",
  "saga" or "arco". A stretch of the story is a season or a book.
- **No nautical imagery.** The fog is still the one image, and nothing
  else from the sea comes with it: no voyage, no course, no port.

## Two languages, both native

Each dictionary key means the same thing in `en.ts` and `it.ts`, but neither
is translated from the other. Write each one the way a native speaker would say
it on that screen.

- A calque is a bug. "Dirado…", "Niente dell'archivio è ancora archiviato qui"
  and "Leggo il foglio…" are English sentences with Italian words.
- Italian typography: typographic apostrophe `’`, quotes `“ ”`.
- Keep every `{placeholder}`; the dictionary test checks that both languages
  carry the same set.
- Check that `…One` / plural key pairs are grammatical in both languages.
- In Italian, avoid gendered adjectives that describe a character whose gender
  the string cannot know ("Irreperibile", not "Scomparsa").

## Patterns to avoid

Each one below was in the old copy.

| Pattern | Before | After |
|---|---|---|
| Em dash as a pause | "one set too low lifts the fog early — the only bug here that matters" | Two sentences. |
| Punchy fragments in threes | "No account, no tracking." | "There is no account and no tracking." |
| Flourish closers | "Nothing is shut away for good" | Cut it; say what the button does. |
| Personification | "The wiki stops where you stopped" | "The One Piece wiki without spoilers" |
| Cute loading lines | "The shelves are on their way…" | "Loading characters…" |
| Metaphor as label | "The specimen sheet" | "Devil fruits" |
| Design narrative in the UI | a colophon that names the fonts and explains the sea chart | What the reader needs: original drawings, cookie, licence. |
| "Not just X, but Y" | | Say Y. |
| Marketing verbs | discover, unlock, dive in, scopri, immergiti | Say what the page shows. |
| Exclamation marks | | None. |

## UI constraints

- Buttons: three words or fewer, not counting an interpolated value such as
  `· EP 650`. `veil.revealShort` is one short word; it sits
  on the smallest tiles.
- `mark.unset` has to fit the top bar at 390px.
- Section ledes: two lines on desktop at most. If one needs a third, cut a
  clause. The landing page lede, which explains the bookmark, may run longer.
- Titles: `Page | Zero Spoiler`, with a pipe. The home page puts the site name
  first: `Zero Spoiler | The One Piece wiki without spoilers`.
- An `aria-label` built in code from two strings is joined with ". ", never an
  em dash.

## README

The same voice. Keep facts, numbers, commands and code exactly right. Headings
say what the section is about ("Hidden content stays on the server"),
not a slogan. When the README quotes the site (a `<title>`, a screenshot
caption), it quotes the current copy.

## Records: summaries and chronicle stories

These live in `src/data/series/<series>/records` and are written in the same voice.

- Facts only. Say what happens; add no commentary about how moving, tragic or
  iconic it is.
- Keep one tense per text. Stories use the present tense.
- Use the glossary names and each series' own (dub names in Italian).
- The spoiler rules still apply, and the tests enforce them: a text may only
  name characters and facts the reader has reached at its threshold. This skill
  covers wording only.
- The existing records predate this skill and have not been migrated; some
  still use em dashes. Apply the rules to any text you write or edit, and
  leave untouched stories alone unless the task is to rewrite them.

## Enforcement

`src/i18n/translate.test.ts` ("the tone of voice") fails on an em dash, an
exclamation mark, or any banned phrase in either dictionary. The en dash stays
allowed, for ranges such as `{first}–{last}`. The banned list lives in that
test and nowhere else. When a new habit starts showing up, add it there, as a
whole-word pattern.

Some rules are left to review, because a pattern would reject ordinary text:
"arco" (the idiom "nell’arco di" is fine), the README, and the records.
Dictionary key names such as `legend.filed` are identifiers, not copy, and
are exempt.
