import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Task, TaskPriority } from 'src/interfaces/task'
import Box from '../Box'
import TaskCard, { TaskCardProps } from './index'

const task: Task = {
  id: '1',
  title: 'This is a todo list with items that can be marked off',
  priority: TaskPriority.HIGH,
}

const Template: Story<TaskCardProps> = ({ ...args }) => {
  return (
    <Box marginBottom='100px'>
      <TaskCard {...args} task={task} />
    </Box>
  )
}

export default {
  title: 'Molecules/TaskCard',
  component: Template,
  args: {
    width: '300px',
  },
  argTypes: {
    bg: { control: 'color' },
    onSave: { action: 'saved' },
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
