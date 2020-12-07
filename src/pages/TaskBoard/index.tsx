import React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import Flex from 'src/components/Flex'
import Heading from 'src/components/Heading'
import TaskLane from 'src/components/TaskLane'
import { Task } from 'src/interfaces/task'
import { theme } from 'src/lib/theme'
import { ApplicationState } from 'src/state/ducks'
import PageContainer from '../PageContainer'

const TaskBoard = () => {
  const state = useSelector(({ taskboard }: ApplicationState) => ({
    stages: taskboard.stages,
    tasks: taskboard.tasks,
  }))

  const onDragEnd = (result: DropResult) => {
    console.log(result)
  }

  return (
    <PageContainer backgroundColor={theme.colors.greyscale[4]}>
      <Heading as='h2' color={theme.colors.white}>
        TASK MANAGEMENT BOARD
      </Heading>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex marginTop='12px'>
          {state.stages.map((stage) => {
            const stageTasks = stage.taskIds.map(
              (id) => state.tasks.find((task) => task.id === id) as Task
            )
            return (
              <TaskLane
                key={stage.id}
                stage={stage}
                tasks={stageTasks}
                marginRight='16px'
              />
            )
          })}
        </Flex>
      </DragDropContext>
    </PageContainer>
  )
}

export default TaskBoard
