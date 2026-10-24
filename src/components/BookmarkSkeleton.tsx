import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import {
  color,
  font,
  leading,
  radius,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * The form's place while its code is on the way: the same blocks where the
 * unit control, the number between its steppers, the saga line and Save
 * will be, so nothing moves when the form arrives. The blocks are hidden from
 * assistive technology, which is told the form is loading instead.
 */
export function BookmarkSkeleton(): ReactElement {
  const t = useT()
  const hasBookmark = useBookmark().bookmark !== null

  return (
    <div {...stylex.props(styles.skeleton)}>
      <p
        role="status"
        {...stylex.props(styles.hidden)}
      >
        {t('dialog.loading')}
      </p>
      <div
        aria-hidden="true"
        {...stylex.props(styles.blocks)}
      >
        <div {...stylex.props(styles.group)}>
          <span {...stylex.props(styles.block, styles.legend)} />
          <span {...stylex.props(styles.block, styles.track)} />
        </div>
        <div {...stylex.props(styles.counter)}>
          <span {...stylex.props(styles.block, styles.label)} />
          <div {...stylex.props(styles.stepper)}>
            <span {...stylex.props(styles.block, styles.step)} />
            <span {...stylex.props(styles.block, styles.number)} />
            <span {...stylex.props(styles.block, styles.step)} />
          </div>
          <span {...stylex.props(styles.block, styles.saga)} />
          <span {...stylex.props(styles.block, styles.hint)} />
        </div>
        <div {...stylex.props(styles.actions)}>
          <span {...stylex.props(styles.block, styles.save)} />
          {hasBookmark && (
            <span {...stylex.props(styles.block, styles.forget)} />
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Something could not be fetched (the form, by default): it says so, and
 * offers to ask again.
 */
export function LoadFailed({
  message = 'dialog.loadFailed',
  onRetry,
  retry = 'dialog.retry',
}: {
  message?: TranslationKey
  onRetry: () => void
  retry?: TranslationKey
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.failed)}>
      <p
        role="alert"
        {...stylex.props(styles.message)}
      >
        {t(message)}
      </p>
      <Button onClick={onRetry}>{t(retry)}</Button>
    </div>
  )
}

// A slow breath of opacity, compositor-only. Reduced motion holds it still.
const breathe = stylex.keyframes({
  from: { opacity: 1 },
  to: { opacity: 0.45 },
})

const styles = stylex.create({
  skeleton: { display: 'grid' },
  // Out of sight and still read: the one line a screen reader gets.
  hidden: {
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    position: 'absolute',
    whiteSpace: 'nowrap',
    height: '1px',
    width: '1px',
  },
  blocks: { gap: space.lg, display: 'grid' },
  block: {
    borderRadius: radius.input,
    animationDirection: 'alternate',
    animationDuration: '900ms',
    animationIterationCount: 'infinite',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': breathe,
    },
    animationTimingFunction: 'ease-in-out',
    backgroundColor: color.rule,
    display: 'block',
  },
  // Each block is sized to the control it stands for: the line of a label,
  // the 44px segments plus their track, the 56px steppers, the numeral at
  // its display size, the saga line, the 52px Save.
  group: { gap: space.xs, display: 'grid' },
  legend: { height: '1.25rem', width: '6rem' },
  track: { borderRadius: radius.card, height: '50px' },
  counter: { gap: space.xs, display: 'grid', justifyItems: 'center' },
  label: { height: '1.25rem', maxWidth: '80%', width: '14rem' },
  stepper: { gap: space.md, alignItems: 'center', display: 'flex' },
  step: { borderRadius: radius.pill, height: '56px', width: '56px' },
  number: {
    height: `calc(${text.display} * 1.1)`,
    width: `calc(${text.display} * 2.6)`,
  },
  saga: { marginBlock: space.xs2, height: text.xs, width: '10rem' },
  hint: { marginBlock: space.xs2, height: text.base, width: '6rem' },
  actions: { gap: space.xs, display: 'grid', justifyItems: 'center' },
  // The forget line is there only when there is a bookmark to forget.
  forget: { marginBlock: space.sm, height: text.base, width: '10rem' },
  save: { borderRadius: radius.input, height: '52px', width: '100%' },

  failed: {
    gap: space.md,
    paddingBlock: space.xl,
    display: 'grid',
    justifyItems: 'center',
  },
  message: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    textAlign: 'center',
  },
})
