import * as stylex from '@stylexjs/stylex'
import { useRouter } from '@tanstack/react-router'
import { useEffect, useId, useRef, useState } from 'react'
import type { MouseEvent, SyntheticEvent } from 'react'

import { Button } from '~/components/ui/Button'
import { SEASONS, type Season } from '~/data/seasons'
import { useT } from '~/i18n/LocaleContext'
import type { Translate, TranslationKey } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import {
  draftOf,
  gradeDraft,
  stepperOf,
  type BookmarkMode,
  type Draft,
  type DraftProblem,
} from '~/lib/progress/episode'
import {
  color,
  dur,
  ease,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

const MODES: readonly BookmarkMode[] = ['episode', 'season', 'chapter']

const MODE_KEY: Readonly<Record<BookmarkMode, TranslationKey>> = {
  episode: 'dialog.modeEpisode',
  season: 'dialog.modeSeason',
  chapter: 'dialog.modeChapter',
}

const FIELD_KEY: Readonly<Record<BookmarkMode, TranslationKey>> = {
  episode: 'dialog.episodeLabel',
  season: 'dialog.seasonEpisodeLabel',
  chapter: 'dialog.chapterLabel',
}

/** One message per way a draft can be unusable. */
const ERROR_KEY: Readonly<Record<DraftProblem, TranslationKey>> = {
  empty: 'dialog.errorEmpty',
  range: 'dialog.errorRange',
  season: 'dialog.errorSeason',
}

export type BookmarkDialogProps = {
  /** Called once the dialog has closed, however it closed. */
  readonly onClose: () => void
}

/**
 * Where the reader says how far they have got.
 *
 * A native `<dialog>` opened with `showModal()`: the browser puts it in the
 * top layer, makes the page behind it inert, closes it on Escape and gives
 * focus back to the mark that opened it. Nothing here re-implements any of
 * that. A click on the backdrop closes it too, which is why the dialog
 * itself has no padding — a click on padding would count as a click inside.
 *
 * The draft is local until Save. Switching the unit empties the field
 * rather than converting: an episode is not a chapter, and a number carried
 * across would be a guess dressed as a fact. Validation follows the touched
 * pattern: silent until the field is blurred, then live on every keystroke.
 */
export function BookmarkDialog({ onClose }: BookmarkDialogProps) {
  const t = useT()
  const router = useRouter()
  const { bookmark, setBookmark } = useBookmark()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const ledeId = useId()

  const [draft, setDraft] = useState<Draft>(() => draftOf(bookmark))
  const [touched, setTouched] = useState(false)

  // A DOM call, not state: the element exists only while this component is
  // mounted, so opening it once on mount is the whole lifecycle.
  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  const graded = gradeDraft(draft)
  const problem = touched ? graded.problem : null

  const close = () => {
    dialogRef.current?.close()
  }

  const chooseMode = (mode: BookmarkMode) => {
    setDraft({ mode, season: '', number: '' })
    setTouched(false)
  }

  const chooseSeason = (season: string) => {
    setDraft({ ...draft, season, number: '' })
    setTouched(false)
  }

  const save = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (graded.bookmark === null) return
    setBookmark(graded.bookmark)
    // The root route read the old cookie for this document; a fresh load
    // lets a page whose <head> depends on it (a character's title) catch up.
    void router.invalidate()
    close()
  }

  const forget = () => {
    setBookmark(null)
    void router.invalidate()
    close()
  }

  const onBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close()
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={ledeId}
      onClose={onClose}
      onClick={onBackdrop}
      {...stylex.props(styles.dialog)}
    >
      <form onSubmit={save} {...stylex.props(styles.form)}>
        <div {...stylex.props(styles.head)}>
          <h2 id={titleId} {...stylex.props(styles.title)}>
            {t('dialog.title')}
          </h2>
          <p id={ledeId} {...stylex.props(styles.lede)}>
            {t('dialog.lede')}
          </p>
        </div>

        <ModeChooser mode={draft.mode} onChoose={chooseMode} />

        {draft.mode === 'season' && (
          <SeasonPicker season={draft.season} onChoose={chooseSeason} />
        )}

        <NumberField
          draft={draft}
          problem={problem}
          onChange={(number) => {
            setDraft({ ...draft, number })
          }}
          onBlur={() => {
            setTouched(true)
          }}
        />

        <div {...stylex.props(styles.actions)}>
          <Button type="submit" disabled={graded.bookmark === null}>
            {t('dialog.save')}
          </Button>
          <Button onClick={forget} disabled={bookmark === null}>
            {t('dialog.forget')}
          </Button>
          <Button onClick={close} sx={styles.cancel}>
            {t('dialog.cancel')}
          </Button>
        </div>
      </form>
    </dialog>
  )
}

