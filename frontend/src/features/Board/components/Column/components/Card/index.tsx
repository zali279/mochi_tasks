import * as React from 'react';
import { useDrag } from 'react-dnd'

import Button from 'components/Button'

import './index.css'
import { Task } from '@/types/task';

interface CardProps {
  task: Task;
  onClick: (Task) => void;
  onDelete: (Task) => void;
}

const Card: React.FC<CardProps> = ({ task, onClick, onDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: task.status,
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    onDelete(task.id)
  }

  return drag(
    <div
      className={`card-container ${task.status}-${task.id}`}
      onClick={() => onClick(task)}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <span>
        <h3>{task.title}</h3>
        <Button
          label='delete'
          icon="trash-bin"
          onClick={(e) => handleClick(e)}
        />
      </span>
      <p>{task.description}</p>
    </div>
  );
};

export default Card;
