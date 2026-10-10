import * as stylex from '@stylexjs/stylex'
import type { MouseEvent, ReactElement } from 'react'

import { episodesLabel, openTo } from '~/components/fillerLabels'
import { useT } from '~/i18n/LocaleContext'
import type { BookmarkMode } from '~/lib/progress/episode'
import type { SkipGroup } from '~/lib/view/filler'
import {
  color,
  font,
  radius,
  rule,
  space,
  text,
  z,
} from '~/styles/tokens.stylex'

/** Opens the saga a link points into, before the browser follows it. */
function follow(event: MouseEvent<HTMLAnchorElement>): void {
  openTo(event.currentTarget.hash.slice(1))
}

/**
 * The runs that can be skipped whole, grouped by the saga they air in, the
 * saga's name pinned to the top of the screen while its runs scroll under
 * it. Each run links down to its first row in the catalogue, opening the
 * saga there if it is closed. Numbers only, so they are on the page at every
 * bookmark; a saga's name waits for the saga.
 */
export function FillerRanges({
  groups,
  mode,
}: {
  groups: SkipGroup[]
  mode: BookmarkMode
}): ReactElement {
  const t = useT()
  return (
    <div {...stylex.props(styles.groups)}>
      {groups.map((group) => {
        const first = group.ranges[0]?.first ?? 0
        return (
          <section
            key={first}
            aria-labelledby={`skip-${String(first)}`}
          >
            <h3
              id={`skip-${String(first)}`}
              {...stylex.props(
                styles.saga,
                group.name === null && styles.fogged,
              )}
            >
              {group.name ?? t('filler.foggedArc')}
            </h3>
            <ol {...stylex.props(styles.ranges)}>
              {group.ranges.map((range) => {
                const count = range.last - range.first + 1

                return (
                  <li key={range.first}>
                    <a
                      href={`#ep-${String(range.first)}`}
                      onClick={follow}
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
          </section>
        )
      })}
    </div>
  )
}

const styles = stylex.create({
  groups: { gap: space.lg, display: 'grid' },
  // Pinned under nothing: the bar scrolls away, so the saga takes the top.
  saga: {
    margin: 0,
    paddingBlock: space.xs,
    backgroundColor: color.paper,
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    insetBlockStart: 0,
    letterSpacing: '-0.01em',
    overflowWrap: 'anywhere',
    position: 'sticky',
    zIndex: z.sticky,
  },
  fogged: { color: color.muted },
  ranges: {
    margin: 0,
    gap: space.xs,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 9.5rem), 1fr))',
    listStyleType: 'none',
    marginBlockStart: space.sm,
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
