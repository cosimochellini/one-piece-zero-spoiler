import * as stylex from '@stylexjs/stylex'
import { createFileRoute, notFound, Outlet } from '@tanstack/react-router'

import { SiteFooter } from '~/components/SiteFooter'
import { SiteBar } from '~/components/SiteBar'
import { LocaleProvider } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import { color, font, rule, space, text, z } from '~/styles/tokens.stylex'

/**
 * The locale shell.
 *
 * Every page of the wiki sits under this route, so the language is settled
 * once, in the URL, before anything renders. `beforeLoad` rejects an
 * unrecognised prefix with a 404 rather than quietly redirecting to Italian:
 * `/fr` is a page that does not exist, and saying so is more honest than
 * serving a different language under the address the reader asked for.
 */
export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) throw notFound()

    return { locale: params.locale }
  },
  head: ({ params }) => {
    if (!isLocale(params.locale)) return {}

    const dictionary = getDictionary(params.locale)

    return {
      meta: [
        { title: translate(dictionary, 'site.title') },
        {
          name: 'description',
          content: translate(dictionary, 'site.description'),
        },
      ],
    }
  },
  component: LocaleLayout,
})

function LocaleLayout() {
  const { locale } = Route.useRouteContext()
  const dictionary = getDictionary(locale)

  return (
    <LocaleProvider locale={locale}>
      {/*
        Visually hidden until focused, which is the only way a keyboard reader
        gets past the masthead without tabbing through the language switch on
        every page.
      */}
      <a href="#content" {...stylex.props(styles.skip)}>
        {translate(dictionary, 'nav.skip')}
      </a>

      <div {...stylex.props(styles.shell)}>
        <SiteBar />
        <Outlet />
        <SiteFooter />
      </div>
    </LocaleProvider>
  )
}

const styles = stylex.create({
  shell: {
    display: 'grid',
    // One explicit column with a zero minimum. Left implicit, the column is
    // `auto`, whose minimum is the widest child's min-content, and a page
    // whose grid resolves `1fr` against indefinite space reports its
    // max-content as that minimum: at 375px the shell grew to 521px and the
    // root's `overflow-x: clip` hid the fact. With the minimum pinned to 0
    // the column is the viewport, and every page wraps inside it.
    gridTemplateColumns: 'minmax(0, 1fr)',
    // The footer is pushed to the bottom on a short page without a
    // `min-height: 100vh` hero, which is its own tell.
    gridTemplateRows: 'auto 1fr auto',
    marginInline: 'auto',
    maxWidth: '76rem',
    minHeight: '100dvh',
    width: '100%',
  },

  skip: {
    backgroundColor: color.paper,
    borderColor: color.ink,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    color: color.ink,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 700,
    insetBlockStart: space.xs,
    insetInlineStart: space.xs,
    outlineColor: color.focus,
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    paddingBlock: space.xs,
    paddingInline: space.sm,
    // Off-screen rather than `display: none`, so it stays focusable.
    position: 'fixed',
    transform: { default: 'translateY(-150%)', ':focus': 'none' },
    zIndex: z.skip,
  },
})
