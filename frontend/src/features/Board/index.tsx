import * as React from 'react';
import { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Task, TaskStatus, ColumnType } from '@/types/task';
import Column from './components/Column';
import {
  getTasks,
  createOrUpdateTask,
  updateTaskStatus,
  deleteTask
} from './api/task';

import './index.css'

const AVAILABLE_COLUMNS: ColumnType[] = [
  { type: "todo", title: "To-Do" },
  { type: "in-progress", title: "In Progress" },
  { type: "blocked", title: "Blocked" },
  { type: "done", title: "Done" },
];

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [shouldFetchTasks, setShouldFetchTasks] = useState<boolean>(true);

  const onMoveTask = (taskId: string, newStatus: TaskStatus): void => {
    updateTaskStatus(taskId, newStatus)
      .then(() => setShouldFetchTasks(true))
  };

  const onSaveTask = (task: Task): void => {
    createOrUpdateTask(task)
      .then(() => setShouldFetchTasks(true))
  }

  const onDeleteTask = (taskId: string): void => {
    deleteTask(taskId)
      .then(() => setShouldFetchTasks(true))
  }

  useEffect(() => {
    if (shouldFetchTasks) {
      getTasks()
        .then(data => {
          setTasks(data); 
          setShouldFetchTasks(false);
        })
        .catch(err => {
          console.error('Failed to fetch tasks:', err);
          setShouldFetchTasks(false); 
        });
    }
  }, [shouldFetchTasks]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='board-container'>
        {AVAILABLE_COLUMNS.map(column => (
          <Column
            key={column.type}
            tasks={tasks.filter(t => t.status === column.type)}
            column={column}
            onTaskMove={onMoveTask}
            onSaveTask={onSaveTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default Board;
