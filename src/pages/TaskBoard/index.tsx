import React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import DarkOverlay from 'src/components/DarkOverlay'
import Flex from 'src/components/Flex'
import Heading from 'src/components/Heading'
import TaskLane from 'src/components/TaskLane'
import { Task, TaskStage } from 'src/interfaces/task'
import { theme } from 'src/lib/theme'
import { ApplicationState } from 'src/state/ducks'
import { moveTask, addTask, editStage } from 'src/state/ducks/taskboard/actions'
import PageContainer from '../PageContainer'

const TaskBoard = () => {
  const dispatch = useDispatch()

  const state = useSelector(({ taskboard }: ApplicationState) => ({
    stages: taskboard.stages,
    tasks: taskboard.tasks,
    isEditing: taskboard.isEditing,
  }))

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }
    dispatch(
      moveTask({
        stageSourceId: result.source.droppableId,
        stageDestId: result.destination.droppableId,
        sourceIndex: result.source.index,
        destIndex: result.destination.index,
        taskId: result.draggableId,
      })
    )
  }

  const onNewTaskAdded = (stageId: string, task: Task) => {
    dispatch(addTask(stageId, task))
  }

  const onEditStage = (stage: TaskStage) => {
    dispatch(editStage(stage))
  }

  return (
    <PageContainer backgroundColor={theme.colors.greyscale[4]}>
      {state.isEditing && <DarkOverlay />}
      <Heading as='h2' color={theme.colors.white}>
        TASK MANAGEMENT BOARD
      </Heading>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex marginTop='12px'>
          {state.stages.map((stage, index) => {
            const stageTasks = stage.taskIds.map(
              (id) => state.tasks.find((task) => task.id === id) as Task
            )
            return (
              <TaskLane
                key={stage.id}
                stage={stage}
                tasks={stageTasks}
                marginRight='16px'
                showPriority={index === 0}
                onNewTaskAdded={onNewTaskAdded}
                onSave={onEditStage}
              />
            )
          })}
        </Flex>
      </DragDropContext>
    </PageContainer>
  )
}

export default TaskBoard
