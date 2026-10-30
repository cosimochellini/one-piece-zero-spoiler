import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useState } from 'react'

import { dialSees, dialStart } from '~/components/dial'
import { styles } from '~/components/Onboarding.styles'
import { OnboardingControls, OnboardingDial } from '~/components/OnboardingDial'
import { OnboardingWake } from '~/components/OnboardingWake'
import { Questions } from '~/components/Questions'
import { useSeriesT } from '~/i18n/LocaleContext'
import type { OnboardingView } from '~/lib/view/records'
import { settleStyles } from '~/styles/settle'

// The bands under the intro in DOM order, settling one step apart. The intro
// is there from the first frame.
const BAND = { controls: 0, wake: 1, faq: 2 } as const

/**
 * The landing page for a visitor with no bookmark (Hallmark macrostructure
 * 21, Component Playground).
 *
 * The page is one control and its live preview. A dial runs over East Blue;
 * moving it opens the arcs, the leads, the places and the ship the story has
 * reached by then, with the epithet, the crew and the bounty each one has at
 * that point, and leaves the rest under fog. That is the whole wiki in
 * miniature, and the page shows it rather than describing it. The point can
 * be saved as the bookmark from the dial, or an open card can be followed to
 * its page on a trial that ends with the session.
 */
export function OnboardingLanding(view: OnboardingView): ReactElement {
  const t = useSeriesT()
  const [point, setPoint] = useState(() => dialStart(view.start))
  const arc = view.arcs.findLast((entry) => dialSees(point, entry))?.name

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <div {...stylex.props(styles.intro)}>
        <h1 {...stylex.props(styles.headline)}>{t('hero.headline')}</h1>
        <p {...stylex.props(styles.lede)}>{t('onboarding.lede')}</p>
      </div>

      <OnboardingDial
        arc={arc}
        onPoint={setPoint}
        point={point}
      />

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.controls))}>
        <OnboardingControls
          chapterAt={view.chapterAt}
          onPoint={setPoint}
          point={point}
        />
      </div>

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.wake))}>
        <OnboardingWake
          point={point}
          view={view}
        />
      </div>

      <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.faq))}>
        <Questions />
      </div>
    </main>
  )
}
