import { Task, TaskStage } from 'src/interfaces/task'
import { action } from 'typesafe-actions'
import { MovePayload } from './reducers'
import { TaskBoardActionTypes } from './types'

export const addTask = (stageID: string, task: Task) =>
  action(TaskBoardActionTypes.ADD_TASK, { add: { task, stageID } })

export const editTask = (task: Task) =>
  action(TaskBoardActionTypes.EDIT_TASK, { edit: { task } })

export const moveTask = (move: MovePayload) =>
  action(TaskBoardActionTypes.MOVE_TASK, { move })

export const editStage = (stage: TaskStage) =>
  action(TaskBoardActionTypes.EDIT_STAGE, { edit: { stage } })

export const isEditingTask = (isEditing: boolean) =>
  action(TaskBoardActionTypes.IS_EDITING, { isEditing })
