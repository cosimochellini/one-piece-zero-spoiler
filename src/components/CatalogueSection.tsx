import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { styles } from '~/components/CharacterGrid.styles'
import { stickyStyles } from '~/styles/sticky'

/** One labelled band of the signal book. */
export interface CatalogueSectionProps {
  children: ReactNode
  /** The id the section is labelled by, put on the heading. */
  headingId: string
  lede: string
  /** Pins the heading and its sentence under the control bar as it scrolls. */
  sticky?: boolean
  title: string
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
  sticky = false,
  children,
}: CatalogueSectionProps): ReactElement {
  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.part)}
    >
      <div
        {...stylex.props(
          styles.partHead,
          sticky && [stickyStyles.bar, stickyStyles.underBar],
        )}
      >
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
