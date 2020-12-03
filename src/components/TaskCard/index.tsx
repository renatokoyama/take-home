import React from 'react'
import Text from 'src/components/Text'
import { Task } from 'src/interfaces/task'
import Card, { CardProps } from '../Card'
import TaskPriorityMarker from '../TaskPriorityMarker'

interface Props {
  task: Task
  showPriority?: boolean
}

export type TaskCardProps = Props & CardProps

const TaskCard = ({ task, showPriority = false, ...props }: TaskCardProps) => {
  return (
    <Card {...props}>
      {showPriority && (
        <TaskPriorityMarker priority={task.priority} marginBottom='6px' />
      )}
      <Text>{task.title}</Text>
    </Card>
  )
}

export default TaskCard
