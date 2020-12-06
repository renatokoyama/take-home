import React, { useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Flex from 'src/components/Flex'
import Heading from 'src/components/Heading'
import TaskLane from 'src/components/TaskLane'
import { initialState, Task } from 'src/interfaces/task'
import { theme } from 'src/lib/theme'
import PageContainer from '../PageContainer'

const TaskBoard = () => {
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
    <PageContainer backgroundColor={theme.colors.greyscale[4]}>
      <Heading as='h2' color={theme.colors.white}>
        TASK MANAGEMENT BOARD
      </Heading>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex marginTop='10px'>
          <TaskLane stage={initialState.stages[0]} tasks={tasks} />
        </Flex>
      </DragDropContext>
    </PageContainer>
  )
}

export default TaskBoard
