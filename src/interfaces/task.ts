export enum TaskPriority {
  HIGH,
  MEDIUM,
  LOW,
}

export interface Task {
  title: string
  priority?: TaskPriority
}
