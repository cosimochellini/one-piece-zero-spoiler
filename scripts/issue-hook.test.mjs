// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { labelsOf, problems } from './issue-hook.mjs'

const FULL = ['type:bug', 'area:ui', 'status:ready', 'priority:p2', 'size:s']

describe('the gh issue create hook', () => {
  it('reads repeated, comma-separated and quoted labels', () => {
    expect(
      labelsOf(
        `gh issue create -t x -l type:bug,area:ui --label "status:ready" --label='priority:p2' -l size:s`,
      ),
    ).toStrictEqual(FULL)
  })

  it('skips the labels of a command before the create', () => {
    expect(
      labelsOf('gh issue list -l type:bug && gh issue create -l area:ui'),
    ).toStrictEqual(['area:ui'])
  })

  it('accepts one label per group', () => {
    expect(problems(FULL, '')).toStrictEqual([])
  })

  it('names missing, doubled and unknown labels', () => {
    expect(
      problems(['type:bug', 'type:docs', 'area:nowhere', 'size:s'], ''),
    ).toStrictEqual([
      'unknown label "area:nowhere"',
      'more than one type: label',
      'no status: label',
      'no priority: label',
    ])
  })

  it('lets an epic go without a size', () => {
    expect(
      problems(['type:epic', 'area:art', 'status:ready', 'priority:p2'], ''),
    ).toStrictEqual([])
  })

  it('asks a blocked issue for its Unblocks at line', () => {
    const blocked = FULL.with(2, 'status:blocked')
    expect(problems(blocked, 'Waits.')).toHaveLength(1)
    expect(problems(blocked, 'Waits.\nUnblocks at: ch. 1178\n')).toStrictEqual(
      [],
    )
  })
})
