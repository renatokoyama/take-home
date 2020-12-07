import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Task, TaskStage } from 'src/interfaces/task'
import { theme } from 'src/lib/theme'
import styled from 'styled-components'
import Button from '../Button'
import DraggableTaskCard from '../DraggableTaskCard'
import Flex, { FlexProps } from '../Flex'
import Heading from '../Heading'
import TaskCard from '../TaskCard'

interface Props {
  stage: TaskStage
  tasks?: Task[]
  onNewTaskAdded?: (stageId: string, task: Task) => void
}
const TaskList = styled.div``
export type TaskLaneProps = FlexProps & Props

export default function TaskLane({
  stage,
  tasks,
  onNewTaskAdded,
  ...props
}: TaskLaneProps) {
  const [addingNew, setAddingNew] = useState(false)
  const onAddClicked = () => {
    setAddingNew(true)
  }
  return (
    <Flex
      backgroundColor={theme.colors.greyscale[7]}
      padding='10px'
      flexDirection='column'
      borderRadius='4px'
      flex={1}
      height='fit-content'
      {...props}
    >
      <Heading as='h5' fontWeight={600}>
        {stage.title}
      </Heading>
      <Droppable droppableId={stage.id}>
        {(provided) => {
          return (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {tasks?.map((task, index) => (
                <DraggableTaskCard
                  key={`task_${task.id}`}
                  task={task}
                  index={index}
                  marginTop='12px'
                />
              ))}
              {provided.placeholder}
            </TaskList>
          )
        }}
      </Droppable>
      <Button
        padding='0'
        marginTop='16px'
        marginLeft='8px'
        textAlign='left'
        icon='plus'
        color='grey'
        onClick={onAddClicked}
      >
        Add another Card
      </Button>
      {addingNew && (
        <TaskCard
          marginTop='-14px'
          onSave={(task) => {
            setAddingNew(false)
            return onNewTaskAdded && onNewTaskAdded(stage.id, task)
          }}
          onCancel={() => {
            setAddingNew(false)
          }}
        />
      )}
    </Flex>
  )
}
