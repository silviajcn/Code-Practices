import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { initialTasks } from './tasks';
import './style.css';

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const DragDropApp = () => {

    const [tasks, setTasks] = useState(initialTasks);

    return (
        <div className='app'>

            <DragDropContext
                onDragEnd={(result) => {
                    const { source, destination } = result;
                    if (!destination) {
                        return;
                    }
                    
                    if (
                    source.index === destination.index &&
                    source.droppableId === destination.droppableId
                    ) {
                        return;
                    }

                    setTasks((prevTasks) =>
                    reorder(prevTasks, source.index, destination.index)
                    );
                }}
            >
                <header>
                    <h1>Drag and Drop</h1>
                </header>

                <Droppable
                    droppableId='tasks'
                    // Cambiar a direccion horizontal:
                    // direction='horizontal'
                >
                    {(droppableProvided) =>
                        <ul
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                            className='task-container'
                        >
                            {tasks.map((task, index) =>
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(draggableProvided) =>
                                        <li
                                            {...draggableProvided.draggableProps}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            className='task-item'
                                        >
                                            {task.text}
                                        </li>
                                    }
                                </Draggable>
                            )}
                            {droppableProvided.placeholder}
                        </ul>
                    }
                </Droppable>
            </DragDropContext>
        </div>
    )
};