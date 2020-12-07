import { defineState } from 'redux-localstore'
import { Task } from 'src/interfaces/task'
import { Action, PayloadAction, TypeConstant } from 'typesafe-actions'
import { v4 as uuidv4 } from 'uuid'
import { defaultState } from './defaultState'
import { TaskBoardActionTypes, TaskBoardState } from './types'

const initialState = defineState(defaultState)('taskboard')
initialState.isEditing = false
interface AddPayLoad {
  task: Task
  stageID: string
}

interface EditPayLoad {
  task: Task
}

export interface MovePayload {
  stageSourceId: string
  stageDestId: string
  sourceIndex: number
  destIndex: number
  taskId: string
}

interface Payload {
  edit: EditPayLoad
  add: AddPayLoad
  move: MovePayload
  isEditing: boolean
}

export const taskboardReducer = (
  state: TaskBoardState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, Payload>
): TaskBoardState => {
  switch (action.type) {
    case TaskBoardActionTypes.ADD_TASK: {
      const id = uuidv4()
      const newTask = { ...action.payload.add.task, id } as Task
      const { stages } = state
      const index = stages.findIndex((s) => s.id === action.payload.add.stageID)
      if (index >= 0) {
        stages[index].taskIds.push(id)
      }
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        stages,
      }
    }
    case TaskBoardActionTypes.IS_EDITING: {
      return {
        ...state,
        isEditing: action.payload.isEditing,
      }
    }
    case TaskBoardActionTypes.EDIT_TASK: {
      const { tasks } = state
      const index = tasks.findIndex((t) => t.id === action.payload.edit.task.id)
      if (index >= 0) {
        tasks[index] = action.payload.edit.task
      }
      return {
        ...state,
        tasks,
      }
    }
    case TaskBoardActionTypes.MOVE_TASK: {
      const { stages } = state
      const { move } = action.payload
      if (
        move.stageSourceId === move.stageDestId &&
        move.sourceIndex === move.destIndex
      ) {
        return state
      }

      const sourceStageIndex = stages.findIndex(
        (s) => s.id === move.stageSourceId
      )
      const destStageIndex =
        move.stageDestId === move.stageSourceId
          ? sourceStageIndex
          : stages.findIndex((s) => s.id === move.stageDestId)

      stages[sourceStageIndex].taskIds.splice(move.sourceIndex, 1)
      stages[destStageIndex].taskIds.splice(
        move.destIndex,
        0,
        action.payload.move.taskId
      )

      return {
        ...state,
        stages,
      }
    }
    default:
      return state
  }
}
