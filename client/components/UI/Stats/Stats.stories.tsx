import type { Meta, StoryObj } from '@storybook/react'

import StatItem from './Stats'

const meta: Meta<typeof StatItem> = {
  title: 'Design System/UI/Stats', // Title path for your Storybook UI
  component: StatItem, // The component we are writing the story for
}

type Story = StoryObj<typeof StatItem>

export const StatsBox: Story = {
  render: () => (
    <StatItem className="mx-auto max-w-lg" label={'followers'} value={'50'} />
  ),
}

export default meta
