import type { Meta, StoryObj } from '@storybook/react'

import AuthBtn from './AuthBtn'

const meta: Meta<typeof AuthBtn> = {
  title: 'Components/AuthBtn',
  component: AuthBtn,
}

type Story = StoryObj<typeof AuthBtn>

export const MyPrimary: Story = {
  render: () => <AuthBtn text={'Sign In'}></AuthBtn>,
}
export default meta
