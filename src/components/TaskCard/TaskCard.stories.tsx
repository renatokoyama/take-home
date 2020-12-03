import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Task, TaskPriority } from 'src/interfaces/task'
import TaskCard, { TaskCardProps } from './index'

const task: Task = {
  title: 'This is a todo list with items that can be marked off',
  priority: TaskPriority.HIGH,
}

const Template: Story<TaskCardProps> = ({ ...args }) => {
  return <TaskCard {...args} task={task} />
}

export default {
  title: 'Atoms/TaskCard',
  component: Template,
  args: {
    width: '300px',
  },
  argTypes: {
    bg: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      default: 'grey',
    },
  },
} as Meta

export const Default = Template.bind({})
Default.args = {}

export const ShowPriority = Template.bind({})
ShowPriority.args = {
  showPriority: true,
}
