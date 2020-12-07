import { Task, TaskStage } from 'src/interfaces/task'

export interface TaskBoardState {
  tasks: Task[]
  stages: TaskStage[]
}

export const TaskBoardActionTypes = {
  ADD_TASK: '@taskboard/ADD_TASK',
  EDIT_TASK: '@taskboard/EDIT_TASK',
  MOVE_TASK: '@taskboard/MOVE_TASK',
}
