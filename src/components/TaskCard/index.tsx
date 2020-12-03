import React from 'react'
import { Task } from 'src/interfaces/task'
import Text from 'src/components/Text'
import Card, { CardProps } from '../Card'

interface Props {
  task: Task
  showPriority?: boolean
}

export type TaskCardProps = Props & CardProps

const TaskCard = ({ task, showPriority = false, ...props }: TaskCardProps) => {
  return (
    <Card {...props}>
      {showPriority && <Text>{task.priority?.toString()}</Text>}
      <Text>{task.title}</Text>
    </Card>
  )
}

export default TaskCard
