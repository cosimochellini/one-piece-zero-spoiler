import * as stylex from '@stylexjs/stylex'
import { useId, useState } from 'react'

import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import { useEpisode } from '~/lib/progress/EpisodeContext'
import {
  clampEpisode,
  EPISODE_CEILING,
  FIRST_EPISODE,
  gradeEpisodeDraft,
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

/** One message per way a draft can be unusable. */
const ERROR_KEY = {
  empty: 'dial.errorEmpty',
  range: 'dial.errorRange',
  none: null,
} as const

/**
 * The one control the whole site turns on: the episode the reader has got to.
 *
 * Validation follows the touched pattern: silent until the field is blurred,
 * then live on every keystroke.
 *
 * The field is `text` with `inputMode="numeric"` rather than `number`: a
 * number input ships its own spinner, and this control already has a pair of
 * steppers with real accessible names. Two sets of steppers on one field is
 * worse than none.
 */
export function EpisodeDial() {
  const t = useT()
  const { progress, setProgress } = useEpisode()
  const fieldId = useId()
  const messageId = useId()

  const [draft, setDraft] = useState(progress === null ? '' : String(progress))
  const [touched, setTouched] = useState(false)

  // The message is withheld until the field has been blurred once, then it
  // tracks every keystroke. Complaining while someone is halfway through
  // typing "1089" is the most common form-validation mistake there is.
  const problem = touched ? gradeEpisodeDraft(draft).problem : null
  const error = ERROR_KEY[problem ?? 'none']

  const commit = (value: string) => {
    setDraft(value)
    setProgress(gradeEpisodeDraft(value).episode)
  }

  const step = (delta: number) => {
    const next = clampEpisode((progress ?? FIRST_EPISODE) + delta)
    setDraft(String(next))
    setProgress(next)
  }

  const handleClear = () => {
    setDraft('')
    setTouched(false)
    setProgress(null)
  }

  return (
    <div {...stylex.props(styles.dial)}>
      {/* Label above the field, never a placeholder standing in for one. */}
      <label htmlFor={fieldId} {...stylex.props(styles.label)}>
        {t('dial.label')}
      </label>

      <div {...stylex.props(styles.row)}>
        <Button
          variant="quiet"
          aria-label={t('dial.decrease')}
          disabled={progress !== null && progress <= FIRST_EPISODE}
          onClick={() => {
            step(-1)
          }}
        >
          −
        </Button>

        <input
          id={fieldId}
          inputMode="numeric"
          autoComplete="off"
          type="text"
          value={draft}
          aria-describedby={messageId}
          aria-invalid={error !== null}
          onChange={(event) => {
            commit(event.target.value)
          }}
          onBlur={() => {
            setTouched(true)
          }}
          {...stylex.props(styles.field, error !== null && styles.fieldInvalid)}
        />

        <Button
          variant="quiet"
          aria-label={t('dial.increase')}
          disabled={progress !== null && progress >= EPISODE_CEILING}
          onClick={() => {
            step(1)
          }}
        >
          +
        </Button>

        <Button onClick={handleClear} disabled={progress === null}>
          {t('dial.clear')}
        </Button>
      </div>

      {/*
        One slot for both the hint and the error, reserving a line of text so
        the layout does not jump the first time a message appears. `role=alert`
        is withheld until there is something to announce.
      */}
      <p
        id={messageId}
        role={error === null ? undefined : 'alert'}
        {...stylex.props(styles.message, error !== null && styles.messageError)}
      >
        {error === null
          ? t('dial.hint', { max: EPISODE_CEILING })
          : t(error, { max: EPISODE_CEILING })}
      </p>
    </div>
  )
}

const styles = stylex.create({
  dial: {
    display: 'grid',
    gap: space.xs,
    justifyItems: 'start',
  },

  label: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
  },

  row: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: space.xs,
  },

  field: {
    backgroundColor: color.paper,
    // Same width in every state, so an invalid field does not nudge the
    // steppers sideways.
    borderColor: {
      default: color.rule2,
      ':hover': color.ink2,
      ':focus': color.ink,
    },
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    color: color.ink,
    fontFamily: font.mono,
    fontSize: text.lg,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    // Matches the 44px button height exactly; a field shorter than the
    // controls beside it reads as an afterthought.
    minHeight: '44px',
    outlineColor: { default: 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    cursor: { default: 'auto', ':disabled': 'not-allowed' },
    opacity: { default: 1, ':disabled': 0.55 },
    paddingBlock: space.xs2,
    paddingInline: space.xs,
    textAlign: 'center',
    transitionDuration: dur.micro,
    transitionProperty: 'border-color',
    transitionTimingFunction: ease.out,
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
})
