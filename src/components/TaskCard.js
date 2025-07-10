import { Draggable } from 'react-beautiful-dnd';

export default function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`bg-white p-3 rounded shadow mb-3 ${
            snapshot.isDragging ? 'bg-green-100' : ''
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
}
