import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { CharacterCard } from '~/components/CharacterCard'
import { useT } from '~/i18n/LocaleContext'
import type { CharacterView } from '~/lib/view/records'
import { color, font, leading, space, text } from '~/styles/tokens.stylex'

/** The arc's leads the stories name most, most named first. */
export interface HomeCastProps {
  cast: CharacterView[]
}

/**
 * Every character here is one the server has already decided the reader has
 * reached, so no card on the home page is ever under fog and nothing is ever
 * lifted by hand. The card takes a peek all the same; this one is never called.
 */
// eslint-disable-next-line @typescript-eslint/require-await -- the promise is the card's contract; this one only ever rejects, and there is nothing to wait for on the way.
async function neverPeeked(): Promise<CharacterView> {
  throw new Error('Nothing on the home page is under fog')
}

/**
 * Who matters now: the arc's leads the stories name most, as the same crests
 * the characters page puts in evidence, most named first.
 */
export function HomeCast({ cast }: HomeCastProps): null | ReactElement {
  const t = useT()

  if (cast.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby="home-cast"
      {...stylex.props(styles.section)}
    >
      <h2
        id="home-cast"
        {...stylex.props(styles.heading)}
      >
        {t('home.cast')}
      </h2>
      <ul {...stylex.props(styles.grid)}>
        {cast.map((record) => {
          return (
            <CharacterCard
              key={record.id}
              morph="onClick"
              peek={neverPeeked}
              slot={{ open: true, record }}
            />
          )
        })}
      </ul>
    </section>
  )
}

const styles = stylex.create({
  section: { gap: space.lg, display: 'grid', minWidth: 0 },
  heading: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  // Six to a row on a wide screen, which is the most the section shows.
  grid: {
    margin: 0,
    padding: 0,
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 40rem)': 'repeat(3, minmax(0, 1fr))',
      '@media (min-width: 60rem)': 'repeat(6, minmax(0, 1fr))',
    },
    listStyleType: 'none',
    rowGap: space.lg,
  },
})
