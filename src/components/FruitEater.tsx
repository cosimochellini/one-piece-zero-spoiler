import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { Marked } from '~/components/CharacterCard'
import { CharacterCrest } from '~/components/CharacterCrest'
import { useLocale } from '~/i18n/LocaleContext'
import { useDrawing } from '~/lib/view/drawings'
import type { EaterView } from '~/lib/view/records'
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

/**
 * Who ate the fruit: one eater's crest and name, a link to their page, and
 * "+N" for the other eaters the reader has reached. A screen reader hears the
 * count as a sentence. Covered eaters are never sent, so they add nothing:
 * no crest, no number and no height.
 *
 * A crest the list left behind is drawn, seal and all, once its strokes
 * arrive. Until then the box keeps its size and holds nothing: the seal is
 * 1.5 KB of markup, and sixty of them would undo what deferring the strokes
 * saves.
 */
export function FruitEater({
  eater,
  highlight,
  more,
}: {
  eater: EaterView
  highlight: [number, number] | null
  more: number
}): ReactElement {
  const { locale, t } = useLocale()
  const { ref, strokes } = useDrawing(eater.id, eater.visual)
  const drawn = eater.visual.deferred !== true || strokes.length > 0

  return (
    <div {...stylex.props(styles.eaters)}>
      <Link
        params={{ locale, id: eater.id }}
        to="/$locale/characters/$id"
        {...stylex.props(styles.eater)}
      >
        <span
          ref={ref}
          {...stylex.props(styles.crest)}
        >
          {drawn ?
            <CharacterCrest visual={{ ...eater.visual, strokes }} />
          : null}
        </span>
        <span {...stylex.props(styles.eaterName)}>
          <Marked
            span={highlight}
            text={eater.name}
          />
        </span>
      </Link>
      {more < 1 ? null : (
        <span {...stylex.props(styles.more)}>
          <span aria-hidden="true">{`+${String(more)}`}</span>
          <span {...stylex.props(styles.hidden)}>
            {more === 1 ?
              t('fruits.moreEatersOne')
            : t('fruits.moreEaters', { count: more })}
          </span>
        </span>
      )}
    </div>
  )
}

const styles = stylex.create({
  eaters: {
    alignItems: 'center',
    columnGap: space.xs,
    display: 'flex',
    minWidth: 0,
  },
  // A phone's tap target is 44px tall at least, and the crest sits inside it.
  eater: {
    borderRadius: radius.card,
    alignItems: 'center',
    color: { 'default': color.ink2, ':hover': color.accent },
    columnGap: space.xs,
    display: 'flex',
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    minHeight: '44px',
    minWidth: 0,
  },
  crest: { flexShrink: 0, height: '1.75rem', width: '1.75rem' },
  eaterName: {
    fontSize: text.xs,
    fontWeight: 600,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  more: {
    color: color.muted,
    flexShrink: 0,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
  },
  // Out of sight and still read: the count as a sentence.
  hidden: {
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    position: 'absolute',
    whiteSpace: 'nowrap',
    height: '1px',
    width: '1px',
  },
})
