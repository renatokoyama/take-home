import React, { useEffect, useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { Task, TaskStage } from 'src/interfaces/task'
import { theme } from 'src/lib/theme'
import { isEditingTask } from 'src/state/ducks/taskboard/actions'
import styled from 'styled-components'
import Box from '../Box'
import Button from '../Button'
import DraggableTaskCard from '../DraggableTaskCard'
import Flex, { FlexProps } from '../Flex'
import Heading from '../Heading'
import Input from '../Input'
import TaskCard from '../TaskCard'

const EditTitleButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
`
const EditTitleContainer = styled(Box)`
  position: relative;

  .edit {
    display: none;
  }
  :hover {
    .edit {
      display: block;
    }
  }
`

interface Props {
  stage: TaskStage
  tasks?: Task[]
  onSave?: (stage: TaskStage) => void
  showPriority?: boolean
  onNewTaskAdded?: (stageId: string, task: Task) => void
}
const TaskList = styled.div``
export type TaskLaneProps = FlexProps & Props

export default function TaskLane({
  stage,
  tasks,
  showPriority,
  onNewTaskAdded,
  onSave,
  ...props
}: TaskLaneProps) {
  const [addingNewTask, setAddingNewTask] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(stage.title)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(isEditingTask(addingNewTask))
  }, [addingNewTask])

  const onAddClicked = () => {
    setAddingNewTask(true)
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
      {editMode ? (
        <Box position='relative'>
          <Input
            defaultValue={stage.title}
            height='20px'
            padding='0 20px'
            onTextChange={(newTitle) => {
              setTitle(newTitle)
            }}
          />
          <Flex
            position='absolute'
            right='0'
            top='0'
            height='100%'
            alignItems='center'
            justifyContent='center'
          >
            <Button
              icon='times'
              color={theme.colors.danger}
              iconSize='2x'
              onClick={() => {
                setEditMode(false)
              }}
            />
            <Button
              icon='check-circle'
              color={theme.colors.success[0]}
              iconSize='2x'
              onClick={() => {
                setEditMode(false)
                const editedStage = { ...stage, title: title || '' }
                return onSave && onSave(editedStage)
              }}
            />
          </Flex>
        </Box>
      ) : (
        <EditTitleContainer>
          <Heading as='h5' fontWeight={600}>
            {stage.title}
          </Heading>
          <EditTitleButton
            className='edit'
            color={theme.colors.greyscale[4]}
            icon='pen'
            onClick={() => {
              setEditMode(true)
            }}
          />
        </EditTitleContainer>
      )}
      <Droppable droppableId={stage.id}>
        {(provided) => {
          return (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {tasks?.map((task, index) => (
                <DraggableTaskCard
                  key={`task_${task.id}`}
                  task={task}
                  showPriority={showPriority}
                  index={index}
                  marginTop='12px'
                />
              ))}
              {provided.placeholder}
              {(!tasks || !tasks.length) && (
                <Heading as='h5' paddingY='16px'>
                  No tasks
                </Heading>
              )}
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
      {addingNewTask && (
        <TaskCard
          marginTop='-14px'
          onSave={(task) => {
            setAddingNewTask(false)
            return onNewTaskAdded && onNewTaskAdded(stage.id, task)
          }}
          onCancel={() => {
            setAddingNewTask(false)
          }}
        />
      )}
    </Flex>
  )
}
