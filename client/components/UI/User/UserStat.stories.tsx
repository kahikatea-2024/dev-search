import type { Meta, StoryObj } from '@storybook/react'

import UserStat from './UserStat'

const meta: Meta<typeof UserStat> = {
  title: 'Components/UserStat',
  component: UserStat,
}

type Story = StoryObj<typeof UserStat>

export const MyPrimary: Story = {
  render: () => (
    <div className="flex justify-center p-4">
      <UserStat title={'Followers'} stat={'23'}></UserStat>,
    </div>
  ),
}
export default meta
