# Coding standards

Use existing patterns and the smallest complete change. Mechanical rules live in
the compiler, ESLint, Prettier, tests and quality gates (`npm run check`).

## Review rules

- Preserve the [spoiler contract](docs/architecture.md#spoiler-contract): hidden
  content stays server-side, including ids, drawings, search terms and metadata.
- Read owner decisions in the issue/PR before reporting a defect. An accepted
  drawing grade or deferred epic child is not missing work; accepted B-grade
  aesthetics are P3 at most. Report new correctness or spoiler bugs on impact.
- Keep docs, counts and PR claims consistent with the actual change.
- Preserve accessible keyboard interaction, focus, covered-content semantics and
  theme contrast when changing UI.

## Only when relevant

- **User-facing copy and README:** follow
  [tone-of-voice](.claude/skills/tone-of-voice/SKILL.md).
- **Drawings:** follow [line-drawings](.claude/skills/line-drawings/SKILL.md).
  Invented details, spoilers (including incorrect episode/chapter pairs), faces,
  logos, lettering, regressions, unreadability at 56 px and untested house-style
  breaks are defects. Other aesthetic preferences below A grade are P3 at most.
- **Fruit drawings:** `ivory` intentionally resolves to `color.ink2`. Use
  `shadowUnder()` from the fruit parts module; the generic `shadow()` emits a
  relative command rejected by fruit path tests.
- **Archive text, research or artwork:** follow
  [Sources and rights](CONTRIBUTING.md#sources-and-rights).
