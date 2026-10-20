import { createFileRoute } from '@tanstack/react-router'

import { PrivacyNotice } from '~/components/PrivacyNotice'
import { isLocale } from '~/i18n/locales'
import { describeNamedPage } from '~/routes/$locale/-head'

export const Route = createFileRoute('/$locale/privacy')({
  head: ({ match, params }) =>
    isLocale(params.locale) ?
      describeNamedPage({
        descriptionKey: 'privacy.description',
        kind: 'index',
        locale: params.locale,
        pathname: match.pathname,
        titleKey: 'privacy.title',
      })
    : {},
  component: PrivacyNotice,
})
