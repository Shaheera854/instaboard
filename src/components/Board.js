import Column from './Column';
import { mockData } from '../data/mockData';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Board() {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const end = data.columns[destination.droppableId];

    if (start === end) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
    } else {
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);

      const endTaskIds = Array.from(end.taskIds);
      endTaskIds.splice(destination.index, 0, draggableId);

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [start.id]: {
            ...start,
            taskIds: startTaskIds,
          },
          [end.id]: {
            ...end,
            taskIds: endTaskIds,
          },
        },
      };

      setData(newState);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 p-6 overflow-x-auto">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return (
            <Column key={column.id} column={column} tasks={tasks} />
          );
        })}
      </div>
    </DragDropContext>
  );
}
