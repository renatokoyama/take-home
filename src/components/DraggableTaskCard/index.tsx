import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Task } from 'src/interfaces/task'
import { CardProps } from '../Card'
import TaskCard from '../TaskCard'

interface Props {
  task: Task
  showPriority?: boolean
  index: number
}

export type DraggableTaskCardProps = Props & CardProps

const DraggableTaskCard = ({
  index,
  task,
  showPriority,
  ...props
}: DraggableTaskCardProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <TaskCard
          ref={provided.innerRef}
          task={task}
          showPriority={showPriority}
          {...props}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  )
}

export default DraggableTaskCard
