import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { GoBack } from '../components/GoBack';
import './style.css';

const initialTasks = [
    {
        id: "001",
        text: "React.js"
    },
    {
        id: "002",
        text: "HTML/CSS"
    },
    {
        id: "003",
        text: "Figma"
    },
    {
        id: "004",
        text: "JavaScript"
    },
    {
        id: "005",
        text: "SQL"
    },
    {
        id: "006",
        text: "TypeScript"
    }
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const DragDrogApp = () => {

    const [tasks, setTasks] = useState(initialTasks);

    return (
        <div className='app'>
            <GoBack />

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
                    <h1>Drag and Drog</h1>
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