/**
 * The three units as a segmented control: three radios, each drawn by the
 * label beside it, so the keyboard and the screen reader get a real radio
 * group and the eye gets three cells with one of them marked.
 */
function ModeChooser({
  mode,
  onChoose,
}: {
  readonly mode: BookmarkMode
  readonly onChoose: (mode: BookmarkMode) => void
}) {
  const t = useT()
  const name = useId()

  return (
    <fieldset {...stylex.props(styles.modes)}>
      <legend {...stylex.props(styles.label)}>{t('dialog.modeLabel')}</legend>
      <div {...stylex.props(styles.modeRow)}>
        {MODES.map((candidate) => (
          <label key={candidate} {...stylex.props(styles.mode)}>
            <input
              type="radio"
              name={name}
              value={candidate}
              checked={mode === candidate}
              onChange={() => {
                onChoose(candidate)
              }}
              {...stylex.props(styles.radio)}
            />
            <span {...stylex.props(styles.modeLabel)}>
              {t(MODE_KEY[candidate])}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

/** The season, as a `<select>` with an empty first option: nothing is assumed. */
function SeasonPicker({
  season,
  onChoose,
}: {
  readonly season: string
  readonly onChoose: (season: string) => void
}) {
  const t = useT()
  const id = useId()

  return (
    <div {...stylex.props(styles.group)}>
      <label htmlFor={id} {...stylex.props(styles.label)}>
        {t('dialog.seasonLabel')}
      </label>
      <select
        id={id}
        value={season}
        onChange={(event) => {
          onChoose(event.target.value)
        }}
        {...stylex.props(styles.field, styles.select)}
      >
        <option value="">{t('dialog.seasonPlaceholder')}</option>
        {SEASONS.map((candidate) => (
          <option key={candidate.number} value={String(candidate.number)}>
            {seasonOption(t, candidate)}
          </option>
        ))}
      </select>
    </div>
  )
}

/**
 * The number itself: a text field with `inputMode="numeric"` between two
 * steppers, and one line below for the hint or the error. `type="text"`
 * rather than `number` because a number input ships its own spinner, and
 * two sets of steppers on one field is worse than none.
 */
function NumberField({
  draft,
  problem,
  onChange,
  onBlur,
}: {
  readonly draft: Draft
  readonly problem: DraftProblem | null
  readonly onChange: (number: string) => void
  readonly onBlur: () => void
}) {
  const t = useT()
  const id = useId()
  const messageId = useId()
  const { ceiling, atFloor, atCeiling, stepped } = stepperOf(draft)
  const error = problem === null ? null : ERROR_KEY[problem]
  const disabled = ceiling === null

  return (
    <div {...stylex.props(styles.group)}>
      <label htmlFor={id} {...stylex.props(styles.label)}>
        {t(FIELD_KEY[draft.mode])}
      </label>
      <div {...stylex.props(styles.row)}>
        <Button
          variant="quiet"
          aria-label={t('dialog.decrease')}
          disabled={disabled || atFloor}
          onClick={() => {
            onChange(stepped(-1))
          }}
        >
          −
        </Button>
        <input
          id={id}
          inputMode="numeric"
          autoComplete="off"
          type="text"
          value={draft.number}
          disabled={disabled}
          aria-describedby={messageId}
          aria-invalid={error !== null}
          onChange={(event) => {
            onChange(event.target.value)
          }}
          onBlur={onBlur}
          {...stylex.props(
            styles.field,
            styles.number,
            error !== null && styles.fieldInvalid,
          )}
        />
        <Button
          variant="quiet"
          aria-label={t('dialog.increase')}
          disabled={disabled || atCeiling}
          onClick={() => {
            onChange(stepped(1))
          }}
        >
          +
        </Button>
      </div>
      {/*
        One slot for both the hint and the error, reserving a line of text so
        the layout does not jump the first time a message appears.
        `role=alert` is withheld until there is something to announce.
      */}
      <p
        id={messageId}
        role={error === null ? undefined : 'alert'}
        {...stylex.props(styles.message, error !== null && styles.messageError)}
      >
        {messageFor(t, error, ceiling)}
      </p>
    </div>
  )
}

/** The hint when nothing is wrong, the error when something is. */
function messageFor(
  t: Translate,
  error: TranslationKey | null,
  ceiling: number | null,
): string {
  if (error !== null) return t(error, { max: ceiling ?? 0 })
  if (ceiling === null) return t('dialog.errorSeason')

  return t('dialog.hint', { max: ceiling })
}

function seasonOption(t: ReturnType<typeof useT>, season: Season): string {
  return season.last === null
    ? t('dialog.seasonOptionOpen', {
        season: season.number,
        first: season.first,
      })
    : t('dialog.seasonOption', {
        season: season.number,
        first: season.first,
        last: season.last,
      })
}

// The dialog surfaces rather than slides: a short fade and a small rise, both
// compositor properties, and none of it under reduced motion.
const surface = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(8px)' },
  to: { opacity: 1, transform: 'none' },
})

const styles = stylex.create({
  // Pinned by hand rather than left to the UA: `margin: auto` on a fixed,
  // inset-zero box centres it, and `height: fit-content` keeps it from
  // stretching to the viewport. The top layer ignores `z-index`.
  dialog: {
    '::backdrop': {
      backgroundColor: color.scrim,
    },
    animationDuration: dur.short,
    animationName: {
      default: 'none',
      '@media (prefers-reduced-motion: no-preference)': surface,
    },
    animationTimingFunction: ease.out,
    backgroundColor: color.paper2,
    borderColor: color.rule2,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    color: color.ink,
    height: 'fit-content',
    inset: 0,
    margin: 'auto',
    maxHeight: 'min(80dvh, 40rem)',
    overflow: 'auto',
    padding: 0,
    position: 'fixed',
    width: 'min(calc(100% - 2rem), 28rem)',
  },
  // Tighter on a phone, where 80dvh is not much taller than the form: every
  // rem of padding is a rem the actions lose before the box has to scroll.
  form: {
    display: 'grid',
    gap: { default: space.md, '@media (min-width: 40rem)': space.lg },
    padding: { default: space.md, '@media (min-width: 40rem)': space.xl },
  },
  head: {
    display: 'grid',
    gap: space.xs,
  },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  lede: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
  },

  modes: {
    borderStyle: 'none',
    display: 'grid',
    gap: space.xs,
    margin: 0,
    minWidth: 0,
    padding: 0,
  },
  modeRow: {
    display: 'grid',
    gap: space.xs2,
    gridTemplateColumns: {
      default: 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'repeat(3, minmax(0, 1fr))',
    },
  },
  mode: {
    display: 'grid',
    position: 'relative',
  },
  // The input is present for the keyboard and the screen reader and drawn
  // by its sibling: the checked and focused states are read off it there.
  radio: {
    height: '1px',
    inset: 0,
    margin: 0,
    opacity: 0,
    position: 'absolute',
    width: '1px',
  },
  modeLabel: {
    alignItems: 'center',
    borderColor: {
      default: color.rule2,
      ':is(input:checked + &)': color.accent,
      ':is(input:focus-visible + &)': color.accent,
      ':is(label:hover > &)': color.ink,
    },
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    color: {
      default: color.ink2,
      ':is(input:checked + &)': color.ink,
    },
    cursor: 'pointer',
    display: 'flex',
    fontSize: text.base,
    fontWeight: 600,
    justifyContent: 'center',
    lineHeight: leading.heading,
    minHeight: '44px',
    outlineColor: {
      default: 'transparent',
      ':is(input:focus-visible + &)': color.focus,
    },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    paddingBlock: space.xs,
    paddingInline: space.sm,
    textAlign: 'center',
    transitionDuration: dur.micro,
    transitionProperty: 'color, border-color',
    transitionTimingFunction: ease.out,
  },

  group: {
    display: 'grid',
    gap: space.xs,
    justifyItems: 'start',
  },
  label: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    padding: 0,
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: space.xs,
  },
  field: {
    backgroundColor: color.paper,
    borderColor: {
      default: color.rule2,
      ':hover': color.ink2,
      ':focus': color.ink,
    },
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    color: color.ink,
    cursor: { default: 'auto', ':disabled': 'not-allowed' },
    fontFamily: font.mono,
    fontSize: text.lg,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    // Matches the 44px button height exactly; a field shorter than the
    // controls beside it reads as an afterthought.
    minHeight: '44px',
    opacity: { default: 1, ':disabled': 0.55 },
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    paddingBlock: space.xs2,
    paddingInline: space.xs,
    transitionDuration: dur.micro,
    transitionProperty: 'border-color',
    transitionTimingFunction: ease.out,
  },
  select: {
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    maxWidth: '100%',
    width: '100%',
  },
  number: {
    textAlign: 'center',
    // 5ch holds the ceiling plus a digit of headroom without the field
    // stretching to fill the row. The padding and the border are added on
    // top: the width is the border box, and '5ch' alone clipped '1100'.
    width: `calc(5ch + ${space.md} + ${space.xs2})`,
  },
  fieldInvalid: {
    borderColor: color.accent,
  },
  message: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    // Reserves the line whether or not there is a message in it.
    minHeight: '1lh',
  },
  messageError: {
    color: color.accent,
    fontWeight: 600,
  },

  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: space.xs,
  },
  cancel: {
    marginInlineStart: { default: 0, '@media (min-width: 40rem)': 'auto' },
  },
})
