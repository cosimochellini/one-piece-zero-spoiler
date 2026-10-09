import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { episodesLabel } from '~/components/fillerLabels'
import { useT } from '~/i18n/LocaleContext'
import type { BookmarkMode } from '~/lib/progress/episode'
import type { SkipRange } from '~/lib/view/filler'
import { color, font, radius, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The runs that can be skipped whole, each a link down to the first of its
 * rows in the catalogue. Numbers only, so they are on the page at every
 * bookmark.
 */
export function FillerRanges({
  mode,
  ranges,
}: {
  mode: BookmarkMode
  ranges: SkipRange[]
}): ReactElement {
  const t = useT()

  return (
    <ol {...stylex.props(styles.ranges)}>
      {ranges.map((range) => {
        const count = range.last - range.first + 1

        return (
          <li key={range.first}>
            <a
              href={`#ep-${String(range.first)}`}
              {...stylex.props(styles.range)}
            >
              <span {...stylex.props(styles.span)}>
                {episodesLabel(t, mode, range)}
              </span>
              <span {...stylex.props(styles.count)}>
                {count === 1 ?
                  t('filler.skipCountOne')
                : t('filler.skipCount', { count })}
              </span>
            </a>
          </li>
        )
      })}
    </ol>
  )
}

const styles = stylex.create({
  ranges: {
    margin: 0,
    gap: space.xs,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(11rem, 1fr))',
    listStyleType: 'none',
    paddingInlineStart: 0,
  },
  range: {
    borderColor: { 'default': color.rule, ':hover': color.accent },
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.xs3,
    paddingBlock: space.xs,
    paddingInline: space.sm,
    backgroundColor: color.paper2,
    color: color.ink,
    display: 'grid',
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  span: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.base,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    whiteSpace: 'nowrap',
  },
  count: { color: color.muted, fontSize: text.xs },
})
