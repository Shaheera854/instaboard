import TaskCard from './TaskCard';
import { Droppable } from 'react-beautiful-dnd';

export default function Column({ column, tasks }) {
  return (
    <div className="bg-gray-100 p-4 rounded w-80 h-full">
      <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`p-2 rounded min-h-[100px] transition-colors ${
              snapshot.isDraggingOver ? 'bg-blue-100' : 'bg-white'
            }`}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
