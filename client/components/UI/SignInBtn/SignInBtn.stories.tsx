import type { Meta, StoryObj } from '@storybook/react'

import SignInBtn from './SignInBtn'

const meta: Meta<typeof SignInBtn> = {
  title: 'Components/SignInBtn',
  component: SignInBtn,
}

type Story = StoryObj<typeof SignInBtn>

export const MyPrimary: Story = {
  render: () => <SignInBtn />,
}
export default meta
