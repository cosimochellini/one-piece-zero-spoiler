import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { searchStyles as styles } from '~/components/SearchField.styles'
import { Button } from '~/components/ui/Button'

/**
 * The one control an archive listing has: a field, the × that empties it, and
 * the line saying what the query found.
 *
 * Its words are props rather than dictionary keys, which is the whole reason
 * it can be a component at all: the signal book asks for a character and the
 * specimen sheet for a fruit, and a field that knew which page it was on
 * would be two fields.
 *
 * The status line is the caller's node and not this component's, because the
 * count is over a list this component has never seen and may still be on its
 * way. Each page puts its own boundary around it, so a list that suspends
 * never takes the field down with it — an input that unmounts mid-word loses
 * the word and the focus with it.
 */
export type SearchFieldProps = {
  readonly clearLabel: string
  readonly fieldId: string
  readonly label: string
  readonly onQuery: (query: string) => void
  readonly placeholder: string
  readonly query: string
  /** The `aria-live` line under the field; the caller owns its boundary. */
  readonly status: ReactNode
}

/** The field, its clear button, and whatever line the page puts under them. */
export function SearchField({
  clearLabel,
  fieldId,
  label,
  onQuery,
  placeholder,
  query,
  status,
}: SearchFieldProps): ReactElement {
  return (
    <search {...stylex.props(styles.search)}>
      <label
        htmlFor={fieldId}
        {...stylex.props(styles.label)}
      >
        {label}
      </label>
      <div {...stylex.props(styles.fieldRow)}>
        <input
          autoComplete="off"
          id={fieldId}
          onChange={(event) => {
            onQuery(event.target.value)
          }}
          placeholder={placeholder}
          spellCheck={false}
          type="search"
          value={query}
          {...stylex.props(styles.field)}
        />
        <ClearSlot
          blank={query.trim() === ''}
          label={clearLabel}
          onClear={() => {
            onQuery('')
          }}
        />
      </div>
      {status}
    </search>
  )
}

/**
 * The × that empties the field, and the space it keeps whether or not there is
 * anything to clear.
 *
 * The slot is always in the layout, so the field beside it does not change
 * width when a query appears. The button stays mounted and is hidden with
 * `visibility`, which keeps the row's geometry identical in both states and
 * takes it out of the tab order. The `hidden` attribute alone would not: the
 * button's own `display` wins over the user agent's `[hidden]` rule.
 */
function ClearSlot({
  blank,
  label,
  onClear,
}: {
  readonly blank: boolean
  readonly label: string
  readonly onClear: () => void
}): ReactElement {
  return (
    <span {...stylex.props(styles.clearSlot)}>
      <Button
        aria-label={label}
        hidden={blank}
        onClick={onClear}
        sx={blank ? styles.clearHidden : undefined}
        variant="quiet"
      >
        ×
      </Button>
    </span>
  )
}
