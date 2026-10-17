import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  color,
  dur,
  ease,
  font,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/** One option: what it says, the number beside it if any, and its value. */
export interface Choice<V extends string> {
  count?: number
  disabled?: boolean
  label: string
  value: V
}

/** A named group of options, exactly one of them picked. */
export interface ChoiceGroupProps<V extends string> {
  choices: Choice<V>[]
  /** The group's name for a screen reader; it is not painted. */
  legend: string
  /**
   * `segments` is a segmented control, the options joined in one track, for
   * a switch between views; `chips` sets each option apart, with its count,
   * for a filter.
   */
  look: 'chips' | 'segments'
  name: string
  onChoose: (value: V) => void
  value: V
}

/**
 * A segmented control or a group of chips: one set of native radio buttons
 * in a fieldset, so the group has a name, Tab lands on the picked option and
 * the arrow keys move between them, all from the browser.
 *
 * The radio itself is invisible and laid over its label, which carries every
 * state: hover, focus-visible (the ring is the label's), pressed, picked (a
 * fill and, on a chip, a filled dot, so colour is never the only signal) and
 * disabled. A pick changes nothing until the page reacts to it, so there is
 * no loading, error or success state to show.
 */
export function ChoiceGroup<V extends string>({
  choices,
  legend,
  look,
  name,
  onChoose,
  value,
}: ChoiceGroupProps<V>): ReactElement {
  const chips = look === 'chips'

  return (
    <fieldset {...stylex.props(styles.group)}>
      <legend {...stylex.props(styles.legend)}>{legend}</legend>
      <div {...stylex.props(styles.row, !chips && styles.track)}>
        {choices.map((choice) => {
          return (
            <Option
              key={choice.value}
              chips={chips}
              choice={choice}
              name={name}
              onChoose={onChoose}
              picked={choice.value === value}
            />
          )
        })}
      </div>
    </fieldset>
  )
}

/** One option: the invisible radio, and the label that shows its state. */
function Option<V extends string>({
  choice,
  chips,
  name,
  onChoose,
  picked,
}: Pick<ChoiceGroupProps<V>, 'name' | 'onChoose'> & {
  chips: boolean
  choice: Choice<V>
  picked: boolean
}): ReactElement {
  const disabled = choice.disabled === true
  const counted = choice.count !== undefined

  return (
    <label
      {...stylex.props(
        styles.option,
        chips ? styles.chip : styles.segment,
        picked && pickedStyle(chips),
        disabled && styles.disabled,
      )}
    >
      <input
        checked={picked}
        disabled={disabled}
        name={name}
        onChange={() => {
          onChoose(choice.value)
        }}
        type="radio"
        value={choice.value}
        {...stylex.props(styles.radio)}
      />
      {chips ?
        <span
          aria-hidden="true"
          {...stylex.props(styles.dot, picked && styles.dotPicked)}
        />
      : null}
      {choice.label}
      {/* A space, so the name reads "Zoan 31"; flex drops it from the layout
          and the gap spaces the count. */}
      {counted ?
        <>
          {' '}
          <span {...stylex.props(styles.count)}>{choice.count}</span>
        </>
      : null}
    </label>
  )
}

const styles = stylex.create({
  group: { padding: 0, borderStyle: 'none', minWidth: 0 },
  // Visually hidden, still the group's accessible name.
  legend: {
    padding: 0,
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    position: 'absolute',
    whiteSpace: 'nowrap',
    height: '1px',
    width: '1px',
  },
  row: { gap: space.xs, display: 'flex', flexWrap: 'wrap' },
  track: {
    borderColor: color.rule2,
    borderRadius: radius.input,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    gap: 0,
    display: 'inline-flex',
  },
  option: {
    gap: space.xs,
    paddingInline: space.sm,
    alignItems: 'center',
    color: {
      'default': color.ink2,
      ':active:not(:has(:disabled))': color.ink,
      ':hover:not(:has(:disabled))': color.accent,
    },
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    outlineColor: {
      'default': 'transparent',
      ':has(:focus-visible)': color.focus,
    },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    // Reserved at rest, so the ring costs no layout.
    outlineWidth: rule.fine,
    position: 'relative',
    transform: {
      'default': 'none',
      ':active:not(:has(:disabled))': 'translateY(1px)',
    },
    transitionDuration: dur.micro,
    transitionProperty: 'color, border-color, background-color, transform',
    transitionTimingFunction: ease.out,
    whiteSpace: 'nowrap',
    minHeight: '44px',
  },
  chip: {
    borderColor: {
      'default': color.rule2,
      ':hover:not(:has(:disabled))': color.ink,
    },
    borderRadius: radius.input,
    borderStyle: 'solid',
    // Constant in every state; a pick changes colour, never width.
    borderWidth: rule.fine,
    backgroundColor: {
      'default': 'transparent',
      ':active:not(:has(:disabled))': color.paper3,
    },
  },
  chipPicked: {
    borderColor: color.accent,
    backgroundColor: color.paper3,
    color: color.ink,
  },
  // The track carries the border, so a segment's ring sits inside it.
  segment: {
    backgroundColor: {
      'default': 'transparent',
      ':active:not(:has(:disabled))': color.paper3,
    },
    outlineOffset: `calc(-1 * ${rule.fine})`,
    minWidth: '44px',
  },
  segmentPicked: {
    backgroundColor: color.paper3,
    boxShadow: `inset 0 calc(-1 * ${rule.fine}) 0 ${color.accent}`,
    color: color.ink,
  },
  disabled: { cursor: 'not-allowed', opacity: 0.55 },
  // Over the whole label, so a tap anywhere on it lands on the radio.
  radio: {
    inset: 0,
    margin: 0,
    appearance: 'none',
    cursor: 'inherit',
    opacity: 0,
    position: 'absolute',
  },
  dot: {
    borderColor: 'currentColor',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: rule.fine,
    flexShrink: 0,
    height: '0.625rem',
    width: '0.625rem',
  },
  dotPicked: { borderColor: color.accent, backgroundColor: color.accent },
  count: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
  },
})

/** How a picked option looks: a chip lights its border, a segment fills. */
function pickedStyle(chips: boolean): stylex.StyleXStyles {
  return chips ? styles.chipPicked : styles.segmentPicked
}
