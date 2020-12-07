import { combineReducers } from 'redux'
import { TaskBoardState } from './taskboard/types'
import { taskboardReducer } from './taskboard/reducers'

export interface ApplicationState {
  taskboard: TaskBoardState
}
export const rootReducer = combineReducers<ApplicationState>({
  taskboard: taskboardReducer,
})
