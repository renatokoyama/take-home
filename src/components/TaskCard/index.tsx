import React, { useState } from 'react'
import Text from 'src/components/Text'
import { Task } from 'src/interfaces/task'
import { theme } from 'src/lib/theme'
import styled from 'styled-components'
import Box from '../Box'
import Button from '../Button'
import Card, { CardProps } from '../Card'
import Input from '../Input'
import TaskPriorityMarker from '../TaskPriorityMarker'

interface Props {
  task: Task
  showPriority?: boolean
  onSave?: (task: Task) => void
}

const EditButton = styled(Button)`
  position: absolute;
  top: -4px;
  right: 0;
`

const Actions = styled(Box)`
  position: absolute;
  bottom: -50px;
  left: 0;
`

const ActionButton = styled(Button)`
  background-color: ${theme.colors.success[0]};
  color: ${theme.colors.white};
  border-radius: 3px;
  padding: 10px 32px;
`

export type TaskCardProps = Props & CardProps

const TaskCard = ({
  task,
  showPriority = false,
  onSave,
  ...props
}: TaskCardProps) => {
  const [focused, setFocused] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(task.title)
  return (
    <Card
      {...props}
      onMouseEnter={() => {
        setFocused(true)
      }}
      onMouseLeave={() => {
        setFocused(false)
      }}
      position='relative'
      zIndex={editMode ? 10 : 0}
    >
      {showPriority && (
        <TaskPriorityMarker priority={task.priority} marginBottom='6px' />
      )}
      {editMode ? (
        <Input
          as='textarea'
          defaultValue={task.title}
          height='400px'
          padding='20px'
          marginTop='8px'
          onTextChange={(newTitle) => {
            setTitle(newTitle)
          }}
        />
      ) : (
        <Text paddingRight='30px' position='relative'>
          {task.title}
          {focused && (
            <EditButton
              color={theme.colors.greyscale[4]}
              icon='pen'
              onClick={() => {
                setEditMode(true)
              }}
            />
          )}
        </Text>
      )}
      {editMode && (
        <Actions>
          <ActionButton
            onClick={() => {
              setEditMode(false)
              setFocused(false)
              task.title = title
              return onSave && onSave(task)
            }}
          >
            Save
          </ActionButton>

          <ActionButton
            marginLeft='20px'
            onClick={() => {
              setEditMode(false)
              setFocused(false)
            }}
          >
            Cancel
          </ActionButton>
        </Actions>
      )}
    </Card>
  )
}

export default TaskCard
