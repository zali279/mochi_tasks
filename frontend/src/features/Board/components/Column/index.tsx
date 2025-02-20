import * as React from 'react';
import { useState } from 'react';
import { useDrop } from 'react-dnd';

import Card from './components/Card/index';
import Button from 'components/Button';
import Modal from 'components/Modal';

import './index.css'
import { Task, TaskStatus, ColumnType } from '@/types/task';

type BoardProps = {
  tasks: Task[];
  column: ColumnType,
  onTaskMove: (id: string, newStatus: TaskStatus) => void;
  onSaveTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
};

const Column: React.FC<BoardProps> = ({ tasks = [], column, onTaskMove, onSaveTask, onDeleteTask }) => {
  const [selectedTask, setSelectedTask] = useState<Task>({
    title: '',
    description: '',
    status: column.type
  });

  const [showTaskModel, setShowNewTaskModal] = useState(false);

  const [{ isOver }, drop] = useDrop({
    accept: ['todo', 'in-progress', 'done', 'blocked'],
    drop: (item: { id: string, status: string }) => {
      if (item.status !== column.type) {
        onTaskMove(item.id, column.type);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const openTaskModel = (): void => {
    setShowNewTaskModal(true)
  }

  return drop(
    <div className={`${column.type} column ${isOver ? "bg-light" : ""}`}>
      <h2>{column.title}</h2>
      {tasks.length > 0 && tasks.map(task =>
        <Card
          key={task.id}
          task={task}
          onClick={(task) => {
            setSelectedTask(task)
            openTaskModel()
          }}
          onDelete={onDeleteTask}
        />
      )}
      <Button 
        label='ADD TASK'
        onClick={() => {
          setSelectedTask({ title: '', description: '', status: column.type })
          openTaskModel()
        }}
      />
      {showTaskModel && (
        <Modal
          task={selectedTask}
          onSubmit={(data) => onSaveTask({ ...data, status: column.type })}
          onClose={() => setShowNewTaskModal(false)} />
      )}
    </div>
  );
};

export default Column;
