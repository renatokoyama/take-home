import React, { forwardRef, useState } from 'react'
import Text from 'src/components/Text'
import { Task } from 'src/interfaces/task'
import { theme } from 'src/lib/theme'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { editTask } from 'src/state/ducks/taskboard/actions'
import Box from '../Box'
import Button from '../Button'
import Card, { CardProps } from '../Card'
import Input from '../Input'
import TaskPriorityMarker from '../TaskPriorityMarker'

interface Props {
  task?: Task
  showPriority?: boolean
  onSave?: (task: Task) => void
  onCancel?: () => void
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

const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(
  ({ task, showPriority = false, onSave, onCancel, ...props }, ref) => {
    const dispatch = useDispatch()
    const dispatchEdit = (editedTask: Task) => {
      dispatch(editTask(editedTask))
    }
    const [showEditButton, setShowEditButton] = useState(false)
    const [editMode, setEditMode] = useState(!task)
    const [title, setTitle] = useState(task?.title)
    const closeActions = () => {
      setEditMode(false)
      setShowEditButton(false)
    }
    return (
      <Card
        ref={ref}
        {...props}
        onMouseEnter={() => {
          setShowEditButton(true)
        }}
        onMouseLeave={() => {
          setShowEditButton(false)
        }}
        position='relative'
        zIndex={editMode ? 10 : 0}
      >
        {showPriority && (
          <TaskPriorityMarker priority={task?.priority} marginBottom='6px' />
        )}
        {editMode ? (
          <Input
            as='textarea'
            defaultValue={task?.title}
            height='400px'
            padding='20px'
            marginTop='8px'
            onTextChange={(newTitle) => {
              setTitle(newTitle)
            }}
          />
        ) : (
          <Box position='relative'>
            <Text
              paddingRight='30px'
              position='relative'
              dangerouslySetInnerHTML={{
                __html: task?.title.replace(/\r\n|\r|\n/g, '<br />') || '',
              }}
            />

            {showEditButton && (
              <EditButton
                color={theme.colors.greyscale[4]}
                icon='pen'
                onClick={() => {
                  setEditMode(true)
                }}
              />
            )}
          </Box>
        )}
        {editMode && (
          <Actions>
            <ActionButton
              onClick={() => {
                closeActions()
                const editedTask = { ...(task as Task), title: title || '' }
                dispatchEdit(editedTask)
                return onSave && onSave(editedTask)
              }}
            >
              Save
            </ActionButton>

            <ActionButton
              marginLeft='20px'
              onClick={() => {
                closeActions()
                return onCancel && onCancel()
              }}
            >
              Cancel
            </ActionButton>
          </Actions>
        )}
      </Card>
    )
  }
)

export default TaskCard
