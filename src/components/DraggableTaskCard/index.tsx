import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Task } from 'src/interfaces/task'
import { CardProps } from '../Card'
import TaskCard from '../TaskCard'

interface Props {
  task: Task
  index: number
}

export type DraggableTaskCardProps = Props & CardProps

const DraggableTaskCard = ({
  index,
  task,
  ...props
}: DraggableTaskCardProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <TaskCard
          ref={provided.innerRef}
          task={task}
          {...props}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  )
}

export default DraggableTaskCard
