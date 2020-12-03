import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TaskPriority } from 'src/interfaces/task'
import TaskPriorityMarker, { TaskPriorityMarkerProps } from './index'

const Template: Story<TaskPriorityMarkerProps> = ({ ...args }) => {
  return <TaskPriorityMarker {...args} />
}

export default {
  title: 'Atoms/TaskPriorityMarker',
  component: Template,
  args: {
    width: '300px',
  },
  argTypes: {
    bg: { control: 'color' },
  },
} as Meta

export const PriorityHigh = Template.bind({})
PriorityHigh.args = {
  priority: TaskPriority.HIGH,
}

export const PriorityMedium = Template.bind({})
PriorityMedium.args = {
  priority: TaskPriority.MEDIUM,
}

export const PriorityLow = Template.bind({})
PriorityLow.args = {
  priority: TaskPriority.LOW,
}
