import * as stylex from '@stylexjs/stylex'
import { useMatch } from '@tanstack/react-router'
import {
  type ReactElement,
  type ReactNode,
  useEffect,
  useId,
  useSyncExternalStore,
} from 'react'

import { FormSlot } from '~/components/BookmarkDialog'
import { styles as dialogStyles } from '~/components/BookmarkDialog.styles'
import { introStyles as styles } from '~/components/IntroDialog.styles'
import { Button } from '~/components/ui/Button'
import { useModal } from '~/components/useModal'
import { useT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useBookmark, useThreshold } from '~/lib/progress/BookmarkContext'
import {
  dismissIntro,
  introOwed,
  introSubject,
  requestLeadPeek,
  subscribeIntro,
} from '~/lib/progress/intro'
import type { Gated } from '~/lib/progress/spoiler'

const STEPS: TranslationKey[] = ['intro.step1', 'intro.step2', 'intro.step3']

/**
 * The intro for a reader who opens a series page with no bookmark, most often
 * from a search result (#864). Not on the series landing, which is an intro of
 * its own; not during a trial; not to a crawler, whose bookmark is the
 * ceiling; once a bookmark has been seen in the session; and once per
 * browser session.
 *
 * The server never renders it: the flag lives in `sessionStorage`, so the
 * server snapshot says no and the dialog opens once the browser has read it.
 */
export function FirstVisitIntro(): ReactNode {
  const { bookmark } = useBookmark()
  // Once a bookmark has been seen, never again in this session: a reader
  // who forgets their bookmark or leaves a trial knows the site already, on
  // this page and after a reload. A trial always has a point, so a null
  // bookmark here also means no trial.
  useEffect(() => {
    if (bookmark !== null && introOwed()) {
      dismissIntro()
    }
  }, [bookmark])
  const onLanding = useMatch({ from: '/$series/$locale/', shouldThrow: false })
  const owed = useSyncExternalStore(subscribeIntro, introOwed, () => false)

  if (bookmark !== null || onLanding !== undefined || !owed) {
    return null
  }

  return <IntroDialog />
}

/**
 * What the site is, why the page is dark, and the bookmark form, in one
 * modal. However it closes, it stays closed for the session. "Show anyway"
 * also lifts the fog off the page's own record, through the lead veils.
 */
function IntroDialog(): ReactElement {
  const t = useT()
  const { dialogRef, close } = useModal()
  const titleId = useId()
  const contextId = useId()
  const stepsId = useId()
  const subject = useSyncExternalStore(subscribeIntro, introSubject, () => null)

  // The dialog itself takes the focus rather than the first unit, as the
  // bookmark dialog does: a reader who did not ask for it reads the title
  // first, and on a phone the sheet opens at its top instead of scrolled
  // down to the radio.
  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog === null) {
      return
    }
    dialog.focus()
    // The browser's own focus on opening has already scrolled the sheet.
    dialog.scrollTop = 0
  }, [dialogRef])

  return (
    <dialog
      // The context line first, when the page is about one record: it is
      // the reason the page is dark.
      aria-describedby={subject === null ? stepsId : `${contextId} ${stepsId}`}
      aria-labelledby={titleId}
      onClose={dismissIntro}
      ref={dialogRef}
      tabIndex={-1}
      {...stylex.props(dialogStyles.dialog, styles.dialog)}
    >
      <div {...stylex.props(dialogStyles.panel, styles.panel)}>
        <Explainer
          contextId={contextId}
          stepsId={stepsId}
          subject={subject}
          titleId={titleId}
        />
        <div {...stylex.props(styles.form)}>
          <FormSlot
            keepFocus
            onDone={close}
          />
          <Button
            onClick={() => {
              requestLeadPeek()
              close()
            }}
            sx={[dialogStyles.forget, styles.reveal]}
          >
            {t('veil.reveal')}
          </Button>
        </div>
        <Button
          aria-label={t('dialog.cancel')}
          onClick={close}
          sx={dialogStyles.close}
          variant="quiet"
        >
          <span aria-hidden="true">✕</span>
        </Button>
      </div>
    </dialog>
  )
}

/**
 * The title, the page's threshold when the page is about one record, and the
 * three steps.
 */
function Explainer({
  contextId,
  stepsId,
  subject,
  titleId,
}: {
  contextId: string
  stepsId: string
  subject: Gated | null
  titleId: string
}): ReactElement {
  const t = useT()
  const threshold = useThreshold()

  return (
    <div {...stylex.props(styles.explainer)}>
      <h2
        id={titleId}
        {...stylex.props(dialogStyles.title, styles.title)}
      >
        {t('hero.headline')}
      </h2>
      {subject === null ? null : (
        <p
          id={contextId}
          {...stylex.props(dialogStyles.lede)}
        >
          {threshold('intro.context', subject)}
        </p>
      )}
      <ol
        id={stepsId}
        {...stylex.props(styles.steps)}
      >
        {STEPS.map((step, index) => {
          return (
            <li
              key={step}
              {...stylex.props(styles.step)}
            >
              <span
                aria-hidden="true"
                {...stylex.props(styles.number)}
              >
                {index + 1}
              </span>
              <span>{t(step)}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
