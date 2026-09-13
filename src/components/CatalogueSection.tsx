import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { styles } from '~/components/CharacterGrid.styles'

/** One labelled band of the signal book. */
export type CatalogueSectionProps = {
  readonly children: ReactNode
  /** The id the section is labelled by, put on the heading. */
  readonly headingId: string
  readonly lede: string
  readonly title: string
}

/**
 * A band of the signal book: a heading, the sentence under it, and whatever
 * the band holds.
 *
 * The featured crests and the shelved cast are two bands of one page and have
 * to read as siblings; written out separately they drifted apart by a heading
 * level once already.
 */
export function CatalogueSection({
  headingId,
  title,
  lede,
  children,
}: CatalogueSectionProps): ReactElement {
  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.part)}
    >
      <div {...stylex.props(styles.partHead)}>
        <h2
          id={headingId}
          {...stylex.props(styles.partTitle)}
        >
          {title}
        </h2>
        <p {...stylex.props(styles.partLede)}>{lede}</p>
      </div>

      {children}
    </section>
  )
}
