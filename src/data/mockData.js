export const mockData = {
  columns: {
    todo: {
      id: 'todo',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    inProgress: {
      id: 'inProgress',
      title: 'In Progress',
      taskIds: [],
    },
    done: {
      id: 'done',
      title: 'Done',
      taskIds: [],
    },
  },
  tasks: {
    'task-1': { id: 'task-1', content: 'Build Board UI' },
    'task-2': { id: 'task-2', content: 'Add drag-and-drop' },
  },
  columnOrder: ['todo', 'inProgress', 'done'],
};
