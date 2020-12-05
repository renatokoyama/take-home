import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { initialState, Task } from 'src/interfaces/task'
import Box from '../Box'
import TaskLane, { TaskLaneProps } from './index'

const Template: Story<TaskLaneProps> = ({ ...args }) => {
  const [tasks, setTasks] = useState<Task[]>(
    Array.from(initialState.tasks).map((t) => t[1])
  )
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    const task = tasks.find((t) => t.id === draggableId)
    if (task) {
      const newTasks = Array.from(tasks)
      newTasks.splice(source.index, 1)
      newTasks.splice(destination.index, 0, task)
      setTasks(newTasks)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box marginBottom='100px' width='300px'>
        <TaskLane {...args} stage={initialState.stages[0]} tasks={tasks} />
      </Box>
    </DragDropContext>
  )
}

export default {
  title: 'Molecules/TaskLane',
  component: Template,
  args: {
    width: '300px',
  },
  parameters: {
    backgrounds: {
      default: 'grey',
    },
  },
} as Meta

export const Default = Template.bind({})
Default.args = {}
