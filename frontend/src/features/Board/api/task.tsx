import { Task, TaskStatus } from "@/types/task";

export const getTasks = (): Promise<Task[]> =>
  fetch('http://localhost:5000/tasks')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching tasks: ${response.status}`);
      }
      return response.json();
    })
    .then((response: { data: Task[] }) => response.data)

export const createOrUpdateTask = (task): Promise<Task> => {
  const url = task.id ? `http://localhost:5000/tasks/${task.id}` : 'http://localhost:5000/tasks';

  return fetch(url, {
    method: task.id ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
    .then(response => {
      if (!response.ok) {
        alert('Error saving task. Response with status ' + response.status);
        return null
      }

      return response.json();
    })
    .catch(err => console.error(err));
}

export const updateTaskStatus = (taskId: string, status: TaskStatus): Promise<Task> =>
  fetch(`http://localhost:5000/tasks/${taskId}/status/update/${status}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      if (!response.ok) {
        alert('Error updating task status. Response with status ' + response.status);
        return null
      }

      return response.json()
    })
    .catch(err => console.error(err));


export const deleteTask = (taskId: string): Promise<void> => 
  fetch(`http://localhost:5000/tasks/${taskId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        alert('Error deleting task. Response with status ' + response.status);
        return null
      }

      return response.json()
    })
    .catch(err => console.error(err));
