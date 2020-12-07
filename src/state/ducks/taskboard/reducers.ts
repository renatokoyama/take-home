import { TypeConstant, PayloadAction, Action } from 'typesafe-actions'
import { defineState } from 'redux-localstore'
import { v4 as uuidv4 } from 'uuid'
import { Task, TaskPriority } from 'src/interfaces/task'
import { TaskBoardActionTypes, TaskBoardState } from './types'

export const defaultState: TaskBoardState = {
  tasks: [
    {
      id: '1',
      title: 'Test 1',
      priority: TaskPriority.HIGH,
    },
    {
      id: '2',
      title: 'Test 2',
      priority: TaskPriority.HIGH,
    },
    {
      id: '3',
      title: 'Test 3',
      priority: TaskPriority.HIGH,
    },
  ],
  stages: [
    {
      id: 'lane-1',
      title: 'Todo',
      taskIds: ['1'],
    },
    {
      id: 'lane-2',
      title: 'Doing',
      taskIds: ['2'],
    },
    {
      id: 'lane-3',
      title: 'Finished',
      taskIds: ['3'],
    },
  ],
}

const initialState = defineState(defaultState)('taskboard')

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
