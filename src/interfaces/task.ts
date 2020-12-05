export enum TaskPriority {
  HIGH,
  MEDIUM,
  LOW,
}

export interface Task {
  id: string
  title: string
  priority?: TaskPriority
}

export interface TaskStage {
  id: string
  title: string
  taskIds: string[]
}

interface Store {
  tasks: Map<string, Task>
  stages: TaskStage[]
}

export const initialState: Store = {
  tasks: new Map([
    [
      '1',
      {
        id: '1',
        title: 'Test 1',
        priority: TaskPriority.HIGH,
      },
    ],
    [
      '2',
      {
        id: '2',
        title: 'Test 2',
        priority: TaskPriority.HIGH,
      },
    ],
    [
      '3',
      {
        id: '3',
        title: 'Test 3',
        priority: TaskPriority.HIGH,
      },
    ],
  ]),
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
