import type { Meta, StoryObj } from '@storybook/react'

import AuthBtn from './AuthBtn'

const meta: Meta<typeof AuthBtn> = {
  title: 'Components/AuthBtn',
  component: AuthBtn,
}

type Story = StoryObj<typeof AuthBtn>

export const MyPrimary: Story = {
  render: () => (
    <AuthBtn
      text={'Sign In'}
      className={'bg-btn hover:bg-btnHover hover:sca w-fit rounded-lg p-2'}
    ></AuthBtn>
  ),
}
export default meta
