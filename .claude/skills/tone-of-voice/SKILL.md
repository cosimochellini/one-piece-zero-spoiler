---
name: tone-of-voice
description: How Zero Spoiler's text is written, in English and Italian. Load it before writing or editing any user-facing words: the dictionaries in src/i18n/dictionaries, the README, record summaries and chronicle stories in src/data/records, page titles and meta descriptions, aria labels. Also load it when reviewing copy for AI-sounding writing.
---

# Zero Spoiler tone of voice

The site is a One Piece wiki that hides what the reader has not reached yet.
The text exists to explain that and to get out of the way. It should read like
it was written by a careful person who knows the series, not by a model trying
to sound evocative.

## Voice

- **Neutral and dry.** Clear, functional, like good documentation. No jokes,
  no winks, no hype.
- **Talk to the reader directly**: "you" in English, informal "tu" in Italian.
- **Short declarative sentences.** One idea per sentence. Say what happens,
  not how it should feel.
- **The site is not a character.** It does not wait, promise, remember or
  care. Write "Hidden entries never reach your browser", not "The wiki waits
  for you".
- **Plain nouns for pages and sections**: Characters, Places, Devil fruits,
  All characters, Story so far.

## One image: the fog

"Under fog" / "nella nebbia" is the one metaphor, and it means exactly one
thing: hidden until the reader's bookmark reaches it. The drawings use it too,
so the words and the pictures agree.

Use no other nautical imagery in copy. There is no "signal book", no
"specimen sheet", no "ship's log", no "ports of call", no "sailing nearby".
The drawings can keep their sea chart; the words describe the content.

## Glossary

One term per concept, in both languages. Do not alternate synonyms for variety.

| Concept | English | Italiano |
|---|---|---|
| the reader's position | bookmark | segnalibro |
| hidden | under fog | nella nebbia |
| reveal one entry | Show anyway / Show | Mostra comunque / Mostra |
| story section | arc | saga (never "arco") |
| a record's first appearance | first appears in episode N | compare per la prima volta nell'episodio N |
| a fruit's first mention | first named in episode N | nominato per la prima volta nell'episodio N |
| any item in the wiki | entry | voce |
| the whole site | the wiki | la wiki |
| loading state | Loading… / Loading characters… | Caricamento… / Caricamento dei personaggi… |

Never "filed" / "archiviato" for when something appears. It is internal
jargon for the data model, not a word a reader uses.

Italian uses the names from the Italian dub: Rufy, Bagy, Zoo Zoo, Rotta
Maggiore, Gom Gom. The comment above `fruitForm.zoan` in `it.ts` explains why.

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

- Buttons: three words or fewer. `veil.revealShort` is one short word; it sits
  on the smallest tiles.
- `mark.unset` has to fit the top bar at 390px.
- Ledes: two lines on desktop at most. If it needs a third, cut a clause.
- Titles: `Page | Zero Spoiler`, with a pipe.
- An `aria-label` built in code from two strings is joined with ". ", never an
  em dash.

## README

The same voice. Keep facts, numbers, commands and code exactly right. Headings
say what the section is about ("Hidden content never reaches the browser"),
not a slogan. When the README quotes the site (a `<title>`, a screenshot
caption), it quotes the current copy.

## Records: summaries and chronicle stories

These live in `src/data/records` and are written in the same voice.

- Facts only. Say what happens; add no commentary about how moving, tragic or
  iconic it is.
- Keep one tense per text. Stories use the present tense.
- Use the glossary names (dub names in Italian).
- The spoiler rules still apply, and the tests enforce them: a text may only
  name characters and facts the reader has reached at its threshold. This skill
  covers wording only.

## Enforcement

`src/i18n/translate.test.ts` ("the tone of voice") fails on an em dash, an
exclamation mark, or any banned phrase in either dictionary. The banned list
lives in that test and nowhere else. When a new habit starts showing up, add it
there.
