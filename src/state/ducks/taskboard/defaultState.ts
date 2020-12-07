import { TaskPriority } from 'src/interfaces/task'
import { TaskBoardState } from './types'

export const defaultState: TaskBoardState = {
  isEditing: false,
  tasks: [
    {
      id: '1',
      title: 'This is a Todo list whith items that can be marked off',
      priority: TaskPriority.LOW,
    },
    {
      id: '2',
      title: 'You can categorize each item with a Color (Red, Yellow, Green)',
      priority: TaskPriority.MEDIUM,
    },
    {
      id: '3',
      title: 'Hover an item to Edit the text',
      priority: TaskPriority.HIGH,
    },
    {
      id: '4',
      title: 'You can click and drag items up and down the list',
      priority: TaskPriority.HIGH,
    },
    {
      id: '5',
      title: 'As well as drag items from one column to the other',
      priority: TaskPriority.HIGH,
    },
    {
      id: '6',
      title: 'As well as rename the Columns',
      priority: TaskPriority.HIGH,
    },
  ],
  stages: [
    {
      id: 'lane-1',
      title: 'Column 1',
      taskIds: ['1', '2', '3'],
    },
    {
      id: 'lane-2',
      title: 'Column 2',
      taskIds: ['4', '5'],
    },
    {
      id: 'lane-3',
      title: 'Column 3',
      taskIds: ['6'],
    },
  ],
}
