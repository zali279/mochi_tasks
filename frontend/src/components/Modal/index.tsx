import * as React from 'react';

import { Task } from '@/types/task';

import Button from 'components/Button'

import './index.css'

interface ModalProps {
  task: Task;
  onClose: () => void;
  onSubmit: (task: Task) => void;
}

const Modal: React.FC<ModalProps> = ({ task, onClose, onSubmit }) => {
  const [value, setValue] = React.useState(task);

  const [showAlertMessage, setShowAlertMessage] = React.useState(false);

  const submitTask = (task: Task): void => {
    if (task.title && task.description) {
      onSubmit(task);
      onClose();
    } else {
      setShowAlertMessage(true)
    }
  }

  const actionType = task.id ? 'edit' : 'new';

  return (
    <div className='modal-container'>
      <h2>{actionType === 'new' ? 'New Task' : 'Edit Task'}</h2>
      <div className='modal-content'>
        <h3>Title:</h3>
        <input
          defaultValue={value.title}
          onChange={(e) => setValue({ ...value, title: e.target.value })}
          type="text"
          placeholder="Task title" />
        <h3>Description:</h3>
        <input
          defaultValue={value.description}
          onChange={(e) => setValue({ ...value, description: e.target.value })}
          type="text"
          placeholder="Task description" />
        {showAlertMessage && <p className='alert-message'>Please fill in all the fields!</p>}
        <div className="buttons">
          <Button
            label={actionType === 'new' ? 'Create' : 'Update'}
            onClick={() => submitTask(value)}
          />
          <Button label='Cancel' onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
