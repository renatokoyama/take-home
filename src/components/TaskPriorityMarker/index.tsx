import React from 'react'
import { TaskPriority } from 'src/interfaces/task'
import { theme } from 'src/lib/theme'
import styled, { css } from 'styled-components'
import Box, { BoxProps } from '../Box'

interface Props {
  priority?: TaskPriority
}

export type TaskPriorityMarkerProps = Props & BoxProps

const handleColorType = (priority?: TaskPriority): string => {
  switch (priority) {
    case TaskPriority.HIGH:
      return theme.colors.danger
    case TaskPriority.MEDIUM:
      return theme.colors.warning
    default:
      return theme.colors.success
  }
}

const Marker = styled(Box)<TaskPriorityMarkerProps>`
  ${({ priority }) => css`
    background-color: ${handleColorType(priority)};
  `}

  height: 8px;
  border-radius: 4px;
  width: 40px;
`

const TaskPriorityMarker = ({
  priority,
  ...props
}: TaskPriorityMarkerProps) => {
  return <Marker priority={priority} {...props} />
}

export default TaskPriorityMarker
