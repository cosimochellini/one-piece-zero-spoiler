import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ChoiceGroup, type ChoiceGroupProps } from './ChoiceGroup'

type Kind = 'all' | 'logia' | 'zoan'

const CHOICES: ChoiceGroupProps<Kind>['choices'] = [
  { count: 5, label: 'All', value: 'all' },
  { count: 3, label: 'Zoan', value: 'zoan' },
  { count: 0, disabled: true, label: 'Logia', value: 'logia' },
]

describe('ChoiceGroup', () => {
  it('is a named radio group, the picked option checked', () => {
    render(
      <ChoiceGroup
        choices={CHOICES}
        legend="Fruit type"
        look="chips"
        name="kind"
        onChoose={vi.fn<(value: Kind) => void>()}
        value="zoan"
      />,
    )

    const group = screen.getByRole('group', { name: 'Fruit type' })

    expect(group.tagName).toBe('FIELDSET')
    expect(screen.getByRole('radio', { name: 'Zoan 3' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'All 5' })).not.toBeChecked()
    expect(screen.getByRole('radio', { name: 'Logia 0' })).toBeDisabled()
  })

  it('picks with a click and with the arrow keys, and skips a disabled option', async () => {
    const user = userEvent.setup()
    const onChoose = vi.fn<(value: Kind) => void>()
    render(
      <ChoiceGroup
        choices={CHOICES}
        legend="Fruit type"
        look="segments"
        name="kind"
        onChoose={onChoose}
        value="all"
      />,
    )

    await user.tab()

    expect(screen.getByRole('radio', { name: 'All 5' })).toHaveFocus()

    await user.keyboard('{ArrowRight}')

    expect(onChoose).toHaveBeenLastCalledWith('zoan')

    await user.click(screen.getByRole('radio', { name: 'Zoan 3' }))

    expect(onChoose).toHaveBeenLastCalledWith('zoan')

    await user.click(screen.getByRole('radio', { name: 'Logia 0' }))

    expect(onChoose).toHaveBeenCalledTimes(2)
  })
})
