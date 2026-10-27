import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ep, renderWithProviders } from '~/test/providers'

import { ReportLink } from './ReportLink'

const PAGE = '/one-piece/it/characters/zoro'

function reportFields(): URLSearchParams {
  const href = screen
    .getByRole('link', { name: 'Segnalalo su GitHub' })
    .getAttribute('href')
  const url = new URL(href ?? '')

  expect(`${url.origin}${url.pathname}`).toBe(
    'https://github.com/cosimochellini/zero-spoiler/issues/new',
  )

  return url.searchParams
}

describe('ReportLink', () => {
  it('fills in the page and the bookmark, and leaves the title to the reader', () => {
    renderWithProviders(<ReportLink />, {
      locale: 'it',
      path: PAGE,
      bookmark: ep(650),
    })
    const fields = reportFields()

    expect(screen.getByText(/Qualcosa non torna/u)).toBeInTheDocument()
    expect(fields.get('template')).toBe('content.yml')
    expect(fields.get('entry')).toBe(`https://zerospoiler.app${PAGE}`)
    expect(fields.get('bookmark')).toBe('EP 650')
    expect(fields.has('title')).toBe(false)
  })

  it('sends no bookmark when none is set', () => {
    renderWithProviders(<ReportLink />, { locale: 'it', path: PAGE })

    expect(reportFields().has('bookmark')).toBe(false)
  })
})
