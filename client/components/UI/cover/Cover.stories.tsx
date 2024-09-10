import type { Meta, StoryObj } from '@storybook/react'

import Cover from './Cover'

const meta: Meta<typeof Cover> = {
  title: 'Components/Cover',
  component: Cover,
}

type Story = StoryObj<typeof Cover>

export const MyPrimary: Story = {
  render: () => <Cover />,
}
export default meta